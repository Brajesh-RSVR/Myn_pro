/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "bg-purple-600",
    "bg-green-600",
    "bg-green-500",
    "bg-green-100",
    "bg-red-600",
    "bg-red-500",
    "bg-red-100",
    "bg-indigo-600",
    "bg-indigo-500",
    "bg-indigo-100",

    "bg-primary-900",
    "bg-primary-600",

    "bg-myn-primary-600",
    "bg-myn-primary-500",
    "bg-myn-primary-100",
    "bg-pink-600",
    "bg-pink-500",
    "bg-pink-100",

    "border-green-500",
    "border-indigo-500",
    "border-myn-primary-500",
    "border-pink-500",
    "border-red-500",

    "ring-green-500",
    "ring-indigo-500",
    "ring-myn-primary-500",
    "ring-pink-500",
    "ring-red-500",

    "text-green-600",
    "text-indigo-600",
    "text-indigo-500",
    "text-myn-primary-600",
    "text-myn-primary-500",
    "text-pink-600",
    "text-red-600",

    "text-green-800",
    "text-indigo-800",
    "text-myn-primary-800",
    "text-pink-800",
    "text-red-800",

    "text-green-300",
    "text-indigo-300",
    "text-myn-primary-300",
    "text-pink-300",
    "text-red-300",
  ],
  darkMode: "class",
  mode: "jit",
  theme: {
    backdropBlur: {
      xs: "2px",
    },
    screens: {
      sm: "703px",
      md: "937px",
      lg: "1216px",
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
      "6xl": "3.2988rem",
      "7xl": "3.75rem",
    },
    extend: {
      animation: {
        huerotate: "hue 4s ease-in-out infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        hue: {
          "0%, 100%": { filter: "hue-rotate(-15deg)" },
          "50%": { filter: "hue-rotate(15deg)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      backgroundImage: {
        "office-workers":
          "https://images.unsplash.com/photo-1622675363311-3e1904dc1885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
      },
      spacing: {
        "9/16": "56.25%",
      },
      lineHeight: {
        11: "2.75rem",
        12: "3rem",
        13: "3.25rem",
        14: "3.5rem",
      },
      fontFamily: {
        sans: ["InterRegular", ...defaultTheme.fontFamily.sans],
        BrandonGrotesqueLight: ["BrandonGrotesqueLight", "Arial"],
        BrandonGrotesqueMedium: ["BrandonGrotesqueMedium", "Arial"],
        InterMedium: ["InterMedium", "Arial"],
        medium: ["InterMedium", "Arial"],
        InterRegular: ["InterRegular", "Arial"],
        regular: ["InterRegular", "Arial"],
        InterBold: ["InterBold", "Arial"],
        bold: ["InterBold", "Arial"],
        AthleticsMedium: ["AthleticsMedium", "Arial"],
      },
      colors: {
        primary: {
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
          300: "var(--color-primary-300)",
          400: "var(--color-primary-400)",
          500: "var(--color-primary-500)",
          600: "var(--color-primary-600)",
          700: "var(--color-primary-700)",
          800: "var(--color-primary-800)",
          900: "var(--color-primary-900)",
        },
        dark: {
          50: "#E2E2E880",
          700: "#4B4B55",
          800: "#ABABB4",
          900: "#1D1D1B",
        },
        gray: {
          50: "#FBFBFD",
          100: "#F6F5F9",
          200: "#E2E2E8",
          300: "#CCCCD4",
          400: "#ABABB4",
          500: "#86868E",
          600: "#696972",
          700: "#CCCCD4",
          800: "#ABABB4",
          900: "#161616",
        },
        purple: {
          100: "#EEEAFF",
          200: "#DDCDFF",
          300: "#CFB8FF",
          400: "#BA9AFF",
          500: "#A57AFF",
          600: "#8D5AFB",
          700: "#763FEC",
          800: "#2C0F68",
          900: "#0C0429",
        },
        green: {
          100: "#ECFDDF",
          200: "#E2F8D4",
          300: "#CFF4B8",
          400: "#BBEB9D",
          500: "#93EE5C",
          600: "#7EDA47",
          700: "#5EB42A",
          800: "#2C7600",
          900: "#033B1E",
        },
        //@ts-ignore
        gray: colors.neutral, // TODO: Remove ts-ignore after tw types gets updated to v3
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.green.400"),
            a: {
              color: theme("colors.primary.500"),
              "&:hover": {
                color: theme("colors.primary.600"),
              },
              code: { color: theme("colors.primary.400") },
            },
            h1: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.gray.900"),
            },
            h2: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.gray.900"),
            },
            h3: {
              fontWeight: "600",
              color: theme("colors.gray.900"),
            },
            "h4,h5,h6": {
              color: theme("colors.gray.900"),
            },
            pre: {
              backgroundColor: theme("colors.gray.800"),
            },
            code: {
              color: theme("colors.pink.500"),
              backgroundColor: theme("colors.gray.100"),
              paddingLeft: "4px",
              paddingRight: "4px",
              paddingTop: "2px",
              paddingBottom: "2px",
              borderRadius: "0.25rem",
            },
            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },
            details: {
              backgroundColor: theme("colors.gray.100"),
              paddingLeft: "4px",
              paddingRight: "4px",
              paddingTop: "2px",
              paddingBottom: "2px",
              borderRadius: "0.25rem",
            },
            hr: { borderColor: theme("colors.gray.200") },
            "ol li::marker": {
              fontWeight: "600",
              color: theme("colors.gray.500"),
            },
            "ul li::marker": {
              backgroundColor: theme("colors.gray.500"),
            },
            strong: { color: theme("colors.gray.600") },
            blockquote: {
              color: theme("colors.gray.900"),
              borderLeftColor: theme("colors.gray.200"),
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.300"),
            a: {
              color: theme("colors.primary.500"),
              "&:hover": {
                color: theme("colors.primary.400"),
              },
              code: { color: theme("colors.primary.400") },
            },
            h1: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.gray.100"),
            },
            h2: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.gray.100"),
            },
            h3: {
              fontWeight: "600",
              color: theme("colors.gray.100"),
            },
            "h4,h5,h6": {
              color: theme("colors.gray.100"),
            },
            pre: {
              backgroundColor: theme("colors.gray.800"),
            },
            code: {
              backgroundColor: theme("colors.gray.800"),
            },
            details: {
              backgroundColor: theme("colors.gray.800"),
            },
            hr: { borderColor: theme("colors.gray.700") },
            "ol li::marker": {
              fontWeight: "600",
              color: theme("colors.gray.400"),
            },
            "ul li::marker": {
              backgroundColor: theme("colors.gray.400"),
            },
            strong: { color: theme("colors.gray.100") },
            thead: {
              th: {
                color: theme("colors.gray.100"),
              },
            },
            tbody: {
              tr: {
                borderBottomColor: theme("colors.gray.700"),
              },
            },
            blockquote: {
              color: theme("colors.gray.100"),
              borderLeftColor: theme("colors.gray.700"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
