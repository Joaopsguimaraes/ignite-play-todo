import { createStitches, defaultThemeMap } from '@stitches/react';

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
    themeMap: {
        ...defaultThemeMap,
        opacity: 'opacity'
      },
      theme: {
        colors: {
          gray100: '#f2f2f2',
          gray200: '#d9d9d9',
          gray300: '#808080',
          gray400: '#333333',
          gray500: '#262626',
          gray600: '#1a1a1a',
          gray700: '#0d0d0d',

          danger: '#e25858',

          purple: '#8284fa',
          purpleDark: '#5e60ce',

          blue: '#4ea8de',
          blueDark: '#1e6f9f'
        },
        fonts:{ 
            default: "'Inter', sans-serif"
        },
        fontWeights:{
            regular: 400,
            bold: 700
        },
        fontSizes:{
            12: '0.75rem',
            14: '0.875rem',
            16: '1rem' 
        }
    }
})