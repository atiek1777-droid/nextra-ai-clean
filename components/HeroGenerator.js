'use client';

import { useState } from 'react';
import { useLang } from './LanguageProvider';

export default function HeroGenerator() {
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
        body: JSON.stringify({ slug: 'generate', input, lang })
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
    <div className="notch border border-olive/40 bg-surface p-5 sm:p-7">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value.slice(0, 500))}
        placeholder={t.hero.placeholder}
        rows={4}
        className="field-focus w-full resize-none bg-transparent text-base text-platinum placeholder:text-muted"
      />
      <div className="mt-3 flex items-center justify-between border-t border-line pt-3">
        <span className="text-xs text-muted">{input.length}/500</span>
        <button
          onClick={run}
          disabled={loading || !input.trim()}
          className="notch-sm flex items-center gap-2 bg-olive px-6 py-2.5 text-sm font-semibold text-ink transition hover:bg-olivebright disabled:cursor-not-allowed disabled:opacity-50"
        >
          <span className="node-dot h-1.5 w-1.5 rounded-full bg-ink" />
          {loading ? t.hero.loading : t.hero.cta}
        </button>
      </div>

      {errorMsg && <p className="mt-4 text-sm text-olivebright/90">{errorMsg}</p>}

      {output && (
        <div className="mt-5 border-t border-line pt-5">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted">
              {t.hero.resultLabel}
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
  );
}
