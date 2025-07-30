import { useEffect, useState } from 'react';

export default function Hero() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const handleThemeUpdate = () => {
      setTheme(localStorage.getItem('theme') || 'light');
    };

    window.addEventListener('themeChanged', handleThemeUpdate);

    return () => {
      window.removeEventListener('themeChanged', handleThemeUpdate);
    };
  }, []);

  const imageUrl = theme === 'dark' ? '/images/hero-dark.png' : '/images/hero-light.png';

  return (
    <>
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
        <div className="hero-content w-full justify-start px-4 sm:px-6 md:px-10 text-gray-200">
          <div className="flex flex-col items-start text-left max-w-xl ml-0 transform transition-all duration-1000 ease-in-out">
            <h6 className="mb-3 text-lg sm:text-xl md:text-2xl font-bold animate-fade-in-down transition-all duration-300">Hello there!</h6>
            <h1 className="mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-down transition-all duration-500 delay-200">
              I am Jehus Coroza
            </h1>
            <p className="mb-5 text-sm sm:text-base md:text-lg leading-relaxed animate-fade-in-up transition-all duration-500 delay-400">
              Fresh graduate IT student with hands-on experience in building clean, responsive user interfaces
              and working on real-world projects using Laravel, and the MERN stack. Eager to learn, collaborative, and always looking for ways to
              grow and support team success.
            </p>
            <div className="flex flex-wrap gap-3 animate-fade-in-up transition-all duration-500 delay-600">
              <button className="btn btn-primary w-full sm:w-auto transform transition-transform duration-300 hover:scale-105 active:scale-95">Contact Me</button>
              <button className="btn btn-secondary w-full sm:w-auto transform transition-transform duration-300 hover:scale-105 active:scale-95">View Resume</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}