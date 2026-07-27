// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";
// import logo from "../../assets/logo/logo-dark.png";
// import { navLinks } from "../../data/navLinks";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);


//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-[#070B16]/90 backdrop-blur-lg border-b border-yellow-500/20">
//       <div className="max-w-7xl mx-auto px-6 lg:px-10">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <NavLink to="/" className="flex items-center">
//             <img
//               src={logo}
//               alt="WebBrave"
//               className="h-40 w-auto"
//             />
//           </NavLink>

//           {/* Desktop Menu */}
//           <nav className="hidden lg:flex items-center gap-8">
//             {navLinks.map((item) => (
//               <NavLink
//                 key={item.id}
//                 to={item.path}
//                 className={({ isActive }) =>
//                   `transition duration-300 text-sm font-medium ${isActive
//                     ? "text-yellow-400"
//                     : "text-gray-200 hover:text-yellow-400"
//                   }`
//                 }
//               >
//                 {item.title}
//               </NavLink>
//             ))}
//           </nav>

//           {/* CTA Button */}
//           <NavLink
//             to="/contact"
//             className="hidden lg:block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full transition-all duration-300"
//           >
//             Start Your Project →
//           </NavLink>

//           {/* Mobile Button */}
//           <button
//             className="lg:hidden text-yellow-400 text-2xl"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="lg:hidden pb-5">
//             <div className="flex flex-col gap-5">
//               {navLinks.map((item) => (
//                 <NavLink
//                   key={item.id}
//                   to={item.path}
//                   onClick={() => setIsOpen(false)}
//                   className={({ isActive }) =>
//                     `transition ${isActive
//                       ? "text-yellow-400"
//                       : "text-white hover:text-yellow-400"
//                     }`
//                   }
//                 >
//                   {item.title}
//                 </NavLink>
//               ))}
//               <button className="bg-yellow-500 text-black py-3 rounded-full font-semibold">
//                 Start Your Project →
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Navbar;
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo/logo-dark.png";
import { navLinks } from "../../data/navLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 py-4 px-4 sm:px-8">
      {/* Same Box Container & Width intact */}
      <div className="max-w-7xl mx-auto bg-[#070B16]/85 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-black/80 transition-all duration-300">
        <div className="flex items-center justify-between h-20 px-6 lg:px-8">
          
          {/* Logo - Scale Up & Glow Animation */}
          <NavLink to="/" className="flex items-center gap-3 group py-1 overflow-hidden">
            <img
              src={logo}
              alt="WebBrave Solutions"
              className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-500 group-hover:scale-110 filter drop-shadow-[0_0_15px_rgba(245,158,11,0.35)]"
            />
          </NavLink>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 bg-white/5 border border-white/10 px-6 py-2.5 rounded-full backdrop-blur-md">
            {navLinks.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) =>
                  `relative text-sm tracking-wide font-medium transition-all duration-300 py-1 group/link ${
                    isActive
                      ? "text-amber-400 font-semibold"
                      : "text-gray-300 hover:text-amber-300"
                  }`
                }
              >
                {({ isActive }) => (
                  <span className="flex items-center gap-1.5">
                    {item.title}
                    
                    {/* Active Route Glowing Bar */}
                    {isActive ? (
                      <span className="absolute -bottom-1 left-0 w-full h-[2.5px] bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full shadow-[0_0_12px_#f59e0b] animate-pulse" />
                    ) : (
                      /* Hover Animated Underline */
                      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-amber-400/70 rounded-full transition-all duration-300 group-hover/link:w-full" />
                    )}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA Button with Glowing Hover */}
          <div className="hidden lg:flex items-center">
            <NavLink
              to="/contact"
              className="group relative inline-flex items-center justify-center px-7 py-3 text-sm font-semibold text-black bg-gradient-to-r from-amber-400 to-yellow-500 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] hover:-translate-y-1 active:translate-y-0"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Your Project
                <span className="text-base transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </span>
              {/* Shine effect on hover */}
              <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
            </NavLink>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden text-amber-400 text-2xl p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 active:scale-90 transition-all focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaTimes className="rotate-90 transition-transform duration-300" /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Dropdown Menu with CSS Transitions */}
        <div
          className={`lg:hidden border-t border-white/10 bg-[#070B16] rounded-b-2xl transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[500px] opacity-100 p-6" : "max-h-0 opacity-0 p-0"
          }`}
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 ${
                    isActive
                      ? "text-amber-400 bg-amber-400/10 font-semibold border border-amber-400/20 shadow-[0_0_15px_rgba(245,158,11,0.1)]"
                      : "text-gray-300 hover:text-amber-300 hover:bg-white/5"
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}

            <div className="pt-2">
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold py-3.5 rounded-xl shadow-lg shadow-amber-500/20 active:scale-95 transition-all"
              >
                Start Your Project →
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;