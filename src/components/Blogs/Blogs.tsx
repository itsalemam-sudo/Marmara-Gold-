import { useEffect, useMemo, useState } from "react";
import { blogs, blogCategories, type BlogPost } from "@/data/blogs";
import { IconArrowRight, IconClose } from "@/components/icons/Icons";
import { useReveal } from "@/hooks/useReveal";
import styles from "./Blogs.module.css";

const PAGE_SIZE = 12;

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-");
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return `${months[parseInt(m, 10) - 1]} ${parseInt(d, 10)}, ${y}`;
}

function buildBody(post: BlogPost): string[] {
  // Deterministic body — combines the excerpt with a handful of
  // reusable paragraphs. Same input → same output.
  const paragraphs = [
    post.excerpt,
    `Marmara's ${post.category.toLowerCase()} team continues to see steady institutional flow into the ${post.tags[0]} desk. Premiums remain firm across regional formats and settlement windows have compressed as vaulting partners scale capacity in ${post.tags[1]}.`,
    `From an execution standpoint, real-time pricing against LBMA and LPPM benchmarks has been critical this cycle. Counterparties are asking for tighter spreads on structured programs — particularly kilo and tola formats — and we are meeting that with a widened refinery network.`,
    `Compliance is the other constant. AML/CFT screening remains embedded at every stage of onboarding, and our chain-of-custody reporting has been extended so vaulting partners and auditors can reconcile positions in near real-time.`,
    `We expect the ${post.tags[2]} theme to remain relevant over the next two quarters. Clients seeking coverage on ${post.tags[0]} — whether physical or via settlement rails — should reach out to the Marmara desk to align on limits, custody and delivery terms.`,
  ];
  return paragraphs;
}

export function Blogs() {
  const headRef = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();

  const [query,    setQuery]    = useState("");
  const [category, setCategory] = useState<string>("All");
  const [page,     setPage]     = useState(1);
  const [active,   setActive]   = useState<BlogPost | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return blogs.filter((b) => {
      if (category !== "All" && b.category !== category) return false;
      if (!q) return true;
      return (
        b.title.toLowerCase().includes(q) ||
        b.excerpt.toLowerCase().includes(q) ||
        b.tags.some((t) => t.includes(q))
      );
    });
  }, [query, category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const clampedPage = Math.min(page, totalPages);
  const start = (clampedPage - 1) * PAGE_SIZE;
  const pageItems = filtered.slice(start, start + PAGE_SIZE);

  // Reset to page 1 whenever the filter set changes.
  useEffect(() => { setPage(1); }, [query, category]);

  // Lock body scroll while the modal is open.
  useEffect(() => {
    if (!active) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setActive(null); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  const pageButtons = usePagerRange(clampedPage, totalPages);

  return (
    <section className={`${styles.wrap} section`} id="blogs" aria-label="Blogs & market insights">
      <div className="container">
        <header ref={headRef} className={`${styles.head} reveal`}>
          <div>
            <span className="eyebrow">Blogs · Insights</span>
            <h2>Market notes from the Marmara desk</h2>
          </div>
          <p>
            One thousand short, institutional-grade briefings on precious
            metals — market outlook, refining margins, custody standards,
            compliance and desk commentary. Filter by category or search
            across every entry.
          </p>
        </header>

        <div className={styles.controls}>
          <label className={styles.search}>
            <svg className={styles.searchGlyph} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.4" />
              <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
            <input
              type="search"
              placeholder="Search 1,000 articles by title, tag or theme…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search articles"
            />
          </label>
          <div className={styles.tabs} role="tablist" aria-label="Categories">
            {blogCategories.map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={c === category}
                onClick={() => setCategory(c)}
                className={`${styles.tab} ${c === category ? styles.tabActive : ""}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div ref={gridRef} className={`${styles.grid} reveal`}>
          {pageItems.map((b) => (
            <article
              key={b.id}
              className={styles.card}
              onClick={() => setActive(b)}
              onKeyDown={(e) => { if (e.key === "Enter") setActive(b); }}
              tabIndex={0}
              role="button"
              aria-label={`Read: ${b.title}`}
            >
              <div className={styles.meta}>
                <span>{formatDate(b.date)}</span>
                <span className={styles.dot}>·</span>
                <span className={styles.cat}>{b.category}</span>
              </div>
              <h3 className={styles.title}>{b.title}</h3>
              <p className={styles.excerpt}>{b.excerpt}</p>
              <div className={styles.foot}>
                <span>{b.readMin} min read</span>
                <span className={styles.read}>
                  Read <IconArrowRight />
                </span>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className={styles.count}>
            No articles match “{query}” — try clearing the filter.
          </p>
        )}

        {filtered.length > PAGE_SIZE && (
          <>
            <div className={styles.pager} aria-label="Pagination">
              <button
                type="button"
                className={styles.pageBtn}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={clampedPage <= 1}
                aria-label="Previous page"
              >
                ←
              </button>
              {pageButtons.map((p, i) =>
                p === "…"
                  ? (
                    <span key={`ell-${i}`} className={styles.pageEllipsis}>…</span>
                  )
                  : (
                    <button
                      key={p}
                      type="button"
                      className={`${styles.pageBtn} ${p === clampedPage ? styles.pageActive : ""}`}
                      onClick={() => setPage(p as number)}
                    >
                      {p}
                    </button>
                  )
              )}
              <button
                type="button"
                className={styles.pageBtn}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={clampedPage >= totalPages}
                aria-label="Next page"
              >
                →
              </button>
            </div>
            <div className={styles.count}>
              Showing {start + 1}–{Math.min(start + PAGE_SIZE, filtered.length)}{" "}
              of {filtered.length.toLocaleString()} articles
            </div>
          </>
        )}
      </div>

      {active && (
        <div
          className={styles.overlay}
          role="dialog"
          aria-modal
          aria-labelledby="blog-modal-title"
          onClick={(e) => { if (e.target === e.currentTarget) setActive(null); }}
        >
          <article className={styles.modal}>
            <button
              type="button"
              className={styles.modalClose}
              onClick={() => setActive(null)}
              aria-label="Close article"
            >
              <IconClose />
            </button>
            <div className={styles.meta}>
              <span>{formatDate(active.date)}</span>
              <span className={styles.dot}>·</span>
              <span className={styles.cat}>{active.category}</span>
              <span className={styles.dot}>·</span>
              <span>{active.author}</span>
            </div>
            <h3 id="blog-modal-title">{active.title}</h3>
            {buildBody(active).map((p, i) => <p key={i}>{p}</p>)}
          </article>
        </div>
      )}
    </section>
  );
}

/** Produces a compressed pager range like [1, "…", 4, 5, 6, "…", 84]. */
function usePagerRange(page: number, total: number): (number | "…")[] {
  return useMemo(() => {
    const range: (number | "…")[] = [];
    const window = 1;
    for (let i = 1; i <= total; i++) {
      const near = Math.abs(i - page) <= window;
      const edge = i === 1 || i === total;
      if (near || edge) range.push(i);
      else if (range[range.length - 1] !== "…") range.push("…");
    }
    return range;
  }, [page, total]);
}
