// Traduction française de l’espace de noms « legal » (côté serveur uniquement). Elle doit être relue par un juriste francophone qualifié avant le lancement.
import type { Messages } from '@/i18n/messages'

type Legal = Messages['legal']

const privacy: Legal['privacy'] = {
  title: 'Politique de confidentialité',
  description: 'Ce que Plot Ledge collecte via ce site, pourquoi, avec qui ces informations sont partagées, combien de temps elles sont conservées et comment exercer vos droits.',
  intro: 'Ce que ce site collecte, pourquoi nous le collectons et ce que vous pouvez faire, en termes simples.',
  updated: '2026-11-09',
  summary: [
    'Nous collectons ce que vous saisissez dans nos formulaires et dans le chat, ainsi que des statistiques de visite.',
    'Les cookies de Google Analytics ne se chargent que si vous les acceptez. Vercel Analytics n’utilise aucun cookie.',
    'Les réponses du chat sont rédigées par un fournisseur d’IA (Anthropic). Merci de ne pas communiquer dans le chat de coordonnées bancaires, de mots de passe ni de numéros de CNIC.',
    'Nous ne vendons jamais vos informations, et aucune décision vous concernant n’est prise uniquement par un logiciel.',
    'Vous pouvez à tout moment demander à consulter, corriger ou supprimer vos informations : <mail>{email}</mail>.',
  ],
  sections: [
    {
      id: 'who-we-are',
      title: 'Qui nous sommes',
      blocks: [
        { type: 'p', text: 'Plot Ledge est un CRM pour les agents immobiliers qui vendent des parcelles, exploité depuis Lahore, au Pakistan. Dans cette politique, « nous » désigne Plot Ledge, qui décide de la manière dont les informations décrites ici sont utilisées.' },
        { type: 'p', text: 'Cette politique couvre ce site vitrine. Le CRM auquel vous vous connectez est un service distinct : les données que vous y enregistrez vous appartiennent, et nos <terms>conditions d’utilisation</terms> expliquent comment nous les traitons.' },
      ],
    },
    {
      id: 'what-we-collect',
      title: 'Ce que nous collectons',
      blocks: [
        { type: 'h3', text: 'Ce que vous nous donnez' },
        {
          type: 'ul',
          items: [
            'Le formulaire de contact ou de demande de démo : votre nom, votre numéro de téléphone, le nombre de parcelles que vous gérez et, facultativement, votre ville, votre entreprise et un message.',
            'Les mêmes informations si vous choisissez de les envoyer via le formulaire de contact de l’assistant de chat.',
            'Les messages que vous écrivez à l’assistant Plot Ledge.',
            'Tout ce que vous nous envoyez par e-mail ou par WhatsApp, y compris le numéro ou le nom de profil que WhatsApp nous affiche.',
          ],
        },
        { type: 'h3', text: 'Ce que nous collectons automatiquement' },
        {
          type: 'ul',
          items: [
            '<b>Statistiques de visite de Vercel Analytics.</b> Pages consultées, région approximative, type d’appareil et site d’origine. Il n’utilise aucun cookie et ne construit pas de profil vous concernant.',
            '<b>Statistiques de visite de Google Analytics, uniquement si vous acceptez.</b> Pages consultées, localisation approximative, appareil, navigateur et site d’origine, associés à un identifiant aléatoire stocké dans un cookie.',
            '<b>Journaux techniques.</b> Notre hébergeur enregistre votre adresse IP, le type de navigateur et l’heure de chaque requête pour exploiter et protéger le site. Nous comptons aussi les requêtes par adresse IP, brièvement et en mémoire, pour empêcher les abus des formulaires et du chat.',
            '<b>Évaluations du chat.</b> Si vous évaluez une réponse avec un pouce levé ou baissé, nous enregistrons uniquement l’évaluation et l’heure, jamais le message.',
          ],
        },
        { type: 'h3', text: 'Ce qui reste sur votre appareil' },
        {
          type: 'ul',
          items: [
            'Votre choix concernant les cookies, la conversation du chat tant que l’onglet est ouvert, et le fait que vous ayez fermé l’invite du chat. Consultez la <cookies>politique relative aux cookies</cookies> pour les noms exacts.',
            'La devise locale approximative affichée à côté de nos prix. Nous la déterminons dans votre navigateur à partir de votre paramètre de langue, sans rien envoyer pour cela.',
          ],
        },
      ],
    },
    {
      id: 'what-we-do-not-collect',
      title: 'Ce que nous ne collectons pas',
      blocks: [
        { type: 'p', text: 'Pour être clairs sur les limites de ce site :' },
        {
          type: 'ul',
          items: [
            'Aucune coordonnée de carte de paiement ni de compte bancaire. Nos formulaires et le chat ne les demandent pas, et vous ne devez pas les saisir.',
            'Aucune catégorie particulière d’informations, comme la santé, la religion, les opinions politiques ou les données biométriques. Nos formulaires ne les demandent pas.',
            'Aucun suivi publicitaire ou de réseaux sociaux, et aucun profil vous concernant constitué pour vous montrer des publicités.',
            'Aucun compte ni mot de passe pour ce site vitrine. La connexion au CRM est un service distinct.',
          ],
        },
      ],
    },
    {
      id: 'why-we-use-it',
      title: 'Pourquoi nous les utilisons',
      blocks: [
        { type: 'p', text: 'Nous n’utilisons vos informations que pour les raisons ci-dessous. Pour les visiteurs de l’EEE, du Royaume-Uni ou de la Suisse, la colonne de droite indique la base juridique au titre du RGPD.' },
        {
          type: 'table',
          caption: 'Finalités et bases juridiques',
          head: ['Ce que nous faisons', 'À partir de', 'Base juridique'],
          rows: [
            ['Répondre à votre demande et organiser une démo', 'Informations du formulaire, e-mail, WhatsApp', 'Notre intérêt légitime à vous répondre ; une fois la démo réservée, l’exécution de mesures précontractuelles'],
            ['Répondre à vos questions dans le chat', 'Messages du chat', 'Notre intérêt légitime à vous apporter l’aide que vous avez demandée'],
            ['Comprendre quelles pages sont utiles', 'Données de Google Analytics', 'Votre consentement'],
            ['Compter les visites sans cookies', 'Données de Vercel Analytics', 'Notre intérêt légitime à exploiter un site qui fonctionne bien'],
            ['Assurer la sécurité du site et empêcher les abus', 'Adresse IP, nombre de requêtes', 'Notre intérêt légitime à protéger le site et ses visiteurs'],
          ],
        },
        { type: 'p', text: 'Nous ne vendons pas vos informations.' },
      ],
    },
    {
      id: 'chat-assistant',
      title: 'L’assistant de chat',
      blocks: [
        { type: 'p', text: 'L’assistant Plot Ledge est un assistant IA. Pour rédiger une réponse, votre message et la conversation récente sont envoyés à notre fournisseur d’IA, Anthropic, qui peut les traiter en dehors du Pakistan, notamment aux États-Unis.' },
        {
          type: 'ul',
          items: [
            'Merci de ne pas saisir de coordonnées bancaires, de numéros de carte, de mots de passe ni de numéros de CNIC dans le chat.',
            'La conversation est conservée dans le stockage de session de votre navigateur et effacée à la fermeture de l’onglet. Nous n’en gardons aucune copie.',
            'Nous ne conservons que ce que vous choisissez d’envoyer via le formulaire de contact intégré au chat, et nous ne l’utilisons que pour vous contacter au sujet de Plot Ledge.',
            'L’assistant peut se tromper. Confirmez directement avec nous les prix, les limites des formules et tout ce qui est important.',
          ],
        },
      ],
    },
    {
      id: 'automated-decisions',
      title: 'Décisions automatisées',
      blocks: [
        { type: 'p', text: 'L’assistant de chat donne des réponses et des suggestions. Il ne prend aucune décision vous concernant qui produise des effets juridiques ou vous affecte de manière significative de façon similaire, comme vous accepter ou vous refuser en tant que client, fixer un prix pour vous ou décider d’un remboursement. Ces décisions sont prises par des personnes chez Plot Ledge.' },
      ],
    },
    {
      id: 'who-we-share-with',
      title: 'Avec qui nous les partageons',
      blocks: [
        { type: 'p', text: 'Ces entreprises traitent des informations pour notre compte. Chacune ne reçoit que ce dont elle a besoin pour la mission indiquée dans le tableau.' },
        {
          type: 'table',
          caption: 'Prestataires de services',
          head: ['Prestataire', 'Ce qu’il fait pour nous', 'Où il peut traiter les données'],
          rows: [
            ['Vercel', 'Héberge ce site et fournit Vercel Analytics', 'États-Unis et autres régions'],
            ['Google', 'Google Analytics, uniquement si vous acceptez les cookies de statistiques', 'États-Unis et autres régions'],
            ['Anthropic', 'Rédige les réponses de l’assistant de chat', 'États-Unis et autres régions'],
            ['Resend, ou un service équivalent d’e-mail ou de webhook', 'Nous transmet les informations de votre formulaire', 'États-Unis et autres régions'],
            ['Un service de taux de change', 'Notre serveur lui demande les taux de change quotidiens. Il ne reçoit aucune information sur les visiteurs', 'Sans objet'],
          ],
        },
        { type: 'p', text: 'Si vous nous écrivez sur WhatsApp, la politique de confidentialité de WhatsApp s’applique à cette conversation. Nous pouvons aussi partager des informations lorsque la loi l’exige. Nous ne vendons vos informations à personne.' },
      ],
    },
    {
      id: 'international-transfers',
      title: 'Transferts hors de votre pays',
      blocks: [
        { type: 'p', text: 'Certains des prestataires ci-dessus traitent des données en dehors du Pakistan, notamment aux États-Unis et dans l’Union européenne. Pour les visiteurs de l’EEE, du Royaume-Uni ou de la Suisse, nous nous appuyons sur les clauses contractuelles types de ces prestataires ou sur une garantie équivalente reconnue par le RGPD.' },
      ],
    },
    {
      id: 'how-long',
      title: 'Combien de temps nous les conservons',
      blocks: [
        {
          type: 'table',
          caption: 'Durée de conservation de chaque type d’information',
          head: ['Information', 'Durée de conservation', 'Ce qui se passe ensuite'],
          rows: [
            ['Demandes de contact', 'Aussi longtemps que nécessaire pour assurer le suivi avec vous', 'Nous les supprimons à votre demande, ou lorsqu’elles ne sont plus nécessaires à cet effet'],
            ['Conversations du chat', 'Nous ne les conservons pas', 'Elles disparaissent de votre navigateur à la fermeture de l’onglet'],
            ['Informations du formulaire de contact du chat', 'Aussi longtemps que nécessaire pour assurer le suivi avec vous', 'Nous les supprimons à votre demande, ou lorsqu’elles ne sont plus nécessaires à cet effet'],
            ['Votre choix concernant les cookies', '12 mois', 'Nous vous redemandons'],
            ['Statistiques et journaux du serveur', 'Conservés par Google et Vercel selon leurs propres calendriers', 'Nous ne les relions pas à vous'],
          ],
        },
      ],
    },
    {
      id: 'your-rights',
      title: 'Vos droits et vos choix',
      blocks: [
        { type: 'p', text: 'Où que vous soyez, vous pouvez nous demander ce que nous détenons à votre sujet, nous demander de le corriger ou nous demander de le supprimer. Le tableau ci-dessous présente les principaux droits en termes simples. Nous les appliquons à toute personne qui nous écrit, et la loi de votre pays de résidence peut vous en accorder davantage.' },
        {
          type: 'table',
          caption: 'Vos droits, ce qu’ils signifient et comment les exercer',
          head: ['Droit', 'Ce que cela signifie', 'Comment l’exercer'],
          rows: [
            ['Accès', 'Vous pouvez demander si nous détenons des informations vous concernant et en obtenir une copie.', 'Écrivez-nous (voir « Comment faire une demande »).'],
            ['Rectification', 'Vous pouvez nous demander de corriger des informations inexactes ou incomplètes.', 'Écrivez-nous en indiquant ce qu’il faut modifier.'],
            ['Suppression', 'Vous pouvez nous demander de supprimer vos informations, sauf si la loi nous oblige à les conserver.', 'Écrivez-nous en indiquant ce qu’il faut supprimer.'],
            ['Opposition et limitation', 'Vous pouvez nous demander de cesser ou de limiter l’utilisation de vos informations.', 'Écrivez-nous en indiquant ce à quoi vous vous opposez.'],
            ['Portabilité', 'Vous pouvez demander les informations que vous nous avez fournies dans un format courant et lisible par machine.', 'Écrivez-nous.'],
            ['Retrait du consentement', 'Lorsque nous nous appuyons sur votre consentement (cookies de Google Analytics), vous pouvez le retirer à tout moment. Ce qui a eu lieu auparavant n’est pas affecté.', 'Utilisez les <cookiesettings>paramètres des cookies</cookiesettings> de ce site, ou écrivez-nous.'],
            ['Réclamation', 'Vous pouvez introduire une réclamation auprès d’une autorité de protection des données.', 'Voir « Contact et réclamations ».'],
          ],
        },
        { type: 'h3', text: 'Si vous êtes au Pakistan' },
        { type: 'p', text: 'Nous traitons vos données conformément aux principes de protection des données de la loi sur la prévention des infractions électroniques de 2016 (Prevention of Electronic Crimes Act, PECA) et du projet de cadre pakistanais de protection des données personnelles. Cela signifie que nous ne les utilisons que pour la finalité pour laquelle vous nous les avez confiées et que nous les protégeons raisonnablement.' },
        { type: 'h3', text: 'Si vous êtes dans l’EEE, au Royaume-Uni ou en Suisse' },
        { type: 'p', text: 'Tous les droits du tableau ci-dessus s’appliquent à vous au titre du RGPD (ou du RGPD britannique et de la loi suisse sur la protection des données). Nous répondrons dans un délai d’un mois. Vous pouvez aussi introduire une réclamation auprès de votre autorité de contrôle locale, par exemple l’Information Commissioner’s Office au Royaume-Uni.' },
        { type: 'h3', text: 'Si vous êtes au Mexique' },
        { type: 'p', text: 'En vertu de la loi fédérale mexicaine sur la protection des données personnelles détenues par des particuliers, vous disposez des droits ARCO : accès, rectification, annulation (suppression) et opposition. Vous pouvez aussi retirer votre consentement et nous demander de limiter l’usage ou le partage de vos données. Écrivez-nous pour exercer l’un de ces droits.' },
        { type: 'h3', text: 'Si vous êtes ailleurs' },
        { type: 'p', text: 'Nous respecterons les droits que vous accorde la loi de protection des données de votre pays, dans les limites de cette loi. Écrivez-nous en nous indiquant où vous vivez.' },
        { type: 'h3', text: 'Cookies' },
        { type: 'p', text: 'Acceptez ou refusez les cookies de statistiques dans le bandeau, et changez d’avis à tout moment avec les <cookiesettings>paramètres des cookies</cookiesettings>.' },
      ],
    },
    {
      id: 'how-to-make-a-request',
      title: 'Comment faire une demande',
      blocks: [
        {
          type: 'ul',
          items: [
            'Écrivez à <mail>{email}</mail>. Indiquez le droit que vous souhaitez exercer et, si cela aide, les informations concernées.',
            'Nous pouvons vous demander des éléments nous permettant de retrouver vos informations et de confirmer votre identité, comme le nom, le numéro de téléphone ou l’e-mail que vous nous avez donnés. Nous ne demanderons pas plus que nécessaire.',
            'Nous accuserons réception de votre demande et vous répondrons avec le résultat. Nous visons une réponse dans un délai d’un mois, et plus tôt si possible.',
            'Il n’y a aucun frais. Si une demande est manifestement répétée ou infondée, ou si la loi nous permet de refuser, nous vous en expliquerons la raison.',
          ],
        },
      ],
    },
    {
      id: 'security',
      title: 'Les protéger',
      blocks: [
        { type: 'p', text: 'Ce site est servi en HTTPS, et nous n’envoyons les informations des formulaires qu’à la boîte e-mail ou au système que nous utilisons pour assurer le suivi avec vous. Aucun site ne peut promettre une sécurité parfaite : merci de ne pas saisir d’informations financières sensibles dans les formulaires ni dans le chat.' },
      ],
    },
    {
      id: 'children',
      title: 'Enfants',
      blocks: [
        { type: 'p', text: 'Plot Ledge s’adresse aux entreprises immobilières et ne vise personne de moins de 18 ans. Si vous pensez qu’un enfant nous a envoyé ses informations, écrivez à <mail>{email}</mail> et nous les supprimerons.' },
      ],
    },
    {
      id: 'contact-and-complaints',
      title: 'Contact et réclamations',
      blocks: [
        { type: 'p', text: 'Pour toute question sur cette politique ou sur vos informations, écrivez à <mail>{email}</mail> et une personne vous répondra. Nous aimerions avoir d’abord la possibilité de corriger la situation.' },
        { type: 'p', text: 'Vous avez toujours le droit d’introduire une réclamation auprès d’une autorité de protection des données, dans le pays où vous vivez ou travaillez ou là où vous pensez qu’un problème est survenu. Vous n’avez pas à nous contacter au préalable.' },
      ],
    },
    {
      id: 'changes',
      title: 'Modifications de cette politique',
      blocks: [
        { type: 'p', text: 'Lorsque nous modifions cette page, nous mettons à jour la date en haut. Si la modification affecte la manière dont nous utilisons des informations que vous nous avez déjà fournies, nous l’indiquerons ici et, lorsque la loi l’exige, nous vous demanderons à nouveau votre consentement.' },
      ],
    },
  ],
}

const cookies: Legal['cookies'] = {
  title: 'Politique relative aux cookies',
  description: 'Les cookies et le stockage du navigateur précis utilisés par ce site, ceux qui nécessitent votre consentement et comment modifier votre choix.',
  intro: 'Quels cookies ce site utilise, lesquels nécessitent votre accord et comment changer d’avis.',
  updated: '2026-11-09',
  summary: [
    'Une seule chose ici nécessite votre consentement : les cookies de Google Analytics. Ils ne se chargent que si vous les acceptez.',
    'Tout le reste est nécessaire au fonctionnement du site, par exemple pour mémoriser votre choix et garder votre chat ouvert.',
    'Nous n’utilisons aucun suivi publicitaire ni de réseaux sociaux.',
    'Accepter et refuser sont des choix équivalents, nous mémorisons le vôtre pendant 12 mois, et vous pouvez le modifier à tout moment avec le lien « Paramètres des cookies » en bas de page.',
  ],
  sections: [
    {
      id: 'what-are-cookies',
      title: 'Ce que sont les cookies et le stockage du navigateur',
      blocks: [
        { type: 'p', text: 'Les cookies sont de petits fichiers qu’un site enregistre dans votre navigateur. Le stockage local et le stockage de session jouent un rôle similaire : le stockage local reste jusqu’à son effacement, et le stockage de session disparaît à la fermeture de l’onglet. Cette page énumère tout ce qui relève de ce type sur notre site, afin que vous puissiez décider de ce que vous autorisez.' },
      ],
    },
    {
      id: 'what-we-use',
      title: 'Ce que nous utilisons',
      blocks: [
        {
          type: 'table',
          caption: 'Cookies et stockage du navigateur utilisés par ce site',
          head: ['Nom', 'Type', 'Fonction', 'Durée', 'Consentement requis'],
          rows: [
            ['_ga, _ga_*', 'Cookie, déposé par Google', 'Compte les visites et les pages vues pour que nous voyions quelles pages sont utiles.', 'Jusqu’à 2 ans', 'Oui. Déposé uniquement après votre acceptation des statistiques.'],
            ['plotledge-consent', 'Stockage local', 'Mémorise si vous avez accepté ou refusé les statistiques.', '12 mois', 'Non. Il est nécessaire pour respecter votre choix.'],
            ['plotledge-chat-v1', 'Stockage de session', 'Conserve votre conversation avec l’assistant Plot Ledge tant que l’onglet est ouvert.', 'Jusqu’à la fermeture de l’onglet', 'Non. Le chat en a besoin pour fonctionner.'],
            ['plotledge-teaser-dismissed', 'Stockage de session', 'Mémorise que vous avez fermé l’invite du chat, pour qu’elle ne réapparaisse pas.', 'Jusqu’à la fermeture de l’onglet', 'Non.'],
            ['Vercel Analytics', 'Aucun', 'Compte les visites de manière agrégée, sans cookies ni profil vous concernant.', 'Rien n’est stocké dans votre navigateur', 'Aucun cookie n’est utilisé.'],
          ],
        },
        { type: 'p', text: 'Nous n’utilisons pas de cookies de suivi publicitaire ou de réseaux sociaux.' },
      ],
    },
    {
      id: 'why-we-ask',
      title: 'Pourquoi nous demandons',
      blocks: [
        { type: 'p', text: 'Google Analytics dépose un cookie qui n’est pas strictement nécessaire au fonctionnement du site, et les lois sur la vie privée de nombreux pays exigent que nous demandions d’abord. Nous demandons donc, et nous ne chargeons rien de Google avant votre réponse. Les éléments marqués « Non » dans le tableau sont nécessaires au fonctionnement du site ou au respect de votre choix : ils ne requièrent donc pas de consentement.' },
      ],
    },
    {
      id: 'your-choice',
      title: 'Votre choix',
      blocks: [
        { type: 'p', text: 'Lors de votre première visite, un bandeau vous demande si nous pouvons utiliser les cookies de Google Analytics. Rien ne se charge depuis Google avant votre choix.' },
        {
          type: 'ul',
          items: [
            '<b>Accepter les statistiques :</b> Google Analytics se charge et dépose ses cookies.',
            '<b>Refuser les statistiques :</b> Google Analytics ne se charge jamais, et le site fonctionne exactement de la même façon.',
          ],
        },
        { type: 'p', text: 'Accepter et refuser sont des choix équivalents : les deux tiennent en un clic, ils se présentent de la même manière, et refuser ne vous coûte rien. Nous n’utilisons pas le bandeau pour vous orienter dans un sens ou dans l’autre.' },
        { type: 'p', text: 'Nous mémorisons votre choix pendant 12 mois, puis nous vous le redemandons. Vous pouvez le modifier quand vous le souhaitez. Si vous refusez après avoir accepté, nous supprimons les cookies Google que ce navigateur détient pour notre site.' },
        { type: 'cookieSettingsButton', label: 'Modifier mon choix concernant les cookies' },
      ],
    },
    {
      id: 'other-ways',
      title: 'Autres moyens de contrôler les cookies',
      blocks: [
        {
          type: 'ul',
          items: [
            'Bloquez ou supprimez les cookies dans les paramètres de votre navigateur. Ce site fonctionne sans eux.',
            'Installez le <gaoptout>module de désactivation de Google Analytics</gaoptout> pour désactiver Google Analytics sur tous les sites que vous visitez.',
            'Utilisez le mode de navigation privée de votre navigateur, qui efface les cookies à sa fermeture.',
          ],
        },
      ],
    },
    {
      id: 'third-parties',
      title: 'Google et vos données',
      blocks: [
        { type: 'p', text: 'Si vous acceptez, Google reçoit les données de visite décrites ci-dessus et les traite conformément à la <googleprivacy>politique de confidentialité de Google</googleprivacy>. Notre <privacy>politique de confidentialité</privacy> explique comment nous utilisons les résultats et où Google peut les traiter.' },
      ],
    },
    {
      id: 'changes',
      title: 'Modifications de cette politique',
      blocks: [
        { type: 'p', text: 'Si nous ajoutons un nouveau cookie ou élément de stockage nécessitant votre consentement, nous le listerons d’abord ici et vous demanderons à nouveau votre choix. Questions : <mail>{email}</mail>.' },
      ],
    },
  ],
}

const terms: Legal['terms'] = {
  title: 'Conditions d’utilisation',
  description: 'Les conditions d’utilisation du site et du service Plot Ledge : votre compte, les formules, l’usage acceptable, vos données et nos responsabilités.',
  intro: 'Les règles d’utilisation de Plot Ledge, écrites pour être lues.',
  updated: '2026-11-09',
  summary: [
    'Plot Ledge est un logiciel de suivi des parcelles, des ventes, des échéances et des paiements.',
    'Les données que vous enregistrez vous appartiennent, et vous êtes responsable de leur exactitude.',
    'Gardez votre identifiant confidentiel et ne donnez aux membres de l’équipe que l’accès dont ils ont besoin.',
    'Les formules sont facturées en roupies. Les essais, la résiliation et les remboursements sont décrits dans la politique de remboursement.',
    'Le droit applicable et la juridiction compétente pour les litiges seront confirmés dans la version définitive.',
  ],
  sections: [
    {
      id: 'agreement',
      title: 'Acceptation de ces conditions',
      blocks: [
        { type: 'p', text: 'En utilisant le site ou le service Plot Ledge, vous acceptez ces conditions. Si vous ne les acceptez pas, merci de ne pas les utiliser. Si vous utilisez Plot Ledge pour une entreprise, vous confirmez être habilité à accepter ces conditions en son nom.' },
      ],
    },
    {
      id: 'definitions',
      title: 'Définitions',
      blocks: [
        {
          type: 'ul',
          items: [
            '<b>Site</b> désigne ce site vitrine, qui présente Plot Ledge et vous permet de nous contacter.',
            '<b>Service</b> désigne le logiciel Plot Ledge auquel vous vous connectez pour suivre les parcelles, les ventes, les échéances, les paiements et les données associées.',
            '<b>Vous</b> désigne la personne, ou l’entreprise au nom de laquelle cette personne agit, qui utilise le site ou le service.',
            '<b>Nous</b> désigne Plot Ledge.',
          ],
        },
      ],
    },
    {
      id: 'website',
      title: 'Le site',
      blocks: [
        { type: 'p', text: 'Ce site présente Plot Ledge. Les descriptions, exemples et captures d’écran qui s’y trouvent montrent à quoi sert le produit et ne constituent pas une promesse de résultat commercial.' },
      ],
    },
    {
      id: 'service',
      title: 'Le service',
      blocks: [
        { type: 'p', text: 'Plot Ledge est un logiciel de suivi des parcelles, des ventes, des échéances, des paiements et des données associées. Nous nous efforçons de maintenir le service disponible et exact, et nous pouvons améliorer ou modifier les fonctionnalités au fil du temps.' },
      ],
    },
    {
      id: 'changes-to-service',
      title: 'Modifications du service',
      blocks: [
        { type: 'p', text: 'Nous pouvons ajouter, modifier ou retirer des fonctionnalités, et mettre à jour le service pour corriger des problèmes ou l’améliorer. Si nous effectuons une modification qui supprime, de manière significative, quelque chose sur lequel vous comptez, nous en informerons les titulaires de compte avant son application lorsque cela est raisonnablement possible.' },
      ],
    },
    {
      id: 'your-account',
      title: 'Votre compte',
      blocks: [
        {
          type: 'ul',
          items: [
            'Vous êtes responsable de l’exactitude des données que vous saisissez.',
            'Gardez vos identifiants confidentiels et prévenez-nous immédiatement si vous pensez que quelqu’un d’autre les a utilisés.',
            'Ne donnez aux membres de l’équipe que le rôle dont ils ont besoin. Vous êtes responsable de ce que font dans votre compte les personnes que vous y ajoutez.',
          ],
        },
      ],
    },
    {
      id: 'plans-and-payment',
      title: 'Formules, essais et paiement',
      blocks: [
        { type: 'p', text: 'Les formules sont tarifées en roupies pakistanaises et présentées dans la section tarifs de ce site, et peuvent être facturées mensuellement ou annuellement. Les nouveaux comptes commencent par un essai gratuit. Les prix et les limites des formules peuvent changer, et nous vous en informerons avant que la modification ne s’applique à votre compte.' },
        { type: 'p', text: 'Le fonctionnement des essais, de la résiliation et des remboursements est décrit dans la <refund>politique de remboursement et de résiliation</refund>.' },
      ],
    },
    {
      id: 'acceptable-use',
      title: 'Usage acceptable',
      blocks: [
        {
          type: 'ul',
          items: [
            'N’utilisez pas le service à des fins illicites ni pour tromper des acheteurs.',
            'N’essayez pas de pirater des comptes, ni de perturber, surcharger ou copier le service.',
            'Ne téléversez pas de contenu que vous n’avez pas le droit d’utiliser, ou que vous savez faux.',
          ],
        },
      ],
    },
    {
      id: 'your-data',
      title: 'Vos données',
      blocks: [
        { type: 'p', text: 'Les données que vous enregistrez dans Plot Ledge vous appartiennent. Nous ne les utilisons que pour faire fonctionner le service pour vous. Conservez vos propres copies des documents importants en exportant régulièrement des rapports. La <privacy>politique de confidentialité</privacy> explique comment nous traitons les informations collectées via ce site.' },
      ],
    },
    {
      id: 'our-rights',
      title: 'Notre logiciel et notre contenu',
      blocks: [
        { type: 'p', text: 'Nous conservons tous les droits sur le logiciel, le design, les textes et les logos de Plot Ledge. Ces conditions vous donnent le droit d’utiliser le service tant que votre compte est actif, et aucun autre droit sur ces éléments.' },
      ],
    },
    {
      id: 'third-parties',
      title: 'Services et liens de tiers',
      blocks: [
        { type: 'p', text: 'Le site et le service peuvent fonctionner avec des services exploités par d’autres entreprises, ou renvoyer vers eux, tels que l’hébergement, les statistiques, l’e-mail, WhatsApp et le fournisseur d’IA derrière l’assistant de chat. Nous ne contrôlons pas ces services et ne sommes pas responsables de leur contenu ni de leurs pratiques. Leurs propres conditions et politiques de confidentialité s’appliquent lorsque vous les utilisez.' },
      ],
    },
    {
      id: 'liability',
      title: 'Notre responsabilité',
      blocks: [
        { type: 'p', text: 'Nous fournissons le service en l’état. Dans la mesure permise par la loi, nous ne sommes pas responsables des pertes indirectes ou consécutives, telles que le manque à gagner ou un paiement manqué qui dépendait d’informations figurant dans le service.' },
      ],
    },
    {
      id: 'ending',
      title: 'Fin de votre utilisation',
      blocks: [
        { type: 'p', text: 'Vous pouvez cesser d’utiliser Plot Ledge à tout moment. Nous pouvons suspendre ou fermer un compte qui enfreint ces conditions, et nous vous en indiquerons la raison lorsque nous le pourrons.' },
      ],
    },
    {
      id: 'governing-law',
      title: 'Droit applicable et litiges',
      blocks: [
        { type: 'p', text: '[À confirmer] Le droit qui régit ces conditions, ainsi que les tribunaux ou la procédure de règlement des litiges, seront confirmés dans la version définitive de ces conditions. D’ici là, écrivez-nous d’abord à <mail>{email}</mail> afin que nous essayions de résoudre ensemble tout problème.' },
      ],
    },
    {
      id: 'severability',
      title: 'Si une partie de ces conditions ne s’applique pas',
      blocks: [
        { type: 'p', text: 'Si un tribunal ou une autorité décide qu’une partie de ces conditions ne peut pas être appliquée, le reste des conditions demeure en vigueur. Si nous n’exerçons pas immédiatement un droit, nous n’y avons pas renoncé.' },
      ],
    },
    {
      id: 'changes',
      title: 'Modifications de ces conditions',
      blocks: [
        { type: 'p', text: 'Lorsque nous modifions ces conditions, nous mettons à jour la date en haut et informons les titulaires de compte des changements importants avant leur application. Questions sur ces conditions : <mail>{email}</mail>.' },
      ],
    },
  ],
}

const refund: Legal['refund'] = {
  title: 'Politique de remboursement et de résiliation',
  description: 'Comment fonctionnent l’essai gratuit, la facturation, la résiliation et les remboursements pour les formules Plot Ledge, et comment en faire la demande.',
  intro: 'Comment fonctionnent les essais, la facturation et la résiliation, et dans quels cas nous remboursons.',
  updated: '2026-11-09',
  summary: [
    'Vous bénéficiez d’un essai gratuit de 15 jours sans aucun paiement, et vous pouvez résilier pendant l’essai sans être facturé.',
    'Les formules payantes sont facturées en roupies, à l’avance, mensuellement ou annuellement.',
    'Vous pouvez résilier à tout moment. La résiliation arrête la facturation future mais ne rembourse pas la période déjà payée.',
    'Nous examinons les remboursements pour les sommes facturées par erreur ou en cas de défaillance de notre part.',
  ],
  sections: [
    {
      id: 'at-a-glance',
      title: 'Ce qui se passe selon les cas',
      blocks: [
        {
          type: 'table',
          caption: 'Ce qui se passe dans chaque situation',
          head: ['Situation', 'Ce qui se passe'],
          rows: [
            ['Vous résiliez pendant l’essai gratuit', 'Vous n’êtes pas facturé.'],
            ['Vous résiliez une formule payante', 'La facturation future s’arrête. La période déjà payée n’est pas remboursée automatiquement.'],
            ['Vous avez été facturé par erreur ou deux fois', 'Nous examinons votre demande et remboursons le cas échéant.'],
            ['Une défaillance de notre part vous a empêché d’utiliser le service', 'Nous examinons votre demande et remboursons le cas échéant.'],
            ['Un paiement échoue', 'Voir « Paiements échoués ».'],
            ['Vous avez un contrat Enterprise', 'Les conditions de ce contrat s’appliquent lorsqu’elles diffèrent de cette page.'],
          ],
        },
      ],
    },
    {
      id: 'free-trial',
      title: 'Essai gratuit',
      blocks: [
        { type: 'p', text: 'Les nouveaux comptes commencent par un essai gratuit de 15 jours. Aucun paiement n’est nécessaire pour démarrer un essai, et vous pouvez résilier à tout moment pendant celui-ci sans être facturé.' },
      ],
    },
    {
      id: 'billing',
      title: 'Facturation',
      blocks: [
        { type: 'p', text: 'Les formules payantes sont facturées en roupies pakistanaises, à l’avance, mensuellement ou annuellement selon l’option choisie, à compter de la fin de votre essai ou du moment où vous choisissez une formule. Les prix et les limites des formules sont indiqués dans la section tarifs de ce site et peuvent changer. Nous vous en informerons avant que la modification ne s’applique à votre compte.' },
      ],
    },
    {
      id: 'taxes',
      title: 'Taxes',
      blocks: [
        { type: 'p', text: '[À confirmer] Le fait que les prix affichés incluent ou excluent les taxes, et la manière dont toute taxe apparaît sur votre facture, seront confirmés dans la version définitive de cette politique.' },
      ],
    },
    {
      id: 'failed-payments',
      title: 'Paiements échoués',
      blocks: [
        { type: 'p', text: 'Si un paiement échoue ou est refusé, votre formule peut ne pas être renouvelée. Écrivez-nous à <mail>{email}</mail> et nous vous aiderons à régler la situation. [À confirmer] Les étapes exactes, comme le délai avant lequel nous limitons l’accès, seront précisées dans la version définitive de cette politique.' },
      ],
    },
    {
      id: 'cancellation',
      title: 'Résiliation',
      blocks: [
        { type: 'p', text: 'Vous pouvez résilier à tout moment. La résiliation arrête la facturation future. Elle ne rembourse pas automatiquement la période pour laquelle vous avez déjà été facturé, qu’il s’agisse d’un mois ou d’une année.' },
      ],
    },
    {
      id: 'refunds',
      title: 'Remboursements',
      blocks: [
        { type: 'p', text: 'Nous ne proposons pas de remboursement automatique pour les périodes de facturation partiellement utilisées. Nous examinerons une demande et rembourserons le cas échéant si :' },
        {
          type: 'ul',
          items: [
            'vous avez été facturé par erreur, ou facturé deux fois, ou',
            'une défaillance technique de notre part vous a empêché d’utiliser le service.',
          ],
        },
      ],
    },
    {
      id: 'enterprise',
      title: 'Formules Enterprise',
      blocks: [
        { type: 'p', text: 'Les contrats Enterprise sur mesure peuvent prévoir leurs propres conditions de facturation et de résiliation. Celles-ci figurent dans votre contrat avec nous et s’appliquent à la place de cette page lorsqu’elles diffèrent.' },
      ],
    },
    {
      id: 'how-to-ask',
      title: 'Comment demander une résiliation ou un remboursement',
      blocks: [
        { type: 'p', text: 'Écrivez à <mail>{email}</mail> en indiquant :' },
        {
          type: 'ul',
          items: [
            'le nom ou l’e-mail de votre compte,',
            'votre formule, ainsi que la date et le montant de la facturation,',
            'ce que vous souhaitez que nous fassions, et pourquoi.',
          ],
        },
        { type: 'p', text: 'Une personne lira votre demande et vous répondra.' },
      ],
    },
  ],
}

const legal: Legal = {
  ui: {
    inShort: 'En bref',
    onThisPage: 'Sur cette page',
    lastUpdated: 'Dernière mise à jour : {date}',
    contentsLabel: 'Sommaire : {title}',
    questionsTitle: 'Des questions sur cette page ?',
    contactSentence: 'Écrivez à <mail>{email}</mail> et une personne vous répondra.',
    contactAria: 'Contact et politiques associées',
    /** Breadcrumb link back to the page that lists every legal document. */
    allDocuments: 'Tous les documents juridiques',
    policyNames: {
      privacy: 'Politique de confidentialité',
      cookies: 'Politique relative aux cookies',
      terms: 'Conditions d’utilisation',
      refund: 'Remboursement et résiliation',
    },
  },
  privacy,
  cookies,
  terms,
  refund,
}

export default legal
