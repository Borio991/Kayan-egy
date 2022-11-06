module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        heading: '#d71d1d',
        cta: '#fff',
        dark1: '#202531',
        dark2: '#081017',
        darkColor: '#282c25',
        pinkish: '#ffd6c0',
        greenish: '#2eca6a',
        redish: '#ff5f3c',
        textColorLight: '#000',
        textColorDark: '#fff',
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),
    require('daisyui'),
  ],
}
