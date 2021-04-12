module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
         '2-fit': 'repeat(2, minmax(0, 33vw))',
       },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
