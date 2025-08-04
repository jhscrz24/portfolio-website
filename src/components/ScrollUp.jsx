import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToHeroButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      if (hero) {
        const heroBottom = hero.offsetTop + hero.offsetHeight;
        setShowButton(window.scrollY > heroBottom - 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToHero = () => {
    const hero = document.getElementById("hero");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
        className={`fixed bottom-20 right-4 sm:bottom-20 md:bottom-5 sm:right-5 z-50 transition-opacity duration-300 ${
            showButton ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        >
        <button
            onClick={scrollToHero}
            className="btn btn-info text-white w-12 h-12 lg:w-14 lg:h-14 transform transition-transform duration-300 hover:scale-105 active:scale-95 shadow-lg"
        >
            <ArrowUp className="w-5 h-5 lg:w-6 lg:h-6" />
        </button>
    </div>
  );
}
