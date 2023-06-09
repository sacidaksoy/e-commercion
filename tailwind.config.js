/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "JIT",
  theme: {
    extend: {
      colors: {
        "pink-cc": "#FB2E86",
        "off-navy-blue": "#3f509e",
        "navy-blue": "#151875",
        "purple-cc": "#7e33e0",
        "off-purple": "#9f63b5",
        "red-cc": "#fb2448",
        "blue-cc": "#2f1ac4",
        "sky-blue": "#f2f5ff",
        "pantone-purple": "#e0d3f5",
      },
      fontFamily: {
        JosefinSans: ["Josefin Sans", "serif"],
        Lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [
    // require('@tailwindcss/line-clamp'),
    // require('@tailwindcss/forms'),
  ],
}