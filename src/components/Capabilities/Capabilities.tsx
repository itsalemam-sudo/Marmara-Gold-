import { capabilities, marginBanner } from "@/data/capabilities";
import { IconArrowRight } from "@/components/icons/Icons";
import { useReveal } from "@/hooks/useReveal";
import styles from "./Capabilities.module.css";

export function Capabilities() {
  const leftRef  = useReveal<HTMLDivElement>();
  const listRef  = useReveal<HTMLDivElement>();
  const bannerRef = useReveal<HTMLDivElement>();

  return (
    <section className={`${styles.wrap} section`} id="services" aria-label="Our physical trading capabilities">
      <div className="container">
        <div className={styles.grid}>
          <div ref={leftRef} className="reveal">
            <span className="eyebrow">Physical trading</span>
            <h2 className={styles.heading}>
              Elevate your precious metals trading <em>with Marmara.</em>
            </h2>
            <p className={styles.lede}>
              Our physical trading desk operates across the LBMA and non-LBMA
              value chain — from certified refining bars to regional formats
              serving jewellery, industrial and investment demand.
            </p>
          </div>

          <div ref={listRef} className={`${styles.list} reveal`}>
            {capabilities.map((c, i) => (
              <article key={c.title} className={styles.item}>
                <div className={styles.item__idx}>{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <h3 className={styles.item__title}>{c.title}</h3>
                  <p className={styles.item__detail}>{c.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div ref={bannerRef} className={`${styles.banner} reveal`}>
          <div>
            <div className={styles.banner__eyebrow}>{marginBanner.eyebrow}</div>
            <h3 className={styles.banner__headline}>{marginBanner.headline}</h3>
            <p className={styles.banner__body}>{marginBanner.detail}</p>
          </div>
          <div className={styles.banner__cta}>
            <a href={marginBanner.cta.href} className="btn btn--gold">
              {marginBanner.cta.label} <IconArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
