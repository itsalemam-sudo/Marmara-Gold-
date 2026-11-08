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
  /** Marmara Trader — desktop/web access, owner-supplied 01 Nov 2026. */
  tradingPlatform: "https://marmara.ntptrader.com/",
  /** iOS app store link — owner-supplied 01 Nov 2026. */
  iosApp:          "https://apps.apple.com/ae/app/marmara-trader/id6502641675",
  /** Android — awaiting owner-supplied Play Store URL. */
  androidApp:      "",
} as const;
