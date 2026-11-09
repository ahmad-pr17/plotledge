import type { Messages } from '@/i18n/messages'

const features: Messages['features'] = {
  eyebrow: 'Ce que ça fait',
  title: 'Tout ce qu’une vente de parcelle exige, au même endroit.',
  description: 'De la première réservation à la dernière échéance, chaque étape est consignée une seule fois. Un logiciel de gestion de parcelles pensé pour la façon dont les agents travaillent vraiment.',
  items: [
    { title: 'Inventaire des parcelles', desc: 'Chaque parcelle avec son numéro, sa surface et son prix. Voyez ce qui est disponible, réservé ou vendu sans ouvrir une feuille de calcul.' },
    { title: 'Ventes et échéances', desc: 'Définissez une fois le prix de vente, l’acompte et le plan. Voyez ce qui est payé et la prochaine échéance.' },
    { title: 'Paiements et reçus', desc: 'Enregistrez chaque paiement sur sa vente et émettez un reçu avec son propre identifiant unique.' },
    { title: 'Bordereaux de paiement', desc: 'Gardez la référence du bordereau bancaire avec le paiement auquel elle se rapporte.' },
    { title: 'Investisseurs et partage des bénéfices', desc: 'Enregistrez la mise de chaque investisseur et voyez sa part du bénéfice.' },
    { title: 'Rapports et exports', desc: 'Imprimez ou exportez un rapport quand un associé, un investisseur ou votre comptable demande où en est un projet.' },
  ],
  visuals: {
    paid: 'Payé',
    exportFormats: ['PDF', 'Excel', 'Imprimer'],
  },
}
export default features
