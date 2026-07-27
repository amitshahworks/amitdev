import { certifications } from '../../data/certifications'
import '../../styles/certifications.css'

function Certifications() {
  return (
    <section
      id="certifications"
      className="certifications section"
      aria-labelledby="certifications-title"
    >
      <div className="container">

        <div className="section-heading">
          <p className="section-eyebrow">
            CERTIFICATIONS
          </p>

          <h2 id="certifications-title" className="section-title">
            Professional Certifications
          </h2>

          <p className="section-description">
            Industry-recognized certifications in cloud computing,
            backend engineering, AI, and software development.
          </p>
        </div>

        <div className="certifications-list">

          {certifications.map((credential) => (
            <article
              key={credential.id}
              className="certification"
            >
              <div className="certification-content">

                <p className="provider">
                  {credential.provider}
                </p>

                <h3 className="title">
                  {credential.title}
                </h3>

                <p className="issued">
                Issued · {credential.issued}
                </p>

                {credential.achievement && (
                  <span className="achievement">
                    {credential.achievement}
                  </span>
                )}

              </div>

              <a
                href={credential.url}
                target="_blank"
                rel="noopener noreferrer"
                className="verify-link"
                aria-label={`View credential for ${credential.title}`}
                >
                View Credential
                <span aria-hidden="true">↗</span>
                </a>

            </article>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Certifications