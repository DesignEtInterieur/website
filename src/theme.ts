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