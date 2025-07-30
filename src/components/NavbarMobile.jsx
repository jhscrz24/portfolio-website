import React, { useState, useEffect } from 'react';
import { House, UserSearch, Library, FolderOpenDot, Contact, FileUser } from 'lucide-react';
import DarkMode from './DarkMode';

const NavbarMobile = () => {
  const [activeNav, setActiveNav] = useState('#hero');

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

  return (
    <div className="md:hidden">
      <div className="tooltip rounded-full bg-base-200 mx-auto justify-center w-13 h-13 fixed bottom-4 right-4 mb-32 z-50 shadow-lg" data-tip="Resume">
        <a href="" className="menu menu-md flex items-center justify-center w-13 h-13 rounded-full">
          <FileUser />
        </a>
      </div>
      <div className="fixed bottom-4 right-4 mb-16 z-50">
        <DarkMode />
      </div>
      <div className="dock flex">
        <a href="#hero" onClick={() => setActiveNav('#hero')} className={activeNav === '#hero' ? 'dock-active' : ''}>
          <House />
          <span className="dock-label mb-2">Home</span>
        </a>

        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'dock-active' : ''}>
          <UserSearch />
          <span className="dock-label mb-2">About Me</span>
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