import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET() {
  // Aggregate schools by county for easy extraction
  const counties = await prisma.school.groupBy({
    by: ['county'],
    _count: {
      id: true,
    },
    orderBy: {
      county: 'asc',
    },
  });

  const formatted = counties.map((c) => ({
    county: c.county,
    schoolCount: c._count.id,
  }));

  return NextResponse.json({
    totalCounties: formatted.length,
    totalSchools: formatted.reduce((sum, c) => sum + c.schoolCount, 0),
    counties: formatted,
    generated: new Date().toISOString(),
  });
}
