// Groq (console.groq.com): OpenAI-compatible, free tier, needs a personal
// API key (set GROQ_API_KEY in Vercel's Environment Variables — never
// hardcode it in source).
//
// Text model: openai/gpt-oss-120b — Groq's current general-purpose model,
// 1,000 requests/day free.
// Vision model: qwen/qwen3.6-27b — current multimodal model on Groq's free
// tier (Groq's vision lineup changes fairly often; check
// console.groq.com/docs/models if this ever needs updating).
const ENDPOINT = 'https://api.groq.com/openai/v1/chat/completions';
const TEXT_MODEL = 'openai/gpt-oss-120b';
const VISION_MODEL = 'qwen/qwen3.6-27b';

function headers() {
  const key = process.env.GROQ_API_KEY;
  if (!key) {
    const err = new Error('GROQ_API_KEY is not set');
    err.code = 'MISSING_API_KEY';
    throw err;
  }
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${key}`
  };
}

async function fetchWithTimeout(body, timeoutMs = 25000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  let res;
  try {
    res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(body),
      signal: controller.signal
    });
  } catch (e) {
    clearTimeout(timer);
    if (e.name === 'AbortError') {
      const err = new Error('TIMEOUT');
      err.code = 'TIMEOUT';
      throw err;
    }
    throw e;
  }
  clearTimeout(timer);

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    const err = new Error(`GROQ_${res.status}: ${text.slice(0, 300)}`);
    err.code = res.status === 429 ? 'RATE_LIMIT' : `HTTP_${res.status}`;
    throw err;
  }

  const raw = await res.text();
  try {
    const data = JSON.parse(raw);
    return data?.choices?.[0]?.message?.content?.trim() || '';
  } catch {
    const err = new Error(`BAD_JSON: ${raw.slice(0, 200)}`);
    err.code = 'BAD_RESPONSE';
    throw err;
  }
}

export async function callGroqText(systemPrompt, userText) {
  return fetchWithTimeout({
    model: TEXT_MODEL,
    temperature: 0.8,
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userText }
    ]
  });
}

/**
 * images: array of { mimeType, data } (base64, no data: prefix)
 */
export async function callGroqVision(systemPrompt, images) {
  const content = [
    { type: 'text', text: systemPrompt },
    ...images.map((img) => ({
      type: 'image_url',
      image_url: { url: `data:${img.mimeType};base64,${img.data}` }
    }))
  ];

  return fetchWithTimeout({
    model: VISION_MODEL,
    max_completion_tokens: 800,
    messages: [{ role: 'user', content }]
  });
}
