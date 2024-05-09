/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "greyscale-900": "#0f172a",
        "additional-white": "#fff",
        "greyscale-100": "#f1f5f9",
        "greyscale-500": "#64748b",
        "secondary-glamour-pink-500-base": "#ed4f9d",
        "pink": "FA6360",
        "greyscale-50": "#f8fafc",
        royalblue: "#2563eb",
        gray: {
          "100": "#141416",
          "200": "rgba(255, 255, 255, 0)",
        },
        salmon: "#fa6360",
      },
      spacing: {},
      fontFamily: {
        "body-medium-medium": "Inter",
      },
      borderRadius: {
        "981xl": "1000px",
      },
    },
    fontSize: {
      sm: "14px",
      xs: "12px",
      "4xl-2": "23.2px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
