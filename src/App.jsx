import { useState, useCallback, useMemo } from "react"

import { FavouritesProvider, useFavourites } from "./context/FavouritesContext"
import { useFetchPhotos } from "./hooks/useFetchPhotos"

import { Header } from "./components/Header"
import { SearchBar } from "./components/SearchBar"
import { PhotoGrid } from "./components/PhotoGrid"

function Gallery() {

  const { photos, loading, error } = useFetchPhotos()
  const { favourites } = useFavourites()

  const [query, setQuery] = useState("")
  const [showFavs, setShowFavs] = useState(false)

  const handleSearch = useCallback((value) => {
    setQuery(value)
    setShowFavs(false)
  }, [])

  const visiblePhotos = useMemo(() => {

    let list = showFavs
      ? photos.filter(p => favourites.includes(p.id))
      : photos

    const q = query.trim().toLowerCase()

    if (q) {
      list = list.filter(p =>
        p.author.toLowerCase().includes(q)
      )
    }

    return list

  }, [photos, favourites, showFavs, query])

  return (
    <div className="min-h-screen flex flex-col">

      <Header
        showFavs={showFavs}
        onToggleFavs={() => setShowFavs(v => !v)}
      />

      <main className="max-w-7xl mx-auto w-full px-4 py-8 flex-1">

        {!showFavs && (
          <div className="mb-6">
            <SearchBar
              value={query}
              onChange={handleSearch}
              resultCount={visiblePhotos.length}
              totalCount={photos.length}
            />
          </div>
        )}

        <PhotoGrid
          photos={visiblePhotos}
          loading={loading}
          error={error}
        />

      </main>

    </div>
  )
}

export default function App() {
  return (
    <FavouritesProvider>
      <Gallery />
    </FavouritesProvider>
  )
}