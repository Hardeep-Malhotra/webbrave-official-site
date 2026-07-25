import { Link } from "react-router-dom";
import ServicesSection from "../components/section/Services/Services";
import CTA from "../components/section/CTA/CTA";


const Services = () => {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-[#07111F] pt-36 pb-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Our <span className="text-yellow-400">Services</span>
          </h1>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
            We provide modern web development services using the MERN Stack,
            helping businesses build scalable, secure and high-performance
            digital products.
          </p>

          <div className="flex justify-center items-center gap-2 mt-8 text-sm">

            <Link
              to="/"
              className="text-gray-400 hover:text-yellow-400 duration-300"
            >
              Home
            </Link>

            <span className="text-gray-600">/</span>

            <span className="text-yellow-400">
              Services
            </span>

          </div>

        </div>

      </section>

      {/* Existing Services Component */}
      <ServicesSection />

      {/* CTA */}
      <CTA />
    </>
  );
};

export default Services;