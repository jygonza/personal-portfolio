function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Joo-Young Gonzalez</span>.
        </h1>
        <p className="hero-subtitle">
          Recent M.S. Computer Science graduate building AI and software systems
          with a human-centered focus.
        </p>
        <p className="hero-text">
          I work across machine learning, NLP, backend development, systems
          programming, and applied research. I'm currently seeking entry-level
          AI engineering, software engineering, backend, NLP, or data-oriented
          roles.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a
            href="https://github.com/jygonza"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/j-catherine-gonzalez"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            LinkedIn
          </a>
          {/* TODO: Update this path to your actual resume file */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
