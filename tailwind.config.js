/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff5f7',
          100: '#fce8ed',
          200: '#fbd5e0',
          300: '#f9a8c1',
          400: '#f47ba0',
          500: '#f05c87',
          600: '#e11d48',
        },
        cream: {
          50: '#fdfaf6',
          100: '#fcf5ed',
          200: '#f8e8d5',
          300: '#f5dbbd',
          400: '#f2cea5',
          500: '#efc18d',
        },
      },
      sans: ['Quicksand', 'sans-serif'],  // Soft, rounded, friendly
        serif: ['Playfair Display', 'serif'],  // Elegant and stylish
        script: ['Dancing Script', 'cursive'],  // Handwritten playful font
      },
    },
  },
  plugins: [],
};
