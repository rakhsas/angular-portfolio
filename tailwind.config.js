/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  safelist: [
    'hover:bg-primary',
    'rounded-3xl',
    'bg-primary',
    'hover:bg-custom-black',
    'w-32',
    'h-32',
    'bg-zinc-950',
    'text-xs',
    'text-sm',

  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary': '#eb5d3a',
        'text-gray': '#cecece',
        'button-border': '#77777d33',
        'custom-black': '#121214',
      },
      screens: {
        'lx': '990px'
      }
    },
  },
  plugins: [],
}

