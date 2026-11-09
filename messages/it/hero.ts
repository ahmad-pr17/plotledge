import type { Messages } from '@/i18n/messages'

const hero: Messages['hero'] = {
  eyebrow: 'Software di gestione dei lotti per agenti immobiliari',
  title: {
    words: ['Ogni', 'lotto.', 'Ogni', 'rata.', 'Ogni', 'rupia,'],
    tail: 'sotto controllo.',
  },
  lead: 'Plot Ledge è un CRM per agenti immobiliari in Pakistan. Sostituisce fogli Excel e screenshot di WhatsApp con un unico registro chiaro di lotti, rate e ricevute.',
  cta: {
    primary: 'Prenota una demo gratuita',
    secondary: 'Scopri come funziona',
    whatsapp: 'Scrivici su WhatsApp',
  },
  trust: ['15 giorni di prova gratuita', 'Nessun pagamento richiesto', 'Aiuto per l’avvio'],
  preview: {
    title: 'Panoramica',
    live: 'In diretta',
    millionShort: ' M',
    kpis: {
      sales: 'Vendite totali',
      received: 'Incassato',
      outstanding: 'Da incassare',
    },
    collections: 'Incassi',
    collectionsRange: 'Da gennaio a luglio',
    collectionsChartLabel: 'Incassi in crescita da gennaio a luglio',
    months: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug'],
    recentPayments: 'Pagamenti recenti',
    plotLabel: 'Lotto {plot}',
    status: {
      Paid: 'Pagata',
      Pending: 'In attesa',
      Overdue: 'Scaduta',
    },
    events: {
      paymentReceived: { title: 'Pagamento ricevuto', sub: '{amount} per {plot}' },
      receiptIssued: { title: 'Ricevuta emessa' },
      plotBooked: { title: 'Lotto {plot} prenotato', sub: 'Anticipo registrato' },
    },
    receiptIssued: 'Ricevuta emessa',
    overdueNotice: '{count} rate scadute',
  },
}
export default hero
