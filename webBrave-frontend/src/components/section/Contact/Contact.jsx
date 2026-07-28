import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import SectionTitle from "../../ui/SectionTitle";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#07111F] py-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="CONTACT US"
          subtitle="Let's build something amazing together."
        />

        <div className="grid lg:grid-cols-2 gap-14 mt-14 items-start">
          {/* Left Side */}

          <div>
            <h2 className="text-4xl font-bold text-white leading-tight">
              Get In Touch
            </h2>

            <p className="text-gray-400 leading-8 mt-5 mb-10">
              Have a project idea or need a professional website for your
              business? We'd love to hear from you. Fill out the form and our
              team will get back to you as soon as possible.
            </p>

            <div className="space-y-5">
              {/* Email */}

              <div className="bg-[#0D1727] border border-[#1B2A3D] rounded-xl p-5 flex items-center gap-5 hover:border-yellow-400 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center text-black text-xl">
                  <FaEnvelope />
                </div>

                <div>
                  <h4 className="text-white font-semibold">Email</h4>

                  <a
                    href="mailto:hello@webbravesolutions.in"
                    className="text-gray-400 hover:text-yellow-400 transition"
                  >
                    hello@webbravesolutions.in
                  </a>
                </div>
              </div>

              {/* Phone */}

              <div className="bg-[#0D1727] border border-[#1B2A3D] rounded-xl p-5 flex items-center gap-5 hover:border-yellow-400 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center text-black text-xl">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h4 className="text-white font-semibold">Phone</h4>

                  <a
                    href="tel:+918950516966"
                    className="text-gray-400 hover:text-yellow-400 transition"
                  >
                    +91 8950516966
                  </a>
                </div>
              </div>

              {/* Address */}

              <div className="bg-[#0D1727] border border-[#1B2A3D] rounded-xl p-5 flex items-center gap-5 hover:border-yellow-400 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center text-black text-xl">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h4 className="text-white font-semibold">Location</h4>

                  <p className="text-gray-400">
                    Yamuna Nagar, Haryana, India
                  </p>
                </div>
              </div>

              {/* Office Hours */}

              <div className="bg-[#0D1727] border border-[#1B2A3D] rounded-xl p-5 flex items-center gap-5 hover:border-yellow-400 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center text-black text-xl">
                  <FaClock />
                </div>

                <div>
                  <h4 className="text-white font-semibold">Office Hours</h4>

                  <p className="text-gray-400">
                    Monday - Saturday
                    <br />
                    9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Info */}

            <div className="mt-8 bg-[#111827] border border-[#1B2A3D] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">
                Quick Response
              </h3>

              <p className="text-gray-400 leading-7">
                We usually respond within <span className="text-yellow-400 font-semibold">24 hours</span>.
                For urgent business inquiries, feel free to call us directly.
              </p>
            </div>
          </div>

          {/* Right Side */}

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;