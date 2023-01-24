/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],

  darkMode: "class",
  theme: {
    fontFamily: {
      body: ["Poppins, sans-serif"],
    },

    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      "main-color": "#3A6BF5",

      "primary-bg": {
        light: "#ffffff",
        dark: "#181A1F",
      },

      "secondary-bg": {
        light: "#f6f8fc",
        dark: "#22252E",
      },

      "primary-text": {
        light: "#081e21",
        dark: "#ffffff",
      },

      "secondary-text": {
        light: "#081e219a",
        dark: "#BDBEC0",
      },
    },

    container: {
      center: true,
      padding: "1.5rem",
    },

    screens: {
      sm: "600px",
      md: "768px",
      lg: "1110px",
    },

    extend: {
      backgroundImage: {
        pattern: "url('/src/images/background-shapes.png')",
      },
    },
  },
  plugins: [],
};

// npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
