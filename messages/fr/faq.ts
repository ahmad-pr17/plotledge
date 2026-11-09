import type { Messages } from '@/i18n/messages'

const faq: Messages['faq'] = {
  eyebrow: 'Questions',
  title: 'Les questions que les agents posent avant de changer',
  items: [
    {
      q: 'Qu’est-ce que Plot Ledge ?',
      a: 'Plot Ledge est un CRM pour les agents immobiliers qui vendent des parcelles. Il réunit vos parcelles, vos ventes, vos échéances, vos paiements et vos reçus au même endroit, pour que vous cessiez de tout reconstituer à partir de feuilles Excel et de captures d’écran WhatsApp.',
    },
    {
      q: 'Qui peut voir quoi ?',
      a: 'Chacun a son propre identifiant. Le propriétaire voit tout, y compris les ventes, les bénéfices et les investisseurs. Le comptable s’occupe des paiements, des bordereaux, des reçus et des rapports. Un commercial peut ajouter des ventes et consulter les parcelles et les acheteurs, mais ne peut ni modifier ni supprimer une vente.',
    },
    {
      q: 'Puis-je importer mes données Excel ?',
      a: 'Oui, nous pouvons vous aider à charger vos parcelles, vos acheteurs et vos paiements actuels depuis Excel. Envoyez-nous la feuille et nous vous dirons si quelque chose doit d’abord être mis au propre, par exemple deux acheteurs sur une même ligne.',
    },
    {
      q: 'Comment fonctionnent les reçus et les bordereaux de paiement ?',
      a: 'Chaque paiement enregistré reçoit un reçu avec son propre identifiant unique. Vous pouvez joindre la référence du bordereau bancaire au même paiement : le reçu, le bordereau et la vente restent ainsi liés.',
    },
    {
      q: 'Est-ce que ça marche sur mon téléphone ?',
      a: 'Oui. Plot Ledge fonctionne sur téléphone et sur tablette : vous pouvez consulter le solde d’un acheteur ou enregistrer un paiement depuis le terrain ou pendant un rendez-vous client.',
    },
    {
      q: 'Comment fonctionne le partage des bénéfices entre investisseurs ?',
      a: 'Vous enregistrez la somme que chaque investisseur a engagée dans un projet et la part qu’il détient. Plot Ledge montre ensuite à chaque investisseur le bénéfice qui lui revient : le partage devient un chiffre à l’écran plutôt qu’une discussion.',
    },
    {
      q: 'Combien ça coûte ?',
      a: 'Les formules commencent à Rs 10,000 par mois pour Silver. Gold coûte Rs 40,000 par mois, et le paiement annuel permet d’économiser 17% (deux mois offerts). Enterprise est tarifé pour les promoteurs multi-agences, les lotissements et les grands groupes : contactez-nous.',
    },
    {
      q: 'Y a-t-il un essai gratuit ?',
      a: 'Oui. Il y a un essai gratuit de 15 jours, sans aucun paiement. Réservez une démo et nous le mettrons en place ; vous choisirez ensuite une formule payante si vous souhaitez continuer.',
    },
    {
      q: 'Un lotissement peut-il l’utiliser ?',
      a: 'Oui. La formule Enterprise est conçue pour les lotissements et les promoteurs multi-agences qui gèrent plusieurs projets avec des équipes plus importantes. Discutez avec nous sur WhatsApp ou réservez une démo, et nous le configurerons autour de vos projets.',
    },
  ],
}
export default faq
