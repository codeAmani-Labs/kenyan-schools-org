import Link from 'next/link';
import { notFound } from 'next/navigation';
import schoolsData from '@/data/schools.json';
import { School } from '@/lib/types';
import ThemeSwitcher from '../../components/ThemeSwitcher';
import ThemeHint from '../../components/ThemeHint';
import Footer from '../../components/Footer';

const schools = schoolsData as School[];

interface PageProps {
  params: Promise<{ county: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { county } = await params;
  const decoded = decodeURIComponent(county);
  const countySchools = schools.filter(s => s.county.toLowerCase() === decoded.toLowerCase());
  
  if (countySchools.length === 0) return { title: 'County not found' };

  return {
    title: `${decoded} County Schools | Kenyan Secondary Schools`,
    description: `${countySchools.length} secondary schools in ${decoded} County, Kenya. National, Extra County and County schools with verified sources and KSO index. Part of the official public directory by CodeAmani Labs.`,
    alternates: {
      canonical: `https://kenyanschools.org/counties/${encodeURIComponent(decoded)}`,
    },
  };
}

export default async function CountyPage({ params }: PageProps) {
  const { county } = await params;
  const decodedCounty = decodeURIComponent(county);
  
  const countySchools = schools
    .filter(s => s.county.toLowerCase() === decodedCounty.toLowerCase())
    .sort((a, b) => a.name.localeCompare(b.name));

  if (countySchools.length === 0) notFound();

  const national = countySchools.filter(s => s.tier === 'National').length;
  const extra = countySchools.filter(s => s.tier === 'Extra County').length;

  return (
    <div className="min-h-screen bg-[#050505] text-[#f5f5f5]">
      <nav className="glass-nav sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-6 flex h-14 items-center justify-between text-sm">
          <div className="flex items-center gap-3">
            <Link href="/" className="font-semibold">Kenyan Schools</Link>
            <span className="text-[#666]">/</span>
            <Link href="/counties" className="text-[#c5a46e]">Counties</Link>
            <span className="text-[#666]">/</span>
            <span>{decodedCounty}</span>
          </div>
          <ThemeSwitcher />
        </div>
      </nav>

      <ThemeSwitcher floating />

      <div className="mx-auto max-w-7xl px-6 pt-10 pb-24">
        <div className="mb-6">
          <Link href="/counties" className="text-sm text-[#c5a46e]">← All Counties</Link>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-[-1.5px] mt-2">{decodedCounty} County Schools</h1>
          <p className="mt-2 text-[#a3a3a3]">
            {countySchools.length} schools • {national} National • {extra} Extra County
          </p>
          <p className="mt-1 text-xs text-[#666]">All entries include sources and unique KSO identifiers. Transparent public data by CodeAmani Labs.</p>
        </div>

        {/* Server-rendered list for SEO: critical content in initial HTML */}
        <div className="space-y-3">
          {countySchools.map((school) => (
            <Link 
              key={school.slug} 
              href={`/schools/${school.slug}`}
              className="block glass-card p-5 rounded-2xl border border-white/10 hover:border-[#c5a46e]/30"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="font-medium text-lg">{school.name}</div>
                  <div className="text-sm text-[#a3a3a3] flex gap-3 mt-0.5">
                    <span className="font-mono text-[#c5a46e]">{school.indexNo}</span>
                    <span>{school.tier}</span>
                    {school.gender && <span>{school.gender}</span>}
                  </div>
                </div>
                <div className="text-xs text-[#666] sm:text-right">View profile →</div>
              </div>
              {school.sources && school.sources.length > 0 && (
                <div className="text-[10px] text-[#666] mt-2 truncate">
                  Sources: {school.sources[0].label || 'Verified public records'}
                </div>
              )}
            </Link>
          ))}
        </div>

        <div className="mt-8 text-sm text-[#666]">
          For advanced filtering and search, use the <Link href="/directory" className="underline text-[#c5a46e]">full Directory Explorer</Link>.
        </div>
      </div>

      <Footer />
    </div>
  );
}
