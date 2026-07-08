/**
 * Leadership team — surfaced from the WhatsApp brief.
 * Founder name is a placeholder until confirmed.
 *
 * All portraits use monogram placeholders (initial in gold on ink).
 * When real hosted image URLs land, add an `image` field per entry
 * and update the Leadership component to prefer `image` when present.
 */

export type TeamMember = {
  name: string;
  title: string;
  email?: string;
};

export const team: TeamMember[] = [
  {
    name: "Founder",
    title: "Founder",
    email: "info@marmaragold.ae",
  },
  {
    name: "Zaher Jesry",
    title: "Chief Financial Officer",
    email: "operations@marmaragold.ae",
  },
  {
    name: "Abdulaziz Sultan",
    title: "Business Development Manager",
    email: "M.Sultan@marmaragold.ae",
  },
  {
    name: "Khalid Dib",
    title: "Compliance & Risk Manager",
    email: "operations@marmaragold.ae",
  },
  {
    name: "Muhammed Sultan",
    title: "Head of Jewellery Division",
    email: "jewellery@marmaragold.ae",
  },
  {
    name: "Abdulaziz Mermar",
    title: "Precious Metals Desk",
    email: "preciousmetals@marmaragold.ae",
  },
];
