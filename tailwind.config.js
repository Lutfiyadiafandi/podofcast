/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
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

      "2xl": "1536px",
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
        ku: "0px 4px 8px 0px #00000033",
      },
      colors: {
        primary: "#FFC265",
        secondary: "#C1FFFA",
        background: "#F3FFFE",

        // NEUTRAL
        "basic-50": "#FFFFFF",
        "basic-100": "#3F3F3F",
        "basic-200": "#4A4A4A",
        "basic-300": "#454545",
        "basic-400": "#525252",

        // "basic-500": "#737373",
        // "basic-600": "#525252",
        // "basic-700": "#404040",
        // "basic-800": "#262626",
        // "basic-900": "#171717",
      },
    },
  },
  plugins: [],
};
