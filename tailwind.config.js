/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}' /* src folder, for example */,
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        '128': '32rem',
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [require('flowbite/plugin')],
};