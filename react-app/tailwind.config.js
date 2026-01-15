/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-ocean": "#0B6BFF",
        "dark-blue-ocean": "#0A4CC5",
        "green-nature": "#28A745",
        "light-green-nature": "#4CAF50",
        "sand-gold": "#F4A261",
        "soft-sand": "#D4A373",
        "sunset-orange": "#FF7F50",
        "warm-orange": "#E76F51",
        "gray-light": "#E8EDF5",
        "gray-dark": "#4B5565",
        "white-off": "#F7F9FB",
        "white-pure": "#FFFFFF",
        "ink": "#0B1224",
      },
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
        secondary: ["Roboto", "sans-serif"],
        display: ["'DM Sans'", "Montserrat", "sans-serif"],
      },
      boxShadow: {
        light: "0 6px 20px rgba(15, 23, 42, 0.08)",
        medium: "0 12px 35px rgba(15, 23, 42, 0.12)",
        strong: "0 16px 50px rgba(11, 18, 36, 0.16)",
        inset: "inset 0 1px 0 rgba(255,255,255,0.12)",
      },
      borderRadius: {
        xl2: "18px",
        pill: "999px",
      },
      backgroundImage: {
        "hero-radial": "radial-gradient(circle at 20% 20%, rgba(11,107,255,0.18), transparent 30%), radial-gradient(circle at 80% 0%, rgba(255,127,80,0.15), transparent 32%), linear-gradient(135deg, #0B1224 0%, #0F1D3A 60%, #0B1224 100%)",
        "glass": "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))",
      },
      transitionDuration: {
        fast: "250ms",
      },
      spacing: {
        18: "4.5rem",
      },
    },
  },
  plugins: [],
}

