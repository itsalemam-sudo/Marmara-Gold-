import { Link } from "react-router-dom";
import type { SVGProps } from "react";
import { IconArrowRight } from "@/components/icons/Icons";
import { useReveal } from "@/hooks/useReveal";
import styles from "./Pillars.module.css";

/**
 * Four-pillar corporate strip — sits directly under the hero.
 * Mirrors Nadir Metal's home-page pattern of surfacing the core
 * capabilities before any content section.
 */

const iconProps = {
  width: 32, height: 32, viewBox: "0 0 24 24",
  fill: "none", stroke: "currentColor", strokeWidth: 1.35,
  strokeLinecap: "round", strokeLinejoin: "round",
} satisfies SVGProps<SVGSVGElement>;

const RefiningIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}><path d="M12 2c1 3 4 5 4 9a4 4 0 11-8 0c0-1 .5-2 1.2-3-.2 2 .8 3 1.8 3-.5-3 .8-6 1-9z"/><path d="M6 21h12"/></svg>
);
const TradingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}><path d="M3 20V4M3 20h18"/><path d="M6 16l4-5 4 4 6-8"/><circle cx="20" cy="7" r="1.4" fill="currentColor" stroke="none"/></svg>
);
const ComplianceIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}><path d="M12 3l8 3v6c0 4-3 8-8 9-5-1-8-5-8-9V6l8-3z"/><path d="M8.5 12l2.5 2.5L15.5 10"/></svg>
);
const SustainabilityIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}><path d="M7 21c0-7 5-11 12-11-1 7-5 11-12 11z"/><path d="M7 21c0-4 2-7 5-9"/></svg>
);

const PILLARS = [
  { icon: RefiningIcon,       eyebrow: "01", title: "Refining",       body: "Client material routed to LBMA / LPPM Good-Delivery accredited refineries — 999.9 gold, 999 silver, 999.5 PGMs.", to: "/services/refining" },
  { icon: TradingIcon,        eyebrow: "02", title: "Trading",        body: "Institutional streaming quotes on gold, silver, platinum and palladium via barX — 22×5 coverage, REST + WebSocket API.", to: "/services/trading" },
  { icon: ComplianceIcon,     eyebrow: "03", title: "Compliance",     body: "Twenty-one signed corporate policies — RJC Code of Practices, OECD Due Diligence, UAE Cabinet Resolution 74 TFS.", to: "/#compliance" },
  { icon: SustainabilityIcon, eyebrow: "04", title: "Sustainability", body: "ISO 14001-aligned environmental practices; responsibly-sourced material with full RJC Chain-of-Custody documentation.", to: "/policies/mgt-pol-com-06" },
];

export function Pillars() {
  const gridRef = useReveal<HTMLDivElement>();

  return (
    <section className={styles.wrap} aria-label="Core capabilities">
      <div className="container">
        <div ref={gridRef} className={`${styles.grid} reveal`}>
          {PILLARS.map((p) => {
            const Ico = p.icon;
            return (
              <Link key={p.title} to={p.to} className={styles.card}>
                <span className={styles.ico}><Ico /></span>
                <span className={styles.eyebrow}>{p.eyebrow}</span>
                <h3 className={styles.title}>{p.title}</h3>
                <p className={styles.body}>{p.body}</p>
                <span className={styles.cta}>Learn more <IconArrowRight /></span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
