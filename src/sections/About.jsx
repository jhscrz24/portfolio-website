export default function About() {
  return (
    <section id="about" className="p-10 bg-base-200">
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse gap-20">
            <div className="lg:w-1/2">
                <img
                  src="./images/about.png"
                  alt="About Me"
                  className="md:hidden mb-8 w-full max-w-sm rounded-xl border-15 text-white shadow-2xl transform transition-transform duration-500 hover:scale-105"
                />
                <h4 className='text-lg font-medium text-info transition-all duration-300 animate-fade-in-down'>About Me</h4>
                <h1 className="text-4xl md:text-5xl font-bold transition-all duration-300 hover:text-info animate-fade-in-down delay-200">Get To Know Me</h1>
                <p className="py-6 transition-all duration-300 animate-fade-in-up delay-400">
                    Hi! I'm <span className="font-medium">Jehus</span>, 23 years old and I graduated from <span className="font-medium">Laguna State Polytechnic University - San Pablo City Campus</span> with a <span className="font-medium">Bachelor's Degree in Information Technology Specialized in Web and Mobile Application Development.</span>
                </p>
                <p className="transition-all duration-300 animate-fade-in-up delay-600 mb-6">
                    I've always been passionate about <span className="font-medium">coding and designing applications</span>, which is why im excited to work in this field. I believe my background in <span className="font-medium">Information Technology has tought me how to work well with people, handle different personalities, and how to work well under pressure.</span>
                </p>

                <div className="transition-all duration-300 animate-fade-in-up delay-800">
                    <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                      <input type="radio" name="my-accordion-2" defaultChecked />
                      <div className="collapse-title font-semibold">Educational Background</div>
                      <div className="collapse-content flex items-center gap-3">
                        <img src="./images/lspu-logo.png" alt="lspu-logo" className="w-15 mx-5" />
                        <div>
                          <h1 className="font-bold text-md mb-1">Laguna State Polytechnic University <div className="badge badge-info">San Pablo City Campus</div></h1>
                          <p className="italic text-sm text-gray-500 mb-1">2021 - 2025</p>
                          <p className="text-sm text-gray-500">Bachelor of Science in Information Technology</p>
                          <p className="text-sm text-gray-500">Specialized in Web and Mobile Application Development</p>
                        </div>
                      </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                      <input type="radio" name="my-accordion-2" defaultChecked />
                      <div className="collapse-title font-semibold">Work Experience</div>
                      <div className="collapse-content flex gap-3">
                        <img src="./images/gleent-logo.png" alt="gleent-logo" className="w-15 h-15 mx-5 rounded-full" />
                        <div>
                          <h1 className="font-bold text-md">Gleent Inc.</h1>
                          <p className="italic text-sm text-gray-500 mb-2">Laravel Frontend Intern (2025)</p>
                          <p className="text-sm text-gray-500">Took the role of a Laravel Frontend Intern at Gleent Inc., where I designed and improved UIs for HRIS and Chat Support systems, built a reusable UI component library, developed a responsive POS system interface, designed a video-based Training Manual system, led the intern team in task management and coordination, and assisted with QA testing for HRIS, Chat Support, and Inventory modules.</p>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
            <img
              src="./images/about.png"
              alt="About Me"
              className="hidden md:block w-full max-w-sm rounded-xl border-15 text-white shadow-2xl transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
    </section>
  )
}