import { useEffect, useState } from 'react'

const SECTION_IDS = [
  'home',
  'about',
  'projects',
  'journey',
  'expertise',
  'certifications',
  'education',
  'contact',
]

const ACTIVE_SECTION_OFFSET = 160

/**
 * Tracks the portfolio section currently positioned beneath the sticky header.
 *
 * Document-relative section positions are used so sections of different
 * heights are detected consistently during scrolling and anchor navigation.
 *
 * @returns {string} Active portfolio section id.
 */
export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    let animationFrameId = null

    const updateActiveSection = () => {
      const sections = SECTION_IDS.map((sectionId) =>
        document.getElementById(sectionId),
      ).filter(Boolean)

      if (sections.length === 0) {
        return
      }

      const readingLine = window.scrollY + ACTIVE_SECTION_OFFSET
      let nextActiveSection = sections[0].id

      for (const section of sections) {
        const sectionTop =
          section.getBoundingClientRect().top + window.scrollY

        if (sectionTop <= readingLine) {
          nextActiveSection = section.id
        } else {
          break
        }
      }

      const isAtPageBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 4

      if (isAtPageBottom) {
        nextActiveSection = sections[sections.length - 1].id
      }

      setActiveSection((currentSection) =>
        currentSection === nextActiveSection
          ? currentSection
          : nextActiveSection,
      )
    }

    const requestUpdate = () => {
      if (animationFrameId !== null) {
        return
      }

      animationFrameId = window.requestAnimationFrame(() => {
        updateActiveSection()
        animationFrameId = null
      })
    }

    const handleHashChange = () => {
      const sectionId = window.location.hash.slice(1)

      if (SECTION_IDS.includes(sectionId)) {
        setActiveSection(sectionId)
      }

      requestUpdate()
    }

    updateActiveSection()

    window.addEventListener('scroll', requestUpdate, {
      passive: true,
    })
    window.addEventListener('resize', requestUpdate)
    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
      window.removeEventListener('hashchange', handleHashChange)

      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  return activeSection
}