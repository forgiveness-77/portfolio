import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    const element = document.querySelector(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = 100; // Adjust based on navbar height
      let currentSection = 'Home';

      navLinks.forEach(({ name, href }) => {
        const section = document.querySelector(href);
        if (section) {
          const { top } = section.getBoundingClientRect();
          if (top <= offset) {
            currentSection = name;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="bg-transparent backdrop-blur-2xl w-full px-4 py-4 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        <div className="flex items-center">
          <img src="/logo.png" alt="fpl Logo" className="w-10 h-10 md:w-12 md:h-12" />
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleTheme} className="text-white hover:text-primary transition-colors duration-200">
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button onClick={toggleMenu} className="text-white hover:text-primary transition-colors duration-200">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-8 lg:space-x-16">
          {navLinks.map(({ name, href }) => (
            <button
              key={name}
              onClick={() => handleNavClick(href)}
              className={`${
                activeSection === name ? 'text-primary' : 'text-white'
              } hover:text-primary transition-colors duration-200 text-sm lg:text-base`}
            >
              {name}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center">
          <button onClick={toggleTheme} className="text-white hover:text-primary transition-colors duration-200">
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[rgb(25,28,32)] shadow-lg mt-4 rounded-lg overflow-hidden">
            <div className="flex flex-col">
              {navLinks.map(({ name, href }) => (
                <button
                  key={name}
                  onClick={() => handleNavClick(href)}
                  className={`${
                    activeSection === name ? 'text-primary' : 'text-white'
                  } hover:text-primary transition-colors duration-200 px-4 py-3 border-b border-gray-700 last:border-b-0`}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
