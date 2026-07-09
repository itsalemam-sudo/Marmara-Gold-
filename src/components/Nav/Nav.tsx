import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { nav, type NavLink } from "@/data/nav";
import { IconMenu, IconClose, IconArrowRight } from "@/components/icons/Icons";
import { useLockScroll } from "@/hooks/useLockScroll";
import styles from "./Nav.module.css";

/** True for internal SPA routes (start with `/`), false for hash / external. */
function isInternalRoute(href: string): boolean {
  return href.startsWith("/") && !href.startsWith("//");
}

/**
 * Circular-seal brand mark. Two concentric hairlines + the M
 * monogram — mirrors the Nadir Metal Rafineri wordmark logo.
 */
function BrandMark() {
  return (
    <Link to="/" className={styles.brand} aria-label="Marmara Precious Metals Group — home">
      <span className={styles.brandSeal} aria-hidden>
        <svg viewBox="0 0 56 56" width="48" height="48">
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

/** One top-level desktop item — button, hover-line, optional dropdown. */
function TopItem({ item, onNavigate }: { item: NavLink; onNavigate: () => void }) {
  const [hover, setHover] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const hasChildren = !!item.children?.length;

  /* Slight open / close hysteresis so nudging the cursor doesn't slam
     the panel shut. */
  const open = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setHover(true);
  };
  const close = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setHover(false), 120);
  };

  const linkClass =
    item.variant === "tab"
      ? `${styles.menuItem} ${styles.menuItemTab}`
      : styles.menuItem;

  if (!hasChildren) {
    return isInternalRoute(item.href) && !item.external ? (
      <Link to={item.href} className={linkClass} onClick={onNavigate}>
        {item.label}
      </Link>
    ) : (
      <a
        href={item.href}
        target={item.external ? "_blank" : undefined}
        rel={item.external ? "noopener noreferrer" : undefined}
        className={linkClass}
        onClick={onNavigate}
      >
        {item.label}
      </a>
    );
  }

  const TopLink = isInternalRoute(item.href) && !item.external
    ? ({ children }: { children: React.ReactNode }) => (
        <Link
          to={item.href}
          className={`${linkClass} ${styles.menuItemHasChildren}`}
          aria-haspopup="true"
          aria-expanded={hover}
        >
          {children}
        </Link>
      )
    : ({ children }: { children: React.ReactNode }) => (
        <a
          href={item.href}
          target={item.external ? "_blank" : undefined}
          rel={item.external ? "noopener noreferrer" : undefined}
          className={`${linkClass} ${styles.menuItemHasChildren}`}
          aria-haspopup="true"
          aria-expanded={hover}
        >
          {children}
        </a>
      );

  return (
    <div
      className={styles.menuGroup}
      onMouseEnter={open}
      onMouseLeave={close}
      onFocus={open}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) close();
      }}
    >
      <TopLink>
        {item.label}
        <span className={styles.caret} aria-hidden>▾</span>
      </TopLink>

      <div className={`${styles.dropdown} ${hover ? styles.dropdownOpen : ""}`} role="menu">
        <div className={styles.dropdownInner}>
          {item.children!.map((c) => {
            const inner = (
              <>
                <span className={styles.dropdownLabel}>{c.label}</span>
                {c.desc && <span className={styles.dropdownDesc}>{c.desc}</span>}
              </>
            );
            return isInternalRoute(c.href) && !c.external ? (
              <Link
                key={c.label}
                to={c.href}
                className={styles.dropdownLink}
                role="menuitem"
                onClick={() => { setHover(false); onNavigate(); }}
              >
                {inner}
              </Link>
            ) : (
              <a
                key={c.label}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                className={styles.dropdownLink}
                role="menuitem"
                onClick={() => { setHover(false); onNavigate(); }}
              >
                {inner}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function Nav() {
  const [openMobile, setOpenMobile] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  useLockScroll(openMobile);

  /* Reset expanded groups when the drawer closes. */
  useEffect(() => {
    if (!openMobile) setOpenSection(null);
  }, [openMobile]);

  return (
    <header className={styles.wrap}>
      <div className="container">
        <div className={styles.bar}>
          <BrandMark />

          <nav className={styles.menu} aria-label="Primary">
            {nav.map((item) => (
              <TopItem key={item.label} item={item} onNavigate={() => setOpenMobile(false)} />
            ))}
          </nav>

          <div className={styles.actions}>
            <a className="btn btn--gold" href="#contact">
              Contact us <IconArrowRight />
            </a>
          </div>

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

      {/* Mobile drawer — expandable groups replace the flat list. */}
      <div
        id="mobile-nav"
        className={`${styles.drawer} ${openMobile ? styles.drawerOpen : ""}`}
        role="dialog"
        aria-modal={openMobile}
        aria-hidden={!openMobile}
      >
        <div className={styles.drawerTop}>
          <span className={styles.brand}>
            <span className={styles.brandSeal} aria-hidden>
              <svg viewBox="0 0 56 56" width="42" height="42">
                <circle cx="28" cy="28" r="26" fill="none" stroke="currentColor" strokeWidth="0.9" />
                <path d="M14 40V17l14 14L42 17v23M14 43h28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className={styles.brandWord}>
              <b>MARMARA</b>
            </span>
          </span>
          <button
            type="button"
            className={styles.hamburger}
            onClick={() => setOpenMobile(false)}
            aria-label="Close menu"
          >
            <IconClose />
          </button>
        </div>

        <div className={styles.drawerList}>
          {nav.map((item) => {
            const isOpen = openSection === item.label;
            const hasChildren = !!item.children?.length;
            return (
              <div key={item.label} className={styles.drawerItem}>
                {hasChildren ? (
                  <button
                    type="button"
                    className={`${styles.drawerLink} ${styles.drawerGroupButton}`}
                    onClick={() => setOpenSection(isOpen ? null : item.label)}
                    aria-expanded={isOpen}
                    tabIndex={openMobile ? 0 : -1}
                  >
                    <span>{item.label}</span>
                    <span className={`${styles.drawerCaret} ${isOpen ? styles.drawerCaretOpen : ""}`} aria-hidden>▾</span>
                  </button>
                ) : isInternalRoute(item.href) && !item.external ? (
                  <Link
                    to={item.href}
                    className={styles.drawerLink}
                    onClick={() => setOpenMobile(false)}
                    tabIndex={openMobile ? 0 : -1}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className={styles.drawerLink}
                    onClick={() => setOpenMobile(false)}
                    tabIndex={openMobile ? 0 : -1}
                  >
                    {item.label}
                  </a>
                )}

                {hasChildren && isOpen && (
                  <div className={styles.drawerSub}>
                    {item.children!.map((c) =>
                      isInternalRoute(c.href) && !c.external ? (
                        <Link
                          key={c.label}
                          to={c.href}
                          className={styles.drawerSubLink}
                          onClick={() => setOpenMobile(false)}
                          tabIndex={openMobile ? 0 : -1}
                        >
                          {c.label}
                          {c.desc && <small>{c.desc}</small>}
                        </Link>
                      ) : (
                        <a
                          key={c.label}
                          href={c.href}
                          target={c.external ? "_blank" : undefined}
                          rel={c.external ? "noopener noreferrer" : undefined}
                          className={styles.drawerSubLink}
                          onClick={() => setOpenMobile(false)}
                          tabIndex={openMobile ? 0 : -1}
                        >
                          {c.label}
                          {c.desc && <small>{c.desc}</small>}
                        </a>
                      )
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className={styles.drawerActions}>
          <a
            className="btn btn--ghost-light"
            href="#compliance"
            onClick={() => setOpenMobile(false)}
            tabIndex={openMobile ? 0 : -1}
          >
            Compliance library
          </a>
          <a
            className="btn btn--gold"
            href="#contact"
            onClick={() => setOpenMobile(false)}
            tabIndex={openMobile ? 0 : -1}
          >
            Contact the desk
          </a>
        </div>
      </div>
    </header>
  );
}
