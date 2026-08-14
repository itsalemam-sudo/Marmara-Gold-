import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { nav, type NavLink } from "@/data/nav";
import { IconMenu, IconClose } from "@/components/icons/Icons";
import { useLockScroll } from "@/hooks/useLockScroll";
import styles from "./Nav.module.css";

/** True for internal SPA routes (start with `/`). */
function isInternalRoute(href: string): boolean {
  return href.startsWith("/") && !href.startsWith("//");
}

/**
 * Circular seal + wordmark. Sits at the left of the middle row.
 * Nadir Metal ships a raster PNG here; we ship a self-contained
 * SVG so the mark scales cleanly on retina without a fetch.
 */
function BrandMark() {
  return (
    <Link to="/" className={styles.brand} aria-label="Marmara Precious Metals Group — home">
      <span className={styles.brandSeal} aria-hidden>
        <svg viewBox="0 0 56 56" width="46" height="46">
          <circle cx="28" cy="28" r="26" fill="none" stroke="currentColor" strokeWidth="0.9" />
          <circle cx="28" cy="28" r="22" fill="none" stroke="currentColor" strokeWidth="0.55" />
          <path
            d="M14 40V17l14 14L42 17v23"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M14 43h28" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </span>
      <span className={styles.brandWord}>
        <b>MARMARA</b>
        <small>Precious Metals Group</small>
      </span>
    </Link>
  );
}

/**
 * Language selector — TR / EN switch. Placeholder that swaps a lang
 * attribute on <html>; wire to i18n once the second locale ships.
 */
function LangSelector() {
  const set = (l: "en" | "tr") => {
    document.documentElement.lang = l;
    try { localStorage.setItem("mg:lang", l); } catch { /* ignore */ }
  };
  return (
    <div className={styles.lang} role="group" aria-label="Language">
      <button type="button" className={styles.langBtn} aria-current="true" onClick={() => set("en")}>EN</button>
      <span className={styles.langDivider} aria-hidden>·</span>
      <button type="button" className={styles.langBtn} onClick={() => set("tr")}>TR</button>
    </div>
  );
}

/**
 * Header search box — routes to /news?q= for now (until a proper
 * search endpoint exists). Nadir Metal has the same visual pattern
 * (input + magnifier icon inside a rounded pill).
 */
function SearchBox({ compact = false }: { compact?: boolean }) {
  const navigate = useNavigate();
  const [q, setQ] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!q.trim()) return;
    navigate(`/news?q=${encodeURIComponent(q.trim())}`);
    setQ("");
  };

  return (
    <form
      className={`${styles.search} ${compact ? styles.searchCompact : ""}`}
      onSubmit={submit}
      role="search"
    >
      <input
        type="search"
        name="q"
        aria-label="Search"
        placeholder="Search…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      <button type="submit" aria-label="Submit search">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8"/>
          <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      </button>
    </form>
  );
}

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
      {/* Row 1 — topbar tagline */}
      <div className={styles.topbar}>
        <div className="container">
          <p className={styles.topbarText}>
            We add value to your investments by providing transparent, fast and
            reliable solutions in gold, silver and precious metals.
          </p>
        </div>
      </div>

      {/* Row 2 — brand + actions */}
      <div className={styles.middle}>
        <div className="container">
          <div className={styles.middleRow}>
            <BrandMark />
            <div className={styles.middleActions}>
              <SearchBox />
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

        <div className={styles.drawerSearch}>
          <SearchBox compact />
        </div>

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
