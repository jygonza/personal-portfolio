import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { projects } from '../data/projects';

function ProjectCard({ project }) {
  return (
    <article className="group bg-card border border-border rounded-xl overflow-hidden flex flex-col hover:shadow-lg hover:border-primary/20 transition-all duration-300">
      {/* Image */}
      <div className="aspect-[16/9] overflow-hidden bg-accent">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <p className="font-mono text-[10px] text-primary tracking-wider uppercase mb-2">
          {project.summary}
        </p>
        <h3 className="text-foreground font-semibold text-lg leading-snug mb-3">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        {project.links.length > 0 && (
          <div className="flex gap-2">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 h-8 px-3 rounded-md text-xs font-medium border border-border bg-background text-foreground hover:bg-muted transition-colors"
              >
                {link.label === 'GitHub' ? (
                  <FiGithub className="w-3.5 h-3.5" />
                ) : (
                  <FiExternalLink className="w-3.5 h-3.5" />
                )}
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-24 bg-muted">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section header */}
        <div className="mb-14">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">
            Featured Projects
          </p>
          <h2 className="text-foreground mb-4">What I've built</h2>
          <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
            Projects exploring how AI systems understand, generate, and evaluate
            complex human information — from multi-agent pipelines to generative
            models and social language analysis.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
