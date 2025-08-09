import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeContextValue {
  mode: Exclude<ThemeMode, 'system'>;
  setMode: (mode: Exclude<ThemeMode, 'system'>) => void;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [mode, setModeState] = useState<Exclude<ThemeMode, 'system'>>('light');

  useEffect(() => {
    const stored = localStorage.getItem('edupulse_theme');
    if (stored === 'light' || stored === 'dark') {
      setModeState(stored);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setModeState(prefersDark ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', mode === 'dark');
    localStorage.setItem('edupulse_theme', mode);
  }, [mode]);

  const setMode = (m: Exclude<ThemeMode, 'system'>) => setModeState(m);
  const toggle = () => setModeState((p) => (p === 'dark' ? 'light' : 'dark'));

  const value = useMemo(() => ({ mode, setMode, toggle }), [mode]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}