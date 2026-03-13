import { useState } from 'react'
import { useFavourites } from '../context/FavouritesContext'

function HeartIcon({ filled }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`w-4 h-4 transition-colors duration-150 ${
        filled ? 'fill-rose-500 stroke-rose-500' : 'fill-none stroke-ink-600'
      }`}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

export function PhotoCard({ photo, index }) {
  const { toggle, isFavourite } = useFavourites()
  const [loaded, setLoaded] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const favourite = isFavourite(photo.id)
  // Picsum provides a direct URL via the id
  const imgSrc = `https://picsum.photos/id/${photo.id}/600/400`

  return (
    <>
      {/* Card */}
      <article
        className="photo-card fade-up"
        style={{ animationDelay: `${Math.min(index * 40, 600)}ms` }}
        onClick={() => setExpanded(true)}
      >
        {/* Skeleton shown until image loads */}
        {!loaded && <div className="skeleton aspect-[3/2] w-full" />}

        <img
          src={imgSrc}
          alt={`Photo by ${photo.author}`}
          loading="lazy"
          className={`w-full aspect-[3/2] object-cover transition-opacity duration-500 ${
            loaded ? 'opacity-100' : 'opacity-0 absolute inset-0'
          }`}
          onLoad={() => setLoaded(true)}
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent
                        opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Author label */}
        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-1 opacity-0
                        group-hover:translate-y-0 group-hover:opacity-100
                        transition-all duration-300">
          <p className="text-white text-xs font-mono truncate drop-shadow">
            {photo.author}
          </p>
        </div>

        {/* Author label always visible */}
        <div className="px-3 py-2 flex items-center justify-between gap-2">
          <span className="text-ink-700 text-xs font-mono truncate">{photo.author}</span>
          <span className="text-ink-400 text-xs font-mono shrink-0">
            {photo.width}×{photo.height}
          </span>
        </div>

        {/* Favourite button */}
        <button
          className="fav-btn"
          aria-label={favourite ? 'Remove from favourites' : 'Add to favourites'}
          onClick={e => { e.stopPropagation(); toggle(photo.id) }}
        >
          <HeartIcon filled={favourite} />
        </button>
      </article>

      {/* Lightbox */}
      {expanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center
                     bg-ink-950/85 backdrop-blur-sm p-4"
          onClick={() => setExpanded(false)}
        >
          <div
            className="relative max-w-4xl w-full rounded-xl overflow-hidden shadow-2xl
                       bg-ink-900 fade-up"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={`https://picsum.photos/id/${photo.id}/1200/800`}
              alt={`Photo by ${photo.author}`}
              className="w-full object-cover"
            />
            <div className="px-5 py-3 flex items-center justify-between">
              <div>
                <p className="text-white font-display text-lg">{photo.author}</p>
                <p className="text-ink-400 text-xs font-mono mt-0.5">
                  {photo.width} × {photo.height} — ID {photo.id}
                </p>
              </div>
              <button
                className="fav-btn static w-9 h-9 bg-white/10 hover:bg-white/20"
                onClick={() => toggle(photo.id)}
                aria-label={favourite ? 'Remove from favourites' : 'Add to favourites'}
              >
                <HeartIcon filled={favourite} />
              </button>
            </div>
            <button
              onClick={() => setExpanded(false)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40
                         text-white flex items-center justify-center text-lg leading-none
                         hover:bg-black/70 transition-colors"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  )
}
