import { ScrollProgress } from "@/components/ScrollProgress/ScrollProgress";
import { Ticker } from "@/components/Ticker/Ticker";
import { Nav } from "@/components/Nav/Nav";
import { Hero } from "@/components/Hero/Hero";
import { Stats } from "@/components/Stats/Stats";
import { About } from "@/components/About/About";
import { Capabilities } from "@/components/Capabilities/Capabilities";
import { Services } from "@/components/Services/Services";
import { Products } from "@/components/Products/Products";
import { WhyChoose } from "@/components/WhyChoose/WhyChoose";
import { GlobalReach } from "@/components/GlobalReach/GlobalReach";
import { Clients } from "@/components/Clients/Clients";
import { Solutions } from "@/components/Solutions/Solutions";
import { Blogs } from "@/components/Blogs/Blogs";
import { Leadership } from "@/components/Leadership/Leadership";
import { Careers } from "@/components/Careers/Careers";
import { Contact } from "@/components/Contact/Contact";
import { Footer } from "@/components/Footer/Footer";

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <ScrollProgress />
      <Ticker />
      <Nav />
      <main id="main">
        <Hero />
        <Stats />
        <About />
        <Capabilities />
        <Services />
        <Products />
        <WhyChoose />
        <GlobalReach />
        <Clients />
        <Solutions />
        <Blogs />
        <Leadership />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
