import { createTheme, responsiveFontSizes, Theme, ThemeOptions } from "@mui/material";


const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#7d6741',
    },
    secondary: {
      main: '#777777',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Anger Styles';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url(/fonts/AngerStyles.ttf) format('ttf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
  typography: {
    h1: {
      lineHeight: 1.0
    },
    h6: {
      fontSize: '1rem',
      '@media (min-width:1980px)': {
        fontSize: '1.8rem',
      },
      '@media (min-width:3840px)': {
        fontSize: '3rem',
      }
    }
  }
};

export const theme: Theme = responsiveFontSizes(createTheme(themeOptions));