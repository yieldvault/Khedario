/**
 * Central company configuration. Edit this file (or set PUBLIC_* env vars at build time).
 * Empty strings mean "unconfigured": the UI hides the related link/feature.
 */
const env = import.meta.env;
const v = (x: unknown) => (typeof x === 'string' ? x.trim() : '');

export const site = {
  name: 'Khedar',
  legalName: '', // UNCONFIGURED: registered legal entity name
  domain: 'khedar.io',
  url: 'https://khedar.io',
  tagline: 'Engineering for blockchain, trading, software and AI',
  description:
    'Khedar is a technology development and AI agency building blockchain systems, smart contracts, exchanges, wallets, SaaS products, marketplaces and AI automation, backed by 20 years of overall technology experience.',
  experienceYears: 20,
  contact: {
    email: v(env.PUBLIC_CONTACT_EMAIL) || '', // UNCONFIGURED
    whatsapp: v(env.PUBLIC_WHATSAPP_NUMBER).replace(/\D/g, '') || '', // UNCONFIGURED
    address: '', // UNCONFIGURED
  },
  formEndpoint: v(env.PUBLIC_FORM_ENDPOINT) || '', // UNCONFIGURED
  social: {
    linkedin: v(env.PUBLIC_LINKEDIN_URL) || '',
    x: v(env.PUBLIC_X_URL) || '',
    github: v(env.PUBLIC_GITHUB_URL) || '',
  },
} as const;

export const socialLinks = (
  [
    ['LinkedIn', site.social.linkedin],
    ['X', site.social.x],
    ['GitHub', site.social.github],
  ] as const
).filter(([, href]) => href);
