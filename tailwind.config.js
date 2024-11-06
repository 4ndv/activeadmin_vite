/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/views/**/*',
    '!./app/admin/**/*.{arb,erb,html,rb}',
    '!./app/views/active_admin/**/*.{arb,erb,html,rb}',
    '!./app/views/admin/**/*.{arb,erb,html,rb}',
    '!./app/views/layouts/active_admin*.{erb,html}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

