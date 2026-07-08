import { useReveal } from "@/hooks/useReveal";
import styles from "./GlobalReach.module.css";

const chips = ["Gold · Au", "Silver · Ag", "Platinum · Pt", "Palladium · Pd"];

/**
 * Global-reach data card values are hard-coded per the source HTML.
 * The tiny <em> spans mark the gold-highlighted portion of each figure.
 */
const cardStats: { k: string; v: React.ReactNode }[] = [
  { k: "Financial centers & trade hubs",  v: <><em>6</em> continents</> },
  { k: "Institutional markets served",     v: <>60<em>+</em></> },
  { k: "Settlement & vaulting network",    v: <><em>24</em>/7</> },
  { k: "Regulatory alignment",             v: <><em>AML</em>/CFT</> },
];

export function GlobalReach() {
  const copyRef = useReveal<HTMLDivElement>();
  const dataRef = useReveal<HTMLDivElement>();

  return (
    <section className={`${styles.wrap} section`} id="reach" aria-label="Global reach">
      <div className="container">
        <div className={styles.split}>
          <div ref={copyRef} className="reveal">
            <span className="eyebrow">Global Reach · Trusted Access</span>
            <h2 className={styles.headline}>
              Global reach.
              <br />
              Trusted access.
            </h2>
            <p className={styles.body}>
              Marmara's international footprint spans key financial centers and
              strategic trade hubs across six continents — enabling us to support
              clients almost anywhere in the world.
            </p>
            <div className={styles.chips}>
              {chips.map((c) => (
                <span key={c} className={styles.chip}>{c}</span>
              ))}
            </div>
          </div>

          <div ref={dataRef} className={`${styles.card} reveal`}>
            {cardStats.map((s, i) => (
              <div key={i} className={styles.stat}>
                <span className={styles.k}>{s.k}</span>
                <span className={styles.v}>{s.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
