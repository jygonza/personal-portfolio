import { FiAward, FiFileText } from 'react-icons/fi';

const education = [
  {
    degree: 'Master of Computer Science',
    school: 'University of South Florida',
    year: '2024',
  },
  {
    degree: 'Pathway to Computing Graduate Certificate',
    school: 'University of South Florida',
    year: '2022',
  },
  {
    degree: 'Bachelor of Arts, World Languages and Cultures',
    school: 'University of South Florida',
    year: '2021',
  },
];

function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="mb-14">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">
            About
          </p>
          <h2 className="text-foreground">Background</h2>
        </div>

        <div className="grid lg:grid-cols-[auto_1fr] gap-12 items-start">
          {/* Photo placeholder */}
          <div className="mx-auto lg:mx-0">
            <div className="w-52 h-52 rounded-2xl bg-gradient-to-br from-primary/20 via-accent to-muted border border-border flex items-center justify-center overflow-hidden">
              <div className="text-center">
                <div className="font-bold text-4xl text-primary/60">JYG</div>
                <div className="font-mono text-xs text-muted-foreground mt-1">headshot</div>
              </div>
            </div>
          </div>

          {/* Narrative */}
          <div className="max-w-2xl">
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                I started my academic journey studying World Languages and Cultures — learning to
                think carefully about meaning, translation, and how people communicate across
                contexts. That foundation shaped how I approach technical problems: with attention
                to interpretation, intent, and the gap between what a system does and what a user
                actually needs.
              </p>
              <p>
                After transitioning into computer science, I focused on building AI systems that
                work in domains where language and meaning are central: fact verification,
                generative models, social media analysis, and second-language learner research.
                My background in linguistics is a differentiator, not a detour.
              </p>
              <p>
                I am interested in roles at the intersection of software engineering and applied
                AI — building the systems that bring research ideas into working, trustworthy
                products. I'm drawn to teams that care about evaluation, explainability, and
                building tools that people can actually rely on.
              </p>
            </div>

            {/* Education */}
            <div className="space-y-3 mb-8">
              {education.map((ed) => (
                <div key={ed.degree} className="flex gap-3 items-start">
                  <FiAward className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{ed.degree}</p>
                    <p className="text-xs text-muted-foreground">
                      {ed.school} · {ed.year}
                    </p>
                  </div>
                </div>
              ))}
              <div className="flex gap-3 items-center pl-7">
                <span className="text-xs text-primary font-mono">HSF Scholar</span>
                <span className="text-xs text-muted-foreground">Hispanic Scholarship Fund</span>
              </div>
            </div>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-9 px-4 rounded-md text-sm font-medium border border-border bg-background text-foreground hover:bg-muted transition-colors"
            >
              <FiFileText className="w-4 h-4" />
              View Full Résumé
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
