import styles from "./TopBar.module.css";

/**
 * Ultra-thin navy strip above the nav — mirrors Nadir Metal's top
 * tagline bar exactly (centered tagline, no contact block on the
 * right). Contact info now lives in the footer where Nadir keeps it.
 */
export function TopBar() {
  return (
    <div className={styles.wrap} role="complementary" aria-label="Tagline">
      <div className="container">
        <p className={styles.tag}>
          We add value to your investments by providing transparent, fast and
          reliable solutions in gold, silver and precious metals.
        </p>
      </div>
    </div>
  );
}
