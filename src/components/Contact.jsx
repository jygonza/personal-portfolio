import { FiMail, FiLinkedin, FiGithub, FiFileText } from 'react-icons/fi';

function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-4">
            Contact
          </p>
          <h2 className="text-foreground mb-5">
            Let's build something useful.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            I'm open to software engineering roles, AI engineering positions,
            applied machine learning opportunities, and research-oriented engineering work
            — especially projects involving NLP, trustworthy AI, or language-centered systems.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:catherinegonza@outlook.com"
              className="inline-flex items-center justify-center gap-2 h-10 px-6 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              <FiMail className="w-4 h-4" />
              Send an Email
            </a>
            <a
              href="https://www.linkedin.com/in/j-catherine-gonzalez"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-10 px-6 rounded-md text-sm font-medium border border-border bg-background text-foreground hover:bg-muted transition-colors"
            >
              <FiLinkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="https://github.com/jygonza"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-10 px-6 rounded-md text-sm font-medium border border-border bg-background text-foreground hover:bg-muted transition-colors"
            >
              <FiGithub className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="/Jooyoung_C_Gonzalez_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-10 px-6 rounded-md text-sm font-medium border border-border bg-background text-foreground hover:bg-muted transition-colors"
            >
              <FiFileText className="w-4 h-4" />
              Download Résumé
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
