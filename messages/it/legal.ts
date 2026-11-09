import type { Messages } from '@/i18n/messages'

// Italian legal texts. Formal register (impersonal / Lei). Needs review by a qualified Italian-speaking lawyer before launch.

const privacy: Messages['legal']['privacy'] = {
  title: 'Informativa sulla privacy',
  description: 'Quali dati Plot Ledge raccoglie tramite questo sito, perché, con chi li condivide, per quanto tempo li conserva e come esercitare i propri diritti.',
  intro: 'Quali dati raccoglie questo sito, perché li raccogliamo e cosa è possibile fare, in parole semplici.',
  updated: '2026-11-09',
  summary: [
    'Raccogliamo ciò che l’utente inserisce nei nostri moduli e nella chat, oltre alle statistiche di visita.',
    'I cookie di Google Analytics vengono caricati solo se l’utente li accetta. Vercel Analytics non usa cookie.',
    'Le risposte della chat sono scritte da un fornitore di intelligenza artificiale (Anthropic). Si prega di non inserire nella chat dati bancari, password o numeri CNIC.',
    'Non vendiamo mai i dati degli utenti e nessuna decisione che li riguarda è presa esclusivamente da un software.',
    'È possibile chiedere in qualsiasi momento di vedere, correggere o cancellare i propri dati: <mail>{email}</mail>.',
  ],
  sections: [
    {
      id: 'who-we-are',
      title: 'Chi siamo',
      blocks: [
        { type: 'p', text: 'Plot Ledge è un CRM per agenti che vendono lotti e immobili, gestito da Lahore, Pakistan. In questa informativa “noi” indica Plot Ledge, che decide come vengono utilizzate le informazioni qui descritte.' },
        { type: 'p', text: 'Questa informativa riguarda il sito di presentazione. Il CRM al quale si accede è un servizio separato: i dati che vi si conservano appartengono all’utente e i nostri <terms>termini di utilizzo</terms> spiegano come li trattiamo.' },
      ],
    },
    {
      id: 'what-we-collect',
      title: 'Cosa raccogliamo',
      blocks: [
        { type: 'h3', text: 'Ciò che l’utente ci fornisce' },
        {
          type: 'ul',
          items: [
            'Il modulo di contatto o di richiesta demo: nome, numero di telefono, numero di lotti gestiti e, facoltativamente, città, azienda e un messaggio.',
            'Gli stessi dati, se l’utente sceglie di inviarli tramite il modulo di contatto dell’assistente in chat.',
            'I messaggi scritti a Plot Ledge Assistant.',
            'Tutto ciò che ci viene inviato via e-mail o WhatsApp, compreso il numero o il nome del profilo che WhatsApp ci mostra.',
          ],
        },
        { type: 'h3', text: 'Ciò che raccogliamo automaticamente' },
        {
          type: 'ul',
          items: [
            '<b>Statistiche di visita di Vercel Analytics.</b> Pagine visualizzate, area geografica approssimativa, tipo di dispositivo e sito di provenienza. Non usa cookie e non costruisce un profilo dell’utente.',
            '<b>Statistiche di visita di Google Analytics, solo se l’utente accetta.</b> Pagine visualizzate, posizione approssimativa, dispositivo, browser e sito di provenienza, collegati a un ID casuale memorizzato in un cookie.',
            '<b>Log tecnici.</b> Il nostro servizio di hosting registra l’indirizzo IP, il tipo di browser e l’orario di ogni richiesta per far funzionare e proteggere il sito. Conteggiamo inoltre le richieste per indirizzo IP, in modo breve e in memoria, per impedire abusi dei moduli e della chat.',
            '<b>Valutazioni della chat.</b> Se l’utente valuta una risposta con il pollice in su o in giù, registriamo solo la valutazione e l’orario, mai il messaggio.',
          ],
        },
        { type: 'h3', text: 'Ciò che resta sul dispositivo dell’utente' },
        {
          type: 'ul',
          items: [
            'La scelta sui cookie, la conversazione in chat finché la scheda è aperta e l’eventuale chiusura del suggerimento della chat. I nomi esatti sono nella <cookies>cookie policy</cookies>.',
            'La valuta locale approssimativa mostrata accanto ai nostri prezzi. Viene calcolata nel browser dell’utente in base alle impostazioni della lingua, senza inviare alcun dato.',
          ],
        },
      ],
    },
    {
      id: 'what-we-do-not-collect',
      title: 'Cosa non raccogliamo',
      blocks: [
        { type: 'p', text: 'Per chiarezza sui limiti di questo sito:' },
        {
          type: 'ul',
          items: [
            'Nessun dato di carte di pagamento o conti bancari. I nostri moduli e la chat non li richiedono e non vanno inseriti.',
            'Nessuna categoria particolare di dati, come salute, religione, opinioni politiche o dati biometrici. I nostri moduli non li richiedono.',
            'Nessun tracciamento pubblicitario o dei social media e nessun profilo costruito per mostrare pubblicità.',
            'Nessun account o password per questo sito di presentazione. L’accesso al CRM è un servizio separato.',
          ],
        },
      ],
    },
    {
      id: 'why-we-use-it',
      title: 'Perché li utilizziamo',
      blocks: [
        { type: 'p', text: 'Utilizziamo le informazioni solo per i motivi indicati di seguito. Per gli utenti nello Spazio economico europeo (SEE), nel Regno Unito o in Svizzera, la colonna di destra indica la base giuridica ai sensi del GDPR (Regolamento (UE) 2016/679).' },
        {
          type: 'table',
          caption: 'Finalità e basi giuridiche',
          head: ['Cosa facciamo', 'Dati utilizzati', 'Base giuridica'],
          rows: [
            ['Rispondere alla richiesta e organizzare una demo', 'Dati del modulo, e-mail, WhatsApp', 'Il nostro legittimo interesse a rispondere all’utente; una volta prenotata la demo, l’esecuzione di misure precontrattuali'],
            ['Rispondere alle domande in chat', 'Messaggi della chat', 'Il nostro legittimo interesse a fornire l’aiuto richiesto'],
            ['Capire quali pagine sono utili', 'Dati di Google Analytics', 'Il consenso dell’utente'],
            ['Contare le visite senza cookie', 'Dati di Vercel Analytics', 'Il nostro legittimo interesse a gestire un sito che funzioni bene'],
            ['Mantenere sicuro il sito e prevenire gli abusi', 'Indirizzo IP, conteggio delle richieste', 'Il nostro legittimo interesse a proteggere il sito e i suoi visitatori'],
          ],
        },
        { type: 'p', text: 'Non vendiamo le informazioni degli utenti.' },
      ],
    },
    {
      id: 'chat-assistant',
      title: 'L’assistente in chat',
      blocks: [
        { type: 'p', text: 'Plot Ledge Assistant è un assistente basato su intelligenza artificiale. Per scrivere una risposta, il messaggio dell’utente e la conversazione recente vengono inviati al nostro fornitore di intelligenza artificiale, Anthropic, che può trattarli al di fuori del Pakistan, anche negli Stati Uniti.' },
        {
          type: 'ul',
          items: [
            'Si prega di non inserire nella chat dati bancari, numeri di carta, password o numeri CNIC.',
            'La conversazione è conservata nella memoria di sessione del browser e viene cancellata alla chiusura della scheda. Non ne conserviamo una copia.',
            'Conserviamo solo ciò che l’utente sceglie di inviare tramite il modulo di contatto all’interno della chat e lo usiamo solo per contattarlo riguardo a Plot Ledge.',
            'L’assistente può sbagliare. Prezzi, limiti dei piani e qualsiasi aspetto importante vanno confermati direttamente con noi.',
          ],
        },
      ],
    },
    {
      id: 'automated-decisions',
      title: 'Decisioni automatizzate',
      blocks: [
        { type: 'p', text: 'L’assistente in chat fornisce risposte e suggerimenti. Non prende alcuna decisione che produca effetti giuridici o incida in modo analogo significativamente sull’utente, come accettarlo o rifiutarlo come cliente, stabilire un prezzo o decidere un rimborso. Tali decisioni sono prese da persone di Plot Ledge.' },
      ],
    },
    {
      id: 'who-we-share-with',
      title: 'Con chi li condividiamo',
      blocks: [
        { type: 'p', text: 'Queste società trattano informazioni per nostro conto. Ciascuna riceve solo ciò che serve al compito indicato nella tabella.' },
        {
          type: 'table',
          caption: 'Fornitori di servizi',
          head: ['Fornitore', 'Cosa fa per noi', 'Dove può trattare i dati'],
          rows: [
            ['Vercel', 'Ospita questo sito e fornisce Vercel Analytics', 'Stati Uniti e altre aree geografiche'],
            ['Google', 'Google Analytics, solo se l’utente accetta i cookie di analisi', 'Stati Uniti e altre aree geografiche'],
            ['Anthropic', 'Scrive le risposte dell’assistente in chat', 'Stati Uniti e altre aree geografiche'],
            ['Resend, o un servizio equivalente di e-mail o webhook', 'Ci recapita i dati inseriti nei moduli', 'Stati Uniti e altre aree geografiche'],
            ['Un servizio di tassi di cambio', 'Il nostro server gli chiede ogni giorno i tassi di cambio. Non riceve alcuna informazione sui visitatori', 'Non applicabile'],
          ],
        },
        { type: 'p', text: 'Se l’utente ci scrive su WhatsApp, a quella conversazione si applica l’informativa sulla privacy di WhatsApp. Possiamo inoltre condividere informazioni quando la legge lo richiede. Non vendiamo i dati degli utenti a nessuno.' },
      ],
    },
    {
      id: 'international-transfers',
      title: 'Trasferimenti al di fuori del proprio paese',
      blocks: [
        { type: 'p', text: 'Alcuni dei fornitori sopra indicati trattano i dati al di fuori del Pakistan, anche negli Stati Uniti e nell’Unione europea. Per gli utenti nel SEE, nel Regno Unito o in Svizzera, ci affidiamo alle clausole contrattuali standard di tali fornitori o a una garanzia equivalente riconosciuta ai sensi del GDPR.' },
      ],
    },
    {
      id: 'how-long',
      title: 'Per quanto tempo li conserviamo',
      blocks: [
        {
          type: 'table',
          caption: 'Per quanto tempo viene conservata ciascuna categoria di informazioni',
          head: ['Informazione', 'Per quanto tempo la conserviamo', 'Cosa succede dopo'],
          rows: [
            ['Richieste di contatto', 'Per il tempo necessario a dare seguito alla richiesta', 'Le cancelliamo su richiesta dell’utente o quando non servono più a tale scopo'],
            ['Conversazioni in chat', 'Non le conserviamo', 'Scompaiono dal browser alla chiusura della scheda'],
            ['Dati del modulo di contatto della chat', 'Per il tempo necessario a dare seguito alla richiesta', 'Li cancelliamo su richiesta dell’utente o quando non servono più a tale scopo'],
            ['Scelta sui cookie', '12 mesi', 'Chiediamo di nuovo'],
            ['Statistiche e log del server', 'Conservati da Google e Vercel secondo i loro tempi', 'Da noi non vengono ricollegati all’utente'],
          ],
        },
      ],
    },
    {
      id: 'your-rights',
      title: 'Diritti e scelte dell’utente',
      blocks: [
        { type: 'p', text: 'Ovunque si trovi, l’utente può chiederci quali dati abbiamo su di lui, chiederne la correzione o la cancellazione. La tabella seguente illustra i principali diritti in parole semplici. Li applichiamo a chiunque ci scriva e la legge del luogo in cui l’utente vive può riconoscerne di ulteriori.' },
        {
          type: 'table',
          caption: 'I diritti dell’utente, cosa significano e come esercitarli',
          head: ['Diritto', 'Cosa significa', 'Come esercitarlo'],
          rows: [
            ['Accesso', 'L’utente può chiedere se conserviamo informazioni che lo riguardano e ottenerne una copia.', 'Ci scriva (vedere “Come presentare una richiesta”).'],
            ['Rettifica', 'L’utente può chiederci di correggere informazioni errate o incomplete.', 'Ci scriva indicando cosa modificare.'],
            ['Cancellazione', 'L’utente può chiederci di cancellare le sue informazioni, salvo che dobbiamo conservarle per legge.', 'Ci scriva indicando cosa cancellare.'],
            ['Opposizione e limitazione', 'L’utente può chiederci di cessare o limitare l’uso delle sue informazioni.', 'Ci scriva indicando a cosa si oppone.'],
            ['Portabilità', 'L’utente può chiedere i dati che ci ha fornito in un formato di uso comune e leggibile da dispositivo automatico.', 'Ci scriva.'],
            ['Revoca del consenso', 'Dove ci basiamo sul consenso (cookie di Google Analytics), l’utente può revocarlo in qualsiasi momento. Ciò che è avvenuto prima non è pregiudicato.', 'Usi le <cookiesettings>impostazioni cookie</cookiesettings> di questo sito oppure ci scriva.'],
            ['Reclamo', 'L’utente può presentare reclamo a un’autorità di controllo per la protezione dei dati.', 'Vedere “Contatti e reclami”.'],
          ],
        },
        { type: 'h3', text: 'Utenti in Pakistan' },
        { type: 'p', text: 'Trattiamo i dati in linea con i principi di protezione dei dati contenuti nel Prevention of Electronic Crimes Act, 2016 (PECA) e nel progetto di quadro normativo pakistano sulla protezione dei dati personali (Personal Data Protection). Ciò significa usarli solo per lo scopo per cui ci sono stati forniti e conservarli con ragionevole sicurezza.' },
        { type: 'h3', text: 'Utenti nel SEE, nel Regno Unito o in Svizzera' },
        { type: 'p', text: 'Tutti i diritti indicati nella tabella si applicano all’utente ai sensi del GDPR (Regolamento (UE) 2016/679), del GDPR del Regno Unito o della legge svizzera sulla protezione dei dati. Risponderemo entro un mese. L’utente può inoltre presentare reclamo all’autorità di controllo locale; in Italia, il Garante per la protezione dei dati personali.' },
        { type: 'h3', text: 'Utenti in Messico' },
        { type: 'p', text: 'Ai sensi della legge federale messicana sulla protezione dei dati personali in possesso dei privati, l’utente ha i diritti ARCO: accesso, rettifica, cancellazione e opposizione. Può inoltre revocare il consenso e chiederci di limitare l’uso o la condivisione dei suoi dati. Per esercitarli, ci scriva.' },
        { type: 'h3', text: 'Utenti in qualsiasi altro paese' },
        { type: 'p', text: 'Rispetteremo i diritti riconosciuti dalla legge locale sulla protezione dei dati, entro i limiti di tale legge. Ci scriva indicando dove vive.' },
        { type: 'h3', text: 'Cookie' },
        { type: 'p', text: 'Nel banner è possibile accettare o rifiutare i cookie di analisi e cambiare idea in qualsiasi momento con le <cookiesettings>impostazioni cookie</cookiesettings>.' },
      ],
    },
    {
      id: 'how-to-make-a-request',
      title: 'Come presentare una richiesta',
      blocks: [
        {
          type: 'ul',
          items: [
            'Scriva a <mail>{email}</mail>, indicando quale diritto intende esercitare e, se utile, a quali dati si riferisce.',
            'Potremmo chiedere informazioni che ci permettano di individuare i dati e di verificare l’identità dell’utente, come il nome, il numero di telefono o l’e-mail forniti. Non chiederemo più di quanto necessario.',
            'Confermeremo di aver ricevuto la richiesta e comunicheremo l’esito. Ci proponiamo di rispondere entro un mese, e prima ove possibile.',
            'Non è previsto alcun costo. Se una richiesta è manifestamente ripetuta o infondata, o la legge ci consente di rifiutarla, ne spiegheremo il motivo.',
          ],
        },
      ],
    },
    {
      id: 'security',
      title: 'Come proteggiamo i dati',
      blocks: [
        { type: 'p', text: 'Questo sito è servito tramite HTTPS e inviamo i dati dei moduli solo alla casella e-mail o al sistema che usiamo per dare seguito alla richiesta. Nessun sito può garantire una sicurezza perfetta, quindi si prega di non inserire dati finanziari sensibili nei moduli e nella chat.' },
      ],
    },
    {
      id: 'children',
      title: 'Minori',
      blocks: [
        { type: 'p', text: 'Plot Ledge è destinato alle attività immobiliari e non si rivolge a minori di 18 anni. Se si ritiene che un minore ci abbia inviato i suoi dati, si scriva a <mail>{email}</mail> e li cancelleremo.' },
      ],
    },
    {
      id: 'contact-and-complaints',
      title: 'Contatti e reclami',
      blocks: [
        { type: 'p', text: 'Per qualsiasi domanda su questa informativa o sui propri dati, si scriva a <mail>{email}</mail>: risponderà una persona. Vorremmo avere prima la possibilità di risolvere la questione.' },
        { type: 'p', text: 'L’utente ha sempre il diritto di presentare reclamo a un’autorità di controllo per la protezione dei dati, nel paese in cui vive o lavora oppure in cui ritiene si sia verificato il problema. Non è tenuto a contattarci prima.' },
      ],
    },
    {
      id: 'changes',
      title: 'Modifiche a questa informativa',
      blocks: [
        { type: 'p', text: 'Quando modificheremo questa pagina, aggiorneremo la data in alto. Se la modifica incide sul modo in cui usiamo informazioni già fornite, lo indicheremo qui e, ove la legge lo richieda, chiederemo di nuovo il consenso.' },
      ],
    },
  ],
}

const cookies: Messages['legal']['cookies'] = {
  title: 'Cookie policy',
  description: 'Quali cookie e quali archivi del browser usa esattamente questo sito, quali richiedono il consenso e come modificare la propria scelta.',
  intro: 'Quali cookie usa questo sito, quali richiedono il consenso dell’utente e come cambiare idea.',
  updated: '2026-11-09',
  summary: [
    'Qui una sola cosa richiede il consenso: i cookie di Google Analytics. Vengono caricati solo se l’utente accetta.',
    'Tutto il resto serve al funzionamento del sito, ad esempio per ricordare la scelta dell’utente e mantenere aperta la chat.',
    'Non usiamo alcun tracciamento pubblicitario o dei social media.',
    'Accettare e rifiutare sono scelte equivalenti, ricordiamo la scelta per 12 mesi e si può cambiarla in qualsiasi momento con il link Impostazioni cookie nel piè di pagina.',
  ],
  sections: [
    {
      id: 'what-are-cookies',
      title: 'Cosa sono i cookie e gli archivi del browser',
      blocks: [
        { type: 'p', text: 'I cookie sono piccoli file che un sito salva nel browser. Il local storage e il session storage svolgono una funzione simile: il local storage resta finché non viene cancellato, mentre il session storage scompare alla chiusura della scheda. Questa pagina elenca tutto ciò che di questo tipo usa il nostro sito, così che l’utente possa decidere cosa consentire.' },
      ],
    },
    {
      id: 'what-we-use',
      title: 'Cosa usiamo',
      blocks: [
        {
          type: 'table',
          caption: 'Cookie e archivi del browser usati da questo sito',
          head: ['Nome', 'Tipo', 'A cosa serve', 'Durata', 'Richiede il consenso'],
          rows: [
            ['_ga, _ga_*', 'Cookie, impostato da Google', 'Conta le visite e le pagine visualizzate per capire quali pagine sono utili.', 'Fino a 2 anni', 'Sì. Impostato solo dopo che l’utente accetta le statistiche.'],
            ['plotledge-consent', 'Local storage', 'Ricorda se l’utente ha accettato o rifiutato le statistiche.', '12 mesi', 'No. Serve a rispettare la scelta dell’utente.'],
            ['plotledge-chat-v1', 'Session storage', 'Mantiene la chat con Plot Ledge Assistant finché la scheda è aperta.', 'Fino alla chiusura della scheda', 'No. La chat ne ha bisogno per funzionare.'],
            ['plotledge-teaser-dismissed', 'Session storage', 'Ricorda che l’utente ha chiuso il suggerimento della chat, così da non mostrarlo di nuovo.', 'Fino alla chiusura della scheda', 'No.'],
            ['Vercel Analytics', 'Nessuno', 'Conta le visite in forma aggregata, senza cookie né profilo dell’utente.', 'Nulla viene memorizzato nel browser', 'Non usa cookie.'],
          ],
        },
        { type: 'p', text: 'Non usiamo cookie di tracciamento pubblicitario o dei social media.' },
      ],
    },
    {
      id: 'why-we-ask',
      title: 'Perché chiediamo il consenso',
      blocks: [
        { type: 'p', text: 'Google Analytics imposta un cookie che non è strettamente necessario al funzionamento del sito e le leggi sulla privacy di molti paesi prevedono che si chieda prima. Perciò chiediamo e non carichiamo nulla da Google finché l’utente non risponde. Gli elementi contrassegnati con “No” nella tabella servono a far funzionare il sito o a rispettare la scelta dell’utente, quindi non richiedono il consenso.' },
      ],
    },
    {
      id: 'your-choice',
      title: 'La scelta dell’utente',
      blocks: [
        { type: 'p', text: 'Alla prima visita, un banner chiede se possiamo usare i cookie di Google Analytics. Nulla di Google viene caricato finché l’utente non sceglie.' },
        {
          type: 'ul',
          items: [
            '<b>Accetta le statistiche:</b> Google Analytics viene caricato e imposta i suoi cookie.',
            '<b>Rifiuta le statistiche:</b> Google Analytics non viene mai caricato e il sito funziona esattamente allo stesso modo.',
          ],
        },
        { type: 'p', text: 'Accettare e rifiutare sono scelte equivalenti: entrambe richiedono un clic, hanno lo stesso aspetto e rifiutare non comporta alcun costo. Non usiamo il banner per spingere l’utente in una direzione o nell’altra.' },
        { type: 'p', text: 'Ricordiamo la scelta per 12 mesi, poi chiediamo di nuovo. L’utente può cambiarla quando vuole. Se rifiuta dopo aver accettato, rimuoviamo i cookie di Google che questo browser conserva per il nostro sito.' },
        { type: 'cookieSettingsButton', label: 'Modifica la mia scelta sui cookie' },
      ],
    },
    {
      id: 'other-ways',
      title: 'Altri modi per controllare i cookie',
      blocks: [
        {
          type: 'ul',
          items: [
            'Bloccare o eliminare i cookie dalle impostazioni del browser. Questo sito funziona anche senza.',
            'Installare il <gaoptout>componente aggiuntivo di Google per la disattivazione di Google Analytics</gaoptout> per bloccare Google Analytics su tutti i siti visitati.',
            'Usare la modalità privata o in incognito del browser, che elimina i cookie alla chiusura.',
          ],
        },
      ],
    },
    {
      id: 'third-parties',
      title: 'Google e i dati dell’utente',
      blocks: [
        { type: 'p', text: 'Se l’utente accetta, Google riceve i dati di visita sopra descritti e li tratta secondo l’<googleprivacy>informativa sulla privacy di Google</googleprivacy>. La nostra <privacy>informativa sulla privacy</privacy> spiega come usiamo i risultati e dove Google può trattarli.' },
      ],
    },
    {
      id: 'changes',
      title: 'Modifiche a questa cookie policy',
      blocks: [
        { type: 'p', text: 'Se aggiungeremo un nuovo cookie o archivio che richiede il consenso, lo elencheremo prima qui e chiederemo di nuovo la scelta dell’utente. Domande: <mail>{email}</mail>.' },
      ],
    },
  ],
}

const terms: Messages['legal']['terms'] = {
  title: 'Termini di utilizzo',
  description: 'Le condizioni per l’uso del sito e del servizio Plot Ledge: account, piani, uso consentito, dati dell’utente e nostre responsabilità.',
  intro: 'Le regole per usare Plot Ledge, scritte per essere lette.',
  updated: '2026-11-09',
  summary: [
    'Plot Ledge è un software per tenere traccia di lotti, trattative, rate e pagamenti.',
    'I dati che si conservano sono dell’utente, che è responsabile di mantenerli corretti.',
    'Le credenziali di accesso vanno tenute riservate e ai membri del team va dato solo l’accesso necessario.',
    'I piani sono fatturati in rupie. Prove, disdetta e rimborsi sono regolati dalla politica di rimborso.',
    'La legge applicabile e il foro competente per le controversie saranno confermati nella versione definitiva.',
  ],
  sections: [
    {
      id: 'agreement',
      title: 'Accettazione di questi termini',
      blocks: [
        { type: 'p', text: 'Usando il sito o il servizio Plot Ledge, l’utente accetta questi termini. In caso contrario, si prega di non utilizzarli. Chi usa Plot Ledge per un’attività dichiara di poter accettare questi termini per suo conto.' },
      ],
    },
    {
      id: 'definitions',
      title: 'Definizioni',
      blocks: [
        {
          type: 'ul',
          items: [
            '<b>Sito</b> indica questo sito di presentazione, che descrive Plot Ledge e consente di contattarci.',
            '<b>Servizio</b> indica il software Plot Ledge al quale si accede per tenere traccia di lotti, trattative, rate, pagamenti e dati correlati.',
            '<b>Utente</b> indica la persona, o l’attività per conto della quale essa agisce, che usa il sito o il servizio.',
            '<b>Noi</b> indica Plot Ledge.',
          ],
        },
      ],
    },
    {
      id: 'website',
      title: 'Il sito',
      blocks: [
        { type: 'p', text: 'Questo sito descrive Plot Ledge. Le descrizioni, gli esempi e le schermate che contiene mostrano a cosa serve il prodotto e non costituiscono la promessa di alcun risultato commerciale.' },
      ],
    },
    {
      id: 'service',
      title: 'Il servizio',
      blocks: [
        { type: 'p', text: 'Plot Ledge è un software per tenere traccia di lotti, trattative, rate, pagamenti e dati correlati. Ci impegniamo a mantenere il servizio disponibile e accurato e possiamo migliorare o modificare le funzionalità nel tempo.' },
      ],
    },
    {
      id: 'changes-to-service',
      title: 'Modifiche al servizio',
      blocks: [
        { type: 'p', text: 'Possiamo aggiungere, modificare o rimuovere funzionalità e aggiornare il servizio per risolvere problemi o migliorarlo. Se una modifica elimina in modo rilevante qualcosa su cui l’utente fa affidamento, ne informeremo i titolari degli account prima che si applichi, ove ragionevolmente possibile.' },
      ],
    },
    {
      id: 'your-account',
      title: 'L’account dell’utente',
      blocks: [
        {
          type: 'ul',
          items: [
            'L’utente è responsabile dell’esattezza dei dati che inserisce.',
            'Le credenziali di accesso vanno tenute riservate e, se si ritiene che qualcun altro le abbia usate, occorre avvisarci subito.',
            'Ai membri del team va assegnato solo il ruolo necessario. L’utente è responsabile di ciò che fanno nel suo account le persone che aggiunge.',
          ],
        },
      ],
    },
    {
      id: 'plans-and-payment',
      title: 'Piani, prove e pagamento',
      blocks: [
        { type: 'p', text: 'I piani hanno prezzi in rupie pakistane, indicati nella sezione prezzi di questo sito, e possono essere fatturati su base mensile o annuale. I nuovi account iniziano con una prova gratuita. Prezzi e limiti dei piani possono cambiare e li comunicheremo prima che la modifica si applichi all’account dell’utente.' },
        { type: 'p', text: 'Il funzionamento di prove, disdetta e rimborsi è descritto nella <refund>politica di rimborso e disdetta</refund>.' },
      ],
    },
    {
      id: 'acceptable-use',
      title: 'Uso consentito',
      blocks: [
        {
          type: 'ul',
          items: [
            'Non usare il servizio per scopi illeciti o per ingannare gli acquirenti.',
            'Non tentare di violare gli account, né di interrompere, sovraccaricare o copiare il servizio.',
            'Non caricare materiale che non si ha il diritto di usare o che si sa essere falso.',
          ],
        },
      ],
    },
    {
      id: 'your-data',
      title: 'I dati dell’utente',
      blocks: [
        { type: 'p', text: 'I dati conservati in Plot Ledge appartengono all’utente. Li usiamo solo per far funzionare il servizio per suo conto. Si consiglia di conservare copie proprie dei dati importanti esportando regolarmente i report. L’<privacy>informativa sulla privacy</privacy> spiega come trattiamo le informazioni raccolte tramite questo sito.' },
      ],
    },
    {
      id: 'our-rights',
      title: 'Il nostro software e i nostri contenuti',
      blocks: [
        { type: 'p', text: 'Conserviamo tutti i diritti sul software, sul design, sui testi e sui loghi di Plot Ledge. Questi termini concedono all’utente il diritto di usare il servizio finché il suo account è attivo e nessun altro diritto su di essi.' },
      ],
    },
    {
      id: 'third-parties',
      title: 'Servizi e link di terzi',
      blocks: [
        { type: 'p', text: 'Il sito e il servizio possono funzionare con servizi gestiti da altre società, o rimandare a essi, ad esempio hosting, statistiche, e-mail, WhatsApp e il fornitore di intelligenza artificiale che sta dietro l’assistente in chat. Non controlliamo tali servizi e non siamo responsabili dei loro contenuti o delle loro prassi. Quando l’utente li usa si applicano i loro termini e le loro informative sulla privacy.' },
      ],
    },
    {
      id: 'liability',
      title: 'La nostra responsabilità',
      blocks: [
        { type: 'p', text: 'Forniamo il servizio “così com’è”. Nella misura consentita dalla legge, non rispondiamo di danni indiretti o consequenziali, come il mancato guadagno o un pagamento mancato che dipendeva da informazioni presenti nel servizio.' },
      ],
    },
    {
      id: 'ending',
      title: 'Cessazione dell’uso',
      blocks: [
        { type: 'p', text: 'L’utente può smettere di usare Plot Ledge in qualsiasi momento. Possiamo sospendere o chiudere un account che violi questi termini e ne spiegheremo il motivo ove possibile.' },
      ],
    },
    {
      id: 'governing-law',
      title: 'Legge applicabile e controversie',
      blocks: [
        { type: 'p', text: '[Da confermare] La legge che disciplina questi termini e i tribunali o la procedura per risolvere le controversie saranno confermati nella versione definitiva dei termini. Fino ad allora, si prega di scriverci prima a <mail>{email}</mail> così da cercare insieme di risolvere ogni problema.' },
      ],
    },
    {
      id: 'severability',
      title: 'Se una parte di questi termini non si applica',
      blocks: [
        { type: 'p', text: 'Se un tribunale o un’autorità stabilisce che una parte di questi termini non può essere fatta valere, il resto dei termini resta in vigore. Se non facciamo valere subito un diritto, non vi abbiamo rinunciato.' },
      ],
    },
    {
      id: 'changes',
      title: 'Modifiche a questi termini',
      blocks: [
        { type: 'p', text: 'Quando modificheremo questi termini, aggiorneremo la data in alto e informeremo i titolari degli account delle modifiche rilevanti prima che si applichino. Domande su questi termini: <mail>{email}</mail>.' },
      ],
    },
  ],
}

const refund: Messages['legal']['refund'] = {
  title: 'Politica di rimborso e disdetta',
  description: 'Come funzionano la prova gratuita, la fatturazione, la disdetta e i rimborsi per i piani Plot Ledge e come richiederli.',
  intro: 'Come funzionano prove, fatturazione e disdetta e quando rimborsiamo.',
  updated: '2026-11-09',
  summary: [
    'Si ha diritto a 15 giorni di prova gratuita senza alcun pagamento e si può disdire durante la prova senza alcun addebito.',
    'I piani a pagamento sono fatturati in rupie, in anticipo, su base mensile o annuale.',
    'Si può disdire in qualsiasi momento. La disdetta interrompe la fatturazione futura ma non comporta il rimborso del periodo già pagato.',
    'Esaminiamo i rimborsi per addebiti errati o per guasti da parte nostra.',
  ],
  sections: [
    {
      id: 'at-a-glance',
      title: 'Cosa succede e quando',
      blocks: [
        {
          type: 'table',
          caption: 'Cosa succede in ciascuna situazione',
          head: ['Situazione', 'Cosa succede'],
          rows: [
            ['Si disdice durante la prova gratuita', 'Non viene addebitato nulla.'],
            ['Si disdice un piano a pagamento', 'La fatturazione futura si interrompe. Il periodo già pagato non viene rimborsato automaticamente.'],
            ['È stato effettuato un addebito errato o doppio', 'Esaminiamo la richiesta e rimborsiamo ove opportuno.'],
            ['Un guasto da parte nostra ha impedito di usare il servizio', 'Esaminiamo la richiesta e rimborsiamo ove opportuno.'],
            ['Un pagamento non va a buon fine', 'Vedere “Pagamenti non riusciti”.'],
            ['Si ha un accordo Enterprise', 'Si applicano le condizioni di tale accordo, se differiscono da questa pagina.'],
          ],
        },
      ],
    },
    {
      id: 'free-trial',
      title: 'Prova gratuita',
      blocks: [
        { type: 'p', text: 'I nuovi account iniziano con una prova gratuita di 15 giorni. Per iniziare la prova non è richiesto alcun pagamento e si può disdire in qualsiasi momento durante la prova senza alcun addebito.' },
      ],
    },
    {
      id: 'billing',
      title: 'Fatturazione',
      blocks: [
        { type: 'p', text: 'I piani a pagamento sono fatturati in rupie pakistane, in anticipo, su base mensile o annuale in base all’opzione scelta, a partire dalla fine della prova o dal momento in cui si sceglie un piano. Prezzi e limiti dei piani sono indicati nella sezione prezzi di questo sito e possono cambiare. Li comunicheremo prima che la modifica si applichi all’account dell’utente.' },
      ],
    },
    {
      id: 'taxes',
      title: 'Imposte',
      blocks: [
        { type: 'p', text: '[Da confermare] Se i prezzi indicati comprendano o escludano le imposte e come eventuali imposte siano indicate in fattura sarà confermato nella versione definitiva di questa politica.' },
      ],
    },
    {
      id: 'failed-payments',
      title: 'Pagamenti non riusciti',
      blocks: [
        { type: 'p', text: 'Se un pagamento non va a buon fine o viene rifiutato, il piano potrebbe non rinnovarsi. Si prega di scriverci a <mail>{email}</mail> e ci aiuteremo a risolvere la questione. [Da confermare] I passaggi esatti, ad esempio quanto attendiamo prima di limitare l’accesso, saranno indicati nella versione definitiva di questa politica.' },
      ],
    },
    {
      id: 'cancellation',
      title: 'Disdetta',
      blocks: [
        { type: 'p', text: 'Si può disdire in qualsiasi momento. La disdetta interrompe la fatturazione futura. Non comporta automaticamente il rimborso del periodo già addebitato, sia esso un mese o un anno.' },
      ],
    },
    {
      id: 'refunds',
      title: 'Rimborsi',
      blocks: [
        { type: 'p', text: 'Non offriamo rimborsi automatici per i periodi di fatturazione utilizzati in parte. Esamineremo una richiesta e rimborseremo ove opportuno se:' },
        {
          type: 'ul',
          items: [
            'è stato effettuato un addebito errato o doppio, oppure',
            'un guasto tecnico da parte nostra ha impedito di usare il servizio.',
          ],
        },
      ],
    },
    {
      id: 'enterprise',
      title: 'Piani Enterprise',
      blocks: [
        { type: 'p', text: 'Gli accordi Enterprise personalizzati possono prevedere condizioni proprie di fatturazione e disdetta. Esse sono indicate nell’accordo con noi e si applicano al posto di questa pagina se differiscono.' },
      ],
    },
    {
      id: 'how-to-ask',
      title: 'Come richiedere una disdetta o un rimborso',
      blocks: [
        { type: 'p', text: 'Si scriva a <mail>{email}</mail> indicando:' },
        {
          type: 'ul',
          items: [
            'il nome o l’e-mail dell’account,',
            'il piano, la data e l’importo dell’addebito,',
            'cosa si desidera che facciamo e perché.',
          ],
        },
        { type: 'p', text: 'Una persona leggerà la richiesta e risponderà.' },
      ],
    },
  ],
}

const legal: Messages['legal'] = {
  ui: {
    inShort: 'In breve',
    onThisPage: 'In questa pagina',
    lastUpdated: 'Ultimo aggiornamento: {date}',
    contentsLabel: 'Indice: {title}',
    questionsTitle: 'Domande su questa pagina?',
    contactSentence: 'Scriva a <mail>{email}</mail> e risponderà una persona.',
    contactAria: 'Contatti e politiche correlate',
    /** Breadcrumb link back to the page that lists every legal document. */
    allDocuments: 'Tutti i documenti legali',
    policyNames: {
      privacy: 'Informativa sulla privacy',
      cookies: 'Cookie policy',
      terms: 'Termini di utilizzo',
      refund: 'Rimborso e disdetta',
    },
  },
  privacy,
  cookies,
  terms,
  refund,
}

export default legal
