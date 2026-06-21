'use client';

import React, { useState } from 'react';
import { School } from '@/lib/types';

interface Props {
  school: School;
}

export default function SuggestEditButton({ school }: Props) {
  const [open, setOpen] = useState(false);
  const [field, setField] = useState('notes');
  const [proposed, setProposed] = useState('');
  const [source, setSource] = useState('');
  const [contributorName, setContributorName] = useState('');
  const [message, setMessage] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fields = [
    { value: 'shortName', label: 'Short / Common Name or Nickname' },
    { value: 'address', label: 'Physical Address / Location' },
    { value: 'website', label: 'Website URL' },
    { value: 'phone', label: 'Phone Number' },
    { value: 'email', label: 'Email Address' },
    { value: 'sportsNicknames', label: 'Sports Nicknames' },
    { value: 'notes', label: 'Notes / History / Performance' },
    { value: 'lat', label: 'GPS Latitude' },
    { value: 'lng', label: 'GPS Longitude' },
    { value: 'established', label: 'Year Established' },
  ];

  const currentValue = (school as any)[field] ?? '— (empty)';

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!proposed.trim()) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('schoolId', String(school.id || ''));
      formData.append('schoolSlug', school.slug);
      formData.append('schoolName', school.name);
      formData.append('field', field);
      formData.append('currentValue', String(currentValue));
      formData.append('proposedValue', proposed.trim());
      formData.append('source', source.trim());
      formData.append('contributorName', contributorName.trim());
      formData.append('message', message.trim());

      if (file) {
        formData.append('evidence', file);
      }

      const res = await fetch('/api/suggest', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Failed to submit');
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  function resetAndClose() {
    setOpen(false);
    setSubmitted(false);
    setProposed('');
    setSource('');
    setMessage('');
    setContributorName('');
    setFile(null);
    setError(null);
  }

  return (
    <>
      <button 
        onClick={() => setOpen(true)}
        className="w-full rounded-2xl bg-[var(--green-800)] py-3 text-white text-sm font-medium hover:bg-black active:scale-[0.985] transition"
      >
        Suggest an improvement or correction
      </button>

      {open && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 backdrop-blur p-4" onClick={() => !submitted && !isSubmitting && resetAndClose()}>
          <div 
            className="modal glass w-full max-w-[560px] rounded-3xl overflow-hidden border border-white/15 shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {!submitted ? (
              <>
                <div className="px-6 pt-5 pb-4 border-b">
                  <div className="font-semibold text-xl tracking-tight">Suggest edit for</div>
                  <div className="text-[var(--green-700)] font-medium">{school.name}</div>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4 text-sm">
                  <div>
                    <label className="text-xs font-medium text-slate-600">FIELD TO CHANGE</label>
                    <select value={field} onChange={e => setField(e.target.value)} className="mt-1 w-full rounded-xl border px-3 py-2">
                      {fields.map(f => <option key={f.value} value={f.value}>{f.label}</option>)}
                    </select>
                    <div className="text-[10px] text-slate-500 mt-1">Current: <span className="font-mono">{currentValue}</span></div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-600">PROPOSED NEW VALUE *</label>
                    <textarea required value={proposed} onChange={e => setProposed(e.target.value)} rows={3} className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="Accurate updated value..." />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-slate-600">SOURCE / CITATION *</label>
                      <input required value={source} onChange={e => setSource(e.target.value)} className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="https://... or KSSSA 2025 report" />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-slate-600">YOUR NAME (optional)</label>
                      <input value={contributorName} onChange={e => setContributorName(e.target.value)} className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="Jane Wanjiku" />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-600">ADDITIONAL NOTES</label>
                    <textarea value={message} onChange={e => setMessage(e.target.value)} rows={2} className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="Context or why this matters" />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-600">ATTACH EVIDENCE (image/pdf - stored in Cloudflare R2)</label>
                    <input 
                      type="file" 
                      accept="image/*,.pdf" 
                      onChange={(e) => setFile(e.target.files?.[0] || null)} 
                      className="mt-1 block w-full text-sm" 
                    />
                    {file && <div className="text-[10px] text-emerald-600 mt-1">{file.name}</div>}
                  </div>

                  {error && <div className="text-red-600 text-sm">{error}</div>}

                  <div className="pt-4 flex gap-3">
                    <button 
                      type="submit" 
                      disabled={isSubmitting} 
                      className="flex-1 rounded-2xl bg-[#c5a46e] py-3 font-semibold text-[#050505] disabled:opacity-60"
                    >
                      {isSubmitting ? 'Saving to Neon...' : 'Submit Contribution'}
                    </button>
                    <button type="button" onClick={resetAndClose} className="flex-1 rounded-2xl border border-white/20 py-3" disabled={isSubmitting}>Cancel</button>
                  </div>

                  <p className="text-center text-[10px] text-[#666] pt-2">
                    Saved to database as <span className="text-[#c5a46e]">pending</span>. Will be reviewed.
                  </p>
                </form>
              </>
            ) : (
              <div className="p-8 text-center">
                <div className="text-[#c5a46e] text-4xl mb-2">✓</div>
                <div className="text-2xl font-semibold tracking-tight">Thank you</div>
                <p className="mt-2 text-sm text-[#a3a3a3]">Your contribution and any attached evidence have been recorded in the database.</p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <button onClick={resetAndClose} className="rounded-full border border-white/20 px-7 py-2 text-sm">Close</button>
                  <a href="https://github.com/codeAmani-Labs/kenyan-schools-org" target="_blank" className="rounded-full bg-[#c5a46e] text-[#050505] px-7 py-2 text-sm font-medium">View on GitHub (primary org)</a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
