
import {
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
} from "react-icons/si";

const HeroImage = () => {
  return (
    <div className="relative flex justify-end items-center">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-yellow-500/10 blur-[140px]"></div>
      <div className="absolute w-[350px] h-[350px] rounded-full bg-purple-600/20 blur-[120px]"></div>

      {/* Main Hero Image */}
      {/* <img
        src={heroImage}
        alt="WebBrave Hero"
        className="relative z-10 w-[850px] lg:w-[950px] xl:w-[1050px] max-w-none object-contain"
      /> */}

      {/* React Card */}
      <div className="absolute top-10 left-8 z-20 bg-[#101826] border border-yellow-500/20 rounded-xl px-4 py-3 flex items-center gap-2 shadow-xl">
        <FaReact className="text-cyan-400 text-2xl" />
        <span className="text-white text-sm">React.js</span>
      </div>

      {/* Node Card */}
      <div className="absolute top-6 right-8 z-20 bg-[#101826] border border-yellow-500/20 rounded-xl px-4 py-3 flex items-center gap-2 shadow-xl">
        <FaNodeJs className="text-green-500 text-2xl" />
        <span className="text-white text-sm">Node.js</span>
      </div>

      {/* MongoDB Card */}
      <div className="absolute bottom-24 right-4 z-20 bg-[#101826] border border-yellow-500/20 rounded-xl px-4 py-3 flex items-center gap-2 shadow-xl">
        <SiMongodb className="text-green-400 text-2xl" />
        <span className="text-white text-sm">MongoDB</span>
      </div>

      {/* Express Card */}
      <div className="absolute bottom-40 left-0 z-20 bg-[#101826] border border-yellow-500/20 rounded-xl px-4 py-3 flex items-center gap-2 shadow-xl">
        <SiExpress className="text-gray-300 text-2xl" />
        <span className="text-white text-sm">Express.js</span>
      </div>

    </div>
  );
};

export default HeroImage;