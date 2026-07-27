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
      className="bg-[#07111F] py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          title="OUR PORTFOLIO"
          subtitle="Explore some of our latest work."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

          {portfolioData.map((project) => (
            <PortfolioCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}

        </div>

      </div>

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