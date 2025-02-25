/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'light-coffee': "#C89F94", // Màu tự định nghĩa
      },

      fontFamily: {
        Karla: ['Karla', 'sans-serif'], // Font chữ tùy chỉnh
      },

      keyframes: {
        slideDown: {
          '0%, 100%': { transform: 'translateY(-100%)' },
          '50%': { transform: 'translateY(0%)' },
        },
      },

      animation: {
        slideDown: 'slideDown .4s ease-in-out',
      },
    },
  },

  plugins: [],
};
