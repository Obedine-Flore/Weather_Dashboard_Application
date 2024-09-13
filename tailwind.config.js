/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./dist/*",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
    extend: {},
  },
  plugins: [],
}

