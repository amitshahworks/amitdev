import { useEffect, useRef } from 'react'

/**
 * Renders one command palette result.
 *
 * @param {object} props - Component properties.
 * @param {object} props.command - Command information.
 * @param {boolean} props.isActive - Whether this result is selected.
 * @param {number} props.index - Result position.
 * @param {(index: number) => void} props.onActivate - Selection handler.
 * @param {(command: object) => void} props.onExecute - Command handler.
 * @returns {JSX.Element} Command result button.
 */
function CommandPaletteItem({
  command,
  isActive,
  index,
  onActivate,
  onExecute,
}) {
  const itemRef = useRef(null)
  const itemId = `command-palette-item-${command.id}`

  useEffect(() => {
    if (!isActive) {
      return
    }

    itemRef.current?.scrollIntoView({
      block: 'nearest',
    })
  }, [isActive])

  return (
    <button
      ref={itemRef}
      id={itemId}
      className={`command-palette__item ${
        isActive ? 'is-active' : ''
      }`}
      type="button"
      role="option"
      aria-selected={isActive}
      onMouseEnter={() => onActivate(index)}
      onFocus={() => onActivate(index)}
      onClick={() => onExecute(command)}
    >
      <span className="command-palette__item-copy">
        <strong>{command.label}</strong>
        <small>{command.description}</small>
      </span>

      <span
        className="command-palette__item-action"
        aria-hidden="true"
      >
        {command.type === 'section' ? 'Jump' : 'Open'}
        <span>↗</span>
      </span>
    </button>
  )
}

export default CommandPaletteItem