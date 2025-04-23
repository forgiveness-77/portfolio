import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Backend Development", "3D Modelling", "CyberSecurity", "Embedded Systems"],
      typeSpeed: 75,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id="home" className="flex items-center justify-center min-h-screen text-white py-[115px] px-4 sm:px-8 lg:px-16 scroll-mt-20">
      <div className="grid md:grid-cols-2 gap-10 w-full max-w-6xl">
        {/* Left Side */}
        <div className="flex flex-col justify-center gap-5">
          <h3 className="text-2xl">👋 Hey</h3>
          <h1 className="text-4xl font-bold -mt-3">
            I’m <span className="text-white">FORGIVENESS Peace Love</span>
          </h1>
          <h2 className="text-3xl">
            I’m into <span className="text-primary" ref={typedRef}></span>
          </h2>
          <p className="text-gray-400 text-xl">
          A specialized backend developer with expertise in database architecture, cybersecurity, and embedded systems.
          </p>
          <div className="mt-4">
            <button className="px-6 py-3 bg-gradient-to-b from-gradient1 to-gradient2 rounded-lg text-white font-semibold">
              About me
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <div className="relative rounded-xl overflow-hidden">
            <img
              src="/images/hero.png"
              alt="Hero"
              className="w-full max-w-xs md:max-w-md lg:max-w-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
