// data/categories/coding.js
// Realistic interview coding tasks. `question` states the task, `code` shows
// the signature or starter, and `answer` gives a reference solution with the
// points an interviewer listens for.
import { DIFFICULTY } from '../difficulty.js';

const { beginner, intermediate, advanced } = DIFFICULTY;

export const coding = [
  // ------------------------------------------------------------- JAVASCRIPT
  {
    id: 'code-js-debounce',
    difficulty: intermediate,
    kind: 'coding',
    depth: 'apply',
    code: `function debounce(fn, delay) {
  // your implementation
}`,
    question: {
      ar: 'نفّذ دالة debounce تؤجل استدعاء fn حتى يمر delay مللي ثانية بلا استدعاءات جديدة.',
      en: 'Implement debounce: delay calling fn until delay milliseconds have passed with no new calls.',
    },
    answer: {
      ar: '```js\nfunction debounce(fn, delay) {\n  let timer = null;\n\n  function debounced(...args) {\n    clearTimeout(timer);\n    timer = setTimeout(() => {\n      timer = null;\n      fn.apply(this, args);\n    }, delay);\n  }\n\n  debounced.cancel = () => {\n    clearTimeout(timer);\n    timer = null;\n  };\n\n  return debounced;\n}\n```\n\nما يبحث عنه المقابِل:\n• الـ closure تحتفظ بالمؤقت بين الاستدعاءات — هذا جوهر الحل.\n• تمرير this والوسائط بشكل صحيح (function عادية لا سهمية في debounced حتى يعمل apply(this)).\n• دالة cancel للتنظيف عند إزالة المكوّن — وإلا ينفّذ المؤقت بعد الإزالة.\n\nأسئلة متابعة محتملة: كيف تضيف خيار leading (التنفيذ الفوري ثم التجاهل)؟ وكيف تعيد Promise بالنتيجة؟ وما الفرق عن throttle؟',
      en: '```js\nfunction debounce(fn, delay) {\n  let timer = null;\n\n  function debounced(...args) {\n    clearTimeout(timer);\n    timer = setTimeout(() => {\n      timer = null;\n      fn.apply(this, args);\n    }, delay);\n  }\n\n  debounced.cancel = () => {\n    clearTimeout(timer);\n    timer = null;\n  };\n\n  return debounced;\n}\n```\n\nWhat the interviewer listens for:\n• The closure holding the timer between calls — that is the heart of the solution.\n• Forwarding this and the arguments correctly (a regular function, not an arrow, for debounced so apply(this) works).\n• A cancel method for cleanup on unmount — otherwise the timer fires after the component is gone.\n\nLikely follow-ups: how would you add a leading option (fire immediately, then ignore)? How would you return a promise with the result? How does it differ from throttle?',
    },
    keyPoints: [
      { ar: 'closure تحتفظ بالمؤقت', en: 'A closure holding the timer', terms: ['closure', 'timer', 'مؤقت', 'settimeout', 'cleartimeout', 'let'] },
      { ar: 'إلغاء المؤقت السابق', en: 'Clearing the previous timer', terms: ['cleartimeout', 'clear', 'إلغاء', 'reset', 'cancel'] },
      { ar: 'تمرير this والوسائط', en: 'Forwarding this and args', terms: ['apply', 'args', 'وسائط', 'this', '...args', 'rest'] },
    ],
  },
  {
    id: 'code-js-throttle',
    difficulty: intermediate,
    kind: 'coding',
    depth: 'apply',
    code: `function throttle(fn, limit) {
  // your implementation
}`,
    question: {
      ar: 'نفّذ دالة throttle تسمح باستدعاء fn مرة واحدة على الأكثر كل limit مللي ثانية.',
      en: 'Implement throttle: allow fn to run at most once every limit milliseconds.',
    },
    answer: {
      ar: '```js\nfunction throttle(fn, limit) {\n  let lastCall = 0;\n  let trailingTimer = null;\n  let lastArgs = null;\n\n  return function throttled(...args) {\n    const now = Date.now();\n    const remaining = limit - (now - lastCall);\n\n    if (remaining <= 0) {\n      clearTimeout(trailingTimer);\n      trailingTimer = null;\n      lastCall = now;\n      fn.apply(this, args);\n    } else {\n      // احتفظ بآخر استدعاء لينفَّذ عند انتهاء الفترة\n      lastArgs = args;\n      if (!trailingTimer) {\n        trailingTimer = setTimeout(() => {\n          lastCall = Date.now();\n          trailingTimer = null;\n          fn.apply(this, lastArgs);\n        }, remaining);\n      }\n    }\n  };\n}\n```\n\nما يبحث عنه المقابِل:\n• الفرق الجوهري عن debounce: التنفيذ بمعدل ثابت أثناء الأحداث، لا الانتظار حتى توقفها.\n• التنفيذ الأخير (trailing): بدونه يضيع آخر حدث — مثل آخر موضع تمرير — وهذا خطأ شائع في التنفيذ البسيط.\n• أبسط نسخة بعلم منطقي مقبولة كبداية، لكن يجب أن تعرف ما تفقده.\n\nأسئلة متابعة: متى تفضّل throttle على debounce؟ (التمرير وتغيير الحجم مقابل البحث أثناء الكتابة). ولماذا requestAnimationFrame أحيانًا أفضل من throttle للرسوم؟',
      en: '```js\nfunction throttle(fn, limit) {\n  let lastCall = 0;\n  let trailingTimer = null;\n  let lastArgs = null;\n\n  return function throttled(...args) {\n    const now = Date.now();\n    const remaining = limit - (now - lastCall);\n\n    if (remaining <= 0) {\n      clearTimeout(trailingTimer);\n      trailingTimer = null;\n      lastCall = now;\n      fn.apply(this, args);\n    } else {\n      // keep the latest call to run when the window ends\n      lastArgs = args;\n      if (!trailingTimer) {\n        trailingTimer = setTimeout(() => {\n          lastCall = Date.now();\n          trailingTimer = null;\n          fn.apply(this, lastArgs);\n        }, remaining);\n      }\n    }\n  };\n}\n```\n\nWhat the interviewer listens for:\n• The essential difference from debounce: firing at a steady rate during events, not waiting for them to stop.\n• The trailing call: without it the final event — such as the last scroll position — is lost, a common bug in naive implementations.\n• A simpler boolean-flag version is acceptable as a start, but you should know what it drops.\n\nFollow-ups: when do you prefer throttle over debounce? (scroll and resize versus type-ahead search). Why is requestAnimationFrame sometimes better than throttle for visual work?',
    },
    keyPoints: [
      { ar: 'تتبع وقت آخر استدعاء', en: 'Tracking the last call time', terms: ['last', 'آخر', 'date.now', 'timestamp', 'elapsed', 'remaining'] },
      { ar: 'تنفيذ بمعدل ثابت لا بعد التوقف', en: 'Fixed rate, not after events stop', terms: ['rate', 'معدل', 'at most', 'once per', 'interval', 'فترة'] },
      { ar: 'التنفيذ الأخير (trailing)', en: 'The trailing call', terms: ['trailing', 'last event', 'آخر حدث', 'final', 'أخير'] },
    ],
  },
  {
    id: 'code-js-flatten',
    difficulty: beginner,
    kind: 'coding',
    depth: 'apply',
    code: `flatten([1, [2, [3, [4]], 5]]); // -> [1, 2, 3, 4, 5]`,
    question: {
      ar: 'اكتب دالة flatten تسطّح مصفوفة متداخلة بأي عمق، دون استخدام Array.prototype.flat.',
      en: 'Write flatten for an array nested to any depth, without using Array.prototype.flat.',
    },
    answer: {
      ar: '```js\n// تكرارية — الأوضح\nfunction flatten(arr) {\n  const result = [];\n  for (const item of arr) {\n    if (Array.isArray(item)) result.push(...flatten(item));\n    else result.push(item);\n  }\n  return result;\n}\n\n// تكرارية بـ reduce\nconst flatten2 = (arr) =>\n  arr.reduce((acc, item) => acc.concat(Array.isArray(item) ? flatten2(item) : item), []);\n\n// بمكدّس (بلا تكرار ذاتي) — آمنة للتداخل العميق جدًا\nfunction flatten3(arr) {\n  const stack = [...arr];\n  const result = [];\n  while (stack.length) {\n    const item = stack.pop();\n    if (Array.isArray(item)) stack.push(...item);\n    else result.push(item);\n  }\n  return result.reverse();\n}\n```\n\nما يبحث عنه المقابِل:\n• Array.isArray لا typeof (typeof [] يعطي "object").\n• معالجة أي عمق، لا مستوى واحد.\n• الوعي بأن التكرار الذاتي قد يتجاوز حجم الـ stack مع تداخل عميق جدًا — والحل بالمكدّس.\n\nمتابعة: أضف معامل depth كما في flat(depth). وما الفرق بين هذا وflatMap؟',
      en: '```js\n// recursive — the clearest\nfunction flatten(arr) {\n  const result = [];\n  for (const item of arr) {\n    if (Array.isArray(item)) result.push(...flatten(item));\n    else result.push(item);\n  }\n  return result;\n}\n\n// recursive with reduce\nconst flatten2 = (arr) =>\n  arr.reduce((acc, item) => acc.concat(Array.isArray(item) ? flatten2(item) : item), []);\n\n// iterative with a stack — safe for extremely deep nesting\nfunction flatten3(arr) {\n  const stack = [...arr];\n  const result = [];\n  while (stack.length) {\n    const item = stack.pop();\n    if (Array.isArray(item)) stack.push(...item);\n    else result.push(item);\n  }\n  return result.reverse();\n}\n```\n\nWhat the interviewer listens for:\n• Array.isArray, not typeof (typeof [] is "object").\n• Handling any depth, not just one level.\n• Awareness that recursion can overflow the stack on very deep nesting — and the iterative alternative.\n\nFollow-up: add a depth parameter like flat(depth). How does this differ from flatMap?',
    },
    keyPoints: [
      { ar: 'Array.isArray للفحص', en: 'Array.isArray for the check', terms: ['array.isarray', 'isarray'] },
      { ar: 'التكرار الذاتي أو مكدّس', en: 'Recursion or a stack', terms: ['recurs', 'تكرار', 'stack', 'مكدس', 'loop', 'while'] },
      { ar: 'أي عمق', en: 'Any depth', terms: ['depth', 'عمق', 'nested', 'متداخل', 'any level'] },
    ],
  },
  {
    id: 'code-js-deep-clone',
    difficulty: intermediate,
    kind: 'coding',
    depth: 'apply',
    code: `function deepClone(value) {
  // handle objects, arrays, Date, Map, Set and circular references
}`,
    question: {
      ar: 'نفّذ دالة deepClone تنسخ كائنًا بعمق وتتعامل مع المراجع الدائرية.',
      en: 'Implement deepClone that copies an object deeply and handles circular references.',
    },
    answer: {
      ar: '```js\nfunction deepClone(value, seen = new WeakMap()) {\n  if (value === null || typeof value !== \'object\') return value;   // أولي أو دالة\n\n  if (seen.has(value)) return seen.get(value);   // مرجع دائري\n\n  if (value instanceof Date) return new Date(value);\n  if (value instanceof RegExp) return new RegExp(value.source, value.flags);\n\n  if (value instanceof Map) {\n    const copy = new Map();\n    seen.set(value, copy);\n    for (const [k, v] of value) copy.set(deepClone(k, seen), deepClone(v, seen));\n    return copy;\n  }\n\n  if (value instanceof Set) {\n    const copy = new Set();\n    seen.set(value, copy);\n    for (const v of value) copy.add(deepClone(v, seen));\n    return copy;\n  }\n\n  const copy = Array.isArray(value) ? [] : Object.create(Object.getPrototypeOf(value));\n  seen.set(value, copy);\n  for (const key of Reflect.ownKeys(value)) {\n    copy[key] = deepClone(value[key], seen);\n  }\n  return copy;\n}\n```\n\nما يبحث عنه المقابِل:\n• WeakMap لتتبع الكائنات المنسوخة — يحل المراجع الدائرية ويحفظ الهوية المشتركة (نفس الكائن المشار إليه مرتين يُنسخ مرة واحدة).\n• الأنواع الخاصة: Date وMap وSet وRegExp لا تُنسخ بـ for...in.\n• الحفاظ على الـ prototype.\n\nوالإجابة الواقعية التي يجب قولها: في الإنتاج استخدم structuredClone المدمج — يتعامل مع كل هذا ما عدا الدوال. هذا التمرين لفهم الآلية.',
      en: '```js\nfunction deepClone(value, seen = new WeakMap()) {\n  if (value === null || typeof value !== \'object\') return value;   // primitive or function\n\n  if (seen.has(value)) return seen.get(value);   // circular reference\n\n  if (value instanceof Date) return new Date(value);\n  if (value instanceof RegExp) return new RegExp(value.source, value.flags);\n\n  if (value instanceof Map) {\n    const copy = new Map();\n    seen.set(value, copy);\n    for (const [k, v] of value) copy.set(deepClone(k, seen), deepClone(v, seen));\n    return copy;\n  }\n\n  if (value instanceof Set) {\n    const copy = new Set();\n    seen.set(value, copy);\n    for (const v of value) copy.add(deepClone(v, seen));\n    return copy;\n  }\n\n  const copy = Array.isArray(value) ? [] : Object.create(Object.getPrototypeOf(value));\n  seen.set(value, copy);\n  for (const key of Reflect.ownKeys(value)) {\n    copy[key] = deepClone(value[key], seen);\n  }\n  return copy;\n}\n```\n\nWhat the interviewer listens for:\n• A WeakMap tracking already-copied objects — it solves circular references and preserves shared identity (the same object referenced twice is copied once).\n• Special types: Date, Map, Set and RegExp are not handled by a plain for...in.\n• Preserving the prototype.\n\nAnd the realistic point to make: in production use the built-in structuredClone — it handles all of this except functions. This exercise is about understanding the mechanism.',
    },
    keyPoints: [
      { ar: 'WeakMap للمراجع الدائرية', en: 'WeakMap for circular references', terms: ['weakmap', 'seen', 'visited', 'circular', 'دائري', 'map'] },
      { ar: 'التمييز بين الأولي والكائن', en: 'Primitive vs object check', terms: ['typeof', 'primitive', 'أولي', 'null', 'object'] },
      { ar: 'الأنواع الخاصة: Date/Map/Set', en: 'Special types: Date, Map, Set', terms: ['date', 'map', 'set', 'instanceof', 'regexp'] },
      { ar: 'structuredClone في الإنتاج', en: 'structuredClone in production', terms: ['structuredclone', 'built-in', 'مدمج'] },
    ],
  },
  {
    id: 'code-js-group-by',
    difficulty: beginner,
    kind: 'coding',
    depth: 'apply',
    code: `groupBy(users, 'country');
// -> { EG: [...], SA: [...] }
groupBy(users, (u) => u.age >= 18 ? 'adult' : 'minor');`,
    question: {
      ar: 'اكتب دالة groupBy تجمّع مصفوفة كائنات حسب خاصية أو دالة مفتاح.',
      en: 'Write groupBy that groups an array of objects by a property or a key function.',
    },
    answer: {
      ar: '```js\nfunction groupBy(items, keyOrFn) {\n  const getKey = typeof keyOrFn === \'function\' ? keyOrFn : (item) => item[keyOrFn];\n\n  return items.reduce((groups, item) => {\n    const key = getKey(item);\n    (groups[key] ??= []).push(item);\n    return groups;\n  }, {});\n}\n\n// نسخة تعيد Map — أفضل للمفاتيح غير النصية وللحفاظ على الترتيب\nfunction groupByMap(items, getKey) {\n  const groups = new Map();\n  for (const item of items) {\n    const key = getKey(item);\n    if (!groups.has(key)) groups.set(key, []);\n    groups.get(key).push(item);\n  }\n  return groups;\n}\n```\n\nما يبحث عنه المقابِل:\n• دعم الخاصية والدالة معًا بواجهة واحدة.\n• ??= (أو فحص الوجود) لإنشاء المجموعة عند أول ظهور.\n• الوعي بأن مفاتيح الكائن تتحول إلى نصوص — Map يحفظ الأنواع.\n• الحل بحلقة واحدة O(n)، لا filter داخل حلقة O(n²).\n\nمتابعة: Object.groupBy وMap.groupBy أصبحا مدمجين في ES2024 — هل تعرفهما؟',
      en: '```js\nfunction groupBy(items, keyOrFn) {\n  const getKey = typeof keyOrFn === \'function\' ? keyOrFn : (item) => item[keyOrFn];\n\n  return items.reduce((groups, item) => {\n    const key = getKey(item);\n    (groups[key] ??= []).push(item);\n    return groups;\n  }, {});\n}\n\n// a Map version — better for non-string keys and preserves insertion order\nfunction groupByMap(items, getKey) {\n  const groups = new Map();\n  for (const item of items) {\n    const key = getKey(item);\n    if (!groups.has(key)) groups.set(key, []);\n    groups.get(key).push(item);\n  }\n  return groups;\n}\n```\n\nWhat the interviewer listens for:\n• Supporting both a property name and a function with one API.\n• ??= (or an existence check) to create the group on first sight.\n• Awareness that object keys become strings — Map preserves the type.\n• A single O(n) pass, not filter inside a loop (O(n²)).\n\nFollow-up: Object.groupBy and Map.groupBy landed in ES2024 — do you know them?',
    },
    keyPoints: [
      { ar: 'reduce أو حلقة واحدة', en: 'reduce or a single loop', terms: ['reduce', 'loop', 'حلقة', 'for', 'o(n)'] },
      { ar: 'إنشاء المجموعة عند أول ظهور', en: 'Create the group on first sight', terms: ['??=', '||', 'if (!', 'exists', 'initialize', 'إنشاء', 'has('] },
      { ar: 'دعم دالة مفتاح', en: 'Supporting a key function', terms: ['function', 'دالة', 'typeof', 'callback', 'getkey'] },
    ],
  },
  {
    id: 'code-js-unique',
    difficulty: beginner,
    kind: 'coding',
    depth: 'apply',
    code: `unique([1, 2, 2, 3]);                          // [1, 2, 3]
uniqueBy(users, (u) => u.email);              // one user per email`,
    question: {
      ar: 'اكتب دالة تزيل التكرار من مصفوفة، ثم نسخة تزيل التكرار حسب مفتاح.',
      en: 'Write a function that removes duplicates from an array, then a version that de-duplicates by key.',
    },
    answer: {
      ar: '```js\nconst unique = (arr) => [...new Set(arr)];\n\nfunction uniqueBy(arr, getKey) {\n  const seen = new Set();\n  return arr.filter((item) => {\n    const key = getKey(item);\n    if (seen.has(key)) return false;\n    seen.add(key);\n    return true;\n  });\n}\n\n// أو بـ Map مع الاحتفاظ بالأخير بدل الأول\nconst uniqueByLast = (arr, getKey) =>\n  [...new Map(arr.map((item) => [getKey(item), item])).values()];\n```\n\nما يبحث عنه المقابِل:\n• Set للأنواع الأولية: O(n) وسطر واحد.\n• لماذا لا يعمل Set مع الكائنات (مقارنة بالمرجع) — ومن هنا الحاجة لـ uniqueBy.\n• الوعي بأن indexOf داخل filter يعطي O(n²).\n• أي عنصر يُحتفظ به عند التكرار: الأول أم الأخير؟ سؤال يجب طرحه.\n\nمتابعة: كيف تزيل التكرار حسب أكثر من مفتاح؟ (مفتاح مركّب بـ JSON.stringify أو فاصل).',
      en: '```js\nconst unique = (arr) => [...new Set(arr)];\n\nfunction uniqueBy(arr, getKey) {\n  const seen = new Set();\n  return arr.filter((item) => {\n    const key = getKey(item);\n    if (seen.has(key)) return false;\n    seen.add(key);\n    return true;\n  });\n}\n\n// or with a Map, keeping the last occurrence instead of the first\nconst uniqueByLast = (arr, getKey) =>\n  [...new Map(arr.map((item) => [getKey(item), item])).values()];\n```\n\nWhat the interviewer listens for:\n• Set for primitives: O(n) and one line.\n• Why Set does not work for objects (reference comparison) — hence uniqueBy.\n• Awareness that indexOf inside filter is O(n²).\n• Which item is kept on a duplicate, first or last? A question worth asking.\n\nFollow-up: how do you de-duplicate by several keys? (a composite key via JSON.stringify or a separator).',
    },
    keyPoints: [
      { ar: 'Set للأنواع الأولية', en: 'Set for primitives', terms: ['set', 'new set', 'spread'] },
      { ar: 'Set المرئي للمفاتيح مع filter', en: 'A seen set with filter', terms: ['seen', 'has', 'filter', 'key', 'مفتاح', 'map'] },
      { ar: 'الكائنات تُقارن بالمرجع', en: 'Objects compare by reference', terms: ['reference', 'مرجع', 'object', 'كائن', 'o(n²)', 'indexof'] },
    ],
  },
  {
    id: 'code-js-memoize',
    difficulty: intermediate,
    kind: 'coding',
    depth: 'apply',
    code: `const slowSquare = (n) => { /* expensive */ return n * n; };
const fastSquare = memoize(slowSquare);
fastSquare(4); // computes
fastSquare(4); // cached`,
    question: {
      ar: 'نفّذ دالة memoize عامة تخزّن نتائج الدالة حسب وسائطها.',
      en: 'Implement a generic memoize that caches a function\'s results by its arguments.',
    },
    answer: {
      ar: '```js\nfunction memoize(fn, resolver = (...args) => JSON.stringify(args)) {\n  const cache = new Map();\n\n  const memoized = function (...args) {\n    const key = resolver(...args);\n    if (cache.has(key)) return cache.get(key);\n    const result = fn.apply(this, args);\n    cache.set(key, result);\n    return result;\n  };\n\n  memoized.cache = cache;\n  memoized.clear = () => cache.clear();\n  return memoized;\n}\n\n// للوسيط الواحد الكائني: WeakMap حتى لا يمنع التحرير\nfunction memoizeByObject(fn) {\n  const cache = new WeakMap();\n  return (obj) => {\n    if (cache.has(obj)) return cache.get(obj);\n    const result = fn(obj);\n    cache.set(obj, result);\n    return result;\n  };\n}\n```\n\nما يبحث عنه المقابِل:\n• Map لا كائن عادي (يدعم أي مفتاح ولا يتعارض مع prototype).\n• مشكلة المفتاح: JSON.stringify مكلف ويفشل مع الدوال والمراجع الدائرية ولا يميّز ترتيب الخصائص — لذلك resolver قابل للتخصيص.\n• الشرط: الدالة يجب أن تكون نقية وإلا كانت النتائج المخزنة خاطئة.\n• الـ cache بلا حد هو تسريب ذاكرة — اذكر LRU أو حدًا أقصى.\n\nمتابعة: كيف تخزّن نتائج دالة async دون تخزين الـ Promise المرفوضة؟',
      en: '```js\nfunction memoize(fn, resolver = (...args) => JSON.stringify(args)) {\n  const cache = new Map();\n\n  const memoized = function (...args) {\n    const key = resolver(...args);\n    if (cache.has(key)) return cache.get(key);\n    const result = fn.apply(this, args);\n    cache.set(key, result);\n    return result;\n  };\n\n  memoized.cache = cache;\n  memoized.clear = () => cache.clear();\n  return memoized;\n}\n\n// for a single object argument: WeakMap so the cache does not pin it\nfunction memoizeByObject(fn) {\n  const cache = new WeakMap();\n  return (obj) => {\n    if (cache.has(obj)) return cache.get(obj);\n    const result = fn(obj);\n    cache.set(obj, result);\n    return result;\n  };\n}\n```\n\nWhat the interviewer listens for:\n• A Map rather than a plain object (any key type, no prototype collisions).\n• The key problem: JSON.stringify is expensive, breaks on functions and circular references, and ignores property order — hence a customisable resolver.\n• The precondition: the function must be pure, or cached results are wrong.\n• An unbounded cache is a memory leak — mention an LRU or a maximum size.\n\nFollow-up: how do you memoize an async function without caching a rejected promise?',
    },
    keyPoints: [
      { ar: 'Map كمخزن', en: 'A Map as the store', terms: ['map', 'cache', 'تخزين', 'has(', 'get('] },
      { ar: 'توليد المفتاح من الوسائط', en: 'Deriving a key from the arguments', terms: ['key', 'مفتاح', 'json.stringify', 'resolver', 'args'] },
      { ar: 'الدالة يجب أن تكون نقية', en: 'The function must be pure', terms: ['pure', 'نقي', 'deterministic', 'side effect'] },
      { ar: 'حد للذاكرة / LRU', en: 'Memory bound / LRU', terms: ['lru', 'leak', 'تسريب', 'unbounded', 'limit', 'حد', 'weakmap'] },
    ],
  },
  {
    id: 'code-js-promise-all',
    difficulty: intermediate,
    kind: 'coding',
    depth: 'apply',
    code: `function promiseAll(promises) {
  // resolve with all results in order, reject on first failure
}`,
    question: {
      ar: 'نفّذ Promise.all من الصفر.',
      en: 'Implement Promise.all from scratch.',
    },
    answer: {
      ar: '```js\nfunction promiseAll(iterable) {\n  return new Promise((resolve, reject) => {\n    const items = [...iterable];\n    const results = new Array(items.length);\n    let remaining = items.length;\n\n    if (remaining === 0) return resolve(results);\n\n    items.forEach((item, index) => {\n      Promise.resolve(item).then(\n        (value) => {\n          results[index] = value;          // الترتيب بالفهرس لا بوقت الوصول\n          if (--remaining === 0) resolve(results);\n        },\n        reject                             // أول فشل يرفض الكل\n      );\n    });\n  });\n}\n```\n\nما يبحث عنه المقابِل:\n• حفظ النتائج بالفهرس الأصلي — الـ Promises تستقر بترتيب عشوائي.\n• عدّاد للمتبقي بدل فحص results.length (المصفوفة المُهيّأة طولها ثابت من البداية).\n• Promise.resolve لقبول القيم العادية وليس الـ Promises فقط.\n• الحالة الحدية: مصفوفة فارغة تُحل فورًا.\n• الرفض عند أول فشل، والباقي يكمل في الخلفية دون إلغاء.\n\nمتابعة: نفّذ allSettled (لا رفض أبدًا) وrace وany. وكيف تحدّ التزامن (تشغيل 5 فقط في كل مرة)؟',
      en: '```js\nfunction promiseAll(iterable) {\n  return new Promise((resolve, reject) => {\n    const items = [...iterable];\n    const results = new Array(items.length);\n    let remaining = items.length;\n\n    if (remaining === 0) return resolve(results);\n\n    items.forEach((item, index) => {\n      Promise.resolve(item).then(\n        (value) => {\n          results[index] = value;          // ordered by index, not arrival time\n          if (--remaining === 0) resolve(results);\n        },\n        reject                             // first failure rejects everything\n      );\n    });\n  });\n}\n```\n\nWhat the interviewer listens for:\n• Storing results by original index — promises settle in arbitrary order.\n• A remaining counter rather than checking results.length (the pre-sized array has a fixed length from the start).\n• Promise.resolve so plain values are accepted, not only promises.\n• The edge case: an empty array resolves immediately.\n• Rejecting on the first failure, with the rest continuing in the background, uncancelled.\n\nFollow-up: implement allSettled (never rejects), race and any. And how would you cap concurrency (run only 5 at a time)?',
    },
    keyPoints: [
      { ar: 'النتائج بالفهرس', en: 'Results by index', terms: ['index', 'فهرس', 'order', 'ترتيب', 'results[i]', 'position'] },
      { ar: 'عدّاد المتبقي', en: 'A remaining counter', terms: ['counter', 'عداد', 'remaining', 'completed', 'count', 'pending'] },
      { ar: 'الرفض عند أول فشل', en: 'Reject on first failure', terms: ['reject', 'first', 'أول', 'fail', 'فشل', 'catch'] },
      { ar: 'الحالة الفارغة و Promise.resolve', en: 'Empty case and Promise.resolve', terms: ['empty', 'فارغ', 'length === 0', 'promise.resolve', 'non-promise'] },
    ],
  },
  {
    id: 'code-js-event-emitter',
    difficulty: intermediate,
    kind: 'coding',
    depth: 'apply',
    code: `const emitter = new EventEmitter();
const off = emitter.on('save', (data) => console.log(data));
emitter.once('save', () => console.log('first only'));
emitter.emit('save', { id: 1 });
off();`,
    question: {
      ar: 'نفّذ صنف EventEmitter يدعم on و off و once و emit.',
      en: 'Implement an EventEmitter class supporting on, off, once and emit.',
    },
    answer: {
      ar: '```js\nclass EventEmitter {\n  #listeners = new Map();   // event -> Set<listener>\n\n  on(event, listener) {\n    if (!this.#listeners.has(event)) this.#listeners.set(event, new Set());\n    this.#listeners.get(event).add(listener);\n    return () => this.off(event, listener);     // دالة إلغاء للراحة\n  }\n\n  off(event, listener) {\n    this.#listeners.get(event)?.delete(listener);\n  }\n\n  once(event, listener) {\n    const wrapper = (...args) => {\n      this.off(event, wrapper);\n      listener(...args);\n    };\n    wrapper.original = listener;   // ليعمل off(event, listener) الأصلي أيضًا\n    return this.on(event, wrapper);\n  }\n\n  emit(event, ...args) {\n    const listeners = this.#listeners.get(event);\n    if (!listeners) return false;\n    // نسخة حتى لا يكسر off أثناء التكرار\n    for (const listener of [...listeners]) listener(...args);\n    return true;\n  }\n}\n```\n\nما يبحث عنه المقابِل:\n• Map من الحدث إلى Set — Set يمنع تكرار نفس المستمع ويجعل الحذف O(1).\n• once عبر غلاف يزيل نفسه قبل الاستدعاء (قبل، لا بعد — حتى لا يُستدعى مرتين إن أطلق emit من داخله).\n• النسخ قبل التكرار في emit: إزالة مستمع أثناء التكرار على Set تسبب سلوكًا غير متوقع.\n• إعادة دالة إلغاء من on — نمط مريح جدًا في React useEffect.\n\nمتابعة: كيف تتعامل مع خطأ يرميه مستمع دون إيقاف بقية المستمعين؟ وكيف تضيف دعم wildcard؟',
      en: '```js\nclass EventEmitter {\n  #listeners = new Map();   // event -> Set<listener>\n\n  on(event, listener) {\n    if (!this.#listeners.has(event)) this.#listeners.set(event, new Set());\n    this.#listeners.get(event).add(listener);\n    return () => this.off(event, listener);     // an unsubscribe function for convenience\n  }\n\n  off(event, listener) {\n    this.#listeners.get(event)?.delete(listener);\n  }\n\n  once(event, listener) {\n    const wrapper = (...args) => {\n      this.off(event, wrapper);\n      listener(...args);\n    };\n    wrapper.original = listener;   // so off(event, listener) with the original also works\n    return this.on(event, wrapper);\n  }\n\n  emit(event, ...args) {\n    const listeners = this.#listeners.get(event);\n    if (!listeners) return false;\n    // copy so an off() during iteration cannot break it\n    for (const listener of [...listeners]) listener(...args);\n    return true;\n  }\n}\n```\n\nWhat the interviewer listens for:\n• A Map of event → Set — a Set prevents duplicate listeners and makes removal O(1).\n• once via a wrapper that removes itself before calling (before, not after — so it cannot run twice if emit is triggered from inside it).\n• Copying before iterating in emit: removing a listener while iterating a Set causes surprising behaviour.\n• Returning an unsubscribe function from on — a very convenient pattern for React useEffect.\n\nFollow-up: how do you handle a listener throwing without stopping the others? How would you add wildcard support?',
    },
    keyPoints: [
      { ar: 'Map/Set لتخزين المستمعين', en: 'Map/Set for listeners', terms: ['map', 'set', 'listeners', 'مستمع', 'array'] },
      { ar: 'once بغلاف يزيل نفسه', en: 'once via a self-removing wrapper', terms: ['wrapper', 'غلاف', 'once', 'remove itself', 'off(', 'delete'] },
      { ar: 'النسخ قبل التكرار في emit', en: 'Copy before iterating in emit', terms: ['copy', 'نسخ', 'slice', 'spread', 'iterat', 'during', 'أثناء'] },
      { ar: 'إعادة دالة إلغاء', en: 'Return an unsubscribe function', terms: ['unsubscribe', 'إلغاء', 'return () =>', 'cleanup'] },
    ],
  },

  // ------------------------------------------------------------------ REACT
  {
    id: 'code-react-searchable-list',
    difficulty: beginner,
    kind: 'coding',
    depth: 'apply',
    code: `<SearchableList items={users} />
// renders an input and the users whose name matches, case-insensitive`,
    question: {
      ar: 'ابنِ مكوّن SearchableList يعرض حقل بحث وقائمة تُفلتر أثناء الكتابة.',
      en: 'Build a SearchableList component: a search input and a list that filters as you type.',
    },
    answer: {
      ar: '```jsx\nfunction SearchableList({ items, getLabel = (item) => item.name }) {\n  const [query, setQuery] = useState(\'\');\n\n  const visible = useMemo(() => {\n    const term = query.trim().toLowerCase();\n    if (!term) return items;\n    return items.filter((item) => getLabel(item).toLowerCase().includes(term));\n  }, [items, query, getLabel]);\n\n  return (\n    <div>\n      <label htmlFor="search">Search</label>\n      <input\n        id="search"\n        type="search"\n        value={query}\n        onChange={(e) => setQuery(e.target.value)}\n        placeholder="Type to filter…"\n      />\n      {visible.length === 0 ? (\n        <p role="status">No results</p>\n      ) : (\n        <ul>\n          {visible.map((item) => <li key={item.id}>{getLabel(item)}</li>)}\n        </ul>\n      )}\n    </div>\n  );\n}\n```\n\nما يبحث عنه المقابِل:\n• حقل متحكَّم به والحالة في أدنى مستوى.\n• الفلترة مشتقة أثناء التصيير — لا useEffect ولا حالة ثانية للنتائج.\n• key من هوية العنصر لا الفهرس.\n• label وحالة فارغة وrole="status" لقارئات الشاشة.\n• useMemo مبرر فقط مع قوائم كبيرة؛ لقائمة صغيرة يمكن حذفه.\n\nمتابعة: القائمة فيها 50 ألف عنصر — ماذا تغيّر؟ (virtualization وdebounce وربما الفلترة على الخادم).',
      en: '```jsx\nfunction SearchableList({ items, getLabel = (item) => item.name }) {\n  const [query, setQuery] = useState(\'\');\n\n  const visible = useMemo(() => {\n    const term = query.trim().toLowerCase();\n    if (!term) return items;\n    return items.filter((item) => getLabel(item).toLowerCase().includes(term));\n  }, [items, query, getLabel]);\n\n  return (\n    <div>\n      <label htmlFor="search">Search</label>\n      <input\n        id="search"\n        type="search"\n        value={query}\n        onChange={(e) => setQuery(e.target.value)}\n        placeholder="Type to filter…"\n      />\n      {visible.length === 0 ? (\n        <p role="status">No results</p>\n      ) : (\n        <ul>\n          {visible.map((item) => <li key={item.id}>{getLabel(item)}</li>)}\n        </ul>\n      )}\n    </div>\n  );\n}\n```\n\nWhat the interviewer listens for:\n• A controlled input with state at the lowest level.\n• Filtering derived during render — no useEffect and no second state for results.\n• A key from item identity, not the index.\n• A label, an empty state and role="status" for screen readers.\n• useMemo justified only for large lists; for a small one it can go.\n\nFollow-up: the list has 50,000 items — what changes? (virtualisation, debounce, possibly server-side filtering).',
    },
    keyPoints: [
      { ar: 'حقل متحكَّم به', en: 'A controlled input', terms: ['usestate', 'value=', 'onchange', 'controlled', 'متحكم'] },
      { ar: 'الفلترة مشتقة لا حالة ثانية', en: 'Filtering derived, not a second state', terms: ['filter', 'derive', 'مشتق', 'usememo', 'during render', 'no useeffect'] },
      { ar: 'key وحالة فارغة', en: 'Keys and an empty state', terms: ['key', 'مفتاح', 'empty', 'فارغ', 'no results', 'label'] },
    ],
  },
  {
    id: 'code-react-pagination',
    difficulty: intermediate,
    kind: 'coding',
    depth: 'apply',
    code: `const { page, totalPages, pageItems, next, prev, goTo } = usePagination(items, 10);`,
    question: {
      ar: 'ابنِ hook للتصفح (pagination) على مصفوفة، مع مكوّن أزرار التنقل.',
      en: 'Build a pagination hook over an array, plus a navigation component.',
    },
    answer: {
      ar: '```jsx\nfunction usePagination(items, pageSize = 10) {\n  const [page, setPage] = useState(1);\n  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));\n\n  // إذا تقلصت القائمة، لا تبقَ على صفحة غير موجودة\n  const safePage = Math.min(page, totalPages);\n\n  const pageItems = useMemo(() => {\n    const start = (safePage - 1) * pageSize;\n    return items.slice(start, start + pageSize);\n  }, [items, safePage, pageSize]);\n\n  const goTo = (n) => setPage(Math.min(Math.max(1, n), totalPages));\n\n  return {\n    page: safePage,\n    totalPages,\n    pageItems,\n    next: () => goTo(safePage + 1),\n    prev: () => goTo(safePage - 1),\n    goTo,\n    hasNext: safePage < totalPages,\n    hasPrev: safePage > 1,\n  };\n}\n\nfunction Pagination({ page, totalPages, onChange }) {\n  return (\n    <nav aria-label="Pagination">\n      <button onClick={() => onChange(page - 1)} disabled={page === 1}>Previous</button>\n      <span aria-current="page">Page {page} of {totalPages}</span>\n      <button onClick={() => onChange(page + 1)} disabled={page === totalPages}>Next</button>\n    </nav>\n  );\n}\n```\n\nما يبحث عنه المقابِل:\n• تثبيت الصفحة ضمن الحدود (clamping) بدل الثقة بالمُدخل.\n• الحالة الحدية: القائمة تتقلص فتصبح الصفحة الحالية غير موجودة — الاشتقاق يحلها بلا useEffect.\n• pageItems مشتقة لا مخزّنة.\n• disabled على الأزرار وaria على التنقل.\n• فصل المنطق (hook) عن العرض (مكوّن).\n\nمتابعة: الصفحة يجب أن تبقى في الـ URL — كيف تغيّر الـ hook؟ وماذا عن pagination من الخادم بمؤشر (cursor) بدل offset؟',
      en: '```jsx\nfunction usePagination(items, pageSize = 10) {\n  const [page, setPage] = useState(1);\n  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));\n\n  // if the list shrinks, do not stay on a page that no longer exists\n  const safePage = Math.min(page, totalPages);\n\n  const pageItems = useMemo(() => {\n    const start = (safePage - 1) * pageSize;\n    return items.slice(start, start + pageSize);\n  }, [items, safePage, pageSize]);\n\n  const goTo = (n) => setPage(Math.min(Math.max(1, n), totalPages));\n\n  return {\n    page: safePage,\n    totalPages,\n    pageItems,\n    next: () => goTo(safePage + 1),\n    prev: () => goTo(safePage - 1),\n    goTo,\n    hasNext: safePage < totalPages,\n    hasPrev: safePage > 1,\n  };\n}\n\nfunction Pagination({ page, totalPages, onChange }) {\n  return (\n    <nav aria-label="Pagination">\n      <button onClick={() => onChange(page - 1)} disabled={page === 1}>Previous</button>\n      <span aria-current="page">Page {page} of {totalPages}</span>\n      <button onClick={() => onChange(page + 1)} disabled={page === totalPages}>Next</button>\n    </nav>\n  );\n}\n```\n\nWhat the interviewer listens for:\n• Clamping the page within bounds instead of trusting the input.\n• The edge case where the list shrinks and the current page no longer exists — derivation handles it with no useEffect.\n• pageItems derived, not stored.\n• disabled on the buttons and aria on the nav.\n• Separating logic (hook) from presentation (component).\n\nFollow-up: the page should live in the URL — how does the hook change? And what about server-side cursor-based pagination instead of offset?',
    },
    keyPoints: [
      { ar: 'slice بحساب البداية', en: 'slice with a computed start', terms: ['slice', 'start', 'offset', 'pagesize', 'math.ceil'] },
      { ar: 'تثبيت الصفحة ضمن الحدود', en: 'Clamping the page', terms: ['clamp', 'math.min', 'math.max', 'bounds', 'حدود', 'safe'] },
      { ar: 'الاشتقاق بدل useEffect', en: 'Derive rather than useEffect', terms: ['derive', 'مشتق', 'usememo', 'no useeffect', 'compute'] },
      { ar: 'disabled و aria', en: 'disabled and aria', terms: ['disabled', 'aria', 'nav', 'accessib'] },
    ],
  },
  {
    id: 'code-react-debounced-search',
    difficulty: intermediate,
    kind: 'coding',
    depth: 'apply',
    code: `const { results, isLoading, error } = useSearch(query);
// fetches /api/search?q=... with debounce and request cancellation`,
    question: {
      ar: 'ابنِ hook للبحث يستدعي API مع debounce وإلغاء للطلبات القديمة.',
      en: 'Build a search hook that calls an API with debouncing and cancellation of stale requests.',
    },
    answer: {
      ar: '```jsx\nfunction useDebouncedValue(value, delay = 300) {\n  const [debounced, setDebounced] = useState(value);\n  useEffect(() => {\n    const id = setTimeout(() => setDebounced(value), delay);\n    return () => clearTimeout(id);\n  }, [value, delay]);\n  return debounced;\n}\n\nfunction useSearch(query) {\n  const debouncedQuery = useDebouncedValue(query, 300);\n  const [state, setState] = useState({ status: \'idle\', results: [], error: null });\n\n  useEffect(() => {\n    const term = debouncedQuery.trim();\n    if (!term) {\n      setState({ status: \'idle\', results: [], error: null });\n      return;\n    }\n\n    const controller = new AbortController();\n    setState((s) => ({ ...s, status: \'loading\', error: null }));\n\n    fetch(`/api/search?q=${encodeURIComponent(term)}`, { signal: controller.signal })\n      .then((r) => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); })\n      .then((results) => setState({ status: \'success\', results, error: null }))\n      .catch((error) => {\n        if (error.name === \'AbortError\') return;       // طلب قديم أُلغي عمدًا\n        setState({ status: \'error\', results: [], error });\n      });\n\n    return () => controller.abort();\n  }, [debouncedQuery]);\n\n  return { results: state.results, isLoading: state.status === \'loading\', error: state.error };\n}\n```\n\nما يبحث عنه المقابِل:\n• فصل debounce في hook مستقل قابل لإعادة الاستخدام.\n• الإلغاء في دالة التنظيف: عند تغيّر الاستعلام يُلغى الطلب السابق — هذا ما يمنع الـ race condition.\n• تجاهل AbortError بدل معاملته كخطأ.\n• encodeURIComponent، وفحص res.ok لأن fetch لا يرمي على 404/500.\n• الحالة كاتحاد status بدل ثلاثة أعلام منطقية.\n\nمتابعة: كيف تضيف تخزينًا مؤقتًا للاستعلامات السابقة؟ وفي مشروع حقيقي — لماذا React Query أفضل من كتابة هذا يدويًا؟',
      en: '```jsx\nfunction useDebouncedValue(value, delay = 300) {\n  const [debounced, setDebounced] = useState(value);\n  useEffect(() => {\n    const id = setTimeout(() => setDebounced(value), delay);\n    return () => clearTimeout(id);\n  }, [value, delay]);\n  return debounced;\n}\n\nfunction useSearch(query) {\n  const debouncedQuery = useDebouncedValue(query, 300);\n  const [state, setState] = useState({ status: \'idle\', results: [], error: null });\n\n  useEffect(() => {\n    const term = debouncedQuery.trim();\n    if (!term) {\n      setState({ status: \'idle\', results: [], error: null });\n      return;\n    }\n\n    const controller = new AbortController();\n    setState((s) => ({ ...s, status: \'loading\', error: null }));\n\n    fetch(`/api/search?q=${encodeURIComponent(term)}`, { signal: controller.signal })\n      .then((r) => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); })\n      .then((results) => setState({ status: \'success\', results, error: null }))\n      .catch((error) => {\n        if (error.name === \'AbortError\') return;       // a stale request cancelled on purpose\n        setState({ status: \'error\', results: [], error });\n      });\n\n    return () => controller.abort();\n  }, [debouncedQuery]);\n\n  return { results: state.results, isLoading: state.status === \'loading\', error: state.error };\n}\n```\n\nWhat the interviewer listens for:\n• Debounce separated into its own reusable hook.\n• Cancellation in the cleanup: when the query changes the previous request is aborted — that is what prevents the race condition.\n• Ignoring AbortError rather than treating it as a failure.\n• encodeURIComponent, and checking res.ok because fetch does not throw on 404/500.\n• State as a status union rather than three boolean flags.\n\nFollow-up: how would you add caching of previous queries? And in a real project — why is React Query better than hand-writing this?',
    },
    keyPoints: [
      { ar: 'debounce في hook مستقل', en: 'Debounce in its own hook', terms: ['debounce', 'settimeout', 'usedebounce', 'delay'] },
      { ar: 'AbortController في التنظيف', en: 'AbortController in the cleanup', terms: ['abort', 'controller', 'signal', 'cleanup', 'تنظيف', 'cancel', 'إلغاء'] },
      { ar: 'تجاهل AbortError وفحص res.ok', en: 'Ignore AbortError, check res.ok', terms: ['aborterror', 'res.ok', 'ok', 'status', 'throw'] },
      { ar: 'حالة كاتحاد status', en: 'Status union state', terms: ['status', 'idle', 'loading', 'error', 'success', 'union'] },
    ],
  },
  {
    id: 'code-react-infinite-scroll',
    difficulty: intermediate,
    kind: 'coding',
    depth: 'apply',
    code: `<InfiniteList fetchPage={(cursor) => api.items({ cursor })} />`,
    question: {
      ar: 'نفّذ تمريرًا لا نهائيًا (infinite scroll) يحمّل الصفحة التالية عند الوصول إلى النهاية.',
      en: 'Implement infinite scrolling that loads the next page when the user reaches the end.',
    },
    answer: {
      ar: '```jsx\nfunction InfiniteList({ fetchPage, renderItem }) {\n  const [items, setItems] = useState([]);\n  const [cursor, setCursor] = useState(null);\n  const [hasMore, setHasMore] = useState(true);\n  const [isLoading, setIsLoading] = useState(false);\n  const sentinelRef = useRef(null);\n  const loadingRef = useRef(false);      // يمنع الطلبات المزدوجة دون انتظار إعادة التصيير\n\n  const loadMore = useCallback(async () => {\n    if (loadingRef.current || !hasMore) return;\n    loadingRef.current = true;\n    setIsLoading(true);\n    try {\n      const page = await fetchPage(cursor);\n      setItems((prev) => [...prev, ...page.items]);\n      setCursor(page.nextCursor);\n      setHasMore(page.nextCursor != null);\n    } finally {\n      loadingRef.current = false;\n      setIsLoading(false);\n    }\n  }, [fetchPage, cursor, hasMore]);\n\n  useEffect(() => {\n    const node = sentinelRef.current;\n    if (!node) return;\n    const observer = new IntersectionObserver(\n      ([entry]) => { if (entry.isIntersecting) loadMore(); },\n      { rootMargin: \'300px\' }            // ابدأ التحميل قبل الوصول للنهاية\n    );\n    observer.observe(node);\n    return () => observer.disconnect();\n  }, [loadMore]);\n\n  return (\n    <>\n      <ul>{items.map((item) => <li key={item.id}>{renderItem(item)}</li>)}</ul>\n      {isLoading && <p role="status">Loading…</p>}\n      {hasMore ? <div ref={sentinelRef} aria-hidden /> : <p>End of list</p>}\n    </>\n  );\n}\n```\n\nما يبحث عنه المقابِل:\n• IntersectionObserver لا مستمع scroll — لا يعمل على الخيط الرئيسي مع كل بكسل.\n• حارس ضد الطلبات المتزامنة (loadingRef) — الحالة وحدها تتأخر دورة تصيير.\n• cursor لا offset، لأن offset يكرر ويفوّت عناصر عند تغيّر البيانات.\n• rootMargin للتحميل الاستباقي، وحالة النهاية.\n• disconnect في التنظيف.\n\nمتابعة: بعد 5000 عنصر تصبح الصفحة بطيئة — ما الحل؟ (virtualization: react-window أو @tanstack/virtual).',
      en: '```jsx\nfunction InfiniteList({ fetchPage, renderItem }) {\n  const [items, setItems] = useState([]);\n  const [cursor, setCursor] = useState(null);\n  const [hasMore, setHasMore] = useState(true);\n  const [isLoading, setIsLoading] = useState(false);\n  const sentinelRef = useRef(null);\n  const loadingRef = useRef(false);      // guards against double requests without waiting for a re-render\n\n  const loadMore = useCallback(async () => {\n    if (loadingRef.current || !hasMore) return;\n    loadingRef.current = true;\n    setIsLoading(true);\n    try {\n      const page = await fetchPage(cursor);\n      setItems((prev) => [...prev, ...page.items]);\n      setCursor(page.nextCursor);\n      setHasMore(page.nextCursor != null);\n    } finally {\n      loadingRef.current = false;\n      setIsLoading(false);\n    }\n  }, [fetchPage, cursor, hasMore]);\n\n  useEffect(() => {\n    const node = sentinelRef.current;\n    if (!node) return;\n    const observer = new IntersectionObserver(\n      ([entry]) => { if (entry.isIntersecting) loadMore(); },\n      { rootMargin: \'300px\' }            // start loading before the end is reached\n    );\n    observer.observe(node);\n    return () => observer.disconnect();\n  }, [loadMore]);\n\n  return (\n    <>\n      <ul>{items.map((item) => <li key={item.id}>{renderItem(item)}</li>)}</ul>\n      {isLoading && <p role="status">Loading…</p>}\n      {hasMore ? <div ref={sentinelRef} aria-hidden /> : <p>End of list</p>}\n    </>\n  );\n}\n```\n\nWhat the interviewer listens for:\n• IntersectionObserver rather than a scroll listener — it does not run on the main thread for every pixel.\n• A guard against concurrent requests (loadingRef) — state alone lags by a render cycle.\n• A cursor rather than an offset, because offsets duplicate and skip items when data changes.\n• rootMargin for prefetching, and an end-of-list state.\n• disconnect in the cleanup.\n\nFollow-up: after 5,000 items the page gets slow — what is the fix? (virtualisation: react-window or @tanstack/virtual).',
    },
    keyPoints: [
      { ar: 'IntersectionObserver على عنصر حارس', en: 'IntersectionObserver on a sentinel', terms: ['intersectionobserver', 'observer', 'sentinel', 'حارس', 'isintersecting', 'ref'] },
      { ar: 'منع الطلبات المزدوجة', en: 'Guard against double requests', terms: ['loading', 'guard', 'حارس', 'ref', 'already', 'in flight', 'double'] },
      { ar: 'cursor و hasMore', en: 'Cursor and hasMore', terms: ['cursor', 'hasmore', 'next', 'end', 'نهاية', 'offset'] },
      { ar: 'التنظيف بـ disconnect', en: 'Cleanup with disconnect', terms: ['disconnect', 'unobserve', 'cleanup', 'تنظيف'] },
    ],
  },
  {
    id: 'code-react-modal',
    difficulty: intermediate,
    kind: 'coding',
    depth: 'apply',
    code: `<Modal open={open} onClose={() => setOpen(false)} title="Confirm">
  ...
</Modal>`,
    question: {
      ar: 'ابنِ مكوّن Modal يمكن الوصول إليه: يُغلق بـ Escape وبالنقر خارجه، ويحبس التركيز، ويُعرض عبر portal.',
      en: 'Build an accessible Modal: closes on Escape and outside click, traps focus, and renders through a portal.',
    },
    answer: {
      ar: '```jsx\nfunction Modal({ open, onClose, title, children }) {\n  const dialogRef = useRef(null);\n\n  useEffect(() => {\n    if (!open) return;\n    const previouslyFocused = document.activeElement;\n    const dialog = dialogRef.current;\n\n    // ركّز أول عنصر قابل للتركيز\n    const focusable = dialog.querySelectorAll(\n      \'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])\'\n    );\n    (focusable[0] ?? dialog).focus();\n\n    const onKeyDown = (e) => {\n      if (e.key === \'Escape\') onClose();\n      if (e.key === \'Tab\' && focusable.length) {         // حبس التركيز\n        const first = focusable[0];\n        const last = focusable[focusable.length - 1];\n        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }\n        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }\n      }\n    };\n\n    document.addEventListener(\'keydown\', onKeyDown);\n    document.body.style.overflow = \'hidden\';              // منع تمرير الخلفية\n    return () => {\n      document.removeEventListener(\'keydown\', onKeyDown);\n      document.body.style.overflow = \'\';\n      previouslyFocused?.focus();                          // إعادة التركيز\n    };\n  }, [open, onClose]);\n\n  if (!open) return null;\n\n  return createPortal(\n    <div className="backdrop" onClick={onClose}>\n      <div\n        ref={dialogRef}\n        role="dialog"\n        aria-modal="true"\n        aria-labelledby="modal-title"\n        tabIndex={-1}\n        onClick={(e) => e.stopPropagation()}\n      >\n        <h2 id="modal-title">{title}</h2>\n        {children}\n        <button onClick={onClose}>Close</button>\n      </div>\n    </div>,\n    document.body\n  );\n}\n```\n\nما يبحث عنه المقابِل:\n• createPortal للهروب من overflow وسياقات التكديس.\n• role="dialog" وaria-modal وaria-labelledby.\n• حبس التركيز وإعادته عند الإغلاق — أكثر ما يُنسى.\n• stopPropagation لمنع إغلاق النقر داخل الحوار.\n• التنظيف الكامل.\n\nوالإجابة الناضجة تذكر أن عنصر <dialog> الأصلي مع showModal() يوفّر معظم هذا مجانًا اليوم، وأن مكتبات مثل Radix تفعله بشكل مختبر.',
      en: '```jsx\nfunction Modal({ open, onClose, title, children }) {\n  const dialogRef = useRef(null);\n\n  useEffect(() => {\n    if (!open) return;\n    const previouslyFocused = document.activeElement;\n    const dialog = dialogRef.current;\n\n    // focus the first focusable element\n    const focusable = dialog.querySelectorAll(\n      \'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])\'\n    );\n    (focusable[0] ?? dialog).focus();\n\n    const onKeyDown = (e) => {\n      if (e.key === \'Escape\') onClose();\n      if (e.key === \'Tab\' && focusable.length) {         // focus trap\n        const first = focusable[0];\n        const last = focusable[focusable.length - 1];\n        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }\n        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }\n      }\n    };\n\n    document.addEventListener(\'keydown\', onKeyDown);\n    document.body.style.overflow = \'hidden\';              // stop background scroll\n    return () => {\n      document.removeEventListener(\'keydown\', onKeyDown);\n      document.body.style.overflow = \'\';\n      previouslyFocused?.focus();                          // restore focus\n    };\n  }, [open, onClose]);\n\n  if (!open) return null;\n\n  return createPortal(\n    <div className="backdrop" onClick={onClose}>\n      <div\n        ref={dialogRef}\n        role="dialog"\n        aria-modal="true"\n        aria-labelledby="modal-title"\n        tabIndex={-1}\n        onClick={(e) => e.stopPropagation()}\n      >\n        <h2 id="modal-title">{title}</h2>\n        {children}\n        <button onClick={onClose}>Close</button>\n      </div>\n    </div>,\n    document.body\n  );\n}\n```\n\nWhat the interviewer listens for:\n• createPortal to escape overflow and stacking contexts.\n• role="dialog", aria-modal and aria-labelledby.\n• Trapping focus and restoring it on close — the most commonly forgotten part.\n• stopPropagation so clicks inside do not close it.\n• Complete cleanup.\n\nThe mature answer also notes that the native <dialog> element with showModal() provides most of this for free today, and that libraries such as Radix do it in a battle-tested way.',
    },
    keyPoints: [
      { ar: 'createPortal', en: 'createPortal', terms: ['portal', 'createportal', 'document.body'] },
      { ar: 'Escape والنقر خارجه', en: 'Escape and outside click', terms: ['escape', 'keydown', 'backdrop', 'outside', 'خارج', 'stoppropagation'] },
      { ar: 'حبس التركيز وإعادته', en: 'Focus trap and restore', terms: ['focus', 'تركيز', 'trap', 'حبس', 'restore', 'إعادة', 'tab', 'activeelement'] },
      { ar: 'ARIA: dialog / aria-modal', en: 'ARIA: dialog / aria-modal', terms: ['role="dialog"', 'aria-modal', 'aria-labelledby', 'aria', '<dialog>'] },
    ],
  },
  {
    id: 'code-react-optimize-slow',
    difficulty: advanced,
    kind: 'coding',
    depth: 'debug',
    code: `function Dashboard({ transactions }) {
  const [filter, setFilter] = useState('');
  const [selected, setSelected] = useState(null);

  const total = transactions.reduce((s, t) => s + t.amount, 0);
  const visible = transactions.filter((t) => t.note.includes(filter));

  return (
    <>
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      <p>Total: {total}</p>
      {visible.map((t) => (
        <Row key={t.id} tx={t} selected={selected === t.id}
             onSelect={() => setSelected(t.id)} />
      ))}
    </>
  );
}`,
    question: {
      ar: 'transactions فيها 5000 عنصر والكتابة في الفلتر بطيئة والنقر على صف يعيد تصيير كل الصفوف. حسّن المكوّن مع شرح كل خطوة.',
      en: 'transactions has 5,000 items; typing in the filter is slow and selecting a row re-renders every row. Optimise it, explaining each step.',
    },
    answer: {
      ar: 'أبدأ بالقياس عبر Profiler لأعرف ما يُعاد تصييره فعلًا، ثم أعالج بالترتيب:\n\n1. الحساب المكلف يعاد في كل تصيير — total وvisible يُحسبان مع كل حرف وكل نقرة:\n```jsx\nconst total = useMemo(() => transactions.reduce((s, t) => s + t.amount, 0), [transactions]);\nconst visible = useMemo(\n  () => transactions.filter((t) => t.note.includes(filter)),\n  [transactions, filter]\n);\n```\n\n2. النقر على صف يغيّر selected فيُعاد تصيير الأب وكل الصفوف. الصفوف تحتاج memo، لكن onSelect دالة جديدة لكل صف في كل تصيير فيبطل memo. الحل: تمرير المعرّف والدالة الثابتة:\n```jsx\nconst Row = memo(function Row({ tx, selected, onSelect }) { ... });\n\nconst handleSelect = useCallback((id) => setSelected(id), []);\n// في Row: onClick={() => onSelect(tx.id)}\n<Row key={t.id} tx={t} selected={selected === t.id} onSelect={handleSelect} />\n```\nالآن عند النقر يُعاد تصيير صفين فقط: القديم والجديد (اللذان تغيّر selected لهما).\n\n3. الكتابة تفلتر 5000 عنصر مع كل حرف. نجعل التصفية غير عاجلة حتى يبقى الحقل متجاوبًا:\n```jsx\nconst deferredFilter = useDeferredValue(filter);\nconst visible = useMemo(() => ..., [transactions, deferredFilter]);\n```\n\n4. وإن ظل بطيئًا: 5000 صف في DOM مشكلة بذاتها — virtualization (react-window) يصيّر المرئي فقط، وهذا غالبًا أكبر مكسب.\n\nما يبحث عنه المقابِل: القياس قبل التحسين، فهم لماذا يفشل memo بلا useCallback، وuseDeferredValue كأداة React 18، ومعرفة أن virtualization هو الحل الجذري للقوائم الضخمة.',
      en: 'I start by profiling to see what actually re-renders, then fix in order:\n\n1. Expensive work repeated every render — total and visible are recomputed on every keystroke and every click:\n```jsx\nconst total = useMemo(() => transactions.reduce((s, t) => s + t.amount, 0), [transactions]);\nconst visible = useMemo(\n  () => transactions.filter((t) => t.note.includes(filter)),\n  [transactions, filter]\n);\n```\n\n2. Selecting a row changes selected, re-rendering the parent and every row. Rows need memo, but onSelect is a new function per row per render, which defeats memo. The fix: pass the id and a stable function:\n```jsx\nconst Row = memo(function Row({ tx, selected, onSelect }) { ... });\n\nconst handleSelect = useCallback((id) => setSelected(id), []);\n// inside Row: onClick={() => onSelect(tx.id)}\n<Row key={t.id} tx={t} selected={selected === t.id} onSelect={handleSelect} />\n```\nNow a click re-renders only two rows: the previously and newly selected ones.\n\n3. Typing filters 5,000 items per keystroke. Make the filtering non-urgent so the input stays responsive:\n```jsx\nconst deferredFilter = useDeferredValue(filter);\nconst visible = useMemo(() => ..., [transactions, deferredFilter]);\n```\n\n4. If it is still slow: 5,000 rows in the DOM is a problem in itself — virtualisation (react-window) renders only what is visible, and that is usually the biggest win.\n\nWhat the interviewer listens for: measuring before optimising, understanding why memo fails without useCallback, useDeferredValue as a React 18 tool, and knowing virtualisation is the real fix for huge lists.',
    },
    keyPoints: [
      { ar: 'القياس أولًا', en: 'Measure first', terms: ['profiler', 'measure', 'قياس', 'devtools'] },
      { ar: 'useMemo للحسابات المكلفة', en: 'useMemo for expensive computations', terms: ['usememo', 'memo', 'reduce', 'filter'] },
      { ar: 'memo + useCallback للصفوف', en: 'memo plus useCallback for rows', terms: ['react.memo', 'memo(', 'usecallback', 'stable', 'ثابت', 'reference', 'مرجع'] },
      { ar: 'useDeferredValue أو virtualization', en: 'useDeferredValue or virtualisation', terms: ['usedeferredvalue', 'usetransition', 'virtual', 'react-window', 'windowing'] },
    ],
  },

  // ---------------------------------------------------------------- NODE.JS
  {
    id: 'code-node-rest-endpoint',
    difficulty: beginner,
    kind: 'coding',
    depth: 'apply',
    code: `// POST /api/products  { name, price }
// GET  /api/products/:id`,
    question: {
      ar: 'اكتب endpoint في Express لإنشاء منتج وجلبه، مع تحقق من المدخلات ورموز حالة صحيحة.',
      en: 'Write Express endpoints to create and fetch a product, with input validation and correct status codes.',
    },
    answer: {
      ar: '```js\nimport express from \'express\';\nimport { z } from \'zod\';\n\nconst router = express.Router();\n\nconst productSchema = z.object({\n  name: z.string().trim().min(1).max(120),\n  price: z.number().positive(),\n});\n\nconst asyncHandler = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);\n\nrouter.post(\'/products\', asyncHandler(async (req, res) => {\n  const parsed = productSchema.safeParse(req.body);\n  if (!parsed.success) {\n    return res.status(400).json({ error: \'VALIDATION_ERROR\', details: parsed.error.flatten() });\n  }\n  const product = await db.products.create(parsed.data);\n  res.status(201).location(`/api/products/${product.id}`).json(product);\n}));\n\nrouter.get(\'/products/:id\', asyncHandler(async (req, res) => {\n  const product = await db.products.findById(req.params.id);\n  if (!product) return res.status(404).json({ error: \'NOT_FOUND\' });\n  res.json(product);\n}));\n\nexport default router;\n```\n\nما يبحث عنه المقابِل:\n• التحقق من المدخلات قبل لمس قاعدة البيانات، بـ schema لا بفحوص يدوية.\n• 201 مع Location للإنشاء، و400 للتحقق، و404 للمفقود — لا 200 للكل.\n• asyncHandler لأن Express 4 لا يلتقط rejections.\n• صيغة خطأ موحّدة برمز مستقر.\n• ما لم يُذكر في الكود لكن يجب قوله: المصادقة كـ middleware، والتحقق من الملكية في التحديث والحذف، وpagination لقائمة المنتجات.\n\nمتابعة: كيف تنفّذ PATCH جزئيًا؟ وكيف تمنع الإنشاء المزدوج عند إعادة إرسال النموذج (idempotency key)؟',
      en: '```js\nimport express from \'express\';\nimport { z } from \'zod\';\n\nconst router = express.Router();\n\nconst productSchema = z.object({\n  name: z.string().trim().min(1).max(120),\n  price: z.number().positive(),\n});\n\nconst asyncHandler = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);\n\nrouter.post(\'/products\', asyncHandler(async (req, res) => {\n  const parsed = productSchema.safeParse(req.body);\n  if (!parsed.success) {\n    return res.status(400).json({ error: \'VALIDATION_ERROR\', details: parsed.error.flatten() });\n  }\n  const product = await db.products.create(parsed.data);\n  res.status(201).location(`/api/products/${product.id}`).json(product);\n}));\n\nrouter.get(\'/products/:id\', asyncHandler(async (req, res) => {\n  const product = await db.products.findById(req.params.id);\n  if (!product) return res.status(404).json({ error: \'NOT_FOUND\' });\n  res.json(product);\n}));\n\nexport default router;\n```\n\nWhat the interviewer listens for:\n• Validating input before touching the database, with a schema rather than manual checks.\n• 201 with Location for creation, 400 for validation, 404 for missing — not 200 for everything.\n• asyncHandler because Express 4 does not catch rejections.\n• A consistent error shape with a stable code.\n• What is not in the code but should be said: auth as middleware, ownership checks on update and delete, pagination for the list endpoint.\n\nFollow-up: how do you implement a partial PATCH? How do you prevent duplicate creation on a resubmitted form (idempotency key)?',
    },
    keyPoints: [
      { ar: 'التحقق بـ schema', en: 'Schema validation', terms: ['zod', 'joi', 'schema', 'validat', 'تحقق', 'safeparse'] },
      { ar: 'رموز الحالة: 201 / 400 / 404', en: 'Status codes: 201, 400, 404', terms: ['201', '400', '404', 'status', 'location'] },
      { ar: 'التقاط الأخطاء غير المتزامنة', en: 'Catching async errors', terms: ['asynchandler', 'catch(next)', 'try', 'next(', 'error middleware'] },
    ],
  },
  {
    id: 'code-node-auth-middleware',
    difficulty: intermediate,
    kind: 'coding',
    depth: 'apply',
    code: `app.get('/me', requireAuth, (req, res) => res.json(req.user));
app.delete('/admin/users/:id', requireAuth, requireRole('admin'), handler);`,
    question: {
      ar: 'اكتب middleware للمصادقة عبر JWT وآخر للتحقق من الدور.',
      en: 'Write an authentication middleware using JWT and a role-check middleware.',
    },
    answer: {
      ar: '```js\nimport jwt from \'jsonwebtoken\';\n\nexport function requireAuth(req, res, next) {\n  // التوكن من cookie httpOnly أولًا، ثم من Authorization كبديل للعملاء البرمجيين\n  const token = req.cookies?.access_token\n    ?? (req.headers.authorization?.startsWith(\'Bearer \') ? req.headers.authorization.slice(7) : null);\n\n  if (!token) return res.status(401).json({ error: \'UNAUTHENTICATED\' });\n\n  try {\n    const payload = jwt.verify(token, process.env.JWT_SECRET, { algorithms: [\'HS256\'] });\n    req.user = { id: payload.sub, role: payload.role };\n    next();\n  } catch (err) {\n    const code = err.name === \'TokenExpiredError\' ? \'TOKEN_EXPIRED\' : \'INVALID_TOKEN\';\n    return res.status(401).json({ error: code });\n  }\n}\n\nexport const requireRole = (...roles) => (req, res, next) => {\n  if (!req.user) return res.status(401).json({ error: \'UNAUTHENTICATED\' });\n  if (!roles.includes(req.user.role)) return res.status(403).json({ error: \'FORBIDDEN\' });\n  next();\n};\n```\n\nما يبحث عنه المقابِل:\n• 401 لغياب/بطلان الهوية و403 لنقص الصلاحية — التمييز الكلاسيكي.\n• تحديد algorithms صراحةً في verify لمنع هجوم "alg: none".\n• التوكن في cookie httpOnly كخيار أول، لا localStorage.\n• التمييز بين توكن منتهٍ وتوكن غير صالح ليتصرف العميل (تجديد مقابل تسجيل دخول).\n• requireRole يعتمد على requireAuth قبله — الترتيب مهم.\n\nما يجب قوله دون كود: التفويض على مستوى الدور لا يكفي — التحقق من ملكية المورد يحدث في المعالج نفسه (هل هذا الطلب يخص هذا المستخدم؟)، وإلا ثغرة IDOR.\n\nمتابعة: كيف تنفّذ refresh token وتبطله عند تسجيل الخروج؟',
      en: '```js\nimport jwt from \'jsonwebtoken\';\n\nexport function requireAuth(req, res, next) {\n  // httpOnly cookie first, Authorization header as a fallback for machine clients\n  const token = req.cookies?.access_token\n    ?? (req.headers.authorization?.startsWith(\'Bearer \') ? req.headers.authorization.slice(7) : null);\n\n  if (!token) return res.status(401).json({ error: \'UNAUTHENTICATED\' });\n\n  try {\n    const payload = jwt.verify(token, process.env.JWT_SECRET, { algorithms: [\'HS256\'] });\n    req.user = { id: payload.sub, role: payload.role };\n    next();\n  } catch (err) {\n    const code = err.name === \'TokenExpiredError\' ? \'TOKEN_EXPIRED\' : \'INVALID_TOKEN\';\n    return res.status(401).json({ error: code });\n  }\n}\n\nexport const requireRole = (...roles) => (req, res, next) => {\n  if (!req.user) return res.status(401).json({ error: \'UNAUTHENTICATED\' });\n  if (!roles.includes(req.user.role)) return res.status(403).json({ error: \'FORBIDDEN\' });\n  next();\n};\n```\n\nWhat the interviewer listens for:\n• 401 for missing/invalid identity and 403 for insufficient permission — the classic distinction.\n• Pinning algorithms in verify to prevent the "alg: none" attack.\n• The token in an httpOnly cookie as the primary option, not localStorage.\n• Distinguishing an expired token from an invalid one so the client can act (refresh versus re-login).\n• requireRole depends on requireAuth running first — order matters.\n\nWhat to say without code: role-level authorization is not enough — resource ownership is checked in the handler itself (does this order belong to this user?), otherwise you have an IDOR.\n\nFollow-up: how do you implement refresh tokens and revoke them on logout?',
    },
    keyPoints: [
      { ar: 'jwt.verify مع algorithms محددة', en: 'jwt.verify with pinned algorithms', terms: ['verify', 'algorithms', 'secret', 'hs256', 'rs256'] },
      { ar: '401 مقابل 403', en: '401 vs 403', terms: ['401', '403', 'unauthenticated', 'forbidden'] },
      { ar: 'req.user للمعالجات اللاحقة', en: 'req.user for downstream handlers', terms: ['req.user', 'attach', 'payload', 'next()'] },
      { ar: 'ملكية المورد ليست دورًا', en: 'Resource ownership beyond roles', terms: ['ownership', 'ملكية', 'idor', 'belongs', 'يخص'] },
    ],
  },
  {
    id: 'code-node-rate-limit',
    difficulty: advanced,
    kind: 'coding',
    depth: 'apply',
    code: `app.use('/api', rateLimit({ windowMs: 60_000, max: 100 }));`,
    question: {
      ar: 'نفّذ middleware لتقييد المعدل (rate limiting) يعمل بشكل صحيح مع عدة نسخ من الخادم.',
      en: 'Implement a rate-limiting middleware that works correctly across multiple server instances.',
    },
    answer: {
      ar: '```js\n// نافذة منزلقة تقريبية على Redis — العدّاد مشترك بين كل النسخ\nexport function rateLimit({ windowMs, max, keyFn = (req) => req.ip }) {\n  return async (req, res, next) => {\n    const key = `ratelimit:${keyFn(req)}`;\n    const windowSec = Math.ceil(windowMs / 1000);\n\n    // INCR + EXPIRE ذريًا في MULTI حتى لا يبقى مفتاح بلا انتهاء\n    const [[, count]] = await redis\n      .multi()\n      .incr(key)\n      .expire(key, windowSec, \'NX\')     // اضبط الانتهاء فقط عند أول زيادة\n      .exec();\n\n    const ttl = await redis.ttl(key);\n    res.setHeader(\'X-RateLimit-Limit\', max);\n    res.setHeader(\'X-RateLimit-Remaining\', Math.max(0, max - count));\n\n    if (count > max) {\n      res.setHeader(\'Retry-After\', ttl);\n      return res.status(429).json({ error: \'RATE_LIMITED\', retryAfter: ttl });\n    }\n    next();\n  };\n}\n\n// للمستخدمين المسجّلين حدّد بالهوية لا بالـ IP\napp.use(\'/api\', rateLimit({ windowMs: 60_000, max: 100, keyFn: (req) => req.user?.id ?? req.ip }));\napp.post(\'/login\', rateLimit({ windowMs: 15 * 60_000, max: 5 }), loginHandler);\n```\n\nما يبحث عنه المقابِل:\n• لماذا لا تصلح الذاكرة المحلية: كل نسخة تسمح بالحد كاملًا، فالحد الفعلي = max × عدد النسخ.\n• الذرية: INCR وEXPIRE معًا، وإلا انهيار بين الأمرين يترك عدّادًا أبديًا.\n• الترويسات القياسية و429 مع Retry-After.\n• app.set(\'trust proxy\') خلف load balancer وإلا كل المستخدمين IP واحد.\n• حد أشد على تسجيل الدخول.\n\nالمقايضة الصادقة: النافذة الثابتة تسمح بضعف الحد على حدود النافذتين؛ token bucket أو sliding log أدق لكن أكثر تعقيدًا. وفي الإنتاج غالبًا تُطبَّق الطبقة الخشنة على الـ gateway وهذه للمنطق الخاص.',
      en: '```js\n// an approximate fixed window on Redis — the counter is shared across all instances\nexport function rateLimit({ windowMs, max, keyFn = (req) => req.ip }) {\n  return async (req, res, next) => {\n    const key = `ratelimit:${keyFn(req)}`;\n    const windowSec = Math.ceil(windowMs / 1000);\n\n    // INCR + EXPIRE atomically in MULTI so no key is left without an expiry\n    const [[, count]] = await redis\n      .multi()\n      .incr(key)\n      .expire(key, windowSec, \'NX\')     // set the expiry only on the first increment\n      .exec();\n\n    const ttl = await redis.ttl(key);\n    res.setHeader(\'X-RateLimit-Limit\', max);\n    res.setHeader(\'X-RateLimit-Remaining\', Math.max(0, max - count));\n\n    if (count > max) {\n      res.setHeader(\'Retry-After\', ttl);\n      return res.status(429).json({ error: \'RATE_LIMITED\', retryAfter: ttl });\n    }\n    next();\n  };\n}\n\n// for authenticated users key by identity rather than IP\napp.use(\'/api\', rateLimit({ windowMs: 60_000, max: 100, keyFn: (req) => req.user?.id ?? req.ip }));\napp.post(\'/login\', rateLimit({ windowMs: 15 * 60_000, max: 5 }), loginHandler);\n```\n\nWhat the interviewer listens for:\n• Why local memory fails: each instance allows the full limit, so the effective limit is max × instance count.\n• Atomicity: INCR and EXPIRE together, otherwise a crash between them leaves a counter that never expires.\n• Standard headers and 429 with Retry-After.\n• app.set(\'trust proxy\') behind a load balancer, otherwise every user is one IP.\n• A stricter limit on login.\n\nThe honest trade-off: a fixed window allows double the limit across a window boundary; token bucket or a sliding log is more accurate but more complex. In production the coarse layer usually lives at the gateway, with this for business-specific limits.',
    },
    keyPoints: [
      { ar: 'العدّاد في Redis المشترك', en: 'A shared Redis counter', terms: ['redis', 'shared', 'مشترك', 'distributed', 'موزع', 'instance', 'نسخ'] },
      { ar: 'INCR + EXPIRE ذريًا', en: 'INCR + EXPIRE atomically', terms: ['incr', 'expire', 'atomic', 'ذري', 'multi', 'ttl'] },
      { ar: '429 مع Retry-After والترويسات', en: '429 with Retry-After and headers', terms: ['429', 'retry-after', 'x-ratelimit', 'header', 'ترويس'] },
      { ar: 'المفتاح: مستخدم أو IP مع trust proxy', en: 'Key by user or IP with trust proxy', terms: ['ip', 'user', 'key', 'مفتاح', 'trust proxy', 'x-forwarded'] },
    ],
  },
  {
    id: 'code-node-file-upload',
    difficulty: intermediate,
    kind: 'coding',
    depth: 'apply',
    code: `// POST /api/avatar  multipart/form-data  field: "avatar"
// accept only jpeg/png up to 2 MB, store safely`,
    question: {
      ar: 'اكتب endpoint آمنًا لرفع صورة شخصية.',
      en: 'Write a safe endpoint for uploading a profile picture.',
    },
    answer: {
      ar: '```js\nimport multer from \'multer\';\nimport { randomUUID } from \'node:crypto\';\nimport path from \'node:path\';\nimport { fileTypeFromBuffer } from \'file-type\';\n\nconst upload = multer({\n  storage: multer.memoryStorage(),                 // صغير، نفحصه ثم نرفعه للتخزين\n  limits: { fileSize: 2 * 1024 * 1024, files: 1 },\n});\n\nconst ALLOWED = new Map([[\'image/jpeg\', \'.jpg\'], [\'image/png\', \'.png\']]);\n\napp.post(\'/api/avatar\', requireAuth, upload.single(\'avatar\'), asyncHandler(async (req, res) => {\n  if (!req.file) return res.status(400).json({ error: \'FILE_REQUIRED\' });\n\n  // لا تثق بامتداد الملف ولا بـ mimetype القادم من العميل — افحص البايتات الفعلية\n  const detected = await fileTypeFromBuffer(req.file.buffer);\n  if (!detected || !ALLOWED.has(detected.mime)) {\n    return res.status(415).json({ error: \'UNSUPPORTED_TYPE\' });\n  }\n\n  // اسم عشوائي: لا path traversal ولا كتابة فوق ملف آخر\n  const key = `avatars/${req.user.id}/${randomUUID()}${ALLOWED.get(detected.mime)}`;\n  await storage.put(key, req.file.buffer, { contentType: detected.mime });\n  await db.users.update(req.user.id, { avatarKey: key });\n\n  res.status(201).json({ url: storage.publicUrl(key) });\n}));\n\n// معالجة أخطاء multer (الحجم مثلًا) في معالج الأخطاء المركزي\napp.use((err, req, res, next) => {\n  if (err instanceof multer.MulterError && err.code === \'LIMIT_FILE_SIZE\') {\n    return res.status(413).json({ error: \'FILE_TOO_LARGE\' });\n  }\n  next(err);\n});\n```\n\nما يبحث عنه المقابِل:\n• حد الحجم — وإلا هجوم استنزاف.\n• فحص النوع بالبايتات (magic bytes) لا بالامتداد أو mimetype العميل.\n• اسم ملف مولَّد لا اسم المستخدم — يمنع path traversal.\n• التخزين خارج خادم التطبيق (S3 أو ما يعادله).\n• 413 و415 كرموز صحيحة.\n\nالأفضل الذي يجب ذكره: للملفات الكبيرة، presigned URL يرفع العميل مباشرة إلى التخزين دون المرور بخادمك.\n\nمتابعة: كيف تغيّر حجم الصورة؟ (في طابور خلفي لا في الطلب) وكيف تحمي من صور ضارة (image bombs)؟',
      en: '```js\nimport multer from \'multer\';\nimport { randomUUID } from \'node:crypto\';\nimport path from \'node:path\';\nimport { fileTypeFromBuffer } from \'file-type\';\n\nconst upload = multer({\n  storage: multer.memoryStorage(),                 // small file: inspect it, then push to storage\n  limits: { fileSize: 2 * 1024 * 1024, files: 1 },\n});\n\nconst ALLOWED = new Map([[\'image/jpeg\', \'.jpg\'], [\'image/png\', \'.png\']]);\n\napp.post(\'/api/avatar\', requireAuth, upload.single(\'avatar\'), asyncHandler(async (req, res) => {\n  if (!req.file) return res.status(400).json({ error: \'FILE_REQUIRED\' });\n\n  // never trust the extension or the client-supplied mimetype — inspect the actual bytes\n  const detected = await fileTypeFromBuffer(req.file.buffer);\n  if (!detected || !ALLOWED.has(detected.mime)) {\n    return res.status(415).json({ error: \'UNSUPPORTED_TYPE\' });\n  }\n\n  // a generated name: no path traversal, no overwriting another file\n  const key = `avatars/${req.user.id}/${randomUUID()}${ALLOWED.get(detected.mime)}`;\n  await storage.put(key, req.file.buffer, { contentType: detected.mime });\n  await db.users.update(req.user.id, { avatarKey: key });\n\n  res.status(201).json({ url: storage.publicUrl(key) });\n}));\n\n// multer errors (e.g. size) handled in the central error handler\napp.use((err, req, res, next) => {\n  if (err instanceof multer.MulterError && err.code === \'LIMIT_FILE_SIZE\') {\n    return res.status(413).json({ error: \'FILE_TOO_LARGE\' });\n  }\n  next(err);\n});\n```\n\nWhat the interviewer listens for:\n• A size limit — otherwise an exhaustion attack.\n• Type checking by magic bytes, not by extension or the client\'s mimetype.\n• A generated filename rather than the user\'s — prevents path traversal.\n• Storage off the app server (S3 or equivalent).\n• 413 and 415 as the correct codes.\n\nThe better option worth naming: for large files, a presigned URL lets the client upload straight to storage without passing through your server.\n\nFollow-up: how do you resize the image? (in a background queue, not the request) And how do you defend against image bombs?',
    },
    keyPoints: [
      { ar: 'حد للحجم', en: 'A size limit', terms: ['limit', 'حد', 'filesize', 'size', 'حجم', '413'] },
      { ar: 'فحص النوع الفعلي (magic bytes)', en: 'Real type check (magic bytes)', terms: ['magic', 'bytes', 'file-type', 'sniff', 'mimetype', 'extension', 'امتداد', 'trust'] },
      { ar: 'اسم مولَّد عشوائيًا', en: 'A randomly generated name', terms: ['uuid', 'random', 'عشوائي', 'generated', 'مولد', 'traversal', 'original name'] },
      { ar: 'التخزين خارج الخادم / presigned', en: 'Off-server storage / presigned URL', terms: ['s3', 'storage', 'تخزين', 'presigned', 'bucket', 'object storage'] },
    ],
  },
];
