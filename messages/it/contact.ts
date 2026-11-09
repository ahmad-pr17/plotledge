import type { Messages } from '@/i18n/messages'

const contact: Messages['contact'] = {
  meta: {
    title: 'Contatti e prenotazione demo',
    description: 'Prenota una demo gratuita di Plot Ledge, il software di gestione dei lotti per agenti immobiliari. Invia un messaggio o scrivici su WhatsApp.',
  },
  eyebrow: 'Contatti',
  title: 'Prenota una demo gratuita',
  lead: 'Dicci quanti lotti gestisci e in una breve chiamata ti mostreremo rate, ricevute e report.',
  aside: {
    label: 'Altri modi per contattarci',
    chatTitle: 'Preferisci scrivere?',
    whatsapp: 'Scrivici su WhatsApp',
    stepsTitle: 'Cosa succede durante la demo',
    enterprise: 'Lottizzazione o più progetti? Faccelo sapere e ti illustreremo il piano Enterprise.',
  },
  steps: [
    'Ti chiediamo come tieni traccia oggi di lotti e rate.',
    'Vedi come lavorano insieme lotti, trattative, rate e ricevute.',
    'Se vuoi provarlo con i tuoi dati, possiamo attivare una prova di 15 giorni.',
  ],
  plotOptions: ['Meno di 25', 'Da 25 a 100', 'Da 100 a 500', 'Più di 500'],
  form: {
    successTitle: 'Richiesta ricevuta',
    success: 'Grazie. Ti contatteremo al numero che ci hai indicato.',
    continueWhatsApp: 'Continua su WhatsApp',
    whatsappFollowup: 'Buongiorno Plot Ledge, ho appena inviato una richiesta di demo dal sito.',
    failed: 'Al momento non siamo riusciti a inviare la richiesta. Scrivici su WhatsApp.',
    messageWhatsApp: 'Scrivici su WhatsApp',
    honeypot: 'Sito web',
    name: 'Il tuo nome',
    phone: 'Numero di telefono o WhatsApp',
    company: 'Azienda o lottizzazione',
    optional: '(facoltativo)',
    plots: 'Quanti lotti gestisci?',
    choose: 'Scegli un’opzione',
    submit: 'Prenota una demo gratuita',
    sending: 'Invio in corso',
    privacy: 'Usiamo i tuoi dati solo per contattarti riguardo a Plot Ledge.',
    errors: {
      name: 'Inserisci il tuo nome.',
      phone: 'Inserisci un numero di telefono di 10-15 cifre.',
      plots: 'Seleziona quanti lotti gestisci.',
    },
  },
}
export default contact
