import { useState } from "react";
import { nav } from "@/data/nav";
import { IconMenu, IconClose, IconLogoMonogram } from "@/components/icons/Icons";
import { useLockScroll } from "@/hooks/useLockScroll";
import styles from "./Nav.module.css";

export function Nav() {
  const [open, setOpen] = useState(false);
  useLockScroll(open);

  return (
    <header className={styles.wrap}>
      <div className="container">
        <div className={styles.bar}>
          <a href="#top" className={styles.brand} aria-label="Marmara Gold — home">
            <IconLogoMonogram className={styles.brand__mark} />
            <span className={styles.brand__word}>
              Marmara Gold
              <small>Trading LLC · Dubai</small>
            </span>
          </a>

          <nav className={styles.menu} aria-label="Primary">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={
                  item.variant === "tab"
                    ? `${styles.menuItem} ${styles["menuItem--tab"]}`
                    : styles.menuItem
                }
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className={styles.actions}>
            <a className="btn btn--ghost-light" href="#contact">Client Portal</a>
            <a className="btn btn--gold" href="#contact">Open an Account</a>
          </div>

          <button
            type="button"
            className={styles.hamburger}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={`${styles.drawer} ${open ? styles.drawerOpen : ""}`}
        role="dialog"
        aria-modal={open}
        aria-hidden={!open}
      >
        <div className={styles.drawerTop}>
          <span className={styles.brand}>
            <IconLogoMonogram className={styles.brand__mark} />
            <span className={styles.brand__word}>Marmara Gold</span>
          </span>
          <button
            type="button"
            className={styles.hamburger}
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <IconClose />
          </button>
        </div>

        <div className={styles.drawerList}>
          {nav.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              className={styles.drawerLink}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
            >
              {item.label}
              <small>{String(i + 1).padStart(2, "0")} · Section</small>
            </a>
          ))}
        </div>

        <div className={styles.drawerActions}>
          <a
            className="btn btn--ghost-light"
            href="#contact"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
          >
            Client Portal
          </a>
          <a
            className="btn btn--gold"
            href="#contact"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
          >
            Open an Account
          </a>
        </div>
      </div>
    </header>
  );
}
