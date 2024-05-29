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
          50: '#f7e9fe', // Light shades
          100: '#efd1fd',
          200: '#e4adfa',
          300: '#d67df5',
          400: '#c14bea',
          500: '#a82bce', // Main color
          600: '#8d20ab',
          700: '#751c8c',
          800: '#631d72',
          900: '#290431', // Dark shades
          switchPalette: 'rgb(31 0 42)', // Dark shades
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
