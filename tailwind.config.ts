import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#08080a",
        onyx: "#040406",
        carbon: "#121317",
        graphite: "#1c1d22",
        slate: "#2e3038",
        bone: "#e2e3e9",
        fog: "#9194a1",
        "paper-white": "#ffffff",
        copper: "#cc9166",
      },
      backgroundImage: {
        "gradient-gilded":
          "linear-gradient(103deg, rgb(174, 147, 87), rgb(255, 240, 204) 40%, rgb(174, 147, 87) 70%, rgba(189, 157, 79, 0))",
        "radial-highlight":
          "radial-gradient(circle at 50% 0%, rgba(204, 145, 102, 0.12) 0%, rgba(8, 8, 10, 0) 70%)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "DM Serif Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      maxWidth: {
        container: "1216px",
      },
      borderRadius: {
        pill: "9999px",
        card: "12px",
      },
      borderWidth: {
        hairline: "1px",
      },
      boxShadow: {
        subtle: "0 0 0 1px #1c1d22, 0 16px 32px -16px rgba(0, 0, 0, 0.7)",
        gilded: "0 0 25px -5px rgba(204, 145, 102, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
