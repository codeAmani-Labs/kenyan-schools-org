import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  
  const q = searchParams.get('q')?.toLowerCase().trim() || '';
  const county = searchParams.get('county') || '';
  const tier = searchParams.get('tier') || '';
  const gender = searchParams.get('gender') || '';
  const cluster = searchParams.get('cluster') || '';
  
  const limit = Math.min(parseInt(searchParams.get('limit') || '50', 10), 200);
  const offset = parseInt(searchParams.get('offset') || '0', 10);
  const sort = searchParams.get('sort') || 'name'; // name, county, tier, rank
  const order = searchParams.get('order') === 'desc' ? 'desc' : 'asc';
  
  const format = (searchParams.get('format') || 'json').toLowerCase(); // json, csv

  // Build Prisma where clause
  const where: any = {};
  
  if (q) {
    where.OR = [
      { name: { contains: q, mode: 'insensitive' } },
      { county: { contains: q, mode: 'insensitive' } },
      { shortName: { contains: q, mode: 'insensitive' } },
      { notes: { contains: q, mode: 'insensitive' } },
    ];
  }
  
  if (county) where.county = { equals: county, mode: 'insensitive' };
  if (tier) where.tier = { equals: tier, mode: 'insensitive' };
  if (gender) where.gender = { equals: gender, mode: 'insensitive' };
  if (cluster) where.cluster = { equals: cluster, mode: 'insensitive' };

  // Sorting
  const orderBy: any = {};
  if (['name', 'county', 'tier', 'rank'].includes(sort)) {
    orderBy[sort] = order;
  } else {
    orderBy.name = 'asc';
  }

  const [schools, total] = await Promise.all([
    prisma.school.findMany({
      where,
      orderBy,
      take: limit,
      skip: offset,
    }),
    prisma.school.count({ where }),
  ]);

  const data = {
    total,
    count: schools.length,
    limit,
    offset,
    hasMore: offset + schools.length < total,
    generated: new Date().toISOString(),
    filters: { q, county, tier, gender, cluster },
    schools,
  };

  if (format === 'csv') {
    // Simple CSV export for the current page
    const headers = ['id', 'name', 'slug', 'county', 'tier', 'rank', 'gender', 'cluster', 'shortName', 'address', 'website'];
    const csvRows = [
      headers.join(','),
      ...schools.map((s: any) => 
        headers.map(h => {
          const val = s[h] ?? '';
          // Escape quotes and wrap in quotes if needed
          const str = String(val).replace(/"/g, '""');
          return str.includes(',') || str.includes('"') || str.includes('\n') ? `"${str}"` : str;
        }).join(',')
      ),
    ];
    
    return new NextResponse(csvRows.join('\n'), {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename="kenyan-schools-${Date.now()}.csv"`,
      },
    });
  }

  return NextResponse.json(data);
}
