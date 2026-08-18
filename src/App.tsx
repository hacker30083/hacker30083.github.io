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

        <h1 className="hero__name">Kaspar Aun</h1>

        <div className="hero__actions">
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

          <a className="hero__contact" href="#contact">
            Contact me <span aria-hidden="true">↓</span>
          </a>
        </div>
      </header>

      <main className="projects" id="projects">
        <h2 className="projects__heading">Projects</h2>
        <section className="about-section">
          <h2 className="section-title">About Me</h2>
          <p className="section-description">
            I am a student who's passionate about IT and software development. I
            have created and contributed to projects requiring both frontend and
            backend development, a selection of which can be seen below. During
            these projects I have familiarized myself with development/DevOps
            principles such as CI/CD, Git, various technologies and the
            full-stack software model.
          </p>
        </section>

        <section className="projects-section">
          <h2 className="section-title">Projects</h2>
          <p className="section-description">
            A collection of things I've built, ranging from websites to help me
            in my day-to-day life to full Android applications.
          </p>
          <div className="projects__grid">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-section__header">
            <h2 className="section-title">Contact Me</h2>
            <p className="section-description">
              Have a project in mind or want to work together? Send me a
              message.
            </p>
          </div>

          <form
            className="contact-form"
            action="https://formspree.io/f/xgawplgy"
            method="POST"
          >
            <div className="contact-form__row">
              <label className="contact-form__field">
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </label>

              <label className="contact-form__field">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </label>
            </div>

            <label className="contact-form__field">
              <span>Subject</span>
              <input
                type="text"
                name="subject"
                placeholder="What would you like help with?"
                required
              />
            </label>

            <label className="contact-form__field">
              <span>Message</span>
              <textarea
                name="message"
                rows={7}
                placeholder="Tell me a little about your project..."
                required
              />
            </label>

            <button className="contact-form__submit" type="submit">
              Send message <span aria-hidden="true">↗</span>
            </button>
          </form>

          <p className="contact-section__email">
            Or email me directly at{" "}
            <a href="mailto:kaspar@kasparaun.com">kaspar@kasparaun.com</a>
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} Kaspar Aun. Contact:{" "}
          <a href="mailto:kaspar@kasparaun.com">kaspar@kasparaun.com</a>
        </p>
      </footer>
    </div>
  );
}
