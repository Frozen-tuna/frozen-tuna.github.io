const experience = [
  {
    title: 'Senior Software Engineer',
    company: 'PNC Bank - CIB Digital',
    period: '2024 - Present',
    description: 'Leading development of scalable microservices and micro-frontends, driving change within the department to utilize new trends and avoid stagnation.'
  },
  {
    title: 'Senior Software Engineer',
    company: 'PNC Bank - CIB Innovations',
    period: '2019 - 2024',
    description: 'Built several high-risk, high-impact projects utilizing cutting-edge technologies to prove value in expanding market opportunities.'
  },
  {
    title: 'Software Engineer',
    company: 'Symbiotries',
    period: '2018 - 2019',
    description: 'Built an "Uber for Accountants" style web-application for a fast-paced local tech startup.'
  },
  {
    title: 'Junior Software Engineer',
    company: 'Allegheny Health Network - Innovations',
    period: '2015 - 2018',
    description: 'Contributed to the development of a HIPAA-compliant patient portals and several internal tools, improving patient safety and understanding'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <span className="text-highlight">02.</span> Experience
          <div className="h-px bg-border flex-1"></div>
        </h2>
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l border-border hover:border-highlight transition-colors">
              <div className="absolute left-0 w-4 h-4 bg-highlight rounded-full -translate-x-1/2"></div>
              <div className="bg-card-bg p-6 rounded-lg border border-border hover:border-highlight/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <span className="text-highlight font-mono text-sm">{exp.period}</span>
                </div>
                <p className="text-highlight mb-3">{exp.company}</p>
                <p className="text-text-secondary">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}