import { Link } from "react-router-dom";
import PortfolioSection from "../components/section/Portfolio/Portfolio";
import CTA from "../components/section/CTA/CTA";



const Portfolio = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#07111F] pt-36 pb-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Our <span className="text-yellow-400">Portfolio</span>
          </h1>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            Explore some of our recent projects built with modern technologies,
            creative UI/UX, and scalable development practices for businesses
            across different industries.
          </p>

          <div className="flex justify-center items-center gap-2 mt-8 text-sm">

            <Link
              to="/"
              className="text-gray-400 hover:text-yellow-400 transition"
            >
              Home
            </Link>

            <span className="text-gray-600">/</span>

            <span className="text-yellow-400">
              Portfolio
            </span>

          </div>

        </div>

      </section>

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* CTA */}
      <CTA />

    </>
  );
};

export default Portfolio;