/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        100: "26rem",
        128: "52rem",
      },
    },
  },
  plugins: [],
};
