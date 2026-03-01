const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'Angular', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'Nest.js', 'FastAPI', 'MongoDB'] },
  { category: 'DevOps', items: ['Docker', 'GitHub Actions', 'Jenkins'] },
  { category: 'AI Workflows', items: ['Langchain', 'Llama.cpp', 'ComfyUI', 'Kokoro FastAPI', 'Copilot', 'OpenCode'] }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <span className="text-highlight">04.</span> Skills
          <div className="h-px bg-border flex-1"></div>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((category, index) => (
            <div key={index} className="bg-card-bg border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-highlight">{category.category}</h3>
              <div className="space-y-2">
                {category.items.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-highlight rounded-full"></div>
                    <span className="text-text-secondary">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}