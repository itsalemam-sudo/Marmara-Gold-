export type Stat = {
  value: string;
  label: string;
  /** Optional footnote for the tiny caption line under the label. */
  caption?: string;
};

/**
 * Stat band data — INTENTIONALLY EMPTY.
 *
 * Every previous value ($4T volume traded, 300+ OTC products,
 * 180+ countries, 40+ derivatives exchanges, 180+ FX markets) was
 * unverified and inappropriate for a firm this young to publish.
 * The Stats section is de-listed from the homepage until Marmara
 * management confirms verified group figures. When they do, add
 * entries here — the component reads this list directly.
 */
export const stats: Stat[] = [];
