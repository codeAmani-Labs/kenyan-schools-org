'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { School } from '@/lib/types';
import { filterSchools, getTierClass, getGenderClass, formatTier, ALL_COUNTIES, ALL_TIERS, ALL_GENDERS } from '@/lib/utils';

interface Props {
  schools: School[];
  compact?: boolean;
}

export default function DirectoryExplorer({ schools, compact = false }: Props) {
  const [query, setQuery] = useState('');
  const [selectedCounties, setSelectedCounties] = useState<string[]>([]);
  const [selectedTiers, setSelectedTiers] = useState<string[]>([]);
  const [selectedGenders, setSelectedGenders] = useState<string[]>([]);
  const [view, setView] = useState<'grid' | 'table'>('grid');
  const [sort, setSort] = useState<'name' | 'county' | 'tier'>('name');

  const filtered = useMemo(() => {
    let result = filterSchools(schools, query, selectedCounties, selectedTiers, selectedGenders);

    // Hide coverage gap placeholder schools (from the data seeds)
    result = result.filter((s) => !s.name.includes('[Coverage gap') && s.name !== '[Coverage gap - see note]');

    // Sorting
    result = [...result].sort((a, b) => {
      if (sort === 'name') return a.name.localeCompare(b.name);
      if (sort === 'county') return a.county.localeCompare(b.county) || a.name.localeCompare(b.name);
      if (sort === 'tier') {
        const tierOrder: Record<string, number> = { 'National': 1, 'Extra-County': 2, 'County': 3 };
        const diff = (tierOrder[a.tier] || 99) - (tierOrder[b.tier] || 99);
        return diff || a.name.localeCompare(b.name);
      }
      return 0;
    });

    return result;
  }, [schools, query, selectedCounties, selectedTiers, selectedGenders, sort]);

  function toggleCounty(c: string) {
    setSelectedCounties(prev =>
      prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c]
    );
  }
  function toggleTier(t: string) {
    setSelectedTiers(prev =>
      prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]
    );
  }
  function toggleGender(g: string) {
    setSelectedGenders(prev =>
      prev.includes(g) ? prev.filter(x => x !== g) : [...prev, g]
    );
  }

  function clearFilters() {
    setQuery('');
    setSelectedCounties([]);
    setSelectedTiers([]);
    setSelectedGenders([]);
  }

  const hasFilters = query || selectedCounties.length || selectedTiers.length || selectedGenders.length;

  return (
    <div className="rounded-3xl glass overflow-hidden border border-white/10">
      {/* Premium Glass Toolbar */}
      <div className="border-b border-white/10 p-5 md:p-6 flex flex-col md:flex-row gap-4 md:items-center bg-black/30">
        <div className="flex-1 relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search name, county, nickname or notes..."
            className="w-full rounded-2xl glass pl-12 py-[17px] text-lg placeholder:text-[#666] focus:outline-none border border-white/10 focus:border-[#c5a46e]/50"
          />
          <div className="absolute left-5 top-[19px] text-[#c5a46e] text-lg">⌘</div>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as any)}
            className="glass rounded-2xl border border-white/10 px-4 py-2.5 text-sm focus:outline-none"
          >
            <option value="name">Name</option>
            <option value="county">County</option>
            <option value="tier">Tier</option>
          </select>

          <button
            onClick={() => setView(view === 'grid' ? 'table' : 'grid')}
            className="glass rounded-2xl border border-white/10 px-4 py-2.5 text-sm hover:border-[#c5a46e]/40"
          >
            {view === 'grid' ? 'Table' : 'Grid'}
          </button>

          <button
            onClick={() => {
              const blob = new Blob([JSON.stringify(filtered, null, 2)], { type: 'application/json' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = `kenyan-schools-${filtered.length}.json`;
              a.click();
              URL.revokeObjectURL(url);
            }}
            className="glass rounded-2xl border border-white/10 px-4 py-2.5 text-sm hover:border-[#c5a46e]/40"
          >
            Export
          </button>

          {hasFilters && (
            <button onClick={clearFilters} className="px-3 py-2 text-xs text-[#c5a46e] hover:text-white">
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Elegant Filters */}
      <div className="p-5 md:p-6 border-b border-white/10 flex flex-wrap gap-x-2 gap-y-2">
        <div className="w-full text-[10px] font-mono tracking-[1px] text-[#666] mb-1">FILTER</div>

        {ALL_TIERS.map(t => (
          <button key={t} onClick={() => toggleTier(t)} className={`filter-chip ${selectedTiers.includes(t) ? 'active' : ''}`}>
            {formatTier(t)}
          </button>
        ))}
        
        {ALL_GENDERS.map(g => (
          <button key={g} onClick={() => toggleGender(g)} className={`filter-chip ${selectedGenders.includes(g) ? 'active' : ''}`}>
            {g}
          </button>
        ))}

        <div className="relative min-w-[190px]">
          <select
            value=""
            onChange={(e) => e.target.value && toggleCounty(e.target.value)}
            className="glass w-full rounded-2xl border border-white/10 px-4 py-2 text-sm appearance-none focus:outline-none"
          >
            <option value="">+ County</option>
            {ALL_COUNTIES.filter(c => !selectedCounties.includes(c)).map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <AnimatePresence>
          {selectedCounties.length > 0 && (
            <div className="flex flex-wrap gap-1 items-center">
              {selectedCounties.map(c => (
                <button key={c} onClick={() => toggleCounty(c)} className="text-xs bg-[#c5a46e] text-black pl-3 pr-2 py-px rounded-full flex items-center gap-1">
                  {c} <span className="opacity-70">×</span>
                </button>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Count */}
      <div className="px-6 py-3 text-xs border-b border-white/10 flex items-center text-[#a3a3a3]">
        <span className="text-[#c5a46e] font-medium">{filtered.length.toLocaleString()}</span> schools found
        {hasFilters && " (filtered)"}
      </div>

      {/* Results Grid — Liquid Glass Cards */}
      {view === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 p-px">
          {filtered.slice(0, compact ? 9 : 48).map((school, index) => (
            <motion.div
              key={school.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(index * 0.008, 0.2) }}
            >
              <Link 
                href={`/schools/${school.slug}`}
                className="school-card group block"
              >
                <div className="card-inner glass-card p-6 h-full rounded-3xl border border-white/10 group-hover:border-[#c5a46e]/40">
                  <div className="flex justify-between items-start gap-4">
                    <div className="font-semibold text-[17px] leading-tight tracking-[-0.3px] group-hover:text-[var(--accent)] transition-colors">
                      {school.name}
                    </div>
                    <div className="font-mono text-xs text-[var(--accent)] pt-1 whitespace-nowrap flex-shrink-0">{school.indexNo}</div>
                  </div>

                  <div className="flex gap-2 flex-wrap mt-4">
                    <span className={`badge ${getTierClass(school.tier)}`}>{formatTier(school.tier)}</span>
                    {school.gender && <span className={`badge ${getGenderClass(school.gender)}`}>{school.gender}</span>}
                    <span className="badge border-white/10" style={{ color: 'var(--subtle)' }}>{school.county}</span>
                  </div>

                  <div className="mt-5 text-sm line-clamp-2 min-h-[44px]" style={{ color: 'var(--muted)' }}>
                    {school.notes || "Community-verified. Add history, sports nicknames, or GPS coordinates."}
                  </div>

                  <div className="text-[var(--accent)] text-xs mt-6 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    VIEW PROFILE <span className="text-lg leading-none">→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="overflow-auto">
          <table className="w-full min-w-[860px]">
            <thead>
              <tr className="border-b border-white/10 bg-black/30 text-xs text-left">
                <th className="py-3 px-6 font-normal text-[#888]">School</th>
                <th className="py-3 px-5 font-normal text-[#888]">County</th>
                <th className="py-3 px-5 font-normal text-[#888]">Tier</th>
                <th className="py-3 px-5 font-normal text-[#888]">Gender</th>
                <th className="py-3 px-5 font-normal text-[#888]">Rank</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {filtered.slice(0, compact ? 25 : 120).map(s => (
                <tr key={s.id} className="border-b border-white/5 hover:bg-white/[0.015] group">
                  <td className="py-3 px-6 font-medium">
                    <Link href={`/schools/${s.slug}`} className="text-[#c5a46e] group-hover:underline">{s.name}</Link>
                    <div className="font-mono text-[10px] text-[#c5a46e]">{s.indexNo}</div>
                  </td>
                  <td className="py-3 px-5 text-[#aaa]">{s.county}</td>
                  <td className="py-3 px-5"><span className={`badge ${getTierClass(s.tier)}`}>{formatTier(s.tier)}</span></td>
                  <td className="py-3 px-5">{s.gender && <span className={`badge ${getGenderClass(s.gender)}`}>{s.gender}</span>}</td>
                  <td className="py-3 px-5 font-mono text-xs text-[#666]">{s.rank ?? '—'}</td>
                  <td className="py-3 px-5 text-right"><Link href={`/schools/${s.slug}`} className="text-xs text-[#c5a46e]">Details →</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {filtered.length > (compact ? 9 : 48) && (
        <div className="p-6 text-center text-sm border-t border-white/10 text-[#666]">
          Showing first {compact ? 9 : 48} • <Link href="/directory" className="text-[#c5a46e]">View full directory</Link>
        </div>
      )}
    </div>
  );
}
