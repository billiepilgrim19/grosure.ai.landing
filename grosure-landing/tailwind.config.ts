import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Based on Flutter app theme (grosure.ai/lib/main.dart)
        primary: "#2D2D2D",        // Dark charcoal - main text and buttons
        secondary: "#8A8A8A",      // Medium gray - secondary text
        background: "#FFFFF8",     // Off-white/cream - main background
        surface: "#F8F8F8",        // Very light gray - card backgrounds
        border: "#E8E8E8",         // Light gray - borders and dividers
        success: "#00C896",        // Emerald green - success states
        accent: "#00C896",         // Emerald green - primary accent
        error: "#FF6B6B",          // Coral red - errors
        warning: "#FFC107",        // Amber - warnings
        star: "#FFB547",           // Warm gold - highlights
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        'sm': '8px',
        'DEFAULT': '12px',
        'md': '14px',
        'lg': '16px',
        'xl': '20px',
        '2xl': '24px',
      },
    },
  },
  plugins: [],
};

export default config;
