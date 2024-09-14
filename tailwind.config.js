/** @type {import('tailwindcss').Config} */
import animated from 'tailwindcss-animated';
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
  plugins: [animated],
}

