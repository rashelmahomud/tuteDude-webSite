/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        my_theme: {

          "base-100": "#ffffff",
          "base-200": "#f8fafc",
          "base-300": "#f0f0f0",
        },
      },
      {
        my_dark: {
          "base-100": "#191D24",
          "base-200": "#162032",
          "base-300": "#1E293B",
        },
      },
      "light",
      "dracula",
    ],
  },
}
