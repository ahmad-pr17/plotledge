import type { Messages } from '@/i18n/messages'

const problem: Messages['problem'] = {
  eyebrow: 'Plot Ledge کیوں',
  title: 'بکھری فائلوں سے ایک واضح لیجر تک۔',
  description: 'جب ریکارڈ پانچ جگہوں پر ہو تو کوئی نہیں بتا سکتا کہ خریدار نے کتنا ادا کیا۔ Plot Ledge ہر فائل کی پوری کہانی ایک جگہ رکھتا ہے۔',
  messy: {
    heading: 'Excel اور WhatsApp کی بے ترتیبی',
    /** Sample rows from a messy spreadsheet (three cells each). An empty cell shows a red "?". */
    rows: [
      ['عائشہ A104', '85000??', 'جولائی؟'],
      ['حمزہ b107', '42,500', ''],
      ['C-103 مہوش', '1.2', 'نقد دیے'],
      ['عثمان E102', '', 'فون کرنا ہے'],
    ],
    quote: '"اس نے کون سے مہینے ادا کیا تھا؟" 400 پیغامات اوپر اسکرول کریں، اور امید رکھیں کہ سلپ ابھی موجود ہو۔',
  },
  clear: {
    heading: 'ایک واضح لیجر',
    tableCaption: 'قسطیں اپنی حالت کے ساتھ',
    columns: { plot: 'پلاٹ', amount: 'رقم', status: 'حالت' },
    status: { Paid: 'ادا شدہ', Pending: 'زیر التوا', Overdue: 'واجب الادا' },
    receiptIssued: 'رسید جاری ہوئی',
    note: 'ہر ادائیگی اپنے خریدار، اپنی سلپ اور اپنی رسید سے جڑی ہوتی ہے۔ واجب الادا قسطیں خود نظر آ جاتی ہیں۔',
  },
}
export default problem
