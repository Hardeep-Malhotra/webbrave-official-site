import { Link } from "react-router-dom";
import {
  FaCode,
  FaUsers,
  FaLightbulb,
  FaAward,
} from "react-icons/fa";

import WhyChooseUs from "../components/section/WhyChooseUs/WhyChooseUs";
import CTA from "../components/section/CTA/CTA";


const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#07111F] pt-36 pb-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold text-white">
            About <span className="text-yellow-400">WebBrave</span>
          </h1>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            We are a passionate team of developers and designers creating
            modern websites and scalable MERN Stack applications that help
            businesses grow online.
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
              About
            </span>

          </div>

        </div>

      </section>

      {/* About Company */}

      <section className="bg-[#0B1220] py-24">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <span className="text-yellow-400 font-semibold uppercase tracking-widest">
              Who We Are
            </span>

            <h2 className="text-4xl font-bold text-white mt-4 leading-tight">
              Building Digital Products
              <br />
              That Drive Success
            </h2>

            <p className="text-gray-400 leading-8 mt-6">
              At WebBrave Solutions, we specialize in building fast,
              responsive, and scalable websites using the latest web
              technologies. Our goal is to deliver digital solutions that
              enhance user experience and accelerate business growth.
            </p>

            <p className="text-gray-400 leading-8 mt-5">
              From startups to established businesses, we create custom
              web applications tailored to your requirements with clean
              code and modern UI/UX.
            </p>

          </div>

          {/* Right */}

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-[#111827] rounded-xl p-8 border border-[#1f2937] hover:border-yellow-400 transition">

              <FaCode className="text-yellow-400 text-4xl mb-5" />

              <h3 className="text-white text-xl font-semibold">
                Clean Code
              </h3>

              <p className="text-gray-400 mt-3">
                Maintainable and scalable development.
              </p>

            </div>

            <div className="bg-[#111827] rounded-xl p-8 border border-[#1f2937] hover:border-yellow-400 transition">

              <FaUsers className="text-yellow-400 text-4xl mb-5" />

              <h3 className="text-white text-xl font-semibold">
                Expert Team
              </h3>

              <p className="text-gray-400 mt-3">
                Experienced developers and designers.
              </p>

            </div>

            <div className="bg-[#111827] rounded-xl p-8 border border-[#1f2937] hover:border-yellow-400 transition">

              <FaLightbulb className="text-yellow-400 text-4xl mb-5" />

              <h3 className="text-white text-xl font-semibold">
                Innovative Ideas
              </h3>

              <p className="text-gray-400 mt-3">
                Creative solutions for modern businesses.
              </p>

            </div>

            <div className="bg-[#111827] rounded-xl p-8 border border-[#1f2937] hover:border-yellow-400 transition">

              <FaAward className="text-yellow-400 text-4xl mb-5" />

              <h3 className="text-white text-xl font-semibold">
                Quality First
              </h3>

              <p className="text-gray-400 mt-3">
                Delivering excellence in every project.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Why Choose Us */}

      <WhyChooseUs />

      {/* CTA */}

      <CTA />

    </>
  );
};

export default About;