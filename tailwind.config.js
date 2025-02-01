/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Se você tiver esse arquivo, inclua
    "./src/**/*.{js,jsx,ts,tsx}", // Arquivos dentro da pasta src (React)
  ],
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
