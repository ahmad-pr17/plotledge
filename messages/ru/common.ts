import type { Messages } from '@/i18n/messages'

const common: Messages['common'] = {
  language: 'Язык',
  whatsappMessage: 'Здравствуйте, Plot Ledge! Хочу заказать демонстрацию для моего бизнеса с участками.',
  close: 'Закрыть',
  skipToContent: 'Перейти к содержимому',
  logoLabel: 'Plot Ledge: на главную',
  cookieSettings: 'Настройки cookie',
  nav: {
    ariaMain: 'Основное меню',
    ariaMobile: 'Мобильное меню',
    features: 'Возможности',
    how: 'Как это работает',
    pricing: 'Тарифы',
    faq: 'Вопросы',
    openMenu: 'Открыть меню',
    closeMenu: 'Закрыть меню',
  },
  header: {
    login: 'Войти',
    signup: 'Начать бесплатно',
    demo: 'Заказать демо',
    demoFree: 'Бесплатная демонстрация',
  },
  floating: {
    demo: 'Бесплатная демонстрация',
    whatsapp: 'Написать в WhatsApp',
  },
  status: {
    paid: 'Оплачено',
    pending: 'Ожидается',
    overdue: 'Просрочено',
  },
  footer: {
    tagline: 'Программа для учёта участков для риелторов и жилых проектов в Пакистане.',
    whatsapp: 'Написать в WhatsApp',
    city: 'Лахор, Пакистан',
    copyright: '© {year} Plot Ledge. Все права защищены.',
    privacyShort: 'Конфиденциальность',
    termsShort: 'Условия',
    product: { heading: 'Продукт', features: 'Возможности', how: 'Как это работает', pricing: 'Тарифы', faq: 'Вопросы' },
    company: { heading: 'Компания', contact: 'Контакты', guides: 'Руководства' },
    start: { heading: 'Начать', demo: 'Бесплатная демонстрация', login: 'Войти в CRM' },
    legal: { heading: 'Правовая информация', privacy: 'Политика конфиденциальности', cookies: 'Политика cookie', refund: 'Политика возврата', terms: 'Условия использования' },
  },
  cookieBanner: {
    title: 'Cookie и аналитика',
    body: 'Мы хотели бы использовать cookie Google Analytics, чтобы считать посещения и понимать, какие страницы полезны. Пока вы не сделаете выбор, ничего не загружается, а сайт работает одинаково в обоих случаях. <link>Читать политику cookie</link>.',
    accept: 'Принять аналитику',
    reject: 'Отклонить аналитику',
  },
}
export default common
