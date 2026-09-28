import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#b3c5dd',
          300: '#8da9c9',
          400: '#6788b5',
          500: '#4267a1',
          600: '#345488',
          700: '#2a4368',
          800: '#1e3252',
          900: '#14223d',
          950: '#0a1528',
        },
        gold: {
          50: '#fbf8f0',
          100: '#f5edd9',
          200: '#ecdab3',
          300: '#e0c187',
          400: '#d4a865',
          500: '#c8964f',
          600: '#b07d3e',
          700: '#8e6232',
          800: '#6f4d28',
          900: '#523b1f',
        },
        graphite: {
          50: '#f6f6f7',
          100: '#e2e2e4',
          200: '#c4c4c8',
          300: '#9e9ea6',
          400: '#76767f',
          500: '#5a5a63',
          600: '#47474e',
          700: '#3a3a40',
          800: '#2e2e33',
          900: '#232327',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.6s ease-out forwards',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
