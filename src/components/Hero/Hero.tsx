import { useEffect, useRef } from "react";
import { IconArrowRight } from "@/components/icons/Icons";
import { HeroScene } from "./HeroScene";
import styles from "./Hero.module.css";

/**
 * Wrap each word of the headline in a span so CSS can stagger them.
 * Words tagged with * are drawn from the gold gradient (in-place italic).
 */
const headlineParts: { text: string; em?: boolean }[] = [
  { text: "Your" },
  { text: "trusted" },
  { text: "partner" },
  { text: "in" },
  { text: "precious", em: true },
  { text: "metals", em: true },
  { text: "trading" },
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
          <div className={styles.fineness}>Au 999.9 · FINE GOLD</div>
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
            At Marmara Gold Trading LLC, we deliver integrated solutions across the
            precious metals value chain — from physical trading and refining
            partnerships to vaulting and settlement. Specializing in gold, silver,
            platinum, and palladium, we serve institutional clients in over 60
            markets. Our commitment is built on transparency, compliance, and
            real-time execution you can trust.
          </p>
          <div className={styles.actions}>
            <a href="#contact" className="btn btn--gold">
              Contact us <IconArrowRight />
            </a>
            <a href="#services" className="btn btn--ghost-light">
              Our capabilities
            </a>
            <span className={styles.note}>
              Institutional &amp; professional clients only
            </span>
          </div>
        </div>

        <div className={styles.bars}>
          <HeroScene />
        </div>
        </div>
      </div>
    </section>
  );
}
