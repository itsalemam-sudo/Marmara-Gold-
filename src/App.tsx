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
 * Homepage composition — Nadir-Metal-style flow.
 *
 * Deep sections (full policy library, full blog paginator, careers,
 * why-choose grid, solutions matrix) now live at their dedicated
 * routes only (see main.tsx). The homepage teases into them.
 */
export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <ScrollProgress />
      <TopBar />
      <Ticker />
      <Nav />
      <Certifications />
      <main id="main">
        <Hero />
        <Pillars />
        <About />
        <Stats />
        <Timeline />
        <ProductShowcase />
        <Services />
        <ResponsibleSourcing />
        <GlobalReach />
        <Leadership />
        <NewsTeaser />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
