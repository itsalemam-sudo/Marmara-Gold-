import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { policies, policyCategories, policyCodeToSlug } from "@/data/policies";
import { Nav } from "@/components/Nav/Nav";
import { TopBar } from "@/components/TopBar/TopBar";
import { Footer } from "@/components/Footer/Footer";
import { IconArrowRight } from "@/components/icons/Icons";
import styles from "./PolicyPage.module.css";

/**
 * One dedicated page per signed policy — 21 total. Mirrors the
 * Nadir Metal /en/compliance/{slug} pattern: breadcrumb, hero with
 * policy code + title + summary, aside with category + doc metadata,
 * body sections (intro + headings + bullets + Chairman signature),
 * related policies in the same category, bottom CTA.
 */
export function PolicyPage() {
  const { code } = useParams<{ code: string }>();
  const policy = policies.find((p) => policyCodeToSlug(p.code) === code);

  useEffect(() => {
    if (policy) {
      document.title = `${policy.title} — Marmara Precious Metals Group`;
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [policy]);

  if (!policy) return <Navigate to="/#compliance" replace />;

  const catLabel = policyCategories.find((c) => c.key === policy.category)?.label ?? "Governance";
  const related = policies
    .filter((p) => p.category === policy.category && p.code !== policy.code)
    .slice(0, 3);

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
              <Link to="/#compliance">Compliance</Link>
              <span>/</span>
              <span aria-current="page">{policy.title}</span>
            </nav>

            <div className={styles.heroGrid}>
              <div>
                <span className={styles.eyebrow}>{policy.code}</span>
                <h1 className={styles.heroTitle}>{policy.title}</h1>
                <p className={styles.heroLede}>{policy.summary}</p>
                <div className={styles.heroCta}>
                  <Link to="/#contact" className="btn btn--gold">
                    Contact compliance <IconArrowRight />
                  </Link>
                  <Link to="/#compliance" className="btn btn--ghost-dark">
                    Back to compliance library
                  </Link>
                </div>
              </div>

              <aside className={styles.heroAside} aria-label="Document details">
                <div className={styles.factRow}>
                  <span className={styles.factKey}>Category</span>
                  <span className={styles.factVal}>{catLabel}</span>
                </div>
                <div className={styles.factRow}>
                  <span className={styles.factKey}>Document</span>
                  <span className={styles.factVal}>{policy.code}</span>
                </div>
                <div className={styles.factRow}>
                  <span className={styles.factKey}>Issue / Revision</span>
                  <span className={styles.factVal}>Issue 01 · Rev 00</span>
                </div>
                <div className={styles.factRow}>
                  <span className={styles.factKey}>Signatory</span>
                  <span className={styles.factVal}>{policy.signature.signatory}</span>
                </div>
                <div className={styles.factRow}>
                  <span className={styles.factKey}>Date</span>
                  <span className={styles.factVal}>{policy.signature.date}</span>
                </div>
              </aside>
            </div>
          </div>
        </header>

        <section className={styles.body}>
          <div className="container">
            {policy.intro && <p className={styles.intro}>{policy.intro}</p>}

            <div className={styles.sections}>
              {policy.sections.map((sec, i) => (
                <article key={i} className={styles.section}>
                  {sec.heading && <h2 className={styles.sectionTitle}>{sec.heading}</h2>}
                  {sec.body && <p className={styles.sectionBody}>{sec.body}</p>}
                  {sec.bullets && (
                    <ul className={styles.bullets}>
                      {sec.bullets.map((b, bi) => <li key={bi}>{b}</li>)}
                    </ul>
                  )}
                </article>
              ))}
            </div>

            <div className={styles.signature}>
              <div className={styles.signatureLine}>
                <span className={styles.signatureName}>{policy.signature.signatory}</span>
                <span className={styles.signatureDate}>Date: {policy.signature.date}</span>
              </div>
              <span className={styles.signatureDoc}>Document: {policy.code} · Issue 01 · Rev 00</span>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className={styles.related}>
            <div className="container">
              <h2 className={styles.relatedTitle}>Related policies in {catLabel.toLowerCase()}</h2>
              <div className={styles.relatedGrid}>
                {related.map((p) => (
                  <Link
                    key={p.code}
                    to={`/policies/${policyCodeToSlug(p.code)}`}
                    className={styles.relatedCard}
                  >
                    <span className={styles.relatedMeta}>{p.code}</span>
                    <h3 className={styles.relatedH3}>{p.title}</h3>
                    <p className={styles.relatedLede}>{p.summary}</p>
                    <span className={styles.relatedCta}>Read the full policy <IconArrowRight /></span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className={styles.bottomCta}>
          <div className="container">
            <div className={styles.bottomCtaInner}>
              <div>
                <span className={styles.eyebrow}>Compliance enquiries</span>
                <h2 className={styles.bottomCtaTitle}>
                  Questions about this policy or our compliance library?
                </h2>
                <p className={styles.bottomCtaLede}>
                  The compliance desk answers every enquiry within one business
                  day. All 21 corporate policies are available on the compliance
                  library, and audit copies are provided under NDA on request.
                </p>
              </div>
              <div className={styles.bottomCtaActions}>
                <a href="mailto:compliance@marmaragold.co" className="btn btn--gold">
                  Email compliance <IconArrowRight />
                </a>
                <Link to="/#compliance" className="btn btn--ghost-dark">
                  Browse all 21 policies
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
