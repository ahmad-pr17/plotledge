import type { Messages } from '@/i18n/messages'

const contact: Messages['contact'] = {
  meta: {
    title: 'رابطہ کریں اور ڈیمو بک کریں',
    description: 'پراپرٹی ڈیلرز کے لیے پلاٹ مینجمنٹ سافٹ ویئر Plot Ledge کا مفت ڈیمو بک کریں۔ پیغام بھیجیں یا WhatsApp پر چیٹ کریں۔',
  },
  eyebrow: 'رابطہ',
  title: 'مفت ڈیمو بک کریں',
  lead: 'ہمیں بتائیں کہ آپ کتنے پلاٹ سنبھالتے ہیں، ہم ایک مختصر کال میں آپ کو قسطیں، رسیدیں اور رپورٹس دکھائیں گے۔',
  aside: {
    label: 'ہم سے رابطے کے دیگر طریقے',
    chatTitle: 'چیٹ کرنا پسند ہے؟',
    whatsapp: 'WhatsApp پر چیٹ کریں',
    stepsTitle: 'ڈیمو میں کیا ہوتا ہے',
    enterprise: 'ہاؤسنگ سوسائٹی ہے یا کئی منصوبے ہیں؟ بتا دیں، ہم Enterprise پر بات کریں گے۔',
  },
  steps: [
    'ہم پوچھتے ہیں کہ آج آپ پلاٹ اور قسطوں کا حساب کیسے رکھتے ہیں۔',
    'آپ دیکھتے ہیں کہ پلاٹ، سودے، قسطیں اور رسیدیں مل کر کیسے کام کرتے ہیں۔',
    'اگر آپ اپنے ڈیٹا کے ساتھ آزمانا چاہیں تو ہم 15 دن کا ٹرائل شروع کر سکتے ہیں۔',
  ],
  /** Labels for the plot-count choices, in the same order as PLOT_COUNT_OPTIONS in lib/lead-options.ts. */
  plotOptions: ['25 سے کم', '25 سے 100', '100 سے 500', '500+'],
  form: {
    successTitle: 'درخواست موصول ہو گئی',
    success: 'شکریہ۔ ہم آپ کے دیے ہوئے نمبر پر رابطہ کریں گے۔',
    continueWhatsApp: 'WhatsApp پر جاری رکھیں',
    whatsappFollowup: 'السلام علیکم Plot Ledge، میں نے ابھی ویب سائٹ پر ڈیمو کی درخواست بھیجی ہے۔',
    failed: 'ہم اسے ابھی بھیج نہیں سکے۔ براہِ کرم ہمیں WhatsApp پر پیغام بھیجیں۔',
    messageWhatsApp: 'ہمیں WhatsApp پر پیغام بھیجیں',
    honeypot: 'ویب سائٹ',
    name: 'آپ کا نام',
    phone: 'فون یا WhatsApp نمبر',
    company: 'کمپنی یا سوسائٹی',
    optional: '(اختیاری)',
    plots: 'آپ کتنے پلاٹ سنبھالتے ہیں؟',
    choose: 'ایک چنیں',
    submit: 'مفت ڈیمو بک کریں',
    sending: 'بھیجا جا رہا ہے',
    privacy: 'ہم آپ کی تفصیلات صرف Plot Ledge کے سلسلے میں آپ سے رابطہ کرنے کے لیے استعمال کرتے ہیں۔',
    errors: {
      name: 'اپنا نام لکھیں۔',
      phone: '10 سے 15 ہندسوں کا فون نمبر لکھیں۔',
      plots: 'چنیں کہ آپ کتنے پلاٹ سنبھالتے ہیں۔',
    },
  },
}
export default contact
