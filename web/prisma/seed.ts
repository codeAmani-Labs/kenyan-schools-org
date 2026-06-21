import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding Kenyan schools from data/schools.json...');

  const dataPath = path.join(__dirname, '..', 'data', 'schools.json');
  const raw = fs.readFileSync(dataPath, 'utf-8');
  const schools: any[] = JSON.parse(raw);

  let created = 0;
  let updated = 0;

  for (const s of schools) {
    const record = {
      slug: s.slug,
      indexNo: s.indexNo || `KSO-${String(s.id || 1).padStart(4, '0')}`,
      name: s.name,
      county: s.county,
      tier: s.tier,
      rank: s.rank ?? null,
      gender: s.gender ?? null,
      cluster: s.cluster ?? null,
      shortName: s.shortName ?? null,
      address: s.address ?? null,
      website: s.website ?? null,
      phone: s.phone ?? null,
      email: s.email ?? null,
      lat: typeof s.lat === 'number' ? s.lat : null,
      lng: typeof s.lng === 'number' ? s.lng : null,
      gpsConfidence: s.gpsConfidence ?? null,
      sportsNicknames: s.sportsNicknames ?? null,
      notes: s.notes ?? null,
      established: s.established ?? null,
      sources: s.sources && s.sources.length ? s.sources : [],
    };

    const existing = await prisma.school.findUnique({
      where: { slug: s.slug },
    });

    if (existing) {
      await prisma.school.update({
        where: { slug: s.slug },
        data: record,
      });
      updated++;
    } else {
      await prisma.school.create({
        data: {
          ...record,
          // Preserve original added date if present
          addedAt: s.addedAt ? new Date(s.addedAt) : undefined,
        },
      });
      created++;
    }
  }

  console.log(`✅ Done. Created: ${created}, Updated: ${updated}`);
  console.log(`Total schools in DB will be ~${schools.length}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
