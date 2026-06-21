'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface Suggestion {
  id: string;
  schoolId: string | null;
  proposedSchoolName?: string;
  field: string;
  currentValue: string | null;
  proposedValue: string;
  source: string | null;
  contributorName: string | null;
  status: string;
  createdAt: string;
  attachments?: any[];
}

export default function AdminSuggestions() {
  const [secret, setSecret] = useState('');
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const load = async (s?: string) => {
    const key = s || secret;
    if (!key) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/suggestions?secret=${encodeURIComponent(key)}`);
      const data = await res.json();
      if (data.error) {
        setMessage(data.error);
      } else {
        setSuggestions(data.suggestions || []);
        setMessage('');
      }
    } catch (e) {
      setMessage('Failed to load');
    }
    setLoading(false);
  };

  async function act(id: string, action: 'approve' | 'reject') {
    const key = secret;
    const res = await fetch('/api/admin/suggestions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret: key, id, action }),
    });
    const data = await res.json();
    setMessage(data.message || data.error || 'Done');
    load();
  }

  return (
    <div className="min-h-screen p-8 max-w-5xl mx-auto bg-[#050505] text-[#f5f5f5]">
      <Link href="/" className="text-sm text-[#c5a46e]">← Home</Link>
      <h1 className="text-4xl font-semibold mt-4 mb-2 tracking-tight">Review Suggestions</h1>
      <p className="text-sm text-[#666] mb-8">Protected by ADMIN_SECRET. Live data in Neon + evidence in R2. <Link href="/admin/applications" className="text-[#c5a46e] underline">View Contributor Applications →</Link></p>

      <div className="flex gap-2 mb-4">
        <input
          type="password"
          placeholder="ADMIN_SECRET"
          value={secret}
          onChange={e => setSecret(e.target.value)}
          className="border px-3 py-2 rounded flex-1"
        />
        <button onClick={() => load()} className="px-4 rounded bg-black text-white">Load</button>
      </div>

      {message && <div className="mb-4 p-3 bg-yellow-50 border text-sm">{message}</div>}

      {loading && <p>Loading...</p>}

      <div className="space-y-4">
        {suggestions.length === 0 && !loading && <p>No suggestions found (or wrong secret).</p>}

        {suggestions.map((sug) => (
          <div key={sug.id} className="border rounded-2xl p-5 bg-white">
            <div className="flex justify-between">
              <div>
                <div className="font-medium">{sug.proposedSchoolName || sug.schoolId || 'Unknown school'}</div>
                <div className="text-xs text-slate-500">Field: <span className="font-mono">{sug.field}</span> • {new Date(sug.createdAt).toLocaleString()}</div>
              </div>
              <div className={`text-xs px-2 py-0.5 rounded ${sug.status === 'pending' ? 'bg-amber-100' : sug.status === 'approved' ? 'bg-green-100' : 'bg-red-100'}`}>
                {sug.status}
              </div>
            </div>

            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-slate-500 text-xs">CURRENT</div>
                <div className="font-mono whitespace-pre-wrap">{sug.currentValue || '—'}</div>
              </div>
              <div>
                <div className="text-slate-500 text-xs">PROPOSED</div>
                <div className="font-mono whitespace-pre-wrap">{sug.proposedValue}</div>
              </div>
            </div>

            {sug.source && <div className="mt-2 text-sm">Source: <span className="text-[var(--green-700)]">{sug.source}</span></div>}
            {sug.contributorName && <div className="text-xs">By: {sug.contributorName}</div>}

            {sug.attachments && sug.attachments.length > 0 && (
              <div className="mt-2">
                {sug.attachments.map((a: any, i: number) => (
                  <a key={i} href={a.r2Url} target="_blank" className="text-xs underline text-blue-600 mr-3">Evidence #{i+1} ↗</a>
                ))}
              </div>
            )}

            {sug.status === 'pending' && (
              <div className="mt-4 flex gap-2">
                <button onClick={() => act(sug.id, 'approve')} className="px-4 py-1 text-sm bg-emerald-600 text-white rounded">Approve + Apply</button>
                <button onClick={() => act(sug.id, 'reject')} className="px-4 py-1 text-sm border rounded">Reject</button>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 text-xs text-slate-500">
        Approving will apply the change to the School record in Neon and mark the suggestion approved.
      </div>
    </div>
  );
}
