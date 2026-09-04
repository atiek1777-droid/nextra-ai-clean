// Central catalog for every tool on nextra-ai.
// type: 'text' | 'vision1' (one image) | 'vision2' (two images)
export const tools = [
  {
    slug: 'generate',
    category: 'text',
    type: 'text',
    title: { ar: 'توليد الأوامر', en: 'Prompt Generator' },
    desc: {
      ar: 'حوّل فكرة سريعة إلى أمر ذكاء اصطناعي مفصّل ومنظّم.',
      en: 'Turn a quick idea into a detailed, well-structured AI prompt.'
    },
    placeholder: {
      ar: 'مثال: مساعد يرد على استفسارات العملاء بأسلوب ودود ومختصر',
      en: 'e.g. an assistant that answers customer questions, friendly and brief'
    },
    systemPrompt: {
      ar: 'أنت مهندس أوامر خبير. حوّل طلب المستخدم إلى أمر ذكاء اصطناعي احترافي وواضح: حدد الدور، الهدف، القيود، وصيغة المخرجات. أعد الأمر النهائي فقط دون أي شرح إضافي.',
      en: 'You are an expert prompt engineer. Turn the user request into a clear, professional AI prompt: define the role, the goal, constraints, and the output format. Return only the final prompt, no extra commentary.'
    }
  },
  {
    slug: 'check',
    category: 'text',
    type: 'text',
    title: { ar: 'فحص الأوامر', en: 'Prompt Auditor' },
    desc: {
      ar: 'راجع أمرك الحالي واكتشف الغموض والثغرات قبل استخدامه.',
      en: 'Review an existing prompt and surface ambiguity or gaps before you run it.'
    },
    placeholder: {
      ar: 'الصق الأمر الذي تريد فحصه هنا',
      en: 'Paste the prompt you want reviewed here'
    },
    systemPrompt: {
      ar: 'أنت مراجع أوامر ذكاء اصطناعي دقيق. حلّل الأمر المُرسل، اذكر نقاط الضعف والغموض، ثم اقترح نسخة محسّنة منه. رتب الرد تحت عنوانين: الملاحظات، ثم النسخة المحسّنة.',
      en: 'You are a meticulous prompt reviewer. Analyze the submitted prompt, list weaknesses and ambiguity, then propose an improved version. Structure the reply under two headings: Notes, then Improved version.'
    }
  },
  {
    slug: 'image-generate',
    category: 'image',
    type: 'imagegen',
    title: { ar: 'مولّد الصور بالذكاء الاصطناعي', en: 'AI Image Generator' },
    desc: {
      ar: 'اكتب وصفًا واحصل على صورة مولّدة فعليًا بالذكاء الاصطناعي — مجاني بالكامل.',
      en: 'Describe a scene and get an actual AI-generated image — completely free.'
    },
    placeholder: {
      ar: 'مثال: أسد ملكي يجلس فوق صخرة عند الغروب، لوحة زيتية',
      en: 'e.g. a majestic lion sitting on a rock at sunset, oil painting'
    }
  },
  {
    slug: 'image-prompt',
    category: 'image',
    type: 'text',
    title: { ar: 'توليد أوامر الصور', en: 'Image Prompt Studio' },
    desc: {
      ar: 'صف مشهدًا بكلماتك واحصل على أمر توليد صورة احترافي.',
      en: 'Describe a scene in your own words and get a professional image-generation prompt.'
    },
    placeholder: {
      ar: 'مثال: غلاف ألبوم موسيقي بأجواء صحراوية عند الغروب',
      en: 'e.g. an album cover with a desert scene at sunset'
    },
    systemPrompt: {
      ar: 'أنت مخرج فني متخصص في أوامر توليد الصور. حوّل الوصف إلى أمر صورة غني بالتفاصيل: الموضوع، الإضاءة، زاوية الكاميرا، الأسلوب الفني، والألوان. أعد الأمر فقط.',
      en: 'You are an art director specialized in image-generation prompts. Turn the description into a rich image prompt covering subject, lighting, camera angle, art style, and color palette. Return only the prompt.'
    }
  },
  {
    slug: 'video-prompt',
    category: 'image',
    type: 'text',
    title: { ar: 'توليد أوامر الفيديو', en: 'Video Prompt Studio' },
    desc: {
      ar: 'أوامر فيديو منظمة بالمشاهد والحركة والانتقالات لمولدات الفيديو الحديثة.',
      en: 'Structured video prompts with shots, motion, and transitions for modern video models.'
    },
    placeholder: {
      ar: 'مثال: إعلان قصير لمنتج قهوة، أجواء دافئة، حركة كاميرا بطيئة',
      en: 'e.g. a short coffee-product ad, warm mood, slow camera movement'
    },
    systemPrompt: {
      ar: 'أنت مخرج فيديو متخصص في أوامر مولدات الفيديو بالذكاء الاصطناعي. حوّل الوصف إلى أمر يحدد: المشهد، حركة الكاميرا، الإضاءة، المدة التقريبية، والانتقال بين اللقطات إن وجد. أعد الأمر فقط.',
      en: 'You are a video director specialized in AI video-generation prompts. Turn the description into a prompt defining the scene, camera movement, lighting, approximate duration, and shot transitions if any. Return only the prompt.'
    }
  },
  {
    slug: 'humanize',
    category: 'text',
    type: 'text',
    title: { ar: 'إعادة الصياغة', en: 'Human Voice Rewrite' },
    desc: {
      ar: 'أعد صياغة نص آلي ليقرأ بأسلوب طبيعي وبشري.',
      en: 'Rewrite mechanical-sounding text so it reads naturally and human.' 
    },
    placeholder: {
      ar: 'الصق النص المراد إعادة صياغته',
      en: 'Paste the text you want rewritten'
    },
    systemPrompt: {
      ar: 'أعد صياغة النص التالي بأسلوب بشري طبيعي، حافظ على المعنى الأصلي وطول النص تقريبًا، وتجنب التكرار الآلي والعبارات الجاهزة. أعد النص المُعاد صياغته فقط.',
      en: 'Rewrite the following text in a natural human voice, keep the original meaning and roughly the same length, and avoid robotic repetition or stock phrasing. Return only the rewritten text.'
    }
  },
  {
    slug: 'detect',
    category: 'text',
    type: 'text',
    title: { ar: 'كاشف النصوص', en: 'AI Text Signal Check' },
    desc: {
      ar: 'تحليل تقريبي لأسلوب النص لتقدير احتمال أن يكون مولدًا آليًا. مؤشر استرشادي وليس حكمًا قاطعًا.',
      en: 'A rough style read on a text to estimate the odds it was machine-written. Indicative only, not a verdict.'
    },
    placeholder: {
      ar: 'الصق النص المراد تحليله',
      en: 'Paste the text you want analyzed'
    },
    systemPrompt: {
      ar: 'حلل أسلوب النص التالي من ناحية الانتظام، تكرار الأنماط، وتنوع الجمل، وقدّر بشكل تقريبي احتمال أن يكون النص مولدًا بالذكاء الاصطناعي (نسبة مئوية تقريبية) مع ذكر أبرز مؤشرين دعما تقديرك. اذكر بوضوح أن هذا تقدير استرشادي غير قاطع.',
      en: 'Analyze the following text for regularity, repeated patterns, and sentence variety, and give a rough estimated likelihood it is AI-generated (an approximate percentage) with the top two signals behind that estimate. State clearly this is an indicative estimate, not a definitive verdict.'
    }
  },
  {
    slug: 'product-description',
    category: 'text',
    type: 'text',
    title: { ar: 'توليد وصف المنتجات', en: 'Product Description Writer' },
    desc: {
      ar: 'صف منتجك بإيجاز واحصل على وصف تسويقي جاهز للنشر.',
      en: 'Describe your product briefly and get a publish-ready marketing description.'
    },
    placeholder: {
      ar: 'مثال: سماعات لاسلكية عازلة للضوضاء، بطارية 30 ساعة',
      en: 'e.g. wireless noise-cancelling headphones, 30-hour battery'
    },
    systemPrompt: {
      ar: 'أنت كاتب محتوى تسويقي. حوّل معلومات المنتج إلى وصف جذاب وموجز يبرز الفائدة الأساسية للعميل، بأسلوب مناسب لمتجر إلكتروني. أعد الوصف فقط.',
      en: 'You are a marketing copywriter. Turn the product info into a compelling, concise description that highlights the core customer benefit, in a tone fit for an online store. Return only the description.'
    }
  },
  {
    slug: 'chatgpt-prompts',
    category: 'model',
    type: 'text',
    title: { ar: 'مولد أوامر ChatGPT', en: 'ChatGPT Prompt Builder' },
    desc: {
      ar: 'أوامر مضبوطة على أسلوب وسياق ChatGPT.',
      en: 'Prompts tuned to how ChatGPT responds best.'
    },
    placeholder: {
      ar: 'صف ما تريد أن يفعله ChatGPT',
      en: 'Describe what you want ChatGPT to do'
    },
    systemPrompt: {
      ar: 'حوّل الطلب إلى أمر محسّن خصيصًا لنموذج ChatGPT: استخدم تعليمات مرحلية واضحة وحدد تنسيق الرد المطلوب. أعد الأمر فقط.',
      en: 'Turn the request into a prompt tuned for ChatGPT: use clear step-by-step instructions and specify the desired response format. Return only the prompt.'
    }
  },
  {
    slug: 'claude-prompts',
    category: 'model',
    type: 'text',
    title: { ar: 'مولد أوامر Claude', en: 'Claude Prompt Builder' },
    desc: {
      ar: 'أوامر مضبوطة على أسلوب وسياق Claude.',
      en: 'Prompts tuned to how Claude responds best.'
    },
    placeholder: {
      ar: 'صف ما تريد أن يفعله Claude',
      en: 'Describe what you want Claude to do'
    },
    systemPrompt: {
      ar: 'حوّل الطلب إلى أمر محسّن خصيصًا لنموذج Claude: أضف سياقًا واضحًا، أمثلة إن كانت مفيدة، وحدد تنسيق المخرج ووسوم XML عند الحاجة. أعد الأمر فقط.',
      en: 'Turn the request into a prompt tuned for Claude: add clear context, examples where useful, and specify the output format and XML tags where helpful. Return only the prompt.'
    }
  },
  {
    slug: 'image-to-prompt',
    category: 'image',
    type: 'vision1',
    title: { ar: 'محول الصور إلى أوامر', en: 'Image → Prompt' },
    desc: {
      ar: 'ارفع صورة واحصل على أمر نصي يصفها لإعادة توليدها أو تعديلها.',
      en: 'Upload an image and get a text prompt describing it for regeneration or edits.'
    },
    systemPrompt: {
      ar: 'صف الصورة المرفقة كأمر توليد صورة كامل: الموضوع، التركيب، الإضاءة، الألوان، والأسلوب الفني. أعد الأمر فقط.',
      en: 'Describe the attached image as a complete image-generation prompt: subject, composition, lighting, colors, and art style. Return only the prompt.'
    }
  },
  {
    slug: 'image-to-text',
    category: 'image',
    type: 'vision1',
    title: { ar: 'تحويل الصورة إلى نص', en: 'Image → Text (OCR)' },
    desc: {
      ar: 'استخرج أي نص ظاهر داخل الصورة.',
      en: 'Extract any visible text inside an image.'
    },
    systemPrompt: {
      ar: 'استخرج كل النص الظاهر في الصورة المرفقة بدقة وبنفس ترتيبه. إن لم يوجد نص، اذكر ذلك بوضوح.',
      en: 'Extract all visible text in the attached image accurately and in its original order. If there is no text, say so clearly.'
    }
  },
  {
    slug: 'image-to-json',
    category: 'image',
    type: 'vision1',
    title: { ar: 'تحويل الصورة إلى JSON', en: 'Image → Structured JSON' },
    desc: {
      ar: 'حوّل عناصر الصورة إلى كائن JSON منظم (الألوان، العناصر، التخطيط).',
      en: 'Turn the elements of an image into a structured JSON object (colors, elements, layout).'
    },
    systemPrompt: {
      ar: 'حلل الصورة المرفقة وأعد كائن JSON فقط (بدون أي نص خارج JSON) يصف: subject, style, colors (مصفوفة), lighting, composition, mood.',
      en: 'Analyze the attached image and return only a JSON object (no text outside the JSON) describing: subject, style, colors (array), lighting, composition, mood.'
    }
  },
  {
    slug: 'two-images',
    category: 'image',
    type: 'vision2',
    title: { ar: 'محول صورتين إلى أمر', en: 'Two Images → One Prompt' },
    desc: {
      ar: 'ارفع صورتين واحصل على أمر واحد يمزج بينهما.',
      en: 'Upload two images and get one prompt that blends them.'
    },
    systemPrompt: {
      ar: 'قارن الصورتين المرفقتين، واكتب أمر توليد صورة واحد يمزج العناصر المشتركة أو المكملة بينهما (الموضوع، الأسلوب، الألوان). أعد الأمر فقط.',
      en: 'Compare the two attached images, and write one image-generation prompt that blends their shared or complementary elements (subject, style, colors). Return only the prompt.'
    }
  }
];

export function getTool(slug) {
  return tools.find((t) => t.slug === slug);
}
