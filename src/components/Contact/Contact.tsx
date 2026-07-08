import { departments, hq } from "@/data/contact";
import { IconArrowRight } from "@/components/icons/Icons";
import { useReveal } from "@/hooks/useReveal";
import styles from "./Contact.module.css";

export function Contact() {
  const headRef = useReveal<HTMLDivElement>();
  const leftRef = useReveal<HTMLDivElement>();
  const rightRef = useReveal<HTMLDivElement>();

  return (
    <section className={`${styles.wrap} section`} id="contact" aria-label="Contact Marmara">
      <div className="container">
        <header ref={headRef} className={`${styles.head} reveal`}>
          <span className="eyebrow">Contact</span>
          <h2>Reach the right desk</h2>
          <p>
            Institutional coverage is routed to a named desk. Pick the one that
            fits your enquiry, or reach us at the HQ line and we will hand off.
          </p>
        </header>

        <div className={styles.grid}>
          <div ref={leftRef} className={`reveal`}>
            <div className={styles.dept}>
              {departments.map((d) => (
                <article key={d.email} className={styles.deptCard}>
                  <h3 className={styles.deptName}>{d.name}</h3>
                  <p className={styles.deptDetail}>{d.detail}</p>
                  <a className={styles.deptEmail} href={`mailto:${d.email}`}>
                    {d.email}
                  </a>
                </article>
              ))}
            </div>
          </div>

          <aside ref={rightRef} className={`${styles.hq} reveal`}>
            <h3 className={styles.hqTitle}>Headquarters</h3>

            <div className={styles.hqBlock}>
              <span className={styles.hqLabel}>Address</span>
              <span className={styles.hqValue}>{hq.address}</span>
            </div>
            <div className={styles.hqBlock}>
              <span className={styles.hqLabel}>Branch</span>
              <span className={styles.hqValue}>{hq.branch}</span>
            </div>
            <div className={styles.hqBlock}>
              <span className={styles.hqLabel}>Hours</span>
              <span className={styles.hqValue}>{hq.hours}</span>
            </div>
            <div className={styles.hqBlock}>
              <span className={styles.hqLabel}>General</span>
              <span className={styles.hqValue}>
                <a href={`mailto:${hq.general}`}>{hq.general}</a>
                <br />
                {hq.website}
              </span>
            </div>

            <div className={styles.hqActions}>
              <a href={`mailto:${hq.general}`} className="btn btn--gold">
                Email us <IconArrowRight />
              </a>
              <a href="#services-grid" className="btn btn--outline-light">
                See services
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
