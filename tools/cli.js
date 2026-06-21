#!/usr/bin/env node
/**
 * Kenyan Schools CLI
 * 
 * Command line tool to extract and query data from the Kenyan Schools Directory.
 * Perfect for scripts, data analysis, and automation.
 * Built and maintained by CodeAmani Labs
 * Primary: https://github.com/codeAmani-Labs/kenyan-schools-org
 * Copy: https://github.com/codeAmani-Solutions/kenyan-schools-org
 * Founder: codeAmani-Solutions (Barnabas Waweru)
 * 
 * Installation / Usage:
 *   npx kenyan-schools-org-tools search --help
 *   node tools/cli.js search "green" --county Kakamega --limit 5
 * 
 * Or after linking: kenyan-schools search ...
 */

const { program } = require('commander');
// Use built-in fetch (Node 18+) or global
const fetch = globalThis.fetch || require('node-fetch');

const API_BASE = process.env.KENYAN_SCHOOLS_API || 'https://kenyanschool.org/api';

async function fetchJSON(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`API request failed: ${res.status} ${res.statusText}`);
  return res.json();
}

program
  .name('kenyan-schools')
  .description('CLI and data tools for the Kenyan Schools Directory')
  .version('1.0.0');

program
  .command('search')
  .description('Search schools with filters')
  .option('-q, --query <string>', 'Text search (name, county, notes)')
  .option('-c, --county <string>', 'Filter by county')
  .option('-t, --tier <string>', 'Filter by tier (National, Extra-County, County)')
  .option('-g, --gender <string>', 'Filter by gender (Boys, Girls, Mixed, SNE)')
  .option('-l, --limit <number>', 'Max results', '20')
  .option('-o, --offset <number>', 'Pagination offset', '0')
  .option('--format <json|csv|table>', 'Output format', 'table')
  .action(async (options) => {
    const params = new URLSearchParams();
    if (options.query) params.set('q', options.query);
    if (options.county) params.set('county', options.county);
    if (options.tier) params.set('tier', options.tier);
    if (options.gender) params.set('gender', options.gender);
    params.set('limit', options.limit);
    params.set('offset', options.offset);

    const url = `${API_BASE}/schools?${params.toString()}`;
    const data = await fetchJSON(url);

    if (options.format === 'json') {
      console.log(JSON.stringify(data, null, 2));
    } else if (options.format === 'csv') {
      // Simple table to CSV
      if (data.schools.length === 0) {
        console.log('No results');
        return;
      }
      const headers = Object.keys(data.schools[0]);
      console.log(headers.join(','));
      data.schools.forEach(school => {
        console.log(headers.map(h => {
          const v = school[h] ?? '';
          return `"${String(v).replace(/"/g, '""')}"`;
        }).join(','));
      });
    } else {
      // Pretty table
      console.log(`\n${data.count} schools (total ${data.total}) — offset ${data.offset}\n`);
      data.schools.forEach((s, i) => {
        console.log(`${i + 1 + data.offset}. ${s.name}`);
        console.log(`   ${s.county} | ${s.tier}${s.gender ? ' | ' + s.gender : ''}`);
        if (s.rank) console.log(`   Rank: #${s.rank}`);
        console.log(`   Slug: ${s.slug}`);
        console.log('');
      });
      if (data.hasMore) {
        console.log(`... more results available. Use --offset ${data.offset + data.count} --limit ${data.limit}`);
      }
    }
  });

program
  .command('counties')
  .description('List all counties with school counts')
  .action(async () => {
    const data = await fetchJSON(`${API_BASE}/counties`);
    console.log(`\n${data.totalCounties} counties, ${data.totalSchools} total schools\n`);
    data.counties.forEach(c => {
      console.log(`${c.county.padEnd(25)} ${c.schoolCount} schools`);
    });
  });

program
  .command('school <slug>')
  .description('Get full details for one school')
  .action(async (slug) => {
    const data = await fetchJSON(`${API_BASE}/schools?q=${encodeURIComponent(slug)}&limit=1`);
    const school = data.schools?.[0];
    if (!school) {
      console.error('School not found');
      process.exit(1);
    }
    console.log(JSON.stringify(school, null, 2));
  });

program
  .command('stats')
  .description('Quick directory statistics')
  .action(async () => {
    const counties = await fetchJSON(`${API_BASE}/counties`);
    console.log('Kenyan Schools Directory Stats');
    console.log('==============================');
    console.log(`Total Schools: ${counties.totalSchools}`);
    console.log(`Total Counties: ${counties.totalCounties}`);
    console.log(`API: ${API_BASE}`);
  });

program.parseAsync(process.argv).catch(err => {
  console.error(err);
  process.exit(1);
});
