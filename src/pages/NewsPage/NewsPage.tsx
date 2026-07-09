import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Nav } from "@/components/Nav/Nav";
import { TopBar } from "@/components/TopBar/TopBar";
import { Footer } from "@/components/Footer/Footer";
import { Blogs } from "@/components/Blogs/Blogs";
import { IconArrowRight } from "@/components/icons/Icons";
import styles from "./NewsPage.module.css";

/**
 * /news — dedicated market-news page. Hosts the paginated Blogs
 * grid (1,000 procedurally-generated posts + search + filter +
 * pagination) under a proper page shell.
 */
export function NewsPage() {
  useEffect(() => {
    document.title = "News & Insights — Marmara Precious Metals Group";
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

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
              <span aria-current="page">News & Insights</span>
            </nav>
            <span className={styles.eyebrow}>Marmara Research</span>
            <h1 className={styles.heroTitle}>Precious-metals news & institutional insights</h1>
            <p className={styles.heroLede}>
              Weekly market briefs, quarterly supply-demand deep-dives, and
              central-bank / ETF flow trackers. Covering the price drivers that
              matter for treasuries, jewellery manufacturers, mints and asset
              managers exposed to precious metals.
            </p>
            <div className={styles.heroCta}>
              <Link to="/services/market-insights" className="btn btn--gold">
                About the research desk <IconArrowRight />
              </Link>
              <Link to="/#contact" className="btn btn--ghost-dark">
                Subscribe to the brief
              </Link>
            </div>
          </div>
        </header>

        <Blogs />
      </main>

      <Footer />
    </>
  );
}
