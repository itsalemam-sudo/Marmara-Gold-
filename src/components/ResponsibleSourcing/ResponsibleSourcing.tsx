import { Link } from "react-router-dom";
import { IconArrowRight } from "@/components/icons/Icons";
import { useReveal } from "@/hooks/useReveal";
import styles from "./ResponsibleSourcing.module.css";

/**
 * "Responsible Gold and Silver" panel — counterpart to Nadir Metal's
 * /en/responsible-gold-and-silver commitment section. A full-width
 * navy banner with a strong claim, three credentials, and a link
 * into the compliance library.
 */

const CREDENTIALS = [
  { code: "RJC",    label: "Responsible Jewellery Council",  detail: "Code of Practices (COP) alignment across the desk. See MGT/POL/COM-01." },
  { code: "OECD",   label: "OECD Due Diligence Guidance",    detail: "Five-step due-diligence framework for minerals from CAHRA. See MGT/POL/COM-05." },
  { code: "UAE 74", label: "Cabinet Resolution 74 / 2020",   detail: "Full TFS regime — UNSC + Local Terrorist List screening, GoAML reporting. See MGT/POL/COM-07." },
];

export function ResponsibleSourcing() {
  const wrapRef = useReveal<HTMLDivElement>();

  return (
    <section
      ref={wrapRef}
      className={`${styles.wrap} reveal`}
      id="responsible-sourcing"
      aria-label="Responsible sourcing commitment"
    >
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.copy}>
            <span className={styles.eyebrow}>Responsible Gold &amp; Silver</span>
            <h2 className={styles.title}>Every ounce, <em>documented from source.</em></h2>
            <p className={styles.lede}>
              Marmara does not knowingly source from conflict-affected or
              high-risk areas without OECD-aligned due diligence. Every
              consignment carries a chain-of-custody file — refiner
              accreditation, provenance evidence, and OECD Annex II red-flag
              screening — retained for the periods required by RJC and UAE
              regulation.
            </p>
            <div className={styles.actions}>
              <Link to="/#compliance" className="btn btn--gold">
                Read the 21 signed policies <IconArrowRight />
              </Link>
              <Link to="/policies/mgt-pol-com-05" className="btn btn--ghost-light">
                Supply-chain policy
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
