// data/categories/javascript.js
import { DIFFICULTY } from '../difficulty.js';

const { beginner, intermediate, advanced } = DIFFICULTY;

export const javascript = [
  // ---------------------------------------------------------------- BEGINNER
  {
    id: 'js-var-let-const',
    difficulty: beginner,
    question: {
      ar: 'ما الفرق بين var و let و const؟',
      en: 'What is the difference between var, let and const?',
    },
    answer: {
      ar: 'الفرق في ثلاثة أمور: النطاق، وإعادة التعريف، وإعادة الإسناد.\n\n• var: نطاقه الدالة (function-scoped)، يمكن إعادة تعريفه وإعادة إسناده، ويُرفع (hoisted) بقيمة undefined.\n• let: نطاقه البلوك (block-scoped)، يمكن إعادة إسناده لكن لا يمكن إعادة تعريفه في نفس النطاق.\n• const: نطاقه البلوك، ولا يمكن إعادة إسناده إطلاقًا.\n\nنقطة مهمة جدًا حول const: هي تمنع إعادة الإسناد لا التعديل. الكائنات والمصفوفات المعرّفة بها يمكن تغيير محتواها:\n```js\nconst user = { name: "Sara" };\nuser.name = "Ali";      // مسموح\nuser = {};              // TypeError\n```\n\nالقاعدة العملية: استخدم const افتراضيًا، وlet عند الحاجة لإعادة الإسناد، ولا تستخدم var في كود جديد.',
      en: 'They differ in three ways: scope, redeclaration and reassignment.\n\n• var is function-scoped, can be redeclared and reassigned, and is hoisted initialised to undefined.\n• let is block-scoped, can be reassigned but not redeclared in the same scope.\n• const is block-scoped and cannot be reassigned at all.\n\nAn important nuance about const: it prevents reassignment, not mutation. Objects and arrays declared with const can still be modified:\n```js\nconst user = { name: "Sara" };\nuser.name = "Ali";      // fine\nuser = {};              // TypeError\n```\n\nThe practical rule: default to const, use let when you genuinely need to reassign, and do not use var in new code.',
    },
  },
  {
    id: 'js-data-types',
    difficulty: beginner,
    question: {
      ar: 'ما هي أنواع البيانات في JavaScript؟',
      en: 'What data types does JavaScript have?',
    },
    answer: {
      ar: 'هناك سبعة أنواع أولية (primitives): string، number، boolean، null، undefined، symbol، bigint.\nوكل ما عداها كائن (object)، بما في ذلك المصفوفات والدوال والتواريخ.\n\nملاحظات يُسأل عنها كثيرًا:\n• typeof null تعيد "object" — هذا خطأ تاريخي في اللغة بقي للتوافق.\n• typeof [] تعيد "object"؛ للتحقق من المصفوفة استخدم Array.isArray().\n• typeof function تعيد "function" رغم أن الدوال كائنات.\n• JavaScript لغة ديناميكية الأنواع: المتغير نفسه يمكن أن يحمل نوعًا مختلفًا لاحقًا.\n\nوnumber في JavaScript هو دائمًا عدد عشري بصيغة IEEE 754، ولهذا تعطي 0.1 + 0.2 القيمة 0.30000000000000004، ولهذا وُجد bigint للأعداد الصحيحة الكبيرة جدًا.',
      en: 'There are seven primitive types: string, number, boolean, null, undefined, symbol and bigint. Everything else is an object, including arrays, functions and dates.\n\nDetails interviewers like to probe:\n• typeof null returns "object" — a historical bug kept for backwards compatibility.\n• typeof [] returns "object"; use Array.isArray() to check for an array.\n• typeof a function returns "function", even though functions are objects.\n• JavaScript is dynamically typed: the same variable can hold a different type later.\n\nAlso, number is always an IEEE 754 double, which is why 0.1 + 0.2 gives 0.30000000000000004, and why bigint exists for very large integers.',
    },
  },
  {
    id: 'js-primitive-vs-reference',
    difficulty: beginner,
    question: {
      ar: 'ما الفرق بين الأنواع الأولية (primitive) والأنواع المرجعية (reference)؟',
      en: 'What is the difference between primitive and reference types?',
    },
    answer: {
      ar: 'الأنواع الأولية تُنسخ بالقيمة، والكائنات تُنسخ بالمرجع.\n\n```js\nlet a = 10;\nlet b = a;\nb = 20;\nconsole.log(a);          // 10 — نسخة مستقلة\n\nlet x = { count: 10 };\nlet y = x;\ny.count = 20;\nconsole.log(x.count);    // 20 — نفس الكائن\n```\n\nنتيجة مهمة على المقارنة: الكائنات تُقارن بالمرجع لا بالمحتوى، لذلك `{a:1} === {a:1}` تعطي false.\n\nنتيجة أخرى تظهر كثيرًا كـ bug: تمرير كائن إلى دالة يسمح لها بتعديل الأصل. إن أردت تجنّب ذلك انسخ الكائن أولًا بـ spread أو structuredClone.\n\nملاحظة دقيقة: JavaScript تمرّر دائمًا بالقيمة، لكن قيمة المتغير الكائني هي المرجع نفسه — لذلك إعادة إسناد المعامل داخل الدالة لا تؤثر على الخارج، بينما تعديل خصائصه يؤثر.',
      en: 'Primitives are copied by value; objects are copied by reference.\n\n```js\nlet a = 10;\nlet b = a;\nb = 20;\nconsole.log(a);          // 10 — an independent copy\n\nlet x = { count: 10 };\nlet y = x;\ny.count = 20;\nconsole.log(x.count);    // 20 — the same object\n```\n\nAn important consequence for comparison: objects compare by reference, not by content, so `{a:1} === {a:1}` is false.\n\nAnother consequence that shows up as a bug constantly: passing an object to a function lets that function mutate the original. If you do not want that, copy it first with spread or structuredClone.\n\nA precise point worth making: JavaScript always passes by value — but for objects the value *is* the reference. So reassigning the parameter inside a function does not affect the caller, while mutating its properties does.',
    },
  },
  {
    id: 'js-null-vs-undefined',
    difficulty: beginner,
    question: {
      ar: 'ما الفرق بين null و undefined؟',
      en: 'What is the difference between null and undefined?',
    },
    answer: {
      ar: 'undefined تعني أن القيمة غير موجودة بعد: متغير أُعلن ولم يُسند إليه شيء، أو معامل لم يُمرَّر، أو خاصية غير موجودة، أو دالة لا تعيد شيئًا. هذه القيمة تضعها اللغة.\n\nnull تعني غياب القيمة عن قصد — أنت من يضعها للتعبير عن "لا شيء هنا".\n\n```js\nlet a;\nconsole.log(a);           // undefined\n\nlet b = null;             // غياب متعمّد\n\nnull == undefined;        // true  (مقارنة فضفاضة)\nnull === undefined;       // false (النوع مختلف)\ntypeof undefined;         // "undefined"\ntypeof null;              // "object" — خطأ تاريخي\n```\n\nفي الواجهات البرمجية يُفضَّل الاتساق: اختر null للتعبير عن "لا قيمة" ولا تخلط بينهما عشوائيًا. ولاحظ أن القيم الافتراضية للمعاملات تعمل مع undefined فقط ولا تعمل مع null.',
      en: 'undefined means a value is not there yet: a declared but unassigned variable, a missing argument, a non-existent property, or a function with no return. The language assigns it.\n\nnull means an intentional absence of value — you assign it to say "deliberately nothing".\n\n```js\nlet a;\nconsole.log(a);           // undefined\n\nlet b = null;             // intentional absence\n\nnull == undefined;        // true  (loose comparison)\nnull === undefined;       // false (different types)\ntypeof undefined;         // "undefined"\ntypeof null;              // "object" — historical bug\n```\n\nIn an API, consistency matters: pick null to express "no value" and do not mix the two arbitrarily. Note also that default parameter values only kick in for undefined, not for null.',
    },
  },
  {
    id: 'js-equality',
    difficulty: beginner,
    question: {
      ar: 'ما الفرق بين == و === ؟',
      en: 'What is the difference between == and ===?',
    },
    answer: {
      ar: '=== يقارن النوع والقيمة بدون أي تحويل. == يحوّل النوع أولًا (type coercion) ثم يقارن، وهو مصدر شهير للأخطاء:\n\n```js\n"5" == 5;        // true\n"5" === 5;       // false\n0 == "";         // true\n0 == false;      // true\nnull == undefined;   // true\nNaN == NaN;      // false\n```\n\nالقاعدة العملية: استخدم === دائمًا. الاستثناء المقبول الوحيد هو `value == null` للتحقق من null وundefined معًا في تعبير واحد.\n\nوهناك خيار ثالث: Object.is، وهو مثل === مع فرقين: Object.is(NaN, NaN) تعطي true، وObject.is(0, -0) تعطي false.',
      en: '=== compares type and value with no conversion. == coerces the types first and then compares, which is a well-known source of bugs:\n\n```js\n"5" == 5;        // true\n"5" === 5;       // false\n0 == "";         // true\n0 == false;      // true\nnull == undefined;   // true\nNaN == NaN;      // false\n```\n\nThe practical rule is to always use ===. The one acceptable exception is `value == null` as a concise check for both null and undefined.\n\nThere is also a third option, Object.is, which behaves like === except that Object.is(NaN, NaN) is true and Object.is(0, -0) is false.',
    },
  },
  {
    id: 'js-hoisting',
    difficulty: beginner,
    question: {
      ar: 'ما هو الـ Hoisting في JavaScript؟',
      en: 'What is hoisting in JavaScript?',
    },
    answer: {
      ar: 'Hoisting هو أن محرك JavaScript يسجّل التصريحات (declarations) في بداية نطاقها قبل تنفيذ الكود. المهم أن التصريح هو ما يُرفع، لا الإسناد.\n\n```js\nconsole.log(a);   // undefined — var مرفوعة ومهيّأة بـ undefined\nvar a = 1;\n\nconsole.log(b);   // ReferenceError\nlet b = 2;\n\nsayHi();          // يعمل — تصريحات الدوال تُرفع كاملة\nfunction sayHi() {}\n\nsayBye();         // TypeError — المتغير مرفوع لكن قيمته ليست دالة بعد\nvar sayBye = function () {};\n```\n\nlet وconst تُرفع أيضًا لكنها تبقى في منطقة الموت المؤقتة (Temporal Dead Zone) من بداية النطاق حتى سطر التصريح، وأي وصول إليها هناك يرمي ReferenceError.\n\nلماذا هذا أفضل؟ لأنه يحوّل خطأً صامتًا (undefined) إلى خطأ صريح يظهر فورًا.',
      en: 'Hoisting means the JavaScript engine registers declarations at the top of their scope before the code runs. What gets hoisted is the declaration, not the assignment.\n\n```js\nconsole.log(a);   // undefined — var is hoisted and initialised to undefined\nvar a = 1;\n\nconsole.log(b);   // ReferenceError\nlet b = 2;\n\nsayHi();          // works — function declarations hoist entirely\nfunction sayHi() {}\n\nsayBye();         // TypeError — the variable hoists but is not a function yet\nvar sayBye = function () {};\n```\n\nlet and const are hoisted too, but they sit in the Temporal Dead Zone from the start of the scope until the declaration line, and touching them there throws a ReferenceError.\n\nWhy is that better? It turns a silent undefined into an explicit error you see immediately.',
    },
  },
  {
    id: 'js-scope',
    difficulty: beginner,
    question: {
      ar: 'ما هو الـ Scope في JavaScript؟',
      en: 'What is scope in JavaScript?',
    },
    answer: {
      ar: 'الـ scope هو المنطقة التي يكون فيها المتغير متاحًا. في JavaScript ثلاثة مستويات:\n\n1. Global scope: متاح في كل مكان.\n2. Function scope: متغيرات var داخل دالة.\n3. Block scope: متغيرات let وconst داخل { }، بما في ذلك الحلقات وجمل if.\n\n```js\nfunction demo() {\n  if (true) {\n    var a = 1;      // نطاق الدالة\n    let b = 2;      // نطاق البلوك\n  }\n  console.log(a);   // 1\n  console.log(b);   // ReferenceError\n}\n```\n\nعند قراءة متغير يبحث المحرك في النطاق الحالي، ثم النطاق الأب، وهكذا حتى النطاق العام — وهذا ما يسمى scope chain. إن لم يجده يرمي ReferenceError.\n\nنقطة عملية: النطاقات المتداخلة تقرأ من الخارج للداخل وليس العكس، وهذا الأساس الذي تُبنى عليه الـ closures.',
      en: 'Scope is the region in which a variable is accessible. JavaScript has three levels:\n\n1. Global scope — available everywhere.\n2. Function scope — var declarations inside a function.\n3. Block scope — let and const inside { }, including loops and if statements.\n\n```js\nfunction demo() {\n  if (true) {\n    var a = 1;      // function-scoped\n    let b = 2;      // block-scoped\n  }\n  console.log(a);   // 1\n  console.log(b);   // ReferenceError\n}\n```\n\nWhen reading a variable the engine looks in the current scope, then the parent, and so on up to the global scope — that is the scope chain. If it finds nothing it throws a ReferenceError.\n\nA practical point: nested scopes read outward, never inward, and that is the foundation closures are built on.',
    },
  },
  {
    id: 'js-functions-types',
    difficulty: beginner,
    question: {
      ar: 'ما الفرق بين function declaration و function expression و arrow function؟',
      en: 'What is the difference between a function declaration, a function expression and an arrow function?',
    },
    answer: {
      ar: '```js\nfunction add(a, b) { return a + b; }            // declaration\nconst add = function (a, b) { return a + b; };  // expression\nconst add = (a, b) => a + b;                    // arrow\n```\n\nالفروق:\n1. الرفع: التصريح يُرفع كاملًا فيمكن استدعاؤه قبل تعريفه؛ التعبير والسهمية لا.\n2. قيمة this: الدالة العادية تحدد this وقت الاستدعاء، أما السهمية فترث this من النطاق المحيط (lexical this) — وهذا أهم فرق عملي.\n3. arguments: متاحة في الدوال العادية وغير موجودة في السهمية؛ نستخدم rest parameters بدلًا منها.\n4. السهمية لا تصلح كـ constructor ولا يمكن استخدام new معها.\n\nمتى أستخدم السهمية؟ في الـ callbacks ودوال المصفوفات وأي مكان أريد فيه الحفاظ على this الخارجي.\nمتى أتجنّبها؟ في توابع (methods) الكائنات التي تحتاج this الخاص بالكائن، وفي معالجات الأحداث إذا كنت تعتمد على this كعنصر DOM.',
      en: '```js\nfunction add(a, b) { return a + b; }            // declaration\nconst add = function (a, b) { return a + b; };  // expression\nconst add = (a, b) => a + b;                    // arrow\n```\n\nThe differences:\n1. Hoisting: a declaration hoists fully so you can call it before its definition; expressions and arrows do not.\n2. this: a regular function determines this at call time, while an arrow inherits this from the enclosing scope (lexical this) — the most important practical difference.\n3. arguments: available in regular functions, absent in arrows; use rest parameters instead.\n4. Arrows cannot be used as constructors — no new.\n\nWhen do I use arrows? Callbacks, array methods, and anywhere I want to keep the outer this.\nWhen do I avoid them? Object methods that need the object as this, and event handlers where you rely on this being the DOM element.',
    },
  },
  {
    id: 'js-params-vs-args',
    difficulty: beginner,
    question: {
      ar: 'ما الفرق بين parameters و arguments؟ وكيف تعمل القيم الافتراضية؟',
      en: 'What is the difference between parameters and arguments, and how do default values work?',
    },
    answer: {
      ar: 'الـ parameters هي الأسماء في تعريف الدالة، والـ arguments هي القيم الفعلية المُمرَّرة عند الاستدعاء.\n\n```js\nfunction greet(name, greeting = "Hello") {   // parameters\n  return `${greeting}, ${name}`;\n}\n\ngreet("Sara");                                // arguments\n```\n\nنقاط مهمة:\n• JavaScript لا تشتكي من عدد الوسائط: المعامل غير المُمرَّر يصبح undefined، والوسائط الزائدة تُتجاهل (لكنها تظل متاحة في كائن arguments).\n• القيمة الافتراضية تُطبَّق عندما يكون الوسيط undefined فقط، ولا تُطبَّق مع null:\n```js\ngreet("Sara", null);      // "null, Sara"\n```\n• القيم الافتراضية تُقيَّم عند كل استدعاء، لذلك `function f(list = [])` تنشئ مصفوفة جديدة في كل مرة — وهذا هو السلوك المطلوب عادة.\n• في الدوال السهمية لا يوجد كائن arguments؛ استخدم rest parameters: `(...args) => {}`.',
      en: 'Parameters are the names in the function definition; arguments are the actual values passed at the call site.\n\n```js\nfunction greet(name, greeting = "Hello") {   // parameters\n  return `${greeting}, ${name}`;\n}\n\ngreet("Sara");                                // arguments\n```\n\nWhat matters:\n• JavaScript does not complain about argument count: a missing parameter is undefined, and extra arguments are ignored (though still visible in the arguments object).\n• A default value applies only when the argument is undefined, not null:\n```js\ngreet("Sara", null);      // "null, Sara"\n```\n• Defaults are evaluated on every call, so `function f(list = [])` creates a fresh array each time — which is normally what you want.\n• Arrow functions have no arguments object; use rest parameters instead: `(...args) => {}`.',
    },
  },
  {
    id: 'js-operators',
    difficulty: beginner,
    question: {
      ar: 'ما هي أهم العوامل (operators) في JavaScript؟ وما معنى truthy و falsy؟',
      en: 'What are the main operators in JavaScript, and what do truthy and falsy mean?',
    },
    answer: {
      ar: 'العوامل الأساسية: حسابية (+ - * / % **)، إسناد (= += -=)، مقارنة (=== !== > <)، منطقية (&& || !)، وثلاثية (condition ? a : b).\n\nالقيم الـ falsy في JavaScript ثمانٍ فقط: false و0 و-0 و0n و"" وnull وundefined وNaN. كل ما عداها truthy — بما في ذلك [] و{} و"0" و"false".\n\n```js\nif ([]) console.log("يُطبع!");      // المصفوفة الفارغة truthy\nif ("0") console.log("يُطبع!");     // النص "0" truthy\n```\n\nسلوك العوامل المنطقية يستحق الانتباه: && و|| لا تعيدان قيمة منطقية بل إحدى القيمتين نفسها:\n```js\nconst name = input || "Guest";     // "Guest" إذا كانت input falsy\nconst name = input ?? "Guest";     // "Guest" فقط إذا كانت null أو undefined\n```\nهذا الفرق مهم: `0 || 10` تعطي 10، بينما `0 ?? 10` تعطي 0 — وهو السلوك المطلوب غالبًا مع الأرقام.',
      en: 'The main groups: arithmetic (+ - * / % **), assignment (= += -=), comparison (=== !== > <), logical (&& || !) and the ternary (condition ? a : b).\n\nThere are exactly eight falsy values: false, 0, -0, 0n, "", null, undefined and NaN. Everything else is truthy — including [], {}, "0" and "false".\n\n```js\nif ([]) console.log("this runs!");   // an empty array is truthy\nif ("0") console.log("this runs!");  // the string "0" is truthy\n```\n\nThe logical operators deserve attention: && and || do not return booleans, they return one of the operands:\n```js\nconst name = input || "Guest";     // "Guest" whenever input is falsy\nconst name = input ?? "Guest";     // "Guest" only when input is null/undefined\n```\nThat difference matters: `0 || 10` gives 10, while `0 ?? 10` gives 0 — usually the behaviour you actually want with numbers.',
    },
  },
  {
    id: 'js-conditions',
    difficulty: beginner,
    question: {
      ar: 'ما هي طرق كتابة الشروط في JavaScript ومتى تستخدم كلًا منها؟',
      en: 'What are the ways to write conditionals in JavaScript and when do you use each?',
    },
    answer: {
      ar: 'الخيارات المتاحة:\n\n```js\n// if / else if / else — الأكثر مرونة\nif (score >= 90) grade = "A";\nelse if (score >= 80) grade = "B";\nelse grade = "C";\n\n// ternary — لتعبير قصير يُسند قيمة\nconst status = isActive ? "active" : "inactive";\n\n// switch — عند مقارنة قيمة واحدة بعدة احتمالات\nswitch (role) {\n  case "admin": return adminView();\n  case "editor":\n  case "author": return editorView();     // تجميع الحالات\n  default: return guestView();\n}\n\n// object lookup — بديل نظيف لـ switch الطويل\nconst views = { admin: adminView, editor: editorView };\nreturn (views[role] ?? guestView)();\n```\n\nنقطتان مهمتان:\n• switch يقارن بـ === تمامًا، ونسيان break يسبب fall-through (الانتقال للحالة التالية) — وهو أحد أشهر الأخطاء.\n• تجنّب تداخل الشروط العميق: استخدم early return لتسطيح الكود، فهو يحسّن القراءة كثيرًا.',
      en: 'The available forms:\n\n```js\n// if / else if / else — the most flexible\nif (score >= 90) grade = "A";\nelse if (score >= 80) grade = "B";\nelse grade = "C";\n\n// ternary — for a short expression that assigns a value\nconst status = isActive ? "active" : "inactive";\n\n// switch — comparing one value against several options\nswitch (role) {\n  case "admin": return adminView();\n  case "editor":\n  case "author": return editorView();     // grouped cases\n  default: return guestView();\n}\n\n// object lookup — a clean alternative to a long switch\nconst views = { admin: adminView, editor: editorView };\nreturn (views[role] ?? guestView)();\n```\n\nTwo things worth stating:\n• switch compares with strict equality, and a missing break causes fall-through — one of the classic bugs.\n• Avoid deeply nested conditions: early returns flatten the code and improve readability a lot.',
    },
  },
  {
    id: 'js-loops',
    difficulty: beginner,
    question: {
      ar: 'ما هي أنواع الحلقات في JavaScript ومتى تستخدم كلًا منها؟',
      en: 'What loop types does JavaScript have and when do you use each?',
    },
    answer: {
      ar: '```js\nfor (let i = 0; i < n; i++) {}        // تحكم كامل بالفهرس\nfor (const item of array) {}          // القيم — الأفضل للمصفوفات\nfor (const key in object) {}          // المفاتيح — للكائنات\nwhile (condition) {}                  // عدد تكرارات غير معروف\ndo { } while (condition);             // ينفَّذ مرة على الأقل\narray.forEach((item) => {});          // أسلوب تصريحي\n```\n\nنقاط مهمة:\n• for...in يمر على المفاتيح بما فيها الموروثة من الـ prototype، ولا يضمن الترتيب مع المصفوفات — لا تستخدمه للمصفوفات، استخدم for...of.\n• forEach لا يدعم break ولا continue ولا ينتظر await. إذا احتجت الخروج المبكر أو الانتظار فاستخدم for...of.\n• للحصول على الفهرس مع القيمة: `for (const [i, item] of array.entries())`.\n\nنصيحة أسلوبية: إذا كان الهدف تحويل أو تصفية أو تجميع، فـ map وfilter وreduce أوضح من حلقة يدوية.',
      en: '```js\nfor (let i = 0; i < n; i++) {}        // full control over the index\nfor (const item of array) {}          // values — best for arrays\nfor (const key in object) {}          // keys — for objects\nwhile (condition) {}                  // unknown number of iterations\ndo { } while (condition);             // runs at least once\narray.forEach((item) => {});          // declarative style\n```\n\nWhat matters:\n• for...in iterates keys including inherited ones from the prototype, and does not guarantee order on arrays — do not use it for arrays, use for...of.\n• forEach supports neither break nor continue, and does not await. If you need early exit or awaiting, use for...of.\n• To get index and value together: `for (const [i, item] of array.entries())`.\n\nA style note: if the goal is transforming, filtering or aggregating, map/filter/reduce read better than a manual loop.',
    },
  },
  {
    id: 'js-template-literals',
    difficulty: beginner,
    question: {
      ar: 'ما هي Template Literals؟',
      en: 'What are template literals?',
    },
    answer: {
      ar: 'نصوص تُكتب بين علامتَي backtick وتدعم ثلاث ميزات: إدراج التعبيرات، والأسطر المتعددة، والقوالب الموسومة (tagged templates).\n\n```js\nconst name = "Sara";\nconst items = 3;\n\nconst message = `مرحبًا ${name}، لديك ${items} ${items === 1 ? "عنصر" : "عناصر"}`;\n\nconst html = `\n  <div>\n    <h1>${title}</h1>\n  </div>\n`;\n```\n\nداخل ${} يمكن وضع أي تعبير JavaScript صالح، بما في ذلك استدعاءات الدوال والشروط الثلاثية.\n\nتنبيه أمني مهم: إدراج بيانات المستخدم داخل قالب ثم وضعه في innerHTML يفتح ثغرة XSS. استخدم textContent أو مكتبة تهرّب المحتوى.\n\nوهناك استخدام متقدم هو tagged templates، حيث تعالج دالة الأجزاء والقيم بشكل منفصل — وهو أساس مكتبات مثل styled-components وأدوات الاستعلامات الآمنة.',
      en: 'Strings written between backticks, with three features: expression interpolation, multi-line support, and tagged templates.\n\n```js\nconst name = "Sara";\nconst items = 3;\n\nconst message = `Hello ${name}, you have ${items} ${items === 1 ? "item" : "items"}`;\n\nconst html = `\n  <div>\n    <h1>${title}</h1>\n  </div>\n`;\n```\n\nAny valid JavaScript expression can go inside ${}, including function calls and ternaries.\n\nAn important security note: interpolating user data into a template and assigning it to innerHTML is an XSS hole. Use textContent or an escaping library.\n\nThere is also an advanced use — tagged templates — where a function receives the string parts and the values separately. That is the mechanism behind styled-components and safe query builders.',
    },
  },
  {
    id: 'js-destructuring',
    difficulty: beginner,
    question: {
      ar: 'ما هو الـ Destructuring؟',
      en: 'What is destructuring?',
    },
    answer: {
      ar: 'صياغة لاستخراج قيم من المصفوفات أو خصائص من الكائنات إلى متغيرات منفصلة.\n\n```js\n// كائنات — بالاسم\nconst { name, age, city = "Cairo" } = user;\nconst { name: userName } = user;             // إعادة تسمية\nconst { address: { street } } = user;        // متداخل\n\n// مصفوفات — بالترتيب\nconst [first, second, ...rest] = numbers;\nconst [, , third] = numbers;                 // تخطي عناصر\n\n// في معاملات الدوال — استخدام شائع جدًا\nfunction createUser({ name, email, role = "user" }) {}\n\n// تبديل قيمتين دون متغير مؤقت\n[a, b] = [b, a];\n```\n\nنقاط عملية:\n• تفكيك كائن غير موجود يرمي خطأ: `const { a } = null` تفشل. الحل: `const { a } = obj ?? {}`.\n• القيم الافتراضية تعمل مع undefined فقط.\n• التفكيك في معاملات الدالة يجعل الاستدعاء واضحًا ويحرّر من ترتيب الوسائط — وهو نمط شائع جدًا في React.',
      en: 'Syntax for pulling values out of arrays or properties out of objects into separate variables.\n\n```js\n// objects — by name\nconst { name, age, city = "Cairo" } = user;\nconst { name: userName } = user;             // renaming\nconst { address: { street } } = user;        // nested\n\n// arrays — by position\nconst [first, second, ...rest] = numbers;\nconst [, , third] = numbers;                 // skipping\n\n// in function parameters — extremely common\nfunction createUser({ name, email, role = "user" }) {}\n\n// swapping without a temp variable\n[a, b] = [b, a];\n```\n\nPractical points:\n• Destructuring a nullish value throws: `const { a } = null` fails. Guard with `const { a } = obj ?? {}`.\n• Default values only apply to undefined.\n• Destructuring in parameters makes call sites self-documenting and frees you from argument order — a very common pattern in React.',
    },
  },
  {
    id: 'js-spread',
    difficulty: beginner,
    question: {
      ar: 'ما هو الـ Spread Operator؟',
      en: 'What is the spread operator?',
    },
    answer: {
      ar: 'العامل ... يفكّ عناصر مصفوفة أو خصائص كائن في مكان جديد.\n\n```js\n// نسخ ودمج المصفوفات\nconst copy = [...items];\nconst merged = [...a, ...b];\nconst withNew = [...items, newItem];          // بدون تعديل الأصل\n\n// نسخ ودمج الكائنات\nconst updated = { ...user, name: "Ali" };     // الخصائص اللاحقة تفوز\n\n// تمرير مصفوفة كوسائط\nMath.max(...numbers);\n\n// تحويل ما يشبه المصفوفة إلى مصفوفة\nconst nodes = [...document.querySelectorAll("li")];\n```\n\nهذا العامل أساس البرمجة غير القابلة للتغيير (immutability) التي تعتمد عليها React وRedux: بدل تعديل الحالة ننشئ نسخة جديدة.\n\nتحذير مهم جدًا: النسخ سطحي (shallow). الكائنات المتداخلة ما زالت مشتركة:\n```js\nconst copy = { ...user };\ncopy.address.city = "Giza";   // عدّلت الأصل أيضًا!\n```\nللنسخ العميق استخدم structuredClone(user).',
      en: 'The ... operator expands the elements of an array or the properties of an object into a new place.\n\n```js\n// copying and merging arrays\nconst copy = [...items];\nconst merged = [...a, ...b];\nconst withNew = [...items, newItem];          // without mutating the original\n\n// copying and merging objects\nconst updated = { ...user, name: "Ali" };     // later properties win\n\n// passing an array as arguments\nMath.max(...numbers);\n\n// converting an array-like to a real array\nconst nodes = [...document.querySelectorAll("li")];\n```\n\nIt is the backbone of the immutable style React and Redux rely on: instead of mutating state you create a new copy.\n\nA very important caveat: the copy is shallow. Nested objects are still shared:\n```js\nconst copy = { ...user };\ncopy.address.city = "Giza";   // you just mutated the original too!\n```\nFor a deep copy use structuredClone(user).',
    },
  },
  {
    id: 'js-rest-params',
    difficulty: beginner,
    question: {
      ar: 'ما هي Rest Parameters وما الفرق بينها وبين Spread؟',
      en: 'What are rest parameters and how do they differ from spread?',
    },
    answer: {
      ar: 'الرمز واحد (...) لكن الاتجاه معاكس:\n• Rest يجمّع عدة قيم في مصفوفة أو كائن واحد.\n• Spread يفكّ مجموعة إلى عناصر منفصلة.\n\n```js\n// Rest — في تعريف الدالة\nfunction sum(...numbers) {\n  return numbers.reduce((total, n) => total + n, 0);\n}\nsum(1, 2, 3);\n\n// Rest في التفكيك\nconst [first, ...others] = items;\nconst { id, ...rest } = user;     // استخراج حقل واستبعاده\n\n// Spread — عند الاستدعاء\nsum(...[1, 2, 3]);\n```\n\nالقاعدة المختصرة: إذا كان على يسار علامة = أو في تعريف الدالة فهو rest، وإذا كان على اليمين أو في الاستدعاء فهو spread.\n\nنمط شائع ومفيد: استخدام rest لحذف حقل من كائن دون تعديله، مثل استبعاد password قبل إرسال بيانات المستخدم:\n```js\nconst { password, ...safeUser } = user;\n```\n\nملاحظة: rest parameter يجب أن يكون آخر معامل، ويعطي مصفوفة حقيقية بعكس كائن arguments القديم.',
      en: 'Same symbol (...), opposite direction:\n• Rest gathers several values into one array or object.\n• Spread expands a collection into separate elements.\n\n```js\n// Rest — in a function definition\nfunction sum(...numbers) {\n  return numbers.reduce((total, n) => total + n, 0);\n}\nsum(1, 2, 3);\n\n// Rest in destructuring\nconst [first, ...others] = items;\nconst { id, ...rest } = user;     // pull one field out and keep the remainder\n\n// Spread — at a call site\nsum(...[1, 2, 3]);\n```\n\nThe short rule: on the left of = or in a parameter list it is rest; on the right or at a call site it is spread.\n\nA common and useful pattern is using rest to omit a field without mutating, such as stripping a password before returning a user:\n```js\nconst { password, ...safeUser } = user;\n```\n\nNote: a rest parameter must be last, and it gives you a real array, unlike the old arguments object.',
    },
  },
  {
    id: 'js-array-methods',
    difficulty: beginner,
    question: {
      ar: 'ما هي أهم دوال المصفوفات في JavaScript؟',
      en: 'What are the most important array methods in JavaScript?',
    },
    answer: {
      ar: 'أقسّمها حسب الغرض:\n\nتحويل وتصفية (تعيد مصفوفة جديدة):\n```js\nitems.map((x) => x * 2);            // تحويل كل عنصر\nitems.filter((x) => x > 10);        // انتقاء\nitems.flatMap((x) => x.tags);       // تحويل ثم تسطيح مستوى واحد\nitems.slice(0, 5);                  // قطع جزء دون تعديل الأصل\n```\n\nبحث:\n```js\nitems.find((x) => x.id === id);     // أول عنصر مطابق\nitems.findIndex((x) => x.id === id);\nitems.some((x) => x.active);        // هل يوجد واحد على الأقل؟\nitems.every((x) => x.valid);        // هل الكل مطابق؟\nitems.includes(value);\n```\n\nتجميع:\n```js\nitems.reduce((acc, x) => acc + x.price, 0);\n```\n\nدوال تُعدّل الأصل (انتبه لها): push وpop وshift وunshift وsplice وsort وreverse.\n\nنقطة مهمة جدًا: sort تعدّل المصفوفة الأصلية وتقارن نصيًا افتراضيًا، لذلك [10, 9, 1].sort() تعطي [1, 10, 9]. الصحيح: `sort((a, b) => a - b)`. وللترتيب دون تعديل الأصل استخدم `[...items].sort()` أو الدوال الحديثة toSorted وtoReversed.',
      en: 'I group them by purpose:\n\nTransform and filter (return a new array):\n```js\nitems.map((x) => x * 2);            // transform each element\nitems.filter((x) => x > 10);        // select\nitems.flatMap((x) => x.tags);       // map then flatten one level\nitems.slice(0, 5);                  // take a section without mutating\n```\n\nSearch:\n```js\nitems.find((x) => x.id === id);     // first match\nitems.findIndex((x) => x.id === id);\nitems.some((x) => x.active);        // does at least one match?\nitems.every((x) => x.valid);        // do all match?\nitems.includes(value);\n```\n\nAggregate:\n```js\nitems.reduce((acc, x) => acc + x.price, 0);\n```\n\nMutating methods to be careful with: push, pop, shift, unshift, splice, sort, reverse.\n\nA point worth making: sort mutates and compares as strings by default, so [10, 9, 1].sort() gives [1, 10, 9]. The correct form is `sort((a, b) => a - b)`. To sort without mutating, use `[...items].sort()` or the newer toSorted/toReversed methods.',
    },
  },
  {
    id: 'js-map-vs-foreach',
    difficulty: beginner,
    question: {
      ar: 'ما الفرق بين map() و forEach()؟',
      en: 'What is the difference between map() and forEach()?',
    },
    answer: {
      ar: 'الفرق الجوهري في القيمة المُعادة:\n• map تعيد مصفوفة جديدة بنفس الطول تحتوي نتائج الدالة.\n• forEach تعيد undefined، والغرض منها التنفيذ فقط (side effects).\n\n```js\nconst doubled = [1, 2, 3].map((n) => n * 2);      // [2, 4, 6]\nconst nothing = [1, 2, 3].forEach((n) => n * 2);  // undefined\n```\n\nمتى تستخدم أيًا منهما؟ إذا كنت تريد نتيجة فاستخدم map، وإذا كنت تريد تنفيذ شيء لكل عنصر (طباعة، تحديث DOM) فاستخدم forEach.\n\nعلامة على كود خاطئ: استخدام map دون استعمال النتيجة — هذا يعني أنك أردت forEach.\n\nملاحظتان:\n• كلاهما لا يدعم break؛ للخروج المبكر استخدم for...of أو some.\n• كلاهما لا ينتظر await داخل الـ callback. لتنفيذ عمليات غير متزامنة استخدم `for...of` مع await، أو `await Promise.all(items.map(fn))` إن أردت التوازي.',
      en: 'The essential difference is the return value:\n• map returns a new array of the same length containing the callback results.\n• forEach returns undefined; it exists for side effects.\n\n```js\nconst doubled = [1, 2, 3].map((n) => n * 2);      // [2, 4, 6]\nconst nothing = [1, 2, 3].forEach((n) => n * 2);  // undefined\n```\n\nWhich to use? If you want a result, map. If you want to do something per element (log, update the DOM), forEach.\n\nA code smell: calling map and ignoring the result — that means you wanted forEach.\n\nTwo notes:\n• Neither supports break; for early exit use for...of or some.\n• Neither awaits inside the callback. For async work use for...of with await, or `await Promise.all(items.map(fn))` if you want them in parallel.',
    },
  },
  {
    id: 'js-object-methods',
    difficulty: beginner,
    question: {
      ar: 'ما هي أهم دوال الكائنات (Object methods) في JavaScript؟',
      en: 'What are the most important Object methods in JavaScript?',
    },
    answer: {
      ar: '```js\nObject.keys(user);        // ["name", "age"]\nObject.values(user);      // ["Sara", 30]\nObject.entries(user);     // [["name","Sara"], ["age",30]]\nObject.fromEntries(pairs); // العملية العكسية\nObject.assign({}, a, b);  // دمج (نسخ سطحي)\nObject.freeze(config);    // منع التعديل (سطحيًا)\nObject.hasOwn(user, "name");   // فحص خاصية ذاتية\n```\n\nأنماط شائعة:\n```js\n// المرور على كائن\nfor (const [key, value] of Object.entries(user)) {}\n\n// تحويل كائن\nconst upper = Object.fromEntries(\n  Object.entries(user).map(([k, v]) => [k, String(v).toUpperCase()])\n);\n```\n\nنقاط مهمة:\n• Object.freeze سطحي: الكائنات المتداخلة تبقى قابلة للتعديل.\n• استخدم Object.hasOwn بدل hasOwnProperty، فهو أحدث وأكثر أمانًا مع الكائنات المنشأة بـ Object.create(null).\n• ترتيب المفاتيح: المفاتيح الرقمية تُرتَّب تصاعديًا أولًا، ثم النصية بترتيب الإضافة.\n• للمفاتيح غير النصية أو عند الحاجة للترتيب المضمون والحجم، استخدم Map بدل الكائن العادي.',
      en: '```js\nObject.keys(user);        // ["name", "age"]\nObject.values(user);      // ["Sara", 30]\nObject.entries(user);     // [["name","Sara"], ["age",30]]\nObject.fromEntries(pairs); // the inverse\nObject.assign({}, a, b);  // merge (shallow copy)\nObject.freeze(config);    // prevent modification (shallowly)\nObject.hasOwn(user, "name");   // own-property check\n```\n\nCommon patterns:\n```js\n// iterating an object\nfor (const [key, value] of Object.entries(user)) {}\n\n// transforming an object\nconst upper = Object.fromEntries(\n  Object.entries(user).map(([k, v]) => [k, String(v).toUpperCase()])\n);\n```\n\nWhat matters:\n• Object.freeze is shallow — nested objects stay mutable.\n• Prefer Object.hasOwn over hasOwnProperty; it is newer and safe on objects created with Object.create(null).\n• Key order: integer-like keys come first in ascending order, then string keys in insertion order.\n• For non-string keys, guaranteed ordering or a real size, use a Map instead of a plain object.',
    },
  },
  {
    id: 'js-string-methods',
    difficulty: beginner,
    question: {
      ar: 'ما هي أهم دوال النصوص (String methods)؟',
      en: 'What are the most important string methods?',
    },
    answer: {
      ar: '```js\ntext.length;\ntext.toUpperCase();  text.toLowerCase();\ntext.trim();  text.trimStart();  text.trimEnd();\ntext.includes("abc");  text.startsWith("a");  text.endsWith("z");\ntext.indexOf("a");\ntext.slice(0, 5);          // يدعم الأرقام السالبة\ntext.split(",");\ntext.replace("a", "b");    // أول تطابق فقط\ntext.replaceAll("a", "b"); // كل التطابقات\ntext.padStart(2, "0");     // "5" -> "05"\ntext.repeat(3);\n```\n\nنقاط مهمة:\n• النصوص في JavaScript غير قابلة للتغيير (immutable): كل هذه الدوال تعيد نصًا جديدًا ولا تعدّل الأصل.\n• الفرق بين slice وsubstring: slice يقبل أرقامًا سالبة للعد من النهاية، وsubstring لا يقبلها.\n• replace بنص يستبدل أول تطابق فقط؛ للاستبدال الشامل استخدم replaceAll أو تعبيرًا نمطيًا بالعلم g.\n• length يحسب وحدات UTF-16 لا الأحرف المرئية، لذلك بعض الرموز التعبيرية (emoji) تُحسب بأكثر من واحد. للعد الصحيح استخدم [...text].length أو Intl.Segmenter.',
      en: '```js\ntext.length;\ntext.toUpperCase();  text.toLowerCase();\ntext.trim();  text.trimStart();  text.trimEnd();\ntext.includes("abc");  text.startsWith("a");  text.endsWith("z");\ntext.indexOf("a");\ntext.slice(0, 5);          // supports negative indices\ntext.split(",");\ntext.replace("a", "b");    // first match only\ntext.replaceAll("a", "b"); // every match\ntext.padStart(2, "0");     // "5" -> "05"\ntext.repeat(3);\n```\n\nWhat matters:\n• Strings are immutable — every one of these returns a new string rather than modifying the original.\n• slice versus substring: slice accepts negative indices to count from the end, substring does not.\n• replace with a string replaces only the first match; use replaceAll or a regex with the g flag for all of them.\n• length counts UTF-16 code units, not visible characters, so some emoji count as more than one. For an accurate count use [...text].length or Intl.Segmenter.',
    },
  },
  {
    id: 'js-json',
    difficulty: beginner,
    question: {
      ar: 'كيف تتعامل مع JSON في JavaScript؟',
      en: 'How do you work with JSON in JavaScript?',
    },
    answer: {
      ar: 'دالتان فقط:\n```js\nconst text = JSON.stringify(user);        // كائن -> نص\nconst user = JSON.parse(text);            // نص -> كائن\n\nJSON.stringify(user, null, 2);            // تنسيق مقروء\nJSON.stringify(user, ["id", "name"]);     // حقول محددة فقط\n```\n\nما يجب معرفته:\n• JSON.parse يرمي استثناءً مع نص غير صالح — ضعه في try/catch.\n• stringify يتجاهل: الدوال، وundefined، وقيم Symbol. وbigint يرمي خطأ.\n• التواريخ تتحول إلى نصوص ولا تعود كائنات Date تلقائيًا عند الـ parse.\n• المراجع الدائرية تسبب خطأ TypeError.\n\nنمط شائع للنسخ العميق:\n```js\nconst deepCopy = JSON.parse(JSON.stringify(obj));\n```\nيعمل مع البيانات البسيطة فقط ويفقد الدوال والتواريخ. البديل الصحيح اليوم هو structuredClone(obj).',
      en: 'Just two functions:\n```js\nconst text = JSON.stringify(user);        // object -> string\nconst user = JSON.parse(text);            // string -> object\n\nJSON.stringify(user, null, 2);            // pretty printing\nJSON.stringify(user, ["id", "name"]);     // only selected fields\n```\n\nWhat you need to know:\n• JSON.parse throws on invalid input — wrap it in try/catch.\n• stringify silently drops functions, undefined and symbol values, and throws on bigint.\n• Dates become strings and do not come back as Date objects when parsed.\n• Circular references throw a TypeError.\n\nA common deep-copy trick:\n```js\nconst deepCopy = JSON.parse(JSON.stringify(obj));\n```\nIt works only for plain data and loses functions and Dates. The correct modern alternative is structuredClone(obj).',
    },
  },
  {
    id: 'js-timers',
    difficulty: beginner,
    question: {
      ar: 'كيف تنفّذ دالة بعد تأخير أو بشكل متكرر في JavaScript؟',
      en: 'How do you run a function after a delay or repeatedly in JavaScript?',
    },
    answer: {
      ar: '```js\nconst id = setTimeout(() => console.log("مرة واحدة"), 1000);\nclearTimeout(id);\n\nconst intervalId = setInterval(() => poll(), 5000);\nclearInterval(intervalId);\n```\n\nنقاط مهمة:\n• المدة هي حد أدنى وليست وعدًا: الدالة تُنفَّذ بعد انقضاء المدة وعندما يصبح الـ call stack فارغًا. إن كان الـ main thread مشغولًا فستتأخر.\n• حتى setTimeout(fn, 0) لا ينفّذ فورًا — ينتظر انتهاء الكود الحالي وتفريغ الـ microtasks.\n• احتفظ دائمًا بالمعرّف وألغِه عند الحاجة، خصوصًا عند تفكيك المكوّن في React داخل دالة التنظيف في useEffect — وإلا حدث تسريب ذاكرة ومحاولة تحديث مكوّن غير موجود.\n\nملاحظة على setInterval: لا ينتظر انتهاء التنفيذ السابق، فإن كانت العملية أبطأ من الفترة تتراكم الاستدعاءات. البديل الأأمن هو setTimeout متكرر:\n```js\nconst tick = async () => {\n  await doWork();\n  setTimeout(tick, 5000);\n};\n```\nوللرسوم المتحركة استخدم requestAnimationFrame بدل المؤقتات.',
      en: '```js\nconst id = setTimeout(() => console.log("once"), 1000);\nclearTimeout(id);\n\nconst intervalId = setInterval(() => poll(), 5000);\nclearInterval(intervalId);\n```\n\nWhat matters:\n• The delay is a minimum, not a promise: the callback runs after the delay *and* once the call stack is empty. If the main thread is busy it will be late.\n• Even setTimeout(fn, 0) does not run immediately — it waits for the current code and the microtask queue.\n• Always keep the id and clear it when appropriate, especially in a React useEffect cleanup — otherwise you leak and try to update an unmounted component.\n\nA note on setInterval: it does not wait for the previous run to finish, so if the work is slower than the interval, calls pile up. The safer pattern is a recursive setTimeout:\n```js\nconst tick = async () => {\n  await doWork();\n  setTimeout(tick, 5000);\n};\n```\nAnd for animation use requestAnimationFrame rather than timers.',
    },
  },

  // ------------------------------------------------------------ INTERMEDIATE
  {
    id: 'js-closures',
    difficulty: intermediate,
    question: {
      ar: 'ما هو الـ Closure في JavaScript؟',
      en: 'What is a closure in JavaScript?',
    },
    answer: {
      ar: 'الـ closure هو دالة تحتفظ بالوصول إلى متغيرات نطاقها الخارجي حتى بعد انتهاء تنفيذ الدالة الخارجية.\n\n```js\nfunction createCounter() {\n  let count = 0;                    // خاص بالـ closure\n  return {\n    increment: () => ++count,\n    get value() { return count; },\n  };\n}\n\nconst counter = createCounter();\ncounter.increment();   // 1\ncounter.increment();   // 2\n```\n\nرغم أن createCounter انتهت، فإن count ما زال حيًا لأن الدوال المُعادة تحتفظ بمرجع إلى نطاقها.\n\nلماذا هذا مهم عمليًا؟\n• إنشاء حالة خاصة (private state) دون classes.\n• الأساس الذي يقوم عليه debounce وthrottle وmemoize.\n• هو ما يجعل hooks في React تعمل: كل استدعاء للمكوّن ينشئ closures جديدة تلتقط قيم تلك الدورة.\n\nوهذا أيضًا مصدر مشكلة "stale closure" الشهيرة: دالة التقطت قيمة قديمة وما زالت تستخدمها. في React يُحل هذا بمصفوفة الاعتماديات الصحيحة أو بصيغة التحديث الدالية.',
      en: 'A closure is a function that keeps access to variables from its outer scope even after that outer function has finished executing.\n\n```js\nfunction createCounter() {\n  let count = 0;                    // private to the closure\n  return {\n    increment: () => ++count,\n    get value() { return count; },\n  };\n}\n\nconst counter = createCounter();\ncounter.increment();   // 1\ncounter.increment();   // 2\n```\n\ncreateCounter has returned, yet count is still alive because the returned functions hold a reference to that scope.\n\nWhy it matters in practice:\n• Private state without classes.\n• It is the mechanism behind debounce, throttle and memoize.\n• It is what makes React hooks work: every render creates fresh closures capturing that render\'s values.\n\nIt is also the source of the classic "stale closure" bug, where a function captured an old value and keeps using it. In React you fix that with a correct dependency array or the functional updater form.',
    },
  },
  {
    id: 'js-execution-context',
    difficulty: intermediate,
    question: {
      ar: 'ما هو الـ Execution Context؟',
      en: 'What is an execution context?',
    },
    answer: {
      ar: 'الـ execution context هي البيئة التي يُنفَّذ فيها جزء من الكود. تُنشأ واحدة عامة عند بدء البرنامج، وواحدة جديدة مع كل استدعاء دالة.\n\nكل context يمر بمرحلتين:\n\n1. مرحلة الإنشاء (creation):\n   • إنشاء Lexical Environment وVariable Environment.\n   • رفع التصريحات: var تُهيّأ بـ undefined، وlet/const تُسجَّل في الـ TDZ.\n   • تحديد قيمة this.\n   • ربط النطاق الخارجي (outer scope reference).\n\n2. مرحلة التنفيذ (execution): تنفيذ الأسطر وإسناد القيم الفعلية.\n\nهذا التقسيم يفسّر الـ hoisting بدقة: التصريحات تُسجَّل في المرحلة الأولى، والإسنادات تحدث في الثانية.\n\nكما أن مرجع النطاق الخارجي المحفوظ في الـ context هو ما يبني الـ scope chain، وهو الآلية التي تجعل الـ closures ممكنة.',
      en: 'An execution context is the environment in which a piece of code runs. One global context is created when the program starts, and a new one is created for every function call.\n\nEach context goes through two phases:\n\n1. Creation:\n   • Build the Lexical and Variable Environments.\n   • Hoist declarations: var is initialised to undefined, let/const are registered in the TDZ.\n   • Determine this.\n   • Link the outer scope reference.\n\n2. Execution: run the statements and perform the actual assignments.\n\nThat split is the precise explanation of hoisting: declarations are registered in phase one, assignments happen in phase two.\n\nThe outer scope reference stored in the context is also what forms the scope chain, which is the mechanism that makes closures possible.',
    },
  },
  {
    id: 'js-call-stack',
    difficulty: intermediate,
    question: {
      ar: 'ما هو الـ Call Stack؟',
      en: 'What is the call stack?',
    },
    answer: {
      ar: 'الـ call stack هو بنية بيانات من نوع LIFO يتتبّع فيها المحرك الدوال قيد التنفيذ. عند استدعاء دالة يُدفع إطارها (frame) إلى القمة، وعند انتهائها يُسحب.\n\n```js\nfunction third() { console.trace(); }\nfunction second() { third(); }\nfunction first() { second(); }\nfirst();\n// الترتيب في الـ stack: first -> second -> third\n```\n\nثلاث نتائج عملية مهمة:\n\n1. رسالة الخطأ (stack trace) ليست إلا صورة لهذا الـ stack لحظة الخطأ، وقراءتها من الأعلى للأسفل تخبرك بمسار الوصول.\n\n2. JavaScript لها stack واحد فقط (single-threaded): أي دالة بطيئة تحجب كل شيء آخر — لا رسم للواجهة ولا استجابة لنقرات المستخدم.\n\n3. تجاوز عمق معيّن من الاستدعاءات المتداخلة (خصوصًا في الاستدعاء الذاتي بلا شرط توقف) يعطي "Maximum call stack size exceeded".\n\nنقطة إضافية: الدوال غير المتزامنة لا تبقى على الـ stack أثناء الانتظار — لهذا لا تحجب الصفحة. يُسلَّم العمل إلى بيئة التشغيل وتعود الـ callbacks لاحقًا عبر الـ event loop.',
      en: 'The call stack is a LIFO structure the engine uses to track which functions are currently executing. Calling a function pushes a frame; returning pops it.\n\n```js\nfunction third() { console.trace(); }\nfunction second() { third(); }\nfunction first() { second(); }\nfirst();\n// stack order: first -> second -> third\n```\n\nThree practical consequences:\n\n1. A stack trace is simply a snapshot of this stack at the moment of the error; reading it top to bottom tells you how you got there.\n\n2. JavaScript has exactly one stack (single-threaded), so any slow function blocks everything — no painting, no response to clicks.\n\n3. Exceeding the nesting depth, typically with unbounded recursion, gives you "Maximum call stack size exceeded".\n\nOne more point: async functions do not sit on the stack while waiting — that is why they do not block. The work is handed to the runtime and callbacks return later through the event loop.',
    },
  },
  {
    id: 'js-event-loop',
    difficulty: intermediate,
    question: {
      ar: 'ما هو الـ Event Loop في JavaScript؟',
      en: 'What is the event loop in JavaScript?',
    },
    answer: {
      ar: 'JavaScript أحادية الخيط (single-threaded) ولها call stack واحد. الـ event loop هو الآلية التي تمكّنها رغم ذلك من التعامل مع العمليات غير المتزامنة دون تجميد الصفحة.\n\nالمكوّنات:\n1. Call Stack: ما يُنفَّذ الآن.\n2. Web APIs / بيئة التشغيل: تتولى المؤقتات وطلبات الشبكة وأحداث DOM خارج المحرك.\n3. Macrotask Queue: callbacks المؤقتات والأحداث.\n4. Microtask Queue: الـ Promises وqueueMicrotask وMutationObserver.\n5. Event Loop: ينقل المهام إلى الـ stack عندما يفرغ.\n\nالقاعدة الحاسمة: بعد كل مهمة يُفرَّغ طابور الـ microtasks بالكامل قبل أخذ أي macrotask.\n\n```js\nconsole.log("1");\nsetTimeout(() => console.log("2"), 0);\nPromise.resolve().then(() => console.log("3"));\nconsole.log("4");\n// 1, 4, 3, 2\n```\n\nهذا يفسّر أيضًا لماذا لا يُنفَّذ setTimeout(fn, 0) فورًا، ولماذا تعلّق حلقة حسابية طويلة الصفحة بالكامل: لا شيء في الطوابير يُنفَّذ ما دام الـ stack مشغولًا.',
      en: 'JavaScript is single-threaded with one call stack. The event loop is the mechanism that nevertheless lets it handle asynchronous work without freezing the page.\n\nThe pieces:\n1. Call stack — what is running now.\n2. Web APIs / the runtime — timers, network requests and DOM events handled outside the engine.\n3. Macrotask queue — timer and event callbacks.\n4. Microtask queue — promises, queueMicrotask, MutationObserver.\n5. The event loop — moves work onto the stack whenever it is empty.\n\nThe decisive rule: after each task the entire microtask queue is drained before any macrotask is taken.\n\n```js\nconsole.log("1");\nsetTimeout(() => console.log("2"), 0);\nPromise.resolve().then(() => console.log("3"));\nconsole.log("4");\n// 1, 4, 3, 2\n```\n\nThis also explains why setTimeout(fn, 0) does not run immediately, and why a long computation freezes the whole page: nothing in the queues runs while the stack is busy.',
    },
  },
  {
    id: 'js-micro-vs-macro',
    difficulty: intermediate,
    question: {
      ar: 'ما الفرق بين Microtasks و Macrotasks؟',
      en: 'What is the difference between microtasks and macrotasks?',
    },
    answer: {
      ar: 'الفرق في الأولوية وفي التوقيت:\n\nMacrotasks (المهام): setTimeout، setInterval، setImmediate في Node، أحداث DOM، عمليات I/O. يُنفَّذ منها واحدة فقط في كل دورة.\n\nMicrotasks: callbacks الـ Promises، queueMicrotask، MutationObserver، وprocess.nextTick في Node (وله أولوية أعلى من بقية الـ microtasks). يُفرَّغ الطابور بالكامل بعد كل مهمة.\n\n```js\nsetTimeout(() => console.log("macro 1"), 0);\nPromise.resolve().then(() => {\n  console.log("micro 1");\n  return Promise.resolve();\n}).then(() => console.log("micro 2"));\nsetTimeout(() => console.log("macro 2"), 0);\n// micro 1, micro 2, macro 1, macro 2\n```\n\nنتيجة مهمة: الـ microtasks تسبق دائمًا أي مؤقت، حتى بتأخير صفر.\n\nوخطر يجب معرفته: microtask تولّد microtask أخرى بلا نهاية تُجمّد الصفحة تمامًا، لأن الـ event loop لن ينتقل أبدًا إلى المهمة التالية ولن يحدث أي رسم (render). هذا لا يحدث مع الحلقات المبنية على setTimeout.\n\nوفي المتصفح: الرسم (rendering) يحدث بين الـ macrotasks لا بينها وبين الـ microtasks.',
      en: 'They differ in priority and timing.\n\nMacrotasks: setTimeout, setInterval, setImmediate in Node, DOM events, I/O. Exactly one is taken per loop iteration.\n\nMicrotasks: promise callbacks, queueMicrotask, MutationObserver, and process.nextTick in Node (which outranks the others). The whole queue is drained after each task.\n\n```js\nsetTimeout(() => console.log("macro 1"), 0);\nPromise.resolve().then(() => {\n  console.log("micro 1");\n  return Promise.resolve();\n}).then(() => console.log("micro 2"));\nsetTimeout(() => console.log("macro 2"), 0);\n// micro 1, micro 2, macro 1, macro 2\n```\n\nThe important consequence: microtasks always beat any timer, even one with zero delay.\n\nAnd a hazard worth knowing: a microtask that keeps scheduling another microtask freezes the page completely, because the event loop never reaches the next task and never paints. A setTimeout-based loop does not have that problem.\n\nIn the browser, rendering happens between macrotasks, not between a task and its microtasks.',
    },
  },
  {
    id: 'js-promises',
    difficulty: intermediate,
    question: {
      ar: 'اشرح مفهوم الـ Promises في JavaScript.',
      en: 'Explain Promises in JavaScript.',
    },
    answer: {
      ar: 'الـ Promise كائن يمثّل نتيجة عملية غير متزامنة ستتوفر لاحقًا. له ثلاث حالات: pending، ثم fulfilled أو rejected — وبمجرد استقراره لا يتغير.\n\n```js\nconst fetchUser = (id) =>\n  new Promise((resolve, reject) => {\n    setTimeout(() => (id ? resolve({ id }) : reject(new Error("no id"))), 100);\n  });\n\nfetchUser(1)\n  .then((user) => fetchOrders(user.id))\n  .then((orders) => render(orders))\n  .catch((error) => showError(error))\n  .finally(() => hideSpinner());\n```\n\nنقاط أساسية:\n• then تعيد Promise جديدة، وهذا ما يسمح بالتسلسل.\n• إعادة قيمة من then تُغلَّف تلقائيًا في Promise، وإعادة Promise تجعل السلسلة تنتظرها. نسيان return هو أشهر خطأ هنا.\n• الخطأ يتدحرج في السلسلة حتى أول catch، لذلك catch واحد في النهاية يكفي عادة.\n• الكود داخل مُنشئ الـ Promise يُنفَّذ فورًا وبشكل متزامن — فقط resolve/reject تؤجَّلان.\n• الـ Promise لا يمكن إلغاؤها؛ للإلغاء نستخدم AbortController.',
      en: 'A Promise is an object representing the eventual result of an asynchronous operation. It has three states — pending, then fulfilled or rejected — and once settled it never changes.\n\n```js\nconst fetchUser = (id) =>\n  new Promise((resolve, reject) => {\n    setTimeout(() => (id ? resolve({ id }) : reject(new Error("no id"))), 100);\n  });\n\nfetchUser(1)\n  .then((user) => fetchOrders(user.id))\n  .then((orders) => render(orders))\n  .catch((error) => showError(error))\n  .finally(() => hideSpinner());\n```\n\nThe essentials:\n• then returns a new promise, which is what enables chaining.\n• Returning a value from then wraps it in a promise; returning a promise makes the chain wait for it. Forgetting the return is the classic mistake.\n• Errors propagate down the chain to the first catch, so one catch at the end is usually enough.\n• The executor body runs immediately and synchronously — only resolve/reject are deferred.\n• Promises cannot be cancelled; for cancellation you use an AbortController.',
    },
  },
  {
    id: 'js-async-await',
    difficulty: intermediate,
    question: {
      ar: 'اشرح مفهوم async/await.',
      en: 'Explain async/await.',
    },
    answer: {
      ar: 'async/await صياغة مبنية فوق الـ Promises تجعل الكود غير المتزامن يُقرأ كأنه متزامن.\n\n• الدالة المعلنة async تعيد Promise دائمًا.\n• await توقف تنفيذ الدالة حتى تستقر الـ Promise، دون حجب الـ main thread.\n\n```js\nasync function loadDashboard(userId) {\n  try {\n    const user = await fetchUser(userId);\n\n    // مستقلتان — نفّذهما بالتوازي\n    const [orders, notifications] = await Promise.all([\n      fetchOrders(user.id),\n      fetchNotifications(user.id),\n    ]);\n\n    return { user, orders, notifications };\n  } catch (error) {\n    logger.error(error);\n    throw error;\n  }\n}\n```\n\nأخطاء شائعة يجب ذكرها:\n1. await متسلسل لعمليات مستقلة — يضاعف زمن الانتظار بلا سبب؛ الحل Promise.all.\n2. await داخل forEach لا يعمل إطلاقًا لأن forEach لا ينتظر؛ استخدم for...of.\n3. دالة async بلا try/catch وبلا catch على الاستدعاء تنتج unhandled rejection.\n4. `return await` داخل try مقصود ومفيد؛ حذف await هناك يجعل catch لا يلتقط الخطأ.',
      en: 'async/await is syntax on top of promises that makes asynchronous code read like synchronous code.\n\n• An async function always returns a promise.\n• await suspends the function until the promise settles, without blocking the main thread.\n\n```js\nasync function loadDashboard(userId) {\n  try {\n    const user = await fetchUser(userId);\n\n    // independent — run them in parallel\n    const [orders, notifications] = await Promise.all([\n      fetchOrders(user.id),\n      fetchNotifications(user.id),\n    ]);\n\n    return { user, orders, notifications };\n  } catch (error) {\n    logger.error(error);\n    throw error;\n  }\n}\n```\n\nCommon mistakes worth naming:\n1. Sequential awaits for independent work — it doubles the latency for no reason; use Promise.all.\n2. await inside forEach does nothing useful, because forEach does not wait; use for...of.\n3. An async function with no try/catch and no catch at the call site produces an unhandled rejection.\n4. `return await` inside try is deliberate and useful — dropping the await there means catch will not see the error.',
    },
  },
  {
    id: 'js-promise-combinators',
    difficulty: intermediate,
    question: {
      ar: 'ما الفرق بين Promise.all و Promise.allSettled و Promise.race و Promise.any؟',
      en: 'What is the difference between Promise.all, allSettled, race and any?',
    },
    answer: {
      ar: 'الأربعة تنفّذ عمليات بالتوازي وتختلف في شرط الاستقرار:\n\n• Promise.all: تنجح إذا نجحت كلها، وتفشل فور فشل أولها. استخدمها عندما تكون كل النتائج ضرورية.\n• Promise.allSettled: تنتظر الكل ولا تفشل أبدًا، وتعيد [{status, value|reason}]. مثالية عندما يكون فشل جزء مقبولًا.\n• Promise.race: تستقر بأول نتيجة أيًا كانت، نجاحًا أو فشلًا. الاستخدام الشائع هو فرض مهلة.\n• Promise.any: تستقر بأول نجاح وتتجاهل الفشل، ولا تفشل إلا إذا فشل الجميع (AggregateError).\n\n```js\n// كلها مطلوبة\nconst [user, settings] = await Promise.all([getUser(), getSettings()]);\n\n// الفشل الجزئي مقبول\nconst results = await Promise.allSettled(widgets.map((w) => w.load()));\n\n// مهلة\nconst data = await Promise.race([\n  fetchData(),\n  new Promise((_, reject) => setTimeout(() => reject(new Error("timeout")), 5000)),\n]);\n```\n\nنقطة دقيقة يسأل عنها المقابلون: عند فشل Promise.all مبكرًا، بقية العمليات لا تُلغى — تكمل في الخلفية وتُهمل نتائجها. للإلغاء الحقيقي تحتاج AbortController.',
      en: 'All four run work in parallel and differ in when they settle:\n\n• Promise.all fulfils when all fulfil and rejects on the first rejection. Use it when you need every result.\n• Promise.allSettled waits for all and never rejects, returning [{status, value|reason}]. Ideal when partial failure is acceptable.\n• Promise.race settles with the first result, success or failure. Commonly used to impose a timeout.\n• Promise.any settles with the first success and ignores failures, rejecting only if all fail (AggregateError).\n\n```js\n// all are required\nconst [user, settings] = await Promise.all([getUser(), getSettings()]);\n\n// partial failure is fine\nconst results = await Promise.allSettled(widgets.map((w) => w.load()));\n\n// timeout\nconst data = await Promise.race([\n  fetchData(),\n  new Promise((_, reject) => setTimeout(() => reject(new Error("timeout")), 5000)),\n]);\n```\n\nA subtle point interviewers probe: when Promise.all rejects early, the other operations are not cancelled — they complete in the background and their results are discarded. Real cancellation needs an AbortController.',
    },
  },
  {
    id: 'js-this',
    difficulty: intermediate,
    question: {
      ar: 'ما هو الـ this في JavaScript؟',
      en: 'How does this work in JavaScript?',
    },
    answer: {
      ar: 'قيمة this تُحدَّد بكيفية استدعاء الدالة لا بمكان تعريفها — باستثناء الدوال السهمية.\n\nالقواعد بترتيب الأولوية:\n1. new: this هو الكائن الجديد.\n2. call / apply / bind: this هو ما مرّرته صراحةً.\n3. استدعاء كـ method على كائن: this هو الكائن قبل النقطة.\n4. استدعاء عادي: undefined في الوضع الصارم، أو الكائن العام خارجه.\n5. الدوال السهمية: ترث this من النطاق المحيط ولا تتأثر بكل ما سبق.\n\n```js\nconst user = {\n  name: "Sara",\n  greet() { return `مرحبًا ${this.name}`; },\n};\n\nuser.greet();                  // "مرحبًا Sara"\n\nconst fn = user.greet;\nfn();                          // this مفقود — خطأ شائع جدًا\n\nconst bound = user.greet.bind(user);\nbound();                       // يعمل\n```\n\nالمشكلة الكلاسيكية: تمرير method كـ callback يفقد الربط، لأن ما يُمرَّر هو الدالة وحدها لا الكائن. الحلول: bind، أو دالة سهمية تلتف حولها، أو تعريف الـ method كحقل بدالة سهمية داخل الصنف.\n\nملاحظة إضافية: في معالجات الأحداث في DOM، this هو العنصر الذي عُلِّق عليه المعالج — إلا إذا استخدمت دالة سهمية.',
      en: 'The value of this is determined by how a function is called, not where it is defined — except for arrow functions.\n\nThe rules, in priority order:\n1. new — this is the newly created object.\n2. call / apply / bind — this is whatever you passed explicitly.\n3. Method call on an object — this is the object before the dot.\n4. Plain call — undefined in strict mode, the global object otherwise.\n5. Arrow functions — inherit this lexically and ignore all of the above.\n\n```js\nconst user = {\n  name: "Sara",\n  greet() { return `Hello ${this.name}`; },\n};\n\nuser.greet();                  // "Hello Sara"\n\nconst fn = user.greet;\nfn();                          // this is lost — a very common bug\n\nconst bound = user.greet.bind(user);\nbound();                       // works\n```\n\nThe classic problem: passing a method as a callback loses the binding, because only the function is passed, not the object. The fixes are bind, an arrow wrapper, or defining the method as a class field holding an arrow function.\n\nOne more note: in DOM event handlers this is the element the handler is attached to — unless you used an arrow function.',
    },
  },
  {
    id: 'js-call-apply-bind',
    difficulty: intermediate,
    question: {
      ar: 'ما الفرق بين call() و apply() و bind()؟',
      en: 'What is the difference between call(), apply() and bind()?',
    },
    answer: {
      ar: 'الثلاثة تحدد قيمة this صراحةً، والفرق في طريقة تمرير الوسائط وفي التوقيت:\n\n```js\nfunction introduce(greeting, punctuation) {\n  return `${greeting}, أنا ${this.name}${punctuation}`;\n}\n\nconst user = { name: "Sara" };\n\nintroduce.call(user, "مرحبًا", "!");        // وسائط منفصلة، تنفيذ فوري\nintroduce.apply(user, ["مرحبًا", "!"]);     // وسائط كمصفوفة، تنفيذ فوري\nconst bound = introduce.bind(user, "مرحبًا"); // يعيد دالة جديدة، لا ينفّذ\nbound("!");\n```\n\nالخلاصة: call وapply ينفّذان فورًا ويختلفان في شكل الوسائط فقط (A لـ Array)، أما bind فيعيد دالة جديدة مربوطة للاستخدام لاحقًا.\n\nاستخدامات عملية:\n• bind لتمرير method كـ callback دون فقدان this.\n• bind للتطبيق الجزئي (partial application) بتثبيت بعض الوسائط.\n• apply للاستعارة من كائنات تشبه المصفوفات — رغم أن spread حلّ محلها في الكود الحديث:\n```js\nMath.max(...numbers);              // بدل Math.max.apply(null, numbers)\n```\n\nملاحظة: الدالة المربوطة بـ bind لا يمكن إعادة ربطها، وbind على دالة سهمية لا يغيّر this.',
      en: 'All three set this explicitly; they differ in how arguments are passed and when the function runs:\n\n```js\nfunction introduce(greeting, punctuation) {\n  return `${greeting}, I am ${this.name}${punctuation}`;\n}\n\nconst user = { name: "Sara" };\n\nintroduce.call(user, "Hello", "!");         // separate args, runs now\nintroduce.apply(user, ["Hello", "!"]);      // args as an array, runs now\nconst bound = introduce.bind(user, "Hello"); // returns a new function, does not run\nbound("!");\n```\n\nIn short: call and apply invoke immediately and differ only in argument shape (A for Array), while bind returns a new bound function for later.\n\nPractical uses:\n• bind to pass a method as a callback without losing this.\n• bind for partial application by pre-filling arguments.\n• apply to borrow methods for array-likes — although spread has largely replaced it in modern code:\n```js\nMath.max(...numbers);              // instead of Math.max.apply(null, numbers)\n```\n\nNote: a bound function cannot be re-bound, and bind on an arrow function does not change this.',
    },
  },
  {
    id: 'js-prototype',
    difficulty: intermediate,
    question: {
      ar: 'ما هو الـ Prototype في JavaScript؟',
      en: 'What is a prototype in JavaScript?',
    },
    answer: {
      ar: 'كل كائن في JavaScript يرتبط بكائن آخر يسمى prototype، ويرث منه الخصائص والدوال. هذا هو نموذج الوراثة في اللغة: وراثة بالنماذج (prototypal) وليست بالأصناف.\n\n```js\nfunction User(name) {\n  this.name = name;                    // خاص بكل نسخة\n}\n\nUser.prototype.greet = function () {   // مشترك بين كل النسخ\n  return `مرحبًا ${this.name}`;\n};\n\nconst sara = new User("Sara");\nsara.greet();\n```\n\nلماذا نضع الدوال على الـ prototype؟ لأنها تُخزَّن مرة واحدة ويشاركها آلاف الكائنات بدل نسخة لكل كائن.\n\nتمييز مهم يُسأل عنه:\n• prototype: خاصية على الدوال المُنشِئة فقط، وهي الكائن الذي سترثه النسخ.\n• __proto__ (أو Object.getPrototypeOf): الرابط الفعلي من الكائن إلى نموذجه.\n\nوclasses في ES6 ليست نظامًا جديدًا للوراثة، بل صياغة أوضح فوق نفس آلية الـ prototypes.',
      en: 'Every object in JavaScript is linked to another object called its prototype and inherits properties and methods from it. That is the language\'s inheritance model: prototypal, not class-based.\n\n```js\nfunction User(name) {\n  this.name = name;                    // per instance\n}\n\nUser.prototype.greet = function () {   // shared by every instance\n  return `Hello ${this.name}`;\n};\n\nconst sara = new User("Sara");\nsara.greet();\n```\n\nWhy put methods on the prototype? Because they are stored once and shared by thousands of objects instead of copied into each one.\n\nA distinction interviewers like to check:\n• prototype is a property on constructor functions — the object instances will inherit from.\n• __proto__ (or Object.getPrototypeOf) is the actual link from an object to its prototype.\n\nAnd ES6 classes are not a new inheritance system — they are cleaner syntax over exactly this prototype mechanism.',
    },
  },
  {
    id: 'js-prototype-chain',
    difficulty: intermediate,
    question: {
      ar: 'ما هي Prototype Chain وكيف تعمل؟',
      en: 'What is the prototype chain and how does it work?',
    },
    answer: {
      ar: 'عند قراءة خاصية من كائن، يبحث المحرك فيه أولًا. إن لم يجدها ينتقل إلى الـ prototype، ثم إلى prototype الـ prototype، وهكذا حتى يصل إلى null. هذه السلسلة هي الـ prototype chain.\n\n```js\nconst arr = [1, 2, 3];\n// arr -> Array.prototype -> Object.prototype -> null\n\narr.map(fn);         // موجودة على Array.prototype\narr.toString();      // موجودة على Object.prototype\narr.missing;         // undefined بعد الوصول لنهاية السلسلة\n```\n\nنتائج عملية:\n• هذا هو سبب توفر دوال مثل map وtoString على كل مصفوفة دون تعريفها.\n• الخاصية الموجودة على الكائن نفسه تحجب (shadow) ما على الـ prototype.\n• سلسلة طويلة جدًا تعني بحثًا أطول، وهو أحد أسباب تفضيل التركيب (composition) على الوراثة العميقة.\n• for...in يمر على الخصائص الموروثة أيضًا، بعكس Object.keys.\n\nوتحذير مهم: لا تعدّل النماذج المدمجة (Array.prototype مثلًا) لأن ذلك يؤثر على كل الكود في الصفحة وقد يتعارض مع المكتبات — يُسمى هذا monkey patching ويُعدّ ممارسة سيئة.',
      en: 'When you read a property, the engine looks on the object first. If it is not there it goes to the prototype, then that prototype\'s prototype, and so on until it reaches null. That sequence is the prototype chain.\n\n```js\nconst arr = [1, 2, 3];\n// arr -> Array.prototype -> Object.prototype -> null\n\narr.map(fn);         // found on Array.prototype\narr.toString();      // found on Object.prototype\narr.missing;         // undefined once the chain ends\n```\n\nPractical consequences:\n• It is why every array has map and toString without you defining them.\n• An own property shadows one further up the chain.\n• A very long chain means a longer lookup, one reason to prefer composition over deep inheritance.\n• for...in walks inherited properties too, unlike Object.keys.\n\nAnd an important warning: do not modify built-in prototypes such as Array.prototype. It affects all code on the page and can clash with libraries — that is monkey patching, and it is considered bad practice.',
    },
  },
  {
    id: 'js-classes',
    difficulty: intermediate,
    question: {
      ar: 'كيف تعمل الـ Classes في JavaScript؟',
      en: 'How do classes work in JavaScript?',
    },
    answer: {
      ar: 'الـ class في JavaScript صياغة (syntactic sugar) فوق الدوال المُنشِئة والـ prototypes، وليست نظام أصناف حقيقيًا كما في Java.\n\n```js\nclass Account {\n  #balance = 0;                       // حقل خاص فعليًا\n  static count = 0;                   // خاصية على الصنف نفسه\n\n  constructor(owner) {\n    this.owner = owner;\n    Account.count++;\n  }\n\n  deposit(amount) {                   // توضع على Account.prototype\n    this.#balance += amount;\n    return this;\n  }\n\n  get balance() { return this.#balance; }\n\n  static create(owner) { return new Account(owner); }\n}\n\nclass Savings extends Account {\n  constructor(owner, rate) {\n    super(owner);                     // إلزامي قبل استخدام this\n    this.rate = rate;\n  }\n}\n```\n\nنقاط مهمة:\n• الحقول التي تبدأ بـ # خاصة فعليًا على مستوى اللغة، بعكس اصطلاح الشرطة السفلية.\n• تصريحات الـ class لا تُرفع بشكل قابل للاستخدام: استدعاؤها قبل تعريفها يرمي خطأ.\n• كود الـ class يعمل دائمًا في الوضع الصارم.\n• الدوال توضع على الـ prototype، بينما الحقول المعرّفة كخصائص توضع على كل نسخة.\n• super() إلزامية في المُنشئ الوارث قبل أي استخدام لـ this.\n\nوملاحظة تصميمية: فضّل التركيب (composition) على سلاسل وراثة عميقة؛ الوراثة تربط الأصناف ببعضها بشدة وتجعل التغيير مكلفًا.',
      en: 'A class in JavaScript is syntactic sugar over constructor functions and prototypes, not a separate class system as in Java.\n\n```js\nclass Account {\n  #balance = 0;                       // genuinely private field\n  static count = 0;                   // property on the class itself\n\n  constructor(owner) {\n    this.owner = owner;\n    Account.count++;\n  }\n\n  deposit(amount) {                   // lives on Account.prototype\n    this.#balance += amount;\n    return this;\n  }\n\n  get balance() { return this.#balance; }\n\n  static create(owner) { return new Account(owner); }\n}\n\nclass Savings extends Account {\n  constructor(owner, rate) {\n    super(owner);                     // required before using this\n    this.rate = rate;\n  }\n}\n```\n\nWhat matters:\n• Fields starting with # are truly private at the language level, unlike the underscore convention.\n• Class declarations are not usably hoisted — using one before its definition throws.\n• Class bodies always run in strict mode.\n• Methods go on the prototype, while class fields are created per instance.\n• super() is mandatory in a derived constructor before touching this.\n\nA design note: prefer composition over deep inheritance chains — inheritance couples classes tightly and makes change expensive.',
    },
  },
  {
    id: 'js-modules',
    difficulty: intermediate,
    question: {
      ar: 'ما الفرق بين ES Modules و CommonJS؟',
      en: 'What is the difference between ES Modules and CommonJS?',
    },
    answer: {
      ar: '```js\n// ES Modules — المعيار الحديث\nexport const add = (a, b) => a + b;\nexport default Calculator;\nimport Calculator, { add } from "./calc.js";\n\n// CommonJS — نظام Node التقليدي\nmodule.exports = { add };\nconst { add } = require("./calc");\n```\n\nالفروق الجوهرية:\n1. ES Modules ثابتة (static): تُحلَّل قبل التنفيذ، وهذا ما يسمح بـ tree-shaking وباكتشاف الأخطاء مبكرًا. require ديناميكي ويُنفَّذ وقت التشغيل.\n2. ES Modules غير متزامنة بطبيعتها وتدعم top-level await؛ require متزامن.\n3. ES Modules تصدّر روابط حية (live bindings): إذا تغيّرت القيمة في الوحدة المصدّرة تنعكس عند المستورد. CommonJS تنسخ القيمة وقت الاستيراد.\n4. ES Modules تعمل في الوضع الصارم دائمًا.\n\nفي المتصفح: ES Modules هي الخيار الوحيد المدعوم أصلًا.\nفي Node: كلاهما مدعوم، ويُحدَّد النظام بـ "type": "module" أو بالامتداد ‎.mjs / ‎.cjs.\n\nنصيحة: استخدم ES Modules في كل كود جديد.',
      en: '```js\n// ES Modules — the modern standard\nexport const add = (a, b) => a + b;\nexport default Calculator;\nimport Calculator, { add } from "./calc.js";\n\n// CommonJS — Node\'s traditional system\nmodule.exports = { add };\nconst { add } = require("./calc");\n```\n\nThe essential differences:\n1. ES Modules are static: resolved before execution, which enables tree-shaking and earlier error detection. require is dynamic and runs at execution time.\n2. ES Modules are asynchronous by nature and support top-level await; require is synchronous.\n3. ES Modules export live bindings — if the value changes in the exporting module the importer sees it. CommonJS copies the value at import time.\n4. ES Modules always run in strict mode.\n\nIn the browser, ES Modules are the only natively supported option.\nIn Node both work, selected by "type": "module" or the .mjs / .cjs extension.\n\nRecommendation: use ES Modules for all new code.',
    },
  },
  {
    id: 'js-debounce-throttle',
    difficulty: intermediate,
    question: {
      ar: 'ما هو الـ Debouncing و Throttling؟',
      en: 'What are debouncing and throttling?',
    },
    answer: {
      ar: 'كلاهما يقلّل عدد مرات تنفيذ دالة تُستدعى كثيرًا، لكن بمنطق مختلف:\n\n• Debounce: لا تنفّذ إلا بعد توقف الأحداث لمدة محددة. مناسب للبحث أثناء الكتابة — لا نريد طلبًا لكل حرف، بل بعد توقف المستخدم.\n• Throttle: نفّذ مرة واحدة على الأكثر كل فترة زمنية. مناسب لأحداث التمرير (scroll) وتغيير حجم النافذة — نريد تحديثًا منتظمًا لا انتظارًا للتوقف.\n\n```js\nconst debounce = (fn, delay) => {\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), delay);\n  };\n};\n\nconst throttle = (fn, limit) => {\n  let waiting = false;\n  return (...args) => {\n    if (waiting) return;\n    fn(...args);\n    waiting = true;\n    setTimeout(() => (waiting = false), limit);\n  };\n};\n```\n\nالفرق بمثال: مستخدم يكتب عشرة أحرف خلال ثانية.\n• debounce بـ 300ms ينفّذ مرة واحدة بعد التوقف.\n• throttle بـ 300ms ينفّذ نحو ثلاث مرات أثناء الكتابة.\n\nنقطة عملية في React: يجب أن تكون الدالة المُغلَّفة ثابتة عبر عمليات إعادة الرسم (useMemo أو useRef)، وإلا أُنشئت نسخة جديدة كل مرة وفقدت الفائدة تمامًا. وللتمرير تحديدًا، غالبًا يكون IntersectionObserver خيارًا أفضل من throttle.',
      en: 'Both reduce how often a frequently-called function runs, but with different logic:\n\n• Debounce: run only after the events stop for a given period. Right for type-ahead search — you do not want a request per keystroke, you want one after the user pauses.\n• Throttle: run at most once per interval. Right for scroll and resize — you want regular updates, not a wait for the user to stop.\n\n```js\nconst debounce = (fn, delay) => {\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), delay);\n  };\n};\n\nconst throttle = (fn, limit) => {\n  let waiting = false;\n  return (...args) => {\n    if (waiting) return;\n    fn(...args);\n    waiting = true;\n    setTimeout(() => (waiting = false), limit);\n  };\n};\n```\n\nConcretely: a user types ten characters in one second.\n• Debounce at 300ms runs once, after they stop.\n• Throttle at 300ms runs roughly three times while they type.\n\nA practical React note: the wrapped function must be stable across renders (useMemo or useRef), otherwise a new one is created each render and the benefit disappears entirely. And for scroll specifically, IntersectionObserver is often a better tool than throttling.',
    },
  },
  {
    id: 'js-event-bubbling',
    difficulty: intermediate,
    question: {
      ar: 'ما هو Event Bubbling و Event Capturing؟',
      en: 'What are event bubbling and event capturing?',
    },
    answer: {
      ar: 'عند وقوع حدث في DOM يمر بثلاث مراحل:\n\n1. Capturing: ينزل من window إلى العنصر الهدف.\n2. Target: يصل إلى العنصر نفسه.\n3. Bubbling: يصعد من الهدف إلى الأعلى حتى window.\n\nافتراضيًا يستمع addEventListener في مرحلة الـ bubbling. للاستماع في مرحلة الـ capturing نمرّر true أو { capture: true }.\n\n```js\nparent.addEventListener("click", handler);                  // bubbling\nparent.addEventListener("click", handler, { capture: true }); // capturing\n```\n\nدوال مهمة:\n• event.stopPropagation(): يوقف انتقال الحدث للعناصر الأخرى.\n• event.preventDefault(): يمنع السلوك الافتراضي (إرسال نموذج، فتح رابط) دون إيقاف الانتقال.\n• event.target: العنصر الذي وقع عليه الحدث فعلًا.\n• event.currentTarget: العنصر المُعلَّق عليه المستمع.\n\nالفائدة العملية الكبرى للـ bubbling هي event delegation: مستمع واحد على الأب يخدم كل الأبناء الحاليين والمستقبليين.\n\nملاحظة: بعض الأحداث لا تصعد مثل focus وblur (بديلاها focusin وfocusout يصعدان).',
      en: 'When an event fires in the DOM it travels through three phases:\n\n1. Capturing — down from window to the target element.\n2. Target — it reaches the element itself.\n3. Bubbling — up from the target back to window.\n\nBy default addEventListener listens during bubbling. To listen during capturing you pass true or { capture: true }.\n\n```js\nparent.addEventListener("click", handler);                  // bubbling\nparent.addEventListener("click", handler, { capture: true }); // capturing\n```\n\nThe methods that matter:\n• event.stopPropagation() halts further travel.\n• event.preventDefault() cancels the default behaviour (submitting a form, following a link) without stopping propagation.\n• event.target is the element the event actually occurred on.\n• event.currentTarget is the element the listener is attached to.\n\nThe big practical benefit of bubbling is event delegation: one listener on a parent serves all current and future children.\n\nNote: some events do not bubble, such as focus and blur — their bubbling counterparts are focusin and focusout.',
    },
  },
  {
    id: 'js-event-delegation',
    difficulty: intermediate,
    question: {
      ar: 'ما هو Event Delegation ولماذا نستخدمه؟',
      en: 'What is event delegation and why use it?',
    },
    answer: {
      ar: 'بدل إضافة مستمع لكل عنصر، نضيف مستمعًا واحدًا على عنصر أب ونستفيد من الـ bubbling لتحديد المصدر.\n\n```js\n// بدلًا من مستمع لكل زر\ndocument.querySelector("#list").addEventListener("click", (event) => {\n  const button = event.target.closest("[data-id]");\n  if (!button) return;\n  deleteItem(button.dataset.id);\n});\n```\n\nالفوائد:\n1. أداء وذاكرة أفضل: مستمع واحد بدل ألف.\n2. يعمل تلقائيًا مع العناصر المضافة لاحقًا — وهذه أهم ميزة عمليًا، لأن المستمع المباشر لا يُطبَّق على عناصر لم تكن موجودة وقت التسجيل.\n3. كود أبسط عند التعامل مع قوائم ديناميكية.\n\nنقاط يجب الانتباه لها:\n• استخدم closest وليس event.target مباشرة، لأن النقر قد يقع على عنصر داخلي مثل أيقونة داخل الزر.\n• لا تعلّق المستمع على document إن كان أبٌ أقرب كافيًا.\n• لا يصلح مع الأحداث التي لا تصعد.\n\nملاحظة: React يستخدم شكلًا من هذه الفكرة داخليًا عبر نظام الأحداث الاصطناعية، لذلك لا تحتاج لتطبيقها يدويًا داخل مكوّنات React.',
      en: 'Instead of attaching a listener to every element, you attach one to a parent and use bubbling to identify the source.\n\n```js\n// instead of one listener per button\ndocument.querySelector("#list").addEventListener("click", (event) => {\n  const button = event.target.closest("[data-id]");\n  if (!button) return;\n  deleteItem(button.dataset.id);\n});\n```\n\nThe benefits:\n1. Better memory and performance — one listener instead of a thousand.\n2. It automatically covers elements added later, which is the most valuable part in practice: a direct listener never applies to elements that did not exist when it was registered.\n3. Simpler code for dynamic lists.\n\nThings to watch:\n• Use closest rather than event.target directly, because the click may land on an inner element such as an icon inside the button.\n• Do not attach to document when a closer parent will do.\n• It does not work for events that do not bubble.\n\nNote: React uses a version of this internally through its synthetic event system, so you do not need to implement it by hand inside React components.',
    },
  },
  {
    id: 'js-shallow-deep-copy',
    difficulty: intermediate,
    question: {
      ar: 'ما الفرق بين النسخ السطحي (shallow) والنسخ العميق (deep)؟',
      en: 'What is the difference between a shallow copy and a deep copy?',
    },
    answer: {
      ar: 'النسخ السطحي ينسخ المستوى الأول فقط؛ الكائنات المتداخلة تبقى مشتركة بين النسخة والأصل. النسخ العميق ينسخ كل المستويات فينفصل تمامًا.\n\n```js\nconst user = { name: "Sara", address: { city: "Cairo" } };\n\n// سطحي\nconst shallow = { ...user };\nshallow.address.city = "Giza";\nuser.address.city;              // "Giza" — تأثر الأصل!\n\n// عميق\nconst deep = structuredClone(user);\ndeep.address.city = "Alex";\nuser.address.city;              // "Giza" — لم يتأثر\n```\n\nطرق النسخ السطحي: spread، وObject.assign، وArray.prototype.slice.\n\nطرق النسخ العميق:\n• structuredClone — الخيار الأفضل اليوم: مدمج، ويدعم Date وMap وSet والمراجع الدائرية. لا ينسخ الدوال.\n• JSON.parse(JSON.stringify(x)) — يعمل مع البيانات البسيطة فقط، ويفقد التواريخ وundefined والدوال، ويفشل مع المراجع الدائرية.\n• دالة تكرارية مخصصة أو مكتبة مثل lodash.cloneDeep.\n\nلماذا هذا مهم في React؟ لأن تعديل كائن متداخل داخل الحالة بنسخة سطحية يعدّل الحالة الأصلية فعليًا، فلا يكتشف React التغيير أو يحدث سلوك غير متوقع.',
      en: 'A shallow copy duplicates only the top level; nested objects stay shared between the copy and the original. A deep copy duplicates every level, so the two are fully independent.\n\n```js\nconst user = { name: "Sara", address: { city: "Cairo" } };\n\n// shallow\nconst shallow = { ...user };\nshallow.address.city = "Giza";\nuser.address.city;              // "Giza" — the original changed!\n\n// deep\nconst deep = structuredClone(user);\ndeep.address.city = "Alex";\nuser.address.city;              // "Giza" — untouched\n```\n\nShallow copy tools: spread, Object.assign, Array.prototype.slice.\n\nDeep copy options:\n• structuredClone — the best choice today: built in, handles Date, Map, Set and circular references. It does not copy functions.\n• JSON.parse(JSON.stringify(x)) — plain data only; it loses Dates, undefined and functions, and throws on circular references.\n• A custom recursive function or a library such as lodash.cloneDeep.\n\nWhy does this matter in React? Because mutating a nested object inside state through a shallow copy actually mutates the original state, so React either misses the change or behaves unpredictably.',
    },
  },
  {
    id: 'js-optional-chaining',
    difficulty: intermediate,
    question: {
      ar: 'ما هو Optional Chaining وما هو Nullish Coalescing؟',
      en: 'What are optional chaining and nullish coalescing?',
    },
    answer: {
      ar: '```js\n// Optional chaining — ?.\nconst city = user?.address?.city;         // undefined بدل خطأ\nconst first = items?.[0];                 // مع الفهارس\nconst result = callback?.();              // استدعاء إن وُجدت الدالة\n\n// Nullish coalescing — ??\nconst port = config.port ?? 3000;         // 3000 فقط إذا كانت null أو undefined\n```\n\nالفائدة من ?. هي تجنّب الخطأ الشهير "Cannot read property of undefined" دون سلسلة شروط طويلة. إذا كانت القيمة null أو undefined تتوقف السلسلة وتعيد undefined.\n\nالفرق الجوهري بين ?? و || يستحق التوضيح:\n```js\n0 || 100;        // 100 — لأن 0 قيمة falsy\n0 ?? 100;        // 0   — لأن 0 ليست null/undefined\n"" || "افتراضي"; // "افتراضي"\n"" ?? "افتراضي"; // ""\n```\nلذلك ?? هو الخيار الصحيح للقيم الافتراضية عندما يكون 0 أو "" أو false قيمًا مشروعة — وهو مصدر أخطاء حقيقية في الإعدادات والنماذج.\n\nتحذير: الإفراط في ?. قد يخفي مشكلة حقيقية في البيانات. إذا كان غياب القيمة يعني خطأً فمن الأفضل كشفه لا إسكاته.',
      en: '```js\n// Optional chaining — ?.\nconst city = user?.address?.city;         // undefined instead of a crash\nconst first = items?.[0];                 // with indexes\nconst result = callback?.();              // call it only if it exists\n\n// Nullish coalescing — ??\nconst port = config.port ?? 3000;         // 3000 only when null or undefined\n```\n\n?. exists to avoid the familiar "Cannot read property of undefined" without a long chain of guards. If the value is null or undefined the chain short-circuits and evaluates to undefined.\n\nThe difference between ?? and || is worth spelling out:\n```js\n0 || 100;        // 100 — because 0 is falsy\n0 ?? 100;        // 0   — because 0 is not null/undefined\n"" || "default"; // "default"\n"" ?? "default"; // ""\n```\nSo ?? is the correct choice for defaults whenever 0, "" or false are legitimate values — a genuine source of bugs in config handling and forms.\n\nA caution: overusing ?. can hide a real data problem. If a missing value means something is wrong, surfacing it beats silencing it.',
    },
  },
  {
    id: 'js-currying',
    difficulty: intermediate,
    question: {
      ar: 'ما هو الـ Currying في JavaScript؟',
      en: 'What is currying in JavaScript?',
    },
    answer: {
      ar: 'الـ currying هو تحويل دالة تأخذ عدة معاملات إلى سلسلة من الدوال يأخذ كل منها معاملًا واحدًا.\n\n```js\n// عادية\nconst add = (a, b, c) => a + b + c;\nadd(1, 2, 3);\n\n// مُحوَّلة\nconst curried = (a) => (b) => (c) => a + b + c;\ncurried(1)(2)(3);\n```\n\nالفائدة الحقيقية هي التطبيق الجزئي: تثبيت بعض القيم وإنشاء دوال متخصصة قابلة لإعادة الاستخدام.\n\n```js\nconst log = (level) => (module) => (message) =>\n  console.log(`[${level}] [${module}] ${message}`);\n\nconst errorLog = log("ERROR");\nconst dbError = errorLog("database");\n\ndbError("connection failed");\n```\n\nمتى يكون مفيدًا؟ عند تكوين الدوال (function composition)، وفي المعالجات ذات الإعدادات المتكررة، وفي البرمجة الوظيفية عمومًا.\n\nوملاحظة صادقة: لا تبالغ فيه. في كود التطبيقات العادي، دالة بمعاملين أوضح من ثلاث دوال متداخلة، وbind يوفّر تطبيقًا جزئيًا أبسط في كثير من الحالات.',
      en: 'Currying transforms a function of several parameters into a chain of functions that each take one.\n\n```js\n// normal\nconst add = (a, b, c) => a + b + c;\nadd(1, 2, 3);\n\n// curried\nconst curried = (a) => (b) => (c) => a + b + c;\ncurried(1)(2)(3);\n```\n\nThe real benefit is partial application: fixing some arguments to produce specialised, reusable functions.\n\n```js\nconst log = (level) => (module) => (message) =>\n  console.log(`[${level}] [${module}] ${message}`);\n\nconst errorLog = log("ERROR");\nconst dbError = errorLog("database");\n\ndbError("connection failed");\n```\n\nWhen is it genuinely useful? In function composition, in handlers with repeated configuration, and in functional programming generally.\n\nAnd an honest caveat: do not overdo it. In ordinary application code a two-parameter function reads better than three nested ones, and bind gives you simpler partial application in many cases.',
    },
  },
  {
    id: 'js-memoization',
    difficulty: intermediate,
    question: {
      ar: 'ما هو مفهوم Memoization؟',
      en: 'What is memoization?',
    },
    answer: {
      ar: 'تقنية تخزّن نتائج دالة مقابل مدخلاتها، فإذا تكرر نفس المدخل تُعاد النتيجة المخزَّنة بدل إعادة الحساب.\n\n```js\nconst memoize = (fn) => {\n  const cache = new Map();\n  return (...args) => {\n    const key = JSON.stringify(args);\n    if (cache.has(key)) return cache.get(key);\n    const result = fn(...args);\n    cache.set(key, result);\n    return result;\n  };\n};\n\nconst slowCalc = memoize((n) => expensiveComputation(n));\n```\n\nشروط صحة التطبيق:\n• الدالة يجب أن تكون نقية (pure): نفس المدخلات تعطي نفس المخرجات دائمًا وبلا آثار جانبية. تخزين نتائج دالة تعتمد على الوقت أو على حالة متغيرة يعطي نتائج خاطئة.\n• انتبه لنمو الـ cache: cache بلا حد أقصى هو تسريب ذاكرة. استخدم LRU محدود الحجم، أو WeakMap إذا كان المفتاح كائنًا فيسمح لجامع القمامة بتحريره.\n• توليد المفتاح بـ JSON.stringify مكلف وقد يفشل مع المراجع الدائرية؛ للمعامل الواحد البسيط استخدمه مباشرة كمفتاح.\n\nفي React المفهوم نفسه يظهر في useMemo وuseCallback وReact.memo، والقاعدة واحدة: لا تستخدمه إلا إذا كان الحساب مكلفًا فعلًا، فالتخزين نفسه له تكلفة.',
      en: 'A technique that caches a function\'s results against its inputs, so a repeated input returns the stored result instead of recomputing.\n\n```js\nconst memoize = (fn) => {\n  const cache = new Map();\n  return (...args) => {\n    const key = JSON.stringify(args);\n    if (cache.has(key)) return cache.get(key);\n    const result = fn(...args);\n    cache.set(key, result);\n    return result;\n  };\n};\n\nconst slowCalc = memoize((n) => expensiveComputation(n));\n```\n\nConditions for it to be correct:\n• The function must be pure — same inputs, same output, no side effects. Memoizing something that depends on the clock or on mutable state produces wrong answers.\n• Watch cache growth: an unbounded cache is a memory leak. Use a bounded LRU, or a WeakMap when the key is an object so the GC can reclaim entries.\n• JSON.stringify keys are expensive and break on circular references; for a single simple argument use it directly as the key.\n\nIn React the same idea appears as useMemo, useCallback and React.memo, and the rule is identical: only reach for it when the computation is genuinely expensive, because caching itself costs something.',
    },
  },
  {
    id: 'js-pure-higher-order',
    difficulty: intermediate,
    question: {
      ar: 'ما هي الدوال النقية (pure functions) والدوال عالية الرتبة (higher-order functions)؟',
      en: 'What are pure functions and higher-order functions?',
    },
    answer: {
      ar: 'الدالة النقية لها شرطان: نفس المدخلات تعطي نفس المخرجات دائمًا، ولا تُحدث أي أثر جانبي (لا تعدّل متغيرات خارجية، ولا تكتب في DOM، ولا ترسل طلبات).\n\n```js\nconst add = (a, b) => a + b;                     // نقية\n\nlet total = 0;\nconst addToTotal = (n) => (total += n);          // غير نقية\n\nconst addItem = (list, item) => [...list, item]; // نقية — لا تعدّل الأصل\n```\n\nلماذا نفضّلها؟ لأنها قابلة للاختبار دون إعداد معقد، وقابلة للتخزين المؤقت، وسهلة التتبّع، وآمنة للتنفيذ المتوازي.\n\nالدالة عالية الرتبة هي دالة تأخذ دالة كمعامل أو تعيد دالة:\n```js\nconst withRetry = (fn, attempts = 3) => async (...args) => {\n  for (let i = 0; i < attempts; i++) {\n    try { return await fn(...args); }\n    catch (error) { if (i === attempts - 1) throw error; }\n  }\n};\n```\n\nهذا النمط في كل مكان: map وfilter وreduce دوال عالية الرتبة، وكذلك الـ middleware في Express والـ HOC في React.\n\nملاحظة واقعية: لا يمكن أن يكون التطبيق كله نقيًا — لا بد من آثار جانبية للتعامل مع الشبكة والواجهة. الهدف هو عزلها في أماكن محددة وإبقاء منطق العمل نقيًا.',
      en: 'A pure function has two properties: the same inputs always produce the same output, and it causes no side effects (no mutating outer variables, no DOM writes, no network calls).\n\n```js\nconst add = (a, b) => a + b;                     // pure\n\nlet total = 0;\nconst addToTotal = (n) => (total += n);          // impure\n\nconst addItem = (list, item) => [...list, item]; // pure — no mutation\n```\n\nWhy prefer them? They are testable without elaborate setup, cacheable, easy to reason about, and safe to run in parallel.\n\nA higher-order function takes a function as an argument or returns one:\n```js\nconst withRetry = (fn, attempts = 3) => async (...args) => {\n  for (let i = 0; i < attempts; i++) {\n    try { return await fn(...args); }\n    catch (error) { if (i === attempts - 1) throw error; }\n  }\n};\n```\n\nThe pattern is everywhere: map, filter and reduce are higher-order functions, and so are Express middleware and React HOCs.\n\nA realistic note: an application cannot be entirely pure — you need side effects to talk to the network and the UI. The goal is to isolate them at the edges and keep business logic pure.',
    },
  },
  {
    id: 'js-iife',
    difficulty: intermediate,
    question: {
      ar: 'ما هو الـ IIFE ولماذا كان يُستخدم؟',
      en: 'What is an IIFE and why was it used?',
    },
    answer: {
      ar: 'IIFE اختصار لـ Immediately Invoked Function Expression: دالة تُعرَّف وتُستدعى فورًا.\n\n```js\n(function () {\n  const secret = "خاص";\n})();\n\n(() => {\n  // بصيغة السهم\n})();\n```\n\nلماذا وُجد؟ قبل ES6 لم يكن في JavaScript سوى نطاق الدالة، فكان IIFE الوسيلة الوحيدة لإنشاء نطاق خاص ومنع تلويث النطاق العام. وكان أيضًا أساس نمط الـ Module Pattern.\n\nهل ما زال مستخدمًا؟ أقل بكثير، لأن:\n• let وconst توفّران نطاق البلوك.\n• ES Modules لها نطاقها الخاص تلقائيًا.\n\nلكنه ما زال مفيدًا في حالات:\n• تنفيذ كود غير متزامن في ملف لا يدعم top-level await:\n```js\n(async () => {\n  const data = await fetchData();\n})();\n```\n• عزل سكربت يُحقن في صفحة خارجية.\n• في مخرجات أدوات البناء (bundlers) لتغليف الوحدات.\n\nمعرفته مهمة أيضًا لقراءة الكود القديم والمكتبات المبنية بصيغة UMD.',
      en: 'IIFE stands for Immediately Invoked Function Expression: a function defined and called right away.\n\n```js\n(function () {\n  const secret = "private";\n})();\n\n(() => {\n  // arrow form\n})();\n```\n\nWhy did it exist? Before ES6, JavaScript only had function scope, so an IIFE was the only way to create a private scope and avoid polluting the global namespace. It was also the basis of the Module Pattern.\n\nIs it still used? Far less, because:\n• let and const give you block scope.\n• ES Modules have their own scope automatically.\n\nBut it still has uses:\n• Running async code in a file without top-level await:\n```js\n(async () => {\n  const data = await fetchData();\n})();\n```\n• Isolating a script injected into a third-party page.\n• In bundler output, to wrap modules.\n\nKnowing it also matters for reading older code and UMD-format libraries.',
    },
  },
  {
    id: 'js-bundlers',
    difficulty: intermediate,
    question: {
      ar: 'ما هو الـ Bundler؟ وما دور أدوات مثل Webpack و Vite؟',
      en: 'What is a bundler, and what do tools like Webpack and Vite do?',
    },
    answer: {
      ar: 'الـ bundler أداة تجمع ملفات المشروع (JavaScript وCSS والصور) وتحوّلها إلى ملفات جاهزة للمتصفح.\n\nما تقوم به فعليًا:\n1. حل الاعتماديات وبناء شجرة الوحدات.\n2. التحويل (transpiling) عبر Babel أو esbuild لدعم متصفحات أقدم.\n3. Tree shaking: حذف الكود غير المستخدم.\n4. Code splitting: تقسيم الحزمة لتحميل ما يلزم فقط.\n5. التصغير (minification) وإضافة بصمة للملف (hashing) لإدارة الـ cache.\n6. خادم تطوير مع hot module replacement.\n\nالأدوات:\n• Webpack: الأقدم والأكثر قابلية للتخصيص، وإعداده أثقل.\n• Vite: الأشيع اليوم للمشاريع الجديدة؛ يستخدم ES Modules الأصلية أثناء التطوير فيبدأ فورًا مهما كبر المشروع، ويستخدم Rollup للبناء.\n• esbuild وSWC: أدوات تحويل سريعة جدًا مكتوبة بـ Go وRust، وتُستخدم داخل أدوات أخرى.\n\nلماذا نحتاجها أصلًا؟ لتقليل عدد الطلبات، ودعم صيغ لا يفهمها المتصفح مثل JSX وTypeScript، وتحسين حجم الحزمة — وهو عامل مباشر في سرعة تحميل الصفحة.',
      en: 'A bundler collects your project files (JavaScript, CSS, images) and turns them into assets the browser can load.\n\nWhat it actually does:\n1. Resolves dependencies and builds a module graph.\n2. Transpiles via Babel or esbuild for older browser support.\n3. Tree shaking — drops unused code.\n4. Code splitting — breaks the bundle up so only what is needed loads.\n5. Minification and content hashing for cache management.\n6. A dev server with hot module replacement.\n\nThe tools:\n• Webpack — the oldest and most configurable, with heavier setup.\n• Vite — the common choice for new projects; it serves native ES Modules in development so startup is instant regardless of project size, and uses Rollup for production builds.\n• esbuild and SWC — extremely fast transformers written in Go and Rust, used inside other tools.\n\nWhy do we need them at all? To reduce request counts, to support syntax the browser does not understand such as JSX and TypeScript, and to shrink bundle size — which directly affects page load time.',
    },
  },
  {
    id: 'js-npm-yarn',
    difficulty: intermediate,
    question: {
      ar: 'ما الفرق بين npm و yarn و pnpm؟',
      en: 'What is the difference between npm, yarn and pnpm?',
    },
    answer: {
      ar: 'الثلاثة مديرو حزم لـ JavaScript ويؤدون نفس الوظيفة الأساسية، والفروق في التفاصيل:\n\n• npm: يأتي مع Node، وهو الخيار الافتراضي. تحسّن كثيرًا في الإصدارات الأخيرة وأصبح فرق السرعة عن غيره صغيرًا.\n• yarn: ظهر لحل مشكلات npm القديمة في السرعة والحتمية (determinism)، وأضاف الـ workspaces، ثم قدّم في إصداره الحديث نمط Plug\'n\'Play الذي يستغني عن مجلد node_modules التقليدي.\n• pnpm: يخزّن كل نسخة من كل حزمة مرة واحدة على الجهاز ويربطها بروابط صلبة (hard links). النتيجة توفير كبير في المساحة وتثبيت أسرع، مع بنية node_modules أكثر صرامة تمنع استخدام حزمة لم تُعلن كاعتمادية.\n\nنقاط عملية للمقابلة:\n1. الأهم ليس أيّها تختار، بل أن يستخدم الفريق كله نفس المدير ونفس الـ lock file. خلط المديرين يولّد ملفات قفل متعارضة ومشاكل يصعب تتبّعها.\n2. في CI استخدم دائمًا الأمر الحتمي: npm ci أو ما يعادله، لا التثبيت العادي.\n3. اليوم ثبّت الخيار عبر حقل packageManager في package.json وCorepack.',
      en: 'All three are JavaScript package managers doing the same core job; the differences are in the details:\n\n• npm ships with Node and is the default. Recent versions closed most of the historical speed gap.\n• yarn appeared to fix npm\'s old problems with speed and determinism, added workspaces, and in its modern releases offers Plug\'n\'Play, which removes the traditional node_modules folder.\n• pnpm stores each version of each package once on the machine and hard-links it into projects. That saves a lot of disk space and installs faster, with a stricter node_modules layout that prevents using a package you did not declare as a dependency.\n\nPractical interview points:\n1. What matters is less which one you pick than that the whole team uses the same one with the same lockfile. Mixing managers produces conflicting lockfiles and hard-to-trace problems.\n2. In CI always use the deterministic command — npm ci or its equivalent — not a regular install.\n3. Today you pin the choice with the packageManager field in package.json plus Corepack.',
    },
  },
  {
    id: 'js-getters-setters',
    difficulty: intermediate,
    question: {
      ar: 'ما هي getters و setters في JavaScript؟',
      en: 'What are getters and setters in JavaScript?',
    },
    answer: {
      ar: 'دوال تُستخدم كأنها خصائص عادية، وتسمح بتنفيذ منطق عند القراءة أو الكتابة.\n\n```js\nclass Temperature {\n  #celsius = 0;\n\n  get celsius() { return this.#celsius; }\n\n  set celsius(value) {\n    if (typeof value !== "number") throw new TypeError("رقم مطلوب");\n    this.#celsius = value;\n  }\n\n  get fahrenheit() { return this.#celsius * 9 / 5 + 32; }   // قيمة محسوبة\n}\n\nconst t = new Temperature();\nt.celsius = 25;        // يستدعي الـ setter\nt.fahrenheit;          // 77 — تُقرأ كخاصية لكنها محسوبة\n```\n\nمتى تكون مفيدة؟\n• قيم مشتقة تُحسب عند الطلب.\n• التحقق من القيمة قبل الإسناد.\n• قراءة فقط: getter بلا setter.\n• تسجيل أو تتبّع الوصول إلى خاصية.\n\nملاحظتان مهمتان:\n1. لا تضع منطقًا ثقيلًا داخل getter؛ المستخدم يتوقع أن قراءة الخاصية رخيصة. إن كانت العملية مكلفة فاجعلها دالة صريحة مثل computeTotal().\n2. للتحكم الديناميكي في كل الخصائص (لا خاصية بعينها) استخدم Proxy بدل تعريف getters يدويًا.',
      en: 'Functions that are used like ordinary properties, letting you run logic on read or write.\n\n```js\nclass Temperature {\n  #celsius = 0;\n\n  get celsius() { return this.#celsius; }\n\n  set celsius(value) {\n    if (typeof value !== "number") throw new TypeError("number required");\n    this.#celsius = value;\n  }\n\n  get fahrenheit() { return this.#celsius * 9 / 5 + 32; }   // derived value\n}\n\nconst t = new Temperature();\nt.celsius = 25;        // calls the setter\nt.fahrenheit;          // 77 — reads like a property but is computed\n```\n\nWhen are they useful?\n• Derived values computed on demand.\n• Validating a value before assignment.\n• Read-only properties: a getter with no setter.\n• Logging or tracing access to a property.\n\nTwo important notes:\n1. Do not put heavy logic in a getter — callers assume reading a property is cheap. If it is expensive, make it an explicit method such as computeTotal().\n2. For dynamic control over all properties rather than a specific one, use a Proxy instead of hand-written getters.',
    },
  },
  {
    id: 'js-error-handling',
    difficulty: intermediate,
    question: {
      ar: 'كيف تتعامل مع الأخطاء في JavaScript؟',
      en: 'How do you handle errors in JavaScript?',
    },
    answer: {
      ar: 'الأدوات الأساسية: try/catch/finally وthrow وأصناف الأخطاء.\n\n```js\nclass ValidationError extends Error {\n  constructor(message, field) {\n    super(message);\n    this.name = "ValidationError";\n    this.field = field;\n  }\n}\n\ntry {\n  validate(input);\n} catch (error) {\n  if (error instanceof ValidationError) showFieldError(error.field);\n  else throw error;                 // ما لا تعرفه لا تبتلعه\n} finally {\n  hideSpinner();                    // ينفَّذ دائمًا\n}\n```\n\nقواعد مهمة:\n1. ارمِ كائنات Error دائمًا لا نصوصًا؛ فقط كائن Error يحمل stack trace.\n2. لا تستخدم catch فارغًا — ابتلاع الخطأ يجعل التشخيص مستحيلًا لاحقًا.\n3. try/catch العادي لا يلتقط الأخطاء داخل الـ callbacks غير المتزامنة مثل setTimeout، لأنها تُنفَّذ في سياق لاحق.\n4. مع async/await ضع await داخل try؛ ومع سلاسل الـ Promises استخدم catch.\n5. للأخطاء غير الملتقطة عالميًا: window.onerror وwindow.onunhandledrejection في المتصفح، وprocess.on في Node.\n\nوتمييز مفيد: فرّق بين الأخطاء المتوقعة التي تُعالج وتُعرض للمستخدم، والأخطاء البرمجية التي تُسجَّل وتُبلَّغ لنظام المراقبة.',
      en: 'The basic tools are try/catch/finally, throw, and error classes.\n\n```js\nclass ValidationError extends Error {\n  constructor(message, field) {\n    super(message);\n    this.name = "ValidationError";\n    this.field = field;\n  }\n}\n\ntry {\n  validate(input);\n} catch (error) {\n  if (error instanceof ValidationError) showFieldError(error.field);\n  else throw error;                 // do not swallow what you do not recognise\n} finally {\n  hideSpinner();                    // always runs\n}\n```\n\nRules that matter:\n1. Always throw Error objects, never strings — only an Error carries a stack trace.\n2. Never use an empty catch; swallowing errors makes later diagnosis impossible.\n3. A plain try/catch does not catch errors inside async callbacks such as setTimeout, because those run in a later context.\n4. With async/await put the await inside try; with promise chains use catch.\n5. For uncaught errors globally: window.onerror and window.onunhandledrejection in the browser, process.on in Node.\n\nA useful distinction: separate expected errors, which you handle and show to the user, from programmer errors, which you log and report to your monitoring system.',
    },
  },

  // ---------------------------------------------------------------- ADVANCED
  {
    id: 'js-runtime-behavior',
    difficulty: advanced,
    question: {
      ar: 'كيف ينفّذ محرك JavaScript الكود فعليًا؟',
      en: 'How does a JavaScript engine actually execute code?',
    },
    answer: {
      ar: 'المسار داخل محرك حديث مثل V8:\n\n1. Parsing: تحويل النص إلى Abstract Syntax Tree. يستخدم V8 تحليلًا كسولًا (lazy parsing) فلا يحلّل جسم الدالة بالكامل حتى تُستدعى.\n2. Ignition: مفسّر يحوّل الـ AST إلى bytecode وينفّذه فورًا، فيبدأ التنفيذ بسرعة.\n3. المراقبة (profiling): يراقب المحرك الكود الساخن ويجمع معلومات عن أنواع القيم الفعلية.\n4. TurboFan: مُحسِّن يعيد ترجمة الكود الساخن إلى machine code بناءً على افتراضات حول الأنواع.\n5. Deoptimization: إذا خالف الكود تلك الافتراضات (تغيّر شكل الكائن مثلًا) يعود إلى الـ bytecode — وهذه عملية مكلفة.\n\nلماذا يهمّ هذا عمليًا؟\n• Hidden classes: يحتفظ V8 لكل كائن ببنية داخلية. إنشاء الكائنات بنفس الترتيب وبنفس الخصائص يبقيها تتشارك نفس الـ hidden class، أما إضافة خصائص لاحقًا بترتيب مختلف فيكسر التحسين.\n• Inline caching: تكرار استدعاء دالة بنفس أنواع المدخلات يجعلها أسرع كثيرًا؛ الدوال متعددة الأشكال (polymorphic) أبطأ.\n• تجنّب delete على الخصائص ومزج الأنواع في المصفوفة نفسها، فكلاهما يضرّ بالتحسين.\n\nلكن التحذير الأهم: هذه تفاصيل تخصّ المسارات الساخنة فعلًا. في التطبيقات العادية يكون العنق في الشبكة أو في DOM لا في المحرك، لذلك القياس أولًا.',
      en: 'The pipeline inside a modern engine such as V8:\n\n1. Parsing — source text becomes an Abstract Syntax Tree. V8 parses lazily, so a function body is not fully parsed until it is called.\n2. Ignition — an interpreter turns the AST into bytecode and starts executing immediately, so startup is fast.\n3. Profiling — the engine watches which code is hot and records the actual types flowing through it.\n4. TurboFan — an optimising compiler recompiles hot code into machine code based on assumptions about those types.\n5. Deoptimization — if the code violates those assumptions (the object shape changes, say) it falls back to bytecode, which is expensive.\n\nWhy does this matter in practice?\n• Hidden classes: V8 tracks an internal shape per object. Creating objects with the same properties in the same order keeps them sharing a hidden class; adding properties later in varying order breaks the optimisation.\n• Inline caching: calling a function repeatedly with the same argument types makes it much faster; polymorphic call sites are slower.\n• Avoid delete on properties and mixed types within one array — both hurt optimisation.\n\nThe bigger caveat though: these details only matter on genuinely hot paths. In typical applications the bottleneck is the network or the DOM, not the engine, so measure first.',
    },
  },
  {
    id: 'js-memory-management',
    difficulty: advanced,
    question: {
      ar: 'كيف تُدار الذاكرة في JavaScript وكيف يعمل الـ Garbage Collector؟',
      en: 'How is memory managed in JavaScript and how does garbage collection work?',
    },
    answer: {
      ar: 'الذاكرة تُخصَّص تلقائيًا عند إنشاء القيم، وتُحرَّر تلقائيًا عبر جامع القمامة عندما تصبح القيمة غير قابلة للوصول.\n\nالخوارزمية المستخدمة هي Mark-and-Sweep وليست عدّ المراجع: يبدأ المحرك من مجموعة الجذور (النطاق العام، الـ call stack)، ويعلّم كل ما يمكن الوصول إليه منها، ثم يحرّر ما لم يُعلَّم. لهذا لا تسبب المراجع الدائرية تسريبًا في JavaScript.\n\nويستخدم V8 تقسيمًا إلى أجيال:\n• Young generation: تُجمَّع كثيرًا وبسرعة (Scavenger)، لأن معظم الكائنات تموت صغيرة.\n• Old generation: تُجمَّع أقل وبتكلفة أعلى، مع تعليم تدريجي ومتزامن لتقليل توقف التنفيذ.\n\nما يترتب على ذلك عمليًا:\n• "غير قابل للوصول" وليس "غير مستخدم": كائن ما زال يُشار إليه من مصفوفة منسية لن يُحرَّر أبدًا.\n• الـ GC يوقف تنفيذ JavaScript في بعض مراحله، لذلك ضغط الذاكرة يظهر كتقطّع في الأداء لا كبطء ثابت.\n• تقليل التخصيص داخل الحلقات الساخنة يقلّل ضغط الـ GC.\n• لا يمكن استدعاء الـ GC يدويًا في كود الإنتاج، والاعتماد على توقيته خطأ.',
      en: 'Memory is allocated automatically when values are created and freed automatically by the garbage collector once a value becomes unreachable.\n\nThe algorithm is mark-and-sweep, not reference counting: the engine starts from a set of roots (the global scope, the call stack), marks everything reachable from them, and frees what is not marked. This is why circular references do not leak in JavaScript.\n\nV8 also splits the heap by generation:\n• Young generation — collected often and cheaply (Scavenger), because most objects die young.\n• Old generation — collected less often and more expensively, with incremental and concurrent marking to shorten pauses.\n\nWhat follows in practice:\n• The criterion is "unreachable", not "unused": an object still referenced by a forgotten array is never freed.\n• GC pauses JavaScript during parts of its work, so memory pressure shows up as jitter rather than uniform slowness.\n• Allocating less inside hot loops reduces GC pressure.\n• You cannot trigger GC from production code, and relying on its timing is a mistake.',
    },
  },
  {
    id: 'js-memory-leaks',
    difficulty: advanced,
    question: {
      ar: 'ما هي أسباب تسريب الذاكرة في JavaScript وكيف تتجنبها؟',
      en: 'What causes memory leaks in JavaScript and how do you avoid them?',
    },
    answer: {
      ar: 'التسريب يحدث عندما يبقى مرجع إلى بيانات لم نعد نحتاجها، فلا يستطيع الـ GC تحريرها.\n\nالأسباب الشائعة:\n\n1. مستمعو أحداث لم تتم إزالتهم — خصوصًا على window أو document:\n```js\nuseEffect(() => {\n  const onScroll = () => {};\n  window.addEventListener("scroll", onScroll);\n  return () => window.removeEventListener("scroll", onScroll);  // ضروري\n}, []);\n```\n2. مؤقتات لم تُلغَ: setInterval يبقي الـ callback وكل ما يحيط به حيًا إلى الأبد.\n3. cache أو مصفوفة عامة تنمو بلا حد.\n4. مراجع إلى عناصر DOM مُزالة (detached DOM nodes) محفوظة في متغير.\n5. closures تحتفظ بكائنات كبيرة دون حاجة.\n6. اشتراكات (subscriptions) أو WebSockets أو observers لم تُلغَ.\n\nالأدوات: تبويب Memory في DevTools — قارن بين لقطتين (heap snapshots) وابحث عمّا يزداد، واستخدم Allocation instrumentation لتتبّع مصدر التخصيص. وفي React ابحث عن تحذير "update on unmounted component" فهو مؤشر متكرر.\n\nوأدوات وقائية: WeakMap وWeakSet لتخزين بيانات مرتبطة بكائنات دون منع تحريرها، وAbortController لإلغاء مجموعة مستمعين دفعة واحدة، وFinalizationRegistry للتشخيص فقط لا للمنطق.',
      en: 'A leak happens when a reference to data you no longer need stays alive, so the GC cannot reclaim it.\n\nThe common causes:\n\n1. Event listeners that were never removed, especially on window or document:\n```js\nuseEffect(() => {\n  const onScroll = () => {};\n  window.addEventListener("scroll", onScroll);\n  return () => window.removeEventListener("scroll", onScroll);  // essential\n}, []);\n```\n2. Timers that were never cleared: setInterval keeps its callback — and everything it closes over — alive forever.\n3. A global cache or array that grows without bound.\n4. References to removed DOM elements (detached DOM nodes) held in a variable.\n5. Closures retaining large objects unnecessarily.\n6. Subscriptions, WebSockets or observers that were never torn down.\n\nThe tools: the Memory tab in DevTools — diff two heap snapshots and look for what keeps growing, and use allocation instrumentation to find where objects come from. In React, the "update on unmounted component" warning is a recurring signal.\n\nPreventive tools: WeakMap and WeakSet to associate data with objects without pinning them, AbortController to remove a whole group of listeners at once, and FinalizationRegistry for diagnostics only — never for logic.',
    },
  },
  {
    id: 'js-advanced-closures',
    difficulty: advanced,
    question: {
      ar: 'ما هي المشاكل المتقدمة المرتبطة بالـ Closures؟',
      en: 'What are the advanced pitfalls associated with closures?',
    },
    answer: {
      ar: 'ثلاث مشاكل تتكرر في المقابلات وفي الكود الحقيقي:\n\n1. التقاط المتغير في الحلقات:\n```js\nfor (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);   // 3, 3, 3\n}\nfor (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);   // 0, 1, 2\n}\n```\nالسبب: var لها نطاق واحد مشترك، بينما let تنشئ ربطًا جديدًا لكل دورة.\n\n2. Stale closures: دالة التقطت قيمة عند إنشائها وما زالت تستخدمها رغم تغيّر القيمة. هذا أشهر مصدر للأخطاء في React:\n```js\nuseEffect(() => {\n  const id = setInterval(() => setCount(count + 1), 1000);  // count مجمّد\n  return () => clearInterval(id);\n}, []);\n\n// الصحيح\nsetCount((current) => current + 1);\n```\n\n3. الاحتفاظ غير المقصود بالذاكرة: الـ closure تحتفظ بالنطاق كاملًا وليس بالمتغير المستخدم فقط في بعض الحالات، فقد تُبقي كائنًا ضخمًا حيًا دون أن تحتاجه. الحل هو استخراج ما تحتاجه فقط قبل إنشاء الـ closure.\n\nونقطة أخيرة: كل الدوال التي تُعرَّف داخل نفس الاستدعاء تتشارك نفس الـ closure لا نسخًا منفصلة — وهذا بالضبط ما يجعل نمط الـ counter يعمل.',
      en: 'Three problems that recur both in interviews and in real code:\n\n1. Variable capture in loops:\n```js\nfor (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);   // 3, 3, 3\n}\nfor (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);   // 0, 1, 2\n}\n```\nThe reason: var has one shared binding, while let creates a fresh binding per iteration.\n\n2. Stale closures: a function captured a value when it was created and keeps using it after the value changed. This is the single most common React bug:\n```js\nuseEffect(() => {\n  const id = setInterval(() => setCount(count + 1), 1000);  // count is frozen\n  return () => clearInterval(id);\n}, []);\n\n// correct\nsetCount((current) => current + 1);\n```\n\n3. Unintended retention: a closure can keep an entire scope alive rather than just the variable it uses, keeping a large object reachable for no reason. The fix is to extract only what you need before creating the closure.\n\nOne final point: all functions defined within the same invocation share one closure rather than separate copies — which is exactly what makes the counter pattern work.',
    },
  },
  {
    id: 'js-prototype-internals',
    difficulty: advanced,
    question: {
      ar: 'اشرح التفاصيل الداخلية للـ Prototypes: __proto__ و Object.create و instanceof.',
      en: 'Explain prototype internals: __proto__, Object.create and instanceof.',
    },
    answer: {
      ar: 'التمييز الأساسي:\n• Function.prototype: خاصية على الدالة المُنشِئة، وهي الكائن الذي ستشير إليه النسخ.\n• object.__proto__ (الأصح: Object.getPrototypeOf(obj)): الرابط الفعلي من الكائن إلى نموذجه.\n\n```js\nfunction User() {}\nconst u = new User();\n\nObject.getPrototypeOf(u) === User.prototype;   // true\nUser.prototype.constructor === User;           // true\n```\n\nماذا يفعل new بالضبط؟ أربع خطوات:\n1. إنشاء كائن فارغ.\n2. ربط __proto__ الخاص به بـ Constructor.prototype.\n3. تنفيذ المُنشئ وthis يشير للكائن الجديد.\n4. إعادة الكائن، إلا إذا أعاد المُنشئ كائنًا آخر صراحةً.\n\nObject.create ينشئ كائنًا بنموذج محدد مباشرة:\n```js\nconst base = { greet() { return "hi"; } };\nconst obj = Object.create(base);\nconst bare = Object.create(null);   // بلا أي prototype — مفيد كـ map نظيف\n```\n\ninstanceof لا يفحص النوع بل يمشي في سلسلة الـ prototype باحثًا عن Constructor.prototype. ولهذا يفشل عبر السياقات (iframes) لأن لكل سياق نسخته من الأصناف المدمجة؛ البديل الأأمن هناك هو Array.isArray أو Object.prototype.toString.call.\n\nوملاحظة أداء: Object.setPrototypeOf على كائن موجود يبطل تحسينات المحرك بشدة — أنشئ الكائن بنموذجه الصحيح من البداية.',
      en: 'The core distinction:\n• Function.prototype is a property on the constructor — the object instances will point to.\n• object.__proto__ (properly: Object.getPrototypeOf(obj)) is the actual link from an object to its prototype.\n\n```js\nfunction User() {}\nconst u = new User();\n\nObject.getPrototypeOf(u) === User.prototype;   // true\nUser.prototype.constructor === User;           // true\n```\n\nWhat does new actually do? Four steps:\n1. Create an empty object.\n2. Link its prototype to Constructor.prototype.\n3. Run the constructor with this bound to the new object.\n4. Return the object, unless the constructor explicitly returns a different object.\n\nObject.create builds an object with a given prototype directly:\n```js\nconst base = { greet() { return "hi"; } };\nconst obj = Object.create(base);\nconst bare = Object.create(null);   // no prototype at all — a clean map\n```\n\ninstanceof does not check a type; it walks the prototype chain looking for Constructor.prototype. That is why it fails across realms (iframes), where each realm has its own built-ins — there the safer checks are Array.isArray or Object.prototype.toString.call.\n\nA performance note: Object.setPrototypeOf on an existing object severely deoptimises it — create the object with the right prototype from the start.',
    },
  },
  {
    id: 'js-generators',
    difficulty: advanced,
    question: {
      ar: 'ما هي Generators في JavaScript؟',
      en: 'What are generators in JavaScript?',
    },
    answer: {
      ar: 'الـ generator دالة يمكن إيقافها واستئنافها، تُعرَّف بـ function* وتستخدم yield.\n\n```js\nfunction* idGenerator() {\n  let id = 1;\n  while (true) yield id++;          // لانهائية لكنها كسولة\n}\n\nconst ids = idGenerator();\nids.next();                          // { value: 1, done: false }\nids.next();                          // { value: 2, done: false }\n```\n\nاستدعاء الـ generator لا ينفّذ جسمها، بل يعيد كائن iterator. كل next() تنفّذ حتى الـ yield التالية ثم تتوقف محتفظة بالحالة كاملة.\n\nوالاتصال ثنائي الاتجاه: يمكن تمرير قيمة إلى next() فتصبح نتيجة تعبير yield داخل الدالة.\n\nالاستخدامات العملية:\n• تسلسلات كسولة أو لانهائية دون استهلاك ذاكرة.\n• معالجة بيانات على دفعات.\n• تنفيذ iterators مخصصة بسهولة عبر [Symbol.iterator].\n• أساس مكتبات إدارة التأثيرات الجانبية مثل redux-saga، حيث يُستخدم الإيقاف والاستئناف للتحكم في التدفق والاختبار.\n\nملاحظة صادقة: قبل async/await كانت الـ generators تُستخدم لإدارة الكود غير المتزامن (مثل co)، أما اليوم فاستخدامها في كود التطبيقات العادي محدود — لكن فهمها مطلوب لقراءة المكتبات ولأسئلة المقابلات.',
      en: 'A generator is a function that can pause and resume. You declare it with function* and pause it with yield.\n\n```js\nfunction* idGenerator() {\n  let id = 1;\n  while (true) yield id++;          // infinite but lazy\n}\n\nconst ids = idGenerator();\nids.next();                          // { value: 1, done: false }\nids.next();                          // { value: 2, done: false }\n```\n\nCalling a generator does not run its body — it returns an iterator object. Each next() runs until the next yield and then pauses, preserving the entire local state.\n\nCommunication is two-way: a value passed to next() becomes the result of the yield expression inside the function.\n\nPractical uses:\n• Lazy or infinite sequences with no memory cost.\n• Processing data in batches.\n• Implementing custom iterators easily via [Symbol.iterator].\n• The foundation of side-effect libraries such as redux-saga, where pause/resume gives controllable, testable flow.\n\nAn honest note: before async/await, generators were used to manage asynchronous flow (libraries like co). Today their use in ordinary application code is limited — but understanding them is needed to read libraries and to answer interview questions.',
    },
  },
  {
    id: 'js-iterators',
    difficulty: advanced,
    question: {
      ar: 'ما هو بروتوكول الـ Iterator في JavaScript؟',
      en: 'What is the iterator protocol in JavaScript?',
    },
    answer: {
      ar: 'بروتوكولان متكاملان:\n\n1. Iterable: كائن يملك دالة [Symbol.iterator] تعيد iterator.\n2. Iterator: كائن يملك next() تعيد { value, done }.\n\nأي كائن ينفّذ هذا البروتوكول يعمل تلقائيًا مع for...of والـ spread والتفكيك وArray.from.\n\n```js\nclass Range {\n  constructor(start, end) { this.start = start; this.end = end; }\n\n  *[Symbol.iterator]() {\n    for (let i = this.start; i <= this.end; i++) yield i;\n  }\n}\n\n[...new Range(1, 5)];                 // [1,2,3,4,5]\nfor (const n of new Range(1, 3)) {}   // يعمل مباشرة\n```\n\nالكائنات المدمجة القابلة للتكرار: Array وString وMap وSet وNodeList وarguments. والكائن العادي ليس قابلًا للتكرار، ولهذا يفشل for...of عليه — البديل Object.entries.\n\nوهناك النسخة غير المتزامنة: Symbol.asyncIterator مع for await...of، وهي مفيدة جدًا لقراءة الـ streams أو صفحات الـ API واحدة تلو الأخرى:\n```js\nfor await (const chunk of stream) {\n  process(chunk);\n}\n```\n\nالقيمة الحقيقية للبروتوكول: يسمح لك بجعل أي بنية بيانات مخصصة تتكامل مع صياغة اللغة القياسية بدل واجهة خاصة.',
      en: 'Two complementary protocols:\n\n1. Iterable — an object with a [Symbol.iterator] method that returns an iterator.\n2. Iterator — an object with a next() method returning { value, done }.\n\nAny object implementing this works automatically with for...of, spread, destructuring and Array.from.\n\n```js\nclass Range {\n  constructor(start, end) { this.start = start; this.end = end; }\n\n  *[Symbol.iterator]() {\n    for (let i = this.start; i <= this.end; i++) yield i;\n  }\n}\n\n[...new Range(1, 5)];                 // [1,2,3,4,5]\nfor (const n of new Range(1, 3)) {}   // works directly\n```\n\nBuilt-in iterables: Array, String, Map, Set, NodeList, arguments. A plain object is not iterable, which is why for...of fails on one — use Object.entries instead.\n\nThere is an async counterpart too: Symbol.asyncIterator with for await...of, which is excellent for consuming streams or paginated APIs one page at a time:\n```js\nfor await (const chunk of stream) {\n  process(chunk);\n}\n```\n\nThe real value of the protocol is that it lets a custom data structure integrate with the language\'s standard syntax instead of exposing a bespoke API.',
    },
  },
  {
    id: 'js-symbols',
    difficulty: advanced,
    question: {
      ar: 'ما هو الـ Symbol في JavaScript؟',
      en: 'What are symbols in JavaScript?',
    },
    answer: {
      ar: 'Symbol نوع أولي أُضيف في ES6، وكل قيمة منه فريدة تمامًا حتى لو تطابق الوصف.\n\n```js\nconst a = Symbol("id");\nconst b = Symbol("id");\na === b;                    // false\n```\n\nاستخداماته:\n\n1. مفاتيح لا تتعارض مع غيرها، خصوصًا عند إضافة بيانات إلى كائن لا تملكه:\n```js\nconst META = Symbol("meta");\nobj[META] = { internal: true };\n```\nمفاتيح الـ Symbol لا تظهر في Object.keys ولا JSON.stringify ولا for...in — فهي شبه مخفية (لكنها ليست سرية: Object.getOwnPropertySymbols تكشفها).\n\n2. الرموز المعروفة (well-known symbols) التي تعدّل سلوك اللغة نفسها:\n```js\nclass Collection {\n  *[Symbol.iterator]() { yield* this.items; }      // يجعله قابلًا للتكرار\n  get [Symbol.toStringTag]() { return "Collection"; }\n}\n```\nومنها أيضًا Symbol.asyncIterator وSymbol.hasInstance وSymbol.toPrimitive.\n\n3. السجل العام: Symbol.for("key") يعيد نفس الرمز عبر كل أجزاء التطبيق.\n\nمتى أستخدمه فعليًا؟ نادرًا في كود التطبيقات، وكثيرًا عند كتابة مكتبات أو عند الحاجة لبيانات وصفية لا تتداخل مع بيانات المستخدم.',
      en: 'Symbol is a primitive type added in ES6, and every symbol value is unique even if the descriptions match.\n\n```js\nconst a = Symbol("id");\nconst b = Symbol("id");\na === b;                    // false\n```\n\nIts uses:\n\n1. Collision-free keys, especially when attaching data to an object you do not own:\n```js\nconst META = Symbol("meta");\nobj[META] = { internal: true };\n```\nSymbol keys do not appear in Object.keys, JSON.stringify or for...in — they are semi-hidden (though not secret: Object.getOwnPropertySymbols reveals them).\n\n2. Well-known symbols that customise language behaviour:\n```js\nclass Collection {\n  *[Symbol.iterator]() { yield* this.items; }      // makes it iterable\n  get [Symbol.toStringTag]() { return "Collection"; }\n}\n```\nOthers include Symbol.asyncIterator, Symbol.hasInstance and Symbol.toPrimitive.\n\n3. The global registry: Symbol.for("key") returns the same symbol everywhere in the application.\n\nWhen do I actually use them? Rarely in application code, often when writing libraries or when you need metadata that cannot collide with user data.',
    },
  },
  {
    id: 'js-weakmap-weakset',
    difficulty: advanced,
    question: {
      ar: 'ما هو WeakMap و WeakSet ومتى تستخدمهما؟',
      en: 'What are WeakMap and WeakSet, and when do you use them?',
    },
    answer: {
      ar: 'بنيتان تحتفظان بمراجع ضعيفة: إذا لم يعد هناك أي مرجع آخر للمفتاح، يستطيع الـ GC تحريره تلقائيًا مع القيمة المرتبطة به.\n\nالقيود مقصودة:\n• المفاتيح يجب أن تكون كائنات (أو Symbols فريدة)، لا قيمًا أولية.\n• غير قابلة للتكرار، ولا تملك size ولا clear.\n\nلماذا؟ لأن جامع القمامة قد يزيل عنصرًا في أي لحظة، فلا يمكن تقديم تعداد ثابت.\n\n```js\nconst metadata = new WeakMap();\n\nfunction attach(element, data) {\n  metadata.set(element, data);        // لن يمنع تحرير العنصر\n}\n// عند إزالة العنصر من DOM وفقدان كل مراجعه، يُحرَّر هو وبياناته معًا\n```\n\nمقارنة عملية: لو استخدمت Map عادية هنا، لبقي عنصر DOM حيًا إلى الأبد لأن الـ Map تحتفظ بمرجع قوي — وهذا تسريب ذاكرة كلاسيكي.\n\nحالات الاستخدام:\n• ربط بيانات إضافية بكائنات لا تملكها (عناصر DOM، كائنات من مكتبة).\n• cache مفتاحه كائن ولا تريده أن يمنع التحرير.\n• تتبّع كائنات تمت معالجتها (WeakSet) لتجنّب التكرار.\n• حالة خاصة في الأصناف قبل وجود الحقول التي تبدأ بـ #.',
      en: 'Both hold weak references: if nothing else references the key, the garbage collector can reclaim it along with its associated value.\n\nThe restrictions are deliberate:\n• Keys must be objects (or unique symbols), not primitives.\n• They are not iterable and have no size or clear.\n\nWhy? Because an entry can disappear at any moment, so a stable enumeration cannot be offered.\n\n```js\nconst metadata = new WeakMap();\n\nfunction attach(element, data) {\n  metadata.set(element, data);        // does not keep the element alive\n}\n// once the element leaves the DOM and loses its references, it and its data are freed together\n```\n\nThe contrast: with a regular Map, that DOM element would stay alive forever because a Map holds a strong reference — a classic memory leak.\n\nUse cases:\n• Associating extra data with objects you do not own (DOM elements, objects from a library).\n• A cache keyed by object that must not prevent collection.\n• Tracking already-processed objects (WeakSet) to avoid reprocessing.\n• Private state in classes, before # fields existed.',
    },
  },
  {
    id: 'js-proxy-reflect',
    difficulty: advanced,
    question: {
      ar: 'ما هو Proxy و Reflect في JavaScript؟',
      en: 'What are Proxy and Reflect in JavaScript?',
    },
    answer: {
      ar: 'الـ Proxy كائن يغلّف كائنًا آخر ويعترض العمليات الأساسية عليه: القراءة، الكتابة، الحذف، فحص الوجود، وغيرها.\n\n```js\nconst target = { name: "Sara", role: "admin" };\n\nconst guarded = new Proxy(target, {\n  get(obj, prop, receiver) {\n    if (prop.startsWith?.("_")) throw new Error("خاصية خاصة");\n    return Reflect.get(obj, prop, receiver);\n  },\n  set(obj, prop, value, receiver) {\n    if (prop === "role" && value !== "admin" && value !== "user") {\n      throw new TypeError("دور غير صالح");\n    }\n    return Reflect.set(obj, prop, value, receiver);\n  },\n});\n```\n\nوReflect كائن يوفّر الدوال الافتراضية لهذه العمليات نفسها، لذلك يُستخدم داخل الـ traps لتنفيذ السلوك الأصلي بشكل صحيح — خصوصًا أنه يمرّر receiver بشكل سليم مع الوراثة والـ getters، ولأنه يعيد قيمة منطقية بدل رمي استثناء.\n\nاستخدامات حقيقية:\n• التفاعلية (reactivity) في Vue 3 مبنية على Proxy.\n• التحقق التلقائي من الصحة، والتسجيل والتتبّع، والوصول الكسول.\n• كائنات وهمية (mocks) في الاختبارات.\n• واجهات ديناميكية مثل مولّدات الاستعلامات.\n\nالتكلفة: الـ Proxy أبطأ من الوصول المباشر ولا يُحسَّن بنفس الكفاءة، لذلك لا تستخدمه في المسارات الساخنة دون قياس.',
      en: 'A Proxy wraps an object and intercepts fundamental operations on it: reads, writes, deletes, existence checks and more.\n\n```js\nconst target = { name: "Sara", role: "admin" };\n\nconst guarded = new Proxy(target, {\n  get(obj, prop, receiver) {\n    if (prop.startsWith?.("_")) throw new Error("private property");\n    return Reflect.get(obj, prop, receiver);\n  },\n  set(obj, prop, value, receiver) {\n    if (prop === "role" && value !== "admin" && value !== "user") {\n      throw new TypeError("invalid role");\n    }\n    return Reflect.set(obj, prop, value, receiver);\n  },\n});\n```\n\nReflect provides the default implementations of those same operations, so you call it inside traps to perform the original behaviour correctly — particularly because it forwards the receiver properly with inheritance and getters, and returns a boolean instead of throwing.\n\nReal uses:\n• Vue 3\'s reactivity system is built on Proxy.\n• Automatic validation, logging and tracing, lazy access.\n• Mock objects in tests.\n• Dynamic APIs such as query builders.\n\nThe cost: proxies are slower than direct access and are not optimised the same way, so do not put one on a hot path without measuring.',
    },
  },
  {
    id: 'js-advanced-async-patterns',
    difficulty: advanced,
    question: {
      ar: 'ما هي الأنماط المتقدمة للتعامل مع العمليات غير المتزامنة؟',
      en: 'What advanced patterns do you use for asynchronous work?',
    },
    answer: {
      ar: 'أربعة أنماط أحتاجها في الكود الحقيقي:\n\n1. الإلغاء عبر AbortController — ضروري في البحث الحي وعند تفكيك المكوّنات:\n```js\nconst controller = new AbortController();\nfetch(url, { signal: controller.signal });\ncontroller.abort();\n```\n\n2. تحديد عدد العمليات المتوازية (concurrency limit): Promise.all على ألف عنصر يفتح ألف طلب دفعة واحدة ويخنق الخادم. الحل تنفيذ على دفعات أو pool محدود:\n```js\nasync function mapLimit(items, limit, fn) {\n  const results = [];\n  const executing = new Set();\n  for (const item of items) {\n    const p = Promise.resolve().then(() => fn(item));\n    results.push(p);\n    executing.add(p);\n    p.finally(() => executing.delete(p));\n    if (executing.size >= limit) await Promise.race(executing);\n  }\n  return Promise.all(results);\n}\n```\n\n3. إعادة المحاولة مع exponential backoff وjitter للتعامل مع الفشل المؤقت، وللعمليات القابلة لإعادة التنفيذ فقط.\n\n4. إزالة الطلبات المكررة (deduplication): إذا طُلبت نفس البيانات مرتين في نفس اللحظة، أعد نفس الـ Promise بدل إرسال طلبين — وهذا ما تفعله مكتبات مثل React Query داخليًا.\n\nوقاعدة عامة: كل استدعاء شبكة يجب أن يكون له مهلة، وإلا فقد ينتظر إلى الأبد.',
      en: 'Four patterns I genuinely need in production code:\n\n1. Cancellation with AbortController — essential for type-ahead search and component unmount:\n```js\nconst controller = new AbortController();\nfetch(url, { signal: controller.signal });\ncontroller.abort();\n```\n\n2. Bounded concurrency: Promise.all over a thousand items opens a thousand requests at once and overwhelms the server. Process in batches or with a limited pool:\n```js\nasync function mapLimit(items, limit, fn) {\n  const results = [];\n  const executing = new Set();\n  for (const item of items) {\n    const p = Promise.resolve().then(() => fn(item));\n    results.push(p);\n    executing.add(p);\n    p.finally(() => executing.delete(p));\n    if (executing.size >= limit) await Promise.race(executing);\n  }\n  return Promise.all(results);\n}\n```\n\n3. Retry with exponential backoff and jitter for transient failures — and only for idempotent operations.\n\n4. Request deduplication: if the same data is requested twice concurrently, return the same promise rather than firing two requests. That is what libraries like React Query do internally.\n\nAnd a general rule: every network call needs a timeout, or it may wait forever.',
    },
  },
  {
    id: 'js-race-conditions',
    difficulty: advanced,
    question: {
      ar: 'ما هي race conditions في JavaScript وكيف تتعامل معها؟',
      en: 'What are race conditions in JavaScript and how do you handle them?',
    },
    answer: {
      ar: 'رغم أن JavaScript أحادية الخيط، تحدث race conditions لأن العمليات غير المتزامنة قد تنتهي بترتيب غير متوقع.\n\nالمثال الأشهر: البحث أثناء الكتابة. يكتب المستخدم "ab" ثم "abc"، لكن رد "ab" يصل متأخرًا فيستبدل نتائج "abc" — ويرى المستخدم نتائج خاطئة.\n\nثلاثة حلول:\n\n1. الإلغاء — الأنظف:\n```js\nuseEffect(() => {\n  const controller = new AbortController();\n  fetch(`/search?q=${query}`, { signal: controller.signal })\n    .then((r) => r.json())\n    .then(setResults)\n    .catch((e) => { if (e.name !== "AbortError") setError(e); });\n  return () => controller.abort();\n}, [query]);\n```\n\n2. التحقق من الحداثة: احفظ معرّف الطلب الأخير وتجاهل أي رد لا يطابقه.\n\n3. علم الإلغاء في دالة التنظيف:\n```js\nlet cancelled = false;\n// ...\nif (!cancelled) setResults(data);\nreturn () => { cancelled = true; };\n```\n\nحالات أخرى من نفس العائلة:\n• تحديث الحالة بناءً على قيمة قديمة — الحل الصيغة الدالية setState(prev => ...).\n• إرسال نموذج مرتين بنقر مزدوج — الحل تعطيل الزر وidempotency key.\n• كتابات متزامنة على نفس السجل — الحل التحكم في التزامن (optimistic locking) على الخادم.\n\nالخلاصة: افترض دائمًا أن الردود قد تصل بترتيب غير الترتيب الذي أرسلتها به.',
      en: 'Even though JavaScript is single-threaded, race conditions occur because asynchronous operations can finish in an unexpected order.\n\nThe classic example is type-ahead search. The user types "ab" then "abc", but the response for "ab" arrives late and overwrites the results for "abc" — so the user sees the wrong data.\n\nThree solutions:\n\n1. Cancellation — the cleanest:\n```js\nuseEffect(() => {\n  const controller = new AbortController();\n  fetch(`/search?q=${query}`, { signal: controller.signal })\n    .then((r) => r.json())\n    .then(setResults)\n    .catch((e) => { if (e.name !== "AbortError") setError(e); });\n  return () => controller.abort();\n}, [query]);\n```\n\n2. Freshness check: keep the id of the latest request and ignore any response that does not match.\n\n3. A cancelled flag in the cleanup function:\n```js\nlet cancelled = false;\n// ...\nif (!cancelled) setResults(data);\nreturn () => { cancelled = true; };\n```\n\nOther cases in the same family:\n• Updating state from a stale value — fix it with the functional form setState(prev => ...).\n• Double-submitting a form on a double click — disable the button and use an idempotency key.\n• Concurrent writes to the same record — handle it server-side with optimistic locking.\n\nThe takeaway: always assume responses can arrive in a different order from the one you sent them in.',
    },
  },
  {
    id: 'js-concurrency',
    difficulty: advanced,
    question: {
      ar: 'كيف تتعامل JavaScript مع التزامن (concurrency) رغم أنها أحادية الخيط؟',
      en: 'How does JavaScript handle concurrency despite being single-threaded?',
    },
    answer: {
      ar: 'التمييز الأساسي: التزامن (concurrency) يعني إدارة عدة مهام متداخلة في الوقت، والتوازي (parallelism) يعني تنفيذها فعليًا في نفس اللحظة. JavaScript تحقق التزامن ولا تحقق التوازي في الخيط الرئيسي.\n\nكيف؟ عبر الـ event loop: تُسلَّم العمليات البطيئة (شبكة، مؤقتات، ملفات) إلى بيئة التشغيل، ويستمر الخيط في تنفيذ كود آخر، ثم تعود النتائج على شكل callbacks.\n\nالنتيجة المهمة: أثناء انتظار طلب شبكة لا يكون هناك thread محجوز — ولهذا يستطيع Node.js خدمة آلاف الاتصالات بخيط واحد.\n\nوللتوازي الحقيقي توجد وسائل منفصلة:\n• Web Workers في المتصفح.\n• Worker Threads في Node.js.\n• Cluster أو عمليات منفصلة لتوزيع الحمل على الأنوية.\n• SharedArrayBuffer مع Atomics لمشاركة الذاكرة بين الخيوط.\n\nوملاحظة تصميمية مهمة: لأن الكود الجاري تنفيذه لا يُقاطَع أبدًا في منتصفه (run-to-completion)، فإن JavaScript لا تعاني من مشاكل القفل والتزاحم على الذاكرة المعروفة في اللغات متعددة الخيوط. المقابل لذلك أن أي عملية حسابية طويلة تحجب كل شيء، لأن لا أحد يستطيع مقاطعتها.',
      en: 'The key distinction: concurrency means managing several interleaved tasks over time; parallelism means actually executing them at the same instant. JavaScript gives you concurrency, not parallelism, on the main thread.\n\nHow? Through the event loop: slow operations (network, timers, files) are handed to the runtime, the thread continues executing other code, and results come back as callbacks.\n\nThe important consequence: while a network request is in flight no thread is occupied — which is why Node.js can serve thousands of connections on one thread.\n\nFor genuine parallelism there are separate mechanisms:\n• Web Workers in the browser.\n• Worker Threads in Node.js.\n• Cluster or separate processes to use multiple cores.\n• SharedArrayBuffer with Atomics for shared memory between threads.\n\nAn important design consequence: because executing code is never interrupted mid-way (run-to-completion), JavaScript avoids the locking and data-race problems familiar from multi-threaded languages. The trade-off is that any long computation blocks everything, because nothing can preempt it.',
    },
  },
  {
    id: 'js-web-workers',
    difficulty: advanced,
    question: {
      ar: 'ما هي Web Workers ومتى تستخدمها؟',
      en: 'What are Web Workers and when do you use them?',
    },
    answer: {
      ar: 'Web Workers تسمح بتشغيل JavaScript في خيط منفصل عن الخيط الرئيسي، فلا تتجمّد الواجهة أثناء المعالجة الثقيلة.\n\n```js\n// main.js\nconst worker = new Worker("./heavy.js", { type: "module" });\nworker.postMessage({ rows: bigDataset });\nworker.onmessage = (e) => render(e.data);\n\n// heavy.js\nself.onmessage = (e) => {\n  self.postMessage(analyse(e.data.rows));\n};\n```\n\nالقيود المهمة:\n• لا وصول إلى DOM ولا window ولا document من داخل الـ worker.\n• التواصل عبر الرسائل فقط، والبيانات تُنسخ (structured clone) — وهذا مكلف للبيانات الضخمة. البديل: Transferable objects لنقل ملكية ArrayBuffer دون نسخ، أو SharedArrayBuffer.\n• إنشاء worker له تكلفة، فلا تنشئ واحدًا لكل عملية صغيرة.\n\nمتى أستخدمها؟ معالجة أو تحليل بيانات ضخمة، تشفير، معالجة صور، تحليل ملفات كبيرة، حسابات خرائط أو رسوم بيانية معقدة.\n\nومتى لا؟ لعمليات الشبكة — فهي غير حاجبة أصلًا، وWeb Worker هنا تعقيد بلا فائدة.\n\nوهناك أنواع أخرى تستحق الذكر: Shared Workers للمشاركة بين تبويبات، وService Workers وهي فئة مختلفة تمامًا تُستخدم كوسيط شبكة للعمل دون اتصال وللتخزين المؤقت.',
      en: 'Web Workers run JavaScript on a thread separate from the main one, so the UI does not freeze during heavy work.\n\n```js\n// main.js\nconst worker = new Worker("./heavy.js", { type: "module" });\nworker.postMessage({ rows: bigDataset });\nworker.onmessage = (e) => render(e.data);\n\n// heavy.js\nself.onmessage = (e) => {\n  self.postMessage(analyse(e.data.rows));\n};\n```\n\nThe important limitations:\n• No access to the DOM, window or document from inside a worker.\n• Communication is by message only, and data is copied (structured clone), which is expensive for large payloads. The alternatives are transferable objects, which move ownership of an ArrayBuffer without copying, or SharedArrayBuffer.\n• Creating a worker costs something, so do not spin one up per small task.\n\nWhen do I use them? Processing or analysing large datasets, cryptography, image manipulation, parsing big files, heavy map or chart computation.\n\nWhen not? For network work — that is already non-blocking, and a worker adds complexity for nothing.\n\nWorth mentioning too: Shared Workers, which are shared across tabs, and Service Workers, a completely different category that acts as a network proxy for offline support and caching.',
    },
  },
  {
    id: 'js-performance',
    difficulty: advanced,
    question: {
      ar: 'كيف تحسّن أداء تطبيق JavaScript في المتصفح؟',
      en: 'How do you optimise the performance of a JavaScript application in the browser?',
    },
    answer: {
      ar: 'أرتّب العمل حسب الأثر، وأبدأ دائمًا بالقياس عبر Lighthouse وتبويب Performance.\n\n1. حجم الحزمة — غالبًا أكبر مكسب:\n• code splitting وتحميل كسول للمسارات والمكوّنات الثقيلة.\n• tree shaking واستيراد ما يلزم فقط من المكتبات.\n• مراجعة الاعتماديات: استبدال مكتبة ضخمة بأخرى أخف أو بحل أصلي.\n\n2. الشبكة:\n• ضغط brotli وتفعيل HTTP/2.\n• preload للموارد الحرجة وpreconnect للنطاقات الخارجية.\n• تخزين مؤقت صحيح مع بصمات الملفات.\n\n3. الخيط الرئيسي:\n• تقسيم المهام الطويلة وتجنّب حجب الخيط أكثر من 50 مللي ثانية.\n• Web Workers للحسابات الثقيلة.\n• debounce وthrottle لأحداث التمرير والكتابة.\n\n4. التصيير:\n• تقليل عمليات reflow وrepaint، والقراءة من DOM ثم الكتابة دفعة واحدة لتجنّب layout thrashing.\n• التحريك باستخدام transform وopacity فقط لأنهما لا يسببان إعادة تخطيط.\n• virtualization للقوائم الطويلة بدل رسم آلاف العناصر.\n\n5. الصور: صيغ حديثة مثل WebP/AVIF، وأبعاد صحيحة، وlazy loading، مع تحديد العرض والارتفاع لتفادي انزياح التخطيط.\n\nوالمقاييس التي أتابعها هي Core Web Vitals: LCP وINP وCLS، لأنها تمثّل ما يشعر به المستخدم فعلًا.',
      en: 'I order the work by impact and always start by measuring with Lighthouse and the Performance tab.\n\n1. Bundle size — usually the biggest win:\n• Code splitting and lazy loading for routes and heavy components.\n• Tree shaking and importing only what you need from libraries.\n• Auditing dependencies: replace a huge library with a lighter one or a native API.\n\n2. Network:\n• Brotli compression and HTTP/2.\n• preload for critical resources, preconnect for third-party origins.\n• Correct caching with content hashes.\n\n3. Main thread:\n• Break up long tasks; avoid blocking for more than ~50ms.\n• Web Workers for heavy computation.\n• Debounce and throttle scroll and input handlers.\n\n4. Rendering:\n• Minimise reflow and repaint; batch DOM reads then writes to avoid layout thrashing.\n• Animate only transform and opacity, since they do not trigger layout.\n• Virtualise long lists instead of rendering thousands of nodes.\n\n5. Images: modern formats (WebP/AVIF), correct dimensions, lazy loading, and explicit width/height to prevent layout shift.\n\nThe metrics I track are the Core Web Vitals — LCP, INP and CLS — because they reflect what the user actually experiences.',
    },
  },
  {
    id: 'js-immutability-descriptors',
    difficulty: advanced,
    question: {
      ar: 'كيف تتحكم في قابلية تعديل الكائنات في JavaScript؟',
      en: 'How do you control object mutability in JavaScript?',
    },
    answer: {
      ar: 'ثلاثة مستويات من التقييد مدمجة في اللغة:\n\n```js\nObject.preventExtensions(obj);  // منع إضافة خصائص جديدة\nObject.seal(obj);               // + منع الحذف (التعديل ما زال مسموحًا)\nObject.freeze(obj);             // + منع التعديل\n```\n\nوللتحكم الدقيق في خاصية واحدة نستخدم property descriptors:\n```js\nObject.defineProperty(obj, "id", {\n  value: 1,\n  writable: false,     // لا يمكن تغييرها\n  enumerable: false,   // لا تظهر في Object.keys أو JSON\n  configurable: false, // لا يمكن حذفها أو إعادة تعريفها\n});\n```\n\nنقاط مهمة:\n• freeze سطحي: الكائنات المتداخلة تبقى قابلة للتعديل. للتجميد العميق تحتاج دالة تكرارية.\n• في الوضع غير الصارم تفشل محاولة التعديل بصمت؛ في الوضع الصارم ترمي TypeError — وهذا سبب إضافي لاستخدام الوضع الصارم.\n• الخصائص المعرّفة بـ defineProperty تكون افتراضيًا غير قابلة للكتابة والتعداد والتهيئة، بعكس الإسناد العادي.\n\nمتى يكون هذا مفيدًا؟ لتجميد كائنات الإعدادات والثوابت، ولاكتشاف التعديل غير المقصود مبكرًا أثناء التطوير.\n\nلكن في تطبيقات React وRedux، لا نعتمد على freeze عادة بل على أسلوب برمجي لا يعدّل الحالة (spread أو Immer)، لأن التجميد له تكلفة أداء ولا يحمي إلا مستوى واحدًا.',
      en: 'The language gives you three levels of restriction:\n\n```js\nObject.preventExtensions(obj);  // no new properties\nObject.seal(obj);               // + no deletion (modification still allowed)\nObject.freeze(obj);             // + no modification\n```\n\nFor fine-grained control over one property you use property descriptors:\n```js\nObject.defineProperty(obj, "id", {\n  value: 1,\n  writable: false,     // cannot be changed\n  enumerable: false,   // hidden from Object.keys and JSON\n  configurable: false, // cannot be deleted or redefined\n});\n```\n\nWhat matters:\n• freeze is shallow — nested objects stay mutable. A deep freeze needs a recursive helper.\n• In sloppy mode a write to a frozen property fails silently; in strict mode it throws a TypeError, which is another reason to use strict mode.\n• Properties created with defineProperty default to non-writable, non-enumerable and non-configurable, unlike ordinary assignment.\n\nWhen is this useful? Freezing configuration objects and constants, and catching accidental mutation early in development.\n\nIn React and Redux applications, though, you usually do not rely on freeze but on a non-mutating coding style (spread or Immer), because freezing costs performance and only protects one level.',
    },
  },
  {
    id: 'js-module-patterns-advanced',
    difficulty: advanced,
    question: {
      ar: 'ما هي الاعتماديات الدائرية (circular dependencies) وكيف تعالجها؟',
      en: 'What are circular dependencies and how do you deal with them?',
    },
    answer: {
      ar: 'الاعتمادية الدائرية تحدث عندما يستورد الملف A الملف B، وB يستورد A مباشرة أو عبر سلسلة.\n\nماذا يحدث فعليًا؟ في ES Modules لا تنهار الأمور فورًا، لأن الروابط حية (live bindings): تُنشأ المساحة أولًا ثم تُملأ القيم. لكن إذا استُخدمت قيمة قبل أن تُهيّأ تحصل على undefined أو ReferenceError.\n\n```js\n// a.js\nimport { b } from "./b.js";\nexport const a = "A";\nconsole.log(b);        // قد تكون undefined حسب ترتيب التحميل\n\n// b.js\nimport { a } from "./a.js";\nexport const b = "B" + a;\n```\n\nالفرق عن CommonJS: هناك يُعاد كائن module.exports جزئيًا مكتملًا، فتظهر المشكلة كخاصية مفقودة يصعب تفسيرها.\n\nكيف أعالجها؟\n1. الحل الجذري هو إعادة التصميم: غالبًا تشير الدائرة إلى مسؤوليات متشابكة. استخرج المشترك إلى وحدة ثالثة يعتمد عليها الطرفان.\n2. اقلب الاعتمادية: مرّر ما يحتاجه الطرف الآخر كوسيط بدل أن يستورده.\n3. أجّل الاستيراد بـ import() الديناميكي عند نقطة الاستخدام — حل عملي لكنه يعالج العَرَض.\n\nللاكتشاف المبكر استخدم أدوات مثل madge أو قاعدة import/no-cycle في ESLint. ومن علامات وجودها: خطأ غامض يعتمد على ترتيب الاستيراد، أو قيمة undefined تظهر فقط في بناء الإنتاج.',
      en: 'A circular dependency is when module A imports module B and B imports A, directly or through a chain.\n\nWhat actually happens? In ES Modules things do not break immediately, because bindings are live: the module space is created first and values are filled in afterwards. But if a value is used before it is initialised you get undefined or a ReferenceError.\n\n```js\n// a.js\nimport { b } from "./b.js";\nexport const a = "A";\nconsole.log(b);        // may be undefined depending on load order\n\n// b.js\nimport { a } from "./a.js";\nexport const b = "B" + a;\n```\n\nThe difference in CommonJS: you get a partially populated module.exports object, so the symptom is a mysteriously missing property.\n\nHow do I handle it?\n1. The real fix is redesign — a cycle usually signals tangled responsibilities. Extract the shared piece into a third module both depend on.\n2. Invert the dependency: pass what the other side needs as an argument instead of importing it.\n3. Defer with a dynamic import() at the point of use — practical, but it treats the symptom.\n\nTo catch them early use a tool such as madge, or the import/no-cycle ESLint rule. Warning signs include an error that depends on import order, or an undefined that only appears in the production build.',
    },
  },

  // ---------------------------------------------------------------- SCENARIOS
  {
    id: 'js-scenario-page-freezes-large-dataset',
    difficulty: intermediate,
    kind: 'scenario',
    depth: 'apply',
    question: {
      ar: 'سيناريو: صفحة تجمّد لعدة ثوانٍ عندما يحمّل المستخدم ملفًا فيه 200 ألف سجل لمعالجته في المتصفح. كيف تشخّص المشكلة وتحلّها؟',
      en: 'Scenario: a page freezes for several seconds when the user uploads a file with 200,000 records to be processed in the browser. How do you diagnose and fix it?',
    },
    answer: {
      ar: 'التشخيص أولًا: أسجّل Performance profile في DevTools أثناء الرفع. غالبًا سأرى مهمة واحدة طويلة (Long Task) بعدة ثوانٍ على الخيط الرئيسي — حلقة معالجة متزامنة تمنع المتصفح من الرسم والاستجابة.\n\nالحل بحسب الحالة:\n1. إذا كانت المعالجة ثقيلة حسابيًا (تحليل، تحويل، فرز): أنقلها إلى Web Worker. الخيط الرئيسي يبقى حرًا، وأرسل تقدّم المعالجة بالنسبة المئوية لعرض شريط تقدم.\n2. إذا كانت المعالجة خفيفة لكن الحجم كبير: أقسّمها إلى دفعات (chunking) بـ setTimeout أو scheduler.yield / requestIdleCallback، فأعالج 5 آلاف سجل ثم أعيد التحكم للمتصفح.\n3. إذا كانت المشكلة في القراءة نفسها: أقرأ الملف بـ streams (file.stream()) بدل تحميله كاملًا في الذاكرة.\n4. إذا كان الرسم هو البطيء (إظهار 200 ألف صف في DOM): virtualization — أعرض المرئي فقط.\n\nوأسأل سؤالًا أهم: هل يجب أن يحدث هذا في المتصفح أصلًا؟ كثيرًا ما يكون الرفع للخادم والمعالجة هناك هو الحل الصحيح، خاصة إن كانت النتيجة تُحفظ في قاعدة بيانات على أي حال.',
      en: 'Diagnosis first: I record a Performance profile in DevTools during the upload. Almost certainly I will see a single Long Task of several seconds on the main thread — a synchronous processing loop blocking the browser from painting and responding.\n\nThe fix depends on the cause:\n1. If the processing is CPU-heavy (parsing, transforming, sorting): move it to a Web Worker. The main thread stays free, and I post progress percentages back to drive a progress bar.\n2. If the work is light but the volume is large: chunk it with setTimeout, scheduler.yield or requestIdleCallback — process 5,000 records, then hand control back to the browser.\n3. If reading is the problem: read the file as a stream (file.stream()) instead of loading it all into memory.\n4. If rendering is the slow part (200,000 rows in the DOM): virtualisation — render only what is visible.\n\nAnd I ask the more important question: should this happen in the browser at all? Uploading to the server and processing there is often the right answer, especially if the result is going to be stored in a database anyway.',
    },
    keyPoints: [
      { ar: 'القياس بـ Performance profile / Long Task', en: 'Measure with a Performance profile / Long Task', terms: ['profile', 'devtools', 'long task', 'main thread', 'الخيط الرئيسي', 'measure', 'قياس'] },
      { ar: 'Web Worker للمعالجة الثقيلة', en: 'Web Worker for heavy processing', terms: ['worker', 'web worker', 'off the main thread'] },
      { ar: 'التقسيم إلى دفعات', en: 'Chunking the work', terms: ['chunk', 'دفعات', 'batch', 'settimeout', 'requestidlecallback', 'yield', 'تقسيم'] },
      { ar: 'هل يجب أن يحدث في المتصفح؟', en: 'Should it happen in the browser at all?', terms: ['server', 'خادم', 'backend', 'upload', 'should this'] },
    ],
  },
  {
    id: 'js-scenario-intermittent-race',
    difficulty: advanced,
    kind: 'scenario',
    depth: 'debug',
    question: {
      ar: 'سيناريو: صفحة بحث تعرض أحيانًا نتائج استعلام قديم بعد أن كتب المستخدم استعلامًا جديدًا. الخطأ لا يظهر دائمًا. ما السبب وكيف تصلحه نهائيًا؟',
      en: 'Scenario: a search page sometimes shows results for an old query after the user has typed a new one. The bug is intermittent. What is the cause, and how do you fix it for good?',
    },
    answer: {
      ar: 'هذا race condition كلاسيكي: كل حرف يطلق طلبًا، والطلبات لا تعود بالترتيب الذي أُرسلت به. إذا عاد طلب "rea" بعد طلب "react" لأن الخادم كان أبطأ فيه، فآخر استجابة وصلت تُكتب فوق الأحدث. الخطأ متقطع لأنه يعتمد على توقيت الشبكة.\n\nالإصلاح الجذري — أن تتجاهل النتيجة إذا لم تعد الاستعلام الحالي، ولديك ثلاث طرق:\n1. AbortController: إلغاء الطلب السابق عند إطلاق طلب جديد. الأنظف لأنه يوفّر أيضًا حمل الشبكة.\n2. معرّف تسلسلي: احتفظ بـ latestRequestId، وعند وصول الاستجابة تجاهلها إن كان معرّفها أقدم.\n3. في React: دالة التنظيف في useEffect تضبط علمًا cancelled حتى لا تُحدَّث الحالة من طلب قديم.\n\nويُضاف debounce لتقليل عدد الطلبات، لكنه وحده لا يحل المشكلة — يقلل احتمالها فقط. وهذا سبب أن مكتبات مثل React Query تتعامل مع هذا تلقائيًا: المفتاح يتغير فالنتيجة القديمة تُهمل.\n\nكيف أتحقق من الإصلاح؟ أختبره بمحاكاة تأخير عشوائي للخادم في الاختبار، لأن الخطأ لا يمكن إعادة إنتاجه يدويًا بثبات.',
      en: 'This is a classic race condition: every keystroke fires a request, and requests do not return in the order they were sent. If the request for "rea" comes back after the one for "react" because the server happened to be slower on it, the last response to arrive overwrites the newest. It is intermittent because it depends on network timing.\n\nThe real fix is to ignore a result that no longer matches the current query, and there are three ways:\n1. AbortController: cancel the previous request when a new one starts. The cleanest, and it saves network load too.\n2. A sequence id: keep latestRequestId, and when a response arrives discard it if its id is older.\n3. In React: the useEffect cleanup sets a cancelled flag so state is never updated from a stale request.\n\nDebounce is added to reduce the number of requests, but on its own it does not fix the problem — it only makes it less likely. This is why libraries like React Query handle it automatically: the key changes, so the stale result is discarded.\n\nHow do I verify the fix? I test it by simulating random server latency in the test, because the bug cannot be reproduced reliably by hand.',
    },
    keyPoints: [
      { ar: 'race condition — الاستجابات خارج الترتيب', en: 'Race condition — responses out of order', terms: ['race', 'سباق', 'out of order', 'ترتيب', 'stale', 'قديم', 'overwrite'] },
      { ar: 'AbortController أو معرّف تسلسلي', en: 'AbortController or a sequence id', terms: ['abort', 'controller', 'cancel', 'إلغاء', 'request id', 'معرف', 'latest', 'cleanup', 'cancelled flag'] },
      { ar: 'debounce وحده لا يكفي', en: 'Debounce alone is not enough', terms: ['debounce', 'not enough', 'لا يكفي', 'only reduces', 'يقلل'] },
      { ar: 'التحقق باختبار مع تأخير عشوائي', en: 'Verify with a test using random latency', terms: ['test', 'اختبار', 'latency', 'تأخير', 'simulate', 'محاكاة', 'reproduce'] },
    ],
  },
];
