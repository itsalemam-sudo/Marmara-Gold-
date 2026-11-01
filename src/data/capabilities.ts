export type Capability = {
  title: string;
  detail: string;
};

/**
 * "Our physical trading capabilities" — 4-item list from the HTML spec.
 * Copy is verbatim; do not paraphrase without approval.
 */
export const capabilities: Capability[] = [
  {
    title: "Marmara-branded gold bars",
    detail: "Kilo bars, 100 g, tola bars and large-format cast bars from certified refinery partners.",
  },
  {
    title: "Bullion coins",
    detail: "1 oz investment-grade bullion coins in gold and silver.",
  },
  {
    title: "Semi-refined materials & doré",
    detail: "Upstream flow from source to refinery for professional and industrial buyers.",
  },
  {
    title: "Recycled & scrap precious metals",
    detail: "Jewellery scrap, dross, sweepings and filings — recovered under responsible-sourcing standards.",
  },
];

export const marginBanner = {
  eyebrow: "Trading",
  headline: "Institutional spot trading across gold, silver, platinum and palladium.",
  detail:
    "Settlement in USD, AED, EUR, GBP, SAR and HKD. Settlement timelines are agreed with the client according to the transaction type. Trading desk coverage 22 hours a day, five days a week.",
  cta: { label: "Open an Account", href: "/#contact" },
};
