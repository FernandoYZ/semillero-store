/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
  ],
  theme: {
    extend: {
        colors: {
            purple: {
                50: '#f3f1ff',
                100: '#ebe5ff',
                200: '#d9ceff',
                300: '#bea6ff',
                400: '#9f75ff',
                500: '#843dff',
                600: '#7916ff',
                700: '#6b04fd',
                800: '#5a03d5',
                900: '#4b05ad',
                950: '#2c0076',
            },
            greenpastel: {
                50: '#f1fde8',
                100: '#e0f9ce',
                200: '#c1f4a2',
                300: '#9aea6c',
                400: '#85e053',
                500: '#57c220',
                600: '#409b15',
                700: '#327615',
                800: '#2b5e16',
                900: '#275017',
                950: '#102c07',
            },

        },
    },
  },
  plugins: [],
}
