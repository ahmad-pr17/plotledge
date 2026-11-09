import type { Messages } from '@/i18n/messages'

const chat: Messages['chat'] = {
  launcher: {
    open: 'Discuter avec l’assistant Plot Ledge',
    close: 'Fermer la discussion avec l’assistant Plot Ledge',
    teaser: 'Des questions sur Plot Ledge ? Posez-les-moi.',
    dismiss: 'Ignorer',
  },
  window: {
    title: 'Assistant Plot Ledge',
    subtitle: 'Assistant IA',
    onlineSr: 'En ligne. ',
    options: 'Options de la discussion',
    newChat: 'Nouvelle discussion',
    minimize: 'Réduire la discussion',
    close: 'Fermer la discussion',
    conversation: 'Conversation',
    inputLabel: 'Saisissez votre question',
    inputPlaceholder: 'Saisissez votre question',
    send: 'Envoyer le message',
    disclaimer: 'Assistant IA. Les réponses peuvent être imparfaites.',
    privacy: 'Confidentialité',
    typing: 'L’assistant Plot Ledge est en train d’écrire',
  },
  greeting: 'Assalam o Alaikum ! Je suis l’assistant Plot Ledge. Je peux répondre à vos questions sur les parcelles, les échéances, les reçus et les tarifs. Que souhaitez-vous savoir ?',
  quickRepliesLabel: 'Questions suggérées',
  quickReplies: ['Que fait Plot Ledge ?', 'Tarifs', 'Réserver une démo', 'Puis-je importer mes données Excel ?'],
  actions: {
    whatsapp: 'Discuter sur WhatsApp',
    crm: 'Ouvrir le CRM',
    pricing: 'Voir les tarifs',
    demo: 'Réserver une démo gratuite',
  },
  rate: {
    label: 'Évaluer cette réponse',
    up: 'Réponse utile',
    down: 'Réponse peu utile',
  },
  whatsapp: {
    withTopics: 'Bonjour Plot Ledge, je discutais sur votre site et j’ai posé des questions sur : {topics}. Je souhaiterais parler à l’équipe.',
    plain: 'Bonjour Plot Ledge, je discutais sur votre site. Je souhaiterais parler à l’équipe.',
  },
  errors: {
    rateLimit: 'Vous avez atteint la limite de messages pour le moment. Réessayez dans quelques minutes ou discutez avec l’équipe sur WhatsApp.',
    failure: 'Je rencontre un problème en ce moment. Vous pouvez discuter avec l’équipe sur WhatsApp ou réserver une démo.',
    redacted: 'Message supprimé car il ressemblait à des données privées.',
  },
  sensitiveReply: 'Merci de ne pas partager de coordonnées bancaires, de numéros de carte, de mots de passe ni de numéros de CNIC dans cette discussion. J’ai supprimé ce message. Je peux toujours répondre à vos questions sur Plot Ledge.',
  lead: {
    intro: 'Laissez vos coordonnées et l’équipe vous contactera.',
    name: 'Votre nom',
    phone: 'Numéro de téléphone ou WhatsApp',
    plots: 'Combien de parcelles gérez-vous ?',
    choose: 'Choisissez',
    city: 'Ville',
    optional: '(facultatif)',
    submit: 'Envoyer mes coordonnées',
    sending: 'Envoi en cours',
    note: 'Nous les utiliserons uniquement pour vous contacter au sujet de Plot Ledge.',
    done: 'Merci. L’équipe vous contactera bientôt au numéro que vous avez indiqué.',
    failed: 'Nous n’avons pas pu envoyer ce message pour le moment.',
    whatsapp: 'Écrivez-nous sur WhatsApp',
    errors: {
      name: 'Saisissez votre nom.',
      phone: 'Saisissez un numéro de 10 à 15 chiffres.',
      plots: 'Faites un choix.',
    },
  },
  offline: [
    {
      id: 'pricing',
      keywords: ['prix', 'tarif', 'tarifs', 'tarification', 'coût', 'cout', 'combien', 'abonnement', 'formule', 'forfait', 'gratuit', 'price', 'pricing', 'cost', 'plan'],
      answer: 'Les formules commencent à {silver} par mois pour Silver. Gold coûte {gold} par mois, et le paiement annuel permet d’économiser {pct}% (deux mois offerts). Enterprise est tarifé pour les promoteurs multi-agences, les lotissements et les grands groupes : contactez-nous.',
    },
    {
      id: 'import',
      keywords: ['excel', 'importer', 'import', 'importation', 'fichier', 'feuille', 'tableur', 'migration', 'migrer', 'données existantes', 'reprise de données', 'sheet'],
      answer: 'Oui, nous pouvons vous aider à charger vos parcelles, vos acheteurs et vos paiements actuels depuis Excel. Envoyez-nous la feuille et nous vous dirons si quelque chose doit d’abord être mis au propre, par exemple deux acheteurs sur une même ligne.',
    },
    {
      id: 'roles',
      keywords: ['rôle', 'role', 'roles', 'rôles', 'connexion', 'identifiant', 'accès', 'acces', 'droits', 'permission', 'permissions', 'propriétaire', 'proprietaire', 'comptable', 'commercial', 'qui peut voir', 'login', 'owner', 'accountant', 'agent'],
      answer: 'Chacun a son propre identifiant. Le propriétaire voit tout, y compris les ventes, les bénéfices et les investisseurs. Le comptable s’occupe des paiements, des bordereaux, des reçus et des rapports. Un commercial peut ajouter des ventes et consulter les parcelles et les acheteurs, mais ne peut ni modifier ni supprimer une vente.',
    },
    {
      id: 'receipts',
      keywords: ['reçu', 'recu', 'reçus', 'recus', 'bordereau', 'bordereaux', 'justificatif', 'preuve de paiement', 'quittance', 'facture', 'receipt', 'slip', 'virement'],
      answer: 'Chaque paiement enregistré reçoit un reçu avec son propre identifiant unique. Vous pouvez joindre la référence du bordereau bancaire au même paiement : le reçu, le bordereau et la vente restent ainsi liés.',
    },
    {
      id: 'mobile',
      keywords: ['téléphone', 'telephone', 'mobile', 'portable', 'smartphone', 'tablette', 'application', 'appli', 'android', 'iphone', 'phone', 'app'],
      answer: 'Oui. Plot Ledge fonctionne sur téléphone et sur tablette : vous pouvez consulter le solde d’un acheteur ou enregistrer un paiement depuis le terrain ou pendant un rendez-vous client.',
    },
    {
      id: 'investor',
      keywords: ['investisseur', 'investisseurs', 'bénéfice', 'benefice', 'bénéfices', 'benefices', 'profit', 'partage', 'associé', 'associe', 'partenaire', 'investor', 'partner'],
      answer: 'Vous enregistrez la somme que chaque investisseur a engagée dans un projet et la part qu’il détient. Plot Ledge montre ensuite à chaque investisseur le bénéfice qui lui revient : le partage devient un chiffre à l’écran plutôt qu’une discussion.',
    },
    {
      id: 'society',
      keywords: ['lotissement', 'lotissements', 'société', 'societe', 'promoteur', 'promoteurs', 'plusieurs projets', 'multi-agences', 'plusieurs agences', 'grande équipe', 'enterprise', 'society', 'housing'],
      answer: 'Oui. La formule Enterprise est conçue pour les lotissements et les promoteurs multi-agences qui gèrent plusieurs projets avec des équipes plus importantes. Discutez avec nous sur WhatsApp ou réservez une démo, et nous le configurerons autour de vos projets.',
    },
    {
      id: 'about',
      keywords: ['qu’est-ce', 'qu\'est-ce', 'c’est quoi', 'c\'est quoi', 'que fait', 'à quoi sert', 'a quoi sert', 'présentation', 'presentation', 'plot ledge', 'crm', 'fonctionnalités', 'fonctionnalites', 'what is', 'what does', 'about'],
      answer: 'Plot Ledge est un CRM pour les agents immobiliers qui vendent des parcelles. Il réunit vos parcelles, vos ventes, vos échéances, vos paiements et vos reçus au même endroit, pour que vous cessiez de tout reconstituer à partir de feuilles Excel et de captures d’écran WhatsApp.',
    },
  ],
}
export default chat
