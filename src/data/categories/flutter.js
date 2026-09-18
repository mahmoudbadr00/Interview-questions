// data/categories/flutter.js
import { DIFFICULTY } from '../difficulty.js';

const { beginner, intermediate, advanced } = DIFFICULTY;

export const flutter = [
  {
    id: 'flutter-1-what-is-flutter',
    difficulty: beginner,
    question: {
      ar: 'ما هو Flutter؟',
      en: 'What is Flutter?',
    },
    answer: {
      ar: ': Flutter هو إطار عمل مفتوح المصدر تم تطويره بواسطة Google لتطوير تطبيقات متوافقة مع الأنظمة المتعددة (Cross-platform) مثل Android و iOS باستخدام قاعدة كود واحدة فقط. يعتمد على لغة البرمجة Dart ويتيح للمطورين إنشاء واجهات مستخدم (UI) عالية الأداء.',
      en: 'Flutter is an open-source framework from Google for building cross-platform applications — Android, iOS, web and desktop — from a single codebase. It uses the Dart language and renders high-performance user interfaces.\n\nWhat distinguishes it from other cross-platform toolkits is that it does not wrap native components: it draws every pixel itself through its own rendering engine, which is why the UI looks and behaves identically across platforms.',
    },
  },
  {
    id: 'flutter-2-what-is-dart-and',
    difficulty: beginner,
    question: {
      ar: 'ما هي لغة Dart؟ ولماذا تُستخدم مع Flutter؟',
      en: 'What is Dart, and why is it used with Flutter?',
    },
    answer: {
      ar: ' Dart هي لغة برمجة كائنية التوجه تم تطويرها بواسطة Google. تُستخدم مع Flutter لأنها بسيطة وسريعة، وتدعم ميزات مثل التجميع المسبق (AOT) والترجمة الفورية (JIT)، مما يسهم في تسريع عمليات التطوير والأداء. كما أنها تتيح ميزة Hot Reload، التي تسهم في تجربة تطوير سلسة.',
      en: 'Dart is an object-oriented language developed by Google. It suits Flutter because it is simple and fast, and supports both ahead-of-time (AOT) and just-in-time (JIT) compilation, which speeds up both development and runtime performance. JIT is what makes Hot Reload possible, while AOT produces fast native release builds.\n\nIt also has sound null safety and a single-threaded isolate model, which avoids the shared-memory concurrency problems common in UI frameworks.',
    },
  },
  {
    id: 'flutter-3-what-is-the-difference',
    difficulty: beginner,
    question: {
      ar: 'ما هو الفرق بين StatefulWidget و StatelessWidget؟',
      en: 'What is the difference between StatefulWidget and StatelessWidget?',
    },
    answer: {
      ar: 'StatelessWidget يُستخدم لإنشاء واجهات مستخدم ثابتة (غير متغيرة). إذا لم تتغير البيانات أو الحالة، يُفضل استخدام هذا النوع. StatefulWidget يُستخدم لإنشاء واجهات يمكن أن تتغير مع مرور الوقت بناءً على التفاعلات مع المستخدم أو تغيرات الحالة (state).',
      en: 'StatelessWidget is for UI that does not change once built — if the data and state are fixed, this is the right choice.\n\nStatefulWidget is for UI that changes over time in response to user interaction or state updates.\n\nThe practical guidance is to default to StatelessWidget and only reach for StatefulWidget when the widget genuinely owns mutable state. Widgets that merely display data passed from a parent should be stateless, which makes them cheaper to rebuild and easier to reason about.',
    },
  },
  {
    id: 'flutter-4-what-is-hot-reload',
    difficulty: beginner,
    question: {
      ar: 'ما هو Hot Reload؟ وما هو الفرق بينه وبين Hot Restart؟',
      en: 'What is Hot Reload, and how does it differ from Hot Restart?',
    },
    answer: {
      ar: 'Hot Reload يُستخدم لإعادة تحميل تغييرات الكود مباشرة في التطبيق دون إعادة تشغيله بالكامل، مما يساعد في رؤية التغييرات بسرعة دون فقدان الحالة الحالية. Hot Restart يُعيد تشغيل التطبيق بالكامل، مما يعني فقدان الحالة الحالية وإعادة تحميل جميع البيانات من البداية.',
      en: 'Hot Reload injects changed code into the running application without restarting it, so you see the result immediately while keeping the current state.\n\nHot Restart restarts the application entirely, which loses state and rebuilds everything from scratch.\n\nHot Reload does not apply to everything: changes to global variables, static fields, the main() function or the shape of a class require a Hot Restart. Understanding which is which saves a lot of confusion about why a change "did not take".',
    },
  },
  {
    id: 'flutter-5-what-are-the-advantages',
    difficulty: beginner,
    question: {
      ar: 'ما هي مزايا استخدام Flutter؟',
      en: 'What are the advantages of using Flutter?',
    },
    answer: {
      ar: 'تطوير متعدد الأنظمة باستخدام قاعدة كود واحدة. أداء عالي بفضل الترجمة المسبقة AOT. دعم واجهات مستخدم معقدة ومتجاوبة. تحديثات سريعة عبر Hot Reload. مكتبة كبيرة من الـWidgets المتكاملة.',
      en: '• Cross-platform development from a single codebase.\n• Strong performance thanks to AOT compilation to native code.\n• Support for complex, highly customised interfaces.\n• Rapid iteration through Hot Reload.\n• A large library of built-in widgets.\n\nThe trade-offs worth acknowledging: application binaries are larger than native equivalents because the engine ships with them, and anything requiring a platform-specific API needs a plugin or a platform channel.',
    },
  },
  {
    id: 'flutter-6-what-is-the-difference',
    difficulty: beginner,
    question: {
      ar: 'ما هو الفرق بين mainAxisAlignment و crossAxisAlignment؟',
      en: 'What is the difference between mainAxisAlignment and crossAxisAlignment?',
    },
    answer: {
      ar: 'mainAxisAlignment يتحكم في محاذاة العناصر على المحور الرئيسي (عادةً العمودي في الأعمدة أو الأفقي في الصفوف). crossAxisAlignment يتحكم في محاذاة العناصر على المحور العرضي (المعاكس للمحور الرئيسي).',
      en: 'mainAxisAlignment controls alignment along the main axis — vertical in a Column, horizontal in a Row.\n\ncrossAxisAlignment controls alignment along the perpendicular axis.\n\nThe confusion people hit is that the axes swap when you change from Row to Column, so the same property suddenly affects a different direction. A useful check: the main axis is always the direction the widget lays its children out in.',
    },
  },
  {
    id: 'flutter-7-what-is-the-difference',
    difficulty: beginner,
    question: {
      ar: 'ما هو الفرق بين Future و Stream في Dart؟',
      en: 'What is the difference between Future and Stream in Dart?',
    },
    answer: {
      ar: 'Future يُستخدم للتعامل مع القيم التي ستصبح متاحة في المستقبل (نتيجة عملية غير متزامنة). Stream يُستخدم للتعامل مع مجموعة من القيم التي يتم إصدارها بمرور الوقت (مثل البيانات المستمرة أو الأحداث).',
      en: 'A Future represents a single value that will be available later — the result of one asynchronous operation.\n\nA Stream represents a sequence of values delivered over time, such as continuous data or a series of events.\n\nThe simple way to frame it: Future is one result, Stream is many. A network request that returns once is a Future; a WebSocket connection, location updates or a Firestore query that keeps emitting changes is a Stream. Their UI counterparts are FutureBuilder and StreamBuilder respectively.',
    },
  },
  {
    id: 'flutter-8-how-do-you-work',
    difficulty: intermediate,
    question: {
      ar: 'كيف يمكن التعامل مع البيانات باستخدام Firebase في Flutter؟',
      en: 'How do you work with Firebase in Flutter?',
    },
    answer: {
      ar: 'يمكن استخدام مكتبة firebase_core لإعداد Firebase، ومكتبة cloud_firestore للتفاعل مع قاعدة بيانات Firestore. من خلال Firebase، يمكن تخزين واسترجاع البيانات كما يمكن التعامل مع المصادقة وإشعارات الدفع.',
      en: 'You initialise Firebase with the firebase_core package, then add whichever services you need — cloud_firestore for the database, firebase_auth for authentication, firebase_messaging for push notifications.\n\n```dart\nawait Firebase.initializeApp(options: DefaultFirebaseOptions.currentPlatform);\n\nfinal snapshot = await FirebaseFirestore.instance\n    .collection(\'orders\')\n    .where(\'status\', isEqualTo: \'paid\')\n    .get();\n```\n\nThe FlutterFire CLI generates the platform configuration for you, which removes most of the historical setup friction. One thing to design for: Firestore security rules are the actual access control — client-side filtering is not security, since the client can request anything the rules allow.',
    },
  },
  {
    id: 'flutter-9-what-is-provider-and',
    difficulty: intermediate,
    question: {
      ar: 'ما هو Provider وكيف يعمل في Flutter؟',
      en: 'What is Provider and how does it work in Flutter?',
    },
    answer: {
      ar: 'Provider هو نظام إدارة حالة (State Management) بسيط يستخدم لتوفير البيانات للأجزاء المختلفة من التطبيق. يوفر نظامًا يعتمد على InheritedWidget لإتاحة البيانات أو الكائنات للتطبيق بأكمله بسهولة.',
      en: 'Provider is a straightforward state management solution that makes data available to different parts of the widget tree. It is built on InheritedWidget, wrapping it in a much friendlier API.\n\n```dart\nChangeNotifierProvider(\n  create: (_) => CartModel(),\n  child: MyApp(),\n);\n\n// reading it\nfinal total = context.watch<CartModel>().total;\ncontext.read<CartModel>().add(item);\n```\n\nThe distinction between `watch` and `read` matters: watch subscribes and rebuilds on change, read does not — so calling watch inside a button handler causes unnecessary rebuilds, and calling read in build means you miss updates.',
    },
  },
  {
    id: 'flutter-10-what-widgets-does-flutter',
    difficulty: beginner,
    question: {
      ar: 'ما هي الـWidgets التي توفرها Flutter لبناء واجهات المستخدم؟',
      en: 'What widgets does Flutter provide for building interfaces?',
    },
    answer: {
      ar: 'Flutter يوفر العديد من الـWidgets مثل: Container لإنشاء حاويات تحتوي على عناصر. Row/Column لترتيب العناصر أفقيًا أو عموديًا. ListView لعرض قائمة من العناصر. Stack لتكديس العناصر فوق بعضها البعض. GestureDetector للتفاعل مع اللمس أو الإيماءات.',
      en: 'Flutter ships a large widget catalogue, including:\n• Container — a box for layout, padding, decoration and constraints.\n• Row and Column — arranging children horizontally or vertically.\n• ListView — a scrollable list.\n• Stack — layering widgets on top of each other.\n• GestureDetector — responding to taps and gestures.\n\nThe underlying principle is that everything is a widget, including padding, alignment and even the app itself. That composition model is why Flutter trees get deep — you build behaviour by nesting small widgets rather than by setting many properties on one.',
    },
  },
  {
    id: 'flutter-11-how-do-you-handle',
    difficulty: beginner,
    question: {
      ar: 'كيف تتعامل مع التخزين المحلي في Flutter؟',
      en: 'How do you handle local storage in Flutter?',
    },
    answer: {
      ar: 'يمكن استخدام مكتبة shared_preferences لتخزين البيانات البسيطة مثل المفاتيح والقيم (key-value)، أو sqflite للتعامل مع قواعد البيانات المحلية SQLite.',
      en: 'It depends on what you are storing:\n• shared_preferences for simple key/value data such as settings and flags.\n• sqflite for a local SQLite database when you need queries and relationships.\n• Hive or Isar for fast local object storage.\n• flutter_secure_storage for tokens and credentials, which belong in the Keychain or Keystore rather than in plain preferences.\n\nThat last distinction matters: shared_preferences is not encrypted, so storing an authentication token there exposes it on a rooted or jailbroken device.',
    },
  },
  {
    id: 'flutter-12-how-do-you-call',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكن التعامل مع الـAPI في Flutter؟',
      en: 'How do you call an API in Flutter?',
    },
    answer: {
      ar: 'يمكن استخدام مكتبة http أو dio لإرسال الطلبات إلى واجهات برمجة التطبيقات (APIs). يتم ذلك عن طريق إرسال طلبات HTTP (GET, POST) واستخدام Future لانتظار النتائج ومعالجتها.',
      en: 'With the http package, or dio for more features:\n\n```dart\nfinal response = await http.get(\n  Uri.parse(\'https://api.example.com/products\'),\n  headers: {\'Authorization\': \'Bearer $token\'},\n).timeout(const Duration(seconds: 10));\n\nif (response.statusCode == 200) {\n  final data = jsonDecode(response.body) as List;\n  return data.map(Product.fromJson).toList();\n}\n```\n\nTwo practices worth stating: always set a timeout, because a request with no limit can hang indefinitely on a poor connection; and map the JSON into typed model classes rather than passing raw maps around, so a change in the API surfaces as a compile error rather than a runtime crash.',
    },
  },
  {
    id: 'flutter-13-what-is-the-difference',
    difficulty: intermediate,
    question: {
      ar: 'ما هو الفرق بين Expanded و Flexible في Flutter؟',
      en: 'What is the difference between Expanded and Flexible in Flutter?',
    },
    answer: {
      ar: 'Expanded يملأ المساحة المتاحة بالكامل على المحور الرئيسي. Flexible يعطي مرونة في ملء المساحة المتاحة بناءً على النسبة المحددة، دون تجاوز الحجم المتاح.',
      en: 'Expanded forces its child to fill all the remaining space along the main axis.\n\nFlexible allows the child to occupy available space according to its flex factor, but does not force it to fill everything — the child may be smaller.\n\nTechnically Expanded is Flexible with `fit: FlexFit.tight`, while Flexible defaults to `FlexFit.loose`. Use Expanded when you want the child to take the space; use Flexible when you want it to be allowed to, but no larger than its natural size.',
    },
  },
  {
    id: 'flutter-14-how-do-you-improve',
    difficulty: intermediate,
    question: {
      ar: 'كيف يمكن تحسين أداء تطبيقات Flutter؟',
      en: 'How do you improve the performance of a Flutter application?',
    },
    answer: {
      ar: 'استخدام الصور بحجم مناسب وتقليل حجم الموارد. تقليل إعادة بناء الواجهات غير الضرورية عن طريق استخدام const. استخدام Widgets مثل RepaintBoundary لتقليل إعادة الرسم. تقليل العمليات التي تعتمد على الـBuild باستخدام حلول مثل ValueNotifier أو Provider.',
      en: '• Use appropriately sized images and keep assets small.\n• Mark widgets `const` wherever possible so Flutter can skip rebuilding them.\n• Use RepaintBoundary to isolate frequently repainting areas.\n• Keep rebuilds narrow with ValueNotifier, Provider selectors or similar, instead of rebuilding a whole screen.\n• Use ListView.builder rather than ListView with a full children list, so only visible items are built.\n• Keep heavy computation out of build(), and move genuinely expensive work to an Isolate.\n\nAnd measure first: Flutter DevTools shows which widgets rebuild and where frame time goes, which is far more reliable than guessing.',
    },
  },
  {
    id: 'flutter-15-what-is-statefulbuilder-and',
    difficulty: intermediate,
    question: {
      ar: 'ما هي StatefulBuilder ولماذا تستخدم؟',
      en: 'What is StatefulBuilder and why would you use it?',
    },
    answer: {
      ar: 'StatefulBuilder تُستخدم لتحديث جزء معين من الـUI داخل StatefulWidget بدون إعادة بناء الـWidget بالكامل. تعتبر مفيدة لتحديث العناصر الصغيرة في الشاشات المعقدة دون التأثير على الأداء.',
      en: 'StatefulBuilder lets you update a specific part of the UI inside a StatefulWidget without rebuilding the whole widget. It provides a local setState scoped to its own builder.\n\nIts most common use is inside a dialog: a dialog is built by showDialog, which sits outside the parent\'s build method, so calling the parent\'s setState does not rebuild it. Wrapping the dialog content in StatefulBuilder gives it a setState that works.\n\nMore broadly, it is a lightweight way to confine a rebuild to a small region of a complex screen.',
    },
  },
  {
    id: 'flutter-16-how-do-you-create',
    difficulty: intermediate,
    question: {
      ar: 'كيف يمكن استخدام Animation في Flutter؟',
      en: 'How do you create animations in Flutter?',
    },
    answer: {
      ar: 'يمكن استخدام مكتبة animation الخاصة بـ Flutter لإنشاء تأثيرات الحركة. يتضمن ذلك استخدام AnimatedWidget وAnimationController لضبط الحركة والتوقيت، مما يتيح إنشاء انتقالات سلسة وجذابة.',
      en: 'Flutter\'s animation library covers everything from simple to fully custom. The controlled approach uses AnimationController with AnimatedWidget or AnimatedBuilder:\n\n```dart\nlate final AnimationController _controller = AnimationController(\n  duration: const Duration(milliseconds: 300),\n  vsync: this,\n);\n\n@override\nvoid dispose() {\n  _controller.dispose();      // essential\n  super.dispose();\n}\n```\n\nFor most cases the implicit widgets are enough — AnimatedContainer, AnimatedOpacity, AnimatedPositioned — where you simply change a value and Flutter animates between states.\n\nThe detail that catches people out is the controller\'s lifecycle: forgetting to dispose it leaks the ticker and keeps the animation running after the widget is gone.',
    },
  },
  {
    id: 'flutter-17-what-is-navigator-and',
    difficulty: beginner,
    question: {
      ar: 'ما هو Navigator وكيف يعمل في Flutter؟',
      en: 'What is Navigator and how does it work in Flutter?',
    },
    answer: {
      ar: 'Navigator هو أداة لإدارة تنقلات الصفحات داخل التطبيق. يسمح بالتنقل بين صفحات مختلفة باستخدام push لإضافة صفحة جديدة إلى المكدس وpop لإزالة الصفحة الحالية والعودة إلى الصفحة السابقة.',
      en: 'Navigator manages a stack of screens (routes). `push` adds a new screen to the stack and `pop` removes the current one to return to the previous.\n\n```dart\nNavigator.push(context, MaterialPageRoute(builder: (_) => DetailScreen(id: id)));\nNavigator.pop(context, result);      // a value can be returned to the caller\n```\n\nFor anything beyond a few screens, a declarative router such as go_router is the modern recommendation: it handles deep links, web URLs and nested navigation, which imperative pushes and pops make difficult to manage consistently.',
    },
  },
  {
    id: 'flutter-18-how-do-you-handle',
    difficulty: intermediate,
    question: {
      ar: 'كيف يتم التعامل مع الأخطاء في Flutter؟',
      en: 'How do you handle errors in Flutter?',
    },
    answer: {
      ar: 'يمكن التعامل مع الأخطاء باستخدام try-catch لتحديد ومعالجة الأخطاء غير المتزامنة. كما يمكن استخدام Flutter Error Widget لتقديم واجهة مستخدم بديلة عند حدوث خطأ في التطبيق.',
      en: 'At three levels:\n\n1. try/catch around asynchronous operations and anything that can fail:\n```dart\ntry {\n  final data = await api.fetch();\n} on SocketException {\n  showMessage(\'No connection\');\n} catch (e, stack) {\n  reportError(e, stack);\n}\n```\n\n2. ErrorWidget.builder to replace the default red error screen with something presentable in release builds.\n\n3. Global handlers — FlutterError.onError for framework errors and PlatformDispatcher.instance.onError for uncaught asynchronous ones — reporting to a service such as Crashlytics or Sentry.\n\nThe principle is the same as elsewhere: users should never see a stack trace, and every error should reach your monitoring rather than only the console.',
    },
  },
  {
    id: 'flutter-19-what-are-streams-and',
    difficulty: intermediate,
    question: {
      ar: 'ما هي الـStreams وكيف تُستخدم في Flutter؟',
      en: 'What are Streams and how are they used in Flutter?',
    },
    answer: {
      ar: 'الـStreams تسمح بالتعامل مع تدفقات البيانات المستمرة، مثل البيانات الواردة من الشبكة. يمكن استخدام StreamBuilder لبناء واجهات تتفاعل مع تدفقات البيانات بشكل ديناميكي.',
      en: 'Streams handle continuous flows of data, such as values arriving from the network or a database. StreamBuilder renders UI that reacts to them:\n\n```dart\nStreamBuilder<List<Message>>(\n  stream: chatRepository.messages(roomId),\n  builder: (context, snapshot) {\n    if (snapshot.hasError) return ErrorView(snapshot.error!);\n    if (!snapshot.hasData) return const CircularProgressIndicator();\n    return MessageList(snapshot.data!);\n  },\n)\n```\n\nTwo things to get right: cancel subscriptions in dispose() when you subscribe manually, or you leak; and distinguish single-subscription streams from broadcast streams — listening twice to a single-subscription stream throws.',
    },
  },
  {
    id: 'flutter-20-what-is-the-difference',
    difficulty: beginner,
    question: {
      ar: 'ما هو الفرق بين setState() و StatefulWidget؟',
      en: 'What is the difference between setState() and StatefulWidget?',
    },
    answer: {
      ar: 'setState() هي طريقة تُستخدم داخل StatefulWidget لتحديث حالة الواجهة (State) وإعادة بناء الواجهة بناءً على التغييرات. بينما StatefulWidget هو نوع من الـ Widgets يمكن أن يحتوي على حالة (State) تتغير خلال مدة حياة التطبيق.',
      en: 'StatefulWidget is a kind of widget that can hold state which changes over its lifetime. setState() is the method inside its State object that updates that state and tells Flutter to rebuild.\n\nThe relationship is that StatefulWidget is the container and setState is the mechanism for signalling a change.\n\nThe part people get wrong is that mutating a field without calling setState changes the data but never updates the UI — Flutter has no way to know something changed. And the work should happen before setState; the callback itself should only assign the new values.',
    },
  },
  {
    id: 'flutter-21-how-do-you-navigate',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك تنفيذ Navigation بين الشاشات في Flutter؟',
      en: 'How do you navigate between screens in Flutter?',
    },
    answer: {
      ar: 'يمكن استخدام Navigator للتنقل بين الشاشات. يتم استخدام Navigator.push للانتقال إلى صفحة جديدة وNavigator.pop للعودة إلى الصفحة السابقة.',
      en: '```dart\n// go to a new screen\nNavigator.push(\n  context,\n  MaterialPageRoute(builder: (_) => const ProfileScreen()),\n);\n\n// come back\nNavigator.pop(context);\n\n// named routes\nNavigator.pushNamed(context, \'/profile\', arguments: userId);\n```\n\nNamed routes keep navigation declarations in one place, which scales better than scattering MaterialPageRoute constructors through the codebase. For applications with deep links, web support or nested navigation, go_router is the current recommendation.',
    },
  },
  {
    id: 'flutter-22-what-is-the-difference',
    difficulty: intermediate,
    question: {
      ar: 'ما هو الفرق بين pushReplacement و pushAndRemoveUntil؟',
      en: 'What is the difference between pushReplacement and pushAndRemoveUntil?',
    },
    answer: {
      ar: 'pushReplacement يحل محل الشاشة الحالية بالشاشة الجديدة دون إمكانية العودة للشاشة السابقة. pushAndRemoveUntil يزيل جميع الشاشات في التكديس حتى يصل إلى شرط محدد، ثم يضيف الشاشة الجديدة.',
      en: 'pushReplacement swaps the current screen for a new one, so the user cannot go back to it.\n\npushAndRemoveUntil removes screens from the stack until a given condition is met, then pushes the new screen.\n\nWhere each is used: pushReplacement after login, so the back button does not return to the login form. pushAndRemoveUntil after completing a checkout flow, clearing every intermediate step so the user lands back at the home screen rather than stepping back through a completed purchase.\n\n```dart\nNavigator.pushAndRemoveUntil(context, route, (r) => r.isFirst);\n```',
    },
  },
  {
    id: 'flutter-23-how-does-inheritedwidget-work',
    difficulty: advanced,
    question: {
      ar: 'كيف تعمل InheritedWidget في Flutter؟',
      en: 'How does InheritedWidget work in Flutter?',
    },
    answer: {
      ar: 'InheritedWidget هو Widget يُستخدم لمشاركة البيانات عبر شجرة Widgets بشكل فعال. عادةً ما يتم استخدامه مع إدارة الحالة للسماح للويدجتس الفرعية بالوصول إلى البيانات المشتركة دون الحاجة إلى تمرير البيانات يدويًا.',
      en: 'InheritedWidget efficiently shares data down the widget tree, letting descendants access it without it being passed manually through every constructor.\n\nWhat makes it efficient is the lookup: `context.dependOnInheritedWidgetOfExactType<T>()` is an O(1) operation because Flutter maintains a map of inherited widgets per element, rather than walking the tree. Widgets that read it are registered as dependents and rebuild only when `updateShouldNotify` returns true.\n\nYou rarely implement one directly — Provider, Riverpod and Theme are all built on it — but understanding it explains why `Theme.of(context)` is cheap, and why a widget rebuilds when a theme or locale changes.',
    },
  },
  {
    id: 'flutter-24-what-are-keys-in',
    difficulty: intermediate,
    question: {
      ar: 'ما هي الـKeys في Flutter وما فائدتها؟',
      en: 'What are Keys in Flutter and what are they for?',
    },
    answer: {
      ar: 'Keys تُستخدم لتحديد الـWidgets بطريقة فريدة، وهي مفيدة في الحالات التي يتم فيها إعادة بناء الـUI وتحتاج للتأكد من أن الـWidgets تُعاد بناءً بشكل صحيح دون فقد البيانات أو الحالة.',
      en: 'Keys give widgets a stable identity, which matters when the tree is rebuilt and Flutter needs to decide which new widget corresponds to which old element.\n\nWithout them, Flutter matches by type and position. That is fine for static layouts but breaks for dynamic lists: reorder or remove an item and state ends up attached to the wrong widget — a typed value jumps to a different row, or an animation restarts unexpectedly.\n\n```dart\nListView(children: items.map((i) => ItemTile(key: ValueKey(i.id), item: i)).toList())\n```\n\nThe rule is the same as React\'s: use a key derived from the data\'s identity, not from its index.',
    },
  },
  {
    id: 'flutter-25-what-is-a-globalkey',
    difficulty: advanced,
    question: {
      ar: 'ما هو GlobalKey ومتى تستخدمه؟',
      en: 'What is a GlobalKey and when do you use it?',
    },
    answer: {
      ar: 'GlobalKey يسمح بالوصول إلى حالة Widget محددة من أي مكان في التطبيق، ويُستخدم عندما تحتاج إلى التحكم في الـWidget أو الوصول إلى الحالة (State) خارج شجرة الـWidgets.',
      en: 'A GlobalKey gives access to a specific widget\'s state, element or render object from anywhere in the application — outside its own subtree.\n\nThe legitimate uses are narrow: validating a form with `_formKey.currentState!.validate()`, measuring a widget\'s size through its RenderBox, or controlling a ScaffoldState or NavigatorState from code.\n\nThe cautions are real: a GlobalKey must be unique across the entire tree, creating one inside build() defeats its purpose because a new key means a new identity, and reaching into another widget\'s state is a coupling smell. Prefer callbacks or shared state unless you specifically need the imperative access.',
    },
  },
  {
    id: 'flutter-26-how-do-you-work',
    difficulty: intermediate,
    question: {
      ar: 'كيف يمكن التعامل مع الرسوم المتحركة (Animations) في Flutter؟',
      en: 'How do you work with animations in Flutter in practice?',
    },
    answer: {
      ar: 'Flutter يحتوي على مكتبة قوية للرسوم المتحركة. يمكنك استخدام AnimationController وTween لإنشاء رسوم متحركة. هناك أيضًا Widgets جاهزة مثل AnimatedContainer وHero للرسوم الانتقالية.',
      en: 'Flutter provides a capable animation system with several levels of control:\n\n• Implicit animations — AnimatedContainer, AnimatedOpacity, AnimatedAlign. You change a value, Flutter animates between the old and new state. Simplest and sufficient for most UI.\n• Explicit animations — AnimationController with Tween, when you need to control playback, reverse, repeat or sequence.\n• Hero, for a shared-element transition between screens.\n\n```dart\nfinal animation = Tween<double>(begin: 0, end: 1).animate(\n  CurvedAnimation(parent: controller, curve: Curves.easeOut),\n);\n```\n\nTwo practical notes: dispose controllers to avoid leaks, and respect the platform\'s reduce-motion setting through MediaQuery.disableAnimations.',
    },
  },
  {
    id: 'flutter-27-what-is-futurebuilder-and',
    difficulty: intermediate,
    question: {
      ar: 'ما هو FutureBuilder وكيف يُستخدم؟',
      en: 'What is FutureBuilder and how is it used?',
    },
    answer: {
      ar: 'FutureBuilder هو Widget يُستخدم للتعامل مع البيانات غير المتزامنة (async). يُبنى على نتيجة Future، ويسمح لك بعرض البيانات عندما تكون جاهزة أو عرض واجهة تحميل أثناء انتظار البيانات.',
      en: 'FutureBuilder builds UI from the result of an asynchronous operation, handling the waiting, success and error states in one place:\n\n```dart\nFutureBuilder<User>(\n  future: _userFuture,          // created in initState, not in build\n  builder: (context, snapshot) {\n    if (snapshot.connectionState != ConnectionState.done) {\n      return const CircularProgressIndicator();\n    }\n    if (snapshot.hasError) return ErrorView(snapshot.error!);\n    return UserProfile(snapshot.data!);\n  },\n)\n```\n\nThe most common mistake is creating the Future inline in build(). Every rebuild then starts a new request, producing an endless loop of fetches. Create it once — in initState or a state management layer — and pass the same instance.',
    },
  },
  {
    id: 'flutter-28-what-is-the-difference',
    difficulty: beginner,
    question: {
      ar: 'ما هو الفرق بين FutureBuilder و StreamBuilder؟',
      en: 'What is the difference between FutureBuilder and StreamBuilder?',
    },
    answer: {
      ar: 'FutureBuilder يُستخدم عند التعامل مع Future، أي نتيجة واحدة تنتظر حدوثها. StreamBuilder يُستخدم عند التعامل مع Stream، حيث يمكن الحصول على عدة أحداث أو قيم بمرور الوقت.',
      en: 'FutureBuilder is for a Future — a single result you wait for once.\n\nStreamBuilder is for a Stream — multiple values or events arriving over time.\n\nSo a one-off API call uses FutureBuilder, while a live chat, a Firestore query with real-time updates, or a location feed uses StreamBuilder.\n\nBoth share the same snapshot API for connection state, data and errors, so the code shape is similar. The choice follows from the data source: if it can emit more than once, you need StreamBuilder.',
    },
  },
  {
    id: 'flutter-29-how-do-you-implement',
    difficulty: intermediate,
    question: {
      ar: 'كيف تتعامل مع تعدد اللغات (Localization) في تطبيق Flutter؟',
      en: 'How do you implement localization in a Flutter application?',
    },
    answer: {
      ar: 'يمكن استخدام مكتبة intl وflutter_localizations لدعم تعدد اللغات في Flutter. يتم إنشاء ملفات لغة (.arb) لكل لغة ويتم تحديد الترجمة بناءً على لغة الجهاز أو اللغة التي يختارها المستخدم.',
      en: 'With the intl package and flutter_localizations. You define an .arb file per language, and the tooling generates a typed accessor class:\n\n```dart\nMaterialApp(\n  localizationsDelegates: AppLocalizations.localizationsDelegates,\n  supportedLocales: AppLocalizations.supportedLocales,\n  home: const HomeScreen(),\n);\n\nText(AppLocalizations.of(context)!.welcomeMessage);\n```\n\nThe locale follows the device by default and can be overridden by the user.\n\nBeyond strings, two things matter: pluralisation rules differ by language — Arabic has six forms — so use the ICU plural syntax rather than an if statement; and right-to-left languages need direction handling, though Flutter does most of that automatically if you use EdgeInsetsDirectional and start/end alignment instead of left/right.',
    },
  },
  {
    id: 'flutter-30-how-do-constraints-work',
    difficulty: advanced,
    question: {
      ar: 'ما هي القيود (Constraints) في Flutter؟',
      en: 'How do constraints work in Flutter?',
    },
    answer: {
      ar: 'القيود في Flutter تُحدد كيف يمكن للـWidgets أن تُحَدّد أبعادها وموقعها. يعتمد كل Widget على القيود القادمة من الـParent لتحديد حجمه وموقعه داخل الشجرة.',
      en: 'Constraints determine how widgets size and position themselves. The rule Flutter\'s layout is built on is: constraints go down, sizes go up, and the parent sets the position.\n\nA parent passes minimum and maximum width and height to its child; the child chooses a size within those bounds; the parent then places it.\n\nThis explains most layout surprises. A widget cannot be any size it likes — if a parent imposes tight constraints, the child\'s own width property is ignored. It is also why "unbounded constraints" errors appear when you put a ListView inside a Column without an Expanded: the Column offers infinite height and the ListView cannot decide how tall to be.\n\nLayoutBuilder is the escape hatch when a widget genuinely needs to know its constraints to decide what to build.',
    },
  },
  {
    id: 'flutter-31-what-is-bloc-and',
    difficulty: intermediate,
    question: {
      ar: 'ما هو Bloc وكيف يعمل في Flutter؟',
      en: 'What is BLoC and how does it work in Flutter?',
    },
    answer: {
      ar: 'Bloc (Business Logic Component) هو نمط إدارة حالة شائع في Flutter. يستخدم Streams للتفاعل مع الواجهة والبيانات، حيث يتم فصل منطق الأعمال عن واجهة المستخدم، مما يسهل اختبار الكود وإعادة استخدامه.',
      en: 'BLoC (Business Logic Component) is a widely used state management pattern. It uses streams to connect the UI and the data layer, separating business logic from presentation, which makes code easier to test and reuse.\n\nThe flow is unidirectional: the UI dispatches an event, the BLoC processes it and emits a new state, and the UI rebuilds from that state.\n\n```dart\nclass CartBloc extends Bloc<CartEvent, CartState> {\n  CartBloc() : super(CartInitial()) {\n    on<ItemAdded>((event, emit) => emit(CartUpdated(...)));\n  }\n}\n```\n\nIts strengths are testability — the logic is a pure event-to-state function — and predictability in large applications. Its cost is boilerplate, which is why smaller apps often prefer Provider or Riverpod. Cubit is the lighter variant in the same package, without explicit events.',
    },
  },
  {
    id: 'flutter-32-how-do-you-reduce',
    difficulty: intermediate,
    question: {
      ar: 'كيف يمكنك تحسين كفاءة استهلاك الذاكرة في تطبيق Flutter؟',
      en: 'How do you reduce memory usage in a Flutter application?',
    },
    answer: {
      ar: 'استخدام الـWidgets الثابتة const عندما لا تحتاج إلى إعادة بناء الـWidget. تحرير الموارد غير الضرورية مثل الصور أو الصوت بعد الانتهاء منها. تقليل استخدام العمليات الحسابية الثقيلة داخل Widgets مثل الـBuild.',
      en: '• Use `const` constructors wherever possible, so widgets are created once and reused rather than reallocated on every build.\n• Release resources when finished with them — dispose controllers, close streams, cancel timers, and free image or audio resources.\n• Keep heavy computation out of build(), which runs far more often than people expect.\n• Use ListView.builder and similar lazy constructors so only visible items exist.\n• Cache and size images appropriately; a full-resolution photo displayed as a thumbnail still decodes at full size unless you set cacheWidth.\n\nImages are usually the largest contributor, and Flutter DevTools\' memory view makes it straightforward to confirm that before optimising anything else.',
    },
  },
  {
    id: 'flutter-33-how-do-you-catch',
    difficulty: intermediate,
    question: {
      ar: 'كيف تتعامل مع الأخطاء في Flutter؟',
      en: 'How do you catch unhandled errors in Flutter?',
    },
    answer: {
      ar: 'يمكن استخدام try-catch لالتقاط الأخطاء وإدارتها. كما يمكنك استخدام أدوات مثل FlutterError.onError لالتقاط الأخطاء غير المتوقعة والإبلاغ عنها.',
      en: 'try/catch handles errors you anticipate at the call site. For the rest, Flutter provides global hooks:\n\n```dart\nvoid main() {\n  FlutterError.onError = (details) {\n    FlutterError.presentError(details);\n    Crashlytics.recordFlutterError(details);\n  };\n\n  PlatformDispatcher.instance.onError = (error, stack) {\n    Crashlytics.recordError(error, stack);\n    return true;\n  };\n\n  runApp(const MyApp());\n}\n```\n\nFlutterError.onError covers errors raised inside the framework, typically during build or layout, while PlatformDispatcher.onError catches uncaught asynchronous errors. Wiring both to a crash reporting service is the difference between knowing what breaks in production and guessing.',
    },
  },
  {
    id: 'flutter-34-what-is-the-difference',
    difficulty: beginner,
    question: {
      ar: 'ما هو الفرق بين Spacer و Expanded؟',
      en: 'What is the difference between Spacer and Expanded?',
    },
    answer: {
      ar: 'Spacer يُستخدم لإنشاء مساحة فارغة بين Widgets. Expanded يسمح بتوسيع Widget داخل Row أو Column لملء المساحة المتاحة.',
      en: 'Spacer creates flexible empty space between widgets.\n\nExpanded makes a widget fill the available space inside a Row or Column.\n\nIn fact Spacer is implemented as an Expanded wrapping an empty SizedBox, so they are closely related. Use Spacer when you want to push widgets apart, and Expanded when you want a widget itself to grow. For simple cases, MainAxisAlignment.spaceBetween often achieves the same result more clearly than inserting Spacers.',
    },
  },
  {
    id: 'flutter-35-how-do-you-display',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك تحميل الصور في تطبيق Flutter؟',
      en: 'How do you display images in a Flutter application?',
    },
    answer: {
      ar: 'يمكن تحميل الصور باستخدام Image.asset للصور المحلية وImage.network للصور المستضافة على الإنترنت. يمكن أيضًا تحميل الصور من مصادر أخرى باستخدام مكتبات مثل cached_network_image.',
      en: '```dart\nImage.asset(\'assets/logo.png\');                      // bundled with the app\nImage.network(\'https://example.com/photo.jpg\');       // remote\nImage.file(file);                                     // from the device\nImage.memory(bytes);                                  // from raw bytes\n```\n\nAssets must be declared in pubspec.yaml before Image.asset can find them, which is the usual first stumbling block.\n\nFor network images, cached_network_image is worth adding: it caches to disk, provides placeholder and error widgets, and avoids re-downloading the same image every time it scrolls back into view.',
    },
  },
  {
    id: 'flutter-36-what-is-cliprrect-and',
    difficulty: beginner,
    question: {
      ar: 'ما هو ClipRRect؟ ومتى يُستخدم؟',
      en: 'What is ClipRRect and when do you use it?',
    },
    answer: {
      ar: 'ClipRRect هو Widget يُستخدم لتطبيق تأثير القص مع زوايا مدورة على الـWidget. يتم استخدامه عندما تحتاج إلى قص صورة أو أي عنصر آخر ضمن حواف معينة.',
      en: 'ClipRRect clips its child to rounded corners:\n\n```dart\nClipRRect(\n  borderRadius: BorderRadius.circular(12),\n  child: Image.network(url, fit: BoxFit.cover),\n)\n```\n\nIt is most often used for images, because an Image cannot round its own corners — a Container\'s borderRadius clips its decoration but not an image child.\n\nA performance note: clipping is not free, and Flutter must composite an extra layer. For a simple rounded rectangle over a solid colour, a Container with a BoxDecoration is cheaper. Reserve ClipRRect for cases where you genuinely need to clip content.',
    },
  },
  {
    id: 'flutter-37-what-is-the-lifecycle',
    difficulty: beginner,
    question: {
      ar: 'ما هي حالات دورة حياة StatefulWidget؟',
      en: 'What is the lifecycle of a StatefulWidget?',
    },
    answer: {
      ar: 'أهم الحالات هي: initState(): تُستدعى عند إنشاء الـWidget لأول مرة. build(): تُبنى الـUI في كل مرة يتم استدعاء setState(). dispose(): تُستدعى عندما يتم إزالة الـWidget من الشجرة.',
      en: 'The main callbacks:\n• initState() — called once when the State is created. The right place for controllers, subscriptions and initial data loading.\n• didChangeDependencies() — after initState and whenever an inherited dependency changes.\n• build() — called every time the widget needs to render, including after every setState.\n• didUpdateWidget() — when the parent rebuilds with new configuration.\n• dispose() — when the widget is removed from the tree permanently.\n\nThe two rules that matter: never call setState in initState — just assign the value directly — and treat dispose() as mandatory for anything you created in initState. A controller or stream subscription left undisposed is a memory leak and a common source of "setState called after dispose" errors.',
    },
  },
  {
    id: 'flutter-38-how-do-you-use',
    difficulty: intermediate,
    question: {
      ar: 'كيف يمكن استخدام قواعد بيانات NoSQL مثل Firebase Firestore في Flutter؟',
      en: 'How do you use Firebase Firestore in Flutter?',
    },
    answer: {
      ar: 'يمكن استخدام مكتبة cloud_firestore للتفاعل مع Firebase Firestore. يتم استرداد البيانات باستخدام أساليب مثل get وstream، ويتم تحديث البيانات باستخدام أساليب set, update, وdelete.',
      en: 'Through the cloud_firestore package. Data is read with get() for a one-off fetch or snapshots() for a live stream, and written with set, update and delete:\n\n```dart\n// live updates\nStreamBuilder<QuerySnapshot>(\n  stream: FirebaseFirestore.instance\n      .collection(\'tasks\')\n      .where(\'userId\', isEqualTo: uid)\n      .orderBy(\'createdAt\', descending: true)\n      .snapshots(),\n  builder: ...,\n);\n\nawait doc.update({\'status\': \'done\'});\n```\n\nTwo things to plan for: Firestore charges per document read, so an unbounded query that streams thousands of documents is expensive as well as slow — always constrain with where and limit. And composite queries require an index, which Firestore will tell you about with a link the first time you run them.',
    },
  },
  {
    id: 'flutter-39-what-architectural-patterns-are',
    difficulty: intermediate,
    question: {
      ar: 'ما هي أنماط التصميم الشائعة التي يمكن استخدامها مع Flutter؟',
      en: 'What architectural patterns are commonly used with Flutter?',
    },
    answer: {
      ar: 'MVC (Model-View-Controller): فصل واجهة المستخدم عن البيانات والمنطق. MVVM (Model-View-ViewModel): استخدام ViewModel لربط البيانات والواجهة. Bloc: استخدام Streams لإدارة الحالة بشكل فعال.',
      en: '• MVC (Model-View-Controller) — separating the UI from data and logic.\n• MVVM (Model-View-ViewModel) — a ViewModel mediating between data and the view.\n• BLoC — streams managing state with a strict unidirectional flow.\n\nIn practice most Flutter teams converge on a layered structure regardless of the label: a presentation layer of widgets, a state management layer (BLoC, Riverpod or Provider), a domain layer of use cases, and a data layer of repositories talking to APIs and local storage.\n\nThe principle that matters more than the acronym is that widgets should contain no business logic. A widget that decides tax rates is untestable without rendering it; the same logic in a plain Dart class is tested in milliseconds.',
    },
  },
  {
    id: 'flutter-40-how-do-you-create',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكن إنشاء Drawer في Flutter؟',
      en: 'How do you create a Drawer in Flutter?',
    },
    answer: {
      ar: 'يتم استخدام Widget Drawer داخل Scaffold لإنشاء قائمة جانبية يمكن فتحها وإغلاقها. يتم وضع القائمة داخل خاصية drawer لـ Scaffold.',
      en: 'By passing a Drawer widget to Scaffold\'s `drawer` property:\n\n```dart\nScaffold(\n  appBar: AppBar(title: const Text(\'Home\')),\n  drawer: Drawer(\n    child: ListView(\n      padding: EdgeInsets.zero,\n      children: [\n        const DrawerHeader(child: Text(\'Menu\')),\n        ListTile(title: const Text(\'Settings\'), onTap: () => ...),\n      ],\n    ),\n  ),\n  body: const HomeBody(),\n);\n```\n\nScaffold handles the hamburger icon, the swipe gesture and the animation automatically. Use `endDrawer` for one that opens from the opposite side — and note that Flutter mirrors the side correctly in right-to-left locales.',
    },
  },
  {
    id: 'flutter-41-how-do-you-handle',
    difficulty: intermediate,
    question: {
      ar: 'كيف تتعامل مع الصور الثقيلة لتحسين الأداء؟',
      en: 'How do you handle large images to improve performance?',
    },
    answer: {
      ar: 'يمكن استخدام مكتبة cached_network_image لتخزين الصور مؤقتًا على الجهاز وتقليل وقت التحميل في كل مرة يتم عرض الصورة. كما يُفضل تحميل الصور بالحجم المناسب وتقليل جودتها إذا كانت لا تؤثر على تجربة المستخدم.',
      en: '• Use cached_network_image to cache images on the device so they are not re-downloaded on every display.\n• Serve appropriately sized images rather than full-resolution originals — a 4000px photo shown in a 200px thumbnail wastes both bandwidth and memory.\n• Set cacheWidth or cacheHeight so Flutter decodes at the display size rather than the source size. This matters more than most people realise: decoded image memory is width × height × 4 bytes, regardless of the compressed file size.\n• Provide placeholders so layout does not shift while loading.\n• Consider WebP for smaller files at equivalent quality.\n\nImages are the most common cause of memory pressure in Flutter apps, so this is usually the first place to look.',
    },
  },
  {
    id: 'flutter-42-how-do-you-test',
    difficulty: intermediate,
    question: {
      ar: 'كيف يمكنك اختبار تطبيقات Flutter؟',
      en: 'How do you test a Flutter application?',
    },
    answer: {
      ar: 'Flutter يدعم أنواع متعددة من الاختبارات: Unit tests: لاختبار وحدات محددة مثل الدوال أو الكلاسات. Widget tests: لاختبار واجهات المستخدم Widgets. Integration tests: لاختبار التطبيق بالكامل معًا والتأكد من عمل كل شيء بشكل متكامل.',
      en: 'Flutter supports three levels:\n• Unit tests — for individual functions and classes.\n• Widget tests — for UI components, rendered in a test environment without a device.\n• Integration tests — for the whole application running end to end.\n\n```dart\ntestWidgets(\'shows the user name\', (tester) async {\n  await tester.pumpWidget(MaterialApp(home: UserCard(user: testUser)));\n  expect(find.text(\'Sara\'), findsOneWidget);\n\n  await tester.tap(find.byIcon(Icons.delete));\n  await tester.pumpAndSettle();\n  expect(find.text(\'Deleted\'), findsOneWidget);\n});\n```\n\nWidget tests are the sweet spot: fast enough to run constantly, yet they exercise real rendering and interaction. `pump` advances one frame while `pumpAndSettle` waits for animations to finish — confusing the two is the most common source of puzzling test failures.',
    },
  },
  {
    id: 'flutter-43-how-do-you-implement',
    difficulty: intermediate,
    question: {
      ar: 'كيف يمكن التعامل مع إشعارات الدفع (Push Notifications) في Flutter؟',
      en: 'How do you implement push notifications in Flutter?',
    },
    answer: {
      ar: 'يمكن استخدام مكتبة firebase_messaging لإضافة إشعارات الدفع إلى تطبيق Flutter باستخدام Firebase Cloud Messaging (FCM).',
      en: 'With firebase_messaging and Firebase Cloud Messaging:\n\n```dart\nfinal token = await FirebaseMessaging.instance.getToken();\nawait api.registerDevice(token);\n\nFirebaseMessaging.onMessage.listen(showInAppNotification);\nFirebaseMessaging.onMessageOpenedApp.listen(handleDeepLink);\nFirebaseMessaging.onBackgroundMessage(backgroundHandler);\n```\n\nThe complexity is in the three states a notification can arrive in — foreground, background, and app terminated — each handled by a different callback, and each behaving differently on iOS and Android.\n\nOther practical points: iOS requires explicit permission and APNs configuration, the device token can change so it must be refreshed on the server, and flutter_local_notifications is usually needed to display anything while the app is in the foreground.',
    },
  },
  {
    id: 'flutter-44-how-do-you-respond',
    difficulty: intermediate,
    question: {
      ar: 'كيف يمكن التعامل مع الـLifecycle للتطبيقات في Flutter؟',
      en: 'How do you respond to application lifecycle changes in Flutter?',
    },
    answer: {
      ar: 'يمكن استخدام Widgets مثل WidgetsBindingObserver لمراقبة حالة التطبيق (نشط، في الخلفية، تم إيقافه) ومعالجة الأحداث بناءً على ذلك.',
      en: 'With WidgetsBindingObserver, which reports when the app moves between foreground, background and paused states:\n\n```dart\nclass _MyAppState extends State<MyApp> with WidgetsBindingObserver {\n  @override\n  void initState() {\n    super.initState();\n    WidgetsBinding.instance.addObserver(this);\n  }\n\n  @override\n  void didChangeAppLifecycleState(AppLifecycleState state) {\n    if (state == AppLifecycleState.paused) saveDraft();\n    if (state == AppLifecycleState.resumed) refreshData();\n  }\n\n  @override\n  void dispose() {\n    WidgetsBinding.instance.removeObserver(this);\n    super.dispose();\n  }\n}\n```\n\nTypical uses: pausing video or location tracking in the background, saving unsaved work, refreshing stale data on resume, and hiding sensitive content from the app switcher preview. Remember to remove the observer in dispose.',
    },
  },
  {
    id: 'flutter-45-how-do-you-use',
    difficulty: intermediate,
    question: {
      ar: 'كيف يمكن استخدام مكتبة Dio في Flutter؟',
      en: 'How do you use the Dio package in Flutter?',
    },
    answer: {
      ar: 'Dio هي مكتبة لإجراء طلبات HTTP وتدعم ميزات متقدمة مثل التحميل المتعدد (multipart) وإدارة الأخطاء والمقاطعات. يمكن استخدامها كبديل لمكتبة http لتوفير واجهة أكثر مرونة.',
      en: 'Dio is an HTTP client supporting features the basic http package does not: interceptors, multipart uploads, request cancellation, timeouts and structured error handling.\n\n```dart\nfinal dio = Dio(BaseOptions(\n  baseUrl: \'https://api.example.com\',\n  connectTimeout: const Duration(seconds: 10),\n));\n\ndio.interceptors.add(InterceptorsWrapper(\n  onRequest: (options, handler) {\n    options.headers[\'Authorization\'] = \'Bearer $token\';\n    handler.next(options);\n  },\n));\n\nfinal response = await dio.get(\'/products\', queryParameters: {\'page\': 1});\n```\n\nInterceptors are the main reason to choose it: attaching auth tokens, refreshing an expired token and retrying, logging requests, and handling errors centrally — all in one place rather than repeated at every call site.',
    },
  },
  {
    id: 'flutter-46-what-is-riverpod-and',
    difficulty: intermediate,
    question: {
      ar: 'ما هو Riverpod وكيف يختلف عن Provider؟',
      en: 'What is Riverpod and how does it differ from Provider?',
    },
    answer: {
      ar: 'Riverpod هو نظام لإدارة الحالة يعتمد على Provider ولكنه أكثر مرونة وأمانًا. يوفر طريقة متقدمة للتعامل مع التبعيات وإعادة البناء، مما يجعل إدارة الحالة أسهل وأكثر كفاءة.',
      en: 'Riverpod is a state management library from the author of Provider, designed to fix its structural limitations. It is more flexible and safer.\n\nThe concrete differences:\n• It does not depend on BuildContext, so providers can be read outside the widget tree and in plain Dart code.\n• Providers are declared as top-level variables and resolved by type safely — a missing provider is a compile-time error rather than a runtime ProviderNotFoundException.\n• It handles asynchronous state properly with AsyncValue, covering loading, data and error states explicitly.\n• Dependencies between providers are declarative, and unused providers are disposed automatically.\n• It is far easier to test, since providers can be overridden without building a widget tree.\n\nProvider remains perfectly usable, but Riverpod is the recommended direction for new projects.',
    },
  },
  {
    id: 'flutter-47-how-do-you-use',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكن استخدام GestureDetector في Flutter؟',
      en: 'How do you use GestureDetector in Flutter?',
    },
    answer: {
      ar: 'GestureDetector هو Widget يُستخدم للكشف عن الإيماءات مثل النقر والسحب. يمكنك استخدامه لتحديد كيفية استجابة التطبيق لإيماءات المستخدم المختلفة، مما يوفر تفاعلية أكبر.',
      en: 'GestureDetector wraps a widget and reports gestures — taps, double taps, long presses, drags and scales:\n\n```dart\nGestureDetector(\n  onTap: () => select(item),\n  onLongPress: () => showContextMenu(item),\n  onHorizontalDragUpdate: (details) => ...,\n  child: ItemCard(item: item),\n)\n```\n\nOne important caveat: for anything that looks like a button, prefer InkWell or a real button widget. GestureDetector provides no visual feedback and no accessibility semantics, so a screen reader will not announce it as tappable. InkWell adds the ripple and the semantics for free.',
    },
  },
  {
    id: 'flutter-48-how-do-you-add',
    difficulty: beginner,
    question: {
      ar: 'ما هي طرق التعامل مع التأخير (Delay) في Flutter؟',
      en: 'How do you add a delay in Flutter?',
    },
    answer: {
      ar: 'يمكن استخدام Future.delayed لإضافة تأخير معين قبل تنفيذ كود معين. يُستخدم غالبًا في حالات مثل عرض مؤشرات التحميل أو الانتظار لعرض واجهات بعد فترة زمنية محددة.',
      en: 'With Future.delayed:\n\n```dart\nawait Future.delayed(const Duration(seconds: 2));\n\n// or with a callback\nFuture.delayed(const Duration(milliseconds: 300), () {\n  if (!mounted) return;      // the widget may have been disposed\n  setState(() => _visible = true);\n});\n```\n\nThat `mounted` check is important: if the user navigates away before the delay elapses, calling setState on a disposed widget throws.\n\nAnd a caution on testing: a fixed delay in a test makes it slow and unreliable. Prefer waiting for a condition, and in widget tests use `tester.pump(duration)` to advance virtual time instead of actually waiting.',
    },
  },
  {
    id: 'flutter-49-what-are-mixins-in',
    difficulty: intermediate,
    question: {
      ar: 'كيف يمكنك استخدام الـMixins في Dart؟',
      en: 'What are mixins in Dart?',
    },
    answer: {
      ar: 'Mixins هي طريقة لإعادة استخدام الأكواد في Dart. يمكنك إنشاء مزيج من الوظائف يمكن استخدامه داخل الفئات، مما يسهل مشاركة السلوكيات بين الفئات المختلفة دون وراثة.',
      en: 'Mixins let you reuse code across classes without inheritance, which matters because Dart supports only single inheritance:\n\n```dart\nmixin Loggable {\n  void log(String message) => debugPrint(\'[$runtimeType] $message\');\n}\n\nmixin Validatable {\n  bool validate();\n}\n\nclass OrderService with Loggable, Validatable {\n  @override\n  bool validate() => true;\n}\n```\n\nYou can constrain a mixin to specific types with `on`, which lets it call members of that type:\n```dart\nmixin StateLogger on State {\n  void logState() => debugPrint(widget.toString());\n}\n```\n\nFlutter uses them heavily — SingleTickerProviderStateMixin and WidgetsBindingObserver are both mixins. The caution is the familiar one: several mixins carrying state create hidden coupling, so keep them focused and preferably stateless.',
    },
  },
];
