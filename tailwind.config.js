/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0f0f1b", // Deep space
        panel: "#1a1a2e", // UI card/dark glass
        neonBlue: "#00ffff", // Electric cyan
        neonPink: "#ff00c8",
        neonGreen: "#00ffb3",
        neonYellow: "#ffe600",
      },
      fontFamily: {
        futuristic: ["Orbitron", "sans-serif"],
        tech: ["Rajdhani", "sans-serif"],
      },
    },
  },
  plugins: [],
};
