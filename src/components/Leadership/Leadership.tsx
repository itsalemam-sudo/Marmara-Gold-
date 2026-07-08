import { team, type TeamMember } from "@/data/team";
import { useReveal } from "@/hooks/useReveal";
import styles from "./Leadership.module.css";

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last  = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase() || "M";
}

function Portrait({ m }: { m: TeamMember }) {
  if (m.image) {
    return (
      <span className={`${styles.portrait} ${styles.portraitPhoto}`}>
        <img src={m.image} alt="" loading="lazy" />
        <span className={styles.portraitFrame} aria-hidden />
      </span>
    );
  }
  return (
    <span className={styles.portrait} aria-hidden>
      {initials(m.name)}
    </span>
  );
}

export function Leadership() {
  const headRef = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();

  return (
    <section className={`${styles.wrap} section`} id="leadership" aria-label="Leadership team">
      <div className="container">
        <header ref={headRef} className={`${styles.head} reveal`}>
          <span className="eyebrow">Leadership</span>
          <h2>The team behind Marmara</h2>
          <p>
            A cross-disciplinary team led from Dubai — trading, compliance,
            operations, jewellery and finance — each backed by decades of desk
            experience.
          </p>
        </header>

        <div ref={gridRef} className={`${styles.grid} reveal`}>
          {team.map((m, i) => (
            <article key={`${m.name}-${i}`} className={styles.card}>
              <Portrait m={m} />
              <div className={styles.body}>
                <h3 className={styles.name}>{m.name}</h3>
                <span className={styles.title}>{m.title}</span>
                {m.email && (
                  <a className={styles.email} href={`mailto:${m.email}`}>
                    {m.email}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
