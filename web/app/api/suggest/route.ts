import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { uploadToR2, generateEvidenceKey } from '@/lib/r2';

export const runtime = 'nodejs'; // Needed for file uploads + Prisma

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const schoolId = formData.get('schoolId') as string || null;
    const schoolSlug = formData.get('schoolSlug') as string;
    const schoolName = formData.get('schoolName') as string;
    const field = formData.get('field') as string;
    const currentValue = formData.get('currentValue') as string | null;
    const proposedValue = formData.get('proposedValue') as string;
    const source = formData.get('source') as string;
    const contributorName = formData.get('contributorName') as string || null;
    const message = formData.get('message') as string || null;

    const evidenceFile = formData.get('evidence') as File | null;

    let attachmentData = null;

    // Upload evidence to Cloudflare R2 if provided
    if (evidenceFile && evidenceFile.size > 0) {
      const arrayBuffer = await evidenceFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const key = generateEvidenceKey(evidenceFile.name);
      const { url } = await uploadToR2({
        key,
        body: buffer,
        contentType: evidenceFile.type,
        filename: evidenceFile.name,
      });

      attachmentData = {
        r2Key: key,
        r2Url: url,
        filename: evidenceFile.name,
        contentType: evidenceFile.type,
        size: evidenceFile.size,
      };
    }

    // Create the suggestion in Neon
    const suggestion = await prisma.suggestion.create({
      data: {
        schoolId: schoolId || undefined,
        proposedSchoolName: schoolId ? undefined : schoolName,
        proposedCounty: undefined,
        field,
        currentValue,
        proposedValue,
        source: source || null,
        contributorName,
        contributorEmail: null,
        status: 'pending',
        message: message || null,
        ...(attachmentData && {
          attachments: {
            create: attachmentData,
          },
        }),
      },
      include: { attachments: true },
    });

    return NextResponse.json({ 
      success: true, 
      id: suggestion.id,
      message: 'Suggestion stored in Neon DB as pending' 
    });
  } catch (error: any) {
    console.error('Suggest API error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to save suggestion' },
      { status: 500 }
    );
  }
}
