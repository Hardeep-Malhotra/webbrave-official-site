import { FaArrowRight, FaBriefcase, FaUsers, FaShieldAlt, FaRocket } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const HeroContent = () => {
  return (
    <div className="max-w-[620px] text-white">

      {/* Badge */}
      <div className="inline-flex items-center px-5 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-sm font-medium mb-5">
        WEB DEVELOPMENT & DIGITAL SOLUTIONS
      </div>

      {/* Heading */}
      <h1 className="text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight">
        Building Powerful
        <br />
        <span className="text-yellow-400">
          MERN Stack
        </span>
        <br />
        Applications &
        <br />
        Modern Websites.
      </h1>

      {/* Description */}
      <p className="mt-5 text-gray-400 text-[17px] leading-8 max-w-xl">
        We help startups, businesses and enterprises build fast,
        scalable, secure and high-performance web applications
        using the MERN Stack.
      </p>

      {/* Buttons */}
      {/* Buttons */}
<div className="flex flex-col sm:flex-row gap-4 mt-8">

  <NavLink
    to="/contact"
    className="bg-yellow-500 hover:bg-yellow-400 text-black px-7 py-3 rounded-full font-semibold flex items-center justify-center gap-3 transition w-full sm:w-auto"
  >
    Start Your Project
    <FaArrowRight />
  </NavLink>

  <NavLink
    to="/portfolio"
    className="border border-yellow-500/30 hover:border-yellow-400 hover:text-yellow-400 px-7 py-3 rounded-full font-semibold text-center transition w-full sm:w-auto"
  >
    View Portfolio
  </NavLink>

</div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-10">

        <div className="bg-[#0D1322] border border-yellow-500/20 rounded-xl px-4 py-4 flex items-center gap-3">
          <FaBriefcase className="text-yellow-400 text-xl" />
          <div>
            <h3 className="font-bold text-lg">50+</h3>
            <p className="text-xs text-gray-400">Projects Delivered</p>
          </div>
        </div>

        <div className="bg-[#0D1322] border border-yellow-500/20 rounded-xl px-4 py-4 flex items-center gap-3">
          <FaUsers className="text-yellow-400 text-xl" />
          <div>
            <h3 className="font-bold text-lg">20+</h3>
            <p className="text-xs text-gray-400">Happy Clients</p>
          </div>
        </div>

        <div className="bg-[#0D1322] border border-yellow-500/20 rounded-xl px-4 py-4 flex items-center gap-3">
          <FaShieldAlt className="text-yellow-400 text-xl" />
          <div>
            <h3 className="font-bold text-lg">100%</h3>
            <p className="text-xs text-gray-400">Client Satisfaction</p>
          </div>
        </div>

        <div className="bg-[#0D1322] border border-yellow-500/20 rounded-xl px-4 py-4 flex items-center gap-3">
          <FaRocket className="text-yellow-400 text-xl" />
          <div>
            <h3 className="font-bold text-lg">2+</h3>
            <p className="text-xs text-gray-400">Years Experience</p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default HeroContent;