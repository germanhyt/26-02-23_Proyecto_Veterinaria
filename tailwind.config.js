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
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "card-slide": "url('https://i.postimg.cc/kgJ6sbTR/image-9.png')",
        "home-slide-mobile":
          "url('https://i.postimg.cc/vmDbcv4G/section-home-hero-movil.png')",
        "home-slide-desktop":
          "url('https://i.postimg.cc/nLbJnx62/slider-home.png')",
      },
      colors: {
        "primary-100": "#FFCBE0",
        "primary-200": "#FF3586",
        "primary-300": "#9A2353",
        "primary-400": "#13020C",
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
