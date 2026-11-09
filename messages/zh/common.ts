import type { Messages } from '@/i18n/messages'

// 全站共用文字：导航、页脚、按钮、无障碍标签、Cookie 横幅。
const common: Messages['common'] = {
  language: '语言',
  /** Label of the animated loader (route changes, the chat window opening). */
  loading: '加载中',
  whatsappMessage: '您好，Plot Ledge，我想为我的地块业务预约一次演示。',
  close: '关闭',
  skipToContent: '跳到正文',
  logoLabel: 'Plot Ledge 首页',
  cookieSettings: 'Cookie 设置',
  nav: {
    ariaMain: '主导航',
    ariaMobile: '移动端导航',
    features: '功能',
    how: '使用流程',
    pricing: '价格',
    faq: '常见问题',
    openMenu: '打开菜单',
    closeMenu: '关闭菜单',
  },
  header: {
    login: '登录',
    signup: '免费注册',
    demo: '预约演示',
    demoFree: '预约免费演示',
  },
  floating: {
    demo: '预约免费演示',
    whatsapp: 'WhatsApp 咨询',
  },
  status: {
    paid: '已付',
    pending: '待付',
    overdue: '逾期',
  },
  footer: {
    tagline: '为巴基斯坦地产经纪人和住宅项目打造的地块管理软件。',
    whatsapp: 'WhatsApp 咨询',
    city: '巴基斯坦拉合尔',
    copyright: '© {year} Plot Ledge。保留所有权利。',
    privacyShort: '隐私',
    termsShort: '条款',
    product: { heading: '产品', features: '功能', how: '使用流程', pricing: '价格', faq: '常见问题' },
    company: { heading: '公司', contact: '联系我们', guides: '指南' },
    start: { heading: '开始使用', demo: '预约免费演示', login: '登录 CRM' },
    legal: { heading: '法律信息', privacy: '隐私政策', cookies: 'Cookie 政策', refund: '退款政策', terms: '服务条款', security: '安全', all: '全部法律文件' },
  },
  cookieBanner: {
    title: 'Cookie 与数据分析',
    body: '我们希望使用 Google Analytics Cookie 统计访问量，了解哪些页面对您有帮助。在您作出选择之前不会加载任何内容，无论您如何选择，网站的使用都不受影响。<link>阅读 Cookie 政策</link>。',
    accept: '接受分析',
    reject: '拒绝分析',
  },
}
export default common
