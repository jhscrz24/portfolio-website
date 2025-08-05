import { Github, Linkedin } from "lucide-react";

function Footer() {
  return (
    <>
    <div className="divider px-10"></div>
    <footer className="footer px-10 flex justify-between sm:px-15 footer-horizontal p-7 mb-15">
      <aside className="flex items-center gap-4">
        <img src="./images/my-logo.png" alt="my-logo" className="w-15 rounded-full" />
        <p className="w-50 md:w-full">
          Thanks for visiting my portfolio! 
          <br />
          I’d love to connect and hear from you.
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="flex gap-4 w-27 md:w-full">
          <a href="https://github.com/jhscrz24" className="hover:text-gray-400 transition-colors" aria-label="GitHub" target="_blank">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/jehus-coroza-0b808833a/" className="hover:text-gray-400 transition-colors" aria-label="LinkedIn" target="_blank">
            <Linkedin />
          </a>
        </div>
      </nav>
    </footer>
    </>
  )
}

export default Footer