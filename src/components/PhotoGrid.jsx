import { PhotoCard } from './PhotoCard'

/* Skeleton placeholder card */
function SkeletonCard() {
  return (
    <div className="rounded-lg overflow-hidden bg-ink-100 shadow-card">
      <div className="skeleton aspect-[3/2] w-full" />
      <div className="px-3 py-2 flex gap-2">
        <div className="skeleton h-3 w-28 rounded" />
        <div className="skeleton h-3 w-14 rounded ml-auto" />
      </div>
    </div>
  )
}

export function PhotoGrid({ photos, loading, error }) {
  const gridClass =
    'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5'

  if (error) {
    return (
      <div className="flex flex-col items-center py-24 text-center gap-3">
        <span className="text-4xl">⚠️</span>
        <p className="font-display text-xl text-ink-700">Couldn't load photos</p>
        <p className="text-sm font-mono text-ink-500 max-w-sm">{error}</p>
      </div>
    )
  }

  if (loading) {
    return (
      <div className={gridClass}>
        {Array.from({ length: 12 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    )
  }

  if (photos.length === 0) {
    return (
      <div className="flex flex-col items-center py-24 text-center gap-3">
        <span className="text-5xl">🔍</span>
        <p className="font-display text-xl text-ink-700">No photos found</p>
        <p className="text-sm font-mono text-ink-500">Try a different author name</p>
      </div>
    )
  }

  return (
    <div className={gridClass}>
      {photos.map((photo, i) => (
        <PhotoCard key={photo.id} photo={photo} index={i} />
      ))}
    </div>
  )
}
