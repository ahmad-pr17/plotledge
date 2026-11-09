import type { Messages } from '@/i18n/messages'

const common: Messages['common'] = {
  language: 'Langue',
  /** Label of the animated loader (route changes, the chat window opening). */
  loading: 'Chargement',
  whatsappMessage: 'Bonjour Plot Ledge, je souhaiterais une démo pour mon activité de vente de parcelles.',
  close: 'Fermer',
  skipToContent: 'Aller au contenu',
  logoLabel: 'Accueil Plot Ledge',
  cookieSettings: 'Paramètres des cookies',
  nav: {
    ariaMain: 'Principale',
    ariaMobile: 'Mobile',
    features: 'Fonctionnalités',
    how: 'Comment ça marche',
    pricing: 'Tarifs',
    faq: 'FAQ',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
  },
  header: {
    login: 'Se connecter',
    signup: 'S’inscrire gratuitement',
    demo: 'Réserver une démo',
    demoFree: 'Réserver une démo gratuite',
  },
  floating: {
    demo: 'Réserver une démo gratuite',
    whatsapp: 'Discuter sur WhatsApp',
  },
  status: {
    paid: 'Payé',
    pending: 'En attente',
    overdue: 'En retard',
  },
  footer: {
    tagline: 'Logiciel de gestion de parcelles pour les agents immobiliers et les lotissements au Pakistan.',
    whatsapp: 'Discuter sur WhatsApp',
    city: 'Lahore, Pakistan',
    copyright: '© {year} Plot Ledge. Tous droits réservés.',
    privacyShort: 'Confidentialité',
    termsShort: 'Conditions',
    product: { heading: 'Produit', features: 'Fonctionnalités', how: 'Comment ça marche', pricing: 'Tarifs', faq: 'FAQ' },
    company: { heading: 'Entreprise', contact: 'Contact', guides: 'Guides' },
    start: { heading: 'Commencer', demo: 'Réserver une démo gratuite', login: 'Se connecter au CRM' },
    legal: { heading: 'Mentions légales', privacy: 'Politique de confidentialité', cookies: 'Politique relative aux cookies', refund: 'Politique de remboursement', terms: 'Conditions d’utilisation', security: 'Sécurité', all: 'Tous les documents juridiques' },
  },
  cookieBanner: {
    title: 'Cookies et statistiques',
    body: 'Nous aimerions utiliser les cookies de Google Analytics pour compter les visites et voir quelles pages sont utiles. Rien ne se charge avant votre choix, et le site fonctionne de la même façon dans les deux cas. <link>Lire la politique relative aux cookies</link>.',
    accept: 'Accepter les statistiques',
    reject: 'Refuser les statistiques',
  },
}
export default common
