// data/enrichment/nextjs.js
export const nextjsEnrichment = {
  'next-app-router': {
    depth: 'know',
    keyPoints: [
      { ar: 'المجلد = المسار، الملف = الدور', en: 'Folder = route, file = role', terms: ['folder', 'مجلد', 'page.js', 'layout', 'file', 'ملف'] },
      { ar: 'Server Components افتراضيًا', en: 'Server Components by default', terms: ['server component', 'default', 'افتراض', 'use client'] },
      { ar: 'تخطيطات متداخلة تحافظ على الحالة', en: 'Nested layouts preserve state', terms: ['layout', 'تخطيط', 'nested', 'متداخل', 'preserve', 'state'] },
      { ar: 'loading/error لكل مستوى', en: 'Per-level loading and error UI', terms: ['loading', 'error.js', 'error', 'not-found'] },
    ],
  },
  'next-server-client-components': {
    depth: 'apply',
    keyPoints: [
      { ar: 'الخادم افتراضيًا، "use client" للتفاعل', en: 'Server by default, "use client" for interactivity', terms: ['use client', 'default', 'افتراض', 'interactiv', 'تفاعل'] },
      { ar: 'ادفع "use client" نحو الأوراق', en: 'Push "use client" toward the leaves', terms: ['leaf', 'leaves', 'أوراق', 'small', 'صغير', 'isolate', 'عزل', 'low', 'down'] },
      { ar: '"use client" يُصيَّر على الخادم أيضًا', en: 'Client components still server-render', terms: ['also render', 'ssr', 'hydrat', 'ترطيب', 'initial html', 'both'] },
      { ar: 'الـ props يجب أن تكون قابلة للتسلسل', en: 'Props must be serialisable', terms: ['serializ', 'serialis', 'تسلسل', 'function', 'دالة', 'json'] },
    ],
    followUps: [
      {
        id: 'next-server-client-components-f1',
        question: { ar: 'وضع زميلك "use client" في ملف layout الجذري. ما الأثر؟', en: 'A teammate put "use client" in the root layout. What is the consequence?' },
        answer: { ar: 'كل ما يُستورد من ذلك الملف فصاعدًا يدخل حزمة العميل، فيتحول التطبيق عمليًا إلى SPA تقليدي مع تعقيد إضافي بلا مكسب. يُفقد كل ما تقدّمه Server Components من حزمة أصغر وجلب بيانات قرب المصدر. الحل: إزالة التوجيه من التخطيط وعزل الجزء التفاعلي في مكوّن صغير.', en: 'Everything imported from that file onward joins the client bundle, so the app effectively becomes a traditional SPA with extra complexity and no benefit. You lose everything Server Components offer — a smaller bundle and data fetching close to the source. The fix is to remove the directive from the layout and isolate the interactive part in a small component.' },
      },
    ],
  },
  'next-rendering-strategies': {
    depth: 'apply',
    keyPoints: [
      { ar: 'SSG وقت البناء', en: 'SSG at build time', terms: ['build time', 'وقت البناء', 'static', 'ثابت', 'ssg'] },
      { ar: 'SSR في كل طلب', en: 'SSR per request', terms: ['per request', 'كل طلب', 'request time', 'ssr', 'dynamic', 'ديناميكي'] },
      { ar: 'ISR إعادة توليد دورية', en: 'ISR periodic regeneration', terms: ['isr', 'revalidate', 'إعادة', 'regenerat', 'stale-while'] },
      { ar: 'الاختيار حسب حداثة البيانات والتخصيص', en: 'Choose by freshness and personalisation', terms: ['fresh', 'حديث', 'personal', 'مخصص', 'user-specific', 'cache', 'seo'] },
    ],
    followUps: [
      {
        id: 'next-rendering-strategies-f1',
        question: { ar: 'صفحة منتج يتغير سعرها عدة مرات يوميًا. أي استراتيجية تختار ولماذا؟', en: 'A product page whose price changes several times a day. Which strategy and why?' },
        answer: { ar: 'ISR مع إبطال عند الطلب: تُقدَّم الصفحة ثابتة من CDN بسرعة، وعند تغيّر السعر يستدعي نظام إدارة المنتجات revalidateTag لذلك المنتج فتتحدث فورًا. هذا يجمع سرعة الثابت مع دقة الديناميكي. أما لو كان السعر يختلف لكل مستخدم فحينها يصبح الجزء الخاص بالسعر ديناميكيًا داخل Suspense والباقي ثابتًا.', en: 'ISR with on-demand invalidation: the page is served static from the CDN, and when the price changes the product system calls revalidateTag for that product so it updates immediately. That combines static speed with dynamic accuracy. If the price were per-user instead, the price section would become dynamic inside Suspense while the rest stays static.' },
      },
    ],
  },
  'next-caching': {
    depth: 'debug',
    keyPoints: [
      { ar: 'عدة طبقات تخزين', en: 'Multiple cache layers', terms: ['layer', 'طبق', 'request memoization', 'data cache', 'full route', 'router cache'] },
      { ar: 'cache / revalidate / no-store على fetch', en: 'cache / revalidate / no-store options on fetch', terms: ['no-store', 'revalidate', 'force-cache', 'fetch'] },
      { ar: 'الإبطال بـ revalidateTag/Path', en: 'Invalidate with revalidateTag/Path', terms: ['revalidatetag', 'revalidatepath', 'invalidat', 'إبطال', 'tag'] },
      { ar: 'الافتراضيات تغيّرت بين الإصدارات', en: 'Defaults changed across versions', terms: ['version', 'إصدار', 'next 15', 'next 14', 'default', 'افتراض'] },
    ],
    followUps: [
      {
        id: 'next-caching-f1',
        question: { ar: 'المستخدم يحدّث ملفه الشخصي ثم يعود للصفحة فيرى البيانات القديمة. أين تبحث؟', en: 'A user updates their profile, navigates back, and sees the old data. Where do you look?' },
        answer: { ar: 'أبدأ بتحديد أي طبقة تُعيد القيمة القديمة. الأرجح: الـ Router Cache في المتصفح يعرض الصفحة المخزّنة، فأستدعي router.refresh() بعد الكتابة أو أستخدم revalidatePath داخل الـ Server Action. إن كان الجلب بـ fetch مخزَّنًا فأضيف وسمًا وأبطله، أو أجعله no-store لبيانات المستخدم الخاصة أصلًا.', en: 'I start by identifying which layer is serving the stale value. Most likely the browser Router Cache is showing the cached page, so I call router.refresh() after the write or use revalidatePath inside the Server Action. If the fetch itself is cached, I tag and invalidate it — or mark per-user data no-store in the first place.' },
      },
    ],
  },
  'next-isr-revalidation': {
    depth: 'apply',
    keyPoints: [
      { ar: 'stale-while-revalidate', en: 'Stale-while-revalidate', terms: ['stale', 'قديم', 'background', 'خلفية', 'first visitor', 'أول زائر'] },
      { ar: 'زمنية مقابل عند الطلب', en: 'Time-based vs on-demand', terms: ['time', 'زمن', 'on-demand', 'عند الطلب', 'webhook', 'revalidatetag'] },
      { ar: 'الأول بعد الانتهاء يرى القديم', en: 'First visitor after expiry sees stale data', terms: ['first', 'أول', 'stale', 'قديم'] },
    ],
  },
  'next-middleware': {
    depth: 'apply',
    keyPoints: [
      { ar: 'يعمل قبل اكتمال الطلب', en: 'Runs before the request completes', terms: ['before', 'قبل', 'edge', 'request'] },
      { ar: 'إعادة توجيه / كتابة / ترويسات', en: 'Redirect, rewrite, headers', terms: ['redirect', 'rewrite', 'header', 'ترويس', 'توجيه'] },
      { ar: 'Edge Runtime بقيود', en: 'Edge runtime with limits', terms: ['edge', 'node', 'filesystem', 'database', 'limit', 'قيود'] },
      { ar: 'ليس طبقة تفويض كافية', en: 'Not a sufficient authorization layer', terms: ['not secur', 'authoriz', 'تفويض', 'also check', 'page', 'handler', 'cookie exists'] },
    ],
  },
  'next-server-actions': {
    depth: 'apply',
    keyPoints: [
      { ar: 'دوال خادم تُستدعى من العميل', en: 'Server functions callable from the client', terms: ['server', 'خادم', 'use server', 'call', 'استدعا', 'form', 'action'] },
      { ar: 'كل action نقطة نهاية عامة', en: 'Every action is a public endpoint', terms: ['endpoint', 'public', 'عام', 'http', 'نقطة نهاية', 'directly'] },
      { ar: 'المصادقة والتحقق داخل كل action', en: 'Authenticate and validate inside each action', terms: ['auth', 'مصادقة', 'validat', 'تحقق', 'session', 'zod', 'inside', 'داخل'] },
      { ar: 'revalidate بعد الكتابة', en: 'Revalidate after a write', terms: ['revalidate', 'إبطال', 'cache'] },
    ],
  },
  'next-streaming': {
    depth: 'apply',
    keyPoints: [
      { ar: 'إرسال HTML على أجزاء', en: 'HTML sent in chunks', terms: ['chunk', 'أجزاء', 'progressive', 'تدريجي', 'stream'] },
      { ar: 'حدود Suspense تحدد الأجزاء', en: 'Suspense boundaries define the pieces', terms: ['suspense', 'boundary', 'حدود', 'fallback', 'skeleton'] },
      { ar: 'الجزء البطيء لا يحجب الصفحة', en: 'A slow part does not block the page', terms: ['slow', 'بطيء', 'block', 'حجب', 'lcp', 'ttfb'] },
      { ar: 'الرؤوس تُرسل مع أول جزء', en: 'Headers go with the first chunk', terms: ['header', 'status', 'متادات', 'first chunk', 'أول جزء', 'cannot change'] },
    ],
  },
  'next-data-fetching': {
    depth: 'apply',
    keyPoints: [
      { ar: 'الجلب داخل Server Component بـ await', en: 'Await directly in a Server Component', terms: ['await', 'server component', 'async', 'directly', 'مباشر'] },
      { ar: 'الطلبات المستقلة بالتوازي', en: 'Independent requests in parallel', terms: ['parallel', 'متواز', 'promise.all', 'waterfall', 'شلال'] },
      { ar: 'React Query للحالة التفاعلية على العميل', en: 'React Query for interactive client state', terms: ['react query', 'swr', 'tanstack', 'client', 'عميل'] },
      { ar: 'Server Actions للكتابة', en: 'Server Actions for mutations', terms: ['server action', 'mutation', 'كتابة', 'write'] },
    ],
  },
  'next-image': {
    depth: 'know',
    keyPoints: [
      { ar: 'صيغ حديثة وأحجام متعددة', en: 'Modern formats and multiple sizes', terms: ['webp', 'avif', 'srcset', 'size', 'حجم', 'format', 'صيغ'] },
      { ar: 'منع انزياح التخطيط بالأبعاد', en: 'Prevents layout shift via dimensions', terms: ['width', 'height', 'cls', 'layout shift', 'انزياح', 'reserve'] },
      { ar: 'lazy افتراضيًا و priority لصورة LCP', en: 'Lazy by default, priority for the LCP image', terms: ['lazy', 'priority', 'lcp', 'above the fold'] },
    ],
  },
};
