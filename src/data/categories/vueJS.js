// data/categories/vueJS.js
import { DIFFICULTY } from '../difficulty.js';

const { beginner, intermediate } = DIFFICULTY;

export const vueJS = [
  {
    id: 'vuejs-1-what-is-vue-js',
    difficulty: beginner,
    question: {
      ar: 'ما هو Vue.js؟',
      en: 'What is Vue.js?',
    },
    answer: {
      ar: 'Vue.js هو إطار عمل لتطوير واجهات المستخدم، يُستخدم لبناء تطبيقات الويب أحادية الصفحة (SPA).',
      en: 'Vue is a progressive JavaScript framework for building user interfaces and single-page applications. "Progressive" means you can adopt it incrementally — drop it into one page of an existing site, or use the full stack with Vue Router, Pinia and Nuxt. Its distinguishing feature is single-file components, where template, logic and styles live together in one .vue file.',
    },
  },
  {
    id: 'vuejs-2-what-are-the-advantages',
    difficulty: beginner,
    question: {
      ar: 'ما هي مميزات Vue.js؟',
      en: 'What are the advantages of Vue.js?',
    },
    answer: {
      ar: 'من مميزات Vue.js سهولة التعلم، الأداء العالي، دعم التوجيه، والتفاعل السلس مع DOM.',
      en: '• A gentle learning curve — the template syntax is close to plain HTML.\n• Excellent performance through a fine-grained reactivity system that tracks exactly which values a component uses.\n• Single-file components keep related code together.\n• Officially maintained router and state library, so there is one obvious choice rather than an ecosystem debate.\n• Outstanding documentation.\n\nIts trade-off relative to React is a smaller job market and ecosystem, though Nuxt and the Vue 3 Composition API have narrowed the gap considerably.',
    },
  },
  {
    id: 'vuejs-3-what-are-components-in',
    difficulty: beginner,
    question: {
      ar: 'ما هو مفهوم المكونات (Components) في Vue.js؟',
      en: 'What are components in Vue.js?',
    },
    answer: {
      ar: 'المكونات هي وحدات مستقلة تعيد استخدام الشيفرة، وتحتوي على منطق وعرض معين.',
      en: 'Components are self-contained, reusable units combining template, logic and styles:\n\n```vue\n<script setup>\nconst props = defineProps({ user: { type: Object, required: true } })\nconst emit = defineEmits([\'select\'])\n</script>\n\n<template>\n  <article class="card" @click="emit(\'select\', user.id)">\n    <h3>{{ user.name }}</h3>\n  </article>\n</template>\n\n<style scoped>\n.card { padding: 1rem; }\n</style>\n```\n\nThe `scoped` attribute on styles is worth noting: Vue rewrites the selectors so they only apply to this component, which solves CSS leakage without any extra tooling.',
    },
  },
  {
    id: 'vuejs-4-how-do-you-create',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك إنشاء مكون جديد في Vue.js؟',
      en: 'How do you create a component in Vue.js?',
    },
    answer: {
      ar: 'يمكنك إنشاء مكون جديد عن طريق تعريف كائن جديد مع خيارات المكون، مثل: `Vue.component(\'my-component\', { ... })`.',
      en: 'In modern Vue you create a .vue single-file component and use `<script setup>`, which is the recommended syntax:\n\n```vue\n<script setup>\nimport { ref } from \'vue\'\nconst count = ref(0)\n</script>\n\n<template>\n  <button @click="count++">{{ count }}</button>\n</template>\n```\n\nEverything declared in `<script setup>` is automatically available to the template, and imported components need no registration step. The older `Vue.component(\'my-component\', { ... })` global registration belongs to Vue 2 and is rarely used now.',
    },
  },
  {
    id: 'vuejs-5-what-is-a-vue',
    difficulty: beginner,
    question: {
      ar: 'ما هو مفهوم الـ Vue Instance؟',
      en: 'What is a Vue application instance?',
    },
    answer: {
      ar: 'Vue Instance هو كائن يمثل تطبيق Vue، ويُستخدم لربط البيانات بالمكونات.',
      en: 'The application instance is the root object that mounts your component tree to the DOM and holds application-level configuration:\n\n```js\nimport { createApp } from \'vue\'\nimport App from \'./App.vue\'\n\nconst app = createApp(App)\napp.use(router)\napp.use(pinia)\napp.config.errorHandler = (err) => reportError(err)\napp.mount(\'#app\')\n```\n\nVue 3 changed this from Vue 2\'s global `new Vue()`: configuration and plugins are now scoped to the instance rather than global, so two Vue apps on the same page no longer interfere with each other.',
    },
  },
  {
    id: 'vuejs-6-how-do-you-manage',
    difficulty: intermediate,
    question: {
      ar: 'كيف يمكنك إدارة الحالة في تطبيق Vue.js؟',
      en: 'How do you manage state in a Vue application?',
    },
    answer: {
      ar: 'يمكن استخدام Vuex لإدارة الحالة في تطبيقات Vue، مما يسمح بإدارة البيانات بشكل مركزي.',
      en: 'The options, in order of weight:\n\n1. Component state with ref and reactive — for anything local.\n2. Props and events for parent–child communication.\n3. provide/inject for passing values deep down a tree.\n4. Pinia for shared application state:\n\n```js\nexport const useCartStore = defineStore(\'cart\', () => {\n  const items = ref([])\n  const total = computed(() => items.value.reduce((s, i) => s + i.price, 0))\n  function add(item) { items.value.push(item) }\n  return { items, total, add }\n})\n```\n\nPinia is the official recommendation and replaces Vuex: no mutations, full TypeScript inference, and modular stores rather than one nested tree.\n\nAnd the same principle applies as in React: server data belongs in a query library such as TanStack Query rather than in your state store.',
    },
  },
  {
    id: 'vuejs-7-how-does-routing-work',
    difficulty: beginner,
    question: {
      ar: 'ما هو مفهوم التوجيه (Routing) في Vue.js؟',
      en: 'How does routing work in Vue.js?',
    },
    answer: {
      ar: 'التوجيه يُستخدم للتنقل بين المكونات، ويمكن استخدام Vue Router لإدارة التنقل.',
      en: 'Through Vue Router, the official routing library:\n\n```js\nconst routes = [\n  { path: \'/\', component: Home },\n  { path: \'/users/:id\', component: UserDetail, props: true },\n  {\n    path: \'/admin\',\n    component: () => import(\'./views/Admin.vue\'),   // lazy loaded\n    beforeEnter: requireAuth,\n  },\n  { path: \'/:pathMatch(.*)*\', component: NotFound },\n]\n```\n\nYou navigate with `<RouterLink>` in templates or `useRouter()` in code, and read parameters with `useRoute()`. The dynamic import above is lazy loading, which splits that route into its own chunk. Navigation guards — global, per-route or in-component — handle authentication and unsaved-changes prompts.',
    },
  },
  {
    id: 'vuejs-8-how-do-you-pass',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك تمرير البيانات بين المكونات؟',
      en: 'How do you pass data between components in Vue.js?',
    },
    answer: {
      ar: 'يمكن تمرير البيانات باستخدام props للمدخلات و$emit لإرسال الأحداث إلى المكونات العليا.',
      en: 'Down with props, up with events:\n\n```vue\n<!-- child -->\n<script setup>\ndefineProps({ user: Object })\nconst emit = defineEmits([\'delete\'])\n</script>\n\n<!-- parent -->\n<UserCard :user="currentUser" @delete="handleDelete" />\n```\n\nProps are one-way and should not be mutated by the child — Vue warns if you try. For deeply nested trees, provide/inject avoids threading props through intermediate components, and for genuinely shared state a Pinia store is the right tool. Slots handle the case where a parent needs to pass markup rather than data.',
    },
  },
  {
    id: 'vuejs-9-what-are-directives-in',
    difficulty: beginner,
    question: {
      ar: 'ما هو مفهوم الـ Directives في Vue.js؟',
      en: 'What are directives in Vue.js?',
    },
    answer: {
      ar: 'Directives هي تعليمات خاصة تُستخدم في القوالب لتعديل سلوك العناصر، مثل `v-if` و`v-for`.',
      en: 'Directives are special attributes that add behaviour to elements in templates:\n\n```vue\n<p v-if="isVisible">Shown conditionally</p>\n<p v-else>Otherwise this</p>\n<li v-for="item in items" :key="item.id">{{ item.name }}</li>\n<input v-model="query" />\n<button @click="submit">Send</button>      <!-- shorthand for v-on:click -->\n<img :src="url" />                          <!-- shorthand for v-bind:src -->\n<span v-show="hasError">Error</span>\n```\n\nTwo details that come up often: v-if removes the element from the DOM while v-show only toggles its CSS display, so v-show is cheaper for frequent toggling; and v-for always needs a stable :key, for exactly the same identity reasons as keys in React.',
    },
  },
  {
    id: 'vuejs-10-what-is-the-vue',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك استخدام Vue CLI؟',
      en: 'What is the Vue CLI and how do you scaffold a project?',
    },
    answer: {
      ar: 'يمكن استخدام Vue CLI لإنشاء مشاريع Vue جديدة بسهولة باستخدام الأمر `vue create project-name`.',
      en: 'The current tooling is create-vue, which scaffolds a Vite-based project:\n\n```bash\nnpm create vue@latest\n```\n\nIt asks which features you want — TypeScript, Vue Router, Pinia, ESLint, testing — and generates the configuration for each.\n\nVue CLI, which was Webpack-based, is now in maintenance mode; Vite is the recommended build tool because its dev server starts instantly regardless of project size. For a full-stack application with server-side rendering, Nuxt is the framework layer on top.',
    },
  },
  {
    id: 'vuejs-11-what-are-computed-properties',
    difficulty: beginner,
    question: {
      ar: 'ما هو مفهوم الـ Computed Properties في Vue.js؟',
      en: 'What are computed properties in Vue.js?',
    },
    answer: {
      ar: 'Computed Properties تُستخدم لحساب القيم بناءً على البيانات التفاعلية، وتُحدث تلقائيًا عند تغيير البيانات.',
      en: 'Computed properties derive a value from reactive state and cache the result until a dependency changes:\n\n```js\nconst firstName = ref(\'Sara\')\nconst lastName = ref(\'Ahmed\')\nconst fullName = computed(() => `${firstName.value} ${lastName.value}`)\n\nconst activeCount = computed(() => users.value.filter(u => u.isActive).length)\n```\n\nThe caching is the key difference from calling a method in the template: a method runs on every re-render, while a computed only recalculates when something it depends on actually changed. For an expensive filter over a large list that difference is significant.\n\nComputed values should be pure — no side effects, no async work. For those, use a watcher.',
    },
  },
  {
    id: 'vuejs-12-how-do-you-handle',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك التعامل مع الأحداث في Vue.js؟',
      en: 'How do you handle events in Vue.js?',
    },
    answer: {
      ar: 'يمكن التعامل مع الأحداث باستخدام `v-on` أو الاختصارات مثل `@click`.',
      en: '```vue\n<button @click="submit">Send</button>\n<input @input="onInput" @keyup.enter="search" />\n<form @submit.prevent="onSubmit">...</form>\n<div @click.stop="handler">...</div>\n```\n\nThe modifiers are one of Vue\'s nicer conveniences: `.prevent` calls preventDefault, `.stop` calls stopPropagation, `.once` removes the listener after the first call, and key modifiers such as `.enter` and `.esc` remove the need to check key codes manually.\n\nComponents emit their own events with defineEmits, and the parent listens with the same `@` syntax — so custom and native events look identical at the call site.',
    },
  },
  {
    id: 'vuejs-13-what-are-watchers-in',
    difficulty: intermediate,
    question: {
      ar: 'ما هو مفهوم الـ Watchers في Vue.js؟',
      en: 'What are watchers in Vue.js?',
    },
    answer: {
      ar: 'Watchers تُستخدم لمراقبة التغيرات في البيانات وتنفيذ الشيفرة عند حدوثها.',
      en: 'Watchers run a side effect when a reactive value changes:\n\n```js\nwatch(searchQuery, async (newValue, oldValue) => {\n  results.value = await api.search(newValue)\n}, { debounce: 300 })\n\nwatch(() => props.userId, loadUser, { immediate: true })\n\nwatchEffect(() => {\n  document.title = `${unread.value} unread messages`   // tracks dependencies automatically\n})\n```\n\nThe distinction from computed matters: computed derives a value with no side effects, while a watcher performs one — an API call, writing to localStorage, manipulating the DOM.\n\nThe common mistake is using a watcher to keep two pieces of state in sync when a computed would express the relationship directly. If you are watching A to set B, B should probably be computed.',
    },
  },
  {
    id: 'vuejs-14-how-do-you-build',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك تنفيذ النماذج (Forms) في Vue.js؟',
      en: 'How do you build forms in Vue.js?',
    },
    answer: {
      ar: 'يمكن استخدام v-model لربط البيانات بالنماذج، مما يُسهل عملية التفاعل مع المستخدم.',
      en: 'v-model provides two-way binding:\n\n```vue\n<script setup>\nconst form = reactive({ email: \'\', password: \'\', remember: false })\n\nfunction onSubmit() {\n  if (!form.email) return\n  auth.login(form)\n}\n</script>\n\n<template>\n  <form @submit.prevent="onSubmit">\n    <input v-model.trim="form.email" type="email" required />\n    <input v-model="form.password" type="password" />\n    <input v-model="form.remember" type="checkbox" />\n    <button type="submit">Sign in</button>\n  </form>\n</template>\n```\n\nThe modifiers help: `.trim` strips whitespace, `.number` coerces to a number, `.lazy` syncs on change rather than every keystroke. v-model also works on custom components, which is how you build reusable input wrappers.\n\nFor larger forms with complex validation, VeeValidate or FormKit save considerable work.',
    },
  },
  {
    id: 'vuejs-15-what-were-filters-in',
    difficulty: beginner,
    question: {
      ar: 'ما هو مفهوم الـ Filters في Vue.js؟',
      en: 'What were filters in Vue.js, and what replaced them?',
    },
    answer: {
      ar: 'Filters تُستخدم لتنسيق البيانات في القوالب، مثل تحويل التاريخ أو الأرقام.',
      en: 'Filters were a Vue 2 feature for formatting values in templates with a pipe syntax:\n\n```vue\n<!-- Vue 2 -->\n{{ price | currency }}\n```\n\nThey were removed in Vue 3 because they added a bespoke syntax for something plain JavaScript already does. The replacement is a computed property or a simple method call:\n\n```vue\n<!-- Vue 3 -->\n{{ formatCurrency(price) }}\n```\n\nThat is clearer in practice: the function is an ordinary import, so it is testable, reusable outside templates, and its type flows through. For locale-aware formatting, Intl.NumberFormat and Intl.DateTimeFormat do the real work.',
    },
  },
  {
    id: 'vuejs-16-what-are-vue-devtools',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك استخدام Vue Devtools؟',
      en: 'What are Vue Devtools?',
    },
    answer: {
      ar: 'Vue Devtools هي إضافة متصفح تُستخدم لتسهيل تطوير تطبيقات Vue، وتتيح لك فحص الحالة والمكونات.',
      en: 'Vue Devtools is a browser extension for inspecting a running Vue application. It shows the component tree with each component\'s props and state, lets you edit reactive values live, inspects Pinia stores with a timeline of mutations, tracks router navigation, and profiles component render performance.\n\nThe timeline view is particularly useful for debugging reactivity: it shows which state change triggered which component update, which is the fastest way to answer "why did this re-render?"',
    },
  },
  {
    id: 'vuejs-17-what-are-mixins-in',
    difficulty: intermediate,
    question: {
      ar: 'ما هو مفهوم الـ Mixins في Vue.js؟',
      en: 'What are mixins in Vue.js, and what replaced them?',
    },
    answer: {
      ar: 'Mixins تُستخدم لإعادة استخدام الشيفرة بين المكونات، وتسمح بمشاركة الوظائف المشتركة.',
      en: 'Mixins were the Vue 2 mechanism for sharing options — data, methods, lifecycle hooks — across components:\n\n```js\nconst loggerMixin = { methods: { log(msg) { console.log(msg) } } }\nexport default { mixins: [loggerMixin] }\n```\n\nTheir problems are well known: name collisions between mixins, no clarity about where a property came from, and implicit coupling that makes refactoring risky.\n\nThe Composition API replaced them with composables — plain functions that are explicit about their inputs and outputs:\n\n```js\nconst { data, isLoading, error } = useFetch(url)\n```\n\nEverything is visible at the call site, there are no name collisions, and types flow through. New code should use composables.',
    },
  },
  {
    id: 'vuejs-18-how-do-you-improve',
    difficulty: intermediate,
    question: {
      ar: 'كيف يمكنك تحسين أداء تطبيق Vue.js؟',
      en: 'How do you improve the performance of a Vue application?',
    },
    answer: {
      ar: 'يمكن تحسين الأداء باستخدام تقنيات مثل Lazy Loading وOptimized Rendering.',
      en: '1. Lazy-load routes and heavy components with dynamic imports, which is the biggest bundle-size win.\n2. Give every v-for a stable `:key` so Vue reuses DOM nodes correctly.\n3. Use computed properties rather than calling methods in templates, so results are cached.\n4. Prefer `v-show` over `v-if` for elements toggled frequently, and `v-if` for those rarely shown.\n5. Use `shallowRef` for large objects that are replaced wholesale, avoiding deep reactivity conversion.\n6. Use `v-memo` to skip re-rendering subtrees whose dependencies have not changed.\n7. Virtualise long lists.\n8. Analyse the bundle with rollup-plugin-visualizer.\n\nVue 3\'s reactivity is fine-grained by default, so it needs far less manual memoisation than React. Profile with Vue Devtools before optimising anything.',
    },
  },
  {
    id: 'vuejs-19-what-are-slots-in',
    difficulty: intermediate,
    question: {
      ar: 'ما هو مفهوم الـ Slots في Vue.js؟',
      en: 'What are slots in Vue.js?',
    },
    answer: {
      ar: 'Slots تُستخدم لتمرير محتوى مخصص إلى المكونات، مما يوفر مرونة في تصميم الواجهة.',
      en: 'Slots let a parent pass markup into a child component, which is Vue\'s composition mechanism:\n\n```vue\n<!-- Card.vue -->\n<template>\n  <section class="card">\n    <header><slot name="header">Default title</slot></header>\n    <slot />                                  <!-- default slot -->\n    <footer><slot name="footer" /></footer>\n  </section>\n</template>\n\n<!-- usage -->\n<Card>\n  <template #header><h2>Profile</h2></template>\n  <UserDetails :user="user" />\n</Card>\n```\n\nScoped slots go further by letting the child pass data back up to the markup the parent supplied:\n\n```vue\n<DataTable :rows="rows">\n  <template #row="{ item }">{{ item.name }}</template>\n</DataTable>\n```\n\nThat is how you build genuinely reusable components — the child owns the behaviour, the parent owns the presentation.',
    },
  },
  {
    id: 'vuejs-20-how-do-you-use',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك استخدام Vue Router؟',
      en: 'How do you use Vue Router?',
    },
    answer: {
      ar: 'يمكن تثبيت Vue Router واستخدامه لتحديد المسارات والتوجيه بين المكونات.',
      en: '```js\nimport { createRouter, createWebHistory } from \'vue-router\'\n\nconst router = createRouter({\n  history: createWebHistory(),\n  routes,\n})\n\napp.use(router)\n```\n\nIn components:\n```vue\n<script setup>\nimport { useRouter, useRoute } from \'vue-router\'\n\nconst router = useRouter()\nconst route = useRoute()\n\nconst id = route.params.id\nfunction goToProfile() { router.push(\'/profile\') }\n</script>\n\n<template>\n  <RouterLink to="/about">About</RouterLink>\n  <RouterView />\n</template>\n```\n\nOne deployment note that catches people out: with history mode the server must return index.html for every path, otherwise refreshing a deep link produces a 404.',
    },
  },
  {
    id: 'vuejs-21-what-is-a-vuex',
    difficulty: intermediate,
    question: {
      ar: 'ما هو مفهوم الـ Vuex Store؟',
      en: 'What is a Vuex store, and why is Pinia preferred now?',
    },
    answer: {
      ar: 'Vuex Store هو مركز إدارة الحالة في تطبيقات Vue، حيث يُخزن الحالة المشتركة بين المكونات.',
      en: 'Vuex was Vue\'s official state management library, organised around state, getters, mutations and actions, with mutations as the only way to change state.\n\nPinia is now the official recommendation, and it removes most of Vuex\'s friction:\n• No mutations — actions change state directly.\n• Full TypeScript inference with no extra typing ceremony.\n• Flat, modular stores instead of one nested tree with namespaces.\n• A much smaller API surface.\n\n```js\nexport const useUserStore = defineStore(\'user\', () => {\n  const current = ref(null)\n  const isLoggedIn = computed(() => current.value !== null)\n  async function login(credentials) { current.value = await api.login(credentials) }\n  return { current, isLoggedIn, login }\n})\n```\n\nExisting Vuex code still works, but new projects should start with Pinia.',
    },
  },
  {
    id: 'vuejs-22-what-are-lifecycle-hooks',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك استخدام الـ Lifecycle Hooks في Vue.js؟',
      en: 'What are lifecycle hooks in Vue.js?',
    },
    answer: {
      ar: 'Lifecycle Hooks تُستخدم لتنفيذ الشيفرة في مراحل مختلفة من دورة حياة المكون، مثل `mounted` و`destroyed`.',
      en: 'Lifecycle hooks run at defined points in a component\'s life:\n\n```js\nimport { onMounted, onUnmounted, onUpdated } from \'vue\'\n\nonMounted(() => {\n  chart = renderChart(container.value)\n})\n\nonUnmounted(() => {\n  chart?.destroy()\n  window.removeEventListener(\'resize\', onResize)\n})\n```\n\nThe main ones are onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount and onUnmounted, with onErrorCaptured for error handling.\n\nonMounted is where DOM access and third-party initialisation belong, and onUnmounted is where every listener, timer and subscription must be released. Skipping that cleanup is the most common cause of memory leaks.',
    },
  },
  {
    id: 'vuejs-23-what-are-dynamic-components',
    difficulty: intermediate,
    question: {
      ar: 'ما هو مفهوم الـ Dynamic Components في Vue.js؟',
      en: 'What are dynamic components in Vue.js?',
    },
    answer: {
      ar: 'Dynamic Components تُستخدم لإنشاء مكونات في وقت التشغيل بناءً على البيانات.',
      en: 'The `<component>` element renders whichever component its `:is` binding points to:\n\n```vue\n<component :is="currentTab" />\n\n<KeepAlive>\n  <component :is="currentTab" />      <!-- preserves state between switches -->\n</KeepAlive>\n```\n\nThis is how tabbed interfaces, wizards and data-driven dashboards are built, where the component to show depends on state rather than being known in advance.\n\n`<KeepAlive>` is worth knowing alongside it: without it, switching tabs unmounts the previous component and loses its state — a half-filled form, a scroll position. With it the component is cached rather than destroyed, and gets onActivated and onDeactivated hooks instead.',
    },
  },
  {
    id: 'vuejs-24-how-do-you-handle',
    difficulty: intermediate,
    question: {
      ar: 'كيف يمكنك التعامل مع الأخطاء في Vue.js؟',
      en: 'How do you handle errors in Vue.js?',
    },
    answer: {
      ar: 'يمكن استخدام `errorCaptured` و`errorHandler` لإدارة الأخطاء في تطبيقات Vue.',
      en: 'Two levels. A component-level boundary with onErrorCaptured:\n\n```js\nonErrorCaptured((err, instance, info) => {\n  hasError.value = true\n  reportError(err, info)\n  return false          // stop it propagating further up\n})\n```\n\nAnd a global handler on the application instance:\n```js\napp.config.errorHandler = (err, instance, info) => {\n  monitoring.report(err, { info })\n}\n```\n\nNeither catches everything: errors inside async callbacks and event handlers need their own try/catch, and network failures are handled where the request is made — typically in a shared API wrapper or an interceptor.\n\nThe usual principles apply: never show a raw error to the user, report to a monitoring service, and place boundaries per section so one broken widget does not blank the page.',
    },
  },
  {
    id: 'vuejs-25-what-are-async-components',
    difficulty: intermediate,
    question: {
      ar: 'ما هو مفهوم الـ Async Components في Vue.js؟',
      en: 'What are async components in Vue.js?',
    },
    answer: {
      ar: 'Async Components تُستخدم لتحميل المكونات عند الحاجة، مما يُحسن أداء التطبيق.',
      en: 'Async components are loaded on demand rather than being included in the initial bundle:\n\n```js\nimport { defineAsyncComponent } from \'vue\'\n\nconst HeavyChart = defineAsyncComponent({\n  loader: () => import(\'./HeavyChart.vue\'),\n  loadingComponent: Spinner,\n  errorComponent: LoadError,\n  delay: 200,\n  timeout: 10000,\n})\n```\n\nThe build tool splits each dynamic import into its own chunk, so the code is only downloaded when the component is actually rendered.\n\nWhere it pays off: charting libraries, rich text editors, maps and modals — anything heavy that most users never open. Combined with route-level lazy loading, it is usually the largest available reduction in initial bundle size. Handle the error component properly, because a chunk can fail to load after a new deployment.',
    },
  },
  {
    id: 'vuejs-26-what-is-the-composition',
    difficulty: intermediate,
    question: {
      ar: 'كيف يمكنك استخدام الـ Composition API في Vue 3؟',
      en: 'What is the Composition API in Vue 3?',
    },
    answer: {
      ar: 'يمكن استخدام Composition API لتنظيم الشيفرة بطريقة أكثر مرونة باستخدام `setup()`.',
      en: 'The Composition API organises component logic by concern rather than by option type, using functions instead of the options object:\n\n```vue\n<script setup>\nimport { ref, computed, onMounted } from \'vue\'\n\nconst query = ref(\'\')\nconst results = ref([])\nconst hasResults = computed(() => results.value.length > 0)\n\nonMounted(() => load())\n</script>\n```\n\nThe problem it solves is that in the Options API, one feature\'s data, computed values, methods and hooks are scattered across four separate sections — and in a large component that becomes hard to follow.\n\nIts other major benefit is composables: extracting related logic into a reusable function with none of the naming collisions mixins suffered from. It also types far better, which matters for TypeScript projects. The Options API still works and is not deprecated.',
    },
  },
  {
    id: 'vuejs-27-what-are-refs-in',
    difficulty: beginner,
    question: {
      ar: 'ما هو مفهوم الـ Refs في Vue.js؟',
      en: 'What are refs in Vue.js?',
    },
    answer: {
      ar: 'Refs تُستخدم للوصول إلى عناصر DOM أو مكونات Vue بشكل مباشر.',
      en: 'The word covers two distinct things.\n\nReactive refs hold state:\n```js\nconst count = ref(0)\ncount.value++           // .value is required in script, but not in templates\n```\n\nTemplate refs access a DOM element or child component:\n```vue\n<script setup>\nconst inputEl = ref(null)\nonMounted(() => inputEl.value.focus())\n</script>\n\n<template>\n  <input ref="inputEl" />\n</template>\n```\n\nFor reactive state, `ref` works with any type while `reactive` works only with objects and loses reactivity when destructured — which is why ref is generally the safer default. Template refs are only populated after mount, so they are null during setup.',
    },
  },
  {
    id: 'vuejs-28-how-do-you-test',
    difficulty: intermediate,
    question: {
      ar: 'كيف يمكنك تنفيذ اختبارات في Vue.js؟',
      en: 'How do you test a Vue application?',
    },
    answer: {
      ar: 'يمكن استخدام أدوات مثل Jest وVue Test Utils لكتابة وتنفيذ اختبارات الوحدات.',
      en: 'Vitest with Vue Test Utils is the standard combination:\n\n```js\nimport { mount } from \'@vue/test-utils\'\nimport { describe, it, expect } from \'vitest\'\n\ndescribe(\'UserCard\', () => {\n  it(\'emits select with the user id when clicked\', async () => {\n    const wrapper = mount(UserCard, { props: { user: { id: 1, name: \'Sara\' } } })\n\n    expect(wrapper.text()).toContain(\'Sara\')\n\n    await wrapper.find(\'.card\').trigger(\'click\')\n    expect(wrapper.emitted(\'select\')[0]).toEqual([1])\n  })\n})\n```\n\nVitest is the natural choice in a Vite project since it shares the same config and transform pipeline. Testing Library\'s Vue bindings are a good alternative when you want to assert on what the user sees rather than on component internals, and Playwright or Cypress cover end-to-end flows.',
    },
  },
  {
    id: 'vuejs-29-what-is-teleport-in',
    difficulty: intermediate,
    question: {
      ar: 'ما هو مفهوم الـ Teleport في Vue 3؟',
      en: 'What is Teleport in Vue 3?',
    },
    answer: {
      ar: 'Teleport تُستخدم لنقل المكونات إلى أماكن مختلفة في شجرة DOM، مما يُحسن تنظيم الواجهة.',
      en: 'Teleport renders a component\'s markup somewhere else in the DOM, while keeping it logically in place within the component tree:\n\n```vue\n<Teleport to="body">\n  <div v-if="isOpen" class="modal">\n    <slot />\n  </div>\n</Teleport>\n```\n\nThe problem it solves is a familiar CSS one: a modal, dropdown or tooltip nested deep in the tree gets clipped by an ancestor\'s `overflow: hidden` or trapped beneath it by a stacking context, and no z-index value can escape that. Teleporting to body removes it from the problematic context entirely.\n\nCrucially, the component still behaves as a child in Vue terms — props, events and provide/inject all work normally. It is the direct counterpart of React\'s createPortal.',
    },
  },
];
