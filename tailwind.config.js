/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sixteen-orange': '#FF5500',
        'sixteen-black': '#0A0A0A',
        'sixteen-gray': '#1A1A1A',
        'sixteen-carbon': '#0D0D0D',
      },
      fontFamily: {
        'display': ['Anton', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'carbon-fiber': "url(\"data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231a1a1a' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E\")",
      },
      animation: {
        'gloss': 'gloss 3s ease-in-out infinite',
      },
      keyframes: {
        gloss: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        }
      }
    },
  },
  plugins: [],
}
