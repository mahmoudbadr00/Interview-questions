// data/categories/softSkills.js
// Behavioral / soft-skill interview questions.
//
// These deliberately do NOT have one "correct" answer. `answer` holds the
// coaching guidance (how to approach the question, what it really tests);
// `alternatives` holds several strong sample answers with an explanation of
// why each works and what to avoid. Users should adapt them to their own
// experience — never invent one.
import { DIFFICULTY } from '../difficulty.js';

const { beginner, intermediate, advanced } = DIFFICULTY;

const ADAPT = {
  ar: '\n\nتذكير: هذه نماذج للبنية والنبرة. اجعل الإجابة عن تجربتك الحقيقية أنت، ولا تخترع مواقف لم تحدث — المقابِل المتمرس يكتشف ذلك بسؤال متابعة واحد.',
  en: '\n\nReminder: these are models for structure and tone. Make the answer about your own real experience, and never invent a situation — an experienced interviewer exposes that with one follow-up.',
};

export const softSkills = [
  {
    id: 'soft-tell-me-about-yourself',
    difficulty: beginner,
    kind: 'behavioral',
    depth: 'know',
    question: {
      ar: 'حدّثني عن نفسك.',
      en: 'Tell me about yourself.',
    },
    answer: {
      ar: 'هذا ليس طلبًا لسيرتك الذاتية كاملة ولا لقصة حياتك. المقابِل يريد ملخصًا مهنيًا في 60–90 ثانية يجيب ضمنيًا عن: لماذا أنت مناسب لهذا الدور؟\n\nالبنية التي تعمل: الحاضر ← الماضي ← المستقبل.\n1. الحاضر: دورك الحالي وما تركّز عليه.\n2. الماضي: خبرة أو إنجاز أو اثنان يرتبطان بهذه الوظيفة تحديدًا.\n3. المستقبل: لماذا هذا الدور هو الخطوة المنطقية التالية.\n\nما يختبره السؤال: هل تستطيع تلخيص نفسك بوضوح؟ هل تفهم ما يهم في هذا الدور؟ وكيف تبدأ محادثة.\n\nتجنّب: التفاصيل الشخصية غير المهنية، السرد الزمني من أول وظيفة، والإطالة أكثر من دقيقتين.' + ADAPT.ar,
      en: 'This is not a request for your full CV or your life story. The interviewer wants a 60–90 second professional summary that implicitly answers: why are you a fit for this role?\n\nThe structure that works: present → past → future.\n1. Present: your current role and what you focus on.\n2. Past: one or two experiences or achievements that relate specifically to this job.\n3. Future: why this role is the logical next step.\n\nWhat it tests: can you summarise yourself clearly, do you understand what matters for this role, and how you open a conversation.\n\nAvoid: non-professional personal details, a chronological walk from your first job, and running past two minutes.' + ADAPT.en,
    },
    keyPoints: [
      { ar: 'الدور الحالي والتركيز', en: 'Current role and focus', terms: ['currently', 'حالي', 'i work', 'أعمل', 'i am a', 'أنا'] },
      { ar: 'خبرة مرتبطة بالوظيفة', en: 'Relevant past experience', terms: ['experience', 'خبرة', 'worked on', 'built', 'بنيت', 'years', 'سنوات', 'project', 'مشروع'] },
      { ar: 'لماذا هذا الدور الآن', en: 'Why this role now', terms: ['looking', 'أبحث', 'next step', 'الخطوة', 'interested', 'مهتم', 'this role', 'هذا الدور', 'why'] },
    ],
    alternatives: [
      {
        label: { ar: 'إجابة موجزة ومباشرة', en: 'Concise and direct' },
        answer: {
          ar: 'أنا مطوّر Frontend بخبرة ثلاث سنوات، أعمل حاليًا على منصة تجارة إلكترونية بـ React وNext.js، وأركّز على الأداء وتجربة المستخدم. في دوري الحالي قدت ترحيل التطبيق إلى App Router، ما خفّض زمن التحميل الأولي بنحو 40%. أبحث الآن عن دور يتيح لي العمل على منتج أكبر حجمًا والمساهمة في قرارات المعمارية، وهذا ما جذبني لهذه الفرصة.',
          en: 'I\'m a frontend developer with about three years of experience, currently working on an e-commerce platform in React and Next.js, with a focus on performance and user experience. In my current role I led the migration to the App Router, which cut initial load time by roughly 40%. I\'m now looking for a role where I can work on a larger-scale product and contribute to architectural decisions, which is what drew me to this position.',
        },
        why: { ar: 'واضحة، مرتبة زمنيًا بشكل منطقي، فيها رقم ملموس، وتنتهي بربط صريح بالدور. تستغرق أقل من دقيقة.', en: 'Clear, logically ordered, includes a concrete number, and ends by tying itself explicitly to the role. Under a minute.' },
      },
      {
        label: { ar: 'إجابة لمطوّر مبتدئ', en: 'For a junior developer' },
        answer: {
          ar: 'تخرجت في علوم الحاسب العام الماضي، وخلال الدراسة ركّزت على تطوير الويب: بنيت ثلاثة مشاريع كاملة بـ React، أحدها تطبيق لإدارة المهام يستخدمه فعليًا نحو 200 مستخدم. أكملت أيضًا تدريبًا لمدة ستة أشهر تعلمت فيه العمل في فريق حقيقي مع مراجعات الكود وGit. أبحث عن دوري الأول بدوام كامل في فريق يمكنني التعلم منه والمساهمة فيه من اليوم الأول.',
          en: 'I graduated in computer science last year, and during my studies I focused on web development — I built three complete projects in React, one of them a task manager that about 200 people actually use. I also completed a six-month internship where I learned to work in a real team with code reviews and Git. I\'m looking for my first full-time role on a team I can learn from and contribute to from day one.',
        },
        why: { ar: 'تعوّض قلة الخبرة بأدلة ملموسة (مستخدمون حقيقيون، تدريب فعلي)، وتظهر وعيًا بالعمل الجماعي، وصادقة عن المرحلة.', en: 'Compensates for limited experience with concrete evidence (real users, a real internship), shows awareness of teamwork, and is honest about the career stage.' },
        avoid: { ar: 'لا تعتذر عن قلة الخبرة ولا تبدأ بـ "ليس لدي خبرة كثيرة لكن".', en: 'Do not apologise for limited experience or open with "I don\'t have much experience but".' },
      },
      {
        label: { ar: 'إجابة لدور قيادي', en: 'For a lead role' },
        answer: {
          ar: 'أقود حاليًا فريقًا من خمسة مطوّرين في شركة SaaS، وأنا مسؤول عن المعمارية الأمامية وعن تطوير الفريق. خلال العامين الماضيين بنينا نظام تصميم موحّدًا خفّض وقت تسليم الميزات بنحو الثلث، وأنشأت عملية مراجعة للكود رفعت جودة التسليم بشكل ملموس. ما زلت أكتب كودًا يوميًا لأنني أؤمن أن القائد التقني يجب أن يبقى قريبًا من التفاصيل. أبحث عن دور أوسع تأثيرًا، حيث يمكنني قيادة أكثر من فريق أو تشكيل الاتجاه التقني للمنتج.',
          en: 'I currently lead a team of five developers at a SaaS company, responsible for the frontend architecture and for growing the team. Over the past two years we built a unified design system that cut feature delivery time by about a third, and I set up a code review process that measurably raised delivery quality. I still write code daily, because I believe a technical lead should stay close to the details. I\'m looking for a role with broader impact — leading multiple teams or shaping the technical direction of a product.',
        },
        why: { ar: 'توازن بين القيادة والعمق التقني، وتذكر أثرًا على الفريق لا على الكود فقط، وتحدد بوضوح ما تريده بعد ذلك.', en: 'Balances leadership with technical depth, cites impact on the team rather than only on code, and states clearly what comes next.' },
      },
    ],
  },
  {
    id: 'soft-walk-through-experience',
    difficulty: beginner,
    kind: 'behavioral',
    question: {
      ar: 'اشرح لي مسارك المهني وخبراتك.',
      en: 'Walk me through your experience.',
    },
    answer: {
      ar: 'يختلف عن "حدّثني عن نفسك" في أنه يطلب تسلسلًا، لكنه ليس دعوة لقراءة السيرة الذاتية سطرًا سطرًا. المقابِل يريد أن يفهم القصة: كيف تطوّرت، ولماذا انتقلت بين الأدوار، وما الذي تعلمته في كل مرحلة.\n\nالمنهج: لكل دور رئيسي، جملة عن السياق، وجملة عن أهم ما أنجزته، وجملة عن سبب الانتقال. اجعل الأدوار الأحدث تأخذ مساحة أكبر، والقديمة جملة واحدة.\n\nما يختبره: الاتساق في مسارك، وقدرتك على التمييز بين المهم والتفاصيل، وصدقك في تفسير الانتقالات.\n\nتجنّب: الفجوات غير المفسّرة، والحديث السلبي عن أصحاب عمل سابقين، وتكرار ما في السيرة الذاتية حرفيًا.' + ADAPT.ar,
      en: 'Different from "tell me about yourself" in that it asks for a sequence — but it is still not an invitation to read your CV line by line. The interviewer wants the story: how you developed, why you moved between roles, and what you learned at each stage.\n\nThe approach: for each major role, one sentence of context, one on your most significant contribution, one on why you moved on. Give recent roles more space and older ones a single sentence.\n\nWhat it tests: coherence in your path, the ability to separate signal from detail, and honesty in explaining transitions.\n\nAvoid: unexplained gaps, speaking negatively about former employers, and repeating the CV verbatim.' + ADAPT.en,
    },
    keyPoints: [
      { ar: 'تسلسل منطقي', en: 'A logical sequence', terms: ['started', 'بدأت', 'then', 'ثم', 'after', 'بعد', 'moved', 'انتقلت', 'joined'] },
      { ar: 'سبب كل انتقال', en: 'Reason for each move', terms: ['because', 'لأن', 'wanted', 'أردت', 'reason', 'سبب', 'looking for', 'opportunity'] },
      { ar: 'إنجاز في كل مرحلة', en: 'An achievement per stage', terms: ['built', 'بنيت', 'led', 'قدت', 'improved', 'حسنت', 'delivered', 'سلمت', 'launched', 'أطلقت'] },
    ],
    alternatives: [
      {
        label: { ar: 'مسار من ثلاث مراحل', en: 'A three-stage path' },
        answer: {
          ar: 'بدأت كمطوّر واجهات في وكالة صغيرة، حيث تعلمت أساسيات HTML وCSS وJavaScript على مشاريع متنوعة وسريعة. بعد سنتين انتقلت إلى شركة ناشئة لأنني أردت العمل على منتج واحد بعمق، وهناك تعلمت React وبنيت لوحة التحكم الرئيسية للعملاء من الصفر. حاليًا أعمل في شركة متوسطة الحجم كمطوّر Frontend أول، وأقود المبادرات المتعلقة بالأداء وأشارك في مقابلات التوظيف. كل انتقال كان للحصول على نطاق مسؤولية أكبر، وهذا ما أبحث عنه الآن أيضًا.',
          en: 'I started as a frontend developer at a small agency, where I learned the fundamentals of HTML, CSS and JavaScript on varied, fast-paced projects. After two years I moved to a startup because I wanted to work deeply on a single product — there I learned React and built the main customer dashboard from scratch. I\'m now a senior frontend developer at a mid-sized company, leading performance initiatives and taking part in hiring interviews. Each move was for greater scope of responsibility, and that\'s what I\'m looking for now as well.',
        },
        why: { ar: 'كل انتقال له سبب إيجابي وواضح، والقصة تبني نحو الأمام، والمرحلة الحالية تأخذ التفصيل الأكبر.', en: 'Every transition has a clear positive reason, the story builds forward, and the current stage gets the most detail.' },
      },
      {
        label: { ar: 'مسار غير تقليدي (تحوّل مهني)', en: 'A non-linear path (career change)' },
        answer: {
          ar: 'مساري ليس تقليديًا. عملت أربع سنوات في التصميم الجرافيكي، وخلالها بدأت أبني صفحات الهبوط التي أصممها بنفسي لأن التسليم للمطوّرين كان بطيئًا. اكتشفت أنني أستمتع بالكود أكثر من التصميم، فأمضيت عامًا أتعلم JavaScript وReact بجدية بجانب عملي، ثم انتقلت لدور Frontend في شركة ناشئة قبل عامين. خلفيتي في التصميم تعني أنني أفهم لغة المصممين وأنتبه للتفاصيل البصرية التي يفوّتها كثير من المطوّرين، وهذا صار نقطة قوتي لا نقطة ضعف.',
          en: 'My path isn\'t a conventional one. I spent four years in graphic design, and during that time I started building the landing pages I designed myself because handing off to developers was slow. I discovered I enjoyed the code more than the design, so I spent a year seriously learning JavaScript and React alongside my job, then moved into a frontend role at a startup two years ago. My design background means I speak designers\' language and notice the visual details many developers miss — that has become a strength rather than a gap.',
        },
        why: { ar: 'تحوّل المسار غير التقليدي إلى ميزة بدل الاعتذار عنه، وتفسّر سبب التحوّل بصدق، وتنتهي بما يميّزك اليوم.', en: 'Turns the unconventional path into an asset rather than apologising for it, explains the change honestly, and ends with what sets you apart today.' },
        avoid: { ar: 'لا تقلّل من شأن مسيرتك السابقة ولا تقضِ معظم الوقت فيها — الدور الحالي هو ما يهم.', en: 'Do not belittle your previous career or spend most of the time on it — the current role is what matters.' },
      },
    ],
  },
  {
    id: 'soft-why-leaving',
    difficulty: intermediate,
    kind: 'behavioral',
    question: {
      ar: 'لماذا تبحث عن فرصة جديدة؟',
      en: 'Why are you looking for a new opportunity?',
    },
    answer: {
      ar: 'القاعدة الذهبية: تحدّث عمّا تتجه إليه لا عمّا تهرب منه. حتى لو كان السبب الحقيقي سلبيًا، صُغه كطموح.\n\nالأسباب التي تُقبل جيدًا: النمو التقني، نطاق مسؤولية أكبر، مجال يهمك، تحدٍّ مختلف، الاستقرار بعد إعادة هيكلة.\n\nما يختبره: هل ستغادر عندنا لنفس السبب؟ وهل تتحدث عن أصحاب عملك السابقين باحترام؟\n\nتجنّب: ذم المدير أو الشركة الحالية، الحديث عن الراتب كسبب أول، وأي إشارة إلى نزاع.\n\nإن كنت فُصلت أو أُنهي عقدك: قل ذلك بصدق وباختصار (إعادة هيكلة، تقليص) دون دراما، ثم انتقل مباشرة إلى ما تبحث عنه.' + ADAPT.ar,
      en: 'The golden rule: talk about what you are moving toward, not what you are running from. Even if the real reason is negative, frame it as an ambition.\n\nReasons that land well: technical growth, a larger scope of responsibility, a domain you care about, a different kind of challenge, stability after a restructuring.\n\nWhat it tests: will you leave us for the same reason, and do you speak about former employers with respect?\n\nAvoid: criticising your current manager or company, leading with salary, and any hint of conflict.\n\nIf you were laid off: say so honestly and briefly (restructuring, downsizing) without drama, then move straight to what you are looking for.' + ADAPT.en,
    },
    keyPoints: [
      { ar: 'سبب إيجابي موجّه للمستقبل', en: 'A positive, forward-looking reason', terms: ['grow', 'نمو', 'learn', 'تعلم', 'challenge', 'تحد', 'opportunity', 'فرصة', 'scope', 'impact', 'أثر'] },
      { ar: 'احترام صاحب العمل الحالي', en: 'Respect for the current employer', terms: ['learned a lot', 'تعلمت', 'grateful', 'ممتن', 'good', 'great team', 'appreciate'] },
      { ar: 'ربط بالدور الجديد', en: 'Connection to the new role', terms: ['this role', 'هذا الدور', 'your', 'here', 'هنا', 'your team', 'your product'] },
    ],
    alternatives: [
      {
        label: { ar: 'البحث عن النمو', en: 'Seeking growth' },
        answer: {
          ar: 'تعلمت الكثير في شركتي الحالية، خصوصًا في بناء منتج من الصفر. لكن الفريق صغير والمنتج وصل إلى مرحلة استقرار، فأصبحت الفرص لحل مشكلات معمارية جديدة أقل. أبحث عن بيئة أكبر حجمًا حيث توجد مشكلات توسّع حقيقية ومهندسون أستطيع التعلم منهم — ووصف هذا الدور يطابق ذلك تمامًا.',
          en: 'I\'ve learned a great deal at my current company, particularly in building a product from scratch. But the team is small and the product has reached a stable phase, so opportunities to solve new architectural problems have become rarer. I\'m looking for a larger environment with real scaling challenges and engineers I can learn from — and this role\'s description matches that closely.',
        },
        why: { ar: 'تشكر الوضع الحالي، تفسّر السبب دون لوم، وتربط بالدور الجديد بدقة.', en: 'Credits the current situation, explains the reason without blame, and connects precisely to the new role.' },
      },
      {
        label: { ar: 'بعد تسريح', en: 'After a layoff' },
        answer: {
          ar: 'شركتي مرّت بإعادة هيكلة وتم تقليص فريق المنتج الذي كنت فيه بالكامل. كان ذلك خارج سيطرتي، وأقدّر السنوات الثلاث التي قضيتها هناك. أستغل الفترة الحالية للبحث بعناية عن الدور المناسب بدل القبول بأول عرض، وأنا مهتم بشركتكم تحديدًا بسبب تركيزكم على جودة المنتج.',
          en: 'My company went through a restructuring and the product team I was on was eliminated entirely. That was outside my control, and I value the three years I spent there. I\'m using this period to search carefully for the right role rather than taking the first offer, and I\'m interested in your company specifically because of your focus on product quality.',
        },
        why: { ar: 'صادقة ومختصرة وبلا دفاعية، وتحوّل الظرف إلى إشارة على أنك انتقائي لا يائس.', en: 'Honest, brief and non-defensive, and it turns the circumstance into a signal that you are selective rather than desperate.' },
        avoid: { ar: 'لا تفصّل في ظروف التسريح ولا تعبّر عن مرارة.', en: 'Do not go into the details of the layoff or express bitterness.' },
      },
    ],
  },
  {
    id: 'soft-why-this-company',
    difficulty: beginner,
    kind: 'behavioral',
    question: {
      ar: 'لماذا تريد العمل معنا؟',
      en: 'Why do you want to work here?',
    },
    answer: {
      ar: 'هذا السؤال يقيس شيئًا واحدًا: هل بحثت عنّا أم أنك ترسل نفس الإجابة للجميع؟\n\nالإجابة القوية تجمع ثلاثة أشياء محددة:\n1. شيء عن المنتج أو المجال (استخدمته، يحل مشكلة تهمك).\n2. شيء عن التقنية أو طريقة العمل (مقال هندسي، مصدر مفتوح، منهجية).\n3. كيف يلتقي ذلك مع ما تريده أنت.\n\nما يختبره: الجدية، والتحضير، ومدى التوافق.\n\nتجنّب: العموميات ("شركة رائدة"، "فريق رائع") التي تصلح لأي شركة، والتركيز على ما ستحصل عليه فقط دون ما ستقدمه.' + ADAPT.ar,
      en: 'This question measures one thing: did you research us, or are you sending the same answer to everyone?\n\nA strong answer combines three specific things:\n1. Something about the product or domain (you\'ve used it, it solves a problem you care about).\n2. Something about the technology or way of working (an engineering blog post, open source, a methodology).\n3. How that meets what you want.\n\nWhat it tests: seriousness, preparation and fit.\n\nAvoid: generic phrases ("leading company", "great team") that fit any employer, and focusing only on what you would get rather than what you would bring.' + ADAPT.en,
    },
    keyPoints: [
      { ar: 'تفصيلة محددة عن الشركة', en: 'A specific detail about the company', terms: ['product', 'منتج', 'your', 'blog', 'مقال', 'open source', 'read', 'قرأت', 'used', 'استخدمت'] },
      { ar: 'توافق مع أهدافك', en: 'Alignment with your goals', terms: ['align', 'يتوافق', 'match', 'fit', 'what i want', 'ما أريد', 'my goal'] },
      { ar: 'ما ستقدمه', en: 'What you would contribute', terms: ['contribute', 'أساهم', 'bring', 'أقدم', 'help', 'أساعد'] },
    ],
    alternatives: [
      {
        label: { ar: 'مبنية على بحث محدد', en: 'Built on specific research' },
        answer: {
          ar: 'ثلاثة أسباب. أولًا، أستخدم منتجكم فعليًا منذ عام، وأعرف كم يوفّر من وقت على الفرق الصغيرة. ثانيًا، قرأت مقالكم الهندسي عن ترحيل الواجهة إلى Server Components، وطريقة تفكيركم في المقايضات هي بالضبط ما أريد العمل وسطه. ثالثًا، الدور يجمع بين الأداء وتجربة المطوّر، وهما المجالان اللذان أستمتع بهما أكثر، وأعتقد أن خبرتي في تحسين Core Web Vitals ستكون مفيدة لكم مباشرة.',
          en: 'Three reasons. First, I\'ve actually used your product for a year, and I know how much time it saves small teams. Second, I read your engineering post on migrating the frontend to Server Components, and the way you reason about trade-offs is exactly the environment I want to work in. Third, the role combines performance and developer experience, which are the two areas I enjoy most — and I think my experience improving Core Web Vitals would be directly useful to you.',
        },
        why: { ar: 'كل سبب محدد ولا يصلح لشركة أخرى، وتنتهي بما ستقدمه لا بما ستأخذه.', en: 'Every reason is specific and would not fit another company, and it ends with what you bring rather than what you take.' },
      },
      {
        label: { ar: 'عندما لا تعرف الشركة جيدًا', en: 'When you know little about the company' },
        answer: {
          ar: 'سأكون صادقًا: لم أكن أعرف شركتكم قبل أن يتواصل معي المسؤول عن التوظيف، لكن ما قرأته منذ ذلك الحين هو ما جعلني أحضر اليوم. أكثر ما لفتني أن الدور يتطلب بناء الواجهة من الصفر لمنتج جديد — وهذا بالضبط ما فعلته في وظيفتي الأخيرة واستمتعت به أكثر من أي شيء آخر. وأعجبني أن الفريق التقني صغير ويقرر بنفسه، لأنني أعمل بشكل أفضل عندما أملك القرار وأتحمّل نتيجته. لديّ أسئلة عن المنتج والفريق أودّ طرحها لاحقًا لأتأكد أن التوافق متبادل.',
          en: 'I\'ll be honest: I didn\'t know your company before the recruiter reached out, but what I\'ve read since is why I\'m here today. What stood out most is that the role involves building the frontend from scratch for a new product — that\'s exactly what I did in my last job, and I enjoyed it more than anything else. I also liked that the engineering team is small and makes its own decisions, because I work best when I own a decision and its outcome. I do have questions about the product and the team I\'d like to ask later, to make sure the fit is mutual.',
        },
        why: { ar: 'الصدق يبني الثقة، ثم تحوّل الحديث فورًا إلى ما تعرفه فعلًا وتربطه بخبرتك، وتُظهر أنك تقيّم الشركة أيضًا.', en: 'Honesty builds trust, then it pivots immediately to what you actually know and ties it to your experience, while showing you are evaluating them too.' },
        avoid: { ar: 'لا تتظاهر بمعرفة لا تملكها — سؤال متابعة واحد يكشفها.', en: 'Never fake familiarity you don\'t have — one follow-up question exposes it.' },
      },
    ],
  },
  {
    id: 'soft-strengths',
    difficulty: beginner,
    kind: 'behavioral',
    question: {
      ar: 'ما هي نقاط قوتك؟',
      en: 'What are your strengths?',
    },
    answer: {
      ar: 'اختر نقطتين أو ثلاثًا مرتبطة بالدور، وادعم كل واحدة بدليل قصير. القوة بلا مثال مجرد ادعاء.\n\nالصيغة: القوة ← موقف يثبتها ← أثرها.\n\nالأقوى هي النقاط التي يصعب ادعاؤها بلا دليل: "أفكّك المشكلات المعقدة إلى خطوات" أفضل من "أنا مجتهد".\n\nما يختبره: الوعي الذاتي، والقدرة على التسويق لنفسك بثقة دون مبالغة، والتوافق مع متطلبات الدور.\n\nتجنّب: قائمة طويلة من الصفات، والصفات العامة (مجتهد، سريع التعلم) بلا دليل، والتواضع الزائد.' + ADAPT.ar,
      en: 'Pick two or three strengths relevant to the role and back each with brief evidence. A strength without an example is just a claim.\n\nThe formula: strength → a situation that proves it → its impact.\n\nThe strongest are ones that are hard to claim without evidence: "I break complex problems into steps" beats "I\'m hardworking".\n\nWhat it tests: self-awareness, the ability to advocate for yourself confidently without overselling, and fit with the role.\n\nAvoid: a long list of adjectives, generic traits (hardworking, fast learner) without proof, and excessive modesty.' + ADAPT.en,
    },
    keyPoints: [
      { ar: 'قوة محددة مرتبطة بالدور', en: 'A specific, role-relevant strength', terms: ['strength', 'قوة', 'good at', 'جيد في', 'strong', 'أتميز'] },
      { ar: 'دليل أو مثال', en: 'Evidence or an example', terms: ['for example', 'مثلا', 'مثال', 'when', 'عندما', 'once', 'مرة', 'project', 'مشروع', 'time'] },
      { ar: 'الأثر', en: 'The impact', terms: ['result', 'نتيجة', 'impact', 'أثر', 'improved', 'reduced', 'saved', 'led to', 'أدى'] },
    ],
    alternatives: [
      {
        label: { ar: 'قوتان بدليل', en: 'Two strengths with evidence' },
        answer: {
          ar: 'أول نقطة قوة عندي هي التشخيص المنهجي للمشكلات. عندما ظهرت لدينا مشكلة أداء غامضة في لوحة التحكم، لم أخمّن؛ قست أولًا بالـ Profiler، ووجدت أن مكوّنًا واحدًا عاليًا في الشجرة يُعاد تصييره مع كل حرف، وحللتها بنقل الحالة للأسفل — تحسّن وقت الاستجابة من 400ms إلى أقل من 50ms. الثانية هي التواصل مع غير التقنيين: أستطيع شرح لماذا نحتاج أسبوعًا لإعادة الهيكلة بلغة يفهمها مدير المنتج، وهذا وفّر على فريقي كثيرًا من الجدل.',
          en: 'My first strength is systematic problem diagnosis. When we had a mysterious performance issue in the dashboard, I didn\'t guess — I measured with the Profiler first, found that one component high in the tree was re-rendering on every keystroke, and fixed it by pushing state down. Response time went from 400ms to under 50ms. The second is communicating with non-technical people: I can explain why we need a week for a refactor in terms a product manager understands, which has saved my team a lot of friction.',
        },
        why: { ar: 'كل قوة مدعومة بموقف ورقم، والثانية تظهر نضجًا يتجاوز الكود.', en: 'Each strength is backed by a situation and a number, and the second shows maturity beyond code.' },
      },
      {
        label: { ar: 'قوة واحدة بعمق (لمبتدئ)', en: 'One strength in depth (junior)' },
        answer: {
          ar: 'أقوى ما عندي هو المثابرة في التعلم الذاتي. عندما بدأت تدريبي، كُلّفت بميزة تعتمد على TypeScript ولم أكن أعرفه. بدل طلب إعادة توزيع المهمة، أمضيت المساءين الأولين في التوثيق الرسمي وبنيت مثالًا صغيرًا، ثم أنجزت الميزة في الأسبوع المحدد مع أنواع صحيحة نالت إعجاب المراجع. اليوم TypeScript هو الأداة التي أفضّلها. أعرف أنني ما زلت في بداية مساري، لكن هذا يعني أن قدرتي على تعلّم ما ينقصني بسرعة هي أهم ما أقدّمه.',
          en: 'My strongest quality is persistence in self-directed learning. When I started my internship I was assigned a feature that depended on TypeScript, which I didn\'t know. Instead of asking for the task to be reassigned, I spent the first two evenings in the official docs and built a small example, then delivered the feature within the week with proper types that the reviewer praised. Today TypeScript is my preferred tool. I know I\'m early in my career, but that means my ability to learn quickly what I\'m missing is the most valuable thing I bring.',
        },
        why: { ar: 'قوة واحدة بدليل قوي أفضل من ثلاث بلا دليل، والإجابة صادقة عن المرحلة وتحوّلها إلى ميزة.', en: 'One strength with strong evidence beats three with none, and the answer is honest about the career stage while turning it into an asset.' },
      },
    ],
  },
  {
    id: 'soft-weakness',
    difficulty: intermediate,
    kind: 'behavioral',
    question: {
      ar: 'ما هي نقطة ضعف تعمل على تحسينها؟',
      en: 'What is one area you are working to improve?',
    },
    answer: {
      ar: 'هذا السؤال لا يبحث عن اعتراف مدمّر ولا عن حيلة "أنا مثالي أكثر من اللازم". يبحث عن الوعي الذاتي وعن دليل على أنك تتطور.\n\nالصيغة الناجحة:\n1. نقطة ضعف حقيقية لكنها لا تضرب جوهر الدور.\n2. مثال قصير على أثرها.\n3. ما تفعله فعليًا لتحسينها.\n4. تقدّم ملموس.\n\nما يختبره: الصدق، والنضج، وقابلية التعلم.\n\nتجنّب: نقاط الضعف المقنّعة كقوة ("أعمل بجد أكثر من اللازم")، والضعف القاتل للدور (مطوّر Frontend يقول "لا أهتم بالتفاصيل")، والإجابة بلا خطة تحسين.' + ADAPT.ar,
      en: 'This question is not looking for a damning confession, nor for the "I\'m too much of a perfectionist" trick. It is looking for self-awareness and evidence that you grow.\n\nThe formula that works:\n1. A genuine weakness that does not strike at the core of the role.\n2. A brief example of its effect.\n3. What you are actually doing about it.\n4. Concrete progress.\n\nWhat it tests: honesty, maturity and coachability.\n\nAvoid: weaknesses disguised as strengths ("I work too hard"), weaknesses fatal to the role (a frontend developer saying "I don\'t care about details"), and an answer with no improvement plan.' + ADAPT.en,
    },
    keyPoints: [
      { ar: 'ضعف حقيقي', en: 'A genuine weakness', terms: ['struggle', 'أعاني', 'difficult', 'صعب', 'tend to', 'أميل', 'weakness', 'ضعف', 'not my strongest', 'used to'] },
      { ar: 'ما تفعله لتحسينه', en: 'What you are doing about it', terms: ['working on', 'أعمل على', 'started', 'بدأت', 'practice', 'أتدرب', 'now i', 'الآن'] },
      { ar: 'تقدّم ملموس', en: 'Concrete progress', terms: ['improved', 'تحسن', 'better', 'أفضل', 'progress', 'تقدم', 'result', 'نتيجة'] },
    ],
    alternatives: [
      {
        label: { ar: 'ضعف تقني حقيقي', en: 'A real technical weakness' },
        answer: {
          ar: 'لفترة طويلة كنت أعتبر كتابة الاختبارات عبئًا أؤجّله إلى النهاية، ونتج عن ذلك أخطاء وصلت للإنتاج كان يمكن التقاطها مبكرًا. قبل نحو عام قرّرت تغيير ذلك: بدأت أكتب اختبارًا لكل خطأ أصلحه قبل الإصلاح نفسه، واعتمدت React Testing Library في كل ميزة جديدة. الآن نسبة التغطية في الوحدات التي أملكها تجاوزت 70%، والأهم أن الأخطاء المتكررة توقفت تقريبًا.',
          en: 'For a long time I treated writing tests as a chore to postpone until the end, and that let bugs reach production that could have been caught early. About a year ago I decided to change that: I started writing a test for every bug before fixing it, and adopted React Testing Library on every new feature. Coverage in the modules I own is now above 70%, and more importantly, regressions have almost stopped.',
        },
        why: { ar: 'ضعف حقيقي ومعترف به، لا يهدد جوهر الدور، وله خطة تحسين واضحة ونتيجة قابلة للقياس.', en: 'A real, acknowledged weakness that does not threaten the core of the role, with a clear improvement plan and a measurable result.' },
      },
      {
        label: { ar: 'ضعف في المهارات الشخصية', en: 'An interpersonal weakness' },
        answer: {
          ar: 'أميل إلى أخذ المهام الصعبة بنفسي بدل تفويضها، خصوصًا تحت الضغط، وهذا كان يجعلني عنق زجاجة أحيانًا ويحرم زملائي الأصغر خبرة من فرص التعلم. بدأت أعمل على ذلك بشكل واعٍ: في كل مشروع أحدّد مهمة واحدة على الأقل أعرف أنني أستطيع إنجازها أسرع لكني أعطيها لزميل مع دعم. النتيجة أن الفريق صار أكثر استقلالية، وأنا صرت أركّز على ما لا يستطيع غيري فعله.',
          en: 'I tend to take the hardest tasks myself rather than delegating, especially under pressure, which sometimes made me a bottleneck and denied more junior colleagues learning opportunities. I\'ve started working on this deliberately: in every project I identify at least one task I know I could do faster but hand to a colleague with support instead. The result is a more independent team, and I get to focus on what only I can do.',
        },
        why: { ar: 'تظهر وعيًا بأثر الضعف على الآخرين لا عليك فقط، وخطوة عملية محددة، ونتيجة على مستوى الفريق.', en: 'Shows awareness of the weakness\'s effect on others rather than only on you, a specific practical step, and a team-level result.' },
      },
    ],
  },
  {
    id: 'soft-difficult-project',
    difficulty: intermediate,
    kind: 'behavioral',
    star: true,
    question: {
      ar: 'حدّثني عن مشروع صعب عملت عليه.',
      en: 'Tell me about a difficult project you worked on.',
    },
    answer: {
      ar: 'هذا سؤال STAR كلاسيكي. المقابِل يريد أن يرى كيف تفكّر عندما لا تكون الأمور سهلة.\n\nSTAR:\n• Situation: السياق باختصار — ما المشروع ولماذا كان صعبًا (تقنيًا؟ زمنيًا؟ بشريًا؟).\n• Task: ما كان دورك أنت تحديدًا.\n• Action: ما فعلته — بضمير المتكلم "أنا"، لا "نحن" فقط. هنا الجزء الأطول.\n• Result: النتيجة، ويفضّل برقم، وما تعلمته.\n\nاختر مشروعًا كانت الصعوبة فيه حقيقية ودورك فيه واضحًا. الصعوبة التقنية أسهل في السرد، لكن الصعوبة البشرية (متطلبات متغيرة، فريق موزّع) تظهر نضجًا أكبر.\n\nتجنّب: السرد التقني المفرط بلا سياق، ونسب كل الفضل لنفسك أو التنصّل تمامًا بـ "نحن".' + ADAPT.ar,
      en: 'A classic STAR question. The interviewer wants to see how you think when things are not easy.\n\nSTAR:\n• Situation: brief context — what the project was and why it was hard (technically? timeline? people?).\n• Task: your specific role.\n• Action: what you did — in the first person, "I", not only "we". This is the longest part.\n• Result: the outcome, ideally with a number, and what you learned.\n\nPick a project where the difficulty was real and your role was clear. Technical difficulty is easier to narrate, but human difficulty (changing requirements, a distributed team) shows more maturity.\n\nAvoid: excessive technical narration without context, and either claiming all the credit or hiding entirely behind "we".' + ADAPT.en,
    },
    keyPoints: [
      { ar: 'السياق وسبب الصعوبة', en: 'Context and why it was hard', terms: ['project', 'مشروع', 'difficult', 'صعب', 'challenge', 'تحد', 'problem', 'مشكلة', 'deadline', 'legacy'] },
      { ar: 'دورك أنت', en: 'Your specific role', terms: [' i ', 'أنا', 'my role', 'دوري', 'responsible', 'مسؤول', 'i was'] },
      { ar: 'الإجراءات التي اتخذتها', en: 'The actions you took', terms: ['i decided', 'قررت', 'i built', 'بنيت', 'i proposed', 'اقترحت', 'i started', 'i wrote', 'i introduced', 'i broke'] },
      { ar: 'النتيجة والدرس', en: 'The result and lesson', terms: ['result', 'نتيجة', 'learned', 'تعلمت', 'outcome', 'delivered', 'سلمنا', 'shipped', 'launched', '%'] },
    ],
    alternatives: [
      {
        label: { ar: 'صعوبة تقنية (STAR)', en: 'Technical difficulty (STAR)' },
        answer: {
          ar: 'الموقف: ورثنا تطبيق React قديم بـ 300 ألف سطر بلا اختبارات، وكان يجب ترحيله من مكوّنات الأصناف إلى hooks دون توقف عن تسليم الميزات. المهمة: كنت مسؤولًا عن خطة الترحيل وتنفيذ الجزء الأصعب — طبقة إدارة الحالة. الإجراء: بدأت بكتابة اختبارات E2E للمسارات الحرجة لأحصل على شبكة أمان، ثم رحّلت وحدة واحدة كل أسبوع بدل محاولة كل شيء دفعة واحدة، وأنشأت قائمة تحقق يستخدمها الفريق لكل وحدة. النتيجة: أكملنا الترحيل خلال أربعة أشهر بدون أي حادث إنتاج، وانخفض حجم الحزمة 25%. تعلمت أن شبكة الأمان قبل التغيير أهم من سرعة التغيير.',
          en: 'Situation: we inherited a legacy React app of 300k lines with no tests, and it had to be migrated from class components to hooks without pausing feature delivery. Task: I owned the migration plan and the hardest part — the state management layer. Action: I started by writing E2E tests for the critical paths to get a safety net, then migrated one module per week instead of attempting everything at once, and created a checklist the team used per module. Result: we finished in four months with zero production incidents, and the bundle shrank by 25%. I learned that a safety net before a change matters more than the speed of the change.',
        },
        why: { ar: 'بنية STAR واضحة، دورك محدد، الإجراءات منهجية وليست عشوائية، ونتيجة برقم ودرس مستفاد.', en: 'Clear STAR structure, a specific role, methodical rather than random actions, and a result with a number plus a lesson.' },
      },
      {
        label: { ar: 'صعوبة بشرية / تنظيمية', en: 'People / organisational difficulty' },
        answer: {
          ar: 'أصعب مشروع لم يكن الأصعب تقنيًا. كان لدينا ثلاث جهات تطلب ميزات متناقضة لنفس لوحة التحكم، ولا أحد يملك قرار الأولوية. دوري كان قائد الواجهة الأمامية. بدل الاستمرار في محاولة إرضاء الجميع، جمعت الجهات الثلاث في اجتماع واحد وعرضت ما يمكن إنجازه في الربع الحالي بشكل ملموس، وطلبت منهم ترتيب الأولويات معًا بدل التفاوض معي كلٌّ على حدة. انتهينا بقائمة متفق عليها، وسلّمنا في الموعد، والأهم أن هذا الاجتماع صار عادة ربعية. تعلمت أن كثيرًا من "المشكلات التقنية" هي في الحقيقة مشكلات قرار.',
          en: 'My hardest project wasn\'t the hardest technically. We had three stakeholders requesting conflicting features for the same dashboard, and nobody owned the prioritisation decision. My role was frontend lead. Instead of continuing to try to satisfy everyone, I brought all three into one meeting, showed concretely what could be delivered in the current quarter, and asked them to rank priorities together rather than negotiating with me separately. We ended with an agreed list, delivered on time, and — more importantly — that meeting became a quarterly habit. I learned that many "technical problems" are really decision problems.',
        },
        why: { ar: 'تُظهر مبادرة وقيادة دون سلطة رسمية، وحلًا نظاميًا لا لمرة واحدة، ونضجًا في فهم طبيعة المشكلة.', en: 'Shows initiative and leadership without formal authority, a systemic rather than one-off fix, and maturity in understanding the real nature of the problem.' },
      },
    ],
  },
  {
    id: 'soft-disagreement',
    difficulty: intermediate,
    kind: 'behavioral',
    star: true,
    question: {
      ar: 'حدّثني عن خلاف مع زميل. كيف تعاملت معه؟',
      en: 'Tell me about a disagreement with a teammate. How did you handle it?',
    },
    answer: {
      ar: 'المقابِل لا يريد أن يعرف أنك لا تختلف أبدًا — هذا غير قابل للتصديق. يريد أن يرى كيف تختلف: هل تركّز على المشكلة أم الشخص؟ هل تستمع؟ هل تستطيع تغيير رأيك؟\n\nأفضل الأمثلة: خلاف تقني حقيقي (اختيار مكتبة، تصميم API) انتهى بقرار مبني على بيانات أو تجربة، لا على من يصرخ أعلى.\n\nالبنية: ما الخلاف ← كيف فهمت وجهة نظر الآخر ← كيف توصلتم لقرار ← النتيجة والعلاقة بعدها.\n\nما يختبره: الذكاء العاطفي، والقدرة على الاختلاف باحترام، وترك الأنا خارج القرار التقني.\n\nتجنّب: قصة تنتهي بـ "وثبت أنني كنت على حق"، ووصف الزميل سلبيًا، وخلافًا حُلّ بتدخل المدير فقط.' + ADAPT.ar,
      en: 'The interviewer does not want to hear that you never disagree — that is not credible. They want to see how you disagree: do you focus on the problem or the person? Do you listen? Can you change your mind?\n\nThe best examples: a real technical disagreement (a library choice, an API design) resolved by data or an experiment, not by whoever spoke loudest.\n\nStructure: the disagreement → how you understood the other view → how you reached a decision → the result and the relationship afterwards.\n\nWhat it tests: emotional intelligence, disagreeing respectfully, and keeping ego out of technical decisions.\n\nAvoid: a story ending with "and I was proven right", describing the colleague negatively, and a disagreement resolved only by a manager stepping in.' + ADAPT.en,
    },
    keyPoints: [
      { ar: 'الخلاف عن الفكرة لا الشخص', en: 'Disagreement about the idea, not the person', terms: ['approach', 'نهج', 'idea', 'فكرة', 'technical', 'تقني', 'design', 'تصميم', 'not personal'] },
      { ar: 'الاستماع لوجهة النظر الأخرى', en: 'Listening to the other view', terms: ['listen', 'استمع', 'understand', 'فهم', 'their point', 'وجهة نظر', 'asked', 'سألت', 'perspective'] },
      { ar: 'قرار مبني على دليل', en: 'A decision based on evidence', terms: ['data', 'بيانات', 'measure', 'قياس', 'prototype', 'نموذج', 'test', 'اختبار', 'benchmark', 'tried', 'جربنا', 'compromise'] },
      { ar: 'العلاقة بعد الخلاف', en: 'The relationship afterwards', terms: ['relationship', 'علاقة', 'respect', 'احترام', 'still', 'ما زلنا', 'trust', 'ثقة', 'together'] },
    ],
    alternatives: [
      {
        label: { ar: 'خلاف تقني حُسم بتجربة', en: 'A technical disagreement settled by an experiment' },
        answer: {
          ar: 'اختلفت مع زميل حول إدارة الحالة في مشروع جديد: هو أراد Redux منذ اليوم الأول، وأنا رأيت أن React Query مع Context يكفي. بدل الجدل النظري، اقترحت أن يبني كلٌّ منا نموذجًا مصغرًا لنفس الميزة خلال يوم واحد ونقارن. اتضح أن نهجه أفضل في جزء واحد — تتبع التغييرات المعقدة في محرر النصوص — ونهجي أبسط في كل ما عداه. انتهينا بحل هجين: React Query لبيانات الخادم وZustand لحالة المحرر. الأهم أننا صرنا نلجأ للتجربة السريعة كلما اختلفنا بعدها.',
          en: 'I disagreed with a colleague about state management on a new project: he wanted Redux from day one, and I thought React Query with Context was enough. Rather than argue in the abstract, I proposed we each build a small prototype of the same feature in one day and compare. It turned out his approach was better in one area — tracking complex changes in the rich-text editor — and mine was simpler everywhere else. We ended with a hybrid: React Query for server data and Zustand for editor state. Most importantly, we started using quick experiments whenever we disagreed after that.',
        },
        why: { ar: 'الخلاف حُسم بدليل لا بأنا، والنتيجة أخذت من رأي الآخر، والقصة تنتهي بتحسّن في طريقة عمل الفريق.', en: 'Resolved by evidence rather than ego, the outcome incorporated the other person\'s view, and the story ends with an improvement to how the team works.' },
      },
      {
        label: { ar: 'خلاف انتهى بتغيير رأيي', en: 'A disagreement where I changed my mind' },
        answer: {
          ar: 'اعترض زميل على تصميمي لطبقة جلب البيانات في مراجعة الكود، ورأى أن التجريد الذي أضفته مبالغ فيه. كان رد فعلي الأول أنه لا يرى الصورة الكاملة، فبدل الرد في التعليقات طلبت مكالمة عشر دقائق وطلبت منه أن يشرح لي ما يقلقه تحديدًا. قال شيئًا لم أفكر فيه: أن الفريق سيحتاج لتعلم التجريد الجديد، ولدينا ثلاثة مطوّرين انضموا حديثًا. كان محقًا في أن التكلفة على الفريق أكبر من الفائدة الآن. أعدت الكود إلى النسخة الأبسط مع ملاحظة عن متى نعيد النظر. لم أخسر شيئًا، والفريق كسب كودًا يفهمه الجميع — وصار زميلي يطلب رأيي في تصاميمه بعدها.',
          en: 'A colleague pushed back on my design for the data-fetching layer in code review, arguing the abstraction I\'d added was excessive. My first reaction was that he wasn\'t seeing the full picture, so instead of replying in the comments I asked for a ten-minute call and asked him to explain exactly what worried him. He said something I hadn\'t considered: the team would have to learn the new abstraction, and we had three developers who had just joined. He was right that the cost to the team outweighed the benefit right now. I reverted to the simpler version with a note on when to revisit. I lost nothing, the team gained code everyone understood — and he started asking for my input on his designs afterwards.',
        },
        why: { ar: 'تُظهر القدرة على تغيير الرأي بناءً على حجة أفضل، والفصل بين الأنا والقرار، وأثرًا إيجابيًا على العلاقة.', en: 'Shows the ability to change your mind on a better argument, separating ego from the decision, and a positive effect on the relationship.' },
        avoid: { ar: 'لا تجعلها قصة استسلام — وضّح أنك غيّرت رأيك لأن الحجة كانت أفضل، لا لتجنب النقاش.', en: 'Do not make it a story of caving in — make clear you changed your mind because the argument was better, not to avoid the discussion.' },
      },
    ],
  },
  {
    id: 'soft-mistake',
    difficulty: intermediate,
    kind: 'behavioral',
    star: true,
    question: {
      ar: 'حدّثني عن خطأ ارتكبته في العمل.',
      en: 'Tell me about a time you made a mistake.',
    },
    answer: {
      ar: 'الاختبار هنا: هل تتحمّل المسؤولية؟ وهل تتعلم؟\n\nاختر خطأً حقيقيًا وذا أثر (لا "نسيت فاصلة منقوطة")، لكن ليس كارثيًا لدرجة تثير الشك في كفاءتك.\n\nالبنية: ما الخطأ ← أثره ← ماذا فعلت فورًا لاحتوائه ← ما الذي غيّرته حتى لا يتكرر.\n\nأهم جزء هو الأخير: تغيير في العملية أو الأداة أو العادة، لا مجرد "صرت أكثر حذرًا".\n\nما يختبره: المساءلة، والنضج، وقابلية التعلم.\n\nتجنّب: لوم الآخرين أو الظروف، والتقليل من الخطأ، والقصة بلا تغيير ملموس بعدها.' + ADAPT.ar,
      en: 'The test here: do you take responsibility, and do you learn?\n\nPick a real mistake with real impact (not "I forgot a semicolon"), but not one so catastrophic it raises doubts about your competence.\n\nStructure: the mistake → its impact → what you did immediately to contain it → what you changed so it does not recur.\n\nThe most important part is the last: a change to a process, a tool or a habit, not just "I became more careful".\n\nWhat it tests: accountability, maturity and coachability.\n\nAvoid: blaming others or circumstances, minimising the mistake, and a story with no concrete change afterwards.' + ADAPT.en,
    },
    keyPoints: [
      { ar: 'تحمّل المسؤولية بوضوح', en: 'Clear ownership', terms: ['my mistake', 'خطئي', 'i made', 'ارتكبت', 'my fault', 'i missed', 'فاتني', 'i broke', 'i caused', 'تسببت'] },
      { ar: 'الأثر', en: 'The impact', terms: ['impact', 'أثر', 'affected', 'تأثر', 'down', 'users', 'مستخدم', 'production', 'إنتاج', 'broke'] },
      { ar: 'الاحتواء الفوري', en: 'Immediate containment', terms: ['immediately', 'فور', 'rolled back', 'تراجعت', 'reverted', 'informed', 'أبلغت', 'told', 'fixed', 'أصلحت'] },
      { ar: 'تغيير يمنع التكرار', en: 'A change preventing recurrence', terms: ['since then', 'منذ ذلك', 'now we', 'الآن', 'added', 'أضفت', 'process', 'عملية', 'checklist', 'test', 'ci', 'never again'] },
    ],
    alternatives: [
      {
        label: { ar: 'خطأ في الإنتاج مع تغيير في العملية', en: 'A production mistake with a process change' },
        answer: {
          ar: 'نشرت مرة تغييرًا في منطق الخصومات دون اختباره على بيانات حقيقية، وتبيّن أنه يطبّق الخصم مرتين في حالة محددة. خلال ساعتين استفاد نحو 40 عميلًا من خصم مضاعف قبل أن نلاحظ. أبلغت مديري فورًا، وتراجعت عن النشر، وكتبت تقريرًا بالحالات المتأثرة ليتعامل معها فريق الدعم. ثم غيّرت شيئين: كتبت اختبارات لكل حالة من حالات الخصم — لم تكن موجودة — واقترحت أن أي تغيير يمس الأسعار يمر بمراجعة ثانية إلزامية، وهو ما اعتمدناه. الخطأ كلّف الشركة مبلغًا صغيرًا، لكنه أصلح فجوة في عمليتنا كانت ستكلف أكثر لاحقًا.',
          en: 'I once deployed a change to the discount logic without testing it against real data, and it turned out to apply the discount twice in one specific case. Within two hours about 40 customers had received a double discount before we noticed. I told my manager immediately, rolled back the deploy, and wrote up the affected cases for the support team to handle. Then I changed two things: I wrote tests for every discount scenario — there had been none — and proposed that any change touching pricing requires a mandatory second review, which we adopted. The mistake cost the company a small amount, but it fixed a gap in our process that would have cost far more later.',
        },
        why: { ar: 'ملكية كاملة بلا تبرير، احتواء سريع وشفاف، وتغييران ملموسان أحدهما شخصي والآخر على مستوى الفريق.', en: 'Full ownership with no excuses, fast and transparent containment, and two concrete changes — one personal, one at team level.' },
      },
      {
        label: { ar: 'خطأ في التواصل لا في الكود', en: 'A communication mistake, not a code one' },
        answer: {
          ar: 'أكبر خطأ لي لم يكن في الكود. في مشروع سابق افترضت أن مدير المنتج يعرف أن ميزة التصدير ستستغرق ثلاثة أسابيع لا واحدًا لأن الأمر بدا واضحًا لي تقنيًا، فلم أذكره صراحةً. اكتشف ذلك في العرض التجريبي أمام العميل عندما لم تكن الميزة جاهزة، وكان موقفًا محرجًا له. اعتذرت له مباشرة في اليوم نفسه، ووضّحت أين أخطأت تحديدًا: افترضت بدل أن أتأكد. منذ ذلك الحين، أكتب التقدير والافتراضات في تذكرة المهمة نفسها وأطلب تأكيدًا صريحًا قبل أن يبدأ أي عمل يتجاوز أسبوعًا. الكود لم يكن الخطأ — الصمت كان.',
          en: 'My biggest mistake wasn\'t in code. On a previous project I assumed the product manager knew the export feature would take three weeks, not one, because it seemed technically obvious to me, so I never said it explicitly. He found out during a client demo when the feature wasn\'t ready, and it was embarrassing for him. I apologised to him directly that same day and named exactly where I\'d gone wrong: I assumed instead of confirming. Since then I write the estimate and its assumptions into the task ticket itself and ask for explicit confirmation before any work longer than a week begins. The code was never the mistake — the silence was.',
        },
        why: { ar: 'تُظهر نضجًا في إدراك أن أخطاء التواصل بنفس خطورة أخطاء الكود، مع اعتذار مباشر وتغيير محدد في العادة.', en: 'Shows the maturity to recognise that communication failures matter as much as code failures, with a direct apology and a specific habit change.' },
      },
    ],
  },
  {
    id: 'soft-difficult-feedback',
    difficulty: intermediate,
    kind: 'behavioral',
    star: true,
    question: {
      ar: 'حدّثني عن موقف تلقيت فيه ملاحظات صعبة.',
      en: 'Tell me about a time you received difficult feedback.',
    },
    answer: {
      ar: 'المقابِل يريد معرفة كيف تستجيب للنقد: بالدفاعية أم بالفضول؟\n\nالمثال الجيد: ملاحظة كانت صحيحة (ولو جزئيًا) وغيّرت سلوكك فعلًا. الملاحظة التي "اتضح أنها خاطئة" لا تخدمك هنا.\n\nالبنية: ما الملاحظة ومن قدّمها ← رد فعلك الأول بصدق (من الطبيعي أن يكون صعبًا) ← كيف تحققت منها ← ما غيّرته ← النتيجة.\n\nما يختبره: الانفتاح على النقد، والتواضع، والقدرة على فصل الأنا عن العمل.\n\nتجنّب: ملاحظة تافهة، والقصة التي تظهر أن المُلاحِظ كان مخطئًا، وادّعاء أنك تقبلت الأمر فورًا بلا أي انزعاج — غير قابل للتصديق.' + ADAPT.ar,
      en: 'The interviewer wants to know how you respond to criticism: with defensiveness or with curiosity?\n\nA good example: feedback that was right (at least partly) and genuinely changed your behaviour. Feedback that "turned out to be wrong" does not serve you here.\n\nStructure: the feedback and who gave it → your honest first reaction (it is normal for it to sting) → how you verified it → what you changed → the result.\n\nWhat it tests: openness to criticism, humility, and separating ego from the work.\n\nAvoid: trivial feedback, a story showing the giver was wrong, and claiming you accepted it instantly with no discomfort — not credible.' + ADAPT.en,
    },
    keyPoints: [
      { ar: 'الملاحظة ومصدرها', en: 'The feedback and its source', terms: ['feedback', 'ملاحظ', 'manager', 'مدير', 'told me', 'قال لي', 'review', 'مراجعة', 'colleague', 'زميل'] },
      { ar: 'رد فعل صادق', en: 'An honest reaction', terms: ['initially', 'في البداية', 'at first', 'أولا', 'hard to hear', 'صعب', 'surprised', 'تفاجأت', 'defensive', 'uncomfortable'] },
      { ar: 'التحقق والتغيير', en: 'Verification and change', terms: ['realized', 'أدركت', 'asked', 'سألت', 'changed', 'غيرت', 'started', 'بدأت', 'stopped', 'توقفت'] },
    ],
    alternatives: [
      {
        label: { ar: 'ملاحظة عن أسلوب مراجعة الكود', en: 'Feedback on code review style' },
        answer: {
          ar: 'أخبرني مديري في مراجعة أداء أن تعليقاتي في مراجعات الكود حادة وأن زميلين أصغر مني يتجنبان طلب مراجعتي. صراحةً، كان رد فعلي الأول دفاعيًا — كنت أعتقد أنني دقيق فحسب. لكني عدت وقرأت آخر عشرين تعليقًا كتبتها، ووجدت أنها كلها تقول "هذا خطأ" دون شرح السبب أو اقتراح بديل. غيّرت أسلوبي: كل تعليق يشرح لماذا، ويميّز بين الإلزامي والاختياري، ويبدأ بما هو جيد في الكود. بعد شهرين صار الزميلان يطلبان مراجعتي بأنفسهم، وصار أحدهما يستخدم نفس الأسلوب مع غيره.',
          en: 'My manager told me in a performance review that my code review comments were harsh, and that two junior colleagues were avoiding asking me for reviews. Honestly, my first reaction was defensive — I thought I was just being thorough. But I went back and read my last twenty comments, and every one of them said "this is wrong" without explaining why or suggesting an alternative. I changed my approach: every comment explains the reason, distinguishes required from optional, and starts with what is good about the code. Two months later both colleagues were requesting my reviews themselves, and one of them had adopted the same style with others.',
        },
        why: { ar: 'صادقة عن الانزعاج الأولي، وتتضمن تحققًا فعليًا لا مجرد قبول، وتغييرًا محددًا بنتيجة يمكن ملاحظتها.', en: 'Honest about the initial defensiveness, includes actual verification rather than mere acceptance, and a specific change with an observable result.' },
      },
      {
        label: { ar: 'ملاحظة عن جودة العمل التقني', en: 'Feedback about technical quality' },
        answer: {
          ar: 'في أول أشهري كمطوّر، أخبرني مطوّر أقدم أنني أسلّم الميزات بسرعة لكنها تعود إليّ كثيرًا من فريق الاختبار. كان ذلك صعبًا لأنني كنت أفتخر بسرعتي. طلبت منه أمثلة محددة، فأراني ثلاث تذاكر عادت كلها بسبب حالات حدية لم أفكر فيها: حقول فارغة، وشبكة بطيئة، ومستخدم بلا صلاحيات. أدركت أنني أختبر المسار السعيد فقط. وضعت لنفسي قائمة تحقق قصيرة من خمس حالات حدية أراجعها قبل أي طلب دمج. خلال ربع واحد انخفضت نسبة الإرجاع من الاختبار إلى أقل من النصف، وما زلت أستخدم القائمة نفسها حتى اليوم بعد توسيعها.',
          en: 'In my first months as a developer, a senior colleague told me I shipped features fast but they came back from QA too often. That was hard to hear because I took pride in my speed. I asked him for specific examples, and he showed me three tickets that had all bounced because of edge cases I hadn\'t considered: empty fields, a slow network, a user without permissions. I realised I was only testing the happy path. I wrote myself a short checklist of five edge cases to review before every pull request. Within a quarter my QA return rate dropped by more than half, and I still use that same checklist today, now expanded.',
        },
        why: { ar: 'تطلب أمثلة بدل الدفاع، وتحدد السبب الجذري بدقة، وتضع أداة بسيطة استمرت — نموذج مثالي لمطوّر مبتدئ.', en: 'Asks for examples instead of defending, pinpoints the root cause precisely, and creates a simple tool that lasted — an ideal model for a junior developer.' },
      },
    ],
  },
  {
    id: 'soft-conflict-at-work',
    difficulty: intermediate,
    kind: 'behavioral',
    star: true,
    question: {
      ar: 'حدّثني عن صراع في العمل وكيف حللته.',
      en: 'Tell me about a conflict at work and how you resolved it.',
    },
    answer: {
      ar: 'يختلف عن سؤال "الخلاف مع زميل" في أنه أوسع: قد يكون بين فريقين، أو مع مدير، أو حول أولويات. والكلمة المفتاحية "حللته" — المقابِل يريد أن يرى دورك الفاعل.\n\nما يبحث عنه: هل تواجه الصراع بدل تجنبه؟ هل تبحث عن المصلحة المشتركة؟ هل تحافظ على الاحترام؟\n\nالبنية: طرفا الصراع وسببه الحقيقي ← ما فعلته أنت للفهم ← الحل الذي توصلتم إليه ← ماذا تغيّر بعدها.\n\nتجنّب: صراعًا شخصيًا بحتًا، والظهور كضحية، وحلًا تم بفرض السلطة.' + ADAPT.ar,
      en: 'Broader than "disagreement with a teammate": it could be between two teams, with a manager, or over priorities. And the key word is "resolved" — the interviewer wants to see you as the active party.\n\nWhat they look for: do you face conflict rather than avoid it, do you seek the shared interest, do you keep it respectful?\n\nStructure: the parties and the real underlying cause → what you did to understand → the resolution you reached → what changed afterwards.\n\nAvoid: a purely personal conflict, appearing as a victim, and a resolution imposed by authority.' + ADAPT.en,
    },
    keyPoints: [
      { ar: 'السبب الحقيقي للصراع', en: 'The real underlying cause', terms: ['because', 'لأن', 'root', 'جذر', 'really about', 'في الحقيقة', 'underlying', 'priorit', 'أولوي', 'pressure'] },
      { ar: 'مواجهة مباشرة ومحترمة', en: 'Direct, respectful engagement', terms: ['talked', 'تحدثت', 'conversation', 'حديث', 'meeting', 'اجتماع', 'directly', 'مباشرة', 'one-on-one', 'sat down'] },
      { ar: 'حل يخدم الطرفين', en: 'A solution serving both sides', terms: ['both', 'كلا', 'agreed', 'اتفقنا', 'compromise', 'حل وسط', 'shared', 'مشترك', 'win'] },
    ],
    alternatives: [
      {
        label: { ar: 'صراع بين فريقين', en: 'A conflict between two teams' },
        answer: {
          ar: 'كان هناك توتر مستمر بين فريقنا في الواجهة الأمامية وفريق الـ API: نحن نشتكي أن العقود تتغير بلا إشعار، وهم يشتكون أننا نطلب تغييرات في اللحظة الأخيرة. بدل الاستمرار في الشكوى، طلبت جلسة مشتركة وسألت سؤالًا واحدًا: ما الذي يجعل عمل كل فريق أصعب؟ اتضح أن المشكلة الجذرية أن لا أحد يعرف متى تُجمَّد المتطلبات. اتفقنا على شيئين: عقد OpenAPI يُراجَع من الفريقين قبل أي تنفيذ، ونافذة تجميد قبل أسبوع من كل إصدار. خلال شهرين توقفت الشكاوى تقريبًا، والأهم أن الفريقين صارا يحضران تخطيط بعضهما.',
          en: 'There was ongoing tension between our frontend team and the API team: we complained that contracts changed without notice, and they complained that we requested changes at the last minute. Rather than keep complaining, I asked for a joint session and posed one question: what makes each team\'s work harder? It turned out the root problem was that nobody knew when requirements were frozen. We agreed on two things: an OpenAPI contract reviewed by both teams before any implementation, and a freeze window a week before each release. Within two months the complaints had almost stopped, and — more importantly — the two teams started attending each other\'s planning.',
        },
        why: { ar: 'تذهب إلى السبب الجذري بدل الأعراض، وتستخدم سؤالًا لا اتهامًا، وتنتهي بتغيير في العملية لا مجرد تهدئة.', en: 'Goes to the root cause rather than the symptoms, uses a question rather than an accusation, and ends with a process change rather than a truce.' },
      },
      {
        label: { ar: 'صراع مع مدير حول الأولويات', en: 'A conflict with a manager over priorities' },
        answer: {
          ar: 'كان مديري يصرّ على إطلاق ميزة جديدة بينما كنت أرى أن الدين التقني في وحدة الدفع وصل لمرحلة خطرة — كل تعديل صغير يكسر شيئًا. أول محاولتين للنقاش كانتا "أنا أرى" مقابل "هو يرى" ولم تنجحا. فغيّرت الأسلوب: جمعت خلال أسبوع أرقامًا فعلية — عدد الأخطاء التي خرجت من وحدة الدفع في الأشهر الثلاثة الماضية، والساعات التي أنفقناها على إصلاحها — وعرضتها في صفحة واحدة مع اقتراح: أسبوع واحد لإعادة الهيكلة قبل الميزة، مقابل توقّع بأن الميزة نفسها ستستغرق وقتًا أقل بعدها. وافق على ثلاثة أيام بدل أسبوع، وقبلت. الميزة أُطلقت بعد ذلك بلا أي خطأ في الدفع، وصار يطلب مني الأرقام بدل الآراء في كل نقاش لاحق — وهذا كان الأثر الأهم.',
          en: 'My manager insisted on shipping a new feature while I believed the technical debt in the payments module had reached a dangerous point — every small change broke something. My first two attempts at the conversation were "I think" versus "he thinks", and went nowhere. So I changed approach: over a week I gathered actual numbers — how many bugs had escaped from the payments module in the last three months, and the hours we\'d spent fixing them — and presented them on one page with a proposal: one week of refactoring before the feature, in exchange for the feature itself taking less time afterwards. He agreed to three days instead of a week, and I accepted. The feature shipped with zero payment bugs, and from then on he asked me for numbers instead of opinions in every discussion — that was the most important outcome.',
        },
        why: { ar: 'تعترف بأن المحاولة الأولى فشلت، وتنتقل من الرأي إلى البيانات، وتقبل حلًا وسطًا بنضج، وتنتهي بتغيير في طريقة اتخاذ القرار.', en: 'Admits the first attempt failed, moves from opinion to data, accepts a compromise maturely, and ends with a change in how decisions get made.' },
      },
    ],
  },
  {
    id: 'soft-under-pressure',
    difficulty: intermediate,
    kind: 'behavioral',
    star: true,
    question: {
      ar: 'حدّثني عن موقف عملت فيه تحت ضغط شديد.',
      en: 'Tell me about a time you had to work under pressure.',
    },
    answer: {
      ar: 'المقابِل يريد أن يعرف: هل تنهار، أم تصرخ، أم تنظّم؟\n\nأفضل الإجابات تُظهر أنك تحت الضغط تصبح أكثر تنظيمًا لا أقل: تحدد الأولويات، وتتواصل بوضوح، وتتخذ قرارات صعبة (ماذا نؤجّل؟)، ولا تضحّي بالجودة الأساسية.\n\nالبنية: مصدر الضغط ← كيف رتّبت الأولويات ← ما تواصلت به ومع من ← النتيجة ← وما الذي جعلك تتعامل معه أفضل في المرة التالية.\n\nما يختبره: الأولويات، والتواصل تحت الضغط، والحكم السليم.\n\nتجنّب: تمجيد السهر والبطولة الفردية، والادعاء أنك لا تشعر بالضغط أصلًا.' + ADAPT.ar,
      en: 'The interviewer wants to know: do you collapse, shout, or organise?\n\nThe best answers show that under pressure you become more structured, not less: you prioritise, communicate clearly, make hard calls (what do we cut?), and do not sacrifice core quality.\n\nStructure: the source of pressure → how you prioritised → what you communicated and to whom → the result → what made you handle it better the next time.\n\nWhat it tests: prioritisation, communication under stress and judgement.\n\nAvoid: glorifying all-nighters and lone heroics, and claiming you do not feel pressure at all.' + ADAPT.en,
    },
    keyPoints: [
      { ar: 'ترتيب الأولويات', en: 'Prioritisation', terms: ['priorit', 'أولوي', 'first', 'أولا', 'most important', 'الأهم', 'cut', 'defer', 'أجل', 'scope'] },
      { ar: 'التواصل مع الأطراف', en: 'Communicating with stakeholders', terms: ['communicat', 'تواصل', 'told', 'أخبرت', 'informed', 'أبلغت', 'updated', 'stakeholder', 'manager', 'مدير', 'transparent'] },
      { ar: 'الحفاظ على الجودة الأساسية', en: 'Protecting core quality', terms: ['quality', 'جودة', 'test', 'اختبار', 'did not skip', 'لم أتجاوز', 'still'] },
    ],
    alternatives: [
      {
        label: { ar: 'موعد نهائي مفاجئ', en: 'A sudden deadline' },
        answer: {
          ar: 'قبل أسبوعين من إطلاق كبير، أبلغنا العميل أن تاريخ الإطلاق تقدّم أسبوعًا لأسباب تسويقية. أول ما فعلته لم يكن البدء بالعمل أسرع، بل فتحت قائمة الميزات المتبقية مع مدير المنتج وقسمناها إلى: ضروري للإطلاق، ويمكن تأجيله أسبوعًا بعده. نصف القائمة كان قابلًا للتأجيل. ثم أبلغت الفريق بالخطة الجديدة بوضوح، وأوقفت كل الاجتماعات غير الضرورية. الشيء الوحيد الذي رفضت التنازل عنه كان اختبارات مسار الدفع. أطلقنا في الموعد الجديد بلا حوادث، وأكملنا المؤجّل بعد أسبوع. تعلمت أن أول خطوة تحت الضغط هي تقليص النطاق لا زيادة الساعات.',
          en: 'Two weeks before a major launch, the client told us the date had moved forward a week for marketing reasons. The first thing I did was not to start working faster — I opened the remaining feature list with the product manager and split it into: essential for launch, and deferrable to the following week. Half the list was deferrable. Then I communicated the new plan clearly to the team and cancelled every non-essential meeting. The one thing I refused to compromise on was the checkout path tests. We launched on the new date with no incidents and finished the deferred work a week later. I learned that the first step under pressure is cutting scope, not adding hours.',
        },
        why: { ar: 'الاستجابة الأولى هي التنظيم لا الاندفاع، وقرار صعب واضح، وحدّ للجودة لم يُتجاوز، ودرس قابل للتطبيق.', en: 'The first response is organisation rather than rushing, a clear hard call, a quality line that was held, and an applicable lesson.' },
      },
      {
        label: { ar: 'حادث إنتاج مباشر', en: 'A live production incident' },
        answer: {
          ar: 'في ذروة حملة تخفيضات، توقفت صفحة الدفع عن العمل لجزء من المستخدمين وكان كل دقيقة تعني مبيعات ضائعة. الضغط كان حقيقيًا: رسائل من الإدارة كل بضع دقائق. أول ما فعلته هو تعيين شخص واحد للرد على الإدارة حتى أتفرغ للتشخيص، ووضعت قاعدة: لا تخمين ولا نشر لإصلاحات غير مختبرة. خلال عشرين دقيقة عزلنا المشكلة في نسخة حديثة من مكتبة خارجية تفشل على متصفح معين، فتراجعنا عن النسخة بدل محاولة إصلاحها تحت الضغط. عاد الدفع للعمل، وفي اليوم التالي كتبنا تقرير ما بعد الحادث دون لوم وأضفنا اختبارًا عبر المتصفحات لمسار الدفع. ما تعلمته: تحت الضغط، تقليل عدد الأشخاص الذين يتحدثون إليك أهم من زيادة عدد من يعملون معك.',
          en: 'At the peak of a sales campaign, the checkout page stopped working for a portion of users, and every minute meant lost revenue. The pressure was real: messages from leadership every few minutes. The first thing I did was assign one person to handle leadership updates so I could focus on diagnosis, and I set one rule: no guessing and no deploying untested fixes. Within twenty minutes we isolated the problem to a recent version of a third-party library failing on one browser, so we rolled the version back rather than trying to patch it under pressure. Checkout recovered, and the next day we wrote a blameless post-mortem and added a cross-browser test for the checkout path. What I learned: under pressure, reducing the number of people talking to you matters more than increasing the number working with you.',
        },
        why: { ar: 'إجراء تنظيمي فوري (عزل التشويش)، قاعدة تحمي الجودة تحت الضغط، وقرار التراجع بدل الإصلاح المتسرع، ومتابعة بعد الحادث.', en: 'An immediate organisational move (isolating the noise), a rule that protects quality under pressure, a rollback rather than a rushed fix, and proper follow-up afterwards.' },
      },
    ],
  },
  {
    id: 'soft-missed-deadline',
    difficulty: intermediate,
    kind: 'behavioral',
    star: true,
    question: {
      ar: 'حدّثني عن موقف فاتك فيه موعد تسليم.',
      en: 'Tell me about a time you missed a deadline.',
    },
    answer: {
      ar: 'الجميع فاته موعد ما. ما يهم هو: متى عرفت أنك ستتأخر، ومتى أخبرت الآخرين، وماذا فعلت.\n\nأسوأ إجابة: "لم يفتني موعد قط". ثاني أسوأ: التأخر بصمت حتى يوم التسليم.\n\nالبنية: المهمة والموعد ← لماذا تأخّرت (بصدق ودون لوم) ← متى وكيف أبلغت ← ماذا فعلت لتقليل الأثر ← ما تعلمته عن التقدير أو التخطيط.\n\nما يختبره: الشفافية المبكرة، والمسؤولية، والتعلم في التقدير.\n\nتجنّب: لوم الفريق أو المتطلبات، وإخفاء التأخر، والقصة بلا درس.' + ADAPT.ar,
      en: 'Everyone has missed a deadline. What matters is: when did you know you would be late, when did you tell people, and what did you do.\n\nThe worst answer: "I have never missed one". Second worst: staying silent until delivery day.\n\nStructure: the task and deadline → why it slipped (honestly, without blame) → when and how you communicated → what you did to reduce the impact → what you learned about estimation or planning.\n\nWhat it tests: early transparency, accountability and learning about estimation.\n\nAvoid: blaming the team or the requirements, hiding the slip, and a story with no lesson.' + ADAPT.en,
    },
    keyPoints: [
      { ar: 'الإبلاغ المبكر', en: 'Early communication', terms: ['early', 'مبكر', 'as soon as', 'بمجرد', 'immediately', 'فور', 'flagged', 'raised', 'أبلغت', 'told', 'warned'] },
      { ar: 'سبب صادق بلا لوم', en: 'An honest reason without blame', terms: ['underestimated', 'قللت', 'my estimate', 'تقديري', 'i assumed', 'افترضت', 'i did not', 'لم أ'] },
      { ar: 'تقليل الأثر', en: 'Reducing the impact', terms: ['partial', 'جزئي', 'delivered', 'سلمت', 'reduced scope', 'first part', 'mitigate', 'workaround', 'alternative'] },
      { ar: 'درس في التقدير', en: 'A lesson about estimation', terms: ['estimat', 'تقدير', 'buffer', 'هامش', 'break down', 'تقسيم', 'since then', 'now i', 'learned', 'تعلمت'] },
    ],
    alternatives: [
      {
        label: { ar: 'تقدير خاطئ مع إبلاغ مبكر', en: 'A bad estimate with early warning' },
        answer: {
          ar: 'قدّرت ترحيل نظام المصادقة إلى مزوّد جديد بأسبوعين، واتضح في اليوم الرابع أن مكتبة المزوّد لا تدعم أحد تدفقات تسجيل الدخول لدينا. كان بإمكاني محاولة الالتفاف بصمت، لكني أبلغت مديري في نفس اليوم بأن الموعد سيتأخر أسبوعًا على الأقل، مع ثلاثة خيارات: تأجيل الإطلاق، أو تأجيل هذا التدفق بالذات، أو الإبقاء على النظام القديم له مؤقتًا. اخترنا الخيار الثالث، فأطلقنا في الموعد لـ 90% من المستخدمين وأكملنا الباقي بعد عشرة أيام. الدرس الذي طبّقته منذ ذلك الحين: قبل أي تقدير لتكامل خارجي، أقضي يومًا في نموذج أولي يختبر الافتراضات الخطرة.',
          en: 'I estimated migrating our authentication to a new provider at two weeks, and on day four it turned out the provider\'s library did not support one of our login flows. I could have tried to quietly work around it, but I told my manager that same day that the deadline would slip by at least a week, with three options: delay the launch, defer that specific flow, or keep the old system for it temporarily. We chose the third, launched on time for 90% of users, and finished the rest ten days later. The lesson I\'ve applied since: before estimating any third-party integration, I spend a day on a prototype that tests the risky assumptions.',
        },
        why: { ar: 'الإبلاغ في اليوم نفسه مع خيارات لا مجرد مشكلة، وتقليل الأثر إلى 10%، وتغيير عملي في طريقة التقدير.', en: 'Same-day communication with options rather than just a problem, impact reduced to 10%, and a practical change in how estimates are made.' },
      },
      {
        label: { ar: 'تأخر بسبب نطاق زاحف — والدرس', en: 'A slip caused by scope creep — and the lesson' },
        answer: {
          ar: 'فاتني موعد تسليم لوحة تحكم إدارية بأسبوعين، والسبب الصادق: قبلت خلال التنفيذ أربعة طلبات "صغيرة" من فريق العمليات دون أن أعيد تقدير الموعد أو أخبر مديري. كل طلب بدا يومًا واحدًا، ومجموعها كان أسبوعين. عندما أدركت الفجوة، لم أخفها: أعددت قائمة بما أُضيف ووقته، وأخبرت مديري في اليوم نفسه، وسلّمت النسخة الأساسية في الموعد الأصلي مع تأجيل الإضافات الأربع إلى إصدار لاحق — وتبيّن أن اثنتين منها لم تكونا ضروريتين أصلًا. الدرس الذي أطبّقه منذ ذلك الحين بلا استثناء: أي طلب يُضاف بعد بدء العمل يمر عبر مدير المنتج مع تقدير مكتوب، ولا أقول "نعم" في المحادثة مباشرة مهما بدا صغيرًا.',
          en: 'I missed an admin dashboard deadline by two weeks, and the honest reason is that during the build I accepted four "small" requests from the operations team without re-estimating or telling my manager. Each looked like a day; together they were two weeks. When I saw the gap I didn\'t hide it: I listed what had been added and its cost, told my manager that same day, delivered the core version on the original date and deferred the four additions to a later release — two of which turned out not to be needed at all. The lesson I\'ve applied without exception since: any request added after work starts goes through the product manager with a written estimate, and I never say "yes" in the chat directly, however small it looks.',
        },
        why: { ar: 'تحمّل صريح للمسؤولية عن السبب الحقيقي، وحل يحمي الموعد الأصلي، ودرس محدد جدًا في سلوك يومي.', en: 'Explicit ownership of the real cause, a fix that protects the original date, and a very specific lesson about a daily behaviour.' },
      },
    ],
  },
  {
    id: 'soft-ownership',
    difficulty: intermediate,
    kind: 'behavioral',
    star: true,
    question: {
      ar: 'حدّثني عن موقف أخذت فيه زمام المبادرة أو تحمّلت مسؤولية شيء خارج مهامك.',
      en: 'Tell me about a time you took ownership of something outside your responsibilities.',
    },
    answer: {
      ar: 'يبحث المقابِل عن شخص يرى مشكلة ويتحرك، لا عن شخص ينتظر التكليف — مع مراعاة حدود دوره.\n\nأفضل الأمثلة: مشكلة كانت "ليست مسؤولية أحد" فتبنّيتها: توثيق ناقص، عملية بطيئة، خطأ متكرر يتجاهله الجميع.\n\nالبنية: المشكلة ولماذا لم يتحرك أحد ← لماذا قررت التحرك ← ماذا فعلت (وكيف نسّقت مع من يجب) ← النتيجة ← هل استمر الحل بعدك.\n\nما يختبره: المبادرة، والحكم في اختيار ما تتبناه، والقدرة على إنهاء ما تبدأه.\n\nتجنّب: مبادرة تجاوزت صلاحياتك بشكل مزعج، والادعاء بمسؤولية عن عمل جماعي.' + ADAPT.ar,
      en: 'The interviewer wants someone who sees a problem and moves, rather than waiting to be assigned — while respecting the boundaries of their role.\n\nThe best examples: a problem that was "nobody\'s responsibility" that you adopted — missing documentation, a slow process, a recurring bug everyone ignored.\n\nStructure: the problem and why nobody acted → why you decided to → what you did (and how you coordinated with the right people) → the result → whether the fix outlived you.\n\nWhat it tests: initiative, judgement in choosing what to take on, and finishing what you start.\n\nAvoid: initiative that overstepped your authority in an unwelcome way, and claiming ownership of team work.' + ADAPT.en,
    },
    keyPoints: [
      { ar: 'مشكلة لم يملكها أحد', en: 'A problem nobody owned', terms: ['nobody', 'لا أحد', 'no one', 'ignored', 'متجاهل', 'not my', 'ليست مسؤوليتي', 'outside my'] },
      { ar: 'مبادرة من تلقاء نفسك', en: 'Self-directed initiative', terms: ['i decided', 'قررت', 'i took', 'أخذت', 'volunteered', 'تطوعت', 'proposed', 'اقترحت', 'on my own'] },
      { ar: 'نتيجة مستدامة', en: 'A lasting result', terms: ['still', 'ما زال', 'adopted', 'اعتمد', 'became', 'أصبح', 'standard', 'team uses', 'يستخدم'] },
    ],
    alternatives: [
      {
        label: { ar: 'تبنّي مشكلة مهملة', en: 'Adopting a neglected problem' },
        answer: {
          ar: 'كان لدينا خط CI يفشل عشوائيًا بنسبة تقارب 20%، وكان الجميع يعيد التشغيل ويمضي. لم يكن ضمن مهامي، لكني حسبت أن الفريق يضيع نحو ثلاث ساعات أسبوعيًا على إعادة التشغيل وحدها. أخذت يومين لتتبع الأسباب: اختباران هشّان يعتمدان على التوقيت، ومهمة تعتمد على خدمة خارجية بلا timeout. أصلحت الثلاثة، ثم أضفت لوحة تتبع بسيطة لنسبة فشل الخط حتى نلاحظ أي تدهور جديد. انخفض الفشل العشوائي إلى أقل من 2%، واللوحة ما زالت مستخدمة بعد سنة.',
          en: 'We had a CI pipeline that failed randomly about 20% of the time, and everyone just re-ran it and moved on. It wasn\'t in my remit, but I worked out the team was losing about three hours a week on re-runs alone. I took two days to trace the causes: two flaky timing-dependent tests and a job hitting an external service with no timeout. I fixed all three, then added a simple dashboard tracking the pipeline\'s failure rate so we would notice any new regression. Random failures dropped below 2%, and the dashboard is still in use a year later.',
        },
        why: { ar: 'تبرير القرار بالأثر لا بالرغبة، وحل جذري لا مؤقت، وأداة تضمن الاستدامة بعدك.', en: 'The decision is justified by impact rather than preference, the fix is root-cause rather than a patch, and a tool ensures it lasts.' },
      },
      {
        label: { ar: 'مبادرة في التوثيق والانضمام', en: 'Owning documentation and onboarding' },
        answer: {
          ar: 'عندما انضممت للفريق، استغرقت أسبوعين لتشغيل المشروع محليًا لأن التوثيق كان قديمًا والمعرفة في رؤوس الناس. لم يطلب مني أحد شيئًا، لكنني دوّنت كل عقبة واجهتها أثناء الانضمام، وفي نهاية شهري الأول كتبت دليل إعداد محدثًا وسكربت واحدًا يجهّز البيئة كاملة. عرضته على قائد الفريق أولًا ليتأكد أنني لم أتجاوز شيئًا، ثم أضفناه للمستودع. المطوّر التالي شغّل المشروع في ساعتين. الأهم أن الفريق اعتمد قاعدة أن كل منضم جديد يحدّث الدليل بما واجهه — فصار التوثيق يصحّح نفسه.',
          en: 'When I joined the team, it took me two weeks to get the project running locally because the documentation was outdated and the knowledge lived in people\'s heads. Nobody asked me to do anything, but I noted every obstacle I hit during onboarding, and at the end of my first month I wrote an updated setup guide and a single script that provisions the whole environment. I showed it to the team lead first to make sure I hadn\'t overstepped, then we added it to the repo. The next developer was up and running in two hours. Most importantly, the team adopted a rule that every new joiner updates the guide with what they hit — so the documentation now corrects itself.',
        },
        why: { ar: 'مبادرة مناسبة لمطوّر جديد، وتنسيق مع قائد الفريق يحترم الحدود، ونتيجة قابلة للقياس وآلية تجعلها تدوم.', en: 'Initiative that fits a new developer, coordination with the lead that respects boundaries, a measurable result, and a mechanism that makes it last.' },
      },
    ],
  },
  {
    id: 'soft-leadership',
    difficulty: advanced,
    kind: 'behavioral',
    star: true,
    question: {
      ar: 'حدّثني عن موقف أظهرت فيه قيادة.',
      en: 'Tell me about a time you demonstrated leadership.',
    },
    answer: {
      ar: 'القيادة ليست المنصب. المقابِل يريد أن يرى تأثيرًا على الآخرين: توجيه، أو حسم، أو رفع مستوى فريق، أو اتخاذ قرار صعب وتحمّل نتيجته.\n\nإن لم تكن في منصب قيادي، فالقيادة بلا سلطة أقوى في السرد: قدت مبادرة، أو رفعت مستوى زميل، أو حسمت خلافًا.\n\nالبنية: الموقف الذي احتاج قيادة ← ما فعلته ليتبعك الآخرون (لا لتأمرهم) ← قرار صعب اتخذته ← النتيجة على الفريق لا عليك فقط.\n\nما يختبره: التأثير، والمساءلة، والاهتمام بنمو الآخرين.\n\nتجنّب: الخلط بين القيادة والإدارة الدقيقة، والقصة التي تنتهي بإنجازك أنت فقط.' + ADAPT.ar,
      en: 'Leadership is not the title. The interviewer wants to see influence on others: guiding, deciding, raising a team\'s level, or making a hard call and owning the outcome.\n\nIf you were not in a lead role, leadership without authority is actually a stronger story: you led an initiative, raised a colleague\'s level, or resolved a disagreement.\n\nStructure: the situation that needed leadership → what you did so that others followed (rather than being ordered) → a hard decision you made → the result for the team, not just for you.\n\nWhat it tests: influence, accountability and caring about others\' growth.\n\nAvoid: confusing leadership with micromanagement, and a story that ends with only your own achievement.' + ADAPT.en,
    },
    keyPoints: [
      { ar: 'تأثير على الآخرين', en: 'Influence on others', terms: ['team', 'فريق', 'others', 'الآخرين', 'colleagues', 'زملاء', 'guided', 'وجهت', 'convinced', 'أقنعت', 'mentored'] },
      { ar: 'قرار صعب', en: 'A hard decision', terms: ['decided', 'قررت', 'decision', 'قرار', 'chose', 'اخترت', 'called', 'pushed back', 'said no'] },
      { ar: 'نتيجة للفريق', en: 'A team-level outcome', terms: ['team', 'فريق', 'we', 'delivered', 'improved', 'تحسن', 'grew', 'نما', 'promoted'] },
    ],
    alternatives: [
      {
        label: { ar: 'قيادة بلا منصب', en: 'Leadership without a title' },
        answer: {
          ar: 'لم أكن قائد الفريق، لكن عندما غادر قائدنا فجأة في منتصف مشروع، كان الفريق مشوشًا لأسبوع. أخذت المبادرة: نظّمت اجتماعًا قصيرًا صباحيًا، ووزّعت المهام المتبقية بوضوح حسب نقاط قوة كل شخص، وتوليت التواصل مع مدير المنتج حتى يتفرغ الفريق للعمل. قرار صعب اتخذته كان تأجيل ميزة كان زميل متحمس لها لأنها كانت ستعرّض الموعد للخطر، وشرحت له السبب مباشرة. سلّمنا في الموعد، وعندما عُيّن قائد جديد سلّمته فريقًا منظمًا لا فوضى. بعد ستة أشهر رُقّيت رسميًا إلى قيادة الفريق.',
          en: 'I wasn\'t the team lead, but when ours left suddenly in the middle of a project, the team was adrift for a week. I took the initiative: I set up a short daily standup, distributed the remaining work clearly by each person\'s strengths, and took over communication with the product manager so the team could focus. A hard decision I made was deferring a feature a colleague was excited about because it put the deadline at risk — and I explained why to him directly. We delivered on time, and when a new lead was appointed I handed over an organised team rather than chaos. Six months later I was formally promoted to lead the team.',
        },
        why: { ar: 'قيادة بلا سلطة رسمية، وإجراءات محددة، وقرار صعب مع شفافية، ونتيجة للفريق تسبق النتيجة الشخصية.', en: 'Leadership without formal authority, specific actions, a hard call handled transparently, and a team outcome that comes before the personal one.' },
      },
      {
        label: { ar: 'قيادة عبر رفع مستوى الآخرين', en: 'Leadership by raising others' },
        answer: {
          ar: 'بالنسبة لي، القيادة هي أن يصبح الفريق أفضل بوجودك. عندما انضم ثلاثة مطوّرين مبتدئين دفعة واحدة، كان الخيار السهل أن أكتب الأجزاء الصعبة بنفسي وأترك لهم البسيط. اخترت العكس: أعطيت كل واحد ميزة حقيقية تفوق مستواه قليلًا، وجلست معه نصف ساعة يوميًا في الأسبوع الأول، ثم مراجعة كود مفصّلة بعدها، وقلّلت الدعم تدريجيًا. في الشهر الأول كانت سرعة الفريق أبطأ فعلًا، وتلقيت أسئلة عن ذلك من مديري وشرحت له الخطة. بعد ثلاثة أشهر كان الثلاثة يسلّمون ميزات كاملة باستقلالية، وصارت سرعة الفريق ضعف ما كانت عليه معي وحدي. أحدهم يقود اليوم فريقًا صغيرًا.',
          en: 'To me, leadership means the team gets better because you\'re there. When three junior developers joined at once, the easy option was to write the hard parts myself and leave them the simple ones. I chose the opposite: I gave each a real feature slightly above their level, sat with them half an hour daily in the first week, then did detailed code reviews, and reduced support gradually. In the first month the team\'s velocity was genuinely slower, and my manager asked about it — I explained the plan. After three months all three were shipping complete features independently, and the team\'s velocity was double what it had been with me alone. One of them now leads a small team of his own.',
        },
        why: { ar: 'تعريف واضح للقيادة، وقرار صعب بتكلفة قصيرة الأمد دُوفع عنه أمام المدير، ونتيجة تتجاوز الشخص إلى نمو الآخرين.', en: 'A clear definition of leadership, a hard decision with a short-term cost that was defended to the manager, and an outcome measured in others\' growth rather than personal achievement.' },
      },
    ],
  },
  {
    id: 'soft-changing-requirements',
    difficulty: intermediate,
    kind: 'behavioral',
    question: {
      ar: 'كيف تتعامل مع المتطلبات المتغيرة؟',
      en: 'How do you handle changing requirements?',
    },
    answer: {
      ar: 'المتطلبات تتغير دائمًا؛ الإجابة التي تعامل ذلك كمصيبة تظهر قلة خبرة. الإجابة الناضجة تفرّق بين تغيير مشروع (السوق تغير، تعلّمنا شيئًا) وتغيير فوضوي (لا أحد يقرر).\n\nما يبحث عنه المقابِل:\n1. لا تقاوم التغيير عاطفيًا، لكنك تجعل تكلفته مرئية.\n2. تبني الكود بحيث يتحمّل التغيير (فصل الاهتمامات، عدم الإفراط في التجريد المبكر).\n3. تسأل "لماذا" لتفهم الهدف الحقيقي وراء التغيير.\n4. تتفاوض على النطاق أو الموعد بدل ابتلاع الاثنين بصمت.\n\nأعطِ مثالًا قصيرًا يوضح ذلك عمليًا.\n\nتجنّب: "أقبل أي شيء" (بلا حدود) و"المتطلبات يجب أن تُجمّد" (غير واقعي).' + ADAPT.ar,
      en: 'Requirements always change; an answer that treats that as a disaster shows inexperience. A mature answer distinguishes legitimate change (the market moved, we learned something) from chaotic change (nobody is deciding).\n\nWhat the interviewer looks for:\n1. You do not resist change emotionally, but you make its cost visible.\n2. You build code that tolerates change (separation of concerns, no premature abstraction).\n3. You ask "why" to understand the real goal behind the change.\n4. You negotiate scope or timeline rather than silently absorbing both.\n\nGive a short example that shows this in practice.\n\nAvoid: "I accept anything" (no boundaries) and "requirements should be frozen" (unrealistic).' + ADAPT.en,
    },
    keyPoints: [
      { ar: 'فهم السبب وراء التغيير', en: 'Understanding the reason behind the change', terms: ['why', 'لماذا', 'goal', 'هدف', 'understand', 'فهم', 'reason', 'سبب', 'ask'] },
      { ar: 'جعل التكلفة مرئية', en: 'Making the cost visible', terms: ['cost', 'تكلفة', 'impact', 'أثر', 'trade-off', 'timeline', 'scope', 'نطاق', 'estimate', 'explain'] },
      { ar: 'التفاوض على النطاق أو الموعد', en: 'Negotiating scope or timeline', terms: ['negotiate', 'تفاوض', 'scope', 'نطاق', 'deadline', 'موعد', 'defer', 'prioritize', 'أولوي', 'options'] },
      { ar: 'كود يتحمّل التغيير', en: 'Code that tolerates change', terms: ['modular', 'separation', 'فصل', 'flexible', 'مرن', 'abstraction', 'design', 'تصميم'] },
    ],
    alternatives: [
      {
        label: { ar: 'إجابة بمبدأ ومثال', en: 'A principle with an example' },
        answer: {
          ar: 'أتعامل معها كجزء طبيعي من العمل لا كاستثناء. عمليًا أفعل ثلاثة أشياء: أسأل عن الهدف وراء التغيير لأنني كثيرًا ما أجد طريقة أرخص لتحقيقه؛ أوضح تكلفته على الموعد أو النطاق بالأرقام لا بالشكوى؛ وأترك القرار لصاحب المنتج بعد أن يرى الصورة كاملة. مثلًا، طُلب منا في منتصف السباق تغيير طريقة تسجيل الدخول كليًا. بدل الرفض، سألت لماذا، فاتضح أن الهدف تقليل التسرّب في أول خطوة. اقترحت تغييرًا أصغر بكثير — تسجيل دخول بالبريد أولًا وتأجيل الباقي — يحقق 80% من الهدف بيومين بدل أسبوعين. وافق مدير المنتج، وحققنا الهدف في الموعد.',
          en: 'I treat it as a normal part of the work rather than an exception. Practically I do three things: I ask about the goal behind the change, because I often find a cheaper way to achieve it; I make its cost on timeline or scope explicit with numbers rather than complaints; and I leave the decision to the product owner once they see the full picture. For example, mid-sprint we were asked to completely change the login flow. Instead of pushing back, I asked why — it turned out the goal was reducing drop-off at the first step. I proposed a much smaller change, email-first login with the rest deferred, that achieved 80% of the goal in two days instead of two weeks. The product manager agreed, and we hit the target on schedule.',
        },
        why: { ar: 'مبدأ واضح مدعوم بمثال يظهر التفكير في الهدف لا في الطلب الحرفي، ونتيجة أفضل للجميع.', en: 'A clear principle backed by an example that shows thinking about the goal rather than the literal request, with a better outcome for everyone.' },
      },
      {
        label: { ar: 'من زاوية الكود والمعمارية', en: 'From the code and architecture angle' },
        answer: {
          ar: 'أفترض من البداية أن المتطلبات ستتغير، وأبني الكود بناءً على ذلك. عمليًا: أفصل منطق العمل عن الواجهة حتى يكون تغيير الشاشة رخيصًا، وأتجنب التجريد المبكر لأن التجريد المبني على تخمين يصبح عائقًا عندما يأتي التغيير الحقيقي. وأسلّم على مراحل صغيرة قابلة للاستخدام حتى يرى صاحب المنتج شيئًا ملموسًا مبكرًا ويغيّر رأيه وهو رخيص لا وهو غالٍ. مثلًا، في نظام حجز طُلبت مني ثلاث طرق دفع، فبنيت الأولى مع واجهة واضحة لطريقة الدفع بدل بناء الثلاث معًا. عندما تغيّر القرار إلى طريقتين مختلفتين تمامًا، كانت التكلفة يومين لا أسبوعين. المتطلبات المتغيرة مشكلة معمارية بقدر ما هي مشكلة تواصل.',
          en: 'I assume from the start that requirements will change, and I build the code accordingly. Practically: I separate business logic from the UI so changing a screen is cheap, and I avoid premature abstraction because an abstraction built on a guess becomes an obstacle when the real change arrives. And I deliver in small usable increments so the product owner sees something concrete early and changes their mind while it\'s cheap rather than expensive. For example, in a booking system I was asked for three payment methods; I built the first behind a clear payment-method interface rather than all three at once. When the decision changed to two completely different methods, the cost was two days instead of two weeks. Changing requirements are as much an architecture problem as a communication one.',
        },
        why: { ar: 'تربط المهارة الشخصية بممارسة هندسية ملموسة، وتُظهر أن التسليم المبكر يقلل تكلفة التغيير، ومثال برقم.', en: 'Connects the soft skill to a concrete engineering practice, shows that early delivery reduces the cost of change, and gives an example with a number.' },
      },
    ],
  },
  {
    id: 'soft-prioritize',
    difficulty: beginner,
    kind: 'behavioral',
    question: {
      ar: 'كيف ترتّب أولويات مهامك؟',
      en: 'How do you prioritize your tasks?',
    },
    answer: {
      ar: 'المقابِل يريد نظامًا لا شعارًا. "أعمل على الأهم أولًا" لا تكفي — كيف تحدد الأهم؟\n\nالإجابة الجيدة تذكر معيارًا (الأثر على المستخدم، الاعتماديات، الموعد، المخاطر)، وأداة أو عادة (قائمة يومية، تقسيم المهام الكبيرة)، وكيف تتعامل مع المقاطعات.\n\nنقطة تميّز المطوّر الناضج: يعرف أن الأولوية قرار مشترك مع مدير المنتج، لا قرارًا فرديًا، ويتحقق من فهمه للأولويات بدل افتراضها.\n\nتجنّب: قائمة أدوات بلا منطق، والادعاء أنك تنجز كل شيء دائمًا.' + ADAPT.ar,
      en: 'The interviewer wants a system, not a slogan. "I work on the most important thing first" is not enough — how do you decide what is most important?\n\nA good answer names a criterion (user impact, dependencies, deadline, risk), a tool or habit (a daily list, breaking large tasks down), and how you handle interruptions.\n\nWhat distinguishes a mature developer: knowing that priority is a shared decision with the product owner rather than a solo one, and verifying their understanding of priorities rather than assuming it.\n\nAvoid: a list of tools with no reasoning, and claiming you always finish everything.' + ADAPT.en,
    },
    keyPoints: [
      { ar: 'معيار للأهمية', en: 'A criterion for importance', terms: ['impact', 'أثر', 'urgent', 'عاجل', 'important', 'مهم', 'value', 'قيمة', 'risk', 'مخاطر', 'blocking', 'dependenc', 'deadline'] },
      { ar: 'عادة أو أداة', en: 'A habit or tool', terms: ['list', 'قائمة', 'morning', 'صباح', 'daily', 'يومي', 'board', 'break down', 'تقسيم', 'plan', 'خطة'] },
      { ar: 'التنسيق مع صاحب المنتج', en: 'Aligning with the product owner', terms: ['product', 'منتج', 'manager', 'مدير', 'align', 'confirm', 'أتأكد', 'ask', 'أسأل', 'team'] },
    ],
    alternatives: [
      {
        label: { ar: 'نظام عملي بسيط', en: 'A simple practical system' },
        answer: {
          ar: 'أسأل سؤالين عن كل مهمة: هل يعطّل تأخيرها أحدًا آخر؟ وما أثرها على المستخدم؟ ما يعطّل الآخرين يأتي أولًا لأن تكلفته تتضاعف. ثم أبدأ يومي بتحديد أهم ثلاث مهام وأنجز الأصعب منها قبل الاجتماعات. عندما تصلني مقاطعة، أسأل هل هي عاجلة فعلًا أم تبدو كذلك فقط — ومعظمها يمكن تأجيله لساعتين. وإن تعارضت أولويتان بشكل حقيقي، لا أخمّن: أعرض التعارض على مدير المنتج وأدعه يقرر، لأن قرار الأولوية قراره.',
          en: 'I ask two questions about every task: does delaying it block someone else, and what is its impact on the user? Whatever blocks others comes first, because that cost compounds. Then I start each day by identifying my three most important tasks and doing the hardest before meetings begin. When an interruption arrives I ask whether it is genuinely urgent or just feels that way — most can wait two hours. And when two priorities genuinely conflict, I don\'t guess: I surface the conflict to the product manager and let them decide, because prioritisation is their call.',
        },
        why: { ar: 'معيار واضح، عادة يومية محددة، طريقة للتعامل مع المقاطعات، ووعي بحدود قرارك.', en: 'A clear criterion, a specific daily habit, a method for interruptions, and awareness of where your decision ends.' },
      },
      {
        label: { ar: 'مع مثال على تعارض حقيقي', en: 'With an example of a real conflict' },
        answer: {
          ar: 'أرتّب حسب الأثر والاستعجال معًا، لكن الأهم عندي ألا أخمّن الأولوية عندما تتعارض. مثلًا، في أسبوع واحد كان لديّ خطأ في الإنتاج يؤثر على 5% من المستخدمين، وميزة وعد بها فريق المبيعات عميلًا، وإعادة هيكلة كنت قد بدأتها. الخطأ أولًا بلا نقاش لأنه يؤثر على مستخدمين الآن. ثم بدل أن أقرر بين الميزة وإعادة الهيكلة بنفسي، عرضت على مدير المنتج ما يعنيه كل خيار: الميزة تأخذ الأسبوع كاملًا، وإعادة الهيكلة إن توقفت الآن تترك الكود في حالة وسطية. قرر تأجيل إعادة الهيكلة وأنا أنهيت جزءًا منها بشكل يترك الكود مستقرًا. النقطة: ترتيب الأولويات مهارة تواصل بقدر ما هي مهارة تنظيم.',
          en: 'I rank by impact and urgency together, but what matters most to me is not guessing when priorities conflict. For example, in one week I had a production bug affecting 5% of users, a feature sales had promised a client, and a refactor I\'d already started. The bug came first without debate, because it was affecting users right now. Then, rather than deciding between the feature and the refactor myself, I laid out for the product manager what each option meant: the feature would take the whole week, and stopping the refactor now would leave the code in a half-finished state. He chose to defer the refactor, and I wrapped up enough of it to leave the code stable. The point: prioritisation is as much a communication skill as an organisational one.',
        },
        why: { ar: 'مثال ملموس بثلاث مهام متعارضة، وقرار واضح فيما هو واضح، وتصعيد سليم فيما هو قرار صاحب المنتج.', en: 'A concrete example with three competing tasks, a clear call on what was obvious, and a proper escalation on what was the product owner\'s decision.' },
      },
    ],
  },
  {
    id: 'soft-unclear-requirement',
    difficulty: intermediate,
    kind: 'behavioral',
    question: {
      ar: 'كيف تتعامل مع متطلب غير واضح؟',
      en: 'How do you handle an unclear requirement?',
    },
    answer: {
      ar: 'أسوأ إجابة: "أفترض الأرجح وأبدأ". ثاني أسوأ: "أتوقف حتى يُوضَّح". المقابِل يريد المسار الوسط: تسعى للوضوح بنشاط، وتتقدم بأمان في الأثناء.\n\nالإجابة القوية تذكر:\n1. طرح أسئلة محددة لا عامة ("ماذا يحدث إذا كان الحقل فارغًا؟" أفضل من "هل يمكنك التوضيح؟").\n2. كتابة فهمك وإرساله للتأكيد — الكتابة تكشف الغموض.\n3. نموذج أولي أو رسم سريع لتحويل النقاش من مجرد إلى ملموس.\n4. العمل على الأجزاء الواضحة أثناء انتظار التوضيح.\n\nما يختبره: التواصل الاستباقي، والاستقلالية، وتجنّب إعادة العمل.' + ADAPT.ar,
      en: 'The worst answer: "I assume the most likely interpretation and start". Second worst: "I stop until it is clarified". The interviewer wants the middle path: you actively seek clarity while making safe progress in the meantime.\n\nA strong answer mentions:\n1. Specific rather than vague questions ("what happens if the field is empty?" beats "can you clarify?").\n2. Writing down your understanding and sending it for confirmation — writing exposes ambiguity.\n3. A quick prototype or sketch to turn an abstract discussion into a concrete one.\n4. Working on the clear parts while waiting for clarification.\n\nWhat it tests: proactive communication, independence and avoiding rework.' + ADAPT.en,
    },
    keyPoints: [
      { ar: 'أسئلة محددة', en: 'Specific questions', terms: ['ask', 'أسأل', 'question', 'سؤال', 'clarify', 'توضيح', 'edge case', 'what if', 'ماذا لو', 'specific'] },
      { ar: 'كتابة الفهم وتأكيده', en: 'Writing down and confirming understanding', terms: ['write', 'أكتب', 'document', 'وثق', 'confirm', 'أتأكد', 'summar', 'ملخص', 'my understanding', 'فهمي'] },
      { ar: 'نموذج أولي / مثال ملموس', en: 'A prototype or concrete example', terms: ['prototype', 'نموذج', 'mockup', 'sketch', 'رسم', 'example', 'مثال', 'demo', 'show'] },
      { ar: 'التقدم في الأجزاء الواضحة', en: 'Progress on the clear parts', terms: ['meanwhile', 'في الأثناء', 'clear parts', 'الواضح', 'start with', 'أبدأ', 'while waiting', 'not blocked'] },
    ],
    alternatives: [
      {
        label: { ar: 'عملية من أربع خطوات', en: 'A four-step process' },
        answer: {
          ar: 'أولًا أحدد ما الغامض تحديدًا وأطرح أسئلة محددة عن الحالات الحدية بدل سؤال عام. ثانيًا أكتب فهمي في فقرة أو قائمة وأرسلها لصاحب الطلب — نصف الغموض يظهر لحظة الكتابة. إذا بقي الأمر مجردًا، أرسم شاشة أو أبني نموذجًا بسيطًا خلال ساعة، لأن الناس يعطون ملاحظات أفضل على شيء يرونه. وفي كل ذلك أعمل على الأجزاء الواضحة من المهمة حتى لا أكون معطّلًا. مرة كان الطلب "أضف فلترة للتقارير" بلا تفاصيل؛ خلال ساعة عرضت نموذجًا بثلاثة فلاتر، فاتضح أن المطلوب فلتر واحد فقط بالتاريخ — ووفّرنا أسبوع عمل.',
          en: 'First I pin down exactly what is ambiguous and ask specific questions about edge cases rather than a general one. Second I write my understanding in a paragraph or a list and send it to the requester — half the ambiguity surfaces the moment you write it down. If it is still abstract, I sketch a screen or build a simple prototype within an hour, because people give much better feedback on something they can see. Throughout, I work on the clear parts of the task so I\'m never blocked. Once the request was "add filtering to reports" with no details; within an hour I showed a mockup with three filters, and it turned out only a date filter was needed — that saved a week of work.',
        },
        why: { ar: 'عملية واضحة قابلة للتكرار، ومثال يظهر أن الوضوح المبكر يوفّر عملًا حقيقيًا.', en: 'A clear, repeatable process, and an example showing that early clarity saves real work.' },
      },
      {
        label: { ar: 'عندما لا يتوفر صاحب الطلب', en: 'When the requester is unavailable' },
        answer: {
          ar: 'أحيانًا لا يمكن الحصول على التوضيح في الوقت المناسب — صاحب الطلب في إجازة أو في منطقة زمنية أخرى. في هذه الحالة لا أتوقف ولا أخمّن بصمت: أكتب افتراضاتي صراحةً في التذكرة ("أفترض أن الفلتر يطبَّق على التاريخ بالتوقيت المحلي، وأن القائمة الفارغة تُظهر رسالة لا صفحة فارغة")، وأبني بحيث يكون تغيير الافتراض رخيصًا، وأضع الأجزاء غير المؤكدة خلف علم أو في مكوّن معزول. عندما يعود، يراجع قائمة الافتراضات في دقيقتين بدل مراجعة الميزة كلها. مرة عاد مدير المنتج ووجد أن افتراضين من خمسة خاطئان، وصحّحناهما في ساعة لأنهما كانا معزولين. الغموض لا يعطّلني، لكنني لا أخفيه أبدًا.',
          en: 'Sometimes you can\'t get clarification in time — the requester is on leave or in another time zone. In that case I neither stop nor guess silently: I write my assumptions explicitly in the ticket ("I\'m assuming the filter applies to the date in local time, and that an empty list shows a message rather than a blank page"), build so that changing an assumption is cheap, and put the uncertain parts behind a flag or in an isolated component. When they return, they review the assumption list in two minutes instead of reviewing the whole feature. Once a product manager came back to find two of five assumptions wrong, and we corrected them in an hour because they were isolated. Ambiguity doesn\'t block me, but I never hide it.',
        },
        why: { ar: 'تعالج الحالة الواقعية التي لا يمكن فيها السؤال، وتُظهر استقلالية مسؤولة: افتراضات مكتوبة ومعزولة وقابلة للمراجعة.', en: 'Handles the realistic case where asking isn\'t possible, and shows responsible independence: assumptions written down, isolated and easy to review.' },
      },
    ],
  },
  {
    id: 'soft-difficult-stakeholder',
    difficulty: advanced,
    kind: 'behavioral',
    star: true,
    question: {
      ar: 'كيف تتعامل مع صاحب مصلحة صعب المراس؟',
      en: 'How do you deal with a difficult stakeholder?',
    },
    answer: {
      ar: '"صعب" عادة يعني: يطلب المستحيل، أو يغيّر رأيه، أو لا يثق بالفريق، أو يتجاوز العمليات. المقابِل يريد أن يرى نضجًا: هل تفهم دوافعه أم تصنّفه كعدو؟\n\nالمبادئ التي تظهر النضج:\n1. افترض أن لديه ضغطًا لا تراه — كثير من "الصعوبة" قلق غير معبَّر عنه.\n2. حوّل النقاش من الآراء إلى البيانات والخيارات: "يمكننا A بأسبوعين أو B بأسبوع، أيهما؟".\n3. تواصل مبكر ومتكرر — معظم أصحاب المصلحة الصعبين يهدؤون عندما لا يتفاجؤون.\n4. احترام حدودك: تقول "لا" بوضوح مع بديل.\n\nأعطِ مثالًا يُظهر تحوّل العلاقة، لا مجرد النجاة منها.\n\nتجنّب: الذم، والاستسلام الكامل، والتصعيد إلى المدير كأول خطوة.' + ADAPT.ar,
      en: '"Difficult" usually means: demands the impossible, changes their mind, distrusts the team, or bypasses process. The interviewer wants to see maturity: do you understand their motives or cast them as an enemy?\n\nThe principles that show maturity:\n1. Assume they are under pressure you cannot see — much "difficulty" is unexpressed anxiety.\n2. Move the conversation from opinions to data and options: "we can do A in two weeks or B in one — which?".\n3. Communicate early and often — most difficult stakeholders calm down when they are never surprised.\n4. Hold your boundaries: say "no" clearly, with an alternative.\n\nGive an example that shows the relationship transformed, not merely survived.\n\nAvoid: badmouthing, complete capitulation, and escalating to a manager as the first step.' + ADAPT.en,
    },
    keyPoints: [
      { ar: 'فهم دوافعه', en: 'Understanding their motives', terms: ['understand', 'فهم', 'pressure', 'ضغط', 'worried', 'قلق', 'their goal', 'هدفه', 'perspective', 'why they'] },
      { ar: 'خيارات وبيانات بدل جدل', en: 'Options and data instead of argument', terms: ['options', 'خيارات', 'data', 'بيانات', 'trade-off', 'showed', 'عرضت', 'numbers', 'أرقام', 'either'] },
      { ar: 'تواصل مبكر ومنتظم', en: 'Early, regular communication', terms: ['regular', 'منتظم', 'weekly', 'أسبوعي', 'update', 'تحديث', 'early', 'مبكر', 'no surprises', 'proactive'] },
      { ar: 'تحوّل العلاقة', en: 'The relationship changed', terms: ['trust', 'ثقة', 'relationship', 'علاقة', 'became', 'أصبح', 'ally', 'حليف', 'improved', 'تحسن'] },
    ],
    alternatives: [
      {
        label: { ar: 'تحويل الخصم إلى حليف', en: 'Turning an adversary into an ally' },
        answer: {
          ar: 'كان مدير المبيعات لدينا يعِد العملاء بميزات لم تُخطط، ثم يضغط علينا بمواعيد مستحيلة، وكان الفريق يراه خصمًا. قررت أن أفهم موقفه فطلبت اجتماعًا معه وحده، واكتشفت أنه لا يعرف ما في خارطة الطريق أصلًا لأن لا أحد يشاركها معه. اتفقنا على أمرين: أرسل له ملخصًا أسبوعيًا بما يُنجَز وما يُخطط، وقبل أي وعد لعميل يسألني بسرعة "كم تكلفة هذا؟" وأرد خلال ساعة بتقدير مبدئي. خلال شهرين توقفت الوعود المستحيلة، وصار هو أول من يدافع عن الفريق أمام الإدارة عندما نطلب وقتًا لإعادة الهيكلة. المشكلة لم تكن شخصيته، بل غياب المعلومات.',
          en: 'Our sales director kept promising clients unplanned features and then pressuring us with impossible deadlines; the team saw him as an adversary. I decided to understand his side and asked for a one-on-one, and discovered he had no idea what was on the roadmap because nobody shared it with him. We agreed on two things: I would send him a weekly summary of what was done and planned, and before promising anything to a client he would ping me "what does this cost?" and get a rough estimate within an hour. Within two months the impossible promises stopped, and he became the first to defend the team to leadership when we asked for refactoring time. The problem was never his personality — it was missing information.',
        },
        why: { ar: 'تبدأ بالفهم لا بالحكم، وحل بسيط يعالج السبب الجذري، وتنتهي بتحوّل في العلاقة لا مجرد هدنة.', en: 'Starts with understanding rather than judgement, a simple fix addressing the root cause, and ends with a transformed relationship rather than a truce.' },
      },
      {
        label: { ar: 'صاحب مصلحة لا يثق بالتقديرات', en: 'A stakeholder who distrusts estimates' },
        answer: {
          ar: 'كان لدينا مدير قسم يعتبر كل تقدير من الفريق مبالغًا فيه، ويقلّصه للنصف في الاجتماعات، فينتهي الأمر بمواعيد فائتة تؤكد له أننا "لا نلتزم". بدل الجدل حول الأرقام، اقترحت عليه اتفاقًا: لثلاثة أشهر نسجّل كل تقدير والوقت الفعلي في جدول مشترك يراه متى شاء. النتيجة كانت أن تقديراتنا كانت أقل من الفعلي بـ 10% في المتوسط، لا مبالغًا فيها. الأرقام غيّرت موقفه أكثر من أي حجة، وصار يسأل "ما الذي يجعل هذا التقدير غير مؤكد؟" بدل تقليصه. ومن جانبي، تعلمت أن أرفق بكل تقدير نطاق عدم اليقين والافتراضات، وهذا أعطاه ما كان يحتاجه فعلًا: الشعور بأنه يفهم ما يجري.',
          en: 'We had a department head who treated every estimate from the team as inflated and halved it in meetings, which led to missed deadlines that confirmed to him that we "don\'t deliver". Instead of arguing about numbers, I proposed a deal: for three months we would log every estimate and the actual time in a shared sheet he could look at whenever he wanted. The result was that our estimates were on average 10% under the actuals, not inflated. The numbers changed his position more than any argument could, and he started asking "what makes this estimate uncertain?" instead of cutting it. On my side, I learned to attach an uncertainty range and the assumptions to every estimate, which gave him what he actually needed: the sense that he understood what was going on.',
        },
        why: { ar: 'تحوّل الصراع من رأي ضد رأي إلى بيانات مشتركة، وتعترف بما تعلمته أنت أيضًا، وتحدد الاحتياج الحقيقي وراء السلوك الصعب.', en: 'Moves the conflict from opinion versus opinion to shared data, admits what you learned too, and identifies the real need behind the difficult behaviour.' },
      },
    ],
  },
  {
    id: 'soft-why-hire-you',
    difficulty: intermediate,
    kind: 'behavioral',
    question: {
      ar: 'لماذا يجب أن نوظّفك؟',
      en: 'Why should we hire you?',

    },
    answer: {
      ar: 'هذا سؤال مبيعات مباشر: الجواب هو تطابق بين ما يحتاجونه وما تقدّمه. لا يمكن الإجابة عنه جيدًا دون فهم الدور.\n\nالبنية: 2-3 احتياجات واضحة من وصف الوظيفة ← لكل منها دليل من خبرتك ← إضافة واحدة لا يتوقعونها.\n\nالنبرة: ثقة بلا غرور. لا تقارن نفسك بالمرشحين الآخرين لأنك لا تعرفهم — قارن نفسك بالاحتياج.\n\nما يختبره: فهمك للدور، والثقة، والقدرة على التركيز على ما يهم الطرف الآخر.\n\nتجنّب: "لأنني أحتاج الوظيفة"، وقائمة صفات عامة، والتواضع الزائد.' + ADAPT.ar,
      en: 'This is a direct sales question: the answer is the match between what they need and what you offer. It cannot be answered well without understanding the role.\n\nStructure: two or three clear needs from the job description → evidence from your experience for each → one addition they would not expect.\n\nTone: confidence without arrogance. Do not compare yourself to other candidates, since you do not know them — compare yourself to the need.\n\nWhat it tests: your understanding of the role, confidence, and the ability to focus on what matters to the other side.\n\nAvoid: "because I need the job", a list of generic adjectives, and excessive modesty.' + ADAPT.en,
    },
    keyPoints: [
      { ar: 'احتياجات الدور المحددة', en: 'The role\'s specific needs', terms: ['you need', 'تحتاجون', 'the role', 'الدور', 'job description', 'looking for', 'تبحثون', 'requires'] },
      { ar: 'دليل لكل احتياج', en: 'Evidence for each need', terms: ['i have', 'لدي', 'i built', 'بنيت', 'experience', 'خبرة', 'did', 'delivered', 'years', 'سنوات', 'led'] },
      { ar: 'ما تضيفه فوق المتوقع', en: 'What you add beyond the expected', terms: ['also', 'أيضا', 'in addition', 'بالإضافة', 'beyond', 'plus', 'bonus', 'extra', 'additionally'] },
    ],
    alternatives: [
      {
        label: { ar: 'تطابق مباشر مع الدور', en: 'A direct match to the role' },
        answer: {
          ar: 'وصف الوظيفة يركّز على ثلاثة أشياء: أداء React، والعمل مع فرق التصميم، وقيادة المبتدئين. في الأداء: خفّضت زمن التفاعل في لوحة تحكم كبيرة بنسبة 60% وكتبت دليل الأداء الداخلي لفريقي. في التصميم: عملت لثلاث سنوات مع مصممين مباشرة وبنيت نظام تصميم يستخدمونه بأنفسهم. في القيادة: أشرفت على ثلاثة مطوّرين مبتدئين رُقّي اثنان منهم. وما قد لا تتوقعونه: لدي خبرة في Node.js تكفي لأفهم الطرف الآخر من الـ API وأقلل الاحتكاك بين الفريقين.',
          en: 'The job description centres on three things: React performance, working with design teams, and mentoring juniors. On performance: I cut interaction latency on a large dashboard by 60% and wrote my team\'s internal performance guide. On design: I\'ve worked directly with designers for three years and built a design system they use themselves. On mentoring: I supervised three junior developers, two of whom were promoted. And what you might not expect: I have enough Node.js experience to understand the other side of the API and reduce friction between the two teams.',
        },
        why: { ar: 'تبدأ من احتياجاتهم لا من صفاتك، وكل ادعاء له دليل، والإضافة الأخيرة تميّزك بشيء محدد.', en: 'Starts from their needs rather than your traits, every claim has evidence, and the closing addition differentiates you with something specific.' },
      },
      {
        label: { ar: 'لمرشح تنقصه بعض المتطلبات', en: 'For a candidate missing some requirements' },
        answer: {
          ar: 'سأكون صريحًا: وصف الوظيفة يذكر Vue، وخبرتي الأساسية في React. لكن ما تحتاجونه فعلًا — وهذا ما فهمته من حديثنا — هو شخص يبني واجهات معقدة قابلة للصيانة ويرفع مستوى فريق صغير، وهذا ما فعلته لأربع سنوات. المفاهيم الأساسية واحدة: التفاعلية، إدارة الحالة، فصل المكوّنات، الأداء. تعلمت Next.js في شهر عندما احتاج مشروعي ذلك، وسأفعل الشيء نفسه مع Vue، وأنا مستعد لإثبات ذلك بمهمة تجريبية. ما أقدّمه وربما لا يقدّمه مرشح يعرف Vue فقط: خبرة في تحسين الأداء قابلة للنقل لأي إطار، وسجل في إرشاد المبتدئين.',
          en: 'I\'ll be upfront: the job description mentions Vue, and my core experience is React. But what you actually need — and this is what I took from our conversation — is someone who builds complex, maintainable interfaces and raises a small team\'s level, and that\'s what I\'ve done for four years. The fundamentals are the same: reactivity, state management, component separation, performance. I learned Next.js in a month when my project needed it, and I\'ll do the same with Vue — I\'m happy to prove that with a take-home task. What I bring that a Vue-only candidate might not: performance optimisation experience that transfers to any framework, and a track record of mentoring juniors.',
        },
        why: { ar: 'تواجه الفجوة بدل تجاهلها، وتعيد تعريف الاحتياج الحقيقي، وتقدّم دليلًا على سرعة التعلم وعرضًا عمليًا للإثبات.', en: 'Addresses the gap head-on rather than ignoring it, reframes the real need, and offers evidence of fast learning plus a practical way to prove it.' },
        avoid: { ar: 'لا تقلّل من أهمية المتطلب الناقص ("Vue سهل") — اعترف به واعرض كيف ستغلقه.', en: 'Do not dismiss the missing requirement ("Vue is easy") — acknowledge it and show how you\'ll close it.' },
      },
    ],
  },
  {
    id: 'soft-five-years',
    difficulty: beginner,
    kind: 'behavioral',
    question: {
      ar: 'أين ترى نفسك بعد بضع سنوات؟',
      en: 'Where do you see yourself in the next few years?',
    },
    answer: {
      ar: 'المقابِل لا يريد نبوءة، بل يريد أن يعرف: هل لديك اتجاه؟ وهل هذا الدور جزء منه؟ وهل ستبقى وقتًا معقولًا؟\n\nالإجابة الجيدة: اتجاه واضح (عمق تقني، أو قيادة، أو مجال معيّن) بلا تفاصيل جامدة، ومرتبط بما يمكن أن يقدّمه هذا الدور.\n\nصادق لكن لبق: إن كنت تريد القيادة فقلها، لكن أظهر أنك تريد إتقان الدور الحالي أولًا. إن كنت تفضّل البقاء تقنيًا فذلك مقبول تمامًا اليوم.\n\nتجنّب: "في منصبك" (مبتذلة)، وأهدافًا لا علاقة لها بالشركة (شركتي الخاصة)، والإجابة بـ "لا أعرف".' + ADAPT.ar,
      en: 'The interviewer does not want a prophecy. They want to know: do you have a direction, is this role part of it, and will you stay a reasonable time?\n\nA good answer: a clear direction (technical depth, leadership, or a particular domain) without rigid details, connected to what this role can offer.\n\nHonest but tactful: if you want leadership, say so, but show you want to master the current role first. If you prefer to stay technical, that is entirely acceptable today.\n\nAvoid: "in your seat" (clichéd), goals unrelated to the company (my own startup), and "I don\'t know".' + ADAPT.en,
    },
    keyPoints: [
      { ar: 'اتجاه واضح', en: 'A clear direction', terms: ['want to', 'أريد', 'goal', 'هدف', 'grow into', 'become', 'أصبح', 'direction', 'اتجاه', 'senior', 'lead', 'expert', 'deep'] },
      { ar: 'ربط بالدور الحالي', en: 'Connection to this role', terms: ['this role', 'هذا الدور', 'here', 'هنا', 'your', 'first', 'أولا', 'master', 'أتقن', 'step'] },
      { ar: 'مرونة واقعية', en: 'Realistic flexibility', terms: ['depends', 'يعتمد', 'open', 'منفتح', 'flexible', 'مرن', 'may change', 'قد يتغير', 'whichever'] },
    ],
    alternatives: [
      {
        label: { ar: 'مسار تقني عميق', en: 'A deep technical track' },
        answer: {
          ar: 'أريد أن أصبح المرجع في فريقي لكل ما يتعلق بمعمارية الواجهة الأمامية والأداء — الشخص الذي يُستشار في القرارات الصعبة. هذا الدور خطوة مباشرة نحو ذلك لأنه يتعامل مع مشكلات توسّع حقيقية. لا أسعى حاليًا للإدارة؛ أفضّل التأثير عبر العمق التقني والإرشاد. وأنا منفتح على أن تتغير الصورة مع ما أتعلمه هنا.',
          en: 'I want to become my team\'s go-to person for frontend architecture and performance — the one consulted on the hard decisions. This role is a direct step toward that because it deals with real scaling problems. I\'m not currently pursuing management; I prefer to have impact through technical depth and mentoring. And I\'m open to that picture changing with what I learn here.',
        },
        why: { ar: 'اتجاه محدد، مربوط بالدور، صادق عن عدم رغبته في الإدارة، ومرن دون أن يكون ضبابيًا.', en: 'A specific direction, tied to the role, honest about not wanting management, and flexible without being vague.' },
      },
      {
        label: { ar: 'نحو القيادة', en: 'Toward leadership' },
        answer: {
          ar: 'على المدى القريب أريد إتقان هذا الدور والمنتج بعمق — لا أظن أن أحدًا يجب أن يقود شيئًا لا يفهمه جيدًا. بعد ذلك أرغب في تحمّل مسؤولية أكبر: إرشاد مطوّرين، ثم قيادة فريق صغير إن أثبتُّ نفسي. ما يجذبني في شركتكم أن لديكم مسارًا واضحًا لذلك، وقد رأيت مطوّرين نموا فيه.',
          en: 'In the near term I want to master this role and the product deeply — I don\'t think anyone should lead something they don\'t understand well. After that I\'d like to take on more responsibility: mentoring developers, then leading a small team if I\'ve proven myself. What attracts me about your company is that you have a clear path for that, and I\'ve seen developers grow along it.',
        },
        why: { ar: 'طموح واضح دون تجاوز المرحلة الحالية، ومشروط بالإثبات، ومربوط بما تعرفه عن الشركة.', en: 'Clear ambition without skipping the current stage, conditioned on proving yourself, and tied to what you know about the company.' },
      },
    ],
  },
  {
    id: 'soft-salary',
    difficulty: intermediate,
    kind: 'behavioral',
    question: {
      ar: 'ما توقعاتك للراتب؟',
      en: 'What are your salary expectations?',
    },
    answer: {
      ar: 'هذا تفاوض لا سؤال معرفة. الهدف: ألا تسعّر نفسك بأقل من قيمتك، ولا تخرج من السباق مبكرًا.\n\nالتحضير هو كل شيء: اعرف نطاق السوق لدورك ومدينتك وخبرتك قبل المقابلة.\n\nالاستراتيجيات المقبولة:\n1. اطلب نطاقهم أولًا بلطف — كثير من الشركات لديها نطاق محدد.\n2. أعطِ نطاقًا لا رقمًا، وحده الأدنى هو ما تقبله فعلًا.\n3. اربط الرقم بالسوق وبقيمتك لا باحتياجك.\n4. أجّل إن كان مبكرًا: "أفضّل فهم الدور كاملًا أولًا، لكن نطاقي التقريبي هو...".\n\nما يختبره: الثقة، والتحضير، والاحترافية في التفاوض.\n\nتجنّب: رقمًا واحدًا منخفضًا، وتبرير الرقم بمصاريفك الشخصية، والرفض التام للإجابة.' + ADAPT.ar,
      en: 'This is a negotiation, not a knowledge question. The goal: do not price yourself below your value, and do not take yourself out of the running early.\n\nPreparation is everything: know the market range for your role, city and experience before the interview.\n\nAcceptable strategies:\n1. Politely ask for their range first — many companies have a defined band.\n2. Give a range rather than a number, with a floor you would actually accept.\n3. Anchor the number to the market and your value, not to your needs.\n4. Defer if it is early: "I\'d prefer to understand the role fully first, but my rough range is...".\n\nWhat it tests: confidence, preparation and professionalism in negotiation.\n\nAvoid: a single low number, justifying it with personal expenses, and refusing to answer at all.' + ADAPT.en,
    },
    keyPoints: [
      { ar: 'نطاق مبني على السوق', en: 'A market-based range', terms: ['range', 'نطاق', 'market', 'سوق', 'between', 'بين', 'research', 'بحثت', 'typical', 'industry'] },
      { ar: 'مرتبط بالقيمة والدور', en: 'Tied to value and the role', terms: ['experience', 'خبرة', 'value', 'قيمة', 'role', 'دور', 'responsibilit', 'مسؤولي', 'skills', 'level'] },
      { ar: 'انفتاح على التفاوض', en: 'Openness to negotiate', terms: ['flexible', 'مرن', 'open', 'منفتح', 'discuss', 'نناقش', 'total', 'package', 'benefits', 'depends', 'your range'] },
    ],
    alternatives: [
      {
        label: { ar: 'نطاق مع سؤال مضاد', en: 'A range with a counter-question' },
        answer: {
          ar: 'بناءً على بحثي في السوق لدور بهذا المستوى في هذه المدينة، وعلى خبرتي في المجالات التي يركّز عليها الدور، أتوقع نطاقًا بين X وY. لكنني منفتح على مناقشة الحزمة كاملة بما فيها التطوير والمزايا. هل يمكنكم مشاركة النطاق المحدد لهذا الدور حتى نتأكد من التوافق؟',
          en: 'Based on my research into the market for this level in this city, and on my experience in the areas the role focuses on, I\'d expect a range between X and Y. But I\'m open to discussing the full package, including growth and benefits. Could you share the band you have for this role so we can make sure we\'re aligned?',
        },
        why: { ar: 'نطاق مبرَّر بالسوق والخبرة، بلا اعتذار، مع فتح باب التفاوض وطلب معلومات في المقابل.', en: 'A range justified by market and experience, without apology, while opening negotiation and requesting information in return.' },
      },
      {
        label: { ar: 'تأجيل مهذّب', en: 'A polite deferral' },
        answer: {
          ar: 'أفضّل أن أفهم نطاق الدور ومسؤولياته بشكل كامل قبل تحديد رقم، حتى يكون تقديري عادلًا للطرفين. إن كان من المفيد الآن، فنطاقي التقريبي هو X إلى Y، وأنا واثق أننا سنصل إلى اتفاق إن كان التوافق الفني موجودًا.',
          en: 'I\'d prefer to fully understand the role\'s scope and responsibilities before committing to a number, so my estimate is fair to both sides. If it helps now, my rough range is X to Y, and I\'m confident we can reach an agreement if the technical fit is there.',
        },
        why: { ar: 'يؤجّل دون رفض، ويعطي نطاقًا يحفظ موقعك، ويبقي التركيز على التوافق لا على الرقم.', en: 'Defers without refusing, gives a range that preserves your position, and keeps the focus on fit rather than the number.' },
      },
    ],
  },
  {
    id: 'soft-over-other-candidates',
    difficulty: intermediate,
    kind: 'behavioral',
    question: {
      ar: 'لماذا نختارك بدلًا من مرشح آخر؟',
      en: 'Why should we choose you over another candidate?',
    },
    answer: {
      ar: 'الفخ: محاولة التقليل من الآخرين أو التخمين بشأنهم. أنت لا تعرفهم. الإجابة الذكية تعيد صياغة السؤال: "لا أعرف المرشحين الآخرين، لكن هذا ما أعرفه عن نفسي وعن الدور".\n\nثم: تركيبة نادرة من مهارتين أو ثلاث تخدم الدور معًا (خبرة تقنية + مجال العمل + مهارة تواصل)، ودليل، وشيء عن اتجاهك أو حماسك يصعب تقليده.\n\nما يختبره: الثقة تحت الضغط، والاحترافية، ووضوح ما يميّزك.\n\nتجنّب: "أنا أفضل لأن..." بمقارنة مع أشخاص لا تعرفهم، والتواضع المفرط ("لا أعرف، ربما الآخرون أفضل").' + ADAPT.ar,
      en: 'The trap: trying to diminish the others or speculate about them. You do not know them. The smart answer reframes: "I don\'t know the other candidates, but here is what I know about myself and the role".\n\nThen: a rare combination of two or three skills that serve the role together (technical experience + domain + communication), evidence, and something about your direction or drive that is hard to replicate.\n\nWhat it tests: confidence under pressure, professionalism, and clarity about what sets you apart.\n\nAvoid: "I\'m better because..." comparing against people you do not know, and excessive modesty ("I don\'t know, maybe the others are better").' + ADAPT.en,
    },
    keyPoints: [
      { ar: 'إعادة الصياغة دون تقليل من الآخرين', en: 'Reframing without diminishing others', terms: ['other candidates', 'المرشحين', 'don\'t know', 'لا أعرف', 'can\'t speak', 'what i can', 'ما أعرفه', 'myself'] },
      { ar: 'تركيبة مميزة من المهارات', en: 'A distinctive combination of skills', terms: ['combination', 'تركيبة', 'both', 'كلا', 'and also', 'rare', 'نادر', 'unique', 'plus', 'along with'] },
      { ar: 'دليل ملموس', en: 'Concrete evidence', terms: ['built', 'بنيت', 'delivered', 'سلمت', 'example', 'مثال', 'years', 'سنوات', 'led', 'improved', '%'] },
    ],
    alternatives: [
      {
        label: { ar: 'إعادة صياغة واثقة', en: 'A confident reframe' },
        answer: {
          ar: 'لا أستطيع الحديث عن المرشحين الآخرين، لكن يمكنني الحديث عمّا أقدّمه: تركيبة من خبرة عميقة في React وNext.js، وثلاث سنوات في مجال التجارة الإلكترونية تحديدًا — وهو مجالكم — وسجل في تحويل المشكلات الغامضة إلى حلول مقاسة. المطوّر الجيد في React كثير؛ الذي يعرف أيضًا كيف تؤثر ثانية واحدة من زمن التحميل على معدل التحويل ويحسّنها فعليًا أقل. وأنا متحمس لهذا المنتج تحديدًا، وهذا يظهر في العمل.',
          en: 'I can\'t speak to the other candidates, but I can speak to what I bring: a combination of deep React and Next.js experience, three years specifically in e-commerce — your domain — and a track record of turning vague problems into measured solutions. Good React developers are plentiful; ones who also know how a second of load time affects conversion, and have actually improved it, are fewer. And I\'m genuinely excited about this particular product, which shows in the work.',
        },
        why: { ar: 'تتجنب الفخ بأدب، وتحدد تركيبة نادرة فعلًا، وتنتهي بشيء غير قابل للتقليد: الحماس الحقيقي.', en: 'Sidesteps the trap gracefully, identifies a genuinely rare combination, and ends with something hard to replicate: genuine enthusiasm.' },
      },
      {
        label: { ar: 'إجابة قصيرة تركّز على طريقة العمل', en: 'A short answer focused on how you work' },
        answer: {
          ar: 'لا أعرف من تقابلون غيري، لذا سأتحدث عمّا يمكنني الالتزام به. أولًا، ما أسلّمه يعمل: في آخر عامين لم يعد إليّ من فريق الاختبار سوى خطأين حرجين، لأنني أختبر الحالات الحدية قبل طلب الدمج. ثانيًا، لا أختفي: إذا تأخرت أو علقت تعرفون ذلك في اليوم نفسه، لا في يوم التسليم. ثالثًا، أرفع مستوى من حولي — آخر مطوّرين مبتدئين أرشدتهما رُقّيا خلال عام. إن كانت هذه الأشياء الثلاثة مهمة لكم، فأعتقد أن التوافق قوي.',
          en: 'I don\'t know who else you\'re interviewing, so I\'ll talk about what I can commit to. First, what I ship works: in the last two years only two critical bugs have come back to me from QA, because I test the edge cases before opening a pull request. Second, I don\'t disappear: if I\'m late or stuck you know the same day, not on delivery day. Third, I raise the level of the people around me — the last two juniors I mentored were promoted within a year. If those three things matter to you, I think the fit is strong.',
        },
        why: { ar: 'تركّز على سلوكيات يمكن التحقق منها لا على صفات، وكل واحدة بدليل رقمي، والخاتمة تترك القرار للمقابِل بثقة.', en: 'Focuses on verifiable behaviours rather than traits, each with a numeric proof, and the close leaves the decision to the interviewer with confidence.' },
      },
    ],
  },
  {
    id: 'soft-failure-project',
    difficulty: advanced,
    kind: 'behavioral',
    star: true,
    question: {
      ar: 'حدّثني عن مشروع فشل. ماذا تعلمت؟',
      en: 'Tell me about a project that failed. What did you learn?',
    },
    answer: {
      ar: 'أصعب من سؤال "الخطأ" لأنه عن فشل أكبر، غالبًا جماعي. المقابِل يريد أن يرى: هل تستطيع تحليل الفشل بموضوعية؟ وما دورك فيه بصدق؟ وهل تحوّل الفشل إلى تعلّم حقيقي؟\n\nالبنية: المشروع وهدفه ← كيف ومتى ظهر الفشل ← الأسباب الحقيقية (لا كبش فداء) ← دورك أنت في تلك الأسباب ← ما فعلته بعد ذلك بشكل مختلف.\n\nأقوى الإجابات تعترف بأن الإشارات كانت موجودة مبكرًا ولم تُقرأ.\n\nتجنّب: فشلًا لم يكن لك دور فيه، والتحليل الذي يحمّل الآخرين كل شيء، والدرس العام ("يجب التخطيط أفضل").' + ADAPT.ar,
      en: 'Harder than the "mistake" question because it concerns a larger, usually collective failure. The interviewer wants to see: can you analyse failure objectively, what was honestly your part in it, and did you turn it into real learning?\n\nStructure: the project and its goal → how and when the failure became apparent → the real causes (no scapegoat) → your own part in those causes → what you did differently afterwards.\n\nThe strongest answers admit the signals were there early and were not read.\n\nAvoid: a failure you played no part in, an analysis that pins everything on others, and a generic lesson ("we should plan better").' + ADAPT.en,
    },
    keyPoints: [
      { ar: 'أسباب حقيقية لا كبش فداء', en: 'Real causes, no scapegoat', terms: ['because', 'لأن', 'cause', 'سبب', 'root', 'جذر', 'we assumed', 'افترضنا', 'ignored', 'تجاهلنا', 'signals', 'إشارات'] },
      { ar: 'دورك أنت في الفشل', en: 'Your own part in it', terms: ['my part', 'دوري', 'i should have', 'كان علي', 'i didn\'t', 'لم أ', 'i failed', 'my responsibility', 'i contributed'] },
      { ar: 'درس محدد وقابل للتطبيق', en: 'A specific, applicable lesson', terms: ['since then', 'منذ ذلك', 'now i', 'الآن', 'learned', 'تعلمت', 'changed', 'غيرت', 'always', 'never', 'rule'] },
    ],
    alternatives: [
      {
        label: { ar: 'فشل منتج مع مسؤولية صادقة', en: 'A product failure with honest ownership' },
        answer: {
          ar: 'قضينا ستة أشهر في بناء محرر تقارير متقدم كان مدير المنتج متحمسًا له، وأطلقناه ليستخدمه أقل من 3% من العملاء. الأسباب الحقيقية: بنينا على افتراض أن العملاء يريدون التخصيص، ولم يتحقق أحد من ذلك بمقابلات قبل البناء. دوري: كنت القائد التقني، ورأيت إشارات مبكرة — كل جلسة اختبار مع مستخدمين كانت تُظهر ارتباكًا — لكني اعتبرتها مشكلة واجهة لا مشكلة فكرة، ولم أرفع صوتي. ما تغيّر عندي: صرت أطلب دليلًا من مستخدمين حقيقيين قبل أي مشروع يتجاوز شهرًا، وصرت أعامل "المستخدمون مرتبكون" كإشارة حمراء على الفكرة لا على الشاشة.',
          en: 'We spent six months building an advanced report editor the product manager was passionate about, and launched it to be used by under 3% of customers. The real causes: we built on the assumption that customers wanted customisation, and nobody validated that with interviews before building. My part: I was the tech lead, and I saw early signals — every user testing session showed confusion — but I treated them as UI problems rather than concept problems, and didn\'t speak up. What changed for me: I now require evidence from real users before any project longer than a month, and I treat "users are confused" as a red flag about the idea, not just the screen.',
        },
        why: { ar: 'تحليل موضوعي، اعتراف محدد بدور شخصي في الفشل الجماعي، ودرسان دقيقان قابلان للتطبيق.', en: 'Objective analysis, a specific admission of a personal role in a collective failure, and two precise, applicable lessons.' },
      },
      {
        label: { ar: 'فشل تقني: إعادة كتابة لم تكتمل', en: 'A technical failure: the rewrite that never shipped' },
        answer: {
          ar: 'اقترحت وقدت إعادة كتابة كاملة لتطبيق قديم بإطار حديث، وبعد ثمانية أشهر أُلغي المشروع قبل الإطلاق. الأسباب الحقيقية: إعادة الكتابة الكاملة تعني أن لا شيء يُسلَّم حتى ينتهي كل شيء، وخلال ثمانية أشهر تغيّرت أولويات الشركة وتراكمت ميزات جديدة في النظام القديم كان علينا نقلها أيضًا — كنا نطارد هدفًا يتحرك. دوري: أنا من أقنع الإدارة بإعادة الكتابة بدل الترحيل التدريجي، لأنني قلّلت من شأن مخاطر "الانفجار الكبير" وبالغت في تقدير سرعتنا. ما تغيّر: لم أقترح إعادة كتابة كاملة منذ ذلك الحين. في المشروع التالي رحّلنا صفحة صفحة خلف proxy، وكل صفحة كانت تُسلَّم وتعمل في الإنتاج خلال أسابيع. الدرس ليس "خطط أفضل" بل "لا تراهن بثمانية أشهر على شيء لا يمكن تسليمه جزئيًا".',
          en: 'I proposed and led a full rewrite of a legacy application in a modern framework, and after eight months the project was cancelled before launch. The real causes: a full rewrite means nothing ships until everything is done, and over eight months the company\'s priorities shifted and new features kept accumulating in the old system that we then also had to port — we were chasing a moving target. My part: I was the one who convinced leadership to rewrite rather than migrate incrementally, because I underestimated the risk of a big bang and overestimated our speed. What changed: I haven\'t proposed a full rewrite since. On the next project we migrated page by page behind a proxy, and every page shipped to production within weeks. The lesson isn\'t "plan better" — it\'s "never bet eight months on something that can\'t be delivered incrementally".',
        },
        why: { ar: 'فشل كبير مع مسؤولية شخصية صريحة عن القرار الأصلي، وتحليل جذري للسبب، ودرس محدد جدًا طُبّق فعليًا بعدها.', en: 'A significant failure with explicit personal ownership of the original decision, root-cause analysis, and a very specific lesson that was actually applied afterwards.' },
      },
    ],
  },
  {
    id: 'soft-learn-new-tech',
    difficulty: beginner,
    kind: 'behavioral',
    question: {
      ar: 'كيف تتعلم تقنية جديدة؟',
      en: 'How do you learn a new technology?',
    },
    answer: {
      ar: 'المقابِل يريد نظامًا وليس "أشاهد فيديوهات". الإجابة الجيدة تُظهر أنك تتعلم بالتطبيق، وتعرف متى تتعمق ومتى تكتفي بالسطح، وتتحقق من فهمك.\n\nعناصر إجابة قوية:\n1. تبدأ بالتوثيق الرسمي لا بمقالات عشوائية.\n2. تبني شيئًا صغيرًا حقيقيًا بسرعة.\n3. تقرأ كود مشروع ناضج يستخدمها.\n4. تشرحها لغيرك أو تكتب عنها — الشرح يكشف الفجوات.\n5. تعرف متى تتوقف: تعلّم ما يكفي للمهمة لا كل شيء.\n\nمثال واقعي قصير يزيد المصداقية كثيرًا.\n\nتجنّب: قائمة موارد بلا منهج، والادعاء أنك تتعلم أي شيء في أيام.' + ADAPT.ar,
      en: 'The interviewer wants a system, not "I watch videos". A good answer shows you learn by doing, know when to go deep versus stay shallow, and verify your understanding.\n\nElements of a strong answer:\n1. Start with the official documentation, not random articles.\n2. Build something small and real quickly.\n3. Read the code of a mature project that uses it.\n4. Explain it to someone or write about it — explaining exposes gaps.\n5. Know when to stop: learn enough for the task, not everything.\n\nA brief real example adds a lot of credibility.\n\nAvoid: a list of resources with no method, and claiming you learn anything in days.' + ADAPT.en,
    },
    keyPoints: [
      { ar: 'التعلم بالبناء', en: 'Learning by building', terms: ['build', 'أبني', 'project', 'مشروع', 'hands-on', 'practice', 'تطبيق', 'small', 'صغير', 'try'] },
      { ar: 'التوثيق الرسمي', en: 'Official documentation', terms: ['documentation', 'docs', 'توثيق', 'official', 'رسمي', 'source'] },
      { ar: 'التحقق من الفهم', en: 'Verifying understanding', terms: ['explain', 'أشرح', 'teach', 'أعلم', 'write', 'أكتب', 'blog', 'share', 'أشارك', 'review'] },
      { ar: 'مثال حقيقي', en: 'A real example', terms: ['recently', 'مؤخرا', 'last', 'when i learned', 'عندما تعلمت', 'for example', 'مثلا'] },
    ],
    alternatives: [
      {
        label: { ar: 'منهج مع مثال', en: 'A method with an example' },
        answer: {
          ar: 'لدي منهج من أربع خطوات. أبدأ بالتوثيق الرسمي لأفهم النموذج الذهني الذي صُمّمت عليه الأداة، لا مجرد الصياغة. ثم أبني شيئًا صغيرًا لكن حقيقيًا خلال يوم أو يومين. ثم أقرأ كود مشروع ناضج مفتوح المصدر يستخدمها لأرى الأنماط الفعلية لا أمثلة الشرح. وأخيرًا أشرحها لزميل أو أكتب ملخصًا داخليًا — هذا يكشف لي ما لم أفهمه فعلًا. مؤخرًا تعلمت Server Components بهذه الطريقة: التوثيق، ثم صفحة واحدة في مشروع جانبي، ثم قراءة كود مثال رسمي، ثم عرض تقديمي لفريقي. العرض هو ما أجبرني على فهم حدود الخادم والعميل بدقة.',
          en: 'I have a four-step method. I start with the official docs to understand the mental model the tool was designed around, not just the syntax. Then I build something small but real within a day or two. Then I read the code of a mature open-source project that uses it, to see actual patterns rather than tutorial examples. Finally I explain it to a colleague or write an internal summary — that reveals what I haven\'t truly understood. I recently learned Server Components this way: the docs, then one page in a side project, then reading an official example codebase, then a presentation to my team. The presentation is what forced me to understand the server/client boundary precisely.',
        },
        why: { ar: 'منهج واضح ومكرر، ومثال حديث وحقيقي، ووعي بأن الشرح هو اختبار الفهم.', en: 'A clear, repeatable method, a recent and real example, and awareness that explaining is the test of understanding.' },
      },
      {
        label: { ar: 'التعلم تحت ضغط مهمة حقيقية', en: 'Learning under the pressure of a real task' },
        answer: {
          ar: 'أفضل طريقة تعلمت بها كانت دائمًا مع مهمة حقيقية لها موعد. عندما احتاج فريقي إلى WebSockets لميزة إشعارات فورية ولم يكن أحد يعرفها، أخذت المهمة. أول ما فعلته هو تحديد ما أحتاج معرفته للمهمة تحديدًا — لا كل شيء عن البروتوكول: الاتصال، وإعادة الاتصال، والتعامل مع الانقطاع. قرأت التوثيق لذلك فقط، ثم بنيت نموذجًا أوليًا في نصف يوم يعمل من طرف لطرف ولو بشكل بدائي، لأن النموذج العامل يكشف الأسئلة الحقيقية أسرع من القراءة. ثم بحثت عن كيف تحل المكتبات الناضجة مشكلة إعادة الاتصال بدل اختراعها. سلّمت الميزة في الوقت، وكتبت صفحة قصيرة لفريقي عن الفخاخ التي وقعت فيها. الفكرة: أتعلم ما يكفي للمهمة، ثم أعمّق عندما تتطلب المهمة التالية ذلك.',
          en: 'The best way I\'ve ever learned has always been with a real task and a deadline. When my team needed WebSockets for a live notifications feature and nobody knew them, I took the task. The first thing I did was define what I needed to know for this task specifically — not everything about the protocol: connecting, reconnecting, and handling disconnects. I read the docs for just that, then built a prototype in half a day that worked end to end, however crudely, because a working prototype surfaces the real questions faster than reading does. Then I looked at how mature libraries solve reconnection rather than inventing it. I delivered the feature on time and wrote a short page for my team about the traps I\'d hit. The idea: learn enough for the task, then go deeper when the next task demands it.',
        },
        why: { ar: 'تُظهر تعلّمًا موجهًا بالهدف لا تعلّمًا شاملًا، ونموذجًا أوليًا مبكرًا، ومشاركة المعرفة مع الفريق.', en: 'Shows goal-directed rather than exhaustive learning, an early prototype, and sharing the knowledge with the team.' },
      },
    ],
  },
  {
    id: 'soft-code-review-disagree',
    difficulty: intermediate,
    kind: 'behavioral',
    question: {
      ar: 'كيف تتعامل مع مراجعة كود تختلف معها؟',
      en: 'How do you handle a code review comment you disagree with?',
    },
    answer: {
      ar: 'سؤال عملي جدًا يكشف كيف تعمل يوميًا. المقابِل يريد أن يرى: هل تفرّق بين التفضيل والصواب؟ هل تناقش بأدب؟ هل تعرف متى تتنازل؟\n\nالإجابة الناضجة:\n1. افترض حسن النية واقرأ التعليق مرتين.\n2. ميّز: هل هو خطأ فعلي، أم مقايضة، أم تفضيل أسلوبي؟\n3. للأخطاء: اشكر وأصلح. للمقايضات: اشرح المنطق واطلب رأيًا ثالثًا إن لزم. للتفضيلات: اتبع اتفاق الفريق، وإن لم يوجد فتنازل — ليست معركة تستحق.\n4. انقل النقاش الطويل من التعليقات إلى محادثة مباشرة.\n\nتجنّب: الدفاع عن كل سطر، والتنازل الصامت عن شيء تعتقد أنه خطأ.' + ADAPT.ar,
      en: 'A very practical question that reveals how you work day to day. The interviewer wants to see: do you distinguish preference from correctness, do you discuss respectfully, and do you know when to yield?\n\nThe mature answer:\n1. Assume good intent and read the comment twice.\n2. Classify it: an actual bug, a trade-off, or a style preference?\n3. For bugs: thank them and fix it. For trade-offs: explain your reasoning and get a third opinion if needed. For preferences: follow the team convention, and if there is none, yield — it is not a battle worth fighting.\n4. Move a long thread from comments to a direct conversation.\n\nAvoid: defending every line, and silently yielding on something you believe is wrong.' + ADAPT.en,
    },
    keyPoints: [
      { ar: 'التمييز بين خطأ ومقايضة وتفضيل', en: 'Distinguishing bug, trade-off and preference', terms: ['preference', 'تفضيل', 'style', 'أسلوب', 'bug', 'خطأ', 'trade-off', 'correct', 'صحيح', 'matter'] },
      { ar: 'نقاش محترم مبني على المنطق', en: 'Respectful, reasoned discussion', terms: ['explain', 'أشرح', 'reason', 'سبب', 'why', 'لماذا', 'discuss', 'نناقش', 'ask', 'أسأل', 'understand'] },
      { ar: 'معرفة متى تتنازل', en: 'Knowing when to yield', terms: ['let it go', 'أتنازل', 'not worth', 'لا يستحق', 'convention', 'اتفاق', 'team standard', 'accept', 'defer', 'third opinion'] },
    ],
    alternatives: [
      {
        label: { ar: 'تصنيف ثم تصرف', en: 'Classify, then act' },
        answer: {
          ar: 'أول شيء أفعله هو تصنيف التعليق. إن كان يكشف خطأً فعليًا فأشكر المراجع وأصلحه فورًا — هذا هو الهدف من المراجعة أصلًا. إن كان مقايضة تصميمية، أشرح سبب اختياري في تعليق قصير وأسأل عن رأيه في السياق الكامل؛ وإن بقينا مختلفين أطلب رأي شخص ثالث بدل إطالة النقاش. أما إن كان تفضيلًا أسلوبيًا فأتبع اتفاق الفريق إن وُجد، وإلا أتنازل ببساطة لأن الاتساق أهم من رأيي. وعندما يتجاوز النقاش ثلاثة ردود، أنقله إلى مكالمة قصيرة — التعليقات المكتوبة تبدو أحدّ مما يُقصد بها.',
          en: 'The first thing I do is classify the comment. If it reveals an actual bug, I thank the reviewer and fix it immediately — that is the point of review. If it is a design trade-off, I explain my reasoning in a short comment and ask for their view given the full context; if we still disagree I ask a third person rather than prolonging the thread. If it is a style preference, I follow the team convention if one exists, and otherwise I simply yield, because consistency matters more than my opinion. And once a thread passes three replies, I move it to a quick call — written comments read harsher than intended.',
        },
        why: { ar: 'إطار واضح، نبرة غير دفاعية، ووعي بأن الاتساق والعلاقة أهم من الفوز.', en: 'A clear framework, a non-defensive tone, and awareness that consistency and the relationship matter more than winning.' },
      },
      {
        label: { ar: 'مثال محدد: تعليق كنت أعتقد أنه خاطئ', en: 'A specific example: a comment I thought was wrong' },
        answer: {
          ar: 'طلب مني مراجع مرة أن أستبدل useEffect الذي يجلب البيانات بمكتبة React Query، ورأيت أن هذا مبالغة لمكوّن بسيط واحد. بدل الرفض، كتبت تعليقًا قصيرًا: "أفهم الفائدة في التخزين المؤقت وإلغاء الطلبات، لكن هذا المكوّن الوحيد الذي يجلب بيانات في هذه الصفحة — هل نضيف اعتمادية جديدة له وحده؟" رد بأن ثلاث صفحات أخرى في الخطة ستحتاج الجلب نفسه خلال الشهر القادم، وهذا لم أكن أعرفه. تغيّر رأيي بمعلومة جديدة لا بضغط، واعتمدنا المكتبة. لو لم يكن لديه هذا السياق لكنت اقترحت تأجيل القرار إلى حين ظهور الحاجة الثانية. ما أحرص عليه: أن أشرح سبب اعتراضي بسؤال لا بحكم، لأن السؤال يترك المجال للمعلومة التي قد تنقصني.',
          en: 'A reviewer once asked me to replace a data-fetching useEffect with React Query, and I felt that was overkill for one simple component. Instead of refusing, I wrote a short comment: "I see the benefit for caching and cancellation, but this is the only component fetching data on this page — should we add a new dependency for it alone?" He replied that three more pages in the plan would need the same fetching within the next month, which I hadn\'t known. I changed my mind because of new information, not pressure, and we adopted the library. If he hadn\'t had that context, I\'d have proposed deferring the decision until the second need appeared. What I make a point of: phrasing my objection as a question rather than a verdict, because a question leaves room for the information I might be missing.',
        },
        why: { ar: 'مثال ملموس، واعتراض مصاغ كسؤال، وتغيير رأي مبني على معلومة، ومبدأ واضح للتعامل مع الحالة المعاكسة.', en: 'A concrete example, an objection phrased as a question, a change of mind based on information, and a clear principle for the opposite case.' },
      },
    ],
  },
  {
    id: 'soft-questions-for-us',
    difficulty: beginner,
    kind: 'behavioral',
    question: {
      ar: 'هل لديك أسئلة لنا؟',
      en: 'Do you have any questions for us?',
    },
    answer: {
      ar: 'الإجابة "لا" خطأ دائمًا. هذا السؤال فرصتان: تُظهر جديتك، وتجمع معلومات تحتاجها فعلًا لقرارك.\n\nحضّر 4-5 أسئلة مسبقًا، واختر منها ما لم تتم الإجابة عنه خلال المقابلة.\n\nأسئلة قوية:\n• كيف يبدو اليوم النموذجي للشخص في هذا الدور؟\n• ما أكبر تحدٍّ تقني يواجهه الفريق حاليًا؟\n• كيف تُتخذ القرارات التقنية؟ وكيف تُراجع الأخطاء؟\n• كيف يُقاس النجاح في هذا الدور بعد ستة أشهر؟\n• ما الذي يجعل شخصًا ينجح هنا، وما الذي يجعله يفشل؟\n\nتجنّب: أسئلة إجابتها على الموقع، وأسئلة الراتب والإجازات في المقابلة الأولى، والأسئلة الشكلية بلا اهتمام حقيقي.' + ADAPT.ar,
      en: '"No" is always the wrong answer. This question is two opportunities: to show seriousness, and to gather information you genuinely need for your decision.\n\nPrepare four or five questions in advance and use whichever were not answered during the interview.\n\nStrong questions:\n• What does a typical day look like for someone in this role?\n• What is the biggest technical challenge the team faces right now?\n• How are technical decisions made, and how are mistakes reviewed?\n• How is success in this role measured after six months?\n• What makes someone succeed here, and what makes them struggle?\n\nAvoid: questions answered on the website, salary and holiday questions in a first interview, and token questions without genuine interest.' + ADAPT.en,
    },
    keyPoints: [
      { ar: 'أسئلة عن الفريق والعمل اليومي', en: 'Questions about the team and daily work', terms: ['team', 'فريق', 'day', 'يوم', 'work', 'عمل', 'process', 'عملية', 'challenge', 'تحد'] },
      { ar: 'أسئلة عن النجاح والتوقعات', en: 'Questions about success and expectations', terms: ['success', 'نجاح', 'expect', 'توقع', 'measure', 'قياس', 'six months', 'ستة أشهر', 'first', 'onboarding'] },
      { ar: 'اهتمام حقيقي بالقرار', en: 'Genuine interest in the decision', terms: ['decision', 'قرار', 'culture', 'ثقافة', 'growth', 'نمو', 'learn', 'تعلم', 'why did you', 'what do you like'] },
    ],
    alternatives: [
      {
        label: { ar: 'ثلاثة أسئلة مركّزة', en: 'Three focused questions' },
        answer: {
          ar: 'نعم، ثلاثة أسئلة. أولًا: ما أكبر تحدٍّ تقني يواجهه الفريق هذا الربع، وكيف سيساهم هذا الدور فيه؟ ثانيًا: كيف تُتخذ القرارات المعمارية — هل هناك عملية لمناقشة المقايضات أم تُترك للأفراد؟ وثالثًا، سؤال لك شخصيًا: ما الذي جعلك تبقى هنا؟',
          en: 'Yes, three. First: what is the biggest technical challenge the team faces this quarter, and how would this role contribute to it? Second: how are architectural decisions made — is there a process for discussing trade-offs, or is it left to individuals? And third, a personal one for you: what has kept you here?',
        },
        why: { ar: 'أسئلة تُظهر تفكيرًا في الدور والعمل الفعلي، والسؤال الشخصي الأخير يبني تواصلًا ويعطي معلومة صادقة.', en: 'Questions that show thinking about the role and the real work, and the personal closing question builds rapport and yields an honest signal.' },
      },
      {
        label: { ar: 'أسئلة عن النجاح والثقافة', en: 'Questions about success and culture' },
        answer: {
          ar: 'نعم. أولًا: لو نظرنا بعد ستة أشهر ووجدنا أن هذا التعيين نجح بامتياز — ما الذي سيكون قد حدث؟ هذا يساعدني أن أفهم التوقعات الحقيقية. ثانيًا: كيف يتعامل الفريق مع الأخطاء في الإنتاج — هل هناك مراجعة ما بعد الحادث، وهل هي بلا لوم؟ ثالثًا: ما أكثر شيء غيّرتموه في طريقة عمل الفريق خلال العام الماضي ولماذا؟ وأخيرًا، ما الخطوات التالية في عملية التوظيف ومتى أتوقع أن أسمع منكم؟',
          en: 'Yes. First: if we looked back in six months and this hire had been a clear success, what would have happened? That helps me understand the real expectations. Second: how does the team handle mistakes in production — is there a post-mortem, and is it blameless? Third: what\'s the biggest thing you\'ve changed about how the team works in the past year, and why? And finally, what are the next steps in the process, and when should I expect to hear from you?',
        },
        why: { ar: 'السؤال الأول يكشف التوقعات الحقيقية، والثاني يكشف الثقافة بدقة، والثالث يُظهر أن الفريق يتعلم، والأخير عملي ومهني.', en: 'The first question reveals real expectations, the second reveals culture precisely, the third shows whether the team learns, and the last is practical and professional.' },
      },
    ],
  },
  {
    id: 'soft-remote-communication',
    difficulty: intermediate,
    kind: 'behavioral',
    question: {
      ar: 'كيف تتواصل وتتعاون في فريق موزّع أو عن بُعد؟',
      en: 'How do you communicate and collaborate in a distributed or remote team?',
    },
    answer: {
      ar: 'سؤال شائع جدًا اليوم. المقابِل يريد أن يعرف: هل تستطيع العمل بفعالية دون إشراف مباشر؟ وهل تتواصل بشكل يعوّض غياب المكتب؟\n\nعناصر الإجابة القوية:\n1. الكتابة كوسيلة أساسية: قرارات موثّقة، تحديثات واضحة، طلبات محددة.\n2. التواصل غير المتزامن افتراضيًا، والمتزامن للأمور المعقدة.\n3. الظهور الاستباقي: لا تنتظر أن يُسأل عنك — شارك التقدم والعوائق مبكرًا.\n4. الوعي بالمناطق الزمنية والاحترام لوقت الآخرين.\n5. بناء علاقة بشرية عن قصد (محادثات غير رسمية).\n\nتجنّب: الاعتماد الكامل على الاجتماعات، والادعاء أنه لا فرق عن المكتب.' + ADAPT.ar,
      en: 'A very common question today. The interviewer wants to know: can you work effectively without direct supervision, and do you communicate in a way that compensates for the missing office?\n\nElements of a strong answer:\n1. Writing as the primary medium: documented decisions, clear updates, specific requests.\n2. Async by default, synchronous for complex matters.\n3. Proactive visibility: don\'t wait to be asked — share progress and blockers early.\n4. Time-zone awareness and respect for others\' time.\n5. Deliberately building human connection (informal conversations).\n\nAvoid: relying entirely on meetings, and claiming it is no different from the office.' + ADAPT.en,
    },
    keyPoints: [
      { ar: 'الكتابة والتوثيق', en: 'Writing and documentation', terms: ['write', 'أكتب', 'written', 'مكتوب', 'document', 'وثق', 'async', 'غير متزامن', 'clear', 'واضح'] },
      { ar: 'الظهور الاستباقي', en: 'Proactive visibility', terms: ['update', 'تحديث', 'proactive', 'استباقي', 'share', 'أشارك', 'blocker', 'عائق', 'progress', 'تقدم', 'early', 'status'] },
      { ar: 'اختيار الوسيلة المناسبة', en: 'Choosing the right medium', terms: ['call', 'مكالمة', 'meeting', 'اجتماع', 'when', 'متى', 'complex', 'معقد', 'sync', 'chat', 'video'] },
    ],
    alternatives: [
      {
        label: { ar: 'مبادئ عملية', en: 'Practical principles' },
        answer: {
          ar: 'أعمل عن بُعد منذ ثلاث سنوات، وتعلمت أن التواصل الجيد عن بُعد أكثر تعمّدًا من المكتب. أكتب افتراضيًا: كل قرار تقني في مستند قصير، وكل طلب مساعدة يتضمن ما جرّبته وما أتوقعه، حتى يستطيع الطرف الآخر الرد دون اجتماع. أنشر تحديثًا قصيرًا نهاية كل يوم بما أنجزته وما يعيقني — فلا يحتاج أحد أن يسأل. وأحجز مكالمة فقط عندما يتجاوز النقاش الكتابي ثلاث رسائل. وبما أن فريقي موزّع على ثلاث مناطق زمنية، أحرص أن تكون قراراتي موثّقة بحيث يستطيع من يستيقظ بعدي المتابعة دون انتظاري.',
          en: 'I\'ve worked remotely for three years, and I\'ve learned that good remote communication is more deliberate than office communication. I write by default: every technical decision goes in a short document, and every request for help includes what I tried and what I expect, so the other person can answer without a meeting. I post a brief end-of-day update with what I did and what is blocking me, so nobody has to ask. I book a call only when a written thread passes three messages. And since my team spans three time zones, I make sure decisions are documented so whoever wakes up after me can continue without waiting for me.',
        },
        why: { ar: 'عادات محددة لا مبادئ عامة، ووعي بالمناطق الزمنية، وتقليل للاجتماعات مع الحفاظ على الوضوح.', en: 'Specific habits rather than general principles, time-zone awareness, and fewer meetings without loss of clarity.' },
      },
      {
        label: { ar: 'مع مثال على سوء فهم تم حله', en: 'With an example of a resolved misunderstanding' },
        answer: {
          ar: 'أعتقد أن أكبر خطر في العمل عن بُعد ليس قلة التواصل بل سوء الفهم الصامت — الجميع يظن أنه متفق ثم يكتشف العكس بعد أسبوع. لذلك بعد أي نقاش مهم أكتب ملخصًا قصيرًا بالقرار وأرسله للمعنيين بسؤال واحد: "هل هذا ما فهمناه جميعًا؟". مرة، في نقاش كتابي عن تصميم API مع مطوّر خلفي في منطقة زمنية تبعد ست ساعات، ظننت أننا اتفقنا على pagination بالمؤشر بينما فهم هو offset. الملخص المكتوب كشف الفرق في نفس اليوم بدل أن نكتشفه عند الدمج. غير ذلك: أحرص أن تكون كاميرتي مفتوحة في الاجتماعات المهمة، وأخصص وقتًا للحديث غير الرسمي مع الفريق، لأن الثقة عن بُعد لا تُبنى وحدها.',
          en: 'I think the biggest risk in remote work isn\'t too little communication but silent misunderstanding — everyone assumes agreement and discovers otherwise a week later. So after any important discussion I write a short summary of the decision and send it to everyone involved with one question: "is this what we all understood?". Once, in a written discussion about an API design with a backend developer six time zones away, I thought we had agreed on cursor-based pagination while he understood offset. The written summary exposed the difference the same day rather than at integration time. Beyond that: I keep my camera on in important meetings and deliberately make time for informal conversation with the team, because trust doesn\'t build itself remotely.',
        },
        why: { ar: 'تحدد الخطر الحقيقي بدقة، وعادة بسيطة تعالجه، ومثال واقعي يثبت قيمتها، ووعي بالجانب الإنساني.', en: 'Identifies the real risk precisely, a simple habit that addresses it, a realistic example proving its value, and awareness of the human side.' },
      },
    ],
  },
];
