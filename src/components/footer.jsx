import React from "react";

const Footer = () => {
  return (
    <>
      <div className="text-white px-6 sm:px-12 flex flex-col items-center text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 tracking-widest">
          Interested In My Work
        </h2>
        <p className="text-gray-400 text-sm sm:text-base mb-6">
          Download My CV To Know More About Me
        </p>
        <a href="/files/cv.pdf">
          <button className="bg-gradient-to-b from-gradient1 to-gradient2 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md hover:scale-105 transition-transform">
            Download CV
          </button>
        </a>
      </div>

      <footer className="mt-12 bg-[rgb(25,28,32)] flex flex-col md:flex-row gap-6 md:gap-14 items-center justify-center text-white text-sm sm:text-base py-6 px-4 sm:px-8">
        <p className="text-center md:text-left">© 2025 Peace Love - All rights reserved</p>
        <div className="flex justify-center space-x-6 sm:space-x-8">
          <a href="https://www.instagram.com/f_l.o.v.e_77/" target="_blank" className="text-primary hover:text-white">
            <i className="fab fa-instagram fa-lg"></i>
          </a>
          <a href="https://www.linkedin.com/in/forgiveness-peace-love-190065302/" target="_blank" className="text-primary hover:text-white">
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
          <a href="https://github.com/forgiveness-77" target="_blank" className="text-primary hover:text-white">
            <i className="fab fa-github fa-lg"></i>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
