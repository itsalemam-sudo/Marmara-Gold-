import type { SVGProps } from "react";
import { Link } from "react-router-dom";
import { services, type ServiceIcon } from "@/data/services";
import { IconArrowRight } from "@/components/icons/Icons";
import { useReveal } from "@/hooks/useReveal";
import styles from "./Services.module.css";

/* --- Service tile icons (thin-stroke, gold via currentColor) --- */
const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} satisfies SVGProps<SVGSVGElement>;

const Icon: Record<ServiceIcon, () => React.JSX.Element> = {
  cart: () => (
    <svg {...iconProps} aria-hidden>
      <path d="M3 4h2l2.5 11.5a2 2 0 002 1.5h8.5a2 2 0 002-1.5L21.5 8H6" />
      <circle cx="9" cy="20" r="1.4" />
      <circle cx="17" cy="20" r="1.4" />
    </svg>
  ),
  recycle: () => (
    <svg {...iconProps} aria-hidden>
      <path d="M4 12a8 8 0 0114-5" />
      <path d="M20 12a8 8 0 01-14 5" />
      <path d="M4 4v4h4" />
      <path d="M20 20v-4h-4" />
    </svg>
  ),
  flame: () => (
    <svg {...iconProps} aria-hidden>
      <path d="M12 2c1 3 4 5 4 9a4 4 0 11-8 0c0-1 .5-2 1.2-3-.2 2 .8 3 1.8 3-.5-3 .8-6 1-9z" />
    </svg>
  ),
  vault: () => (
    <svg {...iconProps} aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 8v-1M12 17v-1M8 12H7M17 12h-1" />
    </svg>
  ),
  chart: () => (
    <svg {...iconProps} aria-hidden>
      <path d="M3 20V4M3 20h18" />
      <path d="M6 16l4-5 4 4 6-8" />
      <circle cx="20" cy="7" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  ),
  beaker: () => (
    <svg {...iconProps} aria-hidden>
      <path d="M9 3v6l-5 9a2 2 0 001.8 3h12.4A2 2 0 0020 18l-5-9V3" />
      <path d="M9 3h6M7.5 14h9" />
    </svg>
  ),
};

/**
 * Services grid — each card is a <Link> to /services/{slug}, the
 * dedicated per-service detail page (Nadir-Metal-style pattern).
 * Clicking anywhere on the card navigates to the full page.
 */
export function Services() {
  const headRef = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();

  return (
    <section className={`${styles.wrap} section`} id="services-grid" aria-label="Precious metals services">
      <div className="container">
        <header ref={headRef} className={`${styles.head} reveal`}>
          <span className="eyebrow">Services</span>
          <h2>Explore our Precious Metals Services</h2>
          <p>
            End-to-end coverage for institutional buyers, sellers, refiners and
            custodians — six service lines that make up the Marmara desk. Click
            any service to open its dedicated page.
          </p>
        </header>

        <div ref={gridRef} className={`${styles.grid} reveal`}>
          {services.map((s) => {
            const GlyphComponent = Icon[s.icon];
            return (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className={styles.card}
                aria-label={`Read: ${s.title}`}
              >
                <span className={styles.ico}><GlyphComponent /></span>
                <h3 className={styles.title}>{s.title}</h3>
                <p className={styles.lede}>{s.lede}</p>
                <ul className={styles.bullets}>
                  {s.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
                <span className={styles.cta}>
                  Read more <IconArrowRight />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
