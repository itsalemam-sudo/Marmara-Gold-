import { about } from "@/data/about";
import { IconArrowRight } from "@/components/icons/Icons";
import { useReveal } from "@/hooks/useReveal";
import styles from "./About.module.css";

export function About() {
  const headRef   = useReveal<HTMLDivElement>();
  const duoRef    = useReveal<HTMLDivElement>();
  const splitRef  = useReveal<HTMLDivElement>();
  const ticksRef  = useReveal<HTMLDivElement>();
  const commitRef = useReveal<HTMLDivElement>();
  const closerRef = useReveal<HTMLDivElement>();

  return (
    <section className={`${styles.wrap} section`} id="about" aria-label="About Marmara">
      <div className="container">
        <header ref={headRef} className={`${styles.head} reveal`}>
          <div>
            <span className="eyebrow">About Marmara</span>
            <h2>
              Dubai's gateway to the <em>global bullion market.</em>
            </h2>
          </div>
          <div className={styles.who}>
            {about.who.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </header>

        <div ref={duoRef} className={`${styles.duo} reveal`}>
          <article className={styles.pillar}>
            <div className={styles.label}>{about.mission.label}</div>
            <h3>{about.mission.body}</h3>
          </article>
          <article className={styles.pillar}>
            <div className={styles.label}>{about.vision.label}</div>
            <h3>{about.vision.body}</h3>
          </article>
        </div>

        <div ref={splitRef} className={`${styles.split} reveal`}>
          <div>
            <div className={styles.blockTitle}>What we do</div>
            <div className={styles.blockRule} />
            <div className={styles.list}>
              {about.whatWeDo.map((it, i) => (
                <div key={i} className={styles.li}>
                  <span className={styles.liIdx}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <div className={styles.liT}>{it.t}</div>
                    <div className={styles.liD}>{it.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className={styles.blockTitle}>Our network</div>
            <div className={styles.blockRule} />
            <div className={styles.list}>
              {about.network.map((it, i) => (
                <div key={i} className={styles.li}>
                  <span className={styles.liIdx}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <div className={styles.liT}>{it.t}</div>
                    <div className={styles.liD}>{it.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div ref={ticksRef} className="reveal">
          <div className={styles.ticksTitle}>Why choose Marmara Gold</div>
          <div className={styles.ticks}>
            {about.ticks.map((t) => (
              <div key={t} className={styles.tick}>
                <span className={styles.tickGlyph}>✓</span>
                {t}
              </div>
            ))}
          </div>
        </div>

        <div ref={commitRef} className={`${styles.dark} reveal`}>
          <div className={styles.commitTitle}>Our commitments</div>
          <div className={styles.commitGrid}>
            {about.commitments.map((c, i) => (
              <article key={c.t} className={styles.commit}>
                <div className={styles.label}>Commitment · {String(i + 1).padStart(2, "0")}</div>
                <h4>{c.t}</h4>
                <p>{c.d}</p>
              </article>
            ))}
          </div>
        </div>

        <div ref={closerRef} className={`${styles.closer} reveal`}>
          <div>
            <h3>{about.close.title}</h3>
            <p>{about.close.body}</p>
          </div>
          <div className={styles.closerActions}>
            <a href="#contact" className="btn btn--gold">
              {about.close.cta} <IconArrowRight />
            </a>
            <a href="#products" className="btn btn--secondary">
              Browse products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
