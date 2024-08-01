
import type { Config } from "tailwindcss";

const config: Config = {

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/background.svg')",
      },
      keyframes: {
        contact: {
          "0%": { opacity: "1" },
          "16.667%": { opacity: "1" },
          to: { opacity: "1" },
          "33.333%": { opacity: "0 " },
          "83.333%": { opacity: "0" },
        },
        build: {
          "0%": { opacity: "0" },
          to: { opacity: "0" },
          "33.333%": { opacity: "1" },
          "50%": { opacity: "1" },
          "16.667%": { opacity: "0" },
          "66.667%": { opacity: "0" },
        },
        deliver: {
          "0%": { opacity: "0" },
          "50%": { opacity: "0" },
          to: { opacity: "0" },
          "66.667%": { opacity: "1" },
          "83.333%": { opacity: "1" },
        },
        drop: {
          "0%": {
            opacity: "0",
            transform: "translateY(0px) scale(1.2)",
          },
          "80%": {
            opacity: "0.5",
            transform: "translateY(50px)",
          },
          "100%": {
            opacity: "0.1",
            transform: "translateY(50px)",
          },
        },
      },
      animation: {
        contact: "contact 8s ease infinite normal none running",
        build: "build 8s ease infinite normal none running",
        deliver: "deliver 8s ease infinite normal none running",
        drop: "drop 2s  infinite ",
        drop2: "drop 4s 4s  infinite ",
        drop3: "drop 3s 6s  infinite ",
      },
    },
    fontFamily: {
      "dancing-font": ["Dancing Script", "cursive"],
    }
  },
  plugins: [],
};

export default config;
