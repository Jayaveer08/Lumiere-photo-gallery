import { useFavourites } from '../context/FavouritesContext'

export function Header({ showFavs, onToggleFavs }) {
  const { favourites, clear } = useFavourites()
  const count = favourites.length

  return (
    <header className="sticky top-0 z-30 border-b border-ink-200 bg-ink-50/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <div>
          <h1 className="font-display text-2xl text-ink-900 tracking-tight">
            Lumi<em>ère</em>
          </h1>
          <p className="text-ink-400 text-xs font-mono tracking-widest uppercase -mt-0.5">
            Photo Gallery
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Favourites toggle */}
          <button
            onClick={onToggleFavs}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-body
                       border transition-all duration-200 ${
              showFavs
                ? 'bg-ink-900 text-white border-ink-900'
                : 'bg-white text-ink-700 border-ink-200 hover:border-ink-400'
            }`}
          >
            <svg className="w-3.5 h-3.5" fill={showFavs ? 'currentColor' : 'none'}
                 viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                 strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            Favourites
            {count > 0 && (
              <span className={`ml-0.5 px-1.5 py-0.5 rounded-full text-xs font-mono ${
                showFavs ? 'bg-white/20' : 'bg-ink-100 text-ink-600'
              }`}>
                {count}
              </span>
            )}
          </button>

          {/* Clear favourites (only when there are some) */}
          {count > 0 && (
            <button
              onClick={clear}
              title="Clear all favourites"
              className="w-8 h-8 flex items-center justify-center rounded-full
                         text-ink-400 hover:text-rose-500 hover:bg-rose-50
                         border border-ink-200 hover:border-rose-200
                         transition-all duration-150 text-base leading-none"
              aria-label="Clear all favourites"
            >
              ×
            </button>
          )}
        </div>
      </div>
    </header>
  )
}
