function Education() {
  const education = [
    {
      degree: 'Master of Computer Science',
      school: 'University of South Florida',
      date: 'Graduated May 2026',
      gpa: '4.0',
    },
    {
      degree: 'USF Pathway to Computing Graduate Certificate',
      school: 'University of South Florida',
      date: 'Graduated May 2024',
      gpa: null,
    },
    {
      degree: 'Bachelor of Arts, World Languages and Cultures',
      school: 'University of South Florida',
      date: 'Graduated May 2022',
      gpa: '3.95',
    },
  ];

  return (
    <section id="education" className="education section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-list">
          {education.map((edu, index) => (
            <article key={index} className="education-card">
              <h3 className="education-degree">{edu.degree}</h3>
              <p className="education-school">{edu.school}</p>
              <div className="education-meta">
                <span className="education-date">{edu.date}</span>
                {edu.gpa && <span className="education-gpa">GPA: {edu.gpa}</span>}
              </div>
            </article>
          ))}
        </div>
        <div className="education-honors">
          <p>
            <strong>HSF Scholar</strong>, Hispanic Scholarship Fund
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;
