import type { Messages } from '@/i18n/messages'
const hero: Messages['hero'] = {
  eyebrow: 'برنامج إدارة قطع الأراضي للوسطاء العقاريين',
  title: {
    words: ['كل', 'قطعة.', 'كل', 'قسط.', 'وكل', 'روبية'],
    tail: 'تحت المتابعة.',
  },
  lead: 'Plot Ledge نظام CRM للوسطاء العقاريين في باكستان. يستبدل جداول Excel ولقطات شاشة WhatsApp بسجل واضح واحد لقطع الأراضي والأقساط والإيصالات.',
  cta: {
    primary: 'احجز عرضًا تجريبيًا مجانيًا',
    secondary: 'شاهد كيف يعمل',
    whatsapp: 'تحدث معنا عبر WhatsApp',
  },
  trust: ['تجربة مجانية لمدة 15 يومًا', 'لا حاجة إلى دفع', 'مساعدة في الإعداد'],
  preview: {
    title: 'نظرة عامة',
    live: 'مباشر',
    millionShort: ' م',
    kpis: {
      sales: 'إجمالي المبيعات',
      received: 'المبالغ المستلمة',
      outstanding: 'المبالغ المتبقية',
    },
    collections: 'التحصيلات',
    collectionsRange: 'من يناير إلى يوليو',
    collectionsChartLabel: 'ارتفاع التحصيلات من يناير إلى يوليو',
    months: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو'],
    recentPayments: 'أحدث الدفعات',
    plotLabel: 'القطعة {plot}',
    status: {
      Paid: 'مدفوع',
      Pending: 'قيد الانتظار',
      Overdue: 'متأخر',
    },
    events: {
      paymentReceived: { title: 'تم استلام دفعة', sub: '{amount} للقطعة {plot}' },
      receiptIssued: { title: 'تم إصدار إيصال' },
      plotBooked: { title: 'تم حجز القطعة {plot}', sub: 'تم تسجيل الدفعة المقدمة' },
    },
    receiptIssued: 'تم إصدار إيصال',
    overdueNotice: '{count} أقساط متأخرة',
  },
}
export default hero
