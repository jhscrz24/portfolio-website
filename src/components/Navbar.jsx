import { Contact, FileUser, FolderOpenDot, House, Library, UserSearch } from "lucide-react";
import DarkMode from "./DarkMode";
import { useEffect, useState, useRef } from "react";

function Navbar() {
  const [activeNav, setActiveNav] = useState('#hero');
  const observer = useRef(null);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
          setActiveNav(`#${entry.target.id}`);
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersect, { threshold: 0.2 });

    sections.forEach((section) => {
      observer.current.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (observer.current) {
          observer.current.unobserve(section);
        }
      });
    };
  }, []);

  const handleNavClick = (e, nav) => {
    e.preventDefault();
    setActiveNav(nav);
    const section = document.querySelector(nav);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const navItems = [
    { href: "#hero", icon: <House />, tip: "Home" },
    { href: "#about", icon: <UserSearch />, tip: "About" },
    { href: "#skills", icon: <Library />, tip: "Skills" },
    { href: "#projects", icon: <FolderOpenDot />, tip: "Projects" },
    { href: "#contact", icon: <Contact />, tip: "Contact" },
  ];

  return (
    <>
      <div className="hidden md:flex fixed bottom-4 left-1/2 transform -translate-x-1/2 justify-center items-center gap-5 z-50 mb-5">
        <div 
          className="tooltip rounded-full mx-auto justify-center w-13 h-13 shadow-lg bg-blue-950/40 backdrop-blur-lg border border-white/20 text-white" 
          data-tip="View Resume"
        >
          <a href="./Coroza_Jehus_Resume.pdf" target="_blank" rel="noopener noreferrer" className="menu menu-md flex items-center justify-center w-12 h-12 mx-auto rounded-full">
            <FileUser />
          </a>
        </div>
        <ul className="gap-9 w-auto px-8 mx-auto justify-center flex items-center bg-blue-950/40 backdrop-blur-lg rounded-full border border-white/20 shadow-lg py-2 text-white">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`tooltip rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 ${activeNav === item.href ? 'bg-gray-600 p-1 text-white scale-110' : ''}`}
                data-tip={item.tip}
              >
                {item.icon}
              </a>
            </li>
          ))}
        </ul>

        <DarkMode />
      </div>
    </>
  );
}

export default Navbar;