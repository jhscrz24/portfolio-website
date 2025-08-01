import { AtSign } from "lucide-react";
import { useRef } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7uqdalf",   // Service ID
        "template_t8j6kwf",  // Template ID
        form.current,
        "IFYMCQSiaSxmUUSg_"    // Public key
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        () => {
          toast.error("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="p-10 bg-base-100">
        <div className="flex justify-center px-4">
          <div className="flex flex-col md:flex-row gap-12 max-w-7xl w-full">
            {/* Left - Contact Info */}
            <div className="w-full md:w-2/3">
              <h4 className='text-lg font-medium text-primary transition-all duration-300 animate-fade-in-down'>
                Contact Me
              </h4>
              <h1 className="text-4xl md:text-5xl font-bold transition-all duration-300 hover:text-secondary animate-fade-in-down delay-200">
                Get In Touch
              </h1>
              <p className="py-6 transition-all duration-300 animate-fade-in-up delay-400">
                If you have any inquiries or would like to collaborate, don’t hesitate to get in touch! 
                I’m always eager to explore new opportunities, work on exciting projects, and gain fresh experiences. 
                You can reach me by email or simply use the contact form. I’d be happy to connect with you!
              </p>
              <div className="flex md:justify-start transition-all duration-300 animate-fade-in-up delay-400">
                <div className="bg-base-200 w-16 h-16 flex justify-center items-center">
                  <AtSign className="w-8 h-8" />
                </div>
                <div className="ml-4">
                  <h2 className="text-lg font-semibold">Email</h2>
                  <a 
                    href="mailto:jehuscoroza24@gmail.com" 
                    className="text-md font-medium text-info hover:underline"
                  >
                    jehuscoroza24@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right - Contact Form
                service id - service_7uqdalf
                public key - IFYMCQSiaSxmUUSg_
                template id - template_t8j6kwf
            */}
            <div className="w-full bg-base-200 p-10">
              <form ref={form} onSubmit={sendEmail} className="space-y-4 mx-auto md:mx-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    className="input input-bordered w-full"
                    required
                  />
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="textarea textarea-bordered w-full h-40"
                  required
                ></textarea>
                <button type="submit" className="btn btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
    </section>
  )
}
