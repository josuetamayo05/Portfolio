/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        dark: {
          bg: '#0B0E14',
          surface: '#151A23',
          border: '#232A3B',
        },
        brand: {
          cyan: '#00F0FF',
          violet: '#7000FF',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #7000FF55 0deg, #00F0FF55 180deg, #7000FF55 360deg)',
      }
    },
  },
  plugins: [],
}