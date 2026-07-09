import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { catalog, catalogFilters } from "@/data/catalog";
import { Nav } from "@/components/Nav/Nav";
import { TopBar } from "@/components/TopBar/TopBar";
import { Footer } from "@/components/Footer/Footer";
import { Products } from "@/components/Products/Products";
import { IconArrowRight } from "@/components/icons/Icons";
import styles from "./ProductsPage.module.css";

/**
 * Dedicated product-category page. URL takes a filter slug (gold,
 * silver, platinum, palladium, coins, bars). Renders a hero + facts
 * strip + the Products grid pre-filtered to that category.
 */
export function ProductsPage() {
  const { filter } = useParams<{ filter?: string }>();
  const category = filter ?? "all";
  const cat = catalogFilters.find((c) => c.key === category);

  useEffect(() => {
    const label = cat?.label ?? "All Products";
    document.title = `${label} — Marmara Precious Metals Group`;
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [cat]);

  if (!cat) return <Navigate to="/products" replace />;

  const products = catalog.filter(cat.match);
  const totalMass = products.reduce((sum, p) => {
    const g = parseFloat(p.weight.replace(/[^\d.]/g, ""));
    return sum + (isNaN(g) ? 0 : g);
  }, 0);

  const heroCopy = HERO_COPY[category] ?? HERO_COPY.all;

  return (
    <>
      <TopBar />
      <Nav />

      <main className={styles.wrap} id="main">
        <header className={styles.hero}>
          <div className="container">
            <nav className={styles.crumbs} aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to="/products">Product</Link>
              {category !== "all" && (
                <>
                  <span>/</span>
                  <span aria-current="page">{cat.label}</span>
                </>
              )}
            </nav>

            <div className={styles.heroGrid}>
              <div>
                <span className={styles.eyebrow}>Product · {cat.label}</span>
                <h1 className={styles.heroTitle}>{heroCopy.title}</h1>
                <p className={styles.heroLede}>{heroCopy.lede}</p>
                <div className={styles.heroCta}>
                  <Link to="/#contact" className="btn btn--gold">
                    Request a quote <IconArrowRight />
                  </Link>
                  <a
                    href="https://marmara.ntptrader.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--ghost-dark"
                  >
                    Trade on barX
                  </a>
                </div>
              </div>

              <aside className={styles.heroAside}>
                <div className={styles.factRow}>
                  <span className={styles.factKey}>Products in this line</span>
                  <span className={styles.factVal}>{products.length}</span>
                </div>
                <div className={styles.factRow}>
                  <span className={styles.factKey}>Aggregate mass on display</span>
                  <span className={styles.factVal}>{formatMass(totalMass)}</span>
                </div>
                <div className={styles.factRow}>
                  <span className={styles.factKey}>Refiner standard</span>
                  <span className={styles.factVal}>{heroCopy.standard}</span>
                </div>
                <div className={styles.factRow}>
                  <span className={styles.factKey}>Onboarding</span>
                  <span className={styles.factVal}>KYC-first · DMCC-licensed DPMS</span>
                </div>
              </aside>
            </div>
          </div>
        </header>

        {/* Category chips */}
        <section className={styles.chipsSection}>
          <div className="container">
            <div className={styles.chips} role="tablist" aria-label="Filter product line">
              {catalogFilters.map((c) => (
                <Link
                  key={c.key}
                  to={c.key === "all" ? "/products" : `/products/${c.key}`}
                  className={`${styles.chip} ${c.key === category ? styles.chipActive : ""}`}
                  role="tab"
                  aria-selected={c.key === category}
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* The catalog grid — reuse the existing Products component but scoped */}
        <Products />
      </main>

      <Footer />
    </>
  );
}

const HERO_COPY: Record<string, { title: string; lede: string; standard: string }> = {
  all: {
    title: "Institutional bullion — cast, minted, coined.",
    lede:
      "Twelve investment-grade bullion products spanning gold, silver, platinum and palladium — cast bars, minted bars, tola bars and sovereign coins. Every line is KYC-only: request a quote and a named desk officer will price against live LBMA / LPPM benchmarks.",
    standard: "LBMA & LPPM Good Delivery-aligned",
  },
  gold: {
    title: "Gold bullion — 999.9 fine, LBMA-aligned.",
    lede:
      "Cast kilo bars, minted 100 g and 50 g cards, the 10-tola biscuit for the Gulf and South Asia market, and 1 oz sovereign coins. All routed through LBMA Good-Delivery refiners with full RJC Chain-of-Custody documentation.",
    standard: "LBMA Good Delivery",
  },
  silver: {
    title: "Silver bullion — 999 fine, wholesale to retail.",
    lede:
      "Institutional 1 kg cast bars, 100 g minted bars in sealed assay cards, and 1 oz coins in tubes of 25 or monster boxes of 500. LBMA Good Delivery-aligned; assay-based settlement on scrap and semi-refined material.",
    standard: "LBMA Good Delivery",
  },
  platinum: {
    title: "Platinum — LPPM Good Delivery.",
    lede:
      "Cast kilo bars for reserves and industrial buyers, plus 100 g minted bars in sealed assay cards for HNW allocation. All 999.5 fine, LPPM Good Delivery-aligned, with responsibly-refined provenance.",
    standard: "LPPM Good Delivery",
  },
  palladium: {
    title: "Palladium — 999.5 fine, LPPM aligned.",
    lede:
      "1 kg cast bars for industrial catalysts, jewellery alloy and reserves. Responsibly-refined material with LPPM Good Delivery accreditation and full chain-of-custody documentation.",
    standard: "LPPM Good Delivery",
  },
  coins: {
    title: "Sovereign bullion coins.",
    lede:
      "1 oz gold and silver bullion coins in the Britannia / Maple / Philharmonic tradition — legal tender in the issuing jurisdiction, distributed by tube or monster box, priced spot plus premium.",
    standard: "Sovereign mints",
  },
  bars: {
    title: "Cast and minted bars.",
    lede:
      "Investment-grade cast bars (traditional pour-cast finish) and minted bars (mirror-polish struck) across gold, silver, platinum and palladium — the standard formats for institutional allocation, treasury reserves and vault storage.",
    standard: "LBMA / LPPM Good Delivery",
  },
};

function formatMass(g: number): string {
  if (g >= 1000) return `${(g / 1000).toFixed(2)} kg`;
  return `${g.toLocaleString()} g`;
}
