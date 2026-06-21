'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { School } from '@/lib/types';
import schoolsData from '@/data/schools.json';
import DirectoryExplorer from './components/DirectoryExplorer';
import { ArrowRight, MapPin, Award, Users } from 'lucide-react';

// Hybrid data: JSON for directory performance, DB for contributions
const schools = schoolsData as School[];

const stats = [
  { number: "1,127", label: "Schools", sub: "Across Kenya" },
  { number: "47", label: "Counties", sub: "Complete Coverage" },
  { number: "248", label: "National", sub: "Top Tier Institutions" },
  { number: "∞", label: "Community", sub: "Edits & Citations" },
];

export default function Home() {
  const national = schools.filter(s => s.tier === 'National').length;
  const counties = new Set(schools.map(s => s.county)).size;

  return (
    <div className="min-h-screen bg-[#050505] text-[#f5f5f5] overflow-x-hidden">
      {/* Premium Glass Navigation */}
      <nav className="glass-nav sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-6 flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-[#c5a46e] to-[#9a7440] flex items-center justify-center">
              <span className="text-[#050505] font-semibold text-xl tracking-[-1px]">KS</span>
            </div>
            <div>
              <div className="font-semibold text-xl tracking-[-0.5px]">Kenyan Schools</div>
              <div className="text-[9px] text-[#c5a46e] -mt-1 font-mono tracking-[1px]">by CodeAmani Labs</div>
            </div>
          </Link>

          <div className="flex items-center gap-2 text-sm">
            <Link href="/schools" className="px-4 py-2 rounded-full hover:bg-white/5 transition-colors hidden md:block">Index</Link>
            <Link href="/contributors" className="px-4 py-2 rounded-full hover:bg-white/5 transition-colors hidden md:block">Contributors</Link>
            <Link href="/directory" className="px-4 py-2 rounded-full hover:bg-white/5 transition-colors hidden md:block">Directory</Link>
            <Link href="/contribute" className="px-4 py-2 rounded-full hover:bg-white/5 transition-colors hidden md:block">Contribute</Link>
            <Link href="/apply" className="px-4 py-2 rounded-full hover:bg-white/5 transition-colors hidden md:block">Apply</Link>
            <Link href="/about" className="px-4 py-2 rounded-full hover:bg-white/5 transition-colors hidden md:block">About</Link>
            
            <Link 
              href="/apply" 
              className="ml-2 inline-flex items-center gap-2 rounded-full bg-[#c5a46e] px-5 py-2 text-sm font-medium text-[#050505] hover:bg-[#d4b48c] active:bg-[#b38b4f] transition-all"
            >
              Apply to Contribute <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Premium Hero with Liquid Glass */}
      <div className="relative border-b border-white/10 pt-16 pb-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1 text-xs tracking-[1.5px] mb-6 text-[#c5a46e]">
            A NATIONAL LEGACY • Citable • Community Curated
          </div>

          <h1 className="text-[72px] sm:text-[88px] leading-[0.92] font-semibold tracking-[-4.8px] mb-6">
            Every Kenyan<br />school.<br />
            <span className="text-[#c5a46e]">Authoritative.</span>
          </h1>
          
          <p className="max-w-xl mx-auto text-2xl text-[#a3a3a3] tracking-tight">
            The definitive, living directory of Kenya’s secondary schools — 
            with sources, history, and community contributions.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <Link 
              href="#explore"
              className="group inline-flex h-14 items-center gap-3 rounded-2xl border border-white/20 px-8 text-base font-medium hover:bg-white/5 transition-all"
            >
              Explore the Directory
              <ArrowRight className="group-hover:translate-x-0.5 transition" />
            </Link>
            <Link 
              href="/contribute" 
              className="inline-flex h-14 items-center gap-3 rounded-2xl bg-[#c5a46e] px-8 text-base font-semibold text-[#050505] hover:bg-[#d4b48c] active:bg-[#b38b4f] transition"
            >
              Add to the Record
            </Link>
          </div>

          {/* Trust bar */}
          <div className="mt-12 flex justify-center gap-x-10 gap-y-2 text-sm text-[#a3a3a3]">
            <div><span className="text-[#f5f5f5] font-semibold">{schools.length.toLocaleString()}</span> schools</div>
            <div><span className="text-[#f5f5f5] font-semibold">{counties}</span> counties</div>
            <div><span className="text-[#f5f5f5] font-semibold">{national}</span> national</div>
          </div>
        </div>
      </div>

      {/* Elegant Stats Section */}
      <div className="mx-auto max-w-6xl px-6 pt-12 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="glass-card rounded-3xl p-7"
            >
              <div className="font-mono text-6xl font-semibold tracking-[-2.5px] text-[#c5a46e] mb-1">{stat.number}</div>
              <div className="font-medium text-lg tracking-tight">{stat.label}</div>
              <div className="text-xs text-[#a3a3a3] mt-0.5">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Directory Explorer */}
      <div id="explore" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-y-2">
          <div>
            <div className="uppercase text-xs tracking-[3px] text-[#c5a46e] font-medium mb-1">THE ARCHIVE</div>
            <h2 className="text-5xl font-semibold tracking-[-1.5px]">School Directory</h2>
            <p className="text-xs text-[#666] mt-1">by CodeAmani Labs — Founder: codeAmani-Solutions (Barnabas Waweru)</p>
          </div>
          <Link href="/directory" className="inline-flex items-center gap-1 text-[#c5a46e] text-sm group">
            Full Explorer <ArrowRight className="group-hover:translate-x-0.5 transition" />
          </Link>
          <Link href="/schools" className="inline-flex items-center gap-1 text-[#c5a46e] text-sm group ml-4">
            Full Index <ArrowRight className="group-hover:translate-x-0.5 transition" />
          </Link>
        </div>

        <DirectoryExplorer schools={schools} compact={false} />
      </div>

      {/* Philosophy - Premium Glass Strip */}
      <div className="border-y border-white/10 bg-[#0a0a0a] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="text-[#c5a46e] text-xs tracking-[3px] mb-3">OUR STANDARD</div>
          <p className="text-3xl leading-tight tracking-tight">
            Like a national archive. Every entry must be traceable to a source.<br /> 
            Anyone can contribute. Everything is transparent.<br />
            Built and maintained by CodeAmani Labs — Founder: codeAmani-Solutions (Barnabas Waweru).
          </p>
          <div className="flex gap-3 justify-center mt-8">
            <Link href="/about" className="rounded-full border border-white/20 px-6 py-2.5 text-sm hover:bg-white/5">Read the Manifesto</Link>
            <Link href="/apply" className="rounded-full bg-[#c5a46e] text-[#050505] px-6 py-2.5 text-sm font-medium">Apply to Contribute</Link>
            <Link href="/contribute" className="rounded-full bg-white/5 border border-white/10 px-6 py-2.5 text-sm hover:bg-white/10">Quick Suggest</Link>
          </div>
        </div>
      </div>

      {/* Premium Footer */}
      <footer className="border-t border-white/10 py-9 text-xs text-[#666]">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-y-3 text-xs">
          <div>© {new Date().getFullYear()} Kenyan Schools Directory v1.0.0 — Built & maintained by <a href="https://codeamanilabs.org/" target="_blank" className="text-[#c5a46e] hover:underline">CodeAmani Labs</a> (GitHub Org: https://github.com/codeAmani-Labs | Founder: codeAmani-Solutions (Barnabas Waweru)). Transparent public data.</div>
          <div className="flex gap-x-6">
            <Link href="/citations" className="hover:text-white">Citations</Link>
            <Link href="/about" className="hover:text-white">About</Link>
            <a href="https://github.com/codeAmani-Labs/kenyan-schools-org" target="_blank" className="hover:text-white">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
