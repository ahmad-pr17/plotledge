import type { Messages } from '@/i18n/messages'

const how: Messages['how'] = {
  eyebrow: 'Come funziona',
  title: 'Tre passaggi, dal primo lotto all’ultima rata.',
  description: 'Lo imposti una volta. Poi ogni pagamento è una sola registrazione.',
  steps: [
    { title: 'Aggiungi i tuoi lotti', desc: 'Inserisci numero, superficie e prezzo di ogni lotto, poi segnalo come disponibile, prenotato o venduto.' },
    { title: 'Registra la trattativa', desc: 'Scegli l’acquirente, imposta prezzo di vendita e anticipo e seleziona il piano di rate.' },
    { title: 'Registra ogni pagamento', desc: 'Annota ogni rata appena arriva, allega la distinta di versamento ed emetti una ricevuta.' },
  ],
}
export default how
