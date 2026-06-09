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
