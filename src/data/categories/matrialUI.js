// data/categories/matrialUI.js
import { DIFFICULTY } from '../difficulty.js';

const { beginner, intermediate } = DIFFICULTY;

export const matrialUI = [
  {
    id: 'matrialui-1-what-is-material-ui',
    difficulty: beginner,
    question: {
      ar: 'ما هو Material UI؟',
      en: 'What is Material UI?',
    },
    answer: {
      ar: 'Material UI هو مكتبة مكونات UI مبنية على React والتي تُستخدم لبناء واجهات مستخدم حديثة ومتجاوبة باستخدام تصميم Google Material Design.',
      en: 'Material UI (MUI) is a React component library for building modern, responsive interfaces based on Google\'s Material Design. It ships accessible, themeable components so you are not rebuilding buttons, dialogs and form controls on every project.',
    },
  },
  {
    id: 'matrialui-2-how-do-you-apply',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكن تطبيق الأنماط المخصصة (custom styles) في Material UI؟',
      en: 'How do you apply custom styles in Material UI?',
    },
    answer: {
      ar: 'يمكنك استخدام makeStyles أو styled من @mui/styles لتطبيق أنماط مخصصة على المكونات. يمكنك أيضًا تعديل الأنماط باستخدام الـ sx prop الذي يُستخدم لتطبيق الأنماط المخصصة بشكل مباشر على المكونات.',
      en: 'The current approach is the sx prop, which applies styles directly to a component with access to the theme. For reusable styled components there is the styled() utility. The older makeStyles API from @mui/styles is deprecated and should not be used in new code.',
    },
  },
  {
    id: 'matrialui-3-what-is-the-theme',
    difficulty: beginner,
    question: {
      ar: 'ما هو Theme في Material UI؟',
      en: 'What is the theme in Material UI?',
    },
    answer: {
      ar: 'Theme هو كائن يحتوي على أنماط وتصميمات مخصصة للتطبيق. يمكنك تخصيص الألوان، الأحجام، الخطوط، وغيرها من خلال ملف theme وتطبيقه عبر ThemeProvider.',
      en: 'The theme is an object holding the design decisions for your application — colours, spacing, typography, breakpoints, shadows. You create it with createTheme and supply it through ThemeProvider, after which every component reads from it. That is what makes consistent restyling and dark mode possible from one place.',
    },
  },
  {
    id: 'matrialui-4-how-do-you-customise',
    difficulty: intermediate,
    question: {
      ar: 'كيف يمكنك تخصيص مكونات Material UI؟',
      en: 'How do you customise Material UI components?',
    },
    answer: {
      ar: 'يمكنك تخصيص المكونات بطريقتين: تعديل الـ props لكل مكون لتغيير سلوكه الافتراضي. استخدام sx prop لتطبيق الأنماط المخصصة مباشرة. استخدام makeStyles لإنشاء أنماط CSS مخصصة.',
      en: 'There are three levels:\n1. Props — change a component\'s built-in behaviour and variants.\n2. The sx prop — one-off styles on a specific instance.\n3. Theme overrides — components.MuiButton.styleOverrides and defaultProps, which change every instance application-wide.\n\nThe rule of thumb: use the theme for anything that should be consistent, and sx for genuine one-offs.',
    },
  },
  {
    id: 'matrialui-5-what-is-the-grid',
    difficulty: beginner,
    question: {
      ar: 'ما هو Grid في Material UI؟',
      en: 'What is the Grid component in Material UI?',
    },
    answer: {
      ar: 'Grid هو مكون لتخطيط العناصر في شبكة متجاوبة، حيث يمكنك تقسيم الصفحة إلى أعمدة وصفوف وتحديد النسب لكل عمود باستخدام خصائص مثل xs, sm, md, lg, و xl.',
      en: 'Grid lays elements out in a responsive grid, splitting the page into rows and columns with per-breakpoint sizing via the xs, sm, md, lg and xl props. For simpler cases the Stack and Box components with CSS Grid or Flexbox are often lighter and clearer.',
    },
  },
  {
    id: 'matrialui-6-how-do-you-improve',
    difficulty: intermediate,
    question: {
      ar: 'كيف يمكنك تحسين الأداء عند استخدام Material UI؟',
      en: 'How do you improve performance when using Material UI?',
    },
    answer: {
      ar: 'استخدام Tree Shaking لتقليل حجم الحزمة النهائية. استخدام Lazy Loading لتحميل المكونات عند الحاجة فقط. تجنب إعادة التصيير غير الضرورية عبر استخدام React.memo أو PureComponent.',
      en: '• Import components individually so tree shaking can drop what you do not use.\n• Lazy-load heavy components such as data grids and date pickers.\n• Avoid recreating the theme object on every render — create it once, or memoise it.\n• Avoid large inline sx objects in long lists; prefer styled() so the styles are generated once.\n• Use React.memo on list rows that re-render frequently.',
    },
  },
  {
    id: 'matrialui-7-how-do-you-build',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكن إنشاء شريط تنقل (Navbar) باستخدام Material UI؟',
      en: 'How do you build a navigation bar with Material UI?',
    },
    answer: {
      ar: 'يمكنك استخدام مكونات AppBar و Toolbar مع مكونات مثل Typography و Button و IconButton لإنشاء شريط تنقل قابل للتخصيص.',
      en: 'With AppBar and Toolbar as the structure, plus Typography, Button and IconButton for the contents. AppBar supports position="sticky" or "fixed", and on small screens you typically switch to a Drawer for the navigation links.',
    },
  },
  {
    id: 'matrialui-8-what-is-the-dialog',
    difficulty: beginner,
    question: {
      ar: 'ما هو Dialog في Material UI؟',
      en: 'What is the Dialog component in Material UI?',
    },
    answer: {
      ar: 'Dialog هو مكون يُستخدم لإنشاء نوافذ منبثقة (modals) لتقديم معلومات أو طلبات من المستخدم. يمكنك استخدام Dialog لإظهار محتوى تفاعلي مع خيارات للمستخدم.',
      en: 'Dialog creates modal windows for presenting information or asking the user for input. It handles focus trapping, closing on Escape and the backdrop automatically — the accessibility details people usually get wrong when building a modal by hand.',
    },
  },
  {
    id: 'matrialui-9-how-do-you-use',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك استخدام Icons في Material UI؟',
      en: 'How do you use icons in Material UI?',
    },
    answer: {
      ar: 'يمكن استخدام مكونات الأيقونات من مكتبة Material Icons عبر استيراد الأيقونات مباشرة، مثل <Icon> أو <SvgIcon>، لتضمين الأيقونات في الواجهة بسهولة.',
      en: 'Install @mui/icons-material and import each icon individually, for example `import DeleteIcon from \'@mui/icons-material/Delete\'`. Importing individually matters: a barrel import pulls in thousands of icons and bloats the bundle. For custom artwork, wrap your SVG path in the SvgIcon component so it inherits size and colour from the theme.',
    },
  },
  {
    id: 'matrialui-10-what-is-a-snackbar',
    difficulty: beginner,
    question: {
      ar: 'ما هو Snackbar في Material UI؟',
      en: 'What is a Snackbar in Material UI?',
    },
    answer: {
      ar: 'Snackbar هو مكون يُستخدم لإظهار رسائل قصيرة للمستخدم، مثل إشعارات النجاح أو الخطأ. يظهر لفترة قصيرة في الجزء السفلي من الشاشة.',
      en: 'Snackbar shows a brief message — a success confirmation or an error — usually at the bottom of the screen, disappearing after a timeout. For application-wide notifications it is common to wrap it in a context provider or use a library such as notistack rather than managing Snackbar state per component.',
    },
  },
  {
    id: 'matrialui-11-how-do-you-add',
    difficulty: intermediate,
    question: {
      ar: 'كيف يمكنك إضافة تأثيرات الانتقال (Transitions) في Material UI؟',
      en: 'How do you add transitions in Material UI?',
    },
    answer: {
      ar: 'يمكن استخدام مكون Transition أو Collapse لإضافة تأثيرات انتقالية سلسة بين حالات المكونات المختلفة مثل الفتح والإغلاق.',
      en: 'MUI ships transition components — Fade, Grow, Slide, Collapse and Zoom — that animate a component in and out based on an `in` prop. They are built on react-transition-group and read their durations and easings from the theme, so motion stays consistent across the app.',
    },
  },
  {
    id: 'matrialui-12-what-is-the-sx',
    difficulty: beginner,
    question: {
      ar: 'ما هي خصائص الـ sx في Material UI؟',
      en: 'What is the sx prop in Material UI?',
    },
    answer: {
      ar: 'الـ sx prop هو وسيلة مرنة لتطبيق الأنماط بشكل مباشر على المكونات، مما يسمح لك بتخصيص الأنماط بسهولة دون الحاجة إلى إنشاء أنماط خارجية.',
      en: 'sx is a flexible way to apply styles directly to a component, with first-class access to the theme and to responsive values:\n```jsx\n<Box sx={{ p: 2, color: \'primary.main\', display: { xs: \'none\', md: \'block\' } }} />\n```\nNumeric values map to the theme spacing scale, colour strings resolve against the palette, and object values become breakpoint-based styles.',
    },
  },
  {
    id: 'matrialui-13-how-do-you-build',
    difficulty: intermediate,
    question: {
      ar: 'كيف يمكنك استخدام Form Control في Material UI؟',
      en: 'How do you build forms with Material UI?',
    },
    answer: {
      ar: 'يمكن استخدام مكونات FormControl وInputLabel وSelect وTextField لبناء نماذج إدخال تفاعلية ومخصصة، مما يُسهل إدارة البيانات المدخلة من قبل المستخدم.',
      en: 'FormControl, InputLabel, Select and TextField compose into accessible form fields, with helperText and error props for validation feedback. In practice you pair them with a form library such as React Hook Form via its Controller, which keeps validation and re-render behaviour manageable as forms grow.',
    },
  },
  {
    id: 'matrialui-14-how-do-you-manage',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك إدارة الأنماط العالمية في Material UI؟',
      en: 'How do you manage global styles in Material UI?',
    },
    answer: {
      ar: 'يمكن استخدام CssBaseline لتطبيق أنماط CSS الأساسية على مستوى التطبيق بأكمله، مما يوفر قاعدة ثابتة للمظهر والتصميم.',
      en: 'CssBaseline applies a sensible baseline reset across the whole application and reads the background and text colours from the theme — which is what makes dark mode work correctly. For additional global rules there is the GlobalStyles component.',
    },
  },
  {
    id: 'matrialui-15-what-is-the-box',
    difficulty: beginner,
    question: {
      ar: 'ما هو Box في Material UI؟',
      en: 'What is the Box component in Material UI?',
    },
    answer: {
      ar: 'Box هو مكون حاوية مرن يُستخدم لتخطيط العناصر وتطبيق الأنماط بسهولة. يمكنك استخدامه كحاوية بسيطة لتطبيق أنماط CSS المخصصة بشكل مباشر.',
      en: 'Box is a generic container that accepts the sx prop, making it the quickest way to apply layout and spacing without writing a separate stylesheet. By default it renders a div, and the `component` prop lets you change that to any element or component — useful for keeping the markup semantic.',
    },
  },
];
