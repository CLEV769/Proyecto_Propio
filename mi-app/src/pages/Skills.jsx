import '../styles/Skills.css';

const skills = [
  { name: 'HTML', level: 90, category: 'Frontend' },
  { name: 'CSS', level: 85, category: 'Frontend' },
  { name: 'JavaScript', level: 55, category: 'Frontend' },
  { name: 'React', level: 50, category: 'Frontend' },
  { name: 'Python', level: 75, category: 'Backend' },
  { name: 'Java', level: 60, category: 'Backend' },
  { name: 'Django', level: 55, category: 'Backend' },
  { name: 'Mysql', level: 70, category: 'database'},
  { name: 'PostgreSQL', level: 40, category: 'database'},
];

function Skills() {
  return (
    <section className="skills">
      <div className="skills__header">
        <h1 className="skills__title">Habilidades</h1>
        <p className="skills__subtitle">
          Tecnologías que manejo y nivel de dominio actual
        </p>
      </div>

      <div className="skills__groups">
        <div className="skills__group">
          <h2 className="skills__group-title">Frontend</h2>
          {skills
            .filter(skill => skill.category === 'Frontend')
            .map(skill => (
              <div className="skill" key={skill.name}>
                <div className="skill__info">
                  <span className="skill__name">{skill.name}</span>
                  <span className="skill__percent">{skill.level}%</span>
                </div>
                <div className="skill__bar">
                  <div
                    className="skill__fill"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
        </div>

        <div className="skills__group">
          <h2 className="skills__group-title">Backend</h2>
          {skills
            .filter(skill => skill.category === 'Backend')
            .map(skill => (
              <div className="skill" key={skill.name}>
                <div className="skill__info">
                  <span className="skill__name">{skill.name}</span>
                  <span className="skill__percent">{skill.level}%</span>
                </div>
                <div className="skill__bar">
                  <div
                    className="skill__fill"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
        </div>
        <div className="skills__group">
          <h2 className="skills__group-title">Bases de datos</h2>
          {skills
            .filter(skill => skill.category === 'database')
            .map(skill => (
              <div className="skill" key={skill.name}>
                <div className="skill__info">
                  <span className="skill__name">{skill.name}</span>
                  <span className="skill__percent">{skill.level}%</span>
                </div>
                <div className="skill__bar">
                  <div
                    className="skill__fill"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;