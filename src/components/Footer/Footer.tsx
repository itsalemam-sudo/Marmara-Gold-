import { footerColumns, trustBadges } from "@/data/footer";
import styles from "./Footer.module.css";

const disclaimerParagraphs = [
  "Marmara Gold Trading LLC services in the trading, refining, and distribution of precious metals including gold, silver, platinum, and palladium. All services are provided in accordance with applicable regulations in authorized jurisdictions and may not be available in all countries.",
  "Information on this website is for institutional and professional use only. It does not constitute an offer, solicitation, or recommendation to trade or invest. All trading involves risk and may not be suitable for all investors. Marmara maintains strict compliance with AML/CFT policies and international standards.",
  "No portion of this website may be reproduced or distributed without prior written consent. Content is provided “as is” without warranties of accuracy or completeness. Marmara disclaims all liability related to use or reliance on this material.",
  "For detailed regulatory disclosures, please refer to our Compliance & Legal section.",
];

export function Footer() {
  return (
    <footer className={styles.wrap}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <a href="#top" className={styles.brand}>
              <span className={styles.brandMark} aria-hidden>M</span>
              <span className={styles.brandName}>
                <b>MARMARA</b>
                <small>Gold Trading LLC</small>
              </span>
            </a>
            <p>
              Integrated trading, refining, and distribution of gold, silver,
              platinum, and palladium for institutional clients worldwide.
            </p>
          </div>

          {footerColumns.map((col) => (
            <nav key={col.title} className={styles.col} aria-label={col.title}>
              <h5>{col.title}</h5>
              {col.links.map((l) => {
                const external = l.href.startsWith("http");
                return (
                  <a
                    key={l.label}
                    href={l.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                  >
                    {l.label}
                  </a>
                );
              })}
            </nav>
          ))}
        </div>

        <div className={styles.badges} aria-label="Regulatory alignment">
          {trustBadges.map((b) => (
            <span key={b.short} className={styles.badge}>
              <span className={styles.badge__dot} aria-hidden />
              {b.name}
            </span>
          ))}
        </div>

        <div className={styles.disclaimer}>
          {disclaimerParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className={styles.copy}>
          <span>© 2025 Marmara Gold Trading LLC. All rights reserved.</span>
          <span>
            <a href="#policy">Privacy</a> · <a href="#policy">Terms</a> ·{" "}
            <a href="#policy">Compliance &amp; Legal</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
