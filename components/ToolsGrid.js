'use client';

import Link from 'next/link';
import { useLang } from './LanguageProvider';
import { tools } from '../lib/tools';

const order = ['text', 'image', 'model'];

export default function ToolsGrid() {
  const { t, lang } = useLang();

  return (
    <section id="tools" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <p className="text-xs font-semibold uppercase tracking-widest text-olivebright">
        {t.sectionTools.eyebrow}
      </p>
      <h2 className="mt-3 font-displayen font-displayar text-3xl font-bold text-platinum sm:text-4xl">
        {t.sectionTools.title}
      </h2>
      <p className="mt-3 max-w-xl text-sm text-silvermid">{t.sectionTools.sub}</p>

      {order.map((cat) => (
        <div key={cat} className="mt-12">
          <h3 className="mb-5 text-sm font-semibold text-muted">{t.categories[cat]}</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tools
              .filter((tool) => tool.category === cat)
              .map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="notch-sm group border border-line bg-surface p-5 transition hover:border-olive"
                >
                  <p className="font-semibold text-platinum group-hover:text-olivebright">
                    {tool.title[lang]}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-silvermid">{tool.desc[lang]}</p>
                </Link>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
}
