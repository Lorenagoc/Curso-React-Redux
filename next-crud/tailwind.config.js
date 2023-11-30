module.exports = {
  purge: {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}"
    ],
    safelist: [
      {
        pattern: /(bg|from|to)-(green|blue|gray)-(400|700)/,
        variants: ['lg', 'hover', 'focus', 'lg:hover'],
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [],
}