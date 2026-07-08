/**
 * Icon key drives the thin-stroke gold line icon in <WhyChoose/>.
 * Icons live in src/components/icons/Icons.tsx.
 *
 * NEW icon set (approved):  globe · shield-lock · sliders · market-pulse
 * OLD icon set (removed):   lightning · battery · check · clock
 * Do NOT swap the new set for the old.
 */
export type WhyChooseIcon =
  | "globe"
  | "shield-lock"
  | "sliders"
  | "market-pulse";

export type WhyChooseCard = {
  icon: WhyChooseIcon;
  title: string;
  body: string;
};

export const whyChoose: WhyChooseCard[] = [
  {
    icon: "globe",
    title: "Global precious-metals expertise",
    body: "Deep industry knowledge in gold, silver, platinum and palladium across emerging and established regions.",
  },
  {
    icon: "shield-lock",
    title: "Secure & compliant transactions",
    body: "Every trade conducted under strict AML/CFT and precious-metals regulatory frameworks.",
  },
  {
    icon: "sliders",
    title: "Tailored institutional solutions",
    body: "Custom-built trading, settlement and delivery models aligned with your business objectives.",
  },
  {
    icon: "market-pulse",
    title: "Real-time market advantage",
    body: "Live pricing, minimal spreads and competitive premiums across global bullion markets.",
  },
];
