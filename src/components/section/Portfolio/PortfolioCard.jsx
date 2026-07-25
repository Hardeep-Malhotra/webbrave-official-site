const PortfolioCard = ({ project, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="
      bg-[#0B1627]
      rounded-xl
      overflow-hidden
      border
      border-[#1B2A3D]
      cursor-pointer
      transition-all
      duration-300
      hover:border-yellow-400
      hover:-translate-y-2
      hover:shadow-xl
      "
    >

      <div className="h-56 bg-[#111827]">

        <img
          src={project.image}
          alt={project.title}
          className="
          w-full
          h-full
          object-cover
          transition-transform
          duration-500
          hover:scale-105
          "
        />

      </div>

      <div className="p-5">

        <h3 className="text-white text-lg font-semibold">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm mt-2">
          {project.category}
        </p>

      </div>

    </div>
  );
};

export default PortfolioCard;