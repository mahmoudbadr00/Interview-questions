// data/categories/react.js
import { DIFFICULTY } from '../difficulty.js';

const { beginner, intermediate, advanced } = DIFFICULTY;

export const react = [
  // ---------------------------------------------------------------- BEGINNER
  {
    id: 'react-what-is',
    difficulty: beginner,
    question: {
      ar: 'ما هو React؟',
      en: 'What is React?',
    },
    answer: {
      ar: 'React مكتبة JavaScript لبناء واجهات المستخدم، طوّرتها Meta.\n\nفكرتها الأساسية: تصف الواجهة كدالة من الحالة (UI = f(state))، ويتولى React تحديث الـ DOM عند تغيّر الحالة بدل أن تعدّله يدويًا.\n\nمبادئها الأربعة:\n1. المكوّنات (components): وحدات مستقلة قابلة لإعادة الاستخدام.\n2. تدفق البيانات في اتجاه واحد من الأب إلى الابن.\n3. الوصفية (declarative): تصف ما تريد لا خطوات الوصول إليه.\n4. Virtual DOM لتحديد أقل تحديث ممكن على الـ DOM الحقيقي.\n\nنقطة دقيقة يُسأل عنها: React مكتبة وليست إطار عمل — لا تفرض عليك التوجيه (routing) ولا إدارة الحالة ولا جلب البيانات؛ هذه تختارها بنفسك. Next.js هو الإطار المبني فوقها.',
      en: 'React is a JavaScript library for building user interfaces, created by Meta.\n\nThe core idea is that you describe your UI as a function of state (UI = f(state)), and React updates the DOM when state changes rather than you doing it by hand.\n\nFour principles:\n1. Components — independent, reusable units.\n2. One-way data flow from parent to child.\n3. Declarative — you describe what you want, not the steps to get there.\n4. A Virtual DOM used to compute the minimal set of real DOM updates.\n\nA nuance worth stating: React is a library, not a framework. It does not dictate routing, state management or data fetching — you choose those. Next.js is the framework built on top of it.',
    },
  },
  {
    id: 'react-components',
    difficulty: beginner,
    question: {
      ar: 'ما هو الـ Component في React؟',
      en: 'What is a component in React?',
    },
    answer: {
      ar: 'المكوّن دالة JavaScript تستقبل props وتعيد ما يجب عرضه (JSX). هو وحدة البناء الأساسية في React.\n\n```jsx\nfunction UserCard({ name, role }) {\n  return (\n    <article className="card">\n      <h3>{name}</h3>\n      <p>{role}</p>\n    </article>\n  );\n}\n```\n\nقواعد أساسية:\n• اسم المكوّن يبدأ بحرف كبير — بهذا يميّز React بينه وبين وسم HTML عادي.\n• يجب أن يكون نقيًا أثناء التصيير: نفس الـ props تعطي نفس الناتج، ولا آثار جانبية داخل جسم المكوّن.\n• يعيد عنصرًا واحدًا (يمكن تغليف عدة عناصر بـ Fragment).\n\nالمبدأ التصميمي: مكوّن واحد = مسؤولية واحدة. المكوّن الذي يجلب البيانات ويرسم الجدول ويدير النموذج يجب تقسيمه. هذا يسهّل الاختبار وإعادة الاستخدام والقراءة.',
      en: 'A component is a JavaScript function that receives props and returns what should be rendered (JSX). It is the fundamental building block of React.\n\n```jsx\nfunction UserCard({ name, role }) {\n  return (\n    <article className="card">\n      <h3>{name}</h3>\n      <p>{role}</p>\n    </article>\n  );\n}\n```\n\nThe rules:\n• Component names start with a capital letter — that is how React distinguishes them from plain HTML tags.\n• They must be pure during render: same props, same output, and no side effects in the function body.\n• They return a single element (wrap several in a Fragment).\n\nThe design principle is one component, one responsibility. A component that fetches data, renders a table and manages a form should be split. That makes it testable, reusable and readable.',
    },
  },
  {
    id: 'react-jsx',
    difficulty: beginner,
    question: {
      ar: 'ما هي JSX؟',
      en: 'What is JSX?',
    },
    answer: {
      ar: 'JSX امتداد لصياغة JavaScript يسمح بكتابة شيء يشبه HTML داخل الكود. المتصفح لا يفهمها، لذلك تُحوَّل أثناء البناء إلى استدعاءات دوال.\n\n```jsx\nconst element = <h1 className="title">مرحبًا</h1>;\n\n// تتحول إلى\nconst element = jsx("h1", { className: "title", children: "مرحبًا" });\n```\n\nالفروق عن HTML:\n• className بدل class، وhtmlFor بدل for، لأن class وfor كلمتان محجوزتان في JavaScript.\n• الخصائص بصيغة camelCase: onClick وtabIndex.\n• { } لإدراج أي تعبير JavaScript.\n• كل الوسوم يجب أن تُغلق، بما فيها <img />.\n• style يستقبل كائنًا لا نصًا: style={{ color: "red" }}.\n\nملاحظة مهمة: JSX ليست إلزامية — يمكن كتابة React بدونها — لكنها الأوضح عمليًا.\n\nوملاحظة أمنية مطمئنة: React يهرّب (escape) القيم المُدرجة تلقائيًا، فلا ينشأ XSS إلا إذا استخدمت dangerouslySetInnerHTML عمدًا.',
      en: 'JSX is a syntax extension for JavaScript that lets you write HTML-like markup in your code. The browser does not understand it, so it is compiled at build time into function calls.\n\n```jsx\nconst element = <h1 className="title">Hello</h1>;\n\n// compiles to\nconst element = jsx("h1", { className: "title", children: "Hello" });\n```\n\nDifferences from HTML:\n• className instead of class, htmlFor instead of for, because class and for are reserved words in JavaScript.\n• Attributes are camelCase: onClick, tabIndex.\n• { } embeds any JavaScript expression.\n• All tags must be closed, including <img />.\n• style takes an object, not a string: style={{ color: "red" }}.\n\nWorth noting: JSX is optional — you can write React without it — but it is far clearer in practice.\n\nAnd a reassuring security point: React escapes interpolated values automatically, so XSS only arises if you deliberately use dangerouslySetInnerHTML.',
    },
  },
  {
    id: 'react-props-vs-state',
    difficulty: beginner,
    question: {
      ar: 'ما الفرق بين state و props في React؟',
      en: 'What is the difference between state and props in React?',
    },
    answer: {
      ar: 'props بيانات تأتي من الأب إلى الابن، والمكوّن لا يملك تعديلها — هي للقراءة فقط.\nstate بيانات يملكها المكوّن ويديرها بنفسه، وتغييرها يعيد تصيير المكوّن.\n\n```jsx\nfunction Counter({ step }) {          // props — من الخارج\n  const [count, setCount] = useState(0);   // state — داخلية\n  return <button onClick={() => setCount(count + step)}>{count}</button>;\n}\n```\n\nكيف أقرّر أيّهما أستخدم؟ أسأل: هل تتغير هذه القيمة بمرور الوقت بفعل هذا المكوّن؟ إن نعم فهي state، وإن كانت تأتي جاهزة من الخارج فهي props.\n\nقواعد مهمة:\n• لا تعدّل props إطلاقًا؛ إذا احتاج الابن تغيير قيمة فليستدعِ دالة مرّرها الأب.\n• لا تنسخ props إلى state إلا إذا كنت تريد قيمة أولية فقط — وإلا حدث عدم تزامن بين الاثنين، وهو خطأ شائع.\n• قلّل الحالة قدر الإمكان: ما يمكن اشتقاقه أثناء التصيير لا يحتاج state.',
      en: 'Props are data passed from parent to child, and the component cannot modify them — they are read-only.\nState is data the component owns and manages itself, and changing it re-renders the component.\n\n```jsx\nfunction Counter({ step }) {          // props — from outside\n  const [count, setCount] = useState(0);   // state — internal\n  return <button onClick={() => setCount(count + step)}>{count}</button>;\n}\n```\n\nHow do I decide? I ask: does this value change over time because of this component? If yes it is state; if it arrives ready-made from outside it is props.\n\nImportant rules:\n• Never mutate props; if a child needs to change something, it calls a function the parent passed down.\n• Do not copy props into state unless you only want an initial value — otherwise the two drift out of sync, a very common bug.\n• Keep state minimal: anything you can derive during render does not need to be state.',
    },
  },
  {
    id: 'react-usestate',
    difficulty: beginner,
    question: {
      ar: 'كيف يعمل useState؟',
      en: 'How does useState work?',
    },
    answer: {
      ar: 'useState يضيف حالة محلية لمكوّن دالي، ويعيد مصفوفة: القيمة الحالية ودالة تحديثها.\n\n```jsx\nconst [count, setCount] = useState(0);\n\nsetCount(count + 1);                 // تحديث مباشر\nsetCount((prev) => prev + 1);        // الصيغة الدالية — الأأمن\n```\n\nنقاط جوهرية:\n\n1. التحديثات مجمّعة (batched) وغير فورية: بعد استدعاء setCount لا تتغير قيمة count في نفس الدالة، لأن القيمة ثابتة لهذه الدورة من التصيير.\n```jsx\nsetCount(count + 1);\nsetCount(count + 1);   // الزيادة واحدة فقط!\nsetCount((c) => c + 1);\nsetCount((c) => c + 1); // هنا الزيادة اثنتان\n```\n\n2. الحالة تُستبدل ولا تُدمج، بعكس setState في الأصناف:\n```jsx\nsetUser({ ...user, name: "Ali" });   // يجب نسخ الباقي بنفسك\n```\n\n3. التهيئة الكسولة: إذا كانت القيمة الأولية مكلفة الحساب مرّر دالة لا قيمة:\n```jsx\nconst [data] = useState(() => expensiveInit());\n```\n\n4. React يقارن بـ Object.is؛ تعديل كائن الحالة مباشرة لا يُطلق إعادة تصيير.',
      en: 'useState adds local state to a function component and returns a pair: the current value and a setter.\n\n```jsx\nconst [count, setCount] = useState(0);\n\nsetCount(count + 1);                 // direct update\nsetCount((prev) => prev + 1);        // functional form — safer\n```\n\nThe essentials:\n\n1. Updates are batched and not immediate: after calling setCount, count does not change within the same function, because the value is fixed for that render.\n```jsx\nsetCount(count + 1);\nsetCount(count + 1);   // increments once only!\nsetCount((c) => c + 1);\nsetCount((c) => c + 1); // this increments twice\n```\n\n2. State is replaced, not merged, unlike class setState:\n```jsx\nsetUser({ ...user, name: "Ali" });   // you must spread the rest yourself\n```\n\n3. Lazy initialisation: if the initial value is expensive to compute, pass a function rather than a value:\n```jsx\nconst [data] = useState(() => expensiveInit());\n```\n\n4. React compares with Object.is, so mutating the state object in place does not trigger a re-render.',
    },
  },
  {
    id: 'react-setstate',
    difficulty: beginner,
    question: {
      ar: 'ما هو setState() في مكوّنات الأصناف وكيف يختلف عن useState؟',
      en: 'What is setState() in class components and how does it differ from useState?',
    },
    answer: {
      ar: 'setState هي الطريقة الوحيدة لتحديث الحالة في مكوّن صنف، وتخبر React بأن إعادة التصيير مطلوبة.\n\n```jsx\nthis.setState({ count: this.state.count + 1 });\n\n// الصيغة الدالية — الصحيحة عند الاعتماد على القيمة السابقة\nthis.setState((prevState) => ({ count: prevState.count + 1 }));\n\n// دالة تُستدعى بعد اكتمال التحديث\nthis.setState({ count: 1 }, () => console.log(this.state.count));\n```\n\nالفروق عن useState:\n1. الدمج: setState تدمج الكائن الممرَّر مع الحالة الحالية تلقائيًا، بينما useState تستبدل القيمة بالكامل.\n2. الحالة كلها في كائن واحد في الأصناف، بينما useState يسمح بتقسيمها إلى متغيرات منفصلة — وهذا أوضح عمليًا.\n3. setState تدعم callback بعد التحديث؛ في الـ hooks يُستبدل ذلك بـ useEffect.\n\nملاحظة مشتركة بين الاثنين: التحديث غير متزامن ومجمّع، لذلك قراءة this.state مباشرة بعده تعطي القيمة القديمة.\n\nفي الكود الجديد نستخدم المكوّنات الدالية والـ hooks؛ معرفة setState مطلوبة للتعامل مع الكود القديم.',
      en: 'setState is the only way to update state in a class component, and it tells React a re-render is needed.\n\n```jsx\nthis.setState({ count: this.state.count + 1 });\n\n// functional form — correct when the update depends on the previous value\nthis.setState((prevState) => ({ count: prevState.count + 1 }));\n\n// a callback that runs after the update completes\nthis.setState({ count: 1 }, () => console.log(this.state.count));\n```\n\nDifferences from useState:\n1. Merging: setState shallow-merges the object into current state, while useState replaces the value entirely.\n2. Class state lives in one object, whereas useState lets you split it into separate variables — clearer in practice.\n3. setState supports a post-update callback; with hooks you use useEffect instead.\n\nWhat they share: updates are asynchronous and batched, so reading this.state immediately afterwards gives you the old value.\n\nNew code uses function components and hooks; knowing setState matters for maintaining older codebases.',
    },
  },
  {
    id: 'react-events',
    difficulty: beginner,
    question: {
      ar: 'كيف تتعامل مع الأحداث (Events) في React؟',
      en: 'How do you handle events in React?',
    },
    answer: {
      ar: '```jsx\n<button onClick={handleClick}>اضغط</button>\n<button onClick={() => remove(item.id)}>حذف</button>\n<input onChange={(e) => setValue(e.target.value)} />\n<form onSubmit={handleSubmit}>...</form>\n```\n\nالفروق عن DOM العادي:\n• الأسماء بصيغة camelCase: onClick لا onclick.\n• تمرّر دالة لا نصًا.\n• لمنع السلوك الافتراضي استخدم event.preventDefault() — لا يكفي return false.\n\nخطأ شائع جدًا:\n```jsx\n<button onClick={handleClick()}>   // خطأ: تُستدعى فورًا عند التصيير\n<button onClick={handleClick}>     // صحيح\n```\n\nReact يستخدم نظام أحداث اصطناعية (SyntheticEvent) يغلّف الحدث الأصلي لتوحيد السلوك عبر المتصفحات، ويعلّق المستمعين على جذر التطبيق بدل كل عنصر. للوصول للحدث الأصلي: event.nativeEvent.\n\nملاحظة أداء: الدوال السهمية داخل JSX تُنشأ جديدة كل تصيير. هذا مقبول في الغالبية العظمى من الحالات، ولا يستحق useCallback إلا مع مكوّن مغلّف بـ React.memo أو قائمة كبيرة جدًا.',
      en: '```jsx\n<button onClick={handleClick}>Click</button>\n<button onClick={() => remove(item.id)}>Delete</button>\n<input onChange={(e) => setValue(e.target.value)} />\n<form onSubmit={handleSubmit}>...</form>\n```\n\nDifferences from plain DOM:\n• Names are camelCase: onClick, not onclick.\n• You pass a function, not a string.\n• To cancel default behaviour call event.preventDefault() — returning false does not work.\n\nA very common mistake:\n```jsx\n<button onClick={handleClick()}>   // wrong: called immediately during render\n<button onClick={handleClick}>     // correct\n```\n\nReact uses a synthetic event system that wraps the native event for cross-browser consistency, and attaches listeners at the app root rather than on each element. The native event is available as event.nativeEvent.\n\nA performance note: arrow functions inside JSX are recreated every render. That is fine in the vast majority of cases, and only worth useCallback when the child is wrapped in React.memo or the list is very large.',
    },
  },
  {
    id: 'react-conditional-rendering',
    difficulty: beginner,
    question: {
      ar: 'كيف تنفّذ التصيير الشرطي (conditional rendering) في React؟',
      en: 'How do you do conditional rendering in React?',
    },
    answer: {
      ar: '```jsx\n// الخروج المبكر — الأوضح للحالات الكبيرة\nif (isLoading) return <Spinner />;\nif (error) return <ErrorMessage error={error} />;\n\n// الثلاثي — لاختيار بين خيارين\n{isLoggedIn ? <Dashboard /> : <LoginForm />}\n\n// && — للعرض الشرطي البسيط\n{hasNotifications && <Badge count={count} />}\n```\n\nفخ مهم جدًا مع && :\n```jsx\n{items.length && <List items={items} />}\n// إذا كانت المصفوفة فارغة يُطبع 0 على الشاشة!\n```\nالسبب أن React يعرض الأرقام ولا يتجاهلها. الحل: `items.length > 0 && ...` أو استخدام الثلاثي مع null.\n\nملاحظات:\n• React يتجاهل null وundefined وfalse، لذلك return null تعني عدم عرض شيء.\n• للحالات المتعددة، كائن يربط الحالة بالمكوّن أنظف من سلسلة شروط متداخلة.\n• لا تُخفِ العناصر بـ CSS إذا كان الهدف عدم عرضها منطقيًا — العنصر يبقى في DOM ويظل متاحًا لقارئات الشاشة.',
      en: '```jsx\n// early return — clearest for large branches\nif (isLoading) return <Spinner />;\nif (error) return <ErrorMessage error={error} />;\n\n// ternary — choosing between two options\n{isLoggedIn ? <Dashboard /> : <LoginForm />}\n\n// && — simple conditional display\n{hasNotifications && <Badge count={count} />}\n```\n\nAn important trap with && :\n```jsx\n{items.length && <List items={items} />}\n// with an empty array this renders a literal 0 on screen!\n```\nBecause React renders numbers rather than ignoring them. The fix is `items.length > 0 && ...` or a ternary with null.\n\nNotes:\n• React ignores null, undefined and false, so returning null renders nothing.\n• For several cases, a map from state to component reads better than nested ternaries.\n• Do not hide elements with CSS when you mean not to render them — the element stays in the DOM and remains exposed to screen readers.',
    },
  },
  {
    id: 'react-lists-keys',
    difficulty: beginner,
    question: {
      ar: 'كيف تعرض القوائم في React؟ وما هي الـ Keys ولماذا تُستخدم؟',
      en: 'How do you render lists in React, and what are keys for?',
    },
    answer: {
      ar: 'نستخدم map لتحويل مصفوفة بيانات إلى مصفوفة عناصر:\n```jsx\n<ul>\n  {users.map((user) => (\n    <li key={user.id}>{user.name}</li>\n  ))}\n</ul>\n```\n\nالـ key معرّف ثابت يساعد React على معرفة أي عنصر تغيّر أو أُضيف أو حُذف بين عمليتَي تصيير. بدونه يقارن React بالترتيب فقط.\n\nلماذا لا نستخدم الفهرس (index) كـ key؟ لأنه يتغير عند الإضافة أو الحذف أو إعادة الترتيب، فيربط React العنصر الخطأ بالحالة الخطأ.\n\nمثال ملموس: قائمة مهام لكل منها input. إذا حذفت العنصر الأول واستخدمت الفهرس كـ key، سترى النص المكتوب في أول input ينتقل إلى عنصر آخر — لأن React اعتقد أن العنصر 0 ما زال نفسه.\n\nمتى يكون الفهرس مقبولًا؟ فقط إذا كانت القائمة ثابتة تمامًا ولا تُرتَّب ولا تُفلتر ولا تحتوي على حالة داخلية.\n\nنقاط أخرى:\n• الـ key يجب أن يكون فريدًا بين الإخوة فقط، لا عالميًا.\n• لا تستخدم Math.random() كـ key — ينتج مفتاحًا جديدًا كل تصيير فيُعاد إنشاء العنصر بالكامل.\n• الـ key ليست prop ولا يمكن قراءتها داخل المكوّن.',
      en: 'You map an array of data to an array of elements:\n```jsx\n<ul>\n  {users.map((user) => (\n    <li key={user.id}>{user.name}</li>\n  ))}\n</ul>\n```\n\nA key is a stable identity that lets React tell which item changed, was added or was removed between renders. Without one, React compares by position only.\n\nWhy not use the array index? Because it shifts when items are added, removed or reordered, so React associates the wrong element with the wrong state.\n\nA concrete example: a todo list where each row has an input. Delete the first row while using index keys and you will see the text typed in the first input jump to another row — because React believed item 0 was still the same item.\n\nWhen is an index acceptable? Only when the list is completely static: never reordered, never filtered, and with no internal state.\n\nOther points:\n• Keys only need to be unique among siblings, not globally.\n• Never use Math.random() as a key — it produces a new key each render and forces a full remount.\n• key is not a prop and cannot be read inside the component.',
    },
  },
  {
    id: 'react-forms',
    difficulty: beginner,
    question: {
      ar: 'كيف تتعامل مع النماذج (Forms) في React؟',
      en: 'How do you handle forms in React?',
    },
    answer: {
      ar: 'الأسلوب الشائع هو المكوّنات المُتحكَّم بها: القيمة تأتي من الحالة وكل تغيير يمر عبر onChange.\n\n```jsx\nfunction LoginForm({ onSubmit }) {\n  const [form, setForm] = useState({ email: "", password: "" });\n\n  const handleChange = (e) => {\n    const { name, value } = e.target;\n    setForm((prev) => ({ ...prev, [name]: value }));\n  };\n\n  const handleSubmit = (e) => {\n    e.preventDefault();          // ضروري لمنع إعادة تحميل الصفحة\n    onSubmit(form);\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input name="email" value={form.email} onChange={handleChange} />\n      <input name="password" type="password" value={form.password} onChange={handleChange} />\n      <button type="submit">دخول</button>\n    </form>\n  );\n}\n```\n\nنقاط عملية:\n• استخدم onSubmit على النموذج لا onClick على الزر، حتى يعمل الإرسال بمفتاح Enter.\n• تمرير value بدون onChange يجعل الحقل للقراءة فقط ويطلق تحذيرًا؛ إن كان مقصودًا استخدم readOnly.\n• لا تمرّر undefined كقيمة أولية وإلا تحوّل الحقل من غير متحكَّم به إلى متحكَّم به لاحقًا وظهر تحذير.\n\nللنماذج الكبيرة استخدم مكتبة مثل React Hook Form: تقلّل عمليات إعادة التصيير كثيرًا وتتكامل مع Zod للتحقق. والتحقق في الواجهة للراحة فقط — التحقق الحقيقي يبقى على الخادم.',
      en: 'The common approach is controlled components: the value comes from state and every change goes through onChange.\n\n```jsx\nfunction LoginForm({ onSubmit }) {\n  const [form, setForm] = useState({ email: "", password: "" });\n\n  const handleChange = (e) => {\n    const { name, value } = e.target;\n    setForm((prev) => ({ ...prev, [name]: value }));\n  };\n\n  const handleSubmit = (e) => {\n    e.preventDefault();          // required to stop a full page reload\n    onSubmit(form);\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input name="email" value={form.email} onChange={handleChange} />\n      <input name="password" type="password" value={form.password} onChange={handleChange} />\n      <button type="submit">Sign in</button>\n    </form>\n  );\n}\n```\n\nPractical points:\n• Use onSubmit on the form rather than onClick on the button, so pressing Enter works.\n• Passing value without onChange makes the field read-only and logs a warning; if that is intended, use readOnly.\n• Never start with undefined as the value, or the input flips from uncontrolled to controlled later and React warns about it.\n\nFor large forms use a library such as React Hook Form: it drastically reduces re-renders and integrates with Zod for validation. And client-side validation is a convenience — the real validation stays on the server.',
    },
  },
  {
    id: 'react-controlled-uncontrolled',
    difficulty: beginner,
    question: {
      ar: 'ما الفرق بين controlled و uncontrolled components؟',
      en: 'What is the difference between controlled and uncontrolled components?',
    },
    answer: {
      ar: 'في المكوّن المُتحكَّم به، القيمة يملكها React عبر الحالة، والـ DOM مجرد عارض.\nفي المكوّن غير المُتحكَّم به، القيمة يملكها الـ DOM وتقرأها عند الحاجة عبر ref.\n\n```jsx\n// متحكَّم به\n<input value={value} onChange={(e) => setValue(e.target.value)} />\n\n// غير متحكَّم به\nconst inputRef = useRef();\n<input defaultValue="" ref={inputRef} />\n// القراءة: inputRef.current.value\n```\n\nمتى أختار أيًا منهما؟\n\nالمتحكَّم به عندما أحتاج التفاعل مع كل تغيير: تحقق فوري، تنسيق أثناء الكتابة، تعطيل زر الإرسال، اعتماد حقل على آخر. وهو الخيار الافتراضي.\n\nغير المتحكَّم به عندما أحتاج القيمة عند الإرسال فقط، أو مع حقول الملفات (input type="file" غير متحكَّم به دائمًا)، أو عند التكامل مع مكتبة خارجية تدير الـ DOM بنفسها. ميزته الرئيسية: لا إعادة تصيير مع كل حرف، وهو ما تستفيد منه مكتبات مثل React Hook Form.\n\nتحذير: لا تخلط بينهما — الانتقال من value={undefined} إلى value={"x"} يجعل React يحذّر من تحوّل المكوّن من غير متحكَّم به إلى متحكَّم به.',
      en: 'In a controlled component React owns the value through state, and the DOM is just a display.\nIn an uncontrolled component the DOM owns the value and you read it when needed via a ref.\n\n```jsx\n// controlled\n<input value={value} onChange={(e) => setValue(e.target.value)} />\n\n// uncontrolled\nconst inputRef = useRef();\n<input defaultValue="" ref={inputRef} />\n// read it with inputRef.current.value\n```\n\nWhen do I choose which?\n\nControlled when I need to react to every change: live validation, formatting as you type, disabling submit, one field depending on another. It is the default choice.\n\nUncontrolled when I only need the value on submit, for file inputs (input type="file" is always uncontrolled), or when integrating a third-party library that manages the DOM itself. Its main advantage is no re-render per keystroke, which is exactly what React Hook Form exploits.\n\nA warning: do not mix them — going from value={undefined} to value={"x"} makes React warn that the component switched from uncontrolled to controlled.',
    },
  },
  {
    id: 'react-useeffect-basics',
    difficulty: beginner,
    question: {
      ar: 'ما هو useEffect ومتى تستخدمه؟',
      en: 'What is useEffect and when do you use it?',
    },
    answer: {
      ar: 'useEffect يُستخدم للمزامنة مع أنظمة خارج React: الشبكة، الاشتراكات، المؤقتات، DOM المباشر، مكتبات خارجية.\n\n```jsx\nuseEffect(() => {\n  const controller = new AbortController();\n\n  fetch(`/api/users/${userId}`, { signal: controller.signal })\n    .then((r) => r.json())\n    .then(setUser)\n    .catch((e) => { if (e.name !== "AbortError") setError(e); });\n\n  return () => controller.abort();     // دالة التنظيف\n}, [userId]);                          // مصفوفة الاعتماديات\n```\n\nالأجزاء الثلاثة:\n1. جسم التأثير: ما يُنفَّذ بعد التصيير.\n2. دالة التنظيف: تُنفَّذ قبل التأثير التالي وعند إزالة المكوّن.\n3. مصفوفة الاعتماديات: [] مرة واحدة، [x] عند تغيّر x، وحذفها يعني كل تصيير.\n\nما لا يجب استخدامه فيه — وهو خطأ شائع جدًا:\n• حساب قيمة مشتقة من الحالة أو الـ props؛ احسبها مباشرة أثناء التصيير.\n• الاستجابة لحدث مستخدم؛ ضع المنطق في معالج الحدث نفسه.\n• مزامنة حالتين معًا؛ الأفضل إعادة تنظيم الحالة.\n\nالقاعدة: useEffect أداة للخروج من React إلى العالم الخارجي، لا أداة لتنسيق البيانات داخل React.',
      en: 'useEffect is for synchronising with systems outside React: the network, subscriptions, timers, direct DOM work, third-party libraries.\n\n```jsx\nuseEffect(() => {\n  const controller = new AbortController();\n\n  fetch(`/api/users/${userId}`, { signal: controller.signal })\n    .then((r) => r.json())\n    .then(setUser)\n    .catch((e) => { if (e.name !== "AbortError") setError(e); });\n\n  return () => controller.abort();     // cleanup\n}, [userId]);                          // dependency array\n```\n\nThe three parts:\n1. The effect body — runs after render.\n2. The cleanup function — runs before the next effect and on unmount.\n3. The dependency array — [] means once, [x] means when x changes, omitting it means every render.\n\nWhat it should *not* be used for, and this is a very common mistake:\n• Computing a value derived from state or props — compute it during render instead.\n• Responding to a user action — put that logic in the event handler.\n• Keeping two pieces of state in sync — restructure the state instead.\n\nThe rule: useEffect is an escape hatch out of React to the outside world, not a tool for shuffling data around inside React.',
    },
  },
  {
    id: 'react-fragment',
    difficulty: beginner,
    question: {
      ar: 'ما هو React.Fragment؟',
      en: 'What is React.Fragment?',
    },
    answer: {
      ar: 'Fragment يسمح بإرجاع عدة عناصر من مكوّن دون إضافة عنصر إضافي إلى الـ DOM.\n\n```jsx\n// يضيف div زائدًا\nreturn (\n  <div>\n    <td>الاسم</td>\n    <td>البريد</td>\n  </div>\n);\n\n// نظيف\nreturn (\n  <>\n    <td>الاسم</td>\n    <td>البريد</td>\n  </>\n);\n```\n\nلماذا نحتاجه؟\n1. HTML صالح: <tr> لا يقبل <div> بداخله، وكذلك <ul> لا يقبل إلا <li>.\n2. لا يكسر تخطيطات Flexbox وGrid — العنصر الزائد يصبح ابنًا مباشرًا ويفسد التوزيع.\n3. شجرة DOM أنظف وأخف.\n\nالصيغة المختصرة <> </> لا تقبل خصائص. إذا احتجت key (عند التكرار) استخدم الصيغة الكاملة:\n```jsx\n{items.map((item) => (\n  <React.Fragment key={item.id}>\n    <dt>{item.term}</dt>\n    <dd>{item.description}</dd>\n  </React.Fragment>\n))}\n```',
      en: 'A Fragment lets a component return several elements without adding an extra node to the DOM.\n\n```jsx\n// adds a pointless div\nreturn (\n  <div>\n    <td>Name</td>\n    <td>Email</td>\n  </div>\n);\n\n// clean\nreturn (\n  <>\n    <td>Name</td>\n    <td>Email</td>\n  </>\n);\n```\n\nWhy do we need it?\n1. Valid HTML: a <tr> cannot contain a <div>, and a <ul> only accepts <li> children.\n2. It does not break Flexbox and Grid layouts, where an extra wrapper becomes a direct child and ruins the arrangement.\n3. A lighter, cleaner DOM tree.\n\nThe shorthand <> </> accepts no attributes. When you need a key (inside a map) use the full form:\n```jsx\n{items.map((item) => (\n  <React.Fragment key={item.id}>\n    <dt>{item.term}</dt>\n    <dd>{item.description}</dd>\n  </React.Fragment>\n))}\n```',
    },
  },
  {
    id: 'react-hooks-intro',
    difficulty: beginner,
    question: {
      ar: 'ما هي Hooks في React وما قواعد استخدامها؟',
      en: 'What are hooks in React and what are the rules for using them?',
    },
    answer: {
      ar: 'الـ hooks دوال تسمح للمكوّنات الدالية باستخدام الحالة ودورة الحياة وميزات React الأخرى. أُضيفت في React 16.8 وجعلت مكوّنات الأصناف غير ضرورية عمليًا.\n\nالأشهر:\n• useState: حالة محلية.\n• useEffect: المزامنة مع العالم الخارجي.\n• useContext: قراءة قيمة من Context.\n• useRef: قيمة ثابتة لا تسبب إعادة تصيير، أو مرجع لعنصر DOM.\n• useMemo وuseCallback: تخزين مؤقت للقيم والدوال.\n• useReducer: حالة معقّدة بمنطق انتقالات واضح.\n\nقاعدتان إلزاميتان:\n1. تُستدعى في المستوى الأعلى من المكوّن فقط — لا داخل شرط أو حلقة أو دالة متداخلة.\n2. تُستدعى من مكوّنات React أو من hooks مخصصة فقط.\n\nلماذا؟ لأن React يربط كل hook بترتيب استدعائه لا باسمه. استدعاء مشروط يغيّر الترتيب بين تصييرين فتختلط الحالات ببعضها.\n\nوللسبب نفسه يجب أن يبدأ اسم أي hook مخصص بـ use، حتى يتعرف عليه eslint-plugin-react-hooks ويطبّق القواعد.',
      en: 'Hooks are functions that let function components use state, lifecycle and other React features. They arrived in React 16.8 and made class components largely unnecessary.\n\nThe main ones:\n• useState — local state.\n• useEffect — synchronising with the outside world.\n• useContext — reading a context value.\n• useRef — a stable value that does not trigger re-renders, or a DOM reference.\n• useMemo and useCallback — memoising values and functions.\n• useReducer — complex state with explicit transitions.\n\nTwo mandatory rules:\n1. Call them only at the top level of a component — never inside a condition, loop or nested function.\n2. Call them only from React components or from custom hooks.\n\nWhy? Because React associates each hook with its call order, not its name. A conditional call changes that order between renders and the state values get mixed up.\n\nFor the same reason a custom hook\'s name must start with use, so eslint-plugin-react-hooks recognises it and enforces the rules.',
    },
  },
  {
    id: 'react-functional-vs-class',
    difficulty: beginner,
    question: {
      ar: 'ما الفرق بين Functional Component و Class Component؟',
      en: 'What is the difference between function components and class components?',
    },
    answer: {
      ar: '```jsx\n// مكوّن صنف\nclass Welcome extends React.Component {\n  state = { count: 0 };\n  componentDidMount() { /* ... */ }\n  render() { return <h1>{this.props.name}</h1>; }\n}\n\n// مكوّن دالي\nfunction Welcome({ name }) {\n  const [count, setCount] = useState(0);\n  useEffect(() => { /* ... */ }, []);\n  return <h1>{name}</h1>;\n}\n```\n\nالفروق:\n1. الصياغة: الدالي أقصر وأوضح وبلا this.\n2. الحالة: useState مقابل this.state وsetState.\n3. دورة الحياة: useEffect واحد يغطي componentDidMount وcomponentDidUpdate وcomponentWillUnmount معًا.\n4. إعادة استخدام المنطق: الـ hooks المخصصة أبسط بكثير من HOCs وrender props.\n5. الميزات الحديثة (Server Components وبعض الـ hooks) متاحة للمكوّنات الدالية فقط.\n\nهل ما زالت الأصناف مطلوبة؟ في حالة واحدة تقريبًا: Error Boundaries التي لا يوجد لها مكافئ بالـ hooks حتى الآن (وعمليًا نستخدم مكتبة جاهزة مثل react-error-boundary).\n\nالتوصية الرسمية اليوم: المكوّنات الدالية للكود الجديد، مع عدم الحاجة لإعادة كتابة الأصناف القائمة إن كانت تعمل جيدًا.',
      en: '```jsx\n// class component\nclass Welcome extends React.Component {\n  state = { count: 0 };\n  componentDidMount() { /* ... */ }\n  render() { return <h1>{this.props.name}</h1>; }\n}\n\n// function component\nfunction Welcome({ name }) {\n  const [count, setCount] = useState(0);\n  useEffect(() => { /* ... */ }, []);\n  return <h1>{name}</h1>;\n}\n```\n\nThe differences:\n1. Syntax: function components are shorter, clearer and have no this.\n2. State: useState versus this.state and setState.\n3. Lifecycle: a single useEffect covers componentDidMount, componentDidUpdate and componentWillUnmount together.\n4. Logic reuse: custom hooks are far simpler than HOCs and render props.\n5. Modern features (Server Components, several newer hooks) are function-only.\n\nAre classes still needed? Essentially in one case: Error Boundaries, which still have no hook equivalent (in practice people use react-error-boundary).\n\nThe official recommendation today is function components for new code, with no need to rewrite existing classes that work well.',
    },
  },
  {
    id: 'react-proptypes',
    difficulty: beginner,
    question: {
      ar: 'ما هو PropTypes في React؟',
      en: 'What is PropTypes in React?',
    },
    answer: {
      ar: 'PropTypes آلية للتحقق من أنواع الـ props وقت التشغيل أثناء التطوير، وتطلق تحذيرًا في الـ console عند تمرير نوع خاطئ.\n\n```jsx\nimport PropTypes from "prop-types";\n\nUserCard.propTypes = {\n  name: PropTypes.string.isRequired,\n  age: PropTypes.number,\n  tags: PropTypes.arrayOf(PropTypes.string),\n  onSelect: PropTypes.func,\n  user: PropTypes.shape({ id: PropTypes.number }),\n};\n\nUserCard.defaultProps = { age: 0 };\n```\n\nنقاط مهمة:\n• أُخرجت من حزمة react إلى حزمة prop-types منفصلة، ولم تعد جزءًا من النواة.\n• تعمل في وضع التطوير فقط؛ تُحذف في الإنتاج.\n• هي تحقق وقت التشغيل: الخطأ يظهر بعد التشغيل لا قبله.\n\nالبديل الأفضل اليوم هو TypeScript: يكتشف الخطأ وقت الترجمة، ويوفّر إكمالًا تلقائيًا، ويغطي كل الكود لا الـ props فقط.\n\nمتى ما زالت PropTypes مفيدة؟ في مشاريع JavaScript لا تستخدم TypeScript، أو في مكتبة تريد حماية مستخدميها من تمرير أنواع خاطئة أثناء التطوير.',
      en: 'PropTypes is a runtime type-checking mechanism for props during development; it logs a console warning when the wrong type is passed.\n\n```jsx\nimport PropTypes from "prop-types";\n\nUserCard.propTypes = {\n  name: PropTypes.string.isRequired,\n  age: PropTypes.number,\n  tags: PropTypes.arrayOf(PropTypes.string),\n  onSelect: PropTypes.func,\n  user: PropTypes.shape({ id: PropTypes.number }),\n};\n\nUserCard.defaultProps = { age: 0 };\n```\n\nWhat matters:\n• It was moved out of the react package into a separate prop-types package and is no longer part of core.\n• It only runs in development and is stripped in production.\n• It is runtime checking: you learn about the error after running, not before.\n\nThe better option today is TypeScript: it catches the error at compile time, gives you autocompletion, and covers all your code rather than just props.\n\nWhen is PropTypes still useful? In JavaScript projects that do not use TypeScript, or in a library that wants to protect consumers from passing wrong types during development.',
    },
  },
  {
    id: 'react-router',
    difficulty: beginner,
    question: {
      ar: 'ما هو React Router؟',
      en: 'What is React Router?',
    },
    answer: {
      ar: 'React Router هي المكتبة القياسية للتوجيه (routing) في تطبيقات React أحادية الصفحة: تربط مسار الـ URL بالمكوّن الذي يُعرض، دون إعادة تحميل الصفحة.\n\n```jsx\n<BrowserRouter>\n  <Routes>\n    <Route path="/" element={<Home />} />\n    <Route path="/users/:id" element={<UserDetail />} />\n    <Route path="*" element={<NotFound />} />\n  </Routes>\n</BrowserRouter>\n```\n\nالأدوات الأساسية:\n• Link وNavLink للتنقّل — وليس <a> لأنها تُعيد تحميل الصفحة.\n• useNavigate للتنقّل برمجيًا.\n• useParams لقراءة أجزاء المسار المتغيرة.\n• useSearchParams للتعامل مع الـ query string.\n• Outlet للمسارات المتداخلة مع تخطيط مشترك.\n\nنقاط عملية:\n• المسارات المحمية تُنفَّذ بمكوّن يتحقق من المصادقة ويحوّل إلى /login عند الحاجة.\n• عند النشر، يجب أن يعيد الخادم index.html لأي مسار، وإلا ظهر خطأ 404 عند تحديث صفحة داخلية.\n\nفي Next.js لا نستخدم React Router، لأن التوجيه مبني على نظام الملفات ومدمج في الإطار.',
      en: 'React Router is the standard routing library for React single-page applications: it maps a URL path to the component that renders, without a full page reload.\n\n```jsx\n<BrowserRouter>\n  <Routes>\n    <Route path="/" element={<Home />} />\n    <Route path="/users/:id" element={<UserDetail />} />\n    <Route path="*" element={<NotFound />} />\n  </Routes>\n</BrowserRouter>\n```\n\nThe core tools:\n• Link and NavLink for navigation — not <a>, which triggers a full reload.\n• useNavigate for programmatic navigation.\n• useParams to read dynamic path segments.\n• useSearchParams for the query string.\n• Outlet for nested routes sharing a layout.\n\nPractical notes:\n• Protected routes are implemented with a wrapper component that checks auth and redirects to /login.\n• When deploying, the server must return index.html for any path, otherwise refreshing a deep link gives a 404.\n\nIn Next.js you do not use React Router — routing is file-system based and built into the framework.',
    },
  },

  // ------------------------------------------------------------ INTERMEDIATE
  {
    id: 'react-lifecycle',
    difficulty: intermediate,
    question: {
      ar: 'ما هي دورة حياة المكوّن في React وكيف تقابلها الـ hooks؟',
      en: 'What is the component lifecycle in React and how do hooks map onto it?',
    },
    answer: {
      ar: 'لكل مكوّن ثلاث مراحل: التركيب (mounting) والتحديث (updating) والإزالة (unmounting).\n\nفي مكوّنات الأصناف:\n• constructor ثم render ثم componentDidMount.\n• عند التحديث: render ثم componentDidUpdate.\n• عند الإزالة: componentWillUnmount.\n\nفي المكوّنات الدالية يغطيها useEffect بمصفوفة الاعتماديات:\n```jsx\nuseEffect(() => { /* mount */ }, []);\nuseEffect(() => { /* mount + كل تحديث */ });\nuseEffect(() => { /* عند تغيّر id */ }, [id]);\nuseEffect(() => {\n  const sub = subscribe();\n  return () => sub.unsubscribe();     // unmount + قبل كل إعادة تنفيذ\n}, []);\n```\n\nنقطة مفاهيمية مهمة: لا تفكّر في useEffect كبديل حرفي لدوال دورة الحياة، بل كأداة مزامنة. السؤال ليس "متى يعمل هذا؟" بل "مع أي قيمة يتزامن هذا؟" — وهذا التحوّل الذهني يحلّ معظم أخطاء الاعتماديات.\n\nوملاحظة عملية: في وضع StrictMode أثناء التطوير يشغّل React التأثيرات مرتين عمدًا لكشف التأثيرات غير القابلة للتنظيف. إن ظهر سلوك غريب مرتين فذلك مقصود ولن يحدث في الإنتاج.',
      en: 'Every component has three phases: mounting, updating and unmounting.\n\nIn class components:\n• constructor, then render, then componentDidMount.\n• On update: render, then componentDidUpdate.\n• On removal: componentWillUnmount.\n\nIn function components useEffect covers all of them via the dependency array:\n```jsx\nuseEffect(() => { /* mount */ }, []);\nuseEffect(() => { /* mount + every update */ });\nuseEffect(() => { /* when id changes */ }, [id]);\nuseEffect(() => {\n  const sub = subscribe();\n  return () => sub.unsubscribe();     // unmount + before each re-run\n}, []);\n```\n\nAn important conceptual point: do not think of useEffect as a literal replacement for lifecycle methods — think of it as synchronisation. The question is not "when does this run?" but "what value is this synchronised with?" That mental shift resolves most dependency-array bugs.\n\nA practical note: in StrictMode during development React deliberately runs effects twice to surface effects that are not properly cleaned up. Seeing something happen twice is intentional and does not occur in production.',
    },
  },
  {
    id: 'react-useeffect-deps',
    difficulty: intermediate,
    question: {
      ar: 'كيف تعمل مصفوفة الاعتماديات في useEffect وما الأخطاء الشائعة فيها؟',
      en: 'How does the useEffect dependency array work and what are the common mistakes?',
    },
    answer: {
      ar: 'React يقارن كل عنصر في المصفوفة بقيمته في التصيير السابق باستخدام Object.is، ويعيد تنفيذ التأثير عند اختلاف أي منها.\n\nالأخطاء الشائعة:\n\n1. حذف اعتمادية مستخدَمة داخل التأثير — ينتج stale closure: التأثير يستخدم قيمة قديمة إلى الأبد. لا تُسكِت تحذير ESLint، بل عالج السبب.\n\n2. اعتمادية كائن أو دالة تُنشأ في كل تصيير، فيعمل التأثير بلا توقف:\n```jsx\nconst options = { id };                 // كائن جديد كل تصيير\nuseEffect(() => { load(options); }, [options]);   // حلقة لا نهائية\n\n// الحلول\nuseEffect(() => { load({ id }); }, [id]);          // اعتماد على القيمة الأولية\nconst options = useMemo(() => ({ id }), [id]);     // أو تثبيت المرجع\n```\n\n3. تحديث حالة داخل التأثير تعتمد عليها نفس المصفوفة — حلقة لا نهائية. الحل الصيغة الدالية للتحديث.\n\n4. استخدام التأثير لحساب قيمة مشتقة بدل حسابها أثناء التصيير مباشرة.\n\nقاعدتان تحلّان معظم الحالات:\n• ضع كل ما يُقرأ داخل التأثير في المصفوفة.\n• إذا أزعجتك المصفوفة، فالمشكلة غالبًا في تصميم التأثير لا في المصفوفة: انقل الدالة داخل التأثير، أو استخدم صيغة التحديث الدالية، أو أعد التفكير في الحاجة للتأثير أصلًا.',
      en: 'React compares each entry with its value from the previous render using Object.is and re-runs the effect when any of them differ.\n\nThe common mistakes:\n\n1. Omitting a dependency used inside the effect — a stale closure, where the effect uses an old value forever. Do not silence the ESLint warning; fix the cause.\n\n2. An object or function dependency recreated every render, so the effect loops:\n```jsx\nconst options = { id };                 // new object each render\nuseEffect(() => { load(options); }, [options]);   // infinite loop\n\n// fixes\nuseEffect(() => { load({ id }); }, [id]);          // depend on the primitive\nconst options = useMemo(() => ({ id }), [id]);     // or stabilise the reference\n```\n\n3. Updating state inside an effect that depends on that same state — infinite loop. Use the functional updater.\n\n4. Using an effect to compute derived data instead of computing it during render.\n\nTwo rules solve most cases:\n• Put everything the effect reads into the array.\n• If the array annoys you, the problem is usually the effect\'s design rather than the array: move the function inside the effect, use the functional updater, or reconsider whether you need an effect at all.',
    },
  },
  {
    id: 'react-useeffect-vs-componentdidmount',
    difficulty: intermediate,
    question: {
      ar: 'ما الفرق بين useEffect و componentDidMount؟',
      en: 'What is the difference between useEffect and componentDidMount?',
    },
    answer: {
      ar: 'الفرق الأول في التوقيت: componentDidMount تعمل بشكل متزامن بعد تحديث الـ DOM وقبل أن يرسم المتصفح، بينما useEffect تُؤجَّل وتعمل بعد الرسم. هذا أفضل للأداء لأنه لا يؤخر ظهور الواجهة.\n\nإذا احتجت السلوك المتزامن (قياس عنصر ثم تعديله قبل أن يراه المستخدم) فالمكافئ الدقيق هو useLayoutEffect لا useEffect.\n\nالفرق الثاني في النطاق: componentDidMount تعمل مرة واحدة فقط، بينما useEffect أداة عامة يحدد سلوكها مصفوفة الاعتماديات:\n```jsx\nuseEffect(() => {}, []);        // ما يعادل componentDidMount\nuseEffect(() => {});            // componentDidMount + componentDidUpdate\nuseEffect(() => () => {}, []);  // + componentWillUnmount في نفس المكان\n```\n\nالفرق الثالث وهو الأهم من ناحية التصميم: في الأصناف يتفرق المنطق المترابط بين ثلاث دوال (الاشتراك في DidMount، وتحديثه في DidUpdate، وإلغاؤه في WillUnmount). أما useEffect فيجمع المنطق المترابط ودالة تنظيفه في مكان واحد، فيقل احتمال نسيان التنظيف.\n\nوفي StrictMode أثناء التطوير يُنفَّذ useEffect مرتين عمدًا، وهو ما لا يحدث مع componentDidMount.',
      en: 'The first difference is timing: componentDidMount runs synchronously after the DOM update but before the browser paints, whereas useEffect is deferred and runs after paint. That is better for performance because it does not delay the UI appearing.\n\nIf you need the synchronous behaviour (measuring an element and adjusting it before the user sees it), the exact equivalent is useLayoutEffect, not useEffect.\n\nThe second difference is scope: componentDidMount runs exactly once, while useEffect is a general tool whose behaviour is set by the dependency array:\n```jsx\nuseEffect(() => {}, []);        // the componentDidMount equivalent\nuseEffect(() => {});            // componentDidMount + componentDidUpdate\nuseEffect(() => () => {}, []);  // + componentWillUnmount in the same place\n```\n\nThe third and most important difference is design: in classes, related logic is scattered across three methods — subscribe in DidMount, update in DidUpdate, unsubscribe in WillUnmount. useEffect keeps related logic and its cleanup together, so forgetting the cleanup is much less likely.\n\nAlso, in StrictMode during development useEffect deliberately runs twice, which componentDidMount does not.',
    },
  },
  {
    id: 'react-useref',
    difficulty: intermediate,
    question: {
      ar: 'ما هو useRef وما الفرق بينه وبين createRef؟',
      en: 'What is useRef, and how does it differ from createRef?',
    },
    answer: {
      ar: 'useRef يعيد كائنًا ثابتًا { current } يبقى كما هو عبر كل عمليات التصيير، وتعديله لا يسبب إعادة تصيير.\n\nله استخدامان:\n\n1. الوصول إلى عنصر DOM:\n```jsx\nconst inputRef = useRef(null);\nuseEffect(() => inputRef.current?.focus(), []);\nreturn <input ref={inputRef} />;\n```\n\n2. تخزين قيمة قابلة للتغيير لا تؤثر على الواجهة: معرّف مؤقت، القيمة السابقة، علم لمعرفة أول تصيير، أو نسخة من مثيل مكتبة خارجية.\n```jsx\nconst timerId = useRef(null);\nconst renderCount = useRef(0);\nrenderCount.current++;\n```\n\nالفرق عن createRef: createRef تنشئ ref جديدًا في كل استدعاء، لذلك في مكوّن دالي تُنشئ ref جديدًا كل تصيير وتفقد القيمة. هي مصمّمة لمكوّنات الأصناف حيث تُنشأ مرة واحدة في الـ constructor.\n\nالقاعدة: useRef للمكوّنات الدالية، createRef للأصناف.\n\nوتمييز مهم: استخدم state لما يجب أن يظهر على الشاشة، وref لما لا يجب أن يسبب إعادة رسم. تعديل ref لا يُخطر React بشيء، فإن كانت القيمة تؤثر على ما يراه المستخدم فهي state.',
      en: 'useRef returns a stable object { current } that persists across renders, and mutating it does not trigger a re-render.\n\nIt has two uses:\n\n1. Accessing a DOM element:\n```jsx\nconst inputRef = useRef(null);\nuseEffect(() => inputRef.current?.focus(), []);\nreturn <input ref={inputRef} />;\n```\n\n2. Holding a mutable value that must not affect the UI: a timer id, the previous value, a first-render flag, or an instance from a third-party library.\n```jsx\nconst timerId = useRef(null);\nconst renderCount = useRef(0);\nrenderCount.current++;\n```\n\nThe difference from createRef: createRef creates a new ref on every call, so in a function component it produces a fresh ref each render and loses the value. It is designed for class components, where it is created once in the constructor.\n\nThe rule: useRef in function components, createRef in classes.\n\nAn important distinction: use state for anything that should appear on screen, and a ref for anything that must not cause a repaint. Mutating a ref tells React nothing, so if the value affects what the user sees, it belongs in state.',
    },
  },
  {
    id: 'react-usememo',
    difficulty: intermediate,
    question: {
      ar: 'ما هو useMemo ومتى تستخدمه؟',
      en: 'What is useMemo and when should you use it?',
    },
    answer: {
      ar: 'useMemo يخزّن نتيجة عملية حسابية ولا يعيد حسابها إلا عند تغيّر اعتمادياتها.\n\n```jsx\nconst sorted = useMemo(\n  () => items.filter((i) => i.active).sort(byName),\n  [items]\n);\n```\n\nله غرضان مختلفان يجب التمييز بينهما:\n\n1. تجنّب حساب مكلف فعلًا: ترتيب أو تصفية آلاف العناصر، تحويل بيانات ثقيل.\n\n2. تثبيت مرجع كائن أو مصفوفة — وهذا سبب لا يقل أهمية:\n```jsx\nconst config = useMemo(() => ({ pageSize }), [pageSize]);\n// يمنع إعادة تنفيذ useEffect ويمنع إبطال React.memo في الأبناء\n```\n\nمتى لا تستخدمه؟ في العمليات البسيطة. useMemo نفسه له تكلفة: مقارنة الاعتماديات وحفظ القيمة. تغليف `a + b` به خسارة صافية، ويزيد ضجيج الكود.\n\nنقاط مهمة:\n• React يعتبره تلميحًا لا ضمانًا؛ قد يتجاهله ويعيد الحساب.\n• لا تضع فيه آثارًا جانبية.\n• لا تستخدمه لإصلاح خطأ منطقي؛ إن كان الكود يعتمد على عدم إعادة الحساب فالتصميم خاطئ.\n\nنصيحة عملية: قِس أولًا باستخدام React Profiler. ومع React Compiler الجديد يصبح كثير من هذه التحسينات تلقائيًا.',
      en: 'useMemo caches the result of a computation and only recomputes it when its dependencies change.\n\n```jsx\nconst sorted = useMemo(\n  () => items.filter((i) => i.active).sort(byName),\n  [items]\n);\n```\n\nIt serves two distinct purposes worth separating:\n\n1. Avoiding a genuinely expensive computation: sorting or filtering thousands of items, a heavy data transformation.\n\n2. Stabilising an object or array reference — an equally important reason:\n```jsx\nconst config = useMemo(() => ({ pageSize }), [pageSize]);\n// stops a useEffect re-running and stops React.memo being defeated in children\n```\n\nWhen not to use it? For trivial work. useMemo itself costs something: comparing dependencies and retaining the value. Wrapping `a + b` is a net loss and adds noise.\n\nPoints that matter:\n• React treats it as a hint, not a guarantee — it may discard the cache and recompute.\n• Never put side effects inside it.\n• Do not use it to paper over a logic bug; if correctness depends on not recomputing, the design is wrong.\n\nPractical advice: measure first with the React Profiler. And with the new React Compiler many of these optimisations become automatic.',
    },
  },
  {
    id: 'react-usecallback',
    difficulty: intermediate,
    question: {
      ar: 'ما هو useCallback ومتى تحتاجه؟',
      en: 'What is useCallback and when do you actually need it?',
    },
    answer: {
      ar: 'useCallback يحافظ على نفس مرجع الدالة بين عمليات التصيير طالما لم تتغير اعتمادياتها. عمليًا هو useMemo مخصص للدوال:\n`useCallback(fn, deps)` يعادل `useMemo(() => fn, deps)`.\n\n```jsx\nconst handleSelect = useCallback((id) => {\n  setSelected(id);\n}, []);\n```\n\nمتى يكون مفيدًا فعلًا؟ في ثلاث حالات فقط:\n\n1. تمرير الدالة إلى مكوّن ابن مغلّف بـ React.memo — بدون تثبيت المرجع يفقد memo فائدته تمامًا، لأن prop جديد في كل تصيير.\n2. الدالة اعتمادية في useEffect؛ بدون التثبيت يعمل التأثير في كل تصيير.\n3. الدالة اعتمادية في hook مخصص أو في useMemo آخر.\n\nمتى لا يفيد؟ في الحالة الأكثر شيوعًا: تمرير دالة إلى عنصر HTML عادي مثل <button onClick>. إنشاء دالة جديدة رخيص جدًا، وuseCallback هنا يضيف تكلفة وضجيجًا بلا مقابل.\n\nتحذير عملي: useCallback مع مصفوفة اعتماديات ناقصة يجمّد قيمة قديمة داخل الدالة (stale closure) — وهذا يحوّل تحسين أداء إلى خطأ منطقي. إن احتجت قراءة أحدث قيمة دائمًا فاستخدم ref أو الصيغة الدالية للتحديث.',
      en: 'useCallback preserves the same function reference across renders as long as its dependencies do not change. It is effectively useMemo specialised for functions:\n`useCallback(fn, deps)` is equivalent to `useMemo(() => fn, deps)`.\n\n```jsx\nconst handleSelect = useCallback((id) => {\n  setSelected(id);\n}, []);\n```\n\nWhen is it genuinely useful? In three situations only:\n\n1. Passing the function to a child wrapped in React.memo — without a stable reference memo is completely defeated, because the prop is new every render.\n2. The function is a useEffect dependency; without stabilising it the effect runs every render.\n3. The function is a dependency of a custom hook or another useMemo.\n\nWhen does it not help? The most common case of all: passing a handler to a plain DOM element such as <button onClick>. Creating a function is very cheap, and useCallback there adds cost and noise for nothing.\n\nA practical warning: useCallback with an incomplete dependency array freezes stale values inside the function — turning a performance tweak into a logic bug. If you always need the latest value, use a ref or the functional updater form.',
    },
  },
  {
    id: 'react-memo',
    difficulty: intermediate,
    question: {
      ar: 'ما هو React.memo()؟',
      en: 'What is React.memo()?',
    },
    answer: {
      ar: 'React.memo مكوّن عالي الرتبة يمنع إعادة تصيير المكوّن إذا لم تتغير الـ props، باستخدام مقارنة سطحية.\n\n```jsx\nconst UserRow = React.memo(function UserRow({ user, onSelect }) {\n  return <li onClick={() => onSelect(user.id)}>{user.name}</li>;\n});\n\n// مقارنة مخصصة عند الحاجة\nconst Chart = React.memo(ChartComponent, (prev, next) => prev.id === next.id);\n```\n\nالسبب الأشهر لعدم عمله: الـ props ليست أولية. كائن أو مصفوفة أو دالة تُنشأ في الأب عند كل تصيير تعني مرجعًا جديدًا، فتفشل المقارنة السطحية دائمًا:\n```jsx\n<UserRow user={user} onSelect={(id) => select(id)} />   // memo عديم الفائدة\n```\nالحل: useCallback للدوال وuseMemo للكائنات، أو تمرير قيم أولية فقط.\n\nمتى يستحق الاستخدام؟ مع مكوّن تصييره مكلف، أو يتكرر كثيرًا في قائمة طويلة، أو يعاد تصييره بسبب تغييرات في الأب لا تعنيه.\n\nمتى لا يستحق؟ مع مكوّن خفيف — المقارنة نفسها لها تكلفة، وتغليف كل شيء بـ memo يبطئ التطبيق ويعقّده.\n\nبديل مجاني غالبًا: إعادة هيكلة المكوّنات بحيث تُمرَّر الأجزاء الثابتة كـ children، فلا يُعاد تصييرها أصلًا.',
      en: 'React.memo is a higher-order component that skips re-rendering when props have not changed, using a shallow comparison.\n\n```jsx\nconst UserRow = React.memo(function UserRow({ user, onSelect }) {\n  return <li onClick={() => onSelect(user.id)}>{user.name}</li>;\n});\n\n// custom comparison when needed\nconst Chart = React.memo(ChartComponent, (prev, next) => prev.id === next.id);\n```\n\nThe most common reason it does nothing: non-primitive props. An object, array or function created in the parent on every render is a new reference, so the shallow comparison always fails:\n```jsx\n<UserRow user={user} onSelect={(id) => select(id)} />   // memo is useless here\n```\nThe fix is useCallback for functions and useMemo for objects, or passing only primitives.\n\nWhen is it worth it? For a component that is expensive to render, appears many times in a long list, or re-renders because of parent changes that do not concern it.\n\nWhen is it not? For a cheap component — the comparison itself costs something, and wrapping everything in memo makes the app slower and harder to read.\n\nA frequently free alternative: restructure so the unchanging part is passed as children, in which case it is not re-rendered at all.',
    },
  },
  {
    id: 'react-context',
    difficulty: intermediate,
    question: {
      ar: 'ما هو Context API ومتى تستخدمه؟',
      en: 'What is the Context API and when should you use it?',
    },
    answer: {
      ar: 'Context يسمح بتمرير قيمة عبر شجرة المكوّنات دون تمريرها يدويًا عبر كل مستوى (prop drilling).\n\n```jsx\nconst ThemeContext = createContext(null);\n\nfunction App() {\n  const [theme, setTheme] = useState("light");\n  const value = useMemo(() => ({ theme, setTheme }), [theme]);\n  return (\n    <ThemeContext.Provider value={value}>\n      <Layout />\n    </ThemeContext.Provider>\n  );\n}\n\nfunction Button() {\n  const { theme } = useContext(ThemeContext);\n}\n```\n\nمتى يكون مناسبًا؟ للبيانات التي يحتاجها كثير من المكوّنات ولا تتغير كثيرًا: اللغة، السمة (theme)، المستخدم الحالي، الصلاحيات.\n\nمتى لا يكون مناسبًا؟ للحالة التي تتغير بسرعة أو كثيرًا، لأن أي تغيير في قيمة الـ Provider يعيد تصيير كل المستهلكين — حتى من لا يهتم بالجزء الذي تغيّر.\n\nأخطاء شائعة:\n1. تمرير كائن حرفي مباشرة كـ value، فيُنشأ مرجع جديد كل تصيير وتُعاد كل المكوّنات. الحل useMemo.\n2. وضع كل حالة التطبيق في context واحد. الأفضل تقسيمه إلى contexts صغيرة حسب معدل التغيير، مثل فصل قيمة الحالة عن دوال التحديث.\n3. اعتباره بديلًا عن Redux؛ هو آلية توزيع قيمة لا أداة إدارة حالة (لا cache ولا middleware ولا تحسين لإعادة التصيير).',
      en: 'Context lets you pass a value down the component tree without threading it manually through every level (prop drilling).\n\n```jsx\nconst ThemeContext = createContext(null);\n\nfunction App() {\n  const [theme, setTheme] = useState("light");\n  const value = useMemo(() => ({ theme, setTheme }), [theme]);\n  return (\n    <ThemeContext.Provider value={value}>\n      <Layout />\n    </ThemeContext.Provider>\n  );\n}\n\nfunction Button() {\n  const { theme } = useContext(ThemeContext);\n}\n```\n\nWhen is it a good fit? Data many components need that changes infrequently: language, theme, current user, permissions.\n\nWhen is it not? State that changes rapidly or often, because any change to the provider value re-renders every consumer — including ones that do not care about the part that changed.\n\nCommon mistakes:\n1. Passing an object literal directly as value, creating a new reference every render and re-rendering everything. Fix it with useMemo.\n2. Putting all application state in one context. Better to split into small contexts by change frequency, for example separating the state value from the updater functions.\n3. Treating it as a Redux replacement; it is a value-distribution mechanism, not a state manager — no caching, no middleware, no re-render optimisation.',
    },
  },
  {
    id: 'react-custom-hooks',
    difficulty: intermediate,
    question: {
      ar: 'ما هي Custom Hooks وكيف تكتب واحدًا؟',
      en: 'What are custom hooks and how do you write one?',
    },
    answer: {
      ar: 'الـ custom hook دالة تبدأ بـ use وتستدعي hooks أخرى، وهدفها استخراج منطق قابل لإعادة الاستخدام من المكوّنات.\n\n```jsx\nfunction useDebounce(value, delay = 300) {\n  const [debounced, setDebounced] = useState(value);\n\n  useEffect(() => {\n    const id = setTimeout(() => setDebounced(value), delay);\n    return () => clearTimeout(id);\n  }, [value, delay]);\n\n  return debounced;\n}\n\n// الاستخدام\nconst debouncedQuery = useDebounce(query, 400);\n```\n\nنقطة جوهرية غالبًا ما يُساء فهمها: الـ hooks تشارك المنطق لا الحالة. كل مكوّن يستدعي useDebounce يحصل على نسخة مستقلة تمامًا من الحالة. إن أردت مشاركة الحالة نفسها فأنت تحتاج Context أو مكتبة إدارة حالة.\n\nمبادئ التصميم:\n• اسم يبدأ بـ use حتى تُطبَّق قواعد ESLint.\n• مسؤولية واحدة واضحة.\n• أعد ما يحتاجه المستهلك فقط، ككائن إذا كانت القيم كثيرة.\n• نظّف كل ما تفتحه: مؤقتات، اشتراكات، مستمعين.\n\nأمثلة مفيدة عمليًا: useLocalStorage وuseMediaQuery وusePrevious وuseOnClickOutside وuseFetch.\n\nمتى تستخرج hook؟ عندما يتكرر المنطق نفسه في أكثر من مكوّن، أو عندما يصبح المكوّن مزدحمًا بمنطق لا علاقة له بالعرض.',
      en: 'A custom hook is a function whose name starts with use and which calls other hooks. Its purpose is extracting reusable logic out of components.\n\n```jsx\nfunction useDebounce(value, delay = 300) {\n  const [debounced, setDebounced] = useState(value);\n\n  useEffect(() => {\n    const id = setTimeout(() => setDebounced(value), delay);\n    return () => clearTimeout(id);\n  }, [value, delay]);\n\n  return debounced;\n}\n\n// usage\nconst debouncedQuery = useDebounce(query, 400);\n```\n\nA point frequently misunderstood: hooks share logic, not state. Every component calling useDebounce gets a completely independent copy of that state. If you want shared state you need Context or a state management library.\n\nDesign principles:\n• A name starting with use, so the ESLint rules apply.\n• One clear responsibility.\n• Return only what consumers need, as an object when there are several values.\n• Clean up everything you open: timers, subscriptions, listeners.\n\nGenuinely useful examples: useLocalStorage, useMediaQuery, usePrevious, useOnClickOutside, useFetch.\n\nWhen do you extract one? When the same logic repeats in more than one component, or when a component is crowded with logic unrelated to rendering.',
    },
  },
  {
    id: 'react-usereducer',
    difficulty: intermediate,
    question: {
      ar: 'ما هو useReducer ومتى تفضّله على useState؟',
      en: 'What is useReducer and when do you prefer it over useState?',
    },
    answer: {
      ar: 'useReducer يدير الحالة عبر دالة reducer نقية تأخذ الحالة الحالية وaction وتعيد الحالة الجديدة.\n\n```jsx\nfunction reducer(state, action) {\n  switch (action.type) {\n    case "FETCH_START":   return { ...state, loading: true, error: null };\n    case "FETCH_SUCCESS": return { loading: false, data: action.payload, error: null };\n    case "FETCH_ERROR":   return { loading: false, data: null, error: action.error };\n    default: throw new Error(`Unknown action: ${action.type}`);\n  }\n}\n\nconst [state, dispatch] = useReducer(reducer, { loading: false, data: null, error: null });\ndispatch({ type: "FETCH_START" });\n```\n\nمتى أفضّله على useState؟\n1. عندما ترتبط عدة قيم ببعضها وتتغير معًا — كما في المثال أعلاه، حيث لا يصح أن يكون loading وerror صحيحين معًا.\n2. عندما تكون الانتقالات معقّدة ولها قواعد واضحة (أشبه بآلة حالات).\n3. عندما يعتمد التحديث الجديد على السابق بمنطق غير بسيط.\n4. عندما تريد فصل منطق التحديث عن المكوّن ليصبح قابلًا للاختبار وحده.\n\nميزة إضافية: دالة dispatch ثابتة المرجع دائمًا، فلا تحتاج useCallback عند تمريرها لأبناء مغلّفين بـ memo.\n\nمتى يكون مبالغة؟ لحالة بسيطة مثل فتح/إغلاق نافذة — useState أوضح وأقصر.',
      en: 'useReducer manages state through a pure reducer function that takes the current state and an action and returns the next state.\n\n```jsx\nfunction reducer(state, action) {\n  switch (action.type) {\n    case "FETCH_START":   return { ...state, loading: true, error: null };\n    case "FETCH_SUCCESS": return { loading: false, data: action.payload, error: null };\n    case "FETCH_ERROR":   return { loading: false, data: null, error: action.error };\n    default: throw new Error(`Unknown action: ${action.type}`);\n  }\n}\n\nconst [state, dispatch] = useReducer(reducer, { loading: false, data: null, error: null });\ndispatch({ type: "FETCH_START" });\n```\n\nWhen do I prefer it to useState?\n1. When several values are related and change together — as above, where loading and error must never both be true.\n2. When transitions are complex and rule-driven, essentially a state machine.\n3. When the next state depends on the previous one in a non-trivial way.\n4. When you want the update logic outside the component so it can be unit tested on its own.\n\nA bonus: the dispatch function is reference-stable, so you do not need useCallback when passing it to memoised children.\n\nWhen is it overkill? For simple state such as a modal open flag — useState is shorter and clearer.',
    },
  },
  {
    id: 'react-lifting-state',
    difficulty: intermediate,
    question: {
      ar: 'ما المقصود برفع الحالة (lifting state up)؟',
      en: 'What does "lifting state up" mean?',
    },
    answer: {
      ar: 'عندما يحتاج مكوّنان شقيقان الوصول إلى نفس البيانات، ننقل الحالة إلى أقرب أب مشترك، ويمرّرها لهما كـ props مع دالة لتحديثها.\n\n```jsx\nfunction FilterPage() {\n  const [query, setQuery] = useState("");          // الحالة هنا\n  return (\n    <>\n      <SearchInput value={query} onChange={setQuery} />\n      <ResultsList query={query} />\n    </>\n  );\n}\n```\n\nهذا يحافظ على مصدر واحد للحقيقة (single source of truth) ويمنع التعارض بين نسختين من نفس البيانات.\n\nمتى تتوقف عن الرفع؟ عندما تجد نفسك تمرّر prop عبر خمسة مستويات لا تستخدمه — هذه إشارة إلى أن الحل صار مشكلة (prop drilling).\n\nالبدائل عند هذه النقطة:\n1. التركيب (composition): مرّر المكوّن نفسه كـ children بدل تمرير البيانات عبر الطبقات.\n2. Context للقيم العامة قليلة التغيّر.\n3. مكتبة إدارة حالة (Zustand أو Redux) للحالة المشتركة على نطاق واسع.\n4. مكتبة بيانات خادم مثل React Query إذا كانت البيانات أصلًا قادمة من الخادم — وهذه أكثر الحالات شيوعًا وأقلها انتباهًا.\n\nوالقاعدة العامة: أبقِ الحالة في أدنى مستوى ممكن يخدم كل من يحتاجها، لا أعلى.',
      en: 'When two sibling components need the same data, you move the state to their nearest common parent and pass it down as props along with an updater.\n\n```jsx\nfunction FilterPage() {\n  const [query, setQuery] = useState("");          // state lives here\n  return (\n    <>\n      <SearchInput value={query} onChange={setQuery} />\n      <ResultsList query={query} />\n    </>\n  );\n}\n```\n\nThis preserves a single source of truth and prevents two copies of the same data from disagreeing.\n\nWhen do you stop lifting? When you find yourself passing a prop through five levels that do not use it — a sign the solution has become the problem (prop drilling).\n\nThe alternatives at that point:\n1. Composition: pass the component itself as children instead of threading data through layers.\n2. Context for global, slow-changing values.\n3. A state library (Zustand, Redux) for broadly shared state.\n4. A server-state library such as React Query if the data comes from the server anyway — the most common case and the most frequently overlooked.\n\nThe general rule: keep state at the lowest level that serves everyone who needs it, not higher.',
    },
  },
  {
    id: 'react-composition',
    difficulty: intermediate,
    question: {
      ar: 'ما هو التركيب (Composition) في React ولماذا يُفضَّل على الوراثة؟',
      en: 'What is composition in React and why is it preferred over inheritance?',
    },
    answer: {
      ar: 'التركيب يعني بناء واجهات معقّدة من مكوّنات بسيطة تُمرَّر لبعضها، بدل توسيع مكوّن عبر الوراثة.\n\nالأداة الأساسية هي children:\n```jsx\nfunction Card({ title, actions, children }) {\n  return (\n    <section className="card">\n      <header>{title}{actions}</header>\n      <div>{children}</div>\n    </section>\n  );\n}\n\n<Card title={<h2>الملف</h2>} actions={<EditButton />}>\n  <UserDetails user={user} />\n</Card>\n```\n\nلماذا نفضّله؟\n• المكوّن الأب لا يحتاج معرفة أي شيء عن أبنائه، فيظل عامًا وقابلًا لإعادة الاستخدام.\n• لا يوجد اقتران قوي كما في سلاسل الوراثة.\n• أسهل في الاختبار والتغيير.\n• React نفسه لا يوفّر آلية وراثة للمكوّنات — التوثيق الرسمي يوصي بالتركيب صراحةً.\n\nفائدة أداء غالبًا ما تُغفل: ما يُمرَّر كـ children يُنشأ في الأب، فلا يُعاد تصييره عندما تتغير حالة المكوّن الوسيط. هذه حيلة فعّالة لتقليل عمليات إعادة التصيير دون memo.\n\nأنماط مرتبطة: compound components (مثل Tabs مع Tab)، وrender props، وslots عبر props من نوع عنصر.',
      en: 'Composition means building complex UIs from simple components passed into each other, rather than extending a component through inheritance.\n\nThe primary tool is children:\n```jsx\nfunction Card({ title, actions, children }) {\n  return (\n    <section className="card">\n      <header>{title}{actions}</header>\n      <div>{children}</div>\n    </section>\n  );\n}\n\n<Card title={<h2>Profile</h2>} actions={<EditButton />}>\n  <UserDetails user={user} />\n</Card>\n```\n\nWhy prefer it?\n• The parent needs to know nothing about its children, so it stays generic and reusable.\n• There is no tight coupling as in inheritance hierarchies.\n• It is easier to test and to change.\n• React provides no component inheritance mechanism at all — the official docs recommend composition explicitly.\n\nA performance benefit that often goes unnoticed: anything passed as children is created in the parent, so it is not re-rendered when the intermediate component\'s own state changes. That is an effective way to cut re-renders without memo.\n\nRelated patterns: compound components (Tabs with Tab), render props, and slots via element-typed props.',
    },
  },
  {
    id: 'react-hoc',
    difficulty: intermediate,
    question: {
      ar: 'ما هي Higher-Order Components (HOCs)؟',
      en: 'What are Higher-Order Components (HOCs)?',
    },
    answer: {
      ar: 'الـ HOC دالة تأخذ مكوّنًا وتعيد مكوّنًا جديدًا مزوَّدًا بسلوك إضافي.\n\n```jsx\nfunction withAuth(Component) {\n  return function AuthenticatedComponent(props) {\n    const { user, loading } = useAuth();\n    if (loading) return <Spinner />;\n    if (!user) return <Navigate to="/login" />;\n    return <Component {...props} user={user} />;\n  };\n}\n\nconst ProtectedDashboard = withAuth(Dashboard);\n```\n\nكان هذا النمط الطريقة الأساسية لمشاركة المنطق قبل الـ hooks، وما زلت تراه في مكتبات مثل connect في react-redux.\n\nمشاكله التي دفعت نحو الـ hooks:\n• Wrapper hell: طبقات متداخلة تجعل شجرة المكوّنات صعبة القراءة في DevTools.\n• تعارض أسماء الـ props بين HOCs متعددة.\n• صعوبة تتبّع مصدر كل prop.\n• تعقيد في أنواع TypeScript.\n\nاليوم: استخدم custom hook بدلًا منه في معظم الحالات — أوضح وأسهل في الكتابة والاختبار.\n\nمتى يبقى HOC مناسبًا؟ عندما تحتاج تغليف الناتج نفسه لا مشاركة منطق فقط: الحماية بالمصادقة كما في المثال، وError Boundaries، والتغليف بـ Suspense، وحقن provider حول المكوّن.',
      en: 'A HOC is a function that takes a component and returns a new one with extra behaviour.\n\n```jsx\nfunction withAuth(Component) {\n  return function AuthenticatedComponent(props) {\n    const { user, loading } = useAuth();\n    if (loading) return <Spinner />;\n    if (!user) return <Navigate to="/login" />;\n    return <Component {...props} user={user} />;\n  };\n}\n\nconst ProtectedDashboard = withAuth(Dashboard);\n```\n\nThis was the main logic-sharing pattern before hooks, and you still see it in libraries such as react-redux\'s connect.\n\nThe problems that pushed people toward hooks:\n• Wrapper hell — nested layers that make the tree hard to read in DevTools.\n• Prop name collisions between multiple HOCs.\n• Hard to trace where a given prop came from.\n• Awkward TypeScript types.\n\nToday: use a custom hook instead in most cases — clearer, easier to write and easier to test.\n\nWhere does a HOC still fit? When you need to wrap the rendered output rather than just share logic: auth gating as above, error boundaries, Suspense wrapping, and injecting a provider around a component.',
    },
  },
  {
    id: 'react-error-boundaries',
    difficulty: intermediate,
    question: {
      ar: 'ما هي Error Boundaries في React؟',
      en: 'What are error boundaries in React?',
    },
    answer: {
      ar: 'Error Boundary مكوّن يلتقط الأخطاء التي تحدث أثناء تصيير أبنائه، فيعرض واجهة بديلة بدل انهيار التطبيق بالكامل.\n\nبدونها، خطأ غير ملتقط أثناء التصيير يجعل React يزيل الشجرة كاملة ويترك شاشة بيضاء.\n\n```jsx\nclass ErrorBoundary extends React.Component {\n  state = { hasError: false };\n\n  static getDerivedStateFromError() {\n    return { hasError: true };            // تحديث الحالة لعرض البديل\n  }\n\n  componentDidCatch(error, info) {\n    logToService(error, info.componentStack);   // التسجيل\n  }\n\n  render() {\n    if (this.state.hasError) return this.props.fallback;\n    return this.props.children;\n  }\n}\n```\n\nملاحظة مهمة: يجب أن تكون صنفًا — لا يوجد مكافئ بالـ hooks حتى الآن. عمليًا نستخدم مكتبة react-error-boundary التي توفّر واجهة أنظف.\n\nما لا تلتقطه:\n• الأخطاء داخل معالجات الأحداث (استخدم try/catch).\n• الكود غير المتزامن مثل setTimeout والـ Promises.\n• الأخطاء في التصيير على الخادم.\n• الأخطاء داخل الـ boundary نفسه.\n\nنصيحة تصميمية: لا تضع boundary واحدًا حول التطبيق فقط. ضع حدودًا على مستوى الأقسام (لوحة، جدول، widget) حتى ينهار الجزء المعطوب وحده ويبقى باقي التطبيق صالحًا للاستخدام.',
      en: 'An error boundary is a component that catches errors thrown while rendering its children and shows a fallback UI instead of the whole app crashing.\n\nWithout one, an uncaught render error makes React unmount the entire tree and leave a blank screen.\n\n```jsx\nclass ErrorBoundary extends React.Component {\n  state = { hasError: false };\n\n  static getDerivedStateFromError() {\n    return { hasError: true };            // update state to show the fallback\n  }\n\n  componentDidCatch(error, info) {\n    logToService(error, info.componentStack);   // reporting\n  }\n\n  render() {\n    if (this.state.hasError) return this.props.fallback;\n    return this.props.children;\n  }\n}\n```\n\nAn important note: it must be a class — there is still no hook equivalent. In practice people use react-error-boundary, which gives a cleaner API.\n\nWhat it does not catch:\n• Errors inside event handlers (use try/catch).\n• Asynchronous code such as setTimeout and promises.\n• Errors during server rendering.\n• Errors thrown by the boundary itself.\n\nA design tip: do not put a single boundary around the whole app. Place boundaries at section level — a panel, a table, a widget — so only the broken part fails and the rest of the app stays usable.',
    },
  },
  {
    id: 'react-lazy-suspense',
    difficulty: intermediate,
    question: {
      ar: 'اشرح lazy loading و code splitting و Suspense في React.',
      en: 'Explain lazy loading, code splitting and Suspense in React.',
    },
    answer: {
      ar: 'بدل تحميل كل كود التطبيق في حزمة واحدة ضخمة، نقسّمه ونحمّل كل جزء عند الحاجة.\n\n```jsx\nconst Dashboard = lazy(() => import("./pages/Dashboard"));\nconst Reports = lazy(() => import("./pages/Reports"));\n\n<Suspense fallback={<PageSkeleton />}>\n  <Routes>\n    <Route path="/dashboard" element={<Dashboard />} />\n    <Route path="/reports" element={<Reports />} />\n  </Routes>\n</Suspense>\n```\n\nكيف يعمل؟ import() الديناميكي يخبر أداة البناء بإنشاء ملف منفصل (chunk). وlazy يغلّف المكوّن ليُطلب عند أول تصيير له. وSuspense يعرض البديل أثناء التحميل.\n\nأين أطبّقه عمليًا؟\n1. على مستوى المسارات — أكبر مكسب وأقل تعقيد.\n2. المكوّنات الثقيلة التي لا تظهر فورًا: المخططات، المحررات النصية، النوافذ المنبثقة.\n3. المكتبات الضخمة المستخدمة في مسار واحد فقط.\n\nما يجب الانتباه له:\n• لا تبالغ في التقسيم؛ عدد كبير من الطلبات الصغيرة قد يكون أبطأ من حزمة واحدة معقولة.\n• أضف Error Boundary مع Suspense، لأن فشل تحميل الـ chunk (بسبب الشبكة أو نشر جديد) يجب أن يُعالَج.\n• استخدم التحميل المسبق عند التحويم على الرابط لتقليل الانتظار المحسوس.\n• في Next.js يتم تقسيم الكود حسب المسار تلقائيًا، وتُستخدم next/dynamic للمكوّنات.',
      en: 'Instead of shipping all your code in one large bundle, you split it and load each piece on demand.\n\n```jsx\nconst Dashboard = lazy(() => import("./pages/Dashboard"));\nconst Reports = lazy(() => import("./pages/Reports"));\n\n<Suspense fallback={<PageSkeleton />}>\n  <Routes>\n    <Route path="/dashboard" element={<Dashboard />} />\n    <Route path="/reports" element={<Reports />} />\n  </Routes>\n</Suspense>\n```\n\nHow it works: a dynamic import() tells the bundler to emit a separate chunk. lazy wraps the component so it is requested on first render. Suspense shows the fallback while it loads.\n\nWhere do I apply it in practice?\n1. At route level — the biggest win for the least complexity.\n2. Heavy components that are not immediately visible: charts, rich text editors, modals.\n3. Large libraries used on only one route.\n\nWhat to watch:\n• Do not over-split; many small requests can be slower than one reasonable bundle.\n• Pair Suspense with an error boundary, because a chunk can fail to load (bad network, or a fresh deploy) and that needs handling.\n• Preload on link hover to hide the latency.\n• In Next.js route-level splitting is automatic, and next/dynamic covers components.',
    },
  },
  {
    id: 'react-rerender-causes',
    difficulty: intermediate,
    question: {
      ar: 'ما الذي يسبب إعادة تصيير المكوّن في React؟',
      en: 'What causes a component to re-render in React?',
    },
    answer: {
      ar: 'ثلاثة أسباب فقط:\n\n1. تغيّر حالة المكوّن نفسه (useState أو useReducer).\n2. إعادة تصيير المكوّن الأب — وهذا يعيد تصيير كل الأبناء افتراضيًا.\n3. تغيّر قيمة Context يستهلكها المكوّن.\n\nملاحظات تصحّح مفاهيم شائعة:\n• تغيّر الـ props ليس سببًا مستقلًا: الـ props تتغير لأن الأب أُعيد تصييره أصلًا.\n• إعادة التصيير لا تعني تحديث الـ DOM: React يقارن الناتج ولا يلمس الـ DOM إلا عند وجود فرق فعلي. إعادة التصيير عادة رخيصة.\n• استدعاء setState بنفس القيمة قد يتخطّى إعادة التصيير (المقارنة بـ Object.is).\n\nمتى تصبح مشكلة؟ عندما يكون التصيير مكلفًا، أو يتكرر في قائمة طويلة، أو يحدث عشرات المرات في الثانية.\n\nكيف أشخّصها؟ React DevTools Profiler مع تفعيل "Highlight updates" يُظهر بالضبط ما يُعاد تصييره ولماذا.\n\nوالحلول بترتيب الأفضلية: خفض الحالة إلى أدنى مكوّن يحتاجها، ثم التركيب عبر children، ثم تقسيم الـ context، وأخيرًا memo وuseMemo وuseCallback.',
      en: 'There are only three causes:\n\n1. The component\'s own state changed (useState or useReducer).\n2. Its parent re-rendered — which re-renders all children by default.\n3. A context value the component consumes changed.\n\nSome clarifications of common misconceptions:\n• Changing props is not a separate cause: props change because the parent re-rendered in the first place.\n• A re-render is not a DOM update: React compares the output and touches the DOM only where there is a real difference. Re-rendering is usually cheap.\n• Calling setState with the same value may skip the re-render entirely (Object.is comparison).\n\nWhen does it become a problem? When rendering is expensive, repeated across a long list, or happening dozens of times per second.\n\nHow do I diagnose it? The React DevTools Profiler with "Highlight updates" shows exactly what re-rendered and why.\n\nAnd the fixes, in order of preference: push state down to the lowest component that needs it, then composition via children, then splitting contexts, and only then memo, useMemo and useCallback.',
    },
  },
  {
    id: 'react-key-remount',
    difficulty: intermediate,
    question: {
      ar: 'كيف تستخدم خاصية key لإعادة تهيئة مكوّن؟',
      en: 'How do you use the key prop to reset a component?',
    },
    answer: {
      ar: 'تغيير الـ key يجعل React يعامل المكوّن كعنصر جديد تمامًا: يزيل القديم بحالته ويركّب واحدًا جديدًا.\n\nهذه أنظف طريقة لإعادة تهيئة الحالة عند تغيّر المدخل:\n```jsx\n<UserProfile key={userId} userId={userId} />\n```\nهنا، عند الانتقال من مستخدم لآخر تُمسح كل الحالة الداخلية (نموذج قيد التحرير، تبويب مفتوح) تلقائيًا.\n\nالبديل السيئ الشائع:\n```jsx\nuseEffect(() => {\n  setForm(initialForm);      // مزامنة يدوية هشّة\n}, [userId]);\n```\nهذا ينفّذ تصييرًا إضافيًا ويسهل نسيان حقل من الحقول.\n\nحالات استخدام أخرى: إعادة تعيين نموذج بعد الإرسال، إعادة تشغيل رسوم متحركة، إجبار إعادة تركيب مكوّن من مكتبة خارجية لا تتفاعل مع تغيّر الـ props.\n\nتحذير مهم: لا تستخدم هذا داخل قوائم بشكل عشوائي. key متغيرة باستمرار داخل قائمة تعني إعادة تركيب كل العناصر في كل تصيير، وهو أسوأ ما يمكن فعله للأداء.',
      en: 'Changing the key makes React treat the component as an entirely new element: it unmounts the old one with its state and mounts a fresh one.\n\nThat is the cleanest way to reset state when an input changes:\n```jsx\n<UserProfile key={userId} userId={userId} />\n```\nSwitching from one user to another wipes all internal state (an in-progress form, an open tab) automatically.\n\nThe common bad alternative:\n```jsx\nuseEffect(() => {\n  setForm(initialForm);      // brittle manual syncing\n}, [userId]);\n```\nThat costs an extra render and makes it easy to forget a field.\n\nOther uses: resetting a form after submit, restarting an animation, or forcing a remount of a third-party component that does not react to prop changes.\n\nAn important warning: do not apply this carelessly inside lists. A constantly changing key in a list remounts every item on every render, which is the worst thing you can do for performance.',
    },
  },
  {
    id: 'react-data-fetching',
    difficulty: intermediate,
    question: {
      ar: 'كيف تجلب البيانات في تطبيق React؟',
      en: 'How do you fetch data in a React application?',
    },
    answer: {
      ar: 'الطريقة اليدوية بـ useEffect تعمل، لكنها تتطلب التعامل مع كثير من التفاصيل:\n```jsx\nuseEffect(() => {\n  const controller = new AbortController();\n  setLoading(true);\n\n  fetch(`/api/users/${id}`, { signal: controller.signal })\n    .then((r) => { if (!r.ok) throw new Error(r.status); return r.json(); })\n    .then(setData)\n    .catch((e) => { if (e.name !== "AbortError") setError(e); })\n    .finally(() => setLoading(false));\n\n  return () => controller.abort();\n}, [id]);\n```\n\nما تفتقده هذه الطريقة عند تكرارها في التطبيق: التخزين المؤقت، وإلغاء الطلبات القديمة تلقائيًا، وإعادة المحاولة، ومنع الطلبات المكررة، وإعادة الجلب عند العودة للنافذة، والتحديث المتفائل (optimistic updates).\n\nلذلك في أي تطبيق حقيقي أستخدم مكتبة مخصصة لحالة الخادم: React Query (TanStack Query) أو SWR:\n```jsx\nconst { data, isPending, error } = useQuery({\n  queryKey: ["user", id],\n  queryFn: () => fetchUser(id),\n});\n```\n\nالفكرة المحورية التي تستحق قولها في المقابلة: بيانات الخادم ليست حالة تطبيق. هي نسخة مؤقتة (cache) من حقيقة موجودة في مكان آخر، ومعاملتها كحالة عادية في useState أو Redux هو سبب معظم التعقيد في تطبيقات React.\n\nوفي Next.js مع App Router يُفضَّل الجلب في Server Components مباشرة، فلا تصل هذه المشكلة إلى العميل أصلًا.',
      en: 'The manual useEffect approach works, but it requires handling a lot of detail:\n```jsx\nuseEffect(() => {\n  const controller = new AbortController();\n  setLoading(true);\n\n  fetch(`/api/users/${id}`, { signal: controller.signal })\n    .then((r) => { if (!r.ok) throw new Error(r.status); return r.json(); })\n    .then(setData)\n    .catch((e) => { if (e.name !== "AbortError") setError(e); })\n    .finally(() => setLoading(false));\n\n  return () => controller.abort();\n}, [id]);\n```\n\nWhat this misses once you repeat it across an app: caching, automatic cancellation of stale requests, retries, request deduplication, refetch on window focus, and optimistic updates.\n\nSo in any real application I use a dedicated server-state library — React Query (TanStack Query) or SWR:\n```jsx\nconst { data, isPending, error } = useQuery({\n  queryKey: ["user", id],\n  queryFn: () => fetchUser(id),\n});\n```\n\nThe central idea worth saying out loud in an interview: server data is not application state. It is a cache of a truth that lives elsewhere, and treating it like ordinary useState or Redux state is the source of most complexity in React applications.\n\nIn Next.js with the App Router the preferred approach is fetching directly in Server Components, so the problem never reaches the client.',
    },
  },
  {
    id: 'react-virtual-dom',
    difficulty: intermediate,
    question: {
      ar: 'ما هو Virtual DOM؟',
      en: 'What is the Virtual DOM?',
    },
    answer: {
      ar: 'الـ Virtual DOM تمثيل خفيف لشجرة الواجهة على شكل كائنات JavaScript عادية، يحتفظ به React في الذاكرة.\n\nكيف تعمل الدورة؟\n1. تتغير الحالة، فيُنشئ React شجرة افتراضية جديدة.\n2. يقارنها بالسابقة (diffing).\n3. يحسب أقل مجموعة تغييرات مطلوبة.\n4. يطبّقها دفعة واحدة على الـ DOM الحقيقي.\n\nلماذا؟ لأن عمليات الـ DOM الحقيقي مكلفة، خصوصًا ما يسبب إعادة تخطيط (layout). التجميع في دفعة واحدة أسرع بكثير من عشرات التعديلات المتفرقة.\n\nتصحيح مفهوم شائع: Virtual DOM ليس بالضرورة أسرع من DOM يدوي مكتوب بعناية. قيمته الحقيقية أنه يجعل الكود الوصفي (declarative) عملي الأداء: تكتب "هكذا يجب أن تبدو الواجهة" ويتكفل React بالوصول لذلك بكفاءة معقولة دون أن تدير التحديثات بنفسك.\n\nوللسياق: ليست كل المكتبات تستخدمها — Svelte تترجم الكود إلى تحديثات مباشرة وقت البناء، وSolid تستخدم تفاعلية دقيقة (fine-grained reactivity) بلا شجرة افتراضية.',
      en: 'The Virtual DOM is a lightweight representation of the UI tree as plain JavaScript objects, kept in memory by React.\n\nThe cycle:\n1. State changes, so React builds a new virtual tree.\n2. It compares it with the previous one (diffing).\n3. It computes the minimal set of required changes.\n4. It applies them to the real DOM in one batch.\n\nWhy? Because real DOM operations are expensive, especially anything that triggers layout. Batching is far faster than dozens of scattered mutations.\n\nA common misconception worth correcting: the Virtual DOM is not necessarily faster than carefully hand-written DOM code. Its real value is making declarative code performant enough: you write "this is how the UI should look" and React gets there efficiently without you managing updates yourself.\n\nFor context: not every library uses one — Svelte compiles to direct updates at build time, and Solid uses fine-grained reactivity with no virtual tree at all.',
    },
  },
  {
    id: 'react-performance-intermediate',
    difficulty: intermediate,
    question: {
      ar: 'كيف تحسّن أداء تطبيق React؟',
      en: 'How do you improve the performance of a React application?',
    },
    answer: {
      ar: 'أبدأ بالقياس عبر React DevTools Profiler، ثم أعمل على ثلاثة محاور:\n\n1. حجم الحزمة ووقت التحميل:\n• code splitting على مستوى المسارات مع lazy وSuspense.\n• مراجعة الاعتماديات الثقيلة.\n• تحسين الصور والأصول.\n\n2. تقليل عمليات إعادة التصيير — بالترتيب الصحيح:\n• أولًا: خفض الحالة إلى أدنى مكوّن يحتاجها. كثير من مشاكل الأداء سببها حالة موضوعة عاليًا بلا داعٍ.\n• ثانيًا: التركيب عبر children لعزل الأجزاء الثابتة.\n• ثالثًا: تقسيم الـ context بحسب معدل التغيّر.\n• أخيرًا: React.memo وuseMemo وuseCallback عند الحاجة المُثبتة بالقياس.\n\n3. تكلفة التصيير نفسه:\n• virtualization للقوائم الطويلة (react-window) بدل رسم آلاف الصفوف.\n• تجنّب الحسابات الثقيلة داخل جسم المكوّن.\n• debounce للمدخلات عالية التردد.\n• useTransition لإبقاء الواجهة متجاوبة أثناء التحديثات الثقيلة.\n\nوتحسين غالبًا ما يُنسى: استخدام مكتبة بيانات خادم مثل React Query يزيل طلبات مكررة كثيرة ويقلّل التصيير بشكل ملموس.\n\nالقاعدة: لا تحسّن قبل القياس. معظم تطبيقات React لا تحتاج memo في أي مكان، والتحسين المبكر يضيف تعقيدًا حقيقيًا مقابل مكسب وهمي.',
      en: 'I start by measuring with the React DevTools Profiler, then work on three fronts:\n\n1. Bundle size and load time:\n• Route-level code splitting with lazy and Suspense.\n• Auditing heavy dependencies.\n• Optimising images and assets.\n\n2. Reducing re-renders — in the right order:\n• First: push state down to the lowest component that needs it. A great many performance problems come from state sitting unnecessarily high.\n• Second: composition via children to isolate the static parts.\n• Third: split contexts by change frequency.\n• Last: React.memo, useMemo and useCallback where measurement proves they are needed.\n\n3. The cost of rendering itself:\n• Virtualise long lists (react-window) instead of rendering thousands of rows.\n• Keep heavy computation out of the component body.\n• Debounce high-frequency inputs.\n• useTransition to keep the UI responsive during heavy updates.\n\nAn often-forgotten win: adopting a server-state library such as React Query removes a lot of duplicate requests and measurably reduces rendering.\n\nThe rule: do not optimise before measuring. Most React apps need no memo anywhere, and premature optimisation buys real complexity for imaginary gains.',
    },
  },

  // ---------------------------------------------------------------- ADVANCED
  {
    id: 'react-reconciliation',
    difficulty: advanced,
    question: {
      ar: 'كيف تعمل عملية الـ Reconciliation في React؟',
      en: 'How does reconciliation work in React?',
    },
    answer: {
      ar: 'الـ reconciliation هي الخوارزمية التي يقارن بها React الشجرة الجديدة بالقديمة ليحدد ما يجب تغييره في الـ DOM.\n\nالمقارنة الكاملة بين شجرتين تكلّف O(n³)، وهو غير عملي، لذلك يعتمد React على افتراضين يجعلانها O(n):\n\n1. عنصران من نوع مختلف ينتجان شجرتين مختلفتين تمامًا. فإذا تغيّر <div> إلى <span> يهدم React الشجرة الفرعية كاملة ويبني جديدة — وتضيع كل الحالة داخلها.\n2. يمكن للمطوّر أن يشير إلى العناصر الثابتة بين عمليات التصيير عبر الـ key.\n\nكيف يقارن؟\n• نفس النوع ونفس الموضع: يحتفظ بالعنصر ويحدّث الخصائص المتغيرة فقط.\n• نوع مختلف: إزالة وإعادة بناء.\n• داخل القوائم: يطابق بالـ key إن وُجدت، وإلا فبالترتيب — ولهذا الفهرس كمفتاح يسبب أخطاء عند إعادة الترتيب.\n\nنتائج عملية مهمة:\n• تعريف مكوّن داخل مكوّن آخر يعني نوعًا جديدًا في كل تصيير، فيُعاد تركيبه بالكامل وتضيع حالته. هذا خطأ شائع وخطير.\n• تغيير بنية الشجرة شرطيًا (تغليف بـ div أحيانًا) قد يهدم الحالة دون أن تدري.\n• الـ key ليست للأداء فقط، بل للصحة المنطقية.',
      en: 'Reconciliation is the algorithm React uses to compare the new tree with the previous one and decide what to change in the DOM.\n\nA full tree diff is O(n³), which is impractical, so React relies on two assumptions that bring it down to O(n):\n\n1. Two elements of different types produce entirely different trees. So if a <div> becomes a <span>, React tears down the whole subtree and rebuilds it — and all state inside is lost.\n2. The developer can signal which elements are stable across renders with the key prop.\n\nHow does it compare?\n• Same type, same position: keep the element and update only the changed attributes.\n• Different type: unmount and rebuild.\n• Inside lists: match by key when present, otherwise by position — which is exactly why index keys break on reorder.\n\nImportant practical consequences:\n• Defining a component inside another component creates a new type every render, so it fully remounts and loses its state. This is a common and damaging mistake.\n• Conditionally changing tree structure (sometimes wrapping in a div) can silently destroy state.\n• key is not only a performance detail — it is a correctness one.',
    },
  },
  {
    id: 'react-fiber',
    difficulty: advanced,
    question: {
      ar: 'ما هي معمارية Fiber في React؟',
      en: 'What is the Fiber architecture in React?',
    },
    answer: {
      ar: 'Fiber هي إعادة كتابة لمحرك التصيير في React 16، وهدفها جعل التصيير قابلًا للمقاطعة.\n\nقبل Fiber كان التصيير عملية تكرارية (recursive) متزامنة لا يمكن إيقافها: تحديث كبير يحجب الخيط الرئيسي وتتجمّد الواجهة.\n\nما غيّرته Fiber:\n1. تحويل الشجرة إلى قائمة مترابطة من وحدات عمل (fibers)، كل fiber يمثّل مكوّنًا ويحمل حالته وموقعه في الشجرة.\n2. تقسيم العمل إلى أجزاء صغيرة يمكن إيقافها واستئنافها وإعادة ترتيبها حسب الأولوية.\n3. فصل التصيير إلى مرحلتين:\n   • مرحلة الـ render: بناء الشجرة الجديدة وحساب التغييرات. قابلة للمقاطعة، وقد تُلغى بالكامل.\n   • مرحلة الـ commit: تطبيق التغييرات على الـ DOM. متزامنة وغير قابلة للمقاطعة حتى لا يرى المستخدم واجهة نصف محدّثة.\n\nلماذا يهمّ هذا؟ لأنه الأساس الذي بُني عليه كل ما تلا: الأولويات، والتصيير المتزامن (concurrent rendering)، وuseTransition، وSuspense، والتصيير التدريجي على الخادم.\n\nوهذا أيضًا يفسّر لماذا يجب أن يكون المكوّن نقيًا أثناء التصيير: قد يستدعيه React أكثر من مرة أو يلغي عمله قبل الوصول إلى الـ commit.',
      en: 'Fiber is the rewrite of React\'s rendering engine in React 16, and its purpose was to make rendering interruptible.\n\nBefore Fiber, rendering was a synchronous recursive pass that could not be stopped: a large update blocked the main thread and froze the UI.\n\nWhat Fiber changed:\n1. It turns the tree into a linked list of units of work (fibers), each representing a component and holding its state and position.\n2. It splits work into small chunks that can be paused, resumed and reordered by priority.\n3. It separates rendering into two phases:\n   • Render phase: build the new tree and compute changes. Interruptible, and can be thrown away entirely.\n   • Commit phase: apply changes to the DOM. Synchronous and uninterruptible, so users never see a half-updated UI.\n\nWhy does it matter? Because it is the foundation for everything that followed: priorities, concurrent rendering, useTransition, Suspense, and streaming server rendering.\n\nIt also explains why components must be pure during render: React may call one more than once, or discard its work before ever reaching commit.',
    },
  },
  {
    id: 'react-concurrent',
    difficulty: advanced,
    question: {
      ar: 'ما هو Concurrent Rendering وما هي Transitions؟',
      en: 'What is concurrent rendering and what are transitions?',
    },
    answer: {
      ar: 'التصيير المتزامن يعني أن React يستطيع العمل على أكثر من تحديث في آن واحد، وإيقاف تحديث منخفض الأولوية لخدمة آخر عاجل، ثم استئنافه أو التخلي عنه.\n\nالمشكلة التي يحلّها: تحديث ثقيل (تصفية قائمة ضخمة) يجعل الكتابة في حقل البحث متقطّعة، لأن كل ضغطة تنتظر اكتمال التصفية.\n\n```jsx\nconst [isPending, startTransition] = useTransition();\n\nconst handleChange = (e) => {\n  setQuery(e.target.value);              // عاجل — يظهر فورًا\n  startTransition(() => {\n    setResults(filterHugeList(e.target.value));   // يمكن مقاطعته\n  });\n};\n```\nالنتيجة: حقل الإدخال يستجيب فورًا، وقائمة النتائج تلحق. وisPending يسمح بعرض مؤشر انتقال.\n\nوهناك useDeferredValue للحالة التي لا تملك فيها التحكم في دالة التحديث:\n```jsx\nconst deferredQuery = useDeferredValue(query);\nconst results = useMemo(() => filter(deferredQuery), [deferredQuery]);\n```\n\nنقاط مهمة:\n• هذا ليس تعدد خيوط: ما زال كل شيء على خيط واحد، لكن العمل مقسّم وقابل للمقاطعة.\n• التحديثات الناتجة عن إدخال المستخدم المباشر تبقى عاجلة دائمًا.\n• React 18 وما بعده يجمع التحديثات تلقائيًا (automatic batching) حتى داخل الـ promises والمؤقتات، بعكس React 17.\n• لا تستخدم التحويلات لكل شيء — استخدمها عندما يكون هناك تحديث ثقيل فعلًا يزاحم تفاعلًا مباشرًا.',
      en: 'Concurrent rendering means React can work on more than one update at a time, pause a low-priority update to serve an urgent one, and then resume or discard it.\n\nThe problem it solves: a heavy update (filtering a huge list) makes typing in a search box stutter, because every keystroke waits for the filter to finish.\n\n```jsx\nconst [isPending, startTransition] = useTransition();\n\nconst handleChange = (e) => {\n  setQuery(e.target.value);              // urgent — shows immediately\n  startTransition(() => {\n    setResults(filterHugeList(e.target.value));   // interruptible\n  });\n};\n```\nThe result: the input responds instantly and the results catch up. isPending lets you show a transition indicator.\n\nThere is also useDeferredValue for cases where you do not control the setter:\n```jsx\nconst deferredQuery = useDeferredValue(query);\nconst results = useMemo(() => filter(deferredQuery), [deferredQuery]);\n```\n\nImportant points:\n• This is not multithreading: everything is still one thread, but the work is chunked and interruptible.\n• Updates caused by direct user input always stay urgent.\n• React 18+ batches updates automatically, including inside promises and timers, unlike React 17.\n• Do not wrap everything in transitions — use them where a genuinely heavy update competes with a direct interaction.',
    },
  },
  {
    id: 'react-server-components',
    difficulty: advanced,
    question: {
      ar: 'ما هي React Server Components وما الفرق بينها وبين Client Components؟',
      en: 'What are React Server Components and how do they differ from Client Components?',
    },
    answer: {
      ar: 'Server Components تُصيَّر على الخادم فقط، ولا يُرسل كودها إلى المتصفح إطلاقًا — يُرسل ناتج التصيير فقط.\n\nما يمكنها فعله:\n• الوصول المباشر لقاعدة البيانات أو نظام الملفات دون بناء API وسيط.\n• استخدام أسرار الخادم بأمان.\n• استخدام مكتبات ثقيلة (تحويل Markdown، معالجة تواريخ) دون أن تدخل حزمة العميل.\n\nما لا يمكنها فعله: useState وuseEffect ومعالجات الأحداث وواجهات المتصفح — لأنها ليست تفاعلية.\n\nClient Components تُعلَّم بتوجيه "use client" في أعلى الملف، وهي المكوّنات التقليدية: تفاعلية، لها حالة، وتُرسل إلى المتصفح.\n\n```jsx\n// Server Component افتراضيًا\nasync function ProductPage({ id }) {\n  const product = await db.products.findById(id);   // مباشرة\n  return (\n    <article>\n      <h1>{product.name}</h1>\n      <AddToCartButton productId={id} />   {/* Client Component */}\n    </article>\n  );\n}\n```\n\nالفائدة الأساسية: حزمة JavaScript أصغر بكثير، وجلب بيانات أقرب للمصدر بلا تأخير شبكة إضافي، وSEO أفضل.\n\nقواعد الحدود التي يجب معرفتها:\n• Server Component يمكنه استيراد Client Component، والعكس غير صحيح.\n• لكن يمكن تمرير Server Component كـ children إلى Client Component — وهذا النمط مهم جدًا.\n• ما يُمرَّر من الخادم إلى العميل كـ props يجب أن يكون قابلًا للتسلسل (لا دوال ولا كائنات Date معقّدة).\n• "use client" يحدد نقطة دخول: كل ما يُستورد بعدها يصبح جزءًا من حزمة العميل.',
      en: 'Server Components render on the server only, and their code is never sent to the browser — only the rendered output is.\n\nWhat they can do:\n• Access the database or filesystem directly, without building an intermediate API.\n• Use server secrets safely.\n• Use heavy libraries (Markdown conversion, date handling) without adding them to the client bundle.\n\nWhat they cannot do: useState, useEffect, event handlers or browser APIs — they are not interactive.\n\nClient Components are marked with the "use client" directive at the top of the file. They are the traditional kind: interactive, stateful, shipped to the browser.\n\n```jsx\n// a Server Component by default\nasync function ProductPage({ id }) {\n  const product = await db.products.findById(id);   // directly\n  return (\n    <article>\n      <h1>{product.name}</h1>\n      <AddToCartButton productId={id} />   {/* a Client Component */}\n    </article>\n  );\n}\n```\n\nThe core benefit: a much smaller JavaScript bundle, data fetching close to the source with no extra network hop, and better SEO.\n\nThe boundary rules you need to know:\n• A Server Component can import a Client Component; the reverse is not allowed.\n• But you can pass a Server Component as children to a Client Component — an important pattern.\n• Props crossing from server to client must be serialisable (no functions, no exotic objects).\n• "use client" marks an entry point: everything imported below it becomes part of the client bundle.',
    },
  },
  {
    id: 'react-hydration',
    difficulty: advanced,
    question: {
      ar: 'ما هي الـ Hydration وما أسباب hydration mismatch؟',
      en: 'What is hydration, and what causes hydration mismatches?',
    },
    answer: {
      ar: 'الـ hydration هي العملية التي يربط بها React كود JavaScript في المتصفح بـ HTML الذي وصل جاهزًا من الخادم: يمر على الشجرة، ويعلّق معالجات الأحداث، ويبني حالته الداخلية — دون إعادة إنشاء الـ DOM.\n\nالمستخدم يرى المحتوى فورًا (لأنه HTML جاهز) لكنه لا يستطيع التفاعل معه حتى تكتمل الـ hydration. هذه الفجوة تُقاس بمقياس INP/TTI.\n\nالـ hydration mismatch يحدث عندما يختلف ما صيّره الخادم عمّا صيّره العميل في أول تصيير. الأسباب الشائعة:\n\n1. قيم غير حتمية: Date.now() وMath.random() وnew Date().toLocaleString().\n2. الوصول إلى window أو localStorage أثناء التصيير الأول.\n3. محتوى يعتمد على المنطقة الزمنية أو لغة المتصفح.\n4. HTML غير صالح: <div> داخل <p> يعيد المتصفح ترتيبه فيختلف عن ناتج الخادم.\n5. إضافات المتصفح التي تعدّل الـ DOM.\n\nالحلول:\n```jsx\n// عرض المحتوى المعتمد على المتصفح بعد التركيب\nconst [mounted, setMounted] = useState(false);\nuseEffect(() => setMounted(true), []);\nif (!mounted) return <Placeholder />;\n\n// أو تعطيل التصيير على الخادم لمكوّن بعينه\nconst Chart = dynamic(() => import("./Chart"), { ssr: false });\n\n// أو تجاهل الاختلاف في عنصر نصي واحد\n<time suppressHydrationWarning>{formatted}</time>\n```\n\nلماذا نأخذها بجدية؟ لأن React في الإصدارات الحديثة يتخلّى عن HTML الخادم ويعيد التصيير من الصفر عند الاختلاف، فتضيع فائدة SSR بالكامل ويحدث وميض مرئي.',
      en: 'Hydration is the process where React in the browser attaches to the HTML that arrived ready from the server: it walks the tree, attaches event handlers and builds its internal state — without recreating the DOM.\n\nThe user sees content immediately (it is real HTML) but cannot interact until hydration finishes. That gap is what INP/TTI measure.\n\nA hydration mismatch happens when the server-rendered output differs from the client\'s first render. The common causes:\n\n1. Non-deterministic values: Date.now(), Math.random(), new Date().toLocaleString().\n2. Touching window or localStorage during the first render.\n3. Content depending on timezone or browser locale.\n4. Invalid HTML: a <div> inside a <p> gets restructured by the browser and no longer matches the server output.\n5. Browser extensions mutating the DOM.\n\nThe fixes:\n```jsx\n// render browser-dependent content after mount\nconst [mounted, setMounted] = useState(false);\nuseEffect(() => setMounted(true), []);\nif (!mounted) return <Placeholder />;\n\n// or disable server rendering for one component\nconst Chart = dynamic(() => import("./Chart"), { ssr: false });\n\n// or accept a difference on one text node\n<time suppressHydrationWarning>{formatted}</time>\n```\n\nWhy take it seriously? Because modern React discards the server HTML and re-renders from scratch on a mismatch, which throws away the entire benefit of SSR and produces a visible flash.',
    },
  },
  {
    id: 'react-suspense-advanced',
    difficulty: advanced,
    question: {
      ar: 'كيف تعمل Suspense على مستوى أعمق؟ وما علاقتها بالـ streaming؟',
      en: 'How does Suspense work at a deeper level, and how does it relate to streaming?',
    },
    answer: {
      ar: 'Suspense آلية تسمح للمكوّن بأن "يعلن" أنه ليس جاهزًا للتصيير بعد، فيعرض React أقرب fallback أعلى منه في الشجرة، ويستأنف عندما يجهز.\n\nالآلية الداخلية: المكوّن يرمي Promise أثناء التصيير، ويلتقطه React ويعلّق تلك الشجرة الفرعية.\n\nاستخداماتها:\n1. تقسيم الكود مع lazy — أقدم استخدام.\n2. جلب البيانات مع مكتبة متكاملة معها (React Query أو Relay أو Server Components).\n3. التصيير التدريجي على الخادم (streaming SSR) — وهنا تصبح قوية جدًا.\n\nفي الـ streaming SSR يرسل الخادم HTML على أجزاء: ما هو جاهز يصل فورًا، وما ينتظر بيانات يُرسل placeholder مكانه، ثم يُدفع المحتوى الحقيقي عند جهوزه.\n\n```jsx\n<Suspense fallback={<HeaderSkeleton />}>\n  <Header />\n</Suspense>\n<Suspense fallback={<FeedSkeleton />}>\n  <SlowFeed />          {/* لا يؤخر بقية الصفحة */}\n</Suspense>\n```\n\nالنتيجة: عنصر بطيء واحد لم يعد يحجب الصفحة كلها، ويتحسّن مقياس LCP بشكل ملموس. كما تحدث الـ hydration انتقائيًا: الأجزاء الجاهزة تصبح تفاعلية قبل غيرها.\n\nنقاط مهمة في التصميم:\n• موضع حدود Suspense قرار تصميمي: حدود قليلة جدًا تعني انتظارًا طويلًا، وكثيرة جدًا تعني وميضًا وتقطّعًا بصريًا.\n• اجعل الـ fallback مشابهًا في الأبعاد للمحتوى النهائي لتجنّب انزياح التخطيط (CLS).\n• اقرن Suspense دائمًا بـ Error Boundary لتغطية حالة الفشل لا حالة الانتظار فقط.',
      en: 'Suspense lets a component declare that it is not ready to render yet. React then shows the nearest fallback above it in the tree and resumes when it becomes ready.\n\nThe internal mechanism: the component throws a promise during render, React catches it and suspends that subtree.\n\nIts uses:\n1. Code splitting with lazy — the original use case.\n2. Data fetching with an integrated library (React Query, Relay, Server Components).\n3. Streaming server rendering — where it becomes genuinely powerful.\n\nIn streaming SSR the server sends HTML in pieces: what is ready arrives immediately, anything waiting on data gets a placeholder, and the real content is pushed once it resolves.\n\n```jsx\n<Suspense fallback={<HeaderSkeleton />}>\n  <Header />\n</Suspense>\n<Suspense fallback={<FeedSkeleton />}>\n  <SlowFeed />          {/* does not hold up the rest of the page */}\n</Suspense>\n```\n\nThe result: one slow component no longer blocks the whole page, and LCP improves noticeably. Hydration also becomes selective — ready sections become interactive before the others.\n\nDesign points that matter:\n• Where you place Suspense boundaries is a design decision: too few means long waits, too many means flicker and visual churn.\n• Make the fallback match the final content\'s dimensions to avoid layout shift (CLS).\n• Always pair Suspense with an error boundary, so failure is covered as well as waiting.',
    },
  },
  {
    id: 'react-uselayouteffect',
    difficulty: advanced,
    question: {
      ar: 'ما الفرق بين useEffect و useLayoutEffect؟',
      en: 'What is the difference between useEffect and useLayoutEffect?',
    },
    answer: {
      ar: 'الفرق في التوقيت بالنسبة لرسم المتصفح:\n\n• useEffect: يُنفَّذ بشكل غير متزامن بعد أن يرسم المتصفح الشاشة. لا يؤخر الرسم.\n• useLayoutEffect: يُنفَّذ بشكل متزامن بعد تحديث الـ DOM وقبل الرسم. يؤخر الرسم حتى ينتهي.\n\nالتسلسل: تصيير ← تحديث DOM ← useLayoutEffect ← رسم ← useEffect.\n\nمتى أحتاج useLayoutEffect؟ عندما أقرأ من الـ DOM ثم أعدّله، ويجب ألا يرى المستخدم الحالة الوسيطة:\n```jsx\nuseLayoutEffect(() => {\n  const { height } = ref.current.getBoundingClientRect();\n  setTooltipPosition(computePosition(height));   // قبل الرسم — بلا وميض\n}, [isOpen]);\n```\nلو استخدمت useEffect هنا لظهرت النافذة في مكان خاطئ لجزء من الثانية ثم قفزت.\n\nحالات الاستخدام: تحديد موضع tooltip أو popover، قياس عنصر وضبط أبعاده، استعادة موضع التمرير، منع وميض في رسوم متحركة.\n\nلماذا لا نستخدمه دائمًا؟ لأنه يحجب الرسم؛ عمل ثقيل بداخله يؤخر ظهور الواجهة ويضر بالأداء المحسوس.\n\nملاحظة مهمة في SSR: useLayoutEffect لا يعمل على الخادم ويطلق تحذيرًا. إذا كان المكوّن يُصيَّر على الخادم فاجعل الحالة الأولية صحيحة بلا حاجة للقياس، أو استخدم useEffect مع قبول التأخير البسيط.\n\nالقاعدة: useEffect هو الافتراضي، وuseLayoutEffect استثناء لحالات القياس البصري فقط.',
      en: 'The difference is timing relative to the browser paint:\n\n• useEffect runs asynchronously after the browser has painted. It does not delay paint.\n• useLayoutEffect runs synchronously after the DOM update and before paint. It blocks painting until it finishes.\n\nThe sequence is: render → DOM update → useLayoutEffect → paint → useEffect.\n\nWhen do I need useLayoutEffect? When I read from the DOM and then modify it, and the user must not see the intermediate state:\n```jsx\nuseLayoutEffect(() => {\n  const { height } = ref.current.getBoundingClientRect();\n  setTooltipPosition(computePosition(height));   // before paint — no flicker\n}, [isOpen]);\n```\nWith useEffect here the tooltip would appear in the wrong place for a frame and then jump.\n\nUse cases: positioning a tooltip or popover, measuring an element and adjusting it, restoring scroll position, preventing animation flicker.\n\nWhy not always use it? Because it blocks paint; heavy work inside it delays the UI appearing and hurts perceived performance.\n\nAn important SSR note: useLayoutEffect does not run on the server and logs a warning. If the component is server-rendered, make the initial state correct without measurement, or use useEffect and accept the small delay.\n\nThe rule: useEffect is the default, useLayoutEffect is the exception for visual measurement only.',
    },
  },
  {
    id: 'react-state-architecture',
    difficulty: advanced,
    question: {
      ar: 'كيف تصمم معمارية الحالة في تطبيق React كبير؟',
      en: 'How do you design state architecture in a large React application?',
    },
    answer: {
      ar: 'أبدأ بتصنيف الحالة، لأن كل نوع له أداة مختلفة — وخلطها هو سبب معظم التعقيد:\n\n1. حالة الخادم (server state): بيانات مصدرها الخادم. أدوات: React Query أو SWR أو RTK Query. هذه ليست حالة تطبيق بل cache، وتحتاج انتهاء صلاحية وإعادة جلب وإبطالًا.\n\n2. حالة الواجهة المحلية: فتح نافذة، تبويب نشط، قيمة حقل. المكان: useState داخل المكوّن، وليس في مخزن عام.\n\n3. حالة الواجهة المشتركة: سلة الشراء، التفضيلات، السمة. أدوات: Context للبسيط وقليل التغيّر، أو Zustand/Redux Toolkit للأعقد.\n\n4. حالة الـ URL: الفلاتر والصفحة والترتيب والبحث. مكانها الصحيح هو الـ URL نفسه عبر search params، لا useState — وهذا يجعل الصفحة قابلة للمشاركة والرجوع بزر الخلف.\n\n5. حالة النماذج: مكتبة مثل React Hook Form.\n\nالمبادئ التي أطبّقها:\n• أبقِ الحالة في أدنى مستوى ممكن، ولا ترفعها إلا عند الحاجة الفعلية.\n• مصدر واحد للحقيقة: لا تكرّر نفس البيانات في مكانين.\n• لا تخزّن ما يمكن اشتقاقه أثناء التصيير.\n• طبّع (normalize) البيانات المرتبطة بمعرّفات بدل تكرار الكائنات.\n• لا تضع حالة الخادم في Redux — هذا أكثر خطأ معماري شيوعًا وأكثرها كلفة.\n\nوعلامة على معمارية سيئة: كل تغيير صغير يتطلب لمس عدة ملفات في طبقات مختلفة.',
      en: 'I start by classifying state, because each type needs a different tool — and conflating them causes most of the complexity:\n\n1. Server state: data owned by the server. Tools: React Query, SWR, RTK Query. This is not application state but a cache, and it needs staleness, refetching and invalidation.\n\n2. Local UI state: a modal open flag, the active tab, an input value. Place: useState inside the component, not a global store.\n\n3. Shared UI state: the cart, preferences, theme. Tools: Context for simple, slow-changing values; Zustand or Redux Toolkit for anything more complex.\n\n4. URL state: filters, page, sort, search. This belongs in the URL itself via search params, not useState — that makes the page shareable and the back button work.\n\n5. Form state: a library such as React Hook Form.\n\nThe principles I apply:\n• Keep state at the lowest level possible and lift only when genuinely needed.\n• One source of truth: never duplicate the same data in two places.\n• Do not store what can be derived during render.\n• Normalise related data by id rather than duplicating objects.\n• Do not put server state in Redux — the most common and most expensive architectural mistake in React apps.\n\nA sign of poor architecture: every small change requires touching several files across different layers.',
    },
  },
  {
    id: 'react-large-scale',
    difficulty: advanced,
    question: {
      ar: 'كيف تنظّم تطبيق React كبيرًا يعمل عليه فريق؟',
      en: 'How do you structure a large React application that a team works on?',
    },
    answer: {
      ar: 'التنظيم حسب الميزة (feature) لا حسب النوع التقني. مجلد components يضم 200 ملف لا يخبرك بشيء عن التطبيق.\n\n```\nsrc/\n  features/\n    orders/\n      components/    hooks/    api/    types/\n      index.js       // الواجهة العامة للميزة\n    checkout/\n  shared/\n    ui/              // مكوّنات تصميم عامة\n    hooks/  lib/  config/\n  app/               // التوجيه والمزوّدون والتهيئة\n```\n\nالقواعد التي تحافظ على النظام مع نمو الفريق:\n1. كل ميزة تصدّر واجهة عامة عبر index فقط؛ لا يستورد أحد من أعماق ميزة أخرى. يمكن فرض ذلك بقاعدة ESLint.\n2. الاعتماديات تتجه في اتجاه واحد: features تعتمد على shared، والعكس ممنوع.\n3. مكتبة مكوّنات تصميم مشتركة لمنع تكرار خمس نسخ من الزر.\n4. فصل مكوّنات العرض عن منطق البيانات: المكوّن يعرض، والـ hook يجلب ويحسب.\n5. طبقة API مركزية بدل نثر fetch في كل مكان.\n6. حدود أخطاء على مستوى الأقسام.\n\nما يهم عمليًا بقدر البنية:\n• TypeScript في الوضع الصارم.\n• ESLint وPrettier مع فرضهما في CI.\n• اختبارات: وحدات للمنطق، وReact Testing Library للسلوك، وE2E للمسارات الحرجة.\n• مراقبة أحجام الحزم لمنع التضخّم التدريجي.\n• توثيق قرارات المعمارية (ADR) حتى لا تُعاد المناقشات كل ستة أشهر.\n\nوالمبدأ الحاكم: البنية يجب أن تجعل التغيير سهلًا محليًا. إذا كان تعديل ميزة يتطلب لمس عشرة مجلدات، فالتقسيم خاطئ.',
      en: 'Organise by feature, not by technical type. A components folder with 200 files tells you nothing about the application.\n\n```\nsrc/\n  features/\n    orders/\n      components/    hooks/    api/    types/\n      index.js       // the feature\'s public API\n    checkout/\n  shared/\n    ui/              // generic design components\n    hooks/  lib/  config/\n  app/               // routing, providers, bootstrapping\n```\n\nThe rules that keep it orderly as the team grows:\n1. Each feature exposes a public API through its index; nobody imports from deep inside another feature. You can enforce this with an ESLint rule.\n2. Dependencies flow one way: features depend on shared, never the reverse.\n3. A shared design-component library so you do not end up with five different buttons.\n4. Separate presentation from data logic: components render, hooks fetch and compute.\n5. A central API layer instead of fetch calls scattered everywhere.\n6. Error boundaries at section level.\n\nWhat matters operationally as much as the structure:\n• TypeScript in strict mode.\n• ESLint and Prettier, enforced in CI.\n• Tests: unit tests for logic, React Testing Library for behaviour, E2E for critical paths.\n• Bundle size monitoring to prevent gradual bloat.\n• Recorded architecture decisions (ADRs) so the same debates do not recur every six months.\n\nThe governing principle: the structure should make change locally easy. If modifying one feature means touching ten folders, the split is wrong.',
    },
  },
  {
    id: 'react-antipatterns',
    difficulty: advanced,
    question: {
      ar: 'ما هي أشهر الأنماط السيئة (anti-patterns) في React؟',
      en: 'What are the most common anti-patterns in React?',
    },
    answer: {
      ar: 'الأنماط التي أراها تسبب أكبر ضرر:\n\n1. تعريف مكوّن داخل مكوّن آخر — يُعاد تركيبه بالكامل في كل تصيير وتضيع حالته والتركيز فيه.\n```jsx\nfunction Parent() {\n  function Child() { ... }    // خطأ\n  return <Child />;\n}\n```\n\n2. نسخ props إلى state ثم محاولة مزامنتهما بـ useEffect. غالبًا ما تكون القيمة مشتقة ولا تحتاج state أصلًا.\n\n3. استخدام useEffect لكل شيء: حساب قيم مشتقة، الاستجابة لأحداث المستخدم، مزامنة حالتين. معظم هذه الحالات لا تحتاج تأثيرًا.\n\n4. تعديل الحالة مباشرة: `state.items.push(x)` لا يُطلق إعادة تصيير.\n\n5. الفهرس كـ key في قائمة قابلة للتغيير — يسبب أخطاء حقيقية لا مجرد تحذير.\n\n6. حالة زائدة عن الحاجة: تخزين قيمة يمكن حسابها من قيم أخرى، فتفتح باب عدم الاتساق.\n\n7. prop drilling عبر طبقات كثيرة بدل التركيب أو Context.\n\n8. مكوّن واحد ضخم يجلب البيانات ويصفّيها ويعرضها ويدير النموذج.\n\n9. تغليف كل شيء بـ memo وuseCallback دون قياس — تعقيد بلا مكسب.\n\n10. dangerouslySetInnerHTML مع محتوى من المستخدم دون تنقية.\n\n11. وضع حالة الخادم في Redux بدل مكتبة مخصصة.\n\n12. إسكات تحذيرات مصفوفة الاعتماديات بـ eslint-disable بدل معالجة السبب.\n\nالخيط الجامع بينها: محاربة نموذج React بدل العمل معه.',
      en: 'The patterns I see causing the most damage:\n\n1. Defining a component inside another component — it fully remounts every render, losing its state and focus.\n```jsx\nfunction Parent() {\n  function Child() { ... }    // wrong\n  return <Child />;\n}\n```\n\n2. Copying props into state and then trying to keep them in sync with useEffect. Usually the value is derived and needs no state at all.\n\n3. Reaching for useEffect for everything: computing derived values, responding to user actions, syncing two pieces of state. Most of those need no effect.\n\n4. Mutating state directly: `state.items.push(x)` does not trigger a re-render.\n\n5. Index as key in a mutable list — a real correctness bug, not just a warning.\n\n6. Redundant state: storing a value computable from other values, which opens the door to inconsistency.\n\n7. Prop drilling through many layers instead of composition or context.\n\n8. One giant component that fetches, filters, renders and manages a form.\n\n9. Wrapping everything in memo and useCallback without measuring — complexity for no gain.\n\n10. dangerouslySetInnerHTML with user content and no sanitisation.\n\n11. Putting server state in Redux instead of a purpose-built library.\n\n12. Silencing dependency-array warnings with eslint-disable instead of fixing the cause.\n\nThe common thread: fighting React\'s model instead of working with it.',
    },
  },
  {
    id: 'react-avoid-rerenders',
    difficulty: advanced,
    question: {
      ar: 'كيف تتجنّب عمليات إعادة التصيير غير الضرورية بشكل منهجي؟',
      en: 'How do you systematically avoid unnecessary re-renders?',
    },
    answer: {
      ar: 'أتبع ترتيبًا من الحلول المعمارية إلى الحلول التقنية، لأن الأولى أقوى وأقل تكلفة:\n\n1. خفض الحالة: انقل الحالة إلى أصغر مكوّن يحتاجها. حالة حقل بحث في مكوّن App تعيد تصيير التطبيق كله مع كل حرف.\n\n2. التركيب عبر children — حيلة فعّالة وقليلة الشهرة:\n```jsx\nfunction Wrapper({ children }) {\n  const [open, setOpen] = useState(false);\n  return <div>{children}</div>;   // children لا يُعاد تصييره عند تغيّر open\n}\n```\nلأن عنصر children أُنشئ في الأب، لا يتأثر بحالة Wrapper.\n\n3. تقسيم الـ Context: افصل القيم سريعة التغيّر عن البطيئة، وافصل دوال التحديث (الثابتة) عن القيم (المتغيرة). هذا يمنع إعادة تصيير المستهلكين الذين لا يحتاجون المتغيّر.\n\n4. المكتبات التي تدعم الاشتراك الانتقائي: Zustand مع selector يعيد التصيير فقط عند تغيّر الجزء المطلوب، بعكس Context.\n\n5. تثبيت المراجع: useMemo للكائنات وuseCallback للدوال — ضرورية عند استخدام memo أو كاعتماديات.\n\n6. React.memo على المكوّنات المكلفة أو المتكررة.\n\n7. virtualization للقوائم الطويلة: لا تُصيَّر إلا العناصر المرئية.\n\n8. useTransition للتحديثات الثقيلة حتى تبقى الواجهة متجاوبة.\n\nوالقياس أولًا دائمًا: DevTools Profiler يخبرك ما أُعيد تصييره ولماذا. ومع React Compiler يصبح كثير من الخطوات 5 و6 تلقائيًا.',
      en: 'I work from architectural fixes down to technical ones, because the former are stronger and cheaper:\n\n1. Push state down: move it to the smallest component that needs it. A search input\'s state living in App re-renders the whole app on every keystroke.\n\n2. Composition via children — an effective and underused trick:\n```jsx\nfunction Wrapper({ children }) {\n  const [open, setOpen] = useState(false);\n  return <div>{children}</div>;   // children does not re-render when open changes\n}\n```\nBecause the children element was created in the parent, Wrapper\'s state does not affect it.\n\n3. Split contexts: separate fast-changing values from slow ones, and separate updater functions (stable) from values (changing). This stops consumers re-rendering for data they do not use.\n\n4. Libraries with selective subscription: Zustand with a selector re-renders only when the selected slice changes, unlike context.\n\n5. Stabilise references: useMemo for objects and useCallback for functions — necessary when using memo or as dependencies.\n\n6. React.memo on expensive or frequently repeated components.\n\n7. Virtualise long lists so only visible rows render.\n\n8. useTransition for heavy updates so the UI stays responsive.\n\nAnd always measure first: the DevTools Profiler tells you what re-rendered and why. With React Compiler, much of steps 5 and 6 becomes automatic.',
    },
  },
  {
    id: 'react-usesyncexternalstore',
    difficulty: advanced,
    question: {
      ar: 'ما هو useSyncExternalStore ولماذا أُضيف؟',
      en: 'What is useSyncExternalStore and why was it added?',
    },
    answer: {
      ar: 'useSyncExternalStore هو الطريقة الرسمية للاشتراك في مخزن حالة خارج React (مكتبة إدارة حالة، أو واجهة متصفح مثل navigator.onLine، أو localStorage).\n\n```jsx\nfunction useOnlineStatus() {\n  return useSyncExternalStore(\n    (callback) => {                       // الاشتراك\n      window.addEventListener("online", callback);\n      window.addEventListener("offline", callback);\n      return () => {\n        window.removeEventListener("online", callback);\n        window.removeEventListener("offline", callback);\n      };\n    },\n    () => navigator.onLine,               // اللقطة على العميل\n    () => true                            // اللقطة على الخادم\n  );\n}\n```\n\nلماذا أُضيف؟ بسبب مشكلة "التمزّق" (tearing) التي ظهرت مع التصيير المتزامن في React 18: لأن التصيير أصبح قابلًا للمقاطعة، يمكن أن تتغير قيمة المخزن الخارجي في منتصف التصيير، فيقرأ جزء من الشجرة القيمة القديمة وجزء آخر القيمة الجديدة — فتظهر واجهة غير متسقة.\n\nهذا الـ hook يضمن أن كل المكوّنات ترى نفس اللقطة خلال تصيير واحد.\n\nهل أستخدمه مباشرة؟ نادرًا. هو موجّه لمؤلفي المكتبات — Redux وZustand وJotai تستخدمه داخليًا. تحتاجه بنفسك عند الاشتراك في واجهة متصفح أو مخزن خارجي بشكل مباشر.\n\nملاحظتان: دالة getSnapshot يجب أن تعيد قيمة مستقرة (لا كائنًا جديدًا كل مرة) وإلا حدثت حلقة لا نهائية؛ والمعامل الثالث ضروري لدعم التصيير على الخادم.',
      en: 'useSyncExternalStore is the official way to subscribe to a store outside React — a state library, a browser API such as navigator.onLine, or localStorage.\n\n```jsx\nfunction useOnlineStatus() {\n  return useSyncExternalStore(\n    (callback) => {                       // subscribe\n      window.addEventListener("online", callback);\n      window.addEventListener("offline", callback);\n      return () => {\n        window.removeEventListener("online", callback);\n        window.removeEventListener("offline", callback);\n      };\n    },\n    () => navigator.onLine,               // client snapshot\n    () => true                            // server snapshot\n  );\n}\n```\n\nWhy was it added? Because of tearing, a problem introduced by concurrent rendering in React 18: since rendering is interruptible, an external store can change mid-render, so part of the tree reads the old value and part reads the new one — producing an inconsistent UI.\n\nThis hook guarantees every component sees the same snapshot within a single render.\n\nDo I use it directly? Rarely. It is aimed at library authors — Redux, Zustand and Jotai use it internally. You need it yourself when subscribing directly to a browser API or an external store.\n\nTwo notes: getSnapshot must return a stable value (not a fresh object each call) or you get an infinite loop, and the third argument is required for server rendering support.',
    },
  },
  {
    id: 'react-refs-forwarding',
    difficulty: advanced,
    question: {
      ar: 'كيف تعمل forwardRef و useImperativeHandle ومتى تستخدمهما؟',
      en: 'How do forwardRef and useImperativeHandle work, and when do you use them?',
    },
    answer: {
      ar: 'الـ ref ليست prop عادية ولا تُمرَّر تلقائيًا عبر المكوّنات. forwardRef يسمح للمكوّن بتمرير الـ ref إلى عنصر داخلي:\n\n```jsx\nconst Input = forwardRef(function Input(props, ref) {\n  return <input ref={ref} {...props} />;\n});\n\n// الآن يستطيع الأب التحكم بالعنصر\nconst inputRef = useRef();\n<Input ref={inputRef} />;\ninputRef.current.focus();\n```\n\nوuseImperativeHandle يحدد ما يراه الأب بدل كشف عنصر الـ DOM كاملًا:\n```jsx\nconst VideoPlayer = forwardRef(function VideoPlayer(props, ref) {\n  const videoRef = useRef();\n\n  useImperativeHandle(ref, () => ({\n    play: () => videoRef.current.play(),\n    pause: () => videoRef.current.pause(),\n    // لا وصول إلى بقية واجهة العنصر\n  }), []);\n\n  return <video ref={videoRef} {...props} />;\n});\n```\n\nمتى أستخدمهما؟ للأوامر التي لا تُعبَّر عنها بالحالة بشكل طبيعي: التركيز (focus)، التمرير إلى عنصر، تشغيل وسائط، فتح نافذة من الخارج، التكامل مع مكتبة تحتاج عنصر DOM.\n\nمتى لا أستخدمهما؟ لأي شيء يمكن التعبير عنه بالـ props. الأسلوب الأمري يكسر تدفق البيانات في اتجاه واحد ويجعل السلوك أصعب تتبعًا.\n\nملاحظة على الإصدارات: في React 19 أصبح ref يُمرَّر كـ prop عادي في المكوّنات الدالية، فلم تعد forwardRef ضرورية في الكود الجديد — لكن معرفتها مطلوبة للتعامل مع الكود والمكتبات القائمة.',
      en: 'A ref is not a normal prop and is not forwarded automatically. forwardRef lets a component pass a ref through to an inner element:\n\n```jsx\nconst Input = forwardRef(function Input(props, ref) {\n  return <input ref={ref} {...props} />;\n});\n\n// the parent can now control the element\nconst inputRef = useRef();\n<Input ref={inputRef} />;\ninputRef.current.focus();\n```\n\nuseImperativeHandle then defines what the parent sees, instead of exposing the whole DOM node:\n```jsx\nconst VideoPlayer = forwardRef(function VideoPlayer(props, ref) {\n  const videoRef = useRef();\n\n  useImperativeHandle(ref, () => ({\n    play: () => videoRef.current.play(),\n    pause: () => videoRef.current.pause(),\n    // the rest of the element API stays private\n  }), []);\n\n  return <video ref={videoRef} {...props} />;\n});\n```\n\nWhen do I use them? For imperative actions that state does not express naturally: focus, scroll into view, media playback, opening a dialog from outside, integrating a library that needs a DOM node.\n\nWhen do I not? For anything expressible with props. An imperative API breaks one-way data flow and makes behaviour harder to trace.\n\nA version note: in React 19 ref is passed as an ordinary prop to function components, so forwardRef is no longer required in new code — but you still need to know it for existing code and libraries.',
    },
  },
  {
    id: 'react-strictmode',
    difficulty: advanced,
    question: {
      ar: 'ما هو StrictMode ولماذا يُنفَّذ الكود مرتين في وضع التطوير؟',
      en: 'What is StrictMode and why does code run twice in development?',
    },
    answer: {
      ar: 'StrictMode أداة تطوير تكشف المشكلات مبكرًا. لا تعرض شيئًا ولا تؤثر على الإنتاج إطلاقًا.\n\nما تفعله في وضع التطوير:\n1. تستدعي دوال المكوّنات ومهيّئات الحالة والـ reducers مرتين، لكشف المكوّنات غير النقية.\n2. تركّب المكوّن ثم تفكّكه ثم تعيد تركيبه، فتُنفَّذ التأثيرات مرتين (setup → cleanup → setup) لكشف التأثيرات التي لا تنظّف نفسها.\n3. تحذّر من الواجهات المهجورة.\n\nلماذا؟ لأن هذه المشكلات تبقى صامتة في التطوير ثم تنفجر في الإنتاج مع التصيير المتزامن، حيث قد يعيد React التصيير أو يتخلى عنه أو يعيد تركيب مكوّن للحفاظ على الحالة.\n\nالسلوك الخاطئ الشائع: طلب شبكة في useEffect بلا إلغاء. في StrictMode ترى طلبين — وهذا ليس خطأ في React بل كشف لعدم وجود تنظيف. الحل الصحيح:\n```jsx\nuseEffect(() => {\n  const controller = new AbortController();\n  fetch(url, { signal: controller.signal });\n  return () => controller.abort();\n}, [url]);\n```\n\nتحذير مهم: لا تعطّل StrictMode لإخفاء الازدواج. الازدواج عَرَض لا مرض — إن كسر شيئًا لديك فذلك دليل على خطأ حقيقي سيظهر لاحقًا.\n\nوما يكشفه غالبًا: آثار جانبية داخل جسم المكوّن، اشتراكات بلا إلغاء، مؤقتات بلا تنظيف، وتعديل كائنات خارجية أثناء التصيير.',
      en: 'StrictMode is a development tool for surfacing problems early. It renders nothing and has zero effect in production.\n\nWhat it does in development:\n1. Calls component functions, state initialisers and reducers twice, to surface impure components.\n2. Mounts, unmounts and remounts components, so effects run twice (setup → cleanup → setup), surfacing effects that do not clean up.\n3. Warns about deprecated APIs.\n\nWhy? Because these problems stay silent in development and then bite in production under concurrent rendering, where React may re-render, discard work, or remount a component while preserving state.\n\nThe classic wrong behaviour it exposes: a fetch in useEffect with no cancellation. Under StrictMode you see two requests — that is not a React bug, it is a missing cleanup. The correct fix:\n```jsx\nuseEffect(() => {\n  const controller = new AbortController();\n  fetch(url, { signal: controller.signal });\n  return () => controller.abort();\n}, [url]);\n```\n\nAn important warning: do not disable StrictMode to hide the double invocation. The doubling is a symptom, not the disease — if it breaks something, that is evidence of a real bug that will surface later.\n\nWhat it most often catches: side effects in the component body, subscriptions without teardown, timers without cleanup, and mutating external objects during render.',
    },
  },

  // ---------------------------------------------------------------- SCENARIOS
  {
    id: 'react-scenario-dashboard-5000-rows',
    difficulty: intermediate,
    kind: 'scenario',
    depth: 'apply',
    question: {
      ar: 'سيناريو: لوحة تحكم تعرض جدولًا فيه 5,000 صف، والكتابة في حقل الفلترة متقطّعة والنقر على صف يستغرق نصف ثانية. كيف تتعامل مع ذلك؟',
      en: 'Scenario: a dashboard renders a table of 5,000 rows; typing in the filter stutters and clicking a row takes half a second. How do you approach it?',
    },
    answer: {
      ar: 'أبدأ بالقياس لا بالتخمين: React DevTools Profiler يخبرني ما الذي يُعاد تصييره ولماذا. في هذا السيناريو سأجد غالبًا ثلاث مشكلات متراكبة:\n\n1. 5,000 صف في DOM: هذه المشكلة الأساسية. مهما حسّنت React، تحديث 5,000 عنصر مكلف. الحل: virtualization (react-window أو @tanstack/virtual) فيُصيَّر ما يظهر في الشاشة فقط — نحو 30 صفًا.\n\n2. كل ضغطة مفتاح تفلتر 5,000 عنصر وتعيد تصيير الجدول: الفلترة داخل useMemo، وقيمة الفلتر عبر useDeferredValue حتى يبقى الحقل متجاوبًا والجدول يلحق بعده.\n\n3. النقر على صف يعيد تصيير كل الصفوف: لأن الحالة selectedId في الأب، وكل صف يستقبل دالة onSelect جديدة. الحل: React.memo على الصف، وuseCallback للدالة، وتمرير isSelected كقيمة منطقية بدل كائن.\n\nالترتيب مهم: virtualization أولًا لأنه يعالج الجذر، ثم الباقي. وإن كانت البيانات تأتي من الخادم، فالفلترة والترقيم على الخادم قد يجعلان كل هذا غير ضروري أصلًا.',
      en: 'I start by measuring, not guessing: the React DevTools Profiler tells me what re-renders and why. In this scenario I will usually find three problems stacked on top of each other:\n\n1. 5,000 rows in the DOM: this is the root problem. However much React is optimised, updating 5,000 elements is expensive. The fix is virtualisation (react-window or @tanstack/virtual), rendering only what is on screen — about 30 rows.\n\n2. Every keystroke filters 5,000 items and re-renders the table: the filter goes inside useMemo, and the filter value goes through useDeferredValue so the input stays responsive and the table catches up afterwards.\n\n3. Clicking a row re-renders every row: because selectedId lives in the parent and every row receives a new onSelect function. The fix: React.memo on the row, useCallback for the handler, and passing isSelected as a boolean instead of an object.\n\nOrder matters: virtualisation first, because it addresses the root, then the rest. And if the data comes from a server, server-side filtering and pagination may make all of this unnecessary in the first place.',
    },
    keyPoints: [
      { ar: 'القياس بالـ Profiler أولًا', en: 'Measure with the Profiler first', terms: ['profiler', 'measure', 'قياس', 'devtools', 'why did'] },
      { ar: 'virtualization للصفوف', en: 'Virtualisation for the rows', terms: ['virtual', 'react-window', 'windowing', 'only visible', 'المرئي', 'tanstack'] },
      { ar: 'useMemo + useDeferredValue للفلترة', en: 'useMemo + useDeferredValue for filtering', terms: ['usememo', 'usedeferredvalue', 'usetransition', 'debounce', 'deferred'] },
      { ar: 'memo + useCallback للصفوف', en: 'memo + useCallback for rows', terms: ['react.memo', 'memo(', 'usecallback', 'stable', 'ثابت', 'new function'] },
    ],
  },
  {
    id: 'react-scenario-state-inconsistency',
    difficulty: advanced,
    kind: 'scenario',
    depth: 'debug',
    question: {
      ar: 'سيناريو: في تطبيق كبير، يُظهر رأس الصفحة عدد عناصر السلة 3 بينما صفحة السلة تعرض 4 عناصر. كيف تتعامل مع هذا التعارض ومن أين تبدأ؟',
      en: 'Scenario: in a large app the header shows a cart count of 3 while the cart page shows 4 items. How do you approach this inconsistency and where do you start?',
    },
    answer: {
      ar: 'التعارض بين مكوّنين يعرضان نفس المعلومة يعني دائمًا شيئًا واحدًا: هناك مصدران للحقيقة. لا أبدأ بإصلاح الرأس ولا الصفحة — أبدأ بالسؤال: من أين يقرأ كل منهما عدد العناصر؟\n\nالأنماط الشائعة التي أجدها:\n1. حالة منسوخة: الرأس يحفظ count في حالته المحلية عند التحميل ولا يُحدَّث عندما تتغير السلة. الحل: اشتقاق العدد من مصدر السلة نفسه، لا تخزينه.\n2. مخزنان مختلفان: السلة في Context والرأس يقرأ من localStorage أو من استجابة API مخزّنة. الحل: مصدر واحد للحقيقة (store مركزي أو React Query بمفتاح واحد) والجميع يقرأ منه.\n3. تخزين مؤقت قديم: React Query يحفظ نسختين بمفتاحين مختلفين ["cart"] و["cart", userId]. الحل: توحيد المفتاح وإبطال الاستعلام عند التحديث.\n4. تحديث متفائل نجح في مكان وفشل في آخر بلا تراجع.\n\nمنهجيًا: أفتح React DevTools وأتتبع من أين تأتي القيمة في كل مكوّن، ثم أتتبع الحدث (إضافة عنصر) وأرى أي المخازن تحدّث وأيها لم يُحدَّث.\n\nالإصلاح الدائم ليس مزامنة المصدرين بل حذف أحدهما. وأضيف اختبارًا يضيف عنصرًا ويتحقق من الرأس والصفحة معًا حتى لا يعود.',
      en: 'A mismatch between two components showing the same information always means one thing: there are two sources of truth. I do not start by fixing the header or the page — I start by asking where each one reads the count from.\n\nThe common patterns I find:\n1. Copied state: the header stores count in local state at mount and never updates when the cart changes. Fix: derive the count from the cart source itself instead of storing it.\n2. Two different stores: the cart lives in Context while the header reads localStorage or a cached API response. Fix: one source of truth (a central store or React Query under one key) that everyone reads from.\n3. Stale cache: React Query holds two copies under different keys, ["cart"] and ["cart", userId]. Fix: unify the key and invalidate on update.\n4. An optimistic update that succeeded in one place and failed in another without rolling back.\n\nMethodically: I open React DevTools and trace where the value comes from in each component, then follow the event (adding an item) and see which stores update and which do not.\n\nThe permanent fix is never to synchronise the two sources but to remove one. And I add a test that adds an item and checks the header and the page together so it does not come back.',
    },
    keyPoints: [
      { ar: 'مصدران للحقيقة', en: 'Two sources of truth', terms: ['source of truth', 'مصدر', 'two sources', 'مصدران', 'duplicate', 'copied', 'منسوخ'] },
      { ar: 'التتبع: من أين تأتي القيمة', en: 'Trace where each value comes from', terms: ['trace', 'تتبع', 'devtools', 'where', 'من أين', 'reads from', 'يقرأ'] },
      { ar: 'الاشتقاق بدل التخزين', en: 'Derive instead of storing', terms: ['derive', 'اشتقاق', 'مشتق', 'compute', 'not store', 'single store', 'react query', 'invalidate'] },
      { ar: 'حذف مصدر لا مزامنته', en: 'Remove a source, do not sync it', terms: ['remove', 'حذف', 'not sync', 'لا مزامنة', 'one store', 'unify', 'توحيد'] },
    ],
  },
];
