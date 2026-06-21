'use client';

import React from 'react';

interface ThemeHintProps {
  suggestedTheme: string;
  label?: string;
  description?: string;
}

export default function ThemeHint({ suggestedTheme, label, description }: ThemeHintProps) {
  const applySuggested = () => {
    document.documentElement.setAttribute('data-theme', suggestedTheme);
    localStorage.setItem('kso-theme', suggestedTheme);
    window.dispatchEvent(new CustomEvent('kso-theme-change', { detail: { theme: suggestedTheme } }));
  };

  return (
    <div className="text-xs inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 text-[var(--subtle)]">
      <span>💡</span>
      <span>{label || 'Recommended theme:'} <strong className="text-[var(--accent)]">{suggestedTheme}</strong></span>
      {description && <span className="opacity-70">— {description}</span>}
      <button 
        onClick={applySuggested}
        className="ml-1 px-2 py-0.5 rounded bg-[var(--accent)]/10 text-[var(--accent)] hover:bg-[var(--accent)]/20 transition text-[10px]"
      >
        Try it
      </button>
    </div>
  );
}
