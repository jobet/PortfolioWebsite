/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundColor: '#ecf1f7',
        formColor: '#ecf1f7',
      },
      fontFamily: {
        sans: 'Mukta Mahee, sans-serif',
        serif: 'Unbounded, sans-serif',
      },
      screens: { sm: "480px", md: "768px", lg: "976px", xl: "1440pd" },
      animation: {
        fadeIn: "fadeIn 1.5s",
        bounce:
          "bounce 1s alternate ease-in-out infinite",
        slideUp: "slideUp 0.5s",
        slideUpEaseInOut: "slideUp 0.5s ease-in-out",
        slideUpCubiBezier: "slideUp 1s cubic-bezier(0.165, 0.84, 0.44, 1)",
      },
      animationDelay: {
        0: "0s",
        2: "0.2s",
        4: "0.4s",
        6: "0.6s",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideUp: {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
        bounce: {
          from: { transform: "translateY(10px)" },
          to: { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
}
