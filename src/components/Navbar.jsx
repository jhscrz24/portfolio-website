import { Contact, FolderOpenDot, House, Library, UserSearch } from "lucide-react";
import DarkMode from "./DarkMode";

function Navbar() {
  return (
    <>
      <div className="hidden md:flex fixed bottom-4 left-1/2 transform -translate-x-1/2 justify-center items-center gap-2 z-50 mb-5">
        {/* Dark mode button on the right */}
        <ul className="menu menu-horizontal bg-base-200 rounded-full mx-auto justify-center">
          <li>
              <a className="tooltip rounded-full" data-tip="Home">
              <House />
              </a>
          </li>
        </ul>
        {/* Navbar for larger screens */}
        <ul className="menu menu-horizontal bg-base-200 rounded-full w-80 gap-4 mx-auto justify-center">
            <li>
                <a className="tooltip rounded-full" data-tip="Home">
                <House />
                </a>
            </li>
            <li>
                <a className="tooltip rounded-full" data-tip="About Me">
                <UserSearch />
                </a>
            </li>
            <li>
                <a className="tooltip rounded-full" data-tip="My Skills">
                <Library />
                </a>
            </li>
            <li>
                <a className="tooltip rounded-full" data-tip="Projects">
                <FolderOpenDot />
                </a>
            </li>
            <li>
                <a className="tooltip rounded-full" data-tip="Contact">
                <Contact />
                </a>
            </li>
        </ul>

        {/* Dark mode button on the right */}
        <DarkMode />
      </div>

      <div className="md:hidden">
        <div className="fixed bottom-4 right-4 mb-16 z-50">
            <DarkMode />
        </div>
        {/* Dock for smaller screens */}
        <div className="dock flex">
            <button>
            <House />
            <span className="dock-label mb-2">Home</span>
            </button>

            <button className="dock-active">
            <UserSearch />
            <span className="dock-label mb-2">About Me</span>
            </button>

            <button>
            <Library />
            <span className="dock-label mb-2">Skills</span>
            </button>

            <button>
            <FolderOpenDot />
            <span className="dock-label mb-2">Projects</span>
            </button>

            <button>
            <Contact />
            <span className="dock-label mb-2">Contact</span>
            </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
