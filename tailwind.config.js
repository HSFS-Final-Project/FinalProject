/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        logoColor: '#49516f',
        smallTextColor: '#495171',
        pinkColor: '#f6386a',
        pinkBoldColor: '#f36b7f',
        buttonColor: '#f63854'
      }
    },
  },
  plugins: [],
}
