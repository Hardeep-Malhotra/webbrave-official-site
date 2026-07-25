import { Link } from "react-router-dom";
import TechnologiesSection from "../components/section/Technologies/Technologies";
import CTA from "../components/section/CTA/CTA";


const Technologies = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#07111F] pt-36 pb-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Our <span className="text-yellow-400">Technologies</span>
          </h1>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            We use the latest technologies and frameworks to build secure,
            scalable, and high-performance web applications that help your
            business grow faster.
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
              Technologies
            </span>

          </div>

        </div>

      </section>

      {/* Technologies Section */}
      <TechnologiesSection />

      {/* CTA */}
      <CTA />
    </>
  );
};

export default Technologies;