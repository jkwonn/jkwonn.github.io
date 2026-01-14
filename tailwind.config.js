/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        garamond: ['AppleGaramond', 'Garamond', 'serif'],
      },
      colors: {
        link: '#3366cc',
      },
    },
  },
  plugins: [],
}
