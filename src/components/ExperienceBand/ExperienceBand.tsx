import styles from "./ExperienceBand.module.css";

/**
 * Blue-gradient scrolling band — mirrors Nadir Metal's "Only LMBA
 * Accredited Refinery in Silver · High Brand Value · Certified Gold ·"
 * marquee that sits between the About and News sections.
 *
 * The track is duplicated inline so the loop is seamless; the whole
 * band pauses on hover and respects `prefers-reduced-motion`.
 */

/* Marquee copy — verifiable statements only. Anything referencing
   an unconfirmed accreditation (LBMA / LPPM Good Delivery) or a
   platform that isn't publicly live (barX / Marmara Trader) is
   deliberately excluded. */
const points: string[] = [
  "RJC — Code of Practices (CoC & CoP)",
  "DGCX Member",
  "Dubai Bullion & Refinery Group",
  "Dubai Jewellery Group",
  "ISO 9001:2015 — Quality Management",
  "ISO 14001:2015 — Environmental Management",
  "OECD Due Diligence Guidance",
  "UAE AML / CFT Regulatory Framework",
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
