export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0f0f1b",
        panel: "#1a1a2e",
        neonBlue: "#00ffff",
        neonPink: "#ff00c8",
        neonGreen: "#00ffb3",
        neonYellow: "#ffe600",
        grayBg: "#1a1a1a",
        grayPanel: "#2b2b2b",
      },
      fontFamily: {
        grotesk: ["'Space Grotesk'", "sans-serif"], // 👈 Add this
        futuristic: ["Orbitron", "sans-serif"],
        tech: ["Rajdhani", "sans-serif"],
      },
    },
  },
  plugins: [],
};
