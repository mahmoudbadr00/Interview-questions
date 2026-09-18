// data/categories/php.js
import { DIFFICULTY } from '../difficulty.js';

const { beginner, intermediate } = DIFFICULTY;

export const php = [
  {
    id: 'php-1-what-is-php',
    difficulty: beginner,
    question: {
      ar: 'ما هو PHP؟',
      en: 'What is PHP?',
    },
    answer: {
      ar: 'PHP هي لغة برمجة نصية تُستخدم لتطوير تطبيقات الويب وتعمل على الخادم.',
      en: 'PHP is a server-side scripting language used to build web applications. It runs on the server and produces the response the browser receives. Modern PHP (8.x) is a very different language from its reputation: it has types, JIT compilation, attributes, enums and strong frameworks such as Laravel and Symfony.',
    },
  },
  {
    id: 'php-2-what-are-the-advantages',
    difficulty: beginner,
    question: {
      ar: 'ما هي مميزات PHP؟',
      en: 'What are the advantages of PHP?',
    },
    answer: {
      ar: 'مميزات PHP تشمل السهولة في التعلم، دعم قواعد البيانات، مرونة البرمجة، ودعم مكتبات واسعة.',
      en: 'It is easy to learn and deploy, has first-class database support, ships with a huge standard library and ecosystem, and is supported by practically every host. Modern versions are also fast, and Composer gives it dependency management on par with other ecosystems. Its main historical weakness — inconsistent standard-library naming — remains, but strict types and static analysis tools such as PHPStan address most of the practical pain.',
    },
  },
  {
    id: 'php-3-what-is-the-difference',
    difficulty: beginner,
    question: {
      ar: 'ما الفرق بين `echo` و `print` في PHP؟',
      en: 'What is the difference between echo and print in PHP?',
    },
    answer: {
      ar: '`echo` يُستخدم لطباعة النصوص ولا يُرجع قيمة، بينما `print` يُرجع قيمة 1.',
      en: 'echo outputs one or more strings and returns nothing; print outputs a single string and returns 1, which means it can be used in an expression. echo is marginally faster and accepts multiple arguments, so it is what you normally use. The difference rarely matters in practice.',
    },
  },
  {
    id: 'php-4-how-do-variables-work',
    difficulty: beginner,
    question: {
      ar: 'ما هي المتغيرات في PHP؟',
      en: 'How do variables work in PHP?',
    },
    answer: {
      ar: 'المتغيرات في PHP تُستخدم لتخزين البيانات وتبدأ بعلامة الدولار ($)، مثل `$variableName`.',
      en: 'Variables store data and start with a dollar sign, as in `$variableName`. They are dynamically typed and case-sensitive, and they do not need declaring before use. Since PHP 7 you can declare parameter and return types, and `declare(strict_types=1)` at the top of a file turns type coercion into an error — which is strongly recommended for catching mistakes early.',
    },
  },
  {
    id: 'php-5-how-do-you-define',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكننا إنشاء دالة في PHP؟',
      en: 'How do you define a function in PHP?',
    },
    answer: {
      ar: 'يمكن إنشاء دالة باستخدام الكلمة المفتاحية `function`، مثل: `function myFunction() { ... }`.',
      en: 'With the function keyword:\n\n```php\nfunction calculateTotal(array $items, float $taxRate = 0.14): float\n{\n    return array_sum(array_column($items, \'price\')) * (1 + $taxRate);\n}\n```\n\nModern PHP supports typed parameters and return types, default values, named arguments, variadics, and arrow functions (`fn($x) => $x * 2`) for short closures.',
    },
  },
  {
    id: 'php-6-what-are-arrays-in',
    difficulty: beginner,
    question: {
      ar: 'ما هي المصفوفات في PHP؟',
      en: 'What are arrays in PHP?',
    },
    answer: {
      ar: 'المصفوفات في PHP تُستخدم لتخزين مجموعات من القيم، ويمكن أن تكون مرتبطة أو عادية.',
      en: 'PHP arrays store collections of values and come in two forms: indexed arrays with numeric keys, and associative arrays with string keys. Technically they are ordered hash maps, which is why they serve as lists, dictionaries and even simple objects. The standard library gives you a large set of functions — array_map, array_filter, array_reduce, usort — though their argument order is famously inconsistent.',
    },
  },
  {
    id: 'php-7-how-do-you-connect',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك الاتصال بقاعدة بيانات في PHP؟',
      en: 'How do you connect to a database in PHP?',
    },
    answer: {
      ar: 'يمكنك استخدام `mysqli` أو `PDO` للاتصال بقاعدة بيانات مثل MySQL.',
      en: 'With PDO or MySQLi; PDO is preferred because it supports multiple database engines with the same API:\n\n```php\n$pdo = new PDO($dsn, $user, $password, [\n    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,\n    PDO::ATTR_EMULATE_PREPARES => false,\n]);\n\n$stmt = $pdo->prepare(\'SELECT * FROM users WHERE id = ?\');\n$stmt->execute([$id]);\n```\n\nSetting the error mode to exceptions and disabling emulated prepares are both important: the first surfaces failures instead of silently returning false, and the second ensures genuine server-side prepared statements.',
    },
  },
  {
    id: 'php-8-what-are-sessions-in',
    difficulty: beginner,
    question: {
      ar: 'ما هو مفهوم الـ Sessions في PHP؟',
      en: 'What are sessions in PHP?',
    },
    answer: {
      ar: 'Sessions تُستخدم لتخزين المعلومات على الخادم لمستخدم معين عبر عدة صفحات.',
      en: 'Sessions store per-user data on the server across multiple requests, identified by a session id sent to the browser in a cookie. You start one with session_start() and read or write $_SESSION.\n\nSecurity points that matter: regenerate the session id after login with session_regenerate_id(true) to prevent session fixation, set the cookie flags httponly, secure and samesite, and for multi-server deployments store sessions in Redis or a database rather than on local disk.',
    },
  },
  {
    id: 'php-9-how-do-you-handle',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك التعامل مع الاستثناءات في PHP؟',
      en: 'How do you handle exceptions in PHP?',
    },
    answer: {
      ar: 'يمكن التعامل مع الاستثناءات باستخدام الكتل `try-catch`.',
      en: 'With try-catch-finally:\n\n```php\ntry {\n    $result = $service->process($input);\n} catch (ValidationException $e) {\n    return response()->json([\'error\' => $e->getMessage()], 422);\n} catch (Throwable $e) {\n    $logger->error($e->getMessage(), [\'exception\' => $e]);\n    return response()->json([\'error\' => \'Internal error\'], 500);\n} finally {\n    $connection->close();\n}\n```\n\nCatching Throwable rather than Exception also covers Errors such as TypeError. Never expose the exception message to end users in production — log it and return a generic response.',
    },
  },
  {
    id: 'php-10-what-are-cookies-in',
    difficulty: beginner,
    question: {
      ar: 'ما هو مفهوم الـ Cookies في PHP؟',
      en: 'What are cookies in PHP?',
    },
    answer: {
      ar: 'Cookies تُستخدم لتخزين البيانات على جهاز المستخدم لتكون متاحة في الزيارات القادمة.',
      en: 'Cookies store small pieces of data in the user\'s browser and are sent back with every request to the same domain. You set one with setcookie() and read it from $_COOKIE.\n\nThe security flags matter more than the mechanics: httponly stops JavaScript reading the value (protecting against XSS), secure restricts it to HTTPS, and samesite limits cross-site sending (protecting against CSRF). Never store sensitive data in a cookie — store a session id and keep the data on the server.',
    },
  },
  {
    id: 'php-11-how-do-you-include',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك إدراج ملف في PHP؟',
      en: 'How do you include another file in PHP?',
    },
    answer: {
      ar: 'يمكن إدراج ملف باستخدام `include` أو `require`.',
      en: 'With include or require. The difference is failure behaviour: include emits a warning and continues, while require raises a fatal error and stops. The `_once` variants prevent the same file being loaded twice.\n\nIn modern PHP you rarely write these by hand. Composer\'s autoloader loads classes on demand based on PSR-4 namespaces, so a single `require \'vendor/autoload.php\'` covers the whole application.',
    },
  },
  {
    id: 'php-12-how-does-object-oriented',
    difficulty: beginner,
    question: {
      ar: 'ما هو مفهوم الـ OOP في PHP؟',
      en: 'How does object-oriented programming work in PHP?',
    },
    answer: {
      ar: 'البرمجة الكائنية (OOP) في PHP تسمح بتعريف الكائنات، الوراثة، والتجريد.',
      en: 'PHP supports the full object model: classes, interfaces, abstract classes, traits, visibility modifiers, static members, and since PHP 8 constructor property promotion, enums and readonly properties:\n\n```php\nclass OrderService\n{\n    public function __construct(\n        private readonly OrderRepository $orders,\n        private readonly LoggerInterface $logger,\n    ) {}\n}\n```\n\nThat constructor-injection style is the basis of how Laravel and Symfony wire applications together.',
    },
  },
  {
    id: 'php-13-how-do-you-use',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك استخدام المكتبات في PHP؟',
      en: 'How do you use libraries in PHP?',
    },
    answer: {
      ar: 'يمكن استخدام المكتبات من خلال `Composer`، وهو مدير حزم لـ PHP.',
      en: 'Through Composer, the dependency manager for PHP. You declare packages in composer.json, install with `composer install`, and Composer generates an autoloader so classes load automatically by namespace. In deployment you run `composer install --no-dev --optimize-autoloader`, and the composer.lock file is committed so every environment installs identical versions.',
    },
  },
  {
    id: 'php-14-what-is-the-difference',
    difficulty: beginner,
    question: {
      ar: 'ما الفرق بين `==` و `===` في PHP؟',
      en: 'What is the difference between == and === in PHP?',
    },
    answer: {
      ar: '`==` يُستخدم للمقارنة بقيمة متساوية، بينما `===` يُستخدم للمقارنة بقيمة ونوع متساويين.',
      en: '== compares values after type juggling, while === compares both value and type with no conversion.\n\n```php\n"1" == 1;      // true\n"1" === 1;     // false\n0 == "abc";    // false in PHP 8 (was true in PHP 7)\n```\n\nThat last line is worth knowing: PHP 8 changed string-to-number comparison rules, fixing a long-standing source of security bugs. The practical advice is unchanged: use === unless you have a specific reason not to.',
    },
  },
  {
    id: 'php-15-how-do-you-validate',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك تنفيذ عمليات التحقق من البيانات في PHP؟',
      en: 'How do you validate data in PHP?',
    },
    answer: {
      ar: 'يمكن استخدام دوال مثل `filter_var()` للتحقق من صحة البيانات.',
      en: 'filter_var() covers the common cases:\n\n```php\nfilter_var($email, FILTER_VALIDATE_EMAIL);\nfilter_var($age, FILTER_VALIDATE_INT, [\'options\' => [\'min_range\' => 18]]);\nfilter_var($url, FILTER_VALIDATE_URL);\n```\n\nFor real applications you use the framework\'s validator (Laravel\'s Validator, Symfony\'s Validator component) because you need structured error messages and rules per field. The principle holds regardless of tool: validate everything arriving from outside on the server, never trust client-side checks, and use an allowlist rather than a denylist.',
    },
  },
  {
    id: 'php-16-what-are-namespaces-in',
    difficulty: intermediate,
    question: {
      ar: 'ما هو مفهوم الـ Namespaces في PHP؟',
      en: 'What are namespaces in PHP?',
    },
    answer: {
      ar: 'Namespaces تُستخدم لتنظيم الكود وتجنب تعارض الأسماء بين الكائنات.',
      en: 'Namespaces organise code and prevent name collisions between classes from different packages:\n\n```php\nnamespace App\\Services\\Billing;\n\nuse App\\Models\\Invoice;\nuse Psr\\Log\\LoggerInterface;\n```\n\nThey are also the basis of PSR-4 autoloading, where the namespace maps to the directory structure and Composer loads each class on first use without any manual includes.',
    },
  },
  {
    id: 'php-17-how-do-you-work',
    difficulty: beginner,
    question: {
      ar: 'كيف تتعامل مع الملفات في PHP؟',
      en: 'How do you work with files in PHP?',
    },
    answer: {
      ar: 'يمكن استخدام دوال مثل `fopen()`, `fread()`, و`fwrite()` للتعامل مع الملفات.',
      en: 'The classic functions are fopen(), fread(), fwrite() and fclose(), with the simpler file_get_contents() and file_put_contents() for whole files.\n\nSecurity points that matter more than the API:\n• Never build a path directly from user input — that is path traversal. Resolve it with realpath() and verify it is still inside the allowed directory.\n• Validate uploads by real file type and size, never by the client-supplied name or MIME type.\n• Store uploads outside the web root, or in object storage, so they can never be executed.',
    },
  },
  {
    id: 'php-18-what-is-composer-in',
    difficulty: beginner,
    question: {
      ar: 'ما هو مفهوم الـ Composer في PHP؟',
      en: 'What is Composer in PHP?',
    },
    answer: {
      ar: 'Composer هو مدير حزم يُستخدم لإدارة المكتبات dependencies في مشاريع PHP.',
      en: 'Composer is PHP\'s dependency manager. It resolves and installs packages from Packagist, generates a PSR-4 autoloader, and records exact resolved versions in composer.lock so installs are reproducible. It also runs scripts and manages platform requirements. Its arrival is arguably the single biggest reason modern PHP looks nothing like PHP of a decade ago.',
    },
  },
  {
    id: 'php-19-how-do-you-build',
    difficulty: intermediate,
    question: {
      ar: 'كيف يمكنك إنشاء واجهة برمجة تطبيقات RESTful في PHP؟',
      en: 'How do you build a RESTful API in PHP?',
    },
    answer: {
      ar: 'يمكن استخدام المكتبات مثل Slim أو Laravel لإنشاء واجهات RESTful بسهولة.',
      en: 'Usually with a framework — Laravel, Symfony or a micro-framework such as Slim — rather than by hand, because you need routing, request parsing, validation, serialisation and error handling.\n\n```php\nRoute::apiResource(\'products\', ProductController::class);\n```\n\nWhat matters beyond the routing: validating input before it reaches the business layer, returning correct status codes, using API Resources or serializers so database models never leak directly into responses, paginating collections, versioning the routes, and applying authentication and rate limiting as middleware.',
    },
  },
  {
    id: 'php-20-how-do-you-write',
    difficulty: beginner,
    question: {
      ar: 'ما هي الطرق المختلفة للتعليق في PHP؟',
      en: 'How do you write comments in PHP?',
    },
    answer: {
      ar: 'يمكن استخدام `//` للتعليقات الأحادية و `/* ... */` للتعليقات متعددة الأسطر.',
      en: '`//` and `#` for single-line comments, and `/* ... */` for multi-line. There is also the docblock form `/** ... */`, which is far more than a comment: IDEs and static analysis tools read its @param, @return and @throws tags for type information, and frameworks use annotations inside it. Since PHP 8, native attributes (`#[Route(\'/users\')]`) have largely replaced annotations for framework metadata.',
    },
  },
  {
    id: 'php-21-what-are-traits-in',
    difficulty: intermediate,
    question: {
      ar: 'ما هو مفهوم الـ Traits في PHP؟',
      en: 'What are traits in PHP?',
    },
    answer: {
      ar: 'Traits هي وسيلة لإعادة استخدام الكود عبر الكلاسات دون استخدام الوراثة.',
      en: 'Traits let you reuse methods across unrelated classes without inheritance, which works around PHP\'s single-inheritance limit:\n\n```php\ntrait Timestampable\n{\n    public function touch(): void { $this->updatedAt = new DateTimeImmutable(); }\n}\n\nclass Order { use Timestampable; }\n```\n\nThey are useful but easy to abuse: a trait that carries state and is used in many classes creates hidden coupling and makes behaviour hard to trace. Composition with an injected collaborator is usually the clearer choice, with traits reserved for genuinely mechanical, stateless reuse.',
    },
  },
  {
    id: 'php-22-how-do-you-check',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك التحقق مما إذا كانت قيمة موجودة في مصفوفة؟',
      en: 'How do you check whether a value exists in an array?',
    },
    answer: {
      ar: 'يمكن استخدام الدالة `in_array()` للتحقق مما إذا كانت القيمة موجودة في المصفوفة.',
      en: 'With in_array() for values and array_key_exists() or isset() for keys:\n\n```php\nin_array($needle, $haystack, true);   // pass true for strict comparison\narray_key_exists(\'id\', $row);\nisset($row[\'id\']);                    // false if the value is null\n```\n\nThe strict flag on in_array matters: without it, loose comparison can produce surprising matches. And note the difference between isset() and array_key_exists(): a key that exists with a null value is reported differently by each.',
    },
  },
  {
    id: 'php-23-what-is-pdo-in',
    difficulty: intermediate,
    question: {
      ar: 'ما هو مفهوم الـ PDO في PHP؟',
      en: 'What is PDO in PHP?',
    },
    answer: {
      ar: 'PDO (PHP Data Objects) هي واجهة لقاعدة البيانات توفر طريقة آمنة ومرنة للتعامل مع قواعد البيانات.',
      en: 'PDO (PHP Data Objects) is a database abstraction layer providing one consistent API across engines — MySQL, PostgreSQL, SQLite and others. Its main value is prepared statements, which separate SQL from data and eliminate SQL injection.\n\nIt abstracts the connection API but not SQL dialects, so queries are not automatically portable. In practice you configure it to throw exceptions on error and disable emulated prepares, then either use it directly or through the query builder or ORM your framework provides.',
    },
  },
  {
    id: 'php-24-how-do-you-protect',
    difficulty: intermediate,
    question: {
      ar: 'كيف يمكنك حماية تطبيقات PHP من هجمات SQL Injection؟',
      en: 'How do you protect a PHP application against SQL injection?',
    },
    answer: {
      ar: 'يمكن استخدام Prepared Statements مع PDO أو MySQLi لحماية التطبيق من هجمات SQL Injection.',
      en: 'Prepared statements with bound parameters, always:\n\n```php\n// vulnerable\n$pdo->query("SELECT * FROM users WHERE email = \'$email\'");\n\n// safe\n$stmt = $pdo->prepare(\'SELECT * FROM users WHERE email = ?\');\n$stmt->execute([$email]);\n```\n\nThe reason this works is that the query structure is sent to the database first, so the data can never be interpreted as SQL.\n\nTwo caveats worth mentioning: table and column names cannot be parameterised, so if they come from user input you must validate them against an allowlist; and PDO::ATTR_EMULATE_PREPARES should be false so you get real server-side preparation.',
    },
  },
  {
    id: 'php-25-what-is-autoloading-in',
    difficulty: intermediate,
    question: {
      ar: 'ما هو مفهوم الـ Autoloading في PHP؟',
      en: 'What is autoloading in PHP?',
    },
    answer: {
      ar: 'Autoloading يُستخدم لتحميل الكلاسات تلقائيًا عند الحاجة، بدلاً من تضمينها يدويًا.',
      en: 'Autoloading loads a class file automatically the first time the class is referenced, instead of requiring every file upfront. PHP exposes spl_autoload_register() for this, but in practice Composer handles it through the PSR-4 standard, which maps namespaces to directories.\n\nThe benefits are real: no manual include lists, only the classes actually used are loaded, and in production `composer dump-autoload --optimize` builds a static class map that removes filesystem lookups entirely.',
    },
  },
  {
    id: 'php-26-how-do-you-work',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك استخدام JSON في PHP؟',
      en: 'How do you work with JSON in PHP?',
    },
    answer: {
      ar: 'يمكن استخدام دوال `json_encode()` و `json_decode()` للتعامل مع بيانات JSON.',
      en: '```php\n$json = json_encode($data, JSON_THROW_ON_ERROR | JSON_UNESCAPED_UNICODE);\n$array = json_decode($json, true, flags: JSON_THROW_ON_ERROR);\n```\n\nTwo flags worth knowing: JSON_THROW_ON_ERROR turns silent failures into exceptions, which is what you want; and JSON_UNESCAPED_UNICODE keeps non-Latin text readable instead of escaping it. The second argument to json_decode controls whether you get an associative array or a stdClass object.',
    },
  },
  {
    id: 'php-27-what-is-mvc-in',
    difficulty: intermediate,
    question: {
      ar: 'ما هو مفهوم الـ MVC في PHP؟',
      en: 'What is MVC in PHP?',
    },
    answer: {
      ar: 'MVC (Model-View-Controller) هو نمط تصميم يُستخدم لفصل منطق التطبيق عن واجهة المستخدم.',
      en: 'Model-View-Controller separates an application into three roles: the Model holds data and business rules, the View renders the output, and the Controller handles the request and coordinates between them.\n\nIt is the architecture behind Laravel, Symfony and CodeIgniter. The most common mistake in practice is a fat controller carrying business logic: controllers should translate HTTP into a call to a service and back again, while the real logic lives in service and domain classes that know nothing about HTTP — which is what makes it testable.',
    },
  },
  {
    id: 'php-28-how-do-you-handle',
    difficulty: intermediate,
    question: {
      ar: 'كيف يمكنك إدارة الأخطاء في PHP؟',
      en: 'How do you handle errors in PHP?',
    },
    answer: {
      ar: 'يمكن إدارة الأخطاء باستخدام `set_error_handler()` و `set_exception_handler()`.',
      en: 'PHP has two overlapping mechanisms: the traditional error system and exceptions. Since PHP 7 most internal errors are Error objects, so a single `catch (Throwable $e)` covers both.\n\nYou register global handlers with set_error_handler(), set_exception_handler() and register_shutdown_function() for fatal errors. In production the important settings are display_errors off and log_errors on, so users never see internal details while you keep the full trace.\n\nIn a framework this is already wired up — you customise the exception handler and report errors to a service such as Sentry.',
    },
  },
  {
    id: 'php-29-which-frameworks-and-libraries',
    difficulty: beginner,
    question: {
      ar: 'ما هي المكتبات الشائعة المستخدمة مع PHP؟',
      en: 'Which frameworks and libraries are commonly used with PHP?',
    },
    answer: {
      ar: 'بعض المكتبات الشائعة تشمل Laravel، Symfony، وCodeIgniter.',
      en: '• Frameworks: Laravel (by far the most popular), Symfony (modular and used inside many other projects), CodeIgniter and Slim for lighter needs.\n• ORMs: Eloquent (Laravel) and Doctrine (Symfony).\n• Testing: PHPUnit and Pest.\n• Static analysis: PHPStan and Psalm — genuinely valuable in a dynamically typed language.\n• Style: PHP-CS-Fixer and Laravel Pint.\n• HTTP: Guzzle.\n\nThe modern PHP toolchain is Composer plus a framework plus static analysis, and that combination addresses most of the language\'s historical criticisms.',
    },
  },
];
