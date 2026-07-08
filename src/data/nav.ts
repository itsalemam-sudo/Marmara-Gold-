export type NavLink = {
  label: string;
  href: string;
  /** Nav-item variant. "tab" renders as a highlighted pill (used for barX). */
  variant?: "default" | "tab";
  external?: boolean;
};

export const nav: NavLink[] = [
  { label: "Home",       href: "#top" },
  { label: "Services",   href: "#services" },
  { label: "Products",   href: "#products" },
  { label: "barX",       href: "https://marmara.ntptrader.com/", variant: "tab", external: true },
  { label: "About Us",   href: "#about" },
  { label: "Blogs",      href: "#blogs" },
  { label: "Our Offices",href: "#reach" },
  { label: "Leadership", href: "#leadership" },
];
