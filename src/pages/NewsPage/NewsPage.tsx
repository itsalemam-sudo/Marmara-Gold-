import { useEffect, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { blogs, blogCategories } from "@/data/blogs";
import { Nav } from "@/components/Nav/Nav";
import { TopBar } from "@/components/TopBar/TopBar";
import { Footer } from "@/components/Footer/Footer";
import { IconArrowRight } from "@/components/icons/Icons";
import styles from "./NewsPage.module.css";

const PER_PAGE = 12;

/** Deterministic hue offset for a colourful, cover-art-first layout. */
function seed(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) & 0xfffffff;
  return h;
}
function coverGradient(slug: string): string {
  const s = seed(slug);
  const h1 = 32 + (s % 18);
  const h2 = 210 + ((s >> 8) % 30);
  const light = 40 + ((s >> 4) % 14);
  return `linear-gradient(135deg, hsl(${h1} 62% ${light}%) 0%, hsl(${h1} 40% 24%) 42%, hsl(${h2} 50% 12%) 100%)`;
}

/** Pretty-print a YYYY-MM-DD as "12 Aug 2026". */
function formatDate(iso: string): string {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const [y, m, d] = iso.split("-");
  const mi = Number(m) - 1;
  return `${Number(d)} ${months[mi] ?? m} ${y}`;
}

/**
 * /news — Nadir-Metal-style news index. Image-first cards, category
 * chip, big serif title, date, 3-line excerpt, gold "Read more" link.
 * 12 posts per page with simple prev/next pagination. No search bar,
 * no modal — this is the news index, not a dashboard.
 */
export function NewsPage() {
  const [params, setParams] = useSearchParams();
  const activeCat = params.get("cat") ?? "All";
  const page = Math.max(1, Number(params.get("p") ?? "1"));

  useEffect(() => {
    document.title = "News & Insights — Marmara Precious Metals Group";
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [activeCat, page]);

  /** Filtered + sliced list. */
  const filtered = useMemo(
    () => (activeCat === "All" ? blogs : blogs.filter((b) => b.category === activeCat)),
    [activeCat]
  );
  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const shown = filtered.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);

  /** Update the search params without dropping the other one. */
  const setCat = (cat: string) => {
    const next = new URLSearchParams(params);
    if (cat === "All") next.delete("cat"); else next.set("cat", cat);
    next.delete("p");
    setParams(next);
  };
  const setPage = (p: number) => {
    const next = new URLSearchParams(params);
    if (p <= 1) next.delete("p"); else next.set("p", String(p));
    setParams(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
              <span aria-current="page">News</span>
            </nav>
            <span className={styles.eyebrow}>Marmara Research</span>
            <h1 className={styles.heroTitle}>News &amp; Insights</h1>
            <p className={styles.heroLede}>
              Weekly market briefs, quarterly supply-demand deep-dives, and
              central-bank / ETF flow trackers — covering the price drivers
              that matter for treasuries, mints and asset managers exposed to
              precious metals.
            </p>
          </div>
        </header>

        {/* Category chips */}
        <section className={styles.chipsWrap}>
          <div className="container">
            <div className={styles.chips} role="tablist" aria-label="Filter by category">
              {blogCategories.map((c) => (
                <button
                  key={c}
                  type="button"
                  role="tab"
                  aria-selected={c === activeCat}
                  className={`${styles.chip} ${c === activeCat ? styles.chipActive : ""}`}
                  onClick={() => setCat(c)}
                >
                  {c}
                </button>
              ))}
            </div>
            <span className={styles.count}>
              Showing {(currentPage - 1) * PER_PAGE + 1}–
              {Math.min(currentPage * PER_PAGE, filtered.length)} of{" "}
              {filtered.length.toLocaleString()}
            </span>
          </div>
        </section>

        {/* Grid */}
        <section className={styles.gridWrap}>
          <div className="container">
            <div className={styles.grid}>
              {shown.map((p) => (
                <article key={p.id} className={styles.card}>
                  <Link to={`/news?p=${currentPage}`} className={styles.cover} aria-hidden>
                    <span
                      className={styles.coverArt}
                      style={{ background: coverGradient(p.slug) }}
                    />
                    <span className={styles.catBadge}>{p.category}</span>
                    <svg
                      className={styles.coverGlyph}
                      viewBox="0 0 200 200"
                      aria-hidden
                    >
                      <circle cx="100" cy="100" r="82" fill="none" stroke="currentColor" strokeOpacity="0.35" strokeWidth="0.8"/>
                      <circle cx="100" cy="100" r="66" fill="none" stroke="currentColor" strokeOpacity="0.22" strokeWidth="0.6"/>
                      <path d="M60 138V62l40 40 40-40v76" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      <path d="M60 146h80" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
                    </svg>
                  </Link>
                  <div className={styles.body}>
                    <div className={styles.meta}>
                      <time dateTime={p.date}>{formatDate(p.date)}</time>
                      <span aria-hidden className={styles.metaDot}>·</span>
                      <span>{p.readMin} min read</span>
                    </div>
                    <h2 className={styles.title}>
                      <Link to={`/news?p=${currentPage}`}>{p.title}</Link>
                    </h2>
                    <p className={styles.excerpt}>{p.excerpt}</p>
                    <Link to={`/news?p=${currentPage}`} className={styles.readMore}>
                      Read more <IconArrowRight />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <nav className={styles.pagination} aria-label="Pagination">
                <button
                  type="button"
                  className={styles.pageBtn}
                  onClick={() => setPage(currentPage - 1)}
                  disabled={currentPage <= 1}
                  aria-label="Previous page"
                >
                  ← Previous
                </button>
                <span className={styles.pageInfo}>
                  Page <strong>{currentPage}</strong> of {totalPages}
                </span>
                <button
                  type="button"
                  className={styles.pageBtn}
                  onClick={() => setPage(currentPage + 1)}
                  disabled={currentPage >= totalPages}
                  aria-label="Next page"
                >
                  Next →
                </button>
              </nav>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
