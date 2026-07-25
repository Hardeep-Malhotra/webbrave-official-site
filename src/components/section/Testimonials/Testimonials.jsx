import SectionTitle from "../../ui/SectionTitle";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../../../data/testimonial";

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-[#07111F] py-24">

      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          title="TESTIMONIALS"
          subtitle="What our happy clients say about our services."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {testimonials.map((item) => (
            <TestimonialCard
              key={item.id}
              testimonial={item}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;