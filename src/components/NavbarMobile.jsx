import React, { useState, useEffect, useRef } from 'react';
import { House, UserSearch, Library, FolderOpenDot, Contact, FileUser } from 'lucide-react';
import DarkMode from './DarkMode';

const NavbarMobile = () => {
  const [activeNav, setActiveNav] = useState('#hero');
  const [isVisible, setIsVisible] = useState(false);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
      if (visibleSection) {
        setActiveNav(`#${visibleSection.id}`);
      }
    }, { threshold: 0.5 });

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      if (observer.current) {
        observer.current.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (observer.current) {
          observer.current.unobserve(section);
        }
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      if (hero) {
        const heroBottom = hero.offsetTop + hero.offsetHeight;
        setIsVisible(window.scrollY > heroBottom - 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (nav) => {
    const section = document.querySelector(nav);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="md:hidden">
      <div
        className={`tooltip rounded-full mx-auto justify-center items-center w-13 h-13 fixed bottom-4 right-4 mb-48 z-50 shadow-lg transition-all duration-500 ease-in-out bg-blue-950/40 backdrop-blur-lg border border-white/20 text-white ${
          isVisible ? "opacity-100 pointer-events-auto transform scale-100" : "opacity-0 pointer-events-none transform scale-50"
        }`}
        data-tip="Resume"
      >
        <a
          href="/Coroza_Jehus_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="menu menu-md flex items-center justify-center w-12 h-12 rounded-full"
        >
          <FileUser />
        </a>
      </div>
      <div
        className={`fixed bottom-4 right-4 mb-32 z-50 transition-all duration-500 ease-in-out ${
          isVisible ? "opacity-100 pointer-events-auto transform scale-100" : "opacity-0 pointer-events-none transform scale-50"
        }`}
      >
        <DarkMode />
      </div>
      <div className="dock flex">
        <a href="#hero" onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }} className={`transform transition-all duration-300 hover:scale-110 ${activeNav === '#hero' ? 'dock-active' : ''}`}>
          <House />
          <span className="dock-label mb-2 transition-opacity duration-300">Home</span>
        </a>

        <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('#about'); }} className={`transform transition-all duration-300 hover:scale-110 ${activeNav === '#about' ? 'dock-active' : ''}`}>
          <UserSearch />
          <span className="dock-label mb-2 transition-opacity duration-300">About</span>
        </a>

        <a href="#skills" onClick={(e) => { e.preventDefault(); handleNavClick('#skills'); }} className={`transform transition-all duration-300 hover:scale-110 ${activeNav === '#skills' ? 'dock-active' : ''}`}>
          <Library />
          <span className="dock-label mb-2 transition-opacity duration-300">Skills</span>
        </a>

        <a href="#projects" onClick={(e) => { e.preventDefault(); handleNavClick('#projects'); }} className={`transform transition-all duration-300 hover:scale-110 ${activeNav === '#projects' ? 'dock-active' : ''}`}>
          <FolderOpenDot />
          <span className="dock-label mb-2 transition-opacity duration-300">Projects</span>
        </a>

        <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }} className={`transform transition-all duration-300 hover:scale-110 ${activeNav === '#contact' ? 'dock-active' : ''}`}>
          <Contact />
          <span className="dock-label mb-2 transition-opacity duration-300">Contact</span>
        </a>
      </div>
    </div>
  );
};

export default NavbarMobile;