import React, { Suspense } from 'react';
import Link from 'next/link';
import SchoolsIndexClient from './SchoolsIndexClient';
import ThemeSwitcher from '../components/ThemeSwitcher';
import ThemeHint from '../components/ThemeHint';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Complete Index of All Kenyan Schools | CodeAmani Labs',
  description: 'Full index of 1,127+ Kenyan secondary schools across all 47 counties. Search, filter, and browse by county or name — with unique CodeAmani Labs Index Numbers (KSO-XXXX). Official transparent public directory by CodeAmani Labs (Founder: codeAmani-Solutions (Barnabas Waweru)).',
  openGraph: {
    title: 'Complete Index of Kenyan Schools | All 47 Counties',
    description: 'Searchable, paginated index grouped by county with client-side search and shareable filters.',
  },
};

export default function SchoolsIndexPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#f5f5f5]">
      <nav className="glass-nav sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-6 flex h-14 items-center justify-between text-sm">
          <Link href="/" className="font-semibold flex items-center gap-2">
            Kenyan Schools <span className="text-xs text-[#c5a46e]">by CodeAmani Labs</span>
          </Link>
          <div className="flex items-center gap-6 text-sm font-medium">
            <Link href="/schools" className="hover:text-[#c5a46e]">Index</Link>
            <Link href="/counties" className="hover:text-[#c5a46e]">By County</Link>
            <Link href="/contributors" className="hover:text-[#c5a46e]">Contributors</Link>
            <Link href="/directory" className="hover:text-[#c5a46e]">Directory</Link>
            <Link href="/apply" className="hover:text-[#c5a46e]">Apply</Link>
            <Link href="/contribute" className="hover:text-[#c5a46e]">Contribute</Link>
            <Link href="/about" className="hover:text-[#c5a46e]">About</Link>
            <ThemeSwitcher />
            <ThemeSwitcher floating />
            <a 
              href="https://github.com/codeAmani-Labs/kenyan-schools-org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-1 text-xs hover:bg-white/5"
            >
              GitHub
            </a>
          </div>
        </div>
      </nav>

      <div className="hidden lg:block fixed top-20 right-6 z-40">
        <ThemeHint suggestedTheme="cream" description="Great for long lists & browsing" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-8 pb-4">
        {/* Server-rendered static content for SEO: critical headings and listings in initial HTML */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold tracking-tight">Complete Index of All Kenyan Secondary Schools</h2>
          <p className="text-[#a3a3a3] mt-2">1,127+ schools across 47 counties. Each entry includes unique KSO index, tier, sources, and community-verified details. Use filters below for interactive exploration (JavaScript powered for best UX).</p>
        </div>
      </div>

      <Suspense fallback={
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-16">
          <div className="text-center py-12">
            <div className="text-[#c5a46e] text-xl">Loading schools index...</div>
          </div>
        </div>
      }>
        <SchoolsIndexClient />
      </Suspense>

      <Footer />
    </div>
  );
}
