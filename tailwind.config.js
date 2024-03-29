/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'great': ['"Great Vibes"', 'cursive'], // Add the font as a new key
        'nanum': ['"Nanum Myeongjo"', 'serif'], // Define a custom font name
        'garamond': ['EB Garamond', 'serif'],
    },
  },
  plugins: [],
}
}
