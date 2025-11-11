/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'section-sm': '3rem',    // small vertical padding (≈ 48px)
        'section-md': '5rem',    // medium (≈ 80px)
        'section-lg': '7rem',    // large (≈ 112px)
      },
      colors: {
        brand: {
          blue: '#1e40af',      // same as blue-800
          light: '#60a5fa',     // accent
        },
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1240px',
        },
      },
    },
  },
  plugins: [],
};
