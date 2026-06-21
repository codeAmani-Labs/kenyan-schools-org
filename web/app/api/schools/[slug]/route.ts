import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const school = await prisma.school.findUnique({
    where: { slug },
  });

  if (!school) {
    return NextResponse.json({ error: 'School not found' }, { status: 404 });
  }

  return NextResponse.json({
    school,
    generated: new Date().toISOString(),
    source: 'https://kenyanschools.org/api/schools',
  });
}
