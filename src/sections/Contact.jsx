export default function Contact() {
  return (
    <section id="contact" className="p-10 bg-base-100">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <form className="space-y-4 max-w-md">
        <input type="text" placeholder="Your Name" className="input input-bordered w-full" />
        <input type="email" placeholder="Your Email" className="input input-bordered w-full" />
        <textarea placeholder="Your Message" className="textarea textarea-bordered w-full"></textarea>
        <button type="submit" className="btn btn-primary w-full">Send Message</button>
        </form>
    </section>
  )
}
