/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          purple: '#8B5CF6',
          blue: '#6366F1',
          pink: '#EC4899',
          orange: '#F59E0B',
        },
        neutral: {
          light: '#f7f7f9',
        }
      },
    },
  },
  plugins: [],
}
