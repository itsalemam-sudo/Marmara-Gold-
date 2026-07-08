import styles from "./GoldBars.module.css";

/**
 * Isometric SVG stack of three cast gold bars.
 * Each bar has a top face (parallelogram), a front face (with engraved
 * marks) and a side face — with gradients and highlight strips to sell
 * the metal. The stack floats gently, a shimmer sweeps across the front
 * every few seconds, and a soft radial glow pulses behind the pile.
 *
 * All motion respects prefers-reduced-motion (see the CSS module).
 */
export function GoldBars() {
  return (
    <div className={styles.wrap} aria-hidden>
      <div className={styles.glow} />
      <svg viewBox="0 0 480 420" className={styles.svg}>
        <defs>
          {/* Top face — brightest gold */}
          <linearGradient id="mg-top" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%"   stopColor="#fbe9b0" />
            <stop offset="45%"  stopColor="#e8c477" />
            <stop offset="100%" stopColor="#c39946" />
          </linearGradient>
          {/* Front face — medium gold with warmer tint */}
          <linearGradient id="mg-front" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#e0b968" />
            <stop offset="55%"  stopColor="#c6a15b" />
            <stop offset="100%" stopColor="#8f6a2a" />
          </linearGradient>
          {/* Side face — deepest gold */}
          <linearGradient id="mg-side" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#9a752f" />
            <stop offset="100%" stopColor="#573f16" />
          </linearGradient>
          {/* Shimmer — moving highlight strip */}
          <linearGradient id="mg-shine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#ffffff" stopOpacity="0" />
            <stop offset="45%"  stopColor="#fff2c9" stopOpacity="0.55" />
            <stop offset="50%"  stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="55%"  stopColor="#fff2c9" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="mg-shadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#000000" stopOpacity="0.35" />
            <stop offset="70%"  stopColor="#000000" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
          {/* Clip the shimmer to only appear on the front faces */}
          <clipPath id="mg-shine-clip">
            <path d="M50 250 L280 250 L340 280 L340 340 L110 340 L50 310 Z" />
            <path d="M80 190 L310 190 L370 220 L370 280 L140 280 L80 250 Z" />
            <path d="M110 130 L340 130 L400 160 L400 220 L170 220 L110 190 Z" />
          </clipPath>
        </defs>

        {/* Ground shadow */}
        <ellipse cx="230" cy="365" rx="200" ry="16" fill="url(#mg-shadow)" />

        {/* --- Bottom bar --------------------------------------------- */}
        <g className={`${styles.bar} ${styles.bar1}`}>
          <BarFaces xOff={0} yOff={110} />
        </g>

        {/* --- Middle bar --------------------------------------------- */}
        <g className={`${styles.bar} ${styles.bar2}`}>
          <BarFaces xOff={30} yOff={50} labelBig="999.9" labelSmall="MARMARA · 1 KG · AU" />
        </g>

        {/* --- Top bar ------------------------------------------------ */}
        <g className={`${styles.bar} ${styles.bar3}`}>
          <BarFaces xOff={60} yOff={-10} />
        </g>

        {/* --- Shimmer sweep ------------------------------------------ */}
        <g clipPath="url(#mg-shine-clip)" className={styles.shimmer}>
          <rect x="-260" y="0" width="220" height="420" fill="url(#mg-shine)" />
        </g>

        {/* --- Corner sparkles --------------------------------------- */}
        <g className={styles.sparkle}>
          <path d="M420 90 L423 100 L433 103 L423 106 L420 116 L417 106 L407 103 L417 100 Z" fill="#ffe6a3" opacity="0.85" />
        </g>
        <g className={styles.sparkleB}>
          <path d="M60 260 L62 267 L69 269 L62 271 L60 278 L58 271 L51 269 L58 267 Z" fill="#ffe6a3" opacity="0.6" />
        </g>
      </svg>

      {/* Data caption under the bars */}
      <div className={styles.caption}>
        <div className={styles.captionRow}>
          <span className={styles.captionK}>Format</span>
          <span className={styles.captionV}>1 kg cast bar</span>
        </div>
        <div className={styles.captionRow}>
          <span className={styles.captionK}>Fineness</span>
          <span className={styles.captionV}>999.9 Au</span>
        </div>
        <div className={styles.captionRow}>
          <span className={styles.captionK}>Delivery</span>
          <span className={styles.captionV}>LBMA · Good Delivery</span>
        </div>
      </div>
    </div>
  );
}

/**
 * Draws the three faces of one cast-bar (top parallelogram, front
 * rectangle, side parallelogram) with optional engraved labels.
 */
function BarFaces({
  xOff, yOff, labelBig, labelSmall,
}: { xOff: number; yOff: number; labelBig?: string; labelSmall?: string }) {
  /* Reference geometry:
   *   Top face corners:    (50,180) → (280,180) → (340,210) → (110,210)
   *   Front face corners:  (110,210) → (340,210) → (340,270) → (110,270)
   *   Side face corners:   (280,180) → (340,210) → (340,270) → (280,240) */
  const tx = (n: number) => n + xOff;
  const ty = (n: number) => n + yOff;

  return (
    <>
      {/* Side face */}
      <path
        d={`M${tx(280)} ${ty(180)} L${tx(340)} ${ty(210)} L${tx(340)} ${ty(270)} L${tx(280)} ${ty(240)} Z`}
        fill="url(#mg-side)"
      />
      {/* Front face */}
      <path
        d={`M${tx(110)} ${ty(210)} L${tx(280)} ${ty(210)} L${tx(280)} ${ty(270)} L${tx(110)} ${ty(270)} Z`}
        fill="url(#mg-front)"
      />
      {/* Highlight strip on front */}
      <path
        d={`M${tx(110)} ${ty(217)} L${tx(280)} ${ty(217)}`}
        stroke="#fbe9b0"
        strokeWidth="1.6"
        opacity="0.6"
      />
      <path
        d={`M${tx(110)} ${ty(263)} L${tx(280)} ${ty(263)}`}
        stroke="#5a3f13"
        strokeWidth="1.2"
        opacity="0.55"
      />
      {/* Top face */}
      <path
        d={`M${tx(50)} ${ty(180)} L${tx(280)} ${ty(180)} L${tx(340)} ${ty(210)} L${tx(110)} ${ty(210)} Z`}
        fill="url(#mg-top)"
      />
      {/* Top highlight */}
      <path
        d={`M${tx(58)} ${ty(184)} L${tx(272)} ${ty(184)} L${tx(320)} ${ty(206)} L${tx(122)} ${ty(206)} Z`}
        fill="none"
        stroke="#fff5d0"
        strokeWidth="0.8"
        opacity="0.6"
      />
      {/* Engraved marks on the top face (subtle) */}
      <text
        x={tx(150)} y={ty(200)}
        fontFamily="'JetBrains Mono', monospace"
        fontSize="9"
        fontWeight="600"
        fill="#7a5a1c"
        opacity="0.55"
        letterSpacing="2"
      >
        MARMARA
      </text>

      {/* Front-face engravings — only on the featured bar */}
      {labelBig && (
        <text
          x={tx(150)} y={ty(245)}
          fontFamily="'Fraunces', serif"
          fontSize="20"
          fontWeight="600"
          fill="#5a3f13"
          opacity="0.85"
        >
          {labelBig}
        </text>
      )}
      {labelSmall && (
        <text
          x={tx(120)} y={ty(258)}
          fontFamily="'JetBrains Mono', monospace"
          fontSize="6.5"
          fontWeight="500"
          fill="#5a3f13"
          opacity="0.7"
          letterSpacing="1.6"
        >
          {labelSmall}
        </text>
      )}
    </>
  );
}
