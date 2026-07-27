import { useEffect, useState } from 'react'
import '../../styles/page-loader.css'

const MAX_LOADER_DURATION = 500
const EXIT_ANIMATION_DURATION = 220

/**
 * Displays a brief branded loading state while the initial portfolio document
 * and critical assets become ready.
 *
 * @returns {JSX.Element | null} Initial page loader.
 */
function PageLoader() {
  const [isVisible, setIsVisible] = useState(true)
  const [isLeaving, setIsLeaving] = useState(false)

  useEffect(() => {
    let hideTimer
    let removeTimer

    const beginExit = () => {
      setIsLeaving(true)

      removeTimer = window.setTimeout(() => {
        setIsVisible(false)
      }, EXIT_ANIMATION_DURATION)
    }

    if (document.readyState === 'complete') {
      hideTimer = window.setTimeout(beginExit, 180)
    } else {
      const handleLoad = () => {
        hideTimer = window.setTimeout(beginExit, 180)
      }

      window.addEventListener('load', handleLoad, { once: true })

      const maximumDurationTimer = window.setTimeout(
        beginExit,
        MAX_LOADER_DURATION,
      )

      return () => {
        window.removeEventListener('load', handleLoad)
        window.clearTimeout(hideTimer)
        window.clearTimeout(removeTimer)
        window.clearTimeout(maximumDurationTimer)
      }
    }

    return () => {
      window.clearTimeout(hideTimer)
      window.clearTimeout(removeTimer)
    }
  }, [])

  if (!isVisible) {
    return null
  }

  return (
    <div
      className={`page-loader ${isLeaving ? 'is-leaving' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className="page-loader__content">
        <span className="page-loader__mark" aria-hidden="true">
            AS
        </span>

        <span className="page-loader__name">
            Amit Shah
        </span>

        <span className="page-loader__role">
            Building Scalable Software
        </span>

        <span className="page-loader__track" aria-hidden="true">
            <span className="page-loader__progress" />
        </span>
        </div>

      <span className="u-visually-hidden">
        Loading portfolio
      </span>
    </div>
  )
}

export default PageLoader