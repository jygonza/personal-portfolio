const groups = [
  {
    title: "Software Development",
    items: ["Python", "JavaScript", "HTML & CSS", "C", "Git & GitHub", "Linux CLI", "Shell scripting"],
  },
  {
    title: "AI & Machine Learning",
    items: ["PyTorch", "Machine learning", "Deep learning", "Reinforcement learning", "Supervised fine-tuning", "LoRA fine-tuning"],
  },
  {
    title: "Language & Intelligent Systems",
    items: ["Natural language processing", "spaCy", "LangGraph", "LLM agents", "Retrieval-based workflows"],
  },
  {
    title: "Data & Research",
    items: ["pandas", "NumPy", "SciPy", "Matplotlib", "Experiment design", "Model evaluation", "SLURM / HPC clusters"],
  },
];

export function Skills() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="mb-14">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">
            Capabilities
          </p>
          <h2 className="text-foreground">What I work with</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {groups.map((group) => (
            <div
              key={group.title}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/20 transition-colors"
            >
              <h3 className="font-display font-semibold text-base text-foreground mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-[11px] px-2.5 py-1 rounded bg-muted text-muted-foreground border border-border"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
