/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      colors: {
        ink: {
          50:  '#f5f4f0',
          100: '#e8e5dc',
          200: '#cdc8b8',
          300: '#ada690',
          400: '#8f8568',
          500: '#756b4f',
          600: '#5e5540',
          700: '#484131',
          800: '#312d22',
          900: '#1a1814',
          950: '#0d0c09',
        },
        gold: {
          300: '#e8c97a',
          400: '#d4a843',
          500: '#b88a1a',
        },
      },
      gridTemplateColumns: {
        gallery: 'repeat(auto-fill, minmax(260px, 1fr))',
      },
      boxShadow: {
        card: '0 2px 8px 0 rgba(26,24,20,0.10), 0 0 0 1px rgba(26,24,20,0.04)',
        'card-hover': '0 8px 32px 0 rgba(26,24,20,0.18), 0 0 0 1px rgba(26,24,20,0.06)',
      },
    },
  },
  plugins: [],
}
