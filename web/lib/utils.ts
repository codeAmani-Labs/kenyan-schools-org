import { School } from './types';

export function getTierClass(tier: string): string {
  const t = tier.toLowerCase();
  if (t.includes('national')) return 'badge-national';
  if (t.includes('extra')) return 'badge-extra';
  if (t.includes('sne')) return 'badge-sne';
  return 'badge-county';
}

export function getGenderClass(gender: string | null): string {
  if (!gender) return 'bg-slate-100 text-slate-700';
  const g = gender.toLowerCase();
  if (g === 'boys') return 'badge-boys';
  if (g === 'girls') return 'badge-girls';
  if (g === 'mixed') return 'badge-mixed';
  return 'bg-purple-100 text-purple-800';
}

export function formatTier(tier: string): string {
  if (tier === 'Extra-County') return 'Extra County';
  return tier;
}

export function makeGitHubIssueUrl(suggestion: {
  schoolName: string;
  field: string;
  currentValue: string;
  proposedValue: string;
  source?: string;
  message?: string;
}): string {
  const title = encodeURIComponent(`Update: ${suggestion.schoolName} — ${suggestion.field}`);
  const body = [
    `**School:** ${suggestion.schoolName}`,
    `**Field:** ${suggestion.field}`,
    ``,
    `**Current value:**`,
    suggestion.currentValue || '(empty)',
    ``,
    `**Proposed value:**`,
    suggestion.proposedValue,
    ``,
    suggestion.source ? `**Source / citation:** ${suggestion.source}` : '',
    suggestion.message ? `**Additional context:** ${suggestion.message}` : '',
    ``,
    `---`,
    `Submitted via kenyanschool.org community portal`,
    `Please review and open a PR against data if approved.`,
  ].filter(Boolean).join('\n');

  const repo = process.env.GITHUB_REPO || 'codeAmani-Labs/kenyan-schools-org'; // Primary in org; copy at codeAmani-Solutions
  return `https://github.com/${repo}/issues/new?title=${title}&body=${encodeURIComponent(body)}&labels=school-data`;
}

export function generateMarkdownPatch(school: School, field: string, value: string, source?: string): string {
  return `\`\`\`diff
# Proposed change for ${school.name}

## ${field}
- ${school[field as keyof School] ?? 'null'}
+ ${value}
${source ? `\n# Source: ${source}` : ''}
\`\`\`

School slug: ${school.slug}
County: ${school.county} | Tier: ${school.tier}
`;
}

// Simple but fast client-side filter + search
export function filterSchools(
  schools: School[],
  query: string,
  counties: string[],
  tiers: string[],
  genders: string[]
): School[] {
  const q = query.trim().toLowerCase();

  return schools.filter((s) => {
    // Text search: name + county + notes
    const matchesQuery =
      !q ||
      s.name.toLowerCase().includes(q) ||
      s.county.toLowerCase().includes(q) ||
      (s.shortName && s.shortName.toLowerCase().includes(q)) ||
      (s.notes && s.notes.toLowerCase().includes(q));

    const matchesCounty = counties.length === 0 || counties.includes(s.county);
    const matchesTier = tiers.length === 0 || tiers.includes(s.tier);
    const matchesGender = genders.length === 0 || genders.includes(s.gender || 'null');

    return matchesQuery && matchesCounty && matchesTier && matchesGender;
  });
}

export const ALL_COUNTIES = [
  'Baringo','Bomet','Bungoma','Busia','Elgeyo-Marakwet','Embu','Garissa','Homa Bay','Isiolo','Kajiado',
  'Kakamega','Kericho','Kiambu','Kilifi','Kirinyaga','Kisii','Kisumu','Kitui','Kwale','Laikipia','Lamu',
  'Machakos','Makueni','Mandera','Marsabit','Meru','Migori','Mombasa','Murang\'a','Nairobi','Nakuru',
  'Nandi','Narok','Nyamira','Nyandarua','Nyeri','Samburu','Siaya','Taita-Taveta','Tana River','Tharaka-Nithi',
  'Trans Nzoia','Turkana','Uasin Gishu','Vihiga','West Pokot'
] as const;

export const ALL_TIERS = ['National', 'Extra-County', 'County'] as const;
export const ALL_GENDERS = ['Boys', 'Girls', 'Mixed', 'SNE'] as const;
