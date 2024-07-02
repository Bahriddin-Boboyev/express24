/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans serif'],
      },
      colors: {
        'primary-gray': '#f6f6fb',
      },
      width: {
        inherit: 'inherit',
      },
      gridTemplateColumns: {
        dropdown: 'auto 1fr 16px',
      },
      gridColumn: {
        'span-3': '3',
      },
      padding: {
        base: '14px 16px',
      },
    },
  },
  plugins: [],
};
