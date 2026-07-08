import { useMemo, useState } from "react";
import {
  catalog,
  catalogFilters,
  type CatalogProduct,
} from "@/data/catalog";
import { IconArrowRight } from "@/components/icons/Icons";
import { useReveal } from "@/hooks/useReveal";
import styles from "./Products.module.css";

/**
 * Product tile with graceful fallback:
 * - Try to load /products/{slug}.jpg (or .png). Vite serves anything
 *   dropped in public/products/ at that path.
 * - If the image errors out, hide it and show the SVG glyph instead.
 * Drop real photos in public/products/{slug}.jpg to swap the SVG.
 */
function ProductImage({ product }: { product: CatalogProduct }) {
  const [errored, setErrored] = useState(false);
  const src = `/products/${product.slug}.jpg`;
  if (errored) return <ProductGlyph metal={product.metal} category={product.category} />;
  return (
    <img
      src={src}
      alt={product.name}
      loading="lazy"
      onError={() => setErrored(true)}
      className={styles.photo}
    />
  );
}

/**
 * Products / bullion catalogue.
 *
 * Bullion sales are KYC-regulated, so we don't run a real cart /
 * checkout. Every product's CTA is a "Request Quote" that scrolls
 * to the inquiry form with the product name pre-selected — the
 * ContactForm reads a URL hash like #contact?product=slug and
 * fills the "Metals of interest" + subject accordingly.
 */
export function Products() {
  const headRef = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();
  const [filter, setFilter] = useState("all");

  const shown = useMemo(() => {
    const f = catalogFilters.find((x) => x.key === filter);
    return f ? catalog.filter(f.match) : catalog;
  }, [filter]);

  const requestQuote = (p: CatalogProduct) => {
    // Update the URL hash so ContactForm can read it, then scroll.
    const hash = `#contact?product=${encodeURIComponent(p.slug)}`;
    history.replaceState(null, "", hash);
    // Fire a custom event so ContactForm picks up the change even if
    // the hash didn't change.
    window.dispatchEvent(new CustomEvent("mg:quote-request", { detail: p }));
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={`${styles.wrap} section`} id="products" aria-label="Bullion catalogue">
      <div className="container">
        <header ref={headRef} className={`${styles.head} reveal`}>
          <div>
            <span className="eyebrow">Products · Catalogue</span>
            <h2>
              Institutional bullion, <em>ready to price.</em>
            </h2>
          </div>
          <p>
            Twelve of Marmara's core physical bullion products across gold,
            silver, platinum and palladium — cast bars, minted bars, tola bars
            and sovereign coins. Every line is KYC-only: request a quote and a
            named desk will price against live LBMA/LPPM benchmarks.
          </p>
        </header>

        <div className={styles.filters} role="tablist" aria-label="Filter products">
          {catalogFilters.map((f) => (
            <button
              key={f.key}
              type="button"
              role="tab"
              aria-selected={filter === f.key}
              className={`${styles.filter} ${filter === f.key ? styles.filterActive : ""}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div ref={gridRef} className={`${styles.grid} reveal`}>
          {shown.map((p) => (
            <article key={p.slug} className={styles.card}>
              <div className={`${styles.tile} ${styles["tile--" + p.metal] ?? ""}`}>
                <ProductImage product={p} />
                <span className={styles.tileMark}>
                  {p.metal === "gold" ? "Au" : p.metal === "silver" ? "Ag"
                    : p.metal === "platinum" ? "Pt" : "Pd"} · {p.purity}
                </span>
              </div>
              <div className={styles.body}>
                <h3 className={styles.name}>{p.name}</h3>
                <p className={styles.desc}>{p.desc}</p>
                <div className={styles.specs}>
                  <span className={styles.specK}>Weight</span>
                  <span className={styles.specV}>{p.weight}</span>
                  <span className={styles.specK}>Purity</span>
                  <span className={styles.specV}>{p.purity}</span>
                  <span className={styles.specK}>Refiner</span>
                  <span className={styles.specV}>{p.refiner}</span>
                </div>
              </div>
              <div className={styles.foot}>
                <span className={styles.premium}>{p.premium}</span>
                <button
                  type="button"
                  className={styles.rfq}
                  onClick={() => requestQuote(p)}
                  aria-label={`Request quote for ${p.name}`}
                >
                  Request Quote <IconArrowRight />
                </button>
              </div>
            </article>
          ))}
        </div>

        <p className={styles.disclaimer}>
          KYC-verified onboarding required · Prices quoted against live LBMA / LPPM
        </p>
      </div>
    </section>
  );
}

/* --- Small illustrative glyphs on each product tile --- */
function ProductGlyph({ metal, category }: { metal: CatalogProduct["metal"]; category: CatalogProduct["category"] }) {
  const stroke = metal === "gold" ? "#8f6a2a" : metal === "silver" ? "#4a5566" : metal === "platinum" ? "#5a6c85" : "#3b6b5b";
  const fill   = metal === "gold" ? "#f4d495" : metal === "silver" ? "#dfe3ea" : metal === "platinum" ? "#dbe3ee" : "#c6e2d7";

  if (category === "coin") {
    return (
      <svg viewBox="0 0 200 150" width="70%" height="70%" aria-hidden>
        <ellipse cx="100" cy="82" rx="52" ry="10" fill={stroke} opacity="0.25" />
        <circle cx="100" cy="70" r="52" fill={fill} stroke={stroke} strokeWidth="2" />
        <circle cx="100" cy="70" r="44" fill="none" stroke={stroke} strokeWidth="0.8" opacity="0.5" />
        <text x="100" y="66" textAnchor="middle"
          fontFamily="'Fraunces', serif" fontSize="30" fontWeight="600" fill={stroke}>M</text>
        <text x="100" y="82" textAnchor="middle"
          fontFamily="'JetBrains Mono', monospace" fontSize="9" letterSpacing="2" fill={stroke} opacity="0.75">999.9</text>
      </svg>
    );
  }

  // Isometric bar
  return (
    <svg viewBox="0 0 200 150" width="72%" height="72%" aria-hidden>
      <ellipse cx="100" cy="118" rx="68" ry="6" fill={stroke} opacity="0.2" />
      {/* Side face */}
      <path d="M150 65 L175 78 L175 108 L150 95 Z" fill={stroke} opacity="0.55" />
      {/* Front face */}
      <path d="M40 78 L150 78 L150 108 L40 108 Z" fill={fill} stroke={stroke} strokeWidth="1" />
      {/* Top face */}
      <path d="M25 65 L135 65 L150 78 L40 78 Z" fill={fill} opacity="0.9" stroke={stroke} strokeWidth="1" />
      <text x="60" y="97"
        fontFamily="'Fraunces', serif" fontSize="14" fontWeight="600" fill={stroke} opacity="0.85">999.9</text>
      <text x="60" y="105"
        fontFamily="'JetBrains Mono', monospace" fontSize="5.5" letterSpacing="1.5" fill={stroke} opacity="0.7">MARMARA</text>
    </svg>
  );
}
