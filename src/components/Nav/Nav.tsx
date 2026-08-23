import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { nav, type NavLink } from "@/data/nav";
import { IconMenu, IconClose, IconFlagGB, IconFlagTR } from "@/components/icons/Icons";
import { useLockScroll } from "@/hooks/useLockScroll";
import styles from "./Nav.module.css";

/** True for internal SPA routes (start with `/`). */
function isInternalRoute(href: string): boolean {
  return href.startsWith("/") && !href.startsWith("//");
}

/**
 * Brand mark — the full Marmara lockup (crown-M + wordmark + rules)
 * in a single client-supplied PNG. Rendered as one image so the
 * proportions of the master file are preserved exactly — no HTML
 * wordmark next to it to compete for space or drift out of sync
 * with the print asset.
 *
 * `fetchpriority="high"` pulls the header brand ahead of below-fold
 * imagery. The container width/height in the CSS clamps the render
 * so a future logo swap can never blow the header out.
 */
function BrandMark() {
  return (
    <Link to="/" className={styles.brand} aria-label="Marmara Precious Metals Group — home">
      <img
        className={styles.brandLockup}
        src="/logos/marmara-logo.png"
        alt="Marmara Precious Metals Group"
        width="79"
        height="64"
        decoding="async"
        fetchPriority="high"
      />
    </Link>
  );
}

/**
 * Language selector — TR / EN flags exactly like Nadir Metal. The
 * button toggles document.documentElement.lang and persists the
 * choice in localStorage; wire to full i18n once TR strings ship.
 */
function LangSelector() {
  const set = (l: "en" | "tr") => {
    document.documentElement.lang = l;
    try { localStorage.setItem("mg:lang", l); } catch { /* ignore */ }
  };
  return (
    <div className={styles.lang} role="group" aria-label="Language">
      <button
        type="button"
        className={styles.flagBtn}
        aria-label="Türkçe"
        onClick={() => set("tr")}
      >
        <IconFlagTR />
      </button>
      <button
        type="button"
        className={styles.flagBtn}
        aria-current="true"
        aria-label="English"
        onClick={() => set("en")}
      >
        <IconFlagGB />
      </button>
    </div>
  );
}

/* SearchBox removed — no real search endpoint exists yet, and a
   pill that only routes to `/news?q=` reads as a broken feature.
   Re-introduce when a real content-search API is wired in. */

/** One top-level desktop menu item (row 3). */
function MenuItem({ item, onNavigate }: { item: NavLink; onNavigate: () => void }) {
  const [hover, setHover] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const hasChildren = !!item.children?.length;

  const open = () => {
    if (closeTimer.current) { window.clearTimeout(closeTimer.current); closeTimer.current = null; }
    setHover(true);
  };
  const close = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setHover(false), 120);
  };

  const linkClass =
    item.variant === "tab"
      ? `${styles.menuLink} ${styles.menuLinkTab}`
      : styles.menuLink;

  const inner = hasChildren ? (
    <>{item.label}<span className={styles.caret} aria-hidden>▾</span></>
  ) : (
    item.label
  );

  const topAnchor = isInternalRoute(item.href) && !item.external
    ? <Link to={item.href} className={linkClass} onClick={onNavigate} aria-haspopup={hasChildren || undefined} aria-expanded={hasChildren ? hover : undefined}>{inner}</Link>
    : <a href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined} className={linkClass} onClick={onNavigate} aria-haspopup={hasChildren || undefined} aria-expanded={hasChildren ? hover : undefined}>{inner}</a>;

  if (!hasChildren) return topAnchor;

  return (
    <div className={styles.menuItem} onMouseEnter={open} onMouseLeave={close} onFocus={open} onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node)) close(); }}>
      {topAnchor}
      <div className={`${styles.dropdown} ${hover ? styles.dropdownOpen : ""}`} role="menu">
        <div className={styles.dropdownInner}>
          {item.children!.map((c) => {
            const childInner: ReactNode = (
              <>
                <span className={styles.dropdownLabel}>{c.label}</span>
                {c.desc && <span className={styles.dropdownDesc}>{c.desc}</span>}
              </>
            );
            return isInternalRoute(c.href) && !c.external ? (
              <Link key={c.label} to={c.href} className={styles.dropdownLink} role="menuitem" onClick={() => { setHover(false); onNavigate(); }}>{childInner}</Link>
            ) : (
              <a key={c.label} href={c.href} target={c.external ? "_blank" : undefined} rel={c.external ? "noopener noreferrer" : undefined} className={styles.dropdownLink} role="menuitem" onClick={() => { setHover(false); onNavigate(); }}>{childInner}</a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/**
 * 3-row header — Nadir Metal exact structure.
 *   Row 1 · topbar (navy strip, tagline)
 *   Row 2 · brand row (logo | search | language | hamburger)
 *   Row 3 · menu row (flat nav links)
 *
 * Row 3 collapses below the mobile breakpoint; a full-height drawer
 * takes over.
 */
export function Nav() {
  const [openMobile, setOpenMobile] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  useLockScroll(openMobile);

  useEffect(() => {
    if (!openMobile) setOpenSection(null);
  }, [openMobile]);

  return (
    <header className={styles.wrap}>
      {/* Row 1 (tagline strip) lives in <TopBar>, mounted separately in
          the page shell so the ticker can slot between it and the brand
          row without a duplicate tagline. */}

      {/* Row 2 — brand + actions. Search bar removed until a real
          content-search API exists; language switch + hamburger stay. */}
      <div className={styles.middle}>
        <div className="container">
          <div className={styles.middleRow}>
            <BrandMark />
            <div className={styles.middleActions}>
              <LangSelector />
              <button
                type="button"
                className={styles.hamburger}
                aria-expanded={openMobile}
                aria-controls="mobile-nav"
                aria-label={openMobile ? "Close menu" : "Open menu"}
                onClick={() => setOpenMobile((v) => !v)}
              >
                {openMobile ? <IconClose /> : <IconMenu />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Row 3 — flat menu row */}
      <nav className={styles.menu} aria-label="Primary">
        <div className="container">
          <div className={styles.menuRow}>
            <Link to="/" className={styles.menuLink}>Home</Link>
            {nav.map((item) => (
              <MenuItem key={item.label} item={item} onNavigate={() => setOpenMobile(false)} />
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={`${styles.drawer} ${openMobile ? styles.drawerOpen : ""}`}
        role="dialog"
        aria-modal={openMobile}
        aria-hidden={!openMobile}
      >
        <div className={styles.drawerTop}>
          <BrandMark />
          <button
            type="button"
            className={styles.hamburger}
            onClick={() => setOpenMobile(false)}
            aria-label="Close menu"
          >
            <IconClose />
          </button>
        </div>

        {/* Search removed from the mobile drawer for the same reason as
            the desktop bar — no real endpoint. */}

        <div className={styles.drawerList}>
          <Link to="/" className={styles.drawerLink} onClick={() => setOpenMobile(false)}>Home</Link>
          {nav.map((item) => {
            const isOpen = openSection === item.label;
            const hasChildren = !!item.children?.length;

            if (!hasChildren) {
              return isInternalRoute(item.href) && !item.external ? (
                <Link key={item.label} to={item.href} className={styles.drawerLink} onClick={() => setOpenMobile(false)}>{item.label}</Link>
              ) : (
                <a key={item.label} href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined} className={styles.drawerLink} onClick={() => setOpenMobile(false)}>{item.label}</a>
              );
            }

            return (
              <div key={item.label} className={styles.drawerItem}>
                <button
                  type="button"
                  className={styles.drawerLink}
                  onClick={() => setOpenSection(isOpen ? null : item.label)}
                  aria-expanded={isOpen}
                >
                  <span>{item.label}</span>
                  <span className={`${styles.drawerCaret} ${isOpen ? styles.drawerCaretOpen : ""}`} aria-hidden>▾</span>
                </button>
                {isOpen && (
                  <div className={styles.drawerSub}>
                    {item.children!.map((c) =>
                      isInternalRoute(c.href) && !c.external ? (
                        <Link key={c.label} to={c.href} className={styles.drawerSubLink} onClick={() => setOpenMobile(false)}>
                          {c.label}{c.desc && <small>{c.desc}</small>}
                        </Link>
                      ) : (
                        <a key={c.label} href={c.href} target={c.external ? "_blank" : undefined} rel={c.external ? "noopener noreferrer" : undefined} className={styles.drawerSubLink} onClick={() => setOpenMobile(false)}>
                          {c.label}{c.desc && <small>{c.desc}</small>}
                        </a>
                      )
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className={styles.drawerLang}><LangSelector /></div>
      </div>
    </header>
  );
}
