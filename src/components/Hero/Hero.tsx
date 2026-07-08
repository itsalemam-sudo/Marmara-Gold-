import { ticker } from "@/data/ticker";
import { IconArrowDown, IconArrowUp, IconArrowRight } from "@/components/icons/Icons";
import { useReveal } from "@/hooks/useReveal";
import styles from "./Hero.module.css";

function fmtUsd(n: number) {
  return `$${n.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export function Hero() {
  const copyRef = useReveal<HTMLDivElement>();
  const cardRef = useReveal<HTMLDivElement>();

  return (
    <section className={styles.wrap} id="top" aria-label="Marmara Gold overview">
      <span className={styles.watermark} aria-hidden />
      <div className="container">
        <div className={styles.grid}>
          <div ref={copyRef} className={`${styles.copy} reveal`}>
            <span className="eyebrow">Precious Metals · Dubai</span>
            <h1 className={styles.headline}>
              Your trusted partner in <em>precious metals</em> trading.
            </h1>
            <p className={styles.about}>
              At Marmara Gold Trading LLC we deliver integrated solutions across
              the precious metals value chain — from physical trading and
              refining partnerships to vaulting and settlement. Specialising in
              gold, silver, platinum and palladium, we serve institutional
              clients in 180+ markets on transparency, compliance and real-time
              execution.
            </p>
            <div className={styles.ctas}>
              <a href="#contact" className="btn btn--gold">
                Contact us <IconArrowRight />
              </a>
              <a href="#contact" className="btn btn--ghost-light">
                Open an account
              </a>
            </div>
          </div>

          <aside ref={cardRef} className={`${styles.card} reveal`} aria-label="Live spot prices">
            <div className={styles.card__meta}>Live spot · USD</div>
            {ticker.map((q) => {
              const up = q.changeUsd >= 0;
              return (
                <div key={q.symbol} className={styles.card__row}>
                  <span className={styles.card__metal}>
                    {q.name}
                    <small>{q.symbol} · {q.fineness}</small>
                  </span>
                  <span className={styles.card__price}>{fmtUsd(q.spotUsd)}</span>
                  <span className={`${styles.card__change} ${up ? styles.up : styles.down}`}>
                    {up ? <IconArrowUp /> : <IconArrowDown />}
                    {up ? "+" : "-"}${Math.abs(q.changeUsd).toFixed(2)}
                  </span>
                </div>
              );
            })}
            <div className={styles.card__footer}>
              <span>Ref: LBMA · LPPM</span>
              <span>Updated · 15:32 GST</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
