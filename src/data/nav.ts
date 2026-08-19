/**
 * Primary navigation — Marmara Precious Metals Group.
 *
 * Every dropdown item points to a dedicated page. Public-facing
 * labels avoid internal policy numbers (MGT/POL/COM-*), unverified
 * accreditations (LBMA/LPPM Good Delivery), and platform names that
 * are not yet live in production (barX / Marmara Trader).
 *
 *   /corporate/{section}    /products{|/filter}
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
    label: "Product",
    href: "/products",
    children: [
      { label: "All Products",   href: "/products",           desc: "The full precious metals range." },
      { label: "Gold Bullion",   href: "/products/gold",      desc: "Cast + minted bars, coins, tola biscuits." },
      { label: "Silver Bullion", href: "/products/silver",    desc: "Cast + minted bars and coins." },
      { label: "Platinum",       href: "/products/platinum",  desc: "Cast + minted bars." },
      { label: "Palladium",      href: "/products/palladium", desc: "Investment-grade cast bars." },
      { label: "Coins",          href: "/products/coins",     desc: "Sovereign coins in gold and silver." },
      { label: "Bars",           href: "/products/bars",      desc: "Cast and minted bars." },
    ],
  },

  {
    label: "Services",
    href: "/services/refining",
    children: [
      { label: "Precious Metals Trading",     href: "/services/trading",              desc: "Gold, silver, platinum, palladium." },
      { label: "Refining & Production",       href: "/services/refining",             desc: "Refining partnerships and Marmara-branded bars." },
      { label: "Physical Settlement & Logistics", href: "/services/storage-vaulting", desc: "Cross-border settlement, vaulting, secure logistics." },
      { label: "Compliance & Responsible Sourcing", href: "/services/laboratory-analysis", desc: "AML/CFT, KYC, responsible-sourcing framework." },
      { label: "Market Solutions",            href: "/services/small-bar-production", desc: "Competitive pricing and tailored solutions." },
    ],
  },

  {
    label: "Compliance",
    href: "/policies/mgt-pol-com-01",
    children: [
      { label: "Compliance Library",         href: "/policies/mgt-pol-com-01", desc: "The full policy set." },
      { label: "Responsible Sourcing",       href: "/policies/mgt-pol-com-05" },
      { label: "Anti-Bribery & Corruption",  href: "/policies/mgt-pol-com-04" },
      { label: "Human Rights",               href: "/policies/mgt-pol-com-02" },
      { label: "AML/CFT Regulatory Framework", href: "/policies/mgt-pol-com-07" },
      { label: "Data Privacy",               href: "/policies/mgt-pol-com-015" },
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
