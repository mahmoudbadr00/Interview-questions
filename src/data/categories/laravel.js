// data/categories/laravel.js
import { DIFFICULTY } from '../difficulty.js';

const { beginner, intermediate, advanced } = DIFFICULTY;

export const laravel = [
  {
    id: 'laravel-1-what-is-laravel-and',
    difficulty: beginner,
    question: {
      ar: 'ما هو Laravel وما هي مميزاته الرئيسية؟',
      en: 'What is Laravel and what are its main features?',
    },
    answer: {
      ar: 'Laravel هو PHP Framework مفتوح المصدر يتبع نمط MVC. مميزاته الرئيسية:\n\n- Artisan CLI Tool\n- Blade Template Engine\n- Eloquent ORM\n- Built-in Security Features\n- Database Migration System\n- Package Management via Composer\n- Unit Testing Support\n- Robust Caching System',
      en: 'Laravel is an open-source PHP framework following the MVC pattern. Its headline features:\n\n- Artisan CLI tool\n- Blade templating engine\n- Eloquent ORM\n- Built-in security features\n- A database migration system\n- Package management through Composer\n- First-class testing support\n- A flexible caching system\n\nWhat makes it popular in practice is that it makes conventional decisions for you — routing, validation, queues, authentication and mail all ship configured — so you build features rather than infrastructure.',
    },
  },
  {
    id: 'laravel-2-what-is-artisan-in',
    difficulty: beginner,
    question: {
      ar: 'ما هو Artisan في Laravel؟',
      en: 'What is Artisan in Laravel?',
    },
    answer: {
      ar: 'Artisan هو Command Line Interface (CLI) مدمج في Laravel. يوفر عدة أوامر مفيدة للتطوير مثل:\n\n- php artisan make:controller\n- php artisan make:model\n- php artisan make:migration\n- php artisan serve\n- php artisan cache:clear\n\nيمكن أيضاً إنشاء Custom Commands خاصة بك',
      en: 'Artisan is the command-line interface built into Laravel. It provides commands that cover most routine development work:\n\n- php artisan make:controller\n- php artisan make:model\n- php artisan make:migration\n- php artisan serve\n- php artisan cache:clear\n\nYou can also write your own commands, which is how scheduled tasks and maintenance scripts are usually implemented. `php artisan tinker` deserves a mention too — an interactive REPL with the whole application booted, invaluable for inspecting data and trying queries.',
    },
  },
  {
    id: 'laravel-3-explain-the-service-container',
    difficulty: intermediate,
    question: {
      ar: 'اشرح Service Container في Laravel؟',
      en: 'Explain the service container in Laravel.',
    },
    answer: {
      ar: 'Service Container هو أداة قوية لإدارة Class Dependencies وتنفيذ Dependency Injection. يقوم بـ:\n\n- Automatic Resolution للـ dependencies\n- Binding Interfaces to Implementations\n- إدارة Singleton Instances\n- تسهيل Unit Testing عبر Mocking',
      en: 'The service container is Laravel\'s dependency injection container, responsible for managing class dependencies. It handles:\n\n- Automatic resolution of dependencies through constructor type hints\n- Binding interfaces to concrete implementations\n- Managing singleton instances\n- Making unit testing straightforward by allowing mocks to be swapped in\n\nThe practical benefit is that a class declares what it needs and receives it, rather than constructing its own dependencies. That is what lets you swap a real payment gateway for a fake one in tests without touching the class under test.',
    },
  },
  {
    id: 'laravel-4-what-is-eloquent-orm',
    difficulty: intermediate,
    question: {
      ar: 'ما هو Eloquent ORM وكيف يعمل؟',
      en: 'What is Eloquent ORM and how does it work?',
    },
    answer: {
      ar: 'Eloquent هو Object-Relational Mapper (ORM) في Laravel يسمح بـ:\n\n- التعامل مع Database Tables كـ PHP Classes\n- كل Table يمثله Model\n- يدعم Relationships مثل:\n  * One-to-One\n  * One-to-Many\n  * Many-to-Many\n- يوفر Query Builder سهل الاستخدام',
      en: 'Eloquent is Laravel\'s object-relational mapper. It lets you:\n\n- Work with database tables as PHP classes, one model per table\n- Define relationships:\n  * One-to-one\n  * One-to-many\n  * Many-to-many\n- Build queries through an expressive query builder\n\nThe one thing worth flagging alongside it is the N+1 query problem: looping over a hundred orders and accessing `$order->user` issues 101 queries. Eager loading with `with(\'user\')` collapses that to two. It is the most common performance issue in Laravel applications.',
    },
  },
  {
    id: 'laravel-5-what-is-middleware-in',
    difficulty: intermediate,
    question: {
      ar: 'ما هي Middleware في Laravel وما هي استخداماتها؟',
      en: 'What is middleware in Laravel and what is it used for?',
    },
    answer: {
      ar: 'Middleware هي طبقة تعمل كـ filter للـ HTTP Requests. استخداماتها:\n\n- Authentication\n- CORS Protection\n- Request Validation\n- API Authentication\n- Session Handling\n\nأنواعها:\n- Global Middleware\n- Route Middleware\n- Group Middleware',
      en: 'Middleware is a filtering layer that HTTP requests pass through before reaching the application. Typical uses:\n\n- Authentication\n- CORS handling\n- Request validation\n- API authentication\n- Session handling\n\nIt comes in three registration forms: global middleware running on every request, route middleware applied to specific routes, and middleware groups applied together.\n\nOrder matters, since each layer wraps the next — authentication must run before anything that depends on the authenticated user.',
    },
  },
  {
    id: 'laravel-6-how-does-authentication-work',
    difficulty: intermediate,
    question: {
      ar: 'كيف تعمل Authentication في Laravel؟',
      en: 'How does authentication work in Laravel?',
    },
    answer: {
      ar: 'Laravel يوفر نظام Authentication متكامل يتضمن:\n\n- Built-in Authentication System\n- Multiple Authentication Guards\n- Session-based Authentication\n- Token-based Authentication\n- Social Authentication via Socialite\n- Password Reset Features\n- Email Verification',
      en: 'Laravel provides a complete authentication system covering:\n\n- A built-in authentication scaffold\n- Multiple authentication guards, so web sessions and API tokens coexist\n- Session-based authentication\n- Token-based authentication\n- Social login through Socialite\n- Password reset flows\n- Email verification\n\nThe starter kits — Breeze for something minimal, Jetstream for more — scaffold the whole flow including views. The distinction worth understanding is guards versus providers: the guard defines how a user is authenticated for a request, the provider defines where users are retrieved from.',
    },
  },
  {
    id: 'laravel-7-what-is-the-blade',
    difficulty: beginner,
    question: {
      ar: 'ما هو Blade Template Engine وما مميزاته؟',
      en: 'What is the Blade templating engine and what does it offer?',
    },
    answer: {
      ar: 'Blade هو Template Engine خاص بـ Laravel يوفر:\n\n- Syntax مبسط للـ PHP\n- Template Inheritance via @extends\n- Sections via @section و @yield\n- Components via @component\n- Directives مثل:\n  * @if, @foreach, @while\n  * @auth, @guest\n  * @include\n- Custom Directives',
      en: 'Blade is Laravel\'s templating engine. It provides:\n\n- Simplified syntax over raw PHP\n- Template inheritance through @extends\n- Sections via @section and @yield\n- Components via @component and class-based components\n- Directives such as:\n  * @if, @foreach, @while\n  * @auth, @guest\n  * @include\n- Custom directives you define yourself\n\nBlade compiles to plain PHP and caches the result, so there is no runtime parsing cost. Importantly, `{{ }}` escapes output automatically, which prevents XSS — while `{!! !!}` does not, and should only be used with content you trust or have sanitised.',
    },
  },
  {
    id: 'laravel-8-what-are-database-migrations',
    difficulty: intermediate,
    question: {
      ar: 'ما هي Database Migrations وما أهميتها؟',
      en: 'What are database migrations and why do they matter?',
    },
    answer: {
      ar: 'Migrations هي نظام Version Control للـ Database يتيح:\n\n- إنشاء وتعديل Database Schema\n- مشاركة Database Structure مع المطورين\n- التحكم في نسخ Database\n- Rollback للتغييرات\n\nأوامر مهمة:\n- php artisan make:migration\n- php artisan migrate\n- php artisan migrate:rollback',
      en: 'Migrations are version control for your database schema. They allow you to:\n\n- Create and modify the schema in code\n- Share the database structure with the rest of the team\n- Track schema versions alongside the application\n- Roll changes back\n\nKey commands:\n- php artisan make:migration\n- php artisan migrate\n- php artisan migrate:rollback\n\nThe value is that every environment can be brought to an identical schema reproducibly, with no manual SQL and no "it works on my machine". In production, run migrations as a deliberate deployment step and treat a rollback as a fallback, not a plan — dropping a column loses data regardless of how the migration is written.',
    },
  },
  {
    id: 'laravel-9-what-is-the-difference',
    difficulty: beginner,
    question: {
      ar: 'ما هو الفرق بين soft delete و hard delete في Laravel؟',
      en: 'What is the difference between soft delete and hard delete in Laravel?',
    },
    answer: {
      ar: '- Soft Delete:\n  * يضيف حقل deleted_at للـ record\n  * البيانات تبقى في Database\n  * يمكن استرجاع البيانات\n  * يستخدم trait SoftDeletes\n\n- Hard Delete:\n  * حذف نهائي للـ record من Database\n  * لا يمكن استرجاع البيانات\n  * يستخدم دالة delete()',
      en: '- Soft delete:\n  * Sets a deleted_at timestamp on the record\n  * The row stays in the database\n  * The data can be restored\n  * Enabled with the SoftDeletes trait\n\n- Hard delete:\n  * Removes the row permanently\n  * The data cannot be recovered\n  * Performed by the delete() method\n\nWith soft deletes, Eloquent automatically excludes deleted records from queries, and `withTrashed()` or `onlyTrashed()` bring them back into scope. Two things to plan for: a unique index still sees soft-deleted rows, so re-registering a deleted email will fail; and data retention rules may require genuinely purging old records eventually.',
    },
  },
  {
    id: 'laravel-10-what-are-events-and',
    difficulty: intermediate,
    question: {
      ar: 'ما هي Events و Listeners في Laravel؟',
      en: 'What are events and listeners in Laravel?',
    },
    answer: {
      ar: 'Events و Listeners تستخدم لفصل جوانب التطبيق:\n\n- Events: تمثل حدث معين في التطبيق\n- Listeners: تستجيب للـ Events\n\nمميزات:\n- Decoupled Architecture\n- Async Operations\n- Multiple Listeners per Event\n- Event Broadcasting',
      en: 'Events and listeners decouple parts of an application:\n\n- Events represent something that happened\n- Listeners respond to them\n\nThe benefits:\n- A decoupled architecture\n- Listeners that can run asynchronously on a queue\n- Multiple listeners per event\n- Broadcasting events to the frontend\n\nThe canonical example is user registration: the registration code raises a Registered event, and separate listeners send the welcome email, create a default workspace and notify analytics. Adding a fourth side effect means adding a listener, not editing the registration logic.\n\nThe trade-off is traceability — a reader of the registration code cannot see what else happens, so the events and their listeners need to be easy to find.',
    },
  },
  {
    id: 'laravel-11-what-is-the-queue',
    difficulty: intermediate,
    question: {
      ar: 'ما هو Queue System في Laravel؟',
      en: 'What is the queue system in Laravel?',
    },
    answer: {
      ar: 'Queue System يستخدم لتأجيل معالجة المهام الثقيلة مثل:\n\n- إرسال Emails\n- Image Processing\n- File Uploads\n- External API Calls\n\nيدعم عدة Drivers:\n- Database\n- Redis\n- Amazon SQS\n- Beanstalkd',
      en: 'Queues defer heavy work out of the request cycle, for tasks such as:\n\n- Sending emails\n- Image processing\n- File uploads\n- Calls to external APIs\n\nSeveral drivers are supported:\n- Database\n- Redis\n- Amazon SQS\n- Beanstalkd\n\nThe user gets an immediate response while a worker process handles the job. What you must design for: jobs can be retried, so they need to be idempotent; failed jobs land in the failed_jobs table and should be monitored; and the worker is a long-running process, so deployments need to restart it to pick up new code.',
    },
  },
  {
    id: 'laravel-12-how-does-laravel-sanctum',
    difficulty: intermediate,
    question: {
      ar: 'كيف يعمل Laravel Sanctum وما استخداماته؟',
      en: 'How does Laravel Sanctum work and when do you use it?',
    },
    answer: {
      ar: 'Sanctum هو نظام Authentication خفيف يستخدم لـ:\n\n- SPA Authentication\n- API Token Authentication\n- Mobile App Authentication\n\nمميزات:\n- Token-based Authentication\n- Multiple Guards\n- API Rate Limiting\n- Cookie-based Session Authentication',
      en: 'Sanctum is a lightweight authentication system for:\n\n- SPA authentication\n- API token authentication\n- Mobile application authentication\n\nIts features:\n- Token-based authentication with per-token abilities\n- Multiple guards\n- API rate limiting\n- Cookie-based session authentication for first-party SPAs\n\nThe distinction from Passport matters: Passport implements full OAuth2, which you need when third parties authorise against your API. Sanctum covers the far more common case — your own frontend or mobile app talking to your own API — with much less complexity. Choose Passport only when you genuinely need OAuth.',
    },
  },
  {
    id: 'laravel-13-what-are-service-providers',
    difficulty: intermediate,
    question: {
      ar: 'ما هي Service Providers في Laravel؟',
      en: 'What are service providers in Laravel?',
    },
    answer: {
      ar: 'Service Providers هي نقطة Bootstrap الرئيسية للتطبيق:\n\n- تسجيل Service Container Bindings\n- Event Listeners\n- Middleware\n- Routes\n\nأنواعها:\n- Application Providers\n- Package Providers\n- Deferred Providers',
      en: 'Service providers are the central bootstrapping mechanism of a Laravel application. They register:\n\n- Service container bindings\n- Event listeners\n- Middleware\n- Routes\n\nThey come in several forms: application providers, package providers, and deferred providers which are only loaded when one of their bindings is actually resolved.\n\nEach has two methods with a strict separation: `register()` only binds things into the container and must not resolve anything, because other providers may not have registered yet; `boot()` runs after every provider has registered, so it is where you can safely use other services.',
    },
  },
  {
    id: 'laravel-14-how-does-validation-work',
    difficulty: intermediate,
    question: {
      ar: 'كيف تعمل Validation في Laravel؟',
      en: 'How does validation work in Laravel?',
    },
    answer: {
      ar: 'Laravel يوفر عدة طرق للـ Validation:\n\n- Form Request Validation\n- Controller Validation\n- Custom Validation Rules\n\nمميزات:\n- Built-in Validation Rules\n- Custom Error Messages\n- Localization Support\n- Array Validation',
      en: 'Laravel offers several validation approaches:\n\n- Form request validation, with rules in a dedicated class\n- Inline validation in the controller\n- Custom validation rules\n\nFeatures include a large set of built-in rules, custom error messages, localisation support and validation of nested arrays.\n\nForm requests are the cleanest option for anything non-trivial, because they keep the controller focused and put authorisation and validation in one testable place:\n\n```php\nclass StoreOrderRequest extends FormRequest\n{\n    public function authorize(): bool { return $this->user()->can(\'create\', Order::class); }\n\n    public function rules(): array\n    {\n        return [\'items\' => [\'required\', \'array\', \'min:1\'], \'items.*.id\' => [\'required\', \'exists:products,id\']];\n    }\n}\n```\n\nA failed validation returns 422 with a structured error body automatically, which is exactly what an API client needs.',
    },
  },
  {
    id: 'laravel-15-what-is-the-facade',
    difficulty: intermediate,
    question: {
      ar: 'ما هو Facade Pattern في Laravel؟',
      en: 'What is the facade pattern in Laravel?',
    },
    answer: {
      ar: 'Facades توفر واجهة "static" للـ classes في Service Container:\n\n- سهولة الاستخدام\n- Syntactic Sugar للـ Service Container\n- Testing Flexibility\n\nأمثلة شائعة:\n- Route\n- Auth\n- Cache\n- DB',
      en: 'Facades provide a static-looking interface to classes resolved from the service container. They offer:\n\n- Concise, readable call sites\n- Syntactic sugar over container resolution\n- Testability, since facades can be faked\n\nCommon examples: Route, Auth, Cache, DB.\n\nThe important nuance is that these are not truly static calls — the facade resolves the underlying instance from the container and forwards the call, which is why `Cache::shouldReceive(...)` works in tests where a real static method could not be mocked.\n\nThe criticism is that they hide dependencies: a class using five facades has five dependencies invisible in its constructor. For application services, constructor injection makes the contract explicit; facades are most comfortable in controllers and routes.',
    },
  },
  {
    id: 'laravel-16-how-does-caching-work',
    difficulty: intermediate,
    question: {
      ar: 'كيف يتم التعامل مع Caching في Laravel؟',
      en: 'How does caching work in Laravel?',
    },
    answer: {
      ar: 'Laravel يدعم عدة Cache Drivers:\n\n- File\n- Database\n- Memcached\n- Redis\n\nعمليات Cache الأساسية:\n- Cache::get()\n- Cache::put()\n- Cache::remember()\n- Cache::forget()\n- Cache::tags()',
      en: 'Laravel supports several cache drivers:\n\n- File\n- Database\n- Memcached\n- Redis\n\nThe core operations:\n- Cache::get()\n- Cache::put()\n- Cache::remember()\n- Cache::forget()\n- Cache::tags()\n\n`remember()` is the one you use most, since it combines the lookup and the population:\n\n```php\n$stats = Cache::remember(\'dashboard.stats\', 300, fn () => $this->computeStats());\n```\n\nTwo practical points: use Redis rather than the file driver once you run more than one server, because a file cache is per-machine; and cache tags let you invalidate a group at once, though they are only supported by Redis and Memcached.',
    },
  },
  {
    id: 'laravel-17-what-are-collections-in',
    difficulty: intermediate,
    question: {
      ar: 'ما هي Collections في Laravel وكيف تستخدم؟',
      en: 'What are collections in Laravel and how do you use them?',
    },
    answer: {
      ar: 'Collections هي wrapper حول Arrays توفر:\n\n- Method Chaining\n- Helper Functions مثل:\n  * map()\n  * filter()\n  * reduce()\n  * sort()\n  * groupBy()\n- Lazy Collections للـ Large Datasets',
      en: 'Collections wrap arrays with a fluent API providing:\n\n- Method chaining\n- Helper methods such as:\n  * map()\n  * filter()\n  * reduce()\n  * sort()\n  * groupBy()\n- Lazy collections for large datasets\n\n```php\n$topCustomers = $orders\n    ->filter(fn ($o) => $o->status === \'paid\')\n    ->groupBy(\'customer_id\')\n    ->map(fn ($group) => $group->sum(\'total\'))\n    ->sortDesc()\n    ->take(10);\n```\n\nEloquent query results are collections, which is why this reads so naturally. One caution: filtering a collection happens in PHP after every row has been loaded, whereas filtering in the query happens in the database. For large tables, push the work into the query — and use LazyCollection or `chunk()` when you genuinely must iterate a huge result set.',
    },
  },
  {
    id: 'laravel-18-how-does-authorization-work',
    difficulty: intermediate,
    question: {
      ar: 'كيف تعمل Authorization في Laravel؟',
      en: 'How does authorization work in Laravel?',
    },
    answer: {
      ar: 'Laravel يوفر نظام Authorization عبر:\n\n- Gates: تعريف logic مركزي\n- Policies: ربط logic بـ Models\n- Middleware: التحقق على مستوى Routes\n\nاستخدام:\n- can()\n- authorize()\n- @can directive',
      en: 'Laravel provides authorization through:\n\n- Gates — centrally defined closures for simple checks\n- Policies — classes tying authorization rules to a model\n- Middleware — enforcing checks at the route level\n\nUsed through `can()`, `authorize()` and the `@can` Blade directive.\n\nPolicies are the right default for anything model-related, because the rules live next to the thing they govern:\n\n```php\npublic function update(User $user, Post $post): bool\n{\n    return $user->id === $post->user_id || $user->hasRole(\'editor\');\n}\n```\n\nThe rule to state explicitly: hiding a button with `@can` is presentation, not security. The same check must run in the controller or form request, because the endpoint remains directly callable.',
    },
  },
  {
    id: 'laravel-19-what-is-laravel-dusk',
    difficulty: intermediate,
    question: {
      ar: 'ما هو Laravel Dusk وكيف يستخدم؟',
      en: 'What is Laravel Dusk and what is it used for?',
    },
    answer: {
      ar: 'Dusk هو Browser Testing Framework يتيح:\n\n- Browser Automation\n- Testing JavaScript\n- Screenshot Capture\n- Database Assertions\n- Page Object Pattern Support\n- Custom Element Selection',
      en: 'Dusk is Laravel\'s browser testing framework. It provides:\n\n- Browser automation through ChromeDriver\n- Testing of JavaScript-driven behaviour\n- Screenshot capture on failure\n- Database assertions\n- Support for the page object pattern\n- Custom element selectors\n\nIt covers what HTTP-level tests cannot: anything that only works once JavaScript has run. The trade-off is the usual one for end-to-end tests — they are slow and more prone to flakiness — so they belong on critical user journeys such as registration and checkout, not on every form in the application.',
    },
  },
  {
    id: 'laravel-20-how-does-task-scheduling',
    difficulty: intermediate,
    question: {
      ar: 'كيف تعمل Job Scheduling في Laravel؟',
      en: 'How does task scheduling work in Laravel?',
    },
    answer: {
      ar: 'Task Scheduler يتيح جدولة المهام المتكررة:\n\n- تحديد Cron Schedules\n- تنفيذ Artisan Commands\n- Queue Jobs\n- Shell Commands\n\nمثال:\n- ->daily()\n- ->weekly()\n- ->monthly()',
      en: 'The task scheduler lets you define recurring work in code:\n\n- Declaring cron-style schedules fluently\n- Running Artisan commands\n- Dispatching queued jobs\n- Executing shell commands\n\nFor example:\n- ->daily()\n- ->weekly()\n- ->monthly()\n\nThe practical advantage over raw cron is that the schedule lives in version control alongside the application, and only one cron entry is needed on the server to invoke `schedule:run` every minute.\n\nTwo things worth adding in production: `withoutOverlapping()` so a slow task does not start twice, and `onOneServer()` when several application servers share the schedule — otherwise every server runs the same job.',
    },
  },
  {
    id: 'laravel-21-what-is-the-repository',
    difficulty: advanced,
    question: {
      ar: 'ما هو Repository Pattern وكيف يطبق في Laravel؟',
      en: 'What is the repository pattern and how is it applied in Laravel?',
    },
    answer: {
      ar: 'Repository Pattern يفصل Logic التعامل مع Data:\n\n- فصل Business Logic عن Data Access Layer\n- سهولة تغيير Data Source\n- تحسين Code Reusability\n\nالتطبيق:\n- إنشاء Interface\n- تنفيذ Repository Class\n- استخدام Service Container للـ Binding',
      en: 'The repository pattern separates data access from business logic:\n\n- It keeps business logic independent of the data access layer\n- It makes changing the data source easier\n- It improves reusability\n\nImplementation:\n- Define an interface\n- Implement a concrete repository class\n- Bind the interface to the implementation in the service container\n\nAn honest note for an interview: this pattern is debated in the Laravel community. Eloquent is already an abstraction over the database, so wrapping it in another one can be ceremony without benefit — particularly when the argument is "we might switch databases", which almost never happens.\n\nWhere it does earn its place: when the data comes from somewhere other than a database, when you need to swap implementations in tests without hitting the database, or when queries are complex enough that keeping them out of controllers genuinely helps.',
    },
  },
  {
    id: 'laravel-22-how-does-file-storage',
    difficulty: intermediate,
    question: {
      ar: 'كيف يتم التعامل مع File Storage في Laravel?',
      en: 'How does file storage work in Laravel?',
    },
    answer: {
      ar: 'Laravel يوفر File System Abstraction:\n\n- Local Storage\n- Amazon S3\n- FTP\n- Multiple Disks\n\nFeatures:\n- File Upload\n- File Download\n- File Visibility\n- Custom File Systems',
      en: 'Laravel provides a filesystem abstraction over several backends:\n\n- Local storage\n- Amazon S3\n- FTP\n- Multiple configured disks\n\nWith support for uploads, downloads, visibility control and custom filesystem drivers.\n\nThe abstraction is the point: the same `Storage::disk(\'s3\')->put(...)` call works against local disk in development and S3 in production, with only the configuration changing.\n\nPractical points for uploads: validate the real file type and size rather than trusting the client, generate the stored filename rather than using the original, keep uploads outside the public directory unless they are genuinely public, and for large files use a presigned URL so the upload goes straight to storage without passing through your server.',
    },
  },
  {
    id: 'laravel-23-what-is-rate-limiting',
    difficulty: intermediate,
    question: {
      ar: 'ما هي Rate Limiting في Laravel وكيف تستخدم؟',
      en: 'What is rate limiting in Laravel and how do you use it?',
    },
    answer: {
      ar: 'Rate Limiting تحد من تكرار الطلبات:\n\n- API Rate Limiting\n- Route Rate Limiting\n- Dynamic Rate Limits\n\nتطبيق عبر:\n- Middleware\n- Cache Drivers\n- Custom Limitations',
      en: 'Rate limiting caps how often a client may make requests:\n\n- API rate limiting\n- Per-route limits\n- Dynamic limits that vary by user\n\nApplied through middleware, backed by a cache driver, with custom limiter definitions.\n\n```php\nRateLimiter::for(\'api\', fn (Request $request) =>\n    $request->user()\n        ? Limit::perMinute(1000)->by($request->user()->id)\n        : Limit::perMinute(60)->by($request->ip())\n);\n```\n\nTwo details that matter: use Redis as the cache store so the counter is shared across servers, since a file or in-memory counter lets each server allow the full limit; and apply a much stricter limit to login and password-reset endpoints, which are the ones actually being attacked.',
    },
  },
  {
    id: 'laravel-24-how-do-you-implement',
    difficulty: advanced,
    question: {
      ar: 'كيف يتم تنفيذ Real-time Features في Laravel?',
      en: 'How do you implement real-time features in Laravel?',
    },
    answer: {
      ar: 'Laravel يدعم Real-time عبر:\n\n- Broadcasting System\n- Pusher\n- Socket.io\n- Laravel Echo\n\nFeatures:\n- Private Channels\n- Presence Channels\n- Event Broadcasting',
      en: 'Laravel supports real-time functionality through:\n\n- The broadcasting system\n- Pusher as a hosted driver\n- Socket.io / self-hosted alternatives such as Laravel Reverb\n- Laravel Echo on the client\n\nWith private channels, presence channels and event broadcasting.\n\nThe flow is that an event implementing ShouldBroadcast is dispatched, sent to the broadcasting driver, and delivered to clients subscribed to that channel through Echo.\n\nThe channel types matter for security: a public channel is readable by anyone, a private channel runs an authorisation callback before a client may subscribe, and a presence channel additionally tracks who is currently connected — which is what powers "who is online" and collaborative cursors.',
    },
  },
  {
    id: 'laravel-25-what-is-laravel-horizon',
    difficulty: intermediate,
    question: {
      ar: 'ما هو Laravel Horizon وما استخداماته؟',
      en: 'What is Laravel Horizon and what is it used for?',
    },
    answer: {
      ar: 'Horizon يوفر Dashboard للـ Redis Queue:\n\n- Queue Monitoring\n- Job Metrics\n- Failed Jobs\n- Process Management\n\nFeatures:\n- Real-time Monitoring\n- Job Retries\n- Custom Metrics',
      en: 'Horizon provides a dashboard and supervisor for Redis-backed queues:\n\n- Queue monitoring\n- Job throughput and runtime metrics\n- Failed job inspection\n- Worker process management\n\nWith real-time monitoring, job retries from the UI and custom metrics.\n\nIts practical value is visibility. Without it, a queue quietly backing up is invisible until users notice their emails never arrived. Horizon shows queue depth, wait times and failure rates, and can alert when the wait time exceeds a threshold — which is the signal that you need more workers or that a job is stuck.',
    },
  },
  {
    id: 'laravel-26-how-does-localization-work',
    difficulty: intermediate,
    question: {
      ar: 'كيف يتم التعامل مع Localization في Laravel?',
      en: 'How does localization work in Laravel?',
    },
    answer: {
      ar: 'Laravel يدعم Multi-language عبر:\n\n- Language Files\n- Translation Strings\n- Blade Directives\n\nFeatures:\n- Fallback Locales\n- JSON Translations\n- Dynamic Locale Switching',
      en: 'Laravel supports multiple languages through:\n\n- Language files per locale\n- Translation strings, including JSON-based translation files\n- Blade directives such as `__()` and `@lang`\n\nWith fallback locales and dynamic locale switching at runtime.\n\nBeyond the mechanics, what an interviewer usually wants to hear: pluralisation rules differ by language — Arabic has six forms against English\'s two — so use the pluralisation syntax rather than an if statement; format dates, numbers and currency through locale-aware formatters rather than hard-coded patterns; and right-to-left languages need the layout direction handled, not just the strings translated.',
    },
  },
  {
    id: 'laravel-27-what-is-laravel-scout',
    difficulty: intermediate,
    question: {
      ar: 'ما هو Laravel Scout وكيف يستخدم؟',
      en: 'What is Laravel Scout and how do you use it?',
    },
    answer: {
      ar: 'Scout هو Full-text Search Solution:\n\n- Algolia Integration\n- Custom Drivers\n- Searchable Models\n\nFeatures:\n- Async Indexing\n- Search Query Building\n- Custom Indexing Logic',
      en: 'Scout provides full-text search for Eloquent models:\n\n- Integration with Algolia\n- Support for custom drivers, including Meilisearch and a database driver\n- Models made searchable with a trait\n\nWith asynchronous indexing through queues, a fluent search query API, and control over exactly what gets indexed.\n\nThe reason to use a search engine rather than SQL LIKE is relevance and tolerance: proper ranking, typo tolerance, stemming and faceted filtering are things a LIKE query cannot provide, and it cannot use an index either. The cost is another service to run and keeping the index in sync — which is why queued indexing matters.',
    },
  },
  {
    id: 'laravel-28-how-does-exception-handling',
    difficulty: intermediate,
    question: {
      ar: 'كيف تتم معالجة Exceptions في Laravel?',
      en: 'How does exception handling work in Laravel?',
    },
    answer: {
      ar: 'Laravel يوفر Exception Handling System:\n\n- Custom Exception Handler\n- Error Pages\n- Exception Reporting\n\nFeatures:\n- Custom Error Messages\n- Error Logging\n- Development/Production Modes',
      en: 'Laravel provides a centralised exception handling system:\n\n- A custom exception handler as the single interception point\n- Configurable error pages\n- Exception reporting to external services\n\nWith custom error messages, error logging, and different behaviour in development versus production.\n\nThe environment distinction is a security matter: with debug enabled, Laravel shows a detailed trace including configuration values and query contents. `APP_DEBUG=false` in production is not optional.\n\nGood practice is defining your own exception types for domain failures, so the handler can map them to the right status code and response shape centrally, rather than each controller formatting errors its own way.',
    },
  },
  {
    id: 'laravel-29-what-is-laravel-mix',
    difficulty: beginner,
    question: {
      ar: 'ما هو Laravel Mix وكيف يستخدم؟',
      en: 'What is Laravel Mix and what has replaced it?',
    },
    answer: {
      ar: 'Mix هو Webpack Wrapper يستخدم لـ:\n\n- Asset Compilation\n- SASS/LESS Processing\n- JavaScript Modules\n- Version Hash\n\nFeatures:\n- Hot Module Replacement\n- Code Splitting\n- Source Maps',
      en: 'Mix is a wrapper around Webpack used for:\n\n- Compiling assets\n- Processing SASS/LESS\n- Bundling JavaScript modules\n- Adding version hashes for cache busting\n\nWith hot module replacement, code splitting and source maps.\n\nThe important context is that Laravel moved to Vite as of Laravel 9, and new projects use Vite by default. The reason is development speed: Vite serves native ES modules so the dev server starts instantly regardless of project size, where Webpack rebuilds the bundle. Mix still works and is maintained for existing projects, but new work should use Vite.',
    },
  },
  {
    id: 'laravel-30-how-do-you-implement',
    difficulty: intermediate,
    question: {
      ar: 'كيف يتم تنفيذ API Versioning في Laravel?',
      en: 'How do you implement API versioning in Laravel?',
    },
    answer: {
      ar: 'API Versioning يمكن تنفيذه عبر:\n\n- URL Versioning\n- Header Versioning\n- Custom Namespace\n\nBest Practices:\n- API Resources\n- Version Prefixes\n- Documentation\n- Rate Limiting',
      en: 'Versioning can be done through:\n\n- URL versioning, such as /api/v1/users\n- Header-based versioning\n- Separate namespaces per version\n\nWith supporting practices: API Resources for shaping responses, route prefixes, documentation and rate limiting.\n\nURL versioning is the most common because it is visible, cacheable and trivial to test by hand.\n\nThe more important discipline is minimising the need for a new version at all: adding fields is safe, removing or renaming them is not. So you add rather than change, deprecate with notice before removing, and use API Resources so a model change does not automatically alter the response shape — which is how an internal refactor silently breaks a client.',
    },
  },
];
