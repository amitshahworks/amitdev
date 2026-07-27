import '../../styles/education.css'
import { education } from '../../data/education'

export default function Education() {
  const {
    degree,
    specialization,
    institution,
    university,
    location,
    duration,
    cgpa,
    title,
    description,
    coursework,
    highlights,
    footer,
  } = education

  return (
    <section className="education section" id="education">
      <div className="container">
        <header className="education__header">
          <p className="education__eyebrow">
            EDUCATION
          </p>

          <h2 className="education__title">
            {title}
          </h2>

          <p className="education__description">
            {description}
          </p>
        </header>

        <div className="education__card">
          <div className="education__top">
            <div>
              <p className="education__degree">
                {degree}
              </p>

              <h3>
                {specialization}
              </h3>
              <p className="education__college">
                {institution}
              </p>
              <p className="education__university">
                {university} • {location}
              </p>
            </div>

            <div className="education__meta">
              <div>
                <span>Duration</span>
                <strong>{duration}</strong>
              </div>

              <div>
                <span>CGPA</span>
                <strong>{cgpa} / 10</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="education__content">
          <div>
            <h4>Coursework</h4>

            <div className="education__chips">
              {coursework.map((course) => (
                <span key={course}>
                  {course}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4>Academic Highlights</h4>

            <ul className="education__highlights">
              {highlights.map((highlight) => (
                <li key={highlight}>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="education__footer">
          {footer}
        </p>
      </div>
    </section>
  )
}