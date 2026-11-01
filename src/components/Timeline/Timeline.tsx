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

/* The timeline previously opened with a 2012 founding year and a 2015
 * DMCC licence milestone — both unapproved by the owner (31 Oct 2026).
 * Every pre-2024 milestone implied an unconfirmed founding date, so the
 * list is reduced to two verifiable corporate events: the signed group
 * policy suite (01.10.2024) and the group identity. Do not add further
 * entries without written confirmation of the exact date. */
const MILESTONES = [
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
            Marmara has grown from a Dubai bullion desk into an integrated
            precious metals group serving institutional and professional
            counterparties across the Gulf, Türkiye and Asia.
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
