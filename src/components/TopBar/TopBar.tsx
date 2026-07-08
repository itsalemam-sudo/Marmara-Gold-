import styles from "./TopBar.module.css";

/**
 * Ultra-thin navy strip above the ticker/nav — mirrors Nadir Metal's
 * top tagline bar. Silent on mobile below 640 px to save vertical space.
 */
export function TopBar() {
  return (
    <div className={styles.wrap} role="complementary" aria-label="Tagline">
      <div className="container">
        <div className={styles.inner}>
          <span className={styles.tag}>
            We add value to your investments by providing transparent, fast and
            reliable solutions in <em>gold, silver and precious metals.</em>
          </span>
          <span className={styles.contact}>
            <a href="mailto:compliance@marmaragold.co">
              compliance@marmaragold.co
            </a>
            <span aria-hidden>·</span>
            <a href="#contact">Dubai · Deira Gold Souk</a>
          </span>
        </div>
      </div>
    </div>
  );
}
