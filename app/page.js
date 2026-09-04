'use client';

import { useLang } from '../components/LanguageProvider';
import HeroGenerator from '../components/HeroGenerator';
import ToolsGrid from '../components/ToolsGrid';

export default function Home() {
  const { t } = useLang();

  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="pointer-events-none absolute -top-24 end-[-10%] h-72 w-72 rounded-full bg-olive/10 blur-3xl animate-drift" />
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-olivebright">
              {t.hero.eyebrow}
            </p>
            <h1 className="mt-4 font-displayen font-displayar text-4xl font-extrabold leading-[1.15] text-platinum sm:text-5xl">
              {t.hero.title1}
              <br />
              <span className="text-olivebright">{t.hero.title2}</span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-silvermid">{t.hero.sub}</p>
          </div>

          <HeroGenerator />
        </div>
      </section>

      <ToolsGrid />
    </>
  );
}
