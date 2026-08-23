import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { nav } from "@/data/nav";
import {
  IconLinkedIn,
  IconX,
  IconYouTube,
  IconArrowRight,
} from "@/components/icons/Icons";
import styles from "./Footer.module.css";

/**
 * Footer — Nadir Metal 3-block structure.
 *   Block 1 · Newsletter band (heading + inline email + submit)
 *   Block 2 · 4-column nav grid (Brand | Corporate | Products | Services)
 *   Block 3 · Legal bar (address / copyright / socials)
 *
 * The nav grid is derived from the shared /src/data/nav.ts so link labels
 * match the header without a second source of truth to maintain.
 */

/** Small helper — locate a top-level nav entry so column data stays in sync. */
function navSection(label: string) {
  return nav.find((n) => n.label === label);
}

/** Newsletter form — posts nowhere yet, just validates and thanks. Wire to
 *  Mailchimp/HubSpot once list ID exists. */
function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("err");
      return;
    }
    // TODO: POST to newsletter endpoint. For now, thank the user.
    setStatus("ok");
    setEmail("");
  };

  return (
    <section className={styles.newsletter} aria-labelledby="footer-newsletter-title">
      <div className="container">
        <div className={styles.newsletterRow}>
          <div className={styles.newsletterCopy}>
            <span className={styles.eyebrow}>Marmara Insights</span>
            <h2 id="footer-newsletter-title" className={styles.newsletterTitle}>
              Subscribe for precious metals insights, company news and
              responsible-sourcing updates.
            </h2>
          </div>
          <form className={styles.newsletterForm} onSubmit={submit} noValidate>
            <label htmlFor="footer-email" className={styles.srOnly}>
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setStatus("idle"); }}
              required
            />
            <button type="submit" aria-label="Subscribe">
              Subscribe <IconArrowRight />
            </button>
            {status === "ok" && (
              <p className={styles.msgOk} role="status">Thank you — you&rsquo;re on the list.</p>
            )}
            {status === "err" && (
              <p className={styles.msgErr} role="alert">Please enter a valid email address.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const corporate = navSection("Corporate");
  const products = navSection("Product");
  const services = navSection("Services");

  return (
    <footer className={styles.wrap}>
      <Newsletter />

      {/* Block 2 — 4-column nav grid */}
      <div className={styles.grid}>
        <div className="container">
          <div className={styles.gridRow}>
            {/* Brand column */}
            <div className={styles.brandCol}>
              <Link to="/" className={styles.brand}>
                <img
                  className={styles.brandLockup}
                  src="/logos/marmara-logo.png"
                  alt="Marmara Precious Metals Group"
                  width="98"
                  height="80"
                  decoding="async"
                  loading="lazy"
                />
              </Link>
              <p className={styles.brandBlurb}>
                Marmara Precious Metals Group provides institutional precious
                metals trading, refining, physical settlement and logistics
                solutions across key markets.
              </p>
              <ul className={styles.contactList}>
                {/* Address / telephone are placeholders until the client
                    confirms the group HQ record — do NOT publish
                    speculative addresses; keep the labels but blank
                    the values, or supply the confirmed strings. */}
                <li>
                  <span className={styles.contactLabel}>Address</span>
                  <span>Al Khor Street, The Gold Center Building, Deira, Dubai, UAE</span>
                </li>
                <li>
                  <span className={styles.contactLabel}>Email</span>
                  <a href="mailto:info@marmaragold.ae">info@marmaragold.ae</a>
                </li>
                <li>
                  <span className={styles.contactLabel}>Web</span>
                  <a href="https://www.marmaragold.ae">www.marmaragold.ae</a>
                </li>
              </ul>
            </div>

            {/* Corporate column */}
            {corporate && (
              <nav className={styles.col} aria-label="Corporate">
                <h5>{corporate.label}</h5>
                <ul>
                  {corporate.children?.map((c) => (
                    <li key={c.label}>
                      <Link to={c.href}>{c.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            {/* Products column */}
            {products && (
              <nav className={styles.col} aria-label="Products">
                <h5>{products.label}</h5>
                <ul>
                  {products.children?.map((c) => (
                    <li key={c.label}>
                      <Link to={c.href}>{c.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            {/* Services column */}
            {services && (
              <nav className={styles.col} aria-label="Services">
                <h5>{services.label}</h5>
                <ul>
                  {services.children?.map((c) => (
                    <li key={c.label}>
                      <Link to={c.href}>{c.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>
        </div>
      </div>

      {/* Block 3 — legal bar */}
      <div className={styles.legal}>
        <div className="container">
          <div className={styles.legalRow}>
            <p className={styles.copy}>
              © 2026 Marmara Precious Metals Group. All rights reserved.
            </p>
            <ul className={styles.legalLinks}>
              <li><Link to="/policies/mgt-pol-com-06">Compliance</Link></li>
              <li><Link to="/policies/mgt-pol-com-01">Privacy</Link></li>
              <li><Link to="/policies/mgt-pol-com-03">Terms of Use</Link></li>
              <li><Link to="/policies">Compliance Library</Link></li>
            </ul>
            <ul className={styles.social} aria-label="Social media">
              <li>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <IconLinkedIn />
                </a>
              </li>
              <li>
                <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="X">
                  <IconX />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <IconYouTube />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
