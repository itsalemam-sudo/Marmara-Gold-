import { stats } from "@/data/stats";
import { useReveal } from "@/hooks/useReveal";
import { useCountUp } from "@/hooks/useCountUp";
import styles from "./Stats.module.css";

/**
 * Wrap the value in <em> where the source used a highlighted glyph:
 * "300+" → 300 <em>+</em>, "$4T" → <em>$</em>4T.
 */
function renderValue(value: string) {
  if (value.endsWith("+")) return (<>{value.slice(0, -1)}<em>+</em></>);
  if (value.startsWith("$")) return (<><em>$</em>{value.slice(1)}</>);
  return <>{value}</>;
}

function StatBlock({ value, label }: { value: string; label: string }) {
  const { ref, text } = useCountUp(value);
  return (
    <div className={styles.stat}>
      <div className={styles.num} ref={ref as React.RefObject<HTMLDivElement>}>
        {renderValue(text)}
      </div>
      <div className={styles.lbl}>{label}</div>
    </div>
  );
}

export function Stats() {
  const bandRef = useReveal<HTMLDivElement>();
  return (
    <section className={styles.wrap} aria-label="Marmara Gold at a glance">
      <div className="container">
        <div ref={bandRef} className={`${styles.band} reveal`}>
          {stats.map((s) => (
            <StatBlock key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
        <div className={styles.pad} />
      </div>
    </section>
  );
}
