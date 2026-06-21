import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { env } from '@/lib/env';

const ADMIN_SECRET = env.ADMIN_SECRET || 'dev-secret';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get('secret');

  if (secret !== ADMIN_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const suggestions = await prisma.suggestion.findMany({
    orderBy: { createdAt: 'desc' },
    take: 100,
    include: { attachments: true },
  });

  return NextResponse.json({ suggestions });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { secret, id, action } = body;

  if (secret !== ADMIN_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const suggestion = await prisma.suggestion.findUnique({ where: { id } });
  if (!suggestion) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  if (action === 'approve') {
    // Apply the change if it's an existing school
    if (suggestion.schoolId && suggestion.field !== 'NEW_SCHOOL') {
      const updateData: any = {};
      const field = suggestion.field;

      // Map common fields
      if (['shortName', 'address', 'website', 'phone', 'email', 'sportsNicknames', 'notes', 'established', 'lat', 'lng'].includes(field)) {
        if (field === 'lat' || field === 'lng') {
          updateData[field] = parseFloat(suggestion.proposedValue);
        } else {
          updateData[field] = suggestion.proposedValue;
        }
      }

      if (Object.keys(updateData).length > 0) {
        await prisma.school.update({
          where: { id: suggestion.schoolId },
          data: updateData,
        });
      }
    }

    // For NEW_SCHOOL, we could create one, but for MVP we just mark approved.
    // Future improvement: parse more fields for new school creation.

    await prisma.suggestion.update({
      where: { id },
      data: { status: 'approved', reviewedAt: new Date() },
    });

    return NextResponse.json({ message: 'Approved and applied (where possible)' });
  }

  if (action === 'reject') {
    await prisma.suggestion.update({
      where: { id },
      data: { status: 'rejected', reviewedAt: new Date() },
    });
    return NextResponse.json({ message: 'Rejected' });
  }

  return NextResponse.json({ error: 'Unknown action' }, { status: 400 });
}
