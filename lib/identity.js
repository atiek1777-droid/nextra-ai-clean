// Detects "who are you / who made you" style questions and returns a fixed
// answer instead of calling the model — works the same in every tool on the
// site since they all route through /api/text.

const AR_PATTERNS = [
  'من انت',
  'من أنت',
  'من إنت',
  'مين انت',
  'مين أنت',
  'من طورك',
  'من طوّرك',
  'مين طورك',
  'من برمجك',
  'من برمجكم',
  'من صنعك',
  'من صممك',
  'من صمّمك',
  'من سواك',
  'من انشأك',
  'من أنشأك',
  'مطورك',
  'مبرمجك',
  'صانعك',
  'مصممك',
  'ما هي شركتك',
  'وش شركتك',
  'ايش شركتك',
  'إيش شركتك',
  'اي شركة طورتك',
  'أي شركة طورتك',
  'شركة مين طورتك',
  'من الشركة المطورة',
  'مين سوى هذا الموقع',
  'من سوى الموقع',
  'من مطور الموقع',
  'من صاحب الموقع'
];

const EN_PATTERNS = [
  'who are you',
  'who made you',
  'who built you',
  'who developed you',
  'who created you',
  'who programmed you',
  'who designed you',
  'what company made you',
  'which company made you',
  'what company are you',
  'your developer',
  'your creator',
  'who is your developer',
  'who owns this site',
  'who owns this website'
];

export function isIdentityQuestion(input) {
  const normalized = input.trim().toLowerCase();
  return (
    AR_PATTERNS.some((p) => normalized.includes(p)) ||
    EN_PATTERNS.some((p) => normalized.includes(p))
  );
}

export const IDENTITY_ANSWER = {
  ar: 'تم التطوير من قبل شركة Nextra AI من قبل الخبراء التقنيين عتيق الجذوة وعبدالمجيد الجهمي',
  en: 'This was developed by Nextra AI, by technical experts Atiq Al-Jathwah and Abdulmajeed Al-Jahmi.'
};
