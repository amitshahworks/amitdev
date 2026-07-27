import { useEffect, useState } from 'react'
import { useActiveSection } from '../../hooks/useActiveSection'
import { COMMAND_PALETTE_OPEN_EVENT } from '../../hooks/useCommandPalette'
import '../../styles/header.css'

const HEADER_SCROLL_THRESHOLD = 8
const DESKTOP_MEDIA_QUERY = '(min-width: 48rem)'

const navigationItems = [
  {
    id: 'about',
    label: 'About',
    href: '#about',
  },
  {
    id: 'projects',
    label: 'Projects',
    href: '#projects',
  },
  {
    id: 'journey',
    label: 'Journey',
    href: '#journey',
  },
  {
    id: 'expertise',
    label: 'Expertise',
    href: '#expertise',
  },
  {
    id: 'certifications',
    label: 'Certifications',
    href: '#certifications',
  },
  {
    id: 'education',
    label: 'Education',
    href: '#education',
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '#contact',
  },
]

/**
 * Renders the responsive portfolio header and primary navigation.
 *
 * Highlights the navigation item matching the section currently visible in
 * the viewport.
 *
 * @returns {JSX.Element} Site header.
 */
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const activeSection = useActiveSection()
  const openCommandPalette = () => {
  window.dispatchEvent(
    new CustomEvent(COMMAND_PALETTE_OPEN_EVENT),
  )

  closeMenu()
}

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > HEADER_SCROLL_THRESHOLD)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMenuOpen])

  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_MEDIA_QUERY)

    const handleBreakpointChange = (event) => {
      if (event.matches) {
        setIsMenuOpen(false)
      }
    }

    mediaQuery.addEventListener('change', handleBreakpointChange)

    return () => {
      mediaQuery.removeEventListener('change', handleBreakpointChange)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen((currentOpen) => !currentOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}
      role="banner"
    >
      <div className="container header-inner">
        <a className="brand" href="#home" onClick={closeMenu}>
          Amit Shah
        </a>

        <nav
          id="site-navigation"
          className={`site-nav ${isMenuOpen ? 'is-open' : ''}`}
          aria-label="Primary"
        >
          <ul>
            {navigationItems.map((item) => {
              const isActive = activeSection === item.id

              return (
                <li key={item.id}>
                  <a
                    className={`site-nav__link ${
                      isActive ? 'site-nav__link--active' : ''
                    }`}
                    href={item.href}
                    onClick={closeMenu}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="header-actions">
          <button
            className="command-trigger"
            type="button"
            onClick={openCommandPalette}
            aria-label="Open command palette"
            title="Open command palette"
          >
            <span className="command-trigger__label">
              Search
            </span>

            <span
              className="command-trigger__shortcut"
              aria-hidden="true"
            >
              <kbd>⌘</kbd>
              <kbd>K</kbd>
            </span>
          </button>
          
          <a
            className="resume-link"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>

          <button
            className="menu-toggle"
            type="button"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="site-navigation"
            aria-label={
              isMenuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
          >
            {isMenuOpen ? (
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M6.22 6.22a.75.75 0 0 1 1.06 0L12 10.94l4.72-4.72a.75.75 0 1 1 1.06 1.06L13.06 12l4.72 4.72a.75.75 0 1 1-1.06 1.06L12 13.06l-4.72 4.72a.75.75 0 0 1-1.06-1.06L10.94 12 6.22 7.28a.75.75 0 0 1 0-1.06Z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M4.5 7.25A.75.75 0 0 1 5.25 6.5h13.5a.75.75 0 0 1 0 1.5H5.25A.75.75 0 0 1 4.5 7.25Zm0 4.75a.75.75 0 0 1 .75-.75h13.5a.75.75 0 0 1 0 1.5H5.25a.75.75 0 0 1-.75-.75Zm0 4.75a.75.75 0 0 1 .75-.75h13.5a.75.75 0 0 1 0 1.5H5.25a.75.75 0 0 1-.75-.75Z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header