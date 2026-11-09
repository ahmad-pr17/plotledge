import type { Messages } from '@/i18n/messages'

const chat: Messages['chat'] = {
  launcher: {
    open: 'Plot Ledge اسسٹنٹ سے چیٹ کریں',
    close: 'Plot Ledge اسسٹنٹ کی چیٹ بند کریں',
    teaser: 'Plot Ledge کے بارے میں سوال ہے؟ مجھ سے پوچھیں۔',
    dismiss: 'ہٹائیں',
  },
  window: {
    title: 'Plot Ledge اسسٹنٹ',
    subtitle: 'AI اسسٹنٹ',
    onlineSr: 'آن لائن۔ ',
    options: 'چیٹ کے اختیارات',
    newChat: 'نئی چیٹ',
    minimize: 'چیٹ چھوٹی کریں',
    close: 'چیٹ بند کریں',
    conversation: 'گفتگو',
    inputLabel: 'اپنا سوال لکھیں',
    inputPlaceholder: 'اپنا سوال لکھیں',
    send: 'پیغام بھیجیں',
    disclaimer: 'AI اسسٹنٹ۔ جوابات میں غلطی ہو سکتی ہے۔',
    privacy: 'رازداری',
    typing: 'Plot Ledge اسسٹنٹ لکھ رہا ہے',
  },
  greeting: 'السلام علیکم! میں Plot Ledge اسسٹنٹ ہوں۔ میں پلاٹ، قسطوں، رسیدوں اور قیمتوں کے بارے میں سوالوں کے جواب دے سکتا ہوں۔ آپ کیا جاننا چاہتے ہیں؟',
  quickRepliesLabel: 'تجویز کردہ سوالات',
  quickReplies: ['Plot Ledge کیا کرتا ہے؟', 'قیمتیں', 'ڈیمو بک کریں', 'کیا میں اپنا Excel ڈیٹا لا سکتا ہوں؟'],
  actions: {
    whatsapp: 'WhatsApp پر چیٹ کریں',
    crm: 'CRM کھولیں',
    pricing: 'قیمتیں دیکھیں',
    demo: 'مفت ڈیمو بک کریں',
  },
  rate: {
    label: 'اس جواب کو ریٹ کریں',
    up: 'مددگار جواب',
    down: 'غیر مددگار جواب',
  },
  whatsapp: {
    /** {topics} is what the visitor asked, joined with semicolons. */
    withTopics: 'السلام علیکم Plot Ledge، میں آپ کی ویب سائٹ پر چیٹ کر رہا تھا اور میں نے ان کے بارے میں پوچھا: {topics}۔ میں ٹیم سے بات کرنا چاہتا ہوں۔',
    plain: 'السلام علیکم Plot Ledge، میں آپ کی ویب سائٹ پر چیٹ کر رہا تھا۔ میں ٹیم سے بات کرنا چاہتا ہوں۔',
  },
  errors: {
    rateLimit: 'فی الحال آپ پیغامات کی حد تک پہنچ گئے ہیں۔ براہِ کرم چند منٹ بعد دوبارہ کوشش کریں، یا ٹیم سے WhatsApp پر بات کریں۔',
    failure: 'مجھے اس وقت مسئلہ پیش آ رہا ہے۔ آپ ٹیم سے WhatsApp پر بات کر سکتے ہیں یا ڈیمو بک کر سکتے ہیں۔',
    redacted: 'پیغام ہٹا دیا گیا کیونکہ وہ نجی معلومات لگ رہا تھا۔',
  },
  sensitiveReply: 'براہِ کرم اس چیٹ میں بینک کی تفصیلات، کارڈ نمبر، پاس ورڈ یا شناختی کارڈ (CNIC) نمبر شیئر نہ کریں۔ میں نے وہ پیغام ہٹا دیا ہے۔ میں Plot Ledge کے بارے میں سوالوں میں اب بھی آپ کی مدد کر سکتا ہوں۔',
  lead: {
    intro: 'اپنی تفصیلات دیں، ٹیم آپ سے رابطہ کرے گی۔',
    name: 'آپ کا نام',
    phone: 'فون یا WhatsApp نمبر',
    plots: 'آپ کتنے پلاٹ سنبھالتے ہیں؟',
    choose: 'ایک چنیں',
    city: 'شہر',
    optional: '(اختیاری)',
    submit: 'میری تفصیلات بھیجیں',
    sending: 'بھیجا جا رہا ہے',
    note: 'ہم اسے صرف Plot Ledge کے سلسلے میں آپ سے رابطہ کرنے کے لیے استعمال کریں گے۔',
    done: 'شکریہ۔ ٹیم جلد ہی آپ کے دیے ہوئے نمبر پر رابطہ کرے گی۔',
    failed: 'ہم اسے ابھی بھیج نہیں سکے۔',
    whatsapp: 'ہمیں WhatsApp پر پیغام بھیجیں',
    errors: {
      name: 'اپنا نام لکھیں۔',
      phone: '10 سے 15 ہندسوں کا نمبر لکھیں۔',
      plots: 'ایک چنیں۔',
    },
  },
  /**
   * Backup answers, used only when the AI service cannot be reached. The first entry with a keyword found in the visitor's
   * text (case-insensitive) wins. Keywords are per language: include words visitors of that language really type.
   * Placeholders in answers: {silver} {gold} {pct}.
   */
  offline: [
    {
      id: 'pricing',
      keywords: ['قیمت', 'کتنا', 'کتنی', 'فیس', 'ریٹ', 'پلان', 'مفت', 'qeemat', 'qimat', 'kitna', 'kitni', 'kitne ka', 'price', 'pricing', 'cost', 'plan', 'fee', 'rate', 'free'],
      answer: 'پلانز Silver کے لیے {silver} ماہانہ سے شروع ہوتے ہیں۔ Gold {gold} ماہانہ ہے، اور سالانہ ادائیگی پر {pct}% بچت ہوتی ہے (دو مہینے مفت)۔ Enterprise ملٹی برانچ ڈیولپرز، سوسائٹیوں اور بڑے گروپس کے لیے ہے، اس لیے ہم سے بات کریں۔',
    },
    {
      id: 'import',
      keywords: ['ایکسل', 'ڈیٹا', 'درآمد', 'پرانا ریکارڈ', 'پرانا ڈیٹا', 'excel', 'import', 'sheet', 'data load', 'data transfer', 'purana', 'purana data', 'purana record', 'data lana'],
      answer: 'جی ہاں، ہم آپ کے موجودہ پلاٹ، خریدار اور ادائیگیاں Excel سے لوڈ کرنے میں مدد کر سکتے ہیں۔ شیٹ ہمیں بھیجیں، ہم بتائیں گے کہ پہلے کچھ ٹھیک کرنا ہے یا نہیں، مثلاً ایک ہی قطار میں دو خریدار۔',
    },
    {
      id: 'roles',
      keywords: ['کردار', 'لاگ ان', 'رسائی', 'مالک', 'اکاؤنٹنٹ', 'ایجنٹ', 'اجازت', 'کون دیکھ', 'role', 'login', 'access', 'owner', 'accountant', 'agent', 'permission', 'who can', 'kaun dekh', 'ijazat'],
      answer: 'ہر شخص کو اپنا الگ لاگ ان ملتا ہے۔ مالک سب کچھ دیکھتا ہے، بشمول سیلز، منافع اور سرمایہ کار۔ اکاؤنٹنٹ ادائیگیاں، سلپس، رسیدیں اور رپورٹس سنبھالتا ہے۔ سیلز ایجنٹ نئے سودے شامل کر سکتا ہے اور پلاٹ اور خریدار دیکھ سکتا ہے، لیکن کسی سودے میں ترمیم یا اسے حذف نہیں کر سکتا۔',
    },
    {
      id: 'receipts',
      keywords: ['رسید', 'سلپ', 'ادائیگی کا ثبوت', 'رسیدیں', 'raseed', 'rasid', 'raseed', 'receipt', 'slip', 'payment proof', 'bank slip', 'proof'],
      answer: 'آپ جو بھی ادائیگی درج کرتے ہیں اس کی اپنی منفرد ID والی رسید بنتی ہے۔ آپ اسی ادائیگی کے ساتھ بینک سلپ کا حوالہ بھی لگا سکتے ہیں، یوں رسید، سلپ اور سودا آپس میں جڑے رہتے ہیں۔',
    },
    {
      id: 'mobile',
      keywords: ['فون', 'موبائل', 'ٹیبلیٹ', 'ایپ', 'موبائل پر', 'phone', 'mobile', 'tablet', 'app', 'mobile par', 'phone par', 'android', 'iphone'],
      answer: 'جی ہاں۔ Plot Ledge فون اور ٹیبلیٹ پر چلتا ہے، تاکہ آپ سائٹ پر یا کلائنٹ سے ملاقات کے دوران خریدار کا بیلنس دیکھ سکیں یا ادائیگی درج کر سکیں۔',
    },
    {
      id: 'investor',
      keywords: ['سرمایہ کار', 'منافع', 'حصہ', 'پارٹنر', 'شراکت دار', 'سرمایہ', 'investor', 'profit', 'share', 'partner', 'munafa', 'hissa', 'sarmaya', 'sarmaya kar', 'investment'],
      answer: 'آپ درج کرتے ہیں کہ ہر سرمایہ کار نے منصوبے میں کتنی رقم لگائی اور اس کا حصہ کتنا ہے۔ پھر Plot Ledge ہر سرمایہ کار کو اس کا منافع دکھاتا ہے، یوں تقسیم اسکرین پر ایک عدد ہوتی ہے، بحث نہیں۔',
    },
    {
      id: 'society',
      keywords: ['سوسائٹی', 'ہاؤسنگ', 'منصوبے', 'کئی منصوبے', 'برانچ', 'society', 'housing', 'enterprise', 'several projects', 'multiple projects', 'housing society', 'branch', 'branches', 'multi branch'],
      answer: 'جی ہاں۔ Enterprise پلان سوسائٹیوں اور ملٹی برانچ ڈیولپرز کے لیے بنایا گیا ہے جن کے کئی منصوبے اور بڑی ٹیمیں ہوتی ہیں۔ ہم سے WhatsApp پر بات کریں یا ڈیمو بک کریں، ہم آپ کے منصوبوں کے مطابق اسے ترتیب دے دیں گے۔',
    },
    {
      id: 'about',
      keywords: ['کیا ہے', 'کیا کرتا', 'کیا کرتے', 'بارے میں', 'تعارف', 'پلاٹ لیجر', 'what is', 'what does', 'kya hai', 'kya karta', 'kya karte', 'about', 'what do you do', 'plot ledge kya', 'crm kya'],
      answer: 'Plot Ledge پلاٹ اور پراپرٹی ڈیلرز کے لیے CRM ہے۔ یہ آپ کے پلاٹ، سودے، قسطیں، ادائیگیاں اور رسیدیں ایک جگہ رکھتا ہے، تاکہ آپ کو Excel شیٹس اور WhatsApp اسکرین شاٹس سے چیزیں جوڑنی نہ پڑیں۔',
    },
  ] as { id: string; keywords: string[]; answer: string }[],
}
export default chat
