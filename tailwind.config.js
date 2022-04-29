module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        white: 'white',
        black: 'black',
        red: 'red',
        pink: '#e1e',
        blue: 'blue',
      },
      spacing: {
        '2xs': '.25rem',
        xs: '.5rem',
        sm: '1rem',
        md: '2rem',
        lg: '3.5rem',
        xl: '7rem',
        pg: '7.5%',
        btn: {
          sm: '6.25rem',
          lg: '9.5rem',
          'p-sm': '.25rem 1rem',
          'p-lg': '.5rem 1.5rem',
        },
      },
      borderRadius: {
        sm: '.4rem',
        lg: '1.5rem',
      },
      screens: {
        xl: { max: '1100px' },
        lg: { max: '900px' },
        mob: { max: '700px' },
        sm: { max: '500px' },
      },
      transitionDuration: {
        sm: '.25s',
        md: '.4s',
      },
      fontFamily: { default: `'Nunito Sans', sans-serif` },
      fontSize: {
        default: '16px',
        'default-mob': '14px',
        h1: '1.5rem',
        h2: '1.175rem',
        h3: '1rem',
        h4: '1rem',
        h5: '1rem',
        h6: '1rem',
        p: '.8rem',
        li: '1rem',
        a: '1rem',
      },
    },
  },
  plugins: [],
};
