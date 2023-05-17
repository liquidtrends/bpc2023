/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        fontFamily: {
        sans: ['Trebuchet MS', 'sans-serif']
      },
        backgroundImage: ({
         'hero-header': "url('/landing-header.svg')",
        })
      }
    },
  plugins: [],
}
