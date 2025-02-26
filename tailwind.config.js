// Các class dùng nhiều viết trong đây


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'coffee':{
        50:"E8D6D0",
        200: "#C89F94", // Màu tự định nghĩa //light-coffee  
        400:"#a25f4b",
        600:"#744848"
        }
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

      //Anh dung nhieu lan

     
    },
  },

  plugins: [],
};
