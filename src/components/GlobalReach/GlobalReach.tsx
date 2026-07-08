import { useReveal } from "@/hooks/useReveal";
import { AnimatedGlobe } from "./AnimatedGlobe";
import styles from "./GlobalReach.module.css";

const chips = ["Gold · Au", "Silver · Ag", "Platinum · Pt", "Palladium · Pd"];

const cardStats: { k: string; v: React.ReactNode }[] = [
  { k: "Financial centers & trade hubs",  v: <><em>6</em> continents</> },
  { k: "Institutional markets served",     v: <>60<em>+</em></> },
  { k: "Settlement & vaulting network",    v: <><em>24</em>/7</> },
  { k: "Regulatory alignment",             v: <><em>AML</em>/CFT</> },
];

export function GlobalReach() {
  const copyRef  = useReveal<HTMLDivElement>();
  const globeRef = useReveal<HTMLDivElement>();

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

            <div className={styles.mini}>
              {cardStats.map((s, i) => (
                <div key={i} className={styles.stat}>
                  <span className={styles.k}>{s.k}</span>
                  <span className={styles.v}>{s.v}</span>
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
