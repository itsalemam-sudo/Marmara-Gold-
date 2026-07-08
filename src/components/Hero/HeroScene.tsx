import { usePrices } from "@/hooks/usePrices";
import styles from "./HeroScene.module.css";

/**
 * Cinematic hero visual: a rotating 3D gold coin at the centre, four
 * orbiting live-price satellites, a subtle constellation backdrop,
 * radiating light rays, and rising gold sparkles.
 *
 * Everything is CSS + inline SVG — no images, no libraries. All motion
 * gates on prefers-reduced-motion.
 */
export function HeroScene() {
  const { quotes } = usePrices();

  const price = (sym: "AU" | "AG" | "PT" | "PD") => {
    const q = quotes.find((x) => x.symbol === sym);
    return q ? q.spotUsd.toLocaleString("en-US", { maximumFractionDigits: 0 }) : "…";
  };

  return (
    <div className={styles.wrap} aria-hidden>
      {/* Layer 1 — constellation */}
      <div className={styles.constellation}>
        <ConstellationBackdrop />
      </div>

      {/* Layer 2 — radiating rays (pure CSS) */}
      <div className={styles.rays} />

      {/* Layer 3 — halo rings */}
      <div className={styles.halo} />

      {/* Layer 4 — 3D coin */}
      <div className={styles.coinFrame}>
        <div className={styles.face}>
          <CoinFront />
        </div>
        <div className={`${styles.face} ${styles.faceBack}`}>
          <CoinBack />
        </div>
        <div className={styles.rim} />
      </div>

      {/* Layer 5 — orbiting metal satellites */}
      <div className={styles.orbits}>
        <span className={`${styles.sat} ${styles.sat1}`}>
          <b>Au</b> ${price("AU")}
        </span>
        <span className={`${styles.sat} ${styles.sat2}`}>
          <b>Ag</b> ${price("AG")}
        </span>
        <span className={`${styles.sat} ${styles.sat3}`}>
          <b>Pt</b> ${price("PT")}
        </span>
        <span className={`${styles.sat} ${styles.sat4}`}>
          <b>Pd</b> ${price("PD")}
        </span>
      </div>

      {/* Layer 6 — sparkles */}
      <div className={styles.particles}>
        {sparks.map((s, i) => (
          <span
            key={i}
            className={styles.spark}
            style={{
              left: s.left,
              top: s.top,
              animationDelay: s.delay,
              animationDuration: s.dur,
            }}
          />
        ))}
      </div>

      {/* Caption */}
      <span className={styles.caption}>
        <span className={styles.dot} />
        Live · Au 999.9 · MENA desk
      </span>
    </div>
  );
}

/* --------------------------------------------------------------- */
/* Coin faces                                                       */
/* --------------------------------------------------------------- */

function CoinFront() {
  return (
    <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
      <defs>
        <radialGradient id="coin-front-glow" cx="35%" cy="30%" r="60%">
          <stop offset="0%"   stopColor="#fff5d0" stopOpacity="0.9" />
          <stop offset="50%"  stopColor="#fff5d0" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ring-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#fbe9b0" />
          <stop offset="100%" stopColor="#8f6a2a" />
        </linearGradient>
      </defs>

      {/* Highlight */}
      <ellipse cx="140" cy="120" rx="120" ry="80" fill="url(#coin-front-glow)" />

      {/* Outer engraved ring */}
      <circle cx="200" cy="200" r="180" fill="none" stroke="url(#ring-grad)" strokeWidth="2" opacity="0.85" />
      <circle cx="200" cy="200" r="170" fill="none" stroke="#5a3f13" strokeWidth="0.7" opacity="0.7" />

      {/* Outer text along arc */}
      <path id="outer-arc-front" d="M 200 200 m -155 0 a 155 155 0 1 1 310 0 a 155 155 0 1 1 -310 0" fill="none" />
      <text fontFamily="'JetBrains Mono', monospace" fontSize="15" fontWeight="600" letterSpacing="6" fill="#5a3f13" opacity="0.9">
        <textPath href="#outer-arc-front" startOffset="0">
          · MARMARA GOLD TRADING LLC · DUBAI · MARMARA GOLD TRADING LLC · DUBAI ·
        </textPath>
      </text>

      {/* Inner divider ring */}
      <circle cx="200" cy="200" r="120" fill="none" stroke="#5a3f13" strokeWidth="0.9" opacity="0.55" />
      <circle cx="200" cy="200" r="115" fill="none" stroke="#fff5d0" strokeWidth="0.5" opacity="0.5" />

      {/* Central monogram — stylised "M" */}
      <g fill="#5a3f13" opacity="0.85">
        <path d="M120 250 L120 150 L140 150 L200 210 L260 150 L280 150 L280 250 L260 250 L260 185 L210 235 L190 235 L140 185 L140 250 Z" />
        <rect x="120" y="258" width="160" height="6" rx="3" />
      </g>

      {/* Fineness stamp */}
      <text
        x="200" y="290"
        textAnchor="middle"
        fontFamily="'Fraunces', serif"
        fontSize="20"
        fontWeight="600"
        fill="#5a3f13"
        opacity="0.85"
      >
        999.9
      </text>
      <text
        x="200" y="308"
        textAnchor="middle"
        fontFamily="'JetBrains Mono', monospace"
        fontSize="9"
        letterSpacing="3"
        fill="#5a3f13"
        opacity="0.7"
      >
        FINE GOLD
      </text>

      {/* Little decorative marks left/right */}
      <g fill="#5a3f13" opacity="0.75">
        <path d="M100 195 L108 200 L100 205 L104 200 Z" />
        <path d="M300 195 L292 200 L300 205 L296 200 Z" />
      </g>
    </svg>
  );
}

function CoinBack() {
  return (
    <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
      <defs>
        <radialGradient id="coin-back-glow" cx="70%" cy="30%" r="60%">
          <stop offset="0%"   stopColor="#fff5d0" stopOpacity="0.9" />
          <stop offset="50%"  stopColor="#fff5d0" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Highlight */}
      <ellipse cx="260" cy="120" rx="120" ry="80" fill="url(#coin-back-glow)" />

      {/* Outer rings */}
      <circle cx="200" cy="200" r="180" fill="none" stroke="#8f6a2a" strokeWidth="2" opacity="0.7" />
      <circle cx="200" cy="200" r="170" fill="none" stroke="#5a3f13" strokeWidth="0.7" opacity="0.7" />

      {/* Outer text along arc */}
      <path id="outer-arc-back" d="M 200 200 m -155 0 a 155 155 0 1 1 310 0 a 155 155 0 1 1 -310 0" fill="none" />
      <text fontFamily="'JetBrains Mono', monospace" fontSize="13" fontWeight="600" letterSpacing="5" fill="#5a3f13" opacity="0.9">
        <textPath href="#outer-arc-back" startOffset="0">
          · EST · 2022 · DMCC LICENSED · LBMA ALIGNED · UAE · MENA GATEWAY · EST · 2022 ·
        </textPath>
      </text>

      {/* Inner decorative mandala */}
      <g stroke="#5a3f13" strokeWidth="0.9" fill="none" opacity="0.7">
        <circle cx="200" cy="200" r="120" />
        <circle cx="200" cy="200" r="95" />
        <circle cx="200" cy="200" r="70" />
        {/* 8-point star */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * Math.PI) / 4;
          const x = 200 + Math.cos(angle) * 100;
          const y = 200 + Math.sin(angle) * 100;
          return <line key={i} x1="200" y1="200" x2={x} y2={y} strokeWidth="0.6" />;
        })}
        {/* Diamond overlay */}
        <path d="M200 130 L270 200 L200 270 L130 200 Z" />
        <path d="M200 155 L245 200 L200 245 L155 200 Z" />
      </g>

      {/* Central crest — stylised M inside diamond */}
      <g fill="#5a3f13" opacity="0.9">
        <path d="M180 220 L180 180 L188 180 L200 195 L212 180 L220 180 L220 220 L214 220 L214 190 L204 202 L196 202 L186 190 L186 220 Z" />
      </g>

      {/* Serial along the bottom */}
      <text
        x="200" y="330"
        textAnchor="middle"
        fontFamily="'JetBrains Mono', monospace"
        fontSize="10"
        letterSpacing="4"
        fill="#5a3f13"
        opacity="0.85"
      >
        MG · 2026 · 001
      </text>
    </svg>
  );
}

/* --------------------------------------------------------------- */
/* Backdrop dots — a subtle constellation                           */
/* --------------------------------------------------------------- */
function ConstellationBackdrop() {
  // deterministic dot positions to avoid Math.random() at build time
  const dots: [number, number, number][] = [
    [40,  80,  1.6], [140, 30, 1.1], [240, 50, 1.4], [320, 100, 1.7],
    [70,  200, 1.2], [180, 240, 0.9], [280, 260, 1.5], [370, 210, 1.1],
    [90,  340, 1.4], [220, 380, 1.2], [340, 340, 1.6], [50,  460, 0.8],
    [200, 460, 1.1], [370, 440, 1.3], [420, 300, 0.9], [430, 130, 1.4],
    [10,  380, 1.0], [130, 130, 0.8], [400, 260, 1.0], [260, 130, 1.3],
  ];
  return (
    <svg viewBox="0 0 480 480" width="100%" height="100%">
      {dots.map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill="#e0c079" opacity="0.35" />
      ))}
      {/* Faint connection lines between a few dots */}
      <g stroke="#c6a15b" strokeWidth="0.4" fill="none" opacity="0.28">
        <line x1="40"  y1="80"  x2="140" y2="30" />
        <line x1="140" y1="30"  x2="240" y2="50" />
        <line x1="240" y1="50"  x2="320" y2="100" />
        <line x1="220" y1="380" x2="340" y2="340" />
        <line x1="340" y1="340" x2="200" y2="460" />
        <line x1="70"  y1="200" x2="180" y2="240" />
        <line x1="180" y1="240" x2="280" y2="260" />
      </g>
    </svg>
  );
}

const sparks = [
  { left: "18%", top: "80%", delay: "0s",   dur: "8s"  },
  { left: "32%", top: "88%", delay: "1.5s", dur: "9s"  },
  { left: "48%", top: "82%", delay: "3s",   dur: "7.5s" },
  { left: "62%", top: "90%", delay: "0.5s", dur: "8.5s" },
  { left: "78%", top: "84%", delay: "2s",   dur: "9.5s" },
  { left: "88%", top: "78%", delay: "4s",   dur: "8s"  },
  { left: "10%", top: "70%", delay: "3.5s", dur: "10s" },
];
