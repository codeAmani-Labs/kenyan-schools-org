const fs = require('fs');
const path = require('path');

const csvPath = path.join(__dirname, 'schools.csv');
const outPath = path.join(__dirname, 'schools.json');

const raw = fs.readFileSync(csvPath, 'utf8').trim();
const lines = raw.split(/\r?\n/);
const header = lines[0].split(',').map(h => h.trim());

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

const schools = [];
const seenSlugs = new Set();

lines.slice(1).forEach((line, idx) => {
  // Naive CSV split - works because data has no embedded commas in these fields
  const cols = line.split(',');
  if (cols.length < 6) return;

  const [county, tierRaw, rankRaw, name, genderRaw, clusterRaw] = cols.map(c => c.trim());

  const tier = tierRaw || 'County';
  const rank = rankRaw ? parseInt(rankRaw, 10) : null;
  const gender = (genderRaw && genderRaw !== 'null') ? genderRaw : null;
  const cluster = (clusterRaw && clusterRaw !== 'null') ? clusterRaw : null;

  let baseSlug = slugify(name);
  let slug = baseSlug;
  let i = 1;
  while (seenSlugs.has(slug)) {
    slug = `${baseSlug}-${i++}`;
  }
  seenSlugs.add(slug);

  schools.push({
    id: idx + 1,
    slug,
    name: name || 'Unknown School',
    county: county || 'Unknown',
    tier,
    rank: Number.isFinite(rank) ? rank : null,
    gender,
    cluster,
    // Extended fields (community fillable)
    shortName: null,
    address: null,
    website: null,
    phone: null,
    email: null,
    lat: null,
    lng: null,
    gpsConfidence: null,
    sportsNicknames: null,
    notes: null,
    sources: [], // array of {id, label, url} references
    established: null,
    // Metadata
    addedAt: '2026-06-21',
    lastUpdated: '2026-06-21',
  });
});

fs.writeFileSync(outPath, JSON.stringify(schools, null, 2));
console.log(`Converted ${schools.length} schools → ${outPath}`);

// Also print quick stats
const byTier = schools.reduce((a, s) => { a[s.tier] = (a[s.tier]||0)+1; return a; }, {});
console.log('By tier:', byTier);
console.log('Counties:', new Set(schools.map(s => s.county)).size);
