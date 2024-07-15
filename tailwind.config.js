/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#80DEF2',
        customText: '#003F5F', 
      },
      fontFamily: {
        'segoe-ui': ['Segoe UI', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
