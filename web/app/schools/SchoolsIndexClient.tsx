'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import schoolsData from '@/data/schools.json';
import { School } from '@/lib/types';

const allSchools = schoolsData as School[];

function groupByCounty(schools: School[]) {
  const groups: { [key: string]: School[] } = {};
  schools
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach((school) => {
      const county = school.county || 'Unknown';
      if (!groups[county]) groups[county] = [];
      groups[county].push(school);
    });
  return Object.keys(groups)
    .sort()
    .reduce((obj: any, key) => { obj[key] = groups[key]; return obj; }, {});
}

function groupByLetter(schools: School[]) {
  const groups: { [key: string]: School[] } = {};
  schools
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach((school) => {
      const firstLetter = school.name.charAt(0).toUpperCase();
      if (!groups[firstLetter]) groups[firstLetter] = [];
      groups[firstLetter].push(school);
    });
  return Object.keys(groups)
    .sort()
    .reduce((obj: any, key) => { obj[key] = groups[key]; return obj; }, {});
}

export default function SchoolsIndexClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTiers, setSelectedTiers] = useState<string[]>([]);
  const [selectedGenders, setSelectedGenders] = useState<string[]>([]);
  const [groupBy, setGroupBy] = useState<'county' | 'letter'>('county');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(50);
  const [sortBy, setSortBy] = useState<'name' | 'indexNo'>('name');

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const didInitRef = useRef(false);

  // Initialize from URL once
  useEffect(() => {
    if (didInitRef.current) return;

    const q = searchParams.get('q') || '';
    const tierStr = searchParams.get('tier') || '';
    const genderStr = searchParams.get('gender') || '';
    const grp = searchParams.get('group') as 'county' | 'letter' | null;
    const srt = searchParams.get('sort') as 'name' | 'indexNo' | null;
    const pg = parseInt(searchParams.get('page') || '1', 10);
    const sz = parseInt(searchParams.get('size') || '50', 10);

    setSearchQuery(q);
    if (tierStr) setSelectedTiers(tierStr.split(',').filter(Boolean));
    if (genderStr) setSelectedGenders(genderStr.split(',').filter(Boolean));
    if (grp === 'county' || grp === 'letter') setGroupBy(grp);
    if (srt === 'name' || srt === 'indexNo') setSortBy(srt);
    if (pg >= 1) setCurrentPage(pg);
    if (sz >= 10) setPageSize(sz);

    didInitRef.current = true;
  }, [searchParams]);

  // Sync state to URL for shareable filters
  useEffect(() => {
    if (!didInitRef.current) return;

    const params = new URLSearchParams();
    if (searchQuery) params.set('q', searchQuery);
    if (selectedTiers.length > 0) params.set('tier', selectedTiers.join(','));
    if (selectedGenders.length > 0) params.set('gender', selectedGenders.join(','));
    if (groupBy !== 'county') params.set('group', groupBy);
    if (sortBy !== 'name') params.set('sort', sortBy);
    if (currentPage > 1) params.set('page', String(currentPage));
    if (pageSize !== 50) params.set('size', String(pageSize));

    const query = params.toString();
    const newUrl = query ? `${pathname}?${query}` : pathname;

    router.replace(newUrl, { scroll: false });
  }, [searchQuery, selectedTiers, selectedGenders, groupBy, sortBy, currentPage, pageSize, pathname, router]);

  const allTiers = Array.from(new Set(allSchools.map(s => s.tier))).sort();
  const allGenders = Array.from(new Set(allSchools.map(s => s.gender).filter(Boolean) as string[])).sort();

  const filteredSchools = useMemo(() => {
    let result = [...allSchools];

    // Hide coverage gap placeholder schools (as requested)
    result = result.filter((s) => !s.name.includes('[Coverage gap') && s.name !== '[Coverage gap - see note]');

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(s =>
        s.name.toLowerCase().includes(q) ||
        (s.shortName && s.shortName.toLowerCase().includes(q)) ||
        (s.notes && s.notes.toLowerCase().includes(q)) ||
        s.county.toLowerCase().includes(q) ||
        s.indexNo.toLowerCase().includes(q)
      );
    }

    if (selectedTiers.length > 0) {
      result = result.filter(s => selectedTiers.includes(s.tier));
    }

    if (selectedGenders.length > 0) {
      result = result.filter(s => s.gender && selectedGenders.includes(s.gender));
    }

    result.sort((a, b) => {
      if (sortBy === 'indexNo') return a.indexNo.localeCompare(b.indexNo);
      return a.name.localeCompare(b.name);
    });

    return result;
  }, [searchQuery, selectedTiers, selectedGenders, sortBy]);

  const grouped = useMemo(() => {
    return groupBy === 'county' ? groupByCounty(filteredSchools) : groupByLetter(filteredSchools);
  }, [filteredSchools, groupBy]);

  const totalItems = filteredSchools.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalItems);
  const paginatedFlat = filteredSchools.slice(startIndex, endIndex);

  const paginatedGrouped = useMemo(() => {
    return groupBy === 'county' ? groupByCounty(paginatedFlat) : groupByLetter(paginatedFlat);
  }, [paginatedFlat, groupBy]);

  const paginatedGroupKeys = Object.keys(paginatedGrouped);

  const toggleTier = (tier: string) => {
    setSelectedTiers(prev => prev.includes(tier) ? prev.filter(t => t !== tier) : [...prev, tier]);
    setCurrentPage(1);
  };

  const toggleGender = (gender: string) => {
    setSelectedGenders(prev => prev.includes(gender) ? prev.filter(g => g !== gender) : [...prev, gender]);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedTiers([]);
    setSelectedGenders([]);
    setCurrentPage(1);
  };

  const changePage = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 180, behavior: 'smooth' });
    }
  };

  const hasActiveFilters = searchQuery || selectedTiers.length > 0 || selectedGenders.length > 0;
  const groupKeys = Object.keys(grouped);

  return (
    <div className="min-h-screen bg-[#050505] text-[#f5f5f5]">
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-16">
        {/* Header (static part moved to server for SEO if needed, but here for completeness) */}
        <div className="mb-8">
          <div className="section-label uppercase text-xs tracking-[3px] text-[#c5a46e] mb-1">COMPLETE ARCHIVE</div>
          <h1 className="hero-title text-5xl sm:text-6xl font-semibold tracking-[-2.5px] mb-3">
            Kenyan Schools Index
          </h1>
          <p className="text-lg text-[#a3a3a3] max-w-3xl">
            Search and browse 1,127+ secondary schools. Grouped primarily by county. 
            Each school has a unique <span className="font-mono text-[#c5a46e]">KSO-XXXX</span> index number. 
            Built by CodeAmani Labs — Founder: codeAmani-Solutions (Barnabas Waweru).
          </p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-[#666]">
            <span><span className="font-semibold text-[#f5f5f5]">{allSchools.length}</span> total schools</span>
            <span><span className="font-semibold text-[#f5f5f5]">{totalItems}</span> matching</span>
          </div>
        </div>

        {/* Sticky Filters */}
        <div className="sticky top-14 z-40 glass-card rounded-3xl p-5 mb-6 border border-white/10 bg-[#050505]/95 backdrop-blur">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
            {/* Search */}
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
              placeholder="Search name, county, KSO-XXXX..."
              className="flex-1 w-full bg-black/40 border border-white/15 rounded-2xl px-4 py-3 text-base placeholder:text-[#666] focus:outline-none focus:border-[#c5a46e]/60"
            />

            {/* Group by */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#666] uppercase tracking-widest">Group</span>
              <div className="flex rounded-2xl border border-white/15 overflow-hidden">
                <button
                  onClick={() => { setGroupBy('county'); setCurrentPage(1); }}
                  className={`px-4 py-1.5 text-sm transition ${groupBy === 'county' ? 'bg-[#c5a46e] text-[#050505] font-medium' : 'hover:bg-white/5'}`}
                >
                  County
                </button>
                <button
                  onClick={() => { setGroupBy('letter'); setCurrentPage(1); }}
                  className={`px-4 py-1.5 text-sm transition ${groupBy === 'letter' ? 'bg-[#c5a46e] text-[#050505] font-medium' : 'hover:bg-white/5'}`}
                >
                  Letter
                </button>
              </div>
            </div>

            {/* Tier filters */}
            <div className="flex flex-wrap gap-2">
              {allTiers.map(tier => (
                <button
                  key={tier}
                  onClick={() => toggleTier(tier)}
                  className={`text-xs px-3 py-1 rounded-full border transition ${selectedTiers.includes(tier) ? 'bg-[#c5a46e] text-[#050505] border-[#c5a46e]' : 'border-white/20 hover:border-[#c5a46e]/40'}`}
                >
                  {tier}
                </button>
              ))}
            </div>

            {/* Gender filters */}
            <div className="flex flex-wrap gap-2">
              {allGenders.map(gender => (
                <button
                  key={gender}
                  onClick={() => toggleGender(gender)}
                  className={`text-xs px-3 py-1 rounded-full border transition ${selectedGenders.includes(gender) ? 'bg-[#c5a46e] text-[#050505] border-[#c5a46e]' : 'border-white/20 hover:border-[#c5a46e]/40'}`}
                >
                  {gender}
                </button>
              ))}
            </div>

            {/* Sort */}
            <select value={sortBy} onChange={(e) => { setSortBy(e.target.value as any); setCurrentPage(1); }} className="bg-black/40 border border-white/15 rounded-2xl px-3 py-2 text-sm">
              <option value="name">Sort: Name</option>
              <option value="indexNo">Sort: Index</option>
            </select>

            {/* Page size */}
            <select value={pageSize} onChange={(e) => { setPageSize(Number(e.target.value)); setCurrentPage(1); }} className="bg-black/40 border border-white/15 rounded-2xl px-3 py-2 text-sm">
              <option value={25}>25/page</option>
              <option value={50}>50/page</option>
              <option value={100}>100/page</option>
              <option value={9999}>All</option>
            </select>

            {hasActiveFilters && (
              <button onClick={clearFilters} className="text-xs px-4 py-2 rounded-full border border-white/20 hover:bg-red-500/10 text-red-400">Clear</button>
            )}

            {/* Export current page only */}
            {paginatedFlat.length > 0 && (
              <div className="flex gap-2 ml-auto lg:ml-0">
                <button 
                  onClick={() => {
                    const headers = ['Index No','Name','County','Tier','Gender','Cluster','URL'];
                    const rows = paginatedFlat.map(s => [
                      s.indexNo,
                      `"${(s.name||'').replace(/"/g,'""')}"`,
                      s.county||'',
                      s.tier||'',
                      s.gender||'',
                      s.cluster||'',
                      `https://kenyanschool.org/schools/${s.slug}`
                    ]);
                    const csv = [headers.join(','), ...rows.map(r=>r.join(','))].join('\n');
                    const blob = new Blob([csv], {type:'text/csv'});
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `kenyan-schools-page-${currentPage}-${new Date().toISOString().slice(0,10)}.csv`;
                    a.click();
                    URL.revokeObjectURL(url);
                  }}
                  className="text-xs px-3 py-1.5 rounded-2xl border border-white/20 hover:bg-white/5"
                >
                  Export page CSV
                </button>
                <button 
                  onClick={() => {
                    const data = paginatedFlat.map(s => ({
                      indexNo: s.indexNo,
                      name: s.name,
                      county: s.county,
                      tier: s.tier,
                      gender: s.gender,
                      cluster: s.cluster,
                      url: `https://kenyanschool.org/schools/${s.slug}`
                    }));
                    const blob = new Blob([JSON.stringify(data, null, 2)], {type:'application/json'});
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `kenyan-schools-page-${currentPage}-${new Date().toISOString().slice(0,10)}.json`;
                    a.click();
                    URL.revokeObjectURL(url);
                  }}
                  className="text-xs px-3 py-1.5 rounded-2xl border border-white/20 hover:bg-white/5"
                >
                  Export page JSON
                </button>
              </div>
            )}

            {/* Copy shareable link */}
            <button 
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(window.location.href);
                  alert('Link copied to clipboard!');
                } catch (e) {
                  prompt('Copy this link:', window.location.href);
                }
              }}
              className="text-xs px-3 py-1.5 rounded-2xl border border-white/20 hover:bg-white/5"
            >
              Copy link
            </button>
          </div>

          <div className="text-xs text-[#666] mt-3">
            Showing {Math.min(startIndex + 1, totalItems)}–{endIndex} of {totalItems} • Page {currentPage} of {Math.max(1, Math.ceil(totalItems / pageSize))}
          </div>
        </div>

        {/* Results - Grouped + Paginated */}
        <div className="space-y-10">
          {Object.keys(paginatedGrouped || {}).length === 0 && (
            <div className="text-center py-12 text-[#666]">
              No matches. <button onClick={clearFilters} className="underline">Clear all</button>
            </div>
          )}

          {Object.keys(paginatedGrouped || {}).map((key) => {
            const items: School[] = paginatedGrouped[key];
            return (
              <section key={key} className="scroll-mt-20">
                <div className="flex items-baseline gap-3 mb-3">
                  <h2 className="text-3xl font-semibold tracking-tighter text-[#c5a46e]">{key}</h2>
                  <span className="text-sm text-[#666] font-mono">{items.length} schools</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-1 text-sm">
                  {items.map((school: School) => (
                    <Link 
                      key={school.id} 
                      href={`/schools/${school.slug}`} 
                      className="group flex items-center justify-between gap-3 py-2 border-b border-white/5 hover:border-[#c5a46e]/30 hover:text-[#c5a46e] transition-all"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="font-mono text-xs text-[#c5a46e] shrink-0">{school.indexNo}</span>
                        <span className="truncate group-hover:underline">{school.name}</span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0 text-xs">
                        <span className={`badge ${school.tier === 'National' ? 'badge-national' : 'border-white/10'}`}>{school.tier}</span>
                        {school.gender && (
                          <span className="badge text-[10px] border-white/10">{school.gender}</span>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Pagination */}
        {Math.ceil(totalItems / pageSize) > 1 && (
          <div className="mt-10 flex flex-wrap gap-2 items-center justify-center pt-6 border-t border-white/10">
            <button 
              onClick={() => changePage(currentPage - 1)} 
              disabled={currentPage === 1} 
              className="px-4 py-2 rounded-2xl border border-white/15 disabled:opacity-40 hover:bg-white/5"
            >
              Prev
            </button>
            <span className="px-4 text-sm text-[#666]">Page {currentPage} / {Math.ceil(totalItems / pageSize)}</span>
            <button 
              onClick={() => changePage(currentPage + 1)} 
              disabled={currentPage >= Math.ceil(totalItems / pageSize)} 
              className="px-4 py-2 rounded-2xl border border-white/15 disabled:opacity-40 hover:bg-white/5"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
