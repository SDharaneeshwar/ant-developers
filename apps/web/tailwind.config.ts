import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#002041",
          navySoft: "#00284F",

          orange: "#FE6848",
          orangeDark: "#FA9D68",

          beige: "#AAC2D1",
          beigeSoft: "#F0F1F3",

          slate: "#606778",

          white: "#FFFFFF",

          lightBlue: "#AAC2D1",
        },
      },

      boxShadow: {
        glass: "0 8px 32px rgba(0, 32, 65, 0.22)",
        premium: "0 20px 60px rgba(0, 32, 65, 0.32)",
      },

      borderRadius: {
        "3xl": "1.75rem",
      },

      backgroundImage: {
        "hero-glow": `
          radial-gradient(
            circle at top,
            rgba(254, 104, 72, 0.18),
            transparent 35%
          ),
          radial-gradient(
            circle at bottom right,
            rgba(170, 194, 209, 0.08),
            transparent 30%
          ),
          linear-gradient(
            180deg,
            #002041 0%,
            #00284F 45%,
            #002041 100%
          )
        `,
      },
    },
  },

  plugins: [],
};

export default config;