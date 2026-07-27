// 



import { FaArrowRight, FaBriefcase, FaUsers, FaShieldAlt, FaRocket } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const HeroContent = () => {
  return (
    <div className="max-w-[640px] text-white">

      {/* Badge Pill */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-400 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
        Web Development & Digital Solutions
      </div>

      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
        Building Powerful <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
          MERN Stack
        </span>{" "}
        <br />
        Applications & Websites.
      </h1>

      {/* Subtitle Description */}
      <p className="mt-6 text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl">
        We help startups, growing businesses, and enterprises build fast, scalable,
        secure, and high-performance web applications tailored for modern needs.
      </p>

      {/* Call To Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
        <NavLink
          to="/contact"
          className="group relative inline-flex items-center justify-center bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 w-full sm:w-auto text-sm sm:text-base"
        >
          <span className="flex items-center justify-center gap-2">
            Start Your Project
            <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </NavLink>

        <NavLink
          to="/portfolio"
          className="inline-flex items-center justify-center border border-white/10 bg-white/5 hover:bg-white/10 hover:border-amber-400/40 text-gray-200 hover:text-amber-400 font-semibold px-8 py-3.5 rounded-full backdrop-blur-md hover:-translate-y-1 active:translate-y-0 transition-all duration-300 w-full sm:w-auto text-sm sm:text-base"
        >
          View Portfolio
        </NavLink>
      </div>

      {/* Key Metrics / Stats Section */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mt-10">
        {[
          { icon: <FaBriefcase />, title: "50+", desc: "Projects Done" },
          { icon: <FaUsers />, title: "20+", desc: "Happy Clients" },
          { icon: <FaShieldAlt />, title: "100%", desc: "Satisfaction" },
          { icon: <FaRocket />, title: "2+", desc: "Years Exp." },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="bg-[#0A0F1D]/80 border border-white/10 rounded-2xl p-3.5 flex items-center gap-3 backdrop-blur-md hover:border-amber-400/30 transition-all duration-300 group"
          >
            <div className="p-2.5 rounded-xl bg-amber-400/10 text-amber-400 text-lg group-hover:bg-amber-400 group-hover:text-black transition-colors duration-300">
              {stat.icon}
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg text-white leading-none">
                {stat.title}
              </h3>
              <p className="text-[11px] text-gray-400 mt-1 font-medium">
                {stat.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default HeroContent;