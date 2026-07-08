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
    title: "LBMA and non-LBMA gold bars",
    detail: "Kilo bars, 100 g, tola bars and large-format cast bars, direct from accredited refiners.",
  },
  {
    title: "Bullion coins & certified collectibles",
    detail: "Sovereign issues — Britannia, Maple Leaf, Philharmonic and regional programs.",
  },
  {
    title: "Semi-refined materials & doré gold",
    detail: "Upstream flow from mine to refinery for institutional and industrial buyers.",
  },
  {
    title: "Recycled & scrap precious metals",
    detail: "Closed-loop recovery and refining aligned to responsible-sourcing standards.",
  },
];

export const marginBanner = {
  eyebrow: "Margin trading",
  headline: "Institutional-grade liquidity, executed against live LBMA and LPPM benchmarks.",
  detail:
    "Access leveraged positions with secure margin accounts, structured purchase plans for hedging and budgeting, and dedicated account management for seamless execution and reporting.",
  cta: { label: "Open an Account", href: "#contact" },
};
