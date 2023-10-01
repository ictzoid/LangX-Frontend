/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        fiftyPixels: "50px",
      },
      height: {
        fiftyPixels: "50px",
      },
      colors: {
        primaryColor: "#713586",
        secondaryColor: "#FF7536",
        GrayColor1: "#616161",
        GrayColor2: "#B0B0B0",
      },
      borderColor: {
        primaryColor: "#713586",
        secondaryColor: "#FF7536",
        GrayColor1: "#616161",
        GrayColor2: "#B0B0B0",
      },
      btnTextColor: {
        primaryColor: "#713586",
        secondaryColor: "#FF7536",
      },
    },
  },
  plugins: [],
};
