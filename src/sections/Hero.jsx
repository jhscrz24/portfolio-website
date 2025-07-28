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
    <section id="hero" className="min-h-screen flex bg-base-100">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url(${imageUrl})`,
            transition: 'background-image 0.5s ease-in-out',
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content justify-start">
            <div className="flex flex-col items-start text-left max-w-xl">
              <h6 className="mb-5 text-2xl font-bold">Hello there!</h6>
              <h1 className="mb-5 text-6xl font-bold">I am Jehus Coroza</h1>
              <p className="mb-5">
                Fresh graduate IT student with hands-on experience in building clean, responsive user interfaces and working on real-world projects using Laravel, and the MERN stack. Contributed to the development process at Gleent Inc. by creating component library, enhancing UI consistency, and assisting with QA efforts. Eager to learn, collaborative, and always looking for ways to grow and support team success.
              </p>
              <div className="flex gap-4">
                <button className="btn btn-primary">Contact Me</button>
                <button className="btn btn-neutral">View Resume</button>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}