import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  policies,
  policyCategories,
  policyCodeToSlug,
  type Policy,
  type PolicyCategory,
} from "@/data/policies";
import { IconArrowRight, IconClose } from "@/components/icons/Icons";
import { useReveal } from "@/hooks/useReveal";
import styles from "./Policies.module.css";

/**
 * Policies section — 21-policy compliance library.
 *
 * Category chips filter the grid; every card opens a modal with the
 * full signed policy body (verbatim from the PDFs), including sections,
 * bullets, and the Chairman signature block.
 */
export function Policies() {
  const [active, setActive] = useState<PolicyCategory | "all">("all");
  const [open, setOpen] = useState<Policy | null>(null);
  const headRef = useReveal<HTMLDivElement>();
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(
    () => (active === "all" ? policies : policies.filter((p) => p.category === active)),
    [active]
  );

  /* Replay the grid fade when the filter changes. */
  useEffect(() => {
    if (!gridRef.current) return;
    gridRef.current.classList.remove("is-in");
    const id = requestAnimationFrame(() => gridRef.current?.classList.add("is-in"));
    return () => cancelAnimationFrame(id);
  }, [active]);

  /* Lock body scroll while the read-more modal is open + ESC to close. */
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <section className={`${styles.wrap} section`} id="compliance" aria-label="Corporate policies and compliance">
      <div className="container">
        <header ref={headRef} className={`${styles.head} reveal`}>
          <div>
            <span className="eyebrow">Compliance</span>
            <h2>
              Signed policies, <em>publicly readable.</em>
            </h2>
          </div>
          <p>
            Twenty-one corporate policies — from the Responsible Jewellery Council
            Code of Practices and OECD Due Diligence Guidance through to UAE
            Cabinet Resolution 74 / 2020 targeted financial sanctions. All
            authorised by the Chairman on 01.10.2024. Click any policy to read
            it in full.
          </p>
        </header>

        {/* Category chips */}
        <div className={styles.filters} role="tablist" aria-label="Filter policies by category">
          {policyCategories.map((c) => {
            const isActive = c.key === active;
            const count =
              c.key === "all"
                ? policies.length
                : policies.filter((p) => p.category === c.key).length;
            return (
              <button
                key={c.key}
                role="tab"
                aria-selected={isActive}
                className={`${styles.filter} ${isActive ? styles.filterActive : ""}`}
                onClick={() => setActive(c.key)}
              >
                {c.label}
                <span className={styles.filterCount}>{count}</span>
              </button>
            );
          })}
        </div>

        {/* Policy grid — each card links to its dedicated /policies/{code} page. */}
        <div ref={gridRef} className={`${styles.grid} reveal`}>
          {filtered.map((p, i) => (
            <Link
              key={p.code}
              to={`/policies/${policyCodeToSlug(p.code)}`}
              className={styles.card}
              aria-label={`Read: ${p.title}`}
            >
              <div className={styles.cardMeta}>
                <span className={styles.cardCode}>{p.code}</span>
                <span className={styles.cardIndex}>{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardSummary}>{p.summary}</p>
              <span className={styles.cardCta}>
                Read the full policy <IconArrowRight />
              </span>
            </Link>
          ))}
        </div>

        <p className={styles.footNote}>
          These policies apply to all Marmara Gold Trading LLC operations across
          the UAE. Enquiries: <a href="mailto:compliance@marmaragold.co">compliance@marmaragold.co</a>.
        </p>
      </div>

      {/* Read-more modal */}
      {open && (
        <div
          className={styles.overlay}
          role="dialog"
          aria-modal
          aria-labelledby="policy-modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(null);
          }}
        >
          <article className={styles.modal}>
            <button
              type="button"
              className={styles.modalClose}
              onClick={() => setOpen(null)}
              aria-label="Close policy"
            >
              <IconClose />
            </button>

            <div className={styles.modalMeta}>
              <span>{open.code}</span>
              <span className={styles.modalCat}>
                {policyCategories.find((c) => c.key === open.category)?.label}
              </span>
            </div>

            <h3 id="policy-modal-title" className={styles.modalTitle}>
              {open.title}
            </h3>

            <div className={styles.modalBody}>
              {open.intro && <p className={styles.modalIntro}>{open.intro}</p>}

              {open.sections.map((sec, si) => (
                <section key={si} className={styles.modalSection}>
                  {sec.heading && (
                    <h4 className={styles.modalSectionTitle}>{sec.heading}</h4>
                  )}
                  {sec.body && <p>{sec.body}</p>}
                  {sec.bullets && (
                    <ul className={styles.modalBullets}>
                      {sec.bullets.map((b, bi) => (
                        <li key={bi}>{b}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              <div className={styles.signature}>
                <div className={styles.signatureLine}>
                  <span className={styles.signatureName}>{open.signature.signatory}</span>
                  <span className={styles.signatureDate}>Date: {open.signature.date}</span>
                </div>
                <span className={styles.signatureDoc}>
                  Document: {open.code} · Issue 01 · Rev 00
                </span>
              </div>
            </div>

            <div className={styles.modalActions}>
              <a
                href="#contact"
                className="btn btn--gold"
                onClick={() => setOpen(null)}
              >
                Contact compliance <IconArrowRight />
              </a>
              <button
                type="button"
                className="btn btn--ghost-dark"
                onClick={() => setOpen(null)}
              >
                Close policy
              </button>
            </div>
          </article>
        </div>
      )}
    </section>
  );
}
