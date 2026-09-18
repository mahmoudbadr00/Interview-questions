// data/categories/java.js
import { DIFFICULTY } from '../difficulty.js';

const { beginner, intermediate, advanced } = DIFFICULTY;

export const java = [
  {
    id: 'java-1-what-is-java',
    difficulty: beginner,
    question: {
      ar: 'ما هو Java؟',
      en: 'What is Java?',
    },
    answer: {
      ar: 'Java هو لغة برمجة كائنية التوجه تُستخدم لتطوير التطبيقات على أنظمة تشغيل متعددة.',
      en: 'Java is an object-oriented programming language used to build applications that run across multiple operating systems. Its defining idea is "write once, run anywhere": source compiles to bytecode, and the JVM executes that bytecode on any supported platform.',
    },
  },
  {
    id: 'java-2-what-are-the-main',
    difficulty: beginner,
    question: {
      ar: 'ما هي مميزات Java؟',
      en: 'What are the main advantages of Java?',
    },
    answer: {
      ar: 'من مميزات Java هي قابلية التشغيل عبر المنصات، الأمان، إدارة الذاكرة التلقائية، ودعم البرمجة الكائنية.',
      en: 'Platform independence through the JVM, a strong security model, automatic memory management via garbage collection, full object-oriented support, a very large standard library and ecosystem, and mature tooling. Its main trade-offs are verbosity and higher memory usage than lower-level languages.',
    },
  },
  {
    id: 'java-3-what-is-the-jvm',
    difficulty: beginner,
    question: {
      ar: 'ما هو JVM؟',
      en: 'What is the JVM?',
    },
    answer: {
      ar: 'JVM (Java Virtual Machine) هو محرك لتنفيذ برامج Java، يقوم بتحويل الكود إلى تعليمات يفهمها النظام.',
      en: 'The Java Virtual Machine is the runtime that executes Java bytecode, translating it into instructions the host system understands. It also handles memory management, garbage collection and JIT compilation — recompiling hot code paths into native machine code so long-running Java applications get faster over time.',
    },
  },
  {
    id: 'java-4-what-is-the-difference',
    difficulty: beginner,
    question: {
      ar: 'ما هو JDK و JRE؟',
      en: 'What is the difference between the JDK and the JRE?',
    },
    answer: {
      ar: 'JDK (Java Development Kit) هو مجموعة أدوات تطوير Java، بينما JRE (Java Runtime Environment) هو بيئة تشغيل Java.',
      en: 'The JDK (Java Development Kit) is the development toolchain: the compiler, debugger and related tools, plus the JRE. The JRE (Java Runtime Environment) is only what is needed to run an application: the JVM and the standard libraries. You develop with the JDK and, historically, deployed with the JRE — though modern deployments typically ship a trimmed runtime built with jlink.',
    },
  },
  {
    id: 'java-5-what-is-the-difference',
    difficulty: beginner,
    question: {
      ar: 'ما الفرق بين `==` و `equals()` في Java؟',
      en: 'What is the difference between == and equals() in Java?',
    },
    answer: {
      ar: '`==` يُستخدم لمقارنة المراجع، بينما `equals()` يُستخدم لمقارنة محتوى الكائنات.',
      en: '== compares references — whether two variables point to the same object — while equals() compares contents as defined by the class.\n\n```java\nString a = new String("hi");\nString b = new String("hi");\na == b;        // false — different objects\na.equals(b);   // true  — same content\n```\n\nAn important companion rule: whenever you override equals() you must also override hashCode(), or the object will behave incorrectly in a HashMap or HashSet.',
    },
  },
  {
    id: 'java-6-what-is-inheritance-in',
    difficulty: beginner,
    question: {
      ar: 'ما هو مفهوم الوراثة في Java؟',
      en: 'What is inheritance in Java?',
    },
    answer: {
      ar: 'الوراثة هي آلية تسمح لكائن بإرث الخصائص والسلوكيات من كائن آخر، مما يُسهل إعادة استخدام الكود.',
      en: 'Inheritance lets a class acquire the fields and behaviour of another class using the extends keyword, which supports code reuse and polymorphism. Java allows single inheritance of classes only, to avoid the ambiguity of multiple inheritance, but a class can implement many interfaces. In practice, composition is usually preferable to deep inheritance hierarchies because it couples classes less tightly.',
    },
  },
  {
    id: 'java-7-what-are-interfaces-in',
    difficulty: beginner,
    question: {
      ar: 'ما هو مفهوم الـ Interfaces في Java؟',
      en: 'What are interfaces in Java?',
    },
    answer: {
      ar: 'الـ Interfaces تُستخدم لتعريف مجموعة من الطرق التي يجب على الكائنات تنفيذها، مما يدعم البرمجة الكائنية.',
      en: 'An interface defines a contract of methods a class must implement, which is how Java achieves polymorphism and loose coupling. A class can implement several interfaces, which is Java\'s answer to multiple inheritance. Since Java 8 interfaces can also contain default and static methods, which allowed the standard library to evolve without breaking existing implementations.',
    },
  },
  {
    id: 'java-8-how-do-you-handle',
    difficulty: beginner,
    question: {
      ar: 'كيف تتعامل مع الاستثناءات في Java؟',
      en: 'How do you handle exceptions in Java?',
    },
    answer: {
      ar: 'يمكن التعامل مع الاستثناءات باستخدام الكتل try-catch-finally.',
      en: 'With try-catch-finally, or try-with-resources when you are working with something closeable:\n\n```java\ntry (var connection = dataSource.getConnection()) {\n    // use it — it is closed automatically\n} catch (SQLException e) {\n    logger.error("query failed", e);\n    throw new DataAccessException(e);\n}\n```\n\nJava distinguishes checked exceptions, which the compiler forces you to handle or declare, from unchecked ones, which usually indicate programmer error. Two rules worth stating: never swallow an exception in an empty catch, and always preserve the original cause when rethrowing.',
    },
  },
  {
    id: 'java-9-what-are-collections-in',
    difficulty: beginner,
    question: {
      ar: 'ما هي الـ Collections في Java؟',
      en: 'What are Collections in Java?',
    },
    answer: {
      ar: 'الـ Collections هي مجموعة من الكائنات التي تُستخدم لتخزين البيانات وإدارتها، مثل ArrayList وHashMap.',
      en: 'The Collections Framework is the set of data structures for storing and manipulating groups of objects. The main ones:\n• List (ArrayList, LinkedList) — ordered, allows duplicates.\n• Set (HashSet, TreeSet) — no duplicates.\n• Map (HashMap, TreeMap) — key/value pairs.\n• Queue and Deque — for FIFO and LIFO processing.\n\nChoosing correctly matters: ArrayList gives O(1) indexed access while LinkedList gives O(1) insertion at the ends, and HashMap gives O(1) lookup while TreeMap keeps keys sorted.',
    },
  },
  {
    id: 'java-10-what-is-multithreading-in',
    difficulty: intermediate,
    question: {
      ar: 'ما هو مفهوم الـ Multithreading في Java؟',
      en: 'What is multithreading in Java?',
    },
    answer: {
      ar: 'الـ Multithreading يسمح بتنفيذ عدة خيوط من التعليمات البرمجية في نفس الوقت، مما يُحسن أداء التطبيق.',
      en: 'Multithreading lets several sequences of instructions run concurrently, which improves throughput on multi-core machines and keeps applications responsive during I/O. Java exposes it through Thread, the Runnable interface and, in practice, the ExecutorService and thread pools rather than raw threads. The hard part is not creating threads but coordinating shared state safely — which is where synchronization, the java.util.concurrent collections and atomic types come in. Java 21 added virtual threads, which make it practical to run very large numbers of concurrent tasks.',
    },
  },
  {
    id: 'java-11-what-is-garbage-collection',
    difficulty: intermediate,
    question: {
      ar: 'ما هو مفهوم الـ Garbage Collection؟',
      en: 'What is garbage collection in Java?',
    },
    answer: {
      ar: 'Garbage Collection هو عملية تلقائية في Java تقوم بتحرير الذاكرة غير المستخدمة.',
      en: 'Garbage collection is the JVM\'s automatic reclamation of memory occupied by objects that are no longer reachable. The heap is split into generations, because most objects die young: minor collections sweep the young generation cheaply, while major collections of the old generation cost more. Modern collectors such as G1 and ZGC aim for short, predictable pauses. What you control as a developer is allocation rate and object lifetime — you cannot force a collection, and System.gc() is only a suggestion.',
    },
  },
  {
    id: 'java-12-what-is-the-string',
    difficulty: intermediate,
    question: {
      ar: 'ما هي الـ String Pool في Java؟',
      en: 'What is the String pool in Java?',
    },
    answer: {
      ar: 'String Pool هو منطقة في الذاكرة حيث يتم تخزين كائنات السلاسل النصية لتقليل استهلاك الذاكرة.',
      en: 'The String pool is a region of memory where the JVM stores string literals so identical literals share one object, reducing memory use. This is safe precisely because strings are immutable.\n\n```java\nString a = "hello";\nString b = "hello";\na == b;                       // true — the same pooled object\nnew String("hello") == a;     // false — explicitly a new object\n```\n\nImmutability is also why repeated concatenation in a loop is wasteful — each step creates a new object — and why StringBuilder exists.',
    },
  },
  {
    id: 'java-13-what-are-annotations-in',
    difficulty: intermediate,
    question: {
      ar: 'ما هي الـ Annotations في Java؟',
      en: 'What are annotations in Java?',
    },
    answer: {
      ar: 'Annotations هي وسوم تُستخدم لإضافة معلومات وصفية إلى الكود، مثل @Override و@SuppressWarnings.',
      en: 'Annotations attach metadata to code, for example @Override, @Deprecated and @SuppressWarnings. They do nothing on their own; their meaning comes from whatever reads them — the compiler, an annotation processor at build time, or a framework at runtime through reflection. That last case is how Spring, JPA and JUnit work: @Autowired, @Entity and @Test are all annotations interpreted by their frameworks.',
    },
  },
  {
    id: 'java-14-what-are-enums-in',
    difficulty: beginner,
    question: {
      ar: 'ما هو مفهوم الـ Enums في Java؟',
      en: 'What are enums in Java?',
    },
    answer: {
      ar: 'Enums هي نوع خاص من الكلاسات يُستخدم لتعريف مجموعة من القيم الثابتة.',
      en: 'An enum is a special class type defining a fixed set of named constants, which gives you type safety that plain integer or string constants cannot. Java enums are more capable than in many languages: they can have fields, constructors and methods, and each constant can override behaviour. They also work well with switch statements and are safe to compare with ==.',
    },
  },
  {
    id: 'java-15-how-do-you-implement',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكن تنفيذ الـ Interfaces المتعددة في Java؟',
      en: 'How do you implement multiple interfaces in Java?',
    },
    answer: {
      ar: 'يمكن تنفيذ الـ Interfaces المتعددة باستخدام الفاصلة (,) عند تعريف الكلاس.',
      en: 'You list them separated by commas after the implements keyword:\n\n```java\nclass Report implements Serializable, Comparable<Report>, Printable { }\n```\n\nThis is how Java provides multiple inheritance of type without the ambiguity of multiple inheritance of state. If two interfaces supply conflicting default methods, the compiler forces the class to override the method and resolve it explicitly.',
    },
  },
  {
    id: 'java-16-what-are-streams-in',
    difficulty: intermediate,
    question: {
      ar: 'ما هي الـ Streams في Java؟',
      en: 'What are Streams in Java?',
    },
    answer: {
      ar: 'Streams هي واجهة تُستخدم لمعالجة مجموعات البيانات بطريقة وظيفية، مثل الترشيح والتجميع.',
      en: 'The Stream API processes collections in a functional, declarative style rather than with explicit loops:\n\n```java\nList<String> names = users.stream()\n    .filter(u -> u.isActive())\n    .map(User::getName)\n    .sorted()\n    .toList();\n```\n\nStreams are lazy — nothing runs until a terminal operation — and they do not modify the source collection. They also support parallel execution, though parallelStream() is only worth it for large datasets with genuinely independent work; on small collections it is usually slower.',
    },
  },
  {
    id: 'java-17-what-are-lambda-expressions',
    difficulty: intermediate,
    question: {
      ar: 'ما هو مفهوم الـ Lambda Expressions في Java؟',
      en: 'What are lambda expressions in Java?',
    },
    answer: {
      ar: 'Lambda Expressions تُستخدم لتوفير طريقة مختصرة لتعريف الـ Functional Interfaces.',
      en: 'Lambdas provide concise syntax for implementing a functional interface — an interface with exactly one abstract method:\n\n```java\n// before\nlist.sort(new Comparator<User>() {\n    public int compare(User a, User b) { return a.getAge() - b.getAge(); }\n});\n\n// with a lambda\nlist.sort((a, b) -> a.getAge() - b.getAge());\nlist.sort(Comparator.comparingInt(User::getAge));   // method reference\n```\n\nThey were introduced in Java 8 and are what makes the Stream API practical. Note that variables captured from the enclosing scope must be effectively final.',
    },
  },
  {
    id: 'java-18-what-is-an-api',
    difficulty: beginner,
    question: {
      ar: 'ما هو مفهوم الـ API في Java؟',
      en: 'What is an API in Java?',
    },
    answer: {
      ar: 'API (Application Programming Interface) هي مجموعة من التعريفات التي تسمح للتطبيقات بالتواصل مع بعضها البعض.',
      en: 'An API is the set of public types and methods that a library or service exposes for others to use, without revealing how it is implemented. In Java the term covers both the standard library APIs (the Collections API, the Stream API) and the interfaces your own modules publish. Good API design means a stable, minimal public surface: anything you expose, you have committed to maintaining.',
    },
  },
  {
    id: 'java-19-what-is-a-constructor',
    difficulty: beginner,
    question: {
      ar: 'ما هو مفهوم الـ Constructor في Java؟',
      en: 'What is a constructor in Java?',
    },
    answer: {
      ar: 'Constructor هو طريقة خاصة تُستخدم لتهيئة الكائنات عند إنشائها.',
      en: 'A constructor is a special method that initialises an object when it is created. It shares the class name, has no return type, and can be overloaded with different parameter lists. If you write none, the compiler supplies a default no-argument constructor — but it stops doing so as soon as you define any constructor yourself. A constructor can call another with this(...), or the superclass constructor with super(...), which must be the first statement.',
    },
  },
  {
    id: 'java-20-what-is-the-difference',
    difficulty: intermediate,
    question: {
      ar: 'ما الفرق بين الكلاس المجرد والواجهة؟',
      en: 'What is the difference between an abstract class and an interface?',
    },
    answer: {
      ar: 'الكلاس المجرد يمكن أن يحتوي على طرق مُعرفة وأخرى مجردة، بينما الواجهة تحتوي فقط على طرق مُعرفة.',
      en: 'An abstract class can hold both implemented and abstract methods, plus instance fields and constructors, and a class can extend only one. An interface defines a contract; since Java 8 it can supply default and static methods, but it holds no instance state, and a class can implement many.\n\nHow do you choose? Use an abstract class when several related classes genuinely share state and implementation — an "is-a" relationship. Use an interface to define a capability that unrelated classes can provide. Interfaces also couple less tightly, which is why most modern designs favour them.',
    },
  },
  {
    id: 'java-21-how-do-you-improve',
    difficulty: intermediate,
    question: {
      ar: 'كيف يمكنك تحسين أداء تطبيق Java؟',
      en: 'How do you improve the performance of a Java application?',
    },
    answer: {
      ar: 'يمكن تحسين الأداء عن طريق تقليل استهلاك الذاكرة، استخدام خوارزميات فعالة، وتقليل استدعاءات الدوال غير الضرورية.',
      en: 'I start by profiling rather than guessing, using something like JFR, async-profiler or VisualVM. The usual findings:\n• Database access dominates — missing indexes, N+1 queries, no connection pooling.\n• Excessive allocation creating GC pressure; often fixed by reusing objects or using primitives.\n• The wrong data structure — a list where a map belongs, turning O(1) into O(n).\n• String concatenation in loops instead of StringBuilder.\n• Blocking I/O where async or a larger thread pool would serve better.\n• JVM tuning: heap sizing and collector choice, only after the code-level work.',
    },
  },
  {
    id: 'java-22-what-is-hashmap-used',
    difficulty: beginner,
    question: {
      ar: 'ما هي استخدامات الـ HashMap في Java؟',
      en: 'What is HashMap used for in Java?',
    },
    answer: {
      ar: 'HashMap تُستخدم لتخزين البيانات في شكل أزواج مفتاح-قيمة، مما يتيح الوصول السريع إلى القيم.',
      en: 'HashMap stores key/value pairs with average O(1) lookup, insertion and deletion, which makes it the default choice for keyed access. Points worth knowing: it is unordered (LinkedHashMap preserves insertion order, TreeMap sorts), it is not thread-safe (use ConcurrentHashMap for concurrent access), and any key class must implement equals() and hashCode() consistently — otherwise you will store an entry and never find it again.',
    },
  },
  {
    id: 'java-23-how-do-you-work',
    difficulty: beginner,
    question: {
      ar: 'كيف تتعامل مع ملفات JSON في Java؟',
      en: 'How do you work with JSON in Java?',
    },
    answer: {
      ar: 'يمكن استخدام مكتبات مثل Jackson أو Gson لتحليل وإنشاء ملفات JSON.',
      en: 'Through a library — Jackson is the most common, with Gson as the main alternative:\n\n```java\nObjectMapper mapper = new ObjectMapper();\nString json = mapper.writeValueAsString(user);\nUser parsed = mapper.readValue(json, User.class);\n```\n\nJackson is what Spring Boot uses by default. Practical notes: configure it to ignore unknown properties so an added field upstream does not break you, and never deserialise untrusted input into arbitrary types, which is a well-known source of vulnerabilities.',
    },
  },
  {
    id: 'java-24-what-is-junit',
    difficulty: beginner,
    question: {
      ar: 'ما هو مفهوم الـ JUnit في Java؟',
      en: 'What is JUnit?',
    },
    answer: {
      ar: 'JUnit هو إطار عمل يُستخدم لكتابة وتنفيذ اختبارات وحدات التطبيقات.',
      en: 'JUnit is the standard framework for writing and running unit tests in Java. Version 5 (Jupiter) is current, with @Test, @BeforeEach, @AfterEach, parameterised tests and assertions such as assertEquals and assertThrows. It is usually paired with Mockito for test doubles and AssertJ for more readable assertions, and with Spring Boot\'s test support for integration tests.',
    },
  },
  {
    id: 'java-25-how-do-you-create',
    difficulty: intermediate,
    question: {
      ar: 'كيف يمكنك إنشاء خيط في Java؟',
      en: 'How do you create a thread in Java?',
    },
    answer: {
      ar: 'يمكن إنشاء خيط عن طريق تنفيذ واجهة Runnable أو وراثة الكلاس Thread.',
      en: 'Historically, by implementing Runnable or extending Thread — and implementing Runnable is preferred, since it leaves your inheritance slot free.\n\nIn practice you rarely create raw threads. You submit tasks to an ExecutorService, which manages a pool and handles lifecycle for you:\n\n```java\ntry (var executor = Executors.newVirtualThreadPerTaskExecutor()) {\n    executor.submit(() -> process(item));\n}\n```\n\nJava 21\'s virtual threads make it cheap to have very large numbers of concurrent tasks, which changes the calculus for I/O-heavy servers considerably.',
    },
  },
  {
    id: 'java-26-what-is-synchronization-in',
    difficulty: intermediate,
    question: {
      ar: 'ما هو مفهوم الـ Synchronization في Java؟',
      en: 'What is synchronization in Java?',
    },
    answer: {
      ar: 'Synchronization يُستخدم لضمان أن خيطًا واحدًا فقط يمكنه الوصول إلى مورد معين في نفس الوقت.',
      en: 'Synchronization ensures only one thread at a time can execute a block or access a resource, preventing race conditions on shared mutable state. It is implemented with the synchronized keyword or explicit locks from java.util.concurrent.locks.\n\nThe costs are real: contention hurts throughput, and careless lock ordering causes deadlock. So the preferred strategies, in order, are: avoid shared mutable state altogether (use immutable objects), then use the concurrent collections and atomic types, and only then reach for explicit locking.',
    },
  },
  {
    id: 'java-27-what-is-reflection-in',
    difficulty: advanced,
    question: {
      ar: 'ما هو مفهوم الـ Reflection في Java؟',
      en: 'What is reflection in Java?',
    },
    answer: {
      ar: 'Reflection يُستخدم للحصول على معلومات حول الكائنات، مثل خصائصها وطرقها، أثناء وقت التشغيل.',
      en: 'Reflection lets code inspect and manipulate classes, fields and methods at runtime, including ones it did not know about at compile time. It is the mechanism behind dependency injection in Spring, ORM mapping in Hibernate and test discovery in JUnit.\n\nIts costs are significant: it is slower than direct calls, it bypasses compile-time type checking, it breaks under refactoring since names become strings, and it can violate encapsulation. So it belongs in frameworks and tooling, not in ordinary application code.',
    },
  },
  {
    id: 'java-28-which-libraries-are-commonly',
    difficulty: beginner,
    question: {
      ar: 'ما هي المكتبات الشائعة المستخدمة مع Java؟',
      en: 'Which libraries are commonly used with Java?',
    },
    answer: {
      ar: 'بعض المكتبات الشائعة تشمل Spring، Hibernate، Apache Commons، وJUnit.',
      en: 'By purpose:\n• Application frameworks: Spring and Spring Boot, Quarkus, Micronaut.\n• Persistence: Hibernate/JPA, jOOQ, MyBatis.\n• Testing: JUnit, Mockito, AssertJ, Testcontainers.\n• JSON: Jackson, Gson.\n• Utilities: Apache Commons, Guava.\n• Logging: SLF4J with Logback.\n• Build: Maven and Gradle.\n\nSpring Boot dominates the backend space because it wires most of this together with sensible defaults.',
    },
  },
  {
    id: 'java-29-how-do-you-work',
    difficulty: beginner,
    question: {
      ar: 'كيف تتعامل مع قواعد البيانات في Java؟',
      en: 'How do you work with databases in Java?',
    },
    answer: {
      ar: 'يمكن استخدام JDBC (Java Database Connectivity) للاتصال بقواعد البيانات وإجراء الاستعلامات.',
      en: 'JDBC is the low-level standard for connecting and running queries, but it is verbose and easy to get wrong. In practice you use a layer above it:\n• Spring JDBC or JdbcTemplate for direct SQL with less boilerplate.\n• JPA/Hibernate for object-relational mapping.\n• jOOQ for type-safe SQL.\n\nWhatever the layer, two rules hold: always use prepared statements with parameters rather than string concatenation, to prevent SQL injection; and always use a connection pool such as HikariCP rather than opening connections per request.',
    },
  },
  {
    id: 'java-30-what-is-serializable-in',
    difficulty: intermediate,
    question: {
      ar: 'ما هو مفهوم الـ Serializable في Java؟',
      en: 'What is Serializable in Java?',
    },
    answer: {
      ar: 'Serializable هو واجهة تُستخدم لتحويل كائن إلى سلسلة من البايتات ليتم تخزينه أو نقله.',
      en: 'Serializable is a marker interface indicating that an object can be converted to a byte stream for storage or transmission, and reconstructed later. The serialVersionUID field controls version compatibility between the writing and reading code.\n\nAn important caveat: Java\'s native serialization is widely considered a design mistake. Deserialising untrusted data is a well-known remote code execution vector, and the format is brittle across versions. For data exchange, use JSON or a schema-based format such as Protocol Buffers instead.',
    },
  },
  {
    id: 'java-31-how-do-you-work',
    difficulty: beginner,
    question: {
      ar: 'كيف تتعامل مع التواريخ في Java؟',
      en: 'How do you work with dates in Java?',
    },
    answer: {
      ar: 'يمكن استخدام مكتبة java.time (Java 8 وما بعدها) أو SimpleDateFormat للتعامل مع التواريخ.',
      en: 'Use the java.time API introduced in Java 8:\n\n```java\nLocalDate date = LocalDate.now();\nLocalDateTime timestamp = LocalDateTime.now();\nInstant instant = Instant.now();                 // a point on the UTC timeline\nZonedDateTime zoned = instant.atZone(ZoneId.of("Africa/Cairo"));\n```\n\nThe older Date and SimpleDateFormat classes should be avoided: they are mutable, not thread-safe and have confusing semantics. A practical rule for servers: store and transmit instants in UTC, and convert to a local zone only at the display boundary.',
    },
  },
];
