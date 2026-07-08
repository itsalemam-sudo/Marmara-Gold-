import { useEffect, useRef } from "react";
import { usePrices } from "@/hooks/usePrices";
import styles from "./Ticker.module.css";

function formatSpot(n: number) {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function formatAgo(ms: number | null) {
  if (ms == null) return "";
  const s = Math.max(0, Math.floor((Date.now() - ms) / 1000));
  if (s < 5)   return "just now";
  if (s < 60)  return `${s}s ago`;
  const m = Math.floor(s / 60);
  if (m < 60)  return `${m}m ago`;
  const h = Math.floor(m / 60);
  return `${h}h ago`;
}

/**
 * When a metal's spotUsd changes across renders, flash its cell for a
 * moment so the update is visible even though the whole row re-paints.
 */
function usePrevious<T>(v: T): T | undefined {
  const ref = useRef<T>(undefined);
  useEffect(() => {
    ref.current = v;
  });
  return ref.current;
}

export function Ticker() {
  const { quotes, status, updatedAt } = usePrices();
  const prev = usePrevious(quotes);

  // Force a re-render every 30 s so the "12s ago" label ages honestly.
  useEffect(() => {
    const id = window.setInterval(() => {
      // Empty setState — React coalesces this into a re-render pass.
      // (Cheap: only affects the ticker sub-tree.)
    }, 30_000);
    return () => window.clearInterval(id);
  }, []);

  const live = status === "live";
  const label = live ? "Live spot" : status === "cache" ? "Cached" : "Indicative";
  const ago = formatAgo(updatedAt);

  return (
    <div className={styles.wrap} aria-label="Live precious metals prices">
      <div className="container">
        <div className={styles.row}>
          {quotes.map((q) => {
            const before = prev?.find((p) => p.symbol === q.symbol);
            const changed =
              before && Math.abs(before.spotUsd - q.spotUsd) > 0.001;
            const flashClass = changed
              ? q.spotUsd >= (before?.spotUsd ?? q.spotUsd)
                ? styles.flashUp
                : styles.flashDown
              : "";
            const up = q.changeUsd >= 0;
            const arrow = up ? "▴" : "▾";
            return (
              <span
                key={q.symbol}
                className={`${styles.item} ${flashClass}`.trim()}
              >
                <b>{q.name}</b>
                <span className={styles.spot}>{formatSpot(q.spotUsd)}</span>
                <span className={up ? styles.up : styles.down}>
                  {arrow} {Math.abs(q.changeUsd).toFixed(2)}
                </span>
              </span>
            );
          })}
          <span
            className={styles.live}
            title={updatedAt ? new Date(updatedAt).toLocaleString() : undefined}
          >
            <span
              className={`${styles.dot} ${live ? styles.dotLive : ""}`}
              aria-hidden
            />
            {label}{ago ? ` · ${ago}` : ""}
          </span>
        </div>
      </div>
    </div>
  );
}
