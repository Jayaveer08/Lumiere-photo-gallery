import { useState, useEffect } from 'react'

const API_URL = 'https://picsum.photos/v2/list?limit=30'

/**
 * useFetchPhotos
 * Fetches the photo list from the Picsum API once on mount.
 * Returns { photos, loading, error }.
 */
export function useFetchPhotos() {
  const [photos, setPhotos]   = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)

  useEffect(() => {
    let cancelled = false

    async function fetchPhotos() {
      try {
        setLoading(true)
        setError(null)

        const res = await fetch(API_URL)
        if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`)

        const data = await res.json()
        if (!cancelled) setPhotos(data)
      } catch (err) {
        if (!cancelled) setError(err.message ?? 'Failed to fetch photos')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchPhotos()
    return () => { cancelled = true }
  }, [])

  return { photos, loading, error }
}
