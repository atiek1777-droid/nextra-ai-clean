'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLang } from './LanguageProvider';

const ASPECTS = [
  { id: 'square', label: { ar: 'مربع', en: 'Square' }, width: 1024, height: 1024 },
  { id: 'portrait', label: { ar: 'طولي', en: 'Portrait' }, width: 832, height: 1216 },
  { id: 'landscape', label: { ar: 'عرضي', en: 'Landscape' }, width: 1216, height: 832 }
];

function buildUrl(prompt, aspect) {
  const params = new URLSearchParams({
    width: String(aspect.width),
    height: String(aspect.height),
    model: 'flux',
    seed: String(Math.floor(Math.random() * 1_000_000))
  });
  return `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?${params.toString()}`;
}

export default function ImageGenTool({ tool }) {
  const { t, lang } = useLang();
  const [prompt, setPrompt] = useState('');
  const [aspect, setAspect] = useState(ASPECTS[0]);
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  function run() {
    if (!prompt.trim()) return;
    setLoading(true);
    setErrorMsg('');
    setImageUrl(buildUrl(prompt, aspect));
  }

  return (
    <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
      <Link href="/#tools" className="text-sm text-olivebright hover:underline">
        ← {t.common.back}
      </Link>

      <h1 className="mt-4 font-displayen font-displayar text-3xl font-bold text-platinum">
        {tool.title[lang]}
      </h1>
      <p className="mt-2 text-sm text-silvermid">{tool.desc[lang]}</p>

      <div className="notch mt-8 border border-olive/40 bg-surface p-5 sm:p-7">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value.slice(0, 500))}
          placeholder={tool.placeholder ? tool.placeholder[lang] : ''}
          rows={3}
          className="field-focus w-full resize-none bg-transparent text-base text-platinum placeholder:text-muted"
        />

        <div className="mt-3 flex flex-wrap gap-2 border-t border-line pt-3">
          {ASPECTS.map((a) => (
            <button
              key={a.id}
              onClick={() => setAspect(a)}
              className={`notch-sm border px-3 py-1.5 text-xs font-semibold transition ${
                aspect.id === a.id
                  ? 'border-olivebright bg-olive text-ink'
                  : 'border-line text-silvermid hover:border-olive'
              }`}
            >
              {a.label[lang]}
            </button>
          ))}
        </div>

        <div className="mt-4 flex justify-end">
          <button
            onClick={run}
            disabled={!prompt.trim()}
            className="notch-sm bg-olive px-6 py-2.5 text-sm font-semibold text-ink transition hover:bg-olivebright disabled:cursor-not-allowed disabled:opacity-50"
          >
            {t.common.run}
          </button>
        </div>

        {errorMsg && <p className="mt-4 text-sm text-olivebright/90">{errorMsg}</p>}

        {imageUrl && (
          <div className="mt-6 border-t border-line pt-6">
            <div className="notch-sm overflow-hidden border border-line bg-ink">
              {loading && (
                <div className="flex h-64 items-center justify-center text-sm text-muted">
                  {t.hero.loading}
                </div>
              )}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageUrl}
                alt={prompt}
                className={loading ? 'hidden' : 'w-full'}
                onLoad={() => setLoading(false)}
                onError={() => {
                  setLoading(false);
                  setErrorMsg(t.common.errorGeneric);
                }}
              />
            </div>
            <a
              href={imageUrl}
              download
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-xs font-semibold text-olivebright hover:underline"
            >
              {lang === 'ar' ? 'تنزيل الصورة' : 'Download image'}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
