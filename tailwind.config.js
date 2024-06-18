/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Nunito: ["Nunito", "sans-serif"],
      Kufam: ["Kufam", "sans-serif"],
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
        heading1: ["60px"],
        heading2: ["54px"],
        heading3: ["48px"],
        heading4: ["42px"],
        heading5: ["32px"],
        heading6: ["28px"],
        "type-xxl": ["24px"],
        "type-xl": ["20px"],
        "type-l": ["16px"],
        "type-m": ["14px"],
        "type-s": ["12px"],
        "type-xs": ["10px"],
        "label-m": ["8px"],
      },
      boxShadow: {
        package: "0 4px 20px 0 rgba(29, 165, 153, 0.15)",
        facilities: "0 4px 20px 0 rgba(0, 0, 0, 0.12)",
      },
      gridTemplateRows: {
        gallery: "repeat(2, minmax(353px, 353px))",
      },
      colors: {
        primary: "#FFC265",
        secondary: "#C1FFFA",
        "secondary-dark": "#1DA599",
        background: "#F3FFFE",

        "basic-50": "#FFFFFF",
        "basic-100": "#3F3F3F",
        "basic-200": "#4A4A4A",
        "basic-300": "#454545",
        "basic-400": "#525252",
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
