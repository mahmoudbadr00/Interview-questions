// data/enrichment/web.js — Web fundamentals, HTML/CSS, testing, state management.
export const webEnrichment = {
  'web-cors': {
    depth: 'explain',
    keyPoints: [
      { ar: 'آلية أمان في المتصفح', en: 'A browser security mechanism', terms: ['browser', 'متصفح', 'same-origin', 'origin', 'مصدر', 'نطاق'] },
      { ar: 'الخادم يسمح عبر ترويسات', en: 'The server allows via headers', terms: ['header', 'ترويس', 'access-control', 'allow-origin', 'server', 'خادم'] },
      { ar: 'طلب preflight للطلبات غير البسيطة', en: 'Preflight for non-simple requests', terms: ['preflight', 'options', 'مسبق'] },
      { ar: 'ليس حماية للـ API', en: 'Not API security', terms: ['not security', 'ليس حماية', 'postman', 'curl', 'server-to-server', 'auth'] },
    ],
  },
  'web-xss': {
    depth: 'apply',
    keyPoints: [
      { ar: 'حقن JavaScript في صفحة يراها آخرون', en: 'Injecting JavaScript into pages others see', terms: ['inject', 'حقن', 'script', 'سكربت', 'other users', 'مستخدم'] },
      { ar: 'التهريب عند العرض / textContent', en: 'Escape on output / textContent', terms: ['escape', 'تهريب', 'textcontent', 'innerhtml', 'sanitiz', 'تنقية', 'dompurify'] },
      { ar: 'CSP كطبقة ثانية', en: 'CSP as a second layer', terms: ['csp', 'content security', 'policy'] },
      { ar: 'httpOnly للتوكنات', en: 'httpOnly cookies for tokens', terms: ['httponly', 'cookie', 'localstorage', 'token'] },
    ],
  },
  'web-csrf': {
    depth: 'apply',
    keyPoints: [
      { ar: 'المتصفح يرسل الـ cookies تلقائيًا', en: 'Browsers attach cookies automatically', terms: ['cookie', 'automatic', 'تلقائي', 'attach', 'credential'] },
      { ar: 'SameSite', en: 'SameSite cookies', terms: ['samesite', 'lax', 'strict'] },
      { ar: 'توكن CSRF', en: 'CSRF token', terms: ['csrf token', 'token', 'nonce', 'synchronizer'] },
      { ar: 'لا تغيير حالة عبر GET', en: 'No state change via GET', terms: ['get', 'post', 'state', 'idempotent', 'حالة'] },
    ],
  },
  'web-http-caching': {
    depth: 'apply',
    keyPoints: [
      { ar: 'Cache-Control و max-age', en: 'Cache-Control and max-age', terms: ['cache-control', 'max-age', 'no-store', 'no-cache', 'immutable'] },
      { ar: 'ETag والتحقق المشروط (304)', en: 'ETag and conditional validation (304)', terms: ['etag', '304', 'if-none-match', 'last-modified', 'conditional', 'مشروط'] },
      { ar: 'بصمة في اسم الملف للأصول', en: 'Content hashing for assets', terms: ['hash', 'بصمة', 'fingerprint', 'filename', 'اسم الملف', 'year', 'سنة'] },
      { ar: 'HTML بـ no-cache', en: 'HTML with no-cache', terms: ['html', 'no-cache', 'revalidate'] },
    ],
  },
  'web-status-codes': {
    depth: 'know',
    keyPoints: [
      { ar: '401 مصادقة مقابل 403 تفويض', en: '401 authentication vs 403 authorization', terms: ['401', '403', 'authent', 'authoriz', 'مصادقة', 'تفويض'] },
      { ar: '2xx / 4xx / 5xx', en: '2xx / 4xx / 5xx families', terms: ['2xx', '4xx', '5xx', '200', '201', '204', '400', '404', '500'] },
      { ar: 'لا 200 مع خطأ في الجسم', en: 'Never 200 with an error body', terms: ['200', 'error body', 'body', 'monitoring'] },
    ],
  },
  'web-rendering-path': {
    depth: 'explain',
    keyPoints: [
      { ar: 'DOM + CSSOM → Render Tree', en: 'DOM + CSSOM → render tree', terms: ['dom', 'cssom', 'render tree', 'شجرة'] },
      { ar: 'Layout ثم Paint ثم Composite', en: 'Layout, paint, composite', terms: ['layout', 'paint', 'composite', 'reflow', 'رسم', 'تخطيط'] },
      { ar: 'CSS حاجب للتصيير، JS حاجب للتحليل', en: 'CSS blocks render, JS blocks parsing', terms: ['block', 'حاجب', 'defer', 'async', 'parser'] },
    ],
  },
  'css-specificity': {
    depth: 'explain',
    keyPoints: [
      { ar: '(id, class, element) من اليسار', en: '(id, class, element) compared left to right', terms: ['id', 'class', 'element', 'specificity', 'أولوية', 'weight'] },
      { ar: 'التساوي: الأخير يفوز', en: 'On a tie, source order wins', terms: ['order', 'ترتيب', 'last', 'الأخير', 'later'] },
      { ar: 'تجنّب !important والمعرّفات', en: 'Avoid !important and ids', terms: ['important', 'id', 'معرف', 'avoid', 'تجنب', 'flat', 'low'] },
    ],
  },
  'css-flexbox': {
    depth: 'apply',
    keyPoints: [
      { ar: 'أحادي البعد', en: 'One-dimensional', terms: ['one-dimensional', 'one dimension', 'بعد واحد', 'أحادي', 'axis', 'محور', 'row', 'column'] },
      { ar: 'justify على الرئيسي، align على المتقاطع', en: 'justify on main, align on cross axis', terms: ['justify-content', 'align-items', 'main axis', 'cross axis', 'الرئيسي', 'المتقاطع'] },
      { ar: 'Grid للبعدين', en: 'Grid for two dimensions', terms: ['grid', 'two', 'بعدين', 'rows and columns'] },
    ],
  },
  'css-stacking-zindex': {
    depth: 'debug',
    keyPoints: [
      { ar: 'z-index يعمل داخل سياق التكديس فقط', en: 'z-index works only within a stacking context', terms: ['stacking context', 'context', 'سياق', 'within', 'داخل'] },
      { ar: 'opacity/transform تنشئ سياقًا', en: 'opacity/transform create a context', terms: ['opacity', 'transform', 'filter', 'position', 'creates', 'ينشئ'] },
      { ar: 'الحل: portal أو إعادة هيكلة', en: 'Fix: portal or restructure', terms: ['portal', 'createportal', 'move', 'نقل', 'restructure', 'dialog'] },
    ],
  },
  'test-types': {
    depth: 'know',
    keyPoints: [
      { ar: 'وحدة / تكامل / E2E', en: 'Unit / integration / E2E', terms: ['unit', 'integration', 'e2e', 'end-to-end', 'وحدة', 'تكامل'] },
      { ar: 'المقايضة: سرعة مقابل ثقة', en: 'Trade-off: speed vs confidence', terms: ['speed', 'سرعة', 'confidence', 'ثقة', 'slow', 'بطيء', 'fast', 'cost', 'تكلفة'] },
      { ar: 'التكامل يعطي أفضل عائد للواجهات', en: 'Integration gives the best return for UIs', terms: ['integration', 'trophy', 'most', 'أكثر', 'behaviour', 'behavior', 'سلوك'] },
    ],
  },
  'test-mocking': {
    depth: 'apply',
    keyPoints: [
      { ar: 'استبدال اعتمادية بنسخة مضبوطة', en: 'Replacing a dependency with a controlled stand-in', terms: ['replace', 'استبدال', 'fake', 'stub', 'وهمي', 'control', 'مضبوط'] },
      { ar: 'للشبكة والوقت والآثار الجانبية', en: 'For network, time and side effects', terms: ['network', 'شبكة', 'time', 'وقت', 'timer', 'side effect', 'email', 'payment'] },
      { ar: 'الإفراط يختبر التنفيذ', en: 'Overuse tests implementation', terms: ['implementation', 'تنفيذ', 'overuse', 'إفراط', 'brittle', 'هش'] },
      { ar: 'MSW على مستوى الشبكة', en: 'MSW at the network level', terms: ['msw', 'mock service worker', 'network level', 'intercept'] },
    ],
  },
  'state-server-vs-client': {
    depth: 'explain',
    keyPoints: [
      { ar: 'بيانات الخادم نسخة مؤقتة', en: 'Server data is a cache', terms: ['cache', 'مؤقت', 'copy', 'نسخة', 'source of truth', 'مصدر'] },
      { ar: 'قد تتقادم في أي لحظة', en: 'Can go stale at any moment', terms: ['stale', 'قديم', 'another user', 'مستخدم آخر', 'refetch', 'invalidat'] },
      { ar: 'React Query بدل Redux لها', en: 'React Query instead of Redux for it', terms: ['react query', 'tanstack', 'swr', 'rtk query', 'library'] },
      { ar: 'حالة العميل: واجهة، نماذج، URL', en: 'Client state: UI, forms, URL', terms: ['ui', 'form', 'نموذج', 'url', 'modal', 'tab', 'local'] },
    ],
  },
  'state-redux-vs-context': {
    depth: 'apply',
    keyPoints: [
      { ar: 'Context آلية تمرير لا مدير حالة', en: 'Context is a distribution mechanism, not a state manager', terms: ['distribut', 'pass', 'تمرير', 'not a state manager', 'ليس', 'mechanism', 'آلية'] },
      { ar: 'الاشتراك الانتقائي بـ selectors', en: 'Selective subscription via selectors', terms: ['selector', 'selective', 'انتقائي', 'slice', 'subscribe', 'اشتراك'] },
      { ar: 'DevTools وmiddleware', en: 'DevTools and middleware', terms: ['devtools', 'middleware', 'time travel', 'trace', 'تتبع'] },
      { ar: 'هل هي بيانات خادم أصلًا؟', en: 'Is it server data in the first place?', terms: ['server', 'خادم', 'react query', 'cache'] },
    ],
  },
};
