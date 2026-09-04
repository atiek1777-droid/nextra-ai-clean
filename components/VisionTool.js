'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLang } from './LanguageProvider';

function fileToImagePart(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      const [, base64] = result.split(',');
      resolve({ mimeType: file.type, data: base64, previewUrl: result });
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function VisionTool({ tool }) {
  const { t, lang } = useLang();
  const needsTwo = tool.type === 'vision2';

  const [img1, setImg1] = useState(null);
  const [img2, setImg2] = useState(null);
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  async function handleFile(e, which) {
    const file = e.target.files?.[0];
    if (!file) return;
    const part = await fileToImagePart(file);
    if (which === 1) setImg1(part);
    else setImg2(part);
  }

  async function run() {
    const images = needsTwo ? [img1, img2].filter(Boolean) : [img1].filter(Boolean);
    if (!images.length || (needsTwo && images.length < 2) || loading) return;

    setLoading(true);
    setErrorMsg('');
    setOutput('');
    try {
      const res = await fetch('/api/vision', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slug: tool.slug,
          lang,
          images: images.map((i) => ({ mimeType: i.mimeType, data: i.data }))
        })
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

  const ready = needsTwo ? img1 && img2 : img1;

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
        <div className={`grid gap-4 ${needsTwo ? 'sm:grid-cols-2' : ''}`}>
          <UploadBox
            label={t.common.upload}
            preview={img1?.previewUrl}
            onChange={(e) => handleFile(e, 1)}
          />
          {needsTwo && (
            <UploadBox
              label={t.common.uploadSecond}
              preview={img2?.previewUrl}
              onChange={(e) => handleFile(e, 2)}
            />
          )}
        </div>

        <div className="mt-5 flex items-center justify-end border-t border-line pt-4">
          <button
            onClick={run}
            disabled={!ready || loading}
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

function UploadBox({ label, preview, onChange }) {
  return (
    <label className="notch-sm flex h-40 cursor-pointer flex-col items-center justify-center border border-dashed border-line bg-ink/40 text-center transition hover:border-olive">
      {preview ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={preview} alt="" className="h-full w-full object-cover" />
      ) : (
        <span className="text-sm text-silvermid">{label}</span>
      )}
      <input type="file" accept="image/*" className="hidden" onChange={onChange} />
    </label>
  );
}
