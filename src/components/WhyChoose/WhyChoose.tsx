import { whyChoose } from "@/data/whyChoose";
import { WhyChooseGlyph } from "@/components/icons/Icons";
import { useReveal } from "@/hooks/useReveal";
import styles from "./WhyChoose.module.css";

export function WhyChoose() {
  const headRef = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();

  return (
    <section className={`${styles.wrap} section`} id="why" aria-label="Why choose Marmara">
      <div className="container">
        <div ref={headRef} className={`${styles.head} reveal`}>
          <div>
            <span className="eyebrow">Why Marmara</span>
            <h2 className={styles.title}>
              Institutional discipline, market <em>edge.</em>
            </h2>
          </div>
          <p className={styles.lede}>
            We combine on-the-desk trading expertise with global reach and a
            compliance-first operating model — so counterparties, custodians and
            treasurers get the same institutional experience whether they trade
            in Dubai, London, Singapore or New York.
          </p>
        </div>

        <div ref={gridRef} className={`${styles.grid} reveal`}>
          {whyChoose.map((c) => (
            <article key={c.title} className={styles.card}>
              <WhyChooseGlyph name={c.icon} className={styles.glyph} />
              <h3 className={styles.card__title}>{c.title}</h3>
              <p className={styles.card__body}>{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
