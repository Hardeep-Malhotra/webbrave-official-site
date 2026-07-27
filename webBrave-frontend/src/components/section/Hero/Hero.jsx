import HeroContent from "./HeroContent";
import heroBg from "../../../assets/hero/hero-image.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#070B16] pt-28 pb-16 lg:pt-32 lg:pb-20"
    >
      {/* Background Hero Image (Laptop + Stack Graphics) */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center lg:bg-right bg-cover lg:bg-contain opacity-30 lg:opacity-90 pointer-events-none z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />

      {/* Subtle Side Vignette Overlay for Crisp Contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#070B16] via-[#070B16]/80 to-transparent pointer-events-none z-0" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <HeroContent />
        </div>
      </div>
    </section>
  );
};

export default Hero;