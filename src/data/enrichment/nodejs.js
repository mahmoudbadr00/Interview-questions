// data/enrichment/nodejs.js
export const nodejsEnrichment = {
  'node-what-is': {
    depth: 'know',
    keyPoints: [
      { ar: 'بيئة تشغيل لا لغة ولا إطار', en: 'A runtime, not a language or framework', terms: ['runtime', 'بيئة تشغيل', 'not a language', 'not a framework', 'ليست لغة', 'ليس إطار'] },
      { ar: 'مبنية على V8', en: 'Built on V8', terms: ['v8', 'engine', 'محرك', 'chrome'] },
      { ar: 'event-driven و non-blocking I/O', en: 'Event-driven, non-blocking I/O', terms: ['event-driven', 'event driven', 'non-blocking', 'nonblocking', 'غير حاجب', 'asynchronous', 'غير متزامن', 'event loop'] },
      { ar: 'وصول للملفات والشبكة والعمليات', en: 'Access to files, network, processes', terms: ['file', 'ملف', 'network', 'شبكة', 'process', 'os', 'server', 'خادم'] },
    ],
  },
  'node-event-loop-phases': {
    depth: 'explain',
    keyPoints: [
      { ar: 'مراحل مرتّبة: timers → poll → check', en: 'Ordered phases: timers → poll → check', terms: ['timers', 'poll', 'check', 'phase', 'مرحل', 'close'] },
      { ar: 'libuv توفّرها', en: 'Provided by libuv', terms: ['libuv'] },
      { ar: 'nextTick و microtasks بين المراحل', en: 'nextTick and microtasks drain between phases', terms: ['nexttick', 'microtask', 'promise', 'between', 'بين', 'drain'] },
      { ar: 'الحجب يؤخر كل شيء', en: 'Blocking delays everything', terms: ['block', 'حجب', 'cpu', 'sync', 'متزامن'] },
    ],
    followUps: [
      {
        id: 'node-event-loop-phases-f1',
        question: { ar: 'setTimeout(fn, 0) و setImmediate(fn) في السياق الرئيسي — أيهما ينفَّذ أولًا؟', en: 'setTimeout(fn, 0) and setImmediate(fn) in the main module — which runs first?' },
        answer: { ar: 'غير محدد في السياق الرئيسي: يعتمد على ما إذا كان المؤقت قد استحق قبل دخول الحلقة مرحلة timers، وهذا يتوقف على أداء الجهاز. أما داخل I/O callback فالجواب حاسم: setImmediate دائمًا أولًا لأن مرحلة check تلي مرحلة poll مباشرة.', en: 'Non-deterministic in the main module: it depends on whether the timer is already due when the loop enters the timers phase, which depends on machine timing. Inside an I/O callback the answer is definite: setImmediate always runs first, because the check phase directly follows poll.' },
      },
      {
        id: 'node-event-loop-phases-f2',
        question: { ar: 'ما الخطر في الإفراط في process.nextTick؟', en: 'What is the danger in overusing process.nextTick?' },
        answer: { ar: 'طابور nextTick يُفرَّغ بالكامل قبل أن تتقدم الحلقة، وإذا كان كل nextTick يجدول nextTick آخر فلن تصل الحلقة إلى مرحلة poll أبدًا — تجويع كامل: لا يُقرأ أي طلب شبكة ولا يُنفَّذ أي مؤقت. setImmediate هو البديل الآمن للتأجيل المتكرر.', en: 'The nextTick queue drains completely before the loop advances, so if each nextTick schedules another, the loop never reaches poll — complete starvation: no network request is read and no timer fires. setImmediate is the safe alternative for repeated deferral.' },
      },
    ],
  },
  'node-streams': {
    depth: 'apply',
    keyPoints: [
      { ar: 'معالجة على أجزاء بدل الذاكرة كاملة', en: 'Processing in chunks instead of whole in memory', terms: ['chunk', 'أجزاء', 'memory', 'ذاكرة', 'large', 'كبير', 'piece'] },
      { ar: 'الأنواع الأربعة', en: 'The four types', terms: ['readable', 'writable', 'duplex', 'transform'] },
      { ar: 'pipeline لا pipe', en: 'pipeline over pipe', terms: ['pipeline', 'pipe', 'error', 'cleanup'] },
      { ar: 'backpressure', en: 'Backpressure', terms: ['backpressure', 'back pressure', 'drain', 'highwatermark', 'ضغط'] },
    ],
    followUps: [
      {
        id: 'node-streams-f1',
        question: { ar: 'تطبيقك يعطي المستخدم ملف CSV بحجم 2GB من قاعدة البيانات. كيف تنفّذ ذلك دون انهيار الذاكرة؟', en: 'Your app lets users download a 2GB CSV generated from the database. How do you implement that without exhausting memory?' },
        answer: { ar: 'أبني سلسلة streams من طرف إلى طرف: مؤشر (cursor) على قاعدة البيانات يقرأ صفوفًا على دفعات كـ Readable، ثم Transform يحوّل كل صف إلى سطر CSV، ثم أوجّهه إلى استجابة HTTP بـ pipeline. الذاكرة المستهلكة هي حجم دفعة واحدة فقط، ويبدأ المستخدم بالتحميل فورًا. وpipeline يضمن أن انقطاع العميل يوقف الاستعلام بدل تركه يعمل.', en: 'I build an end-to-end stream chain: a database cursor reading rows in batches as a Readable, a Transform converting each row to a CSV line, then pipeline into the HTTP response. Memory usage is one batch at a time, and the user starts downloading immediately. pipeline also ensures that a client disconnect stops the query instead of leaving it running.' },
      },
    ],
  },
  'node-express-middleware': {
    depth: 'explain',
    keyPoints: [
      { ar: '(req, res, next) في سلسلة', en: '(req, res, next) in a chain', terms: ['next', 'chain', 'سلسلة', 'req', 'res'] },
      { ar: 'الترتيب مهم', en: 'Order matters', terms: ['order', 'ترتيب', 'sequence', 'registered'] },
      { ar: 'معالج الأخطاء بأربعة معاملات وفي النهاية', en: 'Error handler has four params and goes last', terms: ['four', 'أربع', 'err', 'error handler', 'last', 'النهاية', 'آخر'] },
      { ar: 'التعليق إذا لم يُستدعَ next أو يُرسل رد', en: 'Hangs if neither next nor a response', terms: ['hang', 'تجمد', 'يتعلق', 'timeout', 'never respond'] },
    ],
  },
  'node-cluster-module': {
    depth: 'apply',
    keyPoints: [
      { ar: 'عمليات متعددة تتشارك المنفذ', en: 'Multiple processes sharing a port', terms: ['process', 'عملية', 'fork', 'port', 'منفذ', 'core', 'نواة', 'cpu'] },
      { ar: 'لا ذاكرة مشتركة', en: 'No shared memory', terms: ['shared', 'مشترك', 'memory', 'ذاكرة', 'redis', 'state', 'حالة'] },
      { ar: 'لا يحل حجب الـ event loop', en: 'Does not fix event-loop blocking', terms: ['block', 'حجب', 'cpu-bound', 'worker thread', 'still'] },
      { ar: 'في الحاويات: عملية واحدة لكل حاوية', en: 'In containers: one process per container', terms: ['container', 'حاوية', 'kubernetes', 'docker', 'pm2', 'orchestrat'] },
    ],
  },
  'node-worker-threads': {
    depth: 'apply',
    keyPoints: [
      { ar: 'للعمل كثيف المعالجة فقط', en: 'Only for CPU-bound work', terms: ['cpu', 'حساب', 'compute', 'heavy', 'ثقيل', 'not i/o', 'ليس'] },
      { ar: 'V8 وevent loop مستقلان لكل worker', en: 'Own V8 and event loop per worker', terms: ['own', 'مستقل', 'separate', 'isolate', 'v8', 'event loop'] },
      { ar: 'نسخ البيانات مقابل SharedArrayBuffer', en: 'Data copied vs SharedArrayBuffer', terms: ['copy', 'نسخ', 'structured clone', 'sharedarraybuffer', 'transfer', 'postmessage'] },
      { ar: 'استخدم pool ثابت الحجم', en: 'Use a fixed-size pool', terms: ['pool', 'reuse', 'إعادة استخدام', 'expensive', 'مكلف', 'spawn'] },
    ],
  },
  'node-jwt': {
    depth: 'apply',
    keyPoints: [
      { ar: 'header.payload.signature', en: 'header.payload.signature', terms: ['header', 'payload', 'signature', 'توقيع', 'three parts', 'ثلاثة'] },
      { ar: 'الحمولة مُرمَّزة لا مشفّرة', en: 'Payload is encoded, not encrypted', terms: ['base64', 'not encrypted', 'غير مشفر', 'readable', 'مقروء', 'encoded'] },
      { ar: 'لا يمكن إبطاله قبل الانتهاء', en: 'Cannot be revoked before expiry', terms: ['revoke', 'إبطال', 'expir', 'انتهاء', 'blacklist', 'denylist', 'stateless'] },
      { ar: 'access قصير + refresh', en: 'Short access token + refresh token', terms: ['refresh', 'short', 'قصير', 'access token', 'expiresin', '15m'] },
    ],
    followUps: [
      {
        id: 'node-jwt-f1',
        question: { ar: 'أين تخزّن JWT في تطبيق ويب: localStorage أم cookie؟ ولماذا؟', en: 'Where do you store a JWT in a web app — localStorage or a cookie? Why?' },
        answer: { ar: 'في cookie بخصائص httpOnly وsecure وsameSite. localStorage قابل للقراءة من أي JavaScript، فثغرة XSS واحدة تسرق التوكن فورًا. الـ cookie بـ httpOnly لا يستطيع JavaScript الوصول إليها إطلاقًا. المقابل أن الـ cookies تُرسل تلقائيًا فتحتاج حماية من CSRF، وsameSite تغطي معظم ذلك.', en: 'In a cookie with httpOnly, secure and sameSite. localStorage is readable by any JavaScript, so a single XSS steals the token instantly. An httpOnly cookie cannot be reached from JavaScript at all. The trade-off is that cookies are sent automatically, so you need CSRF protection — and sameSite covers most of that.' },
      },
    ],
  },
  'node-backpressure': {
    depth: 'debug',
    keyPoints: [
      { ar: 'المنتج أسرع من المستهلك', en: 'Producer faster than consumer', terms: ['producer', 'consumer', 'منتج', 'مستهلك', 'faster', 'أسرع', 'slow client', 'بطيء'] },
      { ar: 'write() تعيد false / حدث drain', en: 'write() returns false, then drain', terms: ['false', 'drain', 'highwatermark', 'buffer'] },
      { ar: 'pipeline تديره تلقائيًا', en: 'pipeline handles it automatically', terms: ['pipeline', 'pipe', 'automatic', 'تلقائي'] },
      { ar: 'التجاهل = استنزاف الذاكرة', en: 'Ignoring it exhausts memory', terms: ['memory', 'ذاكرة', 'oom', 'crash', 'انهيار', 'grow', 'يتراكم'] },
    ],
  },
  'node-scenario-graceful-shutdown': {
    depth: 'design',
    keyPoints: [
      { ar: 'الاستماع لـ SIGTERM', en: 'Listen for SIGTERM', terms: ['sigterm', 'sigint', 'signal', 'إشارة'] },
      { ar: 'إيقاف قبول اتصالات جديدة وإنهاء الجارية', en: 'Stop accepting, drain in-flight', terms: ['server.close', 'close', 'in-flight', 'جارية', 'drain', 'new connection', 'readiness'] },
      { ar: 'إغلاق الموارد: pool، redis، الطوابير', en: 'Close resources: pool, redis, queues', terms: ['pool', 'redis', 'queue', 'طابور', 'database', 'قاعدة', 'connection', 'اتصال'] },
      { ar: 'مهلة قصوى إجبارية', en: 'A hard deadline', terms: ['timeout', 'مهلة', 'force', 'إجبار', 'deadline', 'exit(1)'] },
    ],
  },
  'node-scenario-memory-leak': {
    depth: 'debug',
    keyPoints: [
      { ar: 'التأكد أنه تسريب: خط صاعد لا يعود', en: 'Confirm it is a leak: rising, never returning', terms: ['rising', 'صاعد', 'never', 'لا يعود', 'gc', 'trend', 'over time', 'عبر الوقت'] },
      { ar: 'مقارنة لقطات heap', en: 'Diff heap snapshots', terms: ['snapshot', 'لقطة', 'heap', 'devtools', 'inspect', 'compare', 'مقارنة'] },
      { ar: 'تتبع الـ retainers', en: 'Follow the retainers', terms: ['retain', 'retainer', 'holding', 'يحتفظ', 'reference', 'مرجع'] },
      { ar: 'المشتبه الشائعون: مستمعون، cache، مؤقتات', en: 'Usual suspects: listeners, caches, timers', terms: ['listener', 'مستمع', 'cache', 'timer', 'مؤقت', 'closure', 'map', 'array', 'global'] },
    ],
  },
  'node-error-strategy': {
    depth: 'design',
    keyPoints: [
      { ar: 'تشغيلية مقابل برمجية', en: 'Operational vs programmer errors', terms: ['operational', 'تشغيلي', 'programmer', 'برمجي', 'expected', 'متوقع', 'bug'] },
      { ar: 'إعادة التشغيل بعد uncaughtException', en: 'Restart after uncaughtException', terms: ['uncaughtexception', 'unhandledrejection', 'restart', 'إعادة تشغيل', 'exit', 'crash'] },
      { ar: 'لا تسرّب التفاصيل للعميل', en: 'Never leak details to the client', terms: ['leak', 'تسريب', 'stack', 'generic', 'عام', 'client', 'عميل'] },
      { ar: 'معالج مركزي وصيغة موحّدة', en: 'Central handler, single error shape', terms: ['central', 'مركزي', 'middleware', 'shape', 'صيغة', 'code', 'consistent'] },
    ],
  },
  'node-caching-redis': {
    depth: 'design',
    keyPoints: [
      { ar: 'طبقات: CDN، HTTP، Redis، ذاكرة', en: 'Layers: CDN, HTTP, Redis, in-process', terms: ['cdn', 'http', 'redis', 'layer', 'طبق', 'in-memory', 'memory'] },
      { ar: 'Redis مشترك بين النسخ', en: 'Redis is shared across instances', terms: ['shared', 'مشترك', 'instance', 'نسخ', 'restart'] },
      { ar: 'cache-aside', en: 'Cache-aside pattern', terms: ['cache-aside', 'aside', 'get', 'set', 'miss', 'populate'] },
      { ar: 'الإبطال هو الصعب', en: 'Invalidation is the hard part', terms: ['invalidat', 'إبطال', 'ttl', 'stale', 'قديم', 'stampede', 'version'] },
    ],
  },
  'node-scenario-rate-limiting': {
    depth: 'design',
    keyPoints: [
      { ar: 'خوارزمية: token bucket / sliding window', en: 'Algorithm: token bucket / sliding window', terms: ['token bucket', 'sliding', 'fixed window', 'bucket', 'window', 'نافذة', 'algorithm', 'خوارزم'] },
      { ar: 'العدّاد في Redis لا في الذاكرة', en: 'Counter in Redis, not in memory', terms: ['redis', 'shared', 'مشترك', 'memory', 'ذاكرة', 'instance', 'نسخ', 'distributed'] },
      { ar: 'مفتاح التحديد: user/ip/api key', en: 'Key by user, IP or API key', terms: ['ip', 'user', 'api key', 'key', 'مفتاح', 'x-forwarded'] },
      { ar: '429 مع Retry-After', en: '429 with Retry-After', terms: ['429', 'retry-after', 'too many', 'headers', 'ترويس'] },
    ],
  },
  'node-require-vs-import': {
    depth: 'know',
    keyPoints: [
      { ar: 'CommonJS مقابل ES Modules', en: 'CommonJS vs ES Modules', terms: ['commonjs', 'esm', 'es module', 'module'] },
      { ar: 'متزامن/ديناميكي مقابل ثابت', en: 'Synchronous/dynamic vs static', terms: ['sync', 'متزامن', 'dynamic', 'ديناميك', 'static', 'ثابت', 'conditional'] },
      { ar: 'tree shaking وtop-level await', en: 'Tree shaking and top-level await', terms: ['tree', 'top-level', 'await'] },
      { ar: '"type": "module" أو .mjs', en: '"type": "module" or .mjs', terms: ['type', 'module', '.mjs', '.cjs', 'package.json'] },
    ],
  },
  'node-blocking-vs-nonblocking': {
    depth: 'explain',
    keyPoints: [
      { ar: 'الحاجب يوقف الحلقة', en: 'Blocking halts the loop', terms: ['block', 'حجب', 'stop', 'يوقف', 'wait', 'انتظار', 'other requests', 'الطلبات الأخرى'] },
      { ar: 'الدوال المنتهية بـ Sync', en: 'The *Sync functions', terms: ['sync', 'readfilesync', 'metزامن', 'متزامن'] },
      { ar: 'async لا يعني غير حاجب', en: 'async does not mean non-blocking', terms: ['cpu', 'loop', 'حلقة', 'while', 'computation', 'حساب', 'still block'] },
    ],
  },
};
