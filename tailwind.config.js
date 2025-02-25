 /** @type {import('tailwindcss').Config} */
 export default {
       content: ["./src/**/*.{html,js}"],
        theme: {
          extend: {
            colors : {
              //Các này mình tự định nghĩa chứ tailwind Không có
              'light-coffee': "#C89F94"
            }

          },
        },
        plugins: [],
      }