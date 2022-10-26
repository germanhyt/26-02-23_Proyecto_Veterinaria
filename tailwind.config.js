/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/*.{html,php}",
    "./pages/**/*.{html,php}",
    "./components/*.{html,php}",
    "*.{html,php}",
  ],
  theme: {
    fontFamily: {
      display: ["Poppins", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "card-slide": "url('https://i.postimg.cc/kgJ6sbTR/image-9.png')",
      },
      colors: {
        "primary-100": "#5F504D",
        "primary-200": "#958472",
        "primary-300": "#57B6B2",
        "primary-400": "#E8FF59",
        "primary-500": "#E1FFFE",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "4.5rem",
        },
      },
      fontSize: {
        "9xl": ["8rem", { lineHeight: "1" }],
        mxl: ["2rem", { lineHeight: "3.125rem" }],
        bxl: ["1.75rem", { lineHeight: "2.5rem" }],
        txl: ["1.25rem", { lineHeight: "1.563rem" }],
        ssl: ["0.87rem", { lineHeight: "1.563rem" }],
      },
      borderRadius: {
        brAll: "20px",
      },
    },
  },
  plugins: [],
};
