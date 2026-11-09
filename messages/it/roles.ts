import type { Messages } from '@/i18n/messages'

const roles: Messages['roles'] = {
  eyebrow: 'Il tuo team',
  title: 'Stessi dati, compiti diversi.',
  description: 'Titolare, Contabile e Agente vendite hanno ciascuno il proprio accesso e vedono ciò che serve loro.',
  tablistLabel: 'Ruoli del team',
  allowed: '(consentito)',
  notAllowed: '(non consentito)',
  items: {
    owner: {
      name: 'Titolare',
      heading: 'Vedi a che punto è la tua attività.',
      description: 'Vendite totali, denaro incassato, quanto resta da incassare e l’utile di ogni trattativa. I saldi di investitori e agenti sono a un clic.',
      panel: { title: 'Questo mese', value: 'Rs {amount} milioni', caption: 'incassati a luglio su 42 trattative attive', progressLabel: '74% di quanto era dovuto' },
      permissions: [
        'Vendite, incassato e da incassare',
        'Utile di ogni trattativa',
        'Saldi di investitori e agenti',
        'Tutti i registri e i report',
        'Gestione degli account del team',
      ],
    },
    accountant: {
      name: 'Contabile',
      heading: 'Abbina ogni pagamento alla sua distinta.',
      description: 'Verifica i pagamenti con le distinte bancarie, tieni in ordine i registri e stampa i report senza chiedere i numeri a nessuno.',
      panel: { title: 'Questa settimana', value: '18 distinte', caption: 'in attesa di essere abbinate a un pagamento', progressLabel: '62% già abbinate' },
      permissions: [
        'Registrare pagamenti e riferimenti delle distinte',
        'Emettere ricevute con ID univoco',
        'Report ed esportazioni delle trattative',
        'Ripartizione degli utili tra investitori',
        'Gestione degli account del team',
      ],
    },
    agent: {
      name: 'Agente vendite',
      heading: 'Inserisci le trattative, segui i tuoi acquirenti.',
      description: 'Gli agenti aggiungono nuove trattative e consultano lotti e acquirenti. Modificare ed eliminare le trattative resta compito di Titolare e Contabile.',
      panel: { title: 'Inventario aperto', value: '{count} lotti', caption: 'ancora disponibili per la vendita', progressLabel: '{pct}% dei lotti venduti' },
      permissions: [
        'Consultare i lotti disponibili',
        'Vedere i dati degli acquirenti',
        'Aggiungere una nuova trattativa',
        'Modificare o eliminare una trattativa',
        'Vedere utili e dati degli investitori',
      ],
    },
  },
}
export default roles
