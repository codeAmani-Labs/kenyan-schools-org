import Link from 'next/link';
import { School } from '@/lib/types';
import schoolsData from '@/data/schools.json';
import DirectoryExplorer from '../components/DirectoryExplorer';

// Static data for directory view (excellent UX + build without DB)
// All mutations go through /api/suggest → Neon
const schools = schoolsData as School[];

export const metadata = {
  title: 'School Directory | All 47 Counties - Kenyan Schools',
  description: 'Browse and filter Kenya\'s complete secondary school directory by CodeAmani Labs (Founder: codeAmani-Solutions (Barnabas Waweru)). 1,127+ schools across all 47 counties by tier (National, Extra-County, County), gender, and location. Includes geolocations and verified sources.',
  openGraph: {
    title: 'Complete Kenyan Schools Directory — All 47 Counties',
    description: 'Authoritative directory of 1,127+ Kenyan secondary schools with county geolocations, tiers, and sources. By CodeAmani Labs (Founder: codeAmani-Solutions (Barnabas Waweru)).',
  },
};

export default function DirectoryPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#f5f5f5]">
      <nav className="glass-nav">
        <div className="mx-auto max-w-7xl px-6 flex h-14 items-center gap-4 text-sm">
          <Link href="/" className="font-semibold">← Kenyan Schools <span className="text-xs text-[#c5a46e]">by CodeAmani Labs</span></Link>
          <div className="text-[#666]">/</div>
          <Link href="/schools" className="text-[#c5a46e] hover:underline">Index</Link>
          <div className="text-[#666]">/</div>
          <Link href="/contributors" className="text-[#c5a46e] hover:underline">Contributors</Link>
          <div className="text-[#666]">/</div>
          <Link href="/apply" className="text-[#c5a46e] hover:underline">Apply</Link>
          <div className="text-[#666]">/</div>
          <div className="text-[#c5a46e]">Full Directory</div>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-6 pt-12 pb-4">
        <div className="mb-7">
          <div className="text-xs tracking-[3px] text-[#c5a46e] mb-1">ALL 47 COUNTIES</div>
          <h1 className="text-6xl font-semibold tracking-[-2.5px]">School Directory</h1>
          <p className="text-lg text-[#a3a3a3] max-w-md mt-3">Every listed school. Click any entry for the full authoritative profile and to suggest corrections. Or browse the <Link href="/schools" className="text-[#c5a46e] underline">complete alphabetical index</Link>. Built by CodeAmani Labs — Founder: codeAmani-Solutions (Barnabas Waweru).</p>
        </div>

        <DirectoryExplorer schools={schools} compact={false} />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-14 text-xs text-[#666]">
        Data sourced from public records. Additions and corrections welcome via the <Link href="/contribute" className="text-[#c5a46e]">contribute form</Link>.
      </div>
    </div>
  );
}
