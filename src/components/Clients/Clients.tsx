import { clients } from "@/data/clients";
import { useReveal } from "@/hooks/useReveal";
import styles from "./Clients.module.css";

export function Clients() {
  const headRef = useReveal<HTMLDivElement>();
  const listRef = useReveal<HTMLUListElement>();

  return (
    <section className={`${styles.wrap} section`} id="insights" aria-label="Who we serve">
      <div className="container">
        <div className={styles.grid}>
          <header ref={headRef} className={`${styles.head} reveal`}>
            <span className="eyebrow">Who we serve</span>
            <h2>
              Institutional <em>counterparties</em> in 180+ markets.
            </h2>
            <p>
              Our client base spans the full precious-metals value chain — from
              accredited refineries and sovereign wealth to jewellery manufacturers
              and family offices. Each engagement is structured around KYC-first
              onboarding and dedicated coverage.
            </p>
          </header>

          <ul ref={listRef} className={`${styles.list} reveal`}>
            {clients.map((c, i) => (
              <li key={c} className={styles.item}>
                <span className={styles.idx}>{String(i + 1).padStart(2, "0")}</span>
                <span className={styles.text}>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
