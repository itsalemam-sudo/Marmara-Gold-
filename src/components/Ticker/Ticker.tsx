import { ticker as defaultTicker, type MetalQuote } from "@/data/ticker";
import styles from "./Ticker.module.css";

type TickerProps = {
  quotes?: MetalQuote[];
};

function formatSpot(n: number) {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function Ticker({ quotes = defaultTicker }: TickerProps) {
  return (
    <div className={styles.wrap} aria-label="Live precious metals prices">
      <div className="container">
        <div className={styles.row}>
          {quotes.map((q) => {
            const up = q.changeUsd >= 0;
            const arrow = up ? "▴" : "▾";
            return (
              <span key={q.symbol} className={styles.item}>
                <b>{q.name}</b>
                <span className={styles.spot}>{formatSpot(q.spotUsd)}</span>
                <span className={up ? styles.up : styles.down}>
                  {arrow} {Math.abs(q.changeUsd).toFixed(2)}
                </span>
              </span>
            );
          })}
          <a href="#reach" className={styles.live}>
            <span className={styles.dot} aria-hidden />
            Live Charts →
          </a>
        </div>
      </div>
    </div>
  );
}
