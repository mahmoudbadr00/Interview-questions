// data/categories/reactNative.js
import { DIFFICULTY } from '../difficulty.js';

const { beginner, intermediate, advanced } = DIFFICULTY;

export const reactNative = [
  {
    id: 'reactnative-1-what-is-react-native',
    difficulty: beginner,
    question: {
      ar: 'ما هو React Native؟',
      en: 'What is React Native?',
    },
    answer: {
      ar: 'React Native هو إطار عمل مفتوح المصدر مبني على React، يُستخدم لتطوير تطبيقات موبايل لنظامي Android و iOS باستخدام JavaScript و React. يتيح لك بناء تطبيقات موبايل حقيقية باستخدام نفس الكود لكل من النظامين.',
      en: 'React Native is an open-source framework built on React for developing mobile applications for Android and iOS using JavaScript and React. It lets you build genuinely native mobile apps from a single shared codebase.',
    },
  },
  {
    id: 'reactnative-2-what-is-the-difference',
    difficulty: beginner,
    question: {
      ar: 'ما الفرق بين React و React Native؟',
      en: 'What is the difference between React and React Native?',
    },
    answer: {
      ar: 'React هو مكتبة JavaScript تُستخدم لبناء واجهات المستخدم لتطبيقات الويب. React Native هو إطار عمل يُستخدم لبناء تطبيقات الموبايل. الفرق الأساسي هو أن React Native يستخدم مكونات مخصصة لتطوير واجهات المستخدم الخاصة بالهاتف مثل <View> و <Text>، بينما React يستخدم HTML.',
      en: 'React is a JavaScript library for building user interfaces on the web. React Native is a framework for building mobile applications. The essential difference is that React Native uses platform-specific components such as <View> and <Text>, whereas React renders HTML elements.',
    },
  },
  {
    id: 'reactnative-3-what-are-the-core',
    difficulty: beginner,
    question: {
      ar: 'ما هي مكونات React Native الأساسية؟',
      en: 'What are the core components in React Native?',
    },
    answer: {
      ar: 'بعض المكونات الأساسية في React Native هي: <View>: يُستخدم كحاوية لعناصر الـ UI. <Text>: يُستخدم لعرض النصوص. <Image>: لعرض الصور. <TextInput>: لحقول الإدخال. <ScrollView>: لإنشاء قوائم قابلة للتمرير.',
      en: 'The core components you use constantly are:\n• <View> — a container for UI elements.\n• <Text> — for displaying text.\n• <Image> — for images.\n• <TextInput> — for input fields.\n• <ScrollView> — for scrollable content.',
    },
  },
  {
    id: 'reactnative-4-how-do-you-style',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك تصميم المكونات في React Native؟',
      en: 'How do you style components in React Native?',
    },
    answer: {
      ar: 'يتم استخدام StyleSheet في React Native لتصميم المكونات. وهو مشابه جدًا لـ CSS، لكنه مكتوب ككائنات JavaScript. يتم تطبيق الأنماط باستخدام دالة StyleSheet.create().',
      en: 'Styling uses StyleSheet, which is very close to CSS but written as JavaScript objects and applied via StyleSheet.create(). Property names are camelCased, and there is no cascade — styles apply only to the component they are attached to.',
    },
  },
  {
    id: 'reactnative-5-how-does-flexbox-work',
    difficulty: beginner,
    question: {
      ar: 'ما هو Flexbox في React Native؟',
      en: 'How does Flexbox work in React Native?',
    },
    answer: {
      ar: 'Flexbox هو نظام لتخطيط الواجهة يُستخدم في React Native لترتيب المكونات داخل الحاويات. يعمل بنفس الطريقة المستخدمة في CSS لتوزيع العناصر أفقيًا وعموديًا.',
      en: 'Flexbox is the layout system React Native uses to arrange components inside containers. It works much like CSS Flexbox for distributing elements horizontally and vertically, with one notable difference: flexDirection defaults to \'column\' rather than \'row\'.',
    },
  },
  {
    id: 'reactnative-6-what-are-state-and',
    difficulty: beginner,
    question: {
      ar: 'ما هي State و Props في React Native؟',
      en: 'What are state and props in React Native?',
    },
    answer: {
      ar: 'State هو الكائن الداخلي الذي يحتفظ بمعلومات حول مكون معين. يمكن أن يتغير خلال دورة حياة المكون ويؤثر على كيفية عرض المكون. Props هي البيانات التي تُمرر من المكون الأب إلى المكونات الفرعية. وهي ثابتة ولا يمكن تعديلها بواسطة المكون الفرعي.',
      en: 'State is a component\'s internal data. It can change over the component\'s lifetime and changing it re-renders the component. Props are data passed from a parent to a child; they are read-only and a child cannot modify them.',
    },
  },
  {
    id: 'reactnative-7-how-do-you-handle',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك التعامل مع التنقل (navigation) في React Native؟',
      en: 'How do you handle navigation in React Native?',
    },
    answer: {
      ar: 'يمكنك استخدام مكتبة React Navigation لإدارة التنقل بين الشاشات في تطبيق React Native. توفر المكتبة أنواعًا متعددة من التنقل مثل Stack, Drawer, و Tab navigation.',
      en: 'With React Navigation, the de facto standard library for moving between screens. It provides several navigator types — Stack, Drawer and Tab — which can be nested to build the app\'s overall structure.',
    },
  },
  {
    id: 'reactnative-8-what-is-expo-in',
    difficulty: beginner,
    question: {
      ar: 'ما هو Expo في React Native؟',
      en: 'What is Expo in React Native?',
    },
    answer: {
      ar: 'Expo هو أداة وإطار عمل فوق React Native يتيح للمطورين بناء التطبيقات بسرعة دون الحاجة إلى التعامل مع إعدادات معقدة. يوفر مجموعة من الأدوات والواجهات الجاهزة للتعامل مع الميزات الأصلية مثل الكاميرا، الموقع الجغرافي، والإشعارات.',
      en: 'Expo is a toolchain and framework on top of React Native that lets you build apps quickly without dealing with complex native configuration. It provides ready-made APIs for native features such as the camera, location and notifications.',
    },
  },
  {
    id: 'reactnative-9-what-is-the-difference',
    difficulty: beginner,
    question: {
      ar: 'ما الفرق بين React Native CLI و Expo CLI؟',
      en: 'What is the difference between the React Native CLI and Expo?',
    },
    answer: {
      ar: 'React Native CLI: يمنحك مزيدًا من التحكم والتخصيص في التطبيق، ولكنه يتطلب إعدادات أكثر تعقيدًا للوصول إلى الميزات الأصلية. Expo CLI: يجعل عملية التطوير أبسط ويوفر مكتبات جاهزة، ولكنه يمكن أن يكون محدودًا عند الحاجة إلى ميزات أصلية مخصصة أو تكامل مع طرف ثالث.',
      en: 'The React Native CLI gives you full control and customisation but requires more setup to reach native capabilities. Expo makes development much simpler and ships ready-made libraries, but can be limiting when you need custom native code or a third-party SDK it does not cover. Expo\'s development builds have narrowed that gap considerably.',
    },
  },
  {
    id: 'reactnative-10-how-do-you-access',
    difficulty: intermediate,
    question: {
      ar: 'كيف يمكنك الوصول إلى ميزات الأجهزة الأصلية مثل الكاميرا والموقع في React Native؟',
      en: 'How do you access native device features such as the camera and location?',
    },
    answer: {
      ar: 'في React Native يمكنك استخدام المكتبات الجاهزة للوصول إلى ميزات الأجهزة الأصلية مثل: الكاميرا: باستخدام مكتبة react-native-camera أو عبر Expo باستخدام expo-camera. الموقع الجغرافي: باستخدام react-native-geolocation-service أو expo-location.',
      en: 'Through purpose-built libraries: the camera via react-native-camera or expo-camera, and location via react-native-geolocation-service or expo-location. Both platforms also require declaring the relevant permissions in the native manifests, and requesting them at runtime.',
    },
  },
  {
    id: 'reactnative-11-what-is-useeffect-used',
    difficulty: beginner,
    question: {
      ar: 'ما هو useEffect() في React Native؟',
      en: 'What is useEffect() used for in React Native?',
    },
    answer: {
      ar: 'useEffect() هو Hook في React Native يُستخدم لتنفيذ العمليات الجانبية (مثل استدعاء APIs أو الاشتراكات) داخل المكونات الوظيفية. يُنفذ عند تحميل المكون أو عند تغيير القيم المراقبة (dependencies).',
      en: 'useEffect is the hook for side effects inside function components — API calls, subscriptions, timers. It runs after the component mounts and again whenever a value in its dependency array changes, and its returned cleanup function runs on unmount.',
    },
  },
  {
    id: 'reactnative-12-how-do-you-improve',
    difficulty: intermediate,
    question: {
      ar: 'كيف يمكنك تحسين أداء تطبيق React Native؟',
      en: 'How do you improve the performance of a React Native app?',
    },
    answer: {
      ar: 'بعض الطرق لتحسين أداء تطبيق React Native: التقليل من إعادة التصيير (re-renders): باستخدام memo أو PureComponent. استخدام FlatList لعرض القوائم الكبيرة. تقليل حجم الصور عبر تحميل الصور بحجم مناسب أو استخدام صيغة WebP. تقليل استخدام الأنماط المتكررة عبر StyleSheet.create().',
      en: 'The levers that matter most:\n• Reduce re-renders with React.memo and useCallback.\n• Use FlatList (not ScrollView) for long lists.\n• Right-size images and prefer efficient formats.\n• Define styles once with StyleSheet.create() instead of inline objects.\n• Keep heavy work off the JS thread, and use the Hermes engine.\n• Profile with Flipper or the built-in performance monitor before optimising.',
    },
  },
  {
    id: 'reactnative-13-what-are-flatlist-and',
    difficulty: intermediate,
    question: {
      ar: 'ما هو FlatList و SectionList؟',
      en: 'What are FlatList and SectionList?',
    },
    answer: {
      ar: 'FlatList هو مكون يُستخدم لعرض قوائم بيانات طويلة بكفاءة. يعرض فقط العناصر التي تظهر في الشاشة (التمرير السريع). SectionList هو مكون مشابه ولكنه يدعم تقسيم البيانات إلى أقسام مختلفة مع رؤوس (headers) لكل قسم.',
      en: 'FlatList efficiently renders long lists by only rendering the items currently on screen and recycling them as you scroll. SectionList is the same idea but supports grouping data into sections with their own headers. Both need a stable keyExtractor to avoid the same identity problems as React keys on the web.',
    },
  },
  {
    id: 'reactnative-14-how-do-you-handle',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك التعامل مع إدخال النصوص في React Native؟',
      en: 'How do you handle text input in React Native?',
    },
    answer: {
      ar: 'يمكن التعامل مع إدخال النصوص باستخدام مكون <TextInput>. يمكنك استخدام onChangeText لتحديث الـ state مع كل تغيير في النص. يمكنك أيضًا تخصيص خصائص مثل placeholder, keyboardType, و secureTextEntry لتحديد نوع الإدخال.',
      en: 'With the <TextInput> component. You update state on every change via onChangeText, and configure behaviour with props such as placeholder, keyboardType and secureTextEntry. For anything beyond a couple of fields, a form library saves a lot of re-renders.',
    },
  },
  {
    id: 'reactnative-15-what-is-asyncstorage-in',
    difficulty: beginner,
    question: {
      ar: 'ما هو AsyncStorage في React Native؟',
      en: 'What is AsyncStorage in React Native?',
    },
    answer: {
      ar: 'AsyncStorage هو واجهة برمجة تطبيقات لتخزين البيانات البسيطة بشكل دائم على جهاز المستخدم. يُستخدم لتخزين بيانات مثل إعدادات المستخدم أو الرموز المميزة (tokens).',
      en: 'AsyncStorage is an asynchronous key-value store for persisting simple data on the device — user preferences or a token. It stores strings only, so objects need JSON serialisation. It is not encrypted, so sensitive values belong in Keychain or Keystore instead.',
    },
  },
  {
    id: 'reactnative-16-what-is-the-difference',
    difficulty: intermediate,
    question: {
      ar: 'ما هي الاختلافات بين ScrollView و FlatList؟',
      en: 'What is the difference between ScrollView and FlatList?',
    },
    answer: {
      ar: 'ScrollView: يُستخدم لعرض مجموعة من العناصر حيث يتم تحميل كل العناصر في الذاكرة في نفس الوقت. مناسب للقوائم القصيرة. FlatList: يُستخدم للقوائم الطويلة حيث يتم تحميل العناصر بشكل ديناميكي فقط عندما تكون على الشاشة، مما يجعلها أكثر كفاءة للقوائم الكبيرة.',
      en: 'ScrollView renders every child at once and keeps them all in memory, which is fine for short, bounded content. FlatList renders only what is visible and unmounts what scrolls away, which makes it the right choice for long or unbounded lists. Using ScrollView for a large list is one of the most common causes of poor performance in React Native.',
    },
  },
  {
    id: 'reactnative-17-how-do-touchableopacity-and',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك استخدام TouchableOpacity و TouchableHighlight في React Native؟',
      en: 'How do TouchableOpacity and TouchableHighlight differ?',
    },
    answer: {
      ar: 'كلا المكونين يُستخدمان لجعل العناصر قابلة للنقر. TouchableOpacity: يقلل من الشفافية عند النقر، مما يعطي تأثيرًا مرئيًا. TouchableHighlight: يغير لون الخلفية عند النقر.',
      en: 'Both make an element tappable. TouchableOpacity dims the element by reducing its opacity on press, while TouchableHighlight changes its background colour. In newer code, Pressable is the recommended component because it offers finer control over press states.',
    },
  },
  {
    id: 'reactnative-18-what-are-nativemodules-in',
    difficulty: advanced,
    question: {
      ar: 'ما هو NativeModules في React Native؟',
      en: 'What are NativeModules in React Native?',
    },
    answer: {
      ar: 'NativeModules هي واجهة برمجة تُتيح لك الوصول إلى وحدات الأصل (native modules) المكتوبة بلغة Java أو Objective-C من خلال JavaScript في React Native. تُستخدم للوصول إلى ميزات الجهاز الأصلية غير المتاحة مباشرة في React Native.',
      en: 'NativeModules is the interface that lets JavaScript call native code written in Java/Kotlin or Objective-C/Swift. You use it to reach device capabilities that React Native does not expose directly, or to reuse an existing native SDK. The newer architecture replaces it with TurboModules, which load lazily and are type-safe through a code-generated interface.',
    },
  },
  {
    id: 'reactnative-19-how-do-you-handle',
    difficulty: intermediate,
    question: {
      ar: 'كيف تتعامل مع push notifications في React Native؟',
      en: 'How do you handle push notifications in React Native?',
    },
    answer: {
      ar: 'يمكنك استخدام مكتبات مثل react-native-push-notification أو Firebase Cloud Messaging (FCM) للتعامل مع الإشعارات في React Native. تتيح هذه الأدوات إرسال الإشعارات إلى الأجهزة حتى عندما لا يكون التطبيق نشطًا.',
      en: 'Through Firebase Cloud Messaging (FCM) or a library such as notifee or react-native-push-notification. These deliver notifications even when the app is not running. Implementation involves registering for a device token, sending it to your backend, and handling the notification in the foreground, background and killed states — each of which behaves differently.',
    },
  },
  {
    id: 'reactnative-20-what-is-hermes-in',
    difficulty: intermediate,
    question: {
      ar: 'ما هو Hermes في React Native؟',
      en: 'What is Hermes in React Native?',
    },
    answer: {
      ar: 'Hermes هو محرك JavaScript مُحسن للتطبيقات على الأجهزة ذات الذاكرة المحدودة. تم تطويره بواسطة Facebook لتسريع أداء تطبيقات React Native، وخاصة على أجهزة Android.',
      en: 'Hermes is a JavaScript engine optimised for mobile devices with limited memory, developed at Meta. It improves startup time and reduces memory usage, particularly on Android, by pre-compiling JavaScript to bytecode at build time. It is enabled by default in recent React Native versions.',
    },
  },
  {
    id: 'reactnative-21-how-do-you-include',
    difficulty: intermediate,
    question: {
      ar: 'كيف يمكنك تضمين مكتبات أصلية (Native Libraries) في مشروع React Native؟',
      en: 'How do you include native libraries in a React Native project?',
    },
    answer: {
      ar: 'يمكن تضمين المكتبات الأصلية في React Native باستخدام react-native link (في المشاريع القديمة) أو باستخدام cocoapods على iOS أو gradle على Android.',
      en: 'Modern React Native links most libraries automatically (autolinking). Under the hood that means CocoaPods on iOS and Gradle on Android; the old `react-native link` command only applies to legacy projects. Libraries with native code also require rebuilding the app rather than just reloading JavaScript.',
    },
  },
  {
    id: 'reactnative-22-what-is-the-bridge',
    difficulty: advanced,
    question: {
      ar: 'ما هو Bridge في React Native؟',
      en: 'What is the Bridge in React Native?',
    },
    answer: {
      ar: 'Bridge هو الآلية التي تربط بين JavaScript والرمز الأصلي (Native Code) في React Native. يتيح التواصل بين الاثنين لتمرير البيانات وتنفيذ الإجراءات على مستوى النظام.',
      en: 'The Bridge was the mechanism connecting JavaScript and native code, passing serialised JSON messages asynchronously between the two threads. It was also React Native\'s main performance bottleneck, since every interaction had to be serialised. The new architecture replaces it with JSI (JavaScript Interface), which lets JavaScript hold direct references to native objects and call them synchronously without serialisation.',
    },
  },
  {
    id: 'reactnative-23-how-do-you-write',
    difficulty: advanced,
    question: {
      ar: 'كيف يمكنك استخدام الكود الأصلي (Native Code) مع React Native؟',
      en: 'How do you write and use native code with React Native?',
    },
    answer: {
      ar: 'يمكنك كتابة وحدات Native (مثل Java على Android و Objective-C أو Swift على iOS) والتفاعل معها عبر JavaScript باستخدام NativeModules و RCTBridge.',
      en: 'You write a native module in Java/Kotlin on Android or Objective-C/Swift on iOS, expose the methods you want, and call them from JavaScript through NativeModules. In the new architecture you define the interface in a typed spec and Codegen generates the binding for a TurboModule. You do this when you need a capability with no existing library, or to reuse an SDK your company already maintains.',
    },
  },
  {
    id: 'reactnative-24-what-is-the-difference',
    difficulty: beginner,
    question: {
      ar: 'ما هو الفرق بين Hot Reloading و Live Reloading؟',
      en: 'What is the difference between Hot Reloading and Live Reloading?',
    },
    answer: {
      ar: 'Hot Reloading: يعيد تحميل فقط الجزء الذي تم تغييره في الكود بدون إعادة تحميل التطبيق بالكامل. Live Reloading: يعيد تحميل التطبيق بالكامل عند إجراء أي تغيير.',
      en: 'Hot Reloading updates only the changed module while preserving application state. Live Reloading restarts the whole app on any change, losing state. Current React Native uses Fast Refresh, which combines both: it keeps state for component edits and falls back to a full reload when it cannot safely preserve it.',
    },
  },
];
