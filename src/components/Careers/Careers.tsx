import { careers } from "@/data/careers";
import { IconArrowRight } from "@/components/icons/Icons";
import { useReveal } from "@/hooks/useReveal";
import styles from "./Careers.module.css";

export function Careers() {
  const leftRef  = useReveal<HTMLDivElement>();
  const rightRef = useReveal<HTMLDivElement>();

  return (
    <section className={`${styles.wrap} section`} id="careers" aria-label="Careers at Marmara">
      <div className="container">
        <div className={styles.split}>
          <div ref={leftRef} className="reveal">
            <span className="eyebrow">{careers.eyebrow}</span>
            <h2 className={styles.headline}>{careers.headline}</h2>
            <div className={styles.roles}>
              {careers.roles.map((r) => (
                <a key={r} href="#contact" className={styles.role}>{r}</a>
              ))}
            </div>
          </div>

          <div ref={rightRef} className={`${styles.body} reveal`}>
            <p>
              At Marmara Gold Trading LLC, our success is built on the expertise
              and ambition of our people. We're looking for driven individuals
              who want to shape the future of the global precious metals industry
              — from bullion trading and refinery partnerships to market
              intelligence and client solutions.
            </p>
            <p>
              Whether you're a financial analyst, compliance expert, logistics
              coordinator, or sales professional — join us in delivering trust,
              value, and innovation across the gold, silver, platinum, and
              palladium markets.
            </p>
            <a href="#contact" className="btn btn--gold" style={{ marginTop: 14 }}>
              View open roles <IconArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
