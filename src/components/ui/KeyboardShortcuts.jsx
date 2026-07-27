import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { keyboardShortcuts } from '../../data/shortcuts'
import '../../styles/keyboard-shortcuts.css'

const RESUME_URL = '/resume.pdf'
const GITHUB_URL = 'https://github.com/amitshahworks'
const LINKEDIN_URL = 'https://www.linkedin.com/in/amitshahstack'

/**
 * Determines whether keyboard shortcuts should be ignored for the active
 * element.
 *
 * @param {EventTarget | null} target - Keyboard event target.
 * @returns {boolean} Whether the user is typing or editing content.
 */
function isEditableTarget(target) {
  if (!(target instanceof HTMLElement)) {
    return false
  }

  const tagName = target.tagName.toLowerCase()

  return (
    tagName === 'input' ||
    tagName === 'textarea' ||
    tagName === 'select' ||
    target.isContentEditable
  )
}

/**
 * Scrolls smoothly to a portfolio section.
 *
 * @param {string} sectionId - Target section identifier.
 * @returns {void}
 */
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)

  if (!section) {
    return
  }

  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })

  window.history.replaceState(null, '', `#${sectionId}`)
}

/**
 * Renders keyboard shortcut support and the shortcuts reference dialog.
 *
 * The dialog opens with `?`. Single-key commands provide fast navigation to
 * selected portfolio destinations while avoiding conflicts during text input.
 *
 * @returns {JSX.Element | null} Keyboard shortcuts dialog portal.
 */
function KeyboardShortcuts() {
  const [isOpen, setIsOpen] = useState(false)
  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)
  const previouslyFocusedElementRef = useRef(null)

  const openDialog = () => {
    previouslyFocusedElementRef.current = document.activeElement
    setIsOpen(true)
  }

  const closeDialog = () => {
    setIsOpen(false)

    window.requestAnimationFrame(() => {
      previouslyFocusedElementRef.current?.focus?.()
    })
  }

  useEffect(() => {
    const handleGlobalKeyboard = (event) => {
      if (isEditableTarget(event.target)) {
        return
      }

      /*
       * Command-palette handling remains owned by useCommandPalette. Ignore
       * modified key combinations here to prevent duplicate behavior.
       */
      if (event.metaKey || event.ctrlKey || event.altKey) {
        return
      }

      if (event.key === '?') {
        event.preventDefault()

        if (isOpen) {
          closeDialog()
        } else {
          openDialog()
        }

        return
      }

      if (event.key === 'Escape' && isOpen) {
        event.preventDefault()
        closeDialog()
        return
      }

      if (isOpen) {
        return
      }

      switch (event.key.toLowerCase()) {
        case 'r':
          event.preventDefault()
          window.open(RESUME_URL, '_blank', 'noopener,noreferrer')
          break

        case 'g':
          event.preventDefault()
          window.open(GITHUB_URL, '_blank', 'noopener,noreferrer')
          break

        case 'l':
          event.preventDefault()
          window.open(LINKEDIN_URL, '_blank', 'noopener,noreferrer')
          break

        case 'p':
          event.preventDefault()
          scrollToSection('projects')
          break

        case 'j':
          event.preventDefault()
          scrollToSection('journey')
          break

        case 'c':
          event.preventDefault()
          scrollToSection('contact')
          break

        default:
          break
      }
    }

    document.addEventListener('keydown', handleGlobalKeyboard)

    return () => {
      document.removeEventListener('keydown', handleGlobalKeyboard)
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus()
    })

    const handleFocusTrap = (event) => {
      if (event.key !== 'Tab') {
        return
      }

      const focusableElements = dialogRef.current?.querySelectorAll(
        'button, a[href], [tabindex]:not([tabindex="-1"])',
      )

      if (!focusableElements?.length) {
        return
      }

      const firstElement = focusableElements[0]
      const lastElement =
        focusableElements[focusableElements.length - 1]

      if (
        event.shiftKey &&
        document.activeElement === firstElement
      ) {
        event.preventDefault()
        lastElement.focus()
        return
      }

      if (
        !event.shiftKey &&
        document.activeElement === lastElement
      ) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    document.addEventListener('keydown', handleFocusTrap)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleFocusTrap)
    }
  }, [isOpen])

  if (!isOpen) {
    return null
  }

  return createPortal(
    <div
      className="keyboard-shortcuts__overlay"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          closeDialog()
        }
      }}
    >
      <section
        ref={dialogRef}
        className="keyboard-shortcuts"
        role="dialog"
        aria-modal="true"
        aria-labelledby="keyboard-shortcuts-title"
      >
        <header className="keyboard-shortcuts__header">
          <div>
            <p className="keyboard-shortcuts__eyebrow">
              Quick Reference
            </p>

            <h2 id="keyboard-shortcuts-title">
              Keyboard Shortcuts
            </h2>
          </div>

          <button
            ref={closeButtonRef}
            className="keyboard-shortcuts__close"
            type="button"
            onClick={closeDialog}
            aria-label="Close keyboard shortcuts"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M6.22 6.22a.75.75 0 0 1 1.06 0L12 10.94l4.72-4.72a.75.75 0 1 1 1.06 1.06L13.06 12l4.72 4.72a.75.75 0 1 1-1.06 1.06L12 13.06l-4.72 4.72a.75.75 0 0 1-1.06-1.06L10.94 12 6.22 7.28a.75.75 0 0 1 0-1.06Z" />
            </svg>
          </button>
        </header>

        <div className="keyboard-shortcuts__list">
          {keyboardShortcuts.map((shortcut) => (
            <div
              className="keyboard-shortcuts__item"
              key={shortcut.id}
            >
              <span className="keyboard-shortcuts__label">
                {shortcut.label}
              </span>

              <div className="keyboard-shortcuts__keys">
                <span>
                  {shortcut.keys.map((key) => (
                    <kbd key={key}>{key}</kbd>
                  ))}
                </span>

                {shortcut.alternativeKeys && (
                  <>
                    <small>or</small>

                    <span>
                      {shortcut.alternativeKeys.map((key) => (
                        <kbd key={key}>{key}</kbd>
                      ))}
                    </span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <footer className="keyboard-shortcuts__footer">
          Press <kbd>?</kbd> anytime to open or close this reference.
        </footer>
      </section>
    </div>,
    document.body,
  )
}

export default KeyboardShortcuts