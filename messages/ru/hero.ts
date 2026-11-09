import type { Messages } from '@/i18n/messages'

const hero: Messages['hero'] = {
  eyebrow: 'Программа для учёта участков для риелторов',
  title: {
    words: ['Каждый', 'участок.', 'Каждый', 'платёж.', 'Каждая', 'рупия'],
    tail: 'на учёте.',
  },
  lead: 'Plot Ledge — это CRM для риелторов в Пакистане. Она заменяет таблицы Excel и скриншоты из WhatsApp единой понятной записью ваших участков, рассрочек и квитанций.',
  cta: {
    primary: 'Бесплатная демонстрация',
    secondary: 'Как это работает',
    whatsapp: 'Написать в WhatsApp',
  },
  trust: ['15 дней бесплатно', 'Оплата не нужна', 'Помощь с настройкой'],
  preview: {
    title: 'Обзор',
    live: 'Онлайн',
    millionShort: ' млн',
    kpis: {
      sales: 'Всего продаж',
      received: 'Получено',
      outstanding: 'К получению',
    },
    collections: 'Поступления',
    collectionsRange: 'С января по июль',
    collectionsChartLabel: 'Рост поступлений с января по июль',
    months: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл'],
    recentPayments: 'Последние платежи',
    plotLabel: 'Участок {plot}',
    status: {
      Paid: 'Оплачено',
      Pending: 'Ожидается',
      Overdue: 'Просрочено',
    },
    events: {
      paymentReceived: { title: 'Платёж получен', sub: '{amount}, участок {plot}' },
      receiptIssued: { title: 'Квитанция выдана' },
      plotBooked: { title: 'Участок {plot} забронирован', sub: 'Первоначальный взнос записан' },
    },
    receiptIssued: 'Квитанция выдана',
    overdueNotice: 'Просрочено платежей: {count}',
  },
}
export default hero
