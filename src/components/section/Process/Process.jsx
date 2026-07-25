import ProcessCard from "./ProcessCard";

import discovery from "../../../assets/process/01-discovery.svg";
import planning from "../../../assets/process/02-planning.svg";
import uiux from "../../../assets/process/03-ui-ux-design.svg";
import development from "../../../assets/process/04-development.svg";
import testing from "../../../assets/process/05-testing.svg";
import deployment from "../../../assets/process/06-deployment.svg";
import maintenance from "../../../assets/process/07-maintenance.svg";

const process = [
  {
    step: "01",
    icon: discovery,
    title: "Discovery",
  },
  {
    step: "02",
    icon: planning,
    title: "Planning",
  },
  {
    step: "03",
    icon: uiux,
    title: "UI / UX Design",
  },
  {
    step: "04",
    icon: development,
    title: "Development",
  },
  {
    step: "05",
    icon: testing,
    title: "Testing",
  },
  {
    step: "06",
    icon: deployment,
    title: "Deployment",
  },
  {
    step: "07",
    icon: maintenance,
    title: "Maintenance",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-20 bg-[#070B16]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-yellow-400 uppercase tracking-[4px] text-sm font-semibold">
            OUR PROCESS
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            How We Work
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            From idea to deployment, we follow a structured workflow to build
            high-quality web applications.
          </p>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">

          {process.map((item) => (
            <ProcessCard
              key={item.step}
              step={item.step}
              icon={item.icon}
              title={item.title}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Process;