/**
 * 6-card Services roster — each with a full detail body that opens
 * in the modal read-more (mirrors Nadir Metal's /services/{slug}
 * dedicated info page pattern).
 *
 * Add / edit here — the Services component renders both the card
 * summary and the modal read-more from the same object.
 */

export type ServiceIcon =
  | "cart"
  | "dollar"
  | "flame"
  | "vault"
  | "chart"
  | "book";

export type ServiceSection = {
  heading?: string;
  body?: string;
  bullets?: string[];
};

export type ServiceCard = {
  slug: string;
  icon: ServiceIcon;
  title: string;
  lede: string;
  /** Short bullets shown on the card. */
  bullets: string[];
  cta: { label: string; href: string };

  /** Modal read-more content — Nadir-Metal-style detail page. */
  hero: string;
  sections: ServiceSection[];
  standards: string[];
  metals: string[];
};

export const services: ServiceCard[] = [
  {
    slug: "buy-precious-metals",
    icon: "cart",
    title: "Buy Precious Metals",
    lede: "Purchase LBMA-accredited gold kilo bars, DGD bars, and more.",
    bullets: [
      "LBMA-accredited gold kilo bars",
      "DGD bars and gold grains",
      "22K Indian gold jewelry",
    ],
    cta: { label: "Read more", href: "#services-grid" },
    hero:
      "Institutional-scale acquisition of investment-grade bullion, sourced only through LBMA / LPPM Good-Delivery refiners and DMCC-licensed counterparts. Every purchase runs through our KYC-first onboarding, is quoted against live LBMA / LPPM benchmarks, and settled with a serial-tracked chain of custody from vault to vault.",
    sections: [
      {
        heading: "What we source",
        bullets: [
          "1 kg, 500 g and 100 g cast bars — 999.9 fine gold, LBMA-accredited refiner.",
          "50 g and 100 g minted bars in tamper-evident assay cards.",
          "10 tola (116.64 g) foil-wrap biscuits — Gulf / South Asia liquid standard.",
          "1 oz sovereign bullion coins — Britannia, Maple, Philharmonic, Krugerrand.",
          "Silver, platinum and palladium bars (LPPM Good Delivery).",
          "999.9 gold grains and 22K Indian gold jewellery on request.",
        ],
      },
      {
        heading: "Process",
        bullets: [
          "01 · Onboarding — KYC / AML file, ownership disclosure, source of funds.",
          "02 · Quote — live LBMA / LPPM benchmark plus premium (see catalogue for spot + %).",
          "03 · Contract — sealed term sheet, delivery terms and settlement rails.",
          "04 · Delivery — insured logistics with serial verification at destination vault.",
        ],
      },
      {
        heading: "Why buy through Marmara",
        bullets: [
          "Direct refiner relationships — no marketplace intermediaries.",
          "Same-day pricing against COMEX / LBMA / LPPM benchmarks.",
          "AED, USD and EUR settlement rails; T+0 to T+2 depending on route.",
          "Full RJC Chain of Custody documentation on every consignment.",
        ],
      },
    ],
    standards: ["LBMA Good Delivery", "LPPM Good Delivery", "RJC Chain of Custody", "DMCC Licensed", "AML/CFT Compliant"],
    metals: ["Gold", "Silver", "Platinum", "Palladium"],
  },

  {
    slug: "sell-precious-metals",
    icon: "dollar",
    title: "Sell Precious Metals",
    lede: "Sell gold scrap, semi-refined metals and coin inventory responsibly.",
    bullets: [
      "Gold scrap and semi-refined metals",
      "Ethical sourcing verification",
      "Assay-based transparent settlement",
    ],
    cta: { label: "Read more", href: "#services-grid" },
    hero:
      "A regulated route to convert physical bullion, doré, jewellery scrap, plated stock or semi-refined metals into settled cash — assayed transparently, priced against live LBMA / LPPM benchmarks, and documented for RJC and OECD Due Diligence Guidance compliance.",
    sections: [
      {
        heading: "What we buy",
        bullets: [
          "Bullion bars and coins (LBMA / LPPM Good Delivery, sovereign mints).",
          "Doré gold from artisanal / small-scale mining (with due-diligence file).",
          "Jewellery scrap — 18K to 24K, karat separation on-site.",
          "Refinery grain, sponge, filings and sweepings.",
          "Electronic scrap and industrial semi-refined material.",
        ],
      },
      {
        heading: "Process",
        bullets: [
          "01 · Intake — sealed receipt with dual-signature at counter, camera-recorded.",
          "02 · Assay — XRF for indicative karat, fire assay for final settlement number.",
          "03 · Price — locked at your election against live LBMA fix or spot benchmark.",
          "04 · Settle — AED / USD / EUR wire on assay confirmation, typically T+0 to T+1.",
        ],
      },
      {
        heading: "Due diligence",
        body:
          "We apply the OECD Due Diligence Guidance for Responsible Supply Chains of Minerals from CAHRA to every seller onboarding. High-risk material triggers enhanced due diligence, chain-of-custody verification and, where required, refusal of business.",
      },
    ],
    standards: ["OECD DDG Aligned", "RJC Chain of Custody", "LBMA Responsible Sourcing", "AML/CFT Compliant"],
    metals: ["Gold", "Silver", "Platinum", "Palladium"],
  },

  {
    slug: "refining",
    icon: "flame",
    title: "Refining Services",
    lede: "Refine gold and silver to LBMA / LPPM Good Delivery purity through certified partners.",
    bullets: [
      "999.9 gold and 999 silver output",
      "Certified partner refineries",
      "Fire-assay settlement with COA",
    ],
    cta: { label: "Read more", href: "#services-grid" },
    hero:
      "Marmara routes client material to LBMA and LPPM Good-Delivery accredited refineries for conversion into investment-grade bullion — 999.9 fine gold, 999 fine silver, and 999.5 fine platinum-group metals — with full chain-of-custody documentation from receipt through pour to certified output.",
    sections: [
      {
        heading: "Capabilities",
        bullets: [
          "Gold: 999.9 fine cast and minted bars, grains, coin blanks.",
          "Silver: 999 fine cast bars (1 kg, 5 kg, 15 kg / 500 oz Good Delivery).",
          "Platinum & Palladium: 999.5 fine cast, LPPM Good Delivery.",
          "Doré, jewellery scrap, sweepings, electronic scrap.",
          "Turnaround: 3–7 days depending on lot size and metal type.",
        ],
      },
      {
        heading: "Assay & Settlement",
        bullets: [
          "Receiving weight witnessed and dual-signed on intake.",
          "XRF pre-check for indicative fineness on arrival.",
          "Certified fire assay (cupellation) for gold, gravimetric for silver.",
          "Certificate of Analysis (COA) issued with every lot.",
          "Client elects to settle in refined metal or cash equivalent at LBMA fix.",
        ],
      },
      {
        heading: "Environmental & Ethical Standards",
        body:
          "Our partner refineries operate under LBMA Responsible Gold Guidance, RJC Chain of Custody certification, and ISO 14001 environmental management. All processes are audited annually; no cyanide-based recovery is used on artisanal material.",
      },
    ],
    standards: [
      "LBMA Good Delivery",
      "LPPM Good Delivery",
      "LBMA Responsible Gold Guidance",
      "RJC Chain of Custody",
      "ISO 14001",
    ],
    metals: ["Gold", "Silver", "Platinum", "Palladium"],
  },

  {
    slug: "storage",
    icon: "vault",
    title: "Secure Storage Solutions",
    lede: "Insured allocated and segregated vault storage across Dubai, London, Zürich and Singapore.",
    bullets: [
      "Allocated & segregated options",
      "All-risks insurance from Lloyd's underwriters",
      "24/7 audit-ready reporting portal",
    ],
    cta: { label: "Read more", href: "#services-grid" },
    hero:
      "Institutional-grade custody of physical bullion in Class III / IV vaults across Dubai (DMCC), London, Zürich and Singapore — every position allocated by bar and serial, insured all-risks, and reconciled daily with an audit-ready client portal.",
    sections: [
      {
        heading: "Storage options",
        bullets: [
          "Allocated — specific bars by serial, held in client's name, no fungibility.",
          "Segregated — separate physical compartment inside the same vault.",
          "Pool-account — same-metal, same-fineness, LBMA / LPPM Good Delivery.",
          "Transit storage — short-hold during logistics, still insured.",
        ],
      },
      {
        heading: "Vault locations",
        bullets: [
          "Dubai — DMCC Vault, Almas Tower area.",
          "London — LBMA-certified vault, direct clear to LBMA loco.",
          "Zürich — Class IV bonded warehouse, Swiss FINMA regulated.",
          "Singapore — SBMA-linked Freeport vault.",
        ],
      },
      {
        heading: "Reporting & Audit",
        bullets: [
          "Client portal with 24/7 balance and movement history.",
          "Bar-list PDF issued monthly with photographs and serial numbers.",
          "Twice-yearly independent audit by a Big-Four firm.",
          "Insurance certificate reissued on request; underwriter is a Lloyd's syndicate.",
        ],
      },
    ],
    standards: ["LBMA Vault", "LPPM Vault", "ISO 27001 Reporting", "Lloyd's All-Risks Insurance"],
    metals: ["Gold", "Silver", "Platinum", "Palladium"],
  },

  {
    slug: "digital-trading",
    icon: "chart",
    title: "Digital Trading — barX",
    lede: "Real-time institutional trading with position keeping, risk limits, and API access.",
    bullets: [
      "Live LBMA / LPPM benchmarks",
      "iOS + web platform (barX)",
      "REST + WebSocket API for integration",
    ],
    cta: { label: "Open barX", href: "https://marmara.ntptrader.com/" },
    hero:
      "barX is Marmara's institutional trading platform — real-time streaming quotes on gold, silver, platinum and palladium against live LBMA and LPPM benchmarks, position keeping, pre-trade risk limits, and a REST + WebSocket API for treasury and OMS integration. Available on web and as a native iOS app (Marmara Trader).",
    sections: [
      {
        heading: "Platform capabilities",
        bullets: [
          "Streaming L1 quotes across Au / Ag / Pt / Pd against LBMA fix and spot.",
          "RFQ ticket for large lots; automated below the client's block threshold.",
          "Pre-trade risk limits — notional, VaR, drawdown, per-metal exposure caps.",
          "Post-trade blotter with T+0 settlement instructions.",
          "Native iOS app (Marmara Trader) mirrors the web ticket + blotter.",
        ],
      },
      {
        heading: "Integration",
        bullets: [
          "REST API for quote pull, order entry, and reporting export.",
          "WebSocket channels for streaming quotes and order-status updates.",
          "FIX 4.4 gateway available on request for OMS bridge.",
          "SSO via SAML 2.0 for enterprise treasury desks.",
        ],
      },
      {
        heading: "Access",
        body:
          "Access is limited to KYC-verified institutional counterparties. Trader onboarding takes 5–10 business days once documentation is complete. barX runs 22 × 5 (Sunday 22:00 UAE through Friday 22:00 UAE), tracking the LBMA session windows.",
      },
    ],
    standards: ["ISO 27001", "SOC 2 Type II (in progress)", "AML/CFT Compliant"],
    metals: ["Gold", "Silver", "Platinum", "Palladium"],
  },

  {
    slug: "market-insights",
    icon: "book",
    title: "Market Insights & Reporting",
    lede: "Weekly briefs, quarterly deep-dives, and price-driver dashboards for institutional readers.",
    bullets: [
      "Weekly precious-metals brief",
      "Quarterly supply-demand deep-dive",
      "Central-bank and ETF flow tracker",
    ],
    cta: { label: "Read more", href: "#services-grid" },
    hero:
      "The Marmara Research desk publishes weekly briefs, quarterly supply-demand deep-dives, and central-bank / ETF flow trackers for institutional readers — covering the price drivers that matter for treasuries, jewellery manufacturers, mints and asset managers exposed to precious metals.",
    sections: [
      {
        heading: "Regular publications",
        bullets: [
          "Weekly brief — Monday morning, 4–6 pages, macro + physical flow.",
          "Quarterly deep-dive — full supply / demand model per metal.",
          "Central-bank tracker — WGC reserves data, monthly.",
          "ETF flow tracker — SPDR / iShares / Xetra positions, weekly.",
          "Ad-hoc notes on FX moves, geopolitical events and mint premium shifts.",
        ],
      },
      {
        heading: "Data & Dashboards",
        bullets: [
          "Live price dashboard with 30-day and 12-month lookbacks.",
          "Physical premium dashboard — Dubai, Mumbai, Shanghai loco.",
          "Options-implied vol and skew for gold and silver.",
          "Cross-asset correlation matrix updated weekly.",
        ],
      },
      {
        heading: "Access",
        body:
          "Institutional clients receive research at no additional fee. Reports arrive by email under a per-recipient distribution list; the dashboard is behind SSO on the barX platform. All research is subject to the disclaimers on the Marmara research portal.",
      },
    ],
    standards: ["RJC Member", "Editorial Independence Policy"],
    metals: ["Gold", "Silver", "Platinum", "Palladium"],
  },
];
