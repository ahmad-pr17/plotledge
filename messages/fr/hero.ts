import type { Messages } from '@/i18n/messages'

const hero: Messages['hero'] = {
  eyebrow: 'Logiciel de gestion de parcelles pour agents immobiliers',
  title: {
    words: ['Chaque', 'parcelle.', 'Chaque', 'échéance.', 'Chaque', 'roupie'],
    tail: 'suivie.',
  },
  lead: 'Plot Ledge est un CRM pour les agents immobiliers du Pakistan. Il remplace les feuilles Excel et les captures d’écran WhatsApp par un registre clair de vos parcelles, de vos échéances et de vos reçus.',
  cta: {
    primary: 'Réserver une démo gratuite',
    secondary: 'Voir comment ça marche',
    whatsapp: 'Discuter sur WhatsApp',
  },
  trust: ['Essai gratuit de 15 jours', 'Aucun paiement requis', 'Aide à la mise en route'],
  preview: {
    title: 'Vue d’ensemble',
    live: 'En direct',
    millionShort: ' M',
    kpis: {
      sales: 'Ventes totales',
      received: 'Encaissé',
      outstanding: 'Restant dû',
    },
    collections: 'Encaissements',
    collectionsRange: 'De janvier à juillet',
    collectionsChartLabel: 'Encaissements en hausse de janvier à juillet',
    months: ['Janv.', 'Févr.', 'Mars', 'Avr.', 'Mai', 'Juin', 'Juil.'],
    recentPayments: 'Paiements récents',
    plotLabel: 'Parcelle {plot}',
    status: {
      Paid: 'Payé',
      Pending: 'En attente',
      Overdue: 'En retard',
    },
    events: {
      paymentReceived: { title: 'Paiement reçu', sub: '{amount} pour {plot}' },
      receiptIssued: { title: 'Reçu émis' },
      plotBooked: { title: 'Parcelle {plot} réservée', sub: 'Acompte enregistré' },
    },
    receiptIssued: 'Reçu émis',
    overdueNotice: '{count} échéances en retard',
  },
}
export default hero
