import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CredibilityBar from "./components/CredibilityBar";
import Positioning from "./components/Positioning";
import Benefits from "./components/Benefits";
import Spaces from "./components/Spaces";
import EventTypes from "./components/EventTypes";
import NumbersBar from "./components/NumbersBar";
import Differentials from "./components/Differentials";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTAFinal from "./components/CTAFinal";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CredibilityBar />
        <Positioning />
        <Benefits />
        <Spaces />
        <EventTypes />
        <NumbersBar />
        <Differentials />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
