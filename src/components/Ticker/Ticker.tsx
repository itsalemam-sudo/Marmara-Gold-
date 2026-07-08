import { ticker as defaultTicker, type MetalQuote } from "@/data/ticker";
import { IconArrowDown, IconArrowUp } from "@/components/icons/Icons";
import styles from "./Ticker.module.css";

type TickerProps = {
  quotes?: MetalQuote[];
};

function formatUsd(n: number) {
  return `$${n.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

function formatChange(n: number) {
  const abs = Math.abs(n).toFixed(2);
  return `${n >= 0 ? "+" : "-"}$${abs}`;
}

export function Ticker({ quotes = defaultTicker }: TickerProps) {
  // Duplicate list once so translateX(-50%) produces seamless scroll.
  const loop = [...quotes, ...quotes];

  return (
    <div className={styles.wrap} aria-label="Live precious metals prices">
      <div className={styles.container}>
        <span className={styles.label}>
          <span className={styles.dot} aria-hidden />
          Live spot
        </span>
        <div className={styles.track} role="marquee" aria-live="off">
          {loop.map((q, i) => {
            const up = q.changeUsd >= 0;
            return (
              <span key={`${q.symbol}-${i}`} className={styles.item}>
                <span className={styles.name}>{q.name}</span>
                <span className={styles.spot}>{formatUsd(q.spotUsd)}</span>
                <span className={`${styles.change} ${up ? styles.up : styles.down}`}>
                  {up ? <IconArrowUp /> : <IconArrowDown />}
                  {formatChange(q.changeUsd)}
                </span>
                <span className={styles.fineness}>{q.fineness}</span>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
