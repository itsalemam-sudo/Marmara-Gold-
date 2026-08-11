import { Link } from "react-router-dom";
import { blogs } from "@/data/blogs";
import { IconArrowRight } from "@/components/icons/Icons";
import { useReveal } from "@/hooks/useReveal";
import styles from "./NewsTeaser.module.css";

/**
 * News teaser — surfaces the three latest posts on the homepage as
 * bold image cards, then links to the full /news index. Mirrors
 * Nadir Metal's homepage news band. Cover art is generated from a
 * gold-tone SVG gradient per post; when real cover images are
 * added they can override via post.cover.
 */

/** Simple hash → deterministic hue offset for cover art variety. */
function seed(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) & 0xfffffff;
  return h;
}

/** A CSS gradient generated per-post so every card looks distinct. */
function coverGradient(slug: string): string {
  const s = seed(slug);
  const h1 = 32 + (s % 18);           // warm gold hue window
  const h2 = 210 + ((s >> 8) % 30);   // deep navy hue window
  const light = 42 + ((s >> 4) % 12);
  return `linear-gradient(135deg, hsl(${h1} 62% ${light}%) 0%, hsl(${h1} 42% 26%) 40%, hsl(${h2} 52% 14%) 100%)`;
}

export function NewsTeaser() {
  const headRef = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();

  const latest = blogs.slice(0, 3);

  return (
    <section className={`${styles.wrap} section`} id="news-teaser" aria-label="Latest news and insights">
      <div className="container">
        <header ref={headRef} className={`${styles.head} reveal`}>
          <div>
            <span className="eyebrow">News &amp; Insights</span>
            <h2>Straight from the <em>Marmara research desk.</em></h2>
          </div>
          <p>
            Weekly market briefs, quarterly supply-demand deep-dives, and
            central-bank / ETF flow trackers — covering the price drivers
            that matter for treasuries, mints and asset managers.
          </p>
          <Link to="/news" className="btn btn--ghost-dark">
            All news &amp; insights <IconArrowRight />
          </Link>
        </header>

        <div ref={gridRef} className={`${styles.grid} reveal`}>
          {latest.map((p) => (
            <Link key={p.id} to="/news" className={styles.card}>
              <div
                className={styles.cover}
                style={{ background: coverGradient(p.slug) }}
                aria-hidden
              >
                <span className={styles.coverBadge}>{p.category}</span>
                <svg
                  className={styles.coverGlyph}
                  viewBox="0 0 200 200"
                  aria-hidden
                >
                  <circle cx="100" cy="100" r="82" fill="none" stroke="currentColor" strokeOpacity="0.4" strokeWidth="0.8"/>
                  <circle cx="100" cy="100" r="66" fill="none" stroke="currentColor" strokeOpacity="0.25" strokeWidth="0.6"/>
                  <path d="M60 138V62l40 40 40-40v76" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <path d="M60 146h80" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className={styles.body}>
                <div className={styles.meta}>
                  <time dateTime={p.date}>{p.date}</time>
                  <span className={styles.metaDot} aria-hidden>·</span>
                  <span>{p.readMin} min read</span>
                </div>
                <h3 className={styles.title}>{p.title}</h3>
                <p className={styles.excerpt}>{p.excerpt}</p>
                <span className={styles.cta}>Read the brief <IconArrowRight /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
