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
    <section
      id="hero"
      className="min-h-screen flex bg-base-100"
    >
      <div
        className="hero min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${imageUrl})`,
          transition: 'background-image 0.5s ease-in-out',
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-neutral-content justify-start px-4 sm:px-6 md:px-10">
          <div className="flex flex-col items-start text-left max-w-xl">
            <h6 className="mb-3 text-lg sm:text-xl md:text-2xl font-bold">Hello there!</h6>
            <h1 className="mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              I am Jehus Coroza
            </h1>
            <p className="mb-5 text-sm sm:text-base md:text-lg leading-relaxed">
              Fresh graduate IT student with hands-on experience in building clean, responsive user interfaces 
              and working on real-world projects using Laravel, and the MERN stack. Contributed to the 
              development process at Gleent Inc. by creating component library, enhancing UI consistency, 
              and assisting with QA efforts. Eager to learn, collaborative, and always looking for ways to 
              grow and support team success.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="btn btn-primary w-full sm:w-auto">Contact Me</button>
              <button className="btn btn-neutral w-full sm:w-auto">View Resume</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
