import type { Messages } from '@/i18n/messages'

// Italian texts for the 'policies' namespace: the legal and trust documents beyond privacy, cookies, terms and refunds, and the hub page.
// Formal register (impersonal / Lei). Needs review by a qualified Italian-speaking lawyer before launch.

const policies: Messages['policies'] = {
  hub: {
    title: 'Aspetti legali e fiducia',
    description: 'Tutti i documenti legali e di fiducia di Plot Ledge in un unico posto: privacy, cookie, termini, uso consentito, sicurezza, trattamento dei dati e altro.',
    intro: 'Qui si trovano tutti i documenti legali e di fiducia di Plot Ledge, raggruppati in base a ciò che si desidera sapere. Se qualcosa non è chiaro o manca, si può scrivere a <mail>{email}</mail> e risponderà una persona.',
    groups: [
      { title: 'Dati e privacy', text: 'Cosa raccogliamo, quali cookie utilizziamo e come gestiamo i dati conservati in Plot Ledge: informativa sulla privacy, cookie policy e trattamento dei dati.' },
      { title: 'Uso di Plot Ledge', text: 'Le regole per usare il servizio e ciò che non è consentito, oltre al funzionamento di prove, fatturazione e rimborsi: termini di utilizzo, politica di uso consentito e politica di rimborso.' },
      { title: 'Sicurezza e fiducia', text: 'Come proteggiamo i dati, come segnalarci un problema di sicurezza e quanto è accessibile questo sito: sicurezza, divulgazione responsabile e accessibilità.' },
    ],
  },
  names: { acceptableUse: 'Uso consentito', security: 'Sicurezza', dataProcessing: 'Trattamento dei dati', accessibility: 'Accessibilità', disclosure: 'Divulgazione responsabile' },

  acceptableUse: {
    title: 'Politica di uso consentito',
    description: 'Cosa è consentito e cosa no con Plot Ledge, la responsabilità per il proprio team, cosa possiamo fare in caso di violazioni e come segnalare un abuso.',
    intro: 'Plot Ledge custodisce dati immobiliari sui quali le persone fanno affidamento. Questa politica indica cosa ci si aspetta da chiunque lo utilizzi.',
    updated: '2026-11-09',
    summary: [
      'Plot Ledge va usato per un’attività immobiliare onesta, non per ingannare gli acquirenti né per creare registrazioni false.',
      'Non si devono usare impropriamente i dati altrui, attaccare il servizio o condividere le credenziali di accesso.',
      'L’utente è responsabile di ciò che i membri del suo team fanno nel suo account.',
      'In caso di violazione possiamo inviare un avviso, limitare l’account o sospenderlo; l’utente può chiedere un riesame della decisione.',
      'Gli abusi vanno segnalati a <mail>{email}</mail>.',
    ],
    sections: [
      {
        id: 'who-this-applies-to',
        title: 'A chi si applica questa politica',
        blocks: [
          { type: 'p', text: 'Questa politica si applica a chiunque utilizzi il servizio Plot Ledge o questo sito: i titolari degli account, i membri del team che essi aggiungono e i visitatori. Fa parte dei nostri <terms>termini di utilizzo</terms>. In caso di discordanza tra i due documenti, prevalgono i termini di utilizzo.' },
          { type: 'p', text: 'In questa politica “noi” indica Plot Ledge, “l’utente” indica la persona o l’azienda che utilizza Plot Ledge e “contenuti” indica qualsiasi registrazione, file, testo o dato inserito nel servizio.' },
        ],
      },
      {
        id: 'what-you-may-do',
        title: 'Cosa è consentito',
        blocks: [
          { type: 'p', text: 'Plot Ledge è pensato per gli agenti che vendono lotti e immobili e per i gestori di lottizzazioni. È possibile usarlo per:' },
          {
            type: 'ul',
            items: [
              'registrare lotti, acquirenti, trattative, rate, pagamenti e i documenti correlati;',
              'consentire ai membri del team di accedere alle parti del servizio necessarie al loro lavoro;',
              'esportare i propri dati e scaricare i propri backup;',
              'importare dati che si ha il diritto di detenere.',
            ],
          },
        ],
      },
      {
        id: 'unlawful-or-deceptive-use',
        title: 'Uso illecito o ingannevole',
        blocks: [
          { type: 'p', text: 'Non si deve usare Plot Ledge per violare la legge o per ingannare qualcuno. In particolare, non si devono:' },
          {
            type: 'ul',
            items: [
              'creare o emettere ricevute, registrazioni di pagamento, contratti o altri documenti falsificati, alterati o retrodatati;',
              'ingannare un acquirente su un lotto, ad esempio riguardo a proprietà, stato di approvazione, superficie, prezzo, ubicazione o importi già pagati;',
              'registrare annunci falsi, trattative false o lotti che non si ha il diritto di vendere o rappresentare;',
              'usare il servizio per riciclare denaro, commettere frodi o aiutare altri a farlo.',
            ],
          },
          { type: 'p', text: 'Gli errori in buona fede sono diversi. Correggere una cifra sbagliata è normale. Registrare qualcosa che si sa essere falso non lo è.' },
        ],
      },
      {
        id: 'other-peoples-data',
        title: 'Dati di altre persone',
        blocks: [
          { type: 'p', text: 'I dati conservati comprendono spesso informazioni personali di acquirenti, venditori e personale. L’utente deve:' },
          {
            type: 'ul',
            items: [
              'avere un motivo lecito per detenere tali informazioni e usarle solo per la propria attività immobiliare;',
              'non caricare dati personali raccolti con l’inganno o che non ha il diritto di detenere;',
              'non tentare di visualizzare, copiare o modificare i dati di un altro cliente, né quelli di un altro membro del team a cui non è stato concesso l’accesso;',
              'non usare i dati di acquirenti o personale per molestarli o per inviare loro comunicazioni commerciali non pertinenti senza una base giuridica.',
            ],
          },
        ],
      },
      {
        id: 'service-and-security',
        title: 'Attaccare, sovraccaricare o copiare il servizio',
        blocks: [
          { type: 'p', text: 'Non è consentito:' },
          {
            type: 'ul',
            items: [
              'attaccare il servizio, sovraccaricarlo o inviare traffico progettato per rallentarlo o metterlo offline;',
              'esaminare, scansionare o testare il servizio alla ricerca di vulnerabilità, salvo quanto consentito dalla nostra <disclosure>politica di divulgazione responsabile</disclosure>;',
              'tentare di aggirare limiti di frequenza, autorizzazioni, limiti del piano o altre protezioni;',
              'estrarre, copiare o raccogliere il servizio o questo sito con strumenti automatici, né decompilare il software;',
              'rivendere, concedere in sublicenza o offrire il servizio ad altri come proprio, salvo nostro accordo scritto.',
            ],
          },
          { type: 'p', text: 'Se si individua un problema di sicurezza, si prega di segnalarlo tramite la politica di divulgazione responsabile anziché continuare a testarlo.' },
        ],
      },
      {
        id: 'spam-and-malware',
        title: 'Spam e malware',
        blocks: [
          {
            type: 'ul',
            items: [
              'Non usare il servizio o questo sito per inviare spam o messaggi indesiderati in massa.',
              'Non caricare né inviare virus, codice dannoso o file destinati a danneggiare un dispositivo o un sistema.',
              'Non caricare materiale che non si ha il diritto di usare, come documenti o immagini di un’altra azienda.',
            ],
          },
        ],
      },
      {
        id: 'logins-and-plan-limits',
        title: 'Credenziali di accesso e limiti del piano',
        blocks: [
          {
            type: 'ul',
            items: [
              'Le credenziali di accesso vanno tenute riservate. Non condividere un solo accesso tra più persone: aggiungere invece ciascuna persona come membro del team.',
              'Non usare le credenziali di un’altra persona né permettere ad altri di usare le proprie.',
              'Non eludere né aggirare i limiti del proprio piano, ad esempio creando account aggiuntivi per evitare di passare a un piano superiore.',
            ],
          },
          { type: 'p', text: 'Piani e limiti sono descritti nella sezione prezzi di questo sito.' },
        ],
      },
      {
        id: 'harassment-and-abuse',
        title: 'Molestie e abusi',
        blocks: [
          { type: 'p', text: 'Non si deve usare Plot Ledge, né i recapiti che vi si trovano, per molestare, minacciare, diffamare o discriminare qualcuno. Non si devono maltrattare il nostro personale né le persone che collaborano con noi.' },
        ],
      },
      {
        id: 'your-team',
        title: 'Responsabilità per il proprio team',
        blocks: [
          { type: 'p', text: 'L’utente è responsabile di ciò che le persone da lui aggiunte al proprio account ne fanno. In pratica significa:' },
          {
            type: 'ul',
            items: [
              'assegnare a ciascun membro del team solo il ruolo e le autorizzazioni necessari;',
              'assicurarsi che conoscano e rispettino questa politica;',
              'rimuovere tempestivamente le persone che lasciano l’azienda o cambiano mansione.',
            ],
          },
          { type: 'p', text: 'La nostra <security>pagina sulla sicurezza</security> fornisce maggiori informazioni sui ruoli e su ciò che i clienti possono fare per mantenere sicuro un account.' },
        ],
      },
      {
        id: 'what-we-may-do',
        title: 'Cosa possiamo fare in caso di violazione delle regole',
        blocks: [
          { type: 'p', text: 'Se riteniamo che questa politica sia stata violata, possiamo adottare la misura adeguata al problema. A seconda della gravità, possiamo:' },
          {
            type: 'ul',
            items: [
              'inviare un avviso e chiedere di risolvere il problema;',
              'limitare alcune funzionalità o l’accesso;',
              'sospendere o chiudere un account;',
              'rimuovere o bloccare contenuti illeciti o che violano questa politica;',
              'condividere informazioni con le autorità quando la legge lo richiede o in caso di richiesta legittima.',
            ],
          },
          { type: 'p', text: 'Quando il rischio è urgente, ad esempio un attacco al servizio o una minaccia per altri clienti, possiamo agire subito e spiegare in seguito.' },
        ],
      },
      {
        id: 'notice-and-appeal',
        title: 'Comunicazione e ricorso',
        blocks: [
          { type: 'p', text: 'Salvo che la legge o un rischio urgente lo impediscano, comunicheremo al titolare dell’account cosa abbiamo riscontrato e cosa stiamo facendo, e gli daremo la possibilità di rispondere prima di adottare una misura grave. Se l’utente ritiene che ci siamo sbagliati, può scrivere a <mail>{email}</mail> indicando il nome dell’account e le motivazioni. Ove possibile, una persona non coinvolta nella prima decisione la riesaminerà. Ci proponiamo di rispondere entro [Da confermare].' },
        ],
      },
      {
        id: 'reporting-abuse',
        title: 'Segnalare un abuso',
        blocks: [
          { type: 'p', text: 'Se si ritiene che qualcuno stia violando questa politica, ad esempio con una ricevuta falsificata o un annuncio falso che utilizza Plot Ledge, si può scrivere a <mail>{email}</mail>. Indicare cosa si è visto, dove e quando, allegando tutto ciò che ci aiuti a individuarlo. Per i problemi di sicurezza, utilizzare invece la <disclosure>politica di divulgazione responsabile</disclosure>.' },
        ],
      },
      {
        id: 'changes',
        title: 'Modifiche a questa politica',
        blocks: [
          { type: 'p', text: 'Quando modificheremo questa politica, aggiorneremo la data in alto e informeremo i titolari degli account delle modifiche rilevanti prima che si applichino. Gli altri documenti sono elencati nella <legalhub>pagina su aspetti legali e fiducia</legalhub>.' },
        ],
      },
    ],
  },

  security: {
    title: 'Sicurezza',
    description: 'Come Plot Ledge protegge i dati: hosting, separazione tra clienti, controllo degli accessi, autenticazione, registro delle attività, backup e cosa può fare l’utente.',
    intro: 'Questa pagina spiega in parole semplici come proteggiamo i dati conservati in Plot Ledge e cosa chiediamo di fare da parte dell’utente.',
    updated: '2026-11-09',
    summary: [
      'I dati di ciascun cliente sono separati a livello di database, quindi un cliente non può vedere quelli di un altro.',
      'Ruoli e autorizzazioni determinano cosa ogni membro del team può vedere e fare, e un registro delle attività traccia le azioni importanti.',
      'Le password sono memorizzate in forma di hash, i tentativi di accesso sono limitati per frequenza e tutto è servito tramite HTTPS.',
      'È possibile esportare i propri dati e scaricare un backup completo in qualsiasi momento.',
      'Questa pagina non dichiara alcuna certificazione di terze parti. Per segnalare un problema di sicurezza, si veda la nostra <disclosure>politica di divulgazione responsabile</disclosure>.',
    ],
    sections: [
      {
        id: 'our-approach',
        title: 'Il nostro approccio',
        blocks: [
          { type: 'p', text: 'Plot Ledge custodisce dati importanti per l’attività dell’utente e per i suoi acquirenti: lotti, trattative, rate, pagamenti e i dati personali correlati. Cerchiamo di proteggerli con alcune misure semplici e stratificate anziché con un’unica grande promessa. Nessun sistema è perfettamente sicuro e non affermiamo che il nostro lo sia.' },
          { type: 'p', text: 'In questa pagina “noi” indica Plot Ledge e “cliente” indica l’azienda titolare di un account presso di noi.' },
        ],
      },
      {
        id: 'hosting',
        title: 'Hosting e infrastruttura',
        blocks: [
          { type: 'p', text: 'Plot Ledge non gestisce data center propri. Ci avvaliamo di fornitori affermati:' },
          {
            type: 'ul',
            items: [
              'i dati del CRM sono conservati in un database PostgreSQL gestito, fornito da Neon;',
              'l’applicazione e questo sito sono eseguiti su Vercel;',
              'tutto è servito tramite HTTPS.',
            ],
          },
          { type: 'p', text: 'Questi fornitori sono elencati, con il ruolo di ciascuno, nella nostra <dpa>pagina su trattamento dei dati e sub-responsabili</dpa>. Gli orari sono memorizzati in UTC, così che i dati restino coerenti ovunque vengano consultati.' },
        ],
      },
      {
        id: 'separation',
        title: 'Separazione tra i clienti',
        blocks: [
          { type: 'p', text: 'Plot Ledge è un servizio multi-tenant: molti clienti usano lo stesso sistema. I dati di ciascun cliente sono separati a livello di database tramite la sicurezza a livello di riga (row-level security), per cui è il database stesso a limitare ciò che un cliente può leggere. I dati appartengono all’utente e non sono visibili agli altri clienti.' },
        ],
      },
      {
        id: 'access-control',
        title: 'Controllo degli accessi e ruoli',
        blocks: [
          { type: 'p', text: 'All’interno dell’account, ruoli e autorizzazioni stabiliscono cosa ogni membro del team può vedere e fare. I ruoli standard sono titolare o amministratore, contabile e agente di vendita. È inoltre possibile creare insiemi di autorizzazioni personalizzati in base alle proprie esigenze. Concedere a ciascuna persona solo ciò che serve al suo lavoro limita i danni nel caso in cui un accesso venga usato impropriamente.' },
        ],
      },
      {
        id: 'sign-in',
        title: 'Accesso e sessioni',
        blocks: [
          {
            type: 'ul',
            items: [
              'Le password sono memorizzate in forma di hash. Non le conserviamo mai in chiaro e non possiamo leggerle.',
              'I ripetuti tentativi di accesso falliti sono limitati per frequenza, per account e per indirizzo di rete.',
              'Tutto il traffico verso la nostra API è limitato per frequenza per indirizzo di rete.',
              'Quando una persona cambia la password, le sue sessioni terminano.',
              'Sono impostate intestazioni di sicurezza e l’accesso tramite script di altri siti web è limitato a un elenco di origini consentite.',
            ],
          },
        ],
      },
      {
        id: 'encryption',
        title: 'Crittografia',
        blocks: [
          { type: 'p', text: 'I dati viaggiano tra il browser e Plot Ledge tramite HTTPS, che li cifra durante la trasmissione. Il nostro fornitore di database gestisce la cifratura dei dati archiviati. [Da confermare] Le modalità precise di cifratura a riposo dei nostri fornitori saranno confermate prima del lancio.' },
        ],
      },
      {
        id: 'audit-trail',
        title: 'Registro delle attività',
        blocks: [
          { type: 'p', text: 'Un registro delle attività (audit log) traccia le azioni importanti nell’account, così da poter vedere cosa è cambiato e chi lo ha fatto. I titolari e gli amministratori dell’account possono consultarlo per esaminare errori o modifiche inattese.' },
        ],
      },
      {
        id: 'backups-and-exports',
        title: 'Backup ed esportazioni',
        blocks: [
          { type: 'p', text: 'L’utente non è vincolato e non dipende solo da noi per i propri dati. In qualsiasi momento può:' },
          {
            type: 'ul',
            items: [
              'esportare i propri dati in Excel o CSV;',
              'scaricare un backup completo in formato JSON;',
              'importare dati da Excel.',
            ],
          },
          { type: 'p', text: '[Da confermare] Con quale frequenza eseguiamo i nostri backup del database, per quanto tempo li conserviamo e con quale rapidità possiamo ripristinarli saranno indicati qui prima del lancio. Si consiglia di esportare i dati anche con regolarità.' },
        ],
      },
      {
        id: 'payments',
        title: 'Pagamenti',
        blocks: [
          { type: 'p', text: 'Gli abbonamenti si pagano con carta tramite Stripe oppure con metodi pakistani come JazzCash e OPay. Plot Ledge non conserva i numeri completi delle carte, che sono gestiti dai fornitori di pagamento. [Da confermare] Questo sito non riceve pagamenti e non prevede account né accessi.' },
        ],
      },
      {
        id: 'our-staff',
        title: 'Accesso del nostro personale',
        blocks: [
          { type: 'p', text: 'Utilizziamo i dati dei clienti solo per gestire il servizio per l’utente. Chi, all’interno di Plot Ledge, può accedere ai dati di produzione, come tale accesso viene autorizzato e come viene registrato è [Da confermare].' },
        ],
      },
      {
        id: 'incidents',
        title: 'In caso di problemi',
        blocks: [
          { type: 'p', text: 'Se scopriamo un incidente di sicurezza che riguarda i dati dell’utente, lo analizzeremo, adotteremo misure per contenerlo e informeremo i clienti interessati senza ingiustificato ritardo, indicando ciò che sappiamo e ciò che consigliamo. La notifica relativa ai dati personali è descritta nella nostra <dpa>pagina sul trattamento dei dati</dpa>.' },
        ],
      },
      {
        id: 'what-customers-can-do',
        title: 'Cosa può fare l’utente',
        blocks: [
          { type: 'p', text: 'La sicurezza è una responsabilità condivisa. Le misure più utili da parte dell’utente sono:' },
          {
            type: 'ul',
            items: [
              'usare password lunghe e univoche e non condividere un accesso tra più persone;',
              'assegnare a ogni membro del team il ruolo più limitato che gli consenta di svolgere il proprio lavoro;',
              'rimuovere le persone dall’account non appena lasciano l’azienda;',
              'controllare di tanto in tanto il registro delle attività;',
              'esportare regolarmente i dati e scaricare un backup;',
              'informarci subito se si ritiene che un account sia stato usato impropriamente.',
            ],
          },
        ],
      },
      {
        id: 'certifications',
        title: 'Certificazioni',
        blocks: [
          { type: 'p', text: 'Questa pagina non dichiara alcuna certificazione o verifica di terze parti. Descriviamo ciò che facciamo, non uno standard rispetto al quale siamo stati certificati. Se la situazione cambierà, lo indicheremo qui, specificando lo standard e la data.' },
        ],
      },
      {
        id: 'report-a-problem',
        title: 'Segnalare un problema di sicurezza',
        blocks: [
          { type: 'p', text: 'Se si ritiene di aver individuato una vulnerabilità, si prega di segnalarcela tramite la <disclosure>politica di divulgazione responsabile</disclosure>. Per altre domande su questa pagina, scrivere a <mail>{email}</mail>. Si vedano anche la <aup>politica di uso consentito</aup> e la <legalhub>pagina su aspetti legali e fiducia</legalhub>.' },
        ],
      },
    ],
  },

  dataProcessing: {
    title: 'Trattamento dei dati e sub-responsabili',
    description: 'Chi è responsabile di quali dati, come Plot Ledge tratta i dati CRM per i clienti, i fornitori che utilizziamo e come ottenere un accordo sul trattamento dei dati.',
    intro: 'Questa pagina spiega chi è responsabile di cosa quando si conservano dati in Plot Ledge e quali fornitori ci aiutano a gestirlo.',
    updated: '2026-11-09',
    summary: [
      'L’utente è responsabile dei dati dei propri acquirenti e del proprio personale. Noi trattiamo i suoi dati CRM per suo conto, solo per gestire il servizio.',
      'Per questo sito e per i dati dell’account, il responsabile è Plot Ledge: si veda l’informativa sulla privacy.',
      'I fornitori che utilizziamo sono elencati di seguito con il ruolo di ciascuno.',
      'È possibile esportare i propri dati in qualsiasi momento. I tempi di cancellazione dopo la disdetta sono ancora da confermare.',
      'Su richiesta via e-mail è disponibile un accordo sul trattamento dei dati firmato.',
    ],
    sections: [
      {
        id: 'purpose',
        title: 'Finalità di questa pagina',
        blocks: [
          { type: 'p', text: 'I dati conservati in Plot Ledge contengono informazioni personali di altre persone, come acquirenti, venditori e personale. Le leggi sulla privacy di molti paesi prevedono che l’azienda che detiene tali informazioni e il servizio che le conserva concordino chi fa cosa. Questa pagina lo stabilisce. Integra i nostri <terms>termini di utilizzo</terms>. I dati raccolti tramite questo sito di presentazione sono trattati nella nostra <privacy>informativa sulla privacy</privacy>.' },
          { type: 'p', text: 'In questa pagina “noi” indica Plot Ledge, “cliente” indica l’azienda titolare di un account e “dati CRM” indica i contenuti che un cliente conserva nel servizio Plot Ledge.' },
        ],
      },
      {
        id: 'roles',
        title: 'Chi è responsabile di cosa',
        blocks: [
          {
            type: 'table',
            caption: 'Ruoli per ciascun tipo di dati',
            head: ['Dati', 'Cliente', 'Plot Ledge'],
            rows: [
              ['Dati CRM: acquirenti, venditori, trattative, rate, pagamenti e dati del personale conservati dall’utente', 'Titolare del trattamento. L’utente decide perché e come i dati sono utilizzati.', 'Responsabile del trattamento. Li trattiamo per conto dell’utente, per gestire il servizio.'],
              ['Visitatori del sito e persone che ci contattano', 'Non applicabile', 'Titolare del trattamento. Si veda l’<privacy>informativa sulla privacy</privacy>.'],
              ['Dati dell’account del cliente e dei suoi membri del team, come nomi, indirizzi e-mail e piano', 'Non applicabile', 'Titolare del trattamento, per la gestione degli account e la fatturazione. Si veda l’<privacy>informativa sulla privacy</privacy>.'],
            ],
          },
          { type: 'p', text: 'Queste definizioni derivano dalle leggi sulla protezione dei dati, come il GDPR. Se la legge locale usa termini diversi, applichiamo lo stesso principio: l’utente decide cosa si fa dei dati e noi lo facciamo per suo conto.' },
        ],
      },
      {
        id: 'what-we-process',
        title: 'Cosa trattiamo e perché',
        blocks: [
          { type: 'p', text: 'Trattiamo i dati CRM solo per fornire il servizio all’utente. Ciò comprende conservarli, mostrarli ai membri del team da lui autorizzati, produrre report ed esportazioni, mantenere sicuro il servizio e risolvere i problemi. I dati conservati possono includere nomi, recapiti, numeri CNIC, dati su lotti e pagamenti e note, in base a ciò che l’utente sceglie di inserire. È l’utente a decidere cosa inserire.' },
        ],
      },
      {
        id: 'instructions',
        title: 'Istruzioni dell’utente',
        blocks: [
          { type: 'p', text: 'Trattiamo i dati CRM solo su istruzione dell’utente. Le sue istruzioni sono questa pagina, i <terms>termini di utilizzo</terms> e il modo in cui usa e configura il servizio. Non utilizzeremo i dati CRM per scopi nostri, come la pubblicità, e non li vendiamo. Se riteniamo che un’istruzione violi la legge, lo comunicheremo all’utente.' },
        ],
      },
      {
        id: 'confidentiality',
        title: 'Riservatezza',
        blocks: [
          { type: 'p', text: 'Manteniamo riservati i dati CRM. Chiunque in Plot Ledge possa accedervi è vincolato da un obbligo di riservatezza. [Da confermare] Come l’accesso del personale è limitato e registrato sarà descritto prima del lancio.' },
        ],
      },
      {
        id: 'security-measures',
        title: 'Misure di sicurezza',
        blocks: [
          { type: 'p', text: 'Proteggiamo i dati CRM con le misure descritte nella nostra <security>pagina sulla sicurezza</security>, tra cui separazione tra i clienti, accesso basato sui ruoli, password in forma di hash, limitazione della frequenza, HTTPS e registro delle attività. Potremo migliorare tali misure nel tempo e non le indeboliremo in modo da ridurre il livello di protezione.' },
        ],
      },
      {
        id: 'subprocessors',
        title: 'Sub-responsabili',
        blocks: [
          { type: 'p', text: 'Ci avvaliamo di altre società per gestire Plot Ledge. L’utente ci autorizza a ricorrere a quelle elencate di seguito. Restiamo responsabili nei loro confronti e chiediamo a ciascuna di proteggere adeguatamente i dati.' },
          {
            type: 'table',
            caption: 'Fornitori che utilizziamo, cosa fanno, dove e quali dati trattano',
            head: ['Fornitore', 'Cosa fa', 'Dove', 'Dati interessati'],
            rows: [
              ['Neon', 'Database PostgreSQL gestito che conserva i dati CRM', '[Da confermare]', 'Dati CRM e dati dell’account'],
              ['Vercel', 'Ospita l’applicazione Plot Ledge e questo sito; fornisce statistiche del sito senza cookie', 'Stati Uniti e altre aree geografiche', 'Dati che transitano attraverso l’applicazione; dati sulle visite al sito'],
              ['Stripe', 'Pagamenti con carta per gli abbonamenti', '[Da confermare]', 'Dati di fatturazione e pagamento. Plot Ledge non conserva i numeri completi delle carte.'],
              ['JazzCash', 'Pagamenti pakistani tramite portafoglio mobile per gli abbonamenti', 'Pakistan [Da confermare]', 'Dati di fatturazione e pagamento'],
              ['OPay', 'Pagamenti pakistani per gli abbonamenti', '[Da confermare]', 'Dati di fatturazione e pagamento'],
              ['Resend, o un servizio equivalente', 'Recapita i messaggi inviati tramite i nostri moduli di contatto', 'Stati Uniti e altre aree geografiche', 'Dati inseriti nei nostri moduli'],
              ['Anthropic', 'Scrive le risposte dell’assistente in chat solo su questo sito', 'Stati Uniti e altre aree geografiche', 'Messaggi scritti nella chat del sito. Nessun dato CRM.'],
            ],
          },
        ],
      },
      {
        id: 'changes-to-subprocessors',
        title: 'Modifiche ai sub-responsabili',
        blocks: [
          { type: 'p', text: 'Aggiorneremo questa tabella quando aggiungeremo o sostituiremo un fornitore. Comunicheremo le modifiche ai clienti [Da confermare] prima che il nuovo fornitore tratti dati CRM; i clienti che si oppongano per un motivo valido possono scrivere a <mail>{email}</mail>. Se non riusciamo a risolvere l’obiezione, l’utente può smettere di usare il servizio ed esportare i propri dati.' },
        ],
      },
      {
        id: 'international-transfers',
        title: 'Trasferimenti al di fuori del proprio paese',
        blocks: [
          { type: 'p', text: 'Alcuni dei fornitori sopra indicati possono trattare i dati al di fuori del Pakistan, anche negli Stati Uniti e nell’Unione europea. Quando la legge richiede una garanzia per tali trasferimenti, ci affidiamo alle clausole contrattuali standard del fornitore o a un meccanismo equivalente. [Da confermare] L’area geografica in cui è ospitato il database CRM sarà indicata qui prima del lancio.' },
        ],
      },
      {
        id: 'data-subject-requests',
        title: 'Assistenza nel rispondere alle richieste degli interessati',
        blocks: [
          { type: 'p', text: 'Le persone i cui dati sono detenuti dall’utente, come gli acquirenti, possono chiedere di visualizzarli, correggerli o cancellarli. Nel servizio l’utente può trovare, modificare ed esportare i dati autonomamente. Se non è possibile, può scrivere a <mail>{email}</mail> e lo assisteremo entro limiti ragionevoli. Se qualcuno ci contatta direttamente riguardo a dati sotto il controllo dell’utente, gli inoltreremo la richiesta anziché rispondere noi.' },
        ],
      },
      {
        id: 'breach-notification',
        title: 'Violazioni dei dati personali',
        blocks: [
          { type: 'p', text: 'Se veniamo a conoscenza di una violazione della sicurezza che riguarda dati personali presenti nei dati CRM dell’utente, lo informeremo senza ingiustificato ritardo. Indicheremo cosa è accaduto, quali dati sono coinvolti per quanto a nostra conoscenza, cosa abbiamo fatto e cosa consigliamo di fare. [Da confermare] Potrà essere aggiunto un termine indicativo per tale comunicazione.' },
        ],
      },
      {
        id: 'return-and-deletion',
        title: 'Restituzione e cancellazione',
        blocks: [
          { type: 'p', text: 'È possibile esportare i propri dati in Excel o CSV e scaricare un backup completo in JSON in qualsiasi momento, anche prima di disdire. Dopo la disdetta cancelleremo i dati CRM entro [Da confermare], salvo che la legge ci imponga di conservare qualcosa. I dati cancellati possono restare per breve tempo nei backup dei fornitori finché non vengono sovrascritti. [Da confermare]' },
        ],
      },
      {
        id: 'audits',
        title: 'Informazioni e verifiche',
        blocks: [
          { type: 'p', text: 'Su richiesta ragionevole, forniremo le informazioni necessarie a dimostrare che rispettiamo quanto previsto in questa pagina. [Da confermare] Sarà indicato qui se vengono offerte verifiche in loco o relazioni di terze parti. La nostra <security>pagina sulla sicurezza</security> non dichiara alcuna certificazione.' },
        ],
      },
      {
        id: 'dpa',
        title: 'Ottenere un accordo firmato',
        blocks: [
          { type: 'p', text: 'Se la propria azienda necessita di un accordo sul trattamento dei dati (DPA) firmato, scrivere a <mail>{email}</mail> indicando il nome dell’azienda e la persona che firmerà. Su richiesta invieremo una copia. Le domande su questa pagina sono benvenute allo stesso indirizzo. Tutti i documenti sono elencati nella <legalhub>pagina su aspetti legali e fiducia</legalhub>.' },
        ],
      },
    ],
  },

  accessibility: {
    title: 'Dichiarazione di accessibilità',
    description: 'Come questo sito intende rispettare il livello AA delle WCAG 2.2, cosa abbiamo fatto finora, i limiti noti e come chiedere aiuto o inviare un riscontro.',
    intro: 'Vogliamo che chiunque possa usare questo sito. Questa dichiarazione indica cosa abbiamo fatto, dove siamo carenti e come segnalarci quando qualcosa non funziona.',
    updated: '2026-11-09',
    summary: [
      'Ci proponiamo di rispettare il livello AA delle WCAG 2.2 su questo sito.',
      'Il sito funziona con la tastiera, ha un link per saltare al contenuto e un indicatore di focus visibile, e rispetta le impostazioni di movimento ridotto.',
      'È disponibile in otto lingue, comprese l’arabo e l’urdu con scrittura da destra a sinistra.',
      'Non è ancora stato sottoposto a una verifica di accessibilità indipendente.',
      'Se qualcosa non funziona, scrivere a <mail>{email}</mail>.',
    ],
    sections: [
      {
        id: 'our-commitment',
        title: 'Il nostro impegno',
        blocks: [
          { type: 'p', text: 'Plot Ledge desidera che il proprio sito sia utilizzabile dal maggior numero possibile di persone, comprese quelle che usano la tastiera, uno screen reader, l’ingrandimento o un telefono. Il nostro obiettivo sono le Web Content Accessibility Guidelines (WCAG) versione 2.2, livello AA.' },
          { type: 'p', text: 'Questa dichiarazione riguarda questo sito di presentazione. Il CRM al quale si accede è un prodotto separato e non è descritto qui.' },
        ],
      },
      {
        id: 'status',
        title: 'Situazione attuale',
        blocks: [
          { type: 'p', text: 'Lavoriamo per rispettare il livello AA delle WCAG 2.2, ma non dichiariamo una conformità completa. Il sito non è stato sottoposto a una verifica di accessibilità indipendente. Lo abbiamo testato noi stessi durante lo sviluppo. [Da confermare] La data e il metodo della nostra valutazione più recente saranno aggiunti qui.' },
        ],
      },
      {
        id: 'what-we-have-done',
        title: 'Cosa abbiamo fatto',
        blocks: [
          { type: 'ul', items: [
            'Tutto il sito può essere usato con la tastiera e l’elemento attivo è chiaramente visibile.',
            'Un link “Vai al contenuto” consente di saltare l’intestazione.',
            'Pulsanti e altri controlli sono alti almeno 44 pixel, per essere più facili da raggiungere, e il testo non è mai più piccolo di 12 pixel.',
            'I campi dei moduli hanno etichette e i link usano testi descrittivi anziché “clicca qui”.',
            'La combinazione di colori crema chiaro e smeraldo è stata scelta per garantire un contrasto leggibile.',
            'Le animazioni sono ridotte o eliminate se il dispositivo è impostato per preferire un movimento ridotto.',
            'Le pagine sono progettate per adattarsi a schermi di dimensioni diverse e allo zoom.',
          ] },
        ],
      },
      {
        id: 'languages',
        title: 'Lingue e direzione di lettura',
        blocks: [
          { type: 'p', text: 'Il sito è disponibile in otto lingue. L’arabo e l’urdu sono visualizzati da destra a sinistra e il layout è specchiato di conseguenza. È possibile cambiare lingua dall’intestazione o dal piè di pagina in qualsiasi pagina.' },
          { type: 'p', text: 'Alcune traduzioni sono assistite da strumenti automatici e possono contenere errori. Le stiamo rivedendo. Se una traduzione è errata o difficile da comprendere, si prega di segnalarcelo.' },
        ],
      },
      {
        id: 'known-limitations',
        title: 'Limiti noti',
        blocks: [
          { type: 'p', text: 'Siamo a conoscenza di queste lacune:' },
          { type: 'ul', items: [
            'I mock-up del prodotto nella home page sono grafiche illustrative. Non sono una copia funzionante del prodotto e potrebbero non essere pienamente disponibili per gli screen reader.',
            'L’assistente in chat è fornito con l’aiuto di una terza parte e potrebbe essere meno accessibile del resto della pagina.',
            'Gli eventuali PDF scaricabili potrebbero non essere pienamente accessibili.',
            'Le traduzioni assistite da strumenti automatici possono contenere errori che influiscono sulla chiarezza di una pagina.',
            'Potremmo non aver individuato altri problemi. Si prega di segnalarceli se ne vengono individuati.',
          ] },
        ],
      },
      {
        id: 'third-party-content',
        title: 'Contenuti di terze parti',
        blocks: [
          { type: 'p', text: 'Alcune funzionalità provengono da altre società, come l’assistente in chat. Non controlliamo la loro accessibilità, ma le scegliamo con cura e solleveremo i problemi con loro quando possibile.' },
        ],
      },
      {
        id: 'feedback',
        title: 'Riscontri e formati alternativi',
        blocks: [
          { type: 'p', text: 'Se non è possibile usare una parte di questo sito, o se serve qualcosa in un altro formato, come un documento letto ad alta voce o a caratteri grandi, scrivere a <mail>{email}</mail>. Si prega di indicare:' },
          { type: 'ul', items: [
            'la pagina o la funzionalità e, se possibile, il relativo indirizzo;',
            'cosa è andato storto e cosa si stava cercando di fare;',
            'il browser, il dispositivo e l’eventuale tecnologia assistiva utilizzata, se lo si desidera.',
          ] },
          { type: 'p', text: 'È possibile contattarci anche su WhatsApp o tramite il modulo di contatto di questo sito.' },
        ],
      },
      {
        id: 'how-we-respond',
        title: 'Come rispondiamo',
        blocks: [
          { type: 'p', text: 'Il messaggio sarà letto da una persona. Ci proponiamo di rispondere entro [Da confermare] e di indicare cosa possiamo fare e quando. Se non possiamo risolvere rapidamente un problema, proporremo un altro modo per ottenere ciò che serve.' },
        ],
      },
      {
        id: 'complaints',
        title: 'In caso di insoddisfazione',
        blocks: [
          { type: 'p', text: 'Se la nostra risposta non è soddisfacente, si prega di scriverci di nuovo indicandolo e la esamineremo una seconda volta. L’utente può inoltre avere il diritto di rivolgersi a un ente pubblico del proprio paese. [Da confermare]' },
        ],
      },
      {
        id: 'updates',
        title: 'Aggiornamenti di questa dichiarazione',
        blocks: [
          { type: 'p', text: 'Aggiorneremo questa dichiarazione quando cambieranno il nostro sito, la nostra valutazione o i limiti noti. La data in alto indica quando è stata aggiornata l’ultima volta. Si vedano anche la nostra <privacy>informativa sulla privacy</privacy> e la <legalhub>pagina su aspetti legali e fiducia</legalhub>.' },
        ],
      },
    ],
  },

  disclosure: {
    title: 'Politica di divulgazione responsabile',
    description: 'Come segnalare un problema di sicurezza in Plot Ledge, cosa chiediamo ai ricercatori, cosa promettiamo in cambio e cosa rientra o meno nell’ambito.',
    intro: 'Se si individua una vulnerabilità di sicurezza in Plot Ledge, desideriamo saperlo. Questa politica spiega come segnalarla in modo sicuro e cosa aspettarsi da noi.',
    updated: '2026-11-09',
    summary: [
      'Segnalare una presunta vulnerabilità a <mail>{email}</mail> con l’oggetto “Security report”.',
      'Testare solo il proprio account e i propri dati e fermarsi una volta dimostrato il problema.',
      'Non danneggiare i dati, non attaccare il servizio e non ricorrere all’ingegneria sociale.',
      'Confermeremo la ricezione della segnalazione, terremo aggiornato il segnalante e, se lo desidera, gli daremo il giusto riconoscimento.',
      'Al momento non offriamo ricompense in denaro.',
    ],
    sections: [
      {
        id: 'purpose',
        title: 'Finalità',
        blocks: [
          { type: 'p', text: 'Plot Ledge custodisce dati immobiliari e di pagamento dei nostri clienti, per cui prendiamo sul serio le segnalazioni di vulnerabilità. Accogliamo con favore le ricerche svolte in buona fede nel rispetto di questa politica. In questa politica “noi” indica Plot Ledge e “l’utente” indica la persona che effettua una segnalazione.' },
        ],
      },
      {
        id: 'scope',
        title: 'Cosa rientra nell’ambito',
        blocks: [
          { type: 'p', text: 'Questa politica riguarda:' },
          { type: 'ul', items: [
            'plotledge.com, questo sito di presentazione;',
            'app.plotledge.com, l’applicazione web del CRM Plot Ledge, e la sua API.',
          ] },
          { type: 'p', text: 'I servizi gestiti da altre società, come i nostri fornitori di hosting, pagamenti ed e-mail, non sono coperti. Si prega di segnalare eventuali problemi in tali servizi alla società che li gestisce.' },
        ],
      },
      {
        id: 'how-to-report',
        title: 'Come segnalare',
        blocks: [
          { type: 'p', text: 'Scrivere a <mail>{email}</mail> con l’oggetto “Security report”. [Da confermare] Questo indirizzo potrebbe essere sostituito da un indirizzo dedicato alla sicurezza. Si prega di scrivere in inglese, se possibile, e di non pubblicare prima i dettagli.' },
        ],
      },
      {
        id: 'what-to-include',
        title: 'Cosa includere',
        blocks: [
          { type: 'ul', items: [
            'in cosa consiste la vulnerabilità e dove si trova, con l’indirizzo o la funzionalità;',
            'i passaggi per riprodurla, nel modo più chiaro possibile;',
            'cosa si ritiene che qualcuno potrebbe fare sfruttandola;',
            'eventuali schermate, richieste o altre prove utili a confermarla;',
            'come si desidera essere contattati e se si desidera un riconoscimento.',
          ] },
          { type: 'p', text: 'Si prega di non includere nella segnalazione dati reali di clienti, ma di descriverli.' },
        ],
      },
      {
        id: 'what-we-ask',
        title: 'Cosa chiediamo',
        blocks: [
          { type: 'p', text: 'Per garantire la sicurezza dei nostri clienti, si prega di:' },
          { type: 'ul', items: [
            'usare solo il proprio account e i propri dati di prova;',
            'non leggere, modificare, copiare o cancellare i dati di un altro cliente. Se vi si accede per errore, fermarsi e informarci, usando il minimo indispensabile per dimostrare il problema;',
            'non distruggere dati né interrompere il servizio;',
            'non eseguire attacchi di negazione del servizio o attacchi automatici ad alto volume;',
            'non ricorrere a ingegneria sociale, phishing o attacchi fisici contro il nostro personale, i clienti o i fornitori;',
            'non inviare spam né lasciare una backdoor;',
            'concederci un tempo ragionevole per risolvere il problema prima di renderlo pubblico. Chiediamo [Da confermare].',
          ] },
        ],
      },
      {
        id: 'out-of-scope',
        title: 'Cosa non rientra nell’ambito',
        blocks: [
          { type: 'p', text: 'In genere questi aspetti non sono considerati vulnerabilità di sicurezza e chiediamo di non segnalarli:' },
          { type: 'ul', items: [
            'risultati di scanner automatici privi di un impatto reale;',
            'intestazioni o impostazioni di buona pratica mancanti senza un rischio dimostrato;',
            'attacchi che richiedono l’accesso fisico a un dispositivo o il computer compromesso dell’utente stesso;',
            'test di negazione del servizio, spam o forza bruta;',
            'ingegneria sociale ai danni del nostro personale o dei clienti;',
            'vulnerabilità di servizi di terze parti che non controlliamo;',
            'un utente che semplicemente condivide o perde la propria password.',
          ] },
          { type: 'p', text: 'Se non si è certi che qualcosa rientri nell’ambito, inviarlo comunque e lo comunicheremo.' },
        ],
      },
      {
        id: 'our-commitments',
        title: 'Cosa promettiamo',
        blocks: [
          { type: 'ul', items: [
            'Confermeremo la ricezione della segnalazione entro [Da confermare].',
            'La esamineremo e terremo aggiornato il segnalante sui progressi.',
            'Comunicheremo quando il problema sarà risolto e lo risolveremo con la maggiore rapidità ragionevolmente possibile.',
            'Se si desidera un riconoscimento, ringrazieremo per nome o pseudonimo una volta risolto il problema. Se si preferisce restare anonimi, rispetteremo tale scelta.',
            'Tratteremo la segnalazione e i recapiti come riservati e li useremo solo per gestire la segnalazione.',
          ] },
        ],
      },
      {
        id: 'rewards',
        title: 'Ricompense',
        blocks: [
          { type: 'p', text: 'Plot Ledge non gestisce un programma di bug bounty e non promette alcun pagamento per le segnalazioni. [Da confermare] Se la situazione cambierà, lo indicheremo in questa pagina.' },
        ],
      },
      {
        id: 'safe-harbour',
        title: 'Ricerca in buona fede',
        blocks: [
          { type: 'p', text: 'Se l’utente rispetta in buona fede questa politica, non intraprenderemo azioni legali nei suoi confronti per la sua ricerca e non chiederemo alle autorità di farlo. [Da confermare] La formulazione giuridica esatta di questo impegno dovrà essere rivista dai nostri legali.' },
          { type: 'p', text: 'Questa tutela ha dei limiti. Riguarda solo i nostri servizi e solo le ricerche conformi a questa politica. Non copre i danni a terzi e non possiamo parlare a nome di altre società o delle autorità. Agire al di fuori di questa politica, ad esempio accedendo a dati dei clienti non necessari, può essere illecito e non è tutelato.' },
        ],
      },
      {
        id: 'related',
        title: 'Pagine correlate',
        blocks: [
          { type: 'p', text: 'Per ciò che facciamo per proteggere i dati, si veda la nostra <security>pagina sulla sicurezza</security>. I test al di fuori di questa politica violano inoltre la nostra <aup>politica di uso consentito</aup>. Tutti i documenti legali sono nella <legalhub>pagina su aspetti legali e fiducia</legalhub>.' },
        ],
      },
    ],
  },
}
export default policies
