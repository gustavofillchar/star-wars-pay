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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'blue-gravity': {
          DEFAULT: '#002B53',
          400: '#002B56'
        },
        'gray-gravity': {
          500: '#333333',
          300: '#666666',
          200: '#757575',
          100: '#969696',
          50: '#C8C8C8'
        }
      },
    },
  },
  plugins: [],
};
export default config;
