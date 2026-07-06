import { Github, Linkedin, Mail, ArrowRight, FileText } from "lucide-react";
import { Button } from "./ui/button";

function PipelineStep({
  label,
  value,
  status,
}: {
  label: string;
  value: string;
  status: "done" | "active" | "pending";
}) {
  const dot =
    status === "done"
      ? "bg-emerald-400"
      : status === "active"
      ? "bg-teal-400 animate-pulse"
      : "bg-slate-700";

  const valueColor =
    status === "done"
      ? "text-slate-300"
      : status === "active"
      ? "text-teal-300"
      : "text-slate-600";

  return (
    <div className="flex items-start gap-3">
      <div className="mt-[5px] flex-shrink-0">
        <div className={`size-2 rounded-full ${dot}`} />
      </div>
      <div className="flex-1 min-w-0">
        <span className="text-slate-500 mr-2">{label}</span>
        <span className={valueColor}>{value}</span>
      </div>
    </div>
  );
}

function PipelinePanel() {
  return (
    <div className="relative bg-slate-950 rounded-xl border border-slate-800 p-5 font-mono text-[11px] leading-relaxed shadow-2xl w-full max-w-sm">
      <div className="flex items-center gap-1.5 mb-4 pb-3 border-b border-slate-800">
        <div className="size-2.5 rounded-full bg-red-500/70" />
        <div className="size-2.5 rounded-full bg-yellow-500/70" />
        <div className="size-2.5 rounded-full bg-emerald-500/70" />
        <span className="ml-2 text-slate-500 text-[10px]">agent-pipeline.py — running</span>
      </div>

      <div className="space-y-2.5">
        <PipelineStep label="INPUT" value='"AI is 100% reliable"' status="done" />
        <PipelineStep label="NLP" value="Tokenized · 3 entities" status="done" />
        <PipelineStep label="RETRIEVE" value="Evidence: 4 sources" status="done" />
        <PipelineStep label="DEBATE" value="Agents: 3/3 consensus" status="active" />
        <PipelineStep label="VERIFY" value="Generating explanation..." status="pending" />
      </div>

      <div className="mt-4 pt-3 border-t border-slate-800">
        <div className="flex items-baseline gap-2">
          <span className="text-emerald-400">✓</span>
          <span className="text-slate-500">verdict:</span>
          <span className="text-rose-400 font-medium">Disputed — 0.28</span>
        </div>
        <div className="mt-1.5 flex items-baseline gap-2 pl-4">
          <span className="text-slate-600">explain:</span>
          <span className="text-slate-400 text-[10px]">
            "Sources contradict claim in 3 of 4 contexts."
          </span>
        </div>
      </div>

      <div className="absolute -inset-px rounded-xl bg-gradient-to-b from-teal-500/5 to-transparent pointer-events-none" />
    </div>
  );
}

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center">
          <div className="max-w-2xl">
            <p className="font-mono text-xs text-primary tracking-widest uppercase mb-6">
              Software Engineer · AI Engineer
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-display font-bold text-foreground leading-[1.08] mb-6">
              Building practical and{" "}
              <span className="text-primary">trustworthy</span>{" "}
              AI systems.
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
              Recent Computer Science Master&apos;s graduate with experience building
              multi-agent LLM workflows, generative AI systems, NLP pipelines,
              and model evaluation tools.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Button size="lg" className="gap-2" asChild>
                <a href="#projects">
                  View My Projects
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="#">
                  <FileText className="size-4" />
                  View Résumé
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-5">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="size-4" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="size-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:joo-young@example.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="size-4" />
                <span>Email</span>
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-end">
            <PipelinePanel />
          </div>
        </div>
      </div>
    </section>
  );
}
