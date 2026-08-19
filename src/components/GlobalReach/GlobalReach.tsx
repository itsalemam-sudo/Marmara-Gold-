import { useReveal } from "@/hooks/useReveal";
import { AnimatedGlobe } from "./AnimatedGlobe";
import styles from "./GlobalReach.module.css";

/**
 * Global presence panel.
 *
 * Copy is deliberately quiet: no continent counts, no market counts,
 * no "24/7 vaulting" claim — every one of those numbers on the
 * previous version was unverified and legally risky for a firm this
 * young. Instead the section names the metals coverage and the four
 * confirmed geographies. Add hard figures only when Marmara publishes
 * verified group data (Group Head of Ops sign-off).
 */

const chips = ["Gold · Au", "Silver · Ag", "Platinum · Pt", "Palladium · Pd"];

/** Confirmed offices / desks — do not add speculative locations. */
const offices: { city: string; role: string }[] = [
  { city: "Dubai",     role: "Group Headquarters" },
  { city: "Hong Kong", role: "APAC Desk" },
  { city: "Türkiye",   role: "Regional Presence" },
  { city: "Singapore", role: "APAC Expansion" },
];

export function GlobalReach() {
  const copyRef  = useReveal<HTMLDivElement>();
  const globeRef = useReveal<HTMLDivElement>();

  return (
    <section className={`${styles.wrap} section`} id="reach" aria-label="Global presence">
      <div className="container">
        <div className={styles.split}>
          <div ref={copyRef} className="reveal">
            <span className="eyebrow">Global Presence</span>
            <h2 className={styles.headline}>
              Connecting key precious
              <br />
              metals markets.
            </h2>
            <p className={styles.body}>
              Marmara Precious Metals Group operates through a growing
              international presence, connecting institutional and professional
              counterparties across key precious metals markets.
            </p>
            <div className={styles.chips}>
              {chips.map((c) => (
                <span key={c} className={styles.chip}>{c}</span>
              ))}
            </div>

            <div className={styles.mini}>
              {offices.map((o) => (
                <div key={o.city} className={styles.stat}>
                  <span className={styles.k}>{o.role}</span>
                  <span className={styles.v}>{o.city}</span>
                </div>
              ))}
            </div>
          </div>

          <div ref={globeRef} className={`${styles.globeWrap} reveal`}>
            <AnimatedGlobe />
          </div>
        </div>
      </div>
    </section>
  );
}
