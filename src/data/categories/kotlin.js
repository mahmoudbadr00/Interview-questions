// data/categories/kotlin.js
import { DIFFICULTY } from '../difficulty.js';

const { beginner, intermediate, advanced } = DIFFICULTY;

export const kotlin = [
  {
    id: 'kotlin-1-what-is-kotlin',
    difficulty: beginner,
    question: {
      ar: 'ما هو Kotlin؟',
      en: 'What is Kotlin?',
    },
    answer: {
      ar: 'Kotlin هو لغة برمجة حديثة تم تطويرها بواسطة JetBrains، وتُستخدم بشكل رئيسي لتطوير تطبيقات Android.',
      en: 'Kotlin is a modern, statically typed language from JetBrains that runs on the JVM and is Google\'s preferred language for Android development. It is fully interoperable with Java, so it can be adopted file by file in an existing codebase. Beyond Android it also targets the server (Ktor, Spring), the browser and native binaries through Kotlin Multiplatform.',
    },
  },
  {
    id: 'kotlin-2-what-are-the-advantages',
    difficulty: beginner,
    question: {
      ar: 'ما هي مميزات Kotlin؟',
      en: 'What are the advantages of Kotlin?',
    },
    answer: {
      ar: 'من مميزات Kotlin القابلية للتوافق مع Java، التركيب النحوي الواضح، دعم البرمجة الوظيفية، وتقليل كمية الكود.',
      en: '• Full Java interoperability, so migration can be incremental.\n• Null safety enforced by the type system, which eliminates most NullPointerExceptions at compile time.\n• Concise syntax — data classes, type inference and named arguments remove a great deal of Java boilerplate.\n• First-class functional support: lambdas, higher-order functions, immutable collections.\n• Coroutines for asynchronous work without callback nesting.\n• Extension functions for adding behaviour to types you do not own.',
    },
  },
  {
    id: 'kotlin-3-how-do-you-declare',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك تعريف متغير في Kotlin؟',
      en: 'How do you declare a variable in Kotlin?',
    },
    answer: {
      ar: 'يمكنك تعريف متغير باستخدام `val` للمتغيرات الثابتة و`var` للمتغيرات القابلة للتغيير، مثل: `val x = 10`.',
      en: '```kotlin\nval name = "Sara"        // read-only, cannot be reassigned\nvar count = 0            // mutable\nval users: List<User> = emptyList()   // explicit type when inference is not enough\n```\n\nThe convention is to default to `val` and only use `var` when reassignment is genuinely needed — it makes state changes visible and reduces bugs. Note that `val` prevents reassignment, not mutation: a `val` holding a MutableList can still have items added to it.',
    },
  },
  {
    id: 'kotlin-4-what-is-null-safety',
    difficulty: beginner,
    question: {
      ar: 'ما هو مفهوم Null Safety في Kotlin؟',
      en: 'What is null safety in Kotlin?',
    },
    answer: {
      ar: 'Null Safety يُستخدم لتجنب الأخطاء المتعلقة بالقيم null عن طريق استخدام نوع البيانات القابل لـ null، مثل: `String?`.',
      en: 'Kotlin distinguishes nullable from non-nullable types at the type level, so the compiler forces you to handle the null case:\n\n```kotlin\nvar name: String = "Sara"\nname = null                 // compile error\n\nvar email: String? = null   // explicitly nullable\n\nemail?.length               // safe call — null if email is null\nemail?.length ?: 0          // Elvis operator with a default\nemail!!.length              // asserts non-null, throws if wrong\n\nemail?.let { sendTo(it) }   // run a block only when non-null\n```\n\nThis is arguably Kotlin\'s single biggest improvement over Java: the billion-dollar mistake becomes a compile-time error rather than a runtime crash. The `!!` operator defeats it, so it should be rare and deliberate.',
    },
  },
  {
    id: 'kotlin-5-how-do-you-define',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك إنشاء دالة في Kotlin؟',
      en: 'How do you define a function in Kotlin?',
    },
    answer: {
      ar: 'يمكنك إنشاء دالة باستخدام الكلمة المفتاحية `fun`، مثل: `fun myFunction() { ... }`.',
      en: '```kotlin\nfun calculateTotal(items: List<Item>, taxRate: Double = 0.14): Double {\n    return items.sumOf { it.price } * (1 + taxRate)\n}\n\n// single-expression form\nfun double(x: Int) = x * 2\n\n// named arguments at the call site\ncalculateTotal(items = cart, taxRate = 0.2)\n```\n\nKotlin supports default parameter values, which removes most of the need for overloads, and named arguments, which make calls with several parameters readable. A function returning nothing returns Unit, which can be omitted.',
    },
  },
  {
    id: 'kotlin-6-what-are-data-classes',
    difficulty: beginner,
    question: {
      ar: 'ما هو مفهوم الـ Data Classes في Kotlin؟',
      en: 'What are data classes in Kotlin?',
    },
    answer: {
      ar: 'Data Classes تُستخدم لإنشاء كائنات تمثل بيانات، وتوفر وظائف مثل `toString()` و`equals()` بشكل تلقائي.',
      en: 'A data class is for holding data, and the compiler generates equals(), hashCode(), toString(), copy() and componentN() for you:\n\n```kotlin\ndata class User(val id: Int, val name: String, val email: String? = null)\n\nval user = User(1, "Sara")\nval renamed = user.copy(name = "Ali")     // immutable update\nval (id, name) = user                      // destructuring\n```\n\nIn Java this would be fifty lines of boilerplate. The copy() method in particular is what makes immutable state practical — you create a modified copy rather than mutating in place, which suits modern UI architectures such as Compose.',
    },
  },
  {
    id: 'kotlin-7-how-do-you-work',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك التعامل مع القوائم في Kotlin؟',
      en: 'How do you work with lists in Kotlin?',
    },
    answer: {
      ar: 'يمكنك استخدام `List` لإنشاء قوائم، ويمكن أن تكون ثابتة أو قابلة للتغيير باستخدام `mutableListOf()`.',
      en: '```kotlin\nval readOnly = listOf(1, 2, 3)\nval mutable = mutableListOf(1, 2, 3)\nmutable.add(4)\n\nval names = users.map { it.name }\nval adults = users.filter { it.age >= 18 }\nval byCountry = users.groupBy { it.country }\nval total = orders.sumOf { it.amount }\n```\n\nKotlin separates read-only interfaces (List, Set, Map) from mutable ones (MutableList and friends), which makes intent explicit in signatures. Note that List is read-only rather than immutable — it is a view that does not expose mutation, but the underlying object could still change if something else holds a mutable reference.',
    },
  },
  {
    id: 'kotlin-8-what-are-extension-functions',
    difficulty: intermediate,
    question: {
      ar: 'ما هو مفهوم الـ Extension Functions في Kotlin؟',
      en: 'What are extension functions in Kotlin?',
    },
    answer: {
      ar: 'Extension Functions تُستخدم لإضافة وظائف جديدة إلى الفئات الموجودة دون تعديلها، مثل: `fun String.lastChar() { ... }`.',
      en: 'Extension functions add methods to an existing type without modifying it or inheriting from it:\n\n```kotlin\nfun String.isValidEmail(): Boolean = contains("@") && contains(".")\nfun View.hide() { visibility = View.GONE }\n\n"user@example.com".isValidEmail()\n```\n\nThey are resolved statically at compile time — no real method is added to the class — so they cannot access private members and cannot be overridden polymorphically. Their value is readability: utility code reads as a method on the type rather than as a helper function taking it as an argument. Much of the Kotlin standard library is built this way.',
    },
  },
  {
    id: 'kotlin-9-how-do-lambdas-work',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك استخدام الـ Lambdas في Kotlin؟',
      en: 'How do lambdas work in Kotlin?',
    },
    answer: {
      ar: 'يمكنك استخدام Lambdas كدوال مجهولة، مثل: `val sum = { a: Int, b: Int -> a + b }`.',
      en: '```kotlin\nval sum = { a: Int, b: Int -> a + b }\nsum(2, 3)\n\nusers.filter { it.isActive }           // `it` is the implicit single parameter\nbutton.setOnClickListener { submit() }\n\n// trailing lambda syntax\nlist.forEach { item -> process(item) }\n```\n\nTwo conventions worth knowing: when a lambda is the last parameter it can be moved outside the parentheses, and a single-parameter lambda can use the implicit name `it`. Both are heavily used in Kotlin DSLs, including Jetpack Compose.',
    },
  },
  {
    id: 'kotlin-10-what-are-coroutines-in',
    difficulty: intermediate,
    question: {
      ar: 'ما هو مفهوم الـ Coroutines في Kotlin؟',
      en: 'What are coroutines in Kotlin?',
    },
    answer: {
      ar: 'Coroutines تُستخدم لإجراء العمليات غير المتزامنة بشكل أكثر سهولة ووضوح، مما يُحسن أداء التطبيقات.',
      en: 'Coroutines are Kotlin\'s mechanism for asynchronous programming: suspendable computations that let you write non-blocking code in a sequential style.\n\n```kotlin\nsuspend fun loadProfile(id: String): Profile = coroutineScope {\n    val user = async { api.getUser(id) }        // run in parallel\n    val orders = async { api.getOrders(id) }\n    Profile(user.await(), orders.await())\n}\n\nviewModelScope.launch {\n    val profile = loadProfile(userId)\n    _state.value = UiState.Success(profile)\n}\n```\n\nThe key ideas: `suspend` marks a function that can pause without blocking its thread; coroutines are far lighter than threads, so thousands can run concurrently; and structured concurrency ties a coroutine\'s lifetime to a scope, so cancelling the scope cancels the work. On Android, viewModelScope cancels automatically when the ViewModel is cleared, which removes a whole class of leaks.',
    },
  },
  {
    id: 'kotlin-11-how-do-you-handle',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك التعامل مع الاستثناءات في Kotlin؟',
      en: 'How do you handle exceptions in Kotlin?',
    },
    answer: {
      ar: 'يمكن التعامل مع الاستثناءات باستخدام الكتل `try-catch`، مثل: `try { ... } catch (e: Exception) { ... }`.',
      en: '```kotlin\ntry {\n    val data = api.fetch()\n    process(data)\n} catch (e: IOException) {\n    logger.error("network failure", e)\n} finally {\n    cleanup()\n}\n\n// try is an expression\nval value = try { text.toInt() } catch (e: NumberFormatException) { 0 }\n\n// or avoid exceptions entirely\nval number: Int? = text.toIntOrNull()\n```\n\nA notable difference from Java: Kotlin has no checked exceptions, so the compiler never forces a try/catch. That removes Java\'s boilerplate but also removes a prompt, so error handling becomes a matter of discipline. For expected failures, returning a nullable or a Result type often reads better than throwing.',
    },
  },
  {
    id: 'kotlin-12-what-are-sealed-classes',
    difficulty: intermediate,
    question: {
      ar: 'ما هو مفهوم الـ Sealed Classes في Kotlin؟',
      en: 'What are sealed classes in Kotlin?',
    },
    answer: {
      ar: 'Sealed Classes تُستخدم لتقييد الفئات إلى عدد معين من الفئات الفرعية، مما يُحسن الأمان النوعي.',
      en: 'A sealed class restricts its subclasses to a known set declared in the same module, which lets the compiler verify exhaustiveness:\n\n```kotlin\nsealed interface UiState {\n    data object Loading : UiState\n    data class Success(val data: List<Item>) : UiState\n    data class Error(val message: String) : UiState\n}\n\nwhen (state) {\n    is UiState.Loading -> showSpinner()\n    is UiState.Success -> render(state.data)      // smart cast to Success\n    is UiState.Error   -> showError(state.message)\n}\n```\n\nNo `else` branch is needed, and adding a new subclass makes every incomplete `when` a compile error. This is the idiomatic way to model screen state in Android, because it makes impossible combinations — loading and error at once — unrepresentable.',
    },
  },
  {
    id: 'kotlin-13-how-do-interfaces-work',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك استخدام الـ Interfaces في Kotlin؟',
      en: 'How do interfaces work in Kotlin?',
    },
    answer: {
      ar: 'يمكن تعريف واجهات باستخدام الكلمة المفتاحية `interface`، ويمكن تنفيذها بواسطة الفئات.',
      en: '```kotlin\ninterface Repository<T> {\n    val name: String                       // abstract property\n    suspend fun findById(id: String): T?\n\n    fun describe(): String = "Repository: $name"    // default implementation\n}\n\nclass UserRepository(private val db: Database) : Repository<User> {\n    override val name = "users"\n    override suspend fun findById(id: String) = db.users.find(id)\n}\n```\n\nKotlin interfaces can declare abstract properties and provide default method implementations, but they hold no state. A class can implement several, which is how Kotlin provides multiple inheritance of behaviour without the diamond problem — if two interfaces supply the same default, the class must override it explicitly.',
    },
  },
  {
    id: 'kotlin-14-what-are-companion-objects',
    difficulty: intermediate,
    question: {
      ar: 'ما هو مفهوم الـ Companion Objects في Kotlin؟',
      en: 'What are companion objects in Kotlin?',
    },
    answer: {
      ar: 'Companion Objects تُستخدم لتعريف كائن ثابت مرتبط بالفئة، مما يُتيح الوصول إلى الوظائف الثابتة.',
      en: 'Kotlin has no static members; a companion object fills that role as a singleton tied to the class:\n\n```kotlin\nclass User private constructor(val id: String) {\n    companion object {\n        const val MAX_NAME_LENGTH = 50\n\n        fun create(name: String): User {\n            require(name.length <= MAX_NAME_LENGTH)\n            return User(generateId())\n        }\n    }\n}\n\nUser.create("Sara")\n```\n\nBecause it is a real object rather than a static namespace, it can implement interfaces and be passed around — which is why factory patterns are common with it. For genuine JVM statics, annotate members with @JvmStatic so Java callers see them naturally.',
    },
  },
  {
    id: 'kotlin-15-what-are-higher-order',
    difficulty: intermediate,
    question: {
      ar: 'كيف يمكنك استخدام الـ Higher-Order Functions في Kotlin؟',
      en: 'What are higher-order functions in Kotlin?',
    },
    answer: {
      ar: 'Higher-Order Functions هي دوال تأخذ دوالًا أخرى كوسائط أو تُعيد دوال، مثل: `fun operate(action: (Int) -> Int) { ... }`.',
      en: 'Functions that take functions as parameters or return them:\n\n```kotlin\nfun <T> retry(times: Int, block: () -> T): T {\n    repeat(times - 1) {\n        try { return block() } catch (e: Exception) { /* retry */ }\n    }\n    return block()\n}\n\nval user = retry(3) { api.fetchUser(id) }\n```\n\nThey are how Kotlin expresses control-flow abstractions that would need a language feature elsewhere. The standard library is full of them — let, run, apply, also, use — and the `use` function in particular gives you automatic resource closing:\n\n```kotlin\nFile("data.txt").bufferedReader().use { it.readText() }\n```',
    },
  },
  {
    id: 'kotlin-16-which-libraries-are-commonly',
    difficulty: beginner,
    question: {
      ar: 'ما هي المكتبات الشائعة المستخدمة مع Kotlin؟',
      en: 'Which libraries are commonly used with Kotlin?',
    },
    answer: {
      ar: 'بعض المكتبات الشائعة تشمل Ktor، Koin، وExposed.',
      en: '• Android: Jetpack Compose, Room, Hilt, WorkManager, Navigation.\n• Networking: Retrofit with OkHttp, or Ktor Client.\n• Server: Ktor, Spring Boot (which has first-class Kotlin support).\n• Serialisation: kotlinx.serialization, Moshi, Gson.\n• Dependency injection: Hilt on Android, Koin elsewhere.\n• Database: Room, Exposed, SQLDelight.\n• Async: kotlinx.coroutines and Flow.\n• Testing: JUnit, MockK, Turbine for testing flows.',
    },
  },
  {
    id: 'kotlin-17-how-do-you-call',
    difficulty: intermediate,
    question: {
      ar: 'كيف يمكنك تنفيذ النماذج في Kotlin باستخدام Android؟',
      en: 'How do you call an API and map the response in Android with Kotlin?',
    },
    answer: {
      ar: 'يمكن استخدام مكتبات مثل Retrofit وGson لإنشاء نماذج والتفاعل مع واجهات برمجة التطبيقات.',
      en: 'Retrofit with a serialisation library is the standard approach:\n\n```kotlin\n@Serializable\ndata class UserDto(val id: String, val name: String, val email: String?)\n\ninterface UserApi {\n    @GET("users/{id}")\n    suspend fun getUser(@Path("id") id: String): UserDto\n}\n\nclass UserRepository(private val api: UserApi) {\n    suspend fun load(id: String): Result<User> = runCatching {\n        api.getUser(id).toDomain()\n    }\n}\n```\n\nTwo practices worth noting: keep the network DTO separate from the domain model so an API change does not ripple through the app, and make the API functions `suspend` so Retrofit integrates with coroutines directly rather than through callbacks.',
    },
  },
  {
    id: 'kotlin-18-what-is-delegation-in',
    difficulty: intermediate,
    question: {
      ar: 'ما هو مفهوم الـ Delegation في Kotlin؟',
      en: 'What is delegation in Kotlin?',
    },
    answer: {
      ar: 'Delegation يُستخدم لتفويض تنفيذ وظائف معينة إلى كائن آخر، مما يُعزز إعادة استخدام الشيفرة.',
      en: 'Delegation means handing responsibility for a member to another object, and Kotlin supports it as a language feature rather than a manual pattern.\n\nClass delegation:\n```kotlin\nclass LoggingList<T>(private val inner: MutableList<T>) : MutableList<T> by inner {\n    override fun add(element: T): Boolean {\n        logger.debug("adding $element")\n        return inner.add(element)\n    }\n}\n```\nThe `by` keyword forwards every other method automatically.\n\nProperty delegation:\n```kotlin\nval repository: UserRepository by inject()      // Koin\nval name: String by lazy { computeExpensiveName() }\nvar count: Int by savedStateHandle\n```\n\n`by lazy` is the one you use most: the value is computed on first access and cached, which is ideal for expensive initialisation.',
    },
  },
  {
    id: 'kotlin-19-how-does-the-when',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك استخدام الـ When في Kotlin؟',
      en: 'How does the when expression work in Kotlin?',
    },
    answer: {
      ar: 'يمكن استخدام `when` كبديل لـ `if-else`، مما يجعل الشيفرة أكثر وضوحًا، مثل: `when (x) { ... }`.',
      en: '`when` replaces Java\'s switch and is considerably more capable:\n\n```kotlin\nval label = when (status) {\n    Status.ACTIVE -> "Active"\n    Status.PAUSED, Status.STOPPED -> "Inactive"\n    else -> "Unknown"\n}\n\nwhen {\n    age < 13 -> "child"\n    age < 20 -> "teenager"\n    else -> "adult"\n}\n\nwhen (value) {\n    is String -> value.length      // smart cast\n    in 1..10 -> "small"\n    else -> "other"\n}\n```\n\nIt is an expression, so it returns a value; it matches on types, ranges and arbitrary conditions; and used with a sealed class or enum it is checked for exhaustiveness at compile time — so adding a case forces you to handle it everywhere.',
    },
  },
  {
    id: 'kotlin-20-what-are-inline-functions',
    difficulty: advanced,
    question: {
      ar: 'ما هو مفهوم الـ Inline Functions في Kotlin؟',
      en: 'What are inline functions in Kotlin?',
    },
    answer: {
      ar: 'Inline Functions تُستخدم لتحسين الأداء من خلال تقليل استدعاءات الدوال، مما يُسرع تنفيذ الشيفرة.',
      en: 'The `inline` modifier tells the compiler to copy a function\'s body into the call site rather than calling it:\n\n```kotlin\ninline fun <T> measure(block: () -> T): T {\n    val start = System.nanoTime()\n    val result = block()\n    logger.debug("took ${System.nanoTime() - start}ns")\n    return result\n}\n```\n\nIts real purpose is higher-order functions: normally each lambda allocates an object, and inlining removes that overhead. It also enables two things that are otherwise impossible: a non-local `return` from inside the lambda, and reified type parameters, which let you access the generic type at runtime despite JVM type erasure:\n\n```kotlin\ninline fun <reified T> Gson.parse(json: String): T = fromJson(json, T::class.java)\n```\n\nThe caveat is code size: inlining a large function into many call sites bloats the bytecode, so it is meant for small functions taking lambdas.',
    },
  },
  {
    id: 'kotlin-21-how-do-you-work',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك التعامل مع الـ JSON في Kotlin؟',
      en: 'How do you work with JSON in Kotlin?',
    },
    answer: {
      ar: 'يمكن استخدام مكتبة Gson أو kotlinx.serialization لتحليل وإنشاء بيانات JSON.',
      en: 'kotlinx.serialization is the Kotlin-native option and works across multiplatform targets:\n\n```kotlin\n@Serializable\ndata class User(val id: Int, val name: String, val email: String? = null)\n\nval json = Json { ignoreUnknownKeys = true }\nval text = json.encodeToString(user)\nval parsed = json.decodeFromString<User>(text)\n```\n\nIt works at compile time through a plugin, so there is no reflection — which matters for startup time and for native targets. Moshi and Gson are the alternatives, common in older Android codebases. The ignoreUnknownKeys setting is worth enabling so a new field added by the backend does not crash the app.',
    },
  },
  {
    id: 'kotlin-22-what-are-annotations-in',
    difficulty: intermediate,
    question: {
      ar: 'ما هو مفهوم الـ Annotations في Kotlin؟',
      en: 'What are annotations in Kotlin?',
    },
    answer: {
      ar: 'Annotations تُستخدم لإضافة معلومات وصفية إلى الشيفرة، ويمكن استخدامها لتوجيه سلوك التطبيقات.',
      en: 'Annotations attach metadata that tools and frameworks read:\n\n```kotlin\n@Serializable\ndata class User(@SerialName("user_id") val id: Int)\n\n@Entity(tableName = "users")      // Room\n@Composable                        // Jetpack Compose\n@Deprecated("Use loadUser instead", ReplaceWith("loadUser(id)"))\n```\n\nThey do nothing by themselves — their meaning comes from an annotation processor at build time (Room, Hilt, kotlinx.serialization) or a compiler plugin. Kotlin adds use-site targets such as @field: and @get: for controlling where an annotation lands on the generated JVM member, which is occasionally necessary when integrating with Java libraries.',
    },
  },
  {
    id: 'kotlin-23-how-do-generics-work',
    difficulty: intermediate,
    question: {
      ar: 'كيف يمكنك استخدام الـ Generics في Kotlin؟',
      en: 'How do generics work in Kotlin?',
    },
    answer: {
      ar: 'Generics تُستخدم لتمكين الفئات والدوال من العمل مع أنواع متعددة، مثل: `fun <T> printList(list: List<T>) { ... }`.',
      en: '```kotlin\ninterface Repository<T : Entity> {\n    suspend fun findById(id: String): T?\n    suspend fun save(item: T)\n}\n\nfun <T> List<T>.secondOrNull(): T? = if (size >= 2) this[1] else null\n```\n\nKotlin adds declaration-site variance, which Java lacks:\n• `out T` — the type is only produced (covariant), so `List<Dog>` is a `List<Animal>`.\n• `in T` — the type is only consumed (contravariant).\n\nThat is why Kotlin\'s read-only List is covariant while MutableList is not — and it removes most of the wildcard noise Java requires. Like Java, generics are erased at runtime, unless you use an inline function with a `reified` parameter.',
    },
  },
  {
    id: 'kotlin-24-what-are-object-expressions',
    difficulty: intermediate,
    question: {
      ar: 'ما هو مفهوم الـ Object Expressions في Kotlin؟',
      en: 'What are object expressions and declarations in Kotlin?',
    },
    answer: {
      ar: 'Object Expressions تُستخدم لإنشاء كائنات جديدة بسرعة دون الحاجة إلى تعريف فئة جديدة.',
      en: 'The `object` keyword serves two purposes.\n\nAn object expression creates an anonymous instance on the spot — Kotlin\'s equivalent of a Java anonymous class:\n```kotlin\nval listener = object : ClickListener {\n    override fun onClick() { submit() }\n}\n```\n\nAn object declaration creates a singleton:\n```kotlin\nobject AppConfig {\n    val apiUrl = BuildConfig.API_URL\n    fun isDebug() = BuildConfig.DEBUG\n}\n```\n\nThe singleton is thread-safe and initialised lazily on first access. It is convenient, but shared global state is still shared global state — for anything with dependencies, constructor injection is easier to test.',
    },
  },
  {
    id: 'kotlin-25-how-do-you-work',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك التعامل مع الـ Collections في Kotlin؟',
      en: 'How do you work with collections in Kotlin?',
    },
    answer: {
      ar: 'يمكن استخدام `List` و`Set` و`Map` لإدارة المجموعات، ويمكن استخدام دوال مثل `filter` و`map` للتلاعب بها.',
      en: '```kotlin\nval list = listOf(1, 2, 3)              // read-only\nval set = setOf("a", "b")\nval map = mapOf("key" to "value")\nval mutable = mutableListOf<Int>()\n\nusers.filter { it.isActive }\n     .sortedBy { it.name }\n     .map { it.email }\n     .take(10)\n\nusers.associateBy { it.id }             // List -> Map keyed by id\nusers.partition { it.isActive }         // split into two lists\n```\n\nOne performance note: these operations are eager, so each step creates a new collection. For long chains over large data, `asSequence()` makes them lazy and processes each element through the whole chain once — much like Java streams.',
    },
  },
  {
    id: 'kotlin-26-what-is-the-difference',
    difficulty: beginner,
    question: {
      ar: 'ما هي الفروق بين `val` و`var` في Kotlin؟',
      en: 'What is the difference between val and var in Kotlin?',
    },
    answer: {
      ar: '`val` تُستخدم لتعريف متغيرات ثابتة لا يمكن تغييرها، بينما `var` تُستخدم لتعريف متغيرات قابلة للتغيير.',
      en: '`val` declares a read-only reference that cannot be reassigned; `var` declares a mutable one.\n\n```kotlin\nval name = "Sara"\nname = "Ali"              // compile error\n\nval items = mutableListOf(1, 2)\nitems.add(3)              // allowed — the reference is fixed, the object is not\n```\n\nThat distinction matters: `val` is about the binding, not deep immutability. The convention is to reach for `val` by default and only use `var` where reassignment is genuinely required — it makes mutable state visible in review and eliminates a category of bugs.',
    },
  },
  {
    id: 'kotlin-27-what-is-unit-in',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك استخدام الـ Unit في Kotlin؟',
      en: 'What is Unit in Kotlin?',
    },
    answer: {
      ar: 'Unit يُستخدم للدلالة على دالة لا تُعيد قيمة، وهو مكافئ لـ `void` في Java.',
      en: 'Unit is the type of a function that returns no meaningful value — the equivalent of `void` in Java, with one difference: Unit is a real type with a single instance, so it can be used as a generic type argument.\n\n```kotlin\nfun log(message: String): Unit { println(message) }\nfun log(message: String) { println(message) }        // Unit is implicit\n\nval callback: (String) -> Unit = { println(it) }\n```\n\nBeing a real type is what allows `(String) -> Unit` as a function type, which `void` could not express. Its relatives are Nothing, the type of an expression that never completes normally, and Any, the root of the type hierarchy.',
    },
  },
  {
    id: 'kotlin-28-what-is-operator-overloading',
    difficulty: advanced,
    question: {
      ar: 'ما هو مفهوم الـ Operator Overloading في Kotlin؟',
      en: 'What is operator overloading in Kotlin?',
    },
    answer: {
      ar: 'Operator Overloading يُستخدم لتعريف سلوك خاص لمشغل معين عند استخدامه مع كائنات من فئات مخصصة.',
      en: 'Kotlin lets you define how operators behave for your own types by implementing specially named functions marked `operator`:\n\n```kotlin\ndata class Money(val amount: BigDecimal, val currency: String) {\n    operator fun plus(other: Money): Money {\n        require(currency == other.currency)\n        return copy(amount = amount + other.amount)\n    }\n\n    operator fun compareTo(other: Money): Int = amount.compareTo(other.amount)\n}\n\nval total = price + tax\nif (total > budget) { }\n```\n\nUnlike some languages, the set of overloadable operators is fixed and each maps to a known name — plus, minus, times, get, set, invoke, contains, compareTo, rangeTo.\n\nThe guidance is to use it only where the meaning is obvious. `Money + Money` reads naturally; an operator that does something unexpected makes code harder to read, not easier.',
    },
  },
];
