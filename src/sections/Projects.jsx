import { Github, Link } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" className="p-10 bg-base-200" ref={sectionRef}>
      <div className="min-h-screen text-center md:px-10">
        <h4
          className={`text-lg font-medium text-info transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          Projects
        </h4>
        <h1
          className={`text-4xl md:text-5xl mb-15 font-bold transition-all duration-500 delay-200 hover:text-info ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          My Projects
        </h1>

        <div className="flex flex-col md:mx-15 gap-15 mt-10">
          <div
            className={`card lg:card-side shadow-2xl transform transition-all duration-500 hover:scale-105 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            } delay-300`}
          >
            <figure>
              <img src="./images/realtime-chat.png" alt="Album" />
            </figure>
            <div className="card-body w-full">
              <h2 className="card-title text-lg md:text-3xl font-stretch-extra-condensed font-normal">Chizmisify - A Realtime Chat App</h2>
              <div className="hidden md:divider"></div>
              <p className="text-justify text-md md:text-lg">This is a full-stack web application using the MERN along with Socket.io to enable real-time communication. I designed the user interface with TailwindCSS and DaisyUI, which also allowed me to offer 32 customizable color themes for personalization. The app includes authentication and authorization using JWT, a real-time chat feature that shows users’ online or offline status, and global state management handled by Zustand for smooth data flow. This was my first time working with real-time technology, and it gave me valuable hands-on experience in building interactive, full-stack applications.</p>
              <div className="card-actions justify-center md:justify-end mt-3">
                <a href="https://chizmisify-clone-lnzv.onrender.com/" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-info text-white w-full md:w-40 transform transition-transform duration-300 hover:scale-105 active:scale-95 shadow-2xl">
                    <Link className="w-4 h-4" /> View Link
                  </button>
                </a>
                <a href="https://github.com/jhscrz24/realtime-chat-project" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-nuetral w-full md:w-40 transform transition-transform duration-300 hover:scale-105 active:scale-95 shadow-2xl">
                    <Github className="w-4 h-4" /> View in GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            className={`card lg:card-side shadow-2xl transform transition-all duration-500 hover:scale-105 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            } delay-500`}
          >
            <figure className="md:hidden">
              <img src="./images/recipe-finder.png" alt="Album" className="md:hidden" />
            </figure>
            <div className="card-body w-full">
              <h2 className="card-title text-lg md:text-3xl justify-end font-stretch-extra-condensed font-normal">CraveIt – Recipe Finder Mobile App</h2>
              <div className="hidden md:divider"></div>
              <p className="text-justify text-md md:text-lg">Developed a fully functional mobile application in just one week despite having limited experience in mobile app development. Using React Native, Express, PostgreSQL, and Expo, I built features such as secure signup and login with 6-digit email verification powered by Clerk, recipe exploration with category filters, a search function with detailed step-by-step cooking instructions, and embedded YouTube tutorials for each recipe. The app also includes 8 customizable color themes, enhancing user personalization. This project allowed me to quickly adapt to mobile development while delivering a complete and user-friendly recipe discovery experience.</p>
              <div className="card-actions justify-center md:justify-start mt-3">
                <a href="https://github.com/jhscrz24/craveit-mobile-app" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-nuetral w-full md:w-40 transform transition-transform duration-300 hover:scale-105 active:scale-95 shadow-2xl">
                    <Github className="w-4 h-4" /> View in GitHub
                  </button>
                </a>
              </div>
            </div>
            <figure>
              <img src="./images/recipe-finder.png" alt="Album" className="hidden md:block" />
            </figure>
          </div>

          <div
            className={`card lg:card-side shadow-2xl transform transition-all duration-500 hover:scale-105 mb-5 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            } delay-700`}
          >
            <figure>
              <img src="./images/sayap.png" alt="Album" />
            </figure>
            <div className="card-body w-full">
              <h2 className="card-title text-lg md:text-3xl font-stretch-extra-condensed font-normal">SAYAP: Teacher-Led Multimodal Web Learning Application</h2>
              <div className="hidden md:divider"></div>
              <p className="text-justify text-md md:text-lg">As a team, we developed the Teacher-Led Multimodal Web Learning Application, a web-based platform for Sta. Filomena Integrated School designed to make Araling Panlipunan lessons more engaging. The system features gamified activities, 3D polarized videos, and QR-based student identification for tracking points and activity history. With a teacher-only account system for managing content and records, we integrated AWS S3 and CloudFront to ensure secure and efficient media handling, delivering an interactive and immersive learning experience.</p>
              <div className="card-actions justify-center md:justify-end mt-3">
                <a href="https://sayap.vercel.app/login" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-info text-white w-full md:w-40 transform transition-transform duration-300 hover:scale-105 active:scale-95 shadow-2xl">
                    <Link className="w-4 h-4" /> View Link
                  </button>
                </a>
                <a href="https://github.com/jem0001/capstone-public?tab=readme-ov-file" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-nuetral w-full md:w-40 transform transition-transform duration-300 hover:scale-105 active:scale-95 shadow-2xl">
                    <Github className="w-4 h-4" /> View in GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}