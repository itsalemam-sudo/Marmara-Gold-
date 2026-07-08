/**
 * Leadership team.
 *
 * Vite resolves the `image` imports at build time so the URLs are
 * content-hashed and long-cached. Members without a photo fall back
 * to a gold monogram of their initials in the Leadership component.
 */

import zaherJesry       from "@/assets/team/zaher-jesry.jpg";
import morhafAlhabyan   from "@/assets/team/morhaf-alhabyan.jpg";
import abdulazizBd      from "@/assets/team/abdulaziz-sultan-bd.jpg";
import abdulazizOps     from "@/assets/team/abdulaziz-sultan-ops.jpg";
import khalidDib        from "@/assets/team/khalid-dib.jpg";

export type TeamMember = {
  name: string;
  title: string;
  email?: string;
  image?: string;
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
    image: zaherJesry,
  },
  {
    name: "Morhaf Alhabyan",
    title: "Head of Trading · Senior Trader",
    email: "preciousmetals@marmaragold.ae",
    image: morhafAlhabyan,
  },
  {
    name: "Abdulaziz Sultan",
    title: "Business Development Manager",
    email: "M.Sultan@marmaragold.ae",
    image: abdulazizBd,
  },
  {
    name: "Abdulaziz Sultan",
    title: "Operations Manager",
    email: "operations@marmaragold.ae",
    image: abdulazizOps,
  },
  {
    name: "Khalid Dib",
    title: "Compliance & Risk Manager",
    email: "operations@marmaragold.ae",
    image: khalidDib,
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
