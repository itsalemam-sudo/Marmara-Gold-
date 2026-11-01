/**
 * Bullion catalogue — Marmara-branded line (gold, silver, platinum and
 * palladium) plus the 1 oz gold bar added on owner approval (31 Oct 2026).
 *
 * These are RFQ (request-for-quote) products, not add-to-cart items.
 * Bullion sales are KYC-regulated: pricing is issued after verified
 * onboarding, so the CTA on every card routes to the enquiry form
 * pre-filled with the product name.
 *
 * On 31 Oct the owner approved the product CATEGORIES (gold / silver /
 * platinum / palladium plus the 1 oz gold bar) but noted that specific
 * weights, fineness, dimensions and packaging must come from the
 * official Marmara catalogue, not the questionnaire's prefilled values.
 * Premium strings (indicative pricing margins) are therefore hidden
 * (set to empty) until the catalogue arrives; the Products component
 * already renders nothing when `premium` is empty. Weights and purities
 * are retained as physical descriptors of each format but are flagged
 * for cross-check against the catalogue when it lands.
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
  /** Short branding/origin descriptor shown on the card. */
  refiner: string;
  /** Indicative premium over spot. Empty = hidden until official pricing is supplied. */
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
 * No remote `image` URLs are set. The ProductImage 3-tier fallback
 * (remote → /products/{slug}.jpg → SVG glyph) therefore shows the
 * photorealistic SVG bullion glyph until a real JPG is dropped in
 * public/products/. Guessing Unsplash IDs at the code layer was a
 * bad idea — the wrong-photo bug (cars / phones / autumn) proved
 * that. Real photography lands the moment a matching file exists;
 * no code change required to swap them in.
 */

export const catalog: CatalogProduct[] = [
  {
    slug: "gold-1kg-cast",
    metal: "gold",
    category: "cast-bar",
    name: "1 kg Gold Cast Bar",
    weight: "1,000 g",
    purity: "999.9",
    refiner: "Marmara-branded",
    premium: "",
    desc: "Serial-matched to certificate; security packaging; QR verification code.",
  },
  {
    slug: "gold-500g-cast",
    metal: "gold",
    category: "cast-bar",
    name: "500 g Gold Cast Bar",
    weight: "500 g",
    purity: "999.9",
    refiner: "Marmara-branded",
    premium: "",
    desc: "Serial-matched to certificate; security packaging; QR verification code.",
  },
  {
    slug: "gold-100g-minted",
    metal: "gold",
    category: "minted-bar",
    name: "100 g Gold Minted Bar",
    weight: "100 g",
    purity: "999.9",
    refiner: "Marmara-branded",
    premium: "",
    desc: "Serial-matched to certificate; security packaging; QR verification code.",
  },
  {
    slug: "gold-50g-minted",
    metal: "gold",
    category: "minted-bar",
    name: "50 g Gold Minted Bar",
    weight: "50 g",
    purity: "999.9",
    refiner: "Marmara-branded",
    premium: "",
    desc: "Serial-matched to certificate; security packaging; QR verification code.",
  },
  {
    slug: "gold-10-tola",
    metal: "gold",
    category: "tola",
    name: "10 Tola Gold Bar (116.64 g)",
    weight: "116.64 g",
    purity: "999.0",
    refiner: "Marmara-branded",
    premium: "",
    desc: "The Gulf & South-Asia liquid standard; serial-matched to certificate.",
  },
  {
    slug: "gold-1oz-bar",
    metal: "gold",
    category: "minted-bar",
    name: "1 oz Gold Bar",
    weight: "31.10 g",
    purity: "999.9",
    refiner: "Marmara-branded",
    premium: "",
    desc: "1 oz minted gold bar; serial-matched to certificate; security packaging; QR verification code.",
  },
  {
    slug: "gold-1oz-coin",
    metal: "gold",
    category: "coin",
    name: "1 oz Gold Bullion Coin",
    weight: "31.10 g",
    purity: "999.9",
    refiner: "Marmara-branded",
    premium: "",
    desc: "1 oz investment-grade bullion coin.",
  },

  {
    slug: "silver-1kg-cast",
    metal: "silver",
    category: "cast-bar",
    name: "1 kg Silver Cast Bar",
    weight: "1,000 g",
    purity: "999",
    refiner: "Marmara-branded",
    premium: "",
    desc: "Serial-matched to certificate; security packaging; QR verification code.",
  },
  {
    slug: "silver-100g-minted",
    metal: "silver",
    category: "minted-bar",
    name: "100 g Silver Minted Bar",
    weight: "100 g",
    purity: "999",
    refiner: "Marmara-branded",
    premium: "",
    desc: "Serial-matched to certificate; security packaging; QR verification code.",
  },
  {
    slug: "silver-1oz-coin",
    metal: "silver",
    category: "coin",
    name: "1 oz Silver Bullion Coin",
    weight: "31.10 g",
    purity: "999",
    refiner: "Marmara-branded",
    premium: "",
    desc: "1 oz investment-grade bullion coin.",
  },

  {
    slug: "platinum-1kg-cast",
    metal: "platinum",
    category: "cast-bar",
    name: "1 kg Platinum Cast Bar",
    weight: "1,000 g",
    purity: "999.5",
    refiner: "Marmara-branded",
    premium: "",
    desc: "Platinum cast bar — serial-matched to certificate.",
  },
  {
    slug: "platinum-100g-minted",
    metal: "platinum",
    category: "minted-bar",
    name: "100 g Platinum Minted Bar",
    weight: "100 g",
    purity: "999.5",
    refiner: "Marmara-branded",
    premium: "",
    desc: "Platinum minted bar — serial-matched to certificate.",
  },

  {
    slug: "palladium-1kg-cast",
    metal: "palladium",
    category: "cast-bar",
    name: "1 kg Palladium Cast Bar",
    weight: "1,000 g",
    purity: "999.5",
    refiner: "Marmara-branded",
    premium: "",
    desc: "Palladium cast bar — serial-matched to certificate.",
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
