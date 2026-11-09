import type { Messages } from '@/i18n/messages'

const problem: Messages['problem'] = {
  eyebrow: '为什么选择 Plot Ledge',
  title: '从零散文件，到一本清晰的台账。',
  description: '当记录分散在五个地方，没人说得清买家到底付了多少。Plot Ledge 把每个档案的来龙去脉集中在一处。',
  messy: {
    heading: 'Excel 和 WhatsApp 的混乱',
    rows: [
      ['Ayesha A104', '85000??', 'jul?'],
      ['hamza b107', '42,500', ''],
      ['C-103 mehwish', '1.2', 'paid cash'],
      ['usman E102', '', 'call him'],
    ],
    quote: '“他是哪个月付的？”往上翻 400 条消息，还得祈祷付款凭证没被删掉。',
  },
  clear: {
    heading: '一本清晰的台账',
    tableCaption: '分期付款及其状态',
    columns: { plot: '地块', amount: '金额', status: '状态' },
    status: { Paid: '已付', Pending: '待付', Overdue: '逾期' },
    receiptIssued: '已开具收据',
    note: '每笔付款都关联到买家、付款凭证和收据。逾期的分期付款会自动显示出来。',
  },
}
export default problem
