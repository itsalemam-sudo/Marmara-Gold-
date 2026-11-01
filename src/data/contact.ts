/**
 * Department contact directory + HQ address.
 *
 * Only the general mailbox + phone/WhatsApp + addresses + hours were
 * owner-confirmed on 31 Oct 2026. The departmental mailboxes below are
 * NOT confirmed — the owner's instruction was "Other departmental
 * mailboxes require confirmation before retention." Until that comes
 * back, the Contact page should present only the general mailbox and
 * phone; keep this list in code for easy restore but do not render it.
 */

export type Department = {
  name: string;
  email: string;
  detail: string;
};

/** Pending owner confirmation — do NOT render until each entry is signed off. */
export const departments: Department[] = [];

export const hq = {
  address:
    "Al Khor Street, The Gold Center Building, Zone 5, Floor 1, Office 25, Deira, Dubai, UAE",
  branch:
    "The Gold Center Building, Shop Nos. G071 & G072, Deira, Dubai, UAE",
  /** Office & branch hours. Trading desk coverage (22h/5d) is separate — see data/services.ts. */
  hours: "Mon–Sat · 10:00–18:00 Dubai time (UTC+4)",
  website: "www.marmaragold.ae",
  general: "info@marmaragold.co",
  phone: "+971 4 346 3667",
  /** tel: href for click-to-call. */
  phoneHref: "tel:+97143463667",
  /** wa.me link for click-to-WhatsApp. */
  whatsappHref: "https://wa.me/97143463667",
  careers: "hr@marmaragold.co",
};
