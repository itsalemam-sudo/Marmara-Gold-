/**
 * 6-service roster — mirrors the institutional refiner service
 * portfolio (as per Nadir Metal Rafineri): Refining · Recycling &
 * Recovery · Small Bar Production · Trading · Laboratory & Analysis
 * · Storage & Vaulting. Copy is Marmara Precious Metals Group.
 *
 * Each service renders as a card on the homepage grid AND as a full
 * detail page at /services/{slug}. Add / edit here — the Services
 * component and the ServicePage read from this single object.
 */

export type ServiceIcon =
  | "flame"        // refining
  | "recycle"      // recycling & recovery
  | "cart"         // small-bar production
  | "chart"        // trading
  | "beaker"       // laboratory
  | "vault";       // storage

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
  bullets: string[];
  cta: { label: string; href: string };
  hero: string;
  sections: ServiceSection[];
  standards: string[];
  metals: string[];
};

export const services: ServiceCard[] = [
  /* ---------------------------------------------------------------- */
  /*  01  Refining                                                    */
  /* ---------------------------------------------------------------- */
  {
    slug: "refining",
    icon: "flame",
    title: "Refining",
    lede:
      "Precious-metal refining to LBMA / LPPM Good Delivery — 999.9 gold, 999 silver, 999.5 PGMs.",
    bullets: [
      "999.9 gold and 999 silver output",
      "LBMA / LPPM Good Delivery-aligned",
      "Fire-assay settlement with COA",
    ],
    cta: { label: "Read more", href: "#services-grid" },
    hero:
      "Marmara routes client material to LBMA and LPPM Good-Delivery accredited refineries for conversion into investment-grade bullion — 999.9 fine gold, 999 fine silver, and 999.5 fine platinum-group metals. Full chain-of-custody documentation from receipt through pour to certified output, with turnaround measured in days rather than weeks.",
    sections: [
      {
        heading: "Capabilities",
        bullets: [
          "Gold: 999.9 fine cast and minted bars, grains, coin blanks.",
          "Silver: 999 fine cast bars (1 kg, 5 kg, 15 kg / 500 oz Good Delivery).",
          "Platinum & Palladium: 999.5 fine cast, LPPM Good Delivery.",
          "Rhodium: sponge and salt on request.",
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
          "Client elects to settle in refined metal or cash at LBMA fix.",
        ],
      },
      {
        heading: "Environmental & Ethical Standards",
        body:
          "Our partner refineries operate under LBMA Responsible Gold Guidance, RJC Chain of Custody certification, and ISO 14001 environmental management. All processes are audited annually; no cyanide-based recovery is used on artisanal material.",
      },
    ],
    standards: ["LBMA Good Delivery", "LPPM Good Delivery", "LBMA Responsible Gold Guidance", "RJC Chain of Custody", "ISO 14001"],
    metals: ["Gold", "Silver", "Platinum", "Palladium", "Rhodium"],
  },

  /* ---------------------------------------------------------------- */
  /*  02  Recycling & Recovery                                        */
  /* ---------------------------------------------------------------- */
  {
    slug: "recycling-recovery",
    icon: "recycle",
    title: "Recycling & Recovery",
    lede:
      "Recovery of gold, silver and PGMs from jewellery scrap, industrial dross, sweepings and electronic waste.",
    bullets: [
      "Jewellery scrap 18K–24K",
      "Dross, sweepings, filings",
      "Electronic scrap and catalyst material",
    ],
    cta: { label: "Read more", href: "#services-grid" },
    hero:
      "A regulated route to convert bench sweepings, doré, jewellery scrap, plated stock and electronic scrap into settled refined metal — assayed transparently, priced against live LBMA / LPPM benchmarks, and documented for RJC and OECD Due Diligence Guidance compliance.",
    sections: [
      {
        heading: "What we recover",
        bullets: [
          "Jewellery scrap — 18K to 24K, karat separation on-site.",
          "Refinery grain, sponge, filings and sweepings.",
          "Industrial dross from casting and rolling floors.",
          "Electronic scrap — PCBs, connectors, plated components.",
          "Spent catalyst (PGM) material from industrial processes.",
        ],
      },
      {
        heading: "Process",
        bullets: [
          "01 · Intake — sealed receipt with dual-signature at counter, camera-recorded.",
          "02 · Sampling & Assay — representative sample, XRF then fire assay for final number.",
          "03 · Price — locked at your election against live LBMA fix or spot benchmark.",
          "04 · Settle — AED / USD / EUR wire on assay confirmation, typically T+0 to T+1.",
        ],
      },
      {
        heading: "Due diligence",
        body:
          "OECD Due Diligence Guidance is applied to every seller onboarding. High-risk material triggers enhanced due diligence, chain-of-custody verification and, where required, refusal of business. All flows are logged for RJC audit.",
      },
    ],
    standards: ["OECD DDG Aligned", "RJC Chain of Custody", "LBMA Responsible Sourcing", "AML/CFT Compliant"],
    metals: ["Gold", "Silver", "Platinum", "Palladium", "Rhodium"],
  },

  /* ---------------------------------------------------------------- */
  /*  03  Small Bar Production                                        */
  /* ---------------------------------------------------------------- */
  {
    slug: "small-bar-production",
    icon: "cart",
    title: "Small Bar Production",
    lede:
      "Marmara-branded minted bars from 1 g to 100 g in tamper-evident assay cards.",
    bullets: [
      "1 g · 2.5 g · 5 g · 10 g · 20 g · 50 g · 100 g gold",
      "Tamper-evident assay card with serial",
      "999.9 fine · struck M monogram",
    ],
    cta: { label: "Read more", href: "#services-grid" },
    hero:
      "Marmara-branded minted bars for retail counterparties, private banks and gifting programmes. Every bar carries the Marmara M monogram, is sealed in a tamper-evident assay card with a matching numbered certificate, and is backed by the same LBMA-refiner chain of custody as our institutional lines.",
    sections: [
      {
        heading: "Formats",
        bullets: [
          "Gold: 1 g, 2.5 g, 5 g, 10 g, 20 g, 50 g, 100 g minted bars.",
          "Silver: 5 g, 10 g, 50 g, 100 g minted bars.",
          "Custom formats available on request for bank distributors.",
          "Bulk pricing for orders above 1 kg aggregate mass.",
        ],
      },
      {
        heading: "Security features",
        bullets: [
          "Sealed tamper-evident PVC assay card with visible break-strip.",
          "Serial number laser-etched on the bar and printed on the card.",
          "QR code on card links to the online provenance registry.",
          "Certificate signed by the assay office of the source refinery.",
        ],
      },
      {
        heading: "Distribution",
        body:
          "Small bars are supplied under wholesale terms to KYC-verified counterparties — private banks, licensed retail dealers, jewellery groups and gifting programmes. Direct retail sales run through partners in the Deira Gold Souk.",
      },
    ],
    standards: ["LBMA Refiner Chain of Custody", "RJC Code of Practices", "DMCC Licensed"],
    metals: ["Gold", "Silver"],
  },

  /* ---------------------------------------------------------------- */
  /*  04  Trading                                                     */
  /* ---------------------------------------------------------------- */
  {
    slug: "trading",
    icon: "chart",
    title: "Trading",
    lede:
      "Institutional spot and forward trading in gold, silver, platinum, palladium and rhodium — via barX.",
    bullets: [
      "Live LBMA / LPPM streaming quotes",
      "Spot, forward and swap markets",
      "iOS + web platform + REST/WS API",
    ],
    cta: { label: "Open barX", href: "https://marmara.ntptrader.com/" },
    hero:
      "barX is Marmara's institutional trading platform — real-time streaming quotes on gold, silver, platinum, palladium and rhodium against live LBMA and LPPM benchmarks, position keeping, pre-trade risk limits, and a REST + WebSocket API for treasury and OMS integration. Native iOS app (Marmara Trader) mirrors the web ticket.",
    sections: [
      {
        heading: "Markets covered",
        bullets: [
          "Spot in Au, Ag, Pt, Pd, Rh vs USD / EUR / AED.",
          "Forwards up to 12 months on Au and Ag.",
          "Loco Dubai / London / Zürich physical delivery.",
          "Unallocated pool metal for treasury balance sheets.",
        ],
      },
      {
        heading: "Platform capabilities",
        bullets: [
          "Streaming L1 quotes with 5 ms tick resolution.",
          "RFQ ticket for large lots above the block threshold.",
          "Pre-trade risk limits — notional, VaR, drawdown, per-metal exposure.",
          "Post-trade blotter with T+0 settlement instructions.",
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
    ],
    standards: ["ISO 27001", "AML/CFT Compliant"],
    metals: ["Gold", "Silver", "Platinum", "Palladium", "Rhodium"],
  },

  /* ---------------------------------------------------------------- */
  /*  05  Laboratory & Analysis                                       */
  /* ---------------------------------------------------------------- */
  {
    slug: "laboratory-analysis",
    icon: "beaker",
    title: "Laboratory & Analysis",
    lede:
      "Independent XRF, fire-assay and ICP-MS testing for precious-metal purity and impurity content.",
    bullets: [
      "XRF for rapid indicative assay",
      "Fire assay for definitive Au / Ag",
      "ICP-MS trace-element analysis",
    ],
    cta: { label: "Read more", href: "#services-grid" },
    hero:
      "The Marmara laboratory issues independent Certificates of Analysis for gold, silver and PGM lots — XRF for rapid indicative testing on arrival, fire assay (cupellation) for definitive gold and silver settlement, and ICP-MS for trace impurities and PGM speciation.",
    sections: [
      {
        heading: "Methods",
        bullets: [
          "XRF (energy-dispersive) — 30-second surface assay for karat.",
          "Fire assay (cupellation) — definitive gold to 0.01 % precision.",
          "Gravimetric assay — silver via chloride precipitation.",
          "ICP-MS — trace impurities down to 1 ppm; PGM speciation.",
          "Density hydrostatic testing for bar authenticity.",
        ],
      },
      {
        heading: "Deliverables",
        bullets: [
          "Certificate of Analysis (COA) signed by the head assayer.",
          "Photographic evidence of sampling and hallmark.",
          "Retention samples held for 12 months post-settlement.",
          "Digital COA export in signed PDF and JSON.",
        ],
      },
      {
        heading: "Turnaround",
        body:
          "XRF results within the same day. Fire assay: 24–48 hours from sampling. ICP-MS: 48–72 hours. Rush service available for time-critical settlements with prior arrangement.",
      },
    ],
    standards: ["ISO/IEC 17025 (target)", "LBMA Referee Method Aligned", "RJC Chain of Custody"],
    metals: ["Gold", "Silver", "Platinum", "Palladium", "Rhodium"],
  },

  /* ---------------------------------------------------------------- */
  /*  06  Storage & Vaulting                                          */
  /* ---------------------------------------------------------------- */
  {
    slug: "storage-vaulting",
    icon: "vault",
    title: "Storage & Vaulting",
    lede:
      "Insured allocated and segregated vault storage across Dubai, London, Zürich and Singapore.",
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
];
