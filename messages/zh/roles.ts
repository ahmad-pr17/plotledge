import type { Messages } from '@/i18n/messages'

const roles: Messages['roles'] = {
  eyebrow: '您的团队',
  title: '同一份记录，不同的职责。',
  description: '所有者、会计和销售员各有自己的账号，只看到工作所需的内容。',
  tablistLabel: '团队角色',
  allowed: '（允许）',
  notAllowed: '（不允许）',
  items: {
    owner: {
      name: '所有者',
      heading: '掌握业务全貌。',
      description: '销售总额、已收款、未收款，以及每笔交易的利润。投资人和经纪人的往来余额，一键即达。',
      panel: { title: '本月', value: 'Rs {amount} 百万', caption: '7 月份 42 笔进行中的交易共收款', progressLabel: '应收款的 74%' },
      permissions: [
        '销售、已收款与未收款',
        '每笔交易的利润',
        '投资人和经纪人的往来余额',
        '全部台账与报表',
        '管理团队账号',
      ],
    },
    accountant: {
      name: '会计',
      heading: '让每笔付款都对上回单。',
      description: '对照银行回单核对付款，理清各类台账，自行打印报表，无需向任何人要数据。',
      panel: { title: '本周', value: '18 张回单', caption: '等待与付款匹配', progressLabel: '已匹配 62%' },
      permissions: [
        '录入付款和回单编号',
        '开具带唯一编号的收据',
        '交易报表与导出',
        '投资人利润分成',
        '管理团队账号',
      ],
    },
    agent: {
      name: '销售员',
      heading: '录入交易，跟进买家。',
      description: '销售员可以新增交易，并查询地块和买家。修改和删除交易的权限只属于所有者和会计。',
      panel: { title: '在售库存', value: '{count} 块地块', caption: '仍可出售', progressLabel: '已售出地块的 {pct}%' },
      permissions: [
        '查询可售地块',
        '查看买家信息',
        '新增交易',
        '修改或删除交易',
        '查看利润和投资人数据',
      ],
    },
  },
}
export default roles
