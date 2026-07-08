/**
 * Very lightweight, stylised world map (schematic, not geographic).
 * Renders a soft dot grid + 6 marker positions with a pulse.
 * Kept as JSX so it works with SVG animation and inherits color from CSS.
 */
export function WorldMap({ className }: { className?: string }) {
  // 6 marker positions on a 800×400 grid.
  const markers = [
    { cx: 550, cy: 210, label: "Dubai" },     // Middle East
    { cx: 480, cy: 190, label: "Istanbul" },  // Türkiye
    { cx: 400, cy: 170, label: "London" },    // UK
    { cx: 430, cy: 175, label: "Zurich" },    // Switzerland
    { cx: 650, cy: 250, label: "Singapore" }, // Singapore
    { cx: 690, cy: 200, label: "Hong Kong" }, // HK
    { cx: 210, cy: 205, label: "New York" },  // US East Coast
  ];

  // Build a very sparse dot grid — schematic, not accurate.
  const dots = [];
  for (let y = 40; y < 380; y += 22) {
    for (let x = 100; x < 720; x += 22) {
      // shave corners to hint at a globe
      const cx = 400, cy = 200, rx = 320, ry = 170;
      const nx = (x - cx) / rx, ny = (y - cy) / ry;
      if (nx * nx + ny * ny > 1) continue;
      dots.push([x, y]);
    }
  }

  return (
    <svg viewBox="0 0 800 400" className={className} aria-hidden>
      {/* dot grid */}
      {dots.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={1.2} fill="currentColor" />
      ))}

      {/* connector arcs from Dubai to a few desks */}
      {[
        [550, 210, 400, 170],   // Dubai → London
        [550, 210, 650, 250],   // Dubai → Singapore
        [550, 210, 690, 200],   // Dubai → Hong Kong
        [550, 210, 210, 205],   // Dubai → New York
        [550, 210, 480, 190],   // Dubai → Istanbul
        [550, 210, 430, 175],   // Dubai → Zurich
      ].map(([x1, y1, x2, y2], i) => {
        const mx = (x1 + x2) / 2;
        const my = Math.min(y1, y2) - 60;
        return (
          <path
            key={`arc-${i}`}
            d={`M${x1} ${y1} Q${mx} ${my} ${x2} ${y2}`}
            fill="none"
            stroke="#C6A15B"
            strokeWidth="0.75"
            opacity="0.4"
          />
        );
      })}

      {/* markers */}
      {markers.map((m, i) => (
        <g key={m.label}>
          <circle cx={m.cx} cy={m.cy} r={2.4} />
          <circle cx={m.cx} cy={m.cy} r={2.4} className={i === 0 ? "pulse" : ""} />
        </g>
      ))}
    </svg>
  );
}
