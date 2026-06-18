import { experience } from '../data/experience';

function Experience() {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section-title">Research Experience</h2>
        <div className="experience-list">
          {experience.map((exp) => (
            <article key={exp.id} className="experience-card">
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">{exp.title}</h3>
                  <p className="experience-org">{exp.organization}</p>
                </div>
                <div className="experience-meta">
                  <span className="experience-location">{exp.location}</span>
                  <span className="experience-dates">{exp.dates}</span>
                </div>
              </div>
              <ul className="experience-bullets">
                {exp.bullets.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
