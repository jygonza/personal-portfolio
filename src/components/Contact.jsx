function Contact() {
  return (
    <footer id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="contact-text">
          I'm currently looking for entry-level opportunities in AI engineering,
          software engineering, backend development, NLP, and data-oriented
          roles. I'm especially interested in teams where I can continue growing
          as an engineer while contributing to practical, human-centered
          technology.
        </p>
        <div className="contact-links">
          <a
            href="mailto:catherinegonza@outlook.com"
            className="contact-link"
          >
            <span className="contact-icon">✉</span>
            catherinegonza@outlook.com
          </a>
          <a
            href="https://github.com/jygonza"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <span className="contact-icon">⌨</span>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/j-catherine-gonzalez"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <span className="contact-icon">💼</span>
            LinkedIn
          </a>
          {/* TODO: Update this path to your actual resume file */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <span className="contact-icon">📄</span>
            Resume
          </a>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} Joo-Young Gonzalez. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Contact;
