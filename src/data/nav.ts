export type NavLink = {
  label: string;
  href: string;
  /** Nav-item variant. "tab" renders as a highlighted pill (used for barX). */
  variant?: "default" | "tab";
};

export const nav: NavLink[] = [
  { label: "Services",   href: "#capabilities" },
  { label: "About",      href: "#about" },
  { label: "Insights",   href: "#insights" },
  { label: "Offices",    href: "#reach" },
  { label: "Careers",    href: "#careers" },
  { label: "barX",       href: "#barx",     variant: "tab" },
  { label: "Contact",    href: "#contact" },
];
