import { FaQuoteLeft, FaStar } from "react-icons/fa";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div
      className="
      bg-[#0D1727]
      border
      border-[#1B2A3D]
      rounded-xl
      p-8
      hover:border-yellow-400
      transition-all
      duration-300
      hover:-translate-y-2
      "
    >

      <FaQuoteLeft className="text-yellow-400 text-3xl mb-5" />

      <p className="text-gray-400 leading-7 mb-6">
        {testimonial.review}
      </p>

      <div className="flex text-yellow-400 mb-5">
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} />
        ))}
      </div>

      <div className="flex items-center gap-4">

        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-14 h-14 rounded-full object-cover border-2 border-yellow-400"
        />

        <div>

          <h3 className="text-white font-semibold">
            {testimonial.name}
          </h3>

          <p className="text-gray-400 text-sm">
            {testimonial.designation}
          </p>

        </div>

      </div>

    </div>
  );
};

export default TestimonialCard;