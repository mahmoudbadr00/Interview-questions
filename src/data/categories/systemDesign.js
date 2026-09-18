// data/categories/systemDesign.js
// Frontend system design and engineering trade-off questions. These test
// reasoning and judgement rather than recall, so answers are structured as
// the walkthrough an interviewer expects: requirements → architecture →
// data flow → performance → trade-offs.
import { DIFFICULTY } from '../difficulty.js';

const { intermediate, advanced } = DIFFICULTY;

export const systemDesign = [
  // ---------------------------------------------------------- DESIGN
  {
    id: 'design-ecommerce-frontend',
    difficulty: advanced,
    kind: 'design',
    depth: 'design',
    question: {
      ar: 'كيف تصمم الواجهة الأمامية لمتجر إلكتروني كبير؟',
      en: 'How would you design the frontend of a large-scale e-commerce platform?',
    },
    answer: {
      ar: 'أبدأ دائمًا بتوضيح المتطلبات قبل رسم أي شيء.\n\n1. المتطلبات:\n• الوظيفية: كتالوج قابل للبحث والفلترة، صفحات منتجات، سلة، دفع، حساب مستخدم.\n• غير الوظيفية: SEO حاسم (الزيارات من محركات البحث)، أداء على الهاتف (أغلب الزوار)، توفّر عالٍ في مواسم الذروة، ودعم عدة لغات وعملات.\n\n2. استراتيجية التصيير — القرار الأهم:\n• صفحات الكتالوج والمنتجات: ثابتة مع ISR وإبطال عند الطلب من نظام المنتجات. تُقدَّم من CDN فلا تحمّل الخوادم شيئًا في الذروة.\n• المخزون والسعر اللحظي: جزء ديناميكي صغير داخل Suspense في الصفحة الثابتة.\n• السلة والحساب والدفع: ديناميكية وخاصة بالمستخدم.\nهذا يعني Next.js أو ما يعادله، لا SPA خالص.\n\n3. المعمارية:\n• تقسيم حسب المجال (catalog, cart, checkout, account) بحدود واضحة، وربما micro-frontends إذا كانت الفرق كبيرة ومستقلة — لكن هذا يُضاف عند الحاجة لا من البداية.\n• نظام تصميم مشترك لضمان الاتساق عبر الفرق.\n\n4. تدفق البيانات والحالة:\n• بيانات الخادم (المنتجات) عبر React Query أو Server Components — ليست حالة تطبيق.\n• السلة: حالة عميل مشتركة (Zustand) مع مزامنة إلى الخادم للمستخدمين المسجّلين، ومحلية للضيوف.\n• الفلاتر والبحث في الـ URL حتى تكون قابلة للمشاركة والفهرسة.\n\n5. الأداء:\n• صور محسّنة بأحجام متعددة وتحميل كسول — الصور أثقل ما في المتجر.\n• تقسيم الكود حسب المسار، والدفع كمسار منفصل تمامًا.\n• Core Web Vitals كمقاييس إلزامية في CI.\n\n6. البحث: خدمة بحث مخصصة (Algolia/Elasticsearch) مع debounce وإلغاء الطلبات القديمة.\n\n7. الأخطاء والمرونة: حدود أخطاء لكل قسم، وتدهور لطيف (إن فشلت التوصيات تظهر الصفحة بدونها).\n\n8. الأمان: لا بيانات دفع تلامس الواجهة (tokenization عبر مزوّد الدفع)، وCSP، وحماية CSRF.\n\nالمقايضات التي أذكرها صراحةً: التعقيد التشغيلي لـ ISR مقابل بساطة SSR؛ وmicro-frontends تعطي استقلالية لكنها تضاعف حجم الحزمة وتعقّد التنسيق.',
      en: 'I always clarify requirements before drawing anything.\n\n1. Requirements:\n• Functional: searchable and filterable catalogue, product pages, cart, checkout, account.\n• Non-functional: SEO is critical (search traffic), mobile performance (most visitors), high availability during peak seasons, multiple locales and currencies.\n\n2. Rendering strategy — the most important decision:\n• Catalogue and product pages: static with ISR and on-demand invalidation from the product system. Served from the CDN, so peak traffic costs the servers nothing.\n• Live stock and price: a small dynamic section inside Suspense within the static page.\n• Cart, account, checkout: dynamic and per-user.\nThat implies Next.js or equivalent, not a pure SPA.\n\n3. Architecture:\n• Split by domain (catalog, cart, checkout, account) with clear boundaries — possibly micro-frontends if teams are large and independent, but added when needed, not from day one.\n• A shared design system for consistency across teams.\n\n4. Data flow and state:\n• Server data (products) through React Query or Server Components — it is not application state.\n• Cart: shared client state (Zustand) synced to the server for logged-in users, local for guests.\n• Filters and search in the URL so they are shareable and indexable.\n\n5. Performance:\n• Optimised images with multiple sizes and lazy loading — images are the heaviest thing in a store.\n• Route-level code splitting, with checkout as a completely separate route.\n• Core Web Vitals as mandatory metrics in CI.\n\n6. Search: a dedicated search service (Algolia/Elasticsearch) with debouncing and cancellation of stale requests.\n\n7. Errors and resilience: error boundaries per section and graceful degradation (if recommendations fail, the page still renders without them).\n\n8. Security: no payment data touches the frontend (tokenisation via the payment provider), CSP, CSRF protection.\n\nTrade-offs I would state explicitly: ISR\'s operational complexity versus SSR\'s simplicity; micro-frontends buy autonomy but multiply bundle size and coordination cost.',
    },
    keyPoints: [
      { ar: 'توضيح المتطلبات أولًا', en: 'Clarify requirements first', terms: ['requirement', 'متطلب', 'seo', 'mobile', 'هاتف', 'traffic', 'peak', 'ذروة', 'clarify', 'first'] },
      { ar: 'استراتيجية التصيير حسب نوع الصفحة', en: 'Rendering strategy per page type', terms: ['static', 'ثابت', 'isr', 'ssr', 'dynamic', 'ديناميكي', 'cdn', 'server component', 'render'] },
      { ar: 'فصل بيانات الخادم عن حالة العميل', en: 'Server data vs client state', terms: ['react query', 'server data', 'cart', 'سلة', 'zustand', 'url', 'state', 'حالة'] },
      { ar: 'الأداء: صور، تقسيم كود، Web Vitals', en: 'Performance: images, code splitting, Web Vitals', terms: ['image', 'صور', 'code split', 'تقسيم', 'lazy', 'vitals', 'lcp', 'bundle', 'حزمة'] },
      { ar: 'المقايضات صراحةً', en: 'Trade-offs stated explicitly', terms: ['trade-off', 'tradeoff', 'مقايض', 'versus', 'vs', 'cost', 'تكلفة', 'complexity', 'تعقيد', 'micro-frontend'] },
    ],
    followUps: [
      {
        id: 'design-ecommerce-frontend-f1',
        question: { ar: 'يوم الجمعة البيضاء تضاعفت الحركة عشر مرات. أي أجزاء من تصميمك تصمد وأيها تنهار أولًا؟', en: 'On Black Friday traffic is ten times normal. Which parts of your design hold and which fail first?' },
        answer: { ar: 'الكتالوج والمنتجات تصمد لأنها ثابتة من CDN — الحركة لا تصل إلى الخادم. ما ينهار أولًا هو الأجزاء الديناميكية: المخزون اللحظي، والسلة، والدفع، لأنها تضرب الـ API وقاعدة البيانات. لذلك أستعد بـ: cache للمخزون بتأخير ثوانٍ مقبول، وطابور للدفع مع صفحة انتظار بدل الفشل، وتعطيل الميزات غير الحرجة (التوصيات، الإحصائيات) تلقائيًا عند تجاوز عتبة الحمل.', en: 'The catalogue and product pages hold because they are static from the CDN — that traffic never reaches the servers. What fails first is the dynamic parts: live stock, cart and checkout, because they hit the API and database. So I prepare with: a stock cache with a few seconds of acceptable lag, a checkout queue with a waiting page instead of failure, and automatic disabling of non-critical features (recommendations, live counters) past a load threshold.' },
      },
    ],
  },
  {
    id: 'design-admin-dashboard',
    difficulty: advanced,
    kind: 'design',
    depth: 'design',
    question: {
      ar: 'كيف تبني معمارية لوحة تحكم إدارية كبيرة بعشرات الشاشات؟',
      en: 'How would you architect a large admin dashboard with dozens of screens?',
    },
    answer: {
      ar: 'لوحة التحكم تختلف عن المتجر: خلف تسجيل دخول، لا SEO، مستخدمون قليلون لكن يقضون ساعات فيها. هذا يغيّر كل القرارات.\n\n1. المتطلبات: كثافة معلومات عالية، جداول ضخمة، نماذج معقدة، صلاحيات متعددة المستويات، وسرعة التنقل بين الشاشات أهم من سرعة التحميل الأول.\n\n2. التصيير: SPA أو Next.js بتصيير على العميل. لا حاجة لـ SSR — بل قد يضر لأن كل شاشة تعتمد على الجلسة. التحميل الأول الأثقل مقبول لأن المستخدم يبقى ساعات.\n\n3. البنية: تنظيم حسب الميزة (users, orders, reports) لا حسب النوع. كل ميزة تملك مساراتها ومكوّناتها وطبقة API الخاصة بها، وتُصدّر واجهة عامة واحدة. التحميل الكسول لكل ميزة.\n\n4. الحالة:\n• بيانات الخادم عبر React Query مع مفاتيح استعلام منظمة — هذه 80% من الحالة.\n• حالة الجداول (ترتيب، فلاتر، صفحة) في الـ URL.\n• الصلاحيات في context يُحمَّل مرة عند الدخول.\n• النماذج عبر React Hook Form.\n\n5. المكوّنات: مكتبة داخلية للأنماط المتكررة — الجدول القابل للتخصيص، النموذج، المرشّح، الحوار — لأن عشرات الشاشات تعني عشرات التكرارات إن لم تُبنَ مرة واحدة. الجداول الضخمة تحتاج virtualization وpagination من الخادم.\n\n6. الصلاحيات: تُطبَّق على ثلاث طبقات — المسار (منع الوصول)، والواجهة (إخفاء الأزرار)، والـ API (الحماية الحقيقية). الأخيرة هي الوحيدة التي تُعدّ أمانًا.\n\n7. الأداء: المشكلة الشائعة هي إعادة التصيير في الجداول الكبيرة عند كل تغيير حالة صغير، والحل هو الاشتراك الانتقائي وvirtualization.\n\n8. الملاحظة: تتبّع الأخطاء (Sentry) وتحليلات الاستخدام لمعرفة أي الشاشات تُستخدم فعلًا — غالبًا 20% منها.\n\nالمقايضة الأساسية: لوحة عامة قابلة للتخصيص بالكامل (بطيئة البناء، ثقيلة) مقابل شاشات مخصصة (أسرع تطويرًا لكن أكثر تكرارًا). أختار مكوّنات عامة مع شاشات مخصصة فوقها.',
      en: 'A dashboard differs from a store: behind a login, no SEO, few users who spend hours in it. That changes every decision.\n\n1. Requirements: high information density, large tables, complex forms, multi-level permissions, and navigation speed between screens mattering more than first-load speed.\n\n2. Rendering: an SPA, or Next.js rendered on the client. No SSR needed — it may even hurt, since every screen depends on the session. A heavier first load is acceptable because users stay for hours.\n\n3. Structure: organise by feature (users, orders, reports), not by type. Each feature owns its routes, components and API layer and exports one public interface. Lazy-load per feature.\n\n4. State:\n• Server data through React Query with well-organised query keys — that is 80% of the state.\n• Table state (sort, filters, page) in the URL.\n• Permissions in a context loaded once at login.\n• Forms via React Hook Form.\n\n5. Components: an internal library for the recurring patterns — configurable table, form, filter bar, dialog — because dozens of screens means dozens of copies otherwise. Large tables need virtualisation and server-side pagination.\n\n6. Permissions: applied at three layers — route (block access), UI (hide buttons), API (the real protection). Only the last one counts as security.\n\n7. Performance: the common problem is large tables re-rendering on every small state change; the fix is selective subscription and virtualisation.\n\n8. Observability: error tracking (Sentry) and usage analytics to learn which screens are actually used — usually about 20% of them.\n\nThe core trade-off: a fully generic configurable dashboard (slow to build, heavy) versus bespoke screens (faster to build but repetitive). I choose generic components with bespoke screens composed on top.',
    },
    keyPoints: [
      { ar: 'لا SEO، تصيير على العميل', en: 'No SEO, client-side rendering', terms: ['spa', 'client', 'عميل', 'no seo', 'no ssr', 'login', 'session', 'جلسة'] },
      { ar: 'تنظيم حسب الميزة وتحميل كسول', en: 'Feature-based organisation and lazy loading', terms: ['feature', 'ميزة', 'module', 'lazy', 'كسول', 'code split', 'boundary', 'حدود'] },
      { ar: 'React Query + الحالة في URL', en: 'React Query plus URL state', terms: ['react query', 'url', 'query key', 'server data', 'filter', 'فلتر', 'pagination'] },
      { ar: 'مكتبة مكوّنات داخلية وجداول virtualized', en: 'Internal component library and virtualised tables', terms: ['component library', 'مكتبة', 'design system', 'table', 'جدول', 'virtualiz', 'virtualis', 'reuse'] },
      { ar: 'الصلاحيات على ثلاث طبقات', en: 'Permissions at three layers', terms: ['permission', 'صلاحي', 'role', 'دور', 'api', 'route', 'authoriz', 'hide'] },
    ],
  },
  {
    id: 'design-realtime-notifications',
    difficulty: advanced,
    kind: 'design',
    depth: 'design',
    question: {
      ar: 'كيف تصمم نظام إشعارات لحظية في تطبيق ويب؟',
      en: 'How would you design a real-time notification system for a web application?',
    },
    answer: {
      ar: '1. المتطلبات أولًا: كم إشعارًا للمستخدم في الساعة؟ هل التأخير المقبول ثانية أم دقيقة؟ هل يحتاج المستخدم سجلًا للإشعارات القديمة؟ هل يجب أن تعمل عبر عدة تبويبات؟ الإجابات تغيّر التصميم جذريًا.\n\n2. النقل — الخيار حسب الحاجة:\n• Server-Sent Events هو خياري الافتراضي: الاتجاه من الخادم للعميل فقط، يعمل فوق HTTP، إعادة اتصال تلقائية مدمجة، وأبسط في التشغيل من WebSocket.\n• WebSocket إذا احتجنا اتجاهين (مثل تأكيد القراءة الفوري).\n• Polling طويل كبديل احتياطي لبيئات تحجب الاتصالات الطويلة.\n\n3. الاستمرارية: الإشعار يُحفظ في قاعدة البيانات أولًا ثم يُبث. البث مجرد تسليم سريع؛ مصدر الحقيقة هو القاعدة. هذا يضمن أن المستخدم غير المتصل يراها عند عودته.\n\n4. التوسّع على الخادم: مع عدة نسخ من الخادم، المستخدم متصل بنسخة واحدة، فيلزم ناقل مشترك (Redis Pub/Sub) لتوصيل الحدث إلى النسخة الصحيحة.\n\n5. جانب العميل:\n• hook واحد يدير الاتصال ويُصدر الإشعارات إلى مخزن (Zustand) يستهلكه الجرس والقائمة.\n• إعادة اتصال بـ exponential backoff، وعند إعادة الاتصال طلب ما فات منذ آخر معرّف.\n• تبويبات متعددة: اتصال واحد عبر SharedWorker أو BroadcastChannel لتفادي عشرة اتصالات لمستخدم واحد.\n• تحديث متفائل لحالة "مقروء".\n\n6. تجربة المستخدم: تجميع الإشعارات المتشابهة، وعدم مقاطعة المستخدم بنافذة لكل إشعار، وعدّاد غير المقروء دقيق.\n\n7. المرونة: إن فشل الاتصال اللحظي يتراجع النظام إلى polling كل 30 ثانية بصمت — المستخدم لا يجب أن يعرف.\n\nالمقايضات: SSE أبسط لكنه أحادي الاتجاه؛ الاستمرارية في القاعدة تضيف كتابة لكل إشعار مقابل عدم ضياع أي شيء؛ والتجميع يقلل الإزعاج لكنه يؤخر بعض الإشعارات.',
      en: '1. Requirements first: how many notifications per user per hour? Is a second of latency acceptable, or a minute? Do users need a history of old notifications? Must it work across multiple tabs? The answers change the design fundamentally.\n\n2. Transport — chosen by need:\n• Server-Sent Events is my default: server-to-client only, runs over HTTP, built-in automatic reconnection, and simpler to operate than WebSocket.\n• WebSocket if we need both directions (e.g. instant read receipts).\n• Long polling as a fallback for environments that block long-lived connections.\n\n3. Persistence: the notification is saved to the database first, then broadcast. Broadcasting is just fast delivery; the database is the source of truth. That guarantees an offline user sees it on return.\n\n4. Server scaling: with several server instances, a user is connected to one of them, so a shared bus (Redis Pub/Sub) is needed to route the event to the right instance.\n\n5. Client side:\n• One hook manages the connection and pushes notifications into a store (Zustand) consumed by the bell and the list.\n• Reconnection with exponential backoff, and on reconnect, request everything since the last seen id.\n• Multiple tabs: a single connection via SharedWorker or BroadcastChannel to avoid ten connections per user.\n• Optimistic update for "mark as read".\n\n6. UX: group similar notifications, never interrupt the user with a modal per notification, and keep the unread count accurate.\n\n7. Resilience: if the real-time connection fails, the system silently falls back to polling every 30 seconds — the user should never notice.\n\nTrade-offs: SSE is simpler but one-directional; database persistence adds a write per notification in exchange for losing nothing; grouping reduces noise but delays some notifications.',
    },
    keyPoints: [
      { ar: 'اختيار النقل: SSE / WebSocket / polling', en: 'Transport choice: SSE, WebSocket or polling', terms: ['sse', 'server-sent', 'websocket', 'polling', 'transport', 'نقل', 'one direction', 'اتجاه'] },
      { ar: 'الحفظ في القاعدة قبل البث', en: 'Persist before broadcasting', terms: ['database', 'قاعدة', 'persist', 'حفظ', 'source of truth', 'مصدر', 'offline', 'history', 'سجل'] },
      { ar: 'Redis Pub/Sub للتوسّع', en: 'Redis Pub/Sub for scaling', terms: ['redis', 'pub/sub', 'pubsub', 'instance', 'نسخ', 'scale', 'توسع', 'sticky'] },
      { ar: 'إعادة الاتصال واستعادة ما فات', en: 'Reconnection and catch-up', terms: ['reconnect', 'إعادة اتصال', 'backoff', 'last id', 'missed', 'فات', 'catch up', 'since'] },
      { ar: 'تراجع لطيف إلى polling', en: 'Graceful fallback to polling', terms: ['fallback', 'تراجع', 'polling', 'degrade', 'silently'] },
    ],
  },
  {
    id: 'design-state-large-app',
    difficulty: advanced,
    kind: 'design',
    depth: 'design',
    question: {
      ar: 'كيف تهيكل إدارة الحالة في تطبيق React كبير يعمل عليه عدة فرق؟',
      en: 'How would you structure state management in a large React application worked on by several teams?',
    },
    answer: {
      ar: 'الخطأ الأشيع هو مخزن عام واحد يضع فيه الجميع كل شيء. تصميمي يبدأ بتصنيف الحالة، لأن كل نوع يحتاج أداة مختلفة.\n\n1. التصنيف:\n• حالة الخادم (70-80% عادة): React Query. لا تدخل أي مخزن عام. كل فريق يملك مفاتيح استعلامه ودوال جلبه.\n• حالة الـ URL: فلاتر، صفحات، ترتيب، تبويب نشط. في search params، مما يجعلها قابلة للمشاركة ويعمل معها زر الرجوع.\n• حالة واجهة محلية: useState داخل المكوّن، وترتفع فقط عند حاجة فعلية.\n• حالة مشتركة حقيقية (قليلة جدًا بعد الفرز): مصادقة، تفضيلات، سلة. Zustand أو Redux Toolkit، مقسّمة إلى شرائح يملكها فريق واحد لكل شريحة.\n• النماذج: React Hook Form.\n\n2. الحدود بين الفرق:\n• كل ميزة تصدّر hooks لا كائنات حالة: useCart() لا cartStore. هذا يسمح بتغيير التنفيذ دون كسر المستهلكين.\n• الاعتماديات في اتجاه واحد: ميزة تستورد من shared، ولا تستورد ميزة من ميزة أخرى مباشرة — تُفرض بقاعدة ESLint.\n• الأحداث للتواصل بين الميزات المستقلة (إتمام الشراء يُصدر حدثًا تستهلكه ميزة التحليلات) بدل استيراد مباشر.\n\n3. القواعد المكتوبة:\n• لا تخزّن ما يمكن اشتقاقه.\n• مصدر واحد للحقيقة — لا تكرار للبيانات في مكانين.\n• الحالات المستحيلة غير قابلة للتمثيل (اتحادات مميّزة).\n• توثيق "أين تعيش كل حالة" في ملف قرارات معماري يقرأه كل مطوّر جديد.\n\n4. الأداء: الاشتراك الانتقائي عبر selectors، وتقسيم الـ contexts حسب معدل التغيّر، وقياس بالـ Profiler قبل أي memo.\n\n5. الاختبار: منطق الحالة في دوال نقية (reducers، selectors) تُختبر بلا واجهة.\n\nالمقايضة: هذا التصميم يضيف انضباطًا مسبقًا (تصنيف، قواعد، ESLint) مقابل تجنّب الفوضى التي تظهر حتمًا في السنة الثانية من مشروع متعدد الفرق.',
      en: 'The most common mistake is one global store everyone dumps everything into. My design starts by classifying state, because each kind needs a different tool.\n\n1. Classification:\n• Server state (usually 70–80%): React Query. It never enters a global store. Each team owns its query keys and fetchers.\n• URL state: filters, pages, sort, active tab. In search params, which makes it shareable and makes the back button work.\n• Local UI state: useState inside the component, lifted only when genuinely needed.\n• True shared state (very little after sorting): auth, preferences, cart. Zustand or Redux Toolkit, split into slices with a single owning team per slice.\n• Forms: React Hook Form.\n\n2. Boundaries between teams:\n• Each feature exports hooks, not state objects: useCart() rather than cartStore. That lets the implementation change without breaking consumers.\n• Dependencies flow one way: a feature imports from shared, never directly from another feature — enforced with an ESLint rule.\n• Events for communication between independent features (checkout completion emits an event the analytics feature consumes) rather than direct imports.\n\n3. Written rules:\n• Never store what can be derived.\n• One source of truth — no data duplicated in two places.\n• Impossible states unrepresentable (discriminated unions).\n• Document "where each kind of state lives" in an architecture decision record every new developer reads.\n\n4. Performance: selective subscription via selectors, contexts split by change frequency, and profiling before any memo.\n\n5. Testing: state logic in pure functions (reducers, selectors) tested without UI.\n\nThe trade-off: this design demands upfront discipline (classification, rules, ESLint) in exchange for avoiding the chaos that inevitably appears in year two of a multi-team project.',
    },
    keyPoints: [
      { ar: 'تصنيف الحالة حسب النوع', en: 'Classify state by kind', terms: ['server state', 'url', 'local', 'محلي', 'shared', 'مشترك', 'form', 'classif', 'تصنيف', 'kind', 'نوع'] },
      { ar: 'React Query لبيانات الخادم', en: 'React Query for server data', terms: ['react query', 'tanstack', 'swr', 'cache', 'server data'] },
      { ar: 'hooks كواجهة عامة وحدود بين الفرق', en: 'Hooks as public API and team boundaries', terms: ['hook', 'boundary', 'حدود', 'public', 'واجهة', 'eslint', 'one way', 'اتجاه', 'own', 'يملك'] },
      { ar: 'مصدر واحد للحقيقة ولا اشتقاق مخزّن', en: 'Single source of truth, nothing derived stored', terms: ['source of truth', 'مصدر', 'derive', 'اشتقاق', 'duplicate', 'تكرار'] },
    ],
  },
  {
    id: 'design-scale-millions',
    difficulty: advanced,
    kind: 'design',
    depth: 'design',
    question: {
      ar: 'كيف تحسّن تطبيق ويب يخدم ملايين المستخدمين؟',
      en: 'How would you optimise a frontend application serving millions of users?',
    },
    answer: {
      ar: 'على هذا الحجم، كل 100 مللي ثانية لها أثر مقاس على الإيرادات، وكل كيلوبايت يُضرب في الملايين. أرتّب العمل حسب الأثر:\n\n1. القياس قبل كل شيء: بيانات مستخدمين حقيقيين (RUM) لا Lighthouse فقط، مقسّمة حسب الجهاز والبلد والشبكة. جهاز المطوّر لا يمثّل شيئًا.\n\n2. التوصيل:\n• CDN لكل شيء ثابت، مع صفحات ثابتة أو ISR حيثما أمكن — الطلب الذي لا يصل للخادم هو الأرخص.\n• HTTP/2 أو HTTP/3، ضغط Brotli، وتخزين مؤقت طويل ببصمة في اسم الملف.\n• Edge rendering للصفحات المخصصة قليلًا (تحية باسم المستخدم فوق صفحة ثابتة).\n\n3. حجم JavaScript — أكبر مكسب عادة:\n• ميزانية حزمة مفروضة في CI تفشل عند تجاوزها.\n• تقسيم حسب المسار وحسب التفاعل (المحرر يُحمَّل عند النقر لا عند فتح الصفحة).\n• Server Components لإبقاء الكود الثقيل على الخادم.\n• مراجعة الاعتماديات ربعيًا — الحزمة تتضخم تدريجيًا دون أن يلاحظ أحد.\n\n4. الصور والخطوط: صيغ حديثة، أحجام حسب الشاشة، تحميل كسول خارج الشاشة، خطوط مقلّمة ومستضافة ذاتيًا.\n\n5. الخيط الرئيسي: تقسيم المهام الطويلة، Web Workers للحسابات، تجنّب تحميل السكربتات الخارجية (التحليلات، الإعلانات) بشكل حاجب — هذه غالبًا أثقل من كودك.\n\n6. الاستجابة المحسوسة: هيكل تحميل (skeleton) وتحديثات متفائلة وتحميل مسبق عند التحويم — المستخدم يحكم بما يشعر به لا بما يُقاس.\n\n7. المرونة: حدود أخطاء، وتدهور لطيف، ومراقبة معدل الأخطاء مقسّمة بالإصدار حتى يُكتشف النشر السيئ خلال دقائق.\n\n8. التنظيم: فريق أداء مسؤول عن الميزانيات والمقاييس، وإلا يتراجع كل شيء خلال أشهر.\n\nالمقايضات: التخزين المؤقت الطويل يحسّن السرعة لكنه يعقّد الإبطال؛ وتقسيم الكود المفرط يزيد عدد الطلبات؛ وServer Components تقلّل الحزمة لكنها تنقل الحمل إلى الخادم.',
      en: 'At this scale every 100ms has a measurable revenue impact, and every kilobyte is multiplied by millions. I order the work by impact:\n\n1. Measure before anything: real user monitoring (RUM), not just Lighthouse, segmented by device, country and network. A developer machine represents nothing.\n\n2. Delivery:\n• CDN for everything static, with static or ISR pages wherever possible — the request that never reaches a server is the cheapest.\n• HTTP/2 or HTTP/3, Brotli compression, long caching with content-hashed filenames.\n• Edge rendering for lightly personalised pages (a greeting by name on top of a static page).\n\n3. JavaScript size — usually the biggest win:\n• A bundle budget enforced in CI that fails when exceeded.\n• Splitting by route and by interaction (the editor loads on click, not on page load).\n• Server Components to keep heavy code on the server.\n• Quarterly dependency audits — bundles bloat gradually without anyone noticing.\n\n4. Images and fonts: modern formats, sizes per viewport, lazy loading off-screen, subsetted self-hosted fonts.\n\n5. The main thread: break up long tasks, Web Workers for computation, and never load third-party scripts (analytics, ads) in a blocking way — they are often heavier than your own code.\n\n6. Perceived responsiveness: skeletons, optimistic updates and preloading on hover — users judge by what they feel, not what is measured.\n\n7. Resilience: error boundaries, graceful degradation, and error-rate monitoring segmented by release so a bad deploy is caught within minutes.\n\n8. Organisation: a performance team owning budgets and metrics, otherwise everything regresses within months.\n\nTrade-offs: long caching improves speed but complicates invalidation; excessive code splitting increases request count; Server Components shrink the bundle but shift load to the server.',
    },
    keyPoints: [
      { ar: 'القياس من مستخدمين حقيقيين', en: 'Real-user measurement', terms: ['rum', 'real user', 'measure', 'قياس', 'metric', 'vitals', 'segment', 'device'] },
      { ar: 'CDN وتخزين مؤقت وثابت أولًا', en: 'CDN, caching and static first', terms: ['cdn', 'cache', 'تخزين', 'static', 'ثابت', 'edge', 'brotli', 'http/2', 'http/3'] },
      { ar: 'ميزانية حزمة وتقسيم كود', en: 'Bundle budget and code splitting', terms: ['budget', 'ميزانية', 'bundle', 'حزمة', 'split', 'تقسيم', 'lazy', 'server component', 'dependenc'] },
      { ar: 'الصور والسكربتات الخارجية', en: 'Images and third-party scripts', terms: ['image', 'صور', 'third-party', 'خارجي', 'analytics', 'font', 'خط', 'main thread'] },
      { ar: 'المرونة والمراقبة', en: 'Resilience and monitoring', terms: ['error boundary', 'monitor', 'مراقب', 'degrade', 'تدهور', 'release', 'alert'] },
    ],
  },
  {
    id: 'design-component-system',
    difficulty: advanced,
    kind: 'design',
    depth: 'design',
    question: {
      ar: 'كيف تصمم نظام مكوّنات قابلًا للتوسّع تستخدمه عدة فرق ومنتجات؟',
      en: 'How would you design a scalable component system used by several teams and products?',
    },
    answer: {
      ar: 'نظام المكوّنات منتج داخلي له مستخدمون (المطوّرون) وأصحاب مصلحة (المصممون)، ويفشل عادة لأسباب تنظيمية لا تقنية.\n\n1. الطبقات:\n• رموز التصميم (design tokens): ألوان، مسافات، خطوط، ظلال — كمتغيرات CSS أو JSON مشترك مع Figma. هذه الطبقة تجعل السمات والوضع الليلي تلقائية.\n• الأساسيات (primitives): Button, Input, Dialog — بلا منطق عمل، قابلة للوصول افتراضيًا، بواجهة props مستقرة.\n• الأنماط المركّبة: Form, DataTable, Layout — مبنية من الأساسيات.\n• مكوّنات المنتج تبقى في المنتجات لا في النظام.\n\n2. مبادئ API:\n• التركيب على التهيئة: <Dialog><Dialog.Title/></Dialog> أسهل توسّعًا من dialog بأربعين prop.\n• هروب محكوم: className وas/asChild للحالات غير المتوقعة، دون فتح كل شيء.\n• إمكانية الوصول مبنية داخل المكوّن (التركيز، ARIA، لوحة المفاتيح) — المستهلك لا يجب أن يفكر فيها.\n• لا تبعيات على إطار حالة معيّن؛ المكوّنات مضبوطة أو غير مضبوطة بوضوح.\n\n3. التوزيع والإصدارات:\n• حزمة npm داخلية بإصدارات دلالية، وتغييرات كاسرة موثّقة مع codemods حيث أمكن.\n• الفرق ترقّي على وتيرتها؛ لا إجبار على أحدث إصدار.\n\n4. الجودة: اختبارات بصرية (Chromatic/Storybook) لأن التغيير في زر يؤثر على مئة شاشة، واختبارات إمكانية وصول آلية، وStorybook كتوثيق حي.\n\n5. الحوكمة — الجزء الذي يحدد النجاح:\n• فريق صغير يملك النظام، مع عملية واضحة للمساهمة من الفرق الأخرى.\n• معيار للإضافة: مكوّن يُضاف عندما يتكرر في منتجين، لا عندما يطلبه شخص.\n• قناة دعم ومقاييس تبنّي (نسبة الشاشات التي تستخدم النظام).\n\nالمقايضات: البدء بنظام كامل يؤخر المنتجات؛ الأفضل استخراج ما يتكرر فعلًا. والمرونة الزائدة تكسر الاتساق، والصرامة الزائدة تدفع الفرق لتجاوز النظام — التوازن هو هروب محكوم.',
      en: 'A component system is an internal product with users (developers) and stakeholders (designers), and it usually fails for organisational rather than technical reasons.\n\n1. Layers:\n• Design tokens: colours, spacing, type, shadows — as CSS variables or JSON shared with Figma. This layer makes theming and dark mode automatic.\n• Primitives: Button, Input, Dialog — no business logic, accessible by default, with a stable props API.\n• Composite patterns: Form, DataTable, Layout — built from primitives.\n• Product components stay in the products, not in the system.\n\n2. API principles:\n• Composition over configuration: <Dialog><Dialog.Title/></Dialog> scales better than a dialog with forty props.\n• Controlled escape hatches: className and as/asChild for unforeseen cases, without opening everything up.\n• Accessibility built into the component (focus, ARIA, keyboard) — consumers should not have to think about it.\n• No dependency on a particular state framework; components are clearly controlled or uncontrolled.\n\n3. Distribution and versioning:\n• An internal npm package with semantic versioning, breaking changes documented with codemods where possible.\n• Teams upgrade at their own pace; nobody is forced onto the latest version.\n\n4. Quality: visual regression tests (Chromatic/Storybook) because a change to a button affects a hundred screens, automated accessibility tests, and Storybook as living documentation.\n\n5. Governance — the part that decides success:\n• A small team owns the system, with a clear contribution process for other teams.\n• An admission rule: a component is added when it recurs in two products, not when someone asks.\n• A support channel and adoption metrics (share of screens using the system).\n\nTrade-offs: starting with a complete system delays products; better to extract what genuinely recurs. Too much flexibility breaks consistency, too much rigidity pushes teams to bypass the system — the balance is controlled escape hatches.',
    },
    keyPoints: [
      { ar: 'طبقات: tokens → primitives → مركّبات', en: 'Layers: tokens → primitives → composites', terms: ['token', 'رموز', 'primitive', 'أساسي', 'layer', 'طبق', 'composite', 'مركب'] },
      { ar: 'التركيب على التهيئة', en: 'Composition over configuration', terms: ['composition', 'تركيب', 'compound', 'children', 'props', 'configuration', 'تهيئة', 'escape hatch'] },
      { ar: 'إمكانية الوصول مدمجة', en: 'Accessibility built in', terms: ['accessib', 'وصول', 'aria', 'keyboard', 'لوحة المفاتيح', 'focus', 'a11y'] },
      { ar: 'إصدارات واختبارات بصرية', en: 'Versioning and visual tests', terms: ['version', 'إصدار', 'semver', 'storybook', 'visual', 'بصري', 'chromatic', 'breaking'] },
      { ar: 'الحوكمة والملكية', en: 'Governance and ownership', terms: ['governance', 'حوكمة', 'own', 'يملك', 'contribut', 'مساهمة', 'adoption', 'تبني', 'team'] },
    ],
  },

  // ---------------------------------------------------------- TRADE-OFFS
  {
    id: 'tradeoff-context-vs-redux',
    difficulty: intermediate,
    kind: 'tradeoff',
    depth: 'design',
    question: {
      ar: 'Context API أم Redux — متى تختار كلًا منهما؟',
      en: 'Context API vs Redux — when do you choose each?',
    },
    answer: {
      ar: 'ليسا بديلين لبعضهما؛ Context آلية توزيع قيمة، وRedux نظام إدارة حالة كامل.\n\nأختار Context عندما:\n• القيمة قليلة التغيّر: سمة، لغة، مستخدم حالي، صلاحيات.\n• عدد المستهلكين محدود أو لا يهم إعادة تصييرهم جميعًا.\n• لا أحتاج أدوات تتبّع أو middleware.\n\nأختار Redux (Toolkit) عندما:\n• الحالة معقدة وكثيرة التغيّر ويقرأ أجزاءً مختلفة منها مكوّنات مختلفة — الاشتراك الانتقائي عبر selectors يمنع إعادة التصيير غير الضرورية، وهذا ما لا يوفّره Context.\n• أحتاج تتبّعًا واضحًا لكل تغيير (DevTools، time travel) في تطبيق كبير.\n• فريق كبير يحتاج نمطًا موحّدًا مفروضًا.\n\nالخيار الثالث الذي أذكره دائمًا: Zustand يعطي الاشتراك الانتقائي بكود أقل بكثير، وهو خياري الافتراضي للحالة المشتركة المتوسطة.\n\nوالسؤال السابق لكل هذا: هل هذه بيانات خادم؟ إن كانت كذلك فالإجابة React Query لا Context ولا Redux.\n\nالخلاصة: Context للتوزيع البسيط، Zustand للحالة المشتركة العادية، Redux للتعقيد الحقيقي أو الفرق الكبيرة، وReact Query لكل ما مصدره الخادم.',
      en: 'They are not alternatives to each other: Context is a value-distribution mechanism, Redux is a full state management system.\n\nI choose Context when:\n• The value changes rarely: theme, locale, current user, permissions.\n• Consumers are few, or re-rendering all of them does not matter.\n• I need no devtools or middleware.\n\nI choose Redux (Toolkit) when:\n• State is complex and changes often, with different components reading different parts — selective subscription via selectors prevents unnecessary re-renders, which Context cannot do.\n• I need a clear trace of every change (DevTools, time travel) in a large app.\n• A large team needs an enforced, uniform pattern.\n\nThe third option I always mention: Zustand gives selective subscription with far less code, and it is my default for ordinary shared state.\n\nAnd the question that precedes all of this: is it server data? If so the answer is React Query, not Context or Redux.\n\nSummary: Context for simple distribution, Zustand for ordinary shared state, Redux for genuine complexity or large teams, and React Query for anything sourced from the server.',
    },
    keyPoints: [
      { ar: 'Context: توزيع، Redux: إدارة حالة', en: 'Context distributes, Redux manages', terms: ['distribut', 'توزيع', 'mechanism', 'آلية', 'not a state manager', 'ليس'] },
      { ar: 'إعادة تصيير كل المستهلكين مقابل selectors', en: 'All consumers re-render vs selectors', terms: ['selector', 're-render', 'consumer', 'مستهلك', 'selective', 'انتقائي'] },
      { ar: 'متى كل منهما', en: 'When each applies', terms: ['rarely', 'قليل', 'theme', 'complex', 'معقد', 'large team', 'devtools', 'zustand'] },
      { ar: 'بيانات الخادم → React Query', en: 'Server data → React Query', terms: ['react query', 'server', 'خادم'] },
    ],
  },
  {
    id: 'tradeoff-ssr-vs-csr',
    difficulty: intermediate,
    kind: 'tradeoff',
    depth: 'design',
    question: {
      ar: 'SSR أم CSR — متى تختار كلًا منهما؟',
      en: 'SSR vs CSR — when do you choose each?',
    },
    answer: {
      ar: 'أختار SSR (أو الثابت/ISR) عندما:\n• SEO مهم: صفحات عامة يجب أن تفهرسها محركات البحث.\n• سرعة الظهور الأول حاسمة: صفحات هبوط، مقالات، منتجات — المستخدم يرى المحتوى قبل تحميل JavaScript.\n• الجمهور على أجهزة أو شبكات ضعيفة حيث تنفيذ JavaScript الثقيل مكلف.\n• المشاركة الاجتماعية تحتاج meta tags صحيحة.\n\nأختار CSR عندما:\n• التطبيق خلف تسجيل دخول ولا يهمه SEO: لوحات تحكم، أدوات داخلية.\n• التفاعل كثيف والحالة معقدة والمستخدم يبقى طويلًا — التحميل الأول الأثقل يُستهلك مرة.\n• لا أريد بنية خادم تحتية للواجهة (استضافة ثابتة رخيصة).\n\nالتكاليف الصادقة لـ SSR: تعقيد تشغيلي (خادم، cache)، حدود خادم/عميل يجب فهمها، وأخطاء hydration. ولـ CSR: شاشة فارغة حتى يُحمَّل JS، وSEO ضعيف، وتجربة سيئة على الأجهزة الضعيفة.\n\nالواقع اليوم أن الخيار نادرًا ما يكون ثنائيًا: Next.js يسمح بمزج الاثنين في نفس التطبيق — صفحات عامة على الخادم، ولوحة التحكم على العميل. السؤال الصحيح ليس "أي الاثنين؟" بل "أي صفحة تحتاج أيّهما؟".',
      en: 'I choose SSR (or static/ISR) when:\n• SEO matters: public pages search engines must index.\n• First paint is critical: landing pages, articles, products — the user sees content before JavaScript loads.\n• The audience is on weak devices or networks where executing heavy JavaScript is expensive.\n• Social sharing needs correct meta tags.\n\nI choose CSR when:\n• The app is behind a login and SEO is irrelevant: dashboards, internal tools.\n• Interaction is heavy, state is complex and users stay long — the heavier first load is paid once.\n• I want no server infrastructure for the frontend (cheap static hosting).\n\nThe honest costs of SSR: operational complexity (a server, caching), a server/client boundary to understand, and hydration bugs. Of CSR: a blank screen until JS loads, poor SEO, and a bad experience on weak devices.\n\nThe reality today is that the choice is rarely binary: Next.js lets you mix both in one application — public pages on the server, the dashboard on the client. The right question is not "which of the two?" but "which page needs which?".',
    },
    keyPoints: [
      { ar: 'SSR: SEO وسرعة الظهور الأول', en: 'SSR: SEO and first paint', terms: ['seo', 'first paint', 'ظهور', 'public', 'عام', 'index', 'فهرس', 'social', 'meta'] },
      { ar: 'CSR: خلف تسجيل الدخول وتفاعل كثيف', en: 'CSR: behind login, heavy interaction', terms: ['login', 'دخول', 'dashboard', 'لوحة', 'internal', 'داخلي', 'interactive', 'تفاعل', 'static hosting'] },
      { ar: 'تكاليف كل خيار', en: 'Costs of each', terms: ['hydration', 'complexity', 'تعقيد', 'blank', 'فارغ', 'infrastructure', 'بنية', 'cost', 'تكلفة'] },
      { ar: 'المزج حسب الصفحة', en: 'Mix per page', terms: ['both', 'كلا', 'mix', 'مزج', 'per page', 'لكل صفحة', 'hybrid', 'هجين', 'next.js'] },
    ],
  },
  {
    id: 'tradeoff-server-vs-client-components',
    difficulty: advanced,
    kind: 'tradeoff',
    depth: 'design',
    question: {
      ar: 'Server Components أم Client Components — كيف تقرر لكل مكوّن؟',
      en: 'Server Components vs Client Components — how do you decide for each component?',
    },
    answer: {
      ar: 'القاعدة الافتراضية: خادم ما لم يكن هناك سبب للعميل. ثم أسأل عن كل مكوّن:\n\nيجب أن يكون Client Component إذا:\n• يحتاج حالة (useState) أو تأثيرات (useEffect).\n• يستجيب لأحداث المستخدم (onClick, onChange).\n• يستخدم واجهات المتصفح (localStorage, window, geolocation).\n• يستخدم hooks مخصصة تعتمد على ما سبق، أو مكتبة تحتاج ذلك.\n\nيبقى Server Component إذا:\n• يعرض بيانات فقط.\n• يجلب بيانات أو يصل لقاعدة البيانات أو الأسرار.\n• يستخدم مكتبة ثقيلة لا يجب أن تصل للمتصفح (تحويل Markdown، معالجة تواريخ معقدة).\n\nالاستراتيجية العملية: ادفع "use client" إلى أوراق الشجرة. صفحة منتج كاملة تبقى على الخادم، وزر "أضف إلى السلة" وحده مكوّن عميل. لا تجعل الصفحة كلها عميلًا لأن زرًا واحدًا يحتاج onClick.\n\nالمقايضات:\n• الخادم: حزمة أصغر وبيانات أقرب للمصدر، مقابل لا تفاعلية وقيود على ما يُمرَّر (قابل للتسلسل فقط).\n• العميل: تفاعل كامل، مقابل حجم في الحزمة وتأخر hydration.\n\nالخطأ الأشيع: "use client" عاليًا في الشجرة فيتحول كل ما تحته إلى عميل. والنمط الذي يحل معظم التعارضات: مكوّن عميل يستقبل مكوّن خادم كـ children.',
      en: 'The default rule: server unless there is a reason for the client. Then for each component I ask:\n\nIt must be a Client Component if:\n• It needs state (useState) or effects (useEffect).\n• It responds to user events (onClick, onChange).\n• It uses browser APIs (localStorage, window, geolocation).\n• It uses custom hooks depending on the above, or a library that requires them.\n\nIt stays a Server Component if:\n• It only displays data.\n• It fetches data or accesses the database or secrets.\n• It uses a heavy library that should never reach the browser (Markdown conversion, complex date handling).\n\nThe practical strategy: push "use client" to the leaves. An entire product page stays on the server, and only the "add to cart" button is a client component. Do not make the whole page a client because one button needs onClick.\n\nTrade-offs:\n• Server: smaller bundle and data close to the source, versus no interactivity and constraints on what can be passed (serialisable only).\n• Client: full interactivity, versus bundle weight and hydration delay.\n\nThe most common mistake: "use client" high in the tree, turning everything below it into client code. And the pattern that resolves most conflicts: a client component receiving a server component as children.',
    },
    keyPoints: [
      { ar: 'الخادم افتراضيًا', en: 'Server by default', terms: ['default', 'افتراض', 'server unless', 'ما لم'] },
      { ar: 'معايير العميل: حالة، أحداث، متصفح', en: 'Client criteria: state, events, browser APIs', terms: ['usestate', 'useeffect', 'onclick', 'event', 'حدث', 'browser', 'متصفح', 'window', 'localstorage', 'interactiv'] },
      { ar: 'ادفع "use client" إلى الأوراق', en: 'Push "use client" to the leaves', terms: ['leaf', 'leaves', 'أوراق', 'small', 'صغير', 'isolate', 'عزل', 'button', 'زر'] },
      { ar: 'نمط children لتمرير الخادم داخل العميل', en: 'The children pattern', terms: ['children', 'compose', 'pass', 'تمرير', 'wrap'] },
    ],
  },
  {
    id: 'tradeoff-rest-vs-websockets',
    difficulty: intermediate,
    kind: 'tradeoff',
    depth: 'design',
    question: {
      ar: 'REST أم WebSockets — متى تختار كلًا منهما؟',
      en: 'REST vs WebSockets — when do you choose each?',
    },
    answer: {
      ar: 'REST هو الافتراضي لكل شيء طلب/رد: جلب بيانات، إنشاء، تحديث، حذف. مزاياه: عديم الحالة، قابل للتخزين المؤقت، سهل التوسّع والمراقبة والتصحيح، وتفهمه كل الأدوات.\n\nWebSocket عندما يحتاج الخادم أن يدفع البيانات بتردد عالٍ أو باتجاهين: المحادثة، التحرير التعاوني، الألعاب، لوحات حية تتحدث كل ثانية.\n\nالخيار الذي يُنسى: Server-Sent Events — إذا كان الدفع من الخادم للعميل فقط (إشعارات، أسعار، تقدّم مهمة) فهو أبسط من WebSocket ويعمل فوق HTTP مع إعادة اتصال مدمجة.\n\nالأسئلة التي تحسم الاختيار:\n1. من يبدأ الاتصال؟ العميل دائمًا → REST. الخادم → SSE أو WebSocket.\n2. ما التأخير المقبول؟ دقائق → polling عادي؛ ثوانٍ → SSE؛ أجزاء الثانية باتجاهين → WebSocket.\n3. كم اتصالًا متزامنًا؟ الاتصالات المستمرة تستهلك موارد الخادم وتحتاج sticky sessions أو Redis عند التوسّع.\n\nتكاليف WebSocket الصادقة: لا تخزين مؤقت، أصعب في التصحيح والمراقبة، تعامل يدوي مع إعادة الاتصال والرسائل الفائتة، وتعقيد في التوسّع الأفقي.\n\nوالواقع أن معظم التطبيقات تستخدم REST لكل شيء وتضيف SSE أو WebSocket لميزة أو اثنتين فقط — لا تبني كل الـ API فوق WebSocket.',
      en: 'REST is the default for everything request/response: fetching, creating, updating, deleting. Its advantages: stateless, cacheable, easy to scale, monitor and debug, and understood by every tool.\n\nWebSocket when the server needs to push data at high frequency or in both directions: chat, collaborative editing, games, live dashboards updating every second.\n\nThe option people forget: Server-Sent Events — if the push is server-to-client only (notifications, prices, job progress), it is simpler than WebSocket and runs over HTTP with built-in reconnection.\n\nThe questions that decide:\n1. Who initiates? Always the client → REST. The server → SSE or WebSocket.\n2. What latency is acceptable? Minutes → plain polling; seconds → SSE; sub-second in both directions → WebSocket.\n3. How many concurrent connections? Persistent connections consume server resources and need sticky sessions or Redis when scaling.\n\nThe honest costs of WebSocket: no caching, harder to debug and monitor, manual handling of reconnection and missed messages, and complexity in horizontal scaling.\n\nIn reality most applications use REST for everything and add SSE or WebSocket for one or two features — never build the whole API on WebSocket.',
    },
    keyPoints: [
      { ar: 'REST افتراضي لطلب/رد', en: 'REST default for request/response', terms: ['request', 'طلب', 'response', 'stateless', 'cache', 'default', 'افتراض', 'crud'] },
      { ar: 'WebSocket للاتجاهين والتردد العالي', en: 'WebSocket for bidirectional, high frequency', terms: ['bidirectional', 'اتجاهين', 'push', 'دفع', 'chat', 'محادثة', 'real-time', 'لحظي', 'frequent'] },
      { ar: 'SSE للدفع أحادي الاتجاه', en: 'SSE for one-way push', terms: ['sse', 'server-sent', 'one-way', 'اتجاه واحد', 'notification', 'إشعار'] },
      { ar: 'تكاليف الاتصالات المستمرة', en: 'Costs of persistent connections', terms: ['scale', 'توسع', 'sticky', 'redis', 'reconnect', 'debug', 'resource', 'موارد', 'no cache'] },
    ],
  },
  {
    id: 'tradeoff-sql-vs-nosql',
    difficulty: intermediate,
    kind: 'tradeoff',
    depth: 'design',
    question: {
      ar: 'SQL أم NoSQL — متى تختار كلًا منهما؟',
      en: 'SQL vs NoSQL — when do you choose each?',
    },
    answer: {
      ar: 'SQL (PostgreSQL مثلًا) هو الافتراضي الآمن لمعظم التطبيقات لأن معظم البيانات علائقية: مستخدمون لهم طلبات لها عناصر. يعطيك معاملات ACID، وقيودًا تحمي سلامة البيانات، وjoins، واستعلامات مرنة لم تتوقعها عند التصميم.\n\nNoSQL عندما يوجد سبب محدد:\n• Document (MongoDB): بيانات هرمية تُقرأ كوحدة واحدة، ومخطط يتغير كثيرًا.\n• Key-value (Redis): تخزين مؤقت، جلسات، عدّادات — بسرعة قصوى.\n• Wide-column (Cassandra): حجم كتابة ضخم موزّع جغرافيًا.\n• Graph (Neo4j): علاقات عميقة متعددة المستويات (شبكات اجتماعية).\n\nالأسئلة الحاسمة:\n1. هل تحتاج معاملات عبر عدة كيانات؟ → SQL.\n2. هل أنماط الوصول معروفة مسبقًا ومحدودة؟ NoSQL يزدهر هنا ويعاني عندما تظهر استعلامات جديدة.\n3. هل الحجم يتجاوز ما يخدمه خادم SQL واحد قوي مع replicas؟ نادرًا ما يحدث قبل عشرات الملايين من المستخدمين.\n\nما تغيّر: PostgreSQL يدعم JSONB بكفاءة، فحجة "المرونة" وحدها لم تعد كافية لاختيار NoSQL.\n\nالخيار العملي الشائع: SQL كمصدر حقيقة + Redis للتخزين المؤقت — لا أحدهما بديلًا عن الآخر.',
      en: 'SQL (PostgreSQL, say) is the safe default for most applications because most data is relational: users have orders that have items. It gives you ACID transactions, constraints that protect integrity, joins, and flexible queries you did not anticipate at design time.\n\nNoSQL when there is a specific reason:\n• Document (MongoDB): hierarchical data read as a unit, with a frequently changing schema.\n• Key-value (Redis): caching, sessions, counters — at maximum speed.\n• Wide-column (Cassandra): enormous, geographically distributed write volume.\n• Graph (Neo4j): deep multi-level relationships (social networks).\n\nThe deciding questions:\n1. Do you need transactions across several entities? → SQL.\n2. Are access patterns known upfront and limited? NoSQL thrives here and struggles when new queries appear.\n3. Does the volume exceed what one powerful SQL server with replicas serves? That rarely happens before tens of millions of users.\n\nWhat changed: PostgreSQL handles JSONB efficiently, so "flexibility" alone is no longer a sufficient reason to choose NoSQL.\n\nThe common practical choice: SQL as the source of truth plus Redis for caching — not one instead of the other.',
    },
    keyPoints: [
      { ar: 'SQL افتراضي للبيانات العلائقية والمعاملات', en: 'SQL default for relational data and transactions', terms: ['relational', 'علائقي', 'transaction', 'معاملة', 'acid', 'join', 'constraint', 'قيد', 'default', 'افتراض'] },
      { ar: 'NoSQL لأنماط وصول محددة', en: 'NoSQL for specific access patterns', terms: ['access pattern', 'نمط', 'document', 'key-value', 'redis', 'cache', 'scale', 'حجم', 'write'] },
      { ar: 'JSONB يقلل حجة المرونة', en: 'JSONB weakens the flexibility argument', terms: ['jsonb', 'json', 'postgres', 'flexib', 'مرون', 'schema'] },
      { ar: 'الجمع بينهما', en: 'Combining both', terms: ['both', 'كلا', 'plus', 'together', 'معا', 'source of truth', 'cache'] },
    ],
  },
  {
    id: 'tradeoff-local-vs-global-state',
    difficulty: intermediate,
    kind: 'tradeoff',
    depth: 'design',
    question: {
      ar: 'حالة محلية أم عامة — كيف تقرر؟',
      en: 'Local vs global state — how do you decide?',
    },
    answer: {
      ar: 'القاعدة: محلية حتى يثبت العكس. الحالة العامة تكلفة لا ميزة.\n\nتبقى محلية إذا كان مكوّن واحد (أو مكوّن وأبناؤه المباشرون) هو من يستخدمها: فتح قائمة، قيمة حقل، تبويب نشط، حالة تحميل زر.\n\nترتفع درجة أو درجتين (lifting) إذا احتاجها شقيقان — وهذا ليس "عامًا"، بل مجرد أب مشترك.\n\nتصبح عامة فقط عندما:\n• تحتاجها فروع بعيدة في الشجرة لا يجمعها أب قريب.\n• يجب أن تبقى عبر التنقل بين الصفحات (سلة، مصادقة).\n• تحتاجها أجزاء غير مرئية (مستمع WebSocket يحدّث عدّادًا).\n\nتكاليف العامة التي تجعلني أتردد: إعادة تصيير في أنحاء التطبيق، صعوبة معرفة من يغيّر ماذا، مكوّنات لا تُختبر بمعزل، وحالة تبقى بعد أن ينتهي الغرض منها.\n\nالفخ الشائع: رفع الحالة إلى العام لأن ذلك "أسهل الآن" — كل حالة عامة غير ضرورية دَين يُدفع لاحقًا.\n\nوقبل أي من هذا: بيانات الخادم ليست حالة تطبيق؛ إن كان السؤال "أين أضع قائمة المنتجات؟" فالجواب React Query لا محلي ولا عام.',
      en: 'The rule: local until proven otherwise. Global state is a cost, not a feature.\n\nIt stays local if one component (or one component plus its direct children) uses it: a menu open flag, an input value, the active tab, a button\'s loading state.\n\nIt lifts a level or two when two siblings need it — that is not "global", it is just a shared parent.\n\nIt becomes global only when:\n• Distant branches of the tree need it with no nearby common parent.\n• It must survive navigation between pages (cart, auth).\n• Non-visible parts need it (a WebSocket listener updating a counter).\n\nThe costs of global state that make me hesitate: re-renders across the app, difficulty knowing who changes what, components that cannot be tested in isolation, and state that lingers after its purpose has ended.\n\nThe common trap: lifting to global because it is "easier right now" — every unnecessary global value is debt paid later.\n\nAnd before any of this: server data is not application state. If the question is "where do I put the product list?", the answer is React Query, neither local nor global.',
    },
    keyPoints: [
      { ar: 'محلية افتراضيًا', en: 'Local by default', terms: ['local', 'محلي', 'default', 'افتراض', 'lowest', 'أدنى', 'until', 'حتى'] },
      { ar: 'الرفع للأب المشترك ليس عامًا', en: 'Lifting to a shared parent is not global', terms: ['lift', 'رفع', 'parent', 'أب', 'sibling', 'شقيق'] },
      { ar: 'معايير العامة', en: 'Criteria for global', terms: ['distant', 'بعيد', 'navigation', 'تنقل', 'survive', 'persist', 'across', 'عبر', 'cart', 'auth'] },
      { ar: 'تكاليف العامة', en: 'Costs of global', terms: ['re-render', 'cost', 'تكلفة', 'debt', 'دين', 'test', 'اختبار', 'coupl'] },
    ],
  },
  {
    id: 'tradeoff-memo-vs-simplicity',
    difficulty: intermediate,
    kind: 'tradeoff',
    depth: 'design',
    question: {
      ar: 'Memoization أم البساطة — متى تضيف useMemo/useCallback/React.memo ومتى تتركها؟',
      en: 'Memoization vs simplicity — when do you add useMemo/useCallback/React.memo and when do you leave them out?',
    },
    answer: {
      ar: 'الافتراضي: لا تُضِف. الـ memoization ليس مجانيًا — له تكلفة مقارنة الاعتماديات وحفظ القيم، ويضيف ضجيجًا للكود، ومع اعتماديات ناقصة يتحول إلى خطأ منطقي (stale closure).\n\nأضيفه عندما يثبت القياس (React Profiler) واحدًا من:\n1. حساب مكلف فعلًا يتكرر في كل تصيير: ترتيب أو تصفية آلاف العناصر → useMemo.\n2. مكوّن ابن ثقيل مغلّف بـ React.memo يستقبل دالة أو كائنًا → useCallback/useMemo لتثبيت المرجع، وإلا فالـ memo بلا فائدة.\n3. دالة أو كائن في مصفوفة اعتماديات useEffect يسبب إعادة تنفيذ مستمرة.\n4. قائمة طويلة يُعاد تصيير عناصرها بسبب تغيير في الأب لا يعنيها.\n\nقبل الـ memoization أجرّب البدائل الأرخص: خفض الحالة إلى المكوّن الذي يحتاجها، والتركيب عبر children لعزل الأجزاء الثابتة، وتقسيم الـ context — هذه تحل معظم الحالات بلا أي memo.\n\nعلامة على الإفراط: useCallback على كل دالة تُمرَّر إلى <button>. إنشاء الدالة أرخص من التغليف.\n\nوالسياق الجديد: React Compiler يجعل كثيرًا من هذا تلقائيًا، وهذا دليل آخر أن الأصل هو الكود البسيط والتحسين يُضاف عند الحاجة المثبتة.',
      en: 'The default: leave it out. Memoization is not free — it costs dependency comparisons and retained values, adds noise, and with incomplete dependencies it becomes a logic bug (stale closure).\n\nI add it when profiling (React Profiler) proves one of:\n1. A genuinely expensive computation repeated every render: sorting or filtering thousands of items → useMemo.\n2. A heavy child wrapped in React.memo receiving a function or object → useCallback/useMemo to stabilise the reference, otherwise the memo is pointless.\n3. A function or object in a useEffect dependency array causing constant re-runs.\n4. A long list whose items re-render because of a parent change that does not concern them.\n\nBefore memoizing I try the cheaper alternatives: pushing state down to the component that needs it, composition via children to isolate static parts, and splitting contexts — these solve most cases with no memo at all.\n\nA sign of overuse: useCallback on every handler passed to a <button>. Creating the function is cheaper than wrapping it.\n\nAnd the new context: React Compiler automates much of this, which is further evidence that the baseline is simple code, with optimisation added on proven need.',
    },
    keyPoints: [
      { ar: 'الافتراضي: بلا memo', en: 'Default: no memo', terms: ['default', 'افتراض', 'not free', 'ليس مجاني', 'cost', 'تكلفة', 'premature', 'مبكر'] },
      { ar: 'القياس أولًا', en: 'Measure first', terms: ['profiler', 'measure', 'قياس', 'prove', 'يثبت', 'devtools'] },
      { ar: 'الحالات المبررة', en: 'The justified cases', terms: ['expensive', 'مكلف', 'react.memo', 'reference', 'مرجع', 'dependency', 'اعتماد', 'list', 'قائمة'] },
      { ar: 'البدائل الأرخص أولًا', en: 'Cheaper alternatives first', terms: ['push state down', 'خفض', 'children', 'composition', 'تركيب', 'split context', 'تقسيم'] },
    ],
  },
  {
    id: 'tradeoff-monolith-vs-microservices',
    difficulty: advanced,
    kind: 'tradeoff',
    depth: 'design',
    question: {
      ar: 'Monolith أم Microservices — متى تختار كلًا منهما؟',
      en: 'Monolith vs microservices — when do you choose each?',
    },
    answer: {
      ar: 'إجابتي المباشرة: ابدأ بـ modular monolith، وانتقل إلى microservices عند سبب محدد لا عند "الحجم" المجرد.\n\nMonolith منظّم (حدود وحدات واضحة داخل تطبيق واحد) يعطيك: استدعاءات داخل العملية بلا فشل شبكة، معاملات قاعدة بيانات حقيقية، نشر واحد، تتبّع بسيط، واختبارات أسهل. لفريق أقل من ~15 مهندسًا هو الخيار الصحيح غالبًا.\n\nMicroservices تستحق تكلفتها عندما:\n1. تختلف متطلبات التوسّع جوهريًا بين الأجزاء (معالجة فيديو مقابل إدارة مستخدمين).\n2. فرق متعددة تتعطل بسبب التنسيق على نشر واحد.\n3. تحتاج عزل أعطال حقيقيًا: جزء ينهار ولا يسقط الباقي.\n4. اختلاف تقني مبرَّر لجزء معيّن.\n\nالتكاليف التي يجب قولها صراحةً: تتبّع موزّع، معاملات موزّعة (sagas) بدل COMMIT بسيط، اختبارات تكامل أصعب، بنية تحتية (gateway، service discovery، message broker)، وتأخير شبكة في كل استدعاء.\n\nالخطأ الأسوأ: البدء بعشرين خدمة قبل فهم حدود المجال — ينتهي بـ distributed monolith: كل تكاليف الاثنين بلا فوائد أيّهما.\n\nالمسار العملي: monolith بحدود صارمة (يمكن فرضها بأدوات)، ثم استخراج الخدمة الأولى عندما يثبت أنها تحتاج الاستقلال. الاستخراج من كود منظّم سهل؛ الدمج بعد تفتيت مبكر شبه مستحيل.',
      en: 'My direct answer: start with a modular monolith, and move to microservices for a specific reason, not for abstract "scale".\n\nA well-structured monolith (clear module boundaries inside one deployable) gives you: in-process calls with no network failures, real database transactions, one deployment, simple tracing, and easier testing. For a team under ~15 engineers it is usually the right choice.\n\nMicroservices earn their cost when:\n1. Scaling needs differ fundamentally between parts (video processing versus user management).\n2. Several teams are blocked by coordinating one deployment.\n3. You need real fault isolation: one part failing does not take down the rest.\n4. A justified technology difference for a specific component.\n\nThe costs to state explicitly: distributed tracing, distributed transactions (sagas) instead of a simple COMMIT, harder integration testing, infrastructure (gateway, service discovery, message broker), and network latency on every call.\n\nThe worst mistake: starting with twenty services before understanding domain boundaries — it ends in a distributed monolith: all the costs of both with the benefits of neither.\n\nThe practical path: a monolith with strict boundaries (enforceable with tooling), then extract the first service when it demonstrably needs independence. Extracting from organised code is easy; merging after premature fragmentation is nearly impossible.',
    },
    keyPoints: [
      { ar: 'ابدأ بـ modular monolith', en: 'Start with a modular monolith', terms: ['modular monolith', 'monolith', 'start', 'ابدأ', 'boundaries', 'حدود', 'module'] },
      { ar: 'أسباب محددة للانتقال', en: 'Specific reasons to split', terms: ['scale', 'توسع', 'team', 'فريق', 'isolation', 'عزل', 'independent', 'مستقل', 'deploy', 'نشر'] },
      { ar: 'تكاليف الموزّع', en: 'Distributed costs', terms: ['distributed', 'موزع', 'network', 'شبكة', 'saga', 'transaction', 'tracing', 'تتبع', 'latency', 'infrastructure'] },
      { ar: 'distributed monolith كأسوأ نتيجة', en: 'Distributed monolith as the worst outcome', terms: ['distributed monolith', 'worst', 'أسوأ', 'premature', 'مبكر', 'extract', 'استخراج'] },
    ],
  },
  {
    id: 'tradeoff-client-vs-server-caching',
    difficulty: advanced,
    kind: 'tradeoff',
    depth: 'design',
    question: {
      ar: 'التخزين المؤقت على العميل أم على الخادم — متى تختار كلًا منهما؟',
      en: 'Client-side vs server-side caching — when do you choose each?',
    },
    answer: {
      ar: 'ليسا بديلين بل طبقات، والسؤال الحقيقي: أي طبقة تخزّن أي شيء؟\n\nالعميل (React Query، HTTP cache في المتصفح، Service Worker):\n• يزيل الطلب تمامًا — أسرع ما يمكن، ويعمل دون اتصال.\n• مناسب لبيانات المستخدم نفسه: ملفه، سلته، قائمة زارها للتو.\n• حدوده: لكل مستخدم على حدة (لا يفيد المستخدم التالي)، محدود بذاكرة الجهاز، ويضيع عند إغلاق التبويب ما لم يُحفظ، ولا يمكن إبطاله من الخادم مباشرة.\n\nالخادم (Redis، CDN، cache التطبيق):\n• مشترك بين كل المستخدمين — حساب مكلف مرة واحدة يخدم الآلاف.\n• مناسب للبيانات العامة أو المشتركة: كتالوج، إعدادات، نتائج تجميع.\n• يمكن إبطاله مركزيًا عند الكتابة.\n• حدوده: طلب شبكة ما زال موجودًا، وتكلفة بنية تحتية.\n\nالأسئلة الحاسمة:\n1. هل البيانات مشتركة أم خاصة بالمستخدم؟ مشتركة → خادم/CDN. خاصة → عميل (مع private في الترويسات).\n2. كم تتحمل من القِدَم؟ حساس → خادم مع إبطال عند الكتابة. متسامح → عميل بـ staleTime.\n3. هل الحساب مكلف؟ → خادم بالتأكيد، ولو للبيانات الخاصة.\n\nالنموذج العملي: CDN للثابت، Redis للمحسوب المشترك، React Query على العميل بـ staleTime قصير للبيانات الحية — كل طبقة تلتقط ما فات الطبقة الأبعد.\n\nالمقايضة الدائمة: كلما ابتعد الـ cache عن المصدر زادت السرعة وصعب الإبطال. والخطأ الشائع: تخزين بيانات خاصة في CDN مشترك فيرى مستخدم بيانات آخر.',
      en: 'They are layers, not alternatives; the real question is which layer caches what.\n\nClient (React Query, the browser HTTP cache, Service Worker):\n• Eliminates the request entirely — the fastest possible, and works offline.\n• Suits the user\'s own data: their profile, cart, a list they just visited.\n• Limits: per user (does not help the next one), bounded by device memory, lost when the tab closes unless persisted, and cannot be invalidated directly from the server.\n\nServer (Redis, CDN, application cache):\n• Shared across all users — an expensive computation done once serves thousands.\n• Suits public or shared data: catalogue, settings, aggregated results.\n• Can be invalidated centrally on write.\n• Limits: a network request still exists, and infrastructure cost.\n\nThe deciding questions:\n1. Is the data shared or per-user? Shared → server/CDN. Per-user → client (with private in the headers).\n2. How much staleness is tolerable? Sensitive → server with write-time invalidation. Tolerant → client with a staleTime.\n3. Is the computation expensive? → server, even for per-user data.\n\nThe practical model: CDN for static content, Redis for shared computed data, React Query on the client with a short staleTime for live data — each layer catching what the farther layer missed.\n\nThe permanent trade-off: the farther the cache from the source, the faster it is and the harder to invalidate. And the common mistake: caching private data in a shared CDN so one user sees another\'s data.',
    },
    keyPoints: [
      { ar: 'طبقات لا بدائل', en: 'Layers, not alternatives', terms: ['layer', 'طبق', 'both', 'كلا', 'not alternative', 'combine'] },
      { ar: 'مشترك → خادم، خاص → عميل', en: 'Shared → server, per-user → client', terms: ['shared', 'مشترك', 'per-user', 'خاص', 'private', 'public', 'عام', 'cdn', 'redis'] },
      { ar: 'الإبطال أصعب كلما ابتعد', en: 'Invalidation harder the farther away', terms: ['invalidat', 'إبطال', 'stale', 'قديم', 'staletime', 'write', 'كتابة'] },
      { ar: 'خطر تسريب البيانات الخاصة', en: 'Risk of leaking private data', terms: ['leak', 'تسريب', 'private', 'another user', 'مستخدم آخر', 'vary', 'cookie'] },
    ],
  },
];
