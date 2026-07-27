import { projects } from '../../data/projects'
import ProjectCard from '../ui/ProjectCard'
import '../../styles/projects.css'

/**
 * Displays selected engineering projects with equal visual importance.
 *
 * The section intentionally avoids oversized flagship cards so recruiters can
 * scan every project quickly and compare the technical focus consistently.
 *
 * @returns {JSX.Element} Selected projects section.
 */
function Projects() {
  return (
    <section
      id="projects"
      className="projects"
      aria-labelledby="projects-title"
    >
      <div className="container">
        <header className="projects__header">
          <p className="projects__eyebrow">
            Selected Work
          </p>

          <h2
            id="projects-title"
            className="projects__title"
          >
            Software built around real engineering problems.
          </h2>

          <p className="projects__description">
            A focused selection of projects demonstrating backend systems,
            full-stack product development, applied AI, and production-oriented
            software architecture.
          </p>
        </header>

        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects