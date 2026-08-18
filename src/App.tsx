import { projects } from "./data/projects";
import ProjectCard from "./components/ProjectCard";

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <div className="hero__ruling" aria-hidden="true">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} />
          ))}
        </div>

        <p className="hero__eyebrow">kasparaun.com</p>
        <h1 className="hero__name">Kaspar Aun</h1>
        <p className="hero__tagline">Builder of small, useful things.</p>

        <a
          className="hero__github"
          href="https://github.com/hacker30083"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://avatars.githubusercontent.com/u/114168113?v=4"
            alt=""
            className="hero__avatar"
          />
          <span>
            <strong>@hacker30083</strong> on GitHub
          </span>
          <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main className="projects" id="projects">
        <h2 className="projects__heading">Projects</h2>
        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>Built with React &amp; TypeScript.</p>
      </footer>
    </div>
  );
}
