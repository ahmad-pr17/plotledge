import type { Messages } from '@/i18n/messages'

const calculator: Messages['calculator'] = {
  eyebrow: 'بچت کیلکولیٹر',
  title: 'آج حساب رکھنے پر آپ کا کتنا وقت لگتا ہے؟',
  description: 'سلائیڈرز کو اپنے کاروبار کے مطابق ہلائیں۔ نتیجہ آپ ہی کے اعداد پر مبنی ہے۔',
  sliders: {
    hours: { label: 'ہفتے میں حساب کتاب پر آپ کے کتنے گھنٹے لگتے ہیں', unit: 'گھنٹے' },
    share: { label: 'اس وقت میں سے کتنا بچانا چاہتے ہیں؟', unit: '%' },
    rate: { label: 'آپ کے ایک گھنٹے کی قیمت کتنی ہے؟' },
  },
  results: {
    hoursUnit: 'گھنٹے',
    perMonth: 'ہر ماہ واپس',
    perYear: 'ہر سال واپس',
    value: 'آپ کے وقت کی سالانہ قدر',
  },
  cta: 'مفت ڈیمو بک کریں',
  disclaimer: 'یہ آپ کے دیے ہوئے اعداد پر صرف حساب ہے، نتائج کا وعدہ نہیں۔ آپ کا کتنا وقت بچے گا، یہ اس پر منحصر ہے کہ آج آپ کام کیسے کرتے ہیں۔',
}
export default calculator
