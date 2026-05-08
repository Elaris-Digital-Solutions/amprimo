/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#e8edf4',
          100: '#c5d0e3',
          200: '#9fb0cf',
          300: '#7891bb',
          400: '#5a7aac',
          500: '#3c639d',
          600: '#2d4f87',
          700: '#1e3a6d',
          800: '#132848',
          900: '#0D1B2A',
          950: '#080f1a',
        },
        gold: {
          300: '#93c5e8',
          400: '#5fa3cc',
          500: '#2b7bb5',
          600: '#1a5e92',
          700: '#144c7a',
        },
        cream: '#F9F7F2',
      },
      fontFamily: {
        serif:  ['Playfair Display', 'Georgia', 'serif'],
        sans:   ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      },
      animation: {
        'fade-up':    'fadeUp 0.7s ease-out forwards',
        'fade-in':    'fadeIn 0.6s ease-out forwards',
        'slide-left': 'slideLeft 0.7s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideLeft: {
          '0%':   { opacity: '0', transform: 'translateX(32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
