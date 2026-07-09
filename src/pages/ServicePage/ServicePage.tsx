import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { services } from "@/data/services";
import { Nav } from "@/components/Nav/Nav";
import { TopBar } from "@/components/TopBar/TopBar";
import { Footer } from "@/components/Footer/Footer";
import { IconArrowRight } from "@/components/icons/Icons";
import styles from "./ServicePage.module.css";

/**
 * Dedicated per-service detail page — one URL per service line
 * (e.g. /services/refining). Mirrors the Nadir Metal
 * /en/services/{slug} pattern: hero, sections, standards, related
 * services, contact CTA.
 */
export function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  useEffect(() => {
    if (service) {
      document.title = `${service.title} — Marmara Precious Metals Group`;
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [service]);

  if (!service) return <Navigate to="/" replace />;

  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <TopBar />
      <Nav />

      <main className={styles.wrap} id="main">
        {/* Hero */}
        <header className={styles.hero}>
          <div className="container">
            <nav className={styles.crumbs} aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to="/#services-grid">Services</Link>
              <span>/</span>
              <span aria-current="page">{service.title}</span>
            </nav>

            <div className={styles.heroGrid}>
              <div>
                <span className={styles.eyebrow}>Services</span>
                <h1 className={styles.heroTitle}>{service.title}</h1>
                <p className={styles.heroLede}>{service.hero}</p>
                <div className={styles.heroCta}>
                  <Link to="/#contact" className="btn btn--gold">
                    Contact the desk <IconArrowRight />
                  </Link>
                  {service.cta.href.startsWith("http") && (
                    <a
                      href={service.cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--ghost-dark"
                    >
                      {service.cta.label}
                    </a>
                  )}
                </div>
              </div>

              <aside className={styles.heroAside} aria-label="At a glance">
                <div className={styles.factRow}>
                  <span className={styles.factKey}>Metals covered</span>
                  <span className={styles.factVal}>{service.metals.join(" · ")}</span>
                </div>
                <div className={styles.factRow}>
                  <span className={styles.factKey}>Standards & accreditation</span>
                  <div className={styles.standards}>
                    {service.standards.map((s) => (
                      <span key={s} className={styles.standard}>{s}</span>
                    ))}
                  </div>
                </div>
                <div className={styles.factRow}>
                  <span className={styles.factKey}>Coverage window</span>
                  <span className={styles.factVal}>22 × 5 · Dubai desk · Global time-zone support</span>
                </div>
              </aside>
            </div>
          </div>
        </header>

        {/* Sections */}
        <section className={styles.body}>
          <div className="container">
            <div className={styles.sections}>
              {service.sections.map((sec, i) => (
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
          </div>
        </section>

        {/* Related services strip */}
        <section className={styles.related}>
          <div className="container">
            <h2 className={styles.relatedTitle}>Other services on the Marmara desk</h2>
            <div className={styles.relatedGrid}>
              {others.map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className={styles.relatedCard}
                >
                  <span className={styles.relatedMeta}>
                    Service · {String(services.indexOf(s) + 1).padStart(2, "0")}
                  </span>
                  <h3 className={styles.relatedH3}>{s.title}</h3>
                  <p className={styles.relatedLede}>{s.lede}</p>
                  <span className={styles.relatedCta}>
                    Read the brief <IconArrowRight />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className={styles.bottomCta}>
          <div className="container">
            <div className={styles.bottomCtaInner}>
              <div>
                <span className={styles.eyebrow}>Talk to the desk</span>
                <h2 className={styles.bottomCtaTitle}>
                  Ready to scope {service.title.toLowerCase()} for your firm?
                </h2>
                <p className={styles.bottomCtaLede}>
                  A named coverage officer will prepare a bespoke term sheet
                  covering limits, custody and settlement rails within one
                  business day of your enquiry.
                </p>
              </div>
              <div className={styles.bottomCtaActions}>
                <Link to="/#contact" className="btn btn--gold">
                  Start an inquiry <IconArrowRight />
                </Link>
                <Link to="/#compliance" className="btn btn--ghost-dark">
                  See our compliance library
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
