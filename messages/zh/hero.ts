import type { Messages } from '@/i18n/messages'

const hero: Messages['hero'] = {
  eyebrow: '为地产经纪人打造的地块管理软件',
  // 标题逐项淡入，各项之间由代码加空格，所以这里用较长的短语。
  title: {
    words: ['每一块地块，', '每一期分期付款，', '每一笔款项，'],
    tail: '全程可查。',
  },
  lead: 'Plot Ledge 是面向巴基斯坦地产经纪人的 CRM。它用一份清晰的记录取代 Excel 表格和 WhatsApp 截图，集中管理您的地块、分期付款和收据。',
  cta: {
    primary: '预约免费演示',
    secondary: '了解使用流程',
    whatsapp: 'WhatsApp 咨询',
  },
  trust: ['15 天免费试用', '无需付款', '协助设置'],
  preview: {
    title: '概览',
    live: '实时',
    millionShort: ' 百万',
    kpis: {
      sales: '销售总额',
      received: '已收款',
      outstanding: '未收款',
    },
    collections: '回款',
    collectionsRange: '1 月至 7 月',
    collectionsChartLabel: '1 月至 7 月回款持续上升',
    months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
    recentPayments: '最近付款',
    plotLabel: '地块 {plot}',
    status: {
      Paid: '已付',
      Pending: '待付',
      Overdue: '逾期',
    },
    events: {
      paymentReceived: { title: '已收到付款', sub: '{plot}：{amount}' },
      receiptIssued: { title: '已开具收据' },
      plotBooked: { title: '地块 {plot} 已预订', sub: '已记录首付款' },
    },
    receiptIssued: '已开具收据',
    overdueNotice: '{count} 期分期付款逾期',
  },
}
export default hero
