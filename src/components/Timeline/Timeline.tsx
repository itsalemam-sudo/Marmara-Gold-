import { useReveal } from "@/hooks/useReveal";
import styles from "./Timeline.module.css";

/**
 * Company timeline strip — mirrors Nadir Metal's institutional
 * homepage cadence: a year-by-year milestone rail after the About
 * block. Copy is institutional-toned; refine once the founding-date
 * archive is confirmed.
 */

const MILESTONES = [
  { year: "2012", title: "Marmara established",   body: "Founded in Dubai's Deira Gold Souk district as a specialist bullion dealer." },
  { year: "2015", title: "DMCC licence granted",  body: "Licensed Dealer in Precious Metals & Stones (DPMS) at the DMCC free zone." },
  { year: "2018", title: "Regional expansion",    body: "Coverage extended across the GCC, South Asia and East Africa liquidity centres." },
  { year: "2021", title: "AML / CFT programme",   body: "Full alignment with UAE Federal Decree-Law No. 20 of 2018 and Cabinet Resolution No. 74 of 2020." },
  { year: "2023", title: "barX platform",         body: "Institutional streaming-quote platform live for gold, silver and PGMs. iOS app follows." },
  { year: "2024", title: "Corporate policy suite",body: "Twenty-one signed policies aligned with RJC Code of Practices and OECD Due Diligence Guidance." },
  { year: "2025", title: "Precious Metals Group", body: "Marmara Gold Trading LLC operates under the Marmara Precious Metals Group brand." },
];

export function Timeline() {
  const wrapRef = useReveal<HTMLDivElement>();

  return (
    <section ref={wrapRef} className={`${styles.wrap} section reveal`} id="timeline" aria-label="Company timeline">
      <div className="container">
        <header className={styles.head}>
          <span className="eyebrow">Our Story</span>
          <h2>
            A decade of <em>institutional bullion</em> out of Dubai.
          </h2>
          <p>
            From a specialist dealer in the Deira Gold Souk to a
            DMCC-licensed DPMS running a full compliance library and an
            institutional trading platform.
          </p>
        </header>

        <ol className={styles.rail} role="list">
          {MILESTONES.map((m) => (
            <li key={m.year} className={styles.item}>
              <div className={styles.dot} aria-hidden />
              <div className={styles.year}>{m.year}</div>
              <h3 className={styles.title}>{m.title}</h3>
              <p className={styles.body}>{m.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
