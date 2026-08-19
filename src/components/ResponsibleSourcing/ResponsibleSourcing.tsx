import { Link } from "react-router-dom";
import { IconArrowRight } from "@/components/icons/Icons";
import { useReveal } from "@/hooks/useReveal";
import styles from "./ResponsibleSourcing.module.css";

/**
 * Responsible sourcing panel.
 *
 * Copy is deliberately restrained:
 *   · no "every consignment carries…" language — that reads as an
 *     operational guarantee we can't confirm applies uniformly.
 *   · no policy numbers (MGT/POL/COM-XX) on the public page — those
 *     are internal identifiers and don't belong on marketing surfaces.
 *   · no "21 signed policies" — count belongs on an internal doc, not
 *     on the CTA button.
 */

const CREDENTIALS = [
  { code: "RJC",   label: "Responsible Jewellery Council", detail: "Code of Practices (CoC & CoP) alignment across the group." },
  { code: "OECD",  label: "OECD Due Diligence Guidance",   detail: "Five-step due-diligence framework for minerals from CAHRA." },
  { code: "AML",   label: "UAE AML / CFT Framework",       detail: "Regulatory alignment for precious metals and stones dealers." },
];

export function ResponsibleSourcing() {
  const wrapRef = useReveal<HTMLDivElement>();

  return (
    <section
      ref={wrapRef}
      className={`${styles.wrap} reveal`}
      id="responsible-sourcing"
      aria-label="Responsible sourcing"
    >
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.copy}>
            <span className={styles.eyebrow}>Responsible Sourcing</span>
            <h2 className={styles.title}>Integrity <em>across every transaction.</em></h2>
            <p className={styles.lede}>
              Marmara applies robust due-diligence and responsible-sourcing
              controls across its precious metals activities, supported by
              RJC CoC &amp; CoP requirements, OECD Due Diligence Guidance and
              applicable UAE AML / CFT regulations.
            </p>
            <div className={styles.actions}>
              <Link to="/policies" className="btn btn--gold">
                Compliance Library <IconArrowRight />
              </Link>
              <Link to="/policies/mgt-pol-com-05" className="btn btn--ghost-light">
                Responsible-sourcing policy
              </Link>
            </div>
          </div>

          <ul className={styles.credentials}>
            {CREDENTIALS.map((c) => (
              <li key={c.code} className={styles.credential}>
                <span className={styles.credCode}>{c.code}</span>
                <span className={styles.credLabel}>{c.label}</span>
                <span className={styles.credDetail}>{c.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
