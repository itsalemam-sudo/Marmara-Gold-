export type NavLink = {
  label: string;
  href: string;
  /** Nav-item variant. "tab" renders as a highlighted pill (used for barX). */
  variant?: "default" | "tab";
};

export const nav: NavLink[] = [
  { label: "Home",       href: "#top" },
  { label: "Services",   href: "#services" },
  { label: "barX",       href: "#barx",     variant: "tab" },
  { label: "About Us",   href: "#about" },
  { label: "Blogs",      href: "#blogs" },
  { label: "Events",     href: "#events" },
  { label: "Our Offices",href: "#reach" },
  { label: "Leadership", href: "#leadership" },
];
