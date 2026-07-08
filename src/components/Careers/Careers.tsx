import { careers } from "@/data/careers";
import { IconArrowRight } from "@/components/icons/Icons";
import { useReveal } from "@/hooks/useReveal";
import styles from "./Careers.module.css";

export function Careers() {
  const headRef = useReveal<HTMLDivElement>();
  const rolesRef = useReveal<HTMLUListElement>();

  return (
    <section className={`${styles.wrap} section`} id="careers" aria-label="Careers at Marmara">
      <div className="container">
        <div className={styles.grid}>
          <header ref={headRef} className={`${styles.head} reveal`}>
            <span className="eyebrow">{careers.eyebrow}</span>
            <h2><em>{careers.headline}</em></h2>
            <p>{careers.body}</p>
            <div className={styles.ctaWrap}>
              <a href={careers.cta.href} className="btn btn--gold">
                {careers.cta.label} <IconArrowRight />
              </a>
            </div>
          </header>

          <ul ref={rolesRef} className={`${styles.roles} reveal`} aria-label="Open roles">
            {careers.roles.map((r) => (
              <li key={r}>
                <a href="#contact" className={styles.chip}>{r}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
