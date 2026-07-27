import ServicesCard from "./ServicesCards";

// Icons
import mernStack from "../../../assets/icons/mern-stack.svg";
import customWebsite from "../../../assets/icons/custom-website.svg";
import webApp from "../../../assets/icons/web-app.svg";
import landingPage from "../../../assets/icons/landing-page.svg";
import adminDashboard from "../../../assets/icons/admin-dashboard.svg";
import apiIntegration from "../../../assets/icons/api-integration.svg";
import bugFixes from "../../../assets/icons/bug-fixes.svg";
import websiteMaintenance from "../../../assets/icons/website-maintenance.svg";
import performanceOptimization from "../../../assets/icons/performance-optimization.svg";
import databaseDesign from "../../../assets/icons/database-design.svg";
import responsiveDesign from "../../../assets/icons/responsive-design.svg";
import deployment from "../../../assets/icons/website-deployment.svg";

const services = [
  {
    icon: mernStack,
    title: "MERN Stack Development",
  },
  {
    icon: customWebsite,
    title: "Custom Website Development",
  },
  {
    icon: webApp,
    title: "Web Application Development",
  },
  {
    icon: landingPage,
    title: "Landing Page Design",
  },
  {
    icon: adminDashboard,
    title: "Admin Dashboard Development",
  },
  {
    icon: apiIntegration,
    title: "API Development & Integration",
  },
  {
    icon: bugFixes,
    title: "Website Bug Fixes",
  },
  {
    icon: websiteMaintenance,
    title: "Website Maintenance",
  },
  {
    icon: performanceOptimization,
    title: "Performance Optimization",
  },
  {
    icon: databaseDesign,
    title: "Database Design (MongoDB)",
  },
  {
    icon: responsiveDesign,
    title: "Responsive Website Design",
  },
  {
    icon: deployment,
    title: "Website Deployment",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-[#070B16] py-20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Heading */}

        <div className="text-center mb-12">

          <p className="text-yellow-400 uppercase tracking-[3px] font-semibold text-sm">
            OUR SERVICES
          </p>

          <h2 className="text-4xl font-bold text-white mt-3">
            End-to-End Digital Solutions
          </h2>

          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            We provide modern web development services for startups,
            businesses and enterprises.
          </p>

        </div>

        {/* Services Grid */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">

          {services.map((service, index) => (
            <ServicesCard
              key={index}
              icon={service.icon}
              title={service.title}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;