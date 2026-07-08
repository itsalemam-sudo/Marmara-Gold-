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

/**
 * Photorealistic SVG product illustrations. No external assets — all
 * rendered with multi-stop gradients, reflection highlights, shadow
 * casts and engraved marks. Colour ramps swap by metal.
 */

type Palette = {
  base: string;      // mid tone
  hi:   string;      // highlight
  hi2:  string;      // brightest specular
  low:  string;      // deep shade
  low2: string;      // shadow
  ink:  string;      // engraving colour
};

const PALETTE: Record<CatalogProduct["metal"], Palette> = {
  gold:      { hi2: "#fff5d0", hi: "#f4d495", base: "#d4af37", low: "#a8861a", low2: "#5a3f13", ink: "#4a3410" },
  silver:    { hi2: "#ffffff", hi: "#e8ecf1", base: "#c8ced7", low: "#8a929e", low2: "#3e444d", ink: "#2a2f36" },
  platinum:  { hi2: "#f8fbff", hi: "#dee6f0", base: "#b8c3d3", low: "#7a8598", low2: "#3d4552", ink: "#2b323d" },
  palladium: { hi2: "#f4fbf6", hi: "#d4ebe0", base: "#a8ccbf", low: "#6e9a8b", low2: "#365148", ink: "#25382f" },
};

function ProductGlyph({ metal, category }: { metal: CatalogProduct["metal"]; category: CatalogProduct["category"] }) {
  if (category === "coin") return <CoinArt p={PALETTE[metal]} />;
  if (category === "minted-bar") return <MintedBarArt p={PALETTE[metal]} />;
  return <CastBarArt p={PALETTE[metal]} />;
}

/* ---------------------------------------------------------------- */
/* Cast bar — traditional pour-cast, matte, slightly rounded edges   */
/* ---------------------------------------------------------------- */
function CastBarArt({ p }: { p: Palette }) {
  const id = idFor(p);
  return (
    <svg viewBox="0 0 400 300" width="88%" height="88%" aria-hidden>
      <defs>
        {/* Front face gradient — light at top-left, dark at bottom-right */}
        <linearGradient id={`${id}-front`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor={p.hi} />
          <stop offset="40%"  stopColor={p.base} />
          <stop offset="80%"  stopColor={p.low} />
          <stop offset="100%" stopColor={p.low2} />
        </linearGradient>
        {/* Top face — bright polished */}
        <linearGradient id={`${id}-top`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor={p.hi2} />
          <stop offset="55%"  stopColor={p.hi} />
          <stop offset="100%" stopColor={p.base} />
        </linearGradient>
        {/* Side face — deep shade */}
        <linearGradient id={`${id}-side`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor={p.low} />
          <stop offset="100%" stopColor={p.low2} />
        </linearGradient>
        {/* Reflected highlight strip on the front */}
        <linearGradient id={`${id}-glare`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#ffffff" stopOpacity="0" />
          <stop offset="45%"  stopColor="#ffffff" stopOpacity="0.35" />
          <stop offset="55%"  stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        {/* Cast-ground shadow */}
        <radialGradient id={`${id}-shadow`}>
          <stop offset="0%"   stopColor="#000000" stopOpacity="0.4" />
          <stop offset="70%"  stopColor="#000000" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="200" cy="260" rx="150" ry="16" fill={`url(#${id}-shadow)`} />

      {/* Side face (right, back) */}
      <path
        d="M300 105 L360 145 L360 235 L300 195 Z"
        fill={`url(#${id}-side)`}
      />

      {/* Front face */}
      <path
        d="M60 130 L300 130 L300 220 L60 220 Z"
        fill={`url(#${id}-front)`}
      />

      {/* Top face */}
      <path
        d="M40 100 L280 100 L340 130 L100 130 Z"
        fill={`url(#${id}-top)`}
      />

      {/* Top-edge specular highlight */}
      <path
        d="M55 110 L275 110 L295 118 L75 118 Z"
        fill={p.hi2}
        opacity="0.7"
      />

      {/* Cast texture — subtle bumps on the top */}
      <g fill={p.ink} opacity="0.08">
        <ellipse cx="90"  cy="118" rx="8" ry="2" />
        <ellipse cx="130" cy="122" rx="6" ry="1.5" />
        <ellipse cx="180" cy="118" rx="10" ry="2" />
        <ellipse cx="220" cy="120" rx="7" ry="2" />
        <ellipse cx="260" cy="118" rx="9" ry="2" />
      </g>

      {/* Front-face soft highlight — a horizontal band */}
      <path
        d="M60 148 L300 148 L300 158 L60 158 Z"
        fill={`url(#${id}-glare)`}
      />

      {/* Engraved MARMARA + fineness on front */}
      <text
        x="90" y="180"
        fontFamily="'Fraunces', serif"
        fontSize="30"
        fontWeight="600"
        fill={p.ink}
        opacity="0.85"
      >
        999.9
      </text>
      <text
        x="90" y="198"
        fontFamily="'JetBrains Mono', monospace"
        fontSize="9"
        letterSpacing="3.5"
        fill={p.ink}
        opacity="0.75"
      >
        MARMARA · 1 KG · AU
      </text>
      <text
        x="90" y="210"
        fontFamily="'JetBrains Mono', monospace"
        fontSize="7"
        letterSpacing="3"
        fill={p.ink}
        opacity="0.6"
      >
        SERIAL MG · 2026 · 001
      </text>

      {/* Refiner hallmark bottom-right */}
      <g transform="translate(255, 195)">
        <circle cx="10" cy="10" r="10" fill="none" stroke={p.ink} strokeWidth="1" opacity="0.55" />
        <text
          x="10" y="14"
          textAnchor="middle"
          fontFamily="'JetBrains Mono', monospace"
          fontSize="7"
          fontWeight="700"
          fill={p.ink}
          opacity="0.75"
        >
          LBMA
        </text>
      </g>
    </svg>
  );
}

/* ---------------------------------------------------------------- */
/* Minted bar — polished mirror finish, sharper edges, tighter marks  */
/* ---------------------------------------------------------------- */
function MintedBarArt({ p }: { p: Palette }) {
  const id = idFor(p) + "m";
  return (
    <svg viewBox="0 0 400 300" width="82%" height="82%" aria-hidden>
      <defs>
        <linearGradient id={`${id}-front`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor={p.hi2} />
          <stop offset="20%"  stopColor={p.hi} />
          <stop offset="55%"  stopColor={p.base} />
          <stop offset="85%"  stopColor={p.low} />
          <stop offset="100%" stopColor={p.low2} />
        </linearGradient>
        <linearGradient id={`${id}-top`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#ffffff" />
          <stop offset="50%"  stopColor={p.hi} />
          <stop offset="100%" stopColor={p.base} />
        </linearGradient>
        <linearGradient id={`${id}-side`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor={p.low} />
          <stop offset="100%" stopColor={p.low2} />
        </linearGradient>
        <linearGradient id={`${id}-glare`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#ffffff" stopOpacity="0" />
          <stop offset="40%"  stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="60%"  stopColor="#ffffff" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <radialGradient id={`${id}-shadow`}>
          <stop offset="0%"   stopColor="#000000" stopOpacity="0.45" />
          <stop offset="70%"  stopColor="#000000" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Card shadow */}
      <ellipse cx="200" cy="265" rx="130" ry="14" fill={`url(#${id}-shadow)`} />

      {/* Sealed assay card (background rounded rect) */}
      <rect
        x="55" y="45"
        width="290" height="220"
        rx="14"
        fill="#f9f6ef"
        stroke="rgba(0,0,0,0.08)"
        strokeWidth="1"
      />
      {/* Card serial strip */}
      <rect x="55" y="45" width="290" height="24" rx="14" fill={p.low2} opacity="0.9" />
      <rect x="55" y="60" width="290" height="9" fill={p.low2} opacity="0.9" />
      <text
        x="70" y="61"
        fontFamily="'JetBrains Mono', monospace"
        fontSize="9"
        letterSpacing="3"
        fill="#ffffff"
      >
        MARMARA · CERTIFIED ASSAY
      </text>

      {/* Right side of card — assay text block */}
      <text x="250" y="105" fontFamily="'JetBrains Mono', monospace" fontSize="7.5" letterSpacing="1.6" fill="#5a5a5a">SERIAL</text>
      <text x="250" y="118" fontFamily="'Fraunces', serif" fontSize="12" fontWeight="600" fill="#0a1832">MG 2026 001</text>
      <text x="250" y="140" fontFamily="'JetBrains Mono', monospace" fontSize="7.5" letterSpacing="1.6" fill="#5a5a5a">FINENESS</text>
      <text x="250" y="153" fontFamily="'Fraunces', serif" fontSize="12" fontWeight="600" fill="#0a1832">999.9</text>
      <text x="250" y="175" fontFamily="'JetBrains Mono', monospace" fontSize="7.5" letterSpacing="1.6" fill="#5a5a5a">REFINER</text>
      <text x="250" y="188" fontFamily="'Fraunces', serif" fontSize="12" fontWeight="600" fill="#0a1832">LBMA</text>

      {/* The bar itself, sitting in the card window on the left */}
      <path
        d="M75 100 L215 100 L235 115 L95 115 Z"
        fill={`url(#${id}-top)`}
      />
      <path
        d="M215 100 L235 115 L235 225 L215 210 Z"
        fill={`url(#${id}-side)`}
      />
      <path
        d="M75 115 L215 115 L215 225 L75 225 Z"
        fill={`url(#${id}-front)`}
      />

      {/* Mirror glare across the bar front */}
      <path
        d="M75 115 L215 115 L215 225 L75 225 Z"
        fill={`url(#${id}-glare)`}
        opacity="0.7"
      />

      {/* Central engraving on the bar */}
      <text
        x="145" y="175"
        textAnchor="middle"
        fontFamily="'Fraunces', serif"
        fontSize="22"
        fontWeight="600"
        fill={p.ink}
        opacity="0.85"
      >
        M
      </text>
      <text
        x="145" y="195"
        textAnchor="middle"
        fontFamily="'JetBrains Mono', monospace"
        fontSize="7.5"
        letterSpacing="2.5"
        fill={p.ink}
        opacity="0.7"
      >
        999.9
      </text>
      <text
        x="145" y="207"
        textAnchor="middle"
        fontFamily="'JetBrains Mono', monospace"
        fontSize="6"
        letterSpacing="1.8"
        fill={p.ink}
        opacity="0.6"
      >
        MARMARA
      </text>

      {/* Card bottom serial band */}
      <rect x="55" y="240" width="290" height="25" rx="14" fill="#efeae0" />
      <rect x="55" y="240" width="290" height="12" fill="#efeae0" />
      <text
        x="70" y="257"
        fontFamily="'JetBrains Mono', monospace"
        fontSize="8"
        letterSpacing="2"
        fill="#5a5a5a"
      >
        ‖‖  ‖ ‖‖‖ ‖ ‖‖  ‖ ‖‖ ‖ ‖ ‖‖‖ ‖‖ ‖‖  ‖ ‖‖‖ ‖ ‖‖  ‖
      </text>
    </svg>
  );
}

/* ---------------------------------------------------------------- */
/* Coin — round, deep rim, mirror surface, monogram + fineness       */
/* ---------------------------------------------------------------- */
function CoinArt({ p }: { p: Palette }) {
  const id = idFor(p) + "c";
  return (
    <svg viewBox="0 0 400 300" width="72%" height="72%" aria-hidden>
      <defs>
        <radialGradient id={`${id}-face`} cx="35%" cy="30%" r="70%">
          <stop offset="0%"   stopColor={p.hi2} />
          <stop offset="30%"  stopColor={p.hi} />
          <stop offset="70%"  stopColor={p.base} />
          <stop offset="100%" stopColor={p.low2} />
        </radialGradient>
        <linearGradient id={`${id}-rim`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor={p.hi} />
          <stop offset="100%" stopColor={p.low2} />
        </linearGradient>
        <linearGradient id={`${id}-glare`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="50%"  stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <radialGradient id={`${id}-shadow`}>
          <stop offset="0%"   stopColor="#000000" stopOpacity="0.45" />
          <stop offset="70%"  stopColor="#000000" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="200" cy="270" rx="110" ry="12" fill={`url(#${id}-shadow)`} />

      {/* Rim (slightly larger circle behind the face for a real edge) */}
      <circle cx="200" cy="150" r="118" fill={`url(#${id}-rim)`} />

      {/* Ridged edge marks */}
      <g stroke={p.low2} strokeWidth="0.5" opacity="0.5">
        {Array.from({ length: 60 }).map((_, i) => {
          const angle = (i * 6 * Math.PI) / 180;
          const x1 = 200 + Math.cos(angle) * 115;
          const y1 = 150 + Math.sin(angle) * 115;
          const x2 = 200 + Math.cos(angle) * 119;
          const y2 = 150 + Math.sin(angle) * 119;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
      </g>

      {/* Coin face */}
      <circle cx="200" cy="150" r="110" fill={`url(#${id}-face)`} />

      {/* Inner ring hairline */}
      <circle cx="200" cy="150" r="95" fill="none" stroke={p.low2} strokeWidth="0.7" opacity="0.5" />
      <circle cx="200" cy="150" r="90" fill="none" stroke={p.hi2} strokeWidth="0.5" opacity="0.6" />

      {/* Outer arc text — "MARMARA GOLD TRADING LLC · DUBAI ·" */}
      <path id={`${id}-arc`} d="M 200 150 m -100 0 a 100 100 0 1 1 200 0 a 100 100 0 1 1 -200 0" fill="none" />
      <text
        fontFamily="'JetBrains Mono', monospace"
        fontSize="10"
        fontWeight="600"
        letterSpacing="3"
        fill={p.ink}
        opacity="0.85"
      >
        <textPath href={`#${id}-arc`} startOffset="0">
          · MARMARA GOLD TRADING LLC · DUBAI · MARMARA GOLD TRADING LLC · DUBAI ·
        </textPath>
      </text>

      {/* Central M monogram */}
      <g fill={p.ink} opacity="0.85">
        <path d="M155 190 L155 115 L170 115 L200 165 L230 115 L245 115 L245 190 L232 190 L232 138 L212 172 L188 172 L168 138 L168 190 Z" />
        <rect x="155" y="195" width="90" height="3.5" rx="1.5" />
      </g>

      {/* Fineness stamp under monogram */}
      <text
        x="200" y="220"
        textAnchor="middle"
        fontFamily="'Fraunces', serif"
        fontSize="15"
        fontWeight="600"
        fill={p.ink}
        opacity="0.9"
      >
        999.9
      </text>
      <text
        x="200" y="230"
        textAnchor="middle"
        fontFamily="'JetBrains Mono', monospace"
        fontSize="6"
        letterSpacing="2"
        fill={p.ink}
        opacity="0.7"
      >
        FINE
      </text>

      {/* Face specular glare — top-left */}
      <circle cx="200" cy="150" r="110" fill={`url(#${id}-glare)`} opacity="0.55" />
    </svg>
  );
}

function idFor(p: Palette) {
  return "mg-" + p.base.replace("#", "").slice(0, 6);
}
