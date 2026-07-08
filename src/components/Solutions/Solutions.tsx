import { useEffect, useRef, useState } from "react";
import { segments } from "@/data/solutions";
import { useReveal } from "@/hooks/useReveal";
import styles from "./Solutions.module.css";

export function Solutions() {
  const [active, setActive] = useState(0);
  const headRef = useReveal<HTMLDivElement>();
  const panelRef = useRef<HTMLDivElement>(null);
  const activeSegment = segments[active];

  /* When active changes, re-run the reveal on the panel by removing
     the .is-in class so the fade repeats. This is a UX polish only —
     content is always visible even without the class. */
  useEffect(() => {
    if (!panelRef.current) return;
    panelRef.current.classList.remove("is-in");
    const id = requestAnimationFrame(() => {
      panelRef.current?.classList.add("is-in");
    });
    return () => cancelAnimationFrame(id);
  }, [active]);

  return (
    <section className={`${styles.wrap} section`} id="services" aria-label="Solutions by client segment">
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
            trading integration.
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
              <article key={sol.title} className={styles.item}>
                <div className={styles.item__meta}>
                  Solution · {String(i + 1).padStart(2, "0")}
                </div>
                <h4 className={styles.item__title}>{sol.title}</h4>
                <p className={styles.item__body}>{sol.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
