import { useState } from "react";
import SectionTitle from "../../ui/SectionTitle";
import PortfolioCard from "./PortfolioCard";
import PortfolioModal from "./PortfolioModal";
import { portfolioData } from "../../../data/portfolio";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="portfolio"
      className="relative bg-[#070B16] py-20 lg:py-28 overflow-hidden"
    >
      {/* Background Decorative Radial Glows */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Section Header */}
        <SectionTitle
          title="OUR PORTFOLIO"
          subtitle="Explore our recent full-stack web development projects and custom digital solutions."
        />

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-12">
          {portfolioData.map((project) => (
            <PortfolioCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Interactive Modal Preview */}
      {selectedProject && (
        <PortfolioModal
          project={selectedProject}
          closeModal={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Portfolio;