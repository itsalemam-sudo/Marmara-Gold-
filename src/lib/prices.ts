import type { MetalQuote } from "@/data/ticker";
import { ticker as fallbackTicker } from "@/data/ticker";

/**
 * Live spot prices for precious metals.
 * Source: api.gold-api.com — free public endpoint, no API key needed,
 * CORS-enabled. Returns USD/oz for XAU (gold), XAG (silver),
 * XPT (platinum) and XPD (palladium).
 *
 * If any single metal fails, that entry falls back to the static value
 * from src/data/ticker.ts so the ticker never renders blanks.
 */

type ApiResponse = {
  name: string;
  price: number;
  symbol: string;
  updatedAt?: string;
  updatedAtReadable?: string;
};

const SOURCES = [
  { apiSymbol: "XAU", short: "AU" as const, name: "Gold"      as const },
  { apiSymbol: "XAG", short: "AG" as const, name: "Silver"    as const },
  { apiSymbol: "XPT", short: "PT" as const, name: "Platinum"  as const },
  { apiSymbol: "XPD", short: "PD" as const, name: "Palladium" as const },
];

async function fetchOne(
  apiSymbol: string,
  signal?: AbortSignal
): Promise<ApiResponse> {
  const r = await fetch(`https://api.gold-api.com/price/${apiSymbol}`, {
    signal,
    headers: { Accept: "application/json" },
  });
  if (!r.ok) throw new Error(`${apiSymbol}: HTTP ${r.status}`);
  return (await r.json()) as ApiResponse;
}

/**
 * Fetches all four metals in parallel and returns them in the same
 * shape as the static ticker (MetalQuote[]). Individual metal failures
 * degrade to the static fallback.
 */
export async function fetchLivePrices(
  signal?: AbortSignal
): Promise<{ quotes: MetalQuote[]; anyLive: boolean }> {
  const results = await Promise.allSettled(
    SOURCES.map((s) => fetchOne(s.apiSymbol, signal))
  );

  let anyLive = false;
  const quotes: MetalQuote[] = SOURCES.map((s, i) => {
    const r = results[i];
    const fallback = fallbackTicker.find((f) => f.symbol === s.short)!;
    if (r.status === "fulfilled" && Number.isFinite(r.value.price)) {
      anyLive = true;
      return {
        symbol: s.short,
        name: s.name,
        spotUsd: r.value.price,
        // changeUsd is computed by the caller against a baseline snapshot.
        changeUsd: 0,
        fineness: fallback.fineness,
      };
    }
    return fallback;
  });

  return { quotes, anyLive };
}
