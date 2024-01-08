/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'blue-dark-uelz': '#173371',
        'blue-soft-uelz': '#1C80BD',
        'green-soft-uelz': '#E9F7F3',
        'green-clearer-uelz': '#7EECD0',
        'green-clear-uelz': '#38D4AD',
        'green-dark-uelz': '#0CB075',
        'yellow-soft-uelz': '#FFFBDE',
        'aquamarine-uelz': '#A9DACC',
        'gray-softer-uelz': '#DBDDE0',
        'gray-soft-uelz': '#9CA3AF',
        'gray-dark-uelz': '#504A4A'
      }
    }
  },
  plugins: []
}
