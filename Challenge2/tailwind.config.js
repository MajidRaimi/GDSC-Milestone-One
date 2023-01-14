/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      colors: {
        primary: "#090E34",
        secondary: '#11184F'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
       },
       screens:{
        "sm": "480px",
        "lop": "1030px"
       },
       width: {
        '600': '600px',
        '500': '500px',
        '550': '550px',
        '300': '300px',
        '128': '800px',
        '700': '700px',
        '1000': '1000px',
        '1080': '1080px',
        '1440': '1440',
      },
      height: {
        '600': '600px',
        '680': '680px',
        '700': '700px',
        '580': '580px',
        '500': '500px',
        '335': '450px',
        '780':'780px',
        '128':'800px',
        '129': '1000px',
        '88':'88px',
        '480': '480px'
      },
      inset: {
        '300': '300px',
        '350': '350px',
        '400': '400px',
        '450': '450px',
        '500': '500px',
        '600': '600px',
        '550': '550px',
        '115':'115px',
        '390':'390',
      }
    },
  },
  plugins: [],
}
