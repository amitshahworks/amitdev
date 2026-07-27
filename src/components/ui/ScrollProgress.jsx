import { useEffect, useState } from 'react'
import '../../styles/scroll-progress.css'

/**
 * Displays the visitor's vertical reading progress at the top of the viewport.
 *
 * @returns {JSX.Element} Page scroll progress indicator.
 */
function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight

      if (scrollableHeight <= 0) {
        setProgress(0)
        return
      }

      const nextProgress = Math.min(
        Math.max((window.scrollY / scrollableHeight) * 100, 0),
        100,
      )

      setProgress(nextProgress)
    }

    updateProgress()

    window.addEventListener('scroll', updateProgress, {
      passive: true,
    })

    window.addEventListener('resize', updateProgress)

    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  return (
    <div
      className="scroll-progress"
      role="progressbar"
      aria-label="Page reading progress"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={Math.round(progress)}
    >
      <div
        className="scroll-progress__bar"
        style={{
          transform: `scaleX(${progress / 100})`,
        }}
      />
    </div>
  )
}

export default ScrollProgress