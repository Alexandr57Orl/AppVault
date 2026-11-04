import { useEffect, useState } from 'react';

export type Plan = 'free' | 'plus' | 'yearly';

function read(key: string) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

export function usePreferences() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const stored = read('appvault-theme');
    return stored === 'light' || stored === 'dark'
      ? stored
      : window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
  });
  const [plan, setPlan] = useState<Plan>(() => {
    const stored = read('appvault-demo-plan');
    return stored === 'plus' || stored === 'yearly' ? stored : 'free';
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#101322' : '#f5f5fc');
    try {
      localStorage.setItem('appvault-theme', theme);
    } catch {
      /* Preferences remain in memory. */
    }
  }, [theme]);
  useEffect(() => {
    try {
      localStorage.setItem('appvault-demo-plan', plan);
    } catch {
      /* Preferences remain in memory. */
    }
  }, [plan]);
  return {
    theme,
    toggleTheme: () => setTheme((current) => (current === 'dark' ? 'light' : 'dark')),
    plan,
    setPlan,
  };
}
