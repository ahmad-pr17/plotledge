import type { Messages } from '@/i18n/messages'

const how: Messages['how'] = {
  eyebrow: 'Comment ça marche',
  title: 'Trois étapes, de la première parcelle à la dernière échéance.',
  description: 'Configurez-le une fois. Ensuite, chaque paiement tient en une seule saisie.',
  steps: [
    { title: 'Ajoutez vos parcelles', desc: 'Saisissez le numéro, la surface et le prix de chaque parcelle, puis indiquez si elle est disponible, réservée ou vendue.' },
    { title: 'Enregistrez la vente', desc: 'Choisissez l’acheteur, fixez le prix de vente et l’acompte, puis sélectionnez le plan d’échéances.' },
    { title: 'Notez chaque paiement', desc: 'Enregistrez chaque échéance à son arrivée, joignez le bordereau et émettez un reçu.' },
  ],
}
export default how
