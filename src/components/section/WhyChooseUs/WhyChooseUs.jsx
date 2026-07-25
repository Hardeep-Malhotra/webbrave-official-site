import FeatureCard from "./FeatureCard";
import SectionTitle from "../../ui/SectionTitle";
import { features } from "../../../data/features";

const WhyChooseUs = () => {
  return (
    <section
      id="why-us"
      className="bg-[#08111f] py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          title="WHY CHOOSE US"
          subtitle="We build high-quality digital products with modern technologies and outstanding user experiences."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;