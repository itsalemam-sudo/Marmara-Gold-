export type MetalQuote = {
  symbol: "AU" | "AG" | "PT" | "PD";
  name: "Gold" | "Silver" | "Platinum" | "Palladium";
  spotUsd: number;
  changeUsd: number; // signed
  fineness: "999.9" | "999" | "999.5";
};

/**
 * Static ticker data used until a live price feed is wired.
 * Values are illustrative — replace with an API response when available.
 */
export const ticker: MetalQuote[] = [
  { symbol: "AU", name: "Gold",      spotUsd: 2652.13, changeUsd:  3.87, fineness: "999.9" },
  { symbol: "AG", name: "Silver",    spotUsd:   29.28, changeUsd:  0.38, fineness: "999"   },
  { symbol: "PT", name: "Platinum",  spotUsd:  918.03, changeUsd:  4.26, fineness: "999.5" },
  { symbol: "PD", name: "Palladium", spotUsd:  960.02, changeUsd:  4.70, fineness: "999.5" },
];
