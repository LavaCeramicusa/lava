/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: ['class', '[dark-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: 'rgb(var(--color-primary) / .3)',
          DEFAULT: 'rgb(var(--color-primary) / 1)',
          dark: 'rgb(var(--color-primary) / .8)',
        },
        secondary: {
          light: 'rgb(var(--color-secondary) / .3)',
          DEFAULT: 'rgb(var(--color-secondary) / 1)',
          dark: 'rgb(var(--color-secondary) / .7)',
        },
      },
    },
  },
  plugins: [],
};
