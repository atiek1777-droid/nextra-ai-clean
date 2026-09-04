'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLang } from './LanguageProvider';

export default function TextTool({ tool }) {
  const { t, lang } = useLang();
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  async function run() {
    if (!input.trim() || loading) return;
    setLoading(true);
    setErrorMsg('');
    setOutput('');
    try {
      const res = await fetch('/api/text', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug: tool.slug, input, lang })
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(
          data.error === 'MISSING_API_KEY'
            ? t.hero.needKey
            : `${t.common.errorGeneric} [${data.error || 'UNKNOWN'}]`
        );
        return;
      }
      setOutput(data.output);
    } catch {
      setErrorMsg(t.common.errorGeneric);
    } finally {
      setLoading(false);
    }
  }

  function copy() {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
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
          value={input}
          onChange={(e) => setInput(e.target.value.slice(0, 1500))}
          placeholder={tool.placeholder ? tool.placeholder[lang] : ''}
          rows={6}
          className="field-focus w-full resize-none bg-transparent text-base text-platinum placeholder:text-muted"
        />
        <div className="mt-3 flex items-center justify-between border-t border-line pt-3">
          <span className="text-xs text-muted">{input.length}/1500</span>
          <button
            onClick={run}
            disabled={loading || !input.trim()}
            className="notch-sm bg-olive px-6 py-2.5 text-sm font-semibold text-ink transition hover:bg-olivebright disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? t.hero.loading : t.common.run}
          </button>
        </div>

        {errorMsg && <p className="mt-4 text-sm text-olivebright/90">{errorMsg}</p>}

        {output && (
          <div className="mt-5 border-t border-line pt-5">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted">
                {t.common.resultTitle}
              </span>
              <button
                onClick={copy}
                className="text-xs font-semibold text-olivebright hover:underline"
              >
                {copied ? t.hero.copied : t.hero.copy}
              </button>
            </div>
            <p className="whitespace-pre-wrap text-sm leading-relaxed text-platinum">{output}</p>
          </div>
        )}
      </div>
    </div>
  );
}
