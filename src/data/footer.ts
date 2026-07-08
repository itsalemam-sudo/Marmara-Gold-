export type FooterColumn = {
  title: string;
  links: { label: string; href: string }[];
};

export const footerColumns: FooterColumn[] = [
  {
    title: "Shop",
    links: [
      { label: "Gold bullion",     href: "#capabilities" },
      { label: "Silver bullion",   href: "#capabilities" },
      { label: "Platinum bullion", href: "#capabilities" },
      { label: "Palladium bullion", href: "#capabilities" },
      { label: "Bullion coins",    href: "#capabilities" },
    ],
  },
  {
    title: "Knowledge",
    links: [
      { label: "Market news",           href: "#insights" },
      { label: "Precious-metals insights", href: "#insights" },
      { label: "How to buy",            href: "#insights" },
      { label: "Vaulting & storage",    href: "#capabilities" },
      { label: "Responsible sourcing",  href: "#insights" },
    ],
  },
  {
    title: "Who we are",
    links: [
      { label: "About Marmara",     href: "#about" },
      { label: "Global offices",    href: "#reach" },
      { label: "Leadership",        href: "#about" },
      { label: "Careers",           href: "#careers" },
      { label: "Contact",           href: "#contact" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Open an account",   href: "#contact" },
      { label: "Client portal",     href: "#contact" },
      { label: "Support center",    href: "#contact" },
      { label: "barX platform",     href: "#barx" },
    ],
  },
];

export type TrustBadge = {
  short: string;
  name: string;
  detail: string;
};

/** 4 trust badges — order and copy per spec. */
export const trustBadges: TrustBadge[] = [
  { short: "LBMA",     name: "London Bullion Market Association",     detail: "Good Delivery aligned" },
  { short: "DMCC",     name: "Dubai Multi Commodities Centre",         detail: "Licensed member" },
  { short: "ISO",      name: "ISO 9001 · 27001",                       detail: "Quality & information security" },
  { short: "AML/CFT",  name: "Anti-Money Laundering / CFT",            detail: "Fully compliant framework" },
];

export const disclaimer = `Marmara Gold Trading LLC services in the trading, refining and distribution of precious metals including gold, silver, platinum and palladium. All services are provided in accordance with applicable regulations in authorised jurisdictions and may not be available in all countries. Information on this website is for institutional and professional use only. It does not constitute an offer, solicitation, or recommendation to trade or invest. All trading involves risk. Marmara maintains strict compliance with AML/CFT policies and international standards.`;
