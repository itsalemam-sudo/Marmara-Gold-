import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Nav } from "@/components/Nav/Nav";
import { TopBar } from "@/components/TopBar/TopBar";
import { Footer } from "@/components/Footer/Footer";
import { About } from "@/components/About/About";
import { GlobalReach } from "@/components/GlobalReach/GlobalReach";
import { Careers } from "@/components/Careers/Careers";
import { Stats } from "@/components/Stats/Stats";
import { IconArrowRight } from "@/components/icons/Icons";
import styles from "./CorporatePage.module.css";

/**
 * Corporate section pages. One route per Nadir-Metal-style item:
 *   /corporate/about       — About + Stats
 *   /corporate/leadership  — Leadership team
 *   /corporate/offices     — Global Reach
 *   /corporate/careers     — Careers listings
 *
 * Each mounts the existing home-page component under a proper page
 * shell (TopBar + Nav + hero + Footer), so content stays in one
 * place while the URL is dedicated.
 */
type CorporateSection = {
  section: string;
  crumbLabel: string;
  title: string;
  lede: string;
  primaryCta: { label: string; href: string };
  render: () => React.JSX.Element;
};

const SECTIONS: Record<string, CorporateSection> = {
  about: {
    section: "About Marmara",
    crumbLabel: "About Marmara",
    title: "Marmara Precious Metals Group",
    lede:
      "An integrated precious-metals house operating out of Dubai — trading, refining partnerships, custody and settlement across gold, silver, platinum and palladium. Operating entity: Marmara Gold Trading LLC, licensed by the Dubai Department of Economy and Tourism (DET).",
    primaryCta: { label: "Contact the desk", href: "/#contact" },
    render: () => (
      <>
        <About />
        <Stats />
      </>
    ),
  },
  /* Leadership route intentionally omitted. The owner has instructed us to
     hide the leadership section (no placeholder bios / invented photos)
     until approved names, titles and biographies are supplied. The nav
     entry is removed in src/data/nav.ts; direct navigation to
     /corporate/leadership falls through to the 404 branch of this page. */
  offices: {
    section: "Global Offices",
    crumbLabel: "Global Offices",
    title: "Marmara offices",
    lede:
      "Dubai head office, with Marmara offices in Saudi Arabia, Türkiye, Hong Kong and Singapore. Custody and logistics are arranged through specialist providers in Dubai, London, Zürich, Hong Kong and Thailand.",
    primaryCta: { label: "Contact the desk", href: "/#contact" },
    render: () => <GlobalReach />,
  },
  careers: {
    section: "Careers",
    crumbLabel: "Careers",
    title: "Careers at Marmara",
    lede:
      "Precious-metals trading, compliance, technology and coverage roles in Dubai. Marmara operates under UAE Federal Decree-Law 33/2021 employment terms and the HR Due Diligence Policy (MGT/POL/COM-014).",
    primaryCta: { label: "Send us your CV", href: "mailto:hr@marmaragold.co" },
    render: () => <Careers />,
  },
};

export function CorporatePage() {
  const { section } = useParams<{ section: string }>();
  const s = section ? SECTIONS[section] : undefined;

  useEffect(() => {
    if (s) {
      document.title = `${s.section} — Marmara Precious Metals Group`;
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [s]);

  if (!s) return <Navigate to="/" replace />;

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
              <span>Corporate</span>
              <span>/</span>
              <span aria-current="page">{s.crumbLabel}</span>
            </nav>
            <span className={styles.eyebrow}>Corporate · {s.section}</span>
            <h1 className={styles.heroTitle}>{s.title}</h1>
            <p className={styles.heroLede}>{s.lede}</p>
            <div className={styles.heroCta}>
              {s.primaryCta.href.startsWith("mailto:") ? (
                <a href={s.primaryCta.href} className="btn btn--gold">
                  {s.primaryCta.label} <IconArrowRight />
                </a>
              ) : (
                <Link to={s.primaryCta.href} className="btn btn--gold">
                  {s.primaryCta.label} <IconArrowRight />
                </Link>
              )}
              <Link to="/#compliance" className="btn btn--ghost-dark">
                Compliance library
              </Link>
            </div>
          </div>
        </header>

        {s.render()}
      </main>

      <Footer />
    </>
  );
}
