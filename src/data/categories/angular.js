// data/categories/angular.js
import { DIFFICULTY } from '../difficulty.js';

const { beginner, intermediate, advanced } = DIFFICULTY;

export const angular = [
  {
    id: 'angular-1-what-is-angular',
    difficulty: beginner,
    question: {
      ar: 'ما هو Angular؟',
      en: 'What is Angular?',
    },
    answer: {
      ar: 'Angular هو إطار عمل لبناء تطبيقات الويب أحادية الصفحة (SPA) باستخدام TypeScript.',
      en: 'Angular is a full framework for building single-page applications, built on TypeScript and maintained by Google. Unlike React it is opinionated: routing, HTTP, forms, dependency injection and testing all ship in the box, so architectural decisions are largely made for you. That is its main appeal for large teams and enterprise applications.',
    },
  },
  {
    id: 'angular-2-what-are-the-advantages',
    difficulty: beginner,
    question: {
      ar: 'ما هي مميزات Angular؟',
      en: 'What are the advantages of Angular?',
    },
    answer: {
      ar: 'مميزات Angular تشمل الأداء العالي، الهيكلية الواضحة، دعم التوجيه، وإمكانية إعادة استخدام المكونات.',
      en: '• A complete, consistent toolkit — no assembling a stack from separate libraries.\n• TypeScript throughout, so type safety is the default rather than an add-on.\n• A clear architecture that scales across large teams.\n• Powerful dependency injection, which makes testing and substitution straightforward.\n• Ahead-of-time compilation and tree shaking for a smaller production bundle.\n• A stable upgrade path with automated migrations via `ng update`.\n\nThe trade-off is a steeper learning curve and more ceremony for small projects.',
    },
  },
  {
    id: 'angular-3-what-are-components-in',
    difficulty: beginner,
    question: {
      ar: 'ما هو مفهوم المكونات (Components) في Angular؟',
      en: 'What are components in Angular?',
    },
    answer: {
      ar: 'المكونات هي اللبنات الأساسية في Angular، تمثل جزءًا من واجهة المستخدم وتحتوي على منطقها.',
      en: 'Components are the basic building blocks: each represents a section of the UI and owns its own template, styles and logic.\n\n```ts\n@Component({\n  selector: \'app-user-card\',\n  standalone: true,\n  template: `<h3>{{ user.name }}</h3>`,\n  styleUrl: \'./user-card.css\',\n})\nexport class UserCardComponent {\n  @Input({ required: true }) user!: User;\n  @Output() selected = new EventEmitter<string>();\n}\n```\n\nSince Angular 14 components can be standalone, declaring their own imports instead of being registered in an NgModule — which is now the recommended approach and removes a lot of the old boilerplate.',
    },
  },
  {
    id: 'angular-4-what-are-services-in',
    difficulty: beginner,
    question: {
      ar: 'ما هو مفهوم الخدمات (Services) في Angular؟',
      en: 'What are services in Angular?',
    },
    answer: {
      ar: 'الخدمات تُستخدم لتوفير منطق مشترك بين المكونات، وتُستخدم عادةً للتفاعل مع واجهات برمجة التطبيقات.',
      en: 'Services hold logic shared across components — typically API access, state, or any behaviour that does not belong in a template.\n\n```ts\n@Injectable({ providedIn: \'root\' })\nexport class UserService {\n  private http = inject(HttpClient);\n\n  getUser(id: string) {\n    return this.http.get<User>(`/api/users/${id}`);\n  }\n}\n```\n\n`providedIn: \'root\'` registers the service as an application-wide singleton and makes it tree-shakeable — if nothing injects it, it is removed from the bundle. Keeping components thin and pushing logic into services is the main structural discipline in an Angular codebase.',
    },
  },
  {
    id: 'angular-5-how-do-you-create',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك إنشاء مكون جديد في Angular؟',
      en: 'How do you create a new component in Angular?',
    },
    answer: {
      ar: 'يمكنك إنشاء مكون جديد باستخدام الأمر `ng generate component component-name`.',
      en: 'With the CLI:\n\n```bash\nng generate component user-card\nng g c user-card          # shorthand\n```\n\nThis creates the class, template, styles and spec file, and wires them together. The CLI is a significant part of the Angular experience: `ng generate` also scaffolds services, guards, pipes and directives, `ng update` performs automated migrations between versions, and `ng build` handles AOT compilation and optimisation.',
    },
  },
  {
    id: 'angular-6-how-does-routing-work',
    difficulty: beginner,
    question: {
      ar: 'ما هو مفهوم التوجيه (Routing) في Angular؟',
      en: 'How does routing work in Angular?',
    },
    answer: {
      ar: 'التوجيه يُستخدم للتنقل بين المكونات في تطبيق Angular، ويمكن تعريفه في ملف `app-routing.module.ts`.',
      en: 'Routing maps URL paths to components:\n\n```ts\nexport const routes: Routes = [\n  { path: \'\', component: HomeComponent },\n  { path: \'users/:id\', component: UserDetailComponent },\n  {\n    path: \'admin\',\n    canActivate: [authGuard],\n    loadChildren: () => import(\'./admin/routes\').then(m => m.adminRoutes),\n  },\n  { path: \'**\', component: NotFoundComponent },\n];\n```\n\nYou navigate with the routerLink directive in templates or the Router service in code, and read parameters from ActivatedRoute. The loadChildren form above is lazy loading — that route\'s code is only downloaded when a user visits it, which is the single most effective bundle-size optimisation in an Angular app.',
    },
  },
  {
    id: 'angular-7-how-do-you-pass',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك تمرير البيانات بين المكونات؟',
      en: 'How do you pass data between components in Angular?',
    },
    answer: {
      ar: 'يمكن تمرير البيانات باستخدام المدخلات (`@Input`) والمخرجات (`@Output`) في Angular.',
      en: 'Between a parent and child, with @Input and @Output:\n\n```ts\n// child\n@Input({ required: true }) user!: User;\n@Output() deleted = new EventEmitter<string>();\n\n// parent template\n<app-user-card [user]="currentUser" (deleted)="onDelete($event)" />\n```\n\nData flows down through inputs and events flow up through outputs. For components that are not directly related, you use a shared service — usually exposing an observable or a signal — rather than threading data through intermediate components.',
    },
  },
  {
    id: 'angular-8-what-is-dependency-injection',
    difficulty: intermediate,
    question: {
      ar: 'ما هو مفهوم الـ Dependency Injection في Angular؟',
      en: 'What is dependency injection in Angular?',
    },
    answer: {
      ar: 'Dependency Injection يُستخدم لإدارة الاعتمادات بين الكائنات، مما يعزز قابلية إعادة الاستخدام والاختبار.',
      en: 'Dependency injection means a class declares what it needs and Angular\'s injector supplies it, rather than the class constructing its own dependencies.\n\n```ts\nexport class OrderComponent {\n  private orders = inject(OrderService);      // modern inject() function\n\n  // or the constructor form\n  constructor(private http: HttpClient) {}\n}\n```\n\nWhy it matters: it decouples classes from concrete implementations, makes substitution in tests trivial, and centralises lifetime management. Angular\'s injector is hierarchical — a service provided at root is a singleton, while one provided on a component gets a new instance per component instance. Injection tokens let you inject configuration values and interfaces, not just classes.',
    },
  },
  {
    id: 'angular-9-what-is-rxjs-and',
    difficulty: intermediate,
    question: {
      ar: 'ما هي RxJS وما دورها في Angular؟',
      en: 'What is RxJS and what role does it play in Angular?',
    },
    answer: {
      ar: 'RxJS هي مكتبة تُستخدم لمعالجة البيانات غير المتزامنة باستخدام البرمجة التفاعلية.',
      en: 'RxJS is a reactive programming library built around Observables — streams of values over time — and Angular uses it throughout: HttpClient, router events, forms and more all return observables.\n\n```ts\nthis.search.valueChanges.pipe(\n  debounceTime(300),\n  distinctUntilChanged(),\n  switchMap(term => this.api.search(term)),\n  takeUntilDestroyed(this.destroyRef),\n).subscribe(results => this.results = results);\n```\n\nThat example shows why it earns its complexity: debouncing, deduplication and automatic cancellation of superseded requests in four lines. `switchMap` in particular cancels the previous request when a new one arrives, which is exactly what you want for type-ahead search.\n\nThe main hazard is memory leaks from unclosed subscriptions — takeUntilDestroyed or the async pipe both solve that. Angular\'s newer signals cover simpler reactive state with much less overhead.',
    },
  },
  {
    id: 'angular-10-how-do-you-build',
    difficulty: intermediate,
    question: {
      ar: 'كيف يمكنك تنفيذ النموذج (Forms) في Angular؟',
      en: 'How do you build forms in Angular?',
    },
    answer: {
      ar: 'يمكن استخدام نموذج تفاعلي (`Reactive Forms`) أو نموذج مباشر (`Template-driven Forms`) لإنشاء النماذج.',
      en: 'Angular offers two approaches. Reactive forms define the model in TypeScript and are the recommended choice for anything non-trivial:\n\n```ts\nform = new FormGroup({\n  email: new FormControl(\'\', [Validators.required, Validators.email]),\n  password: new FormControl(\'\', [Validators.required, Validators.minLength(8)]),\n});\n\nonSubmit() {\n  if (this.form.invalid) return;\n  this.auth.login(this.form.getRawValue());\n}\n```\n\nTemplate-driven forms use ngModel in the template and are simpler for very small forms.\n\nReactive forms win for most cases because the model is explicit and typed, validation is testable without rendering, and dynamic fields and cross-field rules are far easier to express.',
    },
  },
  {
    id: 'angular-11-what-are-pipes-in',
    difficulty: beginner,
    question: {
      ar: 'ما هو مفهوم الـ Pipes في Angular؟',
      en: 'What are pipes in Angular?',
    },
    answer: {
      ar: 'Pipes تُستخدم لتحويل البيانات في القوالب، مثل تحويل التاريخ أو الأرقام.',
      en: 'Pipes transform values for display inside templates:\n\n```html\n{{ createdAt | date:\'medium\' }}\n{{ total | currency:\'USD\' }}\n{{ name | uppercase }}\n{{ items$ | async }}\n```\n\nCustom pipes implement PipeTransform:\n```ts\n@Pipe({ name: \'truncate\', standalone: true })\nexport class TruncatePipe implements PipeTransform {\n  transform(value: string, limit = 50): string {\n    return value.length > limit ? value.slice(0, limit) + \'…\' : value;\n  }\n}\n```\n\nA performance note: pipes are pure by default, meaning they only recompute when their input reference changes. An impure pipe runs on every change detection cycle and can be a real performance problem — avoid it unless you genuinely need it.',
    },
  },
  {
    id: 'angular-12-how-do-you-use',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك استخدام HttpClient في Angular؟',
      en: 'How do you use HttpClient in Angular?',
    },
    answer: {
      ar: 'يمكن استخدام `HttpClient` للتفاعل مع واجهات برمجة التطبيقات، وذلك بعد استيراد `HttpClientModule`.',
      en: '```ts\n@Injectable({ providedIn: \'root\' })\nexport class ProductService {\n  private http = inject(HttpClient);\n\n  list(page: number) {\n    return this.http.get<Product[]>(\'/api/products\', {\n      params: { page },\n    });\n  }\n\n  create(product: NewProduct) {\n    return this.http.post<Product>(\'/api/products\', product);\n  }\n}\n```\n\nYou register it with `provideHttpClient()` in the application config. Two things worth knowing: HttpClient returns a cold observable, so nothing is sent until you subscribe (the async pipe subscribes for you); and interceptors are the right place for cross-cutting concerns such as attaching auth tokens, retrying and central error handling.',
    },
  },
  {
    id: 'angular-13-what-are-observables-in',
    difficulty: intermediate,
    question: {
      ar: 'ما هو مفهوم الـ Observables في Angular؟',
      en: 'What are Observables in Angular?',
    },
    answer: {
      ar: 'Observables هي نمط للبرمجة يسمح بالتعامل مع تدفقات البيانات غير المتزامنة.',
      en: 'An Observable represents a stream of values delivered over time, which can be zero, one or many, and which can be cancelled.\n\nCompared with a Promise:\n• A Promise resolves once; an Observable can emit repeatedly.\n• A Promise starts immediately; an Observable is lazy and starts on subscribe.\n• A Promise cannot be cancelled; unsubscribing from an Observable cancels the work.\n• Observables compose through operators — map, filter, debounce, retry, switchMap.\n\nThat cancellation property is why Angular uses them for HTTP: navigating away from a page cancels its in-flight requests automatically when the subscription is torn down.\n\nThe practical discipline is managing subscriptions. Prefer the async pipe in templates, which subscribes and unsubscribes for you, and use takeUntilDestroyed when subscribing in code.',
    },
  },
  {
    id: 'angular-14-what-are-route-guards',
    difficulty: intermediate,
    question: {
      ar: 'كيف يمكنك استخدام الحراس (Guards) في Angular؟',
      en: 'What are route guards in Angular?',
    },
    answer: {
      ar: 'الحراس تُستخدم للتحكم في الوصول إلى المسارات، ويمكن استخدامها مع `CanActivate`.',
      en: 'Guards control whether navigation to a route is allowed:\n\n```ts\nexport const authGuard: CanActivateFn = (route, state) => {\n  const auth = inject(AuthService);\n  const router = inject(Router);\n\n  if (auth.isAuthenticated()) return true;\n  return router.createUrlTree([\'/login\'], {\n    queryParams: { returnUrl: state.url },\n  });\n};\n```\n\nThe main types are CanActivate (entering a route), CanActivateChild, CanDeactivate (leaving — useful for unsaved-changes warnings) and CanMatch (whether a route matches at all, which can prevent a lazy chunk being downloaded).\n\nAn important caveat: a guard is a UX mechanism, not security. Anyone can call your API directly, so authorization must be enforced on the server regardless of what the guard does.',
    },
  },
  {
    id: 'angular-15-what-are-lifecycle-hooks',
    difficulty: intermediate,
    question: {
      ar: 'ما هو مفهوم الـ Lifecycle Hooks في Angular؟',
      en: 'What are lifecycle hooks in Angular?',
    },
    answer: {
      ar: 'Lifecycle Hooks هي دوال تُستدعى في مراحل حياة المكون، مثل `ngOnInit` و`ngOnDestroy`.',
      en: 'Lifecycle hooks let you run code at specific points in a component\'s life:\n\n• ngOnInit — after inputs are first set; the right place for initialisation and data loading (not the constructor).\n• ngOnChanges — whenever an input value changes.\n• ngAfterViewInit — once the view and any @ViewChild references exist.\n• ngOnDestroy — cleanup: unsubscribe, clear timers, remove listeners.\n\n```ts\nexport class ChartComponent implements OnInit, OnDestroy {\n  ngOnInit() { this.load(); }\n  ngOnDestroy() { this.chart?.destroy(); }\n}\n```\n\nTwo practical rules: keep the constructor for dependency injection only, since inputs are not yet available there; and treat ngOnDestroy as mandatory wherever you subscribe or allocate, because skipping it is the most common cause of memory leaks in Angular apps.',
    },
  },
  {
    id: 'angular-16-how-do-you-manage',
    difficulty: intermediate,
    question: {
      ar: 'كيف يمكنك إدارة الحالة في تطبيق Angular؟',
      en: 'How do you manage state in an Angular application?',
    },
    answer: {
      ar: 'يمكن استخدام مكتبة مثل NgRx لإدارة الحالة في تطبيقات Angular.',
      en: 'The options, in increasing order of weight:\n\n1. Component state — plain properties or signals, for anything local.\n2. A shared service holding a signal or a BehaviorSubject, which covers most applications:\n```ts\n@Injectable({ providedIn: \'root\' })\nexport class CartService {\n  private items = signal<CartItem[]>([]);\n  readonly total = computed(() => this.items().reduce((s, i) => s + i.price, 0));\n\n  add(item: CartItem) { this.items.update(list => [...list, item]); }\n}\n```\n3. NgRx for large applications needing a strict unidirectional flow, devtools and time-travel debugging — at the cost of substantial boilerplate.\n4. NgRx SignalStore or NGXS as lighter middle grounds.\n\nSignals, introduced in Angular 16, changed the calculus considerably: fine-grained reactivity in a service now covers cases that previously justified a full state library.',
    },
  },
  {
    id: 'angular-17-how-do-you-access',
    difficulty: intermediate,
    question: {
      ar: 'ما هي طرق التفاعل مع عناصر DOM في Angular؟',
      en: 'How do you access DOM elements in Angular?',
    },
    answer: {
      ar: 'يمكن استخدام `@ViewChild` و`@ElementRef` للتفاعل مع عناصر DOM.',
      en: 'With @ViewChild and ElementRef, or the newer viewChild signal query:\n\n```ts\nexport class SearchComponent implements AfterViewInit {\n  @ViewChild(\'searchInput\') searchInput!: ElementRef<HTMLInputElement>;\n\n  ngAfterViewInit() {\n    this.searchInput.nativeElement.focus();\n  }\n}\n```\n\nThe reference is only available from ngAfterViewInit onward, not in ngOnInit.\n\nThe guidance is to use this sparingly. Angular is declarative, and most DOM work should be expressed through bindings and directives instead. Direct access is appropriate for focus management, measurement, and integrating a third-party library that needs a real element. Writing to innerHTML this way bypasses Angular\'s sanitisation and creates an XSS risk.',
    },
  },
  {
    id: 'angular-18-how-do-you-style',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك إضافة أنماط (Styles) إلى مكونات Angular؟',
      en: 'How do you style components in Angular?',
    },
    answer: {
      ar: 'يمكن إضافة أنماط مباشرة في المكون أو من خلال ملفات CSS مرتبطة بالمكون.',
      en: 'Styles are declared per component and are scoped to it by default:\n\n```ts\n@Component({\n  selector: \'app-card\',\n  styleUrl: \'./card.css\',        // or styles: [`...`] inline\n  template: `...`,\n})\n```\n\nAngular emulates scoped styles by adding generated attributes to elements, so a `.title` rule in one component cannot affect another. Global styles go in styles.css.\n\nFor the cases where you need to reach into a child component\'s markup — styling a third-party library, for instance — there is the `::ng-deep` pseudo-class, though it is deprecated and best avoided in favour of CSS custom properties, which cross component boundaries naturally.',
    },
  },
  {
    id: 'angular-19-what-are-modules-in',
    difficulty: intermediate,
    question: {
      ar: 'ما هو مفهوم الـ Module في Angular؟',
      en: 'What are modules in Angular?',
    },
    answer: {
      ar: 'Modules تُستخدم لتنظيم المكونات والخدمات، ويمكن أن تحتوي على ميزات متعددة.',
      en: 'An NgModule groups related components, directives, pipes and providers into a cohesive unit, declaring what it uses (imports), what it owns (declarations) and what it shares (exports).\n\n```ts\n@NgModule({\n  declarations: [UserListComponent, UserCardComponent],\n  imports: [CommonModule, RouterModule],\n  exports: [UserListComponent],\n})\nexport class UsersModule {}\n```\n\nThe important context is that this model is being superseded. Since Angular 14, standalone components declare their own imports directly and NgModules are optional; since Angular 17 standalone is the default for new projects. Understanding NgModules still matters for maintaining existing codebases and for planning a migration.',
    },
  },
  {
    id: 'angular-20-how-do-you-handle',
    difficulty: intermediate,
    question: {
      ar: 'كيف يمكنك التعامل مع الأخطاء في Angular؟',
      en: 'How do you handle errors in Angular?',
    },
    answer: {
      ar: 'يمكن استخدام `HttpInterceptor` أو `ErrorHandler` لإدارة الأخطاء في تطبيقات Angular.',
      en: 'Two complementary mechanisms.\n\nAn HTTP interceptor for network failures:\n```ts\nexport const errorInterceptor: HttpInterceptorFn = (req, next) =>\n  next(req).pipe(\n    catchError((error: HttpErrorResponse) => {\n      if (error.status === 401) inject(AuthService).logout();\n      inject(NotificationService).showError(messageFor(error));\n      return throwError(() => error);\n    })\n  );\n```\n\nAnd a global ErrorHandler for everything else:\n```ts\n@Injectable()\nexport class AppErrorHandler implements ErrorHandler {\n  handleError(error: unknown) {\n    this.monitoring.report(error);\n  }\n}\n```\n\nThe principles are the same as anywhere: distinguish expected failures you present to the user from unexpected ones you log and report, never show a raw stack trace, and report to a monitoring service rather than relying on the console.',
    },
  },
  {
    id: 'angular-21-what-is-an-ngmodule',
    difficulty: beginner,
    question: {
      ar: 'ما هو مفهوم الـ NgModule في Angular؟',
      en: 'What is an NgModule in Angular?',
    },
    answer: {
      ar: 'NgModule هو وحدة بناء تُستخدم لتجميع المكونات والخدمات، وتُستخدم لتحديد التطبيقات.',
      en: 'NgModule is the decorator that defines a module — the organisational unit that historically told Angular how the pieces of an application fit together. Its metadata declares:\n\n• declarations — the components, directives and pipes it owns.\n• imports — other modules whose exports it needs.\n• exports — what it makes available to importers.\n• providers — services it registers.\n• bootstrap — the root component, in the root module only.\n\nIn modern Angular this role has largely moved to standalone components, which import their dependencies directly, and to `bootstrapApplication()` with an application config instead of a root module. New code should use standalone; NgModules remain for existing projects.',
    },
  },
  {
    id: 'angular-22-how-do-you-test',
    difficulty: intermediate,
    question: {
      ar: 'كيف يمكنك استخدام الاختبارات في Angular؟',
      en: 'How do you test an Angular application?',
    },
    answer: {
      ar: 'يمكن استخدام Jasmine وKarma لكتابة وتنفيذ اختبارات الوحدات في Angular.',
      en: 'Angular ships with a testing setup — Jasmine as the framework with Karma as the runner, though many teams switch to Jest or Vitest for speed.\n\n```ts\ndescribe(\'UserCardComponent\', () => {\n  let fixture: ComponentFixture<UserCardComponent>;\n\n  beforeEach(async () => {\n    await TestBed.configureTestingModule({\n      imports: [UserCardComponent],\n      providers: [{ provide: UserService, useValue: mockUserService }],\n    }).compileComponents();\n\n    fixture = TestBed.createComponent(UserCardComponent);\n  });\n\n  it(\'renders the user name\', () => {\n    fixture.componentRef.setInput(\'user\', { name: \'Sara\' });\n    fixture.detectChanges();\n    expect(fixture.nativeElement.textContent).toContain(\'Sara\');\n  });\n});\n```\n\nTestBed configures a testing module and dependency injection makes substituting services straightforward. HttpTestingController lets you assert on outgoing requests without hitting the network, and Cypress or Playwright cover end-to-end tests.',
    },
  },
  {
    id: 'angular-23-what-is-the-async',
    difficulty: beginner,
    question: {
      ar: 'ما هو مفهوم الـ Async Pipe في Angular؟',
      en: 'What is the async pipe in Angular?',
    },
    answer: {
      ar: 'Async Pipe يُستخدم في القوالب للتعامل مع Observables بسهولة، مما يُسهل عرض البيانات.',
      en: 'The async pipe subscribes to an Observable or Promise in the template and renders its latest value, unsubscribing automatically when the component is destroyed:\n\n```html\n@if (user$ | async; as user) {\n  <h2>{{ user.name }}</h2>\n}\n```\n\nIt is the recommended way to consume observables in templates for two reasons: it removes the most common source of memory leaks, since you cannot forget to unsubscribe; and it works correctly with OnPush change detection, marking the component for check when a new value arrives.\n\nOne detail worth knowing: each async pipe creates its own subscription, so using it several times on the same source triggers the work repeatedly — use the `as` syntax above, or share() on the stream.',
    },
  },
  {
    id: 'angular-24-how-do-animations-work',
    difficulty: intermediate,
    question: {
      ar: 'كيف يمكنك استخدام الرسوم المتحركة (Animations) في Angular؟',
      en: 'How do animations work in Angular?',
    },
    answer: {
      ar: 'يمكن استخدام مكتبة الرسوم المتحركة المدمجة في Angular لإضافة تأثيرات الرسوم المتحركة بسهولة.',
      en: 'Angular has a built-in animation system driven by declarative state definitions:\n\n```ts\n@Component({\n  animations: [\n    trigger(\'fade\', [\n      transition(\':enter\', [\n        style({ opacity: 0 }),\n        animate(\'200ms ease-in\', style({ opacity: 1 })),\n      ]),\n      transition(\':leave\', [animate(\'150ms\', style({ opacity: 0 }))]),\n    ]),\n  ],\n})\n```\n\nIts value over plain CSS is animating elements entering and leaving the DOM, which CSS alone cannot do because the element is removed before a transition can run.\n\nTwo practical notes: animate only transform and opacity for smooth results, and respect the user\'s reduced-motion preference — the animation module supports disabling animations globally for that.',
    },
  },
  {
    id: 'angular-25-what-are-dynamic-components',
    difficulty: advanced,
    question: {
      ar: 'ما هو مفهوم الـ Dynamic Components في Angular؟',
      en: 'What are dynamic components in Angular?',
    },
    answer: {
      ar: 'Dynamic Components تُستخدم لإنشاء مكونات في وقت التشغيل، مما يسمح بزيادة مرونة التطبيق.',
      en: 'Dynamic components are created at runtime rather than declared in a template:\n\n```ts\nexport class DialogHostComponent {\n  private container = viewChild.required(\'container\', { read: ViewContainerRef });\n\n  open<T>(component: Type<T>, inputs: Partial<T>) {\n    const ref = this.container().createComponent(component);\n    Object.entries(inputs).forEach(([key, value]) => ref.setInput(key, value));\n    return ref;\n  }\n}\n```\n\nWhere they earn their place: dialog and modal systems, dashboards where the widget type is data-driven, and plugin architectures where the component is not known at compile time.\n\nTwo cautions: destroy the component reference explicitly to avoid leaks, and remember that a component only reachable dynamically may be tree-shaken out unless it is referenced somewhere the compiler can see.',
    },
  },
  {
    id: 'angular-26-how-do-you-improve',
    difficulty: intermediate,
    question: {
      ar: 'كيف يمكنك تحسين أداء تطبيق Angular؟',
      en: 'How do you improve the performance of an Angular application?',
    },
    answer: {
      ar: 'يمكن تحسين الأداء باستخدام تقنيات مثل Lazy Loading وChange Detection Strategy.',
      en: 'The levers that matter most:\n\n1. Change detection — the biggest one. Angular\'s default strategy checks every component on every event. `ChangeDetectionStrategy.OnPush` limits checks to when inputs change or an event fires in the component, which can transform performance in a large tree. Signals go further, updating only what actually depends on the changed value.\n\n2. Lazy loading routes with loadChildren or loadComponent, so users only download the code for the pages they visit.\n\n3. trackBy (or the `track` expression in the new control flow) on lists, so Angular reuses DOM nodes instead of rebuilding them.\n\n4. Bundle size — analyse with source-map-explorer and check budgets in angular.json.\n\n5. Virtual scrolling from the CDK for long lists.\n\n6. Avoiding function calls in templates, which re-run on every change detection cycle; use a computed signal or a pure pipe instead.\n\nAs always, profile before optimising — the Angular DevTools profiler shows exactly which components are costing time.',
    },
  },
  {
    id: 'angular-27-what-are-service-workers',
    difficulty: intermediate,
    question: {
      ar: 'ما هو مفهوم الـ Service Workers في Angular؟',
      en: 'What are Service Workers in Angular?',
    },
    answer: {
      ar: 'Service Workers تُستخدم لتوفير تجربة مستخدم غير متصلة بالإنترنت من خلال التخزين المؤقت للموارد.',
      en: 'Angular has first-class PWA support through @angular/service-worker, added with `ng add @angular/pwa`. It generates a manifest and a service worker configured by ngsw-config.json, which caches the application shell and lets you declare caching strategies for API responses.\n\nWhat it gives you: offline availability, faster repeat loads from cache, and controlled update behaviour through the SwUpdate service, which lets you prompt the user when a new version is available.\n\nThe caution is the same as with any service worker: a misconfigured one can serve a stale application for days, so always implement the update flow rather than hoping the cache expires.',
    },
  },
  {
    id: 'angular-28-how-do-you-format',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك تنسيق البيانات في Angular باستخدام Pipes؟',
      en: 'How do you format data with pipes in Angular?',
    },
    answer: {
      ar: 'يمكن استخدام Pipes مثل `date` و`currency` لتنسيق البيانات في القوالب.',
      en: 'Angular ships formatting pipes that are locale-aware:\n\n```html\n{{ createdAt | date:\'dd MMM yyyy\' }}\n{{ price | currency:\'EGP\':\'symbol\':\'1.2-2\' }}\n{{ ratio | percent:\'1.0-1\' }}\n{{ count | number:\'1.0-0\' }}\n{{ text | slice:0:100 }}\n```\n\nThey are built on the Intl APIs, so registering a locale gives you correctly formatted dates, numbers and currency for that language — which matters for internationalised applications, where hand-rolled formatting almost always gets something wrong.',
    },
  },
  {
    id: 'angular-29-what-is-event-binding',
    difficulty: beginner,
    question: {
      ar: 'ما هو مفهوم الـ Event Binding في Angular؟',
      en: 'What is event binding in Angular?',
    },
    answer: {
      ar: 'Event Binding يُستخدم للاستماع إلى أحداث المستخدم، مثل النقر على زر، من خلال استخدام `()` في القوالب.',
      en: 'Event binding listens for events from the template using parentheses:\n\n```html\n<button (click)="save()">Save</button>\n<input (input)="onSearch($event)" (keyup.enter)="submit()" />\n<app-user-card (deleted)="remove($event)" />\n```\n\nIt complements property binding with square brackets — `[value]="name"` — and the two combine in the banana-in-a-box syntax `[(ngModel)]="name"` for two-way binding.\n\nAngular also supports event modifiers such as `keyup.enter` above, which removes the need to check key codes manually. Note that `$event` is the native DOM event for elements, but the emitted value for a component\'s @Output.',
    },
  },
];
