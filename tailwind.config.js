export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        starScroll: "starScroll 80s linear infinite", // slower duration ✅
        cloudDrift: "cloudDrift 60s linear infinite",
        twinkle: "twinkle 2s ease-in-out infinite",
      },
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
      keyframes: {
        starScroll: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 300px" }, // smaller scroll distance ✅
        },
        cloudDrift: {
          "0%": { transform: "translateX(-10%)" },
          "100%": { transform: "translateX(110%)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
