import type { Messages } from '@/i18n/messages'

const how: Messages['how'] = {
  eyebrow: '使用流程',
  title: '三步走，从第一块地块到最后一期分期付款。',
  description: '设置一次即可。之后每笔付款只需录入一条。',
  steps: [
    { title: '添加地块', desc: '录入每块地块的编号、面积和价格，并标记为可售、已预订或已售出。' },
    { title: '记录交易', desc: '选择买家，设定售价和首付款，并选择分期付款计划。' },
    { title: '登记每笔付款', desc: '每期款项到账后立即记录，附上付款凭证，并开具收据。' },
  ],
}
export default how
