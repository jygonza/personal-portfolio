import { ExternalLink, Github, BookOpen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  image: string;
  tags: string[];
  links: { label: string; icon: React.ReactNode; href: string; variant?: "default" | "outline" }[];
}

const projects: Project[] = [
  {
    id: "multi-agent",
    title: "Multi-Agent Misinformation Detection",
    summary: "Explainable fact-verification via LLM debate",
    description:
      "Multiple LLM agents retrieve evidence from diverse sources, debate claim credibility, and contribute weighted votes to a final verifier. Each decision includes a structured natural-language explanation tracing which agents agreed and why.",
    image:
      "https://images.unsplash.com/photo-1545987796-200677ee1011?w=800&h=450&fit=crop&auto=format",
    tags: ["Python", "LangGraph", "LLM Agents", "Retrieval", "NLP", "Explainable AI"],
    links: [
      { label: "Case Study", icon: <BookOpen className="size-3.5" />, href: "/case-study", variant: "default" },
      { label: "GitHub", icon: <Github className="size-3.5" />, href: "#", variant: "outline" },
    ],
  },
  {
    id: "text-to-image",
    title: "Text-to-Image Generation & Robustness Evaluation",
    summary: "DCGAN generation with semantic robustness testing",
    description:
      "Built a DCGAN-based text-to-image model, then designed an evaluation framework measuring whether generated outputs remain semantically consistent when input prompts are reworded, reordered, or logically rearranged. Metrics include CLIPScore and VQA consistency.",
    image:
      "https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?w=800&h=450&fit=crop&auto=format",
    tags: ["Python", "PyTorch", "DCGAN", "CLIPScore", "VQA", "Computer Vision", "NLP"],
    links: [
      { label: "Case Study", icon: <BookOpen className="size-3.5" />, href: "/case-study", variant: "default" },
      { label: "Evaluation", icon: <ExternalLink className="size-3.5" />, href: "#", variant: "outline" },
    ],
  },
  {
    id: "reddit-dissent",
    title: "Dissent in Reddit Threads",
    summary: "NLP study of disagreement in social conversations",
    description:
      "Applied social media mining and NLP to model how disagreement emerges in Reddit conversations. Analyzed linguistic markers, reply-chain structure, and thread topology to characterize the dynamics of online dissent across communities with different norms.",
    image:
      "https://images.unsplash.com/photo-1451226428352-cf66bf8a0317?w=800&h=450&fit=crop&auto=format",
    tags: ["Python", "NLP", "Social Media Mining", "Data Analysis", "Reddit", "Visualization"],
    links: [
      { label: "Case Study", icon: <BookOpen className="size-3.5" />, href: "/case-study", variant: "default" },
      { label: "GitHub", icon: <Github className="size-3.5" />, href: "#", variant: "outline" },
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-muted">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section header */}
        <div className="mb-14">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">
            Featured Projects
          </p>
          <h2 className="text-foreground mb-4">What I&apos;ve built</h2>
          <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
            Projects exploring how AI systems understand, generate, and evaluate
            complex human information — from multi-agent pipelines to generative
            models and social language analysis.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group bg-card border border-border rounded-xl overflow-hidden flex flex-col hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-[16/9] overflow-hidden bg-accent">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <p className="font-mono text-[10px] text-primary tracking-wider uppercase mb-2">
                  {project.summary}
                </p>
                <h3 className="text-foreground font-display font-semibold text-lg leading-snug mb-3">
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
                <div className="flex gap-2">
                  {project.links.map((link) => (
                    <Button
                      key={link.label}
                      variant={link.variant ?? "default"}
                      size="sm"
                      className="gap-1.5 text-xs"
                      asChild
                    >
                      <a href={link.href}>
                        {link.icon}
                        {link.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
