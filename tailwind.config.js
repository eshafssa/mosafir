module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
       colors:{
        'myGreen':'#87C540',
        'myBlue' :'#3D53B2',
        'lightBleu':'#566BBE',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
