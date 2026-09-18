// data/sections.js
// Category metadata. `name` is bilingual; ids are unchanged for the categories
// that already existed so bookmarks and saved favorites keep working.
export const sections = [
  { id: 'javascript', name: { ar: 'JavaScript', en: 'JavaScript' }, color: '#F0DB4F' },
  { id: 'typescript', name: { ar: 'TypeScript', en: 'TypeScript' }, color: '#3178C6' },
  { id: 'react', name: { ar: 'React', en: 'React' }, color: '#61DAFB' },
  { id: 'nextjs', name: { ar: 'Next.js', en: 'Next.js' }, color: '#000000' },
  { id: 'stateManagement', name: { ar: 'إدارة الحالة (State Management)', en: 'State Management' }, color: '#764ABC' },
  { id: 'htmlcss', name: { ar: 'HTML & CSS', en: 'HTML & CSS' }, color: '#E34F26' },
  { id: 'web', name: { ar: 'أساسيات الويب والمتصفح', en: 'Web & Browser Fundamentals' }, color: '#4285F4' },
  { id: 'testing', name: { ar: 'الاختبارات (Testing)', en: 'Testing' }, color: '#99425B' },
  { id: 'nodejs', name: { ar: 'Node.js', en: 'Node.js' }, color: '#339933' },
  { id: 'reactNative', name: { ar: 'React Native', en: 'React Native' }, color: '#61DBFB' },
  { id: 'flutter', name: { ar: 'Flutter', en: 'Flutter' }, color: '#02569B' },
  { id: 'dotnet', name: { ar: '.NET', en: '.NET' }, color: '#512BD4' },
  { id: 'java', name: { ar: 'Java', en: 'Java' }, color: '#B07219' },
  { id: 'php', name: { ar: 'PHP', en: 'PHP' }, color: '#4F5D95' },
  { id: 'python', name: { ar: 'Python', en: 'Python' }, color: '#3776AB' },
  { id: 'ruby', name: { ar: 'Ruby', en: 'Ruby' }, color: '#701516' },
  { id: 'matrialUI', name: { ar: 'Material UI', en: 'Material UI' }, color: '#007FFF' },
  { id: 'angular', name: { ar: 'Angular', en: 'Angular' }, color: '#DD0031' },
  { id: 'vueJS', name: { ar: 'Vue.js', en: 'Vue.js' }, color: '#42B883' },
  { id: 'kotlin', name: { ar: 'Kotlin', en: 'Kotlin' }, color: '#7F52FF' },
  { id: 'database', name: { ar: 'قواعد البيانات', en: 'Databases' }, color: '#00758F' },
  { id: 'laravel', name: { ar: 'Laravel', en: 'Laravel' }, color: '#FF2D20' },
  { id: 'uiux', name: { ar: 'UI/UX', en: 'UI/UX' }, color: '#FF7262' },
  // Interview-preparation categories (added with Interview Mode).
  { id: 'softSkills', name: { ar: 'المهارات الشخصية (Soft Skills)', en: 'Soft Skills' }, color: '#0E9F6E' },
  { id: 'systemDesign', name: { ar: 'تصميم أنظمة الواجهات (System Design)', en: 'Frontend System Design' }, color: '#6D28D9' },
  { id: 'debugging', name: { ar: 'تحديات تصحيح الأخطاء (Debugging)', en: 'Debugging Challenges' }, color: '#DC2626' },
  { id: 'coding', name: { ar: 'تحديات برمجية (Coding)', en: 'Coding Challenges' }, color: '#0369A1' },
];

/** Section ids that hold behavioral (non-technical) questions. */
export const SOFT_SKILL_SECTIONS = ['softSkills'];
