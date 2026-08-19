import styles from "./Certifications.module.css";

/**
 * Accreditations & memberships band.
 *
 * Only the six bodies the client has confirmed are shown here.
 * We render each as a typeset seal in gold — a self-contained SVG
 * so nothing depends on external logo files or usage-rights sign-off.
 * When Marmara supplies the official raster logos for each body,
 * swap `<Mark />` for `<img src="/logos/{slug}.svg" …>` inside the
 * marquee track — nothing else needs to change.
 *
 * IMPORTANT: never re-add LBMA, LPPM, CME Group or Shanghai Gold
 * Exchange to this list without written confirmation from Marmara
 * that the relationship is active and publicly declarable.
 */

type Cert = {
  code: string;
  full: string;
};

const certs: Cert[] = [
  { code: "RJC",  full: "RJC — Code of Practices (CoC & CoP)" },
  { code: "DGCX", full: "Dubai Gold & Commodities Exchange" },
  { code: "DBRG", full: "Dubai Bullion & Refinery Group" },
  { code: "DJG",  full: "Dubai Jewellery Group" },
  { code: "ISO",  full: "ISO 14001:2015 — Environmental Management" },
  { code: "ISO",  full: "ISO 9001:2015 — Quality Management" },
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
    <section className={styles.wrap} aria-label="Accreditations and memberships">
      <div className="container">
        <div className={styles.head}>
          <span className={styles.eyebrow}>Accreditations &amp; memberships</span>
          <span className={styles.headTitle}>
            Verified affiliations that govern how Marmara operates.
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
