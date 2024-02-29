/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#003366', 
        'gold': '#D4AF37',      /* lighter gold - FFD700*/ 
      },
    },
  },
  plugins: [],
}

