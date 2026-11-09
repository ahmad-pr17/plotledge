import type { Messages } from '@/i18n/messages'
const problem: Messages['problem'] = {
  eyebrow: 'لماذا Plot Ledge',
  title: 'من ملفات متفرقة إلى سجل واحد واضح.',
  description: 'عندما تتوزع السجلات على خمسة أماكن، لا يستطيع أحد أن يقول كم دفع المشتري. يحتفظ Plot Ledge بقصة كل ملف كاملة في مكان واحد.',
  messy: {
    heading: 'فوضى Excel وWhatsApp',
    rows: [
      ['Ayesha A104', '85000??', 'jul?'],
      ['hamza b107', '42,500', ''],
      ['C-103 mehwish', '1.2', 'paid cash'],
      ['usman E102', '', 'call him'],
    ],
    quote: '"في أي شهر دفع؟" تمرّر 400 رسالة إلى الأعلى، وتأمل أن تكون القسيمة ما زالت موجودة.',
  },
  clear: {
    heading: 'سجل واحد واضح',
    tableCaption: 'الأقساط وحالتها',
    columns: { plot: 'القطعة', amount: 'المبلغ', status: 'الحالة' },
    status: { Paid: 'مدفوع', Pending: 'قيد الانتظار', Overdue: 'متأخر' },
    receiptIssued: 'تم إصدار إيصال',
    note: 'ترتبط كل دفعة بمشتريها وقسيمتها وإيصالها. وتظهر الأقساط المتأخرة تلقائيًا.',
  },
}
export default problem
