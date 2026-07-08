import { useReveal } from "@/hooks/useReveal";
import { WorldMap } from "./WorldMap";
import styles from "./GlobalReach.module.css";

const continents = [
  "North America",
  "South America",
  "Europe",
  "Africa",
  "Middle East",
  "Asia-Pacific",
];

const metals = [
  { name: "Gold",      fineness: "999.9",  desks: "DXB · LDN · SGP · NYC" },
  { name: "Silver",    fineness: "999",    desks: "DXB · ZRH · SGP" },
  { name: "Platinum",  fineness: "999.5",  desks: "DXB · LDN · SGP" },
  { name: "Palladium", fineness: "999.5",  desks: "DXB · ZRH · HKG" },
];

export function GlobalReach() {
  const copyRef = useReveal<HTMLDivElement>();
  const dataRef = useReveal<HTMLDivElement>();

  return (
    <section className={`${styles.wrap} section`} id="reach" aria-label="Global reach and desks">
      <div className="container">
        <div className={styles.grid}>
          <div ref={copyRef} className="reveal">
            <span className="eyebrow">Global reach</span>
            <h2 className={styles.headline}>
              Trusted access across <em>six continents.</em>
            </h2>
            <p className={styles.body}>
              Marmara's international footprint spans key financial centres and
              strategic trade hubs — enabling us to support institutional clients
              almost anywhere in the world with local execution, custody and
              settlement.
            </p>
            <ul className={styles.continents} aria-label="Continents served">
              {continents.map((c) => (
                <li key={c} className={styles.chip}>{c}</li>
              ))}
            </ul>
          </div>

          <div ref={dataRef} className={`${styles.data} reveal`}>
            <div className={styles.data__meta}>Desks · fineness</div>
            <WorldMap className={styles.map} />
            <div className={styles.rows}>
              {metals.map((m) => (
                <div key={m.name} className={styles.row}>
                  <span className={styles.name}>{m.name}</span>
                  <span className={styles.fineness}>{m.fineness}</span>
                  <span className={styles.desks}>{m.desks}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
