export type Stat = {
  value: string;
  label: string;
  /** Optional footnote for the tiny caption line under the label. */
  caption?: string;
};

/**
 * 5-stat band — values from the HTML spec.
 * Do not silently update these; changing them changes the pitch.
 */
export const stats: Stat[] = [
  { value: "300+", label: "Institutional clients",   caption: "Banks, refiners, family offices" },
  { value: "$4T",  label: "Cleared trade value",     caption: "Cumulative since inception" },
  { value: "180+", label: "Markets served",          caption: "Across six continents" },
  { value: "40+",  label: "Refinery & vault partners", caption: "LBMA & LPPM aligned" },
  { value: "180+", label: "Delivery locations",      caption: "Physical settlement" },
];
