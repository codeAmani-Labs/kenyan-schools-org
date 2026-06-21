'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const AREAS = [
  { value: 'data', label: 'Data Verification & Entry' },
  { value: 'research', label: 'Research & Sourcing' },
  { value: 'dev', label: 'Web Development & Tools' },
  { value: 'design', label: 'UI/UX & Design' },
  { value: 'community', label: 'Community & Outreach' },
  { value: 'other', label: 'Other' },
];

export default function ApplyFormClient() {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    githubUsername: '',
    email: '',
    motivation: '',
    areasOfInterest: [] as string[],
    experience: '',
    publicListing: true,
  });

  // Prefill from GitHub OAuth
  useEffect(() => {
    const github = searchParams.get('github');
    const name = searchParams.get('name');
    const email = searchParams.get('email');

    if (github || name || email) {
      setFormData(prev => ({
        ...prev,
        githubUsername: github || prev.githubUsername,
        fullName: name || prev.fullName,
        email: email || prev.email,
      }));
    }
  }, [searchParams]);

  const handleAreaToggle = (value: string) => {
    setFormData(prev => ({
      ...prev,
      areasOfInterest: prev.areasOfInterest.includes(value)
        ? prev.areasOfInterest.filter(a => a !== value)
        : [...prev.areasOfInterest, value]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    if (!formData.fullName || !formData.email || !formData.motivation) {
      setError('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    if (formData.areasOfInterest.length === 0) {
      setError('Please select at least one area of interest.');
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Submission failed');
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="glass-card rounded-3xl p-8 text-center">
        <div className="text-6xl mb-4">🎉</div>
        <h1 className="text-3xl font-semibold tracking-tight mb-3">Application Received</h1>
        <p className="text-[#a3a3a3] mb-6">
          Thank you for wanting to contribute. Your application has been submitted and will be reviewed.
        </p>
        <div className="flex gap-3 justify-center">
          <Link href="/" className="rounded-2xl border border-white/20 px-5 py-2 text-sm hover:bg-white/5">Back to Home</Link>
          <a href="https://github.com/codeAmani-Labs/kenyan-schools-org" target="_blank" className="rounded-2xl bg-[#c5a46e] text-[#050505] px-5 py-2 text-sm font-medium">View on GitHub (primary org)</a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="text-sm font-medium block mb-1.5">Full Name *</label>
        <input 
          type="text" 
          required 
          value={formData.fullName}
          onChange={e => setFormData({...formData, fullName: e.target.value})}
          className="w-full bg-black/40 border border-white/15 rounded-2xl px-4 py-3 focus:outline-none focus:border-[#c5a46e]/50" 
          placeholder="Your full name"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="text-sm font-medium block mb-1.5">GitHub Username</label>
          <div className="flex gap-2">
            <input 
              type="text" 
              value={formData.githubUsername}
              onChange={e => setFormData({...formData, githubUsername: e.target.value})}
              className="flex-1 bg-black/40 border border-white/15 rounded-2xl px-4 py-3 focus:outline-none focus:border-[#c5a46e]/50" 
              placeholder="yourusername (strongly encouraged)"
            />
            <a 
              href="/api/auth/github" 
              className="px-4 py-3 text-sm rounded-2xl border border-white/20 hover:bg-white/5 flex items-center whitespace-nowrap"
            >
              Sign in with GitHub
            </a>
          </div>
          <p className="text-[10px] text-[#666] mt-1">Sign in to auto-fill name and username.</p>
        </div>
        <div>
          <label className="text-sm font-medium block mb-1.5">Email Address *</label>
          <input 
            type="email" 
            required 
            value={formData.email}
            onChange={e => setFormData({...formData, email: e.target.value})}
            className="w-full bg-black/40 border border-white/15 rounded-2xl px-4 py-3 focus:outline-none focus:border-[#c5a46e]/50" 
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium block mb-1.5">Why do you want to contribute? *</label>
        <textarea 
          required 
          rows={4}
          value={formData.motivation}
          onChange={e => setFormData({...formData, motivation: e.target.value})}
          className="w-full bg-black/40 border border-white/15 rounded-2xl px-4 py-3 focus:outline-none focus:border-[#c5a46e]/50" 
          placeholder="Tell us about your motivation..."
        />
      </div>

      <div>
        <label className="text-sm font-medium block mb-2">Areas of Interest * (select at least one)</label>
        <div className="grid grid-cols-2 gap-2">
          {AREAS.map(area => (
            <label key={area.value} className="flex items-center gap-2 cursor-pointer text-sm">
              <input 
                type="checkbox" 
                checked={formData.areasOfInterest.includes(area.value)}
                onChange={() => handleAreaToggle(area.value)}
                className="accent-[#c5a46e]"
              />
              {area.label}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="text-sm font-medium block mb-1.5">Relevant Experience or Links</label>
        <textarea 
          rows={3}
          value={formData.experience}
          onChange={e => setFormData({...formData, experience: e.target.value})}
          className="w-full bg-black/40 border border-white/15 rounded-2xl px-4 py-3 focus:outline-none focus:border-[#c5a46e]/50" 
          placeholder="Previous projects, research experience, GitHub links, etc. (optional)"
        />
      </div>

      <div className="pt-2 space-y-3">
        <label className="flex items-start gap-3 text-sm cursor-pointer">
          <input type="checkbox" required className="mt-1 accent-[#c5a46e]" />
          <span>
            I agree to follow the <Link href="/about" className="underline">CodeAmani Labs contribution guidelines</Link> and understand that all contributions must include verifiable sources.
          </span>
        </label>

        <label className="flex items-start gap-3 text-sm cursor-pointer">
          <input 
            type="checkbox" 
            checked={formData.publicListing}
            onChange={e => setFormData({...formData, publicListing: e.target.checked})}
            className="mt-1 accent-[#c5a46e]" 
          />
          <span>
            Opt-in to be listed on the public <Link href="/contributors" className="underline">Approved Contributors</Link> page if approved.
          </span>
        </label>
      </div>

      {error && <p className="text-red-400 text-sm">{error}</p>}

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full rounded-2xl bg-[#c5a46e] py-3 font-medium text-[#050505] disabled:opacity-60 mt-2"
      >
        {isSubmitting ? 'Submitting Application...' : 'Submit Contributor Application'}
      </button>

      <p className="text-center text-xs text-[#666]">
        Applications are reviewed by the CodeAmani Labs team.
      </p>
    </form>
  );
}
