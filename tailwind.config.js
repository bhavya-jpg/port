/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        red: { DEFAULT: '#f03e2f', dark: '#c42a1d' },
        black: '#0a0a0a',
        pink: '#f7b3c2',
        sky: '#6ac4ed',
        card: {
          pink: '#f7b3c2',
          blue: '#6ac4ed',
          red: '#f03e2f',
        },
        skin: '#f5c5a3',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
