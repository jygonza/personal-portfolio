const topics = [
  {
    title: "Agentic AI Systems",
    description:
      "LLM orchestration, multi-step reasoning, tool use, and LangGraph-based agent architectures.",
  },
  {
    title: "Trustworthy Model Evaluation",
    description:
      "Robustness, consistency, and semantic preservation across prompt variations and model behaviors.",
  },
  {
    title: "NLP & Language Modeling",
    description:
      "Fine-tuning strategies, LoRA adaptation, and evaluation of language understanding tasks.",
  },
  {
    title: "AI Application Engineering",
    description:
      "Bridging research prototypes and production-quality software systems for AI-powered products.",
  },
  {
    title: "Full-Stack for AI Products",
    description:
      "React, API design, and data pipelines that integrate LLMs and ML models into usable interfaces.",
  },
];

export function CurrentFocus() {
  return (
    <section className="py-24 bg-muted">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="mb-14">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">
            Currently
          </p>
          <h2 className="text-foreground">What I&apos;m exploring</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="bg-card border border-border rounded-xl p-5 hover:border-primary/25 hover:shadow-sm transition-all duration-200"
            >
              <div className="size-1.5 rounded-full bg-primary mb-4" />
              <h3 className="font-display font-semibold text-base text-foreground mb-2">
                {topic.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {topic.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
