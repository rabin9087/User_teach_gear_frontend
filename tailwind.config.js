/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.thml","./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows:{
        "[auto, auto, 1fr]": "auto auto 1fr",
      },
    },
  },
  plugins: [
    requestAnimationFrame("@tailwindcss/aspect-ratio"),
  ],
}