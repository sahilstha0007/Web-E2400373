module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add this line to include all your source files
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
