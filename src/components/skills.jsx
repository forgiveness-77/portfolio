import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const skillsData = {
  Backend: [
    { name: "Node.js", rating: 81 }, 
    { name: "PHP", rating: 72 },
    { name: "Laravel", rating: 67 }, 
    { name: "Java", rating: 70 },
    { name: "MongoDB", rating: 89 },
    { name: "MySQL", rating: 84 }, 
  ],
  Embedded:[
    {name: "Arduino", rating: 80},
    {name: "IOT", rating: 79},
    {name: "Raspberry PI", rating: 75}
  ],
  Others: [
    { name: "Adobe Photoshop", rating: 95 },
    { name: "Adobe Illustrator", rating: 80 },
    { name: "Figma", rating: 85 },
    { name: "Blender", rating: 90 },
  ],
};

const MySkills = () => {
  const [activeTab, setActiveTab] = useState("Backend");

  return (
    <section id="skills" className="scroll-mt-24 text-white py-10 px-6 sm:px-10 md:px-28 max-w-screen-lg mx-auto">
      {/* Title and Line */}
      <div className="flex flex-col items-start">
        <div className="w-24 h-1 bg-white mb-2 xl:-ml-44"></div>
        <h2 className="text-5xl font-semibold mb-6 xl:-ml-44">My Skills</h2>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <div className="flex flex-wrap gap-2 sm:gap-4 border border-blue-500 rounded-lg p-1">
          {Object.keys(skillsData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 sm:px-12 py-2 sm:py-3 rounded-md text-white transition-all duration-300 ${
                activeTab === tab
                  ? "bg-gradient-to-b from-gradient1 to-gradient2"
                  : "text-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Skills List */}
      <div className="flex justify-center gap-6 sm:gap-10 flex-wrap">
        {skillsData[activeTab].map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 relative">
              {/* Circular Progress Bar */}
              <CircularProgressbar
                value={skill.rating}
                text={`${skill.rating}%`}
                styles={buildStyles({
                  textColor: "white",
                  pathColor: "url(#gradient)",
                  trailColor: "#D9D9D90F",
                  textSize: "22px",
                })}
              />
              {/* Gradient for progress bar */}
              <svg style={{ height: 0 }}>
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#15B9B9" />
                    <stop offset="100%" stopColor="#3C1DFF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <p className="mt-2 text-center text-sm sm:text-base">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MySkills;
