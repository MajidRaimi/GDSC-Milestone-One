/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },

    extend: {
      colors: {
        brightRed: 'hsl(12, 80%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%) ',
        brightRedSupLight: 'hsl (12, 88%, 95%) ', 
        darkBlue: 'hs1(228, 39%, 23%) ',
        darkGrayishBlue: 'hsl (227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%) ',
        veryPaleRed: 'hsl(13, 100%, 96%) ',
        veryLightGray: 'hs1(0, 0%, 98%) ',
 
        brown1: '#9A6240',
        brown2: '#7a5a0775',
        begie:  '#9a604012',
        body: '#edead8',
        bgImg: '#DFDBC8'
       },

        spacing: {
          'bw': '192px',
          'bh': '52px',
          'bl': '940px',
          'bt': '214px',

          'mw': '600px',
          'mh': '323',
          'ml': 'calc(50% - 492px/2 + 381px)',
          'mb': '100px'
        },
        borderRadius: {
          '4xl': '2rem',
        },

      

   

    
 
      

     
    },
  },
  plugins: [],
} 


