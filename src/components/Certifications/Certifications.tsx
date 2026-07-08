import styles from "./Certifications.module.css";

/**
 * Certification / market-body strip — mirrors the row of authoritative
 * logos on Nadir Metal (LBMA · Borsa Istanbul · CME Group · Shanghai
 * Gold Exchange · SBMA). We render our five most relevant bodies as
 * typeset "wordmarks" instead of raster logos so the section stays
 * self-contained and copyright-clean.
 */

type Cert = {
  code: string;
  full: string;
  detail: string;
};

const certs: Cert[] = [
  { code: "LBMA",  full: "London Bullion Market Association",       detail: "Good Delivery-aligned refiner sourcing" },
  { code: "DMCC",  full: "Dubai Multi Commodities Centre",          detail: "Licensed DPMS in the DMCC free zone"    },
  { code: "DGCX",  full: "Dubai Gold & Commodities Exchange",       detail: "Cleared spot & futures access"          },
  { code: "SBMA",  full: "Singapore Bullion Market Association",    detail: "APAC bullion-market alignment"          },
  { code: "RJC",   full: "Responsible Jewellery Council",           detail: "Code of Practices commitment"           },
];

export function Certifications() {
  return (
    <section className={styles.wrap} aria-label="Recognised market bodies">
      <div className="container">
        <div className={styles.head}>
          <span className={styles.eyebrow}>Aligned with</span>
          <span className={styles.headTitle}>
            The bodies that certify institutional bullion.
          </span>
        </div>
        <div className={styles.strip}>
          {certs.map((c) => (
            <article key={c.code} className={styles.mark}>
              <div className={styles.markSeal} aria-hidden>
                <svg viewBox="0 0 44 44" width="44" height="44">
                  <circle cx="22" cy="22" r="20" fill="none" stroke="currentColor" strokeWidth="0.7" />
                  <circle cx="22" cy="22" r="17" fill="none" stroke="currentColor" strokeWidth="0.35" />
                  <text
                    x="22"
                    y="26"
                    textAnchor="middle"
                    fontFamily="var(--font-display)"
                    fontSize="11"
                    fontWeight="600"
                    fill="currentColor"
                    letterSpacing="0.06em"
                  >
                    {c.code}
                  </text>
                </svg>
              </div>
              <div className={styles.markCopy}>
                <span className={styles.markFull}>{c.full}</span>
                <span className={styles.markDetail}>{c.detail}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
