'use client';

import React, { useEffect, useState } from 'react';

const THEMES = [
  { id: 'obsidian-gold', label: 'Obsidian Gold', icon: '◐', color: '#c5a46e' },
  { id: 'cream', label: 'Cream Document', icon: '☼', color: '#9a7440' },
  { id: 'sapphire', label: 'Midnight Sapphire', icon: '◆', color: '#7aa8ff' },
  { id: 'savanna', label: 'Savanna Earth', icon: '⛅', color: '#d4a017' },
  { id: 'obsidian', label: 'Pure Obsidian', icon: '●', color: '#e0e0e0' },
  { id: 'dawn', label: 'Dawn Light', icon: '◑', color: '#8c6642' },
  { id: 'forest', label: 'Forest Teal', icon: '🌲', color: '#5aa38a' },
  { id: 'amethyst', label: 'Amethyst', icon: '◇', color: '#b38be8' },
] as const;

interface ThemeSwitcherProps {
  floating?: boolean;
}

export default function ThemeSwitcher({ floating = false }: ThemeSwitcherProps) {
  const [currentTheme, setCurrentTheme] = useState<string>('obsidian-gold');
  const [isOpen, setIsOpen] = useState(false);

  // Load and apply theme on mount
  useEffect(() => {
    const saved = localStorage.getItem('kso-theme') || 'obsidian-gold';
    setCurrentTheme(saved);
    document.documentElement.setAttribute('data-theme', saved);
  }, []);

  // Sync across multiple switcher instances (e.g. nav + floating) and from ThemeHint
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === 'kso-theme' && e.newValue) {
        const t = e.newValue;
        setCurrentTheme(t);
        document.documentElement.setAttribute('data-theme', t);
      }
    };
    const onCustomTheme = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail?.theme) {
        setCurrentTheme(detail.theme);
      }
    };
    window.addEventListener('storage', onStorage);
    window.addEventListener('kso-theme-change', onCustomTheme as EventListener);
    return () => {
      window.removeEventListener('storage', onStorage);
      window.removeEventListener('kso-theme-change', onCustomTheme as EventListener);
    };
  }, []);

  const applyTheme = (theme: string) => {
    setCurrentTheme(theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('kso-theme', theme);
    setIsOpen(false);

    // notify other ThemeSwitcher instances + hints
    window.dispatchEvent(new CustomEvent('kso-theme-change', { detail: { theme } }));

    // subtle animation
    document.documentElement.style.transition = 'background 0.25s ease, color 0.25s ease';
    setTimeout(() => {
      document.documentElement.style.transition = '';
    }, 300);
  };

  const current = THEMES.find(t => t.id === currentTheme) || THEMES[0];

  const buttonClass = floating
    ? "fixed bottom-6 right-6 z-[100] glass rounded-full w-11 h-11 flex items-center justify-center text-xl border border-white/15 shadow-lg hover:border-[var(--accent)] transition-all active:scale-95"
    : "glass rounded-full px-3 py-1.5 text-xs border border-white/10 flex items-center gap-1.5 hover:border-[#c5a46e]/40 transition-colors";

  const panelClass = floating
    ? "fixed bottom-20 right-6 z-[100] w-56 glass-card border border-white/10 rounded-3xl shadow-2xl py-2 text-sm"
    : "absolute right-0 mt-2 w-48 glass-card border border-white/10 rounded-2xl shadow-xl z-50 py-1 text-sm";

  return (
    <div className={floating ? "" : "relative"}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={buttonClass}
        aria-label="Change theme"
        title={`Current: ${current.label}`}
      >
        <span>{current.icon}</span>
        {!floating && (
          <span className="hidden sm:inline text-[10px] tracking-widest uppercase opacity-70">
            {current.label.split(' ')[0]}
          </span>
        )}
      </button>

      {isOpen && (
        <div className={panelClass}>
          <div className="px-3 pb-2 text-[10px] uppercase tracking-[1.5px] text-[var(--subtle)] border-b border-white/10 mx-3 mb-1">
            Choose Theme
          </div>
          {THEMES.map((theme) => (
            <button
              key={theme.id}
              onClick={() => applyTheme(theme.id)}
              className={`w-full px-4 py-2.5 text-left flex items-center gap-3 hover:bg-white/5 transition-colors ${currentTheme === theme.id ? 'font-medium' : ''}`}
              style={{ color: currentTheme === theme.id ? 'var(--accent)' : 'inherit' }}
            >
              <span className="text-xl" style={{ color: theme.color }}>{theme.icon}</span>
              <span className="flex-1">{theme.label}</span>
              {currentTheme === theme.id && <span className="text-xs">✓</span>}
              <span className="w-3 h-3 rounded-full border border-white/30 flex-shrink-0" style={{ background: theme.color }} />
            </button>
          ))}
          <div className="px-4 pt-2 mt-1 border-t border-white/10 text-[10px] text-[var(--subtle)]">
            Saved in browser
          </div>
        </div>
      )}
    </div>
  );
}
