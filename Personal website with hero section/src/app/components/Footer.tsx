import { Github, Linkedin, Mail } from "lucide-react";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Résumé", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12">
        <div className="grid sm:grid-cols-[1fr_auto] gap-8 items-start mb-8">
          <div>
            <p className="font-display font-semibold text-foreground mb-1">
              Joo-Young Catherine Gonzalez
            </p>
            <p className="text-sm text-muted-foreground">
              Software Engineer · AI Engineer · NLP Researcher
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="size-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="size-5" />
            </a>
            <a
              href="mailto:joo-young@example.com"
              aria-label="Email"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="size-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="border-t border-border pt-6">
          <p className="font-mono text-[11px] text-muted-foreground">
            © {new Date().getFullYear()} Joo-Young Catherine Gonzalez. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
