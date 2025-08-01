import { Github, Linkedin } from "lucide-react";

function Footer() {
  return (
    <>
    <div className="w-370 mx-auto">
      <div className="divider"></div>
    </div>
    <footer className="footer px-10 flex justify-between sm:px-15 footer-horizontal p-7 mb-10">
      <aside className="flex items-center gap-4">
        <img src="public/images/my-logo.png" alt="my-logo" className="w-15 rounded-full" />
        <p>
          Thanks for visiting my portfolio! 
          <br />
          I’d love to connect and hear from you.
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a href="#" className="hover:text-gray-400 transition-colors" aria-label="GitHub">
            <Github />
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors" aria-label="LinkedIn">
            <Linkedin />
          </a>
        </div>
      </nav>
    </footer>
    </>
  )
}

export default Footer