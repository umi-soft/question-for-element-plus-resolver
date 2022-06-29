/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    container: {
      // 使容器在默认情况下居中
      center: true,
    },
    extend: {},
  },
  plugins: [],
}
