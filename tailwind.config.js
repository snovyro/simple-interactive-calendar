/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#FFFFFF",
        primary: "#FF0831",
        accent: "#FFCCD4",
        neutral: "#060606",
        "soft-gray": "#E6E6E6",
      },
    },
  },
  plugins: [],
};
