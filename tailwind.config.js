/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Rajdhani", "system-ui", "sans-serif"],
        mono: ["Orbitron", "monospace"],
      },
      colors: {
        // Anime palette
        midnight: {
          50:  "#e8e8f5",
          100: "#c5c5e8",
          200: "#9898d4",
          300: "#6b6bbf",
          400: "#4a4aaf",
          500: "#2a2a9e",
          600: "#1e1e7a",
          700: "#141455",
          800: "#0d0d3a",
          900: "#07071f",
          950: "#030310",
        },
        neon: {
          pink:   "#ff2d78",
          cyan:   "#00f5ff",
          gold:   "#ffd700",
          purple: "#bf5fff",
          green:  "#00ff9f",
        },
        // Keep primary/secondary for compatibility
        primary: {
          50:  "#fdf0f5",
          100: "#fbd8e7",
          200: "#f7a8c8",
          300: "#f275a5",
          400: "#ee4485",
          500: "#ff2d78",
          600: "#d41f5f",
          700: "#a91249",
          800: "#7d0b34",
          900: "#52061f",
        },
        secondary: {
          50:  "#f0f0ff",
          100: "#dedeff",
          200: "#c0bfff",
          300: "#9d9bff",
          400: "#7b78ff",
          500: "#5a57e8",
          600: "#3e3bcc",
          700: "#2a28a0",
          800: "#1a1875",
          900: "#0d0d3a",
        },
      },
      screens: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        104: "26rem",
        112: "28rem",
        128: "32rem",
      },
      animation: {
        "fade-in":        "fadeIn 0.5s ease-in-out",
        "slide-up":       "slideUp 0.5s ease-out",
        "glow-pulse":     "glowPulse 2s ease-in-out infinite",
        "float":          "float 6s ease-in-out infinite",
        "shimmer":        "shimmer 2.5s linear infinite",
        "spin-slow":      "spin 8s linear infinite",
        "ping-slow":      "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
        "border-glow":    "borderGlow 3s ease-in-out infinite",
        "typewriter":     "typewriter 3s steps(30) 1s forwards",
        "sakura-fall":    "sakuraFall linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%":   { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)",    opacity: "1" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 10px rgba(255,45,120,0.4), 0 0 20px rgba(255,45,120,0.2)" },
          "50%":      { boxShadow: "0 0 20px rgba(255,45,120,0.8), 0 0 40px rgba(255,45,120,0.4), 0 0 60px rgba(255,45,120,0.2)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        borderGlow: {
          "0%, 100%": { borderColor: "rgba(255,45,120,0.5)" },
          "33%":      { borderColor: "rgba(0,245,255,0.5)" },
          "66%":      { borderColor: "rgba(255,215,0,0.5)" },
        },
      },
      backgroundImage: {
        "anime-gradient": "linear-gradient(135deg, #07071f 0%, #0d0d3a 50%, #14142a 100%)",
        "neon-gradient":  "linear-gradient(135deg, #ff2d78, #bf5fff, #00f5ff)",
        "gold-gradient":  "linear-gradient(135deg, #ffd700, #ff9500)",
        "card-glass":     "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
        "shimmer-bg":     "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "neon-pink":   "0 0 20px rgba(255,45,120,0.5), 0 0 40px rgba(255,45,120,0.25)",
        "neon-cyan":   "0 0 20px rgba(0,245,255,0.5), 0 0 40px rgba(0,245,255,0.25)",
        "neon-gold":   "0 0 20px rgba(255,215,0,0.5), 0 0 40px rgba(255,215,0,0.25)",
        "neon-purple": "0 0 20px rgba(191,95,255,0.5), 0 0 40px rgba(191,95,255,0.25)",
        "glass":       "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)",
        "card-hover":  "0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(255,45,120,0.15)",
      },
    },
  },
  plugins: [],
};
