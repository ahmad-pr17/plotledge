import type { Messages } from '@/i18n/messages'

const common: Messages['common'] = {
  language: 'Lingua',
  /** Label of the animated loader (route changes, the chat window opening). */
  loading: 'Caricamento',
  whatsappMessage: 'Buongiorno Plot Ledge, vorrei una demo per la mia attività di compravendita di lotti.',
  close: 'Chiudi',
  skipToContent: 'Vai al contenuto',
  logoLabel: 'Home di Plot Ledge',
  cookieSettings: 'Impostazioni cookie',
  nav: {
    ariaMain: 'Principale',
    ariaMobile: 'Mobile',
    features: 'Funzionalità',
    how: 'Come funziona',
    pricing: 'Prezzi',
    faq: 'FAQ',
    openMenu: 'Apri il menu',
    closeMenu: 'Chiudi il menu',
  },
  header: {
    login: 'Accedi',
    signup: 'Registrati gratis',
    demo: 'Prenota una demo',
    demoFree: 'Prenota una demo gratuita',
  },
  floating: {
    demo: 'Prenota una demo gratuita',
    whatsapp: 'Scrivici su WhatsApp',
  },
  status: {
    paid: 'Pagata',
    pending: 'In attesa',
    overdue: 'Scaduta',
  },
  footer: {
    tagline: 'Software di gestione dei lotti per agenti immobiliari e lottizzazioni in Pakistan.',
    whatsapp: 'Scrivici su WhatsApp',
    city: 'Lahore, Pakistan',
    copyright: '© {year} Plot Ledge. Tutti i diritti riservati.',
    privacyShort: 'Privacy',
    termsShort: 'Termini',
    product: { heading: 'Prodotto', features: 'Funzionalità', how: 'Come funziona', pricing: 'Prezzi', faq: 'FAQ' },
    company: { heading: 'Azienda', contact: 'Contatti', guides: 'Guide' },
    start: { heading: 'Inizia', demo: 'Prenota una demo gratuita', login: 'Accedi al CRM' },
    legal: { heading: 'Note legali', privacy: 'Informativa sulla privacy', cookies: 'Cookie policy', refund: 'Politica di rimborso', terms: 'Termini di servizio', security: 'Sicurezza', all: 'Tutti i documenti legali' },
  },
  cookieBanner: {
    title: 'Cookie e statistiche',
    body: 'Vorremmo usare i cookie di Google Analytics per contare le visite e capire quali pagine sono utili. Non viene caricato nulla finché non scegli, e il sito funziona allo stesso modo in entrambi i casi. <link>Leggi la cookie policy</link>.',
    accept: 'Accetta le statistiche',
    reject: 'Rifiuta le statistiche',
  },
}
export default common
