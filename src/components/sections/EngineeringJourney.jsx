import { journeyStages } from '../../data/journey'
import '../../styles/journey.css'

/**
 * Presents Amit's engineering progression as four concise stages.
 *
 * @returns {JSX.Element} Engineering journey section.
 */
function EngineeringJourney() {
  return (
    <section
      id="journey"
      className="journey"
      aria-labelledby="journey-title"
    >
      <div className="container">
        <header className="journey__header">
          <p className="journey__eyebrow">Engineering Journey</p>

          <h2 id="journey-title" className="journey__title">
            From fundamentals to production-oriented software.
          </h2>

          <p className="journey__introduction">
            A concise view of how my engineering focus evolved as I took on
            more complex software problems.
          </p>
        </header>

        <ol className="journey__grid">
          {journeyStages.map((stage) => (
            <li className="journey-card" key={stage.id}>
              <span className="journey-card__number" aria-hidden="true">
                {stage.number}
              </span>

              <h3 className="journey-card__title">{stage.title}</h3>

              <p className="journey-card__description">
                {stage.description}
              </p>

              <ul
                className="journey-card__tags"
                aria-label={`${stage.title} technologies`}
              >
                {stage.technologies.slice(0, 5).map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default EngineeringJourney