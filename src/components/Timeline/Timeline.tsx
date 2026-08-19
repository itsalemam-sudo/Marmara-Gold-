import { useReveal } from "@/hooks/useReveal";
import styles from "./Timeline.module.css";

/**
 * Company timeline strip.
 *
 * Each milestone here must be verifiable against Marmara's own
 * records — do not add speculative dates, unlaunched product
 * milestones (barX / Marmara Trader), or specific counts ("21
 * signed policies") without written confirmation. Anything
 * unconfirmed belongs off the public site.
 */

const MILESTONES = [
  { year: "2012", title: "Marmara founded",         body: "Established in Dubai's Deira Gold Souk as a specialist bullion dealer." },
  { year: "2015", title: "DMCC licence granted",    body: "Licensed Dealer in Precious Metals & Stones (DPMS) at the DMCC free zone." },
  { year: "2018", title: "Regional expansion",      body: "Coverage extended across the GCC and neighbouring liquidity centres." },
  { year: "2021", title: "AML / CFT framework",     body: "Compliance programme aligned with UAE AML / CFT regulations." },
  { year: "2024", title: "Corporate policy suite",  body: "Group policy framework aligned with RJC Code of Practices and OECD Due Diligence Guidance." },
  { year: "2026", title: "Precious Metals Group",   body: "Marmara operates as Marmara Precious Metals Group across trading, refining and settlement." },
];

export function Timeline() {
  const wrapRef = useReveal<HTMLDivElement>();

  return (
    <section ref={wrapRef} className={`${styles.wrap} section reveal`} id="timeline" aria-label="Company timeline">
      <div className="container">
        <header className={styles.head}>
          <span className="eyebrow">Our Story</span>
          <h2>
            Built on trust. <em>Growing across global precious metals markets.</em>
          </h2>
          <p>
            From roots in Dubai&rsquo;s Deira Gold Souk to a growing international
            presence, Marmara has evolved into an integrated precious metals
            group serving institutional and professional counterparties.
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
