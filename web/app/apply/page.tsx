import React, { Suspense } from 'react';
import Link from 'next/link';
import ApplyFormClient from './ApplyFormClient';

export const metadata = {
  title: 'Apply to Become a Contributor | CodeAmani Labs',
  description: 'Apply to help maintain the Kenyan Schools Directory. Tracked contributors with GitHub accounts. Opt-in for public listing.',
};

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#f5f5f5]">
      <nav className="glass-nav sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-6 flex h-14 items-center justify-between text-sm">
          <Link href="/" className="font-semibold flex items-center gap-2">
            Kenyan Schools <span className="text-xs text-[#c5a46e]">by CodeAmani Labs</span>
          </Link>
          <div className="flex gap-4">
            <Link href="/contributors" className="hover:text-[#c5a46e]">Contributors</Link>
            <Link href="/contribute" className="hover:text-[#c5a46e]">Contribute</Link>
            <Link href="/about" className="hover:text-[#c5a46e]">About</Link>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-2xl px-6 pt-12 pb-20">
        <div className="mb-8">
          <div className="uppercase text-xs tracking-[3px] text-[#c5a46e] mb-1">JOIN THE TEAM</div>
          <h1 className="text-5xl font-semibold tracking-[-2px]">Apply to Become a Contributor</h1>
          <p className="mt-3 text-lg text-[#a3a3a3]">
            Help build and maintain the most reliable public directory of Kenyan schools. 
            All applications are reviewed by the CodeAmani Labs team.
          </p>
        </div>

        <div className="glass-card rounded-3xl p-8 border border-white/10">
          <Suspense fallback={<div className="text-center py-8">Loading form...</div>}>
            <ApplyFormClient />
          </Suspense>
        </div>

        <div className="text-center mt-8 text-xs text-[#666]">
          Already a contributor? <Link href="/contribute" className="text-[#c5a46e] underline">Suggest edits</Link>
        </div>
      </div>
    </div>
  );
}
