/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        smallest: "350px",
        small: "450px",
        medium: "500px",
        lg2: "1135px",
        lg3: "1200px",
      },
    },
  },
  plugins: [],
};
