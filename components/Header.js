'use client';

import Link from 'next/link';
import { useLang } from './LanguageProvider';
import Logo from './Logo';

export default function Header() {
  const { t, lang, toggle } = useLang();

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-ink/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Logo />
          <span className="font-displayen text-lg font-semibold tracking-tight text-platinum">
            {t.brand}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm text-silvermid transition hover:text-platinum">
            {t.nav.home}
          </Link>
          <Link href="/#tools" className="text-sm text-silvermid transition hover:text-platinum">
            {t.nav.tools}
          </Link>
          <Link href="/#about" className="text-sm text-silvermid transition hover:text-platinum">
            {t.nav.about}
          </Link>
        </nav>

        <button
          onClick={toggle}
          className="notch-sm border border-olive/60 bg-surface px-4 py-2 text-xs font-semibold tracking-wide text-olivebright transition hover:bg-surface2"
        >
          {lang === 'ar' ? 'EN' : 'AR'}
        </button>
      </div>
    </header>
  );
}
