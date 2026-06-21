import Link from 'next/link';
import schoolsData from '@/data/schools.json';
import { School } from '@/lib/types';
import ThemeSwitcher from '../components/ThemeSwitcher';
import ThemeHint from '../components/ThemeHint';
import Footer from '../components/Footer';

const schools = schoolsData as School[];
const uniqueCounties = [...new Set(schools.map(s => s.county))].sort();

export const metadata = {
  title: 'Schools by County | All 47 Counties - Kenyan Schools',
  description: 'Browse Kenyan secondary schools by county. Complete directory for all 47 counties with verified sources and KSO index numbers. By CodeAmani Labs.',
};

export default function CountiesPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#f5f5f5]">
      <nav className="glass-nav sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-6 flex h-14 items-center justify-between text-sm">
          <Link href="/" className="font-semibold flex items-center gap-2">
            Kenyan Schools <span className="text-xs text-[#c5a46e]">by CodeAmani Labs</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/schools">Index</Link>
            <Link href="/directory">Directory</Link>
            <ThemeSwitcher />
          </div>
        </div>
      </nav>

      <ThemeSwitcher floating />
      <div className="hidden lg:block fixed top-20 right-6 z-40">
        <ThemeHint suggestedTheme="cream" description="Browse by county" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-12 pb-24">
        <div className="mb-8">
          <div className="text-xs tracking-[3px] text-[#c5a46e] mb-1">GEOGRAPHIC ORGANIZATION</div>
          <h1 className="text-5xl font-semibold tracking-tighter">Schools by County</h1>
          <p className="text-lg text-[#a3a3a3] mt-3 max-w-2xl">
            Explore Kenya's secondary schools organized by all 47 counties. Each county page provides focused listings with sources, tiers, and unique KSO identifiers for better discoverability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {uniqueCounties.map((county) => {
            const countySchools = schools.filter(s => s.county === county);
            const nationalCount = countySchools.filter(s => s.tier === 'National').length;
            return (
              <Link 
                key={county} 
                href={`/counties/${encodeURIComponent(county)}`}
                className="glass-card p-6 rounded-2xl border border-white/10 hover:border-[#c5a46e]/50 transition group"
              >
                <div className="font-semibold text-xl group-hover:text-[#c5a46e]">{county}</div>
                <div className="text-sm text-[#a3a3a3] mt-1">{countySchools.length} schools</div>
                {nationalCount > 0 && <div className="text-xs mt-1 text-[#c5a46e]">{nationalCount} National</div>}
                <div className="text-xs mt-3 text-[#666] group-hover:underline">View county directory →</div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 text-sm text-[#666]">
          Looking for the full interactive view? <Link href="/directory" className="text-[#c5a46e] underline">Use the Directory Explorer</Link>.
        </div>
      </div>

      <Footer />
    </div>
  );
}
