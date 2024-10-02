import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "light-linear-gradient":
          "linear-gradient(168.54deg, #FF9034 -46.81%, #FFFFFF 31.09%, #FFFFFF 77.47%)",
        "dark-linear-gradient":
          "linear-gradient(169.58deg, #E1852D -79.18%, #212121 19.19%, #1A1A1A 56.31%)",
      },
      colors: {
        "base-light": "#ffffff",
        "base-dark": "#1A1A1A",
        "blue-700": "#141925",
        "red-600": "#CC3333",
        "grey-50": "#fafafa",
        "grey-100": "#F7F7F7",
        "grey-200": "#EEEEEE",
        "grey-300": "#DADADA",
        "grey-500": "#7A7A7A",
        "grey-600": "#3A3A3A",
        "grey-700": "#494949",
        "grey-800": "#343434",
        "grey-900": "#222222",
      },
    },
  },
  plugins: [],
};

export default config;
