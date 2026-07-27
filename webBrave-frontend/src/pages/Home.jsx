import Hero from "../components/section/Hero/Hero";
import Services from "../components/section/Services/Services";
import Technologies from "../components/section/Technologies/Technologies";
import Process from "../components/section/Process/Process";
import Portfolio from "../components/section/Portfolio/Portfolio";
import WhyChooseUs from "../components/section/WhyChooseUs/WhyChooseUs";
import Testimonials from "../components/section/Testimonials/Testimonials";
import CTA from "../components/section/CTA/CTA";
import Contact from "../components/section/Contact/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Technologies />
      <Process />
      <Portfolio />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  );
};

export default Home;