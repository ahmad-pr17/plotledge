import type { Messages } from '@/i18n/messages'

const faq: Messages['faq'] = {
  eyebrow: 'Domande',
  title: 'Le domande degli agenti prima di cambiare sistema',
  items: [
    {
      q: 'Che cos’è Plot Ledge?',
      a: 'Plot Ledge è un CRM per agenti che vendono lotti e immobili. Tiene in un unico posto lotti, trattative, rate, pagamenti e ricevute, così non devi più ricomporre le informazioni da fogli Excel e screenshot di WhatsApp.',
    },
    {
      q: 'Chi può vedere cosa?',
      a: 'Ognuno ha le proprie credenziali di accesso. Il Titolare vede tutto, comprese vendite, utile e investitori. Il Contabile gestisce pagamenti, distinte, ricevute e report. Un Agente vendite può aggiungere trattative e consultare lotti e acquirenti, ma non può modificare o eliminare una trattativa.',
    },
    {
      q: 'Posso importare i miei dati da Excel?',
      a: 'Sì, possiamo aiutarti a caricare da Excel i tuoi lotti, acquirenti e pagamenti attuali. Inviaci il foglio e ti diremo se c’è qualcosa da sistemare prima, ad esempio due acquirenti sulla stessa riga.',
    },
    {
      q: 'Come funzionano ricevute e distinte di versamento?',
      a: 'Ogni pagamento che registri ottiene una ricevuta con un proprio ID univoco. Puoi allegare al pagamento il riferimento della distinta bancaria, così ricevuta, distinta e trattativa restano collegate.',
    },
    {
      q: 'Funziona sul telefono?',
      a: 'Sì. Plot Ledge funziona su telefoni e tablet, quindi puoi controllare il saldo di un acquirente o registrare un pagamento dal cantiere o durante un incontro con un cliente.',
    },
    {
      q: 'Come funziona la ripartizione degli utili tra investitori?',
      a: 'Registri quanto ogni investitore ha messo in un progetto e la quota che detiene. Plot Ledge mostra poi a ciascun investitore l’utile che gli spetta, così la ripartizione è un numero sullo schermo e non una discussione.',
    },
    {
      q: 'Quanto costa?',
      a: 'I piani partono da Rs 10,000 al mese per Silver. Gold costa Rs 40,000 al mese e con il pagamento annuale risparmi il 17% (due mesi gratis). Enterprise ha un prezzo definito per sviluppatori con più filiali, lottizzazioni e gruppi più grandi, quindi contattaci.',
    },
    {
      q: 'C’è una prova gratuita?',
      a: 'Sì. C’è una prova gratuita di 15 giorni. Non serve alcun pagamento. Prenota una demo e la attiveremo per te; poi, se vuoi continuare, scegli un piano a pagamento.',
    },
    {
      q: 'Può usarlo una lottizzazione?',
      a: 'Sì. Il piano Enterprise è pensato per lottizzazioni e sviluppatori con più filiali, più progetti e team più grandi. Scrivici su WhatsApp o prenota una demo e lo configureremo sui tuoi progetti.',
    },
  ],
}
export default faq
