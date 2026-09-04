'use client';

import TextTool from './TextTool';
import VisionTool from './VisionTool';
import ImageGenTool from './ImageGenTool';

export default function ToolPageClient({ tool }) {
  if (tool.type === 'text') return <TextTool tool={tool} />;
  if (tool.type === 'imagegen') return <ImageGenTool tool={tool} />;
  return <VisionTool tool={tool} />;
}
