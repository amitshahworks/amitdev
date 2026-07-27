import '../../styles/hero.css'

/**
 * Introduces Amit Shah and communicates his software engineering direction.
 *
 * @returns {JSX.Element} Recruiter-focused portfolio hero.
 */
function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero__container">
        <div className="hero__content">
          <p className="hero__eyebrow">Software Engineer</p>

          <h1 id="hero-title" className="hero__title">
            Building scalable software for real-world problems.
          </h1>

          <p className="hero__meta">
            <span>Ahmedabad, India</span>
            <span aria-hidden="true">•</span>
            <span>B.Tech Computer Science &amp; Engineering</span>
            <span aria-hidden="true">•</span>
            <span>9.25 CGPA</span>
          </p>

          <p className="hero__description">
            I build production-ready backend systems, scalable web applications,
            and AI-powered software with a focus on clean architecture,
            security, performance, and maintainability.
          </p>

          <div className="hero__actions">
            <a
              className="button button--primary"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
              <span aria-hidden="true">↗</span>
            </a>

            <a
              className="button button--secondary"
              href="https://github.com/amitshahworks"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero