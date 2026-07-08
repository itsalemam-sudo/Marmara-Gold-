import { useEffect } from "react";

/** Locks body scroll while `active` is true (mobile menu overlay). */
export function useLockScroll(active: boolean) {
  useEffect(() => {
    if (!active) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [active]);
}
