// English text for the 'chat' namespace: the AI assistant window, launcher, lead card and offline backup answers. See docs/i18n.md.
const chat = {
  launcher: {
    open: 'Chat with Plot Ledge Assistant',
    close: 'Close chat with Plot Ledge Assistant',
    teaser: 'Questions about Plot Ledge? Ask me.',
    dismiss: 'Dismiss',
  },
  window: {
    title: 'Plot Ledge Assistant',
    subtitle: 'AI assistant',
    onlineSr: 'Online. ',
    options: 'Chat options',
    newChat: 'New chat',
    minimize: 'Minimize chat',
    close: 'Close chat',
    conversation: 'Conversation',
    inputLabel: 'Type your question',
    inputPlaceholder: 'Type your question',
    send: 'Send message',
    disclaimer: 'AI assistant. Answers may be imperfect.',
    privacy: 'Privacy',
    typing: 'Plot Ledge Assistant is typing',
  },
  greeting: 'Assalam o Alaikum! I am the Plot Ledge Assistant. I can answer questions about plots, installments, receipts and pricing. What would you like to know?',
  quickRepliesLabel: 'Suggested questions',
  quickReplies: ['What does Plot Ledge do?', 'Pricing', 'Book a demo', 'Can I import my Excel data?'],
  actions: {
    whatsapp: 'Chat on WhatsApp',
    crm: 'Open the CRM',
    pricing: 'See pricing',
    demo: 'Book a free demo',
  },
  rate: {
    label: 'Rate this reply',
    up: 'Helpful reply',
    down: 'Not helpful reply',
  },
  whatsapp: {
    /** {topics} is what the visitor asked, joined with semicolons. */
    withTopics: 'Hi Plot Ledge, I was chatting on your website and asked about: {topics}. I would like to talk to the team.',
    plain: 'Hi Plot Ledge, I was chatting on your website. I would like to talk to the team.',
  },
  errors: {
    rateLimit: 'You have reached the message limit for now. Please try again in a few minutes, or chat with the team on WhatsApp.',
    failure: 'I am having trouble right now. You can chat with the team on WhatsApp or book a demo.',
    redacted: 'Message removed because it looked like private data.',
  },
  sensitiveReply: 'Please do not share bank details, card numbers, passwords or CNIC numbers in this chat. I removed that message. I can still help with questions about Plot Ledge.',
  lead: {
    intro: 'Share your details and the team will contact you.',
    name: 'Your name',
    phone: 'Phone or WhatsApp number',
    plots: 'How many plots do you manage?',
    choose: 'Choose one',
    city: 'City',
    optional: '(optional)',
    submit: 'Send my details',
    sending: 'Sending',
    note: 'We will only use this to contact you about Plot Ledge.',
    done: 'Thank you. The team will contact you soon on the number you gave.',
    failed: 'We could not send this right now.',
    whatsapp: 'Message us on WhatsApp',
    errors: {
      name: 'Enter your name.',
      phone: 'Enter a number with 10 to 15 digits.',
      plots: 'Pick one.',
    },
  },
  /**
   * Backup answers, used only when the AI service cannot be reached. The first entry with a keyword found in the visitor's
   * text (case-insensitive) wins. Keywords are per language: include words visitors of that language really type.
   * Placeholders in answers: {silver} {gold} {pct}.
   */
  offline: [
    {
      id: 'pricing',
      keywords: ['price', 'pricing', 'cost', 'plan', 'fee', 'kitn', 'qeemat', 'qimat', 'rate', 'free', 'قیمت'],
      answer: 'Plans start at {silver} a month for Silver. Gold is {gold} a month, and paying yearly saves {pct}% (two months free). Enterprise is priced for multi-branch developers, societies and larger groups, so talk to us.',
    },
    {
      id: 'import',
      keywords: ['excel', 'import', 'sheet', 'data load', 'data transfer', 'purana'],
      answer: 'Yes, we can help you load your current plots, buyers and payments from Excel. Send us the sheet and we will tell you if anything needs tidying first, such as two buyers in one row.',
    },
    {
      id: 'roles',
      keywords: ['role', 'login', 'access', 'owner', 'accountant', 'agent', 'permission', 'who can'],
      answer: 'Everyone gets their own login. The Owner sees everything, including sales, profit and investors. The Accountant handles payments, slips, receipts and reports. A Sales Agent can add deals and look up plots and buyers, but cannot edit or delete a deal.',
    },
    {
      id: 'receipts',
      keywords: ['receipt', 'slip', 'payment proof', 'raseed', 'rasid'],
      answer: 'Every payment you record gets a receipt with its own unique ID. You can attach the bank slip reference to the same payment, so the receipt, the slip and the deal stay linked.',
    },
    {
      id: 'mobile',
      keywords: ['phone', 'mobile', 'tablet', 'app'],
      answer: 'Yes. Plot Ledge works on phones and tablets, so you can check a buyer balance or record a payment from the site or from a client meeting.',
    },
    {
      id: 'investor',
      keywords: ['investor', 'profit', 'share', 'partner'],
      answer: 'You record how much each investor put into a project and the share they hold. Plot Ledge then shows each investor the profit that belongs to them, so the split is a number on screen and not a discussion.',
    },
    {
      id: 'society',
      keywords: ['society', 'housing', 'enterprise', 'several projects', 'multiple projects'],
      answer: 'Yes. The Enterprise plan is built for societies and multi-branch developers with several projects and larger teams. Chat with us on WhatsApp or book a demo and we will set it up around your projects.',
    },
    {
      id: 'about',
      keywords: ['what is', 'what does', 'kya hai', 'kya karta', 'about', 'what do you do'],
      answer: 'Plot Ledge is a CRM for plot and property dealers. It keeps your plots, deals, installments, payments and receipts in one place, so you stop piecing things together from Excel sheets and WhatsApp screenshots.',
    },
  ] as { id: string; keywords: string[]; answer: string }[],
}
export default chat
