import createTheme, { Theme, ThemeOptions } from "@mui/material/styles/createTheme";

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#7d6741',
    },
    secondary: {
      main: '#777777',
    },
  },
};

export const theme: Theme = createTheme(themeOptions);