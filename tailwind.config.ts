import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        section: "2.5rem",
        featured: "1.875rem",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "1.5rem",
        },
      },
      letterSpacing: {
        hero: "0.35em",
        section: "0.4em",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
      },
      maxHeight: {
        "mobile-menu": "520px",
      },
      boxShadow: {
        hero: "0 40px 80px rgba(3,15,33,0.45)",
        "card-strong": "0 20px 45px rgba(3,15,33,0.3)",
        "card-soft": "0 18px 40px rgba(3,15,33,0.08)",
        "cta-primary": "0 16px 35px rgba(200,160,51,0.4)",
        "cta-accent": "0 18px 35px rgba(30,190,87,0.35)",
        "cta-secondary": "0 20px 40px rgba(131,58,180,0.35)",
        "sheet": "0 30px 60px rgba(3,15,33,0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
