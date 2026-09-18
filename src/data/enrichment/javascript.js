// data/enrichment/javascript.js
// Key points + follow-ups for the core JavaScript interview questions.
// Keyed by question id; merged into the question bank by data/index.js.

export const javascriptEnrichment = {
  'js-var-let-const': {
    depth: 'know',
    keyPoints: [
      { ar: 'نطاق الدالة مقابل نطاق البلوك', en: 'Function scope vs block scope', terms: ['block', 'بلوك', 'function scope', 'نطاق الدالة', 'scope', 'نطاق'] },
      { ar: 'إعادة الإسناد وإعادة التعريف', en: 'Reassignment and redeclaration', terms: ['reassign', 'redeclar', 'إعادة الإسناد', 'إعادة التعريف', 'إعادة تعريف', 'اعادة'] },
      { ar: 'const تمنع إعادة الإسناد لا التعديل', en: 'const prevents reassignment, not mutation', terms: ['mutat', 'تعديل', 'محتو', 'immutable', 'object', 'كائن'] },
      { ar: 'الرفع (hoisting) و TDZ', en: 'Hoisting and the temporal dead zone', terms: ['hoist', 'رفع', 'tdz', 'temporal dead zone', 'منطقة الموت'] },
    ],
    followUps: [
      {
        id: 'js-var-let-const-f1',
        question: { ar: 'إذا كانت const تمنع التغيير، لماذا يمكنني إضافة عنصر إلى مصفوفة معرّفة بـ const؟', en: 'If const prevents change, why can I push to an array declared with const?' },
        answer: { ar: 'لأن const تثبّت الرابط (binding) بين الاسم والقيمة، لا القيمة نفسها. المتغير يشير إلى نفس المصفوفة، وتعديل محتوى المصفوفة لا يغيّر هذا المرجع. لمنع التعديل الفعلي تحتاج Object.freeze، وهو سطحي أيضًا.', en: 'Because const freezes the binding between the name and the value, not the value itself. The variable still points at the same array; mutating its contents does not change that reference. To actually prevent mutation you need Object.freeze, and even that is shallow.' },
        keyPoints: [{ ar: 'الرابط مقابل القيمة', en: 'Binding vs value', terms: ['binding', 'reference', 'مرجع', 'رابط', 'freeze'] }],
      },
      {
        id: 'js-var-let-const-f2',
        question: { ar: 'ماذا يطبع هذا الكود ولماذا؟ for (var i = 0; i < 3; i++) setTimeout(() => console.log(i));', en: 'What does this print and why? for (var i = 0; i < 3; i++) setTimeout(() => console.log(i));' },
        answer: { ar: 'يطبع 3 ثلاث مرات. var لها نطاق دالة واحد مشترك بين كل الدورات، وعندما تُنفَّذ المؤقتات تكون الحلقة قد انتهت و i تساوي 3. استبدال var بـ let يعطي 0, 1, 2 لأن let تنشئ رابطًا جديدًا لكل دورة.', en: 'It prints 3 three times. var has a single function-scoped binding shared by every iteration, and by the time the timers fire the loop has finished with i equal to 3. Replacing var with let prints 0, 1, 2 because let creates a fresh binding per iteration.' },
        keyPoints: [{ ar: 'رابط واحد مشترك مع var', en: 'One shared binding with var', terms: ['shared', 'مشترك', 'per iteration', 'لكل دورة', 'closure', 'closures'] }],
      },
    ],
  },

  'js-hoisting': {
    depth: 'explain',
    keyPoints: [
      { ar: 'التصريحات تُرفع لا الإسنادات', en: 'Declarations are hoisted, not assignments', terms: ['declaration', 'تصريح', 'assignment', 'إسناد', 'اسناد'] },
      { ar: 'var تُهيّأ بـ undefined', en: 'var is initialised to undefined', terms: ['undefined'] },
      { ar: 'let/const في منطقة الموت المؤقتة', en: 'let/const sit in the temporal dead zone', terms: ['tdz', 'temporal', 'منطقة الموت', 'referenceerror', 'reference error'] },
      { ar: 'تصريحات الدوال تُرفع كاملة', en: 'Function declarations hoist entirely', terms: ['function declaration', 'تصريح الدال', 'كاملة', 'entire', 'fully'] },
    ],
    followUps: [
      {
        id: 'js-hoisting-f1',
        question: { ar: 'هل تُرفع تعبيرات الدوال (function expressions) بنفس الطريقة؟', en: 'Are function expressions hoisted the same way?' },
        answer: { ar: 'لا. تعبير الدالة المسند إلى متغير يتبع قواعد ذلك المتغير: مع var يُرفع الاسم بقيمة undefined فيفشل الاستدعاء بـ TypeError، ومع let/const يرمي ReferenceError. فقط تصريح الدالة الكامل هو ما يُرفع بجسمه.', en: 'No. A function expression assigned to a variable follows that variable\'s rules: with var the name hoists as undefined so calling it throws a TypeError, and with let/const it throws a ReferenceError. Only a full function declaration hoists with its body.' },
      },
      {
        id: 'js-hoisting-f2',
        question: { ar: 'لماذا صُمّمت let و const بمنطقة موت مؤقتة بدل تهيئتها بـ undefined مثل var؟', en: 'Why were let and const designed with a temporal dead zone instead of initialising to undefined like var?' },
        answer: { ar: 'لتحويل خطأ صامت إلى خطأ صريح. استخدام متغير قبل تصريحه غالبًا خطأ برمجي، وإعطاؤه undefined يخفي ذلك ويظهر لاحقًا كسلوك غريب. رمي ReferenceError فورًا يكشف المشكلة في مكانها.', en: 'To turn a silent bug into a loud one. Using a variable before its declaration is almost always a mistake, and giving it undefined hides that until it surfaces as strange behaviour later. Throwing a ReferenceError immediately exposes the problem where it happens.' },
      },
    ],
  },

  'js-closures': {
    depth: 'explain',
    keyPoints: [
      { ar: 'الدالة تحتفظ بالوصول إلى نطاقها الخارجي', en: 'A function retains access to its outer scope', terms: ['outer', 'خارج', 'enclosing', 'lexical', 'scope', 'نطاق', 'retain', 'تحتفظ', 'access', 'وصول'] },
      { ar: 'يبقى بعد انتهاء الدالة الخارجية', en: 'Survives after the outer function returns', terms: ['after', 'بعد', 'return', 'finish', 'انتها', 'انته', 'خروج'] },
      { ar: 'حالة خاصة (private state)', en: 'Enables private state', terms: ['private', 'خاص', 'encapsulat', 'counter', 'عدّاد', 'عداد'] },
      { ar: 'مثال عملي', en: 'A concrete example', terms: ['example', 'مثال', 'counter', 'debounce', 'memoiz', 'function inside', 'داخل'] },
    ],
    followUps: [
      {
        id: 'js-closures-f1',
        question: { ar: 'أعطني مثالًا عمليًا تستخدم فيه الـ closure في كود حقيقي.', en: 'Give me a practical example where you would use a closure in real code.' },
        answer: { ar: 'debounce مثال مثالي: الدالة المُعادة تحتفظ بمعرّف المؤقت في نطاقها الخارجي بين الاستدعاءات، فتستطيع إلغاء الاستدعاء السابق. مثال آخر هو hooks في React — كل تصيير ينشئ closures تلتقط قيم تلك الدورة.', en: 'Debounce is the classic one: the returned function keeps the timer id in its enclosing scope between calls, which is what lets it cancel the previous invocation. Another is React hooks — every render creates closures that capture that render\'s values.' },
        keyPoints: [{ ar: 'مثال ملموس', en: 'A concrete example', terms: ['debounce', 'throttle', 'memoiz', 'counter', 'hook', 'module', 'عداد', 'عدّاد'] }],
      },
      {
        id: 'js-closures-f2',
        question: { ar: 'ماذا يحدث للمتغيرات بعد أن تنتهي الدالة الخارجية من التنفيذ؟', en: 'What happens to the variables after the outer function finishes executing?' },
        answer: { ar: 'عادةً يُحرَّر نطاق الدالة بعد انتهائها. لكن إذا كانت دالة داخلية ما زالت حيّة وتشير إلى ذلك النطاق، يُبقيه محرك JavaScript في الذاكرة لأنه ما زال قابلًا للوصول. لذلك المتغيرات تبقى ما بقي الـ closure حيًّا.', en: 'Normally a function\'s scope is released when it returns. But if an inner function is still alive and references that scope, the engine keeps it in memory because it is still reachable. So the variables live exactly as long as the closure does.' },
        keyPoints: [{ ar: 'قابلية الوصول تحدد التحرير', en: 'Reachability determines collection', terms: ['reachable', 'garbage', 'gc', 'memory', 'ذاكرة', 'وصول', 'reference'] }],
      },
      {
        id: 'js-closures-f3',
        question: { ar: 'هل يمكن للـ closures أن تسبب مشاكل في الذاكرة؟', en: 'Can closures cause memory problems?' },
        answer: { ar: 'نعم، إذا أبقت مرجعًا إلى شيء كبير لا تحتاجه. مستمع أحداث يلتقط كائن بيانات ضخمًا ولا يُزال، أو مؤقت بلا إلغاء، يبقي كل ذلك النطاق حيًّا. الحل: استخراج ما تحتاجه فقط قبل إنشاء الـ closure، وإزالة المستمعين والمؤقتات عند التنظيف.', en: 'Yes, when they keep a reference to something large they do not need. An event listener that captures a big data object and is never removed, or a timer that is never cleared, keeps that whole scope alive. The fix is to extract only what you need before creating the closure, and to remove listeners and timers on cleanup.' },
        keyPoints: [{ ar: 'تسريب عبر مراجع محتجزة', en: 'Leaks through retained references', terms: ['leak', 'تسريب', 'listener', 'مستمع', 'timer', 'مؤقت', 'cleanup', 'تنظيف', 'remove'] }],
      },
    ],
  },

  'js-this': {
    depth: 'explain',
    keyPoints: [
      { ar: 'تُحدَّد بطريقة الاستدعاء', en: 'Determined by how the function is called', terms: ['call site', 'called', 'استدعا', 'invocation', 'كيف'] },
      { ar: 'الاستدعاء كـ method يعطي الكائن', en: 'Method call binds the object', terms: ['method', 'object', 'كائن', 'dot', 'نقطة'] },
      { ar: 'call/apply/bind تحدده صراحةً', en: 'call/apply/bind set it explicitly', terms: ['bind', 'call', 'apply'] },
      { ar: 'الدوال السهمية ترثه lexically', en: 'Arrow functions inherit it lexically', terms: ['arrow', 'سهم', 'lexical', 'inherit', 'ترث', 'enclosing'] },
    ],
    followUps: [
      {
        id: 'js-this-f1',
        question: { ar: 'مررت method كـ callback لزر وفقدت this. ما الحلول؟', en: 'You passed a method as a button callback and this was lost. What are your options?' },
        answer: { ar: 'ثلاثة حلول: bind الدالة إلى الكائن مرة واحدة (في المُنشئ مثلًا)، أو تغليفها بدالة سهمية عند التمرير، أو تعريفها كحقل صنف بدالة سهمية. في React الحديث المشكلة تختفي لأن المكوّنات الدالية لا تستخدم this أصلًا.', en: 'Three options: bind the method to the object once (in the constructor, say), wrap it in an arrow function at the call site, or define it as a class field holding an arrow function. In modern React the problem disappears because function components do not use this at all.' },
      },
      {
        id: 'js-this-f2',
        question: { ar: 'متى تكون الدالة السهمية خيارًا خاطئًا بسبب this؟', en: 'When is an arrow function the wrong choice because of this?' },
        answer: { ar: 'عندما تحتاج this ديناميكيًا: تابع (method) على كائن حرفي يحتاج الوصول إلى الكائن، أو معالج حدث DOM يعتمد على this كالعنصر، أو دالة على prototype. السهمية ستأخذ this من النطاق المحيط — غالبًا undefined أو window — لا من الكائن.', en: 'When you need a dynamic this: a method on an object literal that must reach the object, a DOM event handler that relies on this being the element, or a function on a prototype. An arrow will take this from the enclosing scope — usually undefined or window — rather than from the object.' },
      },
    ],
  },

  'js-promises': {
    depth: 'explain',
    keyPoints: [
      { ar: 'ثلاث حالات: pending / fulfilled / rejected', en: 'Three states: pending, fulfilled, rejected', terms: ['pending', 'fulfilled', 'rejected', 'settled', 'resolved', 'حالات', 'معلق'] },
      { ar: 'then تعيد Promise جديدة (تسلسل)', en: 'then returns a new promise (chaining)', terms: ['chain', 'تسلسل', 'new promise', 'returns a promise', 'تعيد'] },
      { ar: 'الأخطاء تنتقل إلى catch', en: 'Errors propagate to catch', terms: ['catch', 'propagat', 'تنتقل', 'reject', 'error', 'خطأ'] },
      { ar: 'لا يمكن تغيير الحالة بعد الاستقرار', en: 'Cannot change once settled', terms: ['once', 'immutable', 'settled', 'مرة واحدة', 'لا يتغير', 'استقر'] },
    ],
    followUps: [
      {
        id: 'js-promises-f1',
        question: { ar: 'ما الفرق بين إعادة قيمة وإعادة Promise داخل then؟', en: 'What is the difference between returning a value and returning a promise inside then?' },
        answer: { ar: 'إعادة قيمة عادية تُغلَّف في Promise محلولة فورًا، فالـ then التالية تستقبل القيمة مباشرة. إعادة Promise تجعل السلسلة تنتظر استقرارها وتتبنّى نتيجتها. نسيان return هو الخطأ الأشهر: السلسلة تكمل بـ undefined دون انتظار العملية.', en: 'Returning a plain value wraps it in an immediately resolved promise, so the next then receives it directly. Returning a promise makes the chain wait for it and adopt its outcome. Forgetting the return is the classic bug: the chain continues with undefined without waiting for the operation.' },
      },
      {
        id: 'js-promises-f2',
        question: { ar: 'كيف تلغي Promise قيد التنفيذ؟', en: 'How do you cancel an in-flight promise?' },
        answer: { ar: 'لا يمكن إلغاء Promise نفسها — هي تمثيل للنتيجة لا للعملية. ما تلغيه هو العملية الأساسية عبر AbortController: تمرّر signal إلى fetch، وعند abort تُرفض الـ Promise بخطأ AbortError الذي تتعامل معه بشكل مختلف عن الأخطاء الحقيقية.', en: 'You cannot cancel the promise itself — it represents the result, not the work. What you cancel is the underlying operation, via AbortController: pass its signal to fetch, and on abort the promise rejects with an AbortError, which you handle differently from a real failure.' },
        keyPoints: [{ ar: 'AbortController', en: 'AbortController', terms: ['abort', 'signal', 'إلغاء'] }],
      },
    ],
  },

  'js-async-await': {
    depth: 'apply',
    keyPoints: [
      { ar: 'صياغة فوق Promises', en: 'Syntax over promises', terms: ['promise', 'sugar', 'syntax', 'صياغة', 'مبني'] },
      { ar: 'الدالة async تعيد Promise دائمًا', en: 'An async function always returns a promise', terms: ['returns a promise', 'تعيد promise', 'always', 'دائم'] },
      { ar: 'await لا يحجب الخيط الرئيسي', en: 'await does not block the main thread', terms: ['block', 'حجب', 'thread', 'خيط', 'pause', 'suspend', 'توقف'] },
      { ar: 'Promise.all للعمليات المستقلة', en: 'Promise.all for independent work', terms: ['promise.all', 'parallel', 'متواز', 'concurrent', 'sequential', 'متسلسل'] },
    ],
    followUps: [
      {
        id: 'js-async-await-f1',
        question: { ar: 'ما الخطأ في: for (const url of urls) { await fetch(url); } عندما تكون الطلبات مستقلة؟', en: 'What is wrong with: for (const url of urls) { await fetch(url); } when the requests are independent?' },
        answer: { ar: 'يجعلها متسلسلة: كل طلب ينتظر سابقه، فالزمن الكلي هو مجموع الأزمنة بدل أطولها. الصحيح هو إطلاقها معًا ثم انتظارها: await Promise.all(urls.map(fetch)). أما إن كانت الطلبات كثيرة جدًا فنحدّ التوازي بدفعات حتى لا نغرق الخادم.', en: 'It serialises them: each request waits for the previous one, so total time is the sum instead of the maximum. The fix is to start them together and then wait: await Promise.all(urls.map(fetch)). If there are very many, you cap concurrency in batches so you do not flood the server.' },
      },
      {
        id: 'js-async-await-f2',
        question: { ar: 'هل يوجد فرق بين return await promise و return promise داخل دالة async؟', en: 'Is there a difference between return await promise and return promise inside an async function?' },
        answer: { ar: 'خارج try/catch لا فرق عمليًا. داخل try/catch يوجد فرق مهم: بدون await يُعاد الـ Promise قبل أن يُرفض، فلا يلتقط catch الخطأ. لذلك return await هو الصحيح عندما تريد معالجة الخطأ في الدالة نفسها.', en: 'Outside a try/catch, practically none. Inside a try/catch there is an important one: without await the promise is returned before it rejects, so the catch never sees the error. return await is correct when you intend to handle the failure in that function.' },
      },
    ],
  },

  'js-event-loop': {
    depth: 'explain',
    keyPoints: [
      { ar: 'JavaScript أحادية الخيط', en: 'Single-threaded execution', terms: ['single', 'thread', 'خيط', 'أحادي', 'stack'] },
      { ar: 'الحلقة تنقل المهام عندما يفرغ الـ stack', en: 'Moves tasks onto the stack when it is empty', terms: ['stack', 'empty', 'فارغ', 'queue', 'طابور', 'يفرغ'] },
      { ar: 'microtasks قبل macrotasks', en: 'Microtasks run before macrotasks', terms: ['microtask', 'macrotask', 'promise', 'settimeout', 'دقيق'] },
      { ar: 'الكود الطويل يجمّد الصفحة', en: 'Long synchronous code freezes the page', terms: ['freeze', 'تجمد', 'block', 'حجب', 'responsive', 'unresponsive'] },
    ],
    followUps: [
      {
        id: 'js-event-loop-f1',
        question: { ar: 'ما ترتيب الطباعة؟ console.log(1); setTimeout(()=>console.log(2)); Promise.resolve().then(()=>console.log(3)); console.log(4);', en: 'What is the output order? console.log(1); setTimeout(()=>console.log(2)); Promise.resolve().then(()=>console.log(3)); console.log(4);' },
        answer: { ar: '1, 4, 3, 2. الكود المتزامن أولًا (1 و4)، ثم يُفرَّغ طابور الـ microtasks (3) قبل أن تُؤخذ أي macrotask، ثم setTimeout (2).', en: '1, 4, 3, 2. Synchronous code first (1 and 4), then the microtask queue is drained (3) before any macrotask is taken, then the setTimeout (2).' },
        keyPoints: [{ ar: '1, 4, 3, 2', en: '1, 4, 3, 2', terms: ['1, 4, 3, 2', '1 4 3 2', '1،4،3،2', '4 3 2'] }],
      },
      {
        id: 'js-event-loop-f2',
        question: { ar: 'لماذا لا يعني setTimeout(fn, 100) أن fn ستعمل بعد 100 مللي ثانية بالضبط؟', en: 'Why does setTimeout(fn, 100) not guarantee fn runs after exactly 100ms?' },
        answer: { ar: 'لأن 100ms هي الحد الأدنى: بعد انقضائها تُوضع الـ callback في طابور المهام، ولا تُنفَّذ حتى يفرغ الـ call stack وتُستنفد الـ microtasks. إن كان الخيط الرئيسي مشغولًا بحساب طويل، تتأخر الـ callback بقدر ذلك الانشغال.', en: 'Because 100ms is a minimum: once it elapses the callback is placed on the task queue, and it only runs when the call stack is empty and the microtasks are drained. If the main thread is busy with a long computation, the callback is delayed by however long that takes.' },
      },
    ],
  },

  'js-prototype': {
    depth: 'explain',
    keyPoints: [
      { ar: 'كل كائن يرتبط بنموذج', en: 'Every object links to a prototype', terms: ['prototype', 'نموذج', 'link', 'يرتبط', '__proto__'] },
      { ar: 'الدوال المشتركة توضع على prototype', en: 'Shared methods live on the prototype', terms: ['shared', 'مشترك', 'method', 'once', 'مرة واحدة', 'memory', 'ذاكرة'] },
      { ar: 'البحث يصعد السلسلة', en: 'Lookup walks up the chain', terms: ['chain', 'سلسلة', 'lookup', 'بحث', 'walk', 'يصعد'] },
      { ar: 'classes صياغة فوق prototypes', en: 'Classes are syntax over prototypes', terms: ['class', 'صنف', 'sugar', 'syntax', 'صياغة'] },
    ],
    followUps: [
      {
        id: 'js-prototype-f1',
        question: { ar: 'ما الفرق بين Function.prototype و obj.__proto__؟', en: 'What is the difference between Function.prototype and obj.__proto__?' },
        answer: { ar: 'prototype خاصية على الدوال المُنشِئة فقط: الكائن الذي سترثه النسخ الجديدة. أما __proto__ (أو Object.getPrototypeOf) فهو الرابط الفعلي من أي كائن إلى نموذجه. بعد new User()، يكون Object.getPrototypeOf(instance) === User.prototype.', en: 'prototype is a property only on constructor functions: the object new instances will inherit from. __proto__ (or Object.getPrototypeOf) is the actual link from any object to its prototype. After new User(), Object.getPrototypeOf(instance) === User.prototype.' },
      },
      {
        id: 'js-prototype-f2',
        question: { ar: 'لماذا يُعدّ تعديل Array.prototype ممارسة سيئة؟', en: 'Why is modifying Array.prototype considered bad practice?' },
        answer: { ar: 'لأنه يؤثر على كل مصفوفة في الصفحة بما فيها مصفوفات المكتبات الخارجية، وقد يتعارض مع دوال تضيفها اللغة لاحقًا بنفس الاسم — وهذا حدث فعليًا مع flatten/flat. كما أنه يجعل الكود أصعب تتبعًا لأن الدالة لا تأتي من مكان واضح.', en: 'Because it affects every array on the page, including those inside third-party libraries, and it can clash with methods the language later adds under the same name — which actually happened with flatten/flat. It also makes code harder to trace, since the method comes from nowhere obvious.' },
      },
    ],
  },

  'js-debounce-throttle': {
    depth: 'apply',
    keyPoints: [
      { ar: 'debounce ينفّذ بعد توقف الأحداث', en: 'Debounce runs after events stop', terms: ['after', 'stop', 'توقف', 'pause', 'wait', 'انتظار', 'delay'] },
      { ar: 'throttle ينفّذ بمعدل ثابت', en: 'Throttle runs at a fixed rate', terms: ['rate', 'interval', 'معدل', 'فترة', 'at most', 'once per', 'كل'] },
      { ar: 'حالة استخدام لكل منهما', en: 'A use case for each', terms: ['search', 'بحث', 'scroll', 'تمرير', 'resize', 'typing', 'كتابة', 'input'] },
      { ar: 'التنفيذ بـ closure ومؤقت', en: 'Implemented with a closure and a timer', terms: ['settimeout', 'cleartimeout', 'closure', 'timer', 'مؤقت'] },
    ],
    followUps: [
      {
        id: 'js-debounce-throttle-f1',
        question: { ar: 'في React، لماذا قد لا يعمل debounce إذا عرّفته داخل المكوّن مباشرة؟', en: 'In React, why might a debounce not work if you define it directly inside the component?' },
        answer: { ar: 'لأن كل تصيير يستدعي debounce من جديد فينشئ دالة جديدة بمؤقت جديد، ويضيع المؤقت السابق. يجب تثبيت الدالة المُغلَّفة عبر useMemo أو useRef (أو تعريفها خارج المكوّن) حتى يبقى نفس المؤقت بين عمليات التصيير.', en: 'Because every render calls debounce again, creating a new wrapped function with a fresh timer and discarding the previous one. The wrapped function must be kept stable with useMemo or useRef (or defined outside the component) so the same timer persists across renders.' },
      },
    ],
  },

  'js-event-delegation': {
    depth: 'apply',
    keyPoints: [
      { ar: 'مستمع واحد على الأب', en: 'One listener on a parent', terms: ['parent', 'أب', 'single', 'one listener', 'مستمع واحد', 'container'] },
      { ar: 'يعتمد على الـ bubbling', en: 'Relies on bubbling', terms: ['bubbl', 'صعود', 'propagat', 'يصعد'] },
      { ar: 'يعمل مع العناصر المضافة لاحقًا', en: 'Works for elements added later', terms: ['dynamic', 'later', 'لاحق', 'future', 'added', 'مضاف'] },
      { ar: 'event.target مع closest', en: 'event.target with closest', terms: ['target', 'closest', 'matches'] },
    ],
  },

  'js-shallow-deep-copy': {
    depth: 'apply',
    keyPoints: [
      { ar: 'السطحي ينسخ المستوى الأول فقط', en: 'Shallow copies only the top level', terms: ['top level', 'first level', 'المستوى الأول', 'nested', 'متداخل', 'shared', 'مشترك'] },
      { ar: 'spread و Object.assign سطحيان', en: 'Spread and Object.assign are shallow', terms: ['spread', '...', 'assign'] },
      { ar: 'structuredClone للنسخ العميق', en: 'structuredClone for deep copies', terms: ['structuredclone', 'structured clone', 'json.parse', 'stringify', 'lodash', 'clonedeep', 'recursive', 'تكرار'] },
      { ar: 'حدود JSON.parse(JSON.stringify)', en: 'Limits of the JSON trick', terms: ['date', 'function', 'undefined', 'circular', 'دائري', 'تواريخ', 'دوال'] },
    ],
  },

  'js-equality': {
    depth: 'know',
    keyPoints: [
      { ar: '== يحوّل الأنواع', en: '== performs type coercion', terms: ['coerc', 'convert', 'تحويل', 'type'] },
      { ar: '=== يقارن النوع والقيمة', en: '=== compares type and value', terms: ['type and value', 'strict', 'صارم', 'النوع والقيمة'] },
      { ar: 'استخدم === افتراضيًا', en: 'Default to ===', terms: ['always', 'default', 'دائم', 'افتراض'] },
    ],
  },

  'js-call-apply-bind': {
    depth: 'know',
    keyPoints: [
      { ar: 'call/apply تنفّذ فورًا', en: 'call/apply invoke immediately', terms: ['immediately', 'فور', 'invoke', 'execute', 'تنفذ'] },
      { ar: 'apply يأخذ مصفوفة', en: 'apply takes an array', terms: ['array', 'مصفوفة'] },
      { ar: 'bind تعيد دالة جديدة', en: 'bind returns a new function', terms: ['new function', 'returns', 'دالة جديدة', 'later', 'لاحق'] },
    ],
  },

  'js-memory-leaks': {
    depth: 'debug',
    keyPoints: [
      { ar: 'مستمعون ومؤقتات بلا تنظيف', en: 'Listeners and timers never cleaned up', terms: ['listener', 'مستمع', 'timer', 'interval', 'مؤقت', 'cleanup', 'تنظيف', 'remove'] },
      { ar: 'cache بلا حد', en: 'Unbounded caches', terms: ['cache', 'unbounded', 'grow', 'بلا حد', 'ينمو', 'map', 'array'] },
      { ar: 'عناصر DOM منفصلة', en: 'Detached DOM nodes', terms: ['detached', 'dom', 'منفصل'] },
      { ar: 'التشخيص بلقطات الذاكرة', en: 'Diagnose with heap snapshots', terms: ['snapshot', 'لقطة', 'devtools', 'heap', 'profiler', 'memory tab'] },
    ],
    followUps: [
      {
        id: 'js-memory-leaks-f1',
        question: { ar: 'كيف تثبت أن لديك تسريبًا فعليًا وليس مجرد استهلاك مرتفع؟', en: 'How do you prove you actually have a leak rather than just high usage?' },
        answer: { ar: 'أراقب استهلاك الـ heap عبر الوقت أثناء تكرار نفس الإجراء. الاستهلاك الذي يرتفع ثم يعود بعد الـ GC طبيعي. التسريب هو خط صاعد لا يعود أبدًا. ثم أقارن لقطتين للـ heap وأبحث عن الكائنات التي يزداد عددها مع كل تكرار، وأتتبع من يحتفظ بها (retainers).', en: 'I watch heap usage over time while repeating the same action. Usage that rises and drops back after GC is normal. A leak is a line that keeps rising and never returns. Then I diff two heap snapshots, look for object types whose count grows with each repetition, and follow the retainer path to see what is holding them.' },
      },
    ],
  },

  'js-race-conditions': {
    depth: 'debug',
    keyPoints: [
      { ar: 'الردود قد تصل بترتيب مختلف', en: 'Responses can arrive out of order', terms: ['order', 'ترتيب', 'out of order', 'late', 'متأخر', 'stale', 'قديم'] },
      { ar: 'الإلغاء بـ AbortController', en: 'Cancel with AbortController', terms: ['abort', 'cancel', 'إلغاء', 'signal'] },
      { ar: 'تجاهل الردود القديمة', en: 'Ignore stale responses', terms: ['ignore', 'تجاهل', 'latest', 'أحدث', 'flag', 'علم', 'id'] },
      { ar: 'الصيغة الدالية لتحديث الحالة', en: 'Functional state updates', terms: ['functional', 'prev', 'دالية', 'setstate(prev', 'callback'] },
    ],
  },

  'js-generators': {
    depth: 'explain',
    keyPoints: [
      { ar: 'function* و yield', en: 'function* and yield', terms: ['function*', 'yield'] },
      { ar: 'الإيقاف والاستئناف مع حفظ الحالة', en: 'Pause and resume with preserved state', terms: ['pause', 'resume', 'إيقاف', 'استئناف', 'state', 'حالة'] },
      { ar: 'تعيد iterator', en: 'Returns an iterator', terms: ['iterator', 'next()', 'next', 'done'] },
      { ar: 'كسولة / لانهائية', en: 'Lazy or infinite sequences', terms: ['lazy', 'كسول', 'infinite', 'لانهائ', 'on demand', 'عند الطلب'] },
    ],
  },

  'js-modules': {
    depth: 'know',
    keyPoints: [
      { ar: 'ESM ثابتة، CommonJS ديناميكية', en: 'ESM is static, CommonJS is dynamic', terms: ['static', 'ثابت', 'dynamic', 'ديناميك', 'runtime', 'compile'] },
      { ar: 'tree shaking', en: 'Tree shaking', terms: ['tree shak', 'tree-shak', 'dead code'] },
      { ar: 'روابط حية مقابل نسخ', en: 'Live bindings vs copies', terms: ['live binding', 'live', 'copy', 'نسخ', 'حية'] },
      { ar: 'top-level await', en: 'Top-level await', terms: ['top-level await', 'top level await'] },
    ],
  },

  'js-web-workers': {
    depth: 'apply',
    keyPoints: [
      { ar: 'خيط منفصل عن الرئيسي', en: 'A separate thread from the main one', terms: ['thread', 'خيط', 'background', 'خلفية', 'separate', 'منفصل'] },
      { ar: 'لا وصول إلى DOM', en: 'No DOM access', terms: ['dom', 'window', 'document'] },
      { ar: 'التواصل عبر postMessage', en: 'Communication via postMessage', terms: ['postmessage', 'message', 'رسال'] },
      { ar: 'للعمل كثيف المعالجة فقط', en: 'Only for CPU-heavy work', terms: ['cpu', 'heavy', 'ثقيل', 'computation', 'حساب', 'معالجة'] },
    ],
  },

  'js-micro-vs-macro': {
    depth: 'explain',
    keyPoints: [
      { ar: 'Promises = microtasks', en: 'Promise callbacks are microtasks', terms: ['promise', 'microtask', 'queuemicrotask', 'mutationobserver', 'nexttick'] },
      { ar: 'setTimeout/الأحداث = macrotasks', en: 'Timers and events are macrotasks', terms: ['settimeout', 'setinterval', 'macrotask', 'event', 'حدث', 'i/o'] },
      { ar: 'الطابور الدقيق يُفرَّغ كاملًا بعد كل مهمة', en: 'The microtask queue drains fully after each task', terms: ['drain', 'يفرغ', 'كامل', 'before', 'قبل', 'all'] },
      { ar: 'الرسم يحدث بين الـ macrotasks', en: 'Rendering happens between macrotasks', terms: ['render', 'paint', 'رسم', 'frame', 'إطار'] },
    ],
  },
};
