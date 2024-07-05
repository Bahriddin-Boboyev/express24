/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1144px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans serif'],
      },
      colors: {
        'primary-gray': '#f6f6fb',
        'secondary-gray': '#8e8e93',
        'primary-link': '#0391ff',
        'primary-disabled': '#ececee',
        'primary-disabled-text': '#aeaeb5',
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
      boxShadow: {
        headerSelect: '0 5px 25px rgba(14, 14, 14, .1)',
        modalBtn: '0 -1px 12px rgba(0,0,0,.08)',
      },
    },
  },
  plugins: [],
};
