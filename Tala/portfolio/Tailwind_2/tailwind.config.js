/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      fontFamily: {
        Inter: "'Inter', sans-serif"
      },
      colors: {
        brightRed: 'hsl(12,88%,59%)' ,
        brightRedLight: 'hsl(12, 88%, 69%)', 
        brightRedSuplight: 'hsl(12, 88%, 95%)' ,
        darkBlue: 'hsl(228, 39%, 23%)', 
        darkGrayishBlue: 'hsl(227, 12%, 61%)', 
        veryDarkBlue: 'hsl(233, 124, 13%)' , 
        veryPaleRed: 'hsl(13, 100%, 96%)', 
        veryLightGray: 'hsl(0, 0, 98%)',
        Mybg: '#E8E8DF' ,
        Mygray: '#929292' ,
        Mydarkgray: '#313230' ,
        Myorange: '#FE6241' ,
        MYblack: '#000000' ,
        Mypink: '#EBC5C0' ,
      }
    },
  },
  plugins: [],
}
