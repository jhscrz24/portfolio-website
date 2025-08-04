import { Contact, FileUser, FolderOpenDot, House, Library, UserSearch } from "lucide-react";
import DarkMode from "./DarkMode";
import { useEffect, useState, useRef } from "react";

function Navbar() {
  const [activeNav, setActiveNav] = useState('#hero');
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
      observer.current.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.current.unobserve(section);
      });
    };
  }, []);

  const handleNavClick = (nav) => {
    setActiveNav(nav);
    const section = document.querySelector(nav);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <>
      <div className="hidden md:flex fixed bottom-4 left-1/2 transform -translate-x-1/2 justify-center items-center gap-5 z-50 mb-5">
        <div 
          className="tooltip rounded-full mx-auto justify-center w-13 h-13 shadow-lg bg-blue-950/40 backdrop-blur-lg border border-white/20 text-white" 
          data-tip="View Resume"
        >
          <a href="/Coroza_Jehus_Resume.pdf" target="_blank" rel="noopener noreferrer" className="menu menu-md flex items-center justify-center w-12 h-12 mx-auto rounded-full">
            <FileUser />
          </a>
        </div>
        <ul className="gap-9 w-80 mx-auto justify-center flex items-center bg-blue-950/40 backdrop-blur-lg rounded-full border border-white/20 shadow-lg py-2 text-white">
          <li>
            <a
              href="#hero"
              onClick={() => handleNavClick('#hero')}
              className={`tooltip rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 ${activeNav === '#hero' ? 'bg-gray-600 p-1 text-white scale-110' : ''}`}
              data-tip="Home"
            >
              <House />
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => handleNavClick('#about')}
              className={`tooltip rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 ${activeNav === '#about' ? 'bg-gray-600 p-1 text-white scale-110' : ''}`}
              data-tip="About"
            >
              <UserSearch />
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={() => handleNavClick('#skills')}
              className={`tooltip rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 ${activeNav === '#skills' ? 'bg-gray-600 p-1 text-white scale-110' : ''}`}
              data-tip="Skills"
            >
              <Library />
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => handleNavClick('#projects')}
              className={`tooltip rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 ${activeNav === '#projects' ? 'bg-gray-600 p-1 text-white scale-110' : ''}`}
              data-tip="Projects"
            >
              <FolderOpenDot />
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => handleNavClick('#contact')}
              className={`tooltip rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 ${activeNav === '#contact' ? 'bg-gray-600 p-1 text-white scale-110' : ''}`}
              data-tip="Contact"
            >
              <Contact />
            </a>
          </li>
        </ul>

        <DarkMode />
      </div>
    </>
  );
}

export default Navbar;