import type { Messages } from '@/i18n/messages'

const roles: Messages['roles'] = {
  eyebrow: 'Votre équipe',
  title: 'Les mêmes données, des métiers différents.',
  description: 'Le propriétaire, le comptable et le commercial ont chacun leur identifiant et voient ce dont ils ont besoin.',
  tablistLabel: 'Rôles de l’équipe',
  allowed: '(autorisé)',
  notAllowed: '(non autorisé)',
  items: {
    owner: {
      name: 'Propriétaire',
      heading: 'Voyez où en est l’entreprise.',
      description: 'Ventes totales, sommes encaissées, restant dû et bénéfice de chaque vente. Les soldes des investisseurs et des agents sont à un clic.',
      panel: { title: 'Ce mois-ci', value: 'Rs {amount} millions', caption: 'encaissés en juillet sur 42 ventes actives', progressLabel: '74% de ce qui était dû' },
      permissions: [
        'Ventes, encaissé et restant dû',
        'Bénéfice de chaque vente',
        'Soldes des investisseurs et des agents',
        'Tous les registres et rapports',
        'Gérer les comptes de l’équipe',
      ],
    },
    accountant: {
      name: 'Comptable',
      heading: 'Rapprochez chaque paiement de son bordereau.',
      description: 'Vérifiez les paiements avec les bordereaux bancaires, tenez les registres à jour et imprimez les rapports sans demander les chiffres à personne.',
      panel: { title: 'Cette semaine', value: '18 bordereaux', caption: 'en attente de rapprochement avec un paiement', progressLabel: '62% déjà rapprochés' },
      permissions: [
        'Enregistrer les paiements et les références de bordereaux',
        'Émettre des reçus avec identifiant unique',
        'Rapports de ventes et exports',
        'Partage des bénéfices entre investisseurs',
        'Gérer les comptes de l’équipe',
      ],
    },
    agent: {
      name: 'Commercial',
      heading: 'Saisissez les ventes, suivez vos acheteurs.',
      description: 'Les commerciaux ajoutent de nouvelles ventes et consultent les parcelles et les acheteurs. La modification et la suppression des ventes restent réservées au propriétaire et au comptable.',
      panel: { title: 'Stock ouvert', value: '{count} parcelles', caption: 'encore disponibles à la vente', progressLabel: '{pct}% des parcelles vendues' },
      permissions: [
        'Consulter les parcelles disponibles',
        'Voir les informations sur les acheteurs',
        'Ajouter une nouvelle vente',
        'Modifier ou supprimer une vente',
        'Voir les bénéfices et les données des investisseurs',
      ],
    },
  },
}
export default roles
