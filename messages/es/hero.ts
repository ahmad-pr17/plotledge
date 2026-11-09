import type { Messages } from '@/i18n/messages'

const hero: Messages['hero'] = {
  eyebrow: 'Software de gestión de lotes para agentes inmobiliarios',
  title: {
    words: ['Cada', 'lote.', 'Cada', 'mensualidad.', 'Cada', 'rupia,'],
    tail: 'bajo control.',
  },
  lead: 'Plot Ledge es un CRM para agentes inmobiliarios en Pakistán. Reemplaza las hojas de Excel y las capturas de WhatsApp con un registro claro de sus lotes, mensualidades y recibos.',
  cta: {
    primary: 'Agendar una demo gratuita',
    secondary: 'Vea cómo funciona',
    whatsapp: 'Chatear por WhatsApp',
  },
  trust: ['Prueba gratuita de 15 días', 'Sin necesidad de pago', 'Ayuda con la configuración'],
  preview: {
    title: 'Resumen',
    live: 'En vivo',
    millionShort: ' M',
    kpis: {
      sales: 'Ventas totales',
      received: 'Cobrado',
      outstanding: 'Por cobrar',
    },
    collections: 'Cobranza',
    collectionsRange: 'De enero a julio',
    collectionsChartLabel: 'Cobranza en aumento de enero a julio',
    months: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'],
    recentPayments: 'Pagos recientes',
    plotLabel: 'Lote {plot}',
    status: {
      Paid: 'Pagado',
      Pending: 'Pendiente',
      Overdue: 'Vencido',
    },
    events: {
      paymentReceived: { title: 'Pago recibido', sub: '{amount} por {plot}' },
      receiptIssued: { title: 'Recibo emitido' },
      plotBooked: { title: 'Lote {plot} apartado', sub: 'Enganche registrado' },
    },
    receiptIssued: 'Recibo emitido',
    overdueNotice: '{count} mensualidades vencidas',
  },
}
export default hero
