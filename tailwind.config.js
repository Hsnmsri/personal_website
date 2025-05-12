/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        primary: {
          DEFAULT: '#FF9100'
        },
        secondary: {
          DEFAULT: '#A2A2A2'
        },
        dark: {
          DEFAULT: '#040405'
        },
      },
    },
  },
  plugins: [],
}
