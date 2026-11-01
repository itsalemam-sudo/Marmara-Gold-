/**
 * English string dictionary. Keys are grouped by section for grep-ability.
 * The Arabic dictionary in ./ar.ts must mirror this shape 1:1.
 */
export const en = {
  meta: {
    langLabel: "EN",
    swapTo:    "العربية",
  },
  ticker: {
    live:       "Live spot",
    cached:     "Cached",
    indicative: "Indicative",
    ago:        (t: string) => t,
  },
  nav: {
    home:       "Home",
    services:   "Services",
    barx:       "barX",
    about:      "About Us",
    blogs:      "Blogs",
    events:     "Events",
    offices:    "Our Offices",
    leadership: "Leadership",
    contactCta: "Contact us",
    tradeCta:   "Trade with barX",
    brand: {
      big:   "MARMARA",
      small: "Gold Trading LLC",
    },
  },
  hero: {
    fineness: "Au 999.9 · FINE GOLD",
    headline: {
      before:  "Your trusted partner in",
      emphasis: "precious metals",
      after:    "trading",
    },
    lead:
      "At Marmara Precious Metals Group, we deliver integrated solutions across the precious metals value chain — from physical trading and refining partnerships to custody and settlement. Specialising in gold, silver, platinum and palladium, we serve clients across 35 markets. Our commitment is built on transparency, compliance and reliable execution you can trust.",
    ctas: {
      contact:      "Contact us",
      capabilities: "Our capabilities",
      trade:        "Open the barX platform",
      ios:          "iOS app",
    },
    note: "Institutional & professional clients only",
  },
  stats: {
    // Legacy preset — the Stats band is intentionally not rendered on the
    // live site (see src/data/stats.ts, which is the real source and is
    // deliberately empty). These labels remain here only as a translation
    // scaffold for a future opt-in; they must not be re-wired without the
    // owner's confirmation of each value.
    title: "Marmara Precious Metals Group at a glance",
    items: [],
  },
  about: {
    eyebrow:    "About Marmara",
    heading:    "Dubai's gateway to the global bullion market",
    who: [
      "Marmara Precious Metals Group — operating through Marmara Gold Trading LLC (licensed by the Dubai Department of Economy and Tourism) — is a Dubai-based precious metals house specialising in the sourcing, refining partnerships, custody and distribution of physical gold, silver, platinum and palladium. Strategically located in the UAE, we serve as a trusted partner to jewellery manufacturers, refineries, financial institutions and professional counterparties across Asia, the Middle East and Europe. Serving clients across 35 markets.",
      "With a strong reputation for integrity, reliability and compliance, we bridge international markets through seamless bullion trade, settlement and logistics support.",
    ],
    mission: {
      label: "Our mission",
      body:  "Deliver transparent, secure and efficient precious-metal solutions tailored to the needs of professional traders and institutional clients.",
    },
    vision: {
      label: "Our vision",
      body:  "Become the most trusted and agile bullion trading company in the MENA region — known for innovation, ethical sourcing and unmatched customer service.",
    },
    whatWeDoTitle: "What we do",
    whatWeDo: [
      { t: "Physical gold trading (wholesale)", d: "Marmara-branded kilo bars and investment-grade bullion." },
      { t: "Refining partnerships",             d: "Custom kilo bars under the Marmara brand through certified refiners." },
      { t: "Import / export logistics",         d: "Cross-border shipments, customs clearance and Dubai Trade portal filings, end-to-end." },
      { t: "Client onboarding & KYC",           d: "Rigorous AML/CFT compliance aligned with UAE and international regulation." },
      { t: "Market advisory & pricing",         d: "Real-time market insights and competitive institutional pricing." },
    ],
    networkTitle: "Our network",
    network: [
      { t: "UAE — Dubai HQ",   d: "Main trading, settlement and logistics hub." },
      { t: "Saudi Arabia",     d: "Gulf coverage for wholesale precious-metal counterparties." },
      { t: "Türkiye",          d: "Sourcing relationships and trade-flow access across the Turkish market." },
      { t: "Hong Kong",        d: "Asia-Pacific coverage and institutional distribution." },
      { t: "Singapore",        d: "Regional settlement and client coverage." },
    ],
    ticksTitle: "Why choose Marmara",
    ticks: [
      "Full compliance with UAE Ministry of Economy",
      "Multilingual team — English, Arabic, Turkish",
      "UAE delivery within 48 hours",
      "Custom kilo-bar stamping for clients",
      "Trusted by major regional bullion buyers",
    ],
    commitmentsTitle: "Our commitments",
    commitments: [
      { t: "AML & compliance",     d: "Full adherence to UAE AML Law, Cabinet Decision No. 10 of 2019 and MoE inspections." },
      { t: "Responsible sourcing", d: "Conflict-free gold aligned with OECD and RJC Chain-of-Custody standards." },
      { t: "Sustainability",       d: "Ethical business, local employment, and refining partnerships that minimise environmental impact." },
    ],
    close: {
      title: "Let's trade",
      body:  "Whether you're a large-scale trader, a jewellery manufacturer, or a refinery looking for a reliable gold partner — Marmara Gold is your gateway to the global bullion market. Contact us today to begin your onboarding.",
      cta:   "Begin onboarding",
    },
  },
  contact: {
    eyebrow: "Contact",
    heading: "Reach the right desk",
    lede:
      "Institutional coverage is routed to a named desk. Pick the one that fits your enquiry, or complete the B2B form and we will route it for you.",
    form: {
      title:    "Request a call-back",
      subtitle: "B2B inquiry — routed to the right desk within one business day.",
      fields: {
        clientType: "I am a…",
        firstName:  "First name",
        lastName:   "Last name",
        company:    "Company",
        email:      "Email",
        phone:      "Phone",
        country:    "Country",
        metal:      "Metals of interest",
        volume:     "Estimated volume (kg / month)",
        message:    "Tell us what you need",
      },
      clientTypeOptions: [
        "Bullion dealer / wholesaler",
        "Jewellery manufacturer / retailer",
        "Refinery / smelter",
        "Mining company",
        "Private investor / HNWI",
        "Financial institution / bank",
        "Government / central bank",
        "Family office / wealth manager",
        "Logistics / vaulting provider",
        "Exchange / trading platform",
      ],
      metals:     ["Gold", "Silver", "Platinum", "Palladium"],
      submit:     "Send enquiry",
      submitting: "Preparing your email…",
      done:       "Opening your email client — your draft is ready to send.",
      required:   "Please fill in this field",
      emailError: "Please enter a valid email address",
    },
    hq: {
      title:  "Headquarters",
      labels: { address: "Address", branch: "Branch", hours: "Hours", general: "General" },
      actions: { email: "Email us", services: "See services", trade: "Open barX platform", ios: "iOS app" },
    },
    departments: [
      { key: "precious-metals", name: "Precious Metals Desk",  detail: "Bullion trading, RFQs, spot and forward pricing." },
      { key: "jewellery",       name: "Jewellery Division",    detail: "Custom minting, tola supply, hallmarking programs." },
      { key: "operations",      name: "Operations",            detail: "Settlement, delivery, vaulting and logistics." },
      { key: "business-dev",    name: "Business Development",  detail: "New relationships, institutional onboarding, KYC." },
    ],
  },
  common: {
    readMore:  "Read",
    minRead:   "min read",
    all:       "All",
    prev:      "Previous",
    next:      "Next",
    search:    "Search",
    of:        "of",
    showing:   "Showing",
    articles:  "articles",
  },
};
