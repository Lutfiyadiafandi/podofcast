/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "Montserrat Alternates": ["Montserrat Alternates", "sans-serif"],
    },
    screens: {
      sm: "420px",

      md: "768px",

      md2: "850px",

      lg: "1024px",

      xl: "1160px",

      xxl: "1440px",
    },
    extend: {
      fontSize: {
        heading1: ["96px", "96px"],
        "heading1-mobile": ["59.3px", "71.16px"], // MOBILE
        heading2: ["59.3px", "71.16px"],
        "heading2-mobile": ["36.65px", "51.31px"], // MOBILE
        heading3: ["36.65px", "51.31px"],
        "heading3-mobile": ["24px", "30px"], // MOBILE
        "type-xl": ["22.65px", "31.71px"],
        "type-xl-mobile": ["20px", "28px"], // MOBILE
        "type-l": ["16px", "25.6px"],
        "type-m": ["14px", "22.4px"],
        "type-s": ["12px", "19.2px"],
        // px-4 md:px-6 lg:px-5 xxl:px-0
      },
      boxShadow: {
        btn: "3px 3px 0 0 rgba(0, 0, 0, 0.25)",
        "btn-large": "6px 6px 0 0 rgba(0, 0, 0, 0.25)",
        box: "6px 6px 0 0 rgba(205, 70, 49, 1)",
        boxblue: "6px 6px 0 0 rgba(129, 173, 200, 1)",
        card: "12px 12px 0 0 rgba(129, 173, 200, 1)",
        cardblue: "10px 10px 0 0 rgba(129, 173, 200, 1)",
        cardblack: "10px 10px 0 0 rgba(0, 0, 0, 1)",
      },
      gridTemplateRows: {
        gallery: "repeat(2, minmax(353px, 353px))",
      },
      colors: {
        primary: "#CD4631",
        secondary: "",
        tertiary: "",
        paragraph: "",
        "background-pink": "#F7EDE8",
        "background-blue": "#EDF3F7",

        "basic-100": "#FFFFFF",
        "basic-500": "#4D4D4D",
        "basic-900": "#000000",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-100%)", opacity: "0" },
        },
      },
      animation: {
        slideDown: "slideDown 0.3s ease-out forwards",
        slideUp: "slideUp 0.3s ease-out forwards",
      },
    },
  },
  plugins: [],
};
