import type { Messages } from '@/i18n/messages'

const calculator: Messages['calculator'] = {
  eyebrow: 'Calcolatore del risparmio',
  title: 'Quanto ti costa oggi tenere tutto sotto controllo?',
  description: 'Muovi i cursori in base alla tua attività. Il risultato usa i tuoi numeri.',
  sliders: {
    hours: { label: 'Ore a settimana che dedichi alla gestione dei dati', unit: 'h' },
    share: { label: 'Quanto di quel tempo vorresti risparmiare?', unit: '%' },
    rate: { label: 'Quanto vale una tua ora di lavoro?' },
  },
  results: {
    hoursUnit: 'h',
    perMonth: 'recuperate ogni mese',
    perYear: 'recuperate ogni anno',
    value: 'del tuo tempo ogni anno',
  },
  cta: 'Prenota una demo gratuita',
  disclaimer: 'Questo è un semplice calcolo sui numeri che hai inserito. Non è una promessa di risultati. Il tempo che risparmi dipende da come lavori oggi.',
}
export default calculator
