import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          beige: "#F5E6D3",
          beigeSoft: "#FFF7ED",
          orange: "#E67E22",
          orangeDark: "#C96A16",
          navy: "#0F172A",
          navySoft: "#1E293B",
          slate: "#94A3B8"
        }
      },
      boxShadow: {
        glass: "0 8px 32px rgba(15, 23, 42, 0.18)",
        premium: "0 20px 60px rgba(15, 23, 42, 0.28)"
      },
      borderRadius: {
        "3xl": "1.75rem"
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top, rgba(230,126,34,0.16), transparent 35%), radial-gradient(circle at bottom right, rgba(245,230,211,0.08), transparent 30%)"
      }
    }
  },
  plugins: []
};

export default config;