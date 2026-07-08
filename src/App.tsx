import { Ticker } from "@/components/Ticker/Ticker";
import { Nav } from "@/components/Nav/Nav";
import { Hero } from "@/components/Hero/Hero";
import { Stats } from "@/components/Stats/Stats";
import { Capabilities } from "@/components/Capabilities/Capabilities";
import { WhyChoose } from "@/components/WhyChoose/WhyChoose";
import { GlobalReach } from "@/components/GlobalReach/GlobalReach";
import { Clients } from "@/components/Clients/Clients";
import { Solutions } from "@/components/Solutions/Solutions";
import { Careers } from "@/components/Careers/Careers";
import { Footer } from "@/components/Footer/Footer";

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Ticker />
      <Nav />
      <main id="main">
        <Hero />
        <Stats />
        <Capabilities />
        <WhyChoose />
        <GlobalReach />
        <Clients />
        <Solutions />
        <Careers />
      </main>
      <Footer />
    </>
  );
}
