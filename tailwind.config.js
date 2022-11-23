/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        DarkCard: "hsl(209, 23%, 22%)",
        DarkBack: "hsl(207, 26%, 17%)",
        LightText: "hsl(200, 15%, 8%)",
        LightInput: "hsl(0, 0%, 52%)",
        LightBack: "hsl(0, 0%, 98%)",
        LightCard: "hsl(0, 0%, 100%)",
        DarkText: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        Nunito: "Nunito Sans",
      },
    },
  },
  plugins: [],
};
