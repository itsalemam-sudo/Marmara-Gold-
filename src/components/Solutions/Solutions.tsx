import { useEffect, useRef, useState } from "react";
import { segments, type Segment, type Solution } from "@/data/solutions";
import { IconArrowRight, IconClose } from "@/components/icons/Icons";
import { useReveal } from "@/hooks/useReveal";
import styles from "./Solutions.module.css";

/**
 * Compose an expanded read for a solution by weaving the short detail
 * with segment-appropriate boilerplate. Deterministic — the same
 * (segment, solution) pair always produces the same body.
 */
function buildFullRead(segment: Segment, solution: Solution): string[] {
  return [
    solution.detail,
    `Within Marmara's ${segment.segment.toLowerCase()} coverage, this line runs off our Dubai desk with dedicated coverage in the region's time zone. Onboarding is KYC-first, with clear AML/CFT screening before any RFQ is priced.`,
    `Execution is against live LBMA and LPPM benchmarks. We book against a single institutional counterparty relationship — no marketplace intermediaries — and settlement rails support AED, USD and EUR with same-day and T+1 options depending on the metal and delivery route.`,
    `Reporting is built for treasuries and auditors: every position reconciled daily, chain-of-custody documented for stored inventory, and price/volume audit trails held for the retention windows required by UAE regulation and international standards (RJC Chain of Custody, OECD Due Diligence Guidance).`,
    `Ready to scope this for your desk? The Marmara coverage team will walk you through limits, custody and delivery terms and prepare a bespoke term sheet.`,
  ];
}

export function Solutions() {
  const [active, setActive] = useState(0);
  const [openSolution, setOpenSolution] = useState<{ segment: Segment; solution: Solution; index: number } | null>(null);
  const headRef = useReveal<HTMLDivElement>();
  const panelRef = useRef<HTMLDivElement>(null);
  const activeSegment = segments[active];

  /* Replay the panel fade when the tab changes. */
  useEffect(() => {
    if (!panelRef.current) return;
    panelRef.current.classList.remove("is-in");
    const id = requestAnimationFrame(() => {
      panelRef.current?.classList.add("is-in");
    });
    return () => cancelAnimationFrame(id);
  }, [active]);

  /* Lock body scroll while the read-more modal is open + ESC to close. */
  useEffect(() => {
    if (!openSolution) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenSolution(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [openSolution]);

  return (
    <section className={`${styles.wrap} section`} id="solutions" aria-label="Solutions by client segment">
      <div className="container">
        <header ref={headRef} className={`${styles.head} reveal`}>
          <div>
            <span className="eyebrow">Solutions</span>
            <h2>
              Coverage that fits <em>every counterparty.</em>
            </h2>
          </div>
          <p>
            Every Marmara desk is built for a specific institutional profile.
            Pick a segment to see the four solutions our team runs for it — from
            doré sourcing and offtake to sovereign supply, custody and API
            trading integration. Click any solution to read the full brief.
          </p>
        </header>

        {/* Tabs */}
        <div className={styles.tabsWrap}>
          <div className={styles.tabs} role="tablist" aria-label="Client segments">
            {segments.map((s, i) => {
              const isActive = i === active;
              return (
                <button
                  key={s.key}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${s.key}`}
                  id={`tab-${s.key}`}
                  tabIndex={isActive ? 0 : -1}
                  className={`${styles.tab} ${isActive ? styles.tabActive : ""}`}
                  onClick={() => setActive(i)}
                >
                  <span className={styles.tab__idx}>{String(i + 1).padStart(2, "0")}</span>
                  {s.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active panel */}
        <div
          key={activeSegment.key}
          ref={panelRef}
          className={`${styles.panel} reveal`}
          id={`panel-${activeSegment.key}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeSegment.key}`}
        >
          <div className={styles.panelHead}>
            <h3 className={styles.segment}>{activeSegment.segment}</h3>
            <p className={styles.segmentIntro}>{activeSegment.intro}</p>
          </div>

          <div className={styles.grid}>
            {activeSegment.solutions.map((sol, i) => (
              <button
                key={sol.title}
                type="button"
                className={styles.item}
                onClick={() => setOpenSolution({ segment: activeSegment, solution: sol, index: i })}
                aria-label={`Read full brief: ${sol.title}`}
              >
                <div className={styles.item__meta}>
                  Solution · {String(i + 1).padStart(2, "0")}
                </div>
                <h4 className={styles.item__title}>{sol.title}</h4>
                <p className={styles.item__body}>{sol.detail}</p>
                <span className={styles.itemCta}>
                  Read the full brief <IconArrowRight />
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Read-more modal */}
      {openSolution && (
        <div
          className={styles.overlay}
          role="dialog"
          aria-modal
          aria-labelledby="solution-modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpenSolution(null);
          }}
        >
          <article className={styles.modal}>
            <button
              type="button"
              className={styles.modalClose}
              onClick={() => setOpenSolution(null)}
              aria-label="Close brief"
            >
              <IconClose />
            </button>

            <div className={styles.modalMeta}>
              <span>Solution · {String(openSolution.index + 1).padStart(2, "0")}</span>
              <span className={styles.segment}>{openSolution.segment.segment}</span>
            </div>

            <h3 id="solution-modal-title" className={styles.modalTitle}>
              {openSolution.solution.title}
            </h3>

            <div className={styles.modalBody}>
              {buildFullRead(openSolution.segment, openSolution.solution).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className={styles.modalActions}>
              <a
                href={`#contact?intent=${encodeURIComponent(openSolution.solution.title)}`}
                className="btn btn--gold"
                onClick={() => setOpenSolution(null)}
              >
                Contact the desk <IconArrowRight />
              </a>
              <a
                href="#services-grid"
                className="btn btn--ghost-dark"
                onClick={() => setOpenSolution(null)}
              >
                See all services
              </a>
            </div>
          </article>
        </div>
      )}
    </section>
  );
}
