import styles from "./Leadership.module.css";

/**
 * Leadership section — placeholder until Marmara management confirms
 * the final org chart.
 *
 * The previous version rendered 8 mixed cards (some real names, some
 * initials, duplicate titles, personal email addresses) which is not
 * acceptable for a public bullion desk. Rather than publish speculative
 * data we render a single "awaiting confirmation" card and route
 * anyone who wants to reach the team to the contact form.
 *
 * When management signs off:
 *   1. Restore src/data/team.ts with confirmed names + titles ONLY.
 *   2. Reduce to 4–6 senior leaders.
 *   3. Use the same professional portrait style for every person
 *      (uniform circular photo — no initials mixed with photos).
 *   4. Do not publish individual email addresses; route through the
 *      generic contact form or `info@marmaragold.ae`.
 */
export function Leadership() {
  return (
    <section className={`${styles.wrap} section`} id="leadership" aria-label="Leadership">
      <div className="container">
        <header className={styles.head}>
          <span className="eyebrow">Leadership</span>
          <h2>Leadership</h2>
          <p>
            Experienced leadership across precious metals, operations,
            finance, compliance and international business development.
          </p>
        </header>

        <div className={styles.placeholder}>
          <p>
            Group leadership details will appear here once confirmed
            by Marmara management.
          </p>
          <a href="#contact" className="btn btn--gold">
            Contact our team
          </a>
        </div>
      </div>
    </section>
  );
}
