// data/categories/dotnet.js
import { DIFFICULTY } from '../difficulty.js';

const { beginner, intermediate, advanced } = DIFFICULTY;

export const dotnet = [
  {
    id: 'dotnet-1-what-is-the-net',
    difficulty: beginner,
    question: {
      ar: 'ما هو .NET Framework؟',
      en: 'What is the .NET Framework?',
    },
    answer: {
      ar: 'تم تطوير .NET Framework بواسطة Microsoft. يوفر التقنيات والأدوات اللازمة لبناء تطبيقات الشبكة وكذلك تطبيقات وخدمات الويب الموزعة.',
      en: 'The .NET Framework is Microsoft\'s original development platform, providing the runtime, libraries and tooling for building Windows desktop applications, web applications and distributed web services.\n\nWorth noting for context: it is Windows-only and now in maintenance mode. Modern development uses .NET (formerly .NET Core), which is cross-platform, open source and considerably faster. The Framework remains relevant only for maintaining existing applications.',
    },
  },
  {
    id: 'dotnet-2-what-does-the-net',
    difficulty: beginner,
    question: {
      ar: 'ما الذي يوفره .NET Framework؟',
      en: 'What does the .NET Framework provide?',
    },
    answer: {
      ar: 'يقدم .NET Framework بيئة وقت ترجمة وتشغيل تدعم أي لغة تتوافق مع مواصفات اللغة العامة (Common Language Specification - CLS).',
      en: 'It provides a compilation and execution environment that supports any language conforming to the Common Language Specification (CLS). That is the basis of its language interoperability: C#, VB.NET and F# all compile to the same intermediate language, so a class written in one can be consumed from another. Alongside that it supplies a large class library, automatic memory management, and a security model.',
    },
  },
  {
    id: 'dotnet-3-what-are-the-main',
    difficulty: beginner,
    question: {
      ar: 'ما هي المكونات الرئيسية لبرنامج .NET Framework؟',
      en: 'What are the main components of the .NET Framework?',
    },
    answer: {
      ar: 'المكونات الرئيسية لـ .NET Framework تشمل:\n- وقت تشغيل اللغة العامة (Common Language Runtime - CLR).\n- مكتبة فئات إطار العمل (Framework Class Library - FCL).\n- مجالات التطبيق (Application Domains).\n- مضيف وقت التشغيل (Runtime Host).\n- التشغيل البيني بين اللغات (Cross-Language Interoperability).\n- التنفيذ جنبًا إلى جنب (Side-by-Side Execution).\n- وقت تشغيل اللغة الديناميكي (Dynamic Language Runtime - DLR).\n- نظام النوع المشترك (Common Type System - CTS).\n- البيانات الوصفية والمكونات ذاتية الوصف (Metadata and Self-Describing Components).\n- الأمان في .NET (Security in .NET).\n- بنية عرض النموذج (Model-View-Presenter - MVP Architecture).',
      en: 'The main pieces are:\n• Common Language Runtime (CLR) — the execution engine handling JIT compilation, memory management and garbage collection.\n• Framework Class Library (FCL) — the built-in types and APIs.\n• Common Type System (CTS) — the shared type definitions that make cross-language interoperability possible.\n• Application Domains — isolation boundaries within a process.\n• Runtime Host — what loads and starts the CLR.\n• Side-by-side execution — running different versions of an assembly together.\n• Dynamic Language Runtime (DLR) — support for dynamic languages.\n• Metadata and self-describing components.\n• The .NET security model.\n\nIn modern .NET, application domains are gone, replaced by AssemblyLoadContext and by process-level isolation through containers.',
    },
  },
  {
    id: 'dotnet-4-what-are-the-key',
    difficulty: beginner,
    question: {
      ar: 'ما هي الخصائص الرئيسية لـ .NET؟',
      en: 'What are the key characteristics of .NET?',
    },
    answer: {
      ar: 'الخصائص الرئيسية لـ .NET تشمل:\n- يتم تجميع البرنامج إلى لغة وسيطة تُعرف بـ Microsoft Intermediate Language - MSIL (لغة Microsoft الوسيطة).\n- MSIL لا يحتوي على أي استدعاءات API خاصة بمنصة معينة.\n- يتحقق المترجم من بناء الجملة والدلالات الأساسية فقط.\n- يتم ربط المكتبات المستخدمة في البرنامج قبل إنشاء MSIL بشكل غير مترجم.\n- يستدعي البرنامج واجهات برمجة التطبيقات (API) الخاصة بنظام التشغيل عبر CLR الذي يعمل كوسيط.\n- تقوم CLR بإدارة الذاكرة وجمع البيانات المهملة تلقائيًا.',
      en: '• Source code compiles to an intermediate language, MSIL, rather than directly to machine code.\n• MSIL contains no platform-specific API calls, which is what makes portability possible.\n• The compiler checks syntax and basic semantics; the rest is resolved at runtime.\n• Libraries are linked at runtime rather than being compiled into the output.\n• Calls to the operating system go through the CLR, which acts as the intermediary.\n• The CLR manages memory and performs garbage collection automatically.\n\nModern .NET adds ahead-of-time compilation (Native AOT) as an option, producing a self-contained native binary with near-instant startup — valuable for serverless and CLI tools.',
    },
  },
  {
    id: 'dotnet-5-which-languages-does-net',
    difficulty: beginner,
    question: {
      ar: 'ما هي اللغات التي يدعمها .NET؟',
      en: 'Which languages does .NET support?',
    },
    answer: {
      ar: 'يدعم .NET عدة لغات برمجة منها:\n- VB.NET\n- C#\n- COBOL\n- PERL.',
      en: 'The primary languages are C# (by far the most used), F# (functional-first) and VB.NET (maintenance only). Historically the platform also supported C++/CLI, and third-party implementations existed for languages such as COBOL and Python.\n\nWhat makes this possible is that every language compiles to the same intermediate language and shares the Common Type System, so assemblies interoperate regardless of the language they were written in.',
    },
  },
  {
    id: 'dotnet-6-what-is-the-size',
    difficulty: beginner,
    question: {
      ar: 'ما هو حجم نوع البيانات int في .NET؟',
      en: 'What is the size of the int data type in .NET?',
    },
    answer: {
      ar: 'نوع البيانات int في .NET حجمه 32 بت.',
      en: '`int` in C# is System.Int32 — a 32-bit signed integer, with a range of roughly -2.1 billion to 2.1 billion.\n\nThe related types are `long` (Int64), `short` (Int16), `byte` (8-bit unsigned) and their unsigned variants. Importantly, these sizes are fixed by the CTS and do not vary by platform, unlike C where int size is implementation-defined.\n\nOne practical note: integer arithmetic does not check for overflow by default, so exceeding the range wraps silently. The `checked` keyword makes it throw instead.',
    },
  },
  {
    id: 'dotnet-7-what-are-namespaces-in',
    difficulty: beginner,
    question: {
      ar: 'ما هي مساحات الأسماء (Namespaces) في .NET؟',
      en: 'What are namespaces in .NET?',
    },
    answer: {
      ar: 'مساحات الأسماء أو Namespaces في .NET هي وسيلة لتنظيم مكتبة الفئات داخل .NET Framework بشكل منطقي حسب سهولة الاستخدام والوظيفة.',
      en: 'Namespaces organise types into a logical hierarchy, grouping them by area of functionality and preventing name collisions between libraries.\n\n```csharp\nnamespace MyApp.Services.Billing;\n\nusing System.Collections.Generic;\nusing Microsoft.Extensions.Logging;\n```\n\nThey are a compile-time organisational construct rather than a physical one — a namespace can span multiple assemblies, and one assembly can contain many namespaces. Modern C# also supports file-scoped namespace declarations, as above, which removes a level of indentation.',
    },
  },
  {
    id: 'dotnet-8-what-is-msil-in',
    difficulty: beginner,
    question: {
      ar: 'ما هو MSIL في .NET؟',
      en: 'What is MSIL in .NET?',
    },
    answer: {
      ar: 'MSIL هي اختصار لـ Microsoft Intermediate Language (لغة Microsoft الوسيطة).\nأثناء وقت الترجمة، يتم تحويل التعليمات البرمجية المصدرية إلى MSIL بواسطة المترجم.\nتُعد MSIL مجموعة من التعليمات المستقلة عن المعالج (CPU) والتي يمكن تحويلها بكفاءة إلى التعليمات الأصلية.',
      en: 'MSIL (Microsoft Intermediate Language, also called IL or CIL) is the CPU-independent instruction set that .NET compilers produce. At compile time your source becomes MSIL; at runtime the CLR\'s JIT compiler converts it to native machine instructions for the actual processor.\n\nThat two-stage model is what gives .NET its portability: the same assembly runs anywhere a CLR exists. It also means compiled assemblies can be decompiled fairly readily, which is why obfuscation tools exist for code you need to protect.',
    },
  },
  {
    id: 'dotnet-9-what-is-a-net',
    difficulty: intermediate,
    question: {
      ar: 'ما هي وظائف .NET Assembly؟',
      en: 'What is a .NET assembly and what does it do?',
    },
    answer: {
      ar: 'Assembly أو التجميع هو الوحدة الأساسية للنشر في تطبيقات .NET Framework ويكون تنسيقه إما .exe أو .dll. وتؤدي التجميعات الوظائف التالية:\n- تحتوي على كود IL الذي يتم تنفيذه بواسطة CLR.\n- تشكل حدودًا أمنية.\n- تضمن سلامة نطاق الاسم للأنواع خلال وقت التشغيل.\n- تحمل معلومات الإصدار.\n- تتيح التنفيذ جنبًا إلى جنب لإصدارات مختلفة من نفس التجميع.\n- يتم طلب ومنح الأذونات ضمنها.',
      en: 'An assembly is the unit of deployment in .NET, packaged as a .exe or .dll. Its responsibilities:\n• It contains the IL code the CLR executes.\n• It forms a security boundary.\n• It guarantees type name uniqueness at runtime, so two assemblies can define the same type name without conflict.\n• It carries version information.\n• It enables side-by-side execution of different versions.\n• Permissions are requested and granted at assembly level.\n\nAn assembly consists of the manifest, type metadata, the IL, and any embedded resources. The metadata is what makes .NET self-describing and enables reflection.',
    },
  },
  {
    id: 'dotnet-10-what-is-an-assembly',
    difficulty: intermediate,
    question: {
      ar: 'ما هو .NET Assembly Manifest؟',
      en: 'What is an assembly manifest?',
    },
    answer: {
      ar: 'Assembly Manifest هو ملف يحتوي على Metadata أو بيانات وصفية حول Assemblies في .NET.\nيصف كيفية ارتباط المكونات داخل التجميع ببعضها البعض ويحدد العلاقة والتبعيات، معلومات النطاق، ومعلومات الإصدار، وغيرها.',
      en: 'The manifest is the metadata block describing the assembly itself. It records:\n• The assembly\'s identity — name, version, culture and, for strong-named assemblies, the public key.\n• The list of files that make up the assembly.\n• The types it exports.\n• Its dependencies on other assemblies, including the versions required.\n• Requested permissions.\n\nIt is what allows the runtime to resolve references and load the correct versions without any external registry — a deliberate departure from the COM registration model that preceded it.',
    },
  },
  {
    id: 'dotnet-11-what-kinds-of-instructions',
    difficulty: intermediate,
    question: {
      ar: 'ما هو MSIL في .NET؟',
      en: 'What kinds of instructions does MSIL contain?',
    },
    answer: {
      ar: 'تتضمن لغة Microsoft Intermediate Language - MSIL تعليمات لتخزين وتحميل وتهيئة واستدعاء الأساليب على الكائنات، بالإضافة إلى تعليمات للعمليات المنطقية والحسابية، والوصول المباشر إلى الذاكرة، وتدفق التحكم، ومعالجة الاستثناءات، وعمليات أخرى.',
      en: 'MSIL includes instructions for loading and storing values, initialising objects and calling methods on them, plus arithmetic and logical operations, direct memory access, control flow, exception handling and more.\n\nIt is a stack-based instruction set: operands are pushed onto an evaluation stack, an instruction consumes them, and the result is pushed back. That design is part of why it maps cleanly onto many different physical architectures at JIT time.',
    },
  },
  {
    id: 'dotnet-12-what-is-the-portable',
    difficulty: beginner,
    question: {
      ar: 'ما هو تنسيق الملف PE (Portable Executable)؟',
      en: 'What is the Portable Executable (PE) file format?',
    },
    answer: {
      ar: 'تنسيق الملف القابل للتنفيذ المحمول (PE) هو تنسيق ملف للملفات التنفيذية، وكود الكائن، وملفات DLL المستخدمة في إصدارات 64 بت و32 بت من أنظمة تشغيل Windows.',
      en: 'PE is the file format Windows uses for executables, object code and DLLs, in both 32-bit and 64-bit variants. A .NET assembly is a PE file with additional CLR-specific headers pointing to the metadata and IL.\n\nThat design is what allows a .NET assembly to be launched like any other Windows executable: a small native stub in the PE header hands control to the CLR, which then loads and JIT-compiles the managed code.',
    },
  },
  {
    id: 'dotnet-13-what-is-the-difference',
    difficulty: beginner,
    question: {
      ar: 'ما الفرق بين التجميع (Assembly) ومساحة الاسم (Namespace)؟',
      en: 'What is the difference between an assembly and a namespace?',
    },
    answer: {
      ar: '- يمكن أن تمتد مساحة الاسم إلى تجميعات متعددة.\n- يمكن لمساحة الاسم تجميع الفئات بشكل منطقي.\n- التجميع عبارة عن مجموعة مادية من الوحدات المنطقية.',
      en: 'They solve different problems and are independent of each other:\n\n• A namespace is a logical grouping of types, and it can span several assemblies. System.Collections, for instance, spans more than one.\n• An assembly is a physical unit of deployment and versioning — a single file containing compiled code.\n\nSo one assembly can contain many namespaces, and one namespace can be spread across many assemblies. The namespace organises your code for readability; the assembly determines what you ship, version and reference.',
    },
  },
  {
    id: 'dotnet-14-which-namespaces-does-net',
    difficulty: beginner,
    question: {
      ar: 'ما هي مساحة الاسم التي يوفرها .NET لإدارة البيانات؟',
      en: 'Which namespaces does .NET provide for data access?',
    },
    answer: {
      ar: 'تتضمن مساحات الأسماء التي يوفرها .NET لإدارة البيانات ما يلي:\n- System.Data\n- System.Data.SqlClient\n- System.Xml.',
      en: 'The core data namespaces are:\n• System.Data — the base ADO.NET types such as DataSet and DataTable.\n• System.Data.SqlClient (now Microsoft.Data.SqlClient) — the SQL Server provider.\n• System.Xml — XML processing.\n\nIn modern applications you rarely use raw ADO.NET directly. Entity Framework Core is the standard ORM, with Dapper as the lightweight alternative when you want to write the SQL yourself and map results efficiently.',
    },
  },
  {
    id: 'dotnet-15-what-is-the-gac',
    difficulty: intermediate,
    question: {
      ar: 'ما هو GAC في .NET؟',
      en: 'What is the GAC in .NET?',
    },
    answer: {
      ar: 'يشير GAC إلى ذاكرة التخزين المؤقت للتجميع العمومي (Global Assembly Cache). إنها منطقة في الذاكرة مخصصة لتخزين التجميعات المستخدمة من قِبل جميع تطبيقات .NET التي تعمل على جهاز معين.',
      en: 'The GAC (Global Assembly Cache) is a machine-wide store for assemblies shared by all .NET applications on that machine. Assemblies placed there must be strong-named, and multiple versions can coexist side by side.\n\nIts purpose was avoiding duplicate copies of common libraries and solving "DLL hell" through versioned side-by-side storage.\n\nWorth knowing for context: modern .NET removed the GAC entirely. Applications are self-contained or reference NuGet packages resolved per project, which avoids machine-wide state and makes deployments reproducible — a significant improvement for containerised environments.',
    },
  },
  {
    id: 'dotnet-16-what-is-sta-in',
    difficulty: advanced,
    question: {
      ar: 'ما هو STA في .NET؟',
      en: 'What is STA in .NET?',
    },
    answer: {
      ar: 'يشير STA أو نموذج الشقة المفردة (Single Thread Apartment) إلى نموذج قائم على الرسائل للتعامل مع كائنات متعددة تعمل بشكل متزامن، حيث يعيش كل خيط في شقة خاصة به.',
      en: 'STA (Single-Threaded Apartment) is a COM threading model where objects live in an apartment associated with one thread, and calls from other threads are marshalled through a message queue rather than executing directly.\n\nIts practical relevance in .NET is interoperability: Windows UI frameworks and many COM components require STA, which is why the entry point of a WinForms or WPF application is marked with the [STAThread] attribute. Without it, UI and clipboard operations fail in confusing ways.\n\nThe alternative is MTA (Multi-Threaded Apartment), where multiple threads access objects concurrently and thread safety is the object\'s own responsibility.',
    },
  },
  {
    id: 'dotnet-17-what-is-an-access',
    difficulty: beginner,
    question: {
      ar: 'ما هو معدّل الوصول (Access Modifier) في .NET؟',
      en: 'What is an access modifier in .NET?',
    },
    answer: {
      ar: 'يوفر معدّل الوصول في .NET إمكانية التحكم في الوصول إلى فئة، أو وظيفة، أو متغير ضمن نطاق معين.',
      en: 'An access modifier controls the visibility of a type or member — who is allowed to reference it. It is how encapsulation is enforced: by exposing only what callers need and keeping implementation details private, you are free to change the internals without breaking anyone.\n\nThe practical guidance is to default to the most restrictive level that works, and widen only when there is a reason. Everything public is effectively a contract you have committed to supporting.',
    },
  },
  {
    id: 'dotnet-18-what-are-the-access',
    difficulty: beginner,
    question: {
      ar: 'ما هي أنواع معدّلات الوصول (Access Modifiers) في .NET؟',
      en: 'What are the access modifiers in .NET?',
    },
    answer: {
      ar: 'معدّلات الوصول في .NET هي خمسة أنواع:\n- عام (Public)\n- خاص (Private)\n- محمي (Protected)\n- داخلي (Internal)\n- داخلي محمي (Protected Internal).',
      en: 'There are five basic modifiers, plus one combination:\n• public — accessible from anywhere.\n• private — only within the containing type.\n• protected — within the type and its derived types.\n• internal — anywhere within the same assembly.\n• protected internal — protected OR internal.\n• private protected — protected AND internal (added in C# 7.2).\n\n`internal` is the interesting one for library design: it lets you share code freely across your own assembly while keeping it out of the public API surface.',
    },
  },
  {
    id: 'dotnet-19-what-security-models-does',
    difficulty: intermediate,
    question: {
      ar: 'ما هو نوع الكود الأمني (Security Code) المتوفر في .NET؟',
      en: 'What security models does .NET provide?',
    },
    answer: {
      ar: 'أنواع الأمان المتوفرة في .NET هي:\n- الأمان القائم على الدور (Role-Based Security): والذي يسمح بالتحكم بالوصول بناءً على أدوار المستخدمين.\n- أمان الوصول إلى الكود (Code Access Security - CAS): والذي يحمي موارد النظام من الاستدعاءات غير المصرح بها.',
      en: 'The two classic models are:\n• Role-Based Security — access control based on the user\'s identity and roles, expressed through IPrincipal and IIdentity.\n• Code Access Security (CAS) — restricting what code itself could do based on its origin and evidence, protecting system resources from untrusted callers.\n\nAn important caveat: CAS was deprecated and is not supported in modern .NET. It proved impractical as a security boundary, and isolation is now achieved at the process or container level instead.\n\nRole-based authorization remains central, and in ASP.NET Core it is expressed through authentication schemes and authorization policies.',
    },
  },
  {
    id: 'dotnet-20-how-do-you-implement',
    difficulty: intermediate,
    question: {
      ar: 'كيف يمكنك تنفيذ النمط المفرد (Singleton Pattern) في .NET؟',
      en: 'How do you implement the singleton pattern in .NET?',
    },
    answer: {
      ar: 'لتطبيق النمط المفرد في .NET، اتبع الخطوات التالية:\n- إنشاء فئة تحتوي على أعضاء ثابتين.\n- تحديد منشئ خاص.\n- للوصول إلى الكائن المفرد، استخدم طريقة ثابتة.',
      en: 'The classic implementation is a class with a private constructor and a static accessor:\n\n```csharp\npublic sealed class Configuration\n{\n    private static readonly Lazy<Configuration> instance =\n        new(() => new Configuration());\n\n    public static Configuration Instance => instance.Value;\n\n    private Configuration() { }\n}\n```\n\nLazy<T> handles thread-safe lazy initialisation, which the naive double-checked locking version gets wrong surprisingly often.\n\nThe more important point for modern .NET: you rarely write this. The dependency injection container manages lifetimes, so you register the service as a singleton and inject it — which gives you the same single instance with none of the testability problems of a hard-coded static.',
    },
  },
  {
    id: 'dotnet-21-how-does-exception-handling',
    difficulty: intermediate,
    question: {
      ar: 'كيف يتم التعامل مع الاستثناء (Exception Handling) في .NET؟',
      en: 'How does exception handling work in .NET?',
    },
    answer: {
      ar: 'في .NET، عند حدوث استثناء، يقوم إطار عمل .NET بإنشاء كائن من النوع "استثناء" (Exception) و"رميه". يحتوي كائن الاستثناء على جميع المعلومات حول الخطأ. إذا تم تغليف الكود داخل كتلة try-catch، فسيتم استقبال كائن الاستثناء داخل كتلة catch عند حدوث الاستثناء.',
      en: 'When an error occurs, the runtime creates an Exception object carrying the message, stack trace and any inner exception, and throws it. If the code is inside a try block, the matching catch receives it.\n\n```csharp\ntry\n{\n    var result = await service.ProcessAsync(input);\n}\ncatch (ValidationException ex)\n{\n    return BadRequest(ex.Errors);\n}\ncatch (Exception ex)\n{\n    logger.LogError(ex, "Processing failed for {Input}", input.Id);\n    throw;                    // preserves the original stack trace\n}\nfinally\n{\n    await connection.DisposeAsync();\n}\n```\n\nTwo details worth stating: `throw;` rethrows while preserving the stack trace, whereas `throw ex;` resets it and loses where the error originated. And catch blocks are evaluated in order, so the most specific exception types must come first.',
    },
  },
  {
    id: 'dotnet-22-how-do-you-create',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك إنشاء واستخدام مجموعة (Array) في .NET؟',
      en: 'How do you create and use arrays in .NET?',
    },
    answer: {
      ar: 'في .NET، يمكنك إنشاء مصفوفة (Array) بالخطوات التالية:\n- إعلان مرجع إلى مصفوفة.\n- إنشاء مصفوفة من عشرة عناصر من نوع Int32.\n- إنشاء مصفوفة ثنائية الأبعاد.\n- إنشاء مصفوفة متعددة الأبعاد.',
      en: '```csharp\nint[] numbers = new int[10];                 // fixed size, zero-initialised\nint[] values = { 1, 2, 3 };\nint[,] grid = new int[3, 4];                 // rectangular, two-dimensional\nint[][] jagged = new int[3][];               // jagged — rows of differing length\n```\n\nArrays are fixed-length once created, which is their main limitation. For a collection that grows, List<T> is the normal choice; for high-performance scenarios, Span<T> and Memory<T> let you work with slices of an array without copying.',
    },
  },
  {
    id: 'dotnet-23-what-is-a-user',
    difficulty: beginner,
    question: {
      ar: 'ما هو نوع البيانات المعرفة من قبل المستخدم؟',
      en: 'What is a user-defined data type in .NET?',
    },
    answer: {
      ar: 'User-Defined Data Type هو نوع بيانات مسمى تم إنشاؤه بواسطة المستخدم. ويمكن تصنيفه إلى:\n- Enumerated Type\n- Reference Type\n- Structured Type',
      en: 'A user-defined type is any named type you create rather than one built into the framework. The categories are:\n• Enumerated types (enum) — a named set of integral constants.\n• Reference types (class, interface, delegate, record) — allocated on the heap, compared by reference.\n• Structured value types (struct, record struct) — allocated inline, copied by value.\n\nThe class-versus-struct decision matters: use a struct for small, immutable values with value semantics — a point, a money amount — and a class for anything larger or with identity. A large struct copied frequently is slower than the class it replaced.',
    },
  },
  {
    id: 'dotnet-24-name-some-of-the',
    difficulty: beginner,
    question: {
      ar: 'قم بإدراج عدد من مساحة اسم مكتبة الفئة الأساسية .NET؟',
      en: 'Name some of the .NET Base Class Library namespaces.',
    },
    answer: {
      ar: '.NET Base Class Library Namespaces تتضمن:\n- Activities\n- Collections\n- Configuration\n- Enterprise Services\n- Management\n- Runtime',
      en: 'The Base Class Library spans a wide surface, including:\n• System.Collections — lists, dictionaries, sets.\n• System.Configuration — application settings.\n• System.Runtime — core runtime services.\n• System.Management — system and WMI access.\n• System.Diagnostics — logging, tracing, performance counters.\n• System.IO, System.Net, System.Text, System.Threading, System.Linq.\n\nThe legacy Enterprise Services and Activities namespaces exist in the .NET Framework but are not carried into modern .NET. The breadth of the BCL is one of the platform\'s genuine strengths — most common needs are covered without a third-party package.',
    },
  },
  {
    id: 'dotnet-25-what-kinds-of-multidimensional',
    difficulty: beginner,
    question: {
      ar: 'اذكر أنواع المصفوفات متعددة الأبعاد المستخدمة في .NET؟',
      en: 'What kinds of multidimensional arrays does .NET support?',
    },
    answer: {
      ar: 'أنواع المصفوفات متعددة الأبعاد في .NET تشمل:\n\n- Jagged Arrays: مصفوفات تحتوي على صفيف فرعي كمصفوفات مستقلة بأطوال مختلفة، تستخدم مجموعة منفصلة من square brackets []\n\n- Rectangular Arrays: مصفوفات تحتوي على جميع المصفوفات الفرعية بنفس الطول، تستخدم مجموعة واحدة من square brackets []',
      en: 'Two kinds:\n\n• Jagged arrays — an array of arrays, where each row can have a different length. Declared with separate bracket pairs:\n```csharp\nint[][] jagged = new int[3][];\njagged[0] = new int[5];\njagged[1] = new int[2];\n```\n\n• Rectangular arrays — a true multidimensional grid where every row is the same length, declared with a single bracket pair and commas:\n```csharp\nint[,] grid = new int[3, 4];\n```\n\nA practical note: jagged arrays are usually faster in .NET, because rectangular array access involves more index arithmetic and misses some JIT optimisations. Rectangular arrays are clearer when the data really is a fixed grid.',
    },
  },
  {
    id: 'dotnet-26-what-is-event-bubbling',
    difficulty: intermediate,
    question: {
      ar: 'ما هو حدث Bubbling في .NET؟',
      en: 'What is event bubbling in .NET?',
    },
    answer: {
      ar: 'Event Bubbling في .NET هو عملية تمرير عنصر التحكم من Child إلى Parent. يمكن أن تحتوي عناصر التحكم مثل DataList و DataGrid و Repeater على عناصر تحكم فرعية مثل ListBox',
      en: 'Event bubbling is the process by which an event raised by a child control is passed up to its parent for handling. Container controls such as DataList, DataGrid and Repeater can contain child controls like a ListBox or Button, and rather than wiring a handler to every generated child, the parent handles the event centrally.\n\nThe practical benefit is the same as event delegation on the web: one handler serves any number of dynamically generated rows, and it continues to work as the data changes. In ASP.NET Web Forms this is exposed through the ItemCommand event, where the CommandName and CommandArgument identify which child raised it.',
    },
  },
  {
    id: 'dotnet-27-what-debug-windows-are',
    difficulty: beginner,
    question: {
      ar: 'ما هي نوافذ التصحيح المتاحة؟',
      en: 'What debug windows are available in Visual Studio?',
    },
    answer: {
      ar: 'Debug Windows المتاحة تشمل:\n- Breakpoints\n- Output\n- Immediate',
      en: 'The main ones are Breakpoints, Output and Immediate, alongside Locals, Watch, Autos, Call Stack, Threads, Modules and the Exception Settings window.\n\nThe ones that earn their keep in practice: the Immediate window for evaluating expressions and calling methods mid-break; conditional breakpoints, which only trigger when an expression is true — invaluable when a bug appears on the ten-thousandth iteration; and Exception Settings, which lets you break at the point an exception is thrown rather than where it is caught, so you see the original state.',
    },
  },
  {
    id: 'dotnet-28-what-is-microsoft-silverlight',
    difficulty: beginner,
    question: {
      ar: 'ما هو Microsoft Silverlight؟',
      en: 'What is Microsoft Silverlight?',
    },
    answer: {
      ar: 'Microsoft Silverlight هو framework مفتوح المصدر لإنشاء ونشر Rich Internet Applications وتجارب الوسائط على الويب.\n\nيتكون من ثلاثة مكونات رئيسية:\n- Presentation Framework\n- .NET Framework for Silverlight\n- Updater and Installer',
      en: 'Silverlight was a framework for building and delivering rich internet applications and media experiences in the browser, through a plugin. It had three main parts: the presentation framework, a .NET runtime for Silverlight, and the installer/updater.\n\nIt should be stated plainly that Silverlight is discontinued — support ended in 2021, and no modern browser runs plugins of this kind. Its role has been taken over by HTML5, and within the .NET ecosystem by Blazor, which runs .NET in the browser via WebAssembly with no plugin. These questions remain in older interview material, so the history is worth knowing.',
    },
  },
  {
    id: 'dotnet-29-what-are-the-components',
    difficulty: beginner,
    question: {
      ar: 'مما يتكون Silverlight؟',
      en: 'What are the components of a Silverlight application?',
    },
    answer: {
      ar: 'يتكون Silverlight من أربعة مكونات رئيسية:\n\n- Silverlight Plugin\n- Silverlight Host (Web Page)\n- Silverlight Application File (.XAP)\n- XAML Interface Language',
      en: 'A Silverlight deployment had four parts:\n• The Silverlight plugin installed in the browser.\n• The host web page embedding it.\n• The application file, a .xap package.\n• XAML as the markup language describing the interface.\n\nXAML is the part with a lasting legacy: it remains the UI language for WPF, UWP and .NET MAUI, so the declarative markup model outlived the plugin it was introduced alongside.',
    },
  },
  {
    id: 'dotnet-30-what-is-a-xap',
    difficulty: beginner,
    question: {
      ar: 'ما هو ملف .XAP؟',
      en: 'What is a .XAP file?',
    },
    answer: {
      ar: '.XAP file هو ملف مضغوط لتطبيق Silverlight. يحتوي على:\n- AppManifest.xaml\n- Silverlight Project Output Assembly (.dll)\n- Resources\n\nMIME type للملف هو: application/x-silverlight',
      en: 'A .xap file is the compressed package for a Silverlight application — essentially a ZIP archive containing:\n• AppManifest.xaml, describing the application entry point.\n• The compiled project assembly (.dll).\n• Any resources.\n\nIt was served with the MIME type application/x-silverlight-app, and a misconfigured MIME type on the server was a classic deployment problem. The packaging idea persists in modern form: a Blazor WebAssembly application ships a similar bundle of assemblies, just without a plugin to host it.',
    },
  },
  {
    id: 'dotnet-31-what-is-the-difference',
    difficulty: beginner,
    question: {
      ar: 'ما هو الفرق بين WPF و Silverlight؟',
      en: 'What is the difference between WPF and Silverlight?',
    },
    answer: {
      ar: '- Silverlight هو subset من Windows Presentation Foundation (WPF)\n- Silverlight ينافس Adobe Flash ومصمم لتطوير Rich Internet Applications\n- WPF هي تقنية Microsoft لتطوير Enhanced Graphics Applications لمنصة Desktop\n- يمكن استضافة تطبيق Browser-based على متصفحات الويب مع ميزات Rich Graphics',
      en: 'Silverlight was a subset of WPF: a smaller runtime designed to be downloaded as a browser plugin, competing with Adobe Flash for rich internet applications.\n\nWPF (Windows Presentation Foundation) is Microsoft\'s framework for graphically rich desktop applications on Windows, with the full API surface, hardware-accelerated rendering, data binding and styling.\n\nBoth use XAML, so skills transferred between them. Today Silverlight is gone and WPF remains supported for Windows desktop work, with .NET MAUI as the cross-platform option and Blazor covering the browser scenario Silverlight was meant to serve.',
    },
  },
  {
    id: 'dotnet-32-what-are-rich-internet',
    difficulty: beginner,
    question: {
      ar: 'ما هو RIA؟',
      en: 'What are Rich Internet Applications (RIA)?',
    },
    answer: {
      ar: 'RIA (Rich Internet Applications) هي تطبيقات ويب ذات ميزات متقدمة تتضمن:\n- Built-in AJAX Support\n- Layouts\n- Animations\n- Audio & Video Components\n\nSilverlight هو مثال على RIA',
      en: 'RIA described web applications with desktop-like capabilities beyond what plain HTML offered at the time: built-in AJAX support, sophisticated layout, animation, and audio and video components. Silverlight and Flash were the canonical examples.\n\nThe term has largely disappeared, because the browser absorbed the capability. HTML5 video, CSS animations, Canvas and WebGL, the Web Audio API and modern JavaScript frameworks deliver everything RIA platforms promised, with no plugin, no separate security model and far better mobile support. The category existed to fill a gap that the platform itself eventually closed.',
    },
  },
  {
    id: 'dotnet-33-what-layout-controls-were',
    difficulty: beginner,
    question: {
      ar: 'ما هي عناصر التحكم المختلفة في Layout المتاحة في Silverlight؟',
      en: 'What layout controls were available in Silverlight?',
    },
    answer: {
      ar: 'عناصر التحكم في Layout تشمل:\n\n- StackPanel: يتم ترتيب العناصر الفرعية بشكل عمودي أو أفقي\n- Grid: يتم ترتيب العناصر الفرعية في Rows و Columns\n- Canvas: يتم تحديد موقع العناصر الفرعية باستخدام إحداثيات X و Y',
      en: 'Three primary layout panels:\n• StackPanel — arranges children in a single line, vertically or horizontally.\n• Grid — arranges children in rows and columns, with proportional or fixed sizing.\n• Canvas — positions children by explicit X and Y coordinates.\n\nThese carried over to WPF, UWP and .NET MAUI, and the underlying ideas are recognisable elsewhere: StackPanel corresponds closely to CSS Flexbox in one direction, and Grid to CSS Grid. Canvas with absolute coordinates is the one to avoid for adaptive layouts, for the same reasons absolute positioning is discouraged on the web.',
    },
  },
  {
    id: 'dotnet-34-what-does-asp-net',
    difficulty: beginner,
    question: {
      ar: 'ما هو بناء الجملة لـ ASP.NET؟',
      en: 'What does ASP.NET syntax look like?',
    },
    answer: {
      ar: 'ASP.NET Syntax يتكون من ملف HTML مع إمكانية احتواء Server-Side Scripts. مثال:\n\n<!DOCTYPE html>\n<html>\n<body>\n<%\nResponse.write("Hello World!")\n%>\n</body>\n</html>',
      en: 'Classic ASP.NET Web Forms mixed server-side script into an HTML page using <% %> delimiters:\n\n```html\n<!DOCTYPE html>\n<html>\n<body>\n<%\nResponse.Write("Hello World!");\n%>\n</body>\n</html>\n```\n\nModern ASP.NET Core is a very different model. Razor uses the `@` syntax with strongly typed models:\n\n```cshtml\n<h1>@Model.Title</h1>\n@foreach (var item in Model.Items)\n{\n    <li>@item.Name</li>\n}\n```\n\nAnd most new applications use Minimal APIs or controllers returning JSON, with Blazor for interactive UI. Razor also escapes output by default, which the older Response.Write approach did not — a meaningful security improvement.',
    },
  },
];
