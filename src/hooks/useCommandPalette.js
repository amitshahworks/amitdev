import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { commandPaletteItems } from '../data/commandPalette'
export const COMMAND_PALETTE_OPEN_EVENT = 'portfolio:open-command-palette'
/**
 * Provides command-palette state, filtering, keyboard navigation, and command
 * execution.
 *
 * @returns {object} Command-palette controls and derived state.
 */
export function useCommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)

  const previouslyFocusedElementRef = useRef(null)

  const filteredCommands = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    if (!normalizedQuery) {
      return commandPaletteItems
    }

    return commandPaletteItems.filter((command) => {
      const searchableText = [
        command.label,
        command.description,
        command.group,
        ...command.keywords,
      ]
        .join(' ')
        .toLowerCase()

      return searchableText.includes(normalizedQuery)
    })
  }, [query])

  const safeActiveIndex =
    filteredCommands.length === 0
      ? 0
      : Math.min(activeIndex, filteredCommands.length - 1)

  const openPalette = useCallback(() => {
    previouslyFocusedElementRef.current = document.activeElement
    setIsOpen(true)
    setQuery('')
    setActiveIndex(0)
  }, [])

  const closePalette = useCallback(() => {
    setIsOpen(false)
    setQuery('')
    setActiveIndex(0)

    window.requestAnimationFrame(() => {
      previouslyFocusedElementRef.current?.focus?.()
    })
  }, [])

  /**
   * Updates the search query and resets keyboard selection.
   *
   * @param {string} nextQuery - New command search value.
   * @returns {void}
   */
  const updateQuery = useCallback((nextQuery) => {
    setQuery(nextQuery)
    setActiveIndex(0)
  }, [])

  /**
   * Executes a selected command.
   *
   * @param {object | undefined} command - Command to execute.
   * @returns {void}
   */
  const executeCommand = useCallback(
    (command) => {
      if (!command) {
        return
      }

      closePalette()

      if (command.type === 'section') {
        const target = document.querySelector(command.target)

        target?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })

        window.history.replaceState(null, '', command.target)
        return
      }

      if (command.type === 'email') {
        window.location.href = command.target
        return
      }

      window.open(command.target, '_blank', 'noopener,noreferrer')
    },
    [closePalette],
  )

  useEffect(() => {
    const handleGlobalShortcut = (event) => {
      const isCommandShortcut =
        (event.metaKey || event.ctrlKey) &&
        event.key.toLowerCase() === 'k'

      if (!isCommandShortcut) {
        return
      }

      event.preventDefault()

      if (isOpen) {
        closePalette()
      } else {
        openPalette()
      }
    }

    document.addEventListener('keydown', handleGlobalShortcut)

    return () => {
      document.removeEventListener('keydown', handleGlobalShortcut)
    }
  }, [closePalette, isOpen, openPalette])

  useEffect(() => {
  const handleOpenRequest = () => {
    openPalette()
  }

  window.addEventListener(
    COMMAND_PALETTE_OPEN_EVENT,
    handleOpenRequest,
  )

  return () => {
    window.removeEventListener(
      COMMAND_PALETTE_OPEN_EVENT,
      handleOpenRequest,
    )
  }
}, [openPalette])

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    

    const handlePaletteKeyboard = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        closePalette()
        return
      }

      if (event.key === 'ArrowDown') {
        event.preventDefault()

        setActiveIndex((currentIndex) =>
          filteredCommands.length
            ? (currentIndex + 1) % filteredCommands.length
            : 0,
        )

        return
      }

      if (event.key === 'ArrowUp') {
        event.preventDefault()

        setActiveIndex((currentIndex) =>
          filteredCommands.length
            ? (currentIndex - 1 + filteredCommands.length) %
              filteredCommands.length
            : 0,
        )

        return
      }

      if (event.key === 'Enter') {
        event.preventDefault()
        executeCommand(filteredCommands[safeActiveIndex])
      }
    }

    document.addEventListener('keydown', handlePaletteKeyboard)

    return () => {
      document.removeEventListener('keydown', handlePaletteKeyboard)
    }
  }, [
    closePalette,
    executeCommand,
    filteredCommands,
    isOpen,
    safeActiveIndex,
  ])

  return {
    isOpen,
    query,
    activeIndex: safeActiveIndex,
    filteredCommands,
    openPalette,
    closePalette,
    setQuery: updateQuery,
    setActiveIndex,
    executeCommand,
  }
}