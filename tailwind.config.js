module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        "max-height": "max-height",
      },
      colors: {
        lime: {
          50: "#f2dbcf",
          100: "#ebcab6",
          200: "#e5b89e",
          300: "#d7946e",
          400: "#c45f25",
          600: "#aa450c",
          800: "#712e08",
          900: "#4c1f05",
          950: "#130801",
        },
        blue: {
          50: "#e6eafd",
          100: "#b3bff9",
          200: "#8094f5",
          300: "#667ff2",
          400: "#3354ee",
          600: "#1a3eec",
          800: "#00198c",
          900: "#000c46",
          950: "#000417",
        },
      },
    },
    plugins: [],
  },
};
