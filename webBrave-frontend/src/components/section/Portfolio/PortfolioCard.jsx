import { FaExternalLinkAlt } from "react-icons/fa";

const PortfolioCard = ({ project, onClick }) => {
  // Main card image (Array ki 1st image ya direct fallback image)
  const coverImage = project.images ? project.images[0] : project.image;

  return (
    <div
      onClick={onClick}
      className="group bg-[#0A0F1D] border border-white/10 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-amber-400/50 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(245,158,11,0.15)] flex flex-col justify-between"
    >
      <div>
        {/* Image Container */}
        <div className="relative h-52 bg-[#111827] overflow-hidden">
          <img
            src={coverImage}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1D] via-transparent to-transparent opacity-80" />

          {/* Category Tag */}
          <span className="absolute top-3 left-3 bg-[#070B16]/80 border border-white/10 backdrop-blur-md text-amber-400 text-xs font-semibold px-3 py-1 rounded-full">
            {project.category}
          </span>
        </div>

        {/* Card Details */}
        <div className="p-5">
          <h3 className="text-white text-lg font-bold group-hover:text-amber-400 transition-colors line-clamp-1">
            {project.title}
          </h3>

          <p className="text-gray-400 text-xs mt-2 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      {/* Tech Stack Badges */}
      <div className="px-5 pb-5 flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {project.tech?.slice(0, 3).map((t, idx) => (
            <span
              key={idx}
              className="text-[10px] bg-white/5 border border-white/10 text-gray-300 px-2 py-0.5 rounded-md"
            >
              {t}
            </span>
          ))}
        </div>

        <span className="text-amber-400 text-xs font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
          View <FaExternalLinkAlt className="text-[10px]" />
        </span>
      </div>
    </div>
  );
};

export default PortfolioCard;