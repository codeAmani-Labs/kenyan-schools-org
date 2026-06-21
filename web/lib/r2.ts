import { S3Client, PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { env } from './env';

// Cloudflare R2 configuration (S3 compatible) - Hazina secure env loading
const R2_ACCOUNT_ID = env.CLOUDFLARE_R2_ACCOUNT_ID;
const R2_ACCESS_KEY_ID = env.CLOUDFLARE_R2_ACCESS_KEY_ID;
const R2_SECRET_ACCESS_KEY = env.CLOUDFLARE_R2_SECRET_ACCESS_KEY;
const R2_BUCKET = env.CLOUDFLARE_R2_BUCKET_NAME;
const R2_PUBLIC_URL = env.CLOUDFLARE_R2_PUBLIC_URL || '';

export const r2Client = new S3Client({
  region: 'auto',
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: R2_ACCESS_KEY_ID,
    secretAccessKey: R2_SECRET_ACCESS_KEY,
  },
});

export async function uploadToR2({
  key,
  body,
  contentType,
  filename,
}: {
  key: string;
  body: Buffer | Uint8Array;
  contentType?: string;
  filename?: string;
}) {
  const command = new PutObjectCommand({
    Bucket: R2_BUCKET,
    Key: key,
    Body: body,
    ContentType: contentType,
    // For public access via custom domain or public bucket:
    // Metadata can be added here if needed
  });

  await r2Client.send(command);

  // Construct public URL (if your bucket is public or you have a custom domain)
  const url = R2_PUBLIC_URL
    ? `${R2_PUBLIC_URL.replace(/\/$/, '')}/${key}`
    : `https://${R2_BUCKET}.${R2_ACCOUNT_ID}.r2.cloudflarestorage.com/${key}`;

  return { key, url };
}

// Helper to generate a unique key for evidence uploads
export function generateEvidenceKey(originalName: string) {
  const date = new Date().toISOString().slice(0, 10);
  const safe = originalName.replace(/[^a-zA-Z0-9._-]/g, '_').slice(0, 80);
  const random = Math.random().toString(36).slice(2, 10);
  return `evidence/${date}/${random}-${safe}`;
}
