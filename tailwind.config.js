/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: "#050816",           // Dark background
        secondary: "#aaa6c3",         // Soft secondary text
        tertiary: "#151030",          // Slightly lighter background
        neonPink: "#ff00ff",          // Neon pink for accents
        neonCyan: "#00ffff",          // Neon cyan for highlights
        neonPurple: "#a020f0",        // Neon purple for buttons/cards
        neonYellow: "#ffff00",        // Neon yellow for highlights
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Main font
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35", // Custom card shadow
        neon: "0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff",   // Neon effect for pink
        neonCyan: "0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff", // Neon effect for cyan
        neonPurple: "0 0 10px #a020f0, 0 0 20px #a020f0, 0 0 30px #a020f0", // Neon purple shadow
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/herobg.png')", // Custom hero background
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',  // Slow pulse animation for neon glow
        'bounce-slow': 'bounce 3s infinite',            // Slow bounce for effects
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}