import { departments, hq } from "@/data/contact";
import { links } from "@/lib/links";
import { IconArrowRight } from "@/components/icons/Icons";
import { useReveal } from "@/hooks/useReveal";
import { InquiryForm } from "./InquiryForm";
import styles from "./Contact.module.css";

export function Contact() {
  const headRef  = useReveal<HTMLDivElement>();
  const leftRef  = useReveal<HTMLDivElement>();
  const rightRef = useReveal<HTMLDivElement>();

  return (
    <section className={`${styles.wrap} section`} id="contact" aria-label="Contact Marmara">
      <div className="container">
        <header ref={headRef} className={`${styles.head} reveal`}>
          <span className="eyebrow">Contact</span>
          <h2>Reach the right desk</h2>
          <p>
            Institutional coverage is routed to a named desk. Use the B2B form
            for a full brief, or pick the department that fits your enquiry.
          </p>
        </header>

        <div className={styles.grid}>
          <div ref={leftRef} className="reveal">
            <InquiryForm />

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

            <div className={styles.hqBlock}>
              <span className={styles.hqLabel}>Trading platform</span>
              <span className={styles.hqValue}>
                <a href={links.tradingPlatform} target="_blank" rel="noopener noreferrer">
                  marmara.ntptrader.com
                </a>
              </span>
            </div>

            <div className={styles.hqActions}>
              <a href={links.tradingPlatform} target="_blank" rel="noopener noreferrer" className="btn btn--gold">
                Open barX platform <IconArrowRight />
              </a>
              <a href={links.iosApp} target="_blank" rel="noopener noreferrer" className="btn btn--outline-light">
                Download for iOS
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
