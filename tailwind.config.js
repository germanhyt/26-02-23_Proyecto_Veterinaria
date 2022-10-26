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
        "card-dog-adopcion-1": "url('https://i.postimg.cc/0jcHJMYs/p2-1-1.png')",
        "card-dog-adopcion-2": "url('https://i.postimg.cc/C1C2S6dd/p2-1.png')",
        "card-dog-adopcion-3": "url('https://i.postimg.cc/Wz2H36J8/p5-1.png')",
        "card-cat-adopcion-1": "url('https://i.postimg.cc/N0wsPPnL/p12.png')",
        "card-cat-adopcion-2": "url('https://i.postimg.cc/0jH5W5gq/13.png')",
        "card-cat-adopcion-3": "url('https://i.postimg.cc/Vv6RXgBk/14.png')",
        "card-kid-adopcion-1": "url('https://i.postimg.cc/L6w6jsBt/15.png')",
        "card-kid-adopcion-2": "url('https://i.postimg.cc/BZhvQpjw/16.png')",
        "card-kid-adopcion-3": "url('https://i.postimg.cc/sDvgBWSf/17.png')",
        "bg-patitas-adpcion-1": "url('/img/section-adapta-apadrina/bg-patitas-skyblue.svg')",
        "bg-patitas-adpcion-2": "url('/img/section-adapta-apadrina/bg-patitas-brown.svg')",
        "bg-patitas-adpcion-3": "url('/img/section-adapta-apadrina/bg-patitas-brow-intense.svg')",
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
