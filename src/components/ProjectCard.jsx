function ProjectCard({ project }) {
  const statusClass = project.status.toLowerCase().replace(' ', '-');

  return (
    <article className="project-card">
      <div className="project-card-header">
        <span className={`project-status status-${statusClass}`}>
          {project.status}
        </span>
        <span className="project-category">{project.category}</span>
      </div>

      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>

      <div className="project-highlights">
        <h4>Highlights</h4>
        <ul>
          {project.highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </div>

      <div className="project-technologies">
        {project.technologies.map((tech, index) => (
          <span key={index} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>

      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          View on GitHub →
        </a>
      )}
    </article>
  );
}

export default ProjectCard;
