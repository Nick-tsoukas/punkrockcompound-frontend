module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#ee0003',
        secondary: '#04151F',
        accent: '#EAF2EF',
        danger: '#991B1B',
        warning: '#F59E0B',
      },
    },
    fontFamily: {
      sans: [
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe\\ UI',
        'Roboto',
        'Helvetica\\ Neue',
        'Arial',
        'Noto\\ Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe\\ UI\\ Emoji',
        'Segoe\\ UI\\ Symbol',
        'Noto\\ Color\\ Emoji',
      ],
      serif: [
        'ui-serif',
        'Georgia',
        'Cambria',
        'Times\\ New\\ Roman',
        'Times',
        'serif',
      ],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation\\ Mono',
        'Courier\\ New',
        'monospace',
      ],
      heading: ['Candal', 'sans-serif'],
      headingTwo: ['Sans\\ Source\\ Pro', 'sans-serif'],
      accent: [],
      body: ['Source\\ Sans\\ Pro', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
