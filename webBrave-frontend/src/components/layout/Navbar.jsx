import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo/logo-dark.png";
import { navLinks } from "../../data/navLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#070B16]/90 backdrop-blur-lg border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img
              src={logo}
              alt="WebBrave"
              className="h-40 w-auto"
            />
          </NavLink>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) =>
                  `transition duration-300 text-sm font-medium ${isActive
                    ? "text-yellow-400"
                    : "text-gray-200 hover:text-yellow-400"
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button */}
          <NavLink
            to="/contact"
            className="hidden lg:block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full transition-all duration-300"
          >
            Start Your Project →
          </NavLink>

          {/* Mobile Button */}
          <button
            className="lg:hidden text-yellow-400 text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-5">
            <div className="flex flex-col gap-5">
              {navLinks.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `transition ${isActive
                      ? "text-yellow-400"
                      : "text-white hover:text-yellow-400"
                    }`
                  }
                >
                  {item.title}
                </NavLink>
              ))}
              <button className="bg-yellow-500 text-black py-3 rounded-full font-semibold">
                Start Your Project →
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;