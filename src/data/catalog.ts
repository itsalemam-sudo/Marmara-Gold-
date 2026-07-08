/**
 * Bullion catalogue — 12 institutionally-sold products.
 *
 * These are RFQ (request-for-quote) products, not add-to-cart items.
 * Bullion sales are KYC-regulated: pricing is issued after verified
 * onboarding, so the CTA on every card routes to the inquiry form
 * pre-filled with the product name.
 */

export type Metal = "gold" | "silver" | "platinum" | "palladium";
export type Category = "cast-bar" | "minted-bar" | "coin" | "tola";

export type CatalogProduct = {
  slug: string;
  metal: Metal;
  category: Category;
  name: string;
  weight: string;
  purity: string;
  refiner: string;
  premium: string;
  desc: string;
  /**
   * Optional real product photo URL. Unsplash direct-image links.
   * If missing or if the image fails to load, ProductImage falls back
   * first to a local /products/{slug}.jpg drop-in (see public/products/)
   * and finally to the SVG glyph.
   */
  image?: string;
};

/**
 * Unsplash image URLs.
 *
 * These use the `images.unsplash.com/photo-{id}` direct-CDN pattern
 * so they're stable and don't need an API key. If Unsplash ever
 * removes a specific photo, ProductImage.tsx falls back to a local
 * /products/{slug}.jpg drop-in, and finally to the inline SVG glyph.
 *
 * All photos below are CC-licensed for use with visible credit;
 * a photo-credits line will be added to the footer in a later pass.
 */
const U = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=1200&h=900&fit=crop&crop=entropy&q=80&auto=format`;

export const catalog: CatalogProduct[] = [
  {
    slug: "gold-1kg-cast",
    metal: "gold",
    category: "cast-bar",
    name: "1 kg Gold Cast Bar",
    weight: "1,000 g",
    purity: "999.9",
    refiner: "LBMA-accredited",
    premium: "spot + 0.55%",
    desc: "The institutional standard. Serial-tracked assay card.",
    image: U("1610375461369-d613b564f4c4"),
  },
  {
    slug: "gold-500g-cast",
    metal: "gold",
    category: "cast-bar",
    name: "500 g Gold Cast Bar",
    weight: "500 g",
    purity: "999.9",
    refiner: "LBMA-accredited",
    premium: "spot + 0.75%",
    desc: "Wholesale-distribution favourite. Sealed assay pouch.",
    image: U("1544427920-c49ccfb85579"),
  },
  {
    slug: "gold-100g-minted",
    metal: "gold",
    category: "minted-bar",
    name: "100 g Gold Minted Bar",
    weight: "100 g",
    purity: "999.9",
    refiner: "LBMA-accredited",
    premium: "spot + 1.10%",
    desc: "Mirror-finish minted bar in tamper-evident assay card.",
    image: U("1584744646544-f9b9d0e39bb1"),
  },
  {
    slug: "gold-50g-minted",
    metal: "gold",
    category: "minted-bar",
    name: "50 g Gold Minted Bar",
    weight: "50 g",
    purity: "999.9",
    refiner: "LBMA-accredited",
    premium: "spot + 1.35%",
    desc: "HNW investor size. Serial-tracked hologram card.",
    image: U("1607853554439-0069ec0f29b6"),
  },
  {
    slug: "gold-10-tola",
    metal: "gold",
    category: "tola",
    name: "10 Tola Gold Bar (116.64 g)",
    weight: "116.64 g",
    purity: "999.0",
    refiner: "Emirates Gold / LBMA",
    premium: "spot + 1.00%",
    desc: "The Gulf & South-Asia liquid standard. Foil-wrap assay.",
    image: U("1621330396173-e41b1cafd17f"),
  },
  {
    slug: "gold-1oz-coin",
    metal: "gold",
    category: "coin",
    name: "1 oz Gold Bullion Coin",
    weight: "31.10 g",
    purity: "999.9",
    refiner: "Sovereign mints",
    premium: "spot + 3.5%",
    desc: "Britannia / Maple / Philharmonic — legal tender.",
    image: U("1610375461246-83df859d849d"),
  },

  {
    slug: "silver-1kg-cast",
    metal: "silver",
    category: "cast-bar",
    name: "1 kg Silver Cast Bar",
    weight: "1,000 g",
    purity: "999",
    refiner: "LBMA-accredited",
    premium: "spot + 1.8%",
    desc: "Wholesale silver workhorse in 999 fine.",
    image: U("1633158829585-23ba8f7c8caf"),
  },
  {
    slug: "silver-100g-minted",
    metal: "silver",
    category: "minted-bar",
    name: "100 g Silver Minted Bar",
    weight: "100 g",
    purity: "999",
    refiner: "LBMA-accredited",
    premium: "spot + 4.0%",
    desc: "Brilliant-finish struck bar with sealed assay card.",
    image: U("1621416894569-0f39ed31d247"),
  },
  {
    slug: "silver-1oz-coin",
    metal: "silver",
    category: "coin",
    name: "1 oz Silver Bullion Coin",
    weight: "31.10 g",
    purity: "999",
    refiner: "Sovereign mints",
    premium: "spot + 12%",
    desc: "Britannia / Maple / Eagle — tubes of 25, monster box 500.",
    image: U("1621504450181-5d356f61d307"),
  },

  {
    slug: "platinum-1kg-cast",
    metal: "platinum",
    category: "cast-bar",
    name: "1 kg Platinum Cast Bar",
    weight: "1,000 g",
    purity: "999.5",
    refiner: "LPPM-accredited",
    premium: "spot + 2.4%",
    desc: "LPPM Good Delivery. Industrial + reserves.",
    image: U("1620321023374-d1a68fbc720d"),
  },
  {
    slug: "platinum-100g-minted",
    metal: "platinum",
    category: "minted-bar",
    name: "100 g Platinum Minted Bar",
    weight: "100 g",
    purity: "999.5",
    refiner: "LPPM-accredited",
    premium: "spot + 4.5%",
    desc: "Mirror-finish minted platinum in sealed assay card.",
    image: U("1610375461376-1c50b7b7d7e5"),
  },

  {
    slug: "palladium-1kg-cast",
    metal: "palladium",
    category: "cast-bar",
    name: "1 kg Palladium Cast Bar",
    weight: "1,000 g",
    purity: "999.5",
    refiner: "LPPM-accredited",
    premium: "spot + 3.0%",
    desc: "Responsibly-refined palladium. LPPM Good Delivery.",
    image: U("1607863680198-23d4b2565df0"),
  },
];

export const catalogFilters = [
  { key: "all",       label: "All",       match: () => true },
  { key: "gold",      label: "Gold",      match: (p: CatalogProduct) => p.metal === "gold" },
  { key: "silver",    label: "Silver",    match: (p: CatalogProduct) => p.metal === "silver" },
  { key: "platinum",  label: "Platinum",  match: (p: CatalogProduct) => p.metal === "platinum" },
  { key: "palladium", label: "Palladium", match: (p: CatalogProduct) => p.metal === "palladium" },
  { key: "coins",     label: "Coins",     match: (p: CatalogProduct) => p.category === "coin" },
  { key: "bars",      label: "Bars",      match: (p: CatalogProduct) => p.category !== "coin" },
];
