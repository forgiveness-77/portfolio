import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio",
    image: "/images/projects/portfolio.png",
    liveLink: "https://flove.vercel.app",
    githubLink: "https://github.com/forgiveness-77/portfolio",
  },
  {
    title: "Arduino Card Transactions",
    image: "/images/projects/arduino.png",
    liveLink: "#",
    githubLink: "https://github.com/forgiveness-77/arduino-card-transactions.git",
  },
  {
    title: "Mqtt Weather Station",
    image: "/images/projects/mqtt.png",
    liveLink: "#",
    githubLink: "https://github.com/forgiveness-77/mqtt-weather-station.git",
  },
  {
    title: "E-commerce backend",
    image: "/images/projects/ecommerce.png",
    liveLink: "#",
    githubLink: "https://github.com/forgiveness-77/E-commerce_backend.git",
  },
  {
    title: "Pharmacy Management System",
    image: "/images/projects/pharmacy.png",
    liveLink: "#",
    githubLink: "https://github.com/forgiveness-77/java_MVC",
  },
];

const ProjectSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const isExpanded = visibleProjects >= projects.length;

  return (
    <section id="projects" className="scroll-mt-24 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl text-white font-bold text-center mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <div key={index} className="bg-gray-800 border border-gray-600 rounded-2xl shadow-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-gray-100 text-xl font-semibold">{project.title}</h3>
                <div className="mt-4 flex justify-between items-center">
                  {/* Live Preview Button */}
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-500 transition"
                  >
                    Live Preview
                  </a>
                  {/* GitHub Icon Button */}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-400 text-2xl"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More / View Less Button */}
        <div className="text-center mt-6">
          <button
            onClick={() => setVisibleProjects(isExpanded ? 3 : projects.length)}
            className="px-6 py-2 bg-gradient-to-b from-gradient1 to-gradient2 text-white rounded-lg  transition"
          >
            {isExpanded ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
