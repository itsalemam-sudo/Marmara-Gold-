import { Link } from "react-router-dom";
import { IconArrowRight } from "@/components/icons/Icons";
import { useReveal } from "@/hooks/useReveal";
import styles from "./ProductShowcase.module.css";

/**
 * Product line teaser — 5 tiles (Gold, Silver, Platinum, Palladium,
 * Coins). Each uses the hand-crafted SVG mockup as its art and links
 * to the filtered /products/{filter} page.
 */

const LINES = [
  { key: "gold",      label: "Gold Bullion",   detail: "999.9 cast + minted bars, tola biscuits, sovereign coins.", art: "/products/gold-1kg-cast.svg",      to: "/products/gold",      accent: "#c6a15b" },
  { key: "silver",    label: "Silver Bullion", detail: "1 kg cast, 100 g minted, 1 oz coins — 999 fine.",           art: "/products/silver-1kg-cast.svg",    to: "/products/silver",    accent: "#a8b0bb" },
  { key: "platinum",  label: "Platinum",       detail: "1 kg cast + 100 g minted — LPPM Good Delivery.",            art: "/products/platinum-1kg-cast.svg",  to: "/products/platinum",  accent: "#8a99b0" },
  { key: "palladium", label: "Palladium",      detail: "1 kg cast — 999.5 fine, LPPM aligned.",                     art: "/products/palladium-1kg-cast.svg", to: "/products/palladium", accent: "#7fa898" },
  { key: "coins",     label: "Bullion Coins",  detail: "1 oz sovereign coins in gold and silver.",                  art: "/products/gold-1oz-coin.svg",      to: "/products/coins",     accent: "#c6a15b" },
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
            <h2>Institutional bullion, <em>every metal.</em></h2>
          </div>
          <p>
            Gold, silver, platinum and palladium — cast bars, minted bars,
            tola biscuits and sovereign coins. Every line is KYC-only;
            request a quote and a named desk officer will price against
            live LBMA / LPPM benchmarks.
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
              <div className={styles.art}>
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
