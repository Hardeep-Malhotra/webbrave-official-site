import TechCard from "./TechCard";

import react from "../../../assets/technology/react.svg";
import nodejs from "../../../assets/technology/nodejs.svg";
import expressjs from "../../../assets/technology/expressjs.svg";
import mongodb from "../../../assets/technology/mongodb.svg";
import tailwindcss from "../../../assets/technology/tailwindcss.svg";
import javascript from "../../../assets/technology/javascript.svg";
import typescript from "../../../assets/technology/typescript.svg";
import redux from "../../../assets/technology/redux.svg";
import nextjs from "../../../assets/technology/nextjs.svg";
import firebase from "../../../assets/technology/firebase.svg";
import git from "../../../assets/technology/git.svg";
import github from "../../../assets/technology/github.svg";
import docker from "../../../assets/technology/docker.svg";
import postman from "../../../assets/technology/postman.svg";
import jwt from "../../../assets/technology/jwt.svg";
import socketio from "../../../assets/technology/socketio.svg";
import netlify from "../../../assets/technology/netlify.svg";
import vercel from "../../../assets/technology/vercel.svg";
import figma from "../../../assets/technology/figma.svg";

const technologies = [
  { icon: react, name: "React" },
  { icon: nodejs, name: "Node.js" },
  { icon: expressjs, name: "Express.js" },
  { icon: mongodb, name: "MongoDB" },
  { icon: tailwindcss, name: "Tailwind CSS" },
  { icon: javascript, name: "JavaScript" },
  { icon: typescript, name: "TypeScript" },
  { icon: redux, name: "Redux" },
  { icon: nextjs, name: "Next.js" },
  { icon: firebase, name: "Firebase" },
  { icon: git, name: "Git" },
  { icon: github, name: "GitHub" },
  { icon: docker, name: "Docker" },
  { icon: postman, name: "Postman" },
  { icon: jwt, name: "JWT" },
  { icon: socketio, name: "Socket.IO" },
  { icon: netlify, name: "Netlify" },
  { icon: vercel, name: "Vercel" },
  { icon: figma, name: "Figma" },
];

const Technologies = () => {
  return (
    <section
      id="technologies"
      className="py-20 bg-[#070B16]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-14">

          <span className="text-yellow-400 uppercase tracking-[4px] font-semibold text-sm">
            OUR TECH STACK
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Technologies We Use
          </h2>

          <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
            We use modern technologies and industry best practices to build
            high-performance web applications.
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4">

          {technologies.map((tech, index) => (
            <TechCard
              key={index}
              icon={tech.icon}
              name={tech.name}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Technologies;