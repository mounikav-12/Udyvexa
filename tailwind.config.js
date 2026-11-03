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
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7', // vibrant cyan/sky
          700: '#0369a1',
          800: '#075985',
          900: '#072635', // Deep Petrol
          ice: '#f0f6f8', // Soft glacier mist base canvas
          mist: '#e5eff3', // Alternating section tone
          petrol: '#072635', // Primary rich dark text & accents
          card: '#ffffff', // Card surface
          border: '#d2e5ed', // Subtle tech border
          cyan: '#1fa7c6', // CTA gradient start
          indigo: '#4f75d9', // CTA gradient mid
          accent: '#8274ff', // CTA gradient end
          navy: '#041924', // Deep footer
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 8px 30px rgba(7, 38, 53, 0.06)',
        'card-hover': '0 16px 36px rgba(7, 38, 53, 0.12)',
        'float': '0 20px 40px -15px rgba(31, 167, 198, 0.3)',
        'glow-cyan': '0 0 25px rgba(31, 167, 198, 0.25)',
        'glow-btn': '0 10px 25px -5px rgba(79, 117, 217, 0.35)',
      }
    },
  },
  plugins: [],
}
