// i18n/translations.js
// Every user-facing UI string in the application.
// Content (questions/answers/category names) is localized in src/data, not here.

import { interviewStrings } from './interviewStrings';

export const LANGUAGES = ['ar', 'en'];
export const DEFAULT_LANGUAGE = 'ar';
export const LANGUAGE_STORAGE_KEY = 'language';

export const languageMeta = {
  ar: { code: 'ar', dir: 'rtl', shortLabel: 'AR', label: 'العربية' },
  en: { code: 'en', dir: 'ltr', shortLabel: 'EN', label: 'English' },
};

export const translations = {
  ar: {
    'app.name': 'انترفيو',
    'app.tagline': 'أسئلة انترفيو أغلب لغات البرمجة',
    'app.documentTitle': 'انترفيو برمجة',

    'nav.home': 'الرئيسية',
    'nav.favorites': 'المفضلة',
    'nav.language': 'اللغة',
    'nav.switchToEnglish': 'التبديل إلى الإنجليزية',
    'nav.switchToArabic': 'التبديل إلى العربية',

    'home.title': 'أسئلة انترفيو أغلب لغات البرمجة',
    'home.subtitle': 'اختر التقنية التي تستعد لها، وابدأ من المستوى المبتدئ حتى المتقدم',
    'home.searchPlaceholder': 'ابحث عن تقنية...',
    'home.noSections': 'لا توجد تقنيات مطابقة لبحثك',
    'home.questionsCount': '{count} سؤال',
    'home.addToFavorites': 'إضافة إلى المفضلة',
    'home.removeFromFavorites': 'إزالة من المفضلة',

    'favorites.title': 'المفضلة',
    'favorites.empty': 'لا توجد عناصر في المفضلة',
    'favorites.emptyHint': 'اضغط على أيقونة القلب بجوار أي تقنية لإضافتها هنا',
    'favorites.browseSections': 'تصفّح التقنيات',

    'section.notFound': 'هذا القسم غير موجود',
    'section.backHome': 'العودة إلى الرئيسية',
    'section.totalQuestions': 'إجمالي الأسئلة',
    'section.shownQuestions': 'الأسئلة المعروضة',
    'section.markedQuestions': 'الأسئلة المراد مراجعتها',
    'section.searchPlaceholder': 'ابحث داخل الأسئلة والإجابات...',
    'section.clearSearch': 'مسح البحث',
    'section.noResults': 'لا توجد أسئلة مطابقة',
    'section.noResultsHint': 'جرّب كلمات بحث مختلفة أو غيّر مستوى الصعوبة',
    'section.clearFilters': 'إعادة ضبط الفلاتر',
    'section.empty': 'لم تتم إضافة أسئلة لهذا القسم بعد',
    'section.markForReview': 'تعليم السؤال للمراجعة',
    'section.unmarkForReview': 'إلغاء تعليم السؤال',

    'difficulty.label': 'مستوى الصعوبة',
    'difficulty.all': 'الكل',
    'difficulty.beginner': 'مبتدئ',
    'difficulty.intermediate': 'متوسط',
    'difficulty.advanced': 'متقدم',

    'theme.toggleDark': 'الوضع الليلي',
    'theme.toggleLight': 'الوضع النهاري',

    'footer.madeBy': 'صُنع بواسطة Mahmoud Badr',

    ...interviewStrings.ar,
  },

  en: {
    'app.name': 'Interview',
    'app.tagline': 'Technical interview questions across popular technologies',
    'app.documentTitle': 'Tech Interview Questions',

    'nav.home': 'Home',
    'nav.favorites': 'Favorites',
    'nav.language': 'Language',
    'nav.switchToEnglish': 'Switch to English',
    'nav.switchToArabic': 'Switch to Arabic',

    'home.title': 'Technical Interview Questions',
    'home.subtitle': 'Pick the technology you are preparing for and work up from beginner to advanced',
    'home.searchPlaceholder': 'Search for a technology...',
    'home.noSections': 'No technologies match your search',
    'home.questionsCount': '{count} questions',
    'home.questionsCount.one': '1 question',
    'home.addToFavorites': 'Add to favorites',
    'home.removeFromFavorites': 'Remove from favorites',

    'favorites.title': 'Favorites',
    'favorites.empty': 'You have no favorites yet',
    'favorites.emptyHint': 'Tap the heart icon next to any technology to save it here',
    'favorites.browseSections': 'Browse technologies',

    'section.notFound': 'This section does not exist',
    'section.backHome': 'Back to home',
    'section.totalQuestions': 'Total questions',
    'section.shownQuestions': 'Showing',
    'section.markedQuestions': 'Marked for review',
    'section.searchPlaceholder': 'Search questions and answers...',
    'section.clearSearch': 'Clear search',
    'section.noResults': 'No matching questions',
    'section.noResultsHint': 'Try different keywords or change the difficulty level',
    'section.clearFilters': 'Reset filters',
    'section.empty': 'No questions have been added to this section yet',
    'section.markForReview': 'Mark question for review',
    'section.unmarkForReview': 'Remove review mark',

    'difficulty.label': 'Difficulty',
    'difficulty.all': 'All',
    'difficulty.beginner': 'Beginner',
    'difficulty.intermediate': 'Intermediate',
    'difficulty.advanced': 'Advanced',

    'theme.toggleDark': 'Dark mode',
    'theme.toggleLight': 'Light mode',

    'footer.madeBy': 'Made by Mahmoud Badr',

    ...interviewStrings.en,
  },
};
