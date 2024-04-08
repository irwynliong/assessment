// craco.config.js
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  style: {
    postcss: {
      plugins: [
        tailwindcss('./src/tailwind.css'), // path to your tailwind.css file
        autoprefixer,
      ],
    },
  },
};