/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern-desktop': "url('/images/bg-pattern-intro-desktop.svg')",
        'hero-pattern-mobile': "url('/images/bg-pattern-intro-mobile.svg')"
      }
    },
  },
  plugins: [],
}