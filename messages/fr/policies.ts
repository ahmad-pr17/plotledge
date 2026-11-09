// Traduction française de l’espace de noms « policies » (côté serveur uniquement) : les documents juridiques et de confiance
// au-delà de la confidentialité, des cookies, des conditions et des remboursements, ainsi que la page qui les réunit.
// Elle doit être relue par un juriste francophone qualifié avant le lancement.
import type { Messages } from '@/i18n/messages'

const policies: Messages['policies'] = {
  hub: {
    title: 'Juridique et confiance',
    description: 'Tous les documents juridiques et de confiance de Plot Ledge au même endroit : confidentialité, cookies, conditions, usage acceptable, sécurité, traitement des données et plus.',
    intro: 'Vous trouverez ici tous les documents juridiques et de confiance de Plot Ledge, regroupés selon ce que vous cherchez à savoir. Si quelque chose n’est pas clair ou manque, écrivez à <mail>{email}</mail> et une personne vous répondra.',
    groups: [
      { title: 'Vos données et votre vie privée', text: 'Ce que nous collectons, les cookies que nous utilisons et la manière dont nous traitons les données que vous enregistrez dans Plot Ledge : la politique de confidentialité, la politique relative aux cookies et le traitement des données.' },
      { title: 'Utiliser Plot Ledge', text: 'Les règles d’utilisation du service et ce qui n’est pas autorisé, ainsi que le fonctionnement des essais, de la facturation et des remboursements : les conditions d’utilisation, la politique d’usage acceptable et la politique de remboursement.' },
      { title: 'Sécurité et confiance', text: 'Comment nous protégeons vos données, comment nous signaler un problème de sécurité et quelle est l’accessibilité de ce site : la sécurité, la divulgation responsable et l’accessibilité.' },
    ],
  },
  names: { acceptableUse: 'Usage acceptable', security: 'Sécurité', dataProcessing: 'Traitement des données', accessibility: 'Accessibilité', disclosure: 'Divulgation responsable' },

  acceptableUse: {
    title: 'Politique d’usage acceptable',
    description: 'Ce que vous pouvez et ne pouvez pas faire avec Plot Ledge, votre responsabilité pour votre équipe, nos mesures en cas de manquement et comment signaler un abus.',
    intro: 'Plot Ledge conserve des données immobilières sur lesquelles de vraies personnes comptent. Cette politique indique ce que nous attendons de toute personne qui l’utilise.',
    updated: '2026-11-09',
    summary: [
      'Utilisez Plot Ledge pour une activité immobilière honnête. Ne l’utilisez pas pour tromper des acheteurs ni pour créer de faux enregistrements.',
      'N’utilisez pas abusivement les données d’autrui, n’attaquez pas le service et ne partagez pas d’identifiants.',
      'Vous êtes responsable de ce que font les membres de votre équipe dans votre compte.',
      'En cas de manquement, nous pouvons vous avertir, limiter le compte ou le suspendre, et vous pouvez nous demander de réexaminer la décision.',
      'Signalez les abus à <mail>{email}</mail>.',
    ],
    sections: [
      {
        id: 'who-this-applies-to',
        title: 'À qui s’applique cette politique',
        blocks: [
          { type: 'p', text: 'Cette politique s’applique à toute personne qui utilise le service Plot Ledge ou ce site : les titulaires de compte, les membres d’équipe qu’ils ajoutent et les visiteurs. Elle fait partie de nos <terms>conditions d’utilisation</terms>. En cas de divergence entre les deux, les conditions d’utilisation prévalent.' },
          { type: 'p', text: 'Dans cette politique, « nous » désigne Plot Ledge, « vous » désigne la personne ou l’entreprise qui utilise Plot Ledge, et « contenu » désigne tout enregistrement, fichier, texte ou donnée que vous saisissez dans le service.' },
        ],
      },
      {
        id: 'what-you-may-do',
        title: 'Ce que vous pouvez faire',
        blocks: [
          { type: 'p', text: 'Plot Ledge est conçu pour les agents immobiliers qui vendent des parcelles et pour les exploitants de lotissements. Vous pouvez l’utiliser pour :' },
          {
            type: 'ul',
            items: [
              'enregistrer des parcelles, des acheteurs, des ventes, des échéances, des paiements et les documents qui s’y rapportent ;',
              'donner aux membres de votre équipe accès aux parties du service dont ils ont besoin pour leur travail ;',
              'exporter vos propres données et télécharger vos propres sauvegardes ;',
              'importer des données que vous avez le droit de détenir.',
            ],
          },
        ],
      },
      {
        id: 'unlawful-or-deceptive-use',
        title: 'Usage illicite ou trompeur',
        blocks: [
          { type: 'p', text: 'N’utilisez pas Plot Ledge pour enfreindre la loi ni pour induire quiconque en erreur. En particulier, ne faites pas ce qui suit :' },
          {
            type: 'ul',
            items: [
              'créer ou délivrer des reçus, des enregistrements de paiement, des contrats ou d’autres documents falsifiés, modifiés ou antidatés ;',
              'tromper un acheteur sur une parcelle, par exemple sur sa propriété, son statut d’approbation, sa superficie, son prix, son emplacement ou les sommes déjà payées ;',
              'enregistrer de fausses annonces, de fausses ventes ou des parcelles que vous n’avez pas le droit de vendre ou de représenter ;',
              'utiliser le service pour blanchir de l’argent, commettre une fraude ou aider quelqu’un d’autre à le faire.',
            ],
          },
          { type: 'p', text: 'Les erreurs commises de bonne foi sont différentes. Corriger un chiffre erroné est normal. Enregistrer ce que vous savez être faux ne l’est pas.' },
        ],
      },
      {
        id: 'other-peoples-data',
        title: 'Les données d’autrui',
        blocks: [
          { type: 'p', text: 'Les données que vous enregistrez comprennent souvent des informations personnelles sur des acheteurs, des vendeurs et du personnel. Vous devez :' },
          {
            type: 'ul',
            items: [
              'avoir une raison légitime de détenir ces informations et ne les utiliser que pour votre activité immobilière ;',
              'ne pas téléverser de données personnelles obtenues par tromperie ou que vous n’avez pas le droit de détenir ;',
              'ne pas chercher à consulter, copier ou modifier les données d’un autre client, ni celles d’un autre membre d’équipe auxquelles vous n’avez pas accès ;',
              'ne pas utiliser les coordonnées d’acheteurs ou de personnel pour les harceler ou leur envoyer de la prospection sans rapport, sans base légale.',
            ],
          },
        ],
      },
      {
        id: 'service-and-security',
        title: 'Attaquer, surcharger ou copier le service',
        blocks: [
          { type: 'p', text: 'Ne faites pas ce qui suit :' },
          {
            type: 'ul',
            items: [
              'attaquer le service, le surcharger ou envoyer du trafic conçu pour le ralentir ou le mettre hors ligne ;',
              'sonder, analyser ou tester le service à la recherche de failles, sauf dans les conditions autorisées par notre <disclosure>politique de divulgation responsable</disclosure> ;',
              'chercher à contourner les limites de débit, les autorisations, les limites de votre formule ou d’autres protections ;',
              'extraire, copier ou collecter le contenu du service ou de ce site au moyen d’outils automatisés, ou procéder à de la rétro-ingénierie du logiciel ;',
              'revendre le service, le sous-licencier ou le proposer à des tiers comme le vôtre, sauf accord écrit de notre part.',
            ],
          },
          { type: 'p', text: 'Si vous découvrez un problème de sécurité, merci de nous le signaler par le biais de la politique de divulgation responsable plutôt que de poursuivre vos tests.' },
        ],
      },
      {
        id: 'spam-and-malware',
        title: 'Spam et logiciels malveillants',
        blocks: [
          {
            type: 'ul',
            items: [
              'N’utilisez pas le service ni ce site pour envoyer du spam ou des messages non sollicités en masse.',
              'Ne téléversez et n’envoyez pas de virus, de code malveillant ou de fichiers destinés à nuire à un appareil ou à un système.',
              'Ne téléversez pas de contenus que vous n’avez pas le droit d’utiliser, comme des documents ou des images appartenant à une autre entreprise.',
            ],
          },
        ],
      },
      {
        id: 'logins-and-plan-limits',
        title: 'Identifiants et limites de la formule',
        blocks: [
          {
            type: 'ul',
            items: [
              'Gardez votre identifiant confidentiel. Ne partagez pas un même identifiant entre plusieurs personnes. Ajoutez plutôt chaque personne comme membre d’équipe à part entière.',
              'N’utilisez pas l’identifiant de quelqu’un d’autre et ne laissez personne utiliser le vôtre.',
              'Ne contournez pas les limites de votre formule, par exemple en créant des comptes supplémentaires pour éviter de passer à une formule supérieure.',
            ],
          },
          { type: 'p', text: 'Les formules et leurs limites sont décrites dans la section tarifs de ce site.' },
        ],
      },
      {
        id: 'harassment-and-abuse',
        title: 'Harcèlement et abus',
        blocks: [
          { type: 'p', text: 'N’utilisez pas Plot Ledge, ni les coordonnées que vous y trouvez, pour harceler, menacer, diffamer ou discriminer quiconque. N’injuriez pas notre personnel ni les personnes qui travaillent avec nous.' },
        ],
      },
      {
        id: 'your-team',
        title: 'Votre responsabilité pour votre équipe',
        blocks: [
          { type: 'p', text: 'Vous êtes responsable de ce que font les personnes que vous ajoutez à votre compte. Concrètement, cela signifie :' },
          {
            type: 'ul',
            items: [
              'ne donner à chaque membre d’équipe que le rôle et les autorisations dont il a besoin ;',
              'vous assurer qu’il connaît et respecte cette politique ;',
              'retirer sans délai les personnes qui partent ou changent de poste.',
            ],
          },
          { type: 'p', text: 'Notre <security>page sécurité</security> donne plus de détails sur les rôles et sur ce que les clients peuvent faire pour protéger un compte.' },
        ],
      },
      {
        id: 'what-we-may-do',
        title: 'Ce que nous pouvons faire en cas de manquement',
        blocks: [
          { type: 'p', text: 'Si nous estimons que cette politique n’a pas été respectée, nous pouvons prendre la mesure adaptée au problème. Selon sa gravité, nous pouvons :' },
          {
            type: 'ul',
            items: [
              'vous adresser un avertissement et vous demander de corriger le problème ;',
              'limiter certaines fonctionnalités ou certains accès ;',
              'suspendre ou fermer un compte ;',
              'supprimer ou bloquer un contenu illicite ou contraire à cette politique ;',
              'communiquer des informations aux autorités lorsque la loi l’exige ou en cas de demande légale.',
            ],
          },
          { type: 'p', text: 'Lorsque le risque est urgent, par exemple en cas d’attaque contre le service ou de menace pour d’autres clients, nous pouvons agir d’abord et nous expliquer ensuite.' },
        ],
      },
      {
        id: 'notice-and-appeal',
        title: 'Notification et recours',
        blocks: [
          { type: 'p', text: 'Sauf si la loi ou un risque urgent nous en empêche, nous indiquerons au titulaire du compte ce que nous avons constaté et ce que nous faisons, et lui donnerons la possibilité de répondre avant de prendre une mesure grave. Si vous pensez que nous nous sommes trompés, écrivez à <mail>{email}</mail> en indiquant le nom de votre compte et vos raisons. Dans la mesure du possible, une personne qui n’a pas participé à la première décision la réexaminera. Nous visons une réponse dans un délai de [À confirmer].' },
        ],
      },
      {
        id: 'reporting-abuse',
        title: 'Signaler un abus',
        blocks: [
          { type: 'p', text: 'Si vous pensez que quelqu’un enfreint cette politique, par exemple avec un reçu falsifié ou une fausse annonce qui utilise Plot Ledge, écrivez à <mail>{email}</mail>. Indiquez-nous ce que vous avez vu, où et quand, et joignez tout ce qui nous aide à le retrouver. Pour les problèmes de sécurité, utilisez plutôt la <disclosure>politique de divulgation responsable</disclosure>.' },
        ],
      },
      {
        id: 'changes',
        title: 'Modifications de cette politique',
        blocks: [
          { type: 'p', text: 'Lorsque nous modifions cette politique, nous mettons à jour la date en haut et informons les titulaires de compte des changements importants avant leur application. Les autres documents sont listés sur la <legalhub>page juridique et confiance</legalhub>.' },
        ],
      },
    ],
  },

  security: {
    title: 'Sécurité',
    description: 'Comment Plot Ledge protège vos données : hébergement, séparation entre clients, contrôle d’accès, connexion, journal d’audit, sauvegardes et ce que vous pouvez faire.',
    intro: 'Cette page explique en termes simples comment nous protégeons les données que vous conservez dans Plot Ledge, et ce que nous vous demandons de faire de votre côté.',
    updated: '2026-11-09',
    summary: [
      'Les données de chaque client sont séparées au niveau de la base de données : un client ne peut pas voir celles d’un autre.',
      'Les rôles et les autorisations déterminent ce que chaque membre d’équipe peut voir et faire, et un journal d’audit consigne les actions importantes.',
      'Les mots de passe sont stockés sous forme hachée, les tentatives de connexion sont limitées en fréquence et tout est servi en HTTPS.',
      'Vous pouvez à tout moment exporter vos données et télécharger une sauvegarde complète.',
      'Cette page ne revendique aucune certification délivrée par un tiers. Pour signaler un problème de sécurité, consultez notre <disclosure>politique de divulgation responsable</disclosure>.',
    ],
    sections: [
      {
        id: 'our-approach',
        title: 'Notre approche',
        blocks: [
          { type: 'p', text: 'Plot Ledge conserve des données importantes pour votre activité et pour vos acheteurs : parcelles, ventes, échéances, paiements et informations personnelles qui y sont liées. Nous essayons de les protéger par quelques mesures simples et complémentaires plutôt que par une grande promesse. Aucun système n’est parfaitement sûr, et nous ne prétendons pas que le nôtre le soit.' },
          { type: 'p', text: 'Dans cette page, « nous » désigne Plot Ledge et « client » désigne l’entreprise titulaire d’un compte chez nous.' },
        ],
      },
      {
        id: 'hosting',
        title: 'Hébergement et infrastructure',
        blocks: [
          { type: 'p', text: 'Plot Ledge n’exploite pas ses propres centres de données. Nous faisons appel à des prestataires reconnus :' },
          {
            type: 'ul',
            items: [
              'les données du CRM sont stockées dans une base de données PostgreSQL gérée, fournie par Neon ;',
              'l’application et ce site fonctionnent sur Vercel ;',
              'tout est servi en HTTPS.',
            ],
          },
          { type: 'p', text: 'Ces prestataires sont listés, avec le rôle de chacun, sur notre <dpa>page traitement des données et sous-traitants ultérieurs</dpa>. Les horodatages sont stockés en UTC afin que les données restent cohérentes où qu’elles soient consultées.' },
        ],
      },
      {
        id: 'separation',
        title: 'Séparation entre clients',
        blocks: [
          { type: 'p', text: 'Plot Ledge est un service multi-locataire : de nombreux clients utilisent le même système. Les données de chaque client sont séparées au niveau de la base de données grâce à la sécurité au niveau des lignes (row-level security), de sorte que la base de données elle-même limite ce qu’un client peut lire. Vos données vous appartiennent et ne sont pas visibles par les autres clients.' },
        ],
      },
      {
        id: 'access-control',
        title: 'Contrôle d’accès et rôles',
        blocks: [
          { type: 'p', text: 'Dans votre compte, les rôles et les autorisations déterminent ce que chaque membre d’équipe peut voir et faire. Les rôles standard sont propriétaire ou administrateur, comptable et commercial. Vous pouvez aussi créer vos propres ensembles d’autorisations selon vos besoins. Ne donner à chacun que ce que son travail exige limite les dégâts si un identifiant est un jour utilisé à mauvais escient.' },
        ],
      },
      {
        id: 'sign-in',
        title: 'Connexion et sessions',
        blocks: [
          {
            type: 'ul',
            items: [
              'Les mots de passe sont stockés sous forme hachée. Nous ne les conservons jamais en clair et nous ne pouvons pas les lire.',
              'Les échecs de connexion répétés sont limités en fréquence, par compte et par adresse réseau.',
              'Tout le trafic vers notre API est limité en fréquence par adresse réseau.',
              'Lorsqu’une personne change son mot de passe, ses sessions prennent fin.',
              'Des en-têtes de sécurité sont définis, et l’accès depuis les scripts d’autres sites est restreint à une liste d’autorisation.',
            ],
          },
        ],
      },
      {
        id: 'encryption',
        title: 'Chiffrement',
        blocks: [
          { type: 'p', text: 'Les données circulent entre votre navigateur et Plot Ledge en HTTPS, ce qui les chiffre pendant le transfert. Notre fournisseur de base de données gère le chiffrement des données stockées. [À confirmer] Les modalités exactes de chiffrement au repos de nos prestataires seront confirmées avant le lancement.' },
        ],
      },
      {
        id: 'audit-trail',
        title: 'Journal d’audit',
        blocks: [
          { type: 'p', text: 'Un journal d’audit consigne les actions importantes dans votre compte, afin que vous puissiez voir ce qui a changé et qui l’a fait. Les propriétaires et administrateurs du compte peuvent s’en servir pour examiner des erreurs ou des modifications inattendues.' },
        ],
      },
      {
        id: 'backups-and-exports',
        title: 'Sauvegardes et exports',
        blocks: [
          { type: 'p', text: 'Vous n’êtes pas enfermé dans le service et vous ne dépendez pas uniquement de nous pour vos propres données. À tout moment, vous pouvez :' },
          {
            type: 'ul',
            items: [
              'exporter vos données vers Excel ou CSV ;',
              'télécharger une sauvegarde complète au format JSON ;',
              'importer des données depuis Excel.',
            ],
          },
          { type: 'p', text: '[À confirmer] La fréquence de nos propres sauvegardes de la base de données, leur durée de conservation et la rapidité avec laquelle nous pouvons les restaurer seront précisées ici avant le lancement. Nous vous recommandons d’exporter vos données régulièrement, vous aussi.' },
        ],
      },
      {
        id: 'payments',
        title: 'Paiements',
        blocks: [
          { type: 'p', text: 'Les abonnements se paient par carte via Stripe, ou par des moyens pakistanais tels que JazzCash et OPay. Plot Ledge ne stocke pas les numéros de carte complets : ce sont les prestataires de paiement qui les traitent. [À confirmer] Ce site ne prend lui-même aucun paiement et ne comporte ni comptes ni connexion.' },
        ],
      },
      {
        id: 'our-staff',
        title: 'Accès de notre propre personnel',
        blocks: [
          { type: 'p', text: 'Nous n’utilisons les données des clients que pour faire fonctionner le service pour vous. Qui, chez Plot Ledge, peut accéder aux données de production, comment cet accès est autorisé et comment il est journalisé est [À confirmer].' },
        ],
      },
      {
        id: 'incidents',
        title: 'En cas de problème',
        blocks: [
          { type: 'p', text: 'Si nous découvrons un incident de sécurité qui touche vos données, nous mènerons l’enquête, prendrons des mesures pour le contenir et informerons les clients concernés dans les meilleurs délais, en indiquant ce que nous savons et ce que nous recommandons. La notification relative aux données personnelles est décrite sur notre <dpa>page traitement des données</dpa>.' },
        ],
      },
      {
        id: 'what-customers-can-do',
        title: 'Ce que vous pouvez faire',
        blocks: [
          { type: 'p', text: 'La sécurité est une responsabilité partagée. Les mesures les plus utiles de votre côté sont les suivantes :' },
          {
            type: 'ul',
            items: [
              'utiliser des mots de passe longs et uniques et ne pas partager un identifiant entre plusieurs personnes ;',
              'donner à chaque membre d’équipe le rôle le plus restreint qui lui permette de faire son travail ;',
              'retirer les personnes de votre compte dès qu’elles partent ;',
              'consulter le journal d’audit de temps en temps ;',
              'exporter vos données et télécharger une sauvegarde régulièrement ;',
              'nous prévenir immédiatement si vous pensez qu’un compte a été utilisé à mauvais escient.',
            ],
          },
        ],
      },
      {
        id: 'certifications',
        title: 'Certifications',
        blocks: [
          { type: 'p', text: 'Cette page ne revendique aucune certification ni aucun audit réalisé par un tiers. Nous décrivons ce que nous faisons, et non une norme au regard de laquelle nous aurions été certifiés. Si cela change, nous l’indiquerons ici en précisant la norme et la date.' },
        ],
      },
      {
        id: 'report-a-problem',
        title: 'Signaler un problème de sécurité',
        blocks: [
          { type: 'p', text: 'Si vous pensez avoir découvert une faille, merci de nous la signaler par le biais de la <disclosure>politique de divulgation responsable</disclosure>. Pour toute autre question sur cette page, écrivez à <mail>{email}</mail>. Consultez aussi la <aup>politique d’usage acceptable</aup> et la <legalhub>page juridique et confiance</legalhub>.' },
        ],
      },
    ],
  },

  dataProcessing: {
    title: 'Traitement des données et sous-traitants ultérieurs',
    description: 'Qui est responsable de quelles données, comment Plot Ledge traite les données du CRM pour ses clients, les prestataires que nous utilisons et comment obtenir un avenant de traitement.',
    intro: 'Cette page explique qui est responsable de quoi lorsque vous enregistrez des données dans Plot Ledge, et quels prestataires nous aident à l’exploiter.',
    updated: '2026-11-09',
    summary: [
      'Vous êtes responsable des données de vos acheteurs et de votre personnel. Nous traitons les données de votre CRM pour votre compte, uniquement pour faire fonctionner le service.',
      'Pour ce site et pour les informations de compte, Plot Ledge est responsable ; voir la politique de confidentialité.',
      'Les prestataires que nous utilisons sont listés ci-dessous avec le rôle de chacun.',
      'Vous pouvez exporter vos données à tout moment. Le délai de suppression après résiliation reste à confirmer.',
      'Un avenant de traitement des données signé est disponible sur demande par e-mail.',
    ],
    sections: [
      {
        id: 'purpose',
        title: 'Objet de cette page',
        blocks: [
          { type: 'p', text: 'Vos données Plot Ledge contiennent des informations personnelles sur d’autres personnes, comme des acheteurs, des vendeurs et du personnel. Dans de nombreux pays, la législation sur la vie privée attend de l’entreprise qui détient ces informations et du service qui les stocke qu’ils conviennent de qui fait quoi. Cette page en fixe les termes. Elle complète nos <terms>conditions d’utilisation</terms>. Les informations collectées via ce site vitrine relèvent de notre <privacy>politique de confidentialité</privacy>.' },
          { type: 'p', text: 'Dans cette page, « nous » désigne Plot Ledge, « client » désigne l’entreprise titulaire d’un compte et « données du CRM » désigne le contenu qu’un client enregistre dans le service Plot Ledge.' },
        ],
      },
      {
        id: 'roles',
        title: 'Qui est responsable de quoi',
        blocks: [
          {
            type: 'table',
            caption: 'Rôles pour chaque type de données',
            head: ['Données', 'Client', 'Plot Ledge'],
            rows: [
              ['Données du CRM : acheteurs, vendeurs, ventes, échéances, paiements et informations sur le personnel que vous enregistrez', 'Responsable de traitement. Vous décidez pourquoi et comment les données sont utilisées.', 'Sous-traitant. Nous les traitons pour votre compte, pour faire fonctionner le service.'],
              ['Visiteurs du site et personnes qui nous contactent', 'Sans objet', 'Responsable de traitement. Voir la <privacy>politique de confidentialité</privacy>.'],
              ['Informations de compte du client et de ses membres d’équipe, comme les noms, les adresses e-mail et la formule', 'Sans objet', 'Responsable de traitement, pour la gestion des comptes et la facturation. Voir la <privacy>politique de confidentialité</privacy>.'],
            ],
          },
          { type: 'p', text: 'Ces termes viennent de lois sur la protection des données telles que le RGPD. Si votre droit local emploie d’autres termes, nous appliquons la même logique : vous décidez de ce qui est fait des données, et nous le faisons pour vous.' },
        ],
      },
      {
        id: 'what-we-process',
        title: 'Ce que nous traitons et pourquoi',
        blocks: [
          { type: 'p', text: 'Nous traitons les données du CRM uniquement pour vous fournir le service. Cela comprend leur stockage, leur affichage aux membres d’équipe que vous autorisez, la production de rapports et d’exports, le maintien de la sécurité du service et la résolution des problèmes. Les données que vous enregistrez peuvent comprendre des noms, des coordonnées, des numéros de CNIC, des informations sur les parcelles et les paiements, et des notes, selon ce que vous choisissez de saisir. C’est vous qui décidez de ce qui y figure.' },
        ],
      },
      {
        id: 'instructions',
        title: 'Vos instructions',
        blocks: [
          { type: 'p', text: 'Nous ne traitons les données du CRM que sur vos instructions. Vos instructions sont constituées de cette page, des <terms>conditions d’utilisation</terms> et de la manière dont vous utilisez et configurez le service. Nous n’utiliserons pas les données de votre CRM à nos propres fins, par exemple publicitaires, et nous ne les vendons pas. Si nous estimons qu’une instruction enfreint la loi, nous vous le dirons.' },
        ],
      },
      {
        id: 'confidentiality',
        title: 'Confidentialité',
        blocks: [
          { type: 'p', text: 'Nous gardons les données du CRM confidentielles. Toute personne chez Plot Ledge susceptible d’y accéder est tenue à une obligation de confidentialité. [À confirmer] La manière dont l’accès du personnel est limité et journalisé sera décrite avant le lancement.' },
        ],
      },
      {
        id: 'security-measures',
        title: 'Mesures de sécurité',
        blocks: [
          { type: 'p', text: 'Nous protégeons les données du CRM par les mesures décrites sur notre <security>page sécurité</security>, notamment la séparation entre clients, l’accès par rôle, les mots de passe hachés, la limitation de fréquence, le HTTPS et un journal d’audit. Nous pouvons améliorer ces mesures au fil du temps et ne les affaiblirons pas d’une manière qui réduirait le niveau de protection.' },
        ],
      },
      {
        id: 'subprocessors',
        title: 'Sous-traitants ultérieurs',
        blocks: [
          { type: 'p', text: 'Nous faisons appel à d’autres entreprises pour nous aider à exploiter Plot Ledge. Vous nous autorisez à recourir à celles listées ci-dessous. Nous restons responsables à leur égard, et nous demandons à chacune de protéger les données de manière appropriée.' },
          {
            type: 'table',
            caption: 'Prestataires que nous utilisons, leur rôle, leur localisation et les données concernées',
            head: ['Prestataire', 'Ce qu’il fait', 'Où', 'Données concernées'],
            rows: [
              ['Neon', 'Base de données PostgreSQL gérée qui stocke les données du CRM', '[À confirmer]', 'Données du CRM et données de compte'],
              ['Vercel', 'Héberge l’application Plot Ledge et ce site ; fournit des statistiques sans cookies pour le site', 'États-Unis et autres régions', 'Données transitant par l’application ; données de visite du site'],
              ['Stripe', 'Paiements par carte pour les abonnements', '[À confirmer]', 'Informations de facturation et de paiement. Plot Ledge ne stocke pas les numéros de carte complets.'],
              ['JazzCash', 'Paiements pakistanais par portefeuille mobile pour les abonnements', 'Pakistan [À confirmer]', 'Informations de facturation et de paiement'],
              ['OPay', 'Paiements pakistanais pour les abonnements', '[À confirmer]', 'Informations de facturation et de paiement'],
              ['Resend, ou un service équivalent', 'Achemine les messages envoyés via nos formulaires de contact', 'États-Unis et autres régions', 'Informations que vous saisissez dans nos formulaires'],
              ['Anthropic', 'Rédige les réponses de l’assistant de chat de ce site uniquement', 'États-Unis et autres régions', 'Messages saisis dans le chat du site. Aucune donnée du CRM.'],
            ],
          },
        ],
      },
      {
        id: 'changes-to-subprocessors',
        title: 'Modification des sous-traitants ultérieurs',
        blocks: [
          { type: 'p', text: 'Nous mettrons ce tableau à jour lorsque nous ajouterons ou remplacerons un prestataire. Nous annoncerons les changements aux clients [À confirmer] avant que le nouveau prestataire ne traite des données du CRM, et les clients qui s’y opposent pour un motif légitime peuvent écrire à <mail>{email}</mail>. Si nous ne parvenons pas à résoudre l’objection, vous pouvez cesser d’utiliser le service et exporter vos données.' },
        ],
      },
      {
        id: 'international-transfers',
        title: 'Transferts hors de votre pays',
        blocks: [
          { type: 'p', text: 'Certains des prestataires ci-dessus peuvent traiter des données en dehors du Pakistan, notamment aux États-Unis et dans l’Union européenne. Lorsque la loi exige une garantie pour de tels transferts, nous nous appuyons sur les clauses contractuelles types du prestataire ou sur un mécanisme équivalent. [À confirmer] La région où la base de données du CRM est hébergée sera indiquée ici avant le lancement.' },
        ],
      },
      {
        id: 'data-subject-requests',
        title: 'Vous aider à répondre aux demandes des personnes concernées',
        blocks: [
          { type: 'p', text: 'Les personnes dont vous détenez les informations, comme des acheteurs, peuvent vous demander de les consulter, de les corriger ou de les supprimer. Vous pouvez retrouver, modifier et exporter les données vous-même dans le service. Si vous ne le pouvez pas, écrivez à <mail>{email}</mail> et nous vous aiderons dans des limites raisonnables. Si une personne nous contacte directement au sujet de données dont vous êtes responsable, nous vous transmettrons la demande plutôt que d’y répondre nous-mêmes.' },
        ],
      },
      {
        id: 'breach-notification',
        title: 'Violations de données personnelles',
        blocks: [
          { type: 'p', text: 'Si nous avons connaissance d’une violation de la sécurité qui touche des données personnelles de votre CRM, nous vous en informerons dans les meilleurs délais. Nous vous indiquerons ce qui s’est passé, quelles données sont concernées pour autant que nous le sachions, ce que nous avons fait et ce que nous vous recommandons de faire. [À confirmer] Un délai cible pour cette notification pourra être ajouté.' },
        ],
      },
      {
        id: 'return-and-deletion',
        title: 'Restitution et suppression',
        blocks: [
          { type: 'p', text: 'Vous pouvez à tout moment exporter vos données vers Excel ou CSV et télécharger une sauvegarde JSON complète, y compris avant de résilier. Après votre résiliation, nous supprimerons les données de votre CRM dans un délai de [À confirmer], sauf lorsque la loi nous oblige à conserver certaines informations. Les données supprimées peuvent subsister quelque temps dans les sauvegardes des prestataires, jusqu’à leur écrasement. [À confirmer]' },
        ],
      },
      {
        id: 'audits',
        title: 'Informations et audits',
        blocks: [
          { type: 'p', text: 'Sur demande raisonnable, nous vous fournirons les informations nécessaires pour démontrer que nous respectons cette page. [À confirmer] La possibilité d’audits sur site ou de rapports de tiers sera précisée ici. Notre <security>page sécurité</security> ne revendique aucune certification.' },
        ],
      },
      {
        id: 'dpa',
        title: 'Obtenir un avenant signé',
        blocks: [
          { type: 'p', text: 'Si votre entreprise a besoin d’un avenant de traitement des données signé, écrivez à <mail>{email}</mail> en indiquant le nom de votre société et la personne qui signera. Nous vous en enverrons un exemplaire sur demande. Les questions sur cette page sont les bienvenues à la même adresse. Tous les documents sont listés sur la <legalhub>page juridique et confiance</legalhub>.' },
        ],
      },
    ],
  },

  accessibility: {
    title: 'Déclaration d’accessibilité',
    description: 'Comment ce site vise le niveau AA des WCAG 2.2, ce que nous avons fait jusqu’ici, les limites connues et comment demander de l’aide ou nous faire part de vos retours.',
    intro: 'Nous voulons que chacun puisse utiliser ce site. Cette déclaration indique ce que nous avons fait, où nous sommes en deçà et comment nous signaler un élément qui ne fonctionne pas pour vous.',
    updated: '2026-11-09',
    summary: [
      'Nous visons le niveau AA des WCAG 2.2 pour ce site.',
      'Le site fonctionne au clavier, comporte un lien d’évitement et un focus visible, et respecte les réglages de réduction des animations.',
      'Il existe en huit langues, dont l’arabe et l’ourdou, qui se lisent de droite à gauche.',
      'Il n’a pas encore fait l’objet d’un audit d’accessibilité indépendant.',
      'Si quelque chose ne fonctionne pas pour vous, écrivez à <mail>{email}</mail>.',
    ],
    sections: [
      {
        id: 'our-commitment',
        title: 'Notre engagement',
        blocks: [
          { type: 'p', text: 'Plot Ledge souhaite que son site soit utilisable par le plus grand nombre, y compris par les personnes qui utilisent un clavier, un lecteur d’écran, un agrandissement ou un téléphone. Notre objectif est le niveau AA des Web Content Accessibility Guidelines (WCAG) version 2.2.' },
          { type: 'p', text: 'Cette déclaration porte sur ce site vitrine. Le CRM auquel vous vous connectez est un produit distinct ; il n’est pas décrit ici.' },
        ],
      },
      {
        id: 'status',
        title: 'Où nous en sommes aujourd’hui',
        blocks: [
          { type: 'p', text: 'Nous travaillons à atteindre le niveau AA des WCAG 2.2 mais nous ne prétendons pas être pleinement conformes. Le site n’a pas fait l’objet d’un audit d’accessibilité indépendant. Nous l’avons testé nous-mêmes au fil de sa conception. [À confirmer] La date et la méthode de notre dernière évaluation seront ajoutées ici.' },
        ],
      },
      {
        id: 'what-we-have-done',
        title: 'Ce que nous avons fait',
        blocks: [
          { type: 'ul', items: [
            'Tout le site peut être utilisé au clavier, et l’élément qui a le focus est clairement visible.',
            'Un lien « Aller au contenu » permet de passer l’en-tête.',
            'Les boutons et autres commandes font au moins 44 pixels de haut, pour être plus faciles à atteindre, et le texte n’est jamais plus petit que 12 pixels.',
            'Les champs de formulaire ont des libellés, et les liens utilisent un texte descriptif plutôt que « cliquez ici ».',
            'La palette de couleurs crème clair et émeraude a été choisie pour offrir un contraste lisible.',
            'Les animations sont réduites ou supprimées si votre appareil est réglé pour préférer un mouvement réduit.',
            'Les pages sont conçues pour s’adapter aux différentes tailles d’écran et au zoom.',
          ] },
        ],
      },
      {
        id: 'languages',
        title: 'Langues et sens de lecture',
        blocks: [
          { type: 'p', text: 'Le site est disponible en huit langues. L’arabe et l’ourdou s’affichent de droite à gauche, et la mise en page est inversée en conséquence. Vous pouvez changer de langue depuis l’en-tête ou le pied de page, sur n’importe quelle page.' },
          { type: 'p', text: 'Certaines traductions sont assistées par machine et peuvent contenir des erreurs. Nous sommes en train de les relire. Si une traduction est erronée ou difficile à comprendre, merci de nous le signaler.' },
        ],
      },
      {
        id: 'known-limitations',
        title: 'Limites connues',
        blocks: [
          { type: 'p', text: 'Nous avons connaissance des lacunes suivantes :' },
          { type: 'ul', items: [
            'Les maquettes du produit sur la page d’accueil sont des illustrations. Elles ne sont pas une copie fonctionnelle du produit et peuvent ne pas être entièrement accessibles aux lecteurs d’écran.',
            'L’assistant de chat est fourni avec l’aide d’un tiers et peut être moins accessible que le reste de la page.',
            'Les documents PDF téléchargeables peuvent ne pas être entièrement accessibles.',
            'Les traductions assistées par machine peuvent contenir des erreurs qui nuisent à la clarté d’une page.',
            'Nous avons pu passer à côté d’autres problèmes. Dites-le-nous si vous en trouvez un.',
          ] },
        ],
      },
      {
        id: 'third-party-content',
        title: 'Contenus de tiers',
        blocks: [
          { type: 'p', text: 'Certaines fonctionnalités proviennent d’autres entreprises, comme l’assistant de chat. Nous ne contrôlons pas leur accessibilité, mais nous les choisissons avec soin et leur signalerons les problèmes lorsque nous le pourrons.' },
        ],
      },
      {
        id: 'feedback',
        title: 'Retours et formats alternatifs',
        blocks: [
          { type: 'p', text: 'Si vous ne pouvez pas utiliser une partie de ce site, ou si vous avez besoin d’un contenu dans un autre format, par exemple un document lu à voix haute ou en gros caractères, écrivez à <mail>{email}</mail>. Merci de nous indiquer :' },
          { type: 'ul', items: [
            'la page ou la fonctionnalité concernée, et son adresse si possible ;',
            'ce qui n’a pas fonctionné et ce que vous essayiez de faire ;',
            'le navigateur, l’appareil et la technologie d’assistance que vous utilisez, si vous acceptez de les partager.',
          ] },
          { type: 'p', text: 'Vous pouvez aussi nous joindre sur WhatsApp ou par le formulaire de contact de ce site.' },
        ],
      },
      {
        id: 'how-we-respond',
        title: 'Comment nous répondons',
        blocks: [
          { type: 'p', text: 'Une personne lira votre message. Nous visons une réponse dans un délai de [À confirmer], avec ce que nous pouvons faire et à quelle échéance. Si nous ne pouvons pas corriger rapidement un problème, nous vous proposerons un autre moyen d’obtenir ce dont vous avez besoin.' },
        ],
      },
      {
        id: 'complaints',
        title: 'Si vous n’êtes pas satisfait',
        blocks: [
          { type: 'p', text: 'Si notre réponse ne vous satisfait pas, écrivez-nous à nouveau en le précisant, et nous examinerons votre demande une seconde fois. Vous pouvez aussi avoir le droit de saisir un organisme public de votre pays. [À confirmer]' },
        ],
      },
      {
        id: 'updates',
        title: 'Mises à jour de cette déclaration',
        blocks: [
          { type: 'p', text: 'Nous mettrons cette déclaration à jour lorsque notre site, notre évaluation ou nos limites connues changeront. La date en haut indique sa dernière mise à jour. Consultez aussi notre <privacy>politique de confidentialité</privacy> et la <legalhub>page juridique et confiance</legalhub>.' },
        ],
      },
    ],
  },

  disclosure: {
    title: 'Politique de divulgation responsable',
    description: 'Comment signaler un problème de sécurité dans Plot Ledge, ce que nous demandons aux chercheurs, ce que nous promettons en retour et ce qui est ou non dans le périmètre.',
    intro: 'Si vous découvrez une faille de sécurité dans Plot Ledge, nous voulons le savoir. Cette politique explique comment la signaler en toute sécurité et ce que vous pouvez attendre de nous.',
    updated: '2026-11-09',
    summary: [
      'Signalez une faille présumée à <mail>{email}</mail> avec l’objet « Security report ».',
      'Ne testez que sur votre propre compte et vos propres données, et arrêtez-vous dès que vous avez démontré le problème.',
      'N’endommagez pas de données, n’attaquez pas le service et n’employez pas d’ingénierie sociale.',
      'Nous accuserons réception de votre signalement, vous tiendrons informé et vous citerons si vous le souhaitez.',
      'Nous ne proposons pas de récompense en argent pour le moment.',
    ],
    sections: [
      {
        id: 'purpose',
        title: 'Objet',
        blocks: [
          { type: 'p', text: 'Plot Ledge conserve des données immobilières et de paiement pour ses clients, et nous prenons donc les signalements de failles au sérieux. Nous accueillons favorablement les recherches menées de bonne foi qui respectent cette politique. Dans cette politique, « nous » désigne Plot Ledge et « vous » désigne la personne qui fait un signalement.' },
        ],
      },
      {
        id: 'scope',
        title: 'Ce qui est dans le périmètre',
        blocks: [
          { type: 'p', text: 'Cette politique couvre :' },
          { type: 'ul', items: [
            'plotledge.com, ce site vitrine ;',
            'app.plotledge.com, l’application web du CRM Plot Ledge, et son API.',
          ] },
          { type: 'p', text: 'Les services exploités par d’autres entreprises, comme nos prestataires d’hébergement, de paiement et d’e-mail, ne sont pas couverts. Merci de signaler les problèmes les concernant à l’entreprise qui les exploite.' },
        ],
      },
      {
        id: 'how-to-report',
        title: 'Comment signaler',
        blocks: [
          { type: 'p', text: 'Écrivez à <mail>{email}</mail> avec l’objet « Security report ». [À confirmer] Une adresse dédiée à la sécurité pourra remplacer celle-ci. Si possible, écrivez en anglais, et ne publiez pas les détails au préalable.' },
        ],
      },
      {
        id: 'what-to-include',
        title: 'Ce qu’il faut inclure',
        blocks: [
          { type: 'ul', items: [
            'la nature de la faille et son emplacement, avec l’adresse ou la fonctionnalité concernée ;',
            'les étapes pour la reproduire, aussi clairement que possible ;',
            'ce que, selon vous, quelqu’un pourrait en faire ;',
            'les captures d’écran, requêtes ou autres preuves qui nous aident à la confirmer ;',
            'comment vous souhaitez être contacté et si vous voulez être cité.',
          ] },
          { type: 'p', text: 'Merci de ne pas inclure de données réelles de clients dans votre signalement. Décrivez-les plutôt.' },
        ],
      },
      {
        id: 'what-we-ask',
        title: 'Ce que nous vous demandons',
        blocks: [
          { type: 'p', text: 'Pour assurer la sécurité de nos clients, merci de :' },
          { type: 'ul', items: [
            'n’utiliser que votre propre compte et vos propres données de test ;',
            'ne pas lire, modifier, copier ni supprimer les données d’un autre client. Si vous y accédez par accident, arrêtez-vous et dites-le-nous, et n’utilisez que le strict minimum nécessaire pour démontrer le problème ;',
            'ne pas détruire de données ni perturber le service ;',
            'ne pas mener d’attaques par déni de service ni d’attaques automatisées à fort volume ;',
            'ne pas recourir à l’ingénierie sociale, à l’hameçonnage ni à des attaques physiques contre notre personnel, nos clients ou nos prestataires ;',
            'ne pas envoyer de spam ni laisser de porte dérobée ;',
            'nous laisser un délai raisonnable pour corriger le problème avant de le rendre public. Nous demandons [À confirmer].',
          ] },
        ],
      },
      {
        id: 'out-of-scope',
        title: 'Ce qui est hors périmètre',
        blocks: [
          { type: 'p', text: 'Les éléments suivants ne sont généralement pas considérés comme des failles de sécurité, et nous vous demandons de ne pas les signaler :' },
          { type: 'ul', items: [
            'les résultats d’outils d’analyse automatisés sans impact réel ;',
            'l’absence d’en-têtes ou de réglages recommandés sans risque démontré ;',
            'les attaques qui nécessitent un accès physique à un appareil ou l’ordinateur compromis d’un utilisateur ;',
            'les tests de déni de service, de spam ou de force brute ;',
            'l’ingénierie sociale visant notre personnel ou nos clients ;',
            'les failles de services tiers que nous ne contrôlons pas ;',
            'un utilisateur qui partage ou perd simplement son propre mot de passe.',
          ] },
          { type: 'p', text: 'Si vous hésitez, envoyez-le quand même et nous vous répondrons.' },
        ],
      },
      {
        id: 'our-commitments',
        title: 'Ce que nous promettons',
        blocks: [
          { type: 'ul', items: [
            'Nous accuserons réception de votre signalement dans un délai de [À confirmer].',
            'Nous l’examinerons et vous tiendrons informé de l’avancement.',
            'Nous vous préviendrons lorsqu’il sera corrigé, et le corrigerons aussi vite que nous le pourrons raisonnablement.',
            'Si vous le souhaitez, nous vous remercierons publiquement, par votre nom ou votre pseudonyme, une fois la faille corrigée. Si vous préférez rester anonyme, nous le respecterons.',
            'Nous traiterons votre signalement et vos coordonnées de manière confidentielle et ne les utiliserons que pour donner suite au signalement.',
          ] },
        ],
      },
      {
        id: 'rewards',
        title: 'Récompenses',
        blocks: [
          { type: 'p', text: 'Plot Ledge n’a pas de programme de bug bounty et ne promet aucune rémunération pour les signalements. [À confirmer] Si cela change, nous l’indiquerons sur cette page.' },
        ],
      },
      {
        id: 'safe-harbour',
        title: 'Recherche de bonne foi',
        blocks: [
          { type: 'p', text: 'Si vous respectez cette politique de bonne foi, nous n’engagerons aucune action en justice contre vous pour vos recherches et nous ne demanderons pas aux autorités de le faire. [À confirmer] La formulation juridique exacte de cet engagement doit être revue par nos juristes.' },
          { type: 'p', text: 'Cette protection a des limites. Elle ne couvre que nos propres services et que les recherches qui respectent cette politique. Elle ne couvre pas les préjudices causés à autrui, et nous ne pouvons pas nous exprimer au nom d’autres entreprises ni des autorités. Agir en dehors de cette politique, par exemple en accédant à des données de clients dont vous n’aviez pas besoin, peut être illégal et n’est pas protégé.' },
        ],
      },
      {
        id: 'related',
        title: 'Pages associées',
        blocks: [
          { type: 'p', text: 'Pour ce que nous faisons afin de protéger les données, consultez notre <security>page sécurité</security>. Tester en dehors de cette politique enfreint aussi notre <aup>politique d’usage acceptable</aup>. Tous les documents juridiques figurent sur la <legalhub>page juridique et confiance</legalhub>.' },
        ],
      },
    ],
  },
}
export default policies
