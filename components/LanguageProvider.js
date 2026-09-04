'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { dict } from '../lib/i18n';

const LangContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('ar');

  useEffect(() => {
    const saved = window.localStorage.getItem('nextra-lang');
    if (saved === 'ar' || saved === 'en') setLang(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dict[lang].dir;
    window.localStorage.setItem('nextra-lang', lang);
  }, [lang]);

  const toggle = () => setLang((l) => (l === 'ar' ? 'en' : 'ar'));

  return (
    <LangContext.Provider value={{ lang, setLang, toggle, t: dict[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider');
  return ctx;
}
