import styles from "./AnimatedGlobe.module.css";

/**
 * Stylised SVG globe. Slowly rotates the meridian ring, orbits a satellite
 * arc, and pulses six desk markers positioned roughly to match Dubai,
 * Istanbul, London, Zurich, Singapore, Hong Kong and New York.
 *
 * All motion is CSS keyframes so it disables under prefers-reduced-motion.
 */
export function AnimatedGlobe({ className }: { className?: string }) {
  const markers: { cx: number; cy: number; label: string }[] = [
    { cx: 275, cy: 165, label: "Dubai" },
    { cx: 235, cy: 152, label: "Istanbul" },
    { cx: 195, cy: 140, label: "London" },
    { cx: 210, cy: 148, label: "Zurich" },
    { cx: 340, cy: 195, label: "Singapore" },
    { cx: 360, cy: 165, label: "Hong Kong" },
    { cx: 110, cy: 168, label: "New York" },
  ];

  return (
    <svg
      viewBox="0 0 500 320"
      className={`${styles.svg} ${className ?? ""}`}
      aria-hidden
    >
      <defs>
        <radialGradient id="mg-globe-glow" cx="50%" cy="50%" r="52%">
          <stop offset="0%"  stopColor="#e0c079" stopOpacity="0.22" />
          <stop offset="55%" stopColor="#c6a15b" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#c6a15b" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="mg-connector" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#c6a15b" stopOpacity="0" />
          <stop offset="50%"  stopColor="#e0c079" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#c6a15b" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Ambient glow */}
      <ellipse cx="250" cy="160" rx="230" ry="150" fill="url(#mg-globe-glow)" />

      {/* Outer globe ring */}
      <ellipse
        cx="250" cy="160" rx="150" ry="150"
        fill="none"
        stroke="rgba(198,161,91,0.35)"
        strokeWidth="0.8"
      />

      {/* Meridians — several slanted ellipses that rotate to hint motion. */}
      <g className={styles.meridians}>
        <ellipse cx="250" cy="160" rx="150" ry="150" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.6" />
        <ellipse cx="250" cy="160" rx="120" ry="150" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.6" />
        <ellipse cx="250" cy="160" rx="80"  ry="150" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.6" />
        <ellipse cx="250" cy="160" rx="40"  ry="150" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.6" />
      </g>

      {/* Parallels */}
      <g stroke="rgba(255,255,255,0.05)" strokeWidth="0.6" fill="none">
        <ellipse cx="250" cy="160" rx="150" ry="30" />
        <ellipse cx="250" cy="160" rx="150" ry="60" />
        <ellipse cx="250" cy="160" rx="150" ry="90" />
        <ellipse cx="250" cy="160" rx="150" ry="120" />
      </g>

      {/* Land continents — rough silhouettes drawn as dot clusters. */}
      <g fill="rgba(255,255,255,0.14)">
        {landDots.map((d, i) => (
          <circle key={i} cx={d[0]} cy={d[1]} r={d[2] ?? 1} />
        ))}
      </g>

      {/* Arc connectors radiating from Dubai. */}
      <g className={styles.arcs} strokeLinecap="round" fill="none">
        {[
          [275, 165, 195, 140],
          [275, 165, 340, 195],
          [275, 165, 360, 165],
          [275, 165, 110, 168],
          [275, 165, 235, 152],
          [275, 165, 210, 148],
        ].map(([x1, y1, x2, y2], i) => {
          const mx = (x1 + x2) / 2;
          const my = Math.min(y1, y2) - 55;
          return (
            <path
              key={`arc-${i}`}
              d={`M${x1} ${y1} Q${mx} ${my} ${x2} ${y2}`}
              stroke="url(#mg-connector)"
              strokeWidth="1"
              opacity="0.75"
              className={styles.arc}
              style={{ animationDelay: `${i * 0.55}s` }}
            />
          );
        })}
      </g>

      {/* Orbit satellite ring */}
      <g className={styles.satellite}>
        <ellipse
          cx="250" cy="160" rx="175" ry="60"
          fill="none"
          stroke="rgba(224,192,121,0.4)"
          strokeWidth="0.8"
          strokeDasharray="3 6"
          transform="rotate(-14 250 160)"
        />
      </g>

      {/* Markers */}
      {markers.map((m) => (
        <g key={m.label}>
          <circle cx={m.cx} cy={m.cy} r="6" className={styles.pulse} />
          <circle cx={m.cx} cy={m.cy} r="2.4" fill="#e0c079" />
        </g>
      ))}
    </svg>
  );
}

/**
 * Sparse land-mass dot cluster — very approximate, purely decorative.
 * Coordinates are on the 500 × 320 svg viewBox with the globe at (250,160).
 */
const landDots: [number, number, number?][] = [
  // North America
  [100, 155, 1.2], [110, 158, 1], [120, 152, 1], [96, 172, 1],
  [128, 162, 1.2], [138, 172, 1], [148, 182, 1], [104, 190, 1],
  [88,  158, 0.8], [82, 176, 0.8],

  // South America
  [148, 210, 1], [156, 224, 1.2], [162, 240, 1], [154, 250, 0.8], [148, 262, 0.8],

  // Europe
  [200, 138, 1], [206, 130, 0.8], [212, 142, 1.2], [220, 138, 1], [228, 132, 1],
  [232, 148, 0.8], [240, 142, 1],

  // Africa
  [232, 200, 1.2], [240, 218, 1], [246, 234, 1], [242, 250, 0.8], [252, 216, 1],
  [258, 234, 0.8], [222, 190, 1], [230, 178, 0.8],

  // Middle East
  [260, 175, 1], [266, 170, 1], [272, 168, 1.2], [278, 170, 1],

  // Asia
  [292, 158, 1], [302, 152, 1], [312, 148, 0.8], [322, 152, 1.2], [332, 158, 1],
  [340, 168, 1], [348, 178, 1], [356, 170, 1.2], [362, 162, 1], [370, 158, 0.8],

  // South-east Asia
  [330, 200, 1.2], [340, 208, 1], [346, 220, 0.8], [352, 214, 0.8],

  // Australia
  [370, 232, 1.2], [382, 240, 1], [390, 232, 1], [396, 244, 0.8],
];
