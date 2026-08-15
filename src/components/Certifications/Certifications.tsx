import styles from "./Certifications.module.css";

/**
 * Scrolling logo marquee — mirrors Nadir Metal's grayscale, endlessly
 * looping certification band below the hero. We render our seven most
 * relevant bodies as typeset "wordmarks" (SVG in a circular seal)
 * instead of raster logos so the section stays self-contained and
 * copyright-clean; swap in real PNG/SVG logos when the client hands
 * over usage rights.
 *
 * The strip is duplicated inline and animated with a CSS transform;
 * `will-change: transform` and `translate3d` in the CSS keep it on the
 * compositor thread. `prefers-reduced-motion` pauses the animation.
 */

type Cert = {
  code: string;
  full: string;
};

const certs: Cert[] = [
  { code: "LBMA", full: "London Bullion Market Association" },
  { code: "DMCC", full: "Dubai Multi Commodities Centre" },
  { code: "DGCX", full: "Dubai Gold & Commodities Exchange" },
  { code: "SBMA", full: "Singapore Bullion Market Association" },
  { code: "RJC",  full: "Responsible Jewellery Council" },
  { code: "CME",  full: "CME Group" },
  { code: "SGE",  full: "Shanghai Gold Exchange" },
];

/** One marquee cell — circular seal + long-form name to its right. */
function Mark({ cert }: { cert: Cert }) {
  return (
    <div className={styles.mark} aria-label={cert.full}>
      <span className={styles.markSeal} aria-hidden>
        <svg viewBox="0 0 44 44" width="44" height="44">
          <circle cx="22" cy="22" r="20" fill="none" stroke="currentColor" strokeWidth="0.7" />
          <circle cx="22" cy="22" r="17" fill="none" stroke="currentColor" strokeWidth="0.35" />
          <text
            x="22"
            y="26"
            textAnchor="middle"
            fontFamily="var(--font-display)"
            fontSize={cert.code.length > 4 ? 8 : 11}
            fontWeight="600"
            fill="currentColor"
            letterSpacing="0.06em"
          >
            {cert.code}
          </text>
        </svg>
      </span>
      <span className={styles.markFull}>{cert.full}</span>
    </div>
  );
}

export function Certifications() {
  // Duplicate the sequence once so the scroll loops without a visible seam.
  const doubled = [...certs, ...certs];
  return (
    <section className={styles.wrap} aria-label="Recognised market bodies">
      <div className="container">
        <div className={styles.head}>
          <span className={styles.eyebrow}>Aligned with</span>
          <span className={styles.headTitle}>
            The bodies that certify institutional bullion.
          </span>
        </div>
      </div>
      <div className={styles.marquee} role="presentation">
        <div className={styles.track}>
          {doubled.map((c, i) => (
            <Mark key={`${c.code}-${i}`} cert={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
