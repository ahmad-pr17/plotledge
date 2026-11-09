import type { Messages } from '@/i18n/messages'

const chat: Messages['chat'] = {
  launcher: {
    open: '与 Plot Ledge 助手聊天',
    close: '关闭与 Plot Ledge 助手的聊天',
    teaser: '对 Plot Ledge 有疑问？问我吧。',
    dismiss: '忽略',
  },
  window: {
    title: 'Plot Ledge 助手',
    subtitle: 'AI 助手',
    onlineSr: '在线。',
    options: '聊天选项',
    newChat: '新对话',
    minimize: '最小化聊天',
    close: '关闭聊天',
    conversation: '对话',
    inputLabel: '输入您的问题',
    inputPlaceholder: '输入您的问题',
    send: '发送消息',
    disclaimer: 'AI 助手，回答可能不够准确。',
    privacy: '隐私',
    typing: 'Plot Ledge 助手正在输入',
  },
  greeting: '您好！我是 Plot Ledge 助手，可以解答有关地块、分期付款、收据和价格的问题。您想了解什么？',
  quickRepliesLabel: '推荐问题',
  quickReplies: ['Plot Ledge 有什么功能？', '价格', '预约演示', '可以导入 Excel 数据吗？'],
  actions: {
    whatsapp: 'WhatsApp 咨询',
    crm: '打开 CRM',
    pricing: '查看价格',
    demo: '预约免费演示',
  },
  rate: {
    label: '为这条回复打分',
    up: '回复有帮助',
    down: '回复没有帮助',
  },
  whatsapp: {
    withTopics: '您好，Plot Ledge，我刚在你们网站上聊天，问了这些问题：{topics}。我想和团队聊聊。',
    plain: '您好，Plot Ledge，我刚在你们网站上聊天，想和团队聊聊。',
  },
  errors: {
    rateLimit: '您暂时已达到消息数量上限。请几分钟后再试，或通过 WhatsApp 联系团队。',
    failure: '我现在遇到了一些问题。您可以通过 WhatsApp 联系团队，或预约演示。',
    redacted: '该消息疑似包含隐私数据，已被删除。',
  },
  sensitiveReply: '请不要在此聊天中提供银行信息、银行卡号、密码或 CNIC 身份证号码。我已删除该消息。我仍然可以回答有关 Plot Ledge 的问题。',
  lead: {
    intro: '留下您的联系方式，团队会与您联系。',
    name: '您的姓名',
    phone: '电话或 WhatsApp 号码',
    plots: '您管理多少块地块？',
    choose: '请选择',
    city: '城市',
    optional: '（选填）',
    submit: '提交我的信息',
    sending: '发送中',
    note: '我们仅会使用这些信息就 Plot Ledge 与您联系。',
    done: '谢谢。团队会尽快通过您留下的号码联系您。',
    failed: '暂时无法发送。',
    whatsapp: '通过 WhatsApp 联系我们',
    errors: {
      name: '请输入您的姓名。',
      phone: '请输入 10 至 15 位数字的号码。',
      plots: '请选择一项。',
    },
  },
  offline: [
    {
      id: 'pricing',
      keywords: ['价格', '价钱', '多少钱', '收费', '费用', '套餐', '报价', '免费', '试用', 'price', 'pricing', 'cost', 'plan', 'fee'],
      answer: 'Silver 套餐每月 {silver} 起。Gold 套餐每月 {gold}，按年付费可节省 {pct}%（免两个月费用）。Enterprise 套餐面向多分支机构的开发商、住宅项目和大型集团报价，请联系我们。',
    },
    {
      id: 'import',
      keywords: ['导入', '迁移', '表格', '旧数据', '现有数据', '原有数据', '录入数据', 'excel', 'import', 'sheet', 'data'],
      answer: '可以，我们可以协助您从 Excel 导入现有的地块、买家和付款记录。把表格发给我们，如果有需要先整理的地方，比如一行里有两位买家，我们会告诉您。',
    },
    {
      id: 'roles',
      keywords: ['权限', '角色', '账号', '登录', '所有者', '会计', '销售员', '谁能看', '员工', 'role', 'login', 'access', 'permission', 'owner'],
      answer: '每个人都有自己的账号。所有者可以查看全部内容，包括销售、利润和投资人。会计负责付款、回单、收据和报表。销售员可以新增交易，查询地块和买家，但不能修改或删除交易。',
    },
    {
      id: 'receipts',
      keywords: ['收据', '回单', '凭证', '付款凭证', '发票', '单据', '开收据', 'receipt', 'slip', 'payment proof'],
      answer: '您记录的每笔付款都会生成一张带唯一编号的收据。您可以把银行回单编号附在同一笔付款上，这样收据、回单和交易就始终关联在一起。',
    },
    {
      id: 'mobile',
      keywords: ['手机', '移动', '平板', '苹果', '安卓', '应用', 'app', 'phone', 'mobile', 'tablet'],
      answer: '可以。Plot Ledge 支持手机和平板，您在项目现场或与客户会面时，也能查看买家余额或记录付款。',
    },
    {
      id: 'investor',
      keywords: ['投资人', '投资者', '投资', '利润', '分成', '分红', '合伙', '合伙人', 'investor', 'profit', 'share', 'partner'],
      answer: '您记录每位投资人在项目中投入的金额及其持有的份额。Plot Ledge 随后会向每位投资人显示属于他们的利润，分成就是屏幕上的一个数字，不必再争论。',
    },
    {
      id: 'society',
      keywords: ['小区', '住宅项目', '社区', '开发商', '多个项目', '多项目', '分支', '集团', 'society', 'housing', 'enterprise'],
      answer: '可以。Enterprise 套餐专为拥有多个项目和较大团队的住宅项目和多分支机构开发商设计。请通过 WhatsApp 联系我们或预约演示，我们会围绕您的项目为您设置。',
    },
    {
      id: 'about',
      keywords: ['是什么', '什么是', '有什么功能', '功能', '做什么', '介绍', '干什么', '用途', 'what is', 'what does', 'about'],
      answer: 'Plot Ledge 是面向地块和地产经纪人的 CRM。它把您的地块、交易、分期付款、付款和收据集中在一处，让您不必再从 Excel 表格和 WhatsApp 截图中东拼西凑。',
    },
  ],
}
export default chat
