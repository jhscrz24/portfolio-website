import React, { useState, useEffect, useRef } from 'react';
import { House, UserSearch, Library, FolderOpenDot, Contact, FileUser } from 'lucide-react';
import DarkMode from './DarkMode';

const navLinks = [
  { href: '#hero', icon: <House />, label: 'Home' },
  { href: '#about', icon: <UserSearch />, label: 'About' },
  { href: '#skills', icon: <Library />, label: 'Skills' },
  { href: '#projects', icon: <FolderOpenDot />, label: 'Projects' },
  { href: '#contact', icon: <Contact />, label: 'Contact' },
];

const NavbarMobile = () => {
  const [activeNav, setActiveNav] = useState('#hero');
  const [isVisible, setIsVisible] = useState(false);
  const observer = useRef(null);
  const heroObserver = useRef(null);

  useEffect(() => {
    const sections = document.querySelectorAll('#hero, #about, #skills, #projects, #contact');
    
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveNav(`#${entry.target.id}`);
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersect, { threshold: 0.2 });

    sections.forEach((section) => {
      if (section) {
        observer.current.observe(section);
      }
    });

    const heroElement = document.getElementById('hero');
    if (heroElement) {
      heroObserver.current = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          setIsVisible(!entry.isIntersecting);
        },
        { rootMargin: '-100px 0px 0px 0px' }
      );
      heroObserver.current.observe(heroElement);
    }

    return () => {
      sections.forEach((section) => {
        if (observer.current && section) {
          observer.current.unobserve(section);
        }
      });
      if (heroObserver.current && heroElement) {
        heroObserver.current.unobserve(heroElement);
      }
    };
  }, []);

  const handleNavClick = (nav) => {
    const section = document.querySelector(nav);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinkClasses = (nav) =>
    `transform transition-all duration-300 hover:scale-110 ${
      activeNav === nav ? 'dock-active' : ''
    }`;

  const floatingButtonClasses = `tooltip rounded-full mx-auto justify-center items-center w-13 h-13 fixed bottom-4 right-4 z-50 shadow-lg transition-all duration-500 ease-in-out bg-blue-950/40 backdrop-blur-lg border border-white/20 text-white ${
    isVisible
      ? 'opacity-100 pointer-events-auto transform scale-100'
      : 'opacity-0 pointer-events-none transform scale-50'
  }`;

  return (
    <div className="md:hidden">
      <div
        className={`${floatingButtonClasses} mb-48`}
        data-tip="Resume"
      >
        <a
          href="./Coroza_Jehus_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="menu menu-md flex items-center justify-center w-12 h-12 rounded-full"
        >
          <FileUser />
        </a>
      </div>
      <div
        className={`fixed bottom-4 right-4 mb-32 z-50 transition-all duration-500 ease-in-out ${
          isVisible
            ? 'opacity-100 pointer-events-auto transform scale-100'
            : 'opacity-0 pointer-events-none transform scale-50'
        }`}
      >
        <DarkMode />
      </div>
      <nav className="dock flex">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(link.href);
            }}
            className={navLinkClasses(link.href)}
          >
            {link.icon}
            <span className="dock-label mb-2 transition-opacity duration-300">
              {link.label}
            </span>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default NavbarMobile;