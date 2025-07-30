import { Contact, FileUser, FolderOpenDot, House, Library, UserSearch } from "lucide-react";
import DarkMode from "./DarkMode";
import { useEffect, useState } from "react";

function Navbar() {
  const [activeNav, setActiveNav] = useState(window.location.hash || '#hero');

  useEffect(() => {
    const handleHashChange = () => {
      setActiveNav(window.location.hash || '#hero');
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  
  return (
    <>
      <div className="hidden md:flex fixed bottom-4 left-1/2 transform -translate-x-1/2 justify-center items-center gap-5 z-50 mb-5">
        <div 
          className="tooltip rounded-full bg-base-200/30 backdrop-blur-lg mx-auto justify-center w-13 h-13 shadow-lg " 
          data-tip="View Resume"
        >
          <a href="" className="menu menu-md flex items-center justify-center w-12 h-12 mx-auto rounded-full">
            <FileUser />
          </a>
        </div>
        <ul className="menu menu-horizontal bg-base-200/30 backdrop-blur-lg rounded-full w-80 gap-4 mx-auto justify-center shadow-lg">
          <li>
            <a
              href="#hero"
              onClick={() => setActiveNav('#hero')}
              className={`tooltip rounded-full ${activeNav === '#hero' ? 'bg-gray-600 text-white' : ''}`}
              data-tip="Home"
            >
              <House />
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => setActiveNav('#about')}
              className={`tooltip rounded-full ${activeNav === '#about' ? 'bg-gray-600 text-white' : ''}`}
              data-tip="About Me"
            >
              <UserSearch />
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={() => setActiveNav('#skills')}
              className={`tooltip rounded-full ${activeNav === '#skills' ? 'bg-gray-600 text-white' : ''}`}
              data-tip="My Skills"
            >
              <Library />
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => setActiveNav('#projects')}
              className={`tooltip rounded-full ${activeNav === '#projects' ? 'bg-gray-600 text-white' : ''}`}
              data-tip="Projects"
            >
              <FolderOpenDot />
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setActiveNav('#contact')}
              className={`tooltip rounded-full ${activeNav === '#contact' ? 'bg-gray-600 text-white' : ''}`}
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