import type { Messages } from '@/i18n/messages'

const contact: Messages['contact'] = {
  meta: {
    title: '联系我们，预约演示',
    description: '预约 Plot Ledge 免费演示，这是面向地产经纪人的地块管理软件。您可以留言，也可以通过 WhatsApp 咨询。',
  },
  eyebrow: '联系我们',
  title: '预约免费演示',
  lead: '告诉我们您管理多少块地块，我们会通过一次简短通话，为您演示分期付款、收据和报表。',
  aside: {
    label: '其他联系方式',
    chatTitle: '更喜欢聊天？',
    whatsapp: 'WhatsApp 咨询',
    stepsTitle: '演示的流程',
    enterprise: '住宅项目或有多个项目？请告诉我们，我们会为您介绍 Enterprise 套餐。',
  },
  steps: [
    '我们会了解您目前如何管理地块和分期付款。',
    '您将看到地块、交易、分期付款和收据如何协同运作。',
    '如果您想用自己的数据试用，我们可以为您开通 15 天试用。',
  ],
  plotOptions: ['少于 25 块', '25 至 100 块', '100 至 500 块', '500 块以上'],
  form: {
    successTitle: '已收到您的申请',
    success: '谢谢。我们会通过您留下的号码联系您。',
    continueWhatsApp: '继续使用 WhatsApp',
    whatsappFollowup: '您好，Plot Ledge，我刚刚在网站上提交了演示申请。',
    failed: '暂时无法发送。请通过 WhatsApp 联系我们。',
    messageWhatsApp: '通过 WhatsApp 联系我们',
    honeypot: '网站',
    name: '您的姓名',
    phone: '电话或 WhatsApp 号码',
    company: '公司或住宅项目',
    optional: '（选填）',
    plots: '您管理多少块地块？',
    choose: '请选择',
    submit: '预约免费演示',
    sending: '发送中',
    privacy: '我们仅会使用您的信息就 Plot Ledge 与您联系。',
    errors: {
      name: '请输入您的姓名。',
      phone: '请输入 10 至 15 位数字的电话号码。',
      plots: '请选择您管理的地块数量。',
    },
  },
}
export default contact
