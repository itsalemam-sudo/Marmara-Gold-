export type FooterColumn = {
  title: string;
  links: { label: string; href: string }[];
};

/**
 * Legacy footer link columns.
 *
 * The rendered footer no longer reads from this file — it derives its
 * nav columns directly from `src/data/nav.ts` so the header and footer
 * stay in sync automatically. Kept here as an empty export in case a
 * secondary surface still imports the symbol; delete once every caller
 * is confirmed removed.
 */
export const footerColumns: FooterColumn[] = [];

export type TrustBadge = {
  short: string;
  name: string;
  detail: string;
};

/**
 * Trust badges — deliberately empty until the client confirms which
 * bodies Marmara can publicly claim. Do NOT re-add "LBMA" or "DMCC"
 * without written sign-off; when the confirmed list is ready, add
 * entries here and the compliance strip will pick them up.
 */
export const trustBadges: TrustBadge[] = [];

export const disclaimer = `Marmara Precious Metals Group provides institutional precious metals trading, refining, physical settlement and logistics solutions across key markets. Information on this website is for institutional and professional use only and does not constitute an offer, solicitation or recommendation to trade or invest. All precious metals activity carries risk. Marmara maintains AML/CFT and KYC controls aligned with UAE regulation and applicable international standards.`;
