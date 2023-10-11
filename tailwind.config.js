/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        fiftyPixels: "50px",
        twentyFourPixels: "24px",
        twentyEightPixels: "28px",
        thirtyTwoPixels: "32px",
        twelvePixels: "12px",
        thirteenPixels: "13px",
        fourteenPixels: "14px",
        sixteenPixels: "16px",
        eighteenPixels: "18px",
      },
      height: {
        fiftyPixels: "50px",
      },
      width: {
        fifteenPercent: "15%",
        threeTwentyPixels: "320px",
        fourHundredPixels: "400px",
      },
      maxWidth: {
        thirteenHundredPixels: "1300px",
      },
      minWidth: {
        oneHundredPercent: "100%",
      },
      padding: {
        sixtyPixels: "60px",
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
