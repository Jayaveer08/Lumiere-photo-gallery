# Lumière — Photo Gallery

A polished React photo gallery app with Tailwind CSS.

## Features

- 📸 Fetches 30 photos from the [ Picsum ](https://picsum.photos/v2/list)
- 🔍 Real-time author search with `useCallback`-memoised handler
- 💛 Favourites system powered by `useReducer` + `localStorage` persistence
- ⚡ `useMemo` for filtered photo list (no wasted iterations on re-renders)
- 🪝 Custom `useFetchPhotos` hook with cancellation support
- 📐 Responsive grid: 4 cols desktop / 2 cols tablet / 1 col mobile
- 🖼️ Lightbox on card click
- 💀 Skeleton loading placeholders

## Tech Stack

| Tool | Version |
|------|---------|
| React | 18 |
| Vite | 5 |
| Tailwind CSS | 3 |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Project Structure

```
photo-gallery/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx                         # React root
    ├── App.jsx                          # Root component (search, filter logic)
    ├── index.css                        # Tailwind + custom CSS
    ├── hooks/
    │   └── useFetchPhotos.js            # Custom fetch hook
    ├── context/
    │   └── FavouritesContext.jsx        # useReducer + localStorage
    └── components/
        ├── Header.jsx                   # Sticky header + fav toggle
        ├── SearchBar.jsx                # Search input + result count
        ├── PhotoGrid.jsx                # Responsive grid + states
        └── PhotoCard.jsx                # Card + lightbox + heart button
```

## Key Design Decisions

### `useFetchPhotos` hook
Encapsulates fetch lifecycle (`loading`, `error`, `data`) and uses a cancellation flag to prevent state updates on unmounted components.

### `useReducer` for favourites
The reducer handles `TOGGLE` (add or remove by ID) and `CLEAR` actions. State is lazily initialised from `localStorage` and synced back via a `useEffect`.

### `useCallback` for search handler
`handleSearch` is wrapped in `useCallback` so its reference stays stable across renders — important if it were passed as a prop to memoised children.

### `useMemo` for filtered photos
`visiblePhotos` only recomputes when `photos`, `favourites`, `showFavs`, or `query` change, keeping renders cheap.
