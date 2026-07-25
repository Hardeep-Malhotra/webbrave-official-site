const FeatureCard = ({ feature }) => {
  return (
    <div
      className="
      bg-[#0D1727]
      border
      border-[#1d293d]
      rounded-xl
      p-8
      text-center
      transition-all
      duration-300
      hover:border-yellow-400
      hover:-translate-y-2
      hover:shadow-2xl
      "
    >

      <div
        className="
        w-16
        h-16
        mx-auto
        rounded-full
        bg-yellow-400/10
        flex
        items-center
        justify-center
        text-yellow-400
        text-3xl
        mb-6
        "
      >
        {feature.icon}
      </div>

      <h3 className="text-white text-xl font-semibold mb-4">
        {feature.title}
      </h3>

      <p className="text-gray-400 leading-7 text-sm">
        {feature.description}
      </p>

    </div>
  );
};

export default FeatureCard;