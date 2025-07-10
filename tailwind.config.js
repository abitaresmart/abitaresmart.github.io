const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['*.html', '_site/*.html','_site/**/*.html', '_pages/**/*.md', '_posts/**/*.md', '_layouts/**/*.html', '_includes/**/*.html'],
  theme: {
    extend: {
      colors: {
        gray: colors.slate,
        primary: colors.rose,
        secondary: colors.indigo,
        tertiary: colors.slate,
        danger: colors.red,
        'accent': {
            '50': '#fff8ed',
            '100': '#ffeed4',
            '200': '#ffdaa8',
            '300': '#ffbe71',
            '400': '#ffa552',
            '500': '#fe7911',
            '600': '#ef5e07',
            '700': '#c64508',
            '800': '#9d370f',
            '900': '#7e2f10',
            '950': '#441506',
        },
      },
      fontFamily: {
        sans: ['Work Sans', 'Inter var', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ]
}
