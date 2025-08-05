import { useEffect, useState } from 'react';

export default function Hero() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleThemeUpdate = () => {
      setTheme(localStorage.getItem('theme') || 'dark');
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener('themeChanged', handleThemeUpdate);
    window.addEventListener('resize', handleResize);

    setAnimate(true);

    return () => {
      window.removeEventListener('themeChanged', handleThemeUpdate);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const imageUrl =
    theme === 'light'
      ? isMobile
        ? './images/hero-light-mobile.png'
        : './images/hero-light.png'
      : isMobile
        ? './images/hero-dark-mobile.png'
        : './images/hero-dark.png';

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
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left max-w-xl ml-0">
            <h6
              className={`mb-3 text-lg sm:text-xl md:text-2xl font-bold transition-all duration-500 ${
                animate ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`}
            >
              Hello there!
            </h6>
            <h1
              className={`mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight transition-all duration-500 delay-200 ${
                animate ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`}
            >
              I am Jehus Coroza
            </h1>
            <p
              className={`mb-5 text-sm sm:text-base md:text-lg leading-relaxed transition-all duration-500 delay-400 ${
                animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Fresh graduate IT student with hands-on experience in building clean, responsive user interfaces
              and working on real-world projects using Laravel, and the MERN stack. Eager to learn, collaborative, and always looking for ways to
              grow and support team success.
            </p>
            <div
              className={`flex flex-col sm:flex-row gap-3 w-full sm:w-auto transition-all duration-500 delay-600 ${
                animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <a href="./Coroza_Jehus_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-info text-white w-30 md:w-full sm:w-auto transform transition-transform duration-300 hover:scale-105 active:scale-95">
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