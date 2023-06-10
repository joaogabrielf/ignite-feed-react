/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        gray: {
          100: '#e1e1e6',
          300: '#c4c4cc',
          400: '#8d8d99',
          600: '#323238',
          700: '#29292e',
          800: '#202024',
          900: '#121214',
        },
        green: {
          300: '#00B37E',
          500: '#00875f',
        },
        red: {
          500: '#F75A68',
        },
      },
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
    },
  },

  plugins: [],
}
