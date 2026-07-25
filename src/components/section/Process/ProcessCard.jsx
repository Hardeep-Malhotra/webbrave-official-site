const ProcessCard = ({ icon, step, title }) => {
  return (
    <div className="group relative bg-[#0D1322] border border-yellow-500/20 rounded-xl p-5 text-center hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300">

      {/* Step Number */}
      <span className="absolute top-3 right-3 text-xs font-bold text-yellow-500">
        {step}
      </span>

      {/* Icon */}
      <div className="flex justify-center mb-4">
        <img
          src={icon}
          alt={title}
          className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Title */}
      <h3 className="text-white text-sm font-semibold leading-6 group-hover:text-yellow-400 transition-colors duration-300">
        {title}
      </h3>

    </div>
  );
};

export default ProcessCard;