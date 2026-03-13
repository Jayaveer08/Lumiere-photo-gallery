export function SearchBar({ value, onChange, resultCount, totalCount }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
      <div className="relative flex-1 max-w-md">
        {/* Search icon */}
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-400 pointer-events-none"
          fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round"
            d="m21 21-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0Z" />
        </svg>

        <input
          type="search"
          className="search-input pl-11"
          placeholder="Filter by author…"
          value={value}
          onChange={e => onChange(e.target.value)}
          aria-label="Search photos by author"
        />

        {/* Clear button */}
        {value && (
          <button
            onClick={() => onChange('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-400
                       hover:text-ink-700 transition-colors text-lg leading-none"
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </div>

      {/* Result count */}
      <p className="text-ink-500 text-xs font-mono shrink-0">
        {resultCount === totalCount
          ? `${totalCount} photos`
          : `${resultCount} of ${totalCount} photos`}
      </p>
    </div>
  )
}
