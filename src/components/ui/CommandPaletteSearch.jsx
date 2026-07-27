/**
 * Renders the command palette search input.
 *
 * @param {object} props - Component properties.
 * @param {string} props.query - Current search value.
 * @param {(value: string) => void} props.onQueryChange - Search update handler.
 * @param {React.RefObject<HTMLInputElement>} props.inputRef - Input reference.
 * @param {string} props.activeDescendantId - Active result element id.
 * @returns {JSX.Element} Command search field.
 */
function CommandPaletteSearch({
  query,
  onQueryChange,
  inputRef,
  activeDescendantId,
}) {
  return (
    <div className="command-palette__search">
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M10.75 4.5a6.25 6.25 0 1 0 0 12.5 6.25 6.25 0 0 0 0-12.5Zm-7.75 6.25a7.75 7.75 0 1 1 13.56 5.13l4.28 4.28a.75.75 0 1 1-1.06 1.06l-4.28-4.28A7.75 7.75 0 0 1 3 10.75Z" />
      </svg>

      <input
        ref={inputRef}
        type="search"
        value={query}
        placeholder="Search commands..."
        aria-label="Search portfolio commands"
        aria-controls="command-palette-list"
        aria-activedescendant={activeDescendantId || undefined}
        autoComplete="off"
        spellCheck="false"
        onChange={(event) => onQueryChange(event.target.value)}
      />

      <kbd>ESC</kbd>
    </div>
  )
}

export default CommandPaletteSearch