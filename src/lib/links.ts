/**
 * External destinations used across the site.
 *
 * IMPORTANT — public URLs stay OFF until the client confirms a live
 * one. Never render a call-to-action pointing at an empty string;
 * every caller must check the value first
 * (e.g. `if (links.iosApp) { … }`) so the button/link is hidden
 * until the destination exists. This keeps the site free of dead
 * placeholders like `#` or a URL that shouldn't be public yet.
 *
 * When Marmara Trader ships on the App Store and the trading portal
 * has its final production URL, set them here — every consumer will
 * pick them up automatically.
 */
export const links = {
  /** Marmara Trader — set when the production URL is signed off. */
  tradingPlatform: "",
  /** iOS app store link — set when the App Store listing is live. */
  iosApp:          "",
  /** Android — set when they publish. */
  androidApp:      "",
} as const;
