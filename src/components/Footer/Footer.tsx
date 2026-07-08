import { footerColumns, trustBadges, disclaimer } from "@/data/footer";
import { IconLinkedIn, IconX, IconYouTube } from "@/components/icons/Icons";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.wrap} id="contact">
      <div className="container">
        <div className={styles.top}>
          <div className={styles.grid}>
            <div className={styles.brandCol}>
              <small>Marmara Gold Trading LLC</small>
              <h4>Trust in the metal, precision at the desk.</h4>
              <p>
                Al Khor Street, The Gold Center Building, Zone 5 — Office 25,
                Deira, Dubai, UAE.
                <br />
                webmaster@marmaragold.ae
              </p>
              <div className={styles.socials} aria-label="Social channels">
                <a href="https://www.linkedin.com/company/marmara-precious-metals-group" aria-label="LinkedIn"><IconLinkedIn /></a>
                <a href="https://x.com/marmaragold" aria-label="X (Twitter)"><IconX /></a>
                <a href="https://youtube.com/@marmaragold" aria-label="YouTube"><IconYouTube /></a>
              </div>
            </div>

            {footerColumns.map((col) => (
              <nav key={col.title} className={styles.col} aria-label={col.title}>
                <h5>{col.title}</h5>
                <ul>
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href}>{l.label}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* trust badges */}
        <div className={styles.trust} aria-label="Regulatory & standards">
          <div className={styles.trustGrid}>
            {trustBadges.map((b) => (
              <div key={b.short} className={styles.badge}>
                <span className={styles.badge__mark}>{b.short}</span>
                <span className={styles.badge__body}>
                  <span className={styles.badge__name}>{b.name}</span>
                  <span className={styles.badge__detail}>{b.detail}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* legal + disclaimer */}
        <div className={styles.legal}>
          <div className={styles.legalTop}>
            <span className={styles.copyright}>© 2025 Marmara Gold Trading LLC — All rights reserved</span>
            <span className={styles.jurisdiction}>DMCC · Dubai, UAE</span>
          </div>
          <p className={styles.disclaimer}>{disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
