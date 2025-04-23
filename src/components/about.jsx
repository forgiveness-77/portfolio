import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 text-white flex flex-col md:flex-row gap-10 items-center justify-center py-10 md:py-20 px-4 md:px-20 lg:px-44"
    >
      <div className="relative w-full md:w-1/2 flex justify-center">
        <img
          src="/images/about.png"
          alt="About"
          className="max-w-48 md:max-w-72 h-auto rounded-lg"
        />
      </div>

      <div className="w-full md:w-1/2 text-left space-y-6 md:space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold relative">
          <span className="text-[rgb(63,63,63)] absolute -top-10 -left-2 text-6xl md:text-8xl font-semibold opacity-30">
            <svg
              width="82"
              height="90"
              viewBox="0 0 82 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.7"
                d="M41.2611 1.125L45.6136 0C49.5598 0 51.5329 4.21875 51.5329 12.6563L56.9299 45.1406L57.6263 45.7031L77.6476 39.7969C80.3171 39.7969 81.7679 41.4375 82 44.7188C82 47.1562 74.6299 50.1094 59.8896 53.5781L59.1932 53.8594V54.4219C59.1932 56.3906 63.0234 66.6562 70.6836 85.2188V85.5C70.6836 87.2812 68.8846 88.7812 65.2866 90C61.9207 90 59.7155 86.7656 58.6709 80.2969C56.0014 75.6094 52.7516 67.875 48.9214 57.0938H48.2251C33.0205 59.625 25.4183 61.7812 25.4183 63.5625C17.0616 78.1875 10.736 85.5 6.44161 85.5C4.00425 85.5 2.55343 84.2344 2.08917 81.7031C2.08917 79.4531 5.1649 75.0469 11.3163 68.4844L14.1019 63.5625H9.74947L6.44161 64.125C2.1472 63.2812 0 61.5 0 58.7812C1.74098 55.5 4.29441 53.8594 7.6603 53.8594L12.0127 55.2656C18.5124 55.2656 21.7622 53.3438 21.7622 49.5C27.6815 38.25 34.1812 22.125 41.2611 1.125ZM42.828 26.7188L32.5563 51.75C42.0736 50.25 46.8323 48.7969 46.8323 47.3906C45.0913 33.6094 43.7565 26.7188 42.828 26.7188Z"
                fill="#3F3F3F"
              />
            </svg>
          </span>
          About
        </h2>
        <p className="text-gray-300 text-sm md:text-base pb-10">
          I'm a backend developer specializing in secure, scalable systems. With expertise in database architecture,
          cybersecurity, and embedded systems, I build robust solutions that prioritize security and performance.
          My approach combines technical precision with practical problem-solving. I focus on creating secure,
          efficient backend systems that form the foundation of reliable applications. I'm passionate about
          optimizing database performance, implementing security best practices, and developing efficient embedded
          solutions.
        </p>
        <a href="/files/resume.pdf">
          <button className="bg-gradient-to-b from-gradient1 to-gradient2 text-white font-semibold px-4 py-2 rounded-lg">
            Resume
          </button>
        </a>
      </div>
    </section>
  );
};

export default About;
