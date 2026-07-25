const TechCard = ({ icon, name }) => {
  return (
    <div className="group bg-[#0D1322] border border-yellow-500/20 rounded-xl p-4 flex flex-col items-center justify-center hover:border-yellow-400 hover:-translate-y-1 transition-all duration-300">

      <img
        src={icon}
        alt={name}
        className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
      />

      <h3 className="mt-3 text-white text-xs font-medium text-center group-hover:text-yellow-400 transition-colors duration-300">
        {name}
      </h3>

    </div>
  );
};

export default TechCard;