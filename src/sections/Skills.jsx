import { useEffect, useState, useRef } from 'react';
import { Database, SquareChartGantt, SquareCode } from "lucide-react";
import SkillsCarousel from "../components/SkillsCarousel";

export default function Skills() {
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
    <section id="skills" className="p-10 bg-base-100" ref={sectionRef}>
      <div className="min-h-screen text-center md:px-30">
        <h4
          className={`text-lg font-medium text-info transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          What I do
        </h4>
        <h1
          className={`text-4xl md:text-5xl font-bold transition-all duration-500 delay-200 hover:text-info ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          My Skills
        </h1>
        <p
          className={`py-6 text-lg transition-all duration-500 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          I have skills in full-stack development, handling both front-end and back-end for web and mobile applications. I also have experience in database management, complemented by a background in UI/UX design, and project management.
        </p>
        <div className="divider"></div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-15">
          <div
            className={`card bg-base-400 w-full sm:w-[20rem] md:w-[22rem] p-8 shadow-2xl border-b-6 border-[#00bafe] transform transition-all duration-500 hover:scale-105 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            } delay-500`}
          >
            <div className="card-body">
              <div className="flex flex-col items-center text-center mb-5">
                <SquareCode className="mb-2 w-16 h-16 sm:w-20 sm:h-20" color="#00bafe" />
                <h2 className="card-title text-2xl font-stretch-extra-condensed">
                  Frontend Web & Mobile Development
                </h2>
              </div>
              <p className="text-base sm:text-lg leading-relaxed">
                I specialize in developing responsive websites with HTML, CSS, Bootstrap,
                JavaScript, and React. I also have experience in Android app development,
                using React Native and Expo to design intuitive and user-friendly mobile
                applications.
              </p>
            </div>
          </div>

          <div
            className={`card bg-base-400 w-full sm:w-[20rem] md:w-[22rem] p-8 shadow-2xl border-b-6 border-[#00bafe] transform transition-all duration-500 hover:scale-105 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            } delay-700`}
          >
            <div className="card-body">
              <div className="flex flex-col items-center text-center mb-5">
                <Database className="mb-2 w-16 h-16 sm:w-20 sm:h-20" color="#00bafe" />
                <h2 className="card-title text-2xl font-stretch-extra-condensed">
                  Data Analysis & Back-End Development
                </h2>
              </div>
              <p className="text-base sm:text-lg leading-relaxed">
                I've experience in building back-end systems with Node.js and handling
                databases using SQL or MongoDb. I also use Excel for efficient data
                management and analysis.
              </p>
            </div>
          </div>

          <div
            className={`card bg-base-400 w-full sm:w-[20rem] md:w-[22rem] p-8 shadow-2xl border-b-6 border-[#00bafe] transform transition-all duration-500 hover:scale-105 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            } delay-900`}
          >
            <div className="card-body">
              <div className="flex flex-col items-center text-center mb-5">
                <SquareChartGantt className="mb-2 w-16 h-16 sm:w-20 sm:h-20" color="#00bafe" />
                <h2 className="card-title text-xl sm:text-2xl font-stretch-extra-condensed">
                  Project Management & Design
                </h2>
              </div>
              <p className="text-base sm:text-lg leading-relaxed">
                I gained experience as a project leader during internship, managing
                projects by applying the Software Development Life Cycle (SDLC) and
                utilizing tools like Notion for organization. I also use Figma or Canva to
                create wireframes and develop interactive UI prototypes.
              </p>
            </div>
          </div>
        </div>
        <div className="divider my-10"></div>
        <div>
          <h1
            className={`text-4xl md:text-5xl font-bold transition-all duration-500 hover:text-info mb-5 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            } delay-1000`}
          >
            Tools and Software
          </h1>
          <div
            className={`transition-all duration-500 delay-1200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <SkillsCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}