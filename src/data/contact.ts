/**
 * Department contact directory + HQ address.
 * Emails come from the internal brief; the phone/website are placeholders
 * until confirmed.
 */

export type Department = {
  name: string;
  email: string;
  detail: string;
};

export const departments: Department[] = [
  {
    name: "Precious Metals Desk",
    email: "preciousmetals@marmaragold.ae",
    detail: "Bullion trading, RFQs, spot & forward pricing.",
  },
  {
    name: "Jewellery Division",
    email: "jewellery@marmaragold.ae",
    detail: "Custom minting, tola supply, hallmarking programs.",
  },
  {
    name: "Operations",
    email: "operations@marmaragold.ae",
    detail: "Settlement, delivery, vaulting and logistics.",
  },
  {
    name: "Business Development",
    email: "M.Sultan@marmaragold.ae",
    detail: "New relationships, institutional onboarding, KYC.",
  },
];

export const hq = {
  address:
    "Al Khor Street, The Gold Center Building, Zone 5 — Office 25, Deira, Dubai, UAE",
  branch:
    "The Gold Center Building — Shop No. G071 & G072, Deira, Dubai, UAE",
  hours: "Sun–Thu · 09:00–18:00 GST",
  website: "www.marmaragold.ae",
  general: "webmaster@marmaragold.ae",
};
