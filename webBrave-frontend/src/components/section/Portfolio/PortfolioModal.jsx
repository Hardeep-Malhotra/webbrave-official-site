import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes, FaExternalLinkAlt } from "react-icons/fa";

const PortfolioModal = ({ project, closeModal }) => {
  const images = project.images || [project.image];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 bg-black/85 backdrop-blur-md flex justify-center items-center z-50 px-4 py-6 overflow-y-auto">
      <div className="relative bg-[#0A0F1D] border border-white/15 rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl animate-fade-in">

        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-30 bg-black/60 hover:bg-amber-400 hover:text-black text-white p-2.5 rounded-full backdrop-blur-md transition-all duration-200"
          aria-label="Close modal"
        >
          <FaTimes className="text-base" />
        </button>

        {/* Image Preview Carousel */}
        <div className="relative w-full h-[280px] sm:h-[400px] bg-black/50 group">
          <img
            src={images[currentIndex]}
            alt={`${project.title} screenshot ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-all duration-300"
          />

          {/* Navigation Arrows (Agar 1 se jyada images ho) */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-amber-400 hover:text-black text-white p-3 rounded-full backdrop-blur-md transition-all"
              >
                <FaChevronLeft className="text-sm" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-amber-400 hover:text-black text-white p-3 rounded-full backdrop-blur-md transition-all"
              >
                <FaChevronRight className="text-sm" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentIndex ? "w-6 bg-amber-400" : "w-2 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Project Description Details */}
        <div className="p-6 sm:p-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-amber-400 font-mono text-xs uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-xs text-gray-400">
              Template Preview {currentIndex + 1} of {images.length}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
            {project.title}
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>

          {/* Technologies Used */}
          {project.tech && (
            <div className="pt-2">
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((item, idx) => (
                  <span
                    key={idx}
                    className="bg-white/5 border border-white/10 text-amber-300 text-xs px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="pt-4 flex flex-wrap gap-4 border-t border-white/10">
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black font-semibold px-6 py-3 rounded-full shadow-lg shadow-amber-500/20 active:scale-95 transition-all text-sm"
            >
              Live Demo Preview
              <FaExternalLinkAlt className="text-xs" />
            </a>

            <button
              onClick={closeModal}
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 font-semibold px-6 py-3 rounded-full transition-all text-sm"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PortfolioModal;