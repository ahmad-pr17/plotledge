import type { Messages } from '@/i18n/messages'

const features: Messages['features'] = {
  eyebrow: '功能一览',
  title: '一笔地块交易所需的一切，尽在一处。',
  description: '从第一次预订到最后一期分期付款，每一步只需记录一次。这是围绕经纪人的实际工作方式打造的地块管理软件。',
  items: [
    { title: '地块库存', desc: '每块地块的编号、面积和价格一目了然。无需打开表格，就能知道哪些可售、已预订或已售出。' },
    { title: '交易与分期付款', desc: '售价、首付款和付款计划只需设置一次。已付多少、下一笔何时到期，随时可查。' },
    { title: '付款与收据', desc: '将每笔付款记在对应的交易下，并开具带唯一编号的收据。' },
    { title: '付款凭证', desc: '把银行回单编号与对应的付款放在一起保存。' },
    { title: '投资人与利润分成', desc: '记录每位投资人投入了多少，并查看其应得的利润份额。' },
    { title: '报表与导出', desc: '当合伙人、投资人或会计询问项目进展时，随时打印或导出报表。' },
  ],
  visuals: {
    paid: '已付',
    exportFormats: ['PDF', 'Excel', '打印'],
  },
}
export default features
