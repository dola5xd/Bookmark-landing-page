/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }
      desktop: "1240px",
      // => @media (min-width: 1240px) { ... }
    },
    extend: {
      colors: {
        // ### Primary

        Soft_Blue: ["hsl(231, 69%, 60%)"],
        Soft_Red: ["hsl(0, 94%, 66%)"],

        // ### Neutral

        Grayish_Blue: ["hsl(229, 8%, 60%)"],
        Dark_Blue: ["hsl(229, 31%, 21%)"],
      },

      fontFamily: {
        Public_Sans: ["Rubik"],
      },
      keyframes: {
        img: {
          "0%, 100%": { transform: "translateY(-5%)" },
          "50%": { transform: "translateY(0%)" },
        },
      },
      animation: {
        img: "img 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
