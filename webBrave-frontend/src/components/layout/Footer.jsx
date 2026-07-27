import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaPaperPlane,
} from "react-icons/fa";
import logo from "../../assets/logo/logo-dark.png";

const Footer = () => {
  return (
    <footer className="relative bg-[#070B16] border-t border-white/10 text-gray-300 pt-16 pb-8 overflow-hidden">
      {/* Background Decorative Ambient Light */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-10 pb-12">

          {/* Logo & About Section */}
          <div className="lg:col-span-2 space-y-5">
            <NavLink to="/" className="inline-block group">
              <img
                src={logo}
                alt="WebBrave Solutions"
                className="h-30 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_0_12px_rgba(245,158,11,0.25)]"
              />
            </NavLink>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              We build high-performance MERN Stack applications, modern business websites,
              dashboards, and scalable digital solutions for ambitious startups and businesses.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: <FaFacebookF />, href: "#" },
                { icon: <FaInstagram />, href: "#" },
                { icon: <FaLinkedinIn />, href: "#" },
                { icon: <FaGithub />, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-black hover:bg-gradient-to-r hover:from-amber-400 hover:to-yellow-500 hover:border-amber-400 hover:shadow-[0_0_15px_rgba(245,158,11,0.4)] hover:-translate-y-1 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-semibold text-base tracking-wider uppercase mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              Services
            </h3>

            <ul className="space-y-3 text-sm">
              {[
                { name: "MERN Development", path: "/services" },
                { name: "Web Development", path: "/services" },
                { name: "UI/UX Design", path: "/services" },
                { name: "Landing Pages", path: "/services" },
                { name: "SEO Optimization", path: "/services" },
              ].map((link, idx) => (
                <li key={idx}>
                  <NavLink
                    to={link.path}
                    className="text-gray-400 hover:text-amber-400 transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <span className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 text-amber-400">
                      ›
                    </span>
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base tracking-wider uppercase mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              {[
                { name: "About Us", path: "/about" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Technologies", path: "/technologies" },
                { name: "Our Process", path: "/process" },
                { name: "Contact", path: "/contact" },
              ].map((link, idx) => (
                <li key={idx}>
                  <NavLink
                    to={link.path}
                    className="text-gray-400 hover:text-amber-400 transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <span className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 text-amber-400">
                      ›
                    </span>
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-base tracking-wider uppercase mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              Newsletter
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Subscribe to get tech insights and updates directly to your inbox.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <div className="relative flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/50 transition-all"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1.5 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black p-2.5 rounded-lg font-semibold shadow-md shadow-amber-500/20 active:scale-95 transition-all"
                >
                  <FaPaperPlane className="text-xs" />
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} WebBrave Solutions. All Rights Reserved.</p>

          <div className="flex gap-6">
            <NavLink to="/privacy" className="hover:text-amber-400 transition-colors">
              Privacy Policy
            </NavLink>
            <NavLink to="/terms" className="hover:text-amber-400 transition-colors">
              Terms of Service
            </NavLink>
            <NavLink to="/sitemap" className="hover:text-amber-400 transition-colors">
              Sitemap
            </NavLink>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;