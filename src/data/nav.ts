/**
 * Primary navigation — Nadir-Metal-style grouped dropdowns.
 *
 * Top-level items surface as buttons in the desktop bar. Items with
 * `children` render as a mega-menu column on hover / focus. The
 * `variant: "tab"` marker keeps the barX pill styling from the earlier
 * shell.
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
    href: "#about",
    children: [
      { label: "About Marmara",     href: "#about",       desc: "Who we are and how we work." },
      { label: "Leadership",        href: "#leadership",  desc: "Senior team steering the desk." },
      { label: "Global Offices",    href: "#reach",       desc: "Dubai HQ + partner desks." },
      { label: "Careers",           href: "#careers",     desc: "Join a KYC-first bullion desk." },
    ],
  },

  {
    label: "Product",
    href: "#products",
    children: [
      { label: "Gold Bullion",      href: "#products", desc: "1 kg cast, 500 g, 100 g minted, 10 tola, 1 oz coin." },
      { label: "Silver Bullion",    href: "#products", desc: "1 kg cast, 100 g minted, 1 oz coin." },
      { label: "Platinum",          href: "#products", desc: "1 kg cast and 100 g minted." },
      { label: "Palladium",         href: "#products", desc: "1 kg cast (LPPM Good Delivery)." },
    ],
  },

  {
    label: "Services",
    href: "#services",
    children: [
      { label: "Buy Precious Metals",     href: "#services", desc: "LBMA-accredited gold, silver, PGMs." },
      { label: "Sell Precious Metals",    href: "#services", desc: "Assay-based settlement." },
      { label: "Refining",                href: "#services", desc: "Certified refining partners." },
      { label: "Secure Storage",          href: "#services", desc: "Insured global vaulting." },
      { label: "Digital Trading — barX",  href: "https://marmara.ntptrader.com/", external: true, desc: "Institutional trading platform." },
      { label: "Market Insights",         href: "#blogs",    desc: "Weekly market briefs." },
    ],
  },

  {
    label: "Compliance",
    href: "#compliance",
    children: [
      { label: "RJC Code of Practices",         href: "#compliance", desc: "MGT/POL/COM-01" },
      { label: "Human Rights",                  href: "#compliance", desc: "MGT/POL/COM-02" },
      { label: "Anti-Bribery & Corruption",     href: "#compliance", desc: "MGT/POL/COM-04" },
      { label: "Responsible Supply Chain",      href: "#compliance", desc: "MGT/POL/COM-05 (OECD)" },
      { label: "Targeted Financial Sanctions",  href: "#compliance", desc: "MGT/POL/COM-07 (UAE Cab. Res. 74)" },
      { label: "Provenance Claim",              href: "#compliance", desc: "MGT/POL/COM-08" },
      { label: "Facilitation Payments",         href: "#compliance", desc: "MGT/POL/COM-09" },
      { label: "Fair Trade",                    href: "#compliance", desc: "MGT/POL/COM-10" },
      { label: "Gifts",                         href: "#compliance", desc: "MGT/POL/COM-11" },
      { label: "Grievances & Whistleblowing",   href: "#compliance", desc: "MGT/POL/COM-12" },
      { label: "Confidentiality & Ethics",      href: "#compliance", desc: "MGT/POL/COM-13" },
      { label: "HR Due Diligence",              href: "#compliance", desc: "MGT/POL/COM-014" },
      { label: "Data Privacy & Records",        href: "#compliance", desc: "MGT/POL/COM-015 (UAE PDPL)" },
      { label: "All 21 policies →",             href: "#compliance", desc: "Signed 01.10.2024." },
    ],
  },

  {
    label: "Sustainability",
    href: "#compliance",
    children: [
      { label: "Sustainability Policy",         href: "#compliance", desc: "MGT/POL/COM-06" },
      { label: "EHS Policy",                    href: "#compliance", desc: "MGT/POL/OHS/06 (ISO 14001)" },
      { label: "Disaster Management Plan",      href: "#compliance", desc: "MGT/POL/OHS/03" },
      { label: "Business Continuity Plan",      href: "#compliance", desc: "MGT/POL/OHS/04" },
      { label: "Community & Charity",           href: "#compliance", desc: "MGT/POL/OHS/07" },
    ],
  },

  { label: "News", href: "#blogs" },

  {
    label: "Human Resources",
    href: "#careers",
    children: [
      { label: "Careers",                       href: "#careers",     desc: "Open roles across the desk." },
      { label: "HR Due Diligence Policy",       href: "#compliance",  desc: "MGT/POL/COM-014" },
      { label: "Safe Driving Policy",           href: "#compliance",  desc: "MGT/POL/OHS/01" },
      { label: "Incident Reporting",            href: "#compliance",  desc: "MGT/POL/OHS/02" },
    ],
  },

  { label: "barX", href: "https://marmara.ntptrader.com/", variant: "tab", external: true },
];
