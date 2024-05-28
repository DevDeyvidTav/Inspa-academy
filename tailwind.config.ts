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
        "home": "url('/home.png')",
        "home-pc": "url('/home-pc.png')",
      },
      colors:{
        'secondary': '#BB3809'
      }
    },
  },
  plugins: [],
};
export default config;
