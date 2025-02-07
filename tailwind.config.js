/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0F0E17", // Cor personalizada
        textColor: "#FFFFFE",
        buttonColor: "#FF8906",
      },
    },
  },
  plugins: [],
};
