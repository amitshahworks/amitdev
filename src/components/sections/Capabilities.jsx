import { expertiseGroups } from '../../data/expertise'
import '../../styles/capabilities.css'

/**
 * Displays the portfolio owner's practical engineering capabilities.
 *
 * Each group combines an engineering area with the technologies and concepts
 * currently used within that area.
 *
 * @returns {JSX.Element} Core expertise section.
 */
function Capabilities() {
  return (
    <section
      id="expertise"
      className="capabilities"
      aria-labelledby="expertise-title"
    >
      <div className="container">
        <header className="capabilities__header">
          <p className="capabilities__eyebrow">
            Core Expertise
          </p>

          <h2
            id="expertise-title"
            className="capabilities__title"
          >
            Engineering across the complete software stack.
          </h2>

          <p className="capabilities__description">
            My current capabilities combine backend development, full-stack
            delivery, secure architecture, databases, cloud fundamentals, and
            core computer science.
          </p>
        </header>

        <div className="capabilities__grid">
          {expertiseGroups.map((group) => (
            <article
              className="capability-card"
              key={group.id}
            >
              <span
                className="capability-card__number"
                aria-hidden="true"
              >
                {group.number}
              </span>

              <h3 className="capability-card__title">
                {group.title}
              </h3>

              <p className="capability-card__description">
                {group.description}
              </p>

              <ul
                className="capability-card__technologies"
                aria-label={`${group.title} technologies and concepts`}
              >
                {group.technologies.map((technology) => (
                  <li key={technology}>
                    {technology}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Capabilities