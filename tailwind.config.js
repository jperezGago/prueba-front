/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'blue-uelz': '#173371',
        'green-clear-uelz': '#38D4AD',
        'green-dark-uelz': '#0CB075'
      }
    }
  },
  plugins: []
}
