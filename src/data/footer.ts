export type FooterColumn = {
  title: string;
  links: { label: string; href: string }[];
};

export const footerColumns: FooterColumn[] = [
  {
    title: "Shop",
    links: [
      { label: "Gold Bullion",       href: "#services" },
      { label: "Silver Bullion",     href: "#services" },
      { label: "Platinum Bars",      href: "#services" },
      { label: "Palladium Products", href: "#services" },
    ],
  },
  {
    title: "Knowledge",
    links: [
      { label: "Market News",              href: "#blogs" },
      { label: "Precious Metals Insights", href: "#blogs" },
      { label: "How to Buy",               href: "#services" },
      { label: "Vaulting & Storage",       href: "#services" },
    ],
  },
  {
    title: "Who We Are",
    links: [
      { label: "About Marmara",      href: "#about" },
      { label: "Careers",            href: "#careers" },
      { label: "Our Global Offices", href: "#reach" },
      { label: "Leadership Team",    href: "#leadership" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Open an Account",   href: "#contact" },
      { label: "Client Portal Login", href: "#contact" },
      { label: "Support Center",    href: "#contact" },
    ],
  },
];

export type TrustBadge = {
  short: string;
  name: string;
  detail: string;
};

/** 4 trust badges — copy per HTML mockup. Rendered as horizontal pills. */
export const trustBadges: TrustBadge[] = [
  { short: "LBMA",     name: "LBMA Recognized Partner",  detail: "" },
  { short: "DMCC",     name: "DMCC Licensed",            detail: "" },
  { short: "ISO",      name: "ISO Certified",            detail: "" },
  { short: "AML/CFT",  name: "AML/CFT Compliant",        detail: "" },
];

export const disclaimer = `Marmara Gold Trading LLC services in the trading, refining and distribution of precious metals including gold, silver, platinum and palladium. All services are provided in accordance with applicable regulations in authorised jurisdictions and may not be available in all countries. Information on this website is for institutional and professional use only. It does not constitute an offer, solicitation, or recommendation to trade or invest. All trading involves risk. Marmara maintains strict compliance with AML/CFT policies and international standards.`;
