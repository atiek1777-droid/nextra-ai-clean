import { tools, getTool } from '../../../lib/tools';
import ToolPageClient from '../../../components/ToolPageClient';

export function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }) {
  const tool = getTool(params.slug);
  if (!tool) return {};
  return {
    title: `${tool.title.ar} · nextra-ai`,
    description: tool.desc.ar
  };
}

export default function ToolPage({ params }) {
  const tool = getTool(params.slug);

  if (!tool) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-24 text-center">
        <p className="text-lg text-silvermid">Tool not found — الأداة غير موجودة.</p>
      </div>
    );
  }

  return <ToolPageClient tool={tool} />;
}
