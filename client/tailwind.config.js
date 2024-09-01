const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Add your existing content paths here
    './src/**/*.{js,jsx,ts,tsx}', // Adjust this to match your project structure
    flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // Add your existing plugins here
    flowbite.plugin(),
  ],
};

