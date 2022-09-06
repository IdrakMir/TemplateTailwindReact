/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange":"#ffa000",
        "lightgreen":"#ccfabc",
        "darkyellow":"#f7b011",
        "blue":"#00838f",
        "grey":"#6c7373",
        "lightgrey":"#f2eee4",
        "brightnesgrey":"#d7e6e7",
        "yellow":"#ffecb3",
        "darkyellow":"#ffc83d",
        "brightnesyellow":"#fffbf0",
        "darkyellow2":"#ffeab5",
        "blue3":"#b2ebf2",
        "blue2":"#3aa0aa",
        "blue4":"#00BCD4",
        "brigthnesblue":"#b2ebf2",
        "lightblue":"#eafafb",
        "error": "#ea4e2c",
        "success": "#3fbe61",
        "info": "#006de3"
      },
      animation: {
        "toast": "appear 0.3s forwards, disappear 0.3s 2.5s forwards"
      },
      keyframes: {
        appear: {
          '0%': {
            maxHeight: 0,
            opacity: 0,
            right: "-100%"
          },
          '100%': {
            maxHeight: "160px",
            opacity: 1,
            right: "20px"
          },
        },
        disappear: {
          '0%': {
            maxHeight: "160px",
            opacity: 1,
            right: "20px"
          },
          '100%': {
            maxHeight: 0,
            opacity: 0,
            right: "-100%"
          },
        }

      }
    },
  },
  plugins: [],
}
