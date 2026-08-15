import styles from "./ExperienceBand.module.css";

/**
 * Blue-gradient scrolling band — mirrors Nadir Metal's "Only LMBA
 * Accredited Refinery in Silver · High Brand Value · Certified Gold ·"
 * marquee that sits between the About and News sections.
 *
 * The track is duplicated inline so the loop is seamless; the whole
 * band pauses on hover and respects `prefers-reduced-motion`.
 */

const points: string[] = [
  "LBMA Good-Delivery-aligned Refiner Sourcing",
  "DMCC-licensed DPMS",
  "OECD Due Diligence 5-step Framework",
  "UAE Cabinet Resolution 74 (Targeted Sanctions)",
  "RJC Code of Practices Commitment",
  "ISO 14001 Environmental Management",
  "999.9 Gold · 999 Silver · Assay-guaranteed",
  "22 x 5 barX Real-time Coverage",
];

export function ExperienceBand() {
  const doubled = [...points, ...points];
  return (
    <section className={styles.wrap} aria-label="Marmara credentials">
      <div className={styles.marquee} role="presentation">
        <div className={styles.track}>
          {doubled.map((p, i) => (
            <span key={`${p}-${i}`} className={styles.item}>
              <span className={styles.dot} aria-hidden>•</span>
              <span className={styles.text}>{p}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
