import { Mail, Linkedin, Github, FileText } from "lucide-react";
import { Button } from "./ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-4">
            Contact
          </p>
          <h2 className="text-foreground mb-5">
            Let&apos;s build something useful.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            I&apos;m open to software engineering roles, AI engineering positions,
            applied machine learning opportunities, and research-oriented engineering work
            — especially projects involving NLP, trustworthy AI, or language-centered systems.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button size="lg" className="gap-2" asChild>
              <a href="mailto:joo-young@example.com">
                <Mail className="size-4" />
                Send an Email
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="size-4" />
                LinkedIn
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="size-4" />
                GitHub
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href="#">
                <FileText className="size-4" />
                Download Résumé
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
