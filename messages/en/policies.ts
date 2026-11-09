// English text for the 'policies' namespace (server-only): the legal and trust documents beyond privacy, cookies, terms and refunds,
// and the hub page that lists them all. Same structure and markup as ./legal.ts (see the notes there). See docs/i18n.md.
import type { Policy } from './legal'

const policies: {
  hub: { title: string; description: string; intro: string; groups: { title: string; text: string }[] }
  names: Record<'acceptableUse' | 'security' | 'dataProcessing' | 'accessibility' | 'disclosure', string>
  acceptableUse: Policy
  security: Policy
  dataProcessing: Policy
  accessibility: Policy
  disclosure: Policy
} = {
  hub: {
    title: 'Legal and trust',
    description: 'Every Plot Ledge legal and trust document in one place: privacy, cookies, terms, acceptable use, security, data processing and more.',
    intro: 'This is where every legal and trust document for Plot Ledge lives, grouped by what you are trying to find out. If something is unclear or missing, write to <mail>{email}</mail> and a person will reply.',
    groups: [
      { title: 'Your data and privacy', text: 'What we collect, which cookies we use, and how we handle the records you store in Plot Ledge: the privacy policy, the cookie policy and data processing.' },
      { title: 'Using Plot Ledge', text: 'The rules for using the service and what is not allowed, plus how trials, billing and refunds work: the terms of use, the acceptable use policy and the refund policy.' },
      { title: 'Security and trust', text: 'How we protect your records, how to report a security problem to us, and how accessible this website is: security, responsible disclosure and accessibility.' },
    ],
  },
  names: { acceptableUse: 'Acceptable use', security: 'Security', dataProcessing: 'Data processing', accessibility: 'Accessibility', disclosure: 'Responsible disclosure' },

  acceptableUse: {
    title: 'Acceptable use policy',
    description: 'What you may and may not do with Plot Ledge, your responsibility for your team, what we may do if the rules are broken, and how to report abuse.',
    intro: 'Plot Ledge holds property records that real people rely on. This policy says what is expected of everyone who uses it.',
    updated: '2026-11-09',
    summary: [
      'Use Plot Ledge for honest property business. Do not use it to deceive buyers or to create false records.',
      'Do not misuse other people’s data, attack the service, or share logins.',
      'You are responsible for what your team members do in your account.',
      'If the rules are broken we may warn you, limit the account or suspend it, and you can ask us to review the decision.',
      'Report abuse to <mail>{email}</mail>.',
    ],
    sections: [
      {
        id: 'who-this-applies-to',
        title: 'Who this policy applies to',
        blocks: [
          { type: 'p', text: 'This policy applies to everyone who uses the Plot Ledge service or this website: account holders, the team members they add, and visitors. It is part of our <terms>terms of use</terms>. If the two ever differ, the terms of use come first.' },
          { type: 'p', text: 'In this policy, “we” means Plot Ledge, “you” means the person or business using Plot Ledge, and “content” means any record, file, text or data you put into the service.' },
        ],
      },
      {
        id: 'what-you-may-do',
        title: 'What you may do',
        blocks: [
          { type: 'p', text: 'Plot Ledge is built for plot and property dealers and housing-society operators. You may use it to:' },
          {
            type: 'ul',
            items: [
              'record plots, buyers, deals, installments, payments and the documents that go with them;',
              'give your team members access to the parts of the service they need for their work;',
              'export your own records and download your own backups;',
              'import records you have the right to hold.',
            ],
          },
        ],
      },
      {
        id: 'unlawful-or-deceptive-use',
        title: 'Unlawful or deceptive use',
        blocks: [
          { type: 'p', text: 'Do not use Plot Ledge to break the law or to mislead anyone. In particular, do not:' },
          {
            type: 'ul',
            items: [
              'create or issue forged, altered or backdated receipts, payment records, agreements or other documents;',
              'mislead a buyer about a plot, for example its ownership, approval status, size, price, location or what has been paid;',
              'record fake listings, fake deals or plots you do not have the right to sell or represent;',
              'use the service to launder money, to commit fraud or to help anyone else do so.',
            ],
          },
          { type: 'p', text: 'Honest mistakes are different. Correcting a wrong figure is normal. Recording something you know to be false is not.' },
        ],
      },
      {
        id: 'other-peoples-data',
        title: 'Other people’s data',
        blocks: [
          { type: 'p', text: 'The records you store often include personal details of buyers, sellers and staff. You must:' },
          {
            type: 'ul',
            items: [
              'have a lawful reason to hold that information and use it only for your property business;',
              'not upload personal data you collected by deception or that you have no right to hold;',
              'not try to see, copy or change another customer’s records, or another team member’s data you have not been given access to;',
              'not use the details of buyers or staff to harass them or to send them unrelated marketing without a lawful basis.',
            ],
          },
        ],
      },
      {
        id: 'service-and-security',
        title: 'Attacking, overloading or copying the service',
        blocks: [
          { type: 'p', text: 'Do not:' },
          {
            type: 'ul',
            items: [
              'attack the service, overload it, or send traffic designed to slow it down or take it offline;',
              'probe, scan or test the service for weaknesses, except as allowed by our <disclosure>responsible disclosure policy</disclosure>;',
              'try to get around rate limits, permissions, plan limits or other protections;',
              'scrape, copy or harvest the service or this website with automated tools, or reverse engineer the software;',
              'resell, sublicense or offer the service to others as your own, unless we have agreed to it in writing.',
            ],
          },
          { type: 'p', text: 'If you find a security problem, please tell us through the responsible disclosure policy rather than testing it further.' },
        ],
      },
      {
        id: 'spam-and-malware',
        title: 'Spam and malware',
        blocks: [
          {
            type: 'ul',
            items: [
              'Do not use the service or this website to send spam or bulk unwanted messages.',
              'Do not upload or send viruses, malicious code or files meant to harm a device or a system.',
              'Do not upload material you have no right to use, such as another company’s documents or images.',
            ],
          },
        ],
      },
      {
        id: 'logins-and-plan-limits',
        title: 'Logins and plan limits',
        blocks: [
          {
            type: 'ul',
            items: [
              'Keep your login private. Do not share one login between several people. Add each person as their own team member instead.',
              'Do not use someone else’s login or let anyone else use yours.',
              'Do not bypass or work around the limits of your plan, for example by creating extra accounts to avoid moving to a higher plan.',
            ],
          },
          { type: 'p', text: 'Plans and limits are described in the pricing section of this website.' },
        ],
      },
      {
        id: 'harassment-and-abuse',
        title: 'Harassment and abuse',
        blocks: [
          { type: 'p', text: 'Do not use Plot Ledge, or contact details you find in it, to harass, threaten, defame or discriminate against anyone. Do not abuse our staff or the people who work with us.' },
        ],
      },
      {
        id: 'your-team',
        title: 'Your responsibility for your team',
        blocks: [
          { type: 'p', text: 'You are responsible for what the people you add to your account do with it. In practice that means:' },
          {
            type: 'ul',
            items: [
              'giving each team member only the role and permissions they need;',
              'making sure they know and follow this policy;',
              'removing people promptly when they leave or change jobs.',
            ],
          },
          { type: 'p', text: 'Our <security>security page</security> has more on roles and on what customers can do to keep an account safe.' },
        ],
      },
      {
        id: 'what-we-may-do',
        title: 'What we may do if the rules are broken',
        blocks: [
          { type: 'p', text: 'If we believe this policy has been broken, we may take the step that fits the problem. Depending on how serious it is, we may:' },
          {
            type: 'ul',
            items: [
              'send you a warning and ask you to fix the problem;',
              'limit some features or access;',
              'suspend or close an account;',
              'remove or block content that is unlawful or that breaks this policy;',
              'share information with the authorities where the law requires it or a lawful request is made.',
            ],
          },
          { type: 'p', text: 'Where the risk is urgent, for example an attack on the service or a threat to other customers, we may act first and explain afterwards.' },
        ],
      },
      {
        id: 'notice-and-appeal',
        title: 'Notice and appeal',
        blocks: [
          { type: 'p', text: 'Unless the law or an urgent risk stops us, we will tell the account holder what we found and what we are doing, and give a chance to respond before we take a serious step. If you think we got it wrong, write to <mail>{email}</mail> with your account name and the reasons. A person who was not involved in the first decision will look again where we can. We aim to reply within [To be confirmed].' },
        ],
      },
      {
        id: 'reporting-abuse',
        title: 'Reporting abuse',
        blocks: [
          { type: 'p', text: 'If you think someone is breaking this policy, for example a forged receipt or a fake listing that uses Plot Ledge, write to <mail>{email}</mail>. Tell us what you saw, where, and when, and include anything that helps us find it. For security problems, use the <disclosure>responsible disclosure policy</disclosure> instead.' },
        ],
      },
      {
        id: 'changes',
        title: 'Changes to this policy',
        blocks: [
          { type: 'p', text: 'When we change this policy we will update the date at the top, and tell account holders about changes that matter before they apply. Other documents are listed on the <legalhub>legal and trust page</legalhub>.' },
        ],
      },
    ],
  },

  security: {
    title: 'Security',
    description: 'How Plot Ledge protects your records: hosting, separation between customers, access control, sign-in, audit trail, backups and what you can do.',
    intro: 'This page explains in plain language how we protect the records you keep in Plot Ledge, and what we ask you to do on your side.',
    updated: '2026-11-09',
    summary: [
      'Each customer’s records are separated at the database level, so one customer cannot see another’s.',
      'Roles and permissions control what each team member can see and do, and an audit log records important actions.',
      'Passwords are stored hashed, sign-in attempts are rate limited, and everything is served over HTTPS.',
      'You can export your data and download a full backup at any time.',
      'This page makes no third-party certification claim. To report a security problem, see our <disclosure>responsible disclosure policy</disclosure>.',
    ],
    sections: [
      {
        id: 'our-approach',
        title: 'Our approach',
        blocks: [
          { type: 'p', text: 'Plot Ledge holds records that matter to your business and to your buyers: plots, deals, installments, payments and the personal details that go with them. We try to protect them with a few simple, layered measures rather than one big promise. No system is perfectly secure, and we do not claim ours is.' },
          { type: 'p', text: 'In this page, “we” means Plot Ledge and “customer” means the business that holds an account with us.' },
        ],
      },
      {
        id: 'hosting',
        title: 'Hosting and infrastructure',
        blocks: [
          { type: 'p', text: 'Plot Ledge does not run its own data centres. We use established providers:' },
          {
            type: 'ul',
            items: [
              'the CRM data is stored in a managed PostgreSQL database provided by Neon;',
              'the application and this website run on Vercel;',
              'everything is served over HTTPS.',
            ],
          },
          { type: 'p', text: 'These providers are listed, with what each one does, on our <dpa>data processing and subprocessors page</dpa>. Timestamps are stored in UTC so that records stay consistent wherever they are viewed.' },
        ],
      },
      {
        id: 'separation',
        title: 'Separation between customers',
        blocks: [
          { type: 'p', text: 'Plot Ledge is a multi-tenant service: many customers use the same system. Each customer’s records are separated at the database level using row-level security, so the database itself restricts what one customer can read. Your records belong to you and are not visible to other customers.' },
        ],
      },
      {
        id: 'access-control',
        title: 'Access control and roles',
        blocks: [
          { type: 'p', text: 'Inside your account, roles and permissions decide what each team member can see and do. The standard roles are owner or admin, accountant and sales agent. You can also create custom permission sets for your own needs. Giving each person only what their job needs limits the damage if one login is ever misused.' },
        ],
      },
      {
        id: 'sign-in',
        title: 'Sign-in and sessions',
        blocks: [
          {
            type: 'ul',
            items: [
              'Passwords are stored hashed. We never store them in plain text and cannot read them.',
              'Repeated failed sign-ins are rate limited, per account and per network address.',
              'All traffic to our API is rate limited per network address.',
              'When a person changes their password, their sessions end.',
              'Security headers are set, and access from other websites’ scripts is restricted to an allow-list.',
            ],
          },
        ],
      },
      {
        id: 'encryption',
        title: 'Encryption',
        blocks: [
          { type: 'p', text: 'Data travels between your browser and Plot Ledge over HTTPS, which encrypts it in transit. Our database provider manages encryption of stored data. [To be confirmed] The exact encryption-at-rest arrangements of our providers will be confirmed before launch.' },
        ],
      },
      {
        id: 'audit-trail',
        title: 'Audit trail',
        blocks: [
          { type: 'p', text: 'An audit log records important actions in your account, so you can see what changed and who did it. Account owners and admins can use it to look into mistakes or unexpected changes.' },
        ],
      },
      {
        id: 'backups-and-exports',
        title: 'Backups and exports',
        blocks: [
          { type: 'p', text: 'You are not locked in and you are not dependent on us alone for your own records. At any time you can:' },
          {
            type: 'ul',
            items: [
              'export your data to Excel or CSV;',
              'download a full backup in JSON format;',
              'import records from Excel.',
            ],
          },
          { type: 'p', text: '[To be confirmed] How often we take our own backups of the database, how long we keep them and how quickly we can restore them will be set out here before launch. We recommend that you export regularly as well.' },
        ],
      },
      {
        id: 'payments',
        title: 'Payments',
        blocks: [
          { type: 'p', text: 'Subscriptions are paid by card through Stripe, or through Pakistani methods such as JazzCash and OPay. Plot Ledge does not store full card numbers; the payment providers handle them. [To be confirmed] This website itself takes no payments and has no accounts or logins.' },
        ],
      },
      {
        id: 'our-staff',
        title: 'Our own staff access',
        blocks: [
          { type: 'p', text: 'We use customer records only to run the service for you. Who at Plot Ledge can reach production data, how that access is approved and how it is logged is [To be confirmed].' },
        ],
      },
      {
        id: 'incidents',
        title: 'If something goes wrong',
        blocks: [
          { type: 'p', text: 'If we discover a security incident that affects your records, we will investigate, take steps to contain it, and tell affected customers without undue delay, with what we know and what we recommend. Notification for personal data is described on our <dpa>data processing page</dpa>.' },
        ],
      },
      {
        id: 'what-customers-can-do',
        title: 'What you can do',
        blocks: [
          { type: 'p', text: 'Security is shared. The most useful steps on your side are:' },
          {
            type: 'ul',
            items: [
              'use long, unique passwords and do not share a login between people;',
              'give each team member the lowest role that lets them do their job;',
              'remove people from your account as soon as they leave;',
              'check the audit log from time to time;',
              'export your records and download a backup regularly;',
              'tell us at once if you think an account has been misused.',
            ],
          },
        ],
      },
      {
        id: 'certifications',
        title: 'Certifications',
        blocks: [
          { type: 'p', text: 'This page makes no third-party certification or audit claim. We describe what we do, not a standard we have been certified against. If that changes, we will say so here and name the standard and the date.' },
        ],
      },
      {
        id: 'report-a-problem',
        title: 'Reporting a security problem',
        blocks: [
          { type: 'p', text: 'If you think you have found a weakness, please tell us through the <disclosure>responsible disclosure policy</disclosure>. For other questions about this page, write to <mail>{email}</mail>. See also the <aup>acceptable use policy</aup> and the <legalhub>legal and trust page</legalhub>.' },
        ],
      },
    ],
  },

  dataProcessing: {
    title: 'Data processing and subprocessors',
    description: 'Who is responsible for which data, how Plot Ledge processes CRM records for customers, the providers we use, and how to get a data processing addendum.',
    intro: 'This page explains who is responsible for what when you store records in Plot Ledge, and which providers help us run it.',
    updated: '2026-11-09',
    summary: [
      'You are responsible for your buyers’ and staff’s data. We process your CRM records for you, only to run the service.',
      'For this website and for account details, Plot Ledge is responsible; see the privacy policy.',
      'The providers we use are listed below with what each one does.',
      'You can export your data at any time. Deletion timing after cancellation is still to be confirmed.',
      'A signed data processing addendum is available on request by e-mail.',
    ],
    sections: [
      {
        id: 'purpose',
        title: 'Purpose of this page',
        blocks: [
          { type: 'p', text: 'Your Plot Ledge records contain personal details of other people, such as buyers, sellers and staff. Privacy laws in many countries expect the business that holds those details and the service that stores them to agree who does what. This page sets that out. It supplements our <terms>terms of use</terms>. Details collected through this marketing website are covered in our <privacy>privacy policy</privacy>.' },
          { type: 'p', text: 'In this page, “we” means Plot Ledge, “customer” means the business holding an account, and “CRM records” means the content a customer stores in the Plot Ledge service.' },
        ],
      },
      {
        id: 'roles',
        title: 'Who is responsible for what',
        blocks: [
          {
            type: 'table',
            caption: 'Roles for each kind of data',
            head: ['Data', 'Customer', 'Plot Ledge'],
            rows: [
              ['CRM records: buyers, sellers, deals, installments, payments and staff details you store', 'Controller. You decide why and how the data is used.', 'Processor. We handle it on your behalf, to run the service.'],
              ['Website visitors and people who contact us', 'Not applicable', 'Controller. See the <privacy>privacy policy</privacy>.'],
              ['Account details of the customer and its team members, such as names, e-mail addresses and plan', 'Not applicable', 'Controller, for running accounts and billing. See the <privacy>privacy policy</privacy>.'],
            ],
          },
          { type: 'p', text: 'These words come from data protection laws such as the GDPR. If your local law uses different words, we apply the same idea: you decide what is done with the records, and we do it for you.' },
        ],
      },
      {
        id: 'what-we-process',
        title: 'What we process and why',
        blocks: [
          { type: 'p', text: 'We process CRM records only to provide the service to you. That includes storing them, showing them to the team members you authorise, producing reports and exports, keeping the service secure, and fixing problems. The records you store can include names, contact details, CNIC numbers, plot and payment details, and notes, depending on what you choose to enter. You decide what goes in.' },
        ],
      },
      {
        id: 'instructions',
        title: 'Your instructions',
        blocks: [
          { type: 'p', text: 'We process CRM records only on your instructions. Your instructions are this page, the <terms>terms of use</terms>, and the way you use and configure the service. We will not use your CRM records for our own purposes, such as advertising, and we do not sell them. If we think an instruction breaks the law, we will tell you.' },
        ],
      },
      {
        id: 'confidentiality',
        title: 'Confidentiality',
        blocks: [
          { type: 'p', text: 'We keep CRM records confidential. Anyone at Plot Ledge who may reach them is bound by a duty of confidentiality. [To be confirmed] How staff access is limited and logged will be described before launch.' },
        ],
      },
      {
        id: 'security-measures',
        title: 'Security measures',
        blocks: [
          { type: 'p', text: 'We protect CRM records with the measures described on our <security>security page</security>, including separation between customers, role-based access, hashed passwords, rate limiting, HTTPS and an audit log. We may improve those measures over time and will not weaken them in a way that lowers the level of protection.' },
        ],
      },
      {
        id: 'subprocessors',
        title: 'Subprocessors',
        blocks: [
          { type: 'p', text: 'We use other companies to help us run Plot Ledge. You authorise us to use the ones listed below. We stay responsible for them, and we ask each to protect data appropriately.' },
          {
            type: 'table',
            caption: 'Providers we use, what they do, where, and what data they handle',
            head: ['Provider', 'What it does', 'Where', 'Data involved'],
            rows: [
              ['Neon', 'Managed PostgreSQL database that stores CRM records', '[To be confirmed]', 'CRM records and account data'],
              ['Vercel', 'Hosts the Plot Ledge application and this website; provides cookieless analytics for the website', 'United States and other regions', 'Data passing through the application; website visit data'],
              ['Stripe', 'Card payments for subscriptions', '[To be confirmed]', 'Billing and payment details. Plot Ledge does not store full card numbers.'],
              ['JazzCash', 'Pakistani mobile-wallet payments for subscriptions', 'Pakistan [To be confirmed]', 'Billing and payment details'],
              ['OPay', 'Pakistani payments for subscriptions', '[To be confirmed]', 'Billing and payment details'],
              ['Resend, or an equivalent service', 'Delivers messages sent through our contact forms', 'United States and other regions', 'Details you type into our forms'],
              ['Anthropic', 'Writes the replies of the chat assistant on this website only', 'United States and other regions', 'Messages typed into the website chat. No CRM records.'],
            ],
          },
        ],
      },
      {
        id: 'changes-to-subprocessors',
        title: 'Changes to subprocessors',
        blocks: [
          { type: 'p', text: 'We will update this table when we add or replace a provider. We will announce changes to customers [To be confirmed] before the new provider handles CRM records, and customers who object for a good reason can write to <mail>{email}</mail>. If we cannot resolve the objection, you may stop using the service and export your data.' },
        ],
      },
      {
        id: 'international-transfers',
        title: 'Transfers outside your country',
        blocks: [
          { type: 'p', text: 'Some providers above may process data outside Pakistan, including in the United States and the European Union. Where the law requires a safeguard for such transfers, we rely on the provider’s standard contractual clauses or an equivalent mechanism. [To be confirmed] The region where the CRM database is hosted will be stated here before launch.' },
        ],
      },
      {
        id: 'data-subject-requests',
        title: 'Helping you answer requests from individuals',
        blocks: [
          { type: 'p', text: 'People whose details you hold, such as buyers, may ask you to see, correct or delete them. You can find, change and export records yourself in the service. If you cannot, write to <mail>{email}</mail> and we will help you within reasonable limits. If someone contacts us directly about records you control, we will pass the request to you rather than answer it ourselves.' },
        ],
      },
      {
        id: 'breach-notification',
        title: 'Personal data breaches',
        blocks: [
          { type: 'p', text: 'If we become aware of a breach of security that affects personal data in your CRM records, we will tell you without undue delay. We will say what happened, which data is affected as far as we know, what we have done and what we recommend you do. [To be confirmed] A target time for this notice may be added.' },
        ],
      },
      {
        id: 'return-and-deletion',
        title: 'Return and deletion',
        blocks: [
          { type: 'p', text: 'You can export your data to Excel or CSV and download a full JSON backup at any time, including before you cancel. After you cancel, we will delete your CRM records within [To be confirmed], except where the law requires us to keep something. Deleted data may remain in provider backups for a short time until they are overwritten. [To be confirmed]' },
        ],
      },
      {
        id: 'audits',
        title: 'Information and audits',
        blocks: [
          { type: 'p', text: 'On reasonable request, we will give you the information needed to show that we meet this page. [To be confirmed] Whether on-site audits or third-party reports are offered will be set out here. Our <security>security page</security> makes no certification claim.' },
        ],
      },
      {
        id: 'dpa',
        title: 'Getting a signed addendum',
        blocks: [
          { type: 'p', text: 'If your business needs a signed data processing addendum, write to <mail>{email}</mail> with your company name and the person who will sign. We will send a copy on request. Questions about this page are welcome at the same address. All documents are listed on the <legalhub>legal and trust page</legalhub>.' },
        ],
      },
    ],
  },

  accessibility: {
    title: 'Accessibility statement',
    description: 'How this website aims to meet WCAG 2.2 level AA, what we have done so far, known limitations, and how to ask for help or give feedback.',
    intro: 'We want everyone to be able to use this website. This statement says what we have done, where we fall short, and how to tell us when something does not work for you.',
    updated: '2026-11-09',
    summary: [
      'We aim to meet WCAG 2.2 level AA on this website.',
      'The site works with a keyboard, has a skip link and visible focus, and respects reduced-motion settings.',
      'It comes in eight languages, including right-to-left Arabic and Urdu.',
      'It has not yet had an independent accessibility audit.',
      'If something does not work for you, write to <mail>{email}</mail>.',
    ],
    sections: [
      {
        id: 'our-commitment',
        title: 'Our commitment',
        blocks: [
          { type: 'p', text: 'Plot Ledge wants its website to be usable by as many people as possible, including people who use a keyboard, a screen reader, magnification, or a phone. Our target is the Web Content Accessibility Guidelines (WCAG) version 2.2, level AA.' },
          { type: 'p', text: 'This statement covers this marketing website. The CRM you log in to is a separate product; it is not described here.' },
        ],
      },
      {
        id: 'status',
        title: 'Where we are today',
        blocks: [
          { type: 'p', text: 'We are working toward WCAG 2.2 AA but we do not claim full conformance. The website has not had an independent accessibility audit. We have tested it ourselves as we built it. [To be confirmed] The date and method of our most recent assessment will be added here.' },
        ],
      },
      {
        id: 'what-we-have-done',
        title: 'What we have done',
        blocks: [
          { type: 'ul', items: [
            'Everything on the site can be used with a keyboard, and the element in focus is clearly visible.',
            'A “Skip to content” link lets you jump past the header.',
            'Buttons and other controls are at least 44 pixels tall, to be easier to hit, and text is never smaller than 12 pixels.',
            'Form fields have labels, and links use descriptive text instead of “click here”.',
            'The light cream and emerald colour scheme was chosen to give readable contrast.',
            'Animation is reduced or removed if your device is set to prefer reduced motion.',
            'Pages are built to adapt to different screen sizes and to zooming.',
          ] },
        ],
      },
      {
        id: 'languages',
        title: 'Languages and reading direction',
        blocks: [
          { type: 'p', text: 'The website is available in eight languages. Arabic and Urdu are displayed right to left, and the layout is mirrored to match. You can switch language from the header or the footer on any page.' },
          { type: 'p', text: 'Some translations are machine-assisted and may contain errors. We are reviewing them. If a translation is wrong or hard to follow, please tell us.' },
        ],
      },
      {
        id: 'known-limitations',
        title: 'Known limitations',
        blocks: [
          { type: 'p', text: 'We know of these gaps:' },
          { type: 'ul', items: [
            'The product mock-ups on the home page are illustrative graphics. They are not a working copy of the product and may not be fully available to screen readers.',
            'The chat assistant is provided with the help of a third party and may be less accessible than the rest of the page.',
            'Any downloadable PDF may not be fully accessible.',
            'Machine-assisted translations may contain mistakes that affect how clear a page is.',
            'We may have missed other problems. Tell us if you find one.',
          ] },
        ],
      },
      {
        id: 'third-party-content',
        title: 'Third-party content',
        blocks: [
          { type: 'p', text: 'Some features come from other companies, such as the chat assistant. We do not control their accessibility, but we choose them with care and will raise problems with them when we can.' },
        ],
      },
      {
        id: 'feedback',
        title: 'Feedback and alternative formats',
        blocks: [
          { type: 'p', text: 'If you cannot use part of this website, or you need something in another format, such as a document read out or in large print, write to <mail>{email}</mail>. Please tell us:' },
          { type: 'ul', items: [
            'the page or feature, and its address if you can;',
            'what went wrong and what you were trying to do;',
            'the browser, device and any assistive technology you use, if you are happy to share it.',
          ] },
          { type: 'p', text: 'You can also reach us on WhatsApp or by the contact form on this website.' },
        ],
      },
      {
        id: 'how-we-respond',
        title: 'How we respond',
        blocks: [
          { type: 'p', text: 'A person will read your message. We aim to reply within [To be confirmed] and to tell you what we can do, and when. If we cannot fix something quickly, we will offer another way for you to get what you need.' },
        ],
      },
      {
        id: 'complaints',
        title: 'If you are not satisfied',
        blocks: [
          { type: 'p', text: 'If you are not happy with our reply, write to us again and say so, and we will look at it a second time. You may also have the right to raise the matter with a public body in your country. [To be confirmed]' },
        ],
      },
      {
        id: 'updates',
        title: 'Updates to this statement',
        blocks: [
          { type: 'p', text: 'We will update this statement when our website, our assessment or our known limitations change. The date at the top shows when it was last updated. See also our <privacy>privacy policy</privacy> and the <legalhub>legal and trust page</legalhub>.' },
        ],
      },
    ],
  },

  disclosure: {
    title: 'Responsible disclosure policy',
    description: 'How to report a security problem in Plot Ledge, what we ask of researchers, what we promise in return, and what is in and out of scope.',
    intro: 'If you find a security weakness in Plot Ledge, we want to hear about it. This policy explains how to report it safely and what to expect from us.',
    updated: '2026-11-09',
    summary: [
      'Report a suspected weakness to <mail>{email}</mail> with the subject “Security report”.',
      'Test only against your own account and data, and stop once you have shown the problem.',
      'Do not damage data, attack the service, or use social engineering.',
      'We will acknowledge your report, keep you informed, and credit you if you wish.',
      'We do not currently offer cash rewards.',
    ],
    sections: [
      {
        id: 'purpose',
        title: 'Purpose',
        blocks: [
          { type: 'p', text: 'Plot Ledge holds property and payment records for our customers, so we take reports of weaknesses seriously. We welcome research done in good faith that follows this policy. In this policy, “we” means Plot Ledge and “you” means the person making a report.' },
        ],
      },
      {
        id: 'scope',
        title: 'What is in scope',
        blocks: [
          { type: 'p', text: 'This policy covers:' },
          { type: 'ul', items: [
            'plotledge.com, this marketing website;',
            'app.plotledge.com, the Plot Ledge CRM web application, and its API.',
          ] },
          { type: 'p', text: 'Services run by other companies, such as our hosting, payment and e-mail providers, are not covered. Please report problems in those to the company that runs them.' },
        ],
      },
      {
        id: 'how-to-report',
        title: 'How to report',
        blocks: [
          { type: 'p', text: 'Write to <mail>{email}</mail> with the subject “Security report”. [To be confirmed] A dedicated security address may replace this one. Please write in English if you can, and do not post the details publicly first.' },
        ],
      },
      {
        id: 'what-to-include',
        title: 'What to include',
        blocks: [
          { type: 'ul', items: [
            'what the weakness is and where it is, with the address or feature;',
            'the steps to repeat it, as clearly as you can;',
            'what you think someone could do with it;',
            'any screenshots, requests or other proof that help us confirm it;',
            'how you would like to be contacted and whether you want credit.',
          ] },
          { type: 'p', text: 'Please do not include real customer data in your report. Describe it instead.' },
        ],
      },
      {
        id: 'what-we-ask',
        title: 'What we ask of you',
        blocks: [
          { type: 'p', text: 'To keep our customers safe, please:' },
          { type: 'ul', items: [
            'use only your own account and your own test data;',
            'do not read, change, copy or delete another customer’s data. If you reach it by accident, stop and tell us, and use no more than the minimum needed to show the problem;',
            'do not destroy data or disrupt the service;',
            'do not run denial-of-service or high-volume automated attacks;',
            'do not use social engineering, phishing or physical attacks against our staff, customers or providers;',
            'do not send spam or leave a backdoor behind;',
            'give us reasonable time to fix the issue before you make it public. We ask for [To be confirmed].',
          ] },
        ],
      },
      {
        id: 'out-of-scope',
        title: 'What is out of scope',
        blocks: [
          { type: 'p', text: 'These usually do not count as security weaknesses, and we ask you not to report them:' },
          { type: 'ul', items: [
            'findings from automated scanners that show no real impact;',
            'missing best-practice headers or settings with no demonstrated risk;',
            'attacks that need physical access to a device or a user’s own compromised computer;',
            'denial-of-service, spam or brute-force testing;',
            'social engineering of our staff or customers;',
            'weaknesses in third-party services we do not control;',
            'a user simply sharing or losing their own password.',
          ] },
          { type: 'p', text: 'If you are unsure whether something counts, send it anyway and we will tell you.' },
        ],
      },
      {
        id: 'our-commitments',
        title: 'What we promise',
        blocks: [
          { type: 'ul', items: [
            'We will acknowledge your report within [To be confirmed].',
            'We will look into it and keep you informed of progress.',
            'We will tell you when it is fixed, and fix it as quickly as we reasonably can.',
            'If you want credit, we will thank you by name or handle once it is fixed. If you prefer to stay anonymous, we will respect that.',
            'We will handle your report and contact details as confidential, and use them only to deal with the report.',
          ] },
        ],
      },
      {
        id: 'rewards',
        title: 'Rewards',
        blocks: [
          { type: 'p', text: 'Plot Ledge does not run a bug bounty programme and does not promise payment for reports. [To be confirmed] If this changes, we will say so on this page.' },
        ],
      },
      {
        id: 'safe-harbour',
        title: 'Good-faith research',
        blocks: [
          { type: 'p', text: 'If you follow this policy in good faith, we will not take legal action against you for your research, and we will not ask the authorities to. [To be confirmed] The exact legal wording of this commitment is for our lawyers to review.' },
          { type: 'p', text: 'This protection has limits. It covers only our own services and only research that follows this policy. It does not cover harm to others, and we cannot speak for other companies or for the authorities. Acting outside this policy, for example by accessing customer data you did not need to, may be unlawful and is not protected.' },
        ],
      },
      {
        id: 'related',
        title: 'Related pages',
        blocks: [
          { type: 'p', text: 'For what we do to protect records, see our <security>security page</security>. Testing outside this policy also breaks our <aup>acceptable use policy</aup>. All legal documents are on the <legalhub>legal and trust page</legalhub>.' },
        ],
      },
    ],
  },
}
export default policies
