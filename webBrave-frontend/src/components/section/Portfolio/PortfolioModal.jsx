const PortfolioModal = ({ project, closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 px-4">

      <div className="bg-[#0B1627] rounded-xl overflow-hidden max-w-4xl w-full">

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[400px] object-cover"
        />

        <div className="p-8">

          <h2 className="text-3xl font-bold text-white">
            {project.title}
          </h2>

          <p className="text-gray-400 mt-4">
            {project.description}
          </p>

          <div className="mt-8 flex gap-4">

            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold"
            >
              Live Demo
            </a>

            <button
              onClick={closeModal}
              className="border border-gray-500 text-white px-6 py-3 rounded-lg"
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