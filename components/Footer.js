'use client';

import Link from 'next/link';
import { useLang } from './LanguageProvider';
import { tools } from '../lib/tools';

export default function Footer() {
  const { t, lang } = useLang();

  const quick = [
    { href: '/', label: lang === 'ar' ? 'الرئيسية' : 'Home' },
    { href: '/#tools', label: lang === 'ar' ? 'الأدوات' : 'Tools' },
    { href: '/#about', label: lang === 'ar' ? 'عن الشركة' : 'About' }
  ];

  return (
    <footer id="about" className="mt-24 border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-displayen text-lg font-semibold text-platinum">{t.brand}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-silvermid">
              {lang === 'ar'
                ? 'استوديو أوامر ذكاء اصطناعي مصغّر، بمحرك واحد وأدوات محددة الغرض.'
                : 'A focused AI-prompt studio, one engine, purpose-built tools.'}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">
              {t.footer.quickLinks}
            </p>
            <ul className="mt-4 space-y-2">
              {quick.map((q) => (
                <li key={q.href}>
                  <Link href={q.href} className="text-sm text-silvermid hover:text-olivebright">
                    {q.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">
              {t.footer.toolsLinks}
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
              {tools.slice(0, 6).map((tool) => (
                <li key={tool.slug}>
                  <Link
                    href={`/tools/${tool.slug}`}
                    className="text-sm text-silvermid hover:text-olivebright"
                  >
                    {tool.title[lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-8 text-center">
          <p
            dir={lang === 'ar' ? 'rtl' : 'ltr'}
            className="grad-text mx-auto max-w-2xl font-displayar text-base font-extrabold leading-relaxed sm:text-lg"
          >
            {lang === 'ar'
              ? 'بكل فخر، تم التطوير بواسطة شركة nextra.ai'
              : 'Proudly developed by nextra.ai'}
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-silvermid">
            <span>
              {t.footer.phoneLabel}:{' '}
              <a href="tel:+447961003827" className="text-olivebright hover:underline" dir="ltr">
                +44 7961 003827
              </a>
            </span>
            <span>
              {lang === 'ar' ? 'البريد' : 'Email'}:{' '}
              <a
                href="mailto:nextra.ai.EU@gmail.com"
                className="text-olivebright hover:underline"
              >
                nextra.ai.EU@gmail.com
              </a>
            </span>
          </div>

          <p className="mt-6 text-xs text-muted">
            © {new Date().getFullYear()} nextra.ai — {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
