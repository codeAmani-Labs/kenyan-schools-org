'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Footer from '../components/Footer';

export default function ContributePage() {
  const [mode, setMode] = useState<'edit' | 'new'>('edit');
  const [schoolName, setSchoolName] = useState('');
  const [county, setCounty] = useState('');
  const [field, setField] = useState('notes');
  const [current, setCurrent] = useState('');
  const [proposed, setProposed] = useState('');
  const [source, setSource] = useState('');
  const [notes, setNotes] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('schoolName', schoolName || '(New school proposal)');
      formData.append('field', mode === 'new' ? 'NEW_SCHOOL' : field);
      formData.append('currentValue', current || '');
      formData.append('proposedValue', proposed);
      formData.append('source', source);
      formData.append('message', notes);
      if (county) formData.append('proposedCounty', county);
      if (file) formData.append('evidence', file);

      const res = await fetch('/api/suggest', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error('Submission failed');

      const data = await res.json();
      setSubmitted({ ...data, schoolName: schoolName || '(New school)', field: mode === 'new' ? 'NEW_SCHOOL' : field, proposed });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#050505] text-[#f5f5f5]">
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-3xl px-6 py-5 flex items-center justify-between">
          <Link href="/" className="font-semibold">Kenyan Schools <span className="text-xs text-[#c5a46e]">by CodeAmani Labs</span></Link>
          <div className="flex items-center gap-6 text-sm font-medium ml-auto">
            <Link href="/schools" className="hover:text-[#c5a46e]">Index</Link>
            <Link href="/contributors" className="hover:text-[#c5a46e]">Contributors</Link>
            <Link href="/apply" className="hover:text-[#c5a46e]">Apply</Link>
          </div>
          <Link href="/directory" className="text-sm text-[#c5a46e]">← Directory</Link>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-14">
        <div className="mb-10">
          <div className="section-header uppercase text-xs tracking-[3px] text-[#c5a46e]">CONTRIBUTE TO THE LEGACY</div>
          <h1 className="text-6xl font-semibold tracking-[-2px] mt-3 leading-none">Add or improve<br />an entry</h1>
          <p className="mt-4 max-w-md text-xl text-[#c5b9a3]">Every contribution requires a source. This is a public archive. Built and maintained by CodeAmani Labs — Founder: codeAmani-Solutions (Barnabas Waweru).</p>
          <p className="mt-2 text-sm"><Link href="/apply" className="text-[#c5a46e] underline">Prefer to apply as a tracked contributor with GitHub?</Link></p>
        </div>

        <div className="mb-5 flex rounded-2xl border bg-white p-1 w-fit text-sm">
          <button onClick={() => setMode('edit')} className={`px-5 py-1.5 rounded-[14px] ${mode === 'edit' ? 'bg-[var(--green-800)] text-white' : 'hover:bg-slate-50'}`}>Suggest change to existing school</button>
          <button onClick={() => setMode('new')} className={`px-5 py-1.5 rounded-[14px] ${mode === 'new' ? 'bg-[var(--green-800)] text-white' : 'hover:bg-slate-50'}`}>Propose a new school</button>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-5 glass-card rounded-3xl p-8 border border-white/10">
            <div>
              <label className="font-medium text-sm">School name *</label>
              <input required value={schoolName} onChange={e=>setSchoolName(e.target.value)} className="mt-1 w-full border rounded-2xl px-4 py-2.5" placeholder={mode === 'new' ? "e.g. New Sunrise High School, Isiolo" : "Exact name as listed"} />
            </div>

            {mode === 'new' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-medium text-sm">County *</label>
                  <input value={county} onChange={e=>setCounty(e.target.value)} className="mt-1 w-full border rounded-2xl px-4 py-2.5" placeholder="e.g. Isiolo" />
                </div>
                <div>
                  <label className="font-medium text-sm">Tier</label>
                  <input value={field} onChange={e=>setField(e.target.value)} className="mt-1 w-full border rounded-2xl px-4 py-2.5" placeholder="County" />
                </div>
              </div>
            )}

            {mode === 'edit' && (
              <div>
                <label className="font-medium text-sm">Field being updated</label>
                <select value={field} onChange={e=>setField(e.target.value)} className="mt-1 w-full border rounded-2xl px-4 py-2.5">
                  <option value="notes">Notes / Additional info</option>
                  <option value="sportsNicknames">Sports Nicknames</option>
                  <option value="website">Website</option>
                  <option value="address">Address / Location</option>
                  <option value="phone">Phone</option>
                  <option value="lat">Latitude (GPS)</option>
                  <option value="lng">Longitude (GPS)</option>
                </select>
              </div>
            )}

            {mode === 'edit' && (
              <div>
                <label className="font-medium text-sm">Current value</label>
                <input value={current} onChange={e=>setCurrent(e.target.value)} className="mt-1 w-full border rounded-2xl px-4 py-2.5" placeholder="What it shows today (optional)" />
              </div>
            )}

            <div>
              <label className="font-medium text-sm">Proposed value / correction *</label>
              <textarea required value={proposed} onChange={e=>setProposed(e.target.value)} rows={4} className="mt-1 w-full border rounded-2xl px-4 py-2.5" placeholder="Accurate new value..." />
            </div>

            <div>
              <label className="font-medium text-sm">Source / citation * (required)</label>
              <input required value={source} onChange={e=>setSource(e.target.value)} className="mt-1 w-full border rounded-2xl px-4 py-2.5" placeholder="https://... or official source" />
            </div>

            <div>
              <label className="font-medium text-sm">Extra context</label>
              <textarea value={notes} onChange={e=>setNotes(e.target.value)} rows={3} className="mt-1 w-full border rounded-2xl px-4 py-2.5" placeholder="Any other details" />
            </div>

            <div>
              <label className="font-medium text-sm">Attach evidence (optional - goes to Cloudflare R2)</label>
              <input type="file" accept="image/*,.pdf" onChange={e => setFile(e.target.files?.[0] || null)} className="mt-1 block w-full" />
            </div>

            {error && <p className="text-red-600">{error}</p>}

            <button type="submit" disabled={isSubmitting} className="w-full mt-2 rounded-2xl py-3 font-semibold bg-[#c5a46e] text-[#050505] disabled:opacity-60">
              {isSubmitting ? 'Saving to Neon...' : 'Submit to the Archive'}
            </button>

            <p className="text-center text-xs text-[#a99c7f]">Stored in Neon as pending review.</p>
          </form>
        ) : (
          <div className="glass-card rounded-3xl p-8 border border-white/10">
            <div className="text-[#c5a46e] font-semibold text-3xl">Contribution recorded.</div>
            <p className="mt-2 text-[#c5b9a3]">Thank you. It has been saved to the database and awaits review.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button onClick={() => { setSubmitted(null); setSchoolName(''); setProposed(''); setSource(''); setFile(null); }} className="text-sm text-[#c5a46e] underline">Submit another</button>
              <a href="https://github.com/codeAmani-Labs/kenyan-schools-org" target="_blank" className="rounded-full bg-[#c5a46e] text-[#050505] px-5 py-1.5 text-sm font-medium">View on GitHub (primary org)</a>
            </div>
          </div>
        )}

        <div className="mt-12 text-xs text-slate-500">
          Prefer working directly in code? The data lives in <code className="font-mono">data/schools.json</code>. Open a Pull Request on the repository. We review sources the same way Wikipedia does.
        </div>
      </div>

      <Footer />
    </div>
  );
}
