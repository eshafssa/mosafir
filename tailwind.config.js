module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
       colors:{
        'myGreen':'#87C540'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
