import type { Project } from "../data/projects";
import Chip from "./Chip";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-card__frame">
        <img
          className="project-card__image"
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
        />
      </div>

      <div className="project-card__body">
        <header className="project-card__header">
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__credit">{project.credit}</p>
        </header>

        <p className="project-card__description">{project.description}</p>

        <ul className="project-card__chips" aria-label="Technologies used">
          {project.tech.map((t) => (
            <li key={t.label}>
              <Chip {...t} />
            </li>
          ))}
        </ul>

        <div className="project-card__links">
          {project.links.map((link) => (
            <a
              key={link.href}
              className="project-card__link"
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
