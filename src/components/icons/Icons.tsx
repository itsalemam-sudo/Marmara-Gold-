import type { SVGProps } from "react";
import type { WhyChooseIcon } from "@/data/whyChoose";

/**
 * Icon library — thin-stroke gold line icons.
 *
 * The <WhyChooseGlyph name={...}/> component selects the correct one for
 * the WhyChoose section. Stroke is currentColor so the parent controls
 * the color (typically --gold).
 */

const baseProps = {
  width: 44,
  height: 44,
  viewBox: "0 0 44 44",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} satisfies SVGProps<SVGSVGElement>;

/* ------------ Globe: latitudes + meridians ------------ */
export const IconGlobe = (props: SVGProps<SVGSVGElement>) => (
  <svg {...baseProps} aria-hidden {...props}>
    <circle cx="22" cy="22" r="15" />
    <ellipse cx="22" cy="22" rx="7" ry="15" />
    <path d="M7 22h30" />
    <path d="M11.5 12h21M11.5 32h21" />
  </svg>
);

/* ------------ Shield with lock ------------ */
export const IconShieldLock = (props: SVGProps<SVGSVGElement>) => (
  <svg {...baseProps} aria-hidden {...props}>
    <path d="M22 6l12 4v10c0 8-5.4 14.2-12 16-6.6-1.8-12-8-12-16V10l12-4z" />
    <rect x="17.5" y="20" width="9" height="8.5" rx="1" />
    <path d="M19.5 20v-2a2.5 2.5 0 015 0v2" />
  </svg>
);

/* ------------ Sliders / adjustable settings ------------ */
export const IconSliders = (props: SVGProps<SVGSVGElement>) => (
  <svg {...baseProps} aria-hidden {...props}>
    <path d="M8 13h9M22 13h14M8 22h4M17 22h19M8 31h19M31 31h5" />
    <circle cx="19.5" cy="13" r="2.5" />
    <circle cx="14.5" cy="22" r="2.5" />
    <circle cx="29" cy="31" r="2.5" />
  </svg>
);

/* ------------ Market pulse: chart line with a beat ------------ */
export const IconMarketPulse = (props: SVGProps<SVGSVGElement>) => (
  <svg {...baseProps} aria-hidden {...props}>
    <path d="M6 32V12M38 32H6" />
    <path d="M9 25l5-6 5 5 4-11 5 14 4-6" />
    <circle cx="34" cy="21" r="2" fill="currentColor" stroke="none" />
  </svg>
);

/* ------------ Small utility icons ------------ */
export const IconArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden {...props}>
    <path d="M6 2v8M6 2l3 3M6 2L3 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
export const IconArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden {...props}>
    <path d="M6 10V2M6 10l3-3M6 10L3 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
export const IconArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden {...props}>
    <path d="M2 7h10M12 7l-4-4M12 7l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
export const IconMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden {...props}>
    <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
export const IconClose = (props: SVGProps<SVGSVGElement>) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden {...props}>
    <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
export const IconMarker = (props: SVGProps<SVGSVGElement>) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden {...props}>
    <path d="M8 15c-4-5-6-8-6-10a6 6 0 0112 0c0 2-2 5-6 10z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    <circle cx="8" cy="5" r="1.6" fill="currentColor" />
  </svg>
);

/* Social icons (line style) */
export const IconLinkedIn = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.4" />
    <path d="M7.5 10v7M7.5 7.6v.05M10.6 17v-3.5c0-1.4.9-2.5 2.3-2.5s2.3 1.1 2.3 2.5V17M15.2 17v-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);
export const IconX = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
    <path d="M4 4l16 16M20 4L4 20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);
export const IconYouTube = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
    <rect x="2.5" y="6" width="19" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.4" />
    <path d="M10 10l5 3-5 3v-6z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
  </svg>
);

/* National flag glyphs — used by the EN / TR language switch in Nav.
   Simple, historically standard designs, drawn as inline SVG so they
   ship without a network hit and inherit border-radius from the parent. */
export const IconFlagGB = (props: SVGProps<SVGSVGElement>) => (
  <svg width="22" height="16" viewBox="0 0 60 40" aria-hidden {...props}>
    <clipPath id="mg-flag-gb-clip"><rect width="60" height="40" rx="2" /></clipPath>
    <g clipPath="url(#mg-flag-gb-clip)">
      <rect width="60" height="40" fill="#012169" />
      {/* Diagonals — white then red */}
      <path d="M0 0l60 40M60 0L0 40" stroke="#ffffff" strokeWidth="8" />
      <path d="M0 0l60 40M60 0L0 40" stroke="#C8102E" strokeWidth="3" />
      {/* Cross — white then red */}
      <path d="M30 0v40M0 20h60" stroke="#ffffff" strokeWidth="12" />
      <path d="M30 0v40M0 20h60" stroke="#C8102E" strokeWidth="6" />
    </g>
  </svg>
);
export const IconFlagTR = (props: SVGProps<SVGSVGElement>) => (
  <svg width="22" height="16" viewBox="0 0 60 40" aria-hidden {...props}>
    <clipPath id="mg-flag-tr-clip"><rect width="60" height="40" rx="2" /></clipPath>
    <g clipPath="url(#mg-flag-tr-clip)">
      <rect width="60" height="40" fill="#E30A17" />
      {/* Crescent — two overlapping circles for the concave */}
      <circle cx="23" cy="20" r="8" fill="#ffffff" />
      <circle cx="25" cy="20" r="6.4" fill="#E30A17" />
      {/* 5-point star */}
      <polygon
        points="34,20 39.3,18.3 36,22.8 36,17.2 39.3,21.7"
        fill="#ffffff"
      />
    </g>
  </svg>
);

/* Marmara wordmark (M monogram) */
export const IconLogoMonogram = (props: SVGProps<SVGSVGElement>) => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden {...props}>
    <path d="M4 22V6l10 10L24 6v16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 24h20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

/* Dispatcher used by WhyChoose */
export function WhyChooseGlyph({
  name,
  ...rest
}: { name: WhyChooseIcon } & SVGProps<SVGSVGElement>) {
  switch (name) {
    case "globe":        return <IconGlobe {...rest} />;
    case "shield-lock":  return <IconShieldLock {...rest} />;
    case "sliders":      return <IconSliders {...rest} />;
    case "market-pulse": return <IconMarketPulse {...rest} />;
  }
}
