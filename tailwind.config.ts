import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        toss: {
          blue: "#3182F6",
          "blue-dark": "#1B64DA",
          black: "#191F28",
          gray: {
            50: "#F4F4F4",
            100: "#E5E8EB",
            200: "#B0B8C1",
            300: "#8B95A1",
            400: "#6B7684",
            500: "#4E5968",
            600: "#333D4B",
          },
        },
      },
      fontFamily: {
        sans: [
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
