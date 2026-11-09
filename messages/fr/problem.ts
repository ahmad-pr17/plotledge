import type { Messages } from '@/i18n/messages'

const problem: Messages['problem'] = {
  eyebrow: 'Pourquoi Plot Ledge',
  title: 'De fichiers dispersés à un registre clair.',
  description: 'Quand les informations sont réparties en cinq endroits, personne ne sait ce qu’un acheteur a réellement payé. Plot Ledge garde tout l’historique de chaque dossier au même endroit.',
  messy: {
    heading: 'Le chaos Excel et WhatsApp',
    rows: [
      ['Ayesha A104', '85000??', 'jul?'],
      ['hamza b107', '42,500', ''],
      ['C-103 mehwish', '1.2', 'payé cash'],
      ['usman E102', '', 'le rappeler'],
    ],
    quote: '« Quel mois a-t-il payé ? » Remonter 400 messages et espérer que le bordereau y soit encore.',
  },
  clear: {
    heading: 'Un registre clair',
    tableCaption: 'Échéances avec leur statut',
    columns: { plot: 'Parcelle', amount: 'Montant', status: 'Statut' },
    status: { Paid: 'Payé', Pending: 'En attente', Overdue: 'En retard' },
    receiptIssued: 'Reçu émis',
    note: 'Chaque paiement est lié à son acheteur, à son bordereau et à son reçu. Les échéances en retard apparaissent d’elles-mêmes.',
  },
}
export default problem
