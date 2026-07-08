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
  { value: "300+", label: "OTC products" },
  { value: "$4T",  label: "Volume traded" },
  { value: "180+", label: "Countries" },
  { value: "40+",  label: "Derivatives exchanges" },
  { value: "180+", label: "FX markets" },
];
