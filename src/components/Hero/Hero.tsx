import { IconArrowRight } from "@/components/icons/Icons";
import { useReveal } from "@/hooks/useReveal";
import styles from "./Hero.module.css";

export function Hero() {
  const innerRef = useReveal<HTMLDivElement>();

  return (
    <section className={styles.wrap} id="top" aria-label="Marmara Gold overview">
      <div className={styles.gridLines} aria-hidden />
      <div className="container">
        <div ref={innerRef} className={`${styles.inner} reveal`}>
          <div className={styles.fineness}>Au 999.9 · FINE GOLD</div>
          <h1 className={styles.headline}>
            Your trusted partner in <em>precious&nbsp;metals</em> trading
          </h1>
          <p className={styles.lead}>
            At Marmara Gold Trading LLC, we deliver integrated solutions across the
            precious metals value chain — from physical trading and refining
            partnerships to vaulting and settlement. Specializing in gold, silver,
            platinum, and palladium, we serve institutional clients in over 60
            markets. Our commitment is built on transparency, compliance, and
            real-time execution you can trust.
          </p>
          <div className={styles.actions}>
            <a href="#contact" className="btn btn--gold">
              Contact us <IconArrowRight />
            </a>
            <a href="#services" className="btn btn--ghost-light">
              Our capabilities
            </a>
            <span className={styles.note}>
              Institutional &amp; professional clients only
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
