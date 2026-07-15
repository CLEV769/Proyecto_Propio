import "../styles/Projects.css";

const projects = [
  {
    id: "psychoway",
    name: "Psychoway",
    tagline: "Apoyo psicológico para aprendices SENA",
    description:
      "Plataforma web que acerca a los aprendices del SENA al apoyo psicológico: diario de emociones, agenda de citas con psicólogos, chat con un asistente IA (Psychobot) y paneles diferenciados para aprendiz, psicólogo y administrador.",
    status: "En producción",
    image: "/images/Psychoway.png", // reemplaza por tu captura real
    tech: ["React", "Node.js", "Express", "Supabase", "PostgreSQL"],
    liveUrl: "https://psychoway-sena.vercel.app/",
    repoUrl: "https://github.com/lui0slpk/Psychoway",
  },
];

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__preview">
        <img
          src={project.image}
          alt={`Vista previa de ${project.name}`}
          loading="lazy"
        />
        <span className="project-card__status">{project.status}</span>
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{project.name}</h3>
        <p className="project-card__tagline">{project.tagline}</p>
        <p className="project-card__description">{project.description}</p>

        <ul className="project-card__tech">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className="project-card__actions">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            Ver proyecto
          </a>
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
            >
              Código
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="projects" id="proyectos">
      <div className="projects__container">
        <p className="projects__eyebrow">Proyectos</p>
        <h2 className="projects__title">Lo que he construido</h2>
        <p className="projects__subtitle">
          Proyectos reales, desplegados y en uso, no solo ejercicios de práctica.
        </p>

        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}