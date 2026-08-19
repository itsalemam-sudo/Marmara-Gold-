import { ScrollProgress } from "@/components/ScrollProgress/ScrollProgress";
import { Nav } from "@/components/Nav/Nav";
import { Certifications } from "@/components/Certifications/Certifications";
import { Hero } from "@/components/Hero/Hero";
import { About } from "@/components/About/About";
import { Pillars } from "@/components/Pillars/Pillars";
import { ProductShowcase } from "@/components/ProductShowcase/ProductShowcase";
import { Services } from "@/components/Services/Services";
import { ResponsibleSourcing } from "@/components/ResponsibleSourcing/ResponsibleSourcing";
import { GlobalReach } from "@/components/GlobalReach/GlobalReach";
import { ExperienceBand } from "@/components/ExperienceBand/ExperienceBand";
import { Timeline } from "@/components/Timeline/Timeline";
import { Leadership } from "@/components/Leadership/Leadership";
import { NewsTeaser } from "@/components/NewsTeaser/NewsTeaser";
import { Contact } from "@/components/Contact/Contact";
import { Footer } from "@/components/Footer/Footer";

/**
 * Homepage composition — Marmara Precious Metals Group.
 *
 *   Header block   · Nav (brand + menu)                — TopBar removed:
 *                                                        the tagline
 *                                                        strip added no
 *                                                        signal and
 *                                                        pushed the
 *                                                        brand row down.
 *   Above the fold · Hero                              — new headline
 *                                                        "Precious metals.
 *                                                        Global expertise."
 *   Trust band     · Certifications (real accreditations only)
 *   Story          · About + Pillars                   — Stats deleted:
 *                                                        every value was
 *                                                        unverified.
 *   Range          · ProductShowcase (brand-card teaser)
 *   Values         · ResponsibleSourcing               — placeholder
 *                                                        specifics
 *                                                        stripped.
 *   Scale          · GlobalReach                       — no fabricated
 *                                                        continent / market
 *                                                        counts; real
 *                                                        offices only.
 *   Credentials    · ExperienceBand (dot-separated marquee)
 *   Heritage       · Timeline (verifiable milestones)
 *   Services       · Services
 *   Team           · Leadership (placeholder until confirmed)
 *   Editorial      · NewsTeaser
 *   Conversion     · Contact
 *   Footer         · Footer
 *
 * Removed for cause:
 *   · <TopBar>    — Nadir keeps a single tagline strip; ours was
 *                   duplicating content and cluttering the header.
 *   · <Ticker>    — showed indicative "LIVE" spot prices that were
 *                   not from a real market-data feed. Never re-enable
 *                   until a live source is wired in.
 *   · <Stats>     — every value ($4T volume, 300+ OTC, 180+ countries,
 *                   40+ derivatives exchanges, 180+ FX markets) was
 *                   unverified. Replace only when Marmara publishes
 *                   verified group figures.
 */
export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <ScrollProgress />
      <Nav />
      <main id="main">
        <Hero />
        <Certifications />
        <About />
        <Pillars />
        <ProductShowcase />
        <ResponsibleSourcing />
        <GlobalReach />
        <ExperienceBand />
        <Timeline />
        <Services />
        <Leadership />
        <NewsTeaser />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
