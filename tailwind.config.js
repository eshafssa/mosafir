module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
       colors:{
        'Green':'#87C540',
        'Blue' :'#3D53B2',
        'lightBleu':'#566BBE',

      },
      boxShadow: {
        //'3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        // '3xl': '25px 20px 25px -5px rgba(0, 0, 0, 0.1)',
        // //'3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        // '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        // '4xl':'0 25px 50px -12px rgba(0, 0, 0, 0.25);'
      },
      lineHeight:{
        '50' :'4.17rem'
      },
      width: {
        '100':'35rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
