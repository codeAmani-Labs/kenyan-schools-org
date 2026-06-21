const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, 'schools.json');
let schools = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

const updates = {
  'kakamega-high-school': {
    shortName: 'Kakamega High / Green Commandos',
    sportsNicknames: 'Football: Green Commandos',
    notes: 'Founded 1932. 14-time national football champions as of 2018. One of Kenya\'s most decorated schools in KSSSA football history.',
    sources: [{ label: 'Mukasa Football Diary', url: 'https://mukasah.wordpress.com/2020/07/10/kakamega-high-school-green-commandos-class-of-1986/' }],
  },
  'agoro-sare-high-school-ashs': {
    shortName: 'ASHS',
    website: 'www.agorosarehs.sc.ke',
    notes: 'Established 1958. Confirmed national school. Football: Yenga Yenga.',
    sources: [{ label: 'TNX Africa', url: 'https://www.tnx.africa/' }],
  },
  'mama-ngina-girls-high-school': {
    shortName: 'Mama Ngina',
    tier: 'National',
    notes: 'National school. Strong academic performer.',
  }
};

Object.keys(updates).forEach(slug => {
  const s = schools.find(x => x.slug === slug);
  if (s) {
    Object.assign(s, updates[slug]);
    s.lastUpdated = '2026-06-21';
  }
});

fs.writeFileSync(jsonPath, JSON.stringify(schools, null, 2));
console.log('Enriched a few high-profile schools for demonstration.');
