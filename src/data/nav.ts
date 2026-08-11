/**
 * Primary navigation — Nadir-Metal-style grouped dropdowns.
 *
 * Every dropdown item points to a dedicated page:
 *   /corporate/{section}    /product{s|/filter}   /services/{slug}
 *   /policies/{code-slug}   /news
 *
 * Top-level items with `children` render as a mega-menu column on
 * hover / focus. The `variant: "tab"` marker keeps the barX pill
 * styling.
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
      { label: "Global Offices", href: "/corporate/offices",    desc: "Dubai HQ + partner desks." },
      { label: "Careers",        href: "/corporate/careers",    desc: "Join a KYC-first bullion desk." },
    ],
  },

  {
    label: "Product",
    href: "/products",
    children: [
      { label: "All Products",   href: "/products",           desc: "The full 12-product catalogue." },
      { label: "Gold Bullion",   href: "/products/gold",      desc: "1 kg cast, 500 g, 100 g minted, 10 tola, 1 oz coin." },
      { label: "Silver Bullion", href: "/products/silver",    desc: "1 kg cast, 100 g minted, 1 oz coin." },
      { label: "Platinum",       href: "/products/platinum",  desc: "1 kg cast and 100 g minted." },
      { label: "Palladium",      href: "/products/palladium", desc: "1 kg cast (LPPM Good Delivery)." },
      { label: "Coins",          href: "/products/coins",     desc: "Gold + silver sovereign coins." },
      { label: "Bars",           href: "/products/bars",      desc: "Cast and minted bars only." },
    ],
  },

  {
    label: "Services",
    href: "/services/refining",
    children: [
      { label: "Refining",              href: "/services/refining",             desc: "999.9 gold and 999 silver — LBMA / LPPM aligned." },
      { label: "Recycling & Recovery",  href: "/services/recycling-recovery",   desc: "Jewellery scrap, dross, sweepings, e-waste." },
      { label: "Small Bar Production",  href: "/services/small-bar-production", desc: "Marmara-branded 1 g – 100 g minted bars." },
      { label: "Trading",               href: "/services/trading",              desc: "Au / Ag / Pt / Pd / Rh via barX." },
      { label: "Laboratory & Analysis", href: "/services/laboratory-analysis",  desc: "XRF, fire assay, ICP-MS testing." },
      { label: "Storage & Vaulting",    href: "/services/storage-vaulting",     desc: "Dubai · London · Zürich · Singapore." },
    ],
  },

  {
    label: "Compliance",
    href: "/policies/mgt-pol-com-01",
    children: [
      { label: "RJC Code of Practices",        href: "/policies/mgt-pol-com-01",  desc: "MGT/POL/COM-01" },
      { label: "Human Rights",                 href: "/policies/mgt-pol-com-02",  desc: "MGT/POL/COM-02" },
      { label: "Anti-Bribery & Corruption",    href: "/policies/mgt-pol-com-04",  desc: "MGT/POL/COM-04" },
      { label: "Responsible Supply Chain",     href: "/policies/mgt-pol-com-05",  desc: "MGT/POL/COM-05 (OECD)" },
      { label: "Targeted Financial Sanctions", href: "/policies/mgt-pol-com-07",  desc: "MGT/POL/COM-07 (UAE Cab. Res. 74)" },
      { label: "Provenance Claim",             href: "/policies/mgt-pol-com-08",  desc: "MGT/POL/COM-08" },
      { label: "Facilitation Payments",        href: "/policies/mgt-pol-com-09",  desc: "MGT/POL/COM-09" },
      { label: "Fair Trade",                   href: "/policies/mgt-pol-com-10",  desc: "MGT/POL/COM-10" },
      { label: "Gifts",                        href: "/policies/mgt-pol-com-11",  desc: "MGT/POL/COM-11" },
      { label: "Grievances & Whistleblowing",  href: "/policies/mgt-pol-com-12",  desc: "MGT/POL/COM-12" },
      { label: "Confidentiality & Ethics",     href: "/policies/mgt-pol-com-13",  desc: "MGT/POL/COM-13" },
      { label: "HR Due Diligence",             href: "/policies/mgt-pol-com-014", desc: "MGT/POL/COM-014" },
      { label: "Data Privacy & Records",       href: "/policies/mgt-pol-com-015", desc: "MGT/POL/COM-015 (UAE PDPL)" },
      { label: "All 21 policies →",            href: "/#compliance",              desc: "Signed 01.10.2024." },
    ],
  },

  {
    label: "Sustainability",
    href: "/policies/mgt-pol-com-06",
    children: [
      { label: "Sustainability Policy",     href: "/policies/mgt-pol-com-06", desc: "MGT/POL/COM-06" },
      { label: "EHS Policy",                href: "/policies/mgt-pol-ohs-06", desc: "MGT/POL/OHS/06 (ISO 14001)" },
      { label: "Disaster Management Plan",  href: "/policies/mgt-pol-ohs-03", desc: "MGT/POL/OHS/03" },
      { label: "Business Continuity Plan",  href: "/policies/mgt-pol-ohs-04", desc: "MGT/POL/OHS/04" },
      { label: "Community & Charity",       href: "/policies/mgt-pol-ohs-07", desc: "MGT/POL/OHS/07" },
    ],
  },

  { label: "News", href: "/news" },

  {
    label: "Human Resources",
    href: "/corporate/careers",
    children: [
      { label: "Careers",                 href: "/corporate/careers",        desc: "Open roles across the desk." },
      { label: "HR Due Diligence Policy", href: "/policies/mgt-pol-com-014", desc: "MGT/POL/COM-014" },
      { label: "Safe Driving Policy",     href: "/policies/mgt-pol-ohs-01",  desc: "MGT/POL/OHS/01" },
      { label: "Incident Reporting",      href: "/policies/mgt-pol-ohs-02",  desc: "MGT/POL/OHS/02" },
    ],
  },

  { label: "barX", href: "https://marmara.ntptrader.com/", variant: "tab", external: true },
];
