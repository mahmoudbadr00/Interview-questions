// data/enrichment/typescript.js
export const typescriptEnrichment = {
  'ts-why': {
    depth: 'know',
    keyPoints: [
      { ar: 'أنواع ثابتة تُفحص وقت الترجمة', en: 'Static types checked at compile time', terms: ['compile', 'ترجمة', 'static', 'ثابت', 'before run', 'قبل التشغيل'] },
      { ar: 'الأنواع تختفي وقت التشغيل', en: 'Types are erased at runtime', terms: ['runtime', 'وقت التشغيل', 'erased', 'تختفي', 'stripped', 'no runtime'] },
      { ar: 'إعادة هيكلة آمنة وتوثيق حي', en: 'Safe refactoring and living documentation', terms: ['refactor', 'هيكلة', 'document', 'توثيق', 'autocomplete', 'إكمال', 'ide', 'editor'] },
      { ar: 'ما زلت بحاجة لتحقق وقت التشغيل', en: 'Still need runtime validation', terms: ['zod', 'validat', 'تحقق', 'runtime', 'api', 'boundary', 'حدود'] },
    ],
  },
  'ts-interface-vs-type': {
    depth: 'know',
    keyPoints: [
      { ar: 'declaration merging للـ interface فقط', en: 'Declaration merging is interface-only', terms: ['merg', 'دمج', 'reopen', 'augment', 'توسيع'] },
      { ar: 'type يعبّر عن الاتحادات والأنواع المحسوبة', en: 'type expresses unions and computed types', terms: ['union', 'اتحاد', 'tuple', 'computed', 'محسوب', 'conditional', 'mapped', 'keyof'] },
      { ar: 'extends مقابل &', en: 'extends vs intersection (&)', terms: ['extends', 'intersection', '&', 'تقاطع'] },
      { ar: 'الاتساق أهم من الاختيار', en: 'Consistency matters more than the choice', terms: ['consisten', 'اتساق', 'convention', 'team', 'فريق'] },
    ],
  },
  'ts-generics': {
    depth: 'explain',
    keyPoints: [
      { ar: 'متغيّر نوع يربط المدخل بالمخرج', en: 'A type variable linking input to output', terms: ['type variable', 'parameter', 'معامل', 'متغير', 'relationship', 'علاقة', '<t>', 'placeholder'] },
      { ar: 'الفرق عن any: الحفاظ على النوع', en: 'Unlike any, the type is preserved', terms: ['any', 'preserve', 'يحافظ', 'keep', 'lose', 'يفقد', 'inference', 'استنتاج'] },
      { ar: 'القيود بـ extends', en: 'Constraints with extends', terms: ['extends', 'constraint', 'قيد', 'keyof'] },
      { ar: 'لا تضف معاملًا يظهر مرة واحدة فقط', en: 'Do not add a parameter used only once', terms: ['once', 'مرة واحدة', 'unknown', 'unnecessary', 'لا حاجة'] },
    ],
    followUps: [
      {
        id: 'ts-generics-f1',
        question: { ar: 'اكتب توقيع دالة تأخذ كائنًا ومفتاحًا وتعيد قيمة ذلك المفتاح بنوع دقيق.', en: 'Write the signature of a function that takes an object and a key and returns that key\'s value, precisely typed.' },
        answer: { ar: 'function getProperty<T, K extends keyof T>(obj: T, key: K): T[K]. القيد K extends keyof T يمنع تمرير مفتاح غير موجود، والنوع المُعاد T[K] يتبع المفتاح تلقائيًا: getProperty(user, "name") تعطي string وgetProperty(user, "age") تعطي number.', en: 'function getProperty<T, K extends keyof T>(obj: T, key: K): T[K]. The constraint K extends keyof T rejects keys that do not exist, and the return type T[K] follows the key automatically: getProperty(user, "name") is string and getProperty(user, "age") is number.' },
        keyPoints: [{ ar: 'K extends keyof T و T[K]', en: 'K extends keyof T and T[K]', terms: ['keyof', 't[k]', 'extends'] }],
      },
    ],
  },
  'ts-narrowing': {
    depth: 'explain',
    keyPoints: [
      { ar: 'تحليل تدفق التحكم', en: 'Control-flow analysis', terms: ['control flow', 'تدفق', 'branch', 'فرع', 'if', 'narrow', 'تضييق'] },
      { ar: 'typeof / instanceof / in', en: 'typeof, instanceof, in', terms: ['typeof', 'instanceof', ' in ', 'in operator'] },
      { ar: 'الخاصية المميِّزة', en: 'Discriminant property', terms: ['discriminant', 'مميز', 'kind', 'type field', 'status', 'tag'] },
      { ar: 'ينهار مع الوصول غير المباشر', en: 'Breaks with indirect access', terms: ['callback', 'later', 'لاحق', 'const', 'local variable', 'متغير محلي', 'property'] },
    ],
  },
  'ts-discriminated-unions': {
    depth: 'apply',
    keyPoints: [
      { ar: 'خاصية مشتركة بقيمة حرفية مميِّزة', en: 'A shared property with a literal discriminant', terms: ['literal', 'حرفي', 'discriminant', 'tag', 'kind', 'status', 'type'] },
      { ar: 'الحالات المستحيلة غير قابلة للتمثيل', en: 'Impossible states unrepresentable', terms: ['impossible', 'مستحيل', 'invalid state', 'unrepresentable', 'boolean flags', 'أعلام'] },
      { ar: 'فحص الشمولية بـ never', en: 'Exhaustiveness checking with never', terms: ['never', 'exhaustive', 'شمول', 'switch', 'compile error'] },
    ],
    followUps: [
      {
        id: 'ts-discriminated-unions-f1',
        question: { ar: 'أضفت حالة "cancelled" جديدة إلى اتحاد الطلب. كيف تضمن أن كل switch في المشروع يتعامل معها؟', en: 'You added a new "cancelled" state to an order union. How do you guarantee every switch in the codebase handles it?' },
        answer: { ar: 'بفرع default يسند القيمة إلى متغير من نوع never: const _exhaustive: never = state. أي حالة غير معالجة تجعل النوع غير قابل للإسناد إلى never فيفشل الترجمة في كل switch ناقص. بهذا يصبح المترجم هو من يجد كل المواضع بدل البحث اليدوي.', en: 'With a default branch that assigns the value to a never-typed variable: const _exhaustive: never = state. Any unhandled case makes the type non-assignable to never, so compilation fails in every incomplete switch. The compiler finds every site for you instead of a manual search.' },
      },
    ],
  },
  'ts-utility-types-1': {
    depth: 'apply',
    keyPoints: [
      { ar: 'Partial لجعل الحقول اختيارية', en: 'Partial makes fields optional', terms: ['partial', 'optional', 'اختياري', 'update'] },
      { ar: 'Pick/Omit لاشتقاق أشكال جزئية', en: 'Pick/Omit derive subsets', terms: ['pick', 'omit', 'subset', 'اشتقاق', 'derive'] },
      { ar: 'اشتقاق بدل تكرار التعريف', en: 'Derive instead of duplicating', terms: ['duplicate', 'تكرار', 'sync', 'single source', 'مصدر واحد', 'drift'] },
    ],
  },
  'ts-conditional-types': {
    depth: 'design',
    keyPoints: [
      { ar: 'T extends U ? X : Y', en: 'T extends U ? X : Y', terms: ['extends', '? :', 'conditional', 'شرطي'] },
      { ar: 'التوزيع على الاتحادات', en: 'Distribution over unions', terms: ['distribut', 'توزيع', 'union', 'اتحاد', 'each member', 'كل عضو'] },
      { ar: 'infer لالتقاط جزء', en: 'infer to capture a part', terms: ['infer'] },
      { ar: 'الوضوح على الذكاء في كود التطبيق', en: 'Clarity over cleverness in app code', terms: ['readab', 'مقروء', 'clever', 'library', 'مكتبة', 'complex', 'معقد'] },
    ],
  },
  'ts-basic-types': {
    depth: 'know',
    keyPoints: [
      { ar: 'unknown آمن، any يعطّل الفحص', en: 'unknown is safe, any disables checking', terms: ['unknown', 'any', 'narrow', 'تضييق', 'disable', 'يعطل'] },
      { ar: 'never لما لا قيمة له', en: 'never for no possible value', terms: ['never', 'throw', 'exhaustive'] },
      { ar: 'الأنواع الأولية السبعة', en: 'The seven primitives', terms: ['string', 'number', 'boolean', 'bigint', 'symbol', 'null', 'undefined', 'primitive', 'أولي'] },
    ],
  },
  'ts-strict-mode': {
    depth: 'apply',
    keyPoints: [
      { ar: 'strictNullChecks الأهم', en: 'strictNullChecks matters most', terms: ['strictnullchecks', 'null', 'undefined', 'nullable'] },
      { ar: 'noImplicitAny', en: 'noImplicitAny', terms: ['noimplicitany', 'implicit any', 'any'] },
      { ar: 'بدونه إحساس زائف بالأمان', en: 'Without it, false confidence', terms: ['false', 'زائف', 'confidence', 'أمان', 'unchecked'] },
      { ar: 'فعّله تدريجيًا في المشاريع القائمة', en: 'Enable incrementally on existing projects', terms: ['incremental', 'تدريجي', 'gradually', 'file by file', 'migrat'] },
    ],
  },
  'ts-type-guards': {
    depth: 'apply',
    keyPoints: [
      { ar: 'توقيع value is Type', en: 'The value is Type signature', terms: ['value is', ' is ', 'predicate', 'guard'] },
      { ar: 'وعد للمترجم غير مفحوص', en: 'An unchecked promise to the compiler', terms: ['trust', 'يثق', 'unchecked', 'promise', 'hole', 'ثغرة', 'wrong'] },
      { ar: 'Zod للبيانات الخارجية', en: 'Zod for external data', terms: ['zod', 'schema', 'runtime', 'validat', 'parse', 'infer'] },
    ],
  },
};
