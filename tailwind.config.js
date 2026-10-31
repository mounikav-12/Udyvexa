/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#0066f6', // Core Udyvexa vibrant blue
          700: '#0052cc',
          800: '#073c91',
          900: '#0b2559',
          navy: '#0b192e', // Deep footer navy
          dark: '#081220',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 8px 30px rgba(0, 0, 0, 0.06)',
        'float': '0 20px 40px -15px rgba(0, 102, 246, 0.25)',
      }
    },
  },
  plugins: [],
}
