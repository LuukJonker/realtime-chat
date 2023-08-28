/** @type {import('tailwindcss').Config} */

export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#181818",
          100: "#1F1F1F",
          200: "#242424",
          300: "#2A2A2A",
          400: "#2F2F2F",
          500: "#353535",
          600: "#3A3A3A",
          700: "#404040",
          800: "#454545",
          900: "#4B4B4B",
        },
        primary: "#BB86FC",
        secondary: "#03DAC6",
        error: "#CF6679",
        onDark: "#FFFFFF",
        onLight: "#000000",
      },
    }
  },
  plugins: []
}
