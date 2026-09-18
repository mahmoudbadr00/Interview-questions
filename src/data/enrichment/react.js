// data/enrichment/react.js
export const reactEnrichment = {
  'react-props-vs-state': {
    depth: 'know',
    keyPoints: [
      { ar: 'props تأتي من الأب وللقراءة فقط', en: 'Props come from the parent and are read-only', terms: ['parent', 'أب', 'read-only', 'readonly', 'للقراءة', 'immutable', 'لا تعدل', 'pass'] },
      { ar: 'state يملكه المكوّن ويتغير', en: 'State is owned by the component and changes', terms: ['own', 'يملك', 'internal', 'داخلي', 'change', 'يتغير', 'local'] },
      { ar: 'تغيير state يعيد التصيير', en: 'Changing state re-renders', terms: ['re-render', 'rerender', 'إعادة التصيير', 'إعادة تصيير', 'render'] },
    ],
  },
  'react-usestate': {
    depth: 'explain',
    keyPoints: [
      { ar: 'التحديث مجمّع وغير فوري', en: 'Updates are batched and asynchronous', terms: ['batch', 'مجمع', 'async', 'not immediate', 'غير فوري', 'next render', 'التصيير التالي'] },
      { ar: 'الصيغة الدالية للاعتماد على القيمة السابقة', en: 'Functional updater for previous-value dependence', terms: ['prev', 'functional', 'callback', 'دالية', 'السابقة'] },
      { ar: 'الاستبدال لا الدمج', en: 'Replaces, does not merge', terms: ['merge', 'دمج', 'replace', 'استبدال', 'spread'] },
      { ar: 'المقارنة بـ Object.is', en: 'Compared with Object.is', terms: ['object.is', 'reference', 'مرجع', 'same object', 'mutat'] },
    ],
    followUps: [
      {
        id: 'react-usestate-f1',
        question: { ar: 'لماذا لا يُحدَّث العدّاد إلا مرة واحدة هنا؟ setCount(count + 1); setCount(count + 1);', en: 'Why does this only increment once? setCount(count + 1); setCount(count + 1);' },
        answer: { ar: 'لأن count قيمة ثابتة داخل هذه الدورة من التصيير — كلا الاستدعاءين يحسبان نفس القيمة count + 1، والتحديثات مجمّعة فيفوز الأخير. الصيغة الدالية setCount(c => c + 1) تحل ذلك لأن كل تحديث يستقبل الحالة الناتجة عن سابقه.', en: 'Because count is a fixed value within this render — both calls compute the same count + 1, and updates are batched so the last one wins. The functional form setCount(c => c + 1) fixes it, since each updater receives the state produced by the previous one.' },
      },
      {
        id: 'react-usestate-f2',
        question: { ar: 'عدّلت خاصية على كائن الحالة مباشرة ثم استدعيت setState بنفس الكائن، ولم يتحدّث العرض. لماذا؟', en: 'You mutated a property on the state object and called setState with the same object, but nothing re-rendered. Why?' },
        answer: { ar: 'لأن React يقارن الحالة الجديدة بالقديمة بـ Object.is، ونفس المرجع يعني "لا تغيير" فيتخطى التصيير. يجب إنشاء كائن جديد: setUser({ ...user, name }). هذا سبب اعتماد React على عدم التعديل المباشر (immutability).', en: 'Because React compares the new state to the old with Object.is, and the same reference means "no change", so it skips the render. You must create a new object: setUser({ ...user, name }). This is why React relies on immutability.' },
      },
    ],
  },
  'react-useeffect-basics': {
    depth: 'explain',
    keyPoints: [
      { ar: 'للمزامنة مع أنظمة خارجية', en: 'For synchronising with external systems', terms: ['external', 'خارجي', 'side effect', 'آثار جانبية', 'fetch', 'subscription', 'اشتراك', 'sync'] },
      { ar: 'دالة التنظيف', en: 'The cleanup function', terms: ['cleanup', 'تنظيف', 'return', 'unmount', 'إزالة', 'unsubscribe'] },
      { ar: 'مصفوفة الاعتماديات', en: 'The dependency array', terms: ['dependenc', 'اعتماد', '[]', 'array', 'مصفوفة'] },
      { ar: 'يعمل بعد الرسم', en: 'Runs after paint', terms: ['after render', 'after paint', 'بعد', 'commit'] },
    ],
    followUps: [
      {
        id: 'react-useeffect-basics-f1',
        question: { ar: 'متى يكون useEffect الخيار الخاطئ؟', en: 'When is useEffect the wrong tool?' },
        answer: { ar: 'عندما تستخدمه لحساب قيمة مشتقة من الحالة أو الـ props — احسبها أثناء التصيير مباشرة. وعندما تستجيب لحدث مستخدم — ضع المنطق في معالج الحدث. وعندما تزامن حالتين معًا — أعد تنظيم الحالة. useEffect للخروج إلى العالم الخارجي فقط.', en: 'When you use it to derive a value from state or props — compute that during render. When you respond to a user action — put the logic in the event handler. And when you keep two pieces of state in sync — restructure the state instead. useEffect is for reaching outside React only.' },
      },
      {
        id: 'react-useeffect-basics-f2',
        question: { ar: 'في StrictMode يعمل التأثير مرتين ويرسل طلبين. هل هذا خطأ في React؟', en: 'In StrictMode the effect runs twice and sends two requests. Is that a React bug?' },
        answer: { ar: 'لا، هو كشف لخطأ عندي: التأثير لا ينظّف نفسه. StrictMode يركّب ويفكّك ويعيد التركيب عمدًا ليظهر التأثيرات غير القابلة للتنظيف. الحل إضافة AbortController في دالة التنظيف، وعندها الطلب الأول يُلغى. ولا يحدث هذا الازدواج في الإنتاج.', en: 'No, it is exposing a bug of mine: the effect does not clean up after itself. StrictMode deliberately mounts, unmounts and remounts to surface effects that cannot be cleaned. Adding an AbortController in the cleanup fixes it — the first request is cancelled. And the doubling never happens in production.' },
      },
    ],
  },
  'react-useeffect-deps': {
    depth: 'debug',
    keyPoints: [
      { ar: 'المقارنة بـ Object.is لكل اعتمادية', en: 'Each dependency compared with Object.is', terms: ['object.is', 'reference', 'مرجع', 'shallow'] },
      { ar: 'الكائنات الجديدة كل تصيير تسبب حلقات', en: 'Fresh objects per render cause loops', terms: ['loop', 'حلقة', 'infinite', 'لانهائ', 'new object', 'كائن جديد', 'usememo', 'usecallback'] },
      { ar: 'حذف اعتمادية = stale closure', en: 'Omitting a dependency = stale closure', terms: ['stale', 'قديم', 'closure', 'eslint', 'lint'] },
    ],
  },
  'react-lists-keys': {
    depth: 'explain',
    keyPoints: [
      { ar: 'الـ key هوية ثابتة للعنصر', en: 'A key is a stable identity', terms: ['identity', 'هوية', 'stable', 'ثابت', 'unique', 'فريد', 'identify'] },
      { ar: 'الفهرس يفشل عند إعادة الترتيب أو الحذف', en: 'Index keys break on reorder or delete', terms: ['index', 'فهرس', 'reorder', 'ترتيب', 'delete', 'حذف', 'insert'] },
      { ar: 'الحالة تلتصق بالعنصر الخطأ', en: 'State attaches to the wrong element', terms: ['state', 'حالة', 'wrong', 'خطأ', 'input', 'bug'] },
    ],
    followUps: [
      {
        id: 'react-lists-keys-f1',
        question: { ar: 'متى يكون استخدام الفهرس كـ key مقبولًا؟', en: 'When is using the index as a key acceptable?' },
        answer: { ar: 'فقط عندما تكون القائمة ثابتة تمامًا: لا تُرتَّب ولا تُفلتر ولا تُحذف منها عناصر، ولا تحتوي على حالة داخلية أو حقول إدخال. قائمة عناصر عرض ثابتة مثل خطوات تعليمات — مقبول. أي شيء تفاعلي أو ديناميكي — لا.', en: 'Only when the list is completely static: never reordered, filtered or spliced, and its items hold no internal state or inputs. A fixed list of instruction steps — fine. Anything interactive or dynamic — no.' },
      },
    ],
  },
  'react-controlled-uncontrolled': {
    depth: 'apply',
    keyPoints: [
      { ar: 'المتحكَّم به: القيمة في الحالة', en: 'Controlled: value lives in state', terms: ['state', 'حالة', 'value', 'onchange', 'react owns'] },
      { ar: 'غير المتحكَّم به: القيمة في DOM عبر ref', en: 'Uncontrolled: value lives in the DOM via ref', terms: ['ref', 'dom', 'defaultvalue', 'default'] },
      { ar: 'المتحكَّم به يعيد التصيير مع كل حرف', en: 'Controlled re-renders on every keystroke', terms: ['keystroke', 'every', 'كل حرف', 're-render', 'performance', 'أداء'] },
    ],
  },
  'react-usememo': {
    depth: 'apply',
    keyPoints: [
      { ar: 'يخزّن نتيجة حساب', en: 'Caches a computed value', terms: ['cache', 'memo', 'تخزين', 'expensive', 'مكلف', 'recompute'] },
      { ar: 'يعيد الحساب عند تغيّر الاعتماديات', en: 'Recomputes when dependencies change', terms: ['dependenc', 'اعتماد', 'change', 'تغير'] },
      { ar: 'تثبيت مرجع كائن/مصفوفة', en: 'Stabilises object/array references', terms: ['reference', 'مرجع', 'stable', 'ثابت', 'identity', 'react.memo', 'useeffect'] },
      { ar: 'له تكلفة — لا للعمليات البسيطة', en: 'Has a cost — not for trivial work', terms: ['cost', 'تكلفة', 'overhead', 'trivial', 'بسيط', 'measure', 'قياس', 'premature'] },
    ],
  },
  'react-usecallback': {
    depth: 'apply',
    keyPoints: [
      { ar: 'يثبّت مرجع الدالة', en: 'Stabilises a function reference', terms: ['reference', 'مرجع', 'stable', 'ثابت', 'same function', 'identity'] },
      { ar: 'مفيد مع React.memo والاعتماديات', en: 'Useful with React.memo and dependency arrays', terms: ['react.memo', 'memo', 'dependenc', 'اعتماد', 'child', 'ابن', 'useeffect'] },
      { ar: 'غير مفيد لعناصر DOM العادية', en: 'Pointless for plain DOM handlers', terms: ['button', 'dom', 'onclick', 'cheap', 'رخيص', 'unnecessary', 'لا حاجة'] },
    ],
  },
  'react-memo': {
    depth: 'apply',
    keyPoints: [
      { ar: 'يتخطى التصيير إذا لم تتغير الـ props', en: 'Skips render when props are unchanged', terms: ['skip', 'يتخطى', 'props', 'unchanged', 'لم تتغير', 'same'] },
      { ar: 'مقارنة سطحية', en: 'Shallow comparison', terms: ['shallow', 'سطحي', 'reference', 'مرجع'] },
      { ar: 'يفشل مع دوال/كائنات جديدة كل تصيير', en: 'Defeated by fresh functions/objects each render', terms: ['new function', 'inline', 'object', 'usecallback', 'usememo', 'defeat', 'يبطل'] },
    ],
    followUps: [
      {
        id: 'react-memo-f1',
        question: { ar: 'غلّفت مكوّنًا بـ React.memo لكنه ما زال يُعاد تصييره في كل مرة. ما أول ما تفحصه؟', en: 'You wrapped a component in React.memo but it still re-renders every time. What do you check first?' },
        answer: { ar: 'الـ props غير الأولية: هل يمرّر الأب دالة سهمية مضمّنة أو كائنًا أو مصفوفة تُنشأ في كل تصيير؟ كل واحدة منها مرجع جديد فتفشل المقارنة السطحية. أستخدم Profiler لرؤية "لماذا أُعيد التصيير"، ثم أثبّت المراجع بـ useCallback/useMemo أو أعيد هيكلة المكوّن.', en: 'Non-primitive props: is the parent passing an inline arrow function, an object or an array created on every render? Each is a new reference, so the shallow comparison fails. I use the Profiler to see "why did this render", then stabilise the references with useCallback/useMemo or restructure the component.' },
      },
    ],
  },
  'react-context': {
    depth: 'apply',
    keyPoints: [
      { ar: 'تمرير قيمة دون prop drilling', en: 'Passes a value without prop drilling', terms: ['prop drilling', 'drilling', 'تمرير', 'deep', 'عميق', 'tree', 'شجرة'] },
      { ar: 'كل المستهلكين يُعاد تصييرهم عند التغيير', en: 'All consumers re-render on change', terms: ['consumer', 'مستهلك', 're-render', 'all', 'كل', 'every'] },
      { ar: 'للقيم قليلة التغيّر', en: 'Best for slow-changing values', terms: ['theme', 'سمة', 'locale', 'لغة', 'auth', 'rarely', 'قليل', 'slow'] },
      { ar: 'useMemo على قيمة الـ Provider', en: 'Memoise the provider value', terms: ['usememo', 'memo', 'value', 'provider'] },
    ],
    followUps: [
      {
        id: 'react-context-f1',
        question: { ar: 'لديك context للمصادقة يتغير نادرًا وcontext للإشعارات يتغير كل ثانية. هل تضعهما معًا؟', en: 'You have an auth context that rarely changes and a notifications context that changes every second. Do you put them together?' },
        answer: { ar: 'لا. أي تغيير في القيمة يعيد تصيير كل المستهلكين، فدمجهما يجعل كل مكوّن يقرأ المستخدم الحالي يُعاد تصييره كل ثانية بلا سبب. أفصلهما إلى contexts مستقلة، وربما أنقل الإشعارات إلى مخزن يدعم الاشتراك الانتقائي مثل Zustand.', en: 'No. Any change to the value re-renders every consumer, so merging them makes every component that reads the current user re-render every second for nothing. I split them into separate contexts, and possibly move notifications to a store with selective subscription such as Zustand.' },
      },
    ],
  },
  'react-custom-hooks': {
    depth: 'apply',
    keyPoints: [
      { ar: 'دالة تبدأ بـ use وتستدعي hooks', en: 'A function starting with use that calls hooks', terms: ['use', 'function', 'دالة', 'hooks'] },
      { ar: 'تشارك المنطق لا الحالة', en: 'Shares logic, not state', terms: ['logic', 'منطق', 'not state', 'ليس الحالة', 'independent', 'مستقل', 'each', 'copy'] },
      { ar: 'التنظيف داخل الـ hook', en: 'Cleanup inside the hook', terms: ['cleanup', 'تنظيف', 'unsubscribe', 'timer'] },
    ],
  },
  'react-rerender-causes': {
    depth: 'explain',
    keyPoints: [
      { ar: 'تغيّر الحالة الذاتية', en: 'Own state changed', terms: ['state', 'حالة', 'setstate', 'usestate'] },
      { ar: 'إعادة تصيير الأب', en: 'Parent re-rendered', terms: ['parent', 'أب', 'children', 'أبناء'] },
      { ar: 'تغيّر قيمة context', en: 'Context value changed', terms: ['context'] },
      { ar: 'إعادة التصيير ≠ تحديث DOM', en: 'Re-render ≠ DOM update', terms: ['dom', 'diff', 'reconcil', 'cheap', 'رخيص', 'not the same'] },
    ],
  },
  'react-reconciliation': {
    depth: 'explain',
    keyPoints: [
      { ar: 'مقارنة الشجرة الجديدة بالقديمة', en: 'Diffs the new tree against the old', terms: ['diff', 'compare', 'مقارن', 'tree', 'شجرة', 'virtual'] },
      { ar: 'نوع مختلف = إعادة بناء الشجرة الفرعية', en: 'Different type = subtree rebuilt', terms: ['type', 'نوع', 'rebuild', 'remount', 'unmount', 'إعادة بناء', 'state lost', 'تضيع'] },
      { ar: 'keys لمطابقة عناصر القوائم', en: 'Keys match list items', terms: ['key', 'مفتاح', 'list', 'قائمة'] },
      { ar: 'O(n) بفضل الافتراضات', en: 'O(n) thanks to heuristics', terms: ['o(n)', 'heuristic', 'افتراض', 'linear', 'خطي'] },
    ],
    followUps: [
      {
        id: 'react-reconciliation-f1',
        question: { ar: 'عرّفت مكوّنًا داخل مكوّن آخر، وحقل الإدخال بداخله يفقد التركيز مع كل حرف. ما السبب؟', en: 'You defined a component inside another component, and an input inside it loses focus on every keystroke. Why?' },
        answer: { ar: 'لأن كل تصيير للأب ينشئ دالة مكوّن جديدة، أي نوعًا جديدًا من منظور الـ reconciliation. النوع المختلف يعني هدم الشجرة الفرعية وإعادة بنائها، فيُزال حقل الإدخال ويُنشأ من جديد فاقدًا التركيز والحالة. الحل: تعريف المكوّن خارج الأب.', en: 'Because every parent render creates a new component function — a new type as far as reconciliation is concerned. A different type means the subtree is torn down and rebuilt, so the input is unmounted and recreated, losing focus and state. The fix is to define the component outside the parent.' },
      },
    ],
  },
  'react-fiber': {
    depth: 'explain',
    keyPoints: [
      { ar: 'تصيير قابل للمقاطعة', en: 'Interruptible rendering', terms: ['interrupt', 'مقاطعة', 'pause', 'resume', 'إيقاف', 'استئناف'] },
      { ar: 'وحدات عمل صغيرة (fibers)', en: 'Small units of work', terms: ['unit', 'وحدة', 'fiber', 'linked list', 'chunk'] },
      { ar: 'مرحلة render ومرحلة commit', en: 'Render phase and commit phase', terms: ['render phase', 'commit', 'مرحلة', 'two phases', 'مرحلتين'] },
      { ar: 'أساس التزامن والأولويات', en: 'Foundation for concurrency and priorities', terms: ['concurrent', 'priority', 'أولوي', 'transition', 'suspense'] },
    ],
  },
  'react-concurrent': {
    depth: 'apply',
    keyPoints: [
      { ar: 'التحديثات العاجلة مقابل القابلة للمقاطعة', en: 'Urgent vs interruptible updates', terms: ['urgent', 'عاجل', 'interrupt', 'مقاطعة', 'priority', 'أولوي', 'non-urgent'] },
      { ar: 'useTransition / startTransition', en: 'useTransition / startTransition', terms: ['usetransition', 'starttransition', 'transition', 'ispending'] },
      { ar: 'useDeferredValue', en: 'useDeferredValue', terms: ['usedeferredvalue', 'deferred'] },
      { ar: 'ليس تعدد خيوط', en: 'Not multithreading', terms: ['thread', 'خيط', 'single', 'أحادي', 'not parallel'] },
    ],
  },
  'react-server-components': {
    depth: 'explain',
    keyPoints: [
      { ar: 'كودها لا يُرسل إلى المتصفح', en: 'Their code never ships to the browser', terms: ['bundle', 'حزمة', 'client', 'browser', 'متصفح', 'zero', 'not shipped', 'لا يُرسل', 'لا يرسل'] },
      { ar: 'وصول مباشر للبيانات والأسرار', en: 'Direct data and secret access', terms: ['database', 'قاعدة', 'secret', 'سر', 'direct', 'مباشر', 'async'] },
      { ar: 'لا حالة ولا تأثيرات ولا أحداث', en: 'No state, effects or events', terms: ['usestate', 'useeffect', 'onclick', 'state', 'حالة', 'interactive', 'تفاعل', 'event'] },
      { ar: '"use client" حدود وليس تعليمًا', en: '"use client" marks a boundary', terms: ['use client', 'boundary', 'حدود', 'directive'] },
      { ar: 'الخادم يستورد العميل لا العكس', en: 'Server imports client, not vice versa', terms: ['import', 'استيراد', 'children', 'compose', 'pass'] },
    ],
    followUps: [
      {
        id: 'react-server-components-f1',
        question: { ar: 'مكوّن عميل يحتاج بداخله مكوّن خادم ثقيل. المكوّن العميل لا يستطيع استيراده — فكيف تحل ذلك؟', en: 'A client component needs a heavy server component inside it. The client component cannot import it — how do you solve that?' },
        answer: { ar: 'أمرّر مكوّن الخادم كـ children (أو كـ prop) من مكوّن خادم أعلى. القيد هو على الاستيراد لا على التركيب: مكوّن الخادم يُصيَّر على الخادم ويُمرَّر ناتجه إلى الغلاف العميل. هكذا يبقى الجزء الثقيل خارج حزمة المتصفح.', en: 'I pass the server component as children (or a prop) from a server component higher up. The restriction is on importing, not composing: the server component renders on the server and its output is handed to the client wrapper. That keeps the heavy part out of the browser bundle.' },
      },
    ],
  },
  'react-hydration': {
    depth: 'debug',
    keyPoints: [
      { ar: 'ربط JavaScript بـ HTML الجاهز', en: 'Attaching JavaScript to server HTML', terms: ['attach', 'ربط', 'server html', 'listeners', 'مستمع', 'interactive', 'تفاعل'] },
      { ar: 'المحتوى يظهر قبل أن يصبح تفاعليًا', en: 'Visible before interactive', terms: ['visible', 'before', 'قبل', 'interactive', 'tti', 'gap', 'فجوة'] },
      { ar: 'الاختلاف = قيم غير حتمية أو window', en: 'Mismatch = non-deterministic values or window', terms: ['date', 'random', 'window', 'localstorage', 'timezone', 'mismatch', 'اختلاف', 'non-deterministic', 'غير حتمي'] },
      { ar: 'الحل: التصيير بعد التركيب أو تعطيل SSR', en: 'Fix: render after mount or disable SSR', terms: ['mounted', 'useeffect', 'ssr: false', 'dynamic', 'suppresshydrationwarning'] },
    ],
  },
  'react-error-boundaries': {
    depth: 'apply',
    keyPoints: [
      { ar: 'تلتقط أخطاء التصيير في الأبناء', en: 'Catch render errors in children', terms: ['render', 'تصيير', 'children', 'أبناء', 'catch', 'تلتقط', 'fallback'] },
      { ar: 'يجب أن تكون صنفًا', en: 'Must be a class component', terms: ['class', 'صنف', 'getderivedstatefromerror', 'componentdidcatch', 'react-error-boundary'] },
      { ar: 'لا تلتقط أحداثًا ولا كودًا غير متزامن', en: 'Do not catch events or async code', terms: ['event', 'حدث', 'async', 'settimeout', 'promise', 'handler', 'try/catch'] },
      { ar: 'ضعها على مستوى الأقسام', en: 'Place at section level', terms: ['section', 'قسم', 'granular', 'widget', 'multiple', 'عدة'] },
    ],
  },
  'react-lazy-suspense': {
    depth: 'apply',
    keyPoints: [
      { ar: 'import() ينشئ chunk منفصلًا', en: 'import() creates a separate chunk', terms: ['import()', 'dynamic import', 'chunk', 'split', 'تقسيم'] },
      { ar: 'Suspense يعرض fallback أثناء التحميل', en: 'Suspense shows a fallback while loading', terms: ['suspense', 'fallback', 'loading', 'تحميل'] },
      { ar: 'على مستوى المسارات أولًا', en: 'Route level first', terms: ['route', 'مسار', 'page', 'صفحة'] },
      { ar: 'Error Boundary لفشل التحميل', en: 'Error boundary for load failures', terms: ['error boundary', 'fail', 'فشل', 'network', 'deploy'] },
    ],
  },
  'react-what-is': {
    depth: 'know',
    keyPoints: [
      { ar: 'مكتبة لبناء الواجهات', en: 'A library for building UIs', terms: ['library', 'مكتبة', 'ui', 'واجه', 'component', 'مكوّن', 'مكون'] },
      { ar: 'وصفية: UI = f(state)', en: 'Declarative: UI = f(state)', terms: ['declarative', 'وصفي', 'f(state)', 'function of state', 'describe'] },
      { ar: 'تدفق بيانات أحادي الاتجاه', en: 'One-way data flow', terms: ['one-way', 'unidirectional', 'اتجاه واحد', 'top-down', 'props'] },
    ],
  },
};
