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
      "Precious-metal refining through certified refinery partners — 999.9 gold, 999 silver, 999.5 PGMs.",
    bullets: [
      "999.9 gold and 999 silver output",
      "certified refinery partners",
      "Fire-assay settlement with COA",
    ],
    cta: { label: "Read more", href: "#services-grid" },
    hero:
      "Marmara routes client material to certified refinery partners for conversion into investment-grade bullion — 999.9 fine gold, 999 fine silver, and 999.5 fine platinum-group metals. Full chain-of-custody documentation from receipt through pour to certified output, with turnaround within 48 hours.",
    sections: [
      {
        heading: "Capabilities",
        bullets: [
          "Gold: 999.9 fine cast and minted bars, grains, coin blanks.",
          "Silver: 999 fine cast bars (1 kg, 5 kg, 15 kg).",
          "Platinum & Palladium: 999.5 fine cast, through certified refinery partners.",
          "Turnaround: within 48 hours.",
        ],
      },
      {
        heading: "Assay & Settlement",
        bullets: [
          "Receiving weight witnessed and dual-signed on intake.",
          "XRF pre-check for indicative fineness on arrival.",
          "Fire assay (cupellation) for gold; gravimetric for silver.",
          "Certificate of Analysis (COA) issued with every lot.",
          "Client elects to settle in refined metal or cash at an agreed fix.",
        ],
      },
      {
        heading: "Environmental & Ethical Standards",
        body:
          "Marmara aligns with the RJC Code of Practices and holds ISO 14001 (Marmara Gold Trading LLC). Partner refineries operate under responsible-gold guidance; no cyanide-based recovery is used on artisanal material.",
      },
    ],
    standards: ["RJC Code of Practices", "RJC Chain of Custody", "ISO 14001"],
    metals: ["Gold", "Silver", "Platinum", "Palladium"],
  },

  /* ---------------------------------------------------------------- */
  /*  02  Recycling & Recovery                                        */
  /* ---------------------------------------------------------------- */
  {
    slug: "recycling-recovery",
    icon: "recycle",
    title: "Recycling & Recovery",
    lede:
      "Recovery of gold and silver from jewellery scrap, dross, sweepings and filings.",
    bullets: [
      "Jewellery scrap 18K–24K",
      "Dross, sweepings, filings",
      "RJC Chain of Custody chain",
    ],
    cta: { label: "Read more", href: "#services-grid" },
    hero:
      "A regulated route to convert jewellery scrap, dross, sweepings and refinery grain into settled refined metal — assayed transparently and documented in line with the RJC Chain of Custody. Electronic-waste and industrial-catalyst recycling are under study and not currently offered.",
    sections: [
      {
        heading: "What we recover",
        bullets: [
          "Jewellery scrap — 18K to 24K, karat separation on-site.",
          "Refinery grain, sponge, filings and sweepings.",
          "Industrial dross from casting and rolling floors.",
        ],
      },
      {
        heading: "Process",
        bullets: [
          "01 · Intake — sealed receipt with dual-signature at counter.",
          "02 · Sampling & Assay — representative sample, XRF then fire assay for the final number.",
          "03 · Price — locked at the client's election against an agreed benchmark.",
          "04 · Settle — settlement in an approved currency (USD, AED, EUR, GBP, SAR, HKD); timeline agreed per transaction.",
        ],
      },
      {
        heading: "Due diligence",
        body:
          "OECD Due Diligence Guidance is applied to every seller onboarding. High-risk material triggers enhanced due diligence, chain-of-custody verification and, where required, refusal of business.",
      },
      {
        heading: "Not currently offered",
        body:
          "Electronic-waste recycling, industrial-catalyst recycling and rhodium refining are under study and are not currently part of the available service.",
      },
    ],
    standards: ["OECD DDG Aligned", "RJC Chain of Custody", "AML/CFT Aligned"],
    metals: ["Gold", "Silver"],
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
      "Marmara-branded minted bars for retail counterparties, private banks and gifting programmes. Every bar carries the Marmara M monogram, a serial number matching the certificate, security packaging and a QR verification code.",
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
          "Serial number laser-etched on the bar, matching the certificate.",
          "Tamper-evident security packaging.",
          "QR verification code on the card.",
        ],
      },
      {
        heading: "Distribution",
        body:
          "Small bars are supplied under wholesale terms to KYC-verified counterparties — private banks, licensed retail dealers, jewellery groups and gifting programmes. Direct retail sales run through partners in the Deira Gold Souk.",
      },
    ],
    standards: ["RJC Code of Practices", "RJC Chain of Custody"],
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
      "Institutional spot trading in gold, silver, platinum and palladium.",
    bullets: [
      "Spot in Au, Ag, Pt, Pd",
      "Unallocated metal accounts",
      "Desktop, mobile and API connectivity",
    ],
    cta: { label: "Contact desk", href: "/#contact" },
    hero:
      "Marmara Trader is Marmara's institutional trading platform — covering gold, silver, platinum and palladium, with position keeping, pre-trade risk controls and API connectivity for treasury and OMS integration. Available on desktop and mobile.",
    sections: [
      {
        heading: "Markets covered",
        bullets: [
          "Spot in gold, silver, platinum and palladium.",
          "Unallocated metal accounts for treasury balance sheets.",
          "Settlement currencies: USD, AED, EUR, GBP, SAR, HKD.",
          "Settlement timelines are agreed with the client according to the transaction type.",
        ],
      },
      {
        heading: "Platform",
        bullets: [
          "Desktop and web access at marmara.ntptrader.com.",
          "Marmara Trader for iPhone — available on the App Store.",
          "API connectivity for treasury and OMS integration.",
          "RFQ ticket for large lots above the block threshold.",
          "Pre-trade risk controls and per-metal exposure limits.",
        ],
      },
      {
        heading: "API access",
        body:
          "API documentation is provided after account opening and assessment of the client's integration requirements.",
      },
      {
        heading: "Coverage",
        body:
          "The trading desk is reachable 22 hours a day, five days a week. Rhodium trading and 12-month forwards are not currently offered.",
      },
    ],
    standards: ["AML/CFT Aligned"],
    metals: ["Gold", "Silver", "Platinum", "Palladium"],
  },

  /* ---------------------------------------------------------------- */
  /*  05  Laboratory & Analysis                                       */
  /* ---------------------------------------------------------------- */
  {
    slug: "laboratory-analysis",
    icon: "beaker",
    title: "Laboratory & Analysis",
    lede:
      "XRF, fire-assay and ICP-MS testing for precious-metal purity.",
    bullets: [
      "XRF for rapid indicative assay",
      "Fire assay for definitive Au / Ag",
      "ICP-MS trace-element analysis",
    ],
    cta: { label: "Read more", href: "#services-grid" },
    hero:
      "Precious-metal testing is available through Marmara's own laboratory and external specialist laboratories. Methods include XRF for rapid indicative screening, Fire Assay (cupellation) for definitive gold and silver and ICP-MS for trace-element analysis — the exact routing (in-house vs. external) is agreed per lot.",
    sections: [
      {
        heading: "Methods",
        bullets: [
          "XRF (energy-dispersive) — rapid indicative assay.",
          "Fire assay (cupellation) — definitive gold and silver.",
          "ICP-MS — trace-element analysis.",
        ],
      },
      {
        heading: "Deliverables",
        bullets: [
          "Certificate of Analysis (COA) issued with every lot.",
          "Photographic evidence of sampling and hallmark.",
        ],
      },
      {
        heading: "Where tests run",
        body:
          "Marmara performs selected methods in-house and routes the remainder to external specialist laboratories under written agreement. Specific capability per method is confirmed on engagement.",
      },
    ],
    standards: ["RJC Chain of Custody"],
    metals: ["Gold", "Silver", "Platinum", "Palladium"],
  },

  /* ---------------------------------------------------------------- */
  /*  06  Storage & Vaulting                                          */
  /* ---------------------------------------------------------------- */
  {
    slug: "storage-vaulting",
    icon: "vault",
    title: "Storage & Vaulting",
    lede:
      "Custody of physical bullion arranged through specialist providers across Dubai, London, Zürich, Hong Kong and Thailand.",
    bullets: [
      "Allocated & segregated options",
      "Arranged through specialist providers",
      "Client-portal reporting",
    ],
    cta: { label: "Read more", href: "#services-grid" },
    hero:
      "Custody of physical bullion is arranged through specialist custody and logistics providers — including Brink's, Loomis, Transguard and Ferrari Group — in Dubai, London, Zürich, Hong Kong and Thailand. Positions are allocated by bar and serial and reconciled with a client-portal.",
    sections: [
      {
        heading: "Storage options",
        bullets: [
          "Allocated — specific bars by serial, held in the client's name.",
          "Segregated — separate physical compartment inside the same vault.",
          "Transit custody — short-hold during logistics movements.",
        ],
      },
      {
        heading: "Service locations",
        bullets: [
          "Dubai",
          "London",
          "Zürich",
          "Hong Kong",
          "Thailand",
        ],
      },
      {
        heading: "Specialist providers",
        body:
          "Custody and logistics are services arranged through specialist providers — Brink's, Loomis, Transguard and Ferrari Group — not Marmara-owned vaults. Specific provider assignments per location are confirmed on engagement.",
      },
      {
        heading: "Reporting",
        bullets: [
          "Client portal with balance and movement history.",
          "Bar-list issued periodically with serial numbers.",
        ],
      },
    ],
    standards: ["RJC Chain of Custody"],
    metals: ["Gold", "Silver", "Platinum", "Palladium"],
  },
];
