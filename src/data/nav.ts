/**
 * Primary navigation — Marmara Precious Metals Group.
 *
 * Every dropdown item points to a dedicated page. Public-facing
 * labels avoid internal policy numbers (MGT/POL/COM-*), unverified
 * accreditations (LBMA/LPPM Good Delivery), and platform names that
 * are not yet live in production (barX / Marmara Trader).
 *
 *   /corporate/{section}
 *   /services/{slug}        /policies/{code-slug}
 *   /news                   /#contact
 */

export type NavChild = {
  label: string;
  href: string;
  external?: boolean;
  desc?: string;
};

export type NavLink = {
  label: string;
  href: string;
  variant?: "default" | "tab";
  external?: boolean;
  children?: NavChild[];
};

export const nav: NavLink[] = [
  {
    label: "Corporate",
    href: "/corporate/about",
    children: [
      { label: "About Marmara",  href: "/corporate/about",      desc: "Who we are and how we work." },
      { label: "Leadership",     href: "/corporate/leadership", desc: "Senior team steering the desk." },
      { label: "Global Presence", href: "/corporate/offices",   desc: "Dubai HQ and international footprint." },
      { label: "Careers",        href: "/corporate/careers",    desc: "Join a compliance-first bullion group." },
    ],
  },

  {
    label: "Services",
    href: "/services/refining",
    // Labels below match the destination page titles exactly. The previous
    // labels ("Compliance & Responsible Sourcing" → Laboratory page, "Market
    // Solutions" → Small Bar page, "Physical Settlement & Logistics" →
    // Storage page) were flagged in the website review for misdirecting
    // users. Rename a service PAGE if you want its label back; do not
    // reintroduce a label that doesn't describe the destination.
    children: [
      { label: "Precious Metals Trading",   href: "/services/trading",              desc: "Gold, silver, platinum, palladium." },
      { label: "Refining & Production",     href: "/services/refining",             desc: "Refining partnerships and Marmara-branded bars." },
      { label: "Storage & Vaulting",        href: "/services/storage-vaulting",     desc: "Cross-border settlement, vaulting, secure logistics." },
      { label: "Laboratory & Analysis",     href: "/services/laboratory-analysis",  desc: "XRF, fire-assay and ICP-MS testing." },
      { label: "Small Bar Production",      href: "/services/small-bar-production", desc: "Marmara-branded minted bars from 1 g to 100 g." },
    ],
  },

  {
    label: "Compliance",
    // Opens the on-page Policies section that lists every policy as a
    // filterable grid — the actual "library". Each policy card below
    // deep-links to the modal view for that specific document.
    href: "/#compliance",
    children: [
      { label: "Compliance Library",           href: "/#compliance",                   desc: "The full policy set." },
      { label: "Responsible Sourcing",         href: "/policies/mgt-pol-com-05" },
      { label: "Anti-Bribery & Corruption",    href: "/policies/mgt-pol-com-04" },
      { label: "Human Rights",                 href: "/policies/mgt-pol-com-02" },
      { label: "AML/CFT Regulatory Framework", href: "/policies/mgt-pol-com-07" },
      { label: "Data Privacy",                 href: "/policies/mgt-pol-com-015" },
    ],
  },

  {
    label: "Sustainability",
    href: "/policies/mgt-pol-com-06",
    children: [
      { label: "Sustainability Policy",     href: "/policies/mgt-pol-com-06" },
      { label: "EHS Policy",                href: "/policies/mgt-pol-ohs-06" },
      { label: "Business Continuity Plan",  href: "/policies/mgt-pol-ohs-04" },
      { label: "Community & Charity",       href: "/policies/mgt-pol-ohs-07" },
    ],
  },

  { label: "News", href: "/news" },

  { label: "Human Resources", href: "/corporate/careers" },

  { label: "Contact", href: "/#contact" },
];
