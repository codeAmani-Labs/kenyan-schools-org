'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface Application {
  id: string;
  fullName: string;
  githubUsername: string | null;
  email: string;
  motivation: string;
  areasOfInterest: string[];
  experience: string | null;
  publicListing: boolean;
  status: string;
  submittedAt: string;
}

export default function AdminApplications() {
  const [secret, setSecret] = useState('');
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const load = async (s?: string) => {
    const key = s || secret;
    if (!key) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/applications?secret=${encodeURIComponent(key)}`);
      const data = await res.json();
      if (data.error) {
        setMessage(data.error);
      } else {
        setApplications(data.applications || []);
        setMessage('');
      }
    } catch (e) {
      setMessage('Failed to load applications');
    }
    setLoading(false);
  };

  const updateStatus = async (id: string, status: 'approved' | 'rejected') => {
    const key = secret;
    const res = await fetch('/api/admin/applications', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret: key, id, status }),
    });
    const data = await res.json();
    setMessage(data.message || data.error || 'Updated');
    load();
  };

  return (
    <div className="min-h-screen p-8 max-w-6xl mx-auto bg-[#050505] text-[#f5f5f5]">
      <Link href="/" className="text-sm text-[#c5a46e]">← Home</Link>
      <h1 className="text-4xl font-semibold mt-4 mb-2 tracking-tight">Contributor Applications</h1>
      <p className="text-sm text-[#666] mb-6">Review applications for tracked contributors. Protected by ADMIN_SECRET.</p>

      <div className="flex gap-2 mb-4">
        <input
          type="password"
          placeholder="ADMIN_SECRET"
          value={secret}
          onChange={e => setSecret(e.target.value)}
          className="border border-white/20 bg-black/40 px-3 py-2 rounded flex-1"
        />
        <button onClick={() => load()} className="px-4 rounded bg-[#c5a46e] text-[#050505] font-medium">Load</button>
      </div>

      {message && <div className="mb-4 p-3 bg-white/5 border border-white/10 text-sm rounded-2xl">{message}</div>}

      {loading && <p>Loading...</p>}

      <div className="space-y-4">
        {applications.length === 0 && !loading && <p className="text-[#666]">No applications found (or wrong secret).</p>}

        {applications.map((app) => (
          <div key={app.id} className="glass-card rounded-3xl p-6 border border-white/10">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="font-semibold text-xl">{app.fullName}</div>
                <div className="text-sm text-[#c5a46e] mt-0.5">
                  {app.githubUsername ? (
                    <a href={`https://github.com/${app.githubUsername}`} target="_blank" className="hover:underline">
                      @{app.githubUsername}
                    </a>
                  ) : 'No GitHub provided'}
                  {' • '}
                  <a href={`mailto:${app.email}`} className="hover:underline">{app.email}</a>
                </div>
                <div className="text-xs text-[#666] mt-1">
                  Applied: {new Date(app.submittedAt).toLocaleDateString()} 
                  {app.publicListing ? ' • Public listing: Yes' : ' • Public listing: No'}
                </div>
              </div>
              <div className={`text-xs px-3 py-1 rounded-full ${app.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' : app.status === 'approved' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                {app.status}
              </div>
            </div>

            <div className="mb-4">
              <div className="text-xs uppercase tracking-widest text-[#666] mb-1">Areas of Interest</div>
              <div className="flex flex-wrap gap-2">
                {app.areasOfInterest.map((area, i) => (
                  <span key={i} className="text-xs bg-white/10 px-2.5 py-0.5 rounded-full">{area}</span>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <div className="text-xs uppercase tracking-widest text-[#666] mb-1">Motivation</div>
              <p className="text-sm leading-relaxed text-[#ccc]">{app.motivation}</p>
            </div>

            {app.experience && (
              <div className="mb-4">
                <div className="text-xs uppercase tracking-widest text-[#666] mb-1">Experience</div>
                <p className="text-sm text-[#ccc]">{app.experience}</p>
              </div>
            )}

            {app.status === 'pending' && (
              <div className="flex gap-3 pt-2">
                <button 
                  onClick={() => updateStatus(app.id, 'approved')} 
                  className="px-5 py-2 text-sm rounded-2xl bg-emerald-600 hover:bg-emerald-700"
                >
                  Approve
                </button>
                <button 
                  onClick={() => updateStatus(app.id, 'rejected')} 
                  className="px-5 py-2 text-sm rounded-2xl border border-white/20 hover:bg-white/5"
                >
                  Reject
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
