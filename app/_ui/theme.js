import { Inter } from 'next/font/google';
import { purple } from '@mui/material/colors';
import { createTheme, alpha } from '@mui/material/styles';
import {
  gray, brand, green, orange, red,
  inputsCustomizations,
  dataDisplayCustomizations,
  feedbackCustomizations,
  navigationCustomizations,
  surfacesCustomizations
} from './customizations';

export const roboto = Inter({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme();


export const coworkTheme = createTheme(theme, {
  palette: {
    common: {
      black: '#171717',
      white: '#ffffff'
    },
    primary: {
      light: purple[200],
      main: purple[400],
      dark: purple[700],
      contrastText: purple[50],
    },
    info: {
      light: brand[100],
      main: brand[300],
      dark: brand[600],
      contrastText: gray[50],
    },
    warning: {
      light: orange[300],
      main: orange[400],
      dark: orange[800],
    },
    error: {
      light: red[300],
      main: red[400],
      dark: red[800],
    },
    success: {
      light: green[300],
      main: green[400],
      dark: green[800],
    },
    grey: {
      ...gray,
    },
    divider: alpha(gray[300], 0.4),
    background: {
      default: 'hsl(0, 0%, 99%)',
      paper: 'hsl(220, 35%, 97%)',
    },
    text: {
      primary: gray[800],
      secondary: gray[600],
      warning: orange[400],
    },
    action: {
      hover: alpha(gray[200], 0.2),
      selected: `${alpha(gray[200], 0.3)}`,
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    h1: {
      fontSize: theme.typography.pxToRem(48),
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: -0.5,
    },
    h2: {
      fontSize: theme.typography.pxToRem(36),
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: theme.typography.pxToRem(30),
      lineHeight: 1.2,
    },
    h4: {
      fontSize: theme.typography.pxToRem(24),
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h5: {
      fontSize: theme.typography.pxToRem(20),
      fontWeight: 600,
    },
    h6: {
      fontSize: theme.typography.pxToRem(18),
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: theme.typography.pxToRem(18),
    },
    subtitle2: {
      fontSize: theme.typography.pxToRem(14),
      fontWeight: 500,
    },
    body1: {
      fontSize: theme.typography.pxToRem(14),
    },
    body2: {
      fontSize: theme.typography.pxToRem(14),
      fontWeight: 400,
    },
    caption: {
      fontSize: theme.typography.pxToRem(12),
      fontWeight: 400,
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: {
    ...theme.shadows,
    1: 'hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px'
  },
  components: {
    ...inputsCustomizations,
    ...dataDisplayCustomizations,
    ...feedbackCustomizations,
    ...navigationCustomizations,
    ...surfacesCustomizations
  }
});