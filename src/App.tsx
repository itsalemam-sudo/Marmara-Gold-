import { ScrollProgress } from "@/components/ScrollProgress/ScrollProgress";
import { TopBar } from "@/components/TopBar/TopBar";
import { Ticker } from "@/components/Ticker/Ticker";
import { Nav } from "@/components/Nav/Nav";
import { Certifications } from "@/components/Certifications/Certifications";
import { Hero } from "@/components/Hero/Hero";
import { Pillars } from "@/components/Pillars/Pillars";
import { About } from "@/components/About/About";
import { Stats } from "@/components/Stats/Stats";
import { Timeline } from "@/components/Timeline/Timeline";
import { ProductShowcase } from "@/components/ProductShowcase/ProductShowcase";
import { Services } from "@/components/Services/Services";
import { ResponsibleSourcing } from "@/components/ResponsibleSourcing/ResponsibleSourcing";
import { GlobalReach } from "@/components/GlobalReach/GlobalReach";
import { Leadership } from "@/components/Leadership/Leadership";
import { NewsTeaser } from "@/components/NewsTeaser/NewsTeaser";
import { Contact } from "@/components/Contact/Contact";
import { Footer } from "@/components/Footer/Footer";

/**
 * Homepage composition — Nadir-Metal exact cadence.
 *
 *   Header block   · TopBar (centered tagline) → Nav (brand + menu)
 *   Above the fold · Hero
 *   Trust band     · Certifications (LBMA / DMCC / DGCX / SBMA / RJC)
 *   Story          · About + Pillars (4 gold-square features) + Stats
 *   Range          · ProductShowcase (brand-card teaser)
 *   Values         · ResponsibleSourcing (green panel)
 *   Scale          · GlobalReach (dark confidence panel)
 *   Heritage       · Timeline (year rail, reads as marquee)
 *   Services       · Services
 *   Team           · Leadership
 *   Editorial      · NewsTeaser
 *   Data           · Ticker (spot band, below the fold)
 *   Conversion     · Contact
 *   Footer         · Footer
 *
 * The live-price ticker sits below the fold — Nadir Metal has no
 * such strip in its header, and hiding it up top makes the hero
 * read cleaner. The data stays available further down the page for
 * the professional-audience use case.
 */
export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <ScrollProgress />
      <TopBar />
      <Nav />
      <main id="main">
        <Hero />
        <Certifications />
        <About />
        <Pillars />
        <Stats />
        <ProductShowcase />
        <ResponsibleSourcing />
        <GlobalReach />
        <Timeline />
        <Services />
        <Leadership />
        <NewsTeaser />
        <Ticker />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
