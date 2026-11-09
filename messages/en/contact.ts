// English text for the 'contact' namespace: the contact page and the demo request form. See docs/i18n.md.
const contact = {
  meta: {
    title: 'Contact and book a demo',
    description: 'Book a free demo of Plot Ledge, the plot management software for property dealers. Send a message or chat on WhatsApp.',
  },
  eyebrow: 'Contact',
  title: 'Book a free demo',
  lead: 'Tell us how many plots you manage and we will show you installments, receipts and reports on a short call.',
  aside: {
    label: 'Other ways to reach us',
    chatTitle: 'Prefer to chat?',
    whatsapp: 'Chat on WhatsApp',
    stepsTitle: 'What happens on a demo',
    enterprise: 'Housing society or several projects? Mention it and we will cover Enterprise.',
  },
  steps: [
    'We ask how you track plots and installments today.',
    'You see how plots, deals, installments and receipts work together.',
    'We can set up a 15-day trial if you want to try it with your own data.',
  ],
  /** Labels for the plot-count choices, in the same order as PLOT_COUNT_OPTIONS in lib/lead-options.ts. */
  plotOptions: ['Under 25', '25 to 100', '100 to 500', '500+'],
  form: {
    successTitle: 'Request received',
    success: 'Thank you. We will contact you on the number you gave.',
    continueWhatsApp: 'Continue on WhatsApp',
    whatsappFollowup: 'Hi Plot Ledge, I just sent a demo request on the website.',
    failed: 'We could not send this right now. Please message us on WhatsApp.',
    messageWhatsApp: 'Message us on WhatsApp',
    honeypot: 'Website',
    name: 'Your name',
    phone: 'Phone or WhatsApp number',
    company: 'Company or society',
    optional: '(optional)',
    plots: 'How many plots do you manage?',
    choose: 'Choose one',
    submit: 'Book a free demo',
    sending: 'Sending',
    privacy: 'We use your details only to contact you about Plot Ledge.',
    errors: {
      name: 'Enter your name.',
      phone: 'Enter a phone number with 10 to 15 digits.',
      plots: 'Pick how many plots you manage.',
    },
  },
}
export default contact
