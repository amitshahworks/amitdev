import { contact } from '../../data/contact'
import '../../styles/contact.css'

/**
 * Displays direct contact details and professional profile links.
 *
 * The section intentionally avoids a contact form so recruiters can reach the
 * portfolio owner immediately through their preferred communication channel.
 *
 * @returns {JSX.Element} Portfolio contact section.
 */
function Contact() {
  const {
    eyebrow,
    title,
    description,
    email,
    location,
    availability,
    links,
  } = contact

  return (
    <section
      id="contact"
      className="contact"
      aria-labelledby="contact-title"
    >
      <div className="container contact__container">
        <header className="contact__header">
          <p className="contact__eyebrow">{eyebrow}</p>

          <h2 id="contact-title" className="contact__title">
            {title}
          </h2>

          <p className="contact__description">{description}</p>

          <a className="contact__primary-action" href={`mailto:${email}`}>
            Email Me
            <span aria-hidden="true">↗</span>
          </a>
        </header>

        <div className="contact__details">
          <dl className="contact__summary">
            <div className="contact__summary-item">
              <dt>Location</dt>
              <dd>{location}</dd>
            </div>

            <div className="contact__summary-item">
              <dt>Availability</dt>

              <dd className="contact__availability">
                <span aria-hidden="true" />
                {availability}
              </dd>
            </div>
          </dl>

          <nav
            className="contact__links"
            aria-label="Contact and professional profile links"
          >
            {links.map((link) => (
              <a
                className="contact-link"
                href={link.href}
                key={link.id}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
              >
                <span className="contact-link__label">{link.label}</span>

                <span className="contact-link__value">{link.value}</span>

                <span className="contact-link__arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  )
}

export default Contact