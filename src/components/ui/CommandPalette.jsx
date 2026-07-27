import { useEffect, useMemo, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useCommandPalette } from '../../hooks/useCommandPalette'
import CommandPaletteItem from './CommandPaletteItem'
import CommandPaletteSearch from './CommandPaletteSearch'
import '../../styles/command-palette.css'

/**
 * Renders the global portfolio command palette.
 *
 * Supports search, keyboard navigation, direct section navigation, external
 * links, focus restoration, and click-outside dismissal.
 *
 * @returns {JSX.Element | null} Command palette dialog.
 */
function CommandPalette() {
  const inputRef = useRef(null)
  const dialogRef = useRef(null)

  const {
    isOpen,
    query,
    activeIndex,
    filteredCommands,
    closePalette,
    setQuery,
    setActiveIndex,
    executeCommand,
  } = useCommandPalette()

  const groupedCommands = useMemo(() => {
    return filteredCommands.reduce((groups, command, index) => {
      const existingGroup = groups.find(
        (group) => group.name === command.group,
      )

      const indexedCommand = {
        command,
        index,
      }

      if (existingGroup) {
        existingGroup.items.push(indexedCommand)
        return groups
      }

      groups.push({
        name: command.group,
        items: [indexedCommand],
      })

      return groups
    }, [])
  }, [filteredCommands])

  const activeCommand = filteredCommands[activeIndex]
  const activeDescendantId = activeCommand
    ? `command-palette-item-${activeCommand.id}`
    : ''

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    window.requestAnimationFrame(() => {
      inputRef.current?.focus()
    })

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const handleFocusTrap = (event) => {
      if (event.key !== 'Tab') {
        return
      }

      const focusableElements = dialogRef.current?.querySelectorAll(
        'input, button, a[href], [tabindex]:not([tabindex="-1"])',
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
      document.removeEventListener('keydown', handleFocusTrap)
    }
  }, [isOpen])

  if (!isOpen) {
    return null
  }

  return createPortal(
    <div
      className="command-palette__overlay"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          closePalette()
        }
      }}
    >
      <section
        ref={dialogRef}
        className="command-palette"
        role="dialog"
        aria-modal="true"
        aria-labelledby="command-palette-title"
      >
        <h2
          id="command-palette-title"
          className="u-visually-hidden"
        >
          Portfolio command palette
        </h2>

        <CommandPaletteSearch
          query={query}
          onQueryChange={setQuery}
          inputRef={inputRef}
          activeDescendantId={activeDescendantId}
        />

        <div
          id="command-palette-list"
          className="command-palette__results"
          role="listbox"
          aria-label="Available commands"
        >
          {groupedCommands.length ? (
            groupedCommands.map((group) => (
              <div
                className="command-palette__group"
                key={group.name}
              >
                <p className="command-palette__group-label">
                  {group.name}
                </p>

                <div className="command-palette__group-items">
                  {group.items.map(({ command, index }) => (
                    <CommandPaletteItem
                      key={command.id}
                      command={command}
                      index={index}
                      isActive={index === activeIndex}
                      onActivate={setActiveIndex}
                      onExecute={executeCommand}
                    />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="command-palette__empty">
              <strong>No commands found</strong>
              <p>Try another project, section, or profile name.</p>
            </div>
          )}
        </div>

        <footer className="command-palette__footer">
          <span>
            <kbd>↑</kbd>
            <kbd>↓</kbd>
            Navigate
          </span>

          <span>
            <kbd>↵</kbd>
            Select
          </span>

          <span>
            <kbd>ESC</kbd>
            Close
          </span>
        </footer>
      </section>
    </div>,
    document.body,
  )
}

export default CommandPalette