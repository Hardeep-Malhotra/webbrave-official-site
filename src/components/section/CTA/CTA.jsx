import React from "react";

const CTA = () => {
  return (
    <section className="bg-[#0B1220] py-24">

      <div className="max-w-6xl mx-auto px-6">

        <div
          className="
          bg-[#111827]
          border
          border-[#263247]
          rounded-2xl
          px-10
          py-16
          text-center
          hover:border-yellow-400
          transition-all
          duration-300
          "
        >

          <h2 className="text-4xl font-bold text-white">
            Ready To Build Your Next Project?
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto leading-8">
            Whether you need a business website, a modern web application,
            or a complete digital solution, our team is ready to transform
            your ideas into reality.
          </p>

          <div className="mt-10 flex justify-center gap-5 flex-wrap">

            <a
              href="#contact"
              className="
              bg-yellow-400
              hover:bg-yellow-500
              text-black
              font-semibold
              px-8
              py-3
              rounded-lg
              transition
              "
            >
              Start Your Project
            </a>

            <a
              href="#portfolio"
              className="
              border
              border-yellow-400
              text-yellow-400
              hover:bg-yellow-400
              hover:text-black
              font-semibold
              px-8
              py-3
              rounded-lg
              transition
              "
            >
              View Portfolio
            </a>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CTA;