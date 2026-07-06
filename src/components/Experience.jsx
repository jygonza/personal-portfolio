import { experience } from '../data/experience';

function Experience() {
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
          {experience.map((pos, i) => (
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

export default Experience;
