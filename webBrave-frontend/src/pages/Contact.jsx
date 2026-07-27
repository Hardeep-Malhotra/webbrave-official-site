import { Link } from "react-router-dom";
import ContactSection from "../components/section/Contact/Contact";
import CTA from "../components/section/CTA/CTA";


const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#07111F] pt-36 pb-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Contact <span className="text-yellow-400">Us</span>
          </h1>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            Have an idea or project in mind? We'd love to hear from you.
            Let's discuss how we can build something amazing together.
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
              Contact
            </span>

          </div>

        </div>

      </section>

      {/* Contact Section */}

      <ContactSection />

      {/* CTA */}

      <CTA />

    </>
  );
};

export default Contact;