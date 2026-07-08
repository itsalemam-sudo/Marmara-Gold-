/**
 * 6-card Services grid — modelled on the existing marmaragold.ae Services
 * page (Buy · Sell · Refining · Storage · Digital Trading · Market Insights).
 */

export type ServiceIcon =
  | "cart"
  | "dollar"
  | "flame"
  | "vault"
  | "chart"
  | "book";

export type ServiceCard = {
  icon: ServiceIcon;
  title: string;
  lede: string;
  bullets: string[];
  cta: { label: string; href: string };
};

export const services: ServiceCard[] = [
  {
    icon: "cart",
    title: "Buy Precious Metals",
    lede: "Purchase LBMA-accredited gold kilo bars, DGD bars, and more.",
    bullets: [
      "LBMA-accredited gold kilo bars",
      "DGD bars and gold grains",
      "22K Indian gold jewelry",
    ],
    cta: { label: "Enquire", href: "#contact" },
  },
  {
    icon: "dollar",
    title: "Sell Precious Metals",
    lede: "Sell gold scrap and semi-refined metals responsibly.",
    bullets: [
      "Gold scrap",
      "Ethical sourcing",
      "Assay-based settlement",
    ],
    cta: { label: "Enquire", href: "#contact" },
  },
  {
    icon: "flame",
    title: "Refining Services",
    lede: "Refine precious metals with strict purity standards.",
    bullets: [
      "High-quality refining",
      "Collaboration with UAE refinery",
      "Certified output",
    ],
    cta: { label: "Enquire", href: "#contact" },
  },
  {
    icon: "vault",
    title: "Secure Storage Solutions",
    lede: "Store precious metals securely and ethically.",
    bullets: [
      "Secure handling",
      "Reliable storage",
      "Insured global vaults",
    ],
    cta: { label: "Enquire", href: "#contact" },
  },
  {
    icon: "chart",
    title: "Digital Trading Applications",
    lede: "Seamless trading with digital platforms.",
    bullets: [
      "Real-time price tracking",
      "Gold trading",
      "Trend analysis",
    ],
    cta: { label: "Enquire", href: "#contact" },
  },
  {
    icon: "book",
    title: "Market Insights & Reporting",
    lede: "Educational content and industry transparency.",
    bullets: [
      "Tutorial videos",
      "Membership with RJC",
      "Weekly market briefs",
    ],
    cta: { label: "Enquire", href: "#contact" },
  },
];
