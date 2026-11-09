import type { Messages } from '@/i18n/messages'

const problem: Messages['problem'] = {
  eyebrow: 'Perché Plot Ledge',
  title: 'Da file sparsi a un unico registro chiaro.',
  description: 'Quando i dati sono in cinque posti diversi, nessuno sa dire quanto abbia pagato un acquirente. Plot Ledge tiene tutta la storia di ogni pratica in un unico posto.',
  messy: {
    heading: 'Il caos di Excel e WhatsApp',
    rows: [
      ['Ayesha A104', '85000??', 'jul?'],
      ['hamza b107', '42,500', ''],
      ['C-103 mehwish', '1.2', 'paid cash'],
      ['usman E102', '', 'call him'],
    ],
    quote: '"In che mese ha pagato?" Scorri 400 messaggi e spera che la distinta ci sia ancora.',
  },
  clear: {
    heading: 'Un unico registro chiaro',
    tableCaption: 'Rate con il relativo stato',
    columns: { plot: 'Lotto', amount: 'Importo', status: 'Stato' },
    status: { Paid: 'Pagata', Pending: 'In attesa', Overdue: 'Scaduta' },
    receiptIssued: 'Ricevuta emessa',
    note: 'Ogni pagamento è collegato al suo acquirente, alla sua distinta di versamento e alla sua ricevuta. Le rate scadute emergono da sole.',
  },
}
export default problem
