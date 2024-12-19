/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        geistSans: ['var(--font-geist-sans)', 'sans-serif'],
        geistMono: ['var(--font-geist-mono)', 'monospace'],
        openSans: ['var(--font-open-sans)', 'sans-serif'], // Add Open Sans here
      },
      colors: {
        "custom-black": "#080814",
        "custom-blue": "#13122F",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
