import type { Messages } from '@/i18n/messages'

const features: Messages['features'] = {
  eyebrow: 'Cosa fa',
  title: 'Tutto ciò che serve a una trattativa sui lotti, in un unico posto.',
  description: 'Dalla prima prenotazione all’ultima rata, ogni passaggio viene registrato una sola volta. È un software di gestione dei lotti pensato per il modo in cui gli agenti lavorano davvero.',
  items: [
    { title: 'Inventario dei lotti', desc: 'Ogni lotto con numero, superficie e prezzo. Vedi cosa è disponibile, prenotato o venduto senza aprire un foglio.' },
    { title: 'Trattative e rate', desc: 'Imposta una volta sola prezzo di vendita, anticipo e piano. Vedi cosa è stato pagato e qual è la prossima scadenza.' },
    { title: 'Pagamenti e ricevute', desc: 'Registra ogni pagamento nella sua trattativa ed emetti una ricevuta con un proprio ID univoco.' },
    { title: 'Distinte di versamento', desc: 'Conserva il riferimento della distinta bancaria insieme al pagamento a cui appartiene.' },
    { title: 'Investitori e ripartizione degli utili', desc: 'Registra quanto ha investito ciascun investitore e consulta la sua quota di utile.' },
    { title: 'Report ed esportazioni', desc: 'Stampa o esporta un report quando un socio, un investitore o il tuo commercialista chiede a che punto è un progetto.' },
  ],
  visuals: {
    paid: 'Pagata',
    exportFormats: ['PDF', 'Excel', 'Stampa'],
  },
}
export default features
