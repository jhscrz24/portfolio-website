import { useEffect, useState } from 'react';

export default function Hero() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640); // sm breakpoint

  useEffect(() => {
    const handleThemeUpdate = () => {
      setTheme(localStorage.getItem('theme') || 'dark');
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Updates on screen resize
    };

    window.addEventListener('themeChanged', handleThemeUpdate);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('themeChanged', handleThemeUpdate);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const imageUrl =
    theme === 'light'
      ? isMobile
        ? '/images/hero-light-mobile.png'
        : '/images/hero-light.png'
      : isMobile
        ? '/images/hero-dark-mobile.png'
        : '/images/hero-dark.png';

  return (
    <section
      id="hero"
      className="min-h-screen flex bg-base-100 transition-colors duration-500"
    >
      <div
        className="hero min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${imageUrl})`,
          transition: 'background-image 0.5s ease-in-out',
        }}
      >
        <div className="hero-overlay bg-opacity-40 transition-all duration-500"></div>
        <div className="hero-content w-full justify-center sm:justify-start px-4 sm:px-6 md:px-10 text-gray-200">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left max-w-xl ml-0 transform transition-all duration-1000 ease-in-out">
            <h6 className="mb-3 text-lg sm:text-xl md:text-2xl font-bold animate-fade-in-down transition-all duration-300">
              Hello there!
            </h6>
            <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-down transition-all duration-500 delay-200">
              I am Jehus Coroza
            </h1>
            <p className="mb-5 text-sm sm:text-base md:text-lg leading-relaxed animate-fade-in-up transition-all duration-500 delay-400">
              Fresh graduate IT student with hands-on experience in building clean, responsive user interfaces
              and working on real-world projects using Laravel, and the MERN stack. Eager to learn, collaborative, and always looking for ways to
              grow and support team success.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto animate-fade-in-up transition-all duration-500 delay-600">
              <a href="#contact">
                <button className="btn btn-primary w-full sm:w-auto transform transition-transform duration-300 hover:scale-105 active:scale-95">
                  Contact Me
                </button>
              </a>
              <a href="/Coroza_Jehus_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-secondary w-full sm:w-auto transform transition-transform duration-300 hover:scale-105 active:scale-95">
                  View Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
