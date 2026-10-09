/** @type {import('tailwindcss').Config} */
export default {
 content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
 darkMode: 'class',
 theme: {
  extend: {
   fontFamily: { sans: ['Inter','Noto Sans Telugu','Noto Sans Devanagari','Noto Sans Tamil','Noto Sans Kannada','Noto Sans Malayalam','Noto Sans Bengali','Noto Sans Gujarati','Noto Nastaliq Urdu','system-ui','sans-serif'], display: ['Plus Jakarta Sans','sans-serif'] },
   colors: { primary: '#4F46E5', secondary: '#06B6D4', accent: '#F59E0B' }
  },
 },
 plugins: [],
}
