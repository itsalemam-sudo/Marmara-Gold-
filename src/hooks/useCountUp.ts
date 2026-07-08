import { useEffect, useRef, useState } from "react";

/**
 * Fires a numeric count-up when the returned ref enters the viewport.
 * Supports "300+", "$4T", "60+" style values by extracting digits and
 * preserving the surrounding characters.
 *
 * Respects prefers-reduced-motion — jumps to the final value at once.
 */
export function useCountUp(target: string, duration = 1400) {
  const ref = useRef<HTMLElement | null>(null);
  const [text, setText] = useState<string>(target);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const digits = target.match(/[\d.]+/);
    if (!digits) {
      setText(target);
      return;
    }
    const finalNum = parseFloat(digits[0]);
    const prefix = target.slice(0, digits.index);
    const suffix = target.slice(digits.index! + digits[0].length);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || typeof IntersectionObserver === "undefined") {
      setText(target);
      return;
    }

    // Initially show 0 to make the count-up dramatic.
    setText(prefix + "0" + suffix);
    let started = false;

    const start = (t0: number) => {
      const step = (now: number) => {
        const p = Math.min(1, (now - t0) / duration);
        // ease-out cubic
        const eased = 1 - Math.pow(1 - p, 3);
        const current = eased * finalNum;
        const shown = finalNum >= 10 || finalNum % 1 === 0
          ? Math.round(current).toString()
          : current.toFixed(1);
        setText(prefix + shown + suffix);
        if (p < 1) requestAnimationFrame(step);
        else setText(target);
      };
      requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !started) {
            started = true;
            start(performance.now());
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.4 }
    );
    io.observe(el);

    // Fallback: if IO never fires, show final value after 3s so
    // headless screenshotters and long documents don't leave 0.
    const fallback = window.setTimeout(() => {
      if (!started) {
        started = true;
        setText(target);
        io.disconnect();
      }
    }, 3000);

    return () => {
      io.disconnect();
      clearTimeout(fallback);
    };
  }, [target, duration]);

  return { ref, text };
}
