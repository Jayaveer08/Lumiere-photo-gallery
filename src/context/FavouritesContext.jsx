import { createContext, useContext, useReducer, useEffect } from "react"

const STORAGE_KEY = "photo_gallery_favourites"

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveToStorage(ids) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids))
  } catch {}
}

function favouritesReducer(state, action) {
  switch (action.type) {
    case "TOGGLE":
      return state.includes(action.id)
        ? state.filter(id => id !== action.id)
        : [...state, action.id]

    case "CLEAR":
      return []

    default:
      return state
  }
}

const FavouritesContext = createContext(null)

export function FavouritesProvider({ children }) {
  const [favourites, dispatch] = useReducer(
    favouritesReducer,
    [],
    loadFromStorage
  )

  useEffect(() => {
    saveToStorage(favourites)
  }, [favourites])

  function toggle(id) {
    dispatch({ type: "TOGGLE", id })
  }

  function clear() {
    dispatch({ type: "CLEAR" })
  }

  function isFavourite(id) {
    return favourites.includes(id)
  }

  return (
    <FavouritesContext.Provider
      value={{ favourites, toggle, clear, isFavourite }}
    >
      {children}
    </FavouritesContext.Provider>
  )
}

export function useFavourites() {
  const ctx = useContext(FavouritesContext)

  if (!ctx) {
    throw new Error("useFavourites must be used inside FavouritesProvider")
  }

  return ctx
}