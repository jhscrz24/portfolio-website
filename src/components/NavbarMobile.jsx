import React, { useState, useEffect } from 'react';
import { House, UserSearch, Library, FolderOpenDot, Contact, FileUser } from 'lucide-react';
import DarkMode from './DarkMode';

const NavbarMobile = () => {
  const [activeNav, setActiveNav] = useState('#hero');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveNav(window.location.hash || '#hero');
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); 

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
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

  return (
    <div className="md:hidden">
      <div
        className={`tooltip rounded-full bg-base-200/30 backdrop-blur-lg mx-auto justify-center w-12 h-12 fixed bottom-4 right-4 mb-48 z-50 shadow-lg transition-opacity duration-300 ${
          isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
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
        className={`fixed bottom-4 right-4 mb-32 z-50 transition-opacity duration-300 ${
          isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <DarkMode />
      </div>
      <div className="dock flex">
        <a href="#hero" onClick={() => setActiveNav('#hero')} className={activeNav === '#hero' ? 'dock-active' : ''}>
          <House />
          <span className="dock-label mb-2">Home</span>
        </a>

        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'dock-active' : ''}>
          <UserSearch />
          <span className="dock-label mb-2">About</span>
        </a>

        <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'dock-active' : ''}>
          <Library />
          <span className="dock-label mb-2">Skills</span>
        </a>

        <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'dock-active' : ''}>
          <FolderOpenDot />
          <span className="dock-label mb-2">Projects</span>
        </a>

        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'dock-active' : ''}>
          <Contact />
          <span className="dock-label mb-2">Contact</span>
        </a>
      </div>
    </div>
  );
};

export default NavbarMobile;