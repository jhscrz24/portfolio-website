import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

function Header() {
  return (
    <header className="shadow-lg hidden md:block">
        <div className="container mx-auto px-15 py-3 flex flex-col md:flex-row items-center justify-between gap-3">
            {/* Left - Contact Info */}
            <div className="flex flex-wrap gap-5 text-sm">
                <div className="flex items-center gap-2">
                    <MapPin size={16} color="#00bafe" />
                    <span>Liliw, Laguna, Philippines</span>
                </div>
                <div className="flex items-center gap-2">
                    <Mail size={16} color="#00bafe" />
                    
                    <a 
                    href="mailto:jehuscoroza24@gmail.com" 
                    className="hover:underline"
                  ><span>jehuscoroza24@gmail.com</span></a>
                </div>
                <div className="flex items-center gap-2">
                    <Phone size={16} color="#00bafe" />
                    <span>+63 963 327 0142</span>
                </div>
            </div>

            {/* Right - Social Links */}
            <div className="flex gap-5">
            <a 
                href="https://github.com/jhscrz24" 
                className="hover:text-gray-400 transition-colors"
                aria-label="GitHub"
                target="_blank"
            >
                <Github size={20} />
            </a>
            <a 
                href="https://www.linkedin.com/in/jehus-coroza-0b808833a/" 
                className="hover:text-gray-400 transition-colors"
                aria-label="LinkedIn"
                target="_blank"
            >
                <Linkedin size={20} />
            </a>
            </div>
        </div>
    </header>
  );
}

export default Header;