import { useEffect, useRef } from "react";
import styles from "./ScrollProgress.module.css";

/**
 * Thin gold gradient bar pinned to the top of the viewport. Its
 * horizontal scale tracks how far the user has scrolled through the
 * document. Uses transform (compositor-only) so it's cheap even during
 * fast scrolls.
 */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;

    const update = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const p = height > 0 ? Math.min(1, Math.max(0, scrollTop / height)) : 0;
      el.style.transform = `scaleX(${p})`;
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        update();
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <div className={styles.bar} ref={ref} aria-hidden />;
}
