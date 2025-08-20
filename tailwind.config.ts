import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import tailwindcssAspectRatio from "@tailwindcss/aspect-ratio";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
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
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // NutrEmotion custom colors
        nutr: {
          green: {
            50: '#f2f8f3',
            100: '#e6f1e8',
            200: '#cce3d1',
            300: '#b3d5ba',
            400: '#80b98c',
            500: '#4d9d5e', // Main brand green
            600: '#458d55',
            700: '#3a7647',
            800: '#2e5e38',
            900: '#254d2e',
          },
          purple: {
            50: '#f7f4fa',
            100: '#efe8f5',
            200: '#dfd1eb',
            300: '#cfbae1',
            400: '#af8ccd',
            500: '#8f5fb9', // Main brand purple
            600: '#8156a7',
            700: '#6c488b',
            800: '#563a6f',
            900: '#47305a',
          },
          gray: {
            50: '#f9f9f9',
            100: '#f3f3f3',
            200: '#e6e6e6',
            300: '#d9d9d9',
            400: '#c0c0c0',
            500: '#a7a7a7', // Medium gray
            600: '#969696',
            700: '#7d7d7d',
            800: '#646464',
            900: '#525252',
          },
          orange: {
            50: '#fff8f1',
            100: '#fff1e2',
            200: '#ffe2c6',
            300: '#ffd4a9',
            400: '#ffb770',
            500: '#ff9a38', // Main orange
            600: '#e68b32',
            700: '#bf742a',
            800: '#995c22',
            900: '#7d4b1b',
          },
          beige: {
            50: '#fbfaf6',
            100: '#f7f4ec',
            200: '#efeada',
            300: '#e7dfc7',
            400: '#d7cba1',
            500: '#c6b67c', // Warm beige
            600: '#b2a470',
            700: '#94895d',
            800: '#766e4a',
            900: '#615a3c',
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-out": {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        "slide-in-from-top": {
          from: { transform: "translateY(-100%)" },
          to: { transform: "translateY(0)" },
        },
        "slide-in-from-bottom": {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
        "bounce-slow": {
          "0%, 100%": { 
            transform: "translateY(-10%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)"
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)"
          }
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "fade-out": "fade-out 0.5s ease-out",
        "slide-in-from-top": "slide-in-from-top 0.4s ease-out",
        "slide-in-from-bottom": "slide-in-from-bottom 0.4s ease-out",
        "bounce-slow": "bounce-slow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate, tailwindcssAspectRatio],
} satisfies Config;
