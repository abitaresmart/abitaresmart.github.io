const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['*.html', '_site/*.html','_site/**/*.html', '_pages/**/*.md', '_posts/**/*.md', '_layouts/**/*.html', '_includes/**/*.html'],
  theme: {
    colors: {
      'main': {
        50: '#F3F8F9',
        100: '#B8D2D9',
        200: '#7DADBA',
        300: '#41879A',
        400: '#126981',
        500: '#0F576B',
        600: '#0D4B5C',
        700: '#0B3E4C',
        800: '#08313D',
        900: '#06252D',
        950: '#04181E',
      },
      'accent': {
        50: '#FFFBF6',
        100: '#FFE4CB',
        200: '#FFCEA0',
        300: '#FFB775',
        400: '#FFA552',
        500: '#D48944',
        600: '#B5753A',
        700: '#966130',
        800: '#784E27',
        900: '#593A1D',	
        950: '#3B2613',
      },
      'whitet': "#FAFAFA",
      'blackt': "#2E2E2E"
    },
    extend: {
      colors: {
        gray: colors.slate,
        primary: colors.rose,
        secondary: colors.indigo,
        tertiary: colors.slate,
        danger: colors.red,
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
