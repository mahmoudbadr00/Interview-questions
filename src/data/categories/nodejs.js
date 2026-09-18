// data/categories/nodejs.js
import { DIFFICULTY } from '../difficulty.js';

const { beginner, intermediate, advanced } = DIFFICULTY;

export const nodejs = [
  // ---------------------------------------------------------------- BEGINNER
  {
    id: 'node-what-is',
    difficulty: beginner,
    question: {
      ar: 'ما هو Node.js؟',
      en: 'What is Node.js?',
    },
    answer: {
      ar: 'Node.js هو بيئة تشغيل (runtime) تسمح بتنفيذ JavaScript خارج المتصفح، وهي مبنية على محرك V8 الخاص بـ Google Chrome.\n\nما يميزها أنها تضيف إلى JavaScript ما لا يوفره المتصفح: الوصول إلى نظام الملفات، والشبكة، والعمليات (processes)، ومتغيرات البيئة.\n\nنموذج التشغيل فيها event-driven و non-blocking I/O، ما يجعلها مناسبة جدًا للتطبيقات كثيفة الإدخال/الإخراج مثل الـ APIs والتطبيقات اللحظية (real-time).\n\nملاحظة مهمة: Node.js ليست لغة برمجة ولا إطار عمل، بل بيئة تشغيل.',
      en: 'Node.js is a runtime that lets you execute JavaScript outside the browser. It is built on top of V8, the same engine Chrome uses.\n\nWhat Node adds on top of the language is everything the browser deliberately keeps away from you: filesystem access, networking, processes, and environment variables.\n\nIts execution model is event-driven with non-blocking I/O, which makes it a strong fit for I/O-heavy workloads such as APIs and real-time services.\n\nWorth stating clearly in an interview: Node.js is neither a language nor a framework — it is a runtime.',
    },
  },
  {
    id: 'node-why-use',
    difficulty: beginner,
    question: {
      ar: 'لماذا نستخدم Node.js؟ وما هي مميزاته؟',
      en: 'Why would you choose Node.js for a backend?',
    },
    answer: {
      ar: 'الأسباب العملية:\n\n1. نموذج non-blocking I/O يجعلها تتعامل مع آلاف الاتصالات المتزامنة بعدد قليل من الـ threads.\n2. لغة واحدة عبر الـ front-end والـ back-end، ما يقلل تكلفة انتقال المطورين ويسمح بمشاركة الكود والأنواع (types).\n3. منظومة npm الضخمة تختصر وقت البناء.\n4. سرعة بدء التشغيل وخفة الاستهلاك تجعلها مناسبة للـ microservices والـ serverless.\n\nالقيد الذي يجب ذكره: Node.js ليست الخيار الأمثل للعمليات كثيفة المعالجة (CPU-bound) مثل معالجة الصور أو التشفير الثقيل، لأن هذه العمليات تحجب الـ event loop. في هذه الحالات نستخدم Worker Threads أو خدمة منفصلة.',
      en: 'The practical reasons:\n\n1. Non-blocking I/O lets a single process handle thousands of concurrent connections with very few threads.\n2. One language across frontend and backend — lower context-switching cost for the team, and you can share code and types.\n3. The npm ecosystem is enormous, so you rarely build infrastructure from scratch.\n4. Fast startup and a small footprint make it a natural fit for microservices and serverless.\n\nThe caveat I would always add: Node is a poor fit for CPU-bound work such as image processing or heavy cryptography, because that work blocks the event loop. For those cases you reach for Worker Threads or move the work to a separate service.',
    },
  },
  {
    id: 'node-vs-browser',
    difficulty: beginner,
    question: {
      ar: 'ما الفرق بين JavaScript في Node.js و JavaScript في المتصفح؟',
      en: 'How is JavaScript in Node.js different from JavaScript in the browser?',
    },
    answer: {
      ar: 'اللغة نفسها واحدة، لكن البيئة المحيطة مختلفة:\n\n• في المتصفح لدينا window و document والـ DOM و localStorage و fetch وقيود الـ same-origin.\n• في Node.js لدينا global و process و fs و path و Buffer و __dirname ولا يوجد DOM إطلاقًا.\n\nالكائن العام في المتصفح هو window، وفي Node.js هو global (وكلاهما متاح عبر globalThis).\n\nنموذج الأمان مختلف أيضًا: كود المتصفح يعمل في sandbox، بينما كود Node.js يملك صلاحيات المستخدم الذي شغّله.',
      en: 'It is the same language, but a completely different environment:\n\n• The browser gives you window, document, the DOM, localStorage, fetch, and same-origin restrictions.\n• Node gives you global, process, fs, path, Buffer and __dirname — and no DOM at all.\n\nThe global object is window in the browser and global in Node (globalThis works in both).\n\nThe security model differs too: browser code runs in a sandbox, whereas Node code runs with the privileges of the user that started the process.',
    },
  },
  {
    id: 'node-v8',
    difficulty: beginner,
    question: {
      ar: 'ما هو محرك V8 وما دوره في Node.js؟',
      en: 'What is V8 and what role does it play in Node.js?',
    },
    answer: {
      ar: 'V8 هو محرك JavaScript مفتوح المصدر من Google، مكتوب بلغة C++، ومهمته تحويل كود JavaScript إلى machine code وتنفيذه.\n\nيستخدم تقنية JIT (Just-In-Time compilation): يبدأ بمفسّر سريع (Ignition) ثم يقوم مُحسِّن (TurboFan) بإعادة ترجمة الكود الساخن (hot code) إلى كود أسرع.\n\nV8 مسؤول أيضًا عن إدارة الذاكرة و Garbage Collection.\n\nلكن V8 وحده لا يعرف شيئًا عن الملفات أو الشبكة؛ هذه الوظائف تأتي من libuv ومن Node APIs المبنية فوقها.',
      en: 'V8 is Google\'s open-source JavaScript engine, written in C++. Its job is to compile JavaScript to machine code and run it.\n\nIt uses JIT compilation: an interpreter (Ignition) starts executing immediately, and an optimizing compiler (TurboFan) recompiles hot code paths into faster machine code.\n\nV8 also owns memory allocation and garbage collection.\n\nWhat V8 does not know about is files or sockets — those come from libuv and the Node APIs layered on top of it.',
    },
  },
  {
    id: 'node-libuv',
    difficulty: beginner,
    question: {
      ar: 'ما هو libuv؟',
      en: 'What is libuv?',
    },
    answer: {
      ar: 'libuv هي مكتبة C توفّر لـ Node.js الـ event loop وعمليات الإدخال/الإخراج غير المتزامنة عبر أنظمة التشغيل المختلفة.\n\nهي التي تتعامل مع الـ sockets والملفات والـ DNS والمؤقتات (timers)، وتوحّد الاختلافات بين epoll على Linux و kqueue على macOS و IOCP على Windows.\n\nكما توفّر thread pool (أربعة threads افتراضيًا) للعمليات التي لا يمكن تنفيذها بشكل غير متزامن على مستوى نظام التشغيل، مثل معظم عمليات fs وبعض دوال التشفير مثل crypto.pbkdf2 وضغط البيانات zlib.\n\nيمكن التحكم في حجم هذا الـ thread pool عبر متغير البيئة UV_THREADPOOL_SIZE.',
      en: 'libuv is the C library that gives Node its event loop and cross-platform asynchronous I/O.\n\nIt handles sockets, files, DNS and timers, and hides the differences between epoll on Linux, kqueue on macOS and IOCP on Windows.\n\nIt also provides a thread pool (four threads by default) for work that the OS cannot do asynchronously — most fs operations, some crypto functions such as crypto.pbkdf2, and zlib compression.\n\nYou can size that pool with the UV_THREADPOOL_SIZE environment variable, which is a useful knob when an app does a lot of file or crypto work.',
    },
  },
  {
    id: 'node-npm',
    difficulty: beginner,
    question: {
      ar: 'ما هو npm؟',
      en: 'What is npm?',
    },
    answer: {
      ar: 'npm هو مدير الحزم الافتراضي لـ Node.js، ويقوم بثلاثة أدوار:\n\n1. سجل (registry) عام للحزم.\n2. أداة سطر أوامر لتثبيت وتحديث وإزالة الاعتماديات.\n3. مشغّل للـ scripts المعرّفة في package.json.\n\nأوامر شائعة:\n```bash\nnpm install express        # إضافة حزمة إلى dependencies\nnpm install -D jest        # إضافة حزمة إلى devDependencies\nnpm ci                     # تثبيت مطابق تمامًا لملف package-lock.json\nnpm run build              # تشغيل script\n```\n\nبدائله المعروفة: yarn و pnpm، و pnpm يتميز بتوفير مساحة القرص عبر مخزن مشترك (content-addressable store).',
      en: 'npm is the default package manager for Node.js, and it plays three roles:\n\n1. A public registry of packages.\n2. A CLI for installing, updating and removing dependencies.\n3. A task runner for the scripts declared in package.json.\n\nCommon commands:\n```bash\nnpm install express        # add to dependencies\nnpm install -D jest        # add to devDependencies\nnpm ci                     # clean, lockfile-exact install\nnpm run build              # run a script\n```\n\nThe well-known alternatives are yarn and pnpm; pnpm saves a lot of disk space by using a shared content-addressable store.',
    },
  },
  {
    id: 'node-npm-install-package',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكن تثبيت حزمة باستخدام npm؟ وما الفرق بين dependencies و devDependencies؟',
      en: 'How do you install a package with npm, and what is the difference between dependencies and devDependencies?',
    },
    answer: {
      ar: 'التثبيت:\n```bash\nnpm install <package>        # حزمة إنتاجية\nnpm install -D <package>     # أداة تطوير فقط\nnpm install -g <package>     # تثبيت عام على الجهاز\n```\n\nالفرق:\n• dependencies: حزم يحتاجها التطبيق أثناء التشغيل في الإنتاج، مثل express و pg.\n• devDependencies: حزم تُستخدم أثناء التطوير أو البناء فقط، مثل jest و eslint و typescript.\n\nعند التشغيل في الإنتاج نستخدم `npm ci --omit=dev` لتقليل حجم الصورة (image) وتقليل سطح الهجوم.',
      en: 'Installing:\n```bash\nnpm install <package>        # runtime dependency\nnpm install -D <package>     # development-only tool\nnpm install -g <package>     # global install on the machine\n```\n\nThe difference:\n• dependencies are needed at runtime in production — express, pg, and so on.\n• devDependencies are only needed while developing or building — jest, eslint, typescript.\n\nIn production you install with `npm ci --omit=dev`, which keeps the image smaller and reduces the attack surface.',
    },
  },
  {
    id: 'node-package-json',
    difficulty: beginner,
    question: {
      ar: 'ما هو ملف package.json وما أهم الحقول فيه؟',
      en: 'What is package.json and which fields matter most?',
    },
    answer: {
      ar: 'package.json هو ملف تعريف المشروع: يصف الحزمة ويحدد اعتمادياتها وأوامر تشغيلها.\n\nأهم الحقول:\n• name و version: هوية الحزمة.\n• type: قيمته "module" لاستخدام ES Modules أو "commonjs" (الافتراضي).\n• main / exports: نقطة الدخول؛ exports هو الأحدث ويسمح بالتحكم الدقيق في ما يُصدَّر.\n• scripts: أوامر مثل start و build و test.\n• dependencies و devDependencies و peerDependencies.\n• engines: إصدار Node المطلوب.\n\nنصيحة عملية: تحديد engines يمنع تشغيل المشروع على إصدار Node غير مدعوم.',
      en: 'package.json is the project manifest: it describes the package, its dependencies and how to run it.\n\nThe fields that matter most:\n• name and version — the package identity.\n• type — "module" for ES Modules, or "commonjs" (the default).\n• main / exports — the entry point; exports is the modern field and gives precise control over what is public.\n• scripts — start, build, test, and so on.\n• dependencies, devDependencies, peerDependencies.\n• engines — the Node version the project supports.\n\nA practical tip: setting engines stops the project from silently running on an unsupported Node version.',
    },
  },
  {
    id: 'node-package-lock',
    difficulty: beginner,
    question: {
      ar: 'ما الفرق بين package.json و package-lock.json؟',
      en: 'What is the difference between package.json and package-lock.json?',
    },
    answer: {
      ar: 'package.json يصف النطاقات المسموح بها للإصدارات، مثل "^4.18.0".\npackage-lock.json يسجّل الشجرة الكاملة للاعتماديات بإصداراتها الدقيقة وبصمات التحقق (integrity hashes).\n\nالنتيجة: الـ lock file هو ما يضمن أن كل مطور وكل خادم CI وكل بيئة إنتاج تثبّت نفس الأكواد بالضبط.\n\nلذلك:\n• يجب رفع package-lock.json إلى الـ repository.\n• في CI/CD نستخدم `npm ci` وليس `npm install`، لأن npm ci يثبّت من الـ lock file حرفيًا ويفشل إذا كان غير متسق مع package.json.',
      en: 'package.json declares acceptable version ranges, such as "^4.18.0".\npackage-lock.json records the full resolved dependency tree with exact versions and integrity hashes.\n\nThe lockfile is what guarantees that every developer, every CI run and every production deploy installs byte-identical code.\n\nSo in practice:\n• Always commit package-lock.json.\n• In CI use `npm ci`, not `npm install` — npm ci installs strictly from the lockfile and fails loudly if it has drifted from package.json.',
    },
  },
  {
    id: 'node-semver',
    difficulty: beginner,
    question: {
      ar: 'ماذا تعني الرموز ^ و ~ في إصدارات الحزم؟',
      en: 'What do the ^ and ~ version prefixes mean?',
    },
    answer: {
      ar: 'كلاهما يتبع نظام Semantic Versioning بصيغة MAJOR.MINOR.PATCH:\n\n• ^1.2.3 يسمح بأي تحديث لا يغيّر الرقم الأول: من 1.2.3 حتى ما دون 2.0.0.\n• ~1.2.3 يسمح بتحديثات الـ patch فقط: من 1.2.3 حتى ما دون 1.3.0.\n• 1.2.3 بدون رمز يعني هذا الإصدار بالضبط.\n\nاستثناء يجب معرفته: للإصدارات الأقل من 1.0.0 تعامل npm الرقم الثاني كأنه breaking، فـ ^0.2.3 تسمح فقط حتى ما دون 0.3.0.',
      en: 'Both follow Semantic Versioning — MAJOR.MINOR.PATCH:\n\n• ^1.2.3 allows anything that does not change the major: >=1.2.3 <2.0.0.\n• ~1.2.3 allows patch updates only: >=1.2.3 <1.3.0.\n• 1.2.3 with no prefix pins that exact version.\n\nOne exception worth knowing: below 1.0.0, npm treats the minor as breaking, so ^0.2.3 only allows >=0.2.3 <0.3.0.',
    },
  },
  {
    id: 'node-npm-scripts',
    difficulty: beginner,
    question: {
      ar: 'ما هي npm scripts وكيف تستخدمها؟',
      en: 'What are npm scripts and how do you use them?',
    },
    answer: {
      ar: 'npm scripts هي أوامر معرّفة داخل حقل scripts في package.json، وتُشغَّل عبر `npm run <name>`.\n\n```json\n{\n  "scripts": {\n    "dev": "node --watch src/server.js",\n    "start": "node src/server.js",\n    "test": "jest",\n    "lint": "eslint ."\n  }\n}\n```\n\nنقاط مهمة:\n• start و test و stop لها اختصارات: `npm start` و `npm test`.\n• أثناء تشغيل الـ script تُضاف node_modules/.bin إلى PATH تلقائيًا، لذلك يمكن استدعاء الأدوات المثبتة محليًا مباشرة دون npx.\n• pre و post تعمل تلقائيًا: pretest يعمل قبل test.',
      en: 'npm scripts are commands declared in the scripts field of package.json and run with `npm run <name>`.\n\n```json\n{\n  "scripts": {\n    "dev": "node --watch src/server.js",\n    "start": "node src/server.js",\n    "test": "jest",\n    "lint": "eslint ."\n  }\n}\n```\n\nThings worth knowing:\n• start and test have shorthands: `npm start`, `npm test`.\n• While a script runs, node_modules/.bin is added to PATH, so locally installed tools can be called directly without npx.\n• pre/post hooks run automatically — pretest runs before test.',
    },
  },
  {
    id: 'node-modules-system',
    difficulty: beginner,
    question: {
      ar: 'ما هو نظام الوحدات (Modules) في Node.js؟',
      en: 'How does Node.js organise code into modules?',
    },
    answer: {
      ar: 'كل ملف في Node.js هو module مستقل بنطاقه الخاص؛ لا شيء يصبح عامًا (global) إلا إذا صُدِّر صراحةً.\n\nهناك ثلاثة أنواع من الوحدات:\n1. Core modules مدمجة مثل fs و path و http و crypto.\n2. حزم خارجية من node_modules.\n3. ملفات محلية عبر مسار نسبي مثل ./utils.js.\n\nيدعم Node نظامين للوحدات: CommonJS (require / module.exports) و ES Modules (import / export).\n\nنصيحة: استخدم البادئة node: عند استيراد وحدات النواة (`import fs from "node:fs"`) لأنها أوضح وتمنع أي تعارض مع حزمة تحمل الاسم نفسه.',
      en: 'Every file in Node is its own module with its own scope — nothing becomes global unless you explicitly export it.\n\nThere are three kinds of module:\n1. Core modules that ship with Node: fs, path, http, crypto.\n2. Third-party packages from node_modules.\n3. Local files referenced by a relative path such as ./utils.js.\n\nNode supports two module systems: CommonJS (require / module.exports) and ES Modules (import / export).\n\nA good habit: use the node: prefix for core modules (`import fs from "node:fs"`). It is explicit and it cannot be shadowed by a package with the same name.',
    },
  },
  {
    id: 'node-require-vs-import',
    difficulty: beginner,
    question: {
      ar: 'ما الفرق بين require و import في Node.js؟',
      en: 'What is the difference between require and import in Node.js?',
    },
    answer: {
      ar: 'require هو نظام CommonJS، و import هو نظام ES Modules. الفروق الجوهرية:\n\n1. التوقيت: require متزامن ويُنفَّذ وقت التشغيل، لذلك يمكن استدعاؤه داخل شرط. أما import فثابت (static) ويُحلَّل قبل التنفيذ.\n2. التحليل الثابت يسمح بـ tree-shaking وباكتشاف الأخطاء مبكرًا.\n3. في ES Modules لا يوجد __dirname ولا __filename؛ نستخدم import.meta.url بدلًا منهما.\n4. ES Modules تدعم top-level await، و CommonJS لا تدعمه.\n\nكيف تختار النظام؟ عبر "type": "module" في package.json، أو بامتداد الملف: ‎.mjs لـ ES Modules و ‎.cjs لـ CommonJS.\n\nملاحظة عملية: يمكن لـ ES Module أن يستورد CommonJS، لكن العكس يحتاج import() الديناميكي.',
      en: 'require is CommonJS; import is ES Modules. The differences that actually matter:\n\n1. Timing: require is synchronous and runs at execution time, so you can call it conditionally. import is static and resolved before the module body runs.\n2. Because imports are static, bundlers can tree-shake and errors surface earlier.\n3. ES Modules have no __dirname or __filename — you derive them from import.meta.url.\n4. ES Modules support top-level await; CommonJS does not.\n\nYou choose the system with "type": "module" in package.json, or per file with the .mjs / .cjs extensions.\n\nPractical note: an ES Module can import CommonJS, but CommonJS can only load an ES Module through dynamic import().',
    },
  },
  {
    id: 'node-commonjs',
    difficulty: beginner,
    question: {
      ar: 'كيف يعمل CommonJS؟ وما الفرق بين module.exports و exports؟',
      en: 'How does CommonJS work, and what is the difference between module.exports and exports?',
    },
    answer: {
      ar: 'في CommonJS يلفّ Node كل ملف داخل دالة تتلقى (exports, require, module, __filename, __dirname). ما يُعاد فعليًا هو قيمة module.exports.\n\nالمتغير exports ليس إلا اختصارًا يشير إلى الكائن نفسه:\n```js\nexports.add = (a, b) => a + b;      // يعمل\nmodule.exports = { add };            // يعمل\nexports = { add };                   // لا يعمل! كسرنا المرجع\n```\n\nنقطة مهمة أخرى: النتيجة تُخزَّن في cache؛ إذا استُدعي الملف مرة أخرى يُعاد الكائن نفسه ولا يُنفَّذ الملف من جديد. هذا يجعل الـ modules تعمل عمليًا كـ singletons.',
      en: 'In CommonJS, Node wraps every file in a function that receives (exports, require, module, __filename, __dirname). What actually gets returned is the value of module.exports.\n\n`exports` is just a shorthand reference to that same object:\n```js\nexports.add = (a, b) => a + b;      // works\nmodule.exports = { add };            // works\nexports = { add };                   // does NOT work — you broke the reference\n```\n\nThe other important detail is caching: the result is cached, so requiring the same file again returns the same object without re-executing it. That effectively makes modules singletons.',
    },
  },
  {
    id: 'node-esm',
    difficulty: beginner,
    question: {
      ar: 'كيف تستخدم ES Modules في Node.js؟',
      en: 'How do you use ES Modules in Node.js?',
    },
    answer: {
      ar: 'تفعّلها بإضافة "type": "module" في package.json، أو باستخدام امتداد ‎.mjs.\n\n```js\n// math.js\nexport const add = (a, b) => a + b;\nexport default add;\n\n// server.js\nimport add, { add as sum } from "./math.js";\nimport fs from "node:fs/promises";\n```\n\nنقاط يجب الانتباه لها:\n• امتداد الملف إلزامي في المسارات النسبية: "./math.js" وليس "./math".\n• لا يوجد __dirname؛ البديل:\n```js\nimport { dirname } from "node:path";\nimport { fileURLToPath } from "node:url";\nconst __dirname = dirname(fileURLToPath(import.meta.url));\n```\n• top-level await متاح مباشرة.',
      en: 'You enable them with "type": "module" in package.json, or by using the .mjs extension.\n\n```js\n// math.js\nexport const add = (a, b) => a + b;\nexport default add;\n\n// server.js\nimport add, { add as sum } from "./math.js";\nimport fs from "node:fs/promises";\n```\n\nThings that trip people up:\n• File extensions are mandatory in relative specifiers: "./math.js", not "./math".\n• There is no __dirname. The replacement is:\n```js\nimport { dirname } from "node:path";\nimport { fileURLToPath } from "node:url";\nconst __dirname = dirname(fileURLToPath(import.meta.url));\n```\n• Top-level await just works.',
    },
  },
  {
    id: 'node-process',
    difficulty: beginner,
    question: {
      ar: 'ما هو كائن process في Node.js؟',
      en: 'What is the process object in Node.js?',
    },
    answer: {
      ar: 'process هو كائن عام يمثّل العملية الحالية ويتيح التفاعل مع نظام التشغيل.\n\nأكثر ما يُستخدم منه:\n• process.env: متغيرات البيئة.\n• process.argv: وسائط سطر الأوامر.\n• process.exit(code): إنهاء العملية.\n• process.cwd(): مجلد العمل الحالي.\n• process.memoryUsage(): استهلاك الذاكرة.\n• process.on("SIGTERM", ...): الاستماع لإشارات نظام التشغيل، وهو أساس الـ graceful shutdown.\n• process.on("uncaughtException") و ("unhandledRejection") لالتقاط الأخطاء غير المعالجة.\n\nكما أن process هو EventEmitter، وهذا ما يجعل الاستماع للأحداث ممكنًا.',
      en: 'process is a global object that represents the running process and is your bridge to the operating system.\n\nThe parts you actually use:\n• process.env — environment variables.\n• process.argv — command-line arguments.\n• process.exit(code) — terminate the process.\n• process.cwd() — current working directory.\n• process.memoryUsage() — heap and RSS figures.\n• process.on("SIGTERM", ...) — OS signals, which is how graceful shutdown is built.\n• process.on("uncaughtException") and ("unhandledRejection") for last-resort error handling.\n\nprocess is itself an EventEmitter, which is why all of those listeners work.',
    },
  },
  {
    id: 'node-env-vars',
    difficulty: beginner,
    question: {
      ar: 'كيف تدير الإعدادات ومتغيرات البيئة في تطبيقات Node.js؟',
      en: 'How do you manage configuration and environment variables in a Node.js application?',
    },
    answer: {
      ar: 'القاعدة: الإعدادات تأتي من البيئة وليست مكتوبة داخل الكود، وتُقرأ عبر process.env.\n\nفي التطوير نستخدم ملف .env مع `node --env-file=.env` (مدعوم أصلًا منذ Node 20) أو حزمة dotenv. في الإنتاج تأتي القيم من منصة النشر أو من secret manager.\n\nممارسات مهمة:\n• لا ترفع .env إلى Git أبدًا، وارفع بدلًا منه ‎.env.example.\n• تحقّق من الإعدادات عند بدء التشغيل وافشل فورًا إذا كان متغير مطلوب مفقودًا — الفشل المبكر أفضل من خطأ غامض بعد ساعات.\n• اجمع القراءة في ملف config واحد بدل نثر process.env في كل الملفات.\n\n```js\n// config.js\nconst required = (key) => {\n  const value = process.env[key];\n  if (!value) throw new Error(`Missing env var: ${key}`);\n  return value;\n};\n\nexport const config = {\n  port: Number(process.env.PORT ?? 3000),\n  databaseUrl: required("DATABASE_URL"),\n};\n```',
      en: 'The rule is that configuration comes from the environment, never from code, and you read it through process.env.\n\nIn development you use a .env file with `node --env-file=.env` (natively supported since Node 20) or the dotenv package. In production the values come from the deployment platform or a secret manager.\n\nPractices that matter:\n• Never commit .env; commit a .env.example instead.\n• Validate configuration at startup and fail fast if a required variable is missing — an immediate crash beats a confusing error hours later.\n• Read the environment in one config module instead of scattering process.env across the codebase.\n\n```js\n// config.js\nconst required = (key) => {\n  const value = process.env[key];\n  if (!value) throw new Error(`Missing env var: ${key}`);\n  return value;\n};\n\nexport const config = {\n  port: Number(process.env.PORT ?? 3000),\n  databaseUrl: required("DATABASE_URL"),\n};\n```',
    },
  },
  {
    id: 'node-fs',
    difficulty: beginner,
    question: {
      ar: 'كيف تقرأ وتكتب الملفات في Node.js؟',
      en: 'How do you read and write files in Node.js?',
    },
    answer: {
      ar: 'وحدة fs توفّر ثلاث واجهات: promises (المفضلة)، و callbacks، و sync.\n\n```js\nimport fs from "node:fs/promises";\n\nconst text = await fs.readFile("data.json", "utf8");\nawait fs.writeFile("out.txt", "hello", "utf8");\n```\n\nنقاط مهمة:\n• إذا لم تمرّر encoding فستحصل على Buffer بدل نص.\n• تجنّب الدوال المنتهية بـ Sync (مثل readFileSync) داخل معالجة الطلبات، لأنها تحجب الـ event loop. استخدامها مقبول فقط عند بدء التشغيل.\n• للملفات الكبيرة استخدم Streams بدل قراءة الملف كاملًا في الذاكرة.',
      en: 'The fs module exposes three APIs: promises (preferred), callbacks, and sync.\n\n```js\nimport fs from "node:fs/promises";\n\nconst text = await fs.readFile("data.json", "utf8");\nawait fs.writeFile("out.txt", "hello", "utf8");\n```\n\nThings to keep in mind:\n• Without an encoding argument you get a Buffer, not a string.\n• Avoid the *Sync variants inside request handling — they block the event loop. They are only acceptable during startup.\n• For large files use Streams rather than pulling the whole file into memory.',
    },
  },
  {
    id: 'node-path',
    difficulty: beginner,
    question: {
      ar: 'ما هي وحدة path ولماذا نستخدمها بدل دمج النصوص؟',
      en: 'What is the path module and why use it instead of string concatenation?',
    },
    answer: {
      ar: 'وحدة path تتعامل مع مسارات الملفات بطريقة صحيحة على كل أنظمة التشغيل، لأن الفاصل مختلف بين Windows وغيره.\n\n```js\nimport path from "node:path";\n\npath.join("src", "data", "file.json");     // src/data/file.json\npath.resolve("uploads", name);              // مسار مطلق\npath.extname("photo.png");                  // .png\npath.basename("/a/b/photo.png");            // photo.png\n```\n\nهناك أيضًا سبب أمني: دمج مسار قادم من المستخدم مباشرة يفتح ثغرة path traversal مثل "../../etc/passwd". الحل هو path.resolve ثم التحقق من أن النتيجة ما زالت داخل المجلد المسموح به.',
      en: 'The path module manipulates filesystem paths correctly on every OS, since Windows uses a different separator.\n\n```js\nimport path from "node:path";\n\npath.join("src", "data", "file.json");     // src/data/file.json\npath.resolve("uploads", name);              // absolute path\npath.extname("photo.png");                  // .png\npath.basename("/a/b/photo.png");            // photo.png\n```\n\nThere is a security angle too: concatenating a user-supplied path opens a path-traversal hole such as "../../etc/passwd". The fix is to path.resolve it and then verify the result still lives inside the allowed directory.',
    },
  },
  {
    id: 'node-http-server',
    difficulty: beginner,
    question: {
      ar: 'كيف تنشئ خادم HTTP بسيطًا باستخدام Node.js؟',
      en: 'How do you create a basic HTTP server in Node.js?',
    },
    answer: {
      ar: 'باستخدام وحدة http المدمجة، دون أي مكتبات خارجية:\n\n```js\nimport http from "node:http";\n\nconst server = http.createServer((req, res) => {\n  if (req.url === "/health" && req.method === "GET") {\n    res.writeHead(200, { "Content-Type": "application/json" });\n    return res.end(JSON.stringify({ status: "ok" }));\n  }\n  res.writeHead(404).end("Not Found");\n});\n\nserver.listen(3000, () => console.log("listening on 3000"));\n```\n\nالدالة المُمرَّرة تُستدعى مع كل طلب، و req و res هما Streams: req قابل للقراءة و res قابل للكتابة.\n\nفي التطبيقات الحقيقية نستخدم Express أو Fastify فوق هذه الطبقة لأنها توفّر التوجيه (routing) وتحليل الـ body والـ middleware.',
      en: 'With the built-in http module, no dependencies required:\n\n```js\nimport http from "node:http";\n\nconst server = http.createServer((req, res) => {\n  if (req.url === "/health" && req.method === "GET") {\n    res.writeHead(200, { "Content-Type": "application/json" });\n    return res.end(JSON.stringify({ status: "ok" }));\n  }\n  res.writeHead(404).end("Not Found");\n});\n\nserver.listen(3000, () => console.log("listening on 3000"));\n```\n\nThe handler runs for every request, and req/res are streams — req is readable, res is writable.\n\nIn a real application you put Express or Fastify on top of this layer, because you want routing, body parsing and middleware.',
    },
  },
  {
    id: 'node-json-files',
    difficulty: beginner,
    question: {
      ar: 'كيف تتعامل مع ملفات JSON في Node.js؟',
      en: 'How do you work with JSON files in Node.js?',
    },
    answer: {
      ar: 'تقرأ الملف كنص ثم تحوّله:\n\n```js\nimport fs from "node:fs/promises";\n\nconst raw = await fs.readFile("config.json", "utf8");\nconst config = JSON.parse(raw);\n\nawait fs.writeFile("config.json", JSON.stringify(config, null, 2));\n```\n\nنقاط عملية:\n• ضع JSON.parse داخل try/catch لأنه يرمي استثناءً عند وجود JSON غير صالح.\n• JSON.stringify مع المعامل الثالث يضيف تنسيقًا مقروءًا.\n• في CommonJS يمكن استخدام require("./config.json") مباشرة، لكن النتيجة تُخزَّن في الـ cache ولن تتغير إذا عُدِّل الملف.\n• لملفات JSON الضخمة استخدم streaming parser بدل تحميل الملف كاملًا.',
      en: 'You read the file as text and parse it:\n\n```js\nimport fs from "node:fs/promises";\n\nconst raw = await fs.readFile("config.json", "utf8");\nconst config = JSON.parse(raw);\n\nawait fs.writeFile("config.json", JSON.stringify(config, null, 2));\n```\n\nPractical points:\n• Wrap JSON.parse in try/catch — it throws on malformed input.\n• JSON.stringify with a third argument gives you readable formatting.\n• In CommonJS you can require("./config.json") directly, but the result is cached and will not reflect later edits to the file.\n• For very large JSON files use a streaming parser instead of loading everything into memory.',
    },
  },
  {
    id: 'node-common-libraries',
    difficulty: beginner,
    question: {
      ar: 'ما هي المكتبات الشائعة المستخدمة مع Node.js؟',
      en: 'Which libraries are commonly used with Node.js?',
    },
    answer: {
      ar: 'حسب الغرض:\n\n• أطر الويب: Express (الأكثر انتشارًا)، Fastify (أسرع ويدعم schema validation)، NestJS (معماري ومنظّم).\n• قواعد البيانات: Prisma و Drizzle و TypeORM و Sequelize و Mongoose، وسائقات مباشرة مثل pg.\n• التحقق من البيانات: Zod و Joi.\n• المصادقة: jsonwebtoken و bcrypt/argon2 و Passport.\n• التسجيل: Pino (سريع و JSON) و Winston.\n• الاختبارات: Jest و Vitest و Supertest.\n• أدوات: dotenv و nodemon و axios/undici و BullMQ للطوابير.\n\nالنقطة الأهم في المقابلة: كل اعتمادية تحمل تكلفة صيانة وأمان، لذلك أفضّل ما توفّره النواة إن كان كافيًا.',
      en: 'Grouped by purpose:\n\n• Web frameworks: Express (most common), Fastify (faster, schema-driven), NestJS (opinionated architecture).\n• Databases: Prisma, Drizzle, TypeORM, Sequelize, Mongoose, or a driver such as pg directly.\n• Validation: Zod, Joi.\n• Auth: jsonwebtoken, bcrypt/argon2, Passport.\n• Logging: Pino (fast, JSON) and Winston.\n• Testing: Jest, Vitest, Supertest.\n• Utilities: dotenv, nodemon, axios/undici, BullMQ for queues.\n\nThe point I would make in an interview: every dependency is a maintenance and security liability, so I prefer the standard library when it is good enough.',
    },
  },
  {
    id: 'node-template-engines',
    difficulty: beginner,
    question: {
      ar: 'ما هي template engines في Node.js ومتى تستخدمها؟',
      en: 'What are template engines in Node.js and when would you use one?',
    },
    answer: {
      ar: 'template engine هي أداة تولّد HTML على الخادم بدمج قالب مع بيانات. أشهرها EJS و Pug و Handlebars.\n\n```js\napp.set("view engine", "ejs");\napp.get("/profile", (req, res) => res.render("profile", { user }));\n```\n\nمتى تستخدمها؟ في التطبيقات التي تُصيّر صفحاتها على الخادم (server-rendered) وتحتاج SEO وسرعة تحميل أولى، مثل المدونات ولوحات التحكم البسيطة.\n\nمتى لا تستخدمها؟ عندما يكون الـ front-end تطبيق React/Next.js منفصلًا؛ حينها يقتصر دور Node.js على تقديم JSON API.\n\nتنبيه أمني: معظم المحركات تهرّب (escape) المتغيرات افتراضيًا، لكن الصيغ الخام مثل <%- %> في EJS تفتح ثغرة XSS.',
      en: 'A template engine renders HTML on the server by combining a template with data. The common ones are EJS, Pug and Handlebars.\n\n```js\napp.set("view engine", "ejs");\napp.get("/profile", (req, res) => res.render("profile", { user }));\n```\n\nWhen would I use one? For genuinely server-rendered applications that need SEO and a fast first paint — blogs, simple admin panels, internal tools.\n\nWhen would I not? When the frontend is a separate React/Next.js app; then Node just serves a JSON API.\n\nSecurity note: most engines escape interpolated values by default, but raw output syntax such as EJS\'s <%- %> reopens the XSS hole.',
    },
  },
  {
    id: 'node-nodemon',
    difficulty: beginner,
    question: {
      ar: 'كيف تعيد تشغيل الخادم تلقائيًا أثناء التطوير؟',
      en: 'How do you get automatic server restarts during development?',
    },
    answer: {
      ar: 'منذ Node 18/20 يوجد حل مدمج لا يحتاج أي حزمة:\n```bash\nnode --watch src/server.js\n```\n\nالبديل التقليدي هو nodemon:\n```bash\nnpm i -D nodemon && npx nodemon src/server.js\n```\n\nتنبيه مهم: هذه الأدوات لأغراض التطوير فقط. في الإنتاج نستخدم مدير عمليات مثل PM2 أو منسّق حاويات مثل Kubernetes، لأن ما نحتاجه هناك هو إعادة التشغيل عند الانهيار وليس عند تغيّر الملفات.',
      en: 'Since Node 18/20 there is a built-in option that needs no package at all:\n```bash\nnode --watch src/server.js\n```\n\nThe traditional alternative is nodemon:\n```bash\nnpm i -D nodemon && npx nodemon src/server.js\n```\n\nImportant caveat: these are development tools. In production you use a process manager such as PM2, or a container orchestrator such as Kubernetes — there you want restarts on crash, not on file change.',
    },
  },
  {
    id: 'node-callback-hell',
    difficulty: beginner,
    question: {
      ar: 'ما هو callback hell وكيف تتجنبه؟',
      en: 'What is callback hell and how do you avoid it?',
    },
    answer: {
      ar: 'callback hell هو التداخل العميق للـ callbacks الذي ينتج عن سلسلة عمليات غير متزامنة متتابعة، فيصبح الكود صعب القراءة والتتبع ومعالجة الأخطاء فيه مكرّرة.\n\n```js\ngetUser(id, (err, user) => {\n  getOrders(user.id, (err, orders) => {\n    getItems(orders[0].id, (err, items) => { /* ... */ });\n  });\n});\n```\n\nالحلول:\n1. async/await — الحل الأفضل اليوم:\n```js\nconst user = await getUser(id);\nconst orders = await getOrders(user.id);\nconst items = await getItems(orders[0].id);\n```\n2. تحويل الدوال القديمة عبر util.promisify.\n3. تقسيم الكود إلى دوال صغيرة مسمّاة.\n\nميزة إضافية لـ async/await: معالجة الأخطاء تتم بـ try/catch واحد بدل فحص err في كل مستوى.',
      en: 'Callback hell is the deep nesting you get when several asynchronous steps depend on each other. The code becomes hard to read and error handling gets duplicated at every level.\n\n```js\ngetUser(id, (err, user) => {\n  getOrders(user.id, (err, orders) => {\n    getItems(orders[0].id, (err, items) => { /* ... */ });\n  });\n});\n```\n\nThe fixes:\n1. async/await — the right answer today:\n```js\nconst user = await getUser(id);\nconst orders = await getOrders(user.id);\nconst items = await getItems(orders[0].id);\n```\n2. Wrap legacy callback APIs with util.promisify.\n3. Break the flow into small named functions.\n\nThe extra win with async/await is that one try/catch replaces an err check at every level.',
    },
  },
  {
    id: 'node-promises-basics',
    difficulty: beginner,
    question: {
      ar: 'ما هي Promises وكيف تستخدمها في Node.js؟',
      en: 'What are Promises and how do you use them in Node.js?',
    },
    answer: {
      ar: 'Promise هو كائن يمثّل نتيجة عملية غير متزامنة ستتوفر لاحقًا، وله ثلاث حالات: pending ثم fulfilled أو rejected. بمجرد أن يستقر (settle) لا يمكن تغييره.\n\n```js\nfetchUser(id)\n  .then((user) => fetchOrders(user.id))\n  .then((orders) => console.log(orders))\n  .catch((error) => console.error(error))\n  .finally(() => closeConnection());\n```\n\nمعظم واجهات Node الحديثة تدعم Promises مباشرة (مثل fs/promises)، وللواجهات القديمة نستخدم util.promisify.\n\nنقطة يسأل عنها الكثيرون: لماذا نعيد الـ Promise داخل then؟ لأن إعادتها هي ما يجعل السلسلة تنتظرها؛ إغفال return يؤدي إلى تنفيذ غير مرتّب وأخطاء صامتة.',
      en: 'A Promise represents the eventual result of an asynchronous operation. It has three states — pending, then either fulfilled or rejected — and once it settles it cannot change.\n\n```js\nfetchUser(id)\n  .then((user) => fetchOrders(user.id))\n  .then((orders) => console.log(orders))\n  .catch((error) => console.error(error))\n  .finally(() => closeConnection());\n```\n\nMost modern Node APIs are promise-based already (fs/promises, for example); for older callback APIs you use util.promisify.\n\nA detail interviewers like to probe: why must you return the promise inside then? Because returning it is what makes the chain wait for it. Forgetting the return gives you out-of-order execution and silently swallowed errors.',
    },
  },
  {
    id: 'node-async-await-vs-promises',
    difficulty: beginner,
    question: {
      ar: 'ما الفرق بين async/await و Promises؟',
      en: 'What is the difference between async/await and Promises?',
    },
    answer: {
      ar: 'لا يوجد فرق في الآلية: async/await هو صياغة (syntax) مبنية فوق Promises. الدالة المعلنة async تعيد Promise دائمًا، و await تنتظر استقرارها.\n\nالفرق في قابلية القراءة ومعالجة الأخطاء:\n```js\n// Promises\nfunction load(id) {\n  return getUser(id).then(getOrders).catch(handle);\n}\n\n// async/await\nasync function load(id) {\n  try {\n    const user = await getUser(id);\n    return await getOrders(user);\n  } catch (error) {\n    handle(error);\n  }\n}\n```\n\nخطأ شائع: استخدام await داخل حلقة لعمليات مستقلة، فيتحول التنفيذ من متوازٍ إلى متسلسل. الصحيح هو Promise.all في هذه الحالة.',
      en: 'Mechanically there is no difference — async/await is syntax built on top of Promises. An async function always returns a promise, and await suspends until it settles.\n\nThe difference is readability and error handling:\n```js\n// Promises\nfunction load(id) {\n  return getUser(id).then(getOrders).catch(handle);\n}\n\n// async/await\nasync function load(id) {\n  try {\n    const user = await getUser(id);\n    return await getOrders(user);\n  } catch (error) {\n    handle(error);\n  }\n}\n```\n\nThe classic mistake is awaiting inside a loop for independent operations, which turns parallel work into sequential work. Promise.all is the correct tool there.',
    },
  },
  {
    id: 'node-global-scope',
    difficulty: beginner,
    question: {
      ar: 'ما الفرق بين global و globalThis و نطاق الوحدة (module scope) في Node.js؟',
      en: 'What is the difference between global, globalThis and module scope in Node.js?',
    },
    answer: {
      ar: '• global هو الكائن العام في Node.js، يقابل window في المتصفح.\n• globalThis هو الطريقة المعيارية للوصول إلى الكائن العام في أي بيئة، وهو المفضّل في الكود المشترك.\n• module scope هو نطاق الملف: أي متغير تعرّفه بـ const أو let أو var داخل ملف يبقى محصورًا فيه ولا يصبح عامًا.\n\nهذه نقطة اختلاف مهمة عن المتصفح: في سكربت متصفح عادي، `var x = 1` تصبح خاصية على window، بينما في Node.js تبقى خاصة بالملف.\n\nنصيحة: لا تضف خصائص إلى global لتمرير البيانات بين الملفات؛ استخدم الـ exports، لأن الحالة العامة تجعل الاختبار والتتبع أصعب.',
      en: '• global is Node\'s global object, the counterpart to window in the browser.\n• globalThis is the standard, environment-agnostic way to reach the global object and is what you should use in shared code.\n• Module scope is file scope: anything you declare with const, let or var inside a file stays in that file.\n\nThat last point is a real difference from the browser. In a classic browser script `var x = 1` becomes a property of window; in Node it stays private to the module.\n\nAdvice: do not hang properties off global to pass data between files. Export them instead — global state makes testing and tracing much harder.',
    },
  },
  {
    id: 'node-blocking-vs-nonblocking',
    difficulty: beginner,
    question: {
      ar: 'ما الفرق بين العمليات blocking و non-blocking في Node.js؟',
      en: 'What is the difference between blocking and non-blocking operations in Node.js?',
    },
    answer: {
      ar: 'العملية blocking تُوقف الـ event loop حتى تنتهي، فلا يستطيع الخادم خدمة أي طلب آخر في تلك اللحظة. أما العملية non-blocking فتُسلَّم إلى نظام التشغيل أو إلى thread pool، ويستمر الـ event loop في العمل حتى تصل النتيجة عبر callback.\n\n```js\n// blocking — كل الطلبات الأخرى تنتظر\nconst data = fs.readFileSync("big.log", "utf8");\n\n// non-blocking\nconst data = await fs.promises.readFile("big.log", "utf8");\n```\n\nنقطة جوهرية غالبًا ما تُغفل: async لا يعني "غير حاجب". حلقة while تحسب لمدة ثانيتين داخل دالة async تحجب الـ event loop تمامًا، لأن الحجب يأتي من المعالجة (CPU) لا من الصياغة.',
      en: 'A blocking operation holds the event loop until it finishes, so the server can serve nothing else meanwhile. A non-blocking operation is handed to the OS or to the thread pool, and the loop keeps running until the result arrives via a callback.\n\n```js\n// blocking — every other request waits\nconst data = fs.readFileSync("big.log", "utf8");\n\n// non-blocking\nconst data = await fs.promises.readFile("big.log", "utf8");\n```\n\nThe subtlety people miss: async does not mean non-blocking. A two-second while loop inside an async function blocks the event loop completely, because the blocking comes from CPU work, not from syntax.',
    },
  },
  {
    id: 'node-error-handling-basics',
    difficulty: beginner,
    question: {
      ar: 'كيف تتعامل مع الأخطاء في Node.js؟',
      en: 'How do you handle errors in Node.js?',
    },
    answer: {
      ar: 'الأسلوب يختلف بحسب نوع الكود:\n\n1. الكود المتزامن: try/catch.\n2. Promises و async/await: try/catch حول await، أو .catch() على السلسلة.\n3. الـ callbacks القديمة: نمط error-first، أي (err, result) وفحص err أولًا.\n4. الـ EventEmitters: الاستماع لحدث "error"، لأن حدث error غير المعالج يُسقط العملية.\n\nفي Express نجمع كل الأخطاء في error-handling middleware واحد (له أربعة معاملات) ونمرّر الخطأ إليه عبر next(error).\n\nقاعدتان مهمتان:\n• ارمِ كائنات Error وليس نصوصًا، لأن Error يحمل stack trace.\n• فرّق بين الأخطاء المتوقعة (تحقق من صحة البيانات، 404) التي تُعالج وتُعاد للمستخدم، والأخطاء البرمجية غير المتوقعة التي يجب تسجيلها وإعادة تشغيل العملية بعدها.',
      en: 'It depends on the style of code:\n\n1. Synchronous code: try/catch.\n2. Promises and async/await: try/catch around await, or .catch() on the chain.\n3. Legacy callbacks: the error-first convention — (err, result), check err first.\n4. EventEmitters: listen for the "error" event, because an unhandled error event crashes the process.\n\nIn Express you funnel everything into a single error-handling middleware (the one with four parameters) and pass errors to it with next(error).\n\nTwo rules I would state explicitly:\n• Throw Error objects, not strings — you want the stack trace.\n• Separate expected errors (validation, 404) which you handle and return to the client, from unexpected programmer errors which you log and then restart the process.',
    },
  },
  {
    id: 'node-buffer-basics',
    difficulty: beginner,
    question: {
      ar: 'ما هو Buffer في Node.js؟',
      en: 'What is a Buffer in Node.js?',
    },
    answer: {
      ar: 'Buffer هو مساحة ذاكرة ثابتة الحجم خارج الـ heap الخاص بـ V8، مخصّصة للتعامل مع البيانات الثنائية الخام: الملفات، الصور، حزم الشبكة، التشفير.\n\nوُجد لأن JavaScript تاريخيًا لم يكن لديها نوع للبيانات الثنائية؛ اليوم Buffer هو فعليًا امتداد لـ Uint8Array.\n\n```js\nconst buf = Buffer.from("مرحبا", "utf8");\nbuf.length;              // عدد البايتات وليس عدد الحروف\nbuf.toString("base64");\n```\n\nملاحظة أمنية: استخدم Buffer.alloc (تُصفّر الذاكرة) وليس Buffer.allocUnsafe، فالأخيرة قد تعيد بيانات قديمة من الذاكرة.\n\nملاحظة عملية: حجم النص بالبايت لا يساوي عدد الحروف؛ الحرف العربي في UTF-8 يشغل بايتين.',
      en: 'A Buffer is a fixed-size chunk of memory allocated outside the V8 heap, used for raw binary data: files, images, network packets, cryptography.\n\nIt exists because JavaScript historically had no binary type. Today Buffer is effectively a subclass of Uint8Array.\n\n```js\nconst buf = Buffer.from("héllo", "utf8");\nbuf.length;              // byte length, not character count\nbuf.toString("base64");\n```\n\nSecurity note: prefer Buffer.alloc, which zero-fills, over Buffer.allocUnsafe, which can hand you stale memory contents.\n\nPractical note: byte length is not character length — a non-ASCII character takes two or more bytes in UTF-8.',
    },
  },
  {
    id: 'node-best-practices',
    difficulty: beginner,
    question: {
      ar: 'ما هي الممارسات الجيدة في كتابة كود Node.js؟',
      en: 'What are good practices when writing Node.js code?',
    },
    answer: {
      ar: 'ما أطبّقه عمليًا:\n\n1. بنية واضحة: فصل طبقات routes و services و data access بدل وضع منطق العمل داخل الـ controllers.\n2. الاعتماد على async/await وتجنّب الدوال المتزامنة داخل مسار الطلب.\n3. التحقق من كل مدخلات المستخدم على حدود النظام باستخدام Zod أو Joi.\n4. معالجة أخطاء مركزية وعدم ابتلاع الاستثناءات.\n5. الإعدادات من متغيرات البيئة، ولا أسرار في الكود.\n6. تسجيل منظّم (structured logging) بصيغة JSON مع correlation id لكل طلب.\n7. ESLint و Prettier لتوحيد الأسلوب، و TypeScript إن أمكن.\n8. اختبارات: وحدات لمنطق العمل و integration للـ endpoints.\n9. graceful shutdown عند SIGTERM.\n10. تحديث الاعتماديات ومراقبتها بـ npm audit.',
      en: 'What I actually apply:\n\n1. A clear structure — separate routes, services and data access instead of stuffing business logic into controllers.\n2. async/await everywhere, and no synchronous calls inside the request path.\n3. Validate all user input at the system boundary with Zod or Joi.\n4. Centralised error handling, and never swallow exceptions.\n5. Configuration from environment variables; no secrets in the repo.\n6. Structured JSON logging with a correlation id per request.\n7. ESLint and Prettier for consistency, and TypeScript where possible.\n8. Tests: unit tests for business logic, integration tests for endpoints.\n9. Graceful shutdown on SIGTERM.\n10. Keep dependencies current and watch npm audit.',
    },
  },
  {
    id: 'node-common-mistakes',
    difficulty: beginner,
    question: {
      ar: 'ما هي الأخطاء الشائعة التي يجب تجنبها في Node.js؟',
      en: 'What are the most common mistakes to avoid in Node.js?',
    },
    answer: {
      ar: 'الأخطاء التي أراها أكثر من غيرها:\n\n1. استخدام الدوال المتزامنة (readFileSync، وتشفير ثقيل) داخل معالجة الطلبات، فتحجب الـ event loop.\n2. نسيان await أو عدم إعادة الـ Promise، ما ينتج unhandled rejection.\n3. await داخل حلقة لعمليات مستقلة بدل Promise.all.\n4. تسريب تفاصيل الأخطاء و stack traces إلى العميل.\n5. عدم التحقق من المدخلات والاعتماد على الواجهة الأمامية.\n6. تخزين الأسرار في الكود أو رفع ملف .env.\n7. استخدام متغيرات على مستوى الملف لحفظ حالة خاصة بالمستخدم — تنكسر فورًا مع أكثر من instance.\n8. عدم تحديد مهلة (timeout) للطلبات الخارجية.\n9. فتح اتصال جديد بقاعدة البيانات لكل طلب بدل connection pool.\n10. تجاهل معالجة حدث "error" على الـ streams والـ EventEmitters.',
      en: 'The ones I see most often:\n\n1. Synchronous calls (readFileSync, heavy crypto) inside request handling, blocking the event loop.\n2. A missing await or a missing return, producing unhandled rejections.\n3. Awaiting inside a loop for independent work instead of using Promise.all.\n4. Leaking error details and stack traces to the client.\n5. Skipping input validation and trusting the frontend.\n6. Hardcoding secrets or committing .env.\n7. Keeping per-user state in module-level variables — it breaks the moment you run more than one instance.\n8. No timeout on outbound HTTP calls.\n9. Opening a new database connection per request instead of using a pool.\n10. Not handling the "error" event on streams and EventEmitters.',
    },
  },

  // ------------------------------------------------------------ INTERMEDIATE
  {
    id: 'node-event-driven',
    difficulty: intermediate,
    question: {
      ar: 'ما المقصود بالمعمارية event-driven في Node.js؟',
      en: 'What does event-driven architecture mean in Node.js?',
    },
    answer: {
      ar: 'تعني أن التطبيق لا ينتظر النتائج، بل يسجّل ما يجب فعله عند وقوع حدث ثم يتابع عمله.\n\nعندما تطلب قراءة ملف أو استجابة من قاعدة بيانات، يسلّم Node العملية إلى نظام التشغيل ويسجّل callback. عند اكتمال العملية يضع نظام التشغيل الحدث في الطابور، ويلتقطه الـ event loop وينفّذ الـ callback.\n\nالنتيجة: thread واحد يخدم آلاف الاتصالات لأن الوقت الضائع في الانتظار يُستغل في خدمة طلبات أخرى.\n\nهذا النموذج يظهر في كل مكان في Node: الـ streams والـ HTTP server والـ EventEmitter كلها تعمل بالأحداث.\n\nالمقابل هو نموذج thread-per-request في Java التقليدي أو PHP، حيث ينتظر الـ thread نتيجة الـ I/O وتزداد تكلفة الذاكرة مع كل اتصال.',
      en: 'It means the application never sits waiting for a result. It registers what to do when something happens and then carries on.\n\nWhen you request a file read or a database response, Node hands the operation to the OS and registers a callback. When the operation completes, the event is queued, the event loop picks it up and runs the callback.\n\nThe payoff is that one thread serves thousands of connections, because time spent waiting is spent serving other requests instead.\n\nThe pattern is everywhere in Node — streams, the HTTP server and EventEmitter are all event-based.\n\nThe contrast is the thread-per-request model in classic Java or PHP, where a thread blocks on I/O and memory cost grows with every connection.',
    },
  },
  {
    id: 'node-event-loop-phases',
    difficulty: intermediate,
    question: {
      ar: 'ما هي الـ Event Loop في Node.js وما مراحلها؟',
      en: 'What is the event loop in Node.js and what are its phases?',
    },
    answer: {
      ar: 'الـ event loop هو الحلقة التي تنفّذ الـ callbacks الجاهزة بعد أن يفرغ الـ call stack. توفّرها libuv وتمر بمراحل مرتّبة في كل دورة (tick):\n\n1. timers: callbacks الخاصة بـ setTimeout و setInterval التي حان وقتها.\n2. pending callbacks: بعض callbacks نظام التشغيل المؤجلة.\n3. idle / prepare: استخدام داخلي.\n4. poll: المرحلة الأهم — تستقبل أحداث I/O الجديدة وتنفّذ الـ callbacks الخاصة بها، وقد تنتظر فيها الحلقة.\n5. check: callbacks الخاصة بـ setImmediate.\n6. close callbacks: مثل حدث "close" على socket.\n\nنقطة جوهرية: بين كل مرحلتين يُفرَّغ طابورا process.nextTick ثم الـ microtasks (Promises) بالكامل. لذلك تُنفَّذ الـ Promises قبل أي مؤقت.',
      en: 'The event loop is what runs ready callbacks once the call stack is empty. libuv provides it, and each tick moves through ordered phases:\n\n1. timers — due setTimeout and setInterval callbacks.\n2. pending callbacks — certain deferred system callbacks.\n3. idle / prepare — internal use.\n4. poll — the important one: it collects new I/O events and runs their callbacks, and the loop may block here waiting.\n5. check — setImmediate callbacks.\n6. close callbacks — for example a socket "close" event.\n\nThe key detail: between every phase Node drains the process.nextTick queue and then the microtask (Promise) queue completely. That is why promise callbacks always run before any timer.',
    },
  },
  {
    id: 'node-settimeout-setimmediate-nexttick',
    difficulty: intermediate,
    question: {
      ar: 'ما الفرق بين setTimeout و setImmediate و process.nextTick؟',
      en: 'What is the difference between setTimeout, setImmediate and process.nextTick?',
    },
    answer: {
      ar: '• process.nextTick: يُنفَّذ فور انتهاء العملية الحالية وقبل أن يكمل الـ event loop، وله أولوية أعلى حتى من الـ Promises.\n• Promise microtasks: بعد nextTick مباشرة وقبل الانتقال لأي مرحلة.\n• setTimeout(fn, 0): في مرحلة timers من الدورة التالية.\n• setImmediate: في مرحلة check، أي بعد مرحلة الـ poll.\n\n```js\nsetTimeout(() => console.log("timeout"), 0);\nsetImmediate(() => console.log("immediate"));\nprocess.nextTick(() => console.log("nextTick"));\nPromise.resolve().then(() => console.log("promise"));\n// nextTick, promise, ثم timeout/immediate بترتيب غير مضمون\n```\n\nالترتيب بين الأخيرين غير محدد في السياق الرئيسي لأنه يعتمد على أداء الجهاز، لكنه محسوم داخل I/O callback: هناك setImmediate يسبق setTimeout دائمًا.\n\nتحذير: الإفراط في process.nextTick يمكن أن يُجوّع (starve) الـ event loop ويمنع تنفيذ الـ I/O.',
      en: '• process.nextTick runs immediately after the current operation, before the loop continues — higher priority than promises.\n• Promise microtasks run right after the nextTick queue, before moving to any phase.\n• setTimeout(fn, 0) runs in the timers phase of the next iteration.\n• setImmediate runs in the check phase, right after poll.\n\n```js\nsetTimeout(() => console.log("timeout"), 0);\nsetImmediate(() => console.log("immediate"));\nprocess.nextTick(() => console.log("nextTick"));\nPromise.resolve().then(() => console.log("promise"));\n// nextTick, promise, then timeout/immediate in a non-deterministic order\n```\n\nThe order of the last two is not guaranteed in the main module because it depends on machine timing — but inside an I/O callback setImmediate always fires before setTimeout.\n\nA warning worth adding: overusing process.nextTick can starve the event loop and block I/O entirely.',
    },
  },
  {
    id: 'node-event-emitter',
    difficulty: intermediate,
    question: {
      ar: 'ما هو EventEmitter وكيف تستخدمه؟',
      en: 'What is EventEmitter and how do you use it?',
    },
    answer: {
      ar: 'EventEmitter هو تطبيق Node لنمط الـ observer: كائن يصدر أحداثًا مسمّاة، ومستمعون يتفاعلون معها. معظم واجهات Node مبنية عليه: streams و HTTP server و process.\n\n```js\nimport { EventEmitter } from "node:events";\n\nclass OrderService extends EventEmitter {\n  place(order) {\n    this.emit("order:placed", order);\n  }\n}\n\nconst service = new OrderService();\nservice.on("order:placed", (order) => sendEmail(order));\nservice.once("order:placed", (order) => trackFirst(order));\n```\n\nنقاط مهمة في المقابلة:\n1. المستمعون يعملون بشكل متزامن وبترتيب التسجيل، وemit لا يعيد Promise — لذلك لا ينتظر الـ emitter انتهاء مستمع غير متزامن.\n2. حدث "error" بلا مستمع يُسقط العملية بالكامل.\n3. تجاوز عشرة مستمعين لنفس الحدث يعطي تحذير memory leak؛ غالبًا يكون التحذير صحيحًا وسببه نسيان removeListener.',
      en: 'EventEmitter is Node\'s implementation of the observer pattern: an object emits named events and listeners react to them. Most of Node is built on it — streams, the HTTP server, process.\n\n```js\nimport { EventEmitter } from "node:events";\n\nclass OrderService extends EventEmitter {\n  place(order) {\n    this.emit("order:placed", order);\n  }\n}\n\nconst service = new OrderService();\nservice.on("order:placed", (order) => sendEmail(order));\nservice.once("order:placed", (order) => trackFirst(order));\n```\n\nPoints worth raising in an interview:\n1. Listeners run synchronously in registration order, and emit does not return a promise — so the emitter never waits for an async listener.\n2. An "error" event with no listener crashes the process.\n3. More than ten listeners for one event triggers a memory-leak warning, and it is usually a genuine bug caused by a missing removeListener.',
    },
  },
  {
    id: 'node-streams',
    difficulty: intermediate,
    question: {
      ar: 'ما هي Streams في Node.js وما أنواعها؟',
      en: 'What are streams in Node.js and what types exist?',
    },
    answer: {
      ar: 'Stream هو واجهة لمعالجة البيانات على شكل أجزاء (chunks) بدل تحميلها كاملة في الذاكرة.\n\nالأنواع الأربعة:\n• Readable: مصدر للبيانات، مثل fs.createReadStream.\n• Writable: وجهة، مثل fs.createWriteStream و HTTP response.\n• Duplex: قابل للقراءة والكتابة، مثل TCP socket.\n• Transform: Duplex يحوّل البيانات أثناء مرورها، مثل zlib.createGzip.\n\n```js\nimport { pipeline } from "node:stream/promises";\n\nawait pipeline(\n  fs.createReadStream("input.csv"),\n  createGzip(),\n  fs.createWriteStream("input.csv.gz")\n);\n```\n\nالفائدة العملية: نقل ملف بحجم 2GB بقراءة كاملة يستهلك 2GB من الذاكرة، أما بـ streams فيستهلك حجم الـ chunk فقط.\n\nاستخدم pipeline وليس pipe، لأن pipeline يعالج الأخطاء وينظّف الموارد تلقائيًا بينما pipe يترك تسريبات عند حدوث خطأ.',
      en: 'A stream is an interface for processing data in chunks instead of loading it all into memory.\n\nThe four types:\n• Readable — a source, such as fs.createReadStream.\n• Writable — a destination, such as fs.createWriteStream or an HTTP response.\n• Duplex — both, such as a TCP socket.\n• Transform — a duplex stream that modifies data in flight, such as zlib.createGzip.\n\n```js\nimport { pipeline } from "node:stream/promises";\n\nawait pipeline(\n  fs.createReadStream("input.csv"),\n  createGzip(),\n  fs.createWriteStream("input.csv.gz")\n);\n```\n\nThe practical value: copying a 2GB file by reading it whole costs 2GB of memory; with streams it costs one chunk at a time.\n\nUse pipeline rather than pipe — pipeline propagates errors and cleans up resources, while pipe leaks handles when something fails mid-flow.',
    },
  },
  {
    id: 'node-buffer-vs-stream',
    difficulty: intermediate,
    question: {
      ar: 'ما الفرق بين Buffer و Stream ومتى تستخدم كلًا منهما؟',
      en: 'What is the difference between a Buffer and a Stream, and when do you use each?',
    },
    answer: {
      ar: 'Buffer يمثّل البيانات كاملة في الذاكرة دفعة واحدة. Stream يمثّل تدفقًا للبيانات على أجزاء عبر الزمن.\n\nالعلاقة بينهما: الـ stream ينقل chunks، وكل chunk هو Buffer.\n\nمتى Buffer؟ عندما يكون الحجم صغيرًا ومعروفًا وتحتاج البيانات كلها معًا: ملف إعدادات، صورة صغيرة، توقيع تشفيري.\n\nمتى Stream؟ عندما يكون الحجم كبيرًا أو غير معروف أو يصل تدريجيًا: رفع الملفات، تحميلها، معالجة CSV ضخم، ردود الـ HTTP الطويلة.\n\nفرق ملموس في تجربة المستخدم أيضًا: مع الـ stream يبدأ المستخدم في استقبال البيانات فورًا (time to first byte أقل) بدل انتظار تجهيز الملف كاملًا.',
      en: 'A Buffer holds the complete data in memory at once. A Stream delivers data in chunks over time.\n\nThey are related: a stream moves chunks, and each chunk is a Buffer.\n\nUse a Buffer when the payload is small and bounded and you need it all together — a config file, a small image, a cryptographic signature.\n\nUse a Stream when the payload is large, unbounded or arrives progressively — file uploads and downloads, big CSV processing, long HTTP responses.\n\nThere is a user-visible difference too: with a stream the client starts receiving bytes immediately (lower time to first byte) instead of waiting for the whole payload to be assembled.',
    },
  },
  {
    id: 'node-express-middleware',
    difficulty: intermediate,
    question: {
      ar: 'ما هو مفهوم الـ middleware في Express.js؟',
      en: 'What is middleware in Express.js?',
    },
    answer: {
      ar: 'الـ middleware هي دالة تُنفَّذ في سلسلة بين وصول الطلب وإرسال الرد، وتأخذ (req, res, next).\n\nلديها ثلاثة خيارات: تعديل req أو res، أو إنهاء الطلب بالرد، أو تمرير التحكم عبر next().\n\n```js\napp.use(express.json());                 // تحليل الـ body\napp.use(requestLogger);                  // تسجيل\napp.use("/api", authenticate);           // مصادقة لمسار محدد\napp.get("/api/users", listUsers);        // معالج المسار\napp.use(errorHandler);                   // معالج الأخطاء (4 معاملات)\n```\n\nنقاط جوهرية:\n• الترتيب مهم جدًا: الـ middleware يُنفَّذ بترتيب التسجيل.\n• إذا لم تستدعِ next() ولم ترسل ردًا، يتجمّد الطلب حتى انتهاء المهلة.\n• معالج الأخطاء يُميَّز بأربعة معاملات (err, req, res, next) ويجب تسجيله في النهاية.\n• في Express 4، الخطأ داخل دالة async لا يصل تلقائيًا إلى معالج الأخطاء؛ نحتاج wrapper أو try/catch. هذا أُصلح في Express 5.',
      en: 'Middleware is a function that runs in a chain between the incoming request and the outgoing response, with the signature (req, res, next).\n\nIt has three options: modify req/res, end the request by sending a response, or pass control on with next().\n\n```js\napp.use(express.json());                 // body parsing\napp.use(requestLogger);                  // logging\napp.use("/api", authenticate);           // auth for a path prefix\napp.get("/api/users", listUsers);        // route handler\napp.use(errorHandler);                   // error handler (4 params)\n```\n\nThe essentials:\n• Order matters — middleware runs in registration order.\n• If you neither call next() nor send a response, the request hangs until it times out.\n• The error handler is identified by having four parameters (err, req, res, next) and must be registered last.\n• In Express 4 a rejection inside an async handler does not reach the error handler automatically; you need a wrapper or try/catch. Express 5 fixed that.',
    },
  },
  {
    id: 'node-express-rest-api',
    difficulty: intermediate,
    question: {
      ar: 'كيف تبني RESTful API باستخدام Express.js؟',
      en: 'How would you build a RESTful API with Express.js?',
    },
    answer: {
      ar: 'المبدأ: الموارد تُمثَّل بأسماء، والأفعال تأتي من HTTP methods.\n\n```js\nimport express from "express";\nconst router = express.Router();\n\nrouter.get("/users", listUsers);          // 200\nrouter.get("/users/:id", getUser);        // 200 أو 404\nrouter.post("/users", createUser);        // 201 مع Location\nrouter.put("/users/:id", replaceUser);    // 200\nrouter.patch("/users/:id", updateUser);   // 200\nrouter.delete("/users/:id", deleteUser);  // 204\n\napp.use("/api/v1", router);\n```\n\nما يميز API جيدًا عن مجرد endpoints:\n• رموز حالة صحيحة ومتسقة وأخطاء بصيغة موحّدة.\n• التحقق من المدخلات قبل الوصول لطبقة الأعمال.\n• pagination للقوائم (limit/cursor) وعدم إرجاع كل السجلات.\n• إصدارات (versioning) عبر ‎/v1‎.\n• فصل الطبقات: route → controller → service → repository.\n• عدم إرجاع كيانات قاعدة البيانات مباشرة، بل تحويلها إلى شكل استجابة صريح لتجنّب تسريب حقول مثل password_hash.',
      en: 'The principle is that resources are nouns and the verbs come from HTTP methods.\n\n```js\nimport express from "express";\nconst router = express.Router();\n\nrouter.get("/users", listUsers);          // 200\nrouter.get("/users/:id", getUser);        // 200 or 404\nrouter.post("/users", createUser);        // 201 with Location\nrouter.put("/users/:id", replaceUser);    // 200\nrouter.patch("/users/:id", updateUser);   // 200\nrouter.delete("/users/:id", deleteUser);  // 204\n\napp.use("/api/v1", router);\n```\n\nWhat separates a good API from a pile of endpoints:\n• Correct, consistent status codes and a single error response shape.\n• Input validation before anything reaches the business layer.\n• Pagination on collections (limit/cursor) instead of returning everything.\n• Versioning under /v1.\n• Layering: route → controller → service → repository.\n• Never returning database entities directly — map them to an explicit response shape so you do not leak fields such as password_hash.',
    },
  },
  {
    id: 'node-request-lifecycle',
    difficulty: intermediate,
    question: {
      ar: 'اشرح دورة حياة الطلب (request lifecycle) في تطبيق Node.js/Express.',
      en: 'Walk me through the request lifecycle in a Node.js/Express application.',
    },
    answer: {
      ar: 'الرحلة الكاملة:\n\n1. يصل اتصال TCP، ويحوّله وحدة http إلى كائني req و res (وكلاهما stream).\n2. تُوضع معالجة الطلب كـ callback في الـ event loop.\n3. يمر الطلب عبر سلسلة الـ middleware بالترتيب: CORS، ثم تحليل الـ body، ثم التسجيل، ثم المصادقة.\n4. يطابق Express الـ router المسار والـ method ويستدعي المعالج.\n5. المعالج يستدعي طبقة الخدمة، والتي بدورها تنفّذ I/O (قاعدة بيانات أو API خارجي). هنا يُسلَّم العمل وتتحرر الحلقة لخدمة طلبات أخرى.\n6. عند وصول النتيجة تُستأنف الدالة ويُرسل الرد عبر res.json أو res.send.\n7. أي خطأ يمر عبر next(error) إلى معالج الأخطاء المركزي.\n8. يُغلق الاتصال أو يُبقى مفتوحًا بـ keep-alive.\n\nالنقطة التي تستحق التأكيد: أثناء الخطوة الخامسة لا يكون هناك thread "ينتظر" — هذا جوهر نموذج Node.',
      en: 'The full journey:\n\n1. A TCP connection arrives and the http module turns it into req and res objects (both streams).\n2. Handling that request is scheduled as a callback on the event loop.\n3. The request walks the middleware chain in order: CORS, body parsing, logging, authentication.\n4. The router matches path and method and invokes the handler.\n5. The handler calls the service layer, which performs I/O against a database or an external API. At that point the work is handed off and the loop is free to serve other requests.\n6. When the result arrives the function resumes and the response goes out via res.json or res.send.\n7. Any error travels through next(error) to the centralised error handler.\n8. The connection closes, or stays open under keep-alive.\n\nThe point worth emphasising is step 5: no thread is sitting there waiting. That is the whole idea behind Node\'s model.',
    },
  },
  {
    id: 'node-error-middleware',
    difficulty: intermediate,
    question: {
      ar: 'كيف تصمم معالجة أخطاء مركزية في Express؟',
      en: 'How do you design centralised error handling in Express?',
    },
    answer: {
      ar: 'أستخدم ثلاثة عناصر: صنف خطأ مخصص، و wrapper للدوال غير المتزامنة، و middleware واحد في النهاية.\n\n```js\nclass AppError extends Error {\n  constructor(message, statusCode = 500, code = "INTERNAL") {\n    super(message);\n    this.statusCode = statusCode;\n    this.code = code;\n    this.isOperational = true;   // خطأ متوقع وليس خللًا برمجيًا\n  }\n}\n\nconst asyncHandler = (fn) => (req, res, next) =>\n  Promise.resolve(fn(req, res, next)).catch(next);\n\napp.use((err, req, res, next) => {\n  const status = err.statusCode ?? 500;\n  logger.error({ err, requestId: req.id });\n  res.status(status).json({\n    error: {\n      code: err.code ?? "INTERNAL",\n      message: err.isOperational ? err.message : "Internal server error",\n    },\n  });\n});\n```\n\nالفكرة المحورية: التمييز بين الأخطاء التشغيلية المتوقعة (تُعاد للمستخدم برسالة واضحة) والأخطاء البرمجية (تُسجَّل بتفاصيلها ويُعاد للمستخدم رسالة عامة فقط، حتى لا نسرّب تفاصيل داخلية).',
      en: 'I use three pieces: a custom error class, a wrapper for async handlers, and one middleware at the end of the chain.\n\n```js\nclass AppError extends Error {\n  constructor(message, statusCode = 500, code = "INTERNAL") {\n    super(message);\n    this.statusCode = statusCode;\n    this.code = code;\n    this.isOperational = true;   // expected, not a bug\n  }\n}\n\nconst asyncHandler = (fn) => (req, res, next) =>\n  Promise.resolve(fn(req, res, next)).catch(next);\n\napp.use((err, req, res, next) => {\n  const status = err.statusCode ?? 500;\n  logger.error({ err, requestId: req.id });\n  res.status(status).json({\n    error: {\n      code: err.code ?? "INTERNAL",\n      message: err.isOperational ? err.message : "Internal server error",\n    },\n  });\n});\n```\n\nThe central idea is the distinction between operational errors, which you surface to the client with a useful message, and programmer errors, which you log in full but answer with a generic message so you do not leak internals.',
    },
  },
  {
    id: 'node-authentication',
    difficulty: intermediate,
    question: {
      ar: 'كيف تُنفَّذ المصادقة (Authentication) في تطبيق Node.js؟',
      en: 'How do you implement authentication in a Node.js application?',
    },
    answer: {
      ar: 'الخطوات الأساسية:\n\n1. التسجيل: تجزئة (hash) كلمة المرور بـ bcrypt أو argon2 — لا تُخزَّن كلمة المرور أبدًا كنص.\n2. تسجيل الدخول: التحقق عبر bcrypt.compare ثم إصدار بيانات اعتماد للجلسة.\n3. كل طلب لاحق: middleware يتحقق من بيانات الاعتماد ويضع المستخدم على req.user.\n\nخياران للجلسة:\n• Sessions مع تخزين على الخادم (Redis غالبًا): الحالة على الخادم، فالإبطال (revocation) فوري، لكنها تحتاج مخزنًا مشتركًا.\n• JWT: الحالة داخل التوكن نفسه، فلا حاجة لمخزن، لكن لا يمكن إبطال التوكن قبل انتهاء صلاحيته.\n\nنقاط أمنية:\n• خزّن التوكن في httpOnly cookie مع secure و sameSite بدل localStorage لتجنّب سرقته عبر XSS.\n• استخدم access token قصير العمر مع refresh token.\n• حدّد معدل المحاولات (rate limiting) على مسار تسجيل الدخول.\n\nملاحظة مهمة للتفريق: Authentication تجيب عن "من أنت؟"، و Authorization تجيب عن "ما الذي يُسمح لك به؟".',
      en: 'The basic flow:\n\n1. Registration: hash the password with bcrypt or argon2 — never store it in plain text.\n2. Login: verify with bcrypt.compare, then issue a session credential.\n3. Every later request: middleware validates the credential and attaches the user to req.user.\n\nTwo options for the session:\n• Server-side sessions, usually backed by Redis — state lives on the server, so revocation is immediate, but you need a shared store.\n• JWT — state lives in the token, so no store is needed, but you cannot revoke a token before it expires.\n\nSecurity points:\n• Store the token in an httpOnly cookie with secure and sameSite rather than localStorage, so XSS cannot steal it.\n• Use a short-lived access token plus a refresh token.\n• Rate-limit the login endpoint.\n\nAnd the distinction worth stating: authentication answers "who are you?", authorization answers "what are you allowed to do?".',
    },
  },
  {
    id: 'node-jwt',
    difficulty: intermediate,
    question: {
      ar: 'ما هو JWT وكيف يعمل؟ وما حدوده؟',
      en: 'What is a JWT, how does it work, and what are its limitations?',
    },
    answer: {
      ar: 'JWT هو توكن موقّع يتكون من ثلاثة أجزاء مفصولة بنقطة: header.payload.signature.\n\nالـ header يحدد الخوارزمية، والـ payload يحمل البيانات (claims) مثل sub و exp، والـ signature يضمن أن المحتوى لم يُعدَّل.\n\n```js\nconst token = jwt.sign({ sub: user.id, role: user.role }, secret, { expiresIn: "15m" });\nconst payload = jwt.verify(token, secret);\n```\n\nنقطة يخطئ فيها كثيرون: الـ payload مُرمَّز بـ Base64 وليس مشفّرًا — أي شخص يستطيع قراءته. لا تضع فيه بيانات حساسة أبدًا.\n\nالحدود:\n• لا يمكن إبطال التوكن قبل انتهاء صلاحيته إلا بإضافة قائمة حظر، وهذا يلغي ميزة انعدام الحالة.\n• حجمه أكبر من session id ويُرسل مع كل طلب.\n• الصلاحيات المضمَّنة فيه تبقى قديمة حتى ينتهي.\n\nالحل العملي: access token قصير (دقائق) + refresh token طويل قابل للإبطال ومخزَّن على الخادم.\n\nتنبيه أمني: ارفض دائمًا الخوارزمية "none" وحدّد الخوارزمية المتوقعة صراحةً عند التحقق.',
      en: 'A JWT is a signed token with three dot-separated parts: header.payload.signature.\n\nThe header names the algorithm, the payload carries claims such as sub and exp, and the signature proves the content was not tampered with.\n\n```js\nconst token = jwt.sign({ sub: user.id, role: user.role }, secret, { expiresIn: "15m" });\nconst payload = jwt.verify(token, secret);\n```\n\nA point many people get wrong: the payload is Base64-encoded, not encrypted — anyone can read it. Never put sensitive data there.\n\nThe limitations:\n• You cannot revoke a token before expiry without a denylist, which throws away the stateless benefit.\n• It is larger than a session id and travels on every request.\n• Embedded permissions go stale until the token expires.\n\nThe practical answer is a short-lived access token (minutes) plus a long-lived, revocable refresh token stored server-side.\n\nSecurity note: always reject the "none" algorithm and pin the expected algorithm explicitly when verifying.',
    },
  },
  {
    id: 'node-sessions',
    difficulty: intermediate,
    question: {
      ar: 'ما هو مفهوم الـ session في Node.js وكيف يختلف عن JWT؟',
      en: 'What is a session in Node.js and how does it differ from a JWT?',
    },
    answer: {
      ar: 'الـ session هي حالة يحتفظ بها الخادم لكل مستخدم مسجّل. يرسل الخادم للمتصفح session id داخل cookie، ويستخدمه لاحقًا لاسترجاع البيانات من المخزن.\n\n```js\napp.use(session({\n  store: new RedisStore({ client }),\n  secret: process.env.SESSION_SECRET,\n  cookie: { httpOnly: true, secure: true, sameSite: "lax", maxAge: 86400000 },\n}));\n```\n\nالفروق عن JWT:\n• التخزين: الـ session على الخادم، والـ JWT عند العميل.\n• الإبطال: فوري مع الـ session، ومعقّد مع JWT.\n• التوسّع: الـ session تحتاج مخزنًا مشتركًا مثل Redis عند تشغيل عدة instances؛ لا تستخدم MemoryStore في الإنتاج لأنها لا تعمل مع أكثر من عملية وتسرّب الذاكرة.\n\nمتى أختار أيًا منهما؟ الـ sessions أنسب للتطبيقات التقليدية وللحالات التي يهم فيها إنهاء الجلسة فورًا، و JWT أنسب للـ APIs عديمة الحالة وللتواصل بين الخدمات.',
      en: 'A session is server-side state kept per authenticated user. The server sends the browser a session id in a cookie and uses it to look the data back up in a store.\n\n```js\napp.use(session({\n  store: new RedisStore({ client }),\n  secret: process.env.SESSION_SECRET,\n  cookie: { httpOnly: true, secure: true, sameSite: "lax", maxAge: 86400000 },\n}));\n```\n\nCompared with a JWT:\n• Storage: session state lives on the server, JWT state lives on the client.\n• Revocation: immediate with sessions, awkward with JWTs.\n• Scaling: sessions need a shared store such as Redis once you run multiple instances. Never use MemoryStore in production — it does not work across processes and it leaks memory.\n\nWhen do I pick which? Sessions suit traditional applications and anywhere immediate logout matters; JWTs suit stateless APIs and service-to-service calls.',
    },
  },
  {
    id: 'node-cookies',
    difficulty: intermediate,
    question: {
      ar: 'كيف تتعامل مع الـ Cookies بشكل آمن في Node.js؟',
      en: 'How do you handle cookies securely in Node.js?',
    },
    answer: {
      ar: 'الإرسال:\n```js\nres.cookie("session", id, {\n  httpOnly: true,     // يمنع قراءتها من JavaScript — حماية من XSS\n  secure: true,       // HTTPS فقط\n  sameSite: "lax",    // حماية من CSRF\n  maxAge: 24 * 60 * 60 * 1000,\n  path: "/",\n});\n```\n\nشرح الخيارات:\n• httpOnly: أهم خيار أمني لتوكنات الجلسة.\n• secure: يمنع إرسالها عبر HTTP غير المشفّر.\n• sameSite: "strict" أقوى لكنه يكسر الروابط الخارجية، و"lax" هو التوازن العملي، و"none" يتطلب secure ويُستخدم عبر النطاقات.\n• maxAge/expires: بدونهما تصبح session cookie تُحذف بإغلاق المتصفح.\n\nملاحظات: حجم الـ cookie محدود بنحو 4KB وتُرسل مع كل طلب لنفس النطاق، لذلك لا تضع فيها بيانات كبيرة. وللبيانات التي يجب ألا يعبث بها العميل استخدم signed cookies أو احتفظ بالبيانات على الخادم.',
      en: 'Setting one:\n```js\nres.cookie("session", id, {\n  httpOnly: true,     // unreadable from JavaScript — XSS protection\n  secure: true,       // HTTPS only\n  sameSite: "lax",    // CSRF protection\n  maxAge: 24 * 60 * 60 * 1000,\n  path: "/",\n});\n```\n\nWhat the flags do:\n• httpOnly is the single most important flag for session tokens.\n• secure prevents the cookie from travelling over plain HTTP.\n• sameSite: "strict" is strongest but breaks inbound links; "lax" is the practical balance; "none" requires secure and is for cross-site use.\n• Without maxAge/expires you get a session cookie that disappears when the browser closes.\n\nOther notes: cookies are capped around 4KB and are sent on every same-origin request, so keep them small. For values the client must not tamper with, use signed cookies or keep the data server-side.',
    },
  },
  {
    id: 'node-cors',
    difficulty: intermediate,
    question: {
      ar: 'ما هو CORS وكيف تتعامل معه في Node.js؟',
      en: 'What is CORS and how do you handle it in Node.js?',
    },
    answer: {
      ar: 'CORS آلية أمان في المتصفح تمنع صفحة على نطاق ما من قراءة استجابة نطاق آخر ما لم يسمح الخادم بذلك عبر رؤوس (headers) صريحة.\n\nنقطة مهمة: الخطأ يظهر في المتصفح لكن الحل يكون على الخادم — والقيد لا يوجد أصلًا في الطلبات من خادم إلى خادم أو من Postman.\n\n```js\nimport cors from "cors";\n\napp.use(cors({\n  origin: ["https://app.example.com"],   // قائمة صريحة لا "*"\n  credentials: true,\n  methods: ["GET", "POST", "PUT", "DELETE"],\n}));\n```\n\nتفاصيل تُسأل عنها كثيرًا:\n• الطلبات غير البسيطة (PUT، أو رأس Authorization، أو Content-Type: application/json) تُسبق بطلب preflight من نوع OPTIONS يجب أن يردّ عليه الخادم.\n• لا يمكن الجمع بين origin: "*" و credentials: true؛ يجب تحديد النطاق صراحةً.\n• CORS ليس حماية للـ API: من ينتحل الهوية لا يستخدم متصفحًا. الحماية الحقيقية هي المصادقة والتفويض.',
      en: 'CORS is a browser security mechanism that stops a page on one origin from reading a response from another origin unless the server explicitly allows it through response headers.\n\nAn important framing: the error appears in the browser but the fix belongs on the server — and the restriction does not exist at all for server-to-server calls or Postman.\n\n```js\nimport cors from "cors";\n\napp.use(cors({\n  origin: ["https://app.example.com"],   // an explicit list, not "*"\n  credentials: true,\n  methods: ["GET", "POST", "PUT", "DELETE"],\n}));\n```\n\nDetails interviewers probe:\n• Non-simple requests (PUT, an Authorization header, Content-Type: application/json) are preceded by an OPTIONS preflight the server must answer.\n• You cannot combine origin: "*" with credentials: true — the origin must be explicit.\n• CORS is not API security: an attacker forging requests is not using a browser. Authentication and authorization are the real protection.',
    },
  },
  {
    id: 'node-validation',
    difficulty: intermediate,
    question: {
      ar: 'كيف تتحقق من صحة المدخلات (validation) في Node.js؟ ولماذا هو ضروري؟',
      en: 'How do you validate input in Node.js, and why does it matter?',
    },
    answer: {
      ar: 'القاعدة: كل ما يأتي من خارج الخادم غير موثوق — الـ body والـ query والـ params والـ headers والملفات.\n\nأستخدم schema validation على حدود النظام:\n```js\nimport { z } from "zod";\n\nconst createUserSchema = z.object({\n  email: z.string().email(),\n  age: z.number().int().min(18),\n  role: z.enum(["user", "admin"]),\n});\n\nconst validate = (schema) => (req, res, next) => {\n  const result = schema.safeParse(req.body);\n  if (!result.success) {\n    return res.status(400).json({ error: "VALIDATION_ERROR", details: result.error.issues });\n  }\n  req.body = result.data;   // بيانات نظيفة ومحوّلة الأنواع\n  next();\n};\n\napp.post("/users", validate(createUserSchema), createUser);\n```\n\nلماذا هو ضروري؟ لأن التحقق في الواجهة الأمامية تجربة مستخدم فقط ويمكن تجاوزه بسهولة. التحقق على الخادم هو ما يمنع البيانات الفاسدة وهجمات الحقن وmass assignment.\n\nميزة إضافية لـ Zod: يستنتج أنواع TypeScript من الـ schema، فتحصل على أمان الأنواع والتحقق وقت التشغيل من تعريف واحد.',
      en: 'The rule is that everything arriving from outside the server is untrusted — body, query, params, headers and uploaded files.\n\nI validate with a schema at the boundary:\n```js\nimport { z } from "zod";\n\nconst createUserSchema = z.object({\n  email: z.string().email(),\n  age: z.number().int().min(18),\n  role: z.enum(["user", "admin"]),\n});\n\nconst validate = (schema) => (req, res, next) => {\n  const result = schema.safeParse(req.body);\n  if (!result.success) {\n    return res.status(400).json({ error: "VALIDATION_ERROR", details: result.error.issues });\n  }\n  req.body = result.data;   // clean, coerced data\n  next();\n};\n\napp.post("/users", validate(createUserSchema), createUser);\n```\n\nWhy it matters: frontend validation is a UX feature and trivially bypassed. Server-side validation is what actually prevents corrupt data, injection and mass-assignment bugs.\n\nA bonus with Zod: it infers TypeScript types from the schema, so one definition gives you both compile-time types and runtime validation.',
    },
  },
  {
    id: 'node-file-uploads',
    difficulty: intermediate,
    question: {
      ar: 'كيف تتعامل مع رفع الملفات في Node.js؟',
      en: 'How do you handle file uploads in Node.js?',
    },
    answer: {
      ar: 'الملفات تصل بصيغة multipart/form-data، وتحتاج معالجًا مثل multer أو busboy.\n\n```js\nconst upload = multer({\n  storage: multer.diskStorage({ destination: "/tmp/uploads" }),\n  limits: { fileSize: 5 * 1024 * 1024 },\n  fileFilter: (req, file, cb) => {\n    const allowed = ["image/jpeg", "image/png"];\n    cb(null, allowed.includes(file.mimetype));\n  },\n});\n\napp.post("/avatar", upload.single("avatar"), handler);\n```\n\nنقاط مهمة:\n• حدّد fileSize دائمًا، وإلا فتحت باب هجوم استنزاف القرص أو الذاكرة.\n• لا تثق بامتداد الملف ولا بـ mimetype القادم من العميل؛ افحص التوقيع الفعلي (magic bytes).\n• لا تستخدم اسم الملف الأصلي — ولّد اسمًا عشوائيًا لتجنّب path traversal والكتابة فوق ملفات أخرى.\n• في الإنتاج لا تخزّن الملفات على قرص الخادم، بل ارفعها إلى S3 أو ما يعادله، ويفضّل عبر presigned URL ليرفع العميل مباشرة دون المرور بخادمك.\n• للملفات الكبيرة استخدم streaming بدل التخزين المؤقت في الذاكرة.',
      en: 'Files arrive as multipart/form-data, which needs a parser such as multer or busboy.\n\n```js\nconst upload = multer({\n  storage: multer.diskStorage({ destination: "/tmp/uploads" }),\n  limits: { fileSize: 5 * 1024 * 1024 },\n  fileFilter: (req, file, cb) => {\n    const allowed = ["image/jpeg", "image/png"];\n    cb(null, allowed.includes(file.mimetype));\n  },\n});\n\napp.post("/avatar", upload.single("avatar"), handler);\n```\n\nWhat matters:\n• Always set a fileSize limit, otherwise you have opened a disk/memory exhaustion attack.\n• Do not trust the extension or the client-supplied mimetype; check the actual magic bytes.\n• Never reuse the original filename — generate a random one to avoid path traversal and overwrites.\n• In production do not store files on the app server. Push them to S3 or equivalent, ideally with a presigned URL so the client uploads directly and never touches your server.\n• For large files, stream rather than buffering in memory.',
    },
  },
  {
    id: 'node-logging',
    difficulty: intermediate,
    question: {
      ar: 'كيف تتعامل مع التسجيل (Logging) في تطبيق Node.js؟',
      en: 'How do you approach logging in a Node.js application?',
    },
    answer: {
      ar: 'القاعدة الأولى: console.log لا يكفي في الإنتاج. أحتاج تسجيلًا منظّمًا بصيغة JSON حتى يمكن البحث فيه وتجميعه.\n\nأستخدم Pino لأنه سريع جدًا ويكتب JSON افتراضيًا:\n```js\nimport pino from "pino";\nconst logger = pino({ level: process.env.LOG_LEVEL ?? "info" });\n\nlogger.info({ userId, orderId, durationMs }, "order created");\n```\n\nما أحرص عليه:\n• مستويات واضحة: error للأخطاء التي تحتاج تدخلًا، warn للمواقف المريبة، info لأحداث العمل، debug للتفاصيل.\n• correlation id لكل طلب يُمرَّر عبر كل الطبقات، وإلا يستحيل تتبّع طلب واحد في نظام مزدحم.\n• عدم تسجيل بيانات حساسة: كلمات المرور، التوكنات، أرقام البطاقات. Pino يدعم redact لحجب الحقول.\n• الكتابة إلى stdout وترك جمع السجلات لمنصة التشغيل، لا الكتابة إلى ملفات داخل الحاوية.\n• تسجيل الخطأ مرة واحدة عند حدوده، لا في كل طبقة يمر بها.',
      en: 'First rule: console.log is not enough in production. I want structured JSON logs that can be searched and aggregated.\n\nI use Pino because it is very fast and writes JSON by default:\n```js\nimport pino from "pino";\nconst logger = pino({ level: process.env.LOG_LEVEL ?? "info" });\n\nlogger.info({ userId, orderId, durationMs }, "order created");\n```\n\nWhat I insist on:\n• Meaningful levels — error for things needing action, warn for suspicious conditions, info for business events, debug for detail.\n• A correlation id per request, threaded through every layer. Without it you cannot follow a single request through a busy system.\n• Never log secrets — passwords, tokens, card numbers. Pino supports redact for exactly this.\n• Write to stdout and let the platform collect logs, rather than writing files inside the container.\n• Log an error once, at its boundary, not at every layer it passes through.',
    },
  },
  {
    id: 'node-db-connections',
    difficulty: intermediate,
    question: {
      ar: 'كيف تدير الاتصال بقاعدة البيانات في Node.js؟ وما هو connection pooling؟',
      en: 'How do you manage database connections in Node.js, and what is connection pooling?',
    },
    answer: {
      ar: 'فتح اتصال جديد بقاعدة البيانات لكل طلب مكلف جدًا: مصافحة TCP، ومصادقة، وتخصيص موارد على الخادم. الحل هو connection pool.\n\nالـ pool يحتفظ بمجموعة اتصالات مفتوحة جاهزة؛ يستعير الطلب اتصالًا ثم يعيده بدل إغلاقه.\n\n```js\nimport pg from "pg";\n\nconst pool = new pg.Pool({\n  connectionString: process.env.DATABASE_URL,\n  max: 20,                        // أقصى عدد اتصالات\n  idleTimeoutMillis: 30000,\n  connectionTimeoutMillis: 5000,\n});\n\nconst { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [id]);\n```\n\nنقاط مهمة:\n• أنشئ الـ pool مرة واحدة عند بدء التشغيل، لا داخل المعالجات.\n• احسب الحجم بوعي: إذا كان لديك 10 نسخ من التطبيق بحجم pool 20 لكل منها، فأنت تطلب 200 اتصالًا وقد تتجاوز حد قاعدة البيانات.\n• حدّد دائمًا connectionTimeout حتى لا تتعلق الطلبات إلى الأبد.\n• أغلق الـ pool عند الإيقاف ضمن الـ graceful shutdown.\n• استخدم دائمًا parameterized queries ($1) وليس دمج النصوص، لمنع SQL Injection.',
      en: 'Opening a new database connection per request is expensive: TCP handshake, authentication and server-side resource allocation. The answer is a connection pool.\n\nA pool keeps a set of open connections ready; a request borrows one and returns it instead of closing it.\n\n```js\nimport pg from "pg";\n\nconst pool = new pg.Pool({\n  connectionString: process.env.DATABASE_URL,\n  max: 20,                        // maximum connections\n  idleTimeoutMillis: 30000,\n  connectionTimeoutMillis: 5000,\n});\n\nconst { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [id]);\n```\n\nWhat matters:\n• Create the pool once at startup, never inside a handler.\n• Size it deliberately: ten app instances with a pool of 20 each is 200 connections, which may exceed what the database allows.\n• Always set a connection timeout so requests cannot hang forever.\n• Close the pool during graceful shutdown.\n• Always use parameterized queries ($1) rather than string concatenation, to prevent SQL injection.',
    },
  },
  {
    id: 'node-nosql',
    difficulty: intermediate,
    question: {
      ar: 'ما هو NoSQL؟ وكيف يتعامل Node.js مع قواعد البيانات؟',
      en: 'What is NoSQL, and how does Node.js work with databases?',
    },
    answer: {
      ar: 'NoSQL مصطلح يجمع قواعد بيانات لا تتبع النموذج العلائقي، وأنواعها الرئيسية: document (MongoDB) وkey-value (Redis) وcolumn-family (Cassandra) وgraph (Neo4j).\n\nيتعامل Node.js معها عبر سائقات (drivers) أو طبقات ORM/ODM:\n• SQL: pg و mysql2، وفوقها Prisma أو Drizzle أو Sequelize.\n• MongoDB: السائق الرسمي أو Mongoose.\n• Redis: ioredis أو node-redis.\n\nمتى SQL ومتى NoSQL؟\n• SQL عندما تكون العلاقات مهمة وتحتاج معاملات (transactions) وضمانات اتساق قوية — وهو الخيار الافتراضي الآمن لمعظم التطبيقات.\n• NoSQL عندما يكون المخطط متغيرًا أو الحجم ضخمًا مع أنماط وصول بسيطة ومعروفة مسبقًا.\n\nملاحظة مهمة: قواعد البيانات العلائقية الحديثة تدعم JSON أيضًا، لذلك "مرونة المخطط" وحدها لم تعد سببًا كافيًا لاختيار NoSQL.',
      en: 'NoSQL is an umbrella term for databases that do not follow the relational model. The main families are document (MongoDB), key-value (Redis), column-family (Cassandra) and graph (Neo4j).\n\nNode talks to them through drivers or an ORM/ODM layer:\n• SQL: pg, mysql2, with Prisma, Drizzle or Sequelize on top.\n• MongoDB: the official driver or Mongoose.\n• Redis: ioredis or node-redis.\n\nWhen do I choose which?\n• SQL when relationships matter and you need transactions and strong consistency guarantees — it is the safe default for most applications.\n• NoSQL when the schema genuinely varies, or the volume is huge with simple, known-in-advance access patterns.\n\nOne caveat: modern relational databases handle JSON well, so "schema flexibility" alone is no longer a sufficient reason to reach for NoSQL.',
    },
  },
  {
    id: 'node-websocket',
    difficulty: intermediate,
    question: {
      ar: 'كيف تستخدم WebSocket في Node.js؟ ومتى تفضّله على HTTP؟',
      en: 'How do you use WebSockets in Node.js, and when would you prefer them over HTTP?',
    },
    answer: {
      ar: 'WebSocket يوفّر قناة اتصال ثنائية الاتجاه ومستمرة فوق TCP، تبدأ بطلب HTTP ثم تُرقّى (upgrade) إلى بروتوكول ws.\n\n```js\nimport { WebSocketServer } from "ws";\n\nconst wss = new WebSocketServer({ server });\n\nwss.on("connection", (socket, req) => {\n  socket.on("message", (data) => {\n    socket.send(JSON.stringify({ echo: data.toString() }));\n  });\n  socket.on("close", () => cleanup(socket));\n});\n```\n\nمتى أستخدمه؟ عندما يحتاج الخادم إلى دفع البيانات للعميل بشكل متكرر ومنخفض التأخير: المحادثات، الإشعارات اللحظية، لوحات التحكم الحية، الألعاب، التحرير التعاوني.\n\nمتى لا أستخدمه؟ في الطلب/الرد العادي — HTTP أبسط وأسهل في التخزين المؤقت والتوسّع. وإذا كان التدفق في اتجاه واحد فقط من الخادم إلى العميل، فإن Server-Sent Events أبسط ويعمل فوق HTTP العادي مع إعادة اتصال تلقائية.\n\nتحديات الإنتاج: التوسّع الأفقي يحتاج sticky sessions أو Redis adapter لتوزيع الرسائل بين النسخ، كما تحتاج ping/pong لاكتشاف الاتصالات الميتة، وإعادة اتصال من طرف العميل.',
      en: 'A WebSocket gives you a persistent, bidirectional channel over TCP. It starts as an HTTP request that is upgraded to the ws protocol.\n\n```js\nimport { WebSocketServer } from "ws";\n\nconst wss = new WebSocketServer({ server });\n\nwss.on("connection", (socket, req) => {\n  socket.on("message", (data) => {\n    socket.send(JSON.stringify({ echo: data.toString() }));\n  });\n  socket.on("close", () => cleanup(socket));\n});\n```\n\nWhen do I use them? When the server needs to push data frequently with low latency: chat, live notifications, live dashboards, games, collaborative editing.\n\nWhen would I not? For ordinary request/response — HTTP is simpler to cache and scale. And if the flow is only server-to-client, Server-Sent Events are simpler, run over plain HTTP and reconnect automatically.\n\nProduction challenges: horizontal scaling needs sticky sessions or a Redis adapter to fan messages across instances, you need ping/pong heartbeats to detect dead connections, and the client needs reconnection logic.',
    },
  },
  {
    id: 'node-cluster-module',
    difficulty: intermediate,
    question: {
      ar: 'ما هو Cluster Module في Node.js؟',
      en: 'What is the cluster module in Node.js?',
    },
    answer: {
      ar: 'يعمل Node.js على thread واحد لتنفيذ JavaScript، أي أنه يستخدم نواة معالج واحدة. وحدة cluster تحل ذلك بتشغيل عدة عمليات (workers) تتشارك نفس المنفذ، ويوزّع النظام الاتصالات بينها.\n\n```js\nimport cluster from "node:cluster";\nimport os from "node:os";\n\nif (cluster.isPrimary) {\n  for (let i = 0; i < os.availableParallelism(); i++) cluster.fork();\n  cluster.on("exit", () => cluster.fork());   // إعادة تشغيل worker منهار\n} else {\n  startServer();\n}\n```\n\nنقاط مهمة:\n• كل worker عملية منفصلة بذاكرة مستقلة؛ لا يمكن مشاركة المتغيرات بينها. أي حالة مشتركة يجب أن تكون في Redis أو قاعدة البيانات.\n• cluster يزيد الإنتاجية للأحمال كثيفة I/O، لكنه لا يحل مشكلة عملية واحدة تحجب الـ event loop — لذلك ما زلت تحتاج Worker Threads للعمليات الحسابية.\n• في بيئات الحاويات (Docker/Kubernetes) غالبًا لا نستخدم cluster، بل نشغّل عملية واحدة لكل حاوية ونترك التوسّع للمنسّق. PM2 في وضع cluster بديل شائع خارج هذه البيئات.',
      en: 'Node executes JavaScript on a single thread, which means one CPU core. The cluster module works around that by forking several worker processes that share the same port, with the OS distributing connections among them.\n\n```js\nimport cluster from "node:cluster";\nimport os from "node:os";\n\nif (cluster.isPrimary) {\n  for (let i = 0; i < os.availableParallelism(); i++) cluster.fork();\n  cluster.on("exit", () => cluster.fork());   // restart a crashed worker\n} else {\n  startServer();\n}\n```\n\nKey points:\n• Each worker is a separate process with its own memory — you cannot share variables. Shared state must live in Redis or the database.\n• Cluster increases throughput for I/O-heavy workloads, but it does not fix one process blocking its own event loop; CPU-bound work still needs Worker Threads.\n• In containerised environments you often skip cluster entirely: run one process per container and let the orchestrator scale. Outside those environments, PM2 in cluster mode is the common shortcut.',
    },
  },
  {
    id: 'node-child-process',
    difficulty: intermediate,
    question: {
      ar: 'ما هي Child Processes في Node.js وما الفرق بين spawn و exec و fork؟',
      en: 'What are child processes in Node.js, and how do spawn, exec and fork differ?',
    },
    answer: {
      ar: 'وحدة child_process تسمح بتشغيل عمليات نظام منفصلة، إما لتنفيذ أوامر خارجية أو لنقل عمل ثقيل خارج العملية الرئيسية.\n\n• spawn: يشغّل أمرًا ويعيد streams. الأفضل للمخرجات الكبيرة أو الطويلة لأنه لا يخزّنها في الذاكرة.\n• exec: يشغّل أمرًا عبر shell ويجمع كل المخرجات في buffer. مريح للأوامر القصيرة، وخطِر مع مدخلات المستخدم بسبب إمكانية command injection.\n• execFile: مثل exec لكن بدون shell، وهو أكثر أمانًا.\n• fork: حالة خاصة تشغّل ملف Node.js جديدًا وتفتح قناة اتصال IPC بين العمليتين.\n\n```js\nimport { spawn } from "node:child_process";\n\nconst ffmpeg = spawn("ffmpeg", ["-i", input, output]);\nffmpeg.stderr.on("data", (chunk) => logger.debug(chunk.toString()));\nffmpeg.on("close", (code) => done(code));\n```\n\nقاعدة أمنية: لا تمرّر مدخلات مستخدم إلى exec مطلقًا؛ استخدم spawn أو execFile مع مصفوفة وسائط.\n\nمتى child process ومتى worker thread؟ العملية المنفصلة أنسب لتشغيل برامج خارجية وللعزل الكامل، والـ worker thread أخف وأنسب لحسابات JavaScript ثقيلة لأنه يشارك الذاكرة ولا يحتاج تسلسل البيانات.',
      en: 'The child_process module lets you run separate OS processes, either to invoke external programs or to move heavy work off the main process.\n\n• spawn runs a command and gives you streams. Best for large or long-running output because nothing is buffered in memory.\n• exec runs a command through a shell and buffers all output. Convenient for short commands, dangerous with user input because of command injection.\n• execFile is like exec but without a shell, which makes it safer.\n• fork is a special case that starts another Node.js file and opens an IPC channel between the two processes.\n\n```js\nimport { spawn } from "node:child_process";\n\nconst ffmpeg = spawn("ffmpeg", ["-i", input, output]);\nffmpeg.stderr.on("data", (chunk) => logger.debug(chunk.toString()));\nffmpeg.on("close", (code) => done(code));\n```\n\nSecurity rule: never pass user input to exec. Use spawn or execFile with an argument array.\n\nChild process or worker thread? A separate process is right for running external programs and for full isolation; a worker thread is lighter and better for heavy JavaScript computation because it shares memory and avoids serialisation cost.',
    },
  },
  {
    id: 'node-typescript',
    difficulty: intermediate,
    question: {
      ar: 'ما هي فوائد استخدام TypeScript مع Node.js؟',
      en: 'What are the benefits of using TypeScript with Node.js?',
    },
    answer: {
      ar: 'الفوائد العملية:\n\n1. اكتشاف الأخطاء وقت الترجمة بدل وقت التشغيل: أخطاء مثل الوصول إلى خاصية غير موجودة أو تمرير نوع خاطئ تظهر قبل النشر.\n2. توثيق حي: توقيع الدالة يشرح المتوقع دون الحاجة إلى تعليقات.\n3. إعادة هيكلة آمنة: تغيير اسم حقل يكشف كل المواضع المتأثرة فورًا.\n4. تجربة تطوير أفضل: إكمال تلقائي دقيق داخل المحرر.\n5. مشاركة الأنواع بين الواجهة الأمامية والخلفية عند استخدام JavaScript في الطرفين.\n\nالتكلفة التي يجب ذكرها بصدق: خطوة بناء إضافية، ومنحنى تعلّم، وأحيانًا أنواع معقدة في المكتبات.\n\nنقطة مهمة: أنواع TypeScript تختفي وقت التشغيل، لذلك ما زلت بحاجة إلى تحقق فعلي (Zod مثلًا) لبيانات الطلبات القادمة من الخارج.\n\nللتشغيل: يمكن استخدام tsc للبناء، أو tsx أثناء التطوير، ومنذ Node 22/23 أصبح بالإمكان تشغيل ملفات TypeScript مباشرة عبر type stripping.',
      en: 'The practical benefits:\n\n1. Errors surface at compile time instead of runtime — accessing a property that does not exist or passing the wrong type is caught before deploy.\n2. Types are living documentation: a function signature explains the contract without comments.\n3. Safe refactoring — renaming a field immediately shows every affected call site.\n4. Much better editor experience, with accurate autocompletion.\n5. Shared types between frontend and backend when both are JavaScript.\n\nThe honest cost: an extra build step, a learning curve, and occasionally gnarly library types.\n\nAn important nuance: TypeScript types disappear at runtime, so you still need real runtime validation (Zod, for example) for incoming request data.\n\nFor running it: tsc for builds, tsx during development, and since Node 22/23 you can run TypeScript files directly via type stripping.',
    },
  },
  {
    id: 'node-promise-combinators',
    difficulty: intermediate,
    question: {
      ar: 'ما الفرق بين Promise.all و Promise.allSettled و Promise.race و Promise.any؟',
      en: 'What is the difference between Promise.all, allSettled, race and any?',
    },
    answer: {
      ar: 'كلها تنفّذ عمليات متوازية لكنها تختلف في شرط الانتهاء:\n\n• Promise.all: ينجح إذا نجحت الكل، ويفشل فور فشل أي واحدة (fail-fast). استخدمه عندما تكون كل النتائج مطلوبة.\n• Promise.allSettled: ينتظر الكل ولا يفشل أبدًا، ويعيد مصفوفة بـ status و value/reason. مثالي عند استدعاء عدة خدمات خارجية حيث فشل واحدة لا يعني فشل العملية.\n• Promise.race: يستقر بأول نتيجة سواء نجاح أو فشل. الاستخدام الكلاسيكي هو فرض مهلة (timeout).\n• Promise.any: يستقر بأول نجاح ويتجاهل الفشل، ولا يفشل إلا إذا فشلت الكل. مفيد عند وجود عدة مصادر بديلة.\n\n```js\nconst [user, orders] = await Promise.all([getUser(id), getOrders(id)]);\n\nconst results = await Promise.allSettled(services.map((s) => s.fetch()));\nconst ok = results.filter((r) => r.status === "fulfilled").map((r) => r.value);\n\nconst data = await Promise.race([fetchData(), timeout(5000)]);\n```\n\nملاحظة دقيقة: في Promise.all عند الفشل المبكر، العمليات الأخرى لا تُلغى — تستمر في الخلفية وتُهمل نتائجها. للإلغاء الحقيقي تحتاج AbortController.',
      en: 'All four run work in parallel; they differ in when they settle:\n\n• Promise.all fulfils when every promise fulfils, and rejects as soon as one rejects (fail-fast). Use it when you need all the results.\n• Promise.allSettled waits for all of them and never rejects, returning an array of status plus value/reason. Ideal when calling several external services where one failure should not fail the whole operation.\n• Promise.race settles with the first result, success or failure. The classic use is imposing a timeout.\n• Promise.any settles with the first success and ignores failures, rejecting only if all fail. Useful with redundant sources.\n\n```js\nconst [user, orders] = await Promise.all([getUser(id), getOrders(id)]);\n\nconst results = await Promise.allSettled(services.map((s) => s.fetch()));\nconst ok = results.filter((r) => r.status === "fulfilled").map((r) => r.value);\n\nconst data = await Promise.race([fetchData(), timeout(5000)]);\n```\n\nA subtle point: when Promise.all rejects early, the other operations are not cancelled — they keep running and their results are discarded. Real cancellation needs an AbortController.',
    },
  },
  {
    id: 'node-perf-basics',
    difficulty: intermediate,
    question: {
      ar: 'كيف يمكنك تحسين أداء تطبيق Node.js؟',
      en: 'How would you improve the performance of a Node.js application?',
    },
    answer: {
      ar: 'أبدأ دائمًا بالقياس قبل التحسين، لأن التخمين في الأداء يضيع الوقت غالبًا.\n\nالمحاور الرئيسية:\n1. لا تحجب الـ event loop: انقل أي عمل حسابي ثقيل إلى Worker Threads أو إلى طابور مهام.\n2. التخزين المؤقت: Redis للبيانات المتكررة، ورؤوس HTTP caching للاستجابات العامة.\n3. قاعدة البيانات هي عنق الزجاجة الأكثر شيوعًا: فهارس مناسبة، وحل مشكلة N+1، وconnection pooling، وجلب الأعمدة المطلوبة فقط.\n4. التوازي: Promise.all بدل await متسلسل للعمليات المستقلة.\n5. Streaming للردود والملفات الكبيرة بدل تحميلها في الذاكرة.\n6. الضغط (compression) وتفعيل HTTP keep-alive وHTTP/2.\n7. التوسّع الأفقي عبر cluster أو عدة حاويات خلف load balancer.\n8. تقليل الاعتماديات الثقيلة ووقت بدء التشغيل.\n\nللقياس أستخدم: ‎--prof و ‎--cpu-prof في Node، وclinic.js، و autocannon لاختبار الحمل، ومراقبة تأخر الـ event loop.',
      en: 'I always measure before optimising, because performance guesswork usually wastes time.\n\nThe main levers:\n1. Never block the event loop — move heavy computation to Worker Threads or a job queue.\n2. Caching: Redis for hot data, HTTP cache headers for public responses.\n3. The database is the most common bottleneck: proper indexes, fixing N+1 queries, connection pooling, and selecting only the columns you need.\n4. Parallelism: Promise.all instead of sequential awaits for independent work.\n5. Stream large responses and files instead of buffering them.\n6. Compression, HTTP keep-alive, HTTP/2.\n7. Horizontal scaling with cluster or multiple containers behind a load balancer.\n8. Trim heavy dependencies and startup time.\n\nFor measurement I use Node\'s --prof and --cpu-prof, clinic.js, autocannon for load testing, and event-loop lag monitoring.',
    },
  },
  {
    id: 'node-microservices-intro',
    difficulty: intermediate,
    question: {
      ar: 'ما هو مفهوم الـ microservices؟',
      en: 'What are microservices?',
    },
    answer: {
      ar: 'أسلوب معماري يُقسَّم فيه التطبيق إلى خدمات صغيرة مستقلة، لكل منها مسؤولية محددة وقاعدة بياناتها الخاصة، وتتواصل عبر الشبكة (HTTP أو gRPC أو message queue).\n\nالمزايا: نشر مستقل لكل خدمة، توسّع انتقائي للأجزاء المحملة فقط، عزل الأعطال، وحرية في اختيار التقنية لكل خدمة، وفرق مستقلة.\n\nالتكاليف الحقيقية: تعقيد تشغيلي كبير، واستدعاءات شبكة قد تفشل، واتساق نهائي (eventual consistency) بدل المعاملات البسيطة، وصعوبة التتبّع والاختبار، وحاجة إلى بنية تحتية ناضجة.\n\nرأيي العملي: معظم المشاريع تبدأ بشكل أفضل بـ modular monolith — تقسيم واضح للوحدات داخل تطبيق واحد — ثم تُفصل الخدمات عند ظهور حاجة حقيقية مثل اختلاف متطلبات التوسّع أو استقلالية الفرق. Node.js مناسبة جدًا للـ microservices بسبب خفتها وسرعة بدء تشغيلها.',
      en: 'An architectural style where the application is split into small independent services, each with one responsibility and its own database, communicating over the network via HTTP, gRPC or a message queue.\n\nThe benefits: independent deployment, selective scaling of only the hot parts, fault isolation, freedom to pick a different stack per service, and autonomous teams.\n\nThe real costs: substantial operational complexity, network calls that can fail, eventual consistency instead of simple transactions, harder tracing and testing, and a need for mature infrastructure.\n\nMy practical view: most projects are better served by a modular monolith first — clear module boundaries inside one deployable — and you split services out when there is a genuine driver such as diverging scaling needs or team autonomy. Node.js suits microservices well because it is lightweight and starts fast.',
    },
  },
  {
    id: 'node-abort-timeout',
    difficulty: intermediate,
    question: {
      ar: 'كيف تضيف مهلة (timeout) وإلغاءً للطلبات الخارجية في Node.js؟',
      en: 'How do you add timeouts and cancellation to outbound requests in Node.js?',
    },
    answer: {
      ar: 'استدعاء خارجي بلا مهلة هو أحد أكثر أسباب الأعطال المتتالية شيوعًا: خدمة بطيئة تستهلك اتصالاتك حتى تتوقف خدمتك أنت.\n\nالأداة القياسية هي AbortController:\n```js\nconst controller = new AbortController();\nconst timer = setTimeout(() => controller.abort(), 5000);\n\ntry {\n  const res = await fetch(url, { signal: controller.signal });\n  return await res.json();\n} catch (error) {\n  if (error.name === "AbortError") throw new AppError("Upstream timeout", 504);\n  throw error;\n} finally {\n  clearTimeout(timer);\n}\n```\n\nهناك أيضًا AbortSignal.timeout(5000) كاختصار جاهز.\n\nما أضيفه في الإنتاج بجانب المهلة:\n• إعادة محاولة محدودة مع exponential backoff وjitter، وللعمليات القابلة لإعادة المحاولة فقط.\n• circuit breaker يوقف الاستدعاءات مؤقتًا بعد فشل متكرر بدل إغراق خدمة منهارة.\n• قيمة مهلة أقصر من مهلة العميل لديك، وإلا فلا فائدة منها.',
      en: 'An outbound call with no timeout is one of the most common causes of cascading failure: a slow dependency consumes your connections until your own service stops responding.\n\nThe standard tool is AbortController:\n```js\nconst controller = new AbortController();\nconst timer = setTimeout(() => controller.abort(), 5000);\n\ntry {\n  const res = await fetch(url, { signal: controller.signal });\n  return await res.json();\n} catch (error) {\n  if (error.name === "AbortError") throw new AppError("Upstream timeout", 504);\n  throw error;\n} finally {\n  clearTimeout(timer);\n}\n```\n\nThere is also AbortSignal.timeout(5000) as a ready-made shorthand.\n\nWhat I add alongside timeouts in production:\n• Bounded retries with exponential backoff and jitter, and only for idempotent operations.\n• A circuit breaker that stops calling a failing dependency for a while instead of hammering it.\n• A timeout shorter than your own caller\'s timeout, otherwise it buys you nothing.',
    },
  },
  {
    id: 'node-crud-transactions',
    difficulty: intermediate,
    question: {
      ar: 'كيف تتعامل مع المعاملات (transactions) في Node.js؟',
      en: 'How do you handle database transactions in Node.js?',
    },
    answer: {
      ar: 'المعاملة تضمن أن مجموعة عمليات تنجح كلها أو تفشل كلها. المثال الكلاسيكي هو خصم رصيد وإضافة طلب: لا يجوز أن ينجح أحدهما فقط.\n\n```js\nconst client = await pool.connect();\ntry {\n  await client.query("BEGIN");\n  await client.query("UPDATE accounts SET balance = balance - $1 WHERE id = $2", [amount, from]);\n  await client.query("INSERT INTO orders (user_id, total) VALUES ($1, $2)", [from, amount]);\n  await client.query("COMMIT");\n} catch (error) {\n  await client.query("ROLLBACK");\n  throw error;\n} finally {\n  client.release();   // ضروري وإلا استُنزف الـ pool\n}\n```\n\nنقاط مهمة:\n• يجب استخدام نفس الاتصال لكل عمليات المعاملة، لا pool.query لأنها قد تختار اتصالًا مختلفًا.\n• أعِد الاتصال في finally دائمًا.\n• أبقِ المعاملة قصيرة: لا تضع داخلها استدعاءات HTTP خارجية، لأن القفل يبقى مفتوحًا طوال مدة الانتظار.\n• انتبه لمستوى العزل (isolation level) عند وجود تنافس على نفس الصفوف.\n\nفي ORM مثل Prisma تُكتب كـ prisma.$transaction، وفي Sequelize عبر تمرير كائن transaction.',
      en: 'A transaction guarantees that a group of operations all succeed or all fail. The classic example is debiting a balance and creating an order: it must not be possible for only one to happen.\n\n```js\nconst client = await pool.connect();\ntry {\n  await client.query("BEGIN");\n  await client.query("UPDATE accounts SET balance = balance - $1 WHERE id = $2", [amount, from]);\n  await client.query("INSERT INTO orders (user_id, total) VALUES ($1, $2)", [from, amount]);\n  await client.query("COMMIT");\n} catch (error) {\n  await client.query("ROLLBACK");\n  throw error;\n} finally {\n  client.release();   // essential, or you drain the pool\n}\n```\n\nKey points:\n• Every statement in the transaction must use the same connection — not pool.query, which may pick a different one.\n• Always release the connection in finally.\n• Keep transactions short: no external HTTP calls inside them, because locks are held for the whole wait.\n• Think about the isolation level when rows are contended.\n\nIn an ORM this is prisma.$transaction, or passing a transaction object in Sequelize.',
    },
  },
  {
    id: 'node-api-documentation',
    difficulty: intermediate,
    question: {
      ar: 'كيف توثّق واجهات API في مشروع Node.js؟',
      en: 'How do you document the APIs of a Node.js project?',
    },
    answer: {
      ar: 'المعيار الصناعي هو OpenAPI (المعروف سابقًا بـ Swagger): وصف للـ endpoints ونماذج الطلب والرد ورموز الحالة والمصادقة، بصيغة YAML أو JSON.\n\nهناك أسلوبان:\n1. توليد التوثيق من الكود: عبر تعليقات JSDoc مع swagger-jsdoc، أو اشتقاقه من schemas التحقق (Zod أو التعريفات المدمجة في Fastify). هذه الطريقة تقلّل احتمال تقادم التوثيق لأنه مرتبط بالمصدر نفسه.\n2. تصميم العقد أولًا (design-first): تكتب ملف OpenAPI ثم تبني الخادم والعميل منه. مفيد جدًا عندما تعمل عدة فرق بالتوازي.\n\nثم تُعرض الوثائق عبر Swagger UI أو Redoc على مسار مثل ‎/docs.\n\nملاحظات عملية:\n• التوثيق الذي لا يُولَّد من الكود يتقادم بسرعة؛ اجعله جزءًا من الـ CI إن أمكن.\n• لا تعرض التوثيق التفصيلي للعامة إن كان الـ API داخليًا.\n• وثّق الأخطاء أيضًا وليس الحالات الناجحة فقط.\n\nتنبيه على مصطلح: كلمة "توثيق" في العربية تُستخدم أحيانًا بمعنى المصادقة (Authentication)، وهما موضوعان مختلفان تمامًا — هذا السؤال عن documentation.',
      en: 'The industry standard is OpenAPI (formerly Swagger): a description of endpoints, request and response schemas, status codes and authentication, written in YAML or JSON.\n\nThere are two approaches:\n1. Generate docs from code — JSDoc comments with swagger-jsdoc, or derived from your validation schemas (Zod, or Fastify\'s built-in schemas). This keeps documentation from going stale because it is tied to the source of truth.\n2. Design-first — write the OpenAPI contract, then generate server stubs and clients from it. Very useful when several teams work in parallel.\n\nThe spec is then served through Swagger UI or Redoc at a path such as /docs.\n\nPractical notes:\n• Documentation that is not generated from code drifts quickly; wire it into CI if you can.\n• Do not expose detailed docs publicly if the API is internal.\n• Document error responses, not just the happy path.',
    },
  },
  {
    id: 'node-scenario-slow-endpoint',
    difficulty: intermediate,
    question: {
      ar: 'سيناريو: أحد الـ endpoints في الـ API أصبح بطيئًا. كيف تحقّق في المشكلة؟',
      en: 'Scenario: one endpoint in your API has become slow. How do you investigate?',
    },
    answer: {
      ar: 'أتبع ترتيبًا من الخارج إلى الداخل حتى لا أخمّن:\n\n1. القياس أولًا: من سجلات الوصول أو الـ APM أستخرج زمن الاستجابة p50 وp95 وp99. p99 وحده المرتفع يعني مشكلة في حالات معينة (مستخدم ببيانات ضخمة مثلًا) وليس بطئًا عامًا.\n2. تحديد متى بدأ: هل تزامن مع نشر معين أو مع نمو البيانات؟ هذا وحده يختصر نصف التحقيق.\n3. تفكيك الزمن: كم منه في قاعدة البيانات، وكم في استدعاءات خارجية، وكم في المعالجة داخل العملية؟ الـ tracing أو تسجيل توقيت كل مرحلة يظهر ذلك.\n4. الشك الأول عادة قاعدة البيانات: أشغّل EXPLAIN على الاستعلام، وأبحث عن فهرس مفقود أو مشكلة N+1 حيث يتحول استعلام واحد إلى مئات.\n5. الشك الثاني: استدعاء خارجي بطيء بلا مهلة.\n6. الشك الثالث: حجب الـ event loop — أقيس event loop lag، فإذا كان مرتفعًا فهناك عمل حسابي ثقيل أو استدعاء متزامن.\n7. حجم الاستجابة: هل نعيد آلاف السجلات بلا pagination؟\n\nثم أصلح السبب الجذري وأقيس مرة أخرى، وأضيف تنبيهًا (alert) على هذا المقياس حتى لا يتكرر دون أن نلاحظ.',
      en: 'I work from the outside in so I am not guessing:\n\n1. Measure first: from access logs or the APM I pull p50, p95 and p99 latency. A high p99 alone means specific cases are slow — a user with a huge dataset, say — not that the endpoint is broadly slow.\n2. Establish when it started: did it coincide with a deploy, or with data growth? That alone often halves the investigation.\n3. Break the time down: how much is database, how much is external calls, how much is in-process work? Tracing, or timing each stage in the logs, shows this.\n4. The usual first suspect is the database: run EXPLAIN on the query, look for a missing index or an N+1 pattern where one query became hundreds.\n5. Second suspect: a slow upstream call with no timeout.\n6. Third suspect: event loop blocking — I check event loop lag, and if it is high there is heavy CPU work or a synchronous call in the path.\n7. Response size: are we returning thousands of rows with no pagination?\n\nThen I fix the root cause, measure again, and add an alert on that metric so it cannot regress unnoticed.',
    },
  },
  {
    id: 'node-scenario-cpu-blocking',
    difficulty: intermediate,
    question: {
      ar: 'سيناريو: كيف تمنع عملية كثيفة المعالجة (CPU-intensive) من حجب الـ event loop؟',
      en: 'Scenario: how would you stop a CPU-intensive operation from blocking the event loop?',
    },
    answer: {
      ar: 'أولًا أحدد طبيعة العمل، لأن الحل يختلف:\n\n1. إذا كان العمل قصيرًا نسبيًا ويجب أن يعود في نفس الطلب (تشفير، معالجة صورة صغيرة، تحليل ملف): أنقله إلى Worker Thread، ويفضّل عبر worker pool جاهز بدل إنشاء worker لكل طلب لأن الإنشاء مكلف.\n\n2. إذا كان طويلًا ولا يحتاج المستخدم نتيجته فورًا (توليد تقرير، معالجة فيديو، إرسال آلاف الرسائل): لا أنفّذه داخل الطلب إطلاقًا. أضعه في طابور مهام مثل BullMQ، وأعيد 202 Accepted مع معرّف مهمة، ويستهلك المهمة worker منفصل.\n\n3. إذا كان هناك برنامج خارجي متخصص (ffmpeg، ImageMagick): أستخدم child process.\n\n4. إذا كان لا بد من تنفيذه في العملية نفسها: أقسّمه إلى دفعات وأعطي الحلقة فرصة للتنفس بين الدفعات عبر setImmediate. هذا حل وسط وليس الأمثل.\n\n5. وأحيانًا الحل الأبسط: هل يمكن تخزين النتيجة مؤقتًا (cache) بدل إعادة حسابها؟\n\nوللتأكد من نجاح الحل أراقب event loop lag قبل وبعد التغيير.',
      en: 'First I classify the work, because the right answer depends on it:\n\n1. Short-ish work whose result the same request needs — hashing, small image processing, parsing a file — goes to a Worker Thread, ideally through a pre-warmed worker pool rather than spawning a worker per request, because spawning is expensive.\n\n2. Long work whose result the user does not need immediately — report generation, video processing, sending thousands of emails — never runs inside the request. It goes onto a job queue such as BullMQ, I return 202 Accepted with a job id, and a separate worker process consumes it.\n\n3. If a specialised external program exists (ffmpeg, ImageMagick), I shell out to it with a child process.\n\n4. If it genuinely must run in-process, I chunk it and yield to the loop between chunks with setImmediate. That is a compromise, not the ideal.\n\n5. And sometimes the simplest answer wins: can the result be cached instead of recomputed?\n\nTo confirm the fix worked, I watch event loop lag before and after.',
    },
  },

  // ---------------------------------------------------------------- ADVANCED
  {
    id: 'node-event-loop-internals',
    difficulty: advanced,
    question: {
      ar: 'اشرح الآلية الداخلية للـ event loop: كيف تتفاعل المراحل مع الـ microtasks والـ thread pool؟',
      en: 'Explain the event loop internals: how do the phases interact with microtasks and the thread pool?',
    },
    answer: {
      ar: 'الصورة الكاملة تتكون من ثلاث طبقات:\n\n1. V8 ينفّذ JavaScript على thread واحد، وله call stack واحد وطابور microtasks.\n2. libuv يدير الـ event loop وأحداث نظام التشغيل، ويملك thread pool بأربعة threads افتراضيًا.\n3. Node APIs تربط بينهما.\n\nفي كل دورة يمر الـ event loop بالمراحل: timers ← pending callbacks ← idle/prepare ← poll ← check ← close callbacks. المرحلة الأهم هي poll، وفيها تحسب الحلقة كم يمكنها الانتظار قبل أن يحين موعد أقرب timer.\n\nالنقطة الحاسمة: بعد كل callback مفردة يُفرَّغ طابور process.nextTick بالكامل ثم طابور الـ microtasks بالكامل، قبل الانتقال. لذلك:\n• await داخل حلقة ضخمة يولّد آلاف الـ microtasks تُنفَّذ كلها قبل أي I/O.\n• سلسلة nextTick متكررة يمكن أن تُجوّع الحلقة تمامًا ولن تصل أي أحداث شبكة.\n\nأما ما يذهب إلى الـ thread pool فهو ليس كل شيء: عمليات الشبكة تستخدم آليات نظام التشغيل غير المتزامنة (epoll/kqueue/IOCP) ولا تستهلك threads، بينما عمليات fs وdns.lookup وzlib وبعض دوال crypto تستهلكها. لذلك أربع عمليات قراءة ملفات كبيرة متزامنة تشغل الـ pool بالكامل وتؤخر الخامسة — وهذا سبب شائع لبطء غامض يُحل بزيادة UV_THREADPOOL_SIZE.',
      en: 'The complete picture has three layers:\n\n1. V8 executes JavaScript on one thread with a single call stack and a microtask queue.\n2. libuv drives the event loop and OS events, and owns a thread pool of four threads by default.\n3. The Node APIs bridge the two.\n\nEach iteration walks the phases: timers → pending callbacks → idle/prepare → poll → check → close callbacks. Poll is the important one; there the loop calculates how long it may block before the nearest timer is due.\n\nThe decisive detail: after every individual callback, Node drains the entire process.nextTick queue and then the entire microtask queue before moving on. Consequences:\n• An await inside a huge loop generates thousands of microtasks that all run before any I/O gets a turn.\n• A recursive nextTick chain can starve the loop completely, and no network events will ever be processed.\n\nAnd not everything goes to the thread pool: network I/O uses the OS async mechanisms (epoll/kqueue/IOCP) and consumes no threads, whereas fs, dns.lookup, zlib and some crypto functions do. So four concurrent large file reads saturate the pool and delay the fifth — a common cause of mysterious latency that is fixed by raising UV_THREADPOOL_SIZE.',
    },
  },
  {
    id: 'node-worker-threads',
    difficulty: advanced,
    question: {
      ar: 'ما هي Worker Threads ومتى تستخدمها؟',
      en: 'What are Worker Threads and when would you use them?',
    },
    answer: {
      ar: 'Worker Threads تسمح بتشغيل JavaScript على threads متعددة داخل نفس العملية، لكل منها instance مستقل من V8 وevent loop خاص به.\n\n```js\n// main.js\nimport { Worker } from "node:worker_threads";\n\nconst runTask = (data) => new Promise((resolve, reject) => {\n  const worker = new Worker("./heavy-task.js", { workerData: data });\n  worker.on("message", resolve);\n  worker.on("error", reject);\n  worker.on("exit", (code) => {\n    if (code !== 0) reject(new Error(`Worker exited with ${code}`));\n  });\n});\n\n// heavy-task.js\nimport { parentPort, workerData } from "node:worker_threads";\nparentPort.postMessage(computeExpensiveThing(workerData));\n```\n\nمتى أستخدمها؟ فقط للعمل كثيف المعالجة: الضغط، التشفير، معالجة الصور، تحليل ملفات ضخمة، حسابات رياضية معقدة.\n\nمتى لا أستخدمها؟ للعمل كثيف الـ I/O — الـ event loop يتعامل معه بكفاءة أعلى بالفعل، وإضافة worker هنا تضيف تعقيدًا بلا فائدة.\n\nتفاصيل مهمة:\n• البيانات تُنسخ عند الإرسال (structured clone)، وهذا مكلف للكائنات الكبيرة. البدائل: transferable objects أو SharedArrayBuffer للمشاركة الفعلية دون نسخ.\n• إنشاء worker مكلف (عشرات الميلي ثانية وذاكرة مستقلة)، لذلك استخدم worker pool ثابت الحجم بدل worker لكل طلب.\n• الفرق عن cluster: cluster عمليات كاملة لتوزيع الاتصالات، وworker threads داخل عملية واحدة لتوزيع الحساب.',
      en: 'Worker Threads let you run JavaScript on multiple threads inside one process, each with its own V8 instance and its own event loop.\n\n```js\n// main.js\nimport { Worker } from "node:worker_threads";\n\nconst runTask = (data) => new Promise((resolve, reject) => {\n  const worker = new Worker("./heavy-task.js", { workerData: data });\n  worker.on("message", resolve);\n  worker.on("error", reject);\n  worker.on("exit", (code) => {\n    if (code !== 0) reject(new Error(`Worker exited with ${code}`));\n  });\n});\n\n// heavy-task.js\nimport { parentPort, workerData } from "node:worker_threads";\nparentPort.postMessage(computeExpensiveThing(workerData));\n```\n\nWhen do I use them? Only for CPU-bound work: compression, cryptography, image processing, parsing very large files, heavy computation.\n\nWhen do I not? For I/O-bound work — the event loop already handles that more efficiently, and a worker adds complexity for nothing.\n\nImportant details:\n• Data is copied when posted (structured clone), which is expensive for large objects. The alternatives are transferable objects or SharedArrayBuffer for genuine zero-copy sharing.\n• Creating a worker is expensive — tens of milliseconds plus its own memory — so use a fixed-size worker pool rather than one worker per request.\n• Versus cluster: cluster forks whole processes to spread connections; worker threads live inside one process to spread computation.',
    },
  },
  {
    id: 'node-backpressure',
    difficulty: advanced,
    question: {
      ar: 'ما هو backpressure في الـ Streams وكيف تتعامل معه؟',
      en: 'What is backpressure in streams and how do you handle it?',
    },
    answer: {
      ar: 'backpressure هي الحالة التي يكون فيها المنتج (readable) أسرع من المستهلك (writable). إذا تُجوهلت، تتراكم البيانات في الذاكرة حتى ينفد الـ heap.\n\nالآلية: write() تعيد false عندما يمتلئ المخزن الداخلي (تجاوز highWaterMark)، وهذه إشارة بأن عليك التوقف حتى يصدر حدث "drain".\n\n```js\n// معالجة يدوية\nconst ok = writable.write(chunk);\nif (!ok) {\n  readable.pause();\n  writable.once("drain", () => readable.resume());\n}\n```\n\nلكن الحل العملي هو ألا تفعل هذا يدويًا:\n```js\nimport { pipeline } from "node:stream/promises";\n\nawait pipeline(source, transform, destination);\n```\npipeline يدير backpressure وينشر الأخطاء وينظّف كل الـ streams عند الفشل. أما pipe فيدير الضغط لكنه يترك تسريبًا للموارد عند حدوث خطأ.\n\nمثال واقعي على الخطأ: قراءة ملف 10GB وكتابته إلى استجابة HTTP لعميل بطيء. بدون احترام backpressure ستقرأ من القرص بسرعة أكبر بكثير مما يستطيع العميل استقباله، ويمتلئ المخزن حتى ينهار التطبيق.\n\nنقطة أخيرة: async iterators (for await...of) تحترم backpressure تلقائيًا، وهي خيار مقروء جدًا.',
      en: 'Backpressure is the situation where the producer (readable) is faster than the consumer (writable). Ignore it and data piles up in memory until the heap is exhausted.\n\nThe mechanism: write() returns false once the internal buffer passes highWaterMark, signalling that you should stop until the "drain" event fires.\n\n```js\n// manual handling\nconst ok = writable.write(chunk);\nif (!ok) {\n  readable.pause();\n  writable.once("drain", () => readable.resume());\n}\n```\n\nBut the practical answer is not to do this by hand:\n```js\nimport { pipeline } from "node:stream/promises";\n\nawait pipeline(source, transform, destination);\n```\npipeline manages backpressure, propagates errors and destroys every stream on failure. pipe honours backpressure but leaks resources when something errors.\n\nA concrete failure: streaming a 10GB file into an HTTP response for a slow client. Without respecting backpressure you read from disk far faster than the client can consume, the buffer grows, and the process dies.\n\nOne more thing: async iterators (for await...of) respect backpressure automatically and read very cleanly.',
    },
  },
  {
    id: 'node-memory-management',
    difficulty: advanced,
    question: {
      ar: 'كيف تُدار الذاكرة في Node.js؟ وكيف يعمل الـ Garbage Collector؟',
      en: 'How is memory managed in Node.js, and how does the garbage collector work?',
    },
    answer: {
      ar: 'الذاكرة في عملية Node تنقسم إلى:\n• Heap: كائنات JavaScript، يديرها V8.\n• Stack: المتغيرات الأولية وإطارات الاستدعاء.\n• External / Buffers: ذاكرة خارج الـ heap تديرها Node.\n\nيستخدم V8 مُجمّع نفايات generational مبني على ملاحظة أن معظم الكائنات تموت صغيرة:\n\n1. Young generation (Scavenger): مساحة صغيرة تُنظَّف كثيرًا وبسرعة. الكائنات الباقية تُرقّى إلى الجيل القديم.\n2. Old generation (Mark-Sweep-Compact): تُنظَّف أقل وتكلفتها أعلى. تستخدم V8 تقنيات incremental وconcurrent لتقليل توقف التنفيذ (stop-the-world pauses).\n\nما يهم عمليًا:\n• الحد الافتراضي للـ heap قد لا يناسب تطبيقك؛ يُضبط بـ ‎--max-old-space-size.\n• في الحاويات، اضبط حد الـ heap أقل من حد ذاكرة الحاوية، وإلا قتل النظام العملية بـ OOM قبل أن يتدخل الـ GC.\n• التخصيص المفرط للكائنات قصيرة العمر داخل مسارات ساخنة يزيد ضغط الـ GC ويظهر كتقطّع في زمن الاستجابة.\n• الـ Buffers تُحسب خارج الـ heap، لذلك قد ترى استهلاك RSS مرتفعًا مع heap صغير.\n\nنقطة دقيقة: الـ GC نفسه يوقف تنفيذ JavaScript أثناء بعض مراحله، لذلك ضغط الذاكرة يظهر كارتفاع في p99 وليس في المتوسط.',
      en: 'Memory in a Node process is split into:\n• Heap — JavaScript objects, managed by V8.\n• Stack — primitives and call frames.\n• External / Buffers — off-heap memory managed by Node.\n\nV8 uses a generational collector built on the observation that most objects die young:\n\n1. Young generation (Scavenger): a small space collected often and cheaply. Survivors are promoted.\n2. Old generation (Mark-Sweep-Compact): collected less often and more expensively. V8 uses incremental and concurrent marking to shorten stop-the-world pauses.\n\nWhat matters in practice:\n• The default heap limit may not suit your app; tune it with --max-old-space-size.\n• In containers, set the heap limit below the container memory limit, otherwise the kernel OOM-kills the process before the GC can help.\n• Allocating many short-lived objects in hot paths raises GC pressure and shows up as jittery latency.\n• Buffers are counted off-heap, so you can see high RSS with a small heap.\n\nA subtle point: GC pauses JavaScript execution during parts of its work, so memory pressure usually shows up in p99 latency rather than in the average.',
    },
  },
  {
    id: 'node-scenario-memory-leak',
    difficulty: advanced,
    question: {
      ar: 'سيناريو: تطبيق Node.js يستهلك ذاكرة متزايدة حتى ينهار. كيف تحقّق في تسريب الذاكرة؟',
      en: 'Scenario: a Node.js application\'s memory grows until it crashes. How do you investigate the leak?',
    },
    answer: {
      ar: 'المنهجية التي أتبعها:\n\n1. التأكد أنه تسريب فعلًا: أراقب heapUsed وRSS عبر الوقت. الارتفاع الذي يعود للانخفاض بعد الـ GC ليس تسريبًا؛ التسريب هو خط صاعد لا يعود.\n\n2. التقاط heap snapshots: لقطة بعد الإحماء وأخرى بعد فترة تشغيل تحت الحمل، ثم أقارنهما في Chrome DevTools بخاصية Comparison. ما يزداد عدده باستمرار هو المشتبه به. يمكن التقاط اللقطة برمجيًا عبر v8.writeHeapSnapshot() أو إرسال SIGUSR2 عند التشغيل بـ --inspect.\n\n3. تتبّع الـ retainers: أهم خطوة — من الذي يمنع تحرير هذه الكائنات؟ المسار في اللقطة يقود عادة إلى السبب مباشرة.\n\n4. الأسباب الشائعة التي أفحصها أولًا:\n   • مستمعو أحداث يُضافون ولا يُزالون (تحذير MaxListenersExceeded مؤشر قوي).\n   • cache في الذاكرة بلا حد أقصى ولا سياسة إخلاء — استبدله بـ LRU محدود أو Redis.\n   • مصفوفات أو Maps على مستوى الوحدة تتراكم بلا تنظيف.\n   • timers أو intervals لا تُلغى.\n   • closures تحتفظ بمراجع لكائنات كبيرة.\n   • streams أو اتصالات لا تُغلق عند الخطأ.\n\n5. الإصلاح ثم التحقق تحت حمل مشابه لحمل الإنتاج، وليس على جهاز التطوير فقط.\n\nكحل مؤقت يمكن تفعيل إعادة تشغيل دورية أو حد ذاكرة يعيد تشغيل الحاوية، لكنه يخفي المشكلة ولا يعالجها.',
      en: 'The methodology I follow:\n\n1. Confirm it really is a leak: watch heapUsed and RSS over time. Growth that drops back after GC is not a leak; a leak is a line that rises and never returns.\n\n2. Capture heap snapshots: one after warm-up and one after running under load, then diff them in Chrome DevTools using Comparison view. Whatever keeps growing in count is the suspect. You can capture programmatically with v8.writeHeapSnapshot(), or by sending SIGUSR2 when running with --inspect.\n\n3. Follow the retainers — this is the key step. What is holding those objects alive? The retainer path in the snapshot usually points straight at the cause.\n\n4. The common causes I check first:\n   • Event listeners added and never removed (a MaxListenersExceeded warning is a strong hint).\n   • An in-memory cache with no size cap and no eviction — replace it with a bounded LRU or Redis.\n   • Module-level arrays or Maps that accumulate and are never cleaned.\n   • Timers or intervals that are never cleared.\n   • Closures holding references to large objects.\n   • Streams or connections not destroyed on error.\n\n5. Fix, then verify under production-like load rather than on a dev machine.\n\nAs a stopgap you can add periodic restarts or a memory limit that recycles the container, but that hides the problem rather than solving it.',
    },
  },
  {
    id: 'node-scaling',
    difficulty: advanced,
    question: {
      ar: 'كيف توسّع تطبيق Node.js؟ وما الفرق بين التوسّع الرأسي والأفقي؟',
      en: 'How do you scale a Node.js application, and what is the difference between vertical and horizontal scaling?',
    },
    answer: {
      ar: 'التوسّع الرأسي يعني جهازًا أقوى، وهو أبسط لكنه محدود بسقف مادي وبنقطة فشل واحدة. ويزيد عليه في Node أن العملية الواحدة لا تستفيد من أنوية إضافية إلا عبر cluster.\n\nالتوسّع الأفقي يعني تشغيل نسخ أكثر خلف load balancer، وهو النهج الصحيح للنمو الجدي.\n\nشرط التوسّع الأفقي هو أن يكون التطبيق stateless: لا حالة مستخدم في ذاكرة العملية. عمليًا هذا يعني:\n• الجلسات في Redis وليس في الذاكرة.\n• الملفات المرفوعة في S3 وليس على القرص المحلي.\n• الـ cache في Redis مشترك بين النسخ.\n• المهام المجدولة لا تعمل في كل نسخة، بل خلف قفل موزّع أو في خدمة مخصصة.\n• اتصالات WebSocket تحتاج sticky sessions أو Redis adapter.\n\nالترتيب الذي أتبعه قبل إضافة خوادم:\n1. قياس أين عنق الزجاجة فعلًا — غالبًا قاعدة البيانات وليس Node.\n2. إضافة caching وتحسين الاستعلامات.\n3. نقل العمل الثقيل إلى طوابير.\n4. ثم التوسّع الأفقي مع مراعاة حدود اتصالات قاعدة البيانات، لأن مضاعفة النسخ تضاعف الاتصالات وقد تنقل الاختناق إلى القاعدة.',
      en: 'Vertical scaling means a bigger machine. It is simpler but capped by hardware and leaves a single point of failure — and in Node a single process does not use extra cores at all unless you add cluster.\n\nHorizontal scaling means more instances behind a load balancer, and it is the right approach for serious growth.\n\nThe prerequisite is that the app is stateless: no per-user state in process memory. Concretely that means:\n• Sessions in Redis, not in memory.\n• Uploads in S3, not on local disk.\n• A shared Redis cache rather than per-instance caches.\n• Scheduled jobs that do not run on every instance — put them behind a distributed lock or in a dedicated service.\n• WebSocket connections need sticky sessions or a Redis adapter.\n\nThe order I work in before adding servers:\n1. Measure where the bottleneck actually is — usually the database, not Node.\n2. Add caching and fix queries.\n3. Move heavy work to queues.\n4. Then scale horizontally, watching database connection limits — doubling instances doubles connections and can simply move the bottleneck to the database.',
    },
  },
  {
    id: 'node-load-balancing',
    difficulty: advanced,
    question: {
      ar: 'كيف يعمل load balancing أمام تطبيقات Node.js؟',
      en: 'How does load balancing work in front of Node.js applications?',
    },
    answer: {
      ar: 'الـ load balancer يوزّع الطلبات على عدة نسخ، ويجلب معه أيضًا فحص الصحة (health checks) وإنهاء TLS.\n\nخوارزميات التوزيع الشائعة:\n• Round robin: توزيع دوري بسيط.\n• Least connections: إلى النسخة الأقل انشغالًا — أفضل عندما تتفاوت مدة الطلبات.\n• IP hash / sticky sessions: ربط المستخدم بنفس النسخة. مطلوب للـ WebSocket لكنه يعيق التوزيع المتوازن ويجب تجنّبه في غير ذلك.\n\nما يجب أن يوفّره التطبيق ليعمل خلف load balancer بشكل صحيح:\n1. نقطة /health خفيفة لا تعتمد على قاعدة البيانات، وإن أردت التمييز فافصل بين liveness (هل العملية حية؟) وreadiness (هل جاهزة لاستقبال حركة؟).\n2. graceful shutdown: عند SIGTERM يجب أن تفشل الـ readiness أولًا ليتوقف توجيه الطلبات الجديدة، ثم تُنهى الطلبات الجارية.\n3. قراءة الـ IP الحقيقي من X-Forwarded-For عبر تفعيل trust proxy في Express، وإلا فإن rate limiting سيعامل كل المستخدمين كعنوان واحد.\n4. مهلة keep-alive في التطبيق أطول قليلًا من مهلة الـ load balancer لتجنّب أخطاء 502 الناتجة عن سباق إغلاق الاتصال.',
      en: 'A load balancer spreads requests across instances, and it also brings health checking and TLS termination.\n\nCommon algorithms:\n• Round robin — simple rotation.\n• Least connections — to the least busy instance, better when request durations vary.\n• IP hash / sticky sessions — pins a user to one instance. Required for WebSockets, but it undermines even distribution and should be avoided otherwise.\n\nWhat the application must provide to behave correctly behind one:\n1. A lightweight /health endpoint that does not depend on the database — and ideally separate liveness (is the process alive?) from readiness (is it ready for traffic?).\n2. Graceful shutdown: on SIGTERM, fail readiness first so no new requests are routed, then drain in-flight requests.\n3. Read the real client IP from X-Forwarded-For by enabling trust proxy in Express — otherwise rate limiting treats every user as one address.\n4. A keep-alive timeout slightly longer than the load balancer\'s, to avoid 502s caused by a connection-close race.',
    },
  },
  {
    id: 'node-caching-redis',
    difficulty: advanced,
    question: {
      ar: 'كيف تصمم استراتيجية caching في تطبيق Node.js؟ وأين يأتي دور Redis؟',
      en: 'How do you design a caching strategy in a Node.js application, and where does Redis fit?',
    },
    answer: {
      ar: 'الـ caching يعمل على طبقات، وأبدأ دائمًا بالطبقة الأبعد عن قاعدة البيانات:\n1. CDN للأصول الثابتة والاستجابات العامة.\n2. HTTP caching عبر Cache-Control وETag.\n3. cache تطبيقي مشترك في Redis.\n4. cache داخل العملية (Map أو LRU) للبيانات الصغيرة جدًا والمتكررة جدًا.\n\nلماذا Redis وليس ذاكرة العملية؟ لأن الـ cache في الذاكرة لا يُشارَك بين النسخ (كل نسخة لها نسخة مختلفة من البيانات)، ويضيع عند إعادة التشغيل، ويزيد استهلاك الذاكرة مع كل نسخة.\n\nالنمط الأشيع هو cache-aside:\n```js\nconst getUser = async (id) => {\n  const key = `user:${id}`;\n  const cached = await redis.get(key);\n  if (cached) return JSON.parse(cached);\n\n  const user = await db.users.findById(id);\n  await redis.set(key, JSON.stringify(user), "EX", 300);\n  return user;\n};\n```\n\nالجزء الصعب ليس التخزين بل الإبطال (invalidation):\n• TTL قصير: أبسط حل ومقبول عندما تُحتمل بيانات قديمة قليلًا.\n• حذف المفتاح عند الكتابة: أدق لكنه يحتاج انضباطًا في كل مسارات التعديل.\n• إصدار المفاتيح (versioning) لإبطال مجموعة دفعة واحدة.\n\nومشكلتان يجب ذكرهما: cache stampede عند انتهاء صلاحية مفتاح مطلوب بشدة — يُعالج بقفل أو بتحديث استباقي؛ وcache penetration عند طلب مفاتيح غير موجودة باستمرار — يُعالج بتخزين نتيجة سلبية قصيرة.',
      en: 'Caching works in layers, and I start at the layer furthest from the database:\n1. CDN for static assets and public responses.\n2. HTTP caching with Cache-Control and ETag.\n3. A shared application cache in Redis.\n4. In-process cache (a Map or LRU) only for very small, very hot data.\n\nWhy Redis rather than process memory? Because an in-process cache is not shared across instances (each has a different view), it is lost on restart, and it multiplies memory usage per instance.\n\nThe common pattern is cache-aside:\n```js\nconst getUser = async (id) => {\n  const key = `user:${id}`;\n  const cached = await redis.get(key);\n  if (cached) return JSON.parse(cached);\n\n  const user = await db.users.findById(id);\n  await redis.set(key, JSON.stringify(user), "EX", 300);\n  return user;\n};\n```\n\nThe hard part is not storing but invalidating:\n• Short TTL — simplest, and fine when slightly stale data is acceptable.\n• Delete the key on write — more precise, but requires discipline on every write path.\n• Key versioning to invalidate a whole group at once.\n\nTwo problems worth naming: cache stampede, when a hot key expires and every request hits the database at once — solved with a lock or proactive refresh; and cache penetration, repeated lookups of keys that do not exist — solved by caching a short-lived negative result.',
    },
  },
  {
    id: 'node-scenario-rate-limiting',
    difficulty: advanced,
    question: {
      ar: 'سيناريو: كيف تصمم rate limiting لـ API؟',
      en: 'Scenario: how would you design rate limiting for an API?',
    },
    answer: {
      ar: 'أولًا أحدد الهدف، لأنه يغيّر التصميم: حماية من إساءة الاستخدام، أم عدالة بين العملاء، أم حماية مورد مكلف مثل إرسال الرسائل؟\n\nثم أختار الخوارزمية:\n• Fixed window: أبسط، لكن به مشكلة الحدود — يمكن إرسال ضعف الحد عند تقاطع نافذتين.\n• Sliding window: أدق ويعالج تلك المشكلة.\n• Token bucket: يسمح بدفعات قصيرة (burst) مع معدل ثابت طويل المدى، وهو الأنسب لمعظم الـ APIs.\n\nأين يُطبَّق؟ على مستوى البنية التحتية (API Gateway أو Nginx أو Cloudflare) للحماية الخشنة، وداخل التطبيق لحدود خاصة بمنطق العمل.\n\nنقطة جوهرية: يجب أن يكون العدّاد في مخزن مشترك مثل Redis. عدّاد في ذاكرة العملية ينهار مع عدة نسخ، لأن كل نسخة تسمح بالحد كاملًا.\n\nمفتاح التحديد: user id للمستخدمين المسجّلين، وIP للزوار (مع قراءة X-Forwarded-For بشكل صحيح)، وAPI key للعملاء البرمجيين. وحدود مختلفة لمسارات مختلفة: تسجيل الدخول يستحق حدًا صارمًا جدًا.\n\nالاستجابة الصحيحة: 429 Too Many Requests مع رأس Retry-After، وترويسات X-RateLimit-Limit وX-RateLimit-Remaining حتى يتمكن العميل من التصرف بذكاء.\n\nوأضيف دائمًا: تسجيل حالات التجاوز، ومسارًا استثنائيًا للخدمات الداخلية، واختبار الحد قبل تفعيله حتى لا نحجب مستخدمين شرعيين.',
      en: 'First I ask what the goal is, because it changes the design: abuse protection, fairness between tenants, or protecting an expensive resource such as sending SMS?\n\nThen the algorithm:\n• Fixed window — simplest, but has the boundary problem where a client can send double the limit across two adjacent windows.\n• Sliding window — more accurate and fixes that.\n• Token bucket — allows short bursts with a steady long-run rate, which suits most APIs best.\n\nWhere does it live? At the infrastructure edge (API gateway, Nginx, Cloudflare) for coarse protection, and inside the application for business-specific limits.\n\nA crucial point: the counter must live in a shared store such as Redis. An in-process counter collapses with multiple instances, because each one allows the full limit.\n\nThe key to limit on: user id for authenticated users, IP for anonymous traffic (reading X-Forwarded-For correctly), API key for machine clients. And different limits per route — login deserves a very strict one.\n\nThe correct response is 429 Too Many Requests with a Retry-After header, plus X-RateLimit-Limit and X-RateLimit-Remaining so clients can behave intelligently.\n\nI always add: log the rejections, keep a bypass path for internal services, and shadow-test the limit before enforcing it so you do not block legitimate users.',
    },
  },
  {
    id: 'node-scenario-graceful-shutdown',
    difficulty: advanced,
    question: {
      ar: 'سيناريو: كيف تُنفِّذ graceful shutdown في تطبيق Node.js إنتاجي؟',
      en: 'Scenario: how do you implement graceful shutdown in a production Node.js application?',
    },
    answer: {
      ar: 'المشكلة: عند النشر أو التوسّع يرسل النظام SIGTERM. إذا انتهت العملية فورًا، تُقطع الطلبات الجارية ويرى المستخدمون أخطاء 502، وقد تبقى معاملات غير مكتملة.\n\nالتسلسل الصحيح:\n1. توقّف عن الإعلان عن الجاهزية حتى يتوقف الـ load balancer عن إرسال طلبات جديدة.\n2. أغلق الخادم عن قبول اتصالات جديدة مع السماح للجارية بالاكتمال.\n3. انتظر انتهاء الطلبات الجارية، مع مهلة قصوى.\n4. أغلق الموارد: pool قاعدة البيانات، Redis، مستهلكو الطوابير.\n5. اخرج بالرمز 0، ومع مؤقت أمان يفرض الخروج إذا تعلّق شيء.\n\n```js\nlet shuttingDown = false;\n\nconst shutdown = async (signal) => {\n  if (shuttingDown) return;\n  shuttingDown = true;\n  logger.info({ signal }, "shutting down");\n\n  isReady = false;                       // تفشل فحوص الـ readiness الآن\n\n  const force = setTimeout(() => {\n    logger.error("forced exit");\n    process.exit(1);\n  }, 15000);\n  force.unref();\n\n  server.close(async () => {\n    await queue.close();\n    await pool.end();\n    await redis.quit();\n    clearTimeout(force);\n    process.exit(0);\n  });\n};\n\nprocess.on("SIGTERM", () => shutdown("SIGTERM"));\nprocess.on("SIGINT", () => shutdown("SIGINT"));\n```\n\nتفاصيل تفصل الإجابة الجيدة عن الممتازة:\n• تأخير قصير (بضع ثوانٍ) بعد فشل الـ readiness قبل إغلاق الخادم، لأن تحديث الـ load balancer ليس فوريًا.\n• مهلة قصوى إجبارية — الانتظار اللانهائي ليس graceful.\n• الحماية من استدعاء الدالة مرتين.\n• اتصالات keep-alive قد تمنع server.close من الاكتمال؛ أضبط server.headersTimeout وأغلق الاتصالات الخاملة.\n• المهام الجارية في الطوابير: أنهِ المهمة الحالية ولا تلتقط مهامًا جديدة.',
      en: 'The problem: on deploy or scale-down the platform sends SIGTERM. If the process exits immediately, in-flight requests are cut, users see 502s, and you can be left with half-finished work.\n\nThe correct sequence:\n1. Stop reporting ready, so the load balancer stops sending new requests.\n2. Stop accepting new connections while letting existing ones finish.\n3. Wait for in-flight requests, with a hard deadline.\n4. Close resources: database pool, Redis, queue consumers.\n5. Exit 0, with a safety timer that forces exit if something hangs.\n\n```js\nlet shuttingDown = false;\n\nconst shutdown = async (signal) => {\n  if (shuttingDown) return;\n  shuttingDown = true;\n  logger.info({ signal }, "shutting down");\n\n  isReady = false;                       // readiness checks now fail\n\n  const force = setTimeout(() => {\n    logger.error("forced exit");\n    process.exit(1);\n  }, 15000);\n  force.unref();\n\n  server.close(async () => {\n    await queue.close();\n    await pool.end();\n    await redis.quit();\n    clearTimeout(force);\n    process.exit(0);\n  });\n};\n\nprocess.on("SIGTERM", () => shutdown("SIGTERM"));\nprocess.on("SIGINT", () => shutdown("SIGINT"));\n```\n\nThe details that separate a good answer from a great one:\n• A short delay (a few seconds) after failing readiness before closing the server, because load balancer propagation is not instant.\n• A hard deadline — waiting forever is not graceful.\n• Guard against the handler running twice.\n• Keep-alive connections can stop server.close from completing; tune server.headersTimeout and destroy idle sockets.\n• For queue workers: finish the current job and stop claiming new ones.',
    },
  },
  {
    id: 'node-error-strategy',
    difficulty: advanced,
    question: {
      ar: 'ما هي استراتيجيتك للتعامل مع الأخطاء في تطبيق Node.js إنتاجي؟',
      en: 'What is your error-handling strategy for a production Node.js application?',
    },
    answer: {
      ar: 'أبني الاستراتيجية على تصنيف واضح:\n\n1. أخطاء تشغيلية متوقعة: مدخلات غير صالحة، مورد غير موجود، فشل خدمة خارجية، انتهاء مهلة. هذه تُعالج وتُترجم إلى استجابة مناسبة (400، 404، 503) ولا تُسقط العملية.\n\n2. أخطاء برمجية: قراءة خاصية من undefined، خطأ منطقي. هذه تعني أن حالة العملية قد لا تكون موثوقة. أسجّلها بالكامل، أرد 500 برسالة عامة، وأفضّل إنهاء العملية بشكل منظّم وترك مدير العمليات يعيد تشغيلها.\n\n```js\nprocess.on("unhandledRejection", (reason) => {\n  logger.fatal({ reason }, "unhandled rejection");\n  throw reason;                 // نحوّلها إلى uncaughtException\n});\n\nprocess.on("uncaughtException", (error) => {\n  logger.fatal({ error }, "uncaught exception");\n  shutdown("uncaughtException");  // إنهاء منظّم ثم خروج\n});\n```\n\nمبادئ أساسية:\n• لا تستمر في العمل بعد uncaughtException كأن شيئًا لم يحدث؛ الحالة قد تكون تالفة.\n• لا تبتلع الأخطاء بـ catch فارغ.\n• لا تسرّب stack traces أو تفاصيل قاعدة البيانات إلى العميل.\n• سجّل الخطأ مرة واحدة مع سياق كافٍ: request id، user id، المدخلات بعد تنقيتها.\n• صيغة أخطاء موحّدة للـ API مع رمز خطأ مستقر يستطيع العميل التعامل معه برمجيًا.\n• راقب معدل الأخطاء وضع تنبيهًا عليه، لا على كل خطأ منفرد.\n• للتعامل مع الخدمات الخارجية: مهلة، ثم إعادة محاولة محدودة، ثم circuit breaker، ثم تدهور لطيف (graceful degradation) إن أمكن.',
      en: 'I build the strategy on a clear classification:\n\n1. Expected operational errors: invalid input, missing resource, a failing dependency, a timeout. These are handled and translated into an appropriate response (400, 404, 503) and never crash the process.\n\n2. Programmer errors: reading a property of undefined, a logic bug. These mean process state may no longer be trustworthy. I log them fully, return a generic 500, and prefer to shut down cleanly and let the process manager restart.\n\n```js\nprocess.on("unhandledRejection", (reason) => {\n  logger.fatal({ reason }, "unhandled rejection");\n  throw reason;                 // promote to uncaughtException\n});\n\nprocess.on("uncaughtException", (error) => {\n  logger.fatal({ error }, "uncaught exception");\n  shutdown("uncaughtException");  // clean shutdown, then exit\n});\n```\n\nCore principles:\n• Do not carry on after an uncaughtException as if nothing happened — state may be corrupt.\n• Never swallow errors in an empty catch.\n• Never leak stack traces or database details to the client.\n• Log an error once, with enough context: request id, user id, sanitised input.\n• A single API error shape with a stable error code clients can branch on.\n• Alert on error rate, not on every individual error.\n• For dependencies: timeout, then bounded retry, then circuit breaker, then graceful degradation where possible.',
    },
  },
  {
    id: 'node-security',
    difficulty: advanced,
    question: {
      ar: 'ما أهم اعتبارات الأمان في تطبيقات Node.js؟',
      en: 'What are the most important security considerations for Node.js applications?',
    },
    answer: {
      ar: 'أرتّبها حسب الأثر الفعلي:\n\n1. الحقن (Injection): استخدم parameterized queries دائمًا. لا تبنِ SQL بدمج النصوص، ولا تمرّر مدخلات إلى exec أو eval.\n2. المصادقة والتفويض: تحقق من الصلاحيات على مستوى كل مورد. ثغرة IDOR — حيث يغيّر المستخدم معرّفًا في الرابط ليصل إلى بيانات غيره — من أكثر الثغرات شيوعًا وأسهلها تفاديًا.\n3. التحقق من المدخلات على الخادم دائمًا، مع قائمة سماح لا قائمة منع.\n4. إدارة الأسرار: متغيرات بيئة أو secret manager، ولا أسرار في Git، مع تدوير دوري.\n5. كلمات المرور: bcrypt أو argon2، ولا تشفير قابل للعكس ولا MD5/SHA1.\n6. الترويسات الأمنية: helmet يضبط CSP وHSTS وX-Content-Type-Options وغيرها.\n7. سلسلة التوريد: npm audit، وتثبيت الإصدارات عبر lock file، ومراجعة الحزم قليلة الاستخدام قبل إضافتها.\n8. رفض الخدمة: حدود على حجم الـ body، وrate limiting، ومهلات، وحذر من ReDoS في التعبيرات النمطية المعقدة.\n9. الرد بأقل معلومات: لا stack traces، وأخفِ رأس X-Powered-By.\n10. HTTPS في كل مكان، وcookies بخصائص httpOnly وsecure وsameSite.\n11. لا تشغّل العملية بصلاحيات root داخل الحاوية.\n\nومبدأ عام: الأمان طبقات، وأي طبقة واحدة ستفشل يومًا ما.',
      en: 'Ordered by real-world impact:\n\n1. Injection: always use parameterized queries. Never build SQL by concatenation, and never pass user input to exec or eval.\n2. Authentication and authorization: check permissions per resource. IDOR — where a user edits an id in the URL and reads someone else\'s data — is one of the most common and most avoidable vulnerabilities.\n3. Server-side input validation, always, using an allowlist rather than a denylist.\n4. Secret management: environment variables or a secret manager, nothing in Git, rotated periodically.\n5. Passwords: bcrypt or argon2 — never reversible encryption, never MD5/SHA1.\n6. Security headers: helmet sets CSP, HSTS, X-Content-Type-Options and friends.\n7. Supply chain: npm audit, pinned installs via the lockfile, and reviewing low-usage packages before adding them.\n8. Denial of service: body size limits, rate limiting, timeouts, and awareness of ReDoS in complex regular expressions.\n9. Minimal responses: no stack traces, and disable X-Powered-By.\n10. HTTPS everywhere, with httpOnly, secure and sameSite cookies.\n11. Do not run the process as root inside the container.\n\nAnd a general principle: security is layered, because any single layer will eventually fail.',
    },
  },
  {
    id: 'node-api-architecture',
    difficulty: advanced,
    question: {
      ar: 'سيناريو: كيف تبني هيكلًا قابلًا للتوسّع لتطبيق Node.js كبير؟',
      en: 'Scenario: how would you structure a large, scalable Node.js application?',
    },
    answer: {
      ar: 'المبدأ الذي أبدأ منه: التقسيم حسب مجال العمل (feature) وليس حسب النوع التقني. مجلد controllers يضم 80 ملفًا لا يخبرك بشيء عن التطبيق.\n\n```\nsrc/\n  modules/\n    orders/\n      orders.routes.js\n      orders.controller.js     // HTTP فقط: قراءة الطلب وإرسال الرد\n      orders.service.js        // منطق العمل، لا يعرف شيئًا عن HTTP\n      orders.repository.js     // الوصول للبيانات\n      orders.schema.js         // التحقق من المدخلات\n    users/\n  shared/\n    errors/  logger/  middleware/  config/\n  app.js\n  server.js\n```\n\nالقواعد التي تحافظ على قابلية الصيانة:\n1. اتجاه واحد للاعتماديات: controller → service → repository، ولا يستدعي service طبقة HTTP.\n2. الـ service لا يعرف req وres إطلاقًا؛ هذا ما يجعله قابلًا للاختبار وقابلًا لإعادة الاستخدام من طابور أو cron.\n3. فصل app.js عن server.js: الأول يبني التطبيق والثاني يشغّله. هذا يجعل اختبارات الـ integration أسهل بكثير.\n4. الاعتماديات تُمرَّر (dependency injection) بدل استيرادها مباشرة حيثما احتجت استبدالها في الاختبار.\n5. التحقق عند الحدود، والأنواع الداخلية تفترض بيانات صالحة.\n6. لا تسريب لنماذج قاعدة البيانات خارج طبقة الـ repository.\n7. الـ cross-cutting concerns (تسجيل، مصادقة، معالجة أخطاء) في middleware مشترك.\n\nهذا الشكل يجعل استخراج module إلى خدمة مستقلة لاحقًا مسألة نقل مجلد، لا إعادة كتابة.',
      en: 'The principle I start from: organise by feature, not by technical type. A controllers folder with 80 files tells you nothing about what the application does.\n\n```\nsrc/\n  modules/\n    orders/\n      orders.routes.js\n      orders.controller.js     // HTTP only: read the request, send the response\n      orders.service.js        // business logic, knows nothing about HTTP\n      orders.repository.js     // data access\n      orders.schema.js         // input validation\n    users/\n  shared/\n    errors/  logger/  middleware/  config/\n  app.js\n  server.js\n```\n\nThe rules that keep it maintainable:\n1. Dependencies point one way: controller → service → repository, and a service never calls back into the HTTP layer.\n2. Services never see req or res. That is exactly what makes them testable and reusable from a queue worker or a cron job.\n3. Split app.js from server.js — one builds the app, the other starts it. This makes integration tests far easier.\n4. Inject dependencies rather than importing them directly wherever you need to substitute them in tests.\n5. Validate at the boundary; internal code can assume valid data.\n6. Database models never escape the repository layer.\n7. Cross-cutting concerns (logging, auth, error handling) live in shared middleware.\n\nStructured this way, extracting a module into its own service later is a folder move rather than a rewrite.',
    },
  },
  {
    id: 'node-message-queues',
    difficulty: advanced,
    question: {
      ar: 'ما هي message queues ومتى تستخدمها في Node.js؟',
      en: 'What are message queues and when would you use one in Node.js?',
    },
    answer: {
      ar: 'الطابور وسيط يفصل بين من ينتج العمل ومن ينفّذه: ينشر التطبيق رسالة ويعود فورًا، ويستهلكها worker لاحقًا.\n\nمتى أستخدمه؟\n• عمل طويل لا يحتمل انتظار المستخدم: توليد تقارير، معالجة فيديو، إرسال آلاف الرسائل.\n• استيعاب الذروة: الطابور يمتص الدفعات المفاجئة بدل انهيار النظام.\n• إعادة المحاولة الموثوقة عند فشل خدمة خارجية.\n• فصل الخدمات في معمارية event-driven.\n\nالخيارات: BullMQ (فوق Redis، الأشيع في منظومة Node)، RabbitMQ، Kafka لتدفقات ضخمة وإعادة قراءة الأحداث، أو SQS كخدمة مُدارة.\n\n```js\nawait reportQueue.add("monthly", { userId }, {\n  attempts: 3,\n  backoff: { type: "exponential", delay: 2000 },\n  removeOnComplete: 1000,\n});\n```\n\nما يجب التفكير فيه عند التصميم:\n• Idempotency: قد تُسلَّم الرسالة أكثر من مرة، لذلك يجب أن يكون تنفيذ المهمة مرتين آمنًا.\n• Dead letter queue للرسائل الفاشلة نهائيًا، مع مراقبتها.\n• ترتيب التنفيذ غير مضمون افتراضيًا؛ إن كان الترتيب مهمًا فاستخدم مفاتيح تقسيم (partition keys).\n• مراقبة عمق الطابور: تزايده المستمر يعني أن الاستهلاك أبطأ من الإنتاج.\n• آلية لإعلام المستخدم بالنتيجة: polling أو webhook أو WebSocket.',
      en: 'A queue decouples whoever produces work from whoever performs it: the app publishes a message and returns immediately, and a worker consumes it later.\n\nWhen do I use one?\n• Long work a user should not wait for: report generation, video processing, sending thousands of emails.\n• Absorbing spikes — the queue buffers bursts instead of the system collapsing.\n• Reliable retries when a dependency fails.\n• Decoupling services in an event-driven architecture.\n\nThe options: BullMQ (on Redis, the most common in the Node ecosystem), RabbitMQ, Kafka for high-volume streams and event replay, or SQS as a managed service.\n\n```js\nawait reportQueue.add("monthly", { userId }, {\n  attempts: 3,\n  backoff: { type: "exponential", delay: 2000 },\n  removeOnComplete: 1000,\n});\n```\n\nWhat you must design for:\n• Idempotency — a message can be delivered more than once, so running a job twice must be safe.\n• A dead letter queue for permanently failed messages, and monitoring on it.\n• Ordering is not guaranteed by default; if order matters, use partition keys.\n• Watch queue depth — steady growth means consumption is slower than production.\n• A way to tell the user the outcome: polling, a webhook, or a WebSocket push.',
    },
  },
  {
    id: 'node-observability',
    difficulty: advanced,
    question: {
      ar: 'ما هي الـ observability وكيف تطبّقها في Node.js؟',
      en: 'What is observability and how do you implement it in Node.js?',
    },
    answer: {
      ar: 'المراقبة (monitoring) تخبرك أن شيئًا ما تعطّل، أما الـ observability فتمكّنك من معرفة السبب دون نشر كود جديد. أركانها ثلاثة:\n\n1. Logs: أحداث منفصلة بصيغة JSON منظّمة مع correlation id.\n2. Metrics: أرقام مجمّعة عبر الزمن — معدل الطلبات، معدل الأخطاء، زمن الاستجابة بالنسب المئوية، استهلاك الذاكرة، وتأخر الـ event loop (مقياس خاص بـ Node ومهم جدًا).\n3. Traces: تتبّع الطلب الواحد عبر كل الخدمات والطبقات، وهو ما يكشف أين ضاع الوقت فعلًا.\n\nعمليًا أستخدم OpenTelemetry كمعيار موحّد، وPino للسجلات، وPrometheus/Grafana أو منصة APM جاهزة.\n\nمقاييس أركّز عليها في Node تحديدًا:\n• event loop lag — أفضل مؤشر مبكر على حجب الحلقة.\n• heap used مقابل heap total لاكتشاف التسريبات.\n• عدد الاتصالات النشطة وحجم الـ pool.\n• عمق الطوابير.\n\nومبدأ مهم: أضبط التنبيهات على أعراض يشعر بها المستخدم (معدل الأخطاء، زمن الاستجابة p99) وليس على كل ارتفاع في استهلاك المعالج، وإلا أصبح التنبيه ضجيجًا يتجاهله الفريق.\n\nوأضيف health endpoints تفصل بين liveness وreadiness، ومعرّف إصدار في كل سجل لمعرفة أي نشر تسبب في المشكلة.',
      en: 'Monitoring tells you something broke; observability lets you work out why without shipping new code. It has three pillars:\n\n1. Logs — discrete events, structured as JSON, carrying a correlation id.\n2. Metrics — aggregates over time: request rate, error rate, latency percentiles, memory, and event loop lag (a Node-specific metric that matters a great deal).\n3. Traces — following one request across services and layers, which is what actually reveals where the time went.\n\nIn practice I use OpenTelemetry as the common standard, Pino for logs, and Prometheus/Grafana or a managed APM.\n\nThe metrics I watch specifically for Node:\n• Event loop lag — the best early warning that something is blocking.\n• Heap used versus heap total, to spot leaks.\n• Active connections and pool utilisation.\n• Queue depth.\n\nAn important principle: alert on symptoms users feel (error rate, p99 latency), not on every CPU spike — otherwise alerts become noise the team learns to ignore.\n\nI also add health endpoints that separate liveness from readiness, and a build/version id on every log line so you can tell which deploy caused a problem.',
    },
  },
  {
    id: 'node-production-deployment',
    difficulty: advanced,
    question: {
      ar: 'ما الذي تحتاجه لنشر تطبيق Node.js في الإنتاج؟',
      en: 'What does it take to deploy a Node.js application to production?',
    },
    answer: {
      ar: 'ما أعتبره الحد الأدنى:\n\n1. البناء والحاوية: Dockerfile متعدد المراحل، صورة أساس صغيرة (alpine أو slim)، تثبيت `npm ci --omit=dev`، ومستخدم غير root، و‎.dockerignore يستبعد node_modules و‎.env.\n2. NODE_ENV=production — هذا يغيّر سلوك عدة مكتبات ويحسّن الأداء.\n3. إدارة العملية: في Kubernetes عملية واحدة لكل حاوية مع إعادة تشغيل تلقائية؛ خارجها PM2 في وضع cluster.\n4. فحوص الصحة: liveness وreadiness منفصلتان، وgraceful shutdown عند SIGTERM.\n5. الأسرار من secret manager أو متغيرات بيئة، لا في الصورة.\n6. عكسي أمامي (reverse proxy) أو load balancer يتولى TLS والضغط وحماية أساسية.\n7. الترحيلات (migrations) تُشغَّل كخطوة منفصلة قبل النشر، لا عند بدء التطبيق في كل نسخة.\n8. CI/CD: اختبارات وlint وnpm audit، ثم بناء، ثم نشر تدريجي (rolling أو canary) مع إمكانية التراجع.\n9. المراقبة والسجلات المركزية والتنبيهات — قبل النشر لا بعده.\n10. حدود موارد للحاوية مع ضبط ‎--max-old-space-size أقل منها.\n\nونقطة عملية: ثبّت إصدار Node عبر engines وعبر وسم الصورة، حتى لا يتغيّر سلوك الإنتاج فجأة بسبب تحديث غير مقصود.',
      en: 'What I consider the minimum bar:\n\n1. Build and container: a multi-stage Dockerfile, a small base image (alpine or slim), `npm ci --omit=dev`, a non-root user, and a .dockerignore that excludes node_modules and .env.\n2. NODE_ENV=production — it changes behaviour in several libraries and improves performance.\n3. Process management: in Kubernetes, one process per container with automatic restarts; outside it, PM2 in cluster mode.\n4. Health checks: separate liveness and readiness, plus graceful shutdown on SIGTERM.\n5. Secrets from a secret manager or environment variables, never baked into the image.\n6. A reverse proxy or load balancer handling TLS, compression and basic protection.\n7. Migrations as a separate deployment step, not run at startup by every instance.\n8. CI/CD: tests, lint and npm audit, then build, then a rolling or canary deploy with a rollback path.\n9. Monitoring, centralised logs and alerting — set up before you ship, not after.\n10. Container resource limits, with --max-old-space-size set below the memory limit.\n\nOne practical note: pin the Node version in engines and in the image tag, so production behaviour does not change under you because of an unintended upgrade.',
    },
  },
  {
    id: 'node-scenario-traffic-spike',
    difficulty: advanced,
    question: {
      ar: 'سيناريو: ارتفعت حركة الطلبات على الـ API فجأة بشكل كبير. كيف تتصرف؟',
      en: 'Scenario: API traffic suddenly spikes far beyond normal. What do you do?',
    },
    answer: {
      ar: 'أفصل بين الاستجابة الفورية والمعالجة الجذرية.\n\nفورًا:\n1. أتحقق من طبيعة الحركة: هل هي حقيقية (حملة تسويقية، خبر) أم إساءة استخدام أو هجوم؟ مصدر الطلبات ونمطها يجيبان بسرعة.\n2. إن كانت إساءة: تفعيل rate limiting أو حظر على مستوى الـ CDN/WAF.\n3. إن كانت حقيقية: التوسّع الأفقي فورًا (زيادة عدد النسخ)، مع الانتباه إلى أن قاعدة البيانات قد تصبح عنق الزجاجة الجديد.\n4. تفعيل أو إطالة مدة الـ caching للمسارات الأثقل، وتقديم بيانات أقدم قليلًا أفضل من عدم تقديم شيء.\n5. تدهور لطيف: إيقاف الميزات غير الأساسية مؤقتًا (توصيات، إحصائيات لحظية) للحفاظ على المسار الحرج.\n6. مراقبة اتصالات قاعدة البيانات وعمق الطوابير وتأخر الـ event loop.\n\nبعد استقرار الوضع:\n1. تحليل ما كان عنق الزجاجة فعلًا.\n2. autoscaling مبني على مقياس صحيح — عدد الطلبات أو زمن الاستجابة وليس المعالج وحده.\n3. اختبار حمل حتى أعرف السعة الحقيقية قبل الحاجة إليها.\n4. نقل العمل غير الحرج إلى طوابير.\n5. مراجعة استعلامات قاعدة البيانات وإضافة caching حيث يجب.\n6. حدود حماية دائمة: rate limiting وcircuit breakers وmهلات.\n\nالنقطة التي أؤكد عليها: السعة تُخطَّط قبل الحدث، والتعامل اللحظي هو دائمًا الخيار الأضعف.',
      en: 'I separate the immediate response from the root-cause work.\n\nImmediately:\n1. Characterise the traffic: is it genuine (a campaign, a news mention) or abuse? Source distribution and request patterns answer that quickly.\n2. If it is abuse: turn on rate limiting or block at the CDN/WAF layer.\n3. If it is genuine: scale out now, while watching for the database becoming the new bottleneck.\n4. Turn on or extend caching for the heaviest routes — slightly stale data beats no data.\n5. Graceful degradation: temporarily disable non-essential features (recommendations, live counters) to protect the critical path.\n6. Watch database connections, queue depth and event loop lag.\n\nOnce it is stable:\n1. Work out what the actual bottleneck was.\n2. Set up autoscaling on a meaningful metric — request rate or latency, not CPU alone.\n3. Load test so you know your real capacity before you need it.\n4. Move non-critical work to queues.\n5. Review database queries and add caching where it belongs.\n6. Keep permanent guardrails: rate limits, circuit breakers, timeouts.\n\nThe point I would emphasise: capacity is planned before the event. Reacting in the moment is always the weakest option.',
    },
  },
  {
    id: 'node-realtime-systems',
    difficulty: advanced,
    question: {
      ar: 'كيف تصمم نظامًا لحظيًا (real-time) قابلًا للتوسّع باستخدام Node.js؟',
      en: 'How would you design a scalable real-time system with Node.js?',
    },
    answer: {
      ar: 'أبدأ باختيار وسيلة النقل حسب الحاجة الفعلية:\n• WebSocket للتواصل ثنائي الاتجاه (محادثة، تحرير تعاوني).\n• Server-Sent Events إذا كان التدفق من الخادم إلى العميل فقط (إشعارات، أسعار) — أبسط ويدعم إعادة الاتصال تلقائيًا.\n• Polling عندما يكون التأخير المقبول عاليًا؛ لا تعقّد ما لا يحتاج تعقيدًا.\n\nالتحدي الحقيقي هو التوسّع: مع عدة نسخ، المستخدمون في غرفة واحدة قد يكونون موزّعين على نسخ مختلفة، فلا تصلهم الرسائل.\n\nالحل هو ناقل رسائل مشترك — Redis Pub/Sub عادة — تنشر عليه كل نسخة وتستمع إليه:\n```js\nio.adapter(createAdapter(pubClient, subClient));\n```\n\nما يجب معالجته في التصميم:\n1. المصادقة عند إنشاء الاتصال وليس فقط عند الرسائل.\n2. ping/pong للكشف عن الاتصالات الميتة، فالمتصفح لا يبلّغ دائمًا عن الانقطاع.\n3. إعادة اتصال من جانب العميل مع exponential backoff، وإلا انهار الخادم عند عودته من تعطّل قصير بسبب اندفاع كل العملاء معًا.\n4. استعادة الحالة بعد إعادة الاتصال: أرسل الرسائل الفائتة منذ آخر معرّف استلمه العميل.\n5. حدود على عدد الاتصالات لكل مستخدم وعلى معدل الرسائل.\n6. sticky sessions إذا كان النقل يعتمد على long-polling كمرحلة أولى.\n7. الاستمرارية: الرسائل المهمة تُحفظ في قاعدة البيانات، والبث اللحظي مجرد طبقة تسليم سريعة فوقها.\n\nومقاييس أراقبها: عدد الاتصالات المفتوحة، ومعدل الرسائل، وحجم مخازن الإرسال (مؤشر على عملاء بطيئين).',
      en: 'I start by choosing the transport based on the actual requirement:\n• WebSocket for bidirectional communication (chat, collaborative editing).\n• Server-Sent Events when the flow is server-to-client only (notifications, prices) — simpler, and it reconnects automatically.\n• Polling when the acceptable latency is high; do not over-engineer what does not need it.\n\nThe real challenge is scaling: with multiple instances, users in the same room may be connected to different instances and never receive each other\'s messages.\n\nThe answer is a shared message bus — usually Redis Pub/Sub — that every instance publishes to and subscribes from:\n```js\nio.adapter(createAdapter(pubClient, subClient));\n```\n\nWhat the design must handle:\n1. Authenticate at connection time, not only per message.\n2. Ping/pong heartbeats to detect dead connections — browsers do not always signal a drop.\n3. Client-side reconnection with exponential backoff, otherwise a brief outage ends with every client reconnecting at once and taking the server down again.\n4. State recovery after reconnect: replay messages since the last id the client acknowledged.\n5. Limits on connections per user and on message rate.\n6. Sticky sessions if the transport falls back to long-polling.\n7. Durability: important messages are persisted to the database, with the realtime layer being only a fast delivery mechanism on top.\n\nMetrics I watch: open connection count, message rate, and outbound buffer sizes (a sign of slow consumers).',
    },
  },
  {
    id: 'node-monolith-vs-microservices',
    difficulty: advanced,
    question: {
      ar: 'متى تختار monolith ومتى تختار microservices في Node.js؟',
      en: 'When do you choose a monolith over microservices in Node.js?',
    },
    answer: {
      ar: 'إجابتي المختصرة: ابدأ بـ modular monolith، ولا تنتقل إلى microservices إلا عند وجود سبب محدد.\n\nما يجعل الـ monolith الخيار الصحيح غالبًا:\n• استدعاءات داخل العملية بدل شبكة قد تفشل.\n• معاملات قاعدة بيانات حقيقية بدل اتساق نهائي معقّد.\n• نشر واحد، تتبّع أبسط، اختبارات أسهل.\n• فريق صغير لا يملك طاقة تشغيلية لعشر خدمات.\n\nمتى تستحق الـ microservices تكلفتها؟\n1. اختلاف حقيقي في متطلبات التوسّع: خدمة معالجة الفيديو تحتاج موارد مختلفة تمامًا عن خدمة المستخدمين.\n2. فرق متعددة تتعطّل بسبب التنسيق على نشر واحد.\n3. الحاجة إلى عزل الأعطال بحيث لا يُسقط جزء النظام كله.\n4. اختلاف تقني مبرَّر لجزء معيّن.\n\nالتكاليف التي يجب قولها بصراحة: تتبّع موزّع، ومعاملات موزّعة (saga)، واختبارات تكامل أصعب، وبنية تحتية أعقد، وتأخير شبكة إضافي.\n\nالطريق العملي: monolith بحدود وحدات واضحة وقواعد اعتماد صارمة، ثم استخرج الخدمة التي يثبت أنها تحتاج الاستقلال. الاستخراج من كود منظّم سهل؛ أما البدء بعشرين خدمة دون فهم حدود المجال فينتهي غالبًا إلى distributed monolith، وهو أسوأ الخيارين.',
      en: 'My short answer: start with a modular monolith, and move to microservices only for a specific reason.\n\nWhy a monolith is usually right:\n• In-process calls instead of network calls that can fail.\n• Real database transactions instead of complicated eventual consistency.\n• One deployment, simpler tracing, easier testing.\n• A small team without the operational capacity for ten services.\n\nWhen do microservices earn their cost?\n1. Genuinely divergent scaling needs — a video processing service needs completely different resources from a user service.\n2. Multiple teams blocked by coordinating on one deploy.\n3. A need for fault isolation so one part cannot take the whole system down.\n4. A justified technology difference for a specific component.\n\nThe costs to state honestly: distributed tracing, distributed transactions (sagas), harder integration testing, more infrastructure, and added network latency.\n\nThe pragmatic path: a monolith with clear module boundaries and enforced dependency rules, then extract the service that demonstrably needs independence. Extracting from well-organised code is easy; starting with twenty services before you understand your domain boundaries usually produces a distributed monolith, which is the worst of both.',
    },
  },
  {
    id: 'node-scenario-worker-threads-when',
    difficulty: advanced,
    question: {
      ar: 'سيناريو: متى تستخدم Worker Threads ومتى تستخدم بدائلها؟ اشرح بقرار عملي.',
      en: 'Scenario: when would you reach for Worker Threads versus the alternatives? Walk through the decision.',
    },
    answer: {
      ar: 'أسأل أربعة أسئلة بالترتيب:\n\n1. هل العمل CPU-bound أم I/O-bound؟ إن كان I/O فلا حاجة لأي شيء — الـ event loop مصمّم لهذا، وworker هنا يضيف تعقيدًا فقط.\n\n2. هل يحتاج المستخدم النتيجة في نفس الطلب؟ إن لم يكن، فالطابور (BullMQ) أفضل من worker thread: يمنحك إعادة محاولة وثباتًا بعد إعادة التشغيل وتوسّعًا مستقلًا.\n\n3. هل العمل في JavaScript أم في برنامج خارجي؟ إن كان برنامجًا خارجيًا مثل ffmpeg فهو child process.\n\n4. هل الحساب في JavaScript وطويل بما يكفي (أكثر من ~50 مللي ثانية) ليؤثر على زمن الاستجابة؟ هنا فقط أستخدم Worker Thread.\n\nأمثلة تطبيقية:\n• تشفير كلمة مرور بـ bcrypt: لا حاجة — المكتبة تستخدم thread pool الخاص بـ libuv أصلًا.\n• توليد PDF من ألف صف: worker thread إن كان الرد فوريًا مطلوبًا، وإلا فطابور.\n• ضغط أو تحويل صورة مرفوعة: طابور غالبًا، وworker thread إن كانت صغيرة والرد مطلوب الآن.\n• تحليل ملف CSV بحجم 500MB: stream + worker thread، أو الأفضل معالجة على دفعات في طابور.\n\nوعند استخدام worker thread أستخدم pool ثابت الحجم يساوي تقريبًا عدد الأنوية، لأن إنشاء worker لكل طلب يكلف أكثر مما يوفّر، ولأن عددًا غير محدود من الـ workers يستنزف الذاكرة والمعالج معًا.',
      en: 'I ask four questions in order:\n\n1. Is the work CPU-bound or I/O-bound? If it is I/O, nothing is needed — the event loop is built for that, and a worker only adds complexity.\n\n2. Does the user need the result in this request? If not, a queue (BullMQ) beats a worker thread: you get retries, durability across restarts, and independent scaling.\n\n3. Is the work JavaScript or an external program? For ffmpeg and friends it is a child process.\n\n4. Is it JavaScript computation long enough (say over ~50ms) to hurt latency? Only then do I use a Worker Thread.\n\nConcrete examples:\n• bcrypt password hashing: not needed — the library already uses the libuv thread pool.\n• Generating a PDF from a thousand rows: worker thread if the response must be immediate, otherwise a queue.\n• Resizing an uploaded image: usually a queue; a worker thread if it is small and the response is needed now.\n• Parsing a 500MB CSV: streams plus a worker thread, or better, batched processing in a queue.\n\nWhen I do use worker threads I use a fixed-size pool roughly equal to the core count, because spawning per request costs more than it saves, and an unbounded number of workers exhausts memory and CPU at the same time.',
    },
  },

  // ---------------------------------------------------------------- SCENARIOS
  {
    id: 'node-scenario-memory-growth',
    difficulty: advanced,
    kind: 'scenario',
    depth: 'debug',
    question: {
      ar: 'سيناريو: خدمة Node.js في الإنتاج تزداد ذاكرتها ببطء حتى تُعاد بعد يومين بسبب OOM. لا يوجد خطأ في السجلات. كيف تجد السبب؟',
      en: 'Scenario: a Node.js service in production grows in memory slowly until it is restarted after two days by OOM. There are no errors in the logs. How do you find the cause?',
    },
    answer: {
      ar: 'نمو بطيء وثابت بلا أخطاء = تسريب ذاكرة، لا ذروة مؤقتة. المنهج: أثبت، ثم أقارن، ثم أعزل.\n\n1. أثبت أنه تسريب: أراقب heapUsed عبر process.memoryUsage() في المقاييس. إذا كان يرتفع بعد كل GC ولا يعود للمستوى السابق فهو تسريب. إن كان RSS يرتفع وheap ثابت فالمشكلة خارج الـ heap (Buffers، إضافات أصلية، أو فقط تجزئة الذاكرة).\n\n2. أقارن لقطات heap: أستخدم --inspect أو v8.writeHeapSnapshot() وآخذ لقطة بعد الإقلاع، وأخرى بعد ساعة تحت الحمل. في DevTools أستخدم "Comparison" وأرتّب حسب الزيادة. سيظهر لي نوع الكائنات التي تتراكم — وغالبًا يكون واضحًا: مصفوفة، Map، closures، أو مستمعو أحداث.\n\n3. أعزل السبب. المشتبه بهم المعتادون في Node:\n• Map أو كائن يُستخدم كـ cache بلا حد أقصى ولا انتهاء.\n• مستمعو أحداث يُضافون في كل طلب ولا يُزالون (تحذير MaxListenersExceededWarning قد يكون في السجلات فعلًا).\n• closures تحتفظ بمراجع لطلبات قديمة (مثلًا مصفوفة عامة تدفع إليها كل استجابة "للتصحيح").\n• مؤقتات setInterval لا تُلغى.\n• اتصالات أو streams لا تُغلق.\n\n4. أعيد الإنتاج محليًا بحمل اصطناعي (autocannon) قبل وبعد الإصلاح لأتأكد أن الرسم صار مسطحًا.\n\nوإن لم أستطع الإصلاح فورًا: حد أقصى للذاكرة مع إعادة تشغيل متدرّجة (--max-old-space-size وعدة نسخ) يشتري وقتًا دون توقف الخدمة — لكنه مسكّن لا علاج.',
      en: 'Slow, steady growth with no errors = a memory leak, not a temporary spike. The method: confirm, then compare, then isolate.\n\n1. Confirm it is a leak: I watch heapUsed from process.memoryUsage() in the metrics. If it rises after every GC and never returns to the previous level, it is a leak. If RSS rises while the heap is flat, the problem is off-heap (Buffers, native addons, or just fragmentation).\n\n2. Compare heap snapshots: with --inspect or v8.writeHeapSnapshot() I take one snapshot after startup and another after an hour under load. In DevTools I use the Comparison view sorted by delta. It shows me which object types accumulate — and it is usually obvious: an array, a Map, closures, or event listeners.\n\n3. Isolate the cause. The usual suspects in Node:\n• A Map or object used as a cache with no maximum size and no expiry.\n• Event listeners added per request and never removed (a MaxListenersExceededWarning may actually be in the logs).\n• Closures holding references to old requests (for example a global array every response is pushed into "for debugging").\n• setInterval timers never cleared.\n• Connections or streams never closed.\n\n4. Reproduce locally under synthetic load (autocannon) before and after the fix to confirm the graph is flat.\n\nAnd if I cannot fix it immediately: a memory cap with rolling restarts (--max-old-space-size and several instances) buys time without downtime — but it is a painkiller, not a cure.',
    },
    keyPoints: [
      { ar: 'تأكيد التسريب عبر heapUsed بعد GC', en: 'Confirm the leak via heapUsed after GC', terms: ['heapused', 'memoryusage', 'gc', 'leak', 'تسريب', 'rss', 'heap'] },
      { ar: 'مقارنة لقطات heap', en: 'Compare heap snapshots', terms: ['snapshot', 'لقطة', 'heap snapshot', '--inspect', 'comparison', 'مقارنة', 'devtools'] },
      { ar: 'المشتبه بهم: cache بلا حد، مستمعون، مؤقتات', en: 'Suspects: unbounded cache, listeners, timers', terms: ['cache', 'unbounded', 'بلا حد', 'listener', 'مستمع', 'setinterval', 'closure', 'maxlisteners'] },
      { ar: 'إعادة الإنتاج تحت حمل والتحقق', en: 'Reproduce under load and verify', terms: ['autocannon', 'load', 'حمل', 'reproduce', 'إعادة إنتاج', 'before and after', 'flat'] },
    ],
  },
  {
    id: 'node-scenario-slow-endpoint-under-load',
    difficulty: intermediate,
    kind: 'scenario',
    depth: 'apply',
    question: {
      ar: 'سيناريو: endpoint يعمل في 50ms عند اختباره وحده، لكن تحت 200 طلب متزامن يصل زمن الاستجابة إلى 3 ثوانٍ لكل الطلبات — حتى البسيطة منها. ما السبب المحتمل وكيف تحقق؟',
      en: 'Scenario: an endpoint responds in 50ms when tested alone, but under 200 concurrent requests response time climbs to 3 seconds for all requests — even simple ones. What is the likely cause and how do you verify it?',
    },
    answer: {
      ar: 'العلامة الحاسمة: كل الطلبات تبطؤ، حتى التي لا علاقة لها بالـ endpoint الثقيل. في Node هذا يعني غالبًا أن الخيط الرئيسي مشغول — event loop محجوب — لأن Node يخدم كل الطلبات من خيط واحد.\n\nالمشتبه الأول: عمل متزامن ثقيل داخل الطلب: JSON.stringify لكائن ضخم، حلقة على آلاف العناصر، تشفير bcrypt متزامن، ضغط، أو regex كارثي. 50ms وحده تبدو مقبولة، لكن 200 × 50ms من العمل المتزامن تصطف في طابور = 10 ثوانٍ.\n\nالتحقق:\n1. أقيس event loop lag (perf_hooks.monitorEventLoopDelay أو مقياس بسيط بـ setInterval يقيس الانحراف). إذا قفز تحت الحمل فالتشخيص مؤكد.\n2. أشغّل --cpu-prof تحت الحمل وأرى أي دالة تستهلك الوقت.\n\nالمشتبه الثاني إن كان event loop سليمًا: مورد مشترك محدود: pool اتصالات قاعدة البيانات بحجم 10 مثلًا، فتنتظر 190 طلبًا دورها. أتحقق من مقاييس الـ pool (الطلبات المنتظرة) وزمن الاستعلامات في قاعدة البيانات نفسها.\n\nالإصلاح حسب السبب: نقل العمل المتزامن إلى worker thread أو نسخة غير متزامنة (bcrypt.hash غير المتزامن)، أو تخزين النتيجة مؤقتًا، أو رفع حجم الـ pool مع فهرس ناقص في قاعدة البيانات. وعلى مستوى البنية: cluster أو عدة نسخ خلف load balancer حتى لا يكون خيط واحد هو كل السعة.\n\nالدرس الذي أذكره: قياس endpoint وحده لا يكشف مشكلات التزامن — اختبار الحمل جزء من التعريف بالإنجاز لأي endpoint حرج.',
      en: 'The decisive clue: all requests slow down, even ones unrelated to the heavy endpoint. In Node that almost always means the main thread is busy — the event loop is blocked — because Node serves every request from a single thread.\n\nPrime suspect: heavy synchronous work inside the request: JSON.stringify of a huge object, a loop over thousands of items, synchronous bcrypt, compression, or a catastrophic regex. 50ms alone looks fine, but 200 × 50ms of synchronous work queues up = 10 seconds.\n\nVerification:\n1. I measure event loop lag (perf_hooks.monitorEventLoopDelay, or a simple setInterval drift gauge). If it spikes under load, the diagnosis is confirmed.\n2. I run --cpu-prof under load and see which function eats the time.\n\nSecond suspect if the event loop is healthy: a limited shared resource — a database connection pool of size 10, say, so 190 requests wait their turn. I check the pool metrics (pending requests) and query times in the database itself.\n\nThe fix depends on the cause: move synchronous work to a worker thread or an async variant (async bcrypt.hash), cache the result, or raise the pool size together with a missing database index. At the infrastructure level: cluster or several instances behind a load balancer so one thread is not the entire capacity.\n\nThe lesson I make explicit: measuring an endpoint alone does not reveal concurrency problems — load testing is part of the definition of done for any critical endpoint.',
    },
    keyPoints: [
      { ar: 'event loop محجوب — كل الطلبات تبطؤ', en: 'Blocked event loop — all requests slow', terms: ['event loop', 'block', 'محجوب', 'single thread', 'خيط واحد', 'synchronous', 'متزامن', 'main thread'] },
      { ar: 'قياس event loop lag / cpu profile', en: 'Measure event loop lag / CPU profile', terms: ['lag', 'monitoreventloopdelay', 'cpu-prof', 'profile', 'قياس', 'perf_hooks'] },
      { ar: 'مورد مشترك محدود (pool)', en: 'A limited shared resource (pool)', terms: ['pool', 'connection', 'اتصال', 'queue', 'طابور', 'waiting', 'database', 'قاعدة'] },
      { ar: 'worker / async / cache / cluster', en: 'Worker, async variant, cache, cluster', terms: ['worker', 'async', 'غير متزامن', 'cache', 'cluster', 'instances', 'نسخ', 'load balancer'] },
    ],
  },
];
