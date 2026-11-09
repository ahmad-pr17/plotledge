// English text for the 'legal' namespace (server-only). See docs/i18n.md.
//
// Each policy is DATA: { title, description, intro, updated, summary, sections }. Translate the words, keep the
// structure, the section ids and the tag names.
//
// Inline markup inside any text:
//   <b>bold</b>
//   <privacy> <cookies> <terms> <refund> <aup> <security> <dpa> <accessibility> <disclosure> <legalhub>  links to our own legal pages
//   <mail>{email}</mail>                  mailto link to our contact address ({email} is filled in by the page)
//   <cookiesettings>..</cookiesettings>   opens the cookie banner so the choice can be changed
//   <gaoptout> <googleprivacy>            external links to Google pages
// Tags do not nest. Keep {email} as it is.
//
// All legal translations need review by a qualified native-speaking lawyer before launch.

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'table'; caption: string; head: string[]; rows: string[][] }
  | { type: 'cookieSettingsButton'; label: string }

export type Section = { id: string; title: string; blocks: Block[] }

export type Policy = {
  title: string
  description: string
  intro: string
  /** ISO date, formatted by the page with Intl in the visitor's language. */
  updated: string
  summary: string[]
  sections: Section[]
}

const privacy: Policy = {
  title: 'Privacy policy',
  description: 'What Plot Ledge collects through this website, why, who it is shared with, how long it is kept, and how to use your rights.',
  intro: 'What this website collects, why we collect it, and what you can do about it, in plain language.',
  updated: '2026-11-09',
  summary: [
    'We collect what you type into our forms and chat, plus visit statistics.',
    'Google Analytics cookies load only if you accept them. Vercel Analytics uses no cookies.',
    'Chat replies are written by an AI provider (Anthropic). Please keep bank details, passwords and CNIC numbers out of the chat.',
    'We never sell your details, and no decision about you is made by software alone.',
    'You can ask to see, correct or delete your details at any time: <mail>{email}</mail>.',
  ],
  sections: [
    {
      id: 'who-we-are',
      title: 'Who we are',
      blocks: [
        { type: 'p', text: 'Plot Ledge is a CRM for plot and property dealers, run from Lahore, Pakistan. In this policy, “we” means Plot Ledge, and we decide how the information described here is used.' },
        { type: 'p', text: 'This policy covers this marketing website. The CRM you log in to is a separate service: the records you store there belong to you, and our <terms>terms of use</terms> explain how we handle them.' },
      ],
    },
    {
      id: 'what-we-collect',
      title: 'What we collect',
      blocks: [
        { type: 'h3', text: 'What you give us' },
        {
          type: 'ul',
          items: [
            'The contact or demo form: your name, phone number, the number of plots you manage, and optionally your city, company and a message.',
            'The same details if you choose to send them through the chat assistant’s contact form.',
            'Messages you type to the Plot Ledge Assistant.',
            'Anything you send us by email or WhatsApp, including the number or profile name WhatsApp shows us.',
          ],
        },
        { type: 'h3', text: 'What we collect automatically' },
        {
          type: 'ul',
          items: [
            '<b>Visit statistics from Vercel Analytics.</b> Pages viewed, approximate region, device type and referring site. It uses no cookies and does not build a profile of you.',
            '<b>Visit statistics from Google Analytics, only if you accept.</b> Pages viewed, approximate location, device, browser and referring site, linked to a random ID stored in a cookie.',
            '<b>Technical logs.</b> Our host records your IP address, browser type and the time of each request to run and protect the site. We also count requests per IP address, briefly and in memory, to stop abuse of the forms and chat.',
            '<b>Chat ratings.</b> If you rate an answer with thumbs up or down, we log only the rating and the time, never the message.',
          ],
        },
        { type: 'h3', text: 'What stays on your device' },
        {
          type: 'ul',
          items: [
            'Your cookie choice, the chat conversation while the tab is open, and whether you closed the chat prompt. See the <cookies>cookie policy</cookies> for the exact names.',
            'The approximate local currency shown beside our prices. We work it out in your browser from your language setting and send nothing to do it.',
          ],
        },
      ],
    },
    {
      id: 'what-we-do-not-collect',
      title: 'What we do not collect',
      blocks: [
        { type: 'p', text: 'To be clear about the limits of this website:' },
        {
          type: 'ul',
          items: [
            'No payment card or bank account details. Our forms and chat do not ask for them, and you should not type them in.',
            'No sensitive categories of information, such as health, religion, political views or biometric data. Our forms do not ask for them.',
            'No advertising or social media tracking, and no profile of you built to show you ads.',
            'No account or password for this marketing website. Logging in to the CRM is a separate service.',
          ],
        },
      ],
    },
    {
      id: 'why-we-use-it',
      title: 'Why we use it',
      blocks: [
        { type: 'p', text: 'We only use your information for the reasons below. For visitors in the EEA, the UK or Switzerland, the right-hand column is the legal basis under the GDPR.' },
        {
          type: 'table',
          caption: 'Purposes and legal bases',
          head: ['What we do', 'Using', 'Legal basis'],
          rows: [
            ['Reply to your enquiry and arrange a demo', 'Form details, email, WhatsApp', 'Our legitimate interest in answering you; once you book a demo, taking steps toward a contract'],
            ['Answer your questions in the chat', 'Chat messages', 'Our legitimate interest in giving you the help you asked for'],
            ['Understand which pages are useful', 'Google Analytics data', 'Your consent'],
            ['Count visits without cookies', 'Vercel Analytics data', 'Our legitimate interest in running a site that works well'],
            ['Keep the site secure and stop abuse', 'IP address, request counts', 'Our legitimate interest in protecting the site and its visitors'],
          ],
        },
        { type: 'p', text: 'We do not sell your information.' },
      ],
    },
    {
      id: 'chat-assistant',
      title: 'The chat assistant',
      blocks: [
        { type: 'p', text: 'Plot Ledge Assistant is an AI assistant. To write a reply, your message and the recent conversation are sent to our AI provider, Anthropic, which may process them outside Pakistan, including in the United States.' },
        {
          type: 'ul',
          items: [
            'Please do not type bank details, card numbers, passwords or CNIC numbers into the chat.',
            'The conversation is kept in your browser’s session storage and cleared when you close the tab. We do not keep a copy of it.',
            'We keep only what you choose to send through the contact form inside the chat, and we use it only to contact you about Plot Ledge.',
            'The assistant can be wrong. Confirm prices, plan limits and anything important with us directly.',
          ],
        },
      ],
    },
    {
      id: 'automated-decisions',
      title: 'Automated decisions',
      blocks: [
        { type: 'p', text: 'The chat assistant gives answers and suggestions. It does not make any decision about you that has a legal or similarly significant effect, such as accepting or refusing you as a customer, setting a price for you or deciding a refund. People at Plot Ledge make those decisions.' },
      ],
    },
    {
      id: 'who-we-share-with',
      title: 'Who we share it with',
      blocks: [
        { type: 'p', text: 'These companies handle information for us. Each one only receives what it needs for the job in the table.' },
        {
          type: 'table',
          caption: 'Service providers',
          head: ['Provider', 'What it does for us', 'Where it may process data'],
          rows: [
            ['Vercel', 'Hosts this website and provides Vercel Analytics', 'United States and other regions'],
            ['Google', 'Google Analytics, only if you accept analytics cookies', 'United States and other regions'],
            ['Anthropic', 'Writes the chat assistant’s replies', 'United States and other regions'],
            ['Resend, or an equivalent email or webhook service', 'Delivers your form details to us', 'United States and other regions'],
            ['An exchange-rate service', 'Our server asks it for daily currency rates. It receives no visitor information', 'Not applicable'],
          ],
        },
        { type: 'p', text: 'If you message us on WhatsApp, WhatsApp’s own privacy policy applies to that conversation. We may also share information when the law requires it. We do not sell your details to anyone.' },
      ],
    },
    {
      id: 'international-transfers',
      title: 'Transfers outside your country',
      blocks: [
        { type: 'p', text: 'Some providers above process data outside Pakistan, including in the United States and the European Union. For visitors in the EEA, the UK or Switzerland, we rely on those providers’ standard contractual clauses or an equivalent safeguard recognised under the GDPR.' },
      ],
    },
    {
      id: 'how-long',
      title: 'How long we keep it',
      blocks: [
        {
          type: 'table',
          caption: 'How long each kind of information is kept',
          head: ['Information', 'How long we keep it', 'What happens next'],
          rows: [
            ['Contact requests', 'For as long as we need them to follow up with you', 'We delete them when you ask, or when they are no longer needed for that'],
            ['Chat conversations', 'We do not keep them', 'They disappear from your browser when you close the tab'],
            ['Chat contact form details', 'For as long as we need them to follow up with you', 'We delete them when you ask, or when they are no longer needed for that'],
            ['Your cookie choice', '12 months', 'We ask again'],
            ['Analytics and server logs', 'Kept by Google and Vercel under their own schedules', 'Not linked back to you by us'],
          ],
        },
      ],
    },
    {
      id: 'your-rights',
      title: 'Your rights and choices',
      blocks: [
        { type: 'p', text: 'Wherever you are, you can ask us what we hold about you, ask us to correct it, or ask us to delete it. The table below sets out the main rights in plain words. We apply them to everyone who writes to us, and the law where you live may give you more.' },
        {
          type: 'table',
          caption: 'Your rights, what they mean and how to use them',
          head: ['Right', 'What it means', 'How to use it'],
          rows: [
            ['Access', 'You can ask whether we hold information about you and get a copy of it.', 'Write to us (see “How to make a request”).'],
            ['Correction', 'You can ask us to fix information that is wrong or incomplete.', 'Write to us and tell us what to change.'],
            ['Deletion', 'You can ask us to delete your information, unless we must keep it by law.', 'Write to us and say what to delete.'],
            ['Objection and restriction', 'You can ask us to stop or limit how we use your information.', 'Write to us and say what you object to.'],
            ['Portability', 'You can ask for the information you gave us in a common, machine-readable format.', 'Write to us.'],
            ['Withdrawing consent', 'Where we rely on your consent (Google Analytics cookies), you can take it back at any time. What happened before is not affected.', 'Use <cookiesettings>cookie settings</cookiesettings> on this site, or write to us.'],
            ['Complaint', 'You can complain to a data protection authority.', 'See “Contact and complaints”.'],
          ],
        },
        { type: 'h3', text: 'If you are in Pakistan' },
        { type: 'p', text: 'We handle your data in line with the data protection principles in the Prevention of Electronic Crimes Act, 2016 (PECA) and Pakistan’s draft Personal Data Protection framework. That means using it only for the purpose you gave it to us and keeping it reasonably secure.' },
        { type: 'h3', text: 'If you are in the EEA, the UK or Switzerland' },
        { type: 'p', text: 'Every right in the table above applies to you under the GDPR (or the UK GDPR and the Swiss data protection law). We will answer within one month. You can also complain to your local data protection authority, for example the Information Commissioner’s Office in the UK.' },
        { type: 'h3', text: 'If you are in Mexico' },
        { type: 'p', text: 'Under the Mexican federal law on the protection of personal data held by private parties, you have the ARCO rights: access, rectification, cancellation (deletion) and opposition. You can also withdraw your consent and ask us to limit how we use or share your data. Write to us to use any of them.' },
        { type: 'h3', text: 'If you are anywhere else' },
        { type: 'p', text: 'We will respect the rights your local data protection law gives you, within the limits of that law. Write to us and tell us where you live.' },
        { type: 'h3', text: 'Cookies' },
        { type: 'p', text: 'Accept or reject analytics cookies in the banner, and change your mind at any time with <cookiesettings>cookie settings</cookiesettings>.' },
      ],
    },
    {
      id: 'how-to-make-a-request',
      title: 'How to make a request',
      blocks: [
        {
          type: 'ul',
          items: [
            'Email <mail>{email}</mail>. Say which right you want to use and, where it helps, which details are concerned.',
            'We may ask you for details that let us find your information and confirm it is you, such as the name, phone number or email you gave us. We will not ask for more than we need.',
            'We will confirm that we received your request and reply with the outcome. We aim to answer within one month, and sooner where we can.',
            'There is no fee. If a request is clearly repeated or unfounded, or the law lets us say no, we will explain why.',
          ],
        },
      ],
    },
    {
      id: 'security',
      title: 'Keeping it safe',
      blocks: [
        { type: 'p', text: 'This site is served over HTTPS, and we send form details only to the email inbox or system we use to follow up with you. No website can promise perfect security, so please keep sensitive financial details out of forms and chat.' },
      ],
    },
    {
      id: 'children',
      title: 'Children',
      blocks: [
        { type: 'p', text: 'Plot Ledge is for property businesses and is not aimed at anyone under 18. If you think a child has sent us their details, write to <mail>{email}</mail> and we will delete them.' },
      ],
    },
    {
      id: 'contact-and-complaints',
      title: 'Contact and complaints',
      blocks: [
        { type: 'p', text: 'For any question about this policy or your information, write to <mail>{email}</mail> and a person will reply. We would like the chance to put things right first.' },
        { type: 'p', text: 'You always have the right to complain to a data protection authority, in the country where you live or work or where you think a problem happened. You do not have to contact us first.' },
      ],
    },
    {
      id: 'changes',
      title: 'Changes to this policy',
      blocks: [
        { type: 'p', text: 'When we change this page, we will update the date at the top. If the change affects how we use information you have already given us, we will say so here and, where the law requires, ask for your consent again.' },
      ],
    },
  ],
}

const cookies: Policy = {
  title: 'Cookie policy',
  description: 'Exactly which cookies and browser storage this website uses, which ones need your consent, and how to change your choice.',
  intro: 'Which cookies this website uses, which ones need your say-so, and how to change your mind.',
  updated: '2026-11-09',
  summary: [
    'Only one thing here needs your consent: Google Analytics cookies. They load only if you accept.',
    'Everything else is needed for the site to work, such as remembering your choice and keeping your chat open.',
    'We use no advertising or social media tracking.',
    'Accept and Reject are equal choices, we remember yours for 12 months, and you can change it at any time with the Cookie settings link in the footer.',
  ],
  sections: [
    {
      id: 'what-are-cookies',
      title: 'What cookies and browser storage are',
      blocks: [
        { type: 'p', text: 'Cookies are small files a website saves in your browser. Local storage and session storage do a similar job: local storage stays until it is cleared, and session storage disappears when you close the tab. This page lists everything of this kind that our website uses, so you can decide what to allow.' },
      ],
    },
    {
      id: 'what-we-use',
      title: 'What we use',
      blocks: [
        {
          type: 'table',
          caption: 'Cookies and browser storage used by this website',
          head: ['Name', 'Kind', 'What it does', 'How long', 'Needs your consent'],
          rows: [
            ['_ga, _ga_*', 'Cookie, set by Google', 'Counts visits and page views so we can see which pages help.', 'Up to 2 years', 'Yes. Set only after you accept analytics.'],
            ['plotledge-consent', 'Local storage', 'Remembers whether you accepted or rejected analytics.', '12 months', 'No. It is needed to respect your choice.'],
            ['plotledge-chat-v1', 'Session storage', 'Keeps your chat with Plot Ledge Assistant while the tab is open.', 'Until you close the tab', 'No. The chat needs it to work.'],
            ['plotledge-teaser-dismissed', 'Session storage', 'Remembers that you closed the chat prompt, so it does not reappear.', 'Until you close the tab', 'No.'],
            ['Vercel Analytics', 'None', 'Counts visits in aggregate, without cookies or a profile of you.', 'Nothing is stored in your browser', 'No cookies are used.'],
          ],
        },
        { type: 'p', text: 'We do not use advertising or social media tracking cookies.' },
      ],
    },
    {
      id: 'why-we-ask',
      title: 'Why we ask',
      blocks: [
        { type: 'p', text: 'Google Analytics sets a cookie that is not strictly needed for the site to work, and privacy laws in many countries say we should ask first. So we ask, and we load nothing from Google until you answer. The items marked “No” in the table are needed to run the site or to respect your choice, so they do not need consent.' },
      ],
    },
    {
      id: 'your-choice',
      title: 'Your choice',
      blocks: [
        { type: 'p', text: 'The first time you visit, a banner asks whether we may use Google Analytics cookies. Nothing from Google loads until you choose.' },
        {
          type: 'ul',
          items: [
            '<b>Accept analytics:</b> Google Analytics loads and sets its cookies.',
            '<b>Reject analytics:</b> Google Analytics never loads, and the site works exactly the same.',
          ],
        },
        { type: 'p', text: 'Accept and Reject are equal choices: both are one click, they look alike, and rejecting costs you nothing. We do not use the banner to push you either way.' },
        { type: 'p', text: 'We remember your choice for 12 months and then ask again. You can change it whenever you like. If you reject after accepting, we remove the Google cookies this browser holds for our site.' },
        { type: 'cookieSettingsButton', label: 'Change my cookie choice' },
      ],
    },
    {
      id: 'other-ways',
      title: 'Other ways to control cookies',
      blocks: [
        {
          type: 'ul',
          items: [
            'Block or delete cookies in your browser’s settings. This site works without them.',
            'Install the <gaoptout>Google Analytics opt-out add-on</gaoptout> to stop Google Analytics on every site you visit.',
            'Use your browser’s private or incognito mode, which clears cookies when you close it.',
          ],
        },
      ],
    },
    {
      id: 'third-parties',
      title: 'Google and your data',
      blocks: [
        { type: 'p', text: 'If you accept, Google receives the visit data described above and handles it under <googleprivacy>Google’s privacy policy</googleprivacy>. Our <privacy>privacy policy</privacy> explains how we use the results and where Google may process them.' },
      ],
    },
    {
      id: 'changes',
      title: 'Changes to this policy',
      blocks: [
        { type: 'p', text: 'If we add a new cookie or storage item that needs consent, we will list it here first and ask for your choice again. Questions: <mail>{email}</mail>.' },
      ],
    },
  ],
}

const terms: Policy = {
  title: 'Terms of use',
  description: 'The terms for using the Plot Ledge website and service: your account, plans, acceptable use, your data and our responsibilities.',
  intro: 'The rules for using Plot Ledge, written to be read.',
  updated: '2026-11-09',
  summary: [
    'Plot Ledge is software for tracking plots, deals, installments and payments.',
    'The records you store are yours, and you are responsible for keeping them accurate.',
    'Keep your login private and give team members only the access they need.',
    'Plans are billed in rupees. Trials, cancellation and refunds are in the refund policy.',
    'The governing law and where disputes are decided will be confirmed in the final version.',
  ],
  sections: [
    {
      id: 'agreement',
      title: 'Agreeing to these terms',
      blocks: [
        { type: 'p', text: 'By using the Plot Ledge website or service you agree to these terms. If you do not agree, please do not use them. If you use Plot Ledge for a business, you confirm that you may accept these terms on its behalf.' },
      ],
    },
    {
      id: 'definitions',
      title: 'Words we use',
      blocks: [
        {
          type: 'ul',
          items: [
            '<b>Website</b> means this marketing website, which describes Plot Ledge and lets you contact us.',
            '<b>Service</b> means the Plot Ledge software you log in to, to track plots, deals, installments, payments and related records.',
            '<b>You</b> means the person, or the business on whose behalf that person acts, who uses the website or the service.',
            '<b>We</b> and <b>us</b> mean Plot Ledge.',
          ],
        },
      ],
    },
    {
      id: 'website',
      title: 'The website',
      blocks: [
        { type: 'p', text: 'This site describes Plot Ledge. The descriptions, examples and screenshots on it show what the product is for and are not a promise of any business result.' },
      ],
    },
    {
      id: 'service',
      title: 'The service',
      blocks: [
        { type: 'p', text: 'Plot Ledge is software for tracking plots, deals, installments, payments and related records. We work to keep the service available and accurate, and we may improve or change features over time.' },
      ],
    },
    {
      id: 'changes-to-service',
      title: 'Changes to the service',
      blocks: [
        { type: 'p', text: 'We may add, change or remove features, and we may update the service to fix problems or improve it. If we make a change that removes something you rely on in a way that matters, we will tell account holders before it applies where we reasonably can.' },
      ],
    },
    {
      id: 'your-account',
      title: 'Your account',
      blocks: [
        {
          type: 'ul',
          items: [
            'You are responsible for the accuracy of the data you enter.',
            'Keep your login details private, and tell us at once if you think someone else has used them.',
            'Give team members only the role they need. You are responsible for what people you add do in your account.',
          ],
        },
      ],
    },
    {
      id: 'plans-and-payment',
      title: 'Plans, trials and payment',
      blocks: [
        { type: 'p', text: 'Plans are priced in Pakistani rupees and shown in the pricing section of this site, and can be billed monthly or yearly. New accounts start with a free trial. Prices and plan limits can change, and we will tell you before a change applies to your account.' },
        { type: 'p', text: 'How trials, cancellation and refunds work is set out in the <refund>refund and cancellation policy</refund>.' },
      ],
    },
    {
      id: 'acceptable-use',
      title: 'Acceptable use',
      blocks: [
        {
          type: 'ul',
          items: [
            'Do not use the service for anything unlawful or to deceive buyers.',
            'Do not try to break into accounts, or to disrupt, overload or copy the service.',
            'Do not upload material you have no right to use, or that you know to be false.',
          ],
        },
      ],
    },
    {
      id: 'your-data',
      title: 'Your data',
      blocks: [
        { type: 'p', text: 'The records you store in Plot Ledge belong to you. We use them only to run the service for you. Keep your own copies of important records by exporting reports regularly. The <privacy>privacy policy</privacy> explains how we handle information collected through this website.' },
      ],
    },
    {
      id: 'our-rights',
      title: 'Our software and content',
      blocks: [
        { type: 'p', text: 'We keep all rights in the Plot Ledge software, design, text and logos. These terms give you the right to use the service while your account is active, and no other rights in them.' },
      ],
    },
    {
      id: 'third-parties',
      title: 'Third-party services and links',
      blocks: [
        { type: 'p', text: 'The website and the service may work with, or link to, services run by other companies, such as hosting, analytics, email, WhatsApp and the AI provider behind the chat assistant. We do not control those services and are not responsible for their content or practices. Their own terms and privacy policies apply when you use them.' },
      ],
    },
    {
      id: 'liability',
      title: 'Our responsibility',
      blocks: [
        { type: 'p', text: 'We provide the service as is. To the extent the law allows, we are not liable for indirect or consequential losses, such as lost profit or a missed payment that depended on information in the service.' },
      ],
    },
    {
      id: 'ending',
      title: 'Ending your use',
      blocks: [
        { type: 'p', text: 'You can stop using Plot Ledge at any time. We may suspend or close an account that breaks these terms, and we will tell you why where we can.' },
      ],
    },
    {
      id: 'governing-law',
      title: 'Governing law and disputes',
      blocks: [
        { type: 'p', text: '[To be confirmed] The law that governs these terms, and the courts or process for settling disputes, will be confirmed in the final version of these terms. Until then, please write to us first at <mail>{email}</mail> so we can try to settle any problem together.' },
      ],
    },
    {
      id: 'severability',
      title: 'If part of these terms does not apply',
      blocks: [
        { type: 'p', text: 'If a court or authority decides that part of these terms cannot be enforced, the rest of the terms stay in force. If we do not enforce a right straight away, we have not given it up.' },
      ],
    },
    {
      id: 'changes',
      title: 'Changes to these terms',
      blocks: [
        { type: 'p', text: 'When we change these terms, we will update the date at the top and tell account holders about changes that matter before they apply. Questions about these terms: <mail>{email}</mail>.' },
      ],
    },
  ],
}

const refund: Policy = {
  title: 'Refund and cancellation policy',
  description: 'How the free trial, billing, cancellation and refunds work for Plot Ledge plans, and how to ask for one.',
  intro: 'How trials, billing and cancellation work, and when we refund.',
  updated: '2026-11-09',
  summary: [
    'You get a 15-day free trial with no payment needed, and you can cancel during it without being charged.',
    'Paid plans are billed in rupees, in advance, monthly or yearly.',
    'You can cancel at any time. Cancelling stops future billing but does not refund the period already paid.',
    'We review refunds for charges made in error or for faults on our side.',
  ],
  sections: [
    {
      id: 'at-a-glance',
      title: 'What happens when',
      blocks: [
        {
          type: 'table',
          caption: 'What happens in each situation',
          head: ['Situation', 'What happens'],
          rows: [
            ['You cancel during the free trial', 'You are not charged.'],
            ['You cancel a paid plan', 'Future billing stops. The period you already paid for is not refunded automatically.'],
            ['You were charged in error or twice', 'We review your request and refund where appropriate.'],
            ['A fault on our side kept you from using the service', 'We review your request and refund where appropriate.'],
            ['A payment fails', 'See “Failed payments”.'],
            ['You have an Enterprise agreement', 'The terms of that agreement apply where they differ from this page.'],
          ],
        },
      ],
    },
    {
      id: 'free-trial',
      title: 'Free trial',
      blocks: [
        { type: 'p', text: 'New accounts start with a 15-day free trial. No payment is needed to start a trial, and you can cancel at any time during it without being charged.' },
      ],
    },
    {
      id: 'billing',
      title: 'Billing',
      blocks: [
        { type: 'p', text: 'Paid plans are billed in Pakistani rupees, in advance, monthly or yearly depending on the option you choose, starting when your trial ends or when you choose a plan. Prices and plan limits are shown in the pricing section of this site and can change. We will tell you before a change applies to your account.' },
      ],
    },
    {
      id: 'taxes',
      title: 'Taxes',
      blocks: [
        { type: 'p', text: '[To be confirmed] Whether the prices shown include or exclude taxes, and how any tax is shown on your invoice, will be confirmed in the final version of this policy.' },
      ],
    },
    {
      id: 'failed-payments',
      title: 'Failed payments',
      blocks: [
        { type: 'p', text: 'If a payment fails or is declined, your plan may not renew. Write to us at <mail>{email}</mail> and we will help sort it out. [To be confirmed] The exact steps, such as how long we wait before limiting access, will be set out in the final version of this policy.' },
      ],
    },
    {
      id: 'cancellation',
      title: 'Cancellation',
      blocks: [
        { type: 'p', text: 'You can cancel at any time. Cancelling stops future billing. It does not automatically refund the period you have already been charged for, whether that period is a month or a year.' },
      ],
    },
    {
      id: 'refunds',
      title: 'Refunds',
      blocks: [
        { type: 'p', text: 'We do not offer automatic refunds for partially used billing periods. We will review a request and refund where appropriate if:' },
        {
          type: 'ul',
          items: [
            'you were charged in error, or charged twice, or',
            'a technical fault on our side kept you from using the service.',
          ],
        },
      ],
    },
    {
      id: 'enterprise',
      title: 'Enterprise plans',
      blocks: [
        { type: 'p', text: 'Custom Enterprise agreements may have their own billing and cancellation terms. Those are set out in your agreement with us and apply instead of this page where they differ.' },
      ],
    },
    {
      id: 'how-to-ask',
      title: 'How to ask for a cancellation or refund',
      blocks: [
        { type: 'p', text: 'Write to <mail>{email}</mail> and include:' },
        {
          type: 'ul',
          items: [
            'the name or email on your account,',
            'your plan, and the date and amount of the charge,',
            'what you would like us to do, and why.',
          ],
        },
        { type: 'p', text: 'A person will read your request and reply to you.' },
      ],
    },
  ],
}

const legal = {
  ui: {
    inShort: 'In short',
    onThisPage: 'On this page',
    lastUpdated: 'Last updated {date}',
    contentsLabel: '{title} contents',
    questionsTitle: 'Questions about this page?',
    contactSentence: 'Write to <mail>{email}</mail> and a person will reply.',
    contactAria: 'Contact and related policies',
    /** Breadcrumb link back to the page that lists every legal document. */
    allDocuments: 'All legal documents',
    policyNames: {
      privacy: 'Privacy policy',
      cookies: 'Cookie policy',
      terms: 'Terms of use',
      refund: 'Refund and cancellation',
    },
  },
  privacy,
  cookies,
  terms,
  refund,
}

export default legal
