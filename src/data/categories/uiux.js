// data/categories/uiux.js
import { DIFFICULTY } from '../difficulty.js';

const { beginner, intermediate, advanced } = DIFFICULTY;

export const uiux = [
  {
    id: 'uiux-1-what-is-the-difference',
    difficulty: beginner,
    question: {
      ar: 'ما هو الفرق بين UI و UX؟',
      en: 'What is the difference between UI and UX?',
    },
    answer: {
      ar: '- User Interface (UI):\n  * يركز على المظهر البصري للمنتج\n  * تصميم العناصر التفاعلية\n  * اختيار الألوان والخطوط والأشكال\n\n- User Experience (UX):\n  * يركز على تجربة المستخدم الشاملة\n  * سهولة الاستخدام والتنقل\n  * فهم احتياجات المستخدم\n  * تحسين رضا المستخدم',
      en: '- User Interface (UI):\n  * Focuses on the visual surface of the product\n  * Designing the interactive elements\n  * Choosing colours, typography and shapes\n\n- User Experience (UX):\n  * Focuses on the overall experience of using the product\n  * Ease of use and navigation\n  * Understanding user needs\n  * Improving user satisfaction\n\nA useful way to put it: UX is how it works, UI is how it looks. A beautiful interface over a confusing flow still fails, and a perfectly logical flow that looks untrustworthy fails too — they are separate disciplines that must agree.',
    },
  },
  {
    id: 'uiux-2-what-are-the-core',
    difficulty: intermediate,
    question: {
      ar: 'ما هي عناصر User Experience Design الأساسية؟',
      en: 'What are the core elements of user experience design?',
    },
    answer: {
      ar: 'تتكون UX من خمسة عناصر أساسية:\n\n1. Strategy Plane:\n  * User Needs\n  * Business Goals\n\n2. Scope Plane:\n  * Features\n  * Requirements\n\n3. Structure Plane:\n  * Information Architecture\n  * User Flow\n\n4. Skeleton Plane:\n  * Navigation\n  * Layout\n\n5. Surface Plane:\n  * Visual Design\n  * Branding',
      en: 'Jesse James Garrett\'s model describes five planes, from abstract to concrete:\n\n1. Strategy plane:\n  * User needs\n  * Business goals\n\n2. Scope plane:\n  * Features\n  * Requirements\n\n3. Structure plane:\n  * Information architecture\n  * User flow\n\n4. Skeleton plane:\n  * Navigation\n  * Layout\n\n5. Surface plane:\n  * Visual design\n  * Branding\n\nThe value of the model is the ordering: decisions at each plane constrain the ones above it. Starting at the surface — picking colours before understanding the goal — is why redesigns often fail to fix anything.',
    },
  },
  {
    id: 'uiux-3-what-are-the-principles',
    difficulty: beginner,
    question: {
      ar: 'ما هي أهم مبادئ Design Thinking؟',
      en: 'What are the principles of design thinking?',
    },
    answer: {
      ar: 'Design Thinking يتكون من خمس مراحل:\n\n1. Empathize:\n  * فهم احتياجات المستخدم\n  * البحث والملاحظة\n\n2. Define:\n  * تحديد المشكلة\n  * صياغة Point of View\n\n3. Ideate:\n  * توليد الأفكار\n  * Brainstorming\n\n4. Prototype:\n  * إنشاء نماذج أولية\n\n5. Test:\n  * اختبار الحلول\n  * جمع Feedback',
      en: 'Design thinking has five stages:\n\n1. Empathize:\n  * Understand user needs\n  * Research and observation\n\n2. Define:\n  * Frame the problem\n  * Articulate a point of view\n\n3. Ideate:\n  * Generate ideas\n  * Brainstorming\n\n4. Prototype:\n  * Build something testable\n\n5. Test:\n  * Try the solution with users\n  * Gather feedback\n\nIt is iterative rather than linear — testing usually sends you back to define or ideate. The stage teams most often skip is Define, and a well-framed problem statement is what prevents building an elegant solution to the wrong thing.',
    },
  },
  {
    id: 'uiux-4-what-are-nielsen-s',
    difficulty: intermediate,
    question: {
      ar: 'ما هي Usability Heuristics لـ Nielsen؟',
      en: 'What are Nielsen\'s usability heuristics?',
    },
    answer: {
      ar: 'Nielsen\'s 10 Usability Heuristics:\n\n1. Visibility of System Status\n2. Match Between System and Real World\n3. User Control and Freedom\n4. Consistency and Standards\n5. Error Prevention\n6. Recognition Rather Than Recall\n7. Flexibility and Efficiency\n8. Aesthetic and Minimalist Design\n9. Help Users with Errors\n10. Help and Documentation',
      en: 'Nielsen\'s ten usability heuristics:\n\n1. Visibility of system status\n2. Match between the system and the real world\n3. User control and freedom\n4. Consistency and standards\n5. Error prevention\n6. Recognition rather than recall\n7. Flexibility and efficiency of use\n8. Aesthetic and minimalist design\n9. Help users recognise, diagnose and recover from errors\n10. Help and documentation\n\nTheir practical use is as a review checklist: walking an interface against these ten points catches a surprising proportion of usability problems for very little effort, which is why heuristic evaluation is a standard low-cost alternative when user testing is not feasible.',
    },
  },
  {
    id: 'uiux-5-what-types-of-user',
    difficulty: intermediate,
    question: {
      ar: 'ما هي أنواع User Research المختلفة؟',
      en: 'What types of user research are there?',
    },
    answer: {
      ar: 'User Research Methods:\n\n1. Qualitative:\n  * User Interviews\n  * Focus Groups\n  * Contextual Inquiry\n\n2. Quantitative:\n  * Surveys\n  * Analytics\n  * A/B Testing\n\n3. Behavioral:\n  * Usability Testing\n  * Eye Tracking\n  * Heat Maps\n\n4. Attitudinal:\n  * Satisfaction Surveys\n  * Card Sorting',
      en: 'User research methods fall into overlapping categories:\n\n1. Qualitative:\n  * User interviews\n  * Focus groups\n  * Contextual inquiry\n\n2. Quantitative:\n  * Surveys\n  * Analytics\n  * A/B testing\n\n3. Behavioural:\n  * Usability testing\n  * Eye tracking\n  * Heat maps\n\n4. Attitudinal:\n  * Satisfaction surveys\n  * Card sorting\n\nThe distinction that matters most is behavioural versus attitudinal — what people do versus what they say. They frequently disagree, and when they do, observed behaviour is the more reliable signal. Qualitative research tells you why; quantitative tells you how many.',
    },
  },
  {
    id: 'uiux-6-what-is-information-architecture',
    difficulty: intermediate,
    question: {
      ar: 'ما هو Information Architecture وما أهميته؟',
      en: 'What is information architecture and why does it matter?',
    },
    answer: {
      ar: 'Information Architecture (IA):\n\n1. الأهمية:\n  * تنظيم المحتوى\n  * تسهيل الوصول للمعلومات\n  * تحسين User Navigation\n\n2. عناصر IA:\n  * Organization Systems\n  * Labeling Systems\n  * Navigation Systems\n  * Search Systems\n\n3. أدوات:\n  * Site Maps\n  * User Flows\n  * Content Inventory',
      en: 'Information architecture (IA):\n\n1. Why it matters:\n  * Organising content\n  * Making information findable\n  * Improving navigation\n\n2. Its components:\n  * Organisation systems\n  * Labelling systems\n  * Navigation systems\n  * Search systems\n\n3. Tools:\n  * Site maps\n  * User flows\n  * Content inventories\n\nThe labelling part is underrated: most "I can\'t find it" problems are naming problems rather than structural ones. Using the words your users use, rather than your internal terminology, often does more than reorganising the menu.',
    },
  },
  {
    id: 'uiux-7-how-do-you-run',
    difficulty: intermediate,
    question: {
      ar: 'كيف تقوم بإجراء Usability Testing؟',
      en: 'How do you run a usability test?',
    },
    answer: {
      ar: 'خطوات Usability Testing:\n\n1. Planning:\n  * تحديد الأهداف\n  * اختيار المشاركين\n  * تجهيز Test Scenarios\n\n2. Conducting:\n  * Think-aloud Protocol\n  * Task Completion\n  * Observation\n\n3. Analysis:\n  * تحليل النتائج\n  * تحديد Issues\n  * اقتراح Solutions',
      en: 'The steps:\n\n1. Planning:\n  * Define the objectives\n  * Recruit representative participants\n  * Prepare realistic task scenarios\n\n2. Conducting:\n  * Think-aloud protocol\n  * Observe task completion\n  * Watch without intervening\n\n3. Analysis:\n  * Review the findings\n  * Identify the issues\n  * Propose solutions\n\nTwo rules that determine whether it works: give participants tasks, not instructions — "buy a blue shirt in your size" rather than "click the catalogue link" — and resist helping when they get stuck, because that moment is the finding. Five participants typically surface most of the major issues, so this does not need to be a large study.',
    },
  },
  {
    id: 'uiux-8-what-are-the-core',
    difficulty: beginner,
    question: {
      ar: 'ما هي أهم Design Principles في UI؟',
      en: 'What are the core UI design principles?',
    },
    answer: {
      ar: 'UI Design Principles:\n\n1. Visual Hierarchy:\n  * Size\n  * Color\n  * Contrast\n\n2. White Space:\n  * Readability\n  * Focus\n\n3. Color Theory:\n  * Color Psychology\n  * Color Harmony\n\n4. Typography:\n  * Readability\n  * Hierarchy\n\n5. Consistency:\n  * Visual Elements\n  * Patterns',
      en: 'UI design principles:\n\n1. Visual hierarchy:\n  * Size\n  * Colour\n  * Contrast\n\n2. White space:\n  * Readability\n  * Focus\n\n3. Colour theory:\n  * Colour psychology\n  * Colour harmony\n\n4. Typography:\n  * Readability\n  * Hierarchy\n\n5. Consistency:\n  * Visual elements\n  * Patterns\n\nOf these, hierarchy and consistency carry the most weight. Hierarchy tells the user where to look first; consistency means they only have to learn your interface once. White space is the one most often sacrificed under pressure to fit more in, usually to the detriment of everything else.',
    },
  },
  {
    id: 'uiux-9-how-do-you-create',
    difficulty: beginner,
    question: {
      ar: 'كيف تقوم بإنشاء Wireframes وما أهميتها؟',
      en: 'How do you create wireframes and why are they useful?',
    },
    answer: {
      ar: 'Wireframes:\n\n1. الأهمية:\n  * تخطيط Layout\n  * تحديد Content Priority\n  * تسهيل Feedback\n\n2. أنواع:\n  * Low-fidelity\n  * Mid-fidelity\n  * High-fidelity\n\n3. أدوات:\n  * Sketch\n  * Figma\n  * Adobe XD',
      en: 'Wireframes:\n\n1. Why they matter:\n  * Planning the layout\n  * Establishing content priority\n  * Making feedback easier to give\n\n2. Types:\n  * Low-fidelity\n  * Mid-fidelity\n  * High-fidelity\n\n3. Tools:\n  * Figma\n  * Sketch\n  * Adobe XD\n\nThe reason to keep early wireframes deliberately rough is that polish changes the conversation: shown a finished-looking screen, stakeholders comment on the colours; shown a grey box layout, they comment on the structure — which is what you actually need feedback on at that stage.',
    },
  },
  {
    id: 'uiux-10-what-are-the-core',
    difficulty: intermediate,
    question: {
      ar: 'ما هي Accessibility Guidelines الأساسية في التصميم؟',
      en: 'What are the core accessibility guidelines in design?',
    },
    answer: {
      ar: 'Accessibility Guidelines:\n\n1. Color:\n  * Color Contrast\n  * Color Blindness\n\n2. Typography:\n  * Font Size\n  * Line Height\n  * Text Spacing\n\n3. Navigation:\n  * Keyboard Access\n  * Screen Readers\n\n4. Content:\n  * Alt Text\n  * Clear Headings\n  * Simple Language',
      en: 'Accessibility guidelines:\n\n1. Colour:\n  * Sufficient contrast\n  * Not relying on colour alone, for colour blindness\n\n2. Typography:\n  * Adequate font size\n  * Line height\n  * Text spacing\n\n3. Navigation:\n  * Full keyboard access\n  * Screen reader support\n\n4. Content:\n  * Alt text\n  * Clear headings\n  * Plain language\n\nThe standard to reference is WCAG, with 4.5:1 contrast for body text as the usual target. The framing worth offering: accessibility is not a minority concern — captions help in noisy environments, high contrast helps in sunlight, and keyboard navigation helps power users. Designing for the edges improves the centre.',
    },
  },
  {
    id: 'uiux-11-how-do-you-run',
    difficulty: intermediate,
    question: {
      ar: 'كيف تقوم بإجراء A/B Testing؟',
      en: 'How do you run an A/B test?',
    },
    answer: {
      ar: 'A/B Testing Process:\n\n1. Planning:\n  * تحديد Goals\n  * اختيار Variables\n  * تحديد Metrics\n\n2. Implementation:\n  * إنشاء Variants\n  * تقسيم Users\n  * جمع Data\n\n3. Analysis:\n  * تحليل Results\n  * Statistical Significance\n  * اتخاذ Decisions',
      en: 'The A/B testing process:\n\n1. Planning:\n  * Define the goal\n  * Choose the variable to change\n  * Decide the success metric in advance\n\n2. Implementation:\n  * Build the variants\n  * Split users randomly\n  * Collect data\n\n3. Analysis:\n  * Review the results\n  * Check statistical significance\n  * Decide\n\nThe discipline that makes it meaningful: choose the metric before running the test, not after — otherwise you will find something that looks positive by chance. Change one variable at a time, run long enough to cover weekly cycles, and accept a null result. A test that shows no difference is a valid answer, not a failed test.',
    },
  },
  {
    id: 'uiux-12-what-are-the-common',
    difficulty: beginner,
    question: {
      ar: 'ما هي أهم Interaction Design Patterns؟',
      en: 'What are the common interaction design patterns?',
    },
    answer: {
      ar: 'Interaction Patterns:\n\n1. Navigation:\n  * Hamburger Menu\n  * Breadcrumbs\n  * Tabs\n\n2. Data Input:\n  * Forms\n  * Search\n  * Filters\n\n3. Feedback:\n  * Progress Bars\n  * Loading States\n  * Notifications\n\n4. Social:\n  * Likes\n  * Comments\n  * Sharing',
      en: 'Interaction patterns:\n\n1. Navigation:\n  * Hamburger menu\n  * Breadcrumbs\n  * Tabs\n\n2. Data input:\n  * Forms\n  * Search\n  * Filters\n\n3. Feedback:\n  * Progress bars\n  * Loading states\n  * Notifications\n\n4. Social:\n  * Likes\n  * Comments\n  * Sharing\n\nThe reason to use established patterns is that users arrive already knowing them — familiarity is a genuine usability advantage, and inventing a novel navigation metaphor usually costs more than it gains. The feedback category is the one most often neglected: an action with no visible response leaves the user unsure whether it worked, and they click again.',
    },
  },
  {
    id: 'uiux-13-how-do-you-create',
    difficulty: intermediate,
    question: {
      ar: 'كيف تقوم بإنشاء Style Guide؟',
      en: 'How do you create a style guide?',
    },
    answer: {
      ar: 'Style Guide Components:\n\n1. Visual Elements:\n  * Colors\n  * Typography\n  * Icons\n  * Spacing\n\n2. Components:\n  * Buttons\n  * Forms\n  * Cards\n\n3. Guidelines:\n  * Usage Rules\n  * Best Practices\n  * Examples',
      en: 'Style guide components:\n\n1. Visual elements:\n  * Colours\n  * Typography\n  * Icons\n  * Spacing\n\n2. Components:\n  * Buttons\n  * Forms\n  * Cards\n\n3. Guidelines:\n  * Usage rules\n  * Best practices\n  * Examples\n\nThe part that determines whether it survives is the usage rules. A palette alone tells a developer which blues exist but not which to use for a destructive action — so the guide needs to define roles (primary, danger, muted) rather than just values. A style guide that is not maintained alongside the product becomes misleading within a few months.',
    },
  },
  {
    id: 'uiux-14-what-are-mobile-first',
    difficulty: intermediate,
    question: {
      ar: 'ما هي Mobile-First Design Principles؟',
      en: 'What are mobile-first design principles?',
    },
    answer: {
      ar: 'Mobile-First Principles:\n\n1. Content Priority:\n  * Essential Content First\n  * Progressive Enhancement\n\n2. Design Elements:\n  * Touch Targets\n  * Readable Text\n  * Simple Navigation\n\n3. Performance:\n  * Fast Loading\n  * Optimized Images\n  * Minimal Animation',
      en: 'Mobile-first principles:\n\n1. Content priority:\n  * Essential content first\n  * Progressive enhancement for larger screens\n\n2. Design elements:\n  * Adequately sized touch targets\n  * Readable text\n  * Simple navigation\n\n3. Performance:\n  * Fast loading\n  * Optimised images\n  * Restrained animation\n\nThe underlying argument is that a small screen forces prioritisation. Designing for desktop first and then cutting things down tends to produce a cramped mobile view, whereas designing for mobile first and then adding tends to produce a focused desktop one. Touch targets deserve a specific number: around 44px minimum, because fingers are less precise than cursors.',
    },
  },
  {
    id: 'uiux-15-how-do-you-design',
    difficulty: intermediate,
    question: {
      ar: 'كيف تقوم بتصميم Micro-interactions؟',
      en: 'How do you design micro-interactions?',
    },
    answer: {
      ar: 'Micro-interactions:\n\n1. Elements:\n  * Trigger\n  * Rules\n  * Feedback\n  * Loops\n\n2. Examples:\n  * Button States\n  * Form Validation\n  * Loading Animation\n\n3. Best Practices:\n  * Subtle\n  * Purposeful\n  * Consistent',
      en: 'Micro-interactions:\n\n1. Their structure:\n  * A trigger\n  * Rules\n  * Feedback\n  * Loops and modes\n\n2. Examples:\n  * Button states\n  * Form validation\n  * Loading animation\n\n3. Best practices:\n  * Subtle\n  * Purposeful\n  * Consistent\n\nTheir function is communication rather than decoration: a button that visibly responds confirms the tap registered, and a field that validates as you type prevents a failed submission. Two constraints keep them from becoming irritating — keep them fast, roughly 100–300ms, and respect the reduced-motion preference, because animation that delights on the tenth use can be unpleasant on the thousandth.',
    },
  },
  {
    id: 'uiux-16-what-is-card-sorting',
    difficulty: intermediate,
    question: {
      ar: 'ما هي Card Sorting Technique؟',
      en: 'What is card sorting?',
    },
    answer: {
      ar: 'Card Sorting:\n\n1. Types:\n  * Open Sorting\n  * Closed Sorting\n  * Hybrid Sorting\n\n2. Process:\n  * Preparation\n  * Execution\n  * Analysis\n\n3. Benefits:\n  * Information Architecture\n  * User Mental Models\n  * Navigation Structure',
      en: 'Card sorting:\n\n1. Types:\n  * Open sorting — participants create their own categories\n  * Closed sorting — participants sort into categories you provide\n  * Hybrid sorting\n\n2. Process:\n  * Preparation\n  * Execution\n  * Analysis\n\n3. Benefits:\n  * Informing information architecture\n  * Revealing users\' mental models\n  * Shaping the navigation structure\n\nIt answers a question teams otherwise guess at: how do users expect this content to be grouped? Open sorting is the right choice when designing a structure from scratch, closed sorting when validating one you already have. Tree testing is its natural companion — it checks whether people can actually find things in the structure you chose.',
    },
  },
  {
    id: 'uiux-17-how-do-you-conduct',
    difficulty: intermediate,
    question: {
      ar: 'كيف تقوم بإجراء Competitive Analysis؟',
      en: 'How do you conduct a competitive analysis?',
    },
    answer: {
      ar: 'Competitive Analysis:\n\n1. Research Areas:\n  * Features\n  * Design Patterns\n  * User Experience\n\n2. Methods:\n  * Feature Comparison\n  * Usability Review\n  * SWOT Analysis\n\n3. Deliverables:\n  * Comparison Matrix\n  * Insights Report\n  * Recommendations',
      en: 'Competitive analysis:\n\n1. Areas to research:\n  * Features\n  * Design patterns\n  * User experience\n\n2. Methods:\n  * Feature comparison\n  * Usability review\n  * SWOT analysis\n\n3. Deliverables:\n  * A comparison matrix\n  * An insights report\n  * Recommendations\n\nThe useful framing is that you are looking for conventions and gaps, not a list of features to copy. Conventions tell you what users already expect and should not be broken without reason; gaps tell you where there is room to be genuinely better. Copying a competitor\'s interface also copies their mistakes, since you cannot see which of their decisions were tested and which were guesses.',
    },
  },
  {
    id: 'uiux-18-what-are-the-gestalt',
    difficulty: intermediate,
    question: {
      ar: 'ما هي Gestalt Principles في التصميم؟',
      en: 'What are the Gestalt principles in design?',
    },
    answer: {
      ar: 'Gestalt Principles:\n\n1. Similarity:\n  * Visual Elements\n  * Grouping\n\n2. Proximity:\n  * Spatial Relationships\n  * Grouping\n\n3. Continuation:\n  * Visual Flow\n  * Direction\n\n4. Closure:\n  * Complete Forms\n  * Patterns',
      en: 'Gestalt principles:\n\n1. Similarity:\n  * Visual elements that look alike are perceived as related\n\n2. Proximity:\n  * Spatial closeness implies grouping\n\n3. Continuation:\n  * The eye follows lines and visual flow\n\n4. Closure:\n  * We complete incomplete forms and patterns\n\nProximity is the one with the most day-to-day impact: a label sitting closer to the wrong field than the right one will be read as belonging to it, regardless of the markup. Most "this form is confusing" problems are spacing problems. These principles describe how perception works, so they apply whether or not you design with them in mind.',
    },
  },
  {
    id: 'uiux-19-how-do-you-design',
    difficulty: intermediate,
    question: {
      ar: 'كيف تقوم بتصميم Forms؟',
      en: 'How do you design an effective form?',
    },
    answer: {
      ar: 'Form Design:\n\n1. Structure:\n  * Logical Flow\n  * Grouping\n  * Progressive Disclosure\n\n2. Elements:\n  * Clear Labels\n  * Error States\n  * Validation\n\n3. Best Practices:\n  * Single Column\n  * Clear CTAs\n  * Inline Validation',
      en: 'Form design:\n\n1. Structure:\n  * Logical flow\n  * Grouping related fields\n  * Progressive disclosure for optional detail\n\n2. Elements:\n  * Clear labels\n  * Visible error states\n  * Validation\n\n3. Best practices:\n  * A single column\n  * Clear calls to action\n  * Inline validation\n\nThe single largest improvement available to most forms is removing fields. Every field costs completion rate, so the question for each is whether you genuinely need it now or could ask later.\n\nTwo specifics worth stating: a placeholder is not a label, because it disappears the moment someone types and leaves them unsure what the field was; and validating on blur rather than on every keystroke avoids telling people their email is invalid before they have finished typing it.',
    },
  },
  {
    id: 'uiux-20-what-are-design-systems',
    difficulty: advanced,
    question: {
      ar: 'ما هي Design Systems وكيف تنشئها؟',
      en: 'What are design systems and how do you build one?',
    },
    answer: {
      ar: 'Design Systems:\n\n1. Components:\n  * UI Kit\n  * Style Guide\n  * Pattern Library\n\n2. Documentation:\n  * Usage Guidelines\n  * Code Examples\n  * Best Practices\n\n3. Maintenance:\n  * Version Control\n  * Updates\n  * Team Collaboration',
      en: 'Design systems:\n\n1. Components:\n  * A UI kit\n  * A style guide\n  * A pattern library\n\n2. Documentation:\n  * Usage guidelines\n  * Code examples\n  * Best practices\n\n3. Maintenance:\n  * Version control\n  * A process for updates\n  * Collaboration between design and engineering\n\nThe distinction from a style guide is that a design system is a shared implementation, not just a reference: the same tokens and components exist in Figma and in code, so a change propagates rather than being reinterpreted.\n\nWhat determines success is governance rather than craft — who may add a component, how changes are versioned, and how teams request something new. A system nobody maintains becomes a source of inconsistency rather than a cure for it. Starting small with the components actually repeated across the product beats attempting completeness.',
    },
  },
  {
    id: 'uiux-21-how-do-you-measure',
    difficulty: intermediate,
    question: {
      ar: 'ما هي طرق قياس UX Success؟',
      en: 'How do you measure UX success?',
    },
    answer: {
      ar: 'UX Metrics:\n\n1. Quantitative:\n  * Conversion Rate\n  * Task Success Rate\n  * Time on Task\n\n2. Qualitative:\n  * User Satisfaction\n  * Net Promoter Score\n  * User Feedback\n\n3. Business Metrics:\n  * ROI\n  * Customer Retention\n  * Support Tickets',
      en: 'UX metrics:\n\n1. Quantitative:\n  * Conversion rate\n  * Task success rate\n  * Time on task\n\n2. Qualitative:\n  * User satisfaction\n  * Net Promoter Score\n  * Direct user feedback\n\n3. Business metrics:\n  * Return on investment\n  * Customer retention\n  * Support ticket volume\n\nSupport ticket volume is an underrated signal: a drop in tickets about a particular screen is direct evidence the redesign worked.\n\nOne caution about time on task — it is ambiguous on its own. Longer could mean confusion, or genuine engagement. It only becomes meaningful alongside success rate and the context of what the user was trying to do.',
    },
  },
  {
    id: 'uiux-22-how-do-you-conduct',
    difficulty: intermediate,
    question: {
      ar: 'كيف تقوم بإجراء User Interviews؟',
      en: 'How do you conduct user interviews?',
    },
    answer: {
      ar: 'User Interviews:\n\n1. Preparation:\n  * Interview Guide\n  * Participant Screening\n  * Setting\n\n2. Techniques:\n  * Open Questions\n  * Active Listening\n  * Follow-up Questions\n\n3. Analysis:\n  * Patterns\n  * Insights\n  * Recommendations',
      en: 'User interviews:\n\n1. Preparation:\n  * A discussion guide\n  * Participant screening\n  * An appropriate setting\n\n2. Techniques:\n  * Open questions\n  * Active listening\n  * Follow-up questions\n\n3. Analysis:\n  * Identifying patterns\n  * Drawing insights\n  * Making recommendations\n\nThe skill that separates a useful interview from a misleading one is avoiding leading questions. "Would you use a feature that did X?" reliably produces a yes that predicts nothing. Asking about past behaviour instead — "tell me about the last time you needed to do this" — gives you what actually happened rather than a hypothetical.\n\nAnd resist the urge to explain your design when someone misunderstands it. Their confusion is the data.',
    },
  },
  {
    id: 'uiux-23-what-are-the-best',
    difficulty: beginner,
    question: {
      ar: 'ما هي أفضل ممارسات Responsive Design؟',
      en: 'What are the best practices for responsive design?',
    },
    answer: {
      ar: 'Responsive Design:\n\n1. Layout:\n  * Fluid Grids\n  * Flexible Images\n  * Media Queries\n\n2. Content:\n  * Priority Content\n  * Readable Text\n  * Touch Targets\n\n3. Performance:\n  * Image Optimization\n  * Loading Speed\n  * Minimal Code',
      en: 'Responsive design:\n\n1. Layout:\n  * Fluid grids\n  * Flexible images\n  * Media queries\n\n2. Content:\n  * Prioritised content\n  * Readable text\n  * Adequate touch targets\n\n3. Performance:\n  * Image optimisation\n  * Loading speed\n  * Minimal code\n\nThe practice worth adding: choose breakpoints where the design actually breaks, rather than targeting specific device sizes — the device list changes every year while the layout\'s needs do not.\n\nPerformance belongs in this list deliberately. A responsive layout delivered over a slow mobile connection with unoptimised images is not a good mobile experience, however well it reflows.',
    },
  },
  {
    id: 'uiux-24-how-do-you-design',
    difficulty: intermediate,
    question: {
      ar: 'كيف تقوم بتصميم Navigation Systems؟',
      en: 'How do you design a navigation system?',
    },
    answer: {
      ar: 'Navigation Design:\n\n1. Types:\n  * Global Navigation\n  * Local Navigation\n  * Contextual Navigation\n\n2. Principles:\n  * Clarity\n  * Consistency\n  * Feedback\n\n3. Patterns:\n  * Menu Structures\n  * Search\n  * Filters',
      en: 'Navigation design:\n\n1. Types:\n  * Global navigation\n  * Local navigation\n  * Contextual navigation\n\n2. Principles:\n  * Clarity\n  * Consistency\n  * Feedback\n\n3. Patterns:\n  * Menu structures\n  * Search\n  * Filters\n\nThe feedback principle means the user should always be able to answer three questions: where am I, where can I go, and how do I get back. Highlighting the current section and providing breadcrumbs in deep hierarchies covers most of that.\n\nOn mobile, the hamburger menu is convenient but hides everything behind an extra tap, and items inside it get measurably less use. If a destination matters, keeping it visible — in a bottom bar, for instance — is usually worth the space it costs.',
    },
  },
  {
    id: 'uiux-25-what-is-colour-theory',
    difficulty: beginner,
    question: {
      ar: 'ما هي Color Theory وكيف تطبقها؟',
      en: 'What is colour theory and how do you apply it?',
    },
    answer: {
      ar: 'Color Theory:\n\n1. Basics:\n  * Color Wheel\n  * Color Harmony\n  * Color Psychology\n\n2. Applications:\n  * Brand Identity\n  * UI Elements\n  * Accessibility\n\n3. Guidelines:\n  * Contrast\n  * Hierarchy\n  * Consistency',
      en: 'Colour theory:\n\n1. Basics:\n  * The colour wheel\n  * Colour harmony\n  * Colour psychology\n\n2. Applications:\n  * Brand identity\n  * UI elements\n  * Accessibility\n\n3. Guidelines:\n  * Contrast\n  * Hierarchy\n  * Consistency\n\nIn interface work, the most useful discipline is assigning colours roles rather than treating them decoratively: a primary action colour, a destructive colour, a muted colour for secondary text. That is what makes a palette scale across a product.\n\nTwo caveats: colour psychology is heavily culture-dependent, so associations do not transfer globally; and colour must never be the only carrier of meaning, since a red border alone is invisible to a colour-blind user and to anyone on a poor screen.',
    },
  },
  {
    id: 'uiux-26-how-do-you-design',
    difficulty: intermediate,
    question: {
      ar: 'كيف تقوم بتصميم Onboarding Experience؟',
      en: 'How do you design an onboarding experience?',
    },
    answer: {
      ar: 'Onboarding Design:\n\n1. Elements:\n  * Welcome Screen\n  * Key Features\n  * Progress Indicators\n\n2. Principles:\n  * Progressive\n  * Interactive\n  * Value-focused\n\n3. Best Practices:\n  * Minimal Steps\n  * Clear Value\n  * Quick Wins',
      en: 'Onboarding design:\n\n1. Elements:\n  * A welcome screen\n  * Introducing key features\n  * Progress indicators\n\n2. Principles:\n  * Progressive\n  * Interactive\n  * Focused on value\n\n3. Best practices:\n  * Minimal steps\n  * A clear value proposition\n  * Early wins\n\nThe most effective change most onboarding flows can make is deferring: rather than a carousel explaining every feature up front, introduce each one at the moment it becomes relevant. People retain almost nothing from a tour taken before they have a reason to care.\n\nAlways provide a skip option, and make sure the user reaches something useful quickly — the first successful action is what determines whether they come back.',
    },
  },
  {
    id: 'uiux-27-how-do-you-create',
    difficulty: beginner,
    question: {
      ar: 'ما هي طرق Visual Hierarchy؟',
      en: 'How do you create visual hierarchy?',
    },
    answer: {
      ar: 'Visual Hierarchy:\n\n1. Elements:\n  * Size\n  * Color\n  * Contrast\n  * Space\n\n2. Principles:\n  * F-Pattern\n  * Z-Pattern\n  * Grid Systems\n\n3. Applications:\n  * Typography\n  * Layout\n  * Content Structure',
      en: 'Visual hierarchy:\n\n1. The tools:\n  * Size\n  * Colour\n  * Contrast\n  * Space\n\n2. Principles:\n  * The F-pattern\n  * The Z-pattern\n  * Grid systems\n\n3. Where it applies:\n  * Typography\n  * Layout\n  * Content structure\n\nThe practical test is to squint at the screen, or blur it: whatever still stands out is what the design is actually emphasising. If that is not what matters most, the hierarchy is wrong.\n\nThe common failure is emphasising too much — when every element is bold, large or coloured, nothing reads as important. Hierarchy works by contrast, which means most things have to be quiet.',
    },
  },
  {
    id: 'uiux-28-how-do-you-develop',
    difficulty: intermediate,
    question: {
      ar: 'كيف تقوم بإجراء Persona Development؟',
      en: 'How do you develop personas?',
    },
    answer: {
      ar: 'Persona Development:\n\n1. Research:\n  * User Data\n  * Demographics\n  * Behaviors\n\n2. Components:\n  * Goals\n  * Pain Points\n  * Scenarios\n\n3. Applications:\n  * Design Decisions\n  * Feature Priority\n  * Content Strategy',
      en: 'Persona development:\n\n1. Research:\n  * User data\n  * Demographics\n  * Observed behaviours\n\n2. Components:\n  * Goals\n  * Pain points\n  * Scenarios\n\n3. How they are used:\n  * Guiding design decisions\n  * Prioritising features\n  * Shaping content strategy\n\nThe distinction that determines their value is whether they come from research or from imagination. A persona invented in a meeting simply encodes the team\'s assumptions and lends them false authority.\n\nThe parts that actually drive decisions are goals, behaviours and pain points — a name, a photo and a favourite coffee order make a persona memorable but rarely change a design. Jobs-to-be-done is a common alternative for teams that find personas too fuzzy.',
    },
  },
  {
    id: 'uiux-29-what-are-error-prevention',
    difficulty: intermediate,
    question: {
      ar: 'ما هي Error Prevention Strategies؟',
      en: 'What are error prevention strategies?',
    },
    answer: {
      ar: 'Error Prevention:\n\n1. Design Strategies:\n  * Clear Instructions\n  * Confirmation Dialogs\n  * Undo Options\n\n2. Validation:\n  * Real-time Feedback\n  * Input Constraints\n  * Clear Error Messages\n\n3. Recovery:\n  * Error Messages\n  * Recovery Options\n  * Help Resources',
      en: 'Error prevention:\n\n1. Design strategies:\n  * Clear instructions\n  * Confirmation dialogs for destructive actions\n  * Undo\n\n2. Validation:\n  * Real-time feedback\n  * Input constraints\n  * Clear error messages\n\n3. Recovery:\n  * Informative error messages\n  * Recovery options\n  * Access to help\n\nThe principle underneath is that preventing an error is better than reporting one: constraining input — a date picker rather than a free-text date — removes whole categories of mistake.\n\nA point worth arguing: undo is usually better than a confirmation dialog. Confirmations are clicked reflexively after the third time, whereas undo lets the action proceed and stays available if it was wrong.\n\nAnd a good error message does three things — says what went wrong, why, and what to do next. "Invalid input" does none of them.',
    },
  },
];
