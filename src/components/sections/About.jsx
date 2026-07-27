import "../../styles/about.css";

function About() {
  return (
    <section id="about" className="about section">
      <div className="container about__container">

        <div className="about__content">

          <p className="section-eyebrow">About</p>

          <h2 className="about__title">
            Building software with
            curiosity, discipline,
            and long-term thinking.
          </h2>

          <p className="about__description">
            I'm a Computer Science and Engineering student focused on building
            backend systems, scalable web applications, and AI-powered
            software. I enjoy solving engineering problems through clean
            architecture, secure APIs, and maintainable code.
          </p>

          <div className="about__focus">

            <span className="about__label">
              Currently Focused On
            </span>

            <div className="about__chips">

              <span>Backend Engineering</span>

              <span>Distributed Systems</span>

              <span>AI Applications</span>

              <span>Cloud Architecture</span>

            </div>

          </div>

          <div className="about__stats">

            <div className="about__stat">
              <h3>70+</h3>
              <p>LeetCode Problems</p>
            </div>

            <div className="about__stat">
              <h3>9.25</h3>
              <p>CGPA</p>
            </div>

            <div className="about__stat">
              <h3>150+</h3>
              <p>GitHub Contributions</p>
            </div>

            <div className="about__stat">
              <h3>2027</h3>
              <p>Graduation</p>
            </div>

          </div>

          <p className="about__quote">
            Great software is built through strong fundamentals, thoughtful
            engineering, and continuous learning.
          </p>

        </div>

        <div className="about__image">

          <img
            src="/image/profile.png"
            alt="Amit Shah"
          />

        </div>

      </div>
    </section>
  );
}

export default About;