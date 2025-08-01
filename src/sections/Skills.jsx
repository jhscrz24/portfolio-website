export default function Skills() {
  return (
    <section id="skills" className="p-10 bg-base-100">
        <h2 className="text-3xl font-bold mb-4">My Skills</h2>
        <div className="flex flex-wrap gap-4">
        <span className="badge badge-primary">React</span>
        <span className="badge badge-secondary">Node.js</span>
        <span className="badge badge-accent">Express</span>
        <span className="badge badge-info">MongoDB</span>
        <span className="badge badge-success">TailwindCSS</span>
        <span className="badge badge-warning">DaisyUI</span>
        </div>
    </section>
  )
}
