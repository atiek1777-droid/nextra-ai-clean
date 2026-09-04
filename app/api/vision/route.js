import { NextResponse } from 'next/server';
import { getTool } from '../../../lib/tools';
import { callGroqVision } from '../../../lib/groq';

export const maxDuration = 30;

export async function POST(req) {
  try {
    const { slug, images, lang } = await req.json();
    const tool = getTool(slug);

    if (!tool || (tool.type !== 'vision1' && tool.type !== 'vision2')) {
      return NextResponse.json({ error: 'UNKNOWN_TOOL' }, { status: 400 });
    }
    if (!images || !images.length) {
      return NextResponse.json({ error: 'EMPTY_INPUT' }, { status: 400 });
    }

    const systemPrompt = tool.systemPrompt[lang === 'en' ? 'en' : 'ar'];
    const output = await callGroqVision(systemPrompt, images);

    return NextResponse.json({ output });
  } catch (err) {
    console.error('VISION_ROUTE_ERROR', err.code, err.message);
    return NextResponse.json(
      { error: err.code || 'SERVER_ERROR', detail: String(err.message || '').slice(0, 200) },
      { status: 500 }
    );
  }
}
