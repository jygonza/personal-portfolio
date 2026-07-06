import { ArrowLeft, Github, ExternalLink, Calendar, Users, Clock } from "lucide-react";
import { Button } from "./ui/button";

export function CaseStudy() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-16">
        {/* Back */}
        <div className="mb-10">
          <Button variant="ghost" size="sm" className="gap-2 -ml-2 text-muted-foreground" asChild>
            <a href="/#projects">
              <ArrowLeft className="size-4" />
              All Projects
            </a>
          </Button>
        </div>

        {/* Header */}
        <header className="mb-12">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">
            Case Study
          </p>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground leading-tight mb-4">
            Project Title Placeholder
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            One-sentence summary of what this project does and why it matters.
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap gap-5 text-sm text-muted-foreground border-t border-border pt-6">
            <div className="flex items-center gap-2">
              <Calendar className="size-4" />
              <span>Fall 2023 · Graduate Course Project</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="size-4" />
              <span>Solo · Joo-Young Gonzalez</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="size-4" />
              <span>12 weeks</span>
            </div>
          </div>
        </header>

        {/* Links */}
        <div className="flex gap-2 mb-12">
          <Button size="sm" className="gap-2" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Github className="size-3.5" />
              GitHub Repository
            </a>
          </Button>
          <Button size="sm" variant="outline" className="gap-2" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="size-3.5" />
              Live Demo
            </a>
          </Button>
        </div>

        {/* Tech stack */}
        <div className="mb-12 p-5 bg-muted rounded-xl border border-border">
          <p className="font-mono text-[10px] text-primary tracking-widest uppercase mb-3">
            Technology Stack
          </p>
          <div className="flex flex-wrap gap-1.5">
            {["Python", "PyTorch", "LangGraph", "spaCy", "pandas"].map((t) => (
              <span
                key={t}
                className="font-mono text-[11px] px-2.5 py-1 rounded bg-background text-muted-foreground border border-border"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Body sections */}
        {[
          { title: "Problem", body: "Describe the problem this project addresses. What was the gap, limitation, or research question that motivated the work? Be specific about the domain and why existing solutions were insufficient." },
          { title: "Project Goals", body: "List the primary objectives. What were you trying to build, demonstrate, or evaluate? Define the success criteria you were working toward." },
          { title: "System Architecture", body: "Explain the overall design. How are the components organized? What are the main modules and how do they interact? Include a diagram here if available." },
          { title: "Implementation Approach", body: "Describe how you built it. Walk through the key implementation decisions: data handling, model design, training strategy, evaluation pipeline, or deployment approach." },
          { title: "Key Engineering Decisions", body: "What choices shaped the outcome? Discuss trade-offs you considered: algorithm selection, framework choices, design patterns, or approaches you deliberately did not take and why." },
          { title: "Evaluation", body: "How did you measure success? Describe your evaluation methodology — metrics, baselines, test sets, and how you validated that the system achieved its goals." },
          { title: "Results", body: "Summarize your findings. Include quantitative results where available. What worked well? What underperformed relative to expectations?" },
          { title: "Challenges & Limitations", body: "What was hard? What constraints limited what you could build or test? What would you approach differently with more time or resources?" },
          { title: "What I Learned", body: "Reflect on what this project taught you — technical skills, research methods, engineering judgment, or domain knowledge that you can carry into future work." },
          { title: "Future Improvements", body: "If you were to continue this project, what would you do next? What are the most impactful directions for extending or improving the system?" },
        ].map((section) => (
          <section key={section.title} className="mb-10">
            <h2 className="text-xl font-display font-bold text-foreground mb-3">
              {section.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-[15px]">{section.body}</p>

            {/* Placeholder for diagrams / screenshots / code */}
            {["System Architecture", "Results"].includes(section.title) && (
              <div className="mt-4 h-48 rounded-xl bg-muted border border-dashed border-border flex items-center justify-center">
                <p className="font-mono text-xs text-muted-foreground">
                  [ diagram / screenshot / chart ]
                </p>
              </div>
            )}
          </section>
        ))}

        {/* Related projects */}
        <section className="pt-10 border-t border-border">
          <h2 className="text-xl font-display font-bold text-foreground mb-4">
            Related Projects
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {["Multi-Agent Misinformation Detection", "Dissent in Reddit Threads"].map((title) => (
              <a
                key={title}
                href="/#projects"
                className="p-4 bg-muted border border-border rounded-xl hover:border-primary/25 transition-colors"
              >
                <p className="font-display font-semibold text-sm text-foreground mb-1">{title}</p>
                <p className="text-xs text-muted-foreground">View project →</p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
