import type { Messages } from '@/i18n/messages'

const calculator: Messages['calculator'] = {
  eyebrow: '节省时间计算器',
  title: '目前的记账管理，让您付出了多少？',
  description: '拖动滑块，调整为您自己的业务情况。结果基于您输入的数字。',
  sliders: {
    hours: { label: '您每周花在记账管理上的小时数', unit: '小时' },
    share: { label: '您希望节省其中多少时间？', unit: '%' },
    rate: { label: '您的一小时价值多少？' },
  },
  results: {
    hoursUnit: '小时',
    perMonth: '每月节省',
    perYear: '每年节省',
    value: '每年的时间价值',
  },
  cta: '预约免费演示',
  disclaimer: '这只是对您所填数字的简单计算，并非效果承诺。实际能节省多少时间，取决于您目前的工作方式。',
}
export default calculator
