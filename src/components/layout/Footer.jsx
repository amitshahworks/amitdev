import '../../styles/footer.css'

/**
 * Renders the minimal portfolio footer.
 *
 * @returns {JSX.Element} Site footer.
 */
function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p className="site-footer__copyright">
          © {currentYear} Amit Shah
        </p>

        <p className="site-footer__tech">
          Built with React + Vite
        </p>
      </div>
    </footer>
  )
}

export default Footer