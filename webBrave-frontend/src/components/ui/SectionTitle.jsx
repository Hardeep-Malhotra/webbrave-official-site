import React from "react";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">

      {/* Small Gold Heading */}
      <h5
        className="
        text-yellow-400
        text-sm
        font-semibold
        tracking-widest
        uppercase
        mb-3
        "
      >
        {title}
      </h5>


      {/* Description */}
      <p
        className="
        text-gray-400
        text-sm
        max-w-xl
        mx-auto
        "
      >
        {subtitle}
      </p>


    </div>
  );
};

export default SectionTitle;