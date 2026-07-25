import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import logo from "../../assets/logo/logo-dark.png";

const Footer = () => {
  return (
    <footer className="bg-[#070B16] border-t border-yellow-500/20 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Logo & About */}
          <div className="lg:col-span-2">
            {/* <img src={logo} alt="WebBrave" className="h-14 mb-5" /> */}

            <p className="text-gray-400 leading-7">
              We build powerful MERN Stack applications, business websites,
              dashboards and scalable digital solutions for startups,
              businesses and enterprises.
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-yellow-500/30 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-yellow-500/30 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-yellow-500/30 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-yellow-500/30 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Services
            </h3>

            <ul className="space-y-3">
              <li><a href="#" className="hover:text-yellow-400">MERN Development</a></li>
              <li><a href="#" className="hover:text-yellow-400">Web Development</a></li>
              <li><a href="#" className="hover:text-yellow-400">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-yellow-400">Landing Pages</a></li>
              <li><a href="#" className="hover:text-yellow-400">SEO</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li><a href="#" className="hover:text-yellow-400">About</a></li>
              <li><a href="#" className="hover:text-yellow-400">Portfolio</a></li>
              <li><a href="#" className="hover:text-yellow-400">Technologies</a></li>
              <li><a href="#" className="hover:text-yellow-400">Process</a></li>
              <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Newsletter
            </h3>

            <p className="text-gray-400 mb-5">
              Subscribe to receive the latest updates.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-[#101828] border border-yellow-500/20 rounded-l-lg px-4 py-3 outline-none focus:border-yellow-400"
              />

              <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-5 rounded-r-lg font-semibold">
                →
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Footer */}

        <div className="border-t border-yellow-500/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">

          <p>
            © {new Date().getFullYear()} WebBrave Solutions. All Rights Reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-yellow-400">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-yellow-400">
              Terms of Service
            </a>

            <a href="#" className="hover:text-yellow-400">
              Sitemap
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;