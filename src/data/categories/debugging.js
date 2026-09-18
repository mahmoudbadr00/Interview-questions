// data/categories/debugging.js
// "Here is code with a bug — explain it." Each entry shows the snippet
// (`code`), asks what is wrong, and the answer walks through diagnosis,
// cause, fix, better implementation and related concepts.
import { DIFFICULTY } from '../difficulty.js';

const { beginner, intermediate, advanced } = DIFFICULTY;

export const debugging = [
  // ---------------------------------------------------------------- REACT
  {
    id: 'debug-react-effect-loop',
    difficulty: intermediate,
    kind: 'debug',
    depth: 'debug',
    code: `function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, [users]);

  return <List items={users} />;
}`,
    question: {
      ar: 'لماذا قد يسبب هذا الكود حلقة لا نهائية؟',
      en: 'Why might this cause an infinite loop?',
    },
    answer: {
      ar: 'التشخيص: التأثير يعتمد على users، ويستدعي setUsers بمصفوفة جديدة، فيتغير users، فيُعاد تنفيذ التأثير، وهكذا إلى ما لا نهاية.\n\nلماذا: كل استجابة من fetchUsers مصفوفة جديدة بمرجع جديد حتى لو كان محتواها متطابقًا. React يقارن الاعتماديات بـ Object.is، والمرجع الجديد يعني "تغيّر" فيُعاد التنفيذ. النتيجة طلبات شبكة متواصلة.\n\nالإصلاح: الجلب يجب أن يحدث عند التركيب فقط، فالمصفوفة الصحيحة فارغة:\n```jsx\nuseEffect(() => {\n  fetchUsers().then(setUsers);\n}, []);\n```\n\nالأفضل: إضافة إلغاء حتى لا تُحدَّث الحالة بعد إزالة المكوّن، أو استخدام React Query الذي يدير كل ذلك:\n```jsx\nuseEffect(() => {\n  const controller = new AbortController();\n  fetchUsers({ signal: controller.signal }).then(setUsers).catch(() => {});\n  return () => controller.abort();\n}, []);\n```\n\nمفاهيم مرتبطة: مقارنة الاعتماديات بالمرجع، والفرق بين "البيانات التي يعتمد عليها التأثير" و"البيانات التي ينتجها"، ولماذا يجب ألا يعتمد التأثير على ما يكتبه.',
      en: 'Diagnosis: the effect depends on users, calls setUsers with a new array, users changes, the effect runs again — forever.\n\nWhy: every fetchUsers response is a new array with a new reference even when the contents are identical. React compares dependencies with Object.is, and a new reference means "changed", so the effect re-runs. The result is continuous network requests.\n\nFix: the fetch should happen on mount only, so the correct array is empty:\n```jsx\nuseEffect(() => {\n  fetchUsers().then(setUsers);\n}, []);\n```\n\nBetter: add cancellation so state is not set after unmount, or use React Query, which manages all of this:\n```jsx\nuseEffect(() => {\n  const controller = new AbortController();\n  fetchUsers({ signal: controller.signal }).then(setUsers).catch(() => {});\n  return () => controller.abort();\n}, []);\n```\n\nRelated concepts: dependency comparison by reference, the difference between "data the effect depends on" and "data the effect produces", and why an effect must never depend on what it writes.',
    },
    keyPoints: [
      { ar: 'التأثير يعتمد على ما يكتبه', en: 'The effect depends on what it writes', terms: ['depends on', 'يعتمد', 'setusers', 'writes', 'يكتب', 'sets', 'updates the same'] },
      { ar: 'مرجع جديد كل مرة', en: 'A new reference each time', terms: ['reference', 'مرجع', 'new array', 'مصفوفة جديدة', 'object.is', 'not equal'] },
      { ar: 'مصفوفة فارغة أو React Query', en: 'Empty array or React Query', terms: ['[]', 'empty', 'فارغ', 'mount', 'react query', 'once'] },
    ],
  },
  {
    id: 'debug-react-stale-closure',
    difficulty: intermediate,
    kind: 'debug',
    depth: 'debug',
    code: `function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return <span>{count}</span>;
}`,
    question: {
      ar: 'العدّاد يتوقف عند 1 ولا يزيد. لماذا؟',
      en: 'The counter gets stuck at 1 and never increases. Why?',
    },
    answer: {
      ar: 'التشخيص: stale closure. الدالة داخل setInterval أُنشئت في أول تصيير عندما كان count = 0، والتقطت تلك القيمة. كل ثانية تنفّذ setCount(0 + 1) — دائمًا 1.\n\nلماذا: مصفوفة الاعتماديات فارغة، فالتأثير يعمل مرة واحدة والـ closure لا تُحدَّث أبدًا. أما count في الـ closure فهو ثابت لتلك الدورة من التصيير.\n\nالإصلاح: الصيغة الدالية لا تحتاج قراءة count من الـ closure:\n```jsx\nsetCount((c) => c + 1);\n```\n\nالبديل الخاطئ الشائع: إضافة count إلى الاعتماديات. يعمل، لكنه يهدم ويعيد إنشاء المؤقت كل ثانية — مهدر وقد يسبب انزلاقًا في التوقيت.\n\nمفاهيم مرتبطة: كل تصيير له closures خاصة به، والصيغة الدالية للتحديث هي الأداة القياسية عندما تعتمد الحالة الجديدة على القديمة، وقاعدة ESLint react-hooks/exhaustive-deps كانت ستحذّر هنا.',
      en: 'Diagnosis: a stale closure. The function inside setInterval was created on the first render when count was 0 and captured that value. Every second it runs setCount(0 + 1) — always 1.\n\nWhy: the dependency array is empty, so the effect runs once and the closure is never refreshed. count inside the closure is fixed for that render.\n\nFix: the functional updater does not need to read count from the closure:\n```jsx\nsetCount((c) => c + 1);\n```\n\nThe common wrong alternative: adding count to the dependencies. It works, but tears down and recreates the interval every second — wasteful, and it can drift.\n\nRelated concepts: each render has its own closures, the functional updater is the standard tool when new state depends on old, and the react-hooks/exhaustive-deps ESLint rule would have flagged this.',
    },
    keyPoints: [
      { ar: 'stale closure تلتقط count = 0', en: 'A stale closure captured count = 0', terms: ['stale', 'closure', 'captured', 'التقط', 'first render', 'أول تصيير', 'old value', 'قديم'] },
      { ar: 'الصيغة الدالية للتحديث', en: 'The functional updater', terms: ['c => c + 1', 'prev', 'functional', 'دالية', 'callback', 'updater'] },
    ],
  },
  {
    id: 'debug-react-index-key',
    difficulty: beginner,
    kind: 'debug',
    depth: 'debug',
    code: `function TodoList({ todos, onRemove }) {
  return todos.map((todo, index) => (
    <li key={index}>
      <input defaultValue={todo.text} />
      <button onClick={() => onRemove(todo.id)}>x</button>
    </li>
  ));
}`,
    question: {
      ar: 'عند حذف العنصر الأول، النص المكتوب في حقله ينتقل إلى العنصر التالي. لماذا؟',
      en: 'When the first item is removed, the text typed into its input jumps to the next item. Why?',
    },
    answer: {
      ar: 'التشخيص: الفهرس كـ key. بعد الحذف، العنصر الذي كان بفهرس 1 صار بفهرس 0، فيعتقد React أن العنصر "0" هو نفسه وما زال موجودًا، فيحتفظ بعنصر DOM وحالته (بما فيها ما كتبه المستخدم) ويحدّث فقط الـ props.\n\nلماذا: الـ key هو هوية العنصر في عملية الـ reconciliation. بالفهرس، الهوية تتبع الموضع لا البيانات، فإزالة عنصر تُزيح كل الهويات.\n\nالإصلاح: مفتاح من هوية البيانات:\n```jsx\n<li key={todo.id}>\n```\n\nالأفضل: حقل متحكَّم به بقيمة من الحالة بدل defaultValue، حتى لا تكون هناك حالة مخفية في DOM أصلًا.\n\nمفاهيم مرتبطة: الفهرس مقبول فقط للقوائم الثابتة بلا حالة، وكيف يطابق React عناصر القوائم، ولماذا Math.random() كمفتاح أسوأ (إعادة تركيب كل شيء كل تصيير).',
      en: 'Diagnosis: index as key. After the removal, the item that was at index 1 is now at index 0, so React believes item "0" is the same one still present. It keeps the DOM node and its state — including what the user typed — and only updates the props.\n\nWhy: the key is the element\'s identity during reconciliation. With an index, identity follows position rather than data, so removing one item shifts every identity.\n\nFix: a key derived from the data\'s identity:\n```jsx\n<li key={todo.id}>\n```\n\nBetter: a controlled input with its value in state instead of defaultValue, so there is no hidden state in the DOM at all.\n\nRelated concepts: index keys are acceptable only for static, stateless lists; how React matches list items; and why Math.random() as a key is worse (a full remount every render).',
    },
    keyPoints: [
      { ar: 'الفهرس يربط الهوية بالموضع', en: 'Index ties identity to position', terms: ['index', 'فهرس', 'position', 'موضع', 'identity', 'هوية', 'shift'] },
      { ar: 'React يعيد استخدام عنصر DOM', en: 'React reuses the DOM node', terms: ['reuse', 'يعيد استخدام', 'dom', 'same element', 'keeps', 'يحتفظ', 'state'] },
      { ar: 'key من todo.id', en: 'Key from todo.id', terms: ['id', 'unique', 'فريد', 'stable', 'ثابت'] },
    ],
  },
  {
    id: 'debug-react-nested-component',
    difficulty: intermediate,
    kind: 'debug',
    depth: 'debug',
    code: `function Form() {
  const [name, setName] = useState('');

  function Field() {
    return <input value={name} onChange={(e) => setName(e.target.value)} />;
  }

  return <Field />;
}`,
    question: {
      ar: 'حقل الإدخال يفقد التركيز مع كل حرف. لماذا؟',
      en: 'The input loses focus on every keystroke. Why?',
    },
    answer: {
      ar: 'التشخيص: Field معرّف داخل Form، فكل تصيير لـ Form ينشئ دالة مكوّن جديدة. من منظور React هذا نوع مختلف تمامًا في كل مرة.\n\nلماذا: الـ reconciliation يقارن الأنواع أولًا؛ نوع مختلف يعني هدم الشجرة الفرعية وإعادة بنائها. كل ضغطة مفتاح تحدّث name فيُعاد تصيير Form، فيُنشأ Field جديد، فيُزال حقل الإدخال ويُنشأ من جديد فاقدًا التركيز.\n\nالإصلاح: عرّف المكوّن خارج الأب ومرّر ما يحتاجه كـ props:\n```jsx\nfunction Field({ value, onChange }) {\n  return <input value={value} onChange={(e) => onChange(e.target.value)} />;\n}\n\nfunction Form() {\n  const [name, setName] = useState(\'\');\n  return <Field value={name} onChange={setName} />;\n}\n```\n\nمفاهيم مرتبطة: هوية نوع المكوّن في الـ reconciliation، ولماذا لا يحل useCallback هذه المشكلة (الدالة هنا نوع لا callback)، وأن المكوّنات المتداخلة من أشهر الأنماط السيئة في React.',
      en: 'Diagnosis: Field is defined inside Form, so every render of Form creates a new component function. To React that is a completely different type each time.\n\nWhy: reconciliation compares types first; a different type means tearing down the subtree and rebuilding it. Every keystroke updates name, Form re-renders, a new Field is created, the input is unmounted and recreated, and focus is lost.\n\nFix: define the component outside the parent and pass what it needs as props:\n```jsx\nfunction Field({ value, onChange }) {\n  return <input value={value} onChange={(e) => onChange(e.target.value)} />;\n}\n\nfunction Form() {\n  const [name, setName] = useState(\'\');\n  return <Field value={name} onChange={setName} />;\n}\n```\n\nRelated concepts: component type identity in reconciliation, why useCallback does not fix this (the function here is a type, not a callback), and that nested component definitions are one of the best-known React anti-patterns.',
    },
    keyPoints: [
      { ar: 'نوع جديد كل تصيير', en: 'A new type every render', terms: ['new type', 'نوع جديد', 'new component', 'defined inside', 'داخل', 'recreated', 'different type'] },
      { ar: 'الهدم وإعادة البناء', en: 'Unmount and rebuild', terms: ['unmount', 'remount', 'إعادة بناء', 'destroy', 'هدم', 'recreat'] },
      { ar: 'التعريف خارج الأب', en: 'Define outside the parent', terms: ['outside', 'خارج', 'top level', 'move', 'انقل', 'props'] },
    ],
  },
  // ----------------------------------------------------------- JAVASCRIPT
  {
    id: 'debug-js-async-foreach',
    difficulty: intermediate,
    kind: 'debug',
    depth: 'debug',
    code: `async function saveAll(items) {
  items.forEach(async (item) => {
    await api.save(item);
  });
  console.log('All saved');
}`,
    question: {
      ar: 'تُطبع "All saved" قبل حفظ أي عنصر. لماذا؟',
      en: '"All saved" prints before anything is saved. Why?',
    },
    answer: {
      ar: 'التشخيص: forEach لا ينتظر. الدالة async المُمرَّرة تعيد Promise، وforEach يتجاهل القيم المُعادة ويكمل فورًا، فتُطبع الرسالة قبل أن يكتمل أي await.\n\nلماذا: await داخل الـ callback يوقف الـ callback فقط، لا الحلقة الخارجية. وأي خطأ في الحفظ يصبح unhandled rejection لأن لا أحد ينتظر تلك الـ Promises.\n\nالإصلاح — بالتوازي عندما تكون العمليات مستقلة:\n```js\nasync function saveAll(items) {\n  await Promise.all(items.map((item) => api.save(item)));\n  console.log(\'All saved\');\n}\n```\n\nأو بالتسلسل إن كان الترتيب مهمًا:\n```js\nfor (const item of items) {\n  await api.save(item);\n}\n```\n\nالأفضل مع قوائم كبيرة: تحديد عدد العمليات المتزامنة على دفعات حتى لا تغرق الخادم بألف طلب دفعة واحدة.\n\nمفاهيم مرتبطة: forEach وmap لا يفهمان الـ Promises، وPromise.all مقابل الحلقة المتسلسلة، وPromise.allSettled عندما يكون فشل عنصر مقبولًا.',
      en: 'Diagnosis: forEach does not wait. The async callback returns a promise, forEach discards return values and moves on immediately, so the message prints before any await completes.\n\nWhy: await inside the callback pauses only the callback, not the outer loop. And any save error becomes an unhandled rejection because nothing awaits those promises.\n\nFix — in parallel when the operations are independent:\n```js\nasync function saveAll(items) {\n  await Promise.all(items.map((item) => api.save(item)));\n  console.log(\'All saved\');\n}\n```\n\nOr sequentially if order matters:\n```js\nfor (const item of items) {\n  await api.save(item);\n}\n```\n\nBetter for large lists: cap concurrency in batches so you do not hit the server with a thousand requests at once.\n\nRelated concepts: forEach and map are promise-unaware, Promise.all versus a sequential loop, and Promise.allSettled when partial failure is acceptable.',
    },
    keyPoints: [
      { ar: 'forEach يتجاهل الـ Promises', en: 'forEach ignores the promises', terms: ['foreach', 'ignore', 'يتجاهل', 'does not wait', 'لا ينتظر', 'return value'] },
      { ar: 'Promise.all أو for...of', en: 'Promise.all or for...of', terms: ['promise.all', 'for of', 'for...of', 'for (const', 'map', 'sequential', 'متسلسل', 'parallel', 'متواز'] },
      { ar: 'الأخطاء تصبح unhandled', en: 'Errors become unhandled', terms: ['unhandled', 'rejection', 'error', 'خطأ', 'catch'] },
    ],
  },
  {
    id: 'debug-js-this-lost',
    difficulty: beginner,
    kind: 'debug',
    depth: 'debug',
    code: `class Counter {
  constructor() {
    this.count = 0;
  }
  increment() {
    this.count++;
    console.log(this.count);
  }
}

const counter = new Counter();
button.addEventListener('click', counter.increment);`,
    question: {
      ar: 'عند النقر يظهر خطأ "Cannot read properties of undefined". لماذا؟',
      en: 'Clicking throws "Cannot read properties of undefined". Why?',
    },
    answer: {
      ar: 'التشخيص: this مفقود. counter.increment يمرّر الدالة وحدها إلى addEventListener، وعند الاستدعاء يكون this هو العنصر (أو undefined في الأصناف لأنها strict) لا الكائن counter، فلا يوجد count.\n\nلماذا: قيمة this تُحدَّد وقت الاستدعاء بحسب طريقته، لا وقت التعريف. المستمع يستدعي الدالة كدالة عادية لا كـ method على counter.\n\nالإصلاح — أي من:\n```js\n// 1. bind مرة واحدة\nbutton.addEventListener(\'click\', counter.increment.bind(counter));\n\n// 2. دالة سهمية تغلّف الاستدعاء\nbutton.addEventListener(\'click\', () => counter.increment());\n\n// 3. حقل صنف بدالة سهمية — this لغوي\nincrement = () => { this.count++; };\n```\n\nملاحظة: الحل الثالث ينشئ دالة لكل نسخة بدل مشاركتها عبر prototype، وهذا مقبول لعدد صغير من النسخ.\n\nمفاهيم مرتبطة: قواعد ربط this الأربع، والدوال السهمية ترث this من النطاق المحيط، ولماذا ينشأ الخطأ نفسه عند تمرير methods كـ callbacks في أي مكان.',
      en: 'Diagnosis: this is lost. counter.increment passes the bare function to addEventListener, and when it is invoked this is the element (or undefined, since class bodies are strict) rather than the counter object — so there is no count.\n\nWhy: this is determined at call time by how the function is called, not at definition. The listener calls it as a plain function, not as a method on counter.\n\nFix — any of:\n```js\n// 1. bind once\nbutton.addEventListener(\'click\', counter.increment.bind(counter));\n\n// 2. an arrow wrapper\nbutton.addEventListener(\'click\', () => counter.increment());\n\n// 3. a class field holding an arrow — lexical this\nincrement = () => { this.count++; };\n```\n\nNote: the third creates a function per instance instead of sharing it via the prototype, which is fine for a small number of instances.\n\nRelated concepts: the four this-binding rules, arrow functions inheriting this from the enclosing scope, and why the same bug appears whenever methods are passed as callbacks.',
    },
    keyPoints: [
      { ar: 'this يُحدَّد وقت الاستدعاء', en: 'this is set at call time', terms: ['call time', 'وقت الاستدعاء', 'how it is called', 'lost', 'مفقود', 'detached', 'plain function'] },
      { ar: 'bind أو دالة سهمية', en: 'bind or an arrow function', terms: ['bind', 'arrow', 'سهم', 'wrap', 'تغليف', 'class field'] },
    ],
  },
  {
    id: 'debug-js-mutation-shared',
    difficulty: intermediate,
    kind: 'debug',
    depth: 'debug',
    code: `const defaults = { theme: 'light', filters: [] };

function createSettings(overrides) {
  const settings = defaults;
  Object.assign(settings, overrides);
  return settings;
}

const a = createSettings({ theme: 'dark' });
const b = createSettings({});
console.log(b.theme); // 'dark' ??`,
    question: {
      ar: 'لماذا يحصل المستخدم الثاني على السمة "dark" رغم أنه لم يطلبها؟',
      en: 'Why does the second caller get the "dark" theme without asking for it?',
    },
    answer: {
      ar: 'التشخيص: settings = defaults لا ينسخ الكائن بل يشير إليه. Object.assign يعدّل defaults نفسه، فكل استدعاء لاحق يبدأ من الكائن الملوّث.\n\nلماذا: الكائنات تُمرَّر بالمرجع. الإسناد ينسخ المرجع لا المحتوى، فهناك كائن واحد يتشاركه الجميع.\n\nالإصلاح: أنشئ كائنًا جديدًا في كل استدعاء:\n```js\nfunction createSettings(overrides) {\n  return { ...defaults, ...overrides };\n}\n```\n\nتحذير: هذا نسخ سطحي. filters ما زالت مصفوفة مشتركة — a.filters.push(x) ستظهر في b. لعزل كامل استخدم structuredClone(defaults) أو أنشئ المصفوفة داخل الدالة.\n\nالأفضل: تجميد الافتراضيات لاكتشاف أي تعديل مبكرًا أثناء التطوير: Object.freeze(defaults).\n\nمفاهيم مرتبطة: القيمة مقابل المرجع، النسخ السطحي مقابل العميق، ولماذا يبني React وRedux كل شيء على عدم التعديل المباشر.',
      en: 'Diagnosis: settings = defaults does not copy the object; it references it. Object.assign mutates defaults itself, so every later call starts from the polluted object.\n\nWhy: objects are passed by reference. Assignment copies the reference, not the contents, so there is one object everyone shares.\n\nFix: create a new object on every call:\n```js\nfunction createSettings(overrides) {\n  return { ...defaults, ...overrides };\n}\n```\n\nCaveat: that is a shallow copy. filters is still a shared array — a.filters.push(x) would show up in b. For full isolation use structuredClone(defaults) or create the array inside the function.\n\nBetter: freeze the defaults so any mutation is caught early in development: Object.freeze(defaults).\n\nRelated concepts: value versus reference, shallow versus deep copy, and why React and Redux build everything on immutability.',
    },
    keyPoints: [
      { ar: 'الإسناد ينسخ المرجع', en: 'Assignment copies the reference', terms: ['reference', 'مرجع', 'same object', 'نفس الكائن', 'shared', 'مشترك', 'mutat', 'تعديل'] },
      { ar: 'نسخة جديدة بـ spread', en: 'A fresh copy with spread', terms: ['spread', '...', 'new object', 'كائن جديد', 'copy', 'نسخ', 'structuredclone'] },
      { ar: 'المصفوفة المتداخلة ما زالت مشتركة', en: 'The nested array is still shared', terms: ['shallow', 'سطحي', 'nested', 'متداخل', 'filters', 'deep', 'عميق'] },
    ],
  },
  {
    id: 'debug-js-race-search',
    difficulty: advanced,
    kind: 'debug',
    depth: 'debug',
    code: `function SearchBox() {
  const [results, setResults] = useState([]);

  const onChange = async (e) => {
    const data = await api.search(e.target.value);
    setResults(data);
  };

  return <input onChange={onChange} />;
}`,
    question: {
      ar: 'أحيانًا تظهر نتائج البحث لكلمة قديمة بعد أن كتب المستخدم كلمة أحدث. ما المشكلة؟',
      en: 'Sometimes results for an older query appear after the user has typed a newer one. What is wrong?',
    },
    answer: {
      ar: 'التشخيص: race condition. كل حرف يطلق طلبًا، والطلبات لا تعود بالترتيب الذي أُرسلت به. طلب "ab" البطيء قد يصل بعد طلب "abc" السريع فيستبدل النتائج الصحيحة.\n\nلماذا: لا شيء يربط الرد بالحالة الحالية للحقل، وsetResults تقبل أي رد يصل أخيرًا.\n\nالإصلاح: الإلغاء مع useEffect حتى يُلغى الطلب السابق عند تغيّر الاستعلام:\n```jsx\nconst [query, setQuery] = useState(\'\');\nconst [results, setResults] = useState([]);\n\nuseEffect(() => {\n  if (!query) return;\n  const controller = new AbortController();\n  api.search(query, { signal: controller.signal })\n    .then(setResults)\n    .catch((e) => { if (e.name !== \'AbortError\') throw e; });\n  return () => controller.abort();\n}, [query]);\n```\n\nالأفضل: إضافة debounce على query لتقليل الطلبات، أو استخدام React Query الذي يدير الإلغاء والتخزين المؤقت وإزالة التكرار تلقائيًا.\n\nمفاهيم مرتبطة: AbortController، وتجاهل الردود القديمة بمعرّف، وأن الـ race conditions تحدث في JavaScript رغم الخيط الواحد بسبب ترتيب الـ callbacks.',
      en: 'Diagnosis: a race condition. Every keystroke fires a request, and responses do not return in the order they were sent. The slow "ab" request can arrive after the fast "abc" one and overwrite the correct results.\n\nWhy: nothing ties a response to the input\'s current state, and setResults accepts whichever response arrives last.\n\nFix: cancellation in a useEffect so the previous request is aborted when the query changes:\n```jsx\nconst [query, setQuery] = useState(\'\');\nconst [results, setResults] = useState([]);\n\nuseEffect(() => {\n  if (!query) return;\n  const controller = new AbortController();\n  api.search(query, { signal: controller.signal })\n    .then(setResults)\n    .catch((e) => { if (e.name !== \'AbortError\') throw e; });\n  return () => controller.abort();\n}, [query]);\n```\n\nBetter: debounce query to reduce requests, or use React Query, which handles cancellation, caching and deduplication automatically.\n\nRelated concepts: AbortController, ignoring stale responses via a request id, and the fact that race conditions exist in JavaScript despite the single thread because of callback ordering.',
    },
    keyPoints: [
      { ar: 'الردود تصل بترتيب مختلف', en: 'Responses arrive out of order', terms: ['order', 'ترتيب', 'race', 'سباق', 'slow', 'بطيء', 'late', 'متأخر', 'stale', 'قديم', 'overwrite'] },
      { ar: 'الإلغاء بـ AbortController', en: 'Cancel with AbortController', terms: ['abort', 'cancel', 'إلغاء', 'signal', 'cleanup', 'تنظيف'] },
      { ar: 'debounce أو React Query', en: 'Debounce or React Query', terms: ['debounce', 'react query', 'ignore', 'تجاهل', 'latest', 'أحدث'] },
    ],
  },
  // --------------------------------------------------------------- NEXT.JS
  {
    id: 'debug-next-hydration',
    difficulty: intermediate,
    kind: 'debug',
    depth: 'debug',
    code: `export default function Greeting() {
  const hour = new Date().getHours();
  const saved = localStorage.getItem('name');
  return <h1>{hour < 12 ? 'Good morning' : 'Good evening'}, {saved}</h1>;
}`,
    question: {
      ar: 'يظهر تحذير hydration mismatch وأحيانًا خطأ "localStorage is not defined". ما الخطأ؟',
      en: 'You get a hydration mismatch warning and sometimes "localStorage is not defined". What is wrong?',
    },
    answer: {
      ar: 'التشخيص: مشكلتان في سطرين.\n1. localStorage غير موجود على الخادم — المكوّن يُصيَّر على الخادم أولًا فينهار.\n2. new Date().getHours() يعطي قيمة مختلفة على الخادم (منطقته الزمنية) وعلى العميل، فيختلف HTML الخادم عن أول تصيير للعميل — وهذا هو الـ mismatch.\n\nلماذا: الـ hydration يتطلب أن ينتج العميل نفس الشجرة التي أنتجها الخادم بالضبط. أي قيمة غير حتمية أو واجهة متصفح تكسر ذلك.\n\nالإصلاح: اجعل القيم المعتمدة على المتصفح تُقرأ بعد التركيب، وصيّر بديلًا مستقرًا قبل ذلك:\n```jsx\n\'use client\';\nexport default function Greeting() {\n  const [state, setState] = useState(null);\n\n  useEffect(() => {\n    setState({\n      hour: new Date().getHours(),\n      name: localStorage.getItem(\'name\'),\n    });\n  }, []);\n\n  if (!state) return <h1>Welcome</h1>;   // نفس الشيء على الخادم والعميل\n  return <h1>{state.hour < 12 ? \'Good morning\' : \'Good evening\'}, {state.name}</h1>;\n}\n```\n\nالأفضل: إن كان الاسم في cookie فاقرأه على الخادم وصيّر التحية الصحيحة من البداية دون وميض.\n\nمفاهيم مرتبطة: التصيير على الخادم لا يملك window، والقيم غير الحتمية (الوقت، العشوائية، المنطقة الزمنية) تسبب mismatch، وsuppressHydrationWarning للفروق النصية المقصودة فقط.',
      en: 'Diagnosis: two problems in two lines.\n1. localStorage does not exist on the server — the component renders there first and throws.\n2. new Date().getHours() differs between the server (its timezone) and the client, so the server HTML does not match the client\'s first render — that is the mismatch.\n\nWhy: hydration requires the client to produce exactly the tree the server produced. Any non-deterministic value or browser API breaks that.\n\nFix: read browser-dependent values after mount and render a stable fallback before that:\n```jsx\n\'use client\';\nexport default function Greeting() {\n  const [state, setState] = useState(null);\n\n  useEffect(() => {\n    setState({\n      hour: new Date().getHours(),\n      name: localStorage.getItem(\'name\'),\n    });\n  }, []);\n\n  if (!state) return <h1>Welcome</h1>;   // identical on server and client\n  return <h1>{state.hour < 12 ? \'Good morning\' : \'Good evening\'}, {state.name}</h1>;\n}\n```\n\nBetter: if the name lives in a cookie, read it on the server and render the correct greeting from the start with no flash.\n\nRelated concepts: server rendering has no window, non-deterministic values (time, randomness, timezone) cause mismatches, and suppressHydrationWarning is only for intentional text differences.',
    },
    keyPoints: [
      { ar: 'لا localStorage على الخادم', en: 'No localStorage on the server', terms: ['server', 'خادم', 'window', 'localstorage', 'not defined', 'browser api', 'ssr'] },
      { ar: 'الوقت غير حتمي بين الخادم والعميل', en: 'Time differs between server and client', terms: ['date', 'time', 'وقت', 'timezone', 'منطقة', 'different', 'مختلف', 'non-deterministic', 'mismatch'] },
      { ar: 'القراءة بعد التركيب', en: 'Read after mount', terms: ['useeffect', 'mount', 'تركيب', 'after', 'بعد', 'client only', 'fallback'] },
    ],
  },
  {
    id: 'debug-next-use-client-import',
    difficulty: intermediate,
    kind: 'debug',
    depth: 'debug',
    code: `// app/products/[id]/page.js  (Server Component)
import { db } from '@/lib/db';
import ProductView from './ProductView';

export default async function Page({ params }) {
  const product = await db.products.find((await params).id);
  return <ProductView product={product} onAdd={(id) => db.cart.add(id)} />;
}

// ProductView.js
'use client';
export default function ProductView({ product, onAdd }) {
  return <button onClick={() => onAdd(product.id)}>Add</button>;
}`,
    question: {
      ar: 'يفشل البناء بخطأ عن دالة تُمرَّر إلى Client Component. ما المشكلة؟',
      en: 'The build fails with an error about a function being passed to a Client Component. What is wrong?',
    },
    answer: {
      ar: 'التشخيص: onAdd دالة عادية تُمرَّر من Server Component إلى Client Component. الـ props التي تعبر هذه الحدود يجب أن تكون قابلة للتسلسل لترسل إلى المتصفح — والدوال ليست كذلك.\n\nلماذا: مكوّن الخادم يعمل على الخادم فقط ولا يصل كوده للمتصفح. الدالة تشير إلى db الذي لا يوجد إلا على الخادم، فلا معنى لإرسالها.\n\nالإصلاح: اجعلها Server Action — دالة خادم يستطيع العميل استدعاؤها كمرجع:\n```jsx\n// app/products/actions.js\n\'use server\';\nexport async function addToCart(productId) {\n  const session = await getSession();\n  if (!session) throw new Error(\'Unauthorized\');\n  await db.cart.add(session.userId, productId);\n  revalidatePath(\'/cart\');\n}\n\n// page.js\nimport { addToCart } from \'./actions\';\n<ProductView product={product} onAdd={addToCart} />\n```\n\nالأفضل: تمرير البيانات الضرورية فقط (product.id والاسم) لا كائن المنتج كاملًا، لأن كل ما يعبر الحدود يظهر في مصدر الصفحة.\n\nمفاهيم مرتبطة: حدود الخادم/العميل وقابلية التسلسل، وأن Server Actions نقاط نهاية عامة تحتاج مصادقة داخلها، ونمط تمرير مكوّن خادم كـ children إلى مكوّن عميل.',
      en: 'Diagnosis: onAdd is a plain function passed from a Server Component to a Client Component. Props crossing that boundary must be serialisable to be sent to the browser — functions are not.\n\nWhy: the server component runs only on the server and its code never reaches the browser. The function references db, which exists only on the server, so shipping it makes no sense.\n\nFix: make it a Server Action — a server function the client can call by reference:\n```jsx\n// app/products/actions.js\n\'use server\';\nexport async function addToCart(productId) {\n  const session = await getSession();\n  if (!session) throw new Error(\'Unauthorized\');\n  await db.cart.add(session.userId, productId);\n  revalidatePath(\'/cart\');\n}\n\n// page.js\nimport { addToCart } from \'./actions\';\n<ProductView product={product} onAdd={addToCart} />\n```\n\nBetter: pass only the necessary data (product.id and name) rather than the whole product object, since everything crossing the boundary appears in the page source.\n\nRelated concepts: the server/client boundary and serialisability, Server Actions being public endpoints that need authentication inside them, and the pattern of passing a server component as children to a client component.',
    },
    keyPoints: [
      { ar: 'الـ props يجب أن تكون قابلة للتسلسل', en: 'Props must be serialisable', terms: ['serializ', 'serialis', 'تسلسل', 'function', 'دالة', 'cannot pass', 'boundary', 'حدود'] },
      { ar: 'Server Action بدل الدالة', en: 'A Server Action instead', terms: ['server action', 'use server', 'action'] },
      { ar: 'المصادقة داخل الـ action', en: 'Authenticate inside the action', terms: ['session', 'auth', 'مصادقة', 'endpoint', 'نقطة نهاية', 'public'] },
    ],
  },
  {
    id: 'debug-next-dynamic-page',
    difficulty: advanced,
    kind: 'debug',
    depth: 'debug',
    code: `// app/blog/[slug]/page.js
import { cookies } from 'next/headers';

export const revalidate = 3600;

export default async function Post({ params }) {
  const theme = (await cookies()).get('theme')?.value ?? 'light';
  const post = await getPost((await params).slug);
  return <Article post={post} theme={theme} />;
}`,
    question: {
      ar: 'صفحات المدونة كانت ثابتة وسريعة، وبعد هذا التعديل صارت كل زيارة تضرب الخادم. لماذا؟',
      en: 'Blog pages used to be static and fast; after this change every visit hits the server. Why?',
    },
    answer: {
      ar: 'التشخيص: استدعاء cookies() يجعل المسار ديناميكيًا تلقائيًا. Next.js لا يستطيع توليد صفحة مسبقًا إذا كانت تعتمد على بيانات الطلب، فيتجاهل revalidate = 3600 ويصيّر في كل زيارة.\n\nلماذا: القراءة من الـ cookies أو الترويسات أو searchParams تعني أن الناتج يختلف من طلب لآخر، وهذا يلغي التخزين المؤقت الثابت للمسار بأكمله — حتى لو كان الجزء المعتمد عليها هو السمة فقط.\n\nالإصلاح: افصل الجزء الديناميكي واعزله. السمة شأن العميل لا الخادم:\n```jsx\n// page.js — يعود ثابتًا\nexport const revalidate = 3600;\nexport default async function Post({ params }) {\n  const post = await getPost((await params).slug);\n  return <Article post={post} />;   // Article يقرأ السمة من context على العميل\n}\n```\n\nإن كان لا بد من قراءة الـ cookie على الخادم، اعزلها في مكوّن صغير داخل Suspense حتى يبقى باقي الصفحة ثابتًا (Partial Prerendering).\n\nكيف تكتشفه: مخرجات next build تطبع لكل مسار إن كان ثابتًا (○) أو ديناميكيًا (ƒ) — أسرع طريقة لالتقاط مسار تحوّل بلا قصد.\n\nمفاهيم مرتبطة: ما يجعل المسار ديناميكيًا، وSuspense لعزل الأجزاء الديناميكية، وأن التخصيص البصري مكانه العميل غالبًا.',
      en: 'Diagnosis: calling cookies() makes the route dynamic automatically. Next.js cannot pre-render a page that depends on request data, so it ignores revalidate = 3600 and renders on every visit.\n\nWhy: reading cookies, headers or searchParams means the output can differ per request, which disables static caching for the entire route — even though only the theme depends on it.\n\nFix: separate and isolate the dynamic part. Theme is a client concern, not a server one:\n```jsx\n// page.js — static again\nexport const revalidate = 3600;\nexport default async function Post({ params }) {\n  const post = await getPost((await params).slug);\n  return <Article post={post} />;   // Article reads the theme from a client context\n}\n```\n\nIf you genuinely must read the cookie on the server, isolate it in a small component inside Suspense so the rest of the page stays static (Partial Prerendering).\n\nHow to catch it: the next build output prints whether each route is static (○) or dynamic (ƒ) — the quickest way to spot a route that went dynamic by accident.\n\nRelated concepts: what makes a route dynamic, Suspense for isolating dynamic parts, and the fact that visual personalisation usually belongs on the client.',
    },
    keyPoints: [
      { ar: 'cookies() يجعل المسار ديناميكيًا', en: 'cookies() makes the route dynamic', terms: ['cookies', 'dynamic', 'ديناميكي', 'request', 'طلب', 'headers', 'opt out', 'static'] },
      { ar: 'عزل الجزء الديناميكي', en: 'Isolate the dynamic part', terms: ['isolate', 'عزل', 'suspense', 'client', 'عميل', 'separate', 'فصل', 'context', 'small component'] },
      { ar: 'مخرجات البناء تكشفه', en: 'The build output reveals it', terms: ['build output', 'next build', 'مخرجات', 'ƒ', '○', 'route table'] },
    ],
  },
  // ------------------------------------------------------------ TYPESCRIPT
  {
    id: 'debug-ts-any-leak',
    difficulty: intermediate,
    kind: 'debug',
    depth: 'debug',
    code: `async function getUser(id: string) {
  const res = await fetch(\`/api/users/\${id}\`);
  const user = await res.json();
  return user;
}

const user = await getUser('1');
console.log(user.nmae.toUpperCase()); // no compile error`,
    question: {
      ar: 'الخطأ الإملائي في nmae لا يظهر وقت الترجمة وينهار التطبيق وقت التشغيل. لماذا لم يحمِ TypeScript الكود؟',
      en: 'The typo in nmae compiles fine and crashes at runtime. Why did TypeScript not protect this code?',
    },
    answer: {
      ar: 'التشخيص: res.json() يعيد Promise<any>، فيصبح user من نوع any، وany يعطّل الفحص على كل ما يليه. TypeScript يقبل user.nmae ويقبل .toUpperCase() عليه بلا اعتراض.\n\nلماذا: any معدٍ — ينتشر عبر الإسناد والإرجاع إلى كل من يلمس القيمة. والمشكلة الأعمق أن البيانات القادمة من الشبكة لا يمكن للمترجم معرفة شكلها أصلًا.\n\nالإصلاح الأدنى: أعلن النوع صراحةً:\n```ts\nasync function getUser(id: string): Promise<User> {\n  const res = await fetch(`/api/users/${id}`);\n  return res.json() as Promise<User>;\n}\n```\nهذا يلتقط الخطأ الإملائي، لكنه مجرد وعد للمترجم — إن أعاد الـ API شكلًا مختلفًا فلن يكتشف أحد.\n\nالأفضل: تحقق حقيقي وقت التشغيل يشتق النوع منه:\n```ts\nconst userSchema = z.object({ id: z.string(), name: z.string() });\ntype User = z.infer<typeof userSchema>;\n\nasync function getUser(id: string): Promise<User> {\n  const res = await fetch(`/api/users/${id}`);\n  return userSchema.parse(await res.json());\n}\n```\n\nمفاهيم مرتبطة: any مقابل unknown (unknown كان سيجبرك على التضييق)، والأنواع تختفي وقت التشغيل، والتحقق عند حدود النظام.',
      en: 'Diagnosis: res.json() returns Promise<any>, so user is any, and any switches off checking for everything downstream. TypeScript accepts user.nmae and .toUpperCase() on it without complaint.\n\nWhy: any is contagious — it spreads through assignment and return to everything that touches the value. The deeper issue is that the compiler cannot know the shape of data arriving over the network at all.\n\nMinimal fix: declare the type explicitly:\n```ts\nasync function getUser(id: string): Promise<User> {\n  const res = await fetch(`/api/users/${id}`);\n  return res.json() as Promise<User>;\n}\n```\nThat catches the typo, but it is only a promise to the compiler — if the API returns a different shape, nobody finds out.\n\nBetter: real runtime validation with the type derived from it:\n```ts\nconst userSchema = z.object({ id: z.string(), name: z.string() });\ntype User = z.infer<typeof userSchema>;\n\nasync function getUser(id: string): Promise<User> {\n  const res = await fetch(`/api/users/${id}`);\n  return userSchema.parse(await res.json());\n}\n```\n\nRelated concepts: any versus unknown (unknown would have forced narrowing), types being erased at runtime, and validation at the system boundary.',
    },
    keyPoints: [
      { ar: 'res.json() يعيد any', en: 'res.json() returns any', terms: ['any', 'json()', 'promise<any>', 'untyped'] },
      { ar: 'any ينتشر ويعطّل الفحص', en: 'any spreads and disables checking', terms: ['spread', 'ينتشر', 'contagious', 'disable', 'يعطل', 'no check', 'downstream'] },
      { ar: 'تحقق وقت التشغيل بـ Zod', en: 'Runtime validation with Zod', terms: ['zod', 'schema', 'validat', 'تحقق', 'runtime', 'parse', 'unknown'] },
    ],
  },
  {
    id: 'debug-ts-narrowing-lost',
    difficulty: advanced,
    kind: 'debug',
    depth: 'debug',
    code: `type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; side: number };

function area(shape: Shape) {
  if (shape.kind === 'circle') {
    setTimeout(() => {
      console.log(Math.PI * shape.radius ** 2); // error: radius does not exist on Shape
    }, 0);
  }
}`,
    question: {
      ar: 'لماذا يشتكي TypeScript من radius رغم أننا تحققنا من kind قبلها؟',
      en: 'Why does TypeScript complain about radius when we checked kind just before?',
    },
    answer: {
      ar: 'التشخيص: التضييق لا يصمد داخل الـ callback. تحليل تدفق التحكم يضيّق shape إلى circle داخل جسم الـ if مباشرة، لكن الدالة المُمرَّرة إلى setTimeout قد تُنفَّذ لاحقًا — وTypeScript يفترض أن shape قد يكون تغيّر في الأثناء.\n\nلماذا: المعامل shape قابل لإعادة الإسناد نظريًا، والمترجم لا يستطيع إثبات أن لا أحد سيغيّره قبل تنفيذ الـ callback. لذلك يعيد النوع إلى Shape الكامل داخل أي دالة متداخلة.\n\nالإصلاح: استخرج القيمة المضيَّقة إلى const — الثوابت لا يمكن أن تتغير، فيحتفظ التضييق بها:\n```ts\nif (shape.kind === \'circle\') {\n  const circle = shape;          // النوع: { kind: \'circle\'; radius: number }\n  setTimeout(() => {\n    console.log(Math.PI * circle.radius ** 2);\n  }, 0);\n}\n```\nأو استخرج الخاصية نفسها: const { radius } = shape.\n\nمفاهيم مرتبطة: التضييق يعمل على المراجع الثابتة لا على الخصائص القابلة للتغيير، والمشكلة نفسها تظهر مع خصائص الكائنات (obj.value) داخل الـ callbacks، والاتحادات المميّزة.',
      en: 'Diagnosis: narrowing does not survive inside the callback. Control-flow analysis narrows shape to circle directly inside the if body, but the function passed to setTimeout may run later — and TypeScript assumes shape could have changed by then.\n\nWhy: the parameter shape is theoretically reassignable, and the compiler cannot prove nothing mutates it before the callback runs. So inside any nested function it widens the type back to the full Shape.\n\nFix: capture the narrowed value in a const — constants cannot change, so the narrowing is preserved:\n```ts\nif (shape.kind === \'circle\') {\n  const circle = shape;          // type: { kind: \'circle\'; radius: number }\n  setTimeout(() => {\n    console.log(Math.PI * circle.radius ** 2);\n  }, 0);\n}\n```\nOr extract the property itself: const { radius } = shape.\n\nRelated concepts: narrowing applies to immutable references, not to mutable properties; the same issue appears with object properties (obj.value) inside callbacks; and discriminated unions.',
    },
    keyPoints: [
      { ar: 'التضييق ينهار داخل الـ callback', en: 'Narrowing is lost inside the callback', terms: ['callback', 'later', 'لاحق', 'nested function', 'closure', 'lost', 'ينهار', 'widen', 'reset'] },
      { ar: 'قد يتغير قبل التنفيذ', en: 'It could change before execution', terms: ['reassign', 'إعادة إسناد', 'mutat', 'تغير', 'cannot prove', 'assume'] },
      { ar: 'الاستخراج إلى const', en: 'Capture in a const', terms: ['const', 'local', 'محلي', 'extract', 'استخرج', 'destructur'] },
    ],
  },
  // --------------------------------------------------------------- NODE.JS
  {
    id: 'debug-node-blocking',
    difficulty: intermediate,
    kind: 'debug',
    depth: 'debug',
    code: `app.get('/report', async (req, res) => {
  const rows = await db.query('SELECT * FROM events');
  const csv = rows.map(toCsvLine).join('\\n');
  const hash = crypto.createHash('sha256').update(csv).digest('hex');
  res.setHeader('ETag', hash);
  res.send(csv);
});`,
    question: {
      ar: 'عندما يطلب مستخدم واحد هذا التقرير، تتوقف كل طلبات الـ API الأخرى لعدة ثوانٍ. لماذا؟',
      en: 'When one user requests this report, every other API request stalls for several seconds. Why?',
    },
    answer: {
      ar: 'التشخيص: الجلب من قاعدة البيانات غير حاجب، لكن ما بعده حاجب بالكامل: تحويل ملايين الصفوف إلى نص، ودمجها، وحساب التجزئة — كلها عمليات CPU متزامنة على الخيط الرئيسي. طوال تلك الثواني لا يستطيع الـ event loop خدمة أي طلب آخر.\n\nلماذا: async لا يعني غير حاجب. await يحرّر الحلقة أثناء انتظار I/O فقط؛ الكود المتزامن بينهما يحجبها كالمعتاد. والمشكلة تتضاعف مع تحميل الجدول كاملًا في الذاكرة.\n\nالإصلاح — اعتمادًا على الحاجة:\n1. Streaming: اقرأ الصفوف بمؤشر (cursor) وحوّلها ودفعها إلى الاستجابة تباعًا. الذاكرة ثابتة، ويحصل الـ event loop على فرصة بين الدفعات، ويبدأ المستخدم بالتحميل فورًا.\n```js\nconst cursor = db.stream(\'SELECT * FROM events\');\nawait pipeline(cursor, csvTransform(), res);\n```\n2. إن كان لا بد من المعالجة الثقيلة في الذاكرة: انقلها إلى Worker Thread.\n3. إن كان التقرير طويلًا فعلًا: طابور مهام يولّده في الخلفية ويرسل رابطًا عند الجهوزية.\n\nوالـ ETag على ملف مُبثّ غير ممكن قبل الإرسال — استخدم Last-Modified أو احسب التجزئة في الخلفية.\n\nمفاهيم مرتبطة: الفرق بين I/O-bound وCPU-bound، وقياس event loop lag لاكتشاف الحجب، والـ streams وbackpressure.',
      en: 'Diagnosis: the database fetch is non-blocking, but everything after it is fully blocking: converting millions of rows to text, joining them, and hashing — all synchronous CPU work on the main thread. For those seconds the event loop cannot serve any other request.\n\nWhy: async does not mean non-blocking. await frees the loop only while waiting on I/O; the synchronous code between awaits blocks it as usual. And loading the whole table into memory compounds the problem.\n\nFix — depending on the need:\n1. Streaming: read rows with a cursor, transform and push them into the response as they come. Memory stays flat, the event loop gets a turn between chunks, and the user starts downloading immediately.\n```js\nconst cursor = db.stream(\'SELECT * FROM events\');\nawait pipeline(cursor, csvTransform(), res);\n```\n2. If heavy in-memory processing is unavoidable: move it to a Worker Thread.\n3. If the report is genuinely long: a job queue generates it in the background and sends a link when ready.\n\nAnd an ETag over a streamed body cannot be computed before sending — use Last-Modified or hash in the background.\n\nRelated concepts: I/O-bound versus CPU-bound work, measuring event loop lag to detect blocking, and streams with backpressure.',
    },
    keyPoints: [
      { ar: 'المعالجة المتزامنة تحجب الحلقة', en: 'Synchronous processing blocks the loop', terms: ['block', 'حجب', 'event loop', 'cpu', 'synchronous', 'متزامن', 'main thread', 'خيط'] },
      { ar: 'async ≠ غير حاجب', en: 'async ≠ non-blocking', terms: ['async does not', 'await', 'only i/o', 'still block', 'ما زال'] },
      { ar: 'streaming أو worker أو طابور', en: 'Stream, worker thread or queue', terms: ['stream', 'cursor', 'pipeline', 'worker', 'queue', 'طابور', 'background', 'خلفية', 'chunk'] },
    ],
  },
  {
    id: 'debug-node-error-swallowed',
    difficulty: intermediate,
    kind: 'debug',
    depth: 'debug',
    code: `app.get('/users/:id', async (req, res) => {
  const user = await db.users.find(req.params.id); // may throw
  res.json(user);
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: 'Internal error' });
});`,
    question: {
      ar: 'عندما تفشل قاعدة البيانات، يتعلق الطلب إلى الأبد ولا يصل إلى معالج الأخطاء. لماذا؟ (Express 4)',
      en: 'When the database fails, the request hangs forever and never reaches the error handler. Why? (Express 4)',
    },
    answer: {
      ar: 'التشخيص: Express 4 لا يلتقط الـ rejections من المعالجات async. الدالة تعيد Promise مرفوضة، وExpress يتجاهلها، فلا يُستدعى next(err) أبدًا ولا يُرسل رد — يبقى العميل ينتظر حتى انتهاء المهلة، وتظهر unhandledRejection في السجلات.\n\nلماذا: Express 4 صُمّم قبل async/await ويتوقع أن تُمرَّر الأخطاء صراحةً عبر next(err). المعالجات المتزامنة التي ترمي استثناءً يلتقطها، أما الـ Promises فلا.\n\nالإصلاح: غلاف يمرّر الرفض إلى next:\n```js\nconst asyncHandler = (fn) => (req, res, next) =>\n  Promise.resolve(fn(req, res, next)).catch(next);\n\napp.get(\'/users/:id\', asyncHandler(async (req, res) => {\n  const user = await db.users.find(req.params.id);\n  if (!user) return res.status(404).json({ error: \'Not found\' });\n  res.json(user);\n}));\n```\n\nالأفضل: الترقية إلى Express 5 الذي يلتقط الـ rejections من المعالجات async تلقائيًا، أو استخدام Fastify الذي يدعم ذلك أصلًا.\n\nوأضف دائمًا مهلة على مستوى الخادم حتى لا يتعلق أي طلب إلى الأبد مهما كان السبب.\n\nمفاهيم مرتبطة: معالج الأخطاء بأربعة معاملات، وunhandledRejection، والفرق بين الأخطاء المتزامنة وغير المتزامنة في الـ middleware.',
      en: 'Diagnosis: Express 4 does not catch rejections from async handlers. The function returns a rejected promise, Express ignores it, next(err) is never called and no response is sent — the client waits until it times out, and an unhandledRejection appears in the logs.\n\nWhy: Express 4 predates async/await and expects errors to be passed explicitly via next(err). It catches synchronous throws in handlers, but not promise rejections.\n\nFix: a wrapper that forwards the rejection to next:\n```js\nconst asyncHandler = (fn) => (req, res, next) =>\n  Promise.resolve(fn(req, res, next)).catch(next);\n\napp.get(\'/users/:id\', asyncHandler(async (req, res) => {\n  const user = await db.users.find(req.params.id);\n  if (!user) return res.status(404).json({ error: \'Not found\' });\n  res.json(user);\n}));\n```\n\nBetter: upgrade to Express 5, which catches async rejections automatically, or use Fastify, which supports it natively.\n\nAnd always add a server-level timeout so no request hangs forever regardless of the cause.\n\nRelated concepts: the four-argument error handler, unhandledRejection, and the difference between synchronous and asynchronous errors in middleware.',
    },
    keyPoints: [
      { ar: 'Express 4 لا يلتقط rejections', en: 'Express 4 ignores async rejections', terms: ['express 4', 'rejection', 'promise', 'not caught', 'لا يلتقط', 'ignore', 'async handler'] },
      { ar: 'next(err) لا يُستدعى فلا رد', en: 'next(err) never called, no response', terms: ['next(err)', 'next', 'no response', 'hang', 'يتعلق', 'timeout', 'مهلة'] },
      { ar: 'غلاف asyncHandler أو Express 5', en: 'asyncHandler wrapper or Express 5', terms: ['wrapper', 'غلاف', 'catch(next)', 'asynchandler', 'express 5', 'fastify', 'try/catch'] },
    ],
  },
  {
    id: 'debug-node-listener-leak',
    difficulty: advanced,
    kind: 'debug',
    depth: 'debug',
    code: `const bus = new EventEmitter();

app.get('/orders/:id/status', (req, res) => {
  bus.on('order:updated', (order) => {
    if (order.id === req.params.id) res.json(order);
  });
});`,
    question: {
      ar: 'بعد ساعات من التشغيل يظهر تحذير MaxListenersExceededWarning وتتزايد الذاكرة باستمرار. لماذا؟',
      en: 'After hours of running you see MaxListenersExceededWarning and memory grows steadily. Why?',
    },
    answer: {
      ar: 'التشخيص: كل طلب يضيف مستمعًا جديدًا إلى bus ولا يزيله أبدًا. المستمع يحتفظ بـ req وres في الـ closure، فلا تُحرَّر تلك الكائنات أيضًا. بعد آلاف الطلبات: آلاف المستمعين وآلاف الطلبات العالقة في الذاكرة.\n\nلماذا: EventEmitter يحتفظ بمرجع قوي لكل مستمع حتى تُزيله صراحةً. التحذير عند 10 مستمعين ليس خطأ زائفًا — هو بالضبط لاكتشاف هذا النمط. وهناك خطأ ثانٍ: إن وصل تحديث مطابق مرتين يُستدعى res.json مرتين ويظهر "headers already sent".\n\nالإصلاح: أزل المستمع بعد الاستخدام وعند انقطاع العميل، وحدّد مهلة:\n```js\napp.get(\'/orders/:id/status\', (req, res) => {\n  const onUpdate = (order) => {\n    if (order.id !== req.params.id) return;\n    cleanup();\n    res.json(order);\n  };\n  const cleanup = () => {\n    bus.off(\'order:updated\', onUpdate);\n    clearTimeout(timer);\n  };\n  const timer = setTimeout(() => { cleanup(); res.status(204).end(); }, 30_000);\n\n  bus.on(\'order:updated\', onUpdate);\n  req.on(\'close\', cleanup);\n});\n```\n\nالأفضل: هذا نمط long-polling يدوي؛ Server-Sent Events أو WebSocket مع اشتراك لكل عميل يُلغى عند الانقطاع أنسب، وإن كانت عدة نسخ من الخادم فالحدث يجب أن يمر عبر Redis Pub/Sub.\n\nمفاهيم مرتبطة: المستمعون غير المزالين كأشهر سبب للتسريب، وreq.on(\'close\') لاكتشاف انقطاع العميل، وتشخيص التسريبات بلقطات الـ heap.',
      en: 'Diagnosis: every request adds a new listener to bus and never removes it. The listener holds req and res in its closure, so those objects are never freed either. After thousands of requests: thousands of listeners and thousands of requests pinned in memory.\n\nWhy: EventEmitter keeps a strong reference to every listener until you remove it explicitly. The warning at 10 listeners is not a false alarm — it exists precisely to catch this pattern. There is a second bug too: if a matching update arrives twice, res.json is called twice and you get "headers already sent".\n\nFix: remove the listener after use and on client disconnect, and add a timeout:\n```js\napp.get(\'/orders/:id/status\', (req, res) => {\n  const onUpdate = (order) => {\n    if (order.id !== req.params.id) return;\n    cleanup();\n    res.json(order);\n  };\n  const cleanup = () => {\n    bus.off(\'order:updated\', onUpdate);\n    clearTimeout(timer);\n  };\n  const timer = setTimeout(() => { cleanup(); res.status(204).end(); }, 30_000);\n\n  bus.on(\'order:updated\', onUpdate);\n  req.on(\'close\', cleanup);\n});\n```\n\nBetter: this is hand-rolled long polling; Server-Sent Events or WebSocket with a per-client subscription torn down on disconnect fits better, and with several server instances the event must travel through Redis Pub/Sub.\n\nRelated concepts: unremoved listeners as the most common leak, req.on(\'close\') for detecting client disconnects, and diagnosing leaks with heap snapshots.',
    },
    keyPoints: [
      { ar: 'مستمع لكل طلب بلا إزالة', en: 'A listener per request, never removed', terms: ['listener', 'مستمع', 'never removed', 'لا يزال', 'off', 'removelistener', 'every request', 'كل طلب', 'accumulat'] },
      { ar: 'الـ closure تحتجز req/res', en: 'The closure retains req/res', terms: ['closure', 'retain', 'يحتفظ', 'req', 'res', 'memory', 'ذاكرة', 'reference'] },
      { ar: 'التنظيف عند الاستخدام والانقطاع والمهلة', en: 'Cleanup on use, disconnect and timeout', terms: ['cleanup', 'تنظيف', 'close', 'انقطاع', 'timeout', 'مهلة', 'once', 'sse', 'websocket'] },
    ],
  },
];
