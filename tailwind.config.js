module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      body: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
