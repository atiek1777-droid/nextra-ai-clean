import { NextResponse } from 'next/server';
import { getTool } from '../../../lib/tools';
import { callGroqText } from '../../../lib/groq';
import { isIdentityQuestion, IDENTITY_ANSWER } from '../../../lib/identity';

export const maxDuration = 30;

export async function POST(req) {
  try {
    const { slug, input, lang } = await req.json();
    const tool = getTool(slug);

    if (!tool || tool.type !== 'text') {
      return NextResponse.json({ error: 'UNKNOWN_TOOL' }, { status: 400 });
    }
    if (!input || !input.trim()) {
      return NextResponse.json({ error: 'EMPTY_INPUT' }, { status: 400 });
    }

    // Fixed answer for "who are you / who made you" style questions —
    // short-circuits before the model call, in every tool on the site.
    if (isIdentityQuestion(input)) {
      return NextResponse.json({ output: IDENTITY_ANSWER[lang === 'en' ? 'en' : 'ar'] });
    }

    const systemPrompt = tool.systemPrompt[lang === 'en' ? 'en' : 'ar'];
    const output = await callGroqText(systemPrompt, input);

    return NextResponse.json({ output });
  } catch (err) {
    console.error('TEXT_ROUTE_ERROR', err.code, err.message);
    return NextResponse.json(
      { error: err.code || 'SERVER_ERROR', detail: String(err.message || '').slice(0, 200) },
      { status: 500 }
    );
  }
}
