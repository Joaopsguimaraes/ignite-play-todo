import { globalCss, theme } from '.';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: '$base'
  },
  body: {
    background: theme.colors.gray600
  },
  '@font-face': {
    fontFamily: "'Inter', sans-serif",
    src: "url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');"
  }
});
