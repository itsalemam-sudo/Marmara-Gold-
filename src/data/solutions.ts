/**
 * Solutions by client segment.
 * Order matches src/data/clients.ts — do not reorder without also
 * updating the numbering the Clients strip renders.
 */

export type Solution = {
  title: string;
  detail: string;
};

export type Segment = {
  key: string;
  label: string;    // short label shown on the tab pill
  segment: string;  // full client-type name (matches clients.ts)
  intro: string;    // one-line pitch for the segment
  solutions: [Solution, Solution, Solution, Solution];
};

export const segments: Segment[] = [
  // 1 ------------------------------------------------------------
  {
    key: "bullion-dealers",
    label: "Bullion dealers",
    segment: "Bullion dealers & wholesalers",
    intro:
      "Institutional flow, tola-standard supply and settlement flexibility for the wholesale desk.",
    solutions: [
      {
        title: "Physical bullion trading",
        detail:
          "Trade LBMA and non-LBMA bars with confidence. Direct access to high-purity gold, silver, platinum and palladium products with transparent pricing, real-time quotes and secured trade execution.",
      },
      {
        title: "Kilo & tola bar supply",
        detail:
          "Certified kilo bars, 100 g and tola (11.66 g) bars from trusted refineries. Branding and serial customisation on request. Delivery across the UAE and key global trade hubs.",
      },
      {
        title: "Real-time pricing access",
        detail:
          "Proprietary pricing platform with up-to-the-second live quotes for spot and wholesale bullion. Monitor trends, place trades instantly and manage risk in dynamic markets.",
      },
      {
        title: "Settlement & delivery options",
        detail:
          "Flexible settlement terms in AED, USD or EUR. Secure logistics to vaults, offices or free-zone warehouses.",
      },
    ],
  },

  // 2 ------------------------------------------------------------
  {
    key: "jewelry",
    label: "Jewellery",
    segment: "Jewelry manufacturers & retailers",
    intro:
      "Sourcing, custom minting and buyback programs for the jewellery value chain.",
    solutions: [
      {
        title: "Custom bar minting (100 g · tola · kilo)",
        detail:
          "Create your own branded bars in 100 g, tola (11.66 g) or kilo formats. LBMA-style minting or local artisanal finishes, embossed logos, serial numbering and blister packaging options.",
      },
      {
        title: "Gold & silver sourcing",
        detail:
          "High-purity gold and silver sourced from reputable global suppliers and refiners. Hallmark verification, origin traceability and flexible contract terms to match production needs.",
      },
      {
        title: "Supply chain & refining support",
        detail:
          "Sourcing, transportation and refining partnerships — from raw material procurement to finished product delivery through a compliance-ready network.",
      },
      {
        title: "Scrap metal buyback programs",
        detail:
          "Turn unused or scrap gold and silver into liquidity. Transparent assays, competitive pricing and optional refining services for recovered metal.",
      },
    ],
  },

  // 3 ------------------------------------------------------------
  {
    key: "refineries",
    label: "Refineries",
    segment: "Refineries & smelters",
    intro:
      "Doré sourcing, offtake agreements and branded bullion programs for accredited refiners.",
    solutions: [
      {
        title: "Doré sourcing & settlement",
        detail:
          "Reliable supply of gold and silver doré for refining. Transparent settlement terms, international logistics support and quick turnaround based on LBMA-standard assays.",
      },
      {
        title: "Strategic offtake agreements",
        detail:
          "Long-term offtake contracts for refined bars with guaranteed minimum volume commitments. LBMA-compliant and regional bar specifications tailored to production capacity.",
      },
      {
        title: "Assay & certification",
        detail:
          "Trusted assay services in partnership with accredited labs for precise metal-content verification. Certification issuance for global market acceptance and export compliance.",
      },
      {
        title: "Branded bullion programs",
        detail:
          "Expand refinery presence with custom-branded bullion — certified gold and silver bars with optional packaging, serial control and digital authentication features.",
      },
    ],
  },

  // 4 ------------------------------------------------------------
  {
    key: "mining",
    label: "Mining",
    segment: "Mining companies",
    intro:
      "Doré purchase, export coordination and refinery agreements built for producer economics.",
    solutions: [
      {
        title: "Doré purchase & refining",
        detail:
          "Purchase and refining of gold and silver doré directly from producers. Transparent processes, competitive market-based pricing and settlement flexibility tailored to producer needs.",
      },
      {
        title: "Export assistance & logistics",
        detail:
          "Secure transportation, documentation and export logistics through our established global network — smooth delivery from mine site to refinery.",
      },
      {
        title: "Spot market settlement",
        detail:
          "Real-time market-based settlement in AED, USD or EUR — fast and reliable payments aligned with live pricing.",
      },
      {
        title: "Partner refinery agreements",
        detail:
          "Structured refinery agreements — toll refining or outright purchase models aligned with production targets and financial planning.",
      },
    ],
  },

  // 5 ------------------------------------------------------------
  {
    key: "hnwi",
    label: "HNWI · Private",
    segment: "Private investors & HNWIs",
    intro:
      "Investment-grade bullion, insured vault storage and private-client support.",
    solutions: [
      {
        title: "Gold & silver bar acquisition",
        detail:
          "Direct access to investment-grade gold and silver bars with competitive pricing. Bullion sourced from globally recognised refiners across a wide range of sizes.",
      },
      {
        title: "Vault storage (Dubai · Istanbul · Zurich · Hong Kong)",
        detail:
          "Secure, insured storage through trusted vaulting partners in key financial hubs — global access and peace of mind for precious-metal holdings.",
      },
      {
        title: "Certified kilo bars with serial numbers",
        detail:
          "Certified 1 kg bars engraved with unique serial numbers and accompanied by assay certificates. Each bar is traceable and fully compliant with international investment standards.",
      },
      {
        title: "Personalised investment support",
        detail:
          "Private-client desk with tailored consultation, market insights and portfolio-allocation strategies aligned to risk profile and wealth objectives.",
      },
    ],
  },

  // 6 ------------------------------------------------------------
  {
    key: "banks",
    label: "Banks · FI",
    segment: "Financial institutions & banks",
    intro:
      "Liquidity, hedging and AML-compliant execution for treasuries and prop desks.",
    solutions: [
      {
        title: "Liquidity & hedging solutions",
        detail:
          "Customised liquidity access and hedging strategies for banks and financial institutions — spot, forward and option contracts tailored to balance-sheet risk and market positioning.",
      },
      {
        title: "Clearing & settlement",
        detail:
          "Secure, timely and compliant settlement across major currencies and precious-metals markets. Bilateral and exchange-cleared flows to international standards.",
      },
      {
        title: "AML-compliant trade execution",
        detail:
          "Trades executed with full adherence to anti-money-laundering requirements. All transactions monitored through a robust compliance framework aligned with UAE and global regulation.",
      },
      {
        title: "Pricing feeds & data integration",
        detail:
          "Real-time market data and automated pricing feeds via secure API — instant quoting, position tracking and automated reporting integrated with treasury systems.",
      },
    ],
  },

  // 7 ------------------------------------------------------------
  {
    key: "sovereign",
    label: "Sovereign",
    segment: "Governments & central banks",
    intro:
      "Sovereign-grade supply, reserve programs and audit-ready custody.",
    solutions: [
      {
        title: "Sovereign gold supply",
        detail:
          "Tailored gold supply solutions to sovereign entities aligned with state procurement standards and sovereign-grade purity and traceability.",
      },
      {
        title: "Strategic reserve programs",
        detail:
          "Support central banks in building or diversifying precious-metals reserves through secure sourcing, long-term supply agreements and global storage options.",
      },
      {
        title: "Secure custody & audit support",
        detail:
          "High-security vaulting network and audit-ready reporting — full transparency and control over gold holdings.",
      },
      {
        title: "Refining & hallmarking partnerships",
        detail:
          "Collaborative programs with government mints and monetary authorities for refining, assay certification and co-branded hallmarking to sovereign standards.",
      },
    ],
  },

  // 8 ------------------------------------------------------------
  {
    key: "family-office",
    label: "Family office",
    segment: "Family offices & wealth managers",
    intro:
      "Portfolio construction, insured storage and manager-grade reporting.",
    solutions: [
      {
        title: "Physical metals portfolio building",
        detail:
          "Tailored portfolios of gold, silver, platinum and palladium for long-term preservation, diversification and generational wealth strategies.",
      },
      {
        title: "Storage & insurance solutions",
        detail:
          "Fully insured vaulting across global financial hubs with coverage customised for high-net-worth and multi-jurisdictional holdings.",
      },
      {
        title: "Reporting & reconciliation tools",
        detail:
          "Portfolio reporting, valuation updates and automated reconciliation — full transparency and oversight for wealth advisors.",
      },
      {
        title: "Direct market access",
        detail:
          "Trade precious metals directly through the Marmara dealer desk — institutional pricing, real-time execution and customised order flow to your mandate.",
      },
    ],
  },

  // 9 ------------------------------------------------------------
  {
    key: "logistics",
    label: "Logistics · Vault",
    segment: "Logistics & vaulting providers",
    intro:
      "Armored delivery, vault-to-vault transfers and chain-of-custody visibility.",
    solutions: [
      {
        title: "Secure delivery coordination",
        detail:
          "Armored logistics and international transport with full compliance and insurance coverage — timely, protected delivery of bullion shipments.",
      },
      {
        title: "Vault-to-vault transfer solutions",
        detail:
          "Seamless intra- and inter-jurisdictional vault transfers between global storage hubs (Dubai, Zurich, Istanbul and more) for institutional and HNWI clients.",
      },
      {
        title: "Chain of custody integration",
        detail:
          "Real-time visibility across each custody checkpoint with digital audit trails and compliance-grade documentation for regulators and clients.",
      },
      {
        title: "Inventory tracking support",
        detail:
          "Real-time inventory tracking via API and secure dashboards — visibility, risk alerts and reconciliation reports for stored assets.",
      },
    ],
  },

  // 10 ------------------------------------------------------------
  {
    key: "exchanges",
    label: "Exchanges · Platforms",
    segment: "Exchanges & trading platforms",
    intro:
      "APIs, institutional sourcing and compliance stacks for digital bullion venues.",
    solutions: [
      {
        title: "API access to pricing feeds",
        detail:
          "Real-time access to live bullion pricing through secure APIs — tailored for seamless integration with your digital trading infrastructure.",
      },
      {
        title: "Institutional bullion sourcing",
        detail:
          "Tap Marmara's global bullion network to fulfil institutional demand for gold and silver bars with verified provenance and competitive pricing.",
      },
      {
        title: "Digital trading integration",
        detail:
          "Direct connectivity to the Marmara trading desk — automated order placement, tracking and execution for your users.",
      },
      {
        title: "Compliance & KYC support",
        detail:
          "Digital onboarding tools, AML screening frameworks and KYC workflow support for regulatory alignment across your client base.",
      },
    ],
  },
];
