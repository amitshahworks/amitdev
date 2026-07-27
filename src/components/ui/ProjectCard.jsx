/**
 * Reusable project card.
 *
 * Displays project visuals, technical focus, stack, development status,
 * and available external links using a consistent card layout.
 *
 * @param {object} props - Component properties.
 * @param {object} props.project - Project information to display.
 * @returns {JSX.Element} Equal-sized portfolio project card.
 */
function ProjectCard({ project }) {
  const {
    title,
    subtitle,
    description,
    image,
    imageAlt,
    status,
    highlights,
    technologies,
    liveUrl,
    repositoryUrl,
  } = project

  return (
    <article className="project-card">
      <div className="project-card__media">
        {image ? (
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            onError={(event) => {
              event.currentTarget.hidden = true
              event.currentTarget
                .closest('.project-card__media')
                ?.classList.add('project-card__media--fallback')
            }}
          />
        ) : null}

        <div className="project-card__placeholder" aria-hidden="true">
          <span>{title}</span>
          <small>Project preview</small>
        </div>

        <span className="project-card__status">
          {status}
        </span>
      </div>

      <div className="project-card__body">
        <header className="project-card__header">
          <h3 className="project-card__title">
            {title}
          </h3>

          <p className="project-card__subtitle">
            {subtitle}
          </p>
        </header>

        <p className="project-card__description">
          {description}
        </p>

        <ul
          className="project-card__highlights"
          aria-label={`${title} technical highlights`}
        >
          {highlights.map((highlight) => (
            <li key={highlight}>
              {highlight}
            </li>
          ))}
        </ul>

        <ul
          className="project-card__technologies"
          aria-label={`${title} technology stack`}
        >
          {technologies.map((technology) => (
            <li key={technology}>
              {technology}
            </li>
          ))}
        </ul>

        <div className="project-card__actions">
          {liveUrl ? (
            <a
              className="project-card__link project-card__link--primary"
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
              <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <span className="project-card__unavailable">
              Demo unavailable
            </span>
          )}

          {repositoryUrl ? (
            <a
              className="project-card__link"
              href={repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <span className="project-card__unavailable">
              Private repository
            </span>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard