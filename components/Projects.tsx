const projects = [
  {
    title: 'Book2Movie',
    description: 'Local-first Python script that integrates four different types of AI models to convert books into audiobook slideshows.',
    tech: ['Langchain', 'NLTK', 'ImageGen', 'TTS'],
    link: '#'
  },
  {
    title: 'JiraStoryTeller',
    description: 'AI-powered project management agent that intakes requests from various sources and creates standardized, structured user stories.',
    tech: ['Langchain', 'Python', 'Gmail API', 'Jira'],
    link: '#'
  },
  {
    title: 'Merchant Services',
    description: 'Internal and External facing portals for managing merchant transactions, exceptions, reports, vendors, and transaction details.',
    tech: ['Angular 19', 'MFA', 'Node.js', 'MongoDB'],
  },
  {
    title: 'ROCA',
    description: 'Decentralized ledger for sharing patient information between payment processors and healthcare organizations.',
    tech: ['React/Next', 'Crypto'],
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <span className="text-highlight">03.</span> Projects
          <div className="h-px bg-border flex-1"></div>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-card-bg border border-border rounded-lg p-6 hover:border-highlight transition-all hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-text-secondary mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-highlight/10 text-highlight text-sm rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              {(project.link) && (
                <a href={project.link} className="text-highlight hover:text-highlight/80 transition-colors">
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}