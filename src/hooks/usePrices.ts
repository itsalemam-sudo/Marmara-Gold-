import { useEffect, useState } from "react";
import type { MetalQuote } from "@/data/ticker";
import { ticker as fallbackTicker } from "@/data/ticker";
import { fetchLivePrices } from "@/lib/prices";

const CACHE_KEY  = "mg:prices:v1";
const REFRESH_MS = 60_000; // one minute per poll to respect rate limits
const CACHE_TTL  = 12 * 3600_000;

type Snapshot = { quotes: MetalQuote[]; at: number };

function loadCache(): Snapshot | null {
  try {
    const s = localStorage.getItem(CACHE_KEY);
    if (!s) return null;
    const parsed = JSON.parse(s) as Snapshot;
    if (Date.now() - parsed.at > CACHE_TTL) return null;
    return parsed;
  } catch {
    return null;
  }
}

function saveCache(quotes: MetalQuote[]) {
  try {
    localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ quotes, at: Date.now() } satisfies Snapshot)
    );
  } catch {
    /* localStorage may be disabled — silently ignore */
  }
}

export type PricesState = {
  quotes:    MetalQuote[];
  status:    "static" | "cache" | "live";
  updatedAt: number | null;
};

/**
 * React hook — returns the current spot prices for gold, silver,
 * platinum and palladium.
 *
 * Behaviour:
 *   1. On mount, seeds state from localStorage cache (if fresh) or the
 *      static ticker.ts constants.
 *   2. Kicks off an immediate fetch, then polls once a minute.
 *   3. Computes `changeUsd` per row as the delta between the current
 *      spot and the first successful fetch of the current session.
 *      That gives an honest "up/down since page opened" indicator.
 *   4. Never leaves the ticker blank — a failed fetch keeps the last
 *      known values.
 */
export function usePrices(): PricesState {
  const [state, setState] = useState<PricesState>(() => {
    const cached = loadCache();
    if (cached) {
      return { quotes: cached.quotes, status: "cache", updatedAt: cached.at };
    }
    return { quotes: fallbackTicker, status: "static", updatedAt: null };
  });

  useEffect(() => {
    let mounted = true;
    let baseline: MetalQuote[] | null = null;
    const controller = new AbortController();

    const tick = async () => {
      try {
        const { quotes, anyLive } = await fetchLivePrices(controller.signal);
        if (!mounted) return;
        if (!baseline) baseline = quotes;

        const withChange = quotes.map((q) => {
          const b = baseline!.find((x) => x.symbol === q.symbol);
          return { ...q, changeUsd: b ? q.spotUsd - b.spotUsd : 0 };
        });

        setState({
          quotes:    withChange,
          status:    anyLive ? "live" : "static",
          updatedAt: anyLive ? Date.now() : state.updatedAt,
        });
        if (anyLive) saveCache(quotes);
      } catch {
        /* keep prior state on transient failure */
      }
    };

    tick();
    const id = window.setInterval(tick, REFRESH_MS);

    return () => {
      mounted = false;
      controller.abort();
      window.clearInterval(id);
    };
    // Only re-run on mount — the tick closure captures the setter.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state;
}
