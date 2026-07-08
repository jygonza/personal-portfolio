const positions = [
  {
    id: "tkai",
    role: "Research Assistant",
    org: "TKAI Lab",
    dates: "2023 – 2024",
    overview:
      "Applied NLP and computational linguistics research supporting second-language learner modeling and language proficiency studies.",
    contributions: [
      "Designed reproducible Python pipelines to process over 1,600 learner essays",
      "Extracted syntactic and morphological features using spaCy for downstream classification",
      "Contributed to research on second-language acquisition and writing proficiency modeling",
      "Collaborated on experiment design and documentation for peer-reviewed publication",
    ],
    tech: ["Python", "spaCy", "NLP", "pandas", "scikit-learn"],
  },
  {
    id: "cereal",
    role: "Research Assistant",
    org: "CEREAL Lab",
    dates: "2022 – 2023",
    overview:
      "Ran large-scale evolutionary algorithm experiments on boolean satisfiability problems using Python and high-performance computing infrastructure.",
    contributions: [
      "Implemented genetic algorithm variants in Python for Boolean satisfiability benchmarks",
      "Designed and executed large-scale experiment batches using SLURM on a Linux cluster",
      "Maintained version-controlled experiment code and reproducibility documentation via Git",
      "Analyzed experiment results across parameter sweeps to identify performance trends",
    ],
    tech: ["Python", "SLURM", "Linux", "Git", "Evolutionary Algorithms"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-muted">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="mb-14">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">
            Experience
          </p>
          <h2 className="text-foreground">Research positions</h2>
        </div>

        <div className="space-y-6">
          {positions.map((pos, i) => (
            <div
              key={pos.id}
              className="bg-card border border-border rounded-xl p-7 hover:border-primary/20 transition-colors"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-mono text-[10px] text-primary border border-primary/30 rounded px-2 py-0.5">
                      0{i + 1}
                    </span>
                    <h3 className="font-display font-semibold text-lg text-foreground">
                      {pos.role}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm pl-8">{pos.org}</p>
                </div>
                <span className="font-mono text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full border border-border">
                  {pos.dates}
                </span>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {pos.overview}
              </p>

              <ul className="space-y-2 mb-5">
                {pos.contributions.map((c) => (
                  <li key={c} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="text-primary mt-0.5 flex-shrink-0">—</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {pos.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border"
                  >
                    {t}
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
