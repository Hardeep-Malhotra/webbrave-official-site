import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import SectionTitle from "../../ui/SectionTitle";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#07111F] py-24">

      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          title="CONTACT US"
          subtitle="Let's discuss your next project."
        />

        <div className="grid lg:grid-cols-2 gap-12 mt-14">

          {/* Left */}

          <div>

            <h2 className="text-3xl font-bold text-white mb-6">
              Get In Touch
            </h2>

            <p className="text-gray-400 leading-8 mb-10">
              We'd love to hear about your ideas. Fill out the form and our
              team will contact you shortly.
            </p>

            <div className="space-y-6">

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-yellow-400 flex justify-center items-center text-black">
                  <FaEnvelope />
                </div>

                <div>
                  <h4 className="text-white font-semibold">
                    Email
                  </h4>

                  <p className="text-gray-400">
                    hello@webbravesolutions.in@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">

                <div className="w-14 h-14 rounded-full bg-yellow-400 flex justify-center items-center text-black">
                  <FaPhoneAlt />
                </div>

                <div>

                  <h4 className="text-white font-semibold">
                    Phone
                  </h4>

                  <p className="text-gray-400">
                    +91 8950516966
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <div className="w-14 h-14 rounded-full bg-yellow-400 flex justify-center items-center text-black">
                  <FaMapMarkerAlt />
                </div>

                <div>

                  <h4 className="text-white font-semibold">
                    Address
                  </h4>

                  <p className="text-gray-400">
                    YamunaNagar, India
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Right */}

          <ContactForm />

        </div>

      </div>

    </section>
  );
};

export default Contact;