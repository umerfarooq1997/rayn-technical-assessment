/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: '1rem',

      // default breakpoints
      screens: {
        desktop: '1280px',
      },
    },
    extend: {
      backgroundColor: {
        'primary': '#7F56D9',
      },
      borderColor: {
        'primary': '#dddddd',
        'secondary': '#F2F4F7',
        'tertiary': '#7F56D9',
      },
      colors: {
        'primary': '#475467',
        'secondary': '#101828',
        'tertiary': '#6941C6',
      },
    },
  },
  plugins: [],
}