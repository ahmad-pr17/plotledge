import type { Messages } from '@/i18n/messages'

const chat: Messages['chat'] = {
  launcher: {
    open: 'Chatta con Plot Ledge Assistant',
    close: 'Chiudi la chat con Plot Ledge Assistant',
    teaser: 'Domande su Plot Ledge? Chiedimi pure.',
    dismiss: 'Chiudi',
  },
  window: {
    title: 'Plot Ledge Assistant',
    subtitle: 'Assistente IA',
    onlineSr: 'Online. ',
    options: 'Opzioni della chat',
    newChat: 'Nuova chat',
    minimize: 'Riduci la chat',
    close: 'Chiudi la chat',
    conversation: 'Conversazione',
    inputLabel: 'Scrivi la tua domanda',
    inputPlaceholder: 'Scrivi la tua domanda',
    send: 'Invia messaggio',
    disclaimer: 'Assistente IA. Le risposte possono non essere perfette.',
    privacy: 'Privacy',
    typing: 'Plot Ledge Assistant sta scrivendo',
  },
  greeting: 'Assalam o Alaikum! Sono Plot Ledge Assistant. Posso rispondere a domande su lotti, rate, ricevute e prezzi. Cosa vorresti sapere?',
  quickRepliesLabel: 'Domande suggerite',
  quickReplies: ['Cosa fa Plot Ledge?', 'Prezzi', 'Prenota una demo', 'Posso importare i miei dati da Excel?'],
  actions: {
    whatsapp: 'Scrivici su WhatsApp',
    crm: 'Apri il CRM',
    pricing: 'Vedi i prezzi',
    demo: 'Prenota una demo gratuita',
  },
  rate: {
    label: 'Valuta questa risposta',
    up: 'Risposta utile',
    down: 'Risposta non utile',
  },
  whatsapp: {
    withTopics: 'Buongiorno Plot Ledge, stavo chattando sul vostro sito e ho chiesto informazioni su: {topics}. Vorrei parlare con il team.',
    plain: 'Buongiorno Plot Ledge, stavo chattando sul vostro sito. Vorrei parlare con il team.',
  },
  errors: {
    rateLimit: 'Per ora hai raggiunto il limite di messaggi. Riprova tra qualche minuto oppure scrivi al team su WhatsApp.',
    failure: 'Al momento ho qualche difficoltà. Puoi scrivere al team su WhatsApp o prenotare una demo.',
    redacted: 'Messaggio rimosso perché sembrava contenere dati privati.',
  },
  sensitiveReply: 'Ti chiedo di non condividere in questa chat dati bancari, numeri di carta, password o numeri CNIC. Ho rimosso quel messaggio. Posso comunque aiutarti con le domande su Plot Ledge.',
  lead: {
    intro: 'Lascia i tuoi dati e il team ti contatterà.',
    name: 'Il tuo nome',
    phone: 'Numero di telefono o WhatsApp',
    plots: 'Quanti lotti gestisci?',
    choose: 'Scegli un’opzione',
    city: 'Città',
    optional: '(facoltativo)',
    submit: 'Invia i miei dati',
    sending: 'Invio in corso',
    note: 'Useremo questi dati solo per contattarti riguardo a Plot Ledge.',
    done: 'Grazie. Il team ti contatterà presto al numero che hai indicato.',
    failed: 'Al momento non siamo riusciti a inviare i dati.',
    whatsapp: 'Scrivici su WhatsApp',
    errors: {
      name: 'Inserisci il tuo nome.',
      phone: 'Inserisci un numero di 10-15 cifre.',
      plots: 'Scegli un’opzione.',
    },
  },
  offline: [
    {
      id: 'pricing',
      keywords: ['prezzo', 'prezzi', 'costo', 'costi', 'quanto costa', 'piano', 'piani', 'abbonamento', 'tariffa', 'tariffe', 'canone', 'gratis', 'gratuito', 'price', 'pricing'],
      answer: 'I piani partono da {silver} al mese per Silver. Gold costa {gold} al mese e con il pagamento annuale risparmi il {pct}% (due mesi gratis). Enterprise ha un prezzo definito per sviluppatori con più filiali, lottizzazioni e gruppi più grandi, quindi contattaci.',
    },
    {
      id: 'import',
      keywords: ['excel', 'importare', 'importazione', 'import', 'foglio', 'fogli di calcolo', 'caricare i dati', 'trasferire i dati', 'migrazione', 'dati esistenti', 'sheet'],
      answer: 'Sì, possiamo aiutarti a caricare da Excel i tuoi lotti, acquirenti e pagamenti attuali. Inviaci il foglio e ti diremo se c’è qualcosa da sistemare prima, ad esempio due acquirenti sulla stessa riga.',
    },
    {
      id: 'roles',
      keywords: ['ruolo', 'ruoli', 'accesso', 'accessi', 'credenziali', 'login', 'titolare', 'contabile', 'agente', 'permessi', 'autorizzazioni', 'chi puo', 'chi può', 'owner', 'accountant'],
      answer: 'Ognuno ha le proprie credenziali di accesso. Il Titolare vede tutto, comprese vendite, utile e investitori. Il Contabile gestisce pagamenti, distinte, ricevute e report. Un Agente vendite può aggiungere trattative e consultare lotti e acquirenti, ma non può modificare o eliminare una trattativa.',
    },
    {
      id: 'receipts',
      keywords: ['ricevuta', 'ricevute', 'distinta', 'distinte', 'bonifico', 'prova di pagamento', 'giustificativo', 'quietanza', 'versamento', 'receipt', 'slip'],
      answer: 'Ogni pagamento che registri ottiene una ricevuta con un proprio ID univoco. Puoi allegare al pagamento il riferimento della distinta bancaria, così ricevuta, distinta e trattativa restano collegate.',
    },
    {
      id: 'mobile',
      keywords: ['telefono', 'cellulare', 'smartphone', 'mobile', 'tablet', 'app', 'applicazione', 'iphone', 'android', 'phone'],
      answer: 'Sì. Plot Ledge funziona su telefoni e tablet, quindi puoi controllare il saldo di un acquirente o registrare un pagamento dal cantiere o durante un incontro con un cliente.',
    },
    {
      id: 'investor',
      keywords: ['investitore', 'investitori', 'investimento', 'utile', 'utili', 'profitto', 'profitti', 'quota', 'quote', 'socio', 'soci', 'ripartizione', 'investor', 'profit'],
      answer: 'Registri quanto ogni investitore ha messo in un progetto e la quota che detiene. Plot Ledge mostra poi a ciascun investitore l’utile che gli spetta, così la ripartizione è un numero sullo schermo e non una discussione.',
    },
    {
      id: 'society',
      keywords: ['lottizzazione', 'lottizzazioni', 'societa', 'società', 'enterprise', 'più progetti', 'piu progetti', 'filiali', 'filiale', 'sviluppatore', 'society', 'housing', 'consorzio'],
      answer: 'Sì. Il piano Enterprise è pensato per lottizzazioni e sviluppatori con più filiali, più progetti e team più grandi. Scrivici su WhatsApp o prenota una demo e lo configureremo sui tuoi progetti.',
    },
    {
      id: 'about',
      keywords: ['cos\'è', 'cos è', 'cose', 'che cos', 'che cosa', 'cosa fa', 'cosa è', 'come funziona', 'a cosa serve', 'di cosa si tratta', 'informazioni', 'what is', 'about'],
      answer: 'Plot Ledge è un CRM per agenti che vendono lotti e immobili. Tiene in un unico posto lotti, trattative, rate, pagamenti e ricevute, così non devi più ricomporre le informazioni da fogli Excel e screenshot di WhatsApp.',
    },
  ],
}
export default chat
