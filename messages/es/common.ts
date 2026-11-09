import type { Messages } from '@/i18n/messages'

const common: Messages['common'] = {
  language: 'Idioma',
  /** Label of the animated loader (route changes, the chat window opening). */
  loading: 'Cargando',
  whatsappMessage: 'Hola Plot Ledge, me gustaría una demo para mi negocio de lotes.',
  close: 'Cerrar',
  skipToContent: 'Ir al contenido',
  logoLabel: 'Inicio de Plot Ledge',
  cookieSettings: 'Configuración de cookies',
  nav: {
    ariaMain: 'Principal',
    ariaMobile: 'Móvil',
    features: 'Funciones',
    how: 'Cómo funciona',
    pricing: 'Precios',
    faq: 'Preguntas frecuentes',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
  },
  header: {
    login: 'Iniciar sesión',
    signup: 'Regístrese gratis',
    demo: 'Agendar una demo',
    demoFree: 'Agendar una demo gratuita',
  },
  floating: {
    demo: 'Agendar una demo gratuita',
    whatsapp: 'Chatear por WhatsApp',
  },
  status: {
    paid: 'Pagado',
    pending: 'Pendiente',
    overdue: 'Vencido',
  },
  footer: {
    tagline: 'Software de gestión de lotes para agentes inmobiliarios y fraccionamientos en Pakistán.',
    whatsapp: 'Chatear por WhatsApp',
    city: 'Lahore, Pakistán',
    copyright: '© {year} Plot Ledge. Todos los derechos reservados.',
    privacyShort: 'Privacidad',
    termsShort: 'Términos',
    product: { heading: 'Producto', features: 'Funciones', how: 'Cómo funciona', pricing: 'Precios', faq: 'Preguntas frecuentes' },
    company: { heading: 'Empresa', contact: 'Contacto', guides: 'Guías' },
    start: { heading: 'Comience ahora', demo: 'Agendar una demo gratuita', login: 'Iniciar sesión en el CRM' },
    legal: { heading: 'Legal', privacy: 'Aviso de privacidad', cookies: 'Política de cookies', refund: 'Política de reembolsos', terms: 'Términos de uso' },
  },
  cookieBanner: {
    title: 'Cookies y analítica',
    body: 'Nos gustaría usar cookies de Google Analytics para contar las visitas y ver qué páginas son útiles. No se carga nada hasta que usted elija, y el sitio funciona igual en ambos casos. <link>Lea la política de cookies</link>.',
    accept: 'Aceptar analítica',
    reject: 'Rechazar analítica',
  },
}
export default common
