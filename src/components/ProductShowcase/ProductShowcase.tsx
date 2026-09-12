import { Link } from "react-router-dom";
import { IconArrowRight } from "@/components/icons/Icons";
import { useReveal } from "@/hooks/useReveal";
import styles from "./ProductShowcase.module.css";

/**
 * Product line teaser — 5 tiles (Gold, Silver, Platinum, Palladium,
 * Coins). Each uses the hand-crafted SVG mockup as its art and links
 * to the filtered /products/{filter} page.
 */

/* Copy is spec-free: purity, weight and Good-Delivery claims removed
   until the exact product specification is signed off by the client.
   Rewrite each `detail` string with confirmed specs before launch.
   `photo: true` swaps the tile art to a real client-supplied photo
   at natural aspect ratio (bars are portrait, the coin is square).
   Platinum + Palladium remain on stock SVG mockups until Marmara
   supplies real product shots. */
const LINES = [
  { key: "gold",      label: "Gold Bullion",   detail: "Cast + minted bars, tola biscuits, sovereign coins.", art: "/products/marmara-gold-1kg.webp",      to: "/products/gold",      accent: "#c6a15b", photo: true  },
  { key: "silver",    label: "Silver Bullion", detail: "Cast + minted bars, sovereign coins.",                 art: "/products/marmara-silver-1kg.webp",    to: "/products/silver",    accent: "#a8b0bb", photo: true  },
  { key: "platinum",  label: "Platinum",       detail: "Cast + minted bars.",                                  art: "/products/platinum-1kg-cast.svg",      to: "/products/platinum",  accent: "#8a99b0", photo: false },
  { key: "palladium", label: "Palladium",      detail: "Investment-grade cast bars.",                          art: "/products/palladium-1kg-cast.svg",     to: "/products/palladium", accent: "#7fa898", photo: false },
  { key: "coins",     label: "Bullion Coins",  detail: "Sovereign coins in gold and silver.",                  art: "/products/marmara-silver-1oz.webp",    to: "/products/coins",     accent: "#c6a15b", photo: true  },
];

export function ProductShowcase() {
  const headRef = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();

  return (
    <section className={`${styles.wrap} section`} id="product-showcase" aria-label="Product lines">
      <div className="container">
        <header ref={headRef} className={`${styles.head} reveal`}>
          <div>
            <span className="eyebrow">Product Lines</span>
            <h2>Precious metals. <em>Refined for global markets.</em></h2>
          </div>
          <p>
            Explore Marmara&rsquo;s range of gold, silver, platinum and
            palladium products, including cast bars, minted bars and
            investment bullion.
          </p>
          <Link to="/products" className="btn btn--ghost-dark">
            See the full catalogue <IconArrowRight />
          </Link>
        </header>

        <div ref={gridRef} className={`${styles.grid} reveal`}>
          {LINES.map((l) => (
            <Link
              key={l.key}
              to={l.to}
              className={styles.card}
              style={{ ["--accent" as string]: l.accent }}
            >
              <div className={`${styles.art} ${l.photo ? styles.artPhoto : ""}`}>
                <img src={l.art} alt="" loading="lazy" />
              </div>
              <div className={styles.body}>
                <h3 className={styles.title}>{l.label}</h3>
                <p className={styles.detail}>{l.detail}</p>
                <span className={styles.cta}>Explore <IconArrowRight /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
