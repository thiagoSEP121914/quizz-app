/** @type {import('tailwindcss').Config} */
module.exports = {
  // NativeWind v4 uses this to scan for class names
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
