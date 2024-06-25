/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1240px",
      // => @media (min-width: 1280px) { ... }

      xxl: "1440px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontSize: {
        heading1: ["54px"],
        heading2: ["48px"],
        heading3: ["40px"],
        heading4: ["36px"],
        heading5: ["32px"],
        heading6: ["28px"],
        "type-xxl": ["24px"],
        "type-xl": ["22px"],
        "type-l": ["20px"],
        "type-m": ["16px"],
        "type-s": ["14px"],
        "type-xs": ["12px"],
        "label-l": ["10px"],
        "label-m": ["8px"],
      },
      boxShadow: {
        icon: "0 15px 44px 0 rgba(13, 15, 28, 0.12)",
        allinone: "0 10px 60px 0 rgba(38, 45, 118, 0.08)",
        testimoni: "2px 4px 60px 0 rgba(41, 44, 124, 0.1)",
      },
      gridTemplateRows: {
        gallery: "repeat(2, minmax(353px, 353px))",
      },
      colors: {
        primary: "#F48C06",
        secondary: "#2F327D",
        "secondary-dark": "#252641",
        tertiary: "#65DAFF",
        paragraph: "#696984",
        purple: "#525596",
        background: "#FFF2E1",

        "basic-50": "#FFFFFF",
        "basic-100": "#464646",
        "basic-200": "#6C6C6C",
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
