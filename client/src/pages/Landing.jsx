import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Plans from "../components/Plans";
import HowItWorks from "../components/HowItWorks";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Plans />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
}

export default Landing;