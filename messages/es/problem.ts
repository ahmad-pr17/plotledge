import type { Messages } from '@/i18n/messages'

const problem: Messages['problem'] = {
  eyebrow: 'Por qué Plot Ledge',
  title: 'De archivos dispersos a un solo libro claro.',
  description: 'Cuando los registros están en cinco lugares, nadie sabe cuánto ha pagado un comprador. Plot Ledge guarda en un solo lugar toda la historia de cada expediente.',
  messy: {
    heading: 'El caos de Excel y WhatsApp',
    rows: [
      ['Ayesha A104', '85000??', 'jul?'],
      ['hamza b107', '42,500', ''],
      ['C-103 mehwish', '1.2', 'pagó en efectivo'],
      ['usman E102', '', 'llamarlo'],
    ],
    quote: '“¿En qué mes pagó?” Subir 400 mensajes y esperar que el comprobante siga ahí.',
  },
  clear: {
    heading: 'Un solo libro claro',
    tableCaption: 'Mensualidades con su estado',
    columns: { plot: 'Lote', amount: 'Importe', status: 'Estado' },
    status: { Paid: 'Pagado', Pending: 'Pendiente', Overdue: 'Vencido' },
    receiptIssued: 'Recibo emitido',
    note: 'Cada pago queda vinculado a su comprador, a su comprobante y a su recibo. Las mensualidades vencidas aparecen solas.',
  },
}
export default problem
