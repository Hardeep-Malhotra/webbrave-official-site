import { Link } from "react-router-dom";
import ProcessSection from "../components/section/Process/Process";
import CTA from "../components/section/CTA/CTA";


const Process = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#07111F] pt-36 pb-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Our <span className="text-yellow-400">Process</span>
          </h1>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            Our streamlined development process ensures every project is
            delivered with quality, transparency, and on-time execution—from
            planning to deployment and ongoing support.
          </p>

          {/* Breadcrumb */}

          <div className="flex justify-center items-center gap-2 mt-8 text-sm">

            <Link
              to="/"
              className="text-gray-400 hover:text-yellow-400 transition"
            >
              Home
            </Link>

            <span className="text-gray-600">/</span>

            <span className="text-yellow-400">
              Process
            </span>

          </div>

        </div>

      </section>

      {/* Process Section */}

      <ProcessSection />

      {/* CTA */}

      <CTA />

    </>
  );
};

export default Process;