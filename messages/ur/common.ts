import type { Messages } from '@/i18n/messages'

const common: Messages['common'] = {
  language: 'زبان',
  /** Label of the animated loader (route changes, the chat window opening). */
  loading: 'لوڈ ہو رہا ہے',
  /** Pre-filled WhatsApp message. Use: whatsappLink(m.common.whatsappMessage). */
  whatsappMessage: 'السلام علیکم Plot Ledge، میں اپنے پلاٹ کے کاروبار کے لیے ڈیمو لینا چاہتا ہوں۔',
  close: 'بند کریں',
  skipToContent: 'مواد پر جائیں',
  logoLabel: 'Plot Ledge ہوم',
  cookieSettings: 'کوکی کی ترتیبات',
  nav: {
    ariaMain: 'مرکزی',
    ariaMobile: 'موبائل',
    features: 'خصوصیات',
    how: 'یہ کیسے کام کرتا ہے',
    pricing: 'قیمتیں',
    faq: 'عمومی سوالات',
    openMenu: 'مینو کھولیں',
    closeMenu: 'مینو بند کریں',
  },
  header: {
    login: 'لاگ ان',
    signup: 'مفت سائن اپ کریں',
    demo: 'ڈیمو بک کریں',
    demoFree: 'مفت ڈیمو بک کریں',
  },
  floating: {
    demo: 'مفت ڈیمو بک کریں',
    whatsapp: 'WhatsApp پر چیٹ کریں',
  },
  status: {
    paid: 'ادا شدہ',
    pending: 'زیر التوا',
    overdue: 'واجب الادا',
  },
  footer: {
    tagline: 'پاکستان میں پراپرٹی ڈیلرز اور ہاؤسنگ سوسائٹیوں کے لیے پلاٹ مینجمنٹ سافٹ ویئر۔',
    whatsapp: 'WhatsApp پر چیٹ کریں',
    city: 'لاہور، پاکستان',
    copyright: '© {year} Plot Ledge۔ جملہ حقوق محفوظ ہیں۔',
    privacyShort: 'رازداری',
    termsShort: 'شرائط',
    product: { heading: 'پروڈکٹ', features: 'خصوصیات', how: 'یہ کیسے کام کرتا ہے', pricing: 'قیمتیں', faq: 'عمومی سوالات' },
    company: { heading: 'کمپنی', contact: 'رابطہ', guides: 'گائیڈز' },
    start: { heading: 'شروع کریں', demo: 'مفت ڈیمو بک کریں', login: 'CRM میں لاگ ان کریں' },
    legal: { heading: 'قانونی', privacy: 'رازداری کی پالیسی', cookies: 'کوکی پالیسی', refund: 'ری فنڈ پالیسی', terms: 'سروس کی شرائط' },
  },
  cookieBanner: {
    title: 'کوکیز اور اینالیٹکس',
    body: 'ہم وزٹس گننے اور یہ دیکھنے کے لیے Google Analytics کی کوکیز استعمال کرنا چاہتے ہیں کہ کون سے صفحات کارآمد ہیں۔ آپ کے انتخاب سے پہلے کچھ لوڈ نہیں ہوتا، اور سائٹ دونوں صورتوں میں یکساں کام کرتی ہے۔ <link>کوکی پالیسی پڑھیں</link>۔',
    accept: 'اینالیٹکس قبول کریں',
    reject: 'اینالیٹکس مسترد کریں',
  },
}
export default common
