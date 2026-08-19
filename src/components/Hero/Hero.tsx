import { useEffect, useRef } from "react";
import { IconArrowRight } from "@/components/icons/Icons";
import { HeroScene } from "./HeroScene";
import { links } from "@/lib/links";
import styles from "./Hero.module.css";

/**
 * Wrap each word of the headline in a span so CSS can stagger them.
 * Words tagged with * are drawn from the gold gradient (in-place italic).
 *
 * Copy is deliberately short — 4 words, no unverifiable claims.
 */
const headlineParts: { text: string; em?: boolean }[] = [
  { text: "Precious" },
  { text: "metals." },
  { text: "Global", em: true },
  { text: "expertise.", em: true },
];

export function Hero() {
  const gridRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  // Very small parallax on grid lines + particles as the hero scrolls out.
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const y = window.scrollY;
        if (gridRef.current) gridRef.current.style.transform = `translate3d(0, ${y * 0.35}px, 0)`;
        if (particlesRef.current) particlesRef.current.style.transform = `translate3d(0, ${y * 0.12}px, 0)`;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // 14 particles at deterministic positions so they render identically on
  // every load (Date.now/Math.random would be a hydration hazard).
  const particles = [
    { left: "6%",  top: "82%", delay: "0s",    dur: "22s" },
    { left: "14%", top: "60%", delay: "3s",    dur: "26s" },
    { left: "22%", top: "88%", delay: "6s",    dur: "24s" },
    { left: "28%", top: "40%", delay: "1.5s",  dur: "28s" },
    { left: "36%", top: "72%", delay: "8s",    dur: "22s" },
    { left: "42%", top: "50%", delay: "4s",    dur: "26s" },
    { left: "50%", top: "90%", delay: "9s",    dur: "24s" },
    { left: "58%", top: "34%", delay: "2s",    dur: "28s" },
    { left: "64%", top: "78%", delay: "6.5s",  dur: "22s" },
    { left: "72%", top: "56%", delay: "3.5s",  dur: "26s" },
    { left: "80%", top: "84%", delay: "7.5s",  dur: "24s" },
    { left: "86%", top: "38%", delay: "1s",    dur: "28s" },
    { left: "92%", top: "68%", delay: "5s",    dur: "22s" },
    { left: "96%", top: "48%", delay: "10s",   dur: "26s" },
  ];

  return (
    <section className={styles.wrap} id="top" aria-label="Marmara Gold overview">
      <div ref={gridRef} className={styles.gridLines} aria-hidden />
      <div ref={particlesRef} className={styles.particles} aria-hidden>
        {particles.map((p, i) => (
          <span
            key={i}
            className={styles.particle}
            style={{ left: p.left, top: p.top, animationDelay: p.delay, animationDuration: p.dur }}
          />
        ))}
      </div>
      <div className="container">
        <div className={styles.split}>
        <div className={styles.inner}>
          <div className={styles.fineness}>Marmara Precious Metals Group</div>
          <h1 className={styles.headline}>
            {headlineParts.map((part, i) => (
              <span key={i}>
                <span
                  className={`${styles.w} ${part.em ? styles.em : ""}`}
                  style={{ animationDelay: `${0.35 + i * 0.09}s` }}
                >
                  {part.text}
                </span>
                {i < headlineParts.length - 1 ? " " : null}
              </span>
            ))}
          </h1>
          <p className={styles.lead}>
            Marmara Precious Metals Group delivers institutional trading,
            refining partnerships, physical settlement and logistics across
            gold, silver, platinum and palladium — from our Dubai base to
            counterparties around the world.
          </p>
          <div className={styles.actions}>
            <a href="#contact" className="btn btn--gold">
              Contact our team <IconArrowRight />
            </a>
            <a href="#about" className="btn btn--ghost-light">
              Explore our business <IconArrowRight />
            </a>
          </div>
          {/* iOS download link only surfaces when a real store URL is
              configured in src/lib/links.ts. Until Marmara Trader is
              live on the App Store this block stays hidden — no
              placeholder "coming soon" language. */}
          {links.iosApp && (
            <div className={styles.subActions}>
              <a
                href={links.iosApp}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.appLink}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                Download on iOS
              </a>
              <span className={styles.note}>
                Institutional &amp; professional clients only
              </span>
            </div>
          )}
        </div>

        <div className={styles.bars}>
          <HeroScene />
        </div>
        </div>
      </div>
    </section>
  );
}
