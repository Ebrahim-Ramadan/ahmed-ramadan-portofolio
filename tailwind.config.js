/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          50: '#fcf8ee', // Light shades
          100: '#f6ebcf',
          200: '#ecd79b',
          300: '#e3bd66',
          400: '#dca743',
          500: '#d38a2d', // Main color
          600: '#bc6c25',
          700: '#9b4e22',
          800: '#7f3f21',
          900: '#69341e', // Dark shades
          950: '#3b1a0d', // Dark shades
          switchPalette: '#AE8177', // Dark shades
        },
      },
      animation: {
        grid: "grid 15s linear infinite",
        flip: "flip 6s infinite steps(2, end)",
        rotate: "rotate 3s linear infinite both",
      },
      keyframes: {
        grid: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
        flip: {
          to: {
            transform: "rotate(360deg)",
          },
        },
        rotate: {
          to: {
            transform: "rotate(90deg)",
          },
        },
      },
    },

  },
  plugins: [],
};
