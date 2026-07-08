import { stats } from "@/data/stats";
import { useReveal } from "@/hooks/useReveal";
import styles from "./Stats.module.css";

/**
 * Render each stat's value.
 * The gold "+" or "$" in the HTML mockup is wrapped in <em>.
 * Values are strings like "300+", "$4T", "180+", "40+", "180+".
 */
function StatValue({ value }: { value: string }) {
  if (value.endsWith("+")) {
    return (
      <>
        {value.slice(0, -1)}
        <em>+</em>
      </>
    );
  }
  if (value.startsWith("$")) {
    return (
      <>
        <em>$</em>
        {value.slice(1)}
      </>
    );
  }
  return <>{value}</>;
}

export function Stats() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className={styles.wrap} aria-label="Marmara Gold at a glance">
      <div className="container">
        <div ref={ref} className={`${styles.band} reveal`}>
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <div className={styles.num}>
                <StatValue value={s.value} />
              </div>
              <div className={styles.lbl}>{s.label}</div>
            </div>
          ))}
        </div>
        <div className={styles.pad} />
      </div>
    </section>
  );
}
