import { stats } from "@/data/stats";
import { useReveal } from "@/hooks/useReveal";
import styles from "./Stats.module.css";

export function Stats() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className={styles.wrap} aria-label="Marmara Gold at a glance">
      <div className="container">
        <div ref={ref} className={`${styles.grid} reveal`}>
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <div className={styles.value}>{s.value}</div>
              <div className={styles.label}>{s.label}</div>
              {s.caption && <div className={styles.caption}>{s.caption}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
