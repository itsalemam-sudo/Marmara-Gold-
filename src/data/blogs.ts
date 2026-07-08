/**
 * Procedurally-generated blog index — 1,000 entries.
 *
 * We generate deterministically at import time so:
 *   • no runtime cost after the first render,
 *   • every user sees the same list (SSR/hydration-safe),
 *   • no Date.now() / Math.random() (both are forbidden globals in some
 *     tooling and would break stable rendering).
 *
 * Each entry has enough metadata to render a card + short body. If you
 * want to ship "real" articles later, drop them into this file with
 * higher indexes so they appear first (list is sorted date-descending).
 */

export type BlogPost = {
  id:       number;    // stable numeric id
  slug:     string;
  title:    string;
  date:     string;    // ISO YYYY-MM-DD
  category: string;
  tags:     string[];
  author:   string;
  readMin:  number;    // 3–9 minutes
  excerpt:  string;
};

/* --- Reference vocab used to compose titles ------------------------ */

const METALS       = ["Gold", "Silver", "Platinum", "Palladium"] as const;
const REGIONS      = [
  "UAE", "Dubai", "Türkiye", "Singapore", "Hong Kong", "London",
  "Zurich", "New York", "MENA", "Asia", "Europe", "Africa",
  "Emerging markets", "GCC", "India", "China",
] as const;
const THEMES       = [
  "market outlook", "premium analysis", "supply chain", "vaulting",
  "AML compliance", "refining margins", "ETF flows", "central-bank demand",
  "tola bar liquidity", "kilo bar supply", "recycled metal", "doré flow",
  "settlement cycles", "spot vs forward", "hedging strategy",
  "custody standards", "responsible sourcing", "assay standards",
  "hallmarking", "sanctions risk",
] as const;
const HORIZONS     = ["Q1", "Q2", "Q3", "Q4", "H1", "H2", "year-end", "monthly"] as const;
const YEARS        = ["2023", "2024", "2025", "2026"] as const;
const CATEGORIES   = [
  "Market Insights",
  "Regulation & Compliance",
  "Refining & Supply Chain",
  "Vaulting & Storage",
  "Trading Strategy",
  "Sustainability",
  "Client Notes",
  "Research",
] as const;
const AUTHORS      = [
  "Marmara Research Desk",
  "Marmara Trading Desk",
  "Marmara Compliance",
  "Zaher Jesry",
  "Morhaf Alhabyan",
  "Abdulaziz Sultan",
  "Khalid Dib",
  "Muhammed Sultan",
] as const;

const TITLE_TEMPLATES = [
  (metal: string, region: string, theme: string, horizon: string, year: string) =>
    `${metal} ${theme}: ${horizon} ${year} view from ${region}`,
  (metal: string, region: string, theme: string, _horizon: string, year: string) =>
    `${region} ${metal} desk notes — ${theme}, ${year}`,
  (metal: string, region: string, theme: string, horizon: string, _year: string) =>
    `${theme.charAt(0).toUpperCase() + theme.slice(1)} for ${metal} in ${region} (${horizon})`,
  (metal: string, region: string, theme: string, _horizon: string, year: string) =>
    `Why ${theme} matters for ${metal} counterparties in ${region} — ${year}`,
  (metal: string, _region: string, theme: string, horizon: string, year: string) =>
    `${metal}: ${horizon} ${year} briefing on ${theme}`,
  (metal: string, region: string, theme: string, _horizon: string, _year: string) =>
    `${region} spotlight — ${metal} and the outlook for ${theme}`,
  (metal: string, region: string, _theme: string, horizon: string, year: string) =>
    `${horizon} ${year} report — ${metal} supply in ${region}`,
];

const EXCERPT_TEMPLATES = [
  (metal: string, region: string, theme: string) =>
    `A concise institutional read on ${metal} through the lens of ${theme}, with practical notes for counterparties operating in ${region}.`,
  (metal: string, region: string, theme: string) =>
    `We break down what recent ${theme} developments mean for physical ${metal} flow, premiums and hedging books across ${region}.`,
  (metal: string, region: string, theme: string) =>
    `From the Marmara desk in Dubai: how ${region} clients are positioning around ${theme} in the ${metal} market.`,
  (metal: string, _region: string, theme: string) =>
    `An operational view of ${theme} — spreads, spot execution and settlement mechanics for ${metal}.`,
  (metal: string, region: string, _theme: string) =>
    `Notes on ${metal} liquidity in ${region}, with our current view on premiums, refining capacity and delivery timelines.`,
];

/* --- Slug helpers -------------------------------------------------- */

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

/* --- Deterministic PRNG (mulberry32) so builds match run-to-run ---- */

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rand = mulberry32(20260708);
const pick = <T,>(arr: readonly T[]) => arr[Math.floor(rand() * arr.length)];

/* --- Date walker: newest first, roughly 1 post per day ------------- */

function makeDate(index: number): string {
  // Start from a fixed epoch (2026-07-08) and go back one day per index,
  // wrapped so the oldest posts fall in early 2024.
  const start = new Date("2026-07-08T00:00:00Z").getTime();
  const day   = 86_400_000;
  const stagger = Math.floor(index * (day * 0.85)); // slightly < 1 day so 1000 posts span ~2.3 years
  const d = new Date(start - stagger);
  return d.toISOString().slice(0, 10);
}

/* --- Generate the index ------------------------------------------- */

function generateBlogs(count: number): BlogPost[] {
  const list: BlogPost[] = [];
  const usedSlugs = new Set<string>();

  for (let i = 0; i < count; i++) {
    const metal    = pick(METALS);
    const region   = pick(REGIONS);
    const theme    = pick(THEMES);
    const horizon  = pick(HORIZONS);
    const year     = pick(YEARS);
    const template = pick(TITLE_TEMPLATES);
    const title    = template(metal, region, theme, horizon, year);

    // Slug with a numeric suffix to guarantee uniqueness for near-duplicates.
    let slug = slugify(title);
    if (!slug) slug = `article-${i}`;
    if (usedSlugs.has(slug)) slug = `${slug}-${i}`;
    usedSlugs.add(slug);

    const author   = pick(AUTHORS);
    const category = pick(CATEGORIES);
    const excerpt  = pick(EXCERPT_TEMPLATES)(metal, region, theme);
    const readMin  = 3 + Math.floor(rand() * 7);
    const tags     = [metal, region, theme.split(" ")[0]].map(t => t.toLowerCase());

    list.push({
      id: i + 1,
      slug,
      title,
      date: makeDate(i),
      category,
      tags,
      author,
      readMin,
      excerpt,
    });
  }
  return list;
}

/**
 * Generate at module-load. Vite will run this once during build and the
 * whole array is baked into the JS bundle. Gzipped it lands around
 * 40-60 KB for 1,000 entries.
 */
export const blogs: BlogPost[] = generateBlogs(1000);

export const blogCategories = ["All", ...CATEGORIES] as const;
