/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        figtree: "Figtree",
      },
      margin: {
        0.1: "1px",
      },
      minWidth: {
        300: "300px",
      },
      maxWidth: {
        15: "60px",
        350: "350px",
        1040: "1040px",
      },
      minHeight: {
        66: "66vh",
      },
      borderWidth: {
        1: "1px",
      },
      height: {
        18: "70px",
        89: "80vh",
      },
      padding: {
        1.4: "6px",
        1.5: "7px",
        2.5: "10px",
        3.2: "14px",
      },
      fontSize: {
        xxs: "9px",
      },
      zIndex: {
        1: "1",
        100: "100px",
      },
      inset: {
        "-0.75": "-0.175rem",
      },
      colors: {
        "vampire-black": "#050509",
        "russian-violet": "#230c33",
        "deep-violet": "#894CFB",
        "weird-blue": "#131448",
        "cetacean-blue-1": "#04052e",
        "cetacean-blue-2": "#2A0160",
        "silver-chalice": "#b0acae",
        "dark-blue": "#000022",
      },
      animation: {
        bounce: "bounce 0.8s infinite alternate",
      },
      keyframes: {
        bounce: {
          to: {
            opacity: 0.1,
            transform: "translate3d(0, -1rem, 0)",
          },
        },
      },
    },
  },
  plugins: [],
};
