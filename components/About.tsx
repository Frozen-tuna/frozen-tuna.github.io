export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="max-w-3xl">
          <p className="text-highlight font-mono mb-4 text-lg">Hi, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-highlight">
            Garrick Friedlander
          </h1>
          <p className="text-2xl md:text-4xl text-text-secondary mb-8">
            Software Engineer
          </p>
          <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl">
            I build exceptional digital experiences. Passionate about creating elegant solutions to complex problems, 
            with expertise in full-stack development, cloud architecture, and scalable systems.
          </p>
          <div className="flex gap-4">
            <a href="#contact" className="px-6 py-3 bg-highlight hover:bg-highlight/80 rounded-lg font-medium transition-colors">
              Get in Touch
            </a>
            <a href="#projects" className="px-6 py-3 border border-border hover:border-highlight rounded-lg font-medium transition-colors">
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}