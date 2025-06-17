/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.mask-gradient': {
          maskImage: 'linear-gradient(to right, transparent, black 75%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 75%)',
        },
      });
    }),
  ],
};
