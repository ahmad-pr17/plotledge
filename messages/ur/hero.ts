import type { Messages } from '@/i18n/messages'

const hero: Messages['hero'] = {
  eyebrow: 'پراپرٹی ڈیلرز کے لیے پلاٹ مینجمنٹ سافٹ ویئر',
  /** The headline is animated word by word: `words` appear one after another, then `tail` in the highlight color. */
  title: {
    words: ['ہر', 'پلاٹ،', 'ہر', 'قسط،', 'ہر', 'روپے', 'کا'],
    tail: 'حساب۔',
  },
  lead: 'Plot Ledge پاکستان میں پراپرٹی ڈیلرز کے لیے CRM ہے۔ یہ Excel شیٹس اور WhatsApp اسکرین شاٹس کی جگہ آپ کے پلاٹوں، قسطوں اور رسیدوں کا ایک واضح ریکارڈ رکھتا ہے۔',
  cta: {
    primary: 'مفت ڈیمو بک کریں',
    secondary: 'دیکھیں یہ کیسے کام کرتا ہے',
    whatsapp: 'WhatsApp پر چیٹ کریں',
  },
  trust: ['15 دن کا مفت ٹرائل', 'کوئی ادائیگی درکار نہیں', 'سیٹ اپ میں مدد'],
  /** The fake product dashboard next to the headline. */
  preview: {
    title: 'خلاصہ',
    live: 'لائیو',
    /** Short form of "million" shown after the amount in the KPI tiles, with its leading space. */
    millionShort: ' ملین',
    kpis: {
      sales: 'کل سیلز',
      received: 'وصول شدہ',
      outstanding: 'بقایا',
    },
    collections: 'وصولیاں',
    collectionsRange: 'جنوری سے جولائی',
    collectionsChartLabel: 'جنوری سے جولائی تک بڑھتی ہوئی وصولیاں',
    /** Seven short month names, January to July. */
    months: ['جنوری', 'فروری', 'مارچ', 'اپریل', 'مئی', 'جون', 'جولائی'],
    recentPayments: 'حالیہ ادائیگیاں',
    /** {plot} is a plot ID such as A-104. */
    plotLabel: 'پلاٹ {plot}',
    status: {
      Paid: 'ادا شدہ',
      Pending: 'زیر التوا',
      Overdue: 'واجب الادا',
    },
    events: {
      paymentReceived: { title: 'ادائیگی وصول ہوئی', sub: '{plot} کے لیے {amount}' },
      receiptIssued: { title: 'رسید جاری ہوئی' },
      plotBooked: { title: 'پلاٹ {plot} بک ہوا', sub: 'ڈاؤن پیمنٹ درج ہو گئی' },
    },
    receiptIssued: 'رسید جاری ہوئی',
    /** {count} is a number. */
    overdueNotice: '{count} قسطیں واجب الادا',
  },
}
export default hero
