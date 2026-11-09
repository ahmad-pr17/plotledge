import type { Messages } from '@/i18n/messages'
const calculator: Messages['calculator'] = {
  eyebrow: 'حاسبة التوفير',
  title: 'كم تكلّفك المتابعة اليدوية اليوم؟',
  description: 'حرّك المؤشرات لتناسب عملك. تعتمد النتيجة على أرقامك أنت.',
  sliders: {
    hours: { label: 'ساعات المتابعة التي تقضيها أسبوعيًا', unit: 'ساعة' },
    share: { label: 'ما نسبة هذا الوقت التي تود توفيرها؟', unit: '%' },
    rate: { label: 'كم تساوي ساعة من وقتك؟' },
  },
  results: {
    hoursUnit: 'ساعة',
    perMonth: 'تعود إليك كل شهر',
    perYear: 'تعود إليك كل عام',
    value: 'من وقتك كل عام',
  },
  cta: 'احجز عرضًا تجريبيًا مجانيًا',
  disclaimer: 'هذه عملية حسابية على الأرقام التي أدخلتها، وليست وعدًا بنتائج. يعتمد الوقت الذي توفره على طريقة عملك اليوم.',
}
export default calculator
