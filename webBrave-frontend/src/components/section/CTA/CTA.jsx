import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="relative bg-[#070B16] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Decorative Radial Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="relative bg-gradient-to-b from-[#0A0F1D] to-[#070B16] border border-white/10 rounded-3xl px-6 py-16 sm:px-12 sm:py-20 text-center shadow-2xl overflow-hidden group hover:border-amber-400/40 transition-all duration-500">
          
          {/* Subtle Ambient Top Border Highlight */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Ready To Build Your <span className="text-amber-400">Next Project?</span>
          </h2>

          {/* Subtitle Description */}
          <p className="text-gray-400 mt-5 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you need a full-stack MERN application, a high-converting landing page,
            or a complete digital redesign, our team is ready to bring your vision to life.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
            {/* Primary CTA */}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 text-sm sm:text-base"
            >
              <span className="flex items-center gap-2">
                Start Your Project
                <span className="text-lg">→</span>
              </span>
            </Link>

            {/* Secondary CTA */}
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center bg-white/5 border border-white/10 text-gray-200 hover:text-amber-400 hover:bg-white/10 hover:border-amber-400/30 font-semibold px-8 py-3.5 rounded-full backdrop-blur-md hover:-translate-y-1 active:translate-y-0 transition-all duration-300 text-sm sm:text-base"
            >
              View Portfolio
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;