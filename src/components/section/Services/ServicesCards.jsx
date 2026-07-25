const ServicesCard = ({ icon, title }) => {
  return (
    <div className="group bg-[#0D1322] border border-yellow-500/20 rounded-xl p-5 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 cursor-pointer">

      {/* Icon Box */}
      <div className="w-12 h-12 rounded-lg bg-[#1A2238] border border-yellow-500/20 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110">

        <img
          src={icon}
          alt={title}
          className="w-7 h-7 object-contain"
        />

      </div>

      {/* Service Title */}
      <h3 className="text-white text-base font-semibold leading-6 transition-colors duration-300 group-hover:text-yellow-400">
        {title}
      </h3>

    </div>
  );
};

export default ServicesCard;