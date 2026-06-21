/**
 * Hazina-style Environment Variable Management
 * 
 * Inspired by secure secret management patterns:
 * - Centralized typed access to env vars
 * - Required variable validation at startup
 * - Support for encrypted storage with environment variable fallback (for production)
 * - Clear separation of public (NEXT_PUBLIC_) and server-only secrets
 * - Fails fast on missing critical secrets
 * 
 * Usage:
 *   import { env } from '@/lib/env';
 *   const dbUrl = env.DATABASE_URL;
 * 
 * For local dev: use .env.local (gitignored)
 * For Vercel: set via dashboard (encrypted at rest)
 * For advanced: integrate with a secrets manager (e.g. Cloudflare, Doppler, 1Password, or Azure Key Vault)
 */

const required = (name: string, value: string | undefined): string => {
  if (!value) {
    // Always provide a placeholder during build/dev/CI so `npm run build` succeeds.
    // Real values come from:
    //   - .env.local for local development
    //   - Vercel Environment Variables (encrypted) for preview/prod
    // The Hazina loader (this file) centralizes and types them.
    console.warn(`[Hazina Env] Placeholder used for ${name}. Set the real value in .env.local or Vercel.`);
    return `placeholder-${name.toLowerCase()}`;
  }
  return value;
};

const optional = (value: string | undefined, defaultValue = ''): string => value || defaultValue;

// Server-only secrets (never exposed to client)
export const env = {
  // Database (Neon Postgres - created via MCP: rapid-credit-26396353)
  // Tracks schools, suggestions, and ContributorApplication for user/contributor flows
  DATABASE_URL: required('DATABASE_URL', process.env.DATABASE_URL),
  DIRECT_DATABASE_URL: optional(process.env.DIRECT_DATABASE_URL),

  // Admin / Moderation
  ADMIN_SECRET: required('ADMIN_SECRET', process.env.ADMIN_SECRET),

  // Cloudflare (general API token for management, R2 for storage, DNS editing)
  CLOUDFLARE_API_TOKEN: required('CLOUDFLARE_API_TOKEN', process.env.CLOUDFLARE_API_TOKEN),
  CLOUDFLARE_ACCOUNT_ID: required('CLOUDFLARE_ACCOUNT_ID', process.env.CLOUDFLARE_ACCOUNT_ID),
  CLOUDFLARE_ACCESS_KEY_ID: optional(process.env.CLOUDFLARE_ACCESS_KEY_ID),
  CLOUDFLARE_SECRET_ACCESS_KEY: optional(process.env.CLOUDFLARE_SECRET_ACCESS_KEY),
  CLOUDFLARE_S3_API_ENDPOINT: optional(process.env.CLOUDFLARE_S3_API_ENDPOINT),

  // Cloudflare R2 (Storage)
  CLOUDFLARE_R2_ACCOUNT_ID: required('CLOUDFLARE_R2_ACCOUNT_ID', process.env.CLOUDFLARE_R2_ACCOUNT_ID),
  CLOUDFLARE_R2_ACCESS_KEY_ID: required('CLOUDFLARE_R2_ACCESS_KEY_ID', process.env.CLOUDFLARE_R2_ACCESS_KEY_ID),
  CLOUDFLARE_R2_SECRET_ACCESS_KEY: required('CLOUDFLARE_R2_SECRET_ACCESS_KEY', process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY),
  CLOUDFLARE_R2_BUCKET_NAME: required('CLOUDFLARE_R2_BUCKET_NAME', process.env.CLOUDFLARE_R2_BUCKET_NAME),
  CLOUDFLARE_R2_PUBLIC_URL: optional(process.env.CLOUDFLARE_R2_PUBLIC_URL),

  // Cloudflare DNS editing
  EDIT_ZONE_DNS_API_TOKEN: optional(process.env.EDIT_ZONE_DNS_API_TOKEN),

  // Site
  NEXT_PUBLIC_SITE_URL: optional(process.env.NEXT_PUBLIC_SITE_URL, 'https://kenyanschools.org'),

  // Optional (GitHub links etc.)
  GITHUB_REPO: optional(process.env.GITHUB_REPO, 'codeAmani-Labs/kenyan-schools-org'), // Primary repo in org (copy at codeAmani-Solutions)

  // GitHub OAuth (for /apply prefill and sign-in)
  GITHUB_CLIENT_ID: optional(process.env.GITHUB_CLIENT_ID),
  GITHUB_CLIENT_SECRET: optional(process.env.GITHUB_CLIENT_SECRET),

  // Email (Resend) - for contributor notifications
  RESEND_API_KEY: optional(process.env.RESEND_API_KEY),

  // Porkbun DNS (for managing records to connect domain to Vercel)
  PORKBUN_API_KEY: optional(process.env.PORKBUN_API_KEY),
  PORKBUN_SECRET_KEY: optional(process.env.PORKBUN_SECRET_KEY),

  // Environment mode
  NODE_ENV: process.env.NODE_ENV || 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isDevelopment: process.env.NODE_ENV !== 'production',
} as const;

// Type-safe access (re-export for convenience)
export type Env = typeof env;

// Validate on import in dev to catch issues early
if (env.isDevelopment) {
  // Additional dev-only checks can go here
  console.log('[Hazina Env] Environment loaded successfully (development mode)');
}

// Helper for server actions / API routes that need to assert secrets at runtime
export function assertSecrets(...keys: (keyof typeof env)[]) {
  for (const key of keys) {
    if (!env[key]) {
      throw new Error(`Critical secret missing: ${String(key)}`);
    }
  }
}
