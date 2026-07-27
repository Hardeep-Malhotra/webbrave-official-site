import HeroContent from "./HeroContent";
import heroBg from "../../../assets/hero/hero-image.png";


const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#070B16] pt-24 lg:pt-28"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center lg:bg-right bg-cover lg:bg-contain opacity-20 lg:opacity-90"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#070B16]/70"></div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10">
        <HeroContent />
      </div>

    </section>
  );
};

export default Hero;