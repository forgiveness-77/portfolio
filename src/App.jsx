import React, { useState, useEffect } from "react";
import Header from "./components/header";
import Hero from "./components/heroSection";
import About from "./components/about";
import MySkills from "./components/skills";
import Others from "./components/others";
import ContactForm from "./components/contact";
import Footer from "./components/footer";
import ProjectSection from "./components/projects";
import Testimonials from "./components/testimonials";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200); // Show button after scrolling 200px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-8 bg-gradient-to-b from-gradient1 to-gradient2 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-500 ease-in-out ${
        isVisible ? "bottom-8 opacity-100" : "bottom-[-50px] opacity-0"
      }`}
    >
      ↑
    </button>
  );
};

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <hr className="border-t-4 border-[rgb(2,100,176)] mb-8 mx-20" />
      <About />
      <MySkills />
      <Others />
      <ProjectSection />      
      <Testimonials />
      <ContactForm />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
