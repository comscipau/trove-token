/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        pc: "url('/src/assets/bg_lg.png')",
        mobile: "url('/src/assets/bg_mobile.png')",
      },
      boxShadow: {
        selectFRMShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      backgroundSize: {
        stretch: "100% 100%",
      },
    },
  },
  plugins: [],
};
