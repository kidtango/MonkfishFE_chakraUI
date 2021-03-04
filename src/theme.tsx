import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
});

const customTheme = extendTheme({
  colors: {
    primary: {
      50: '#dbfbff',
      100: '#b0efff',
      200: '#82e3fb',
      300: '#54d8f7',
      400: '#2cccf4',
      500: '#1ab3db',
      600: '#088bab',
      700: '#00637b',
      800: '#003d4b',
      900: '#00161c',
    },
    charcoal: {
      50: '#e6f5fd',
      100: '#cadbe6',
      200: '#acc3d3',
      300: '#8dacc0',
      400: '#6c94ad',
      500: '#547a94',
      600: '#405f73',
      700: '#2c4453',
      800: '#182934',
      900: '#000f17',
    },
    queenBlue: {
      50: '#e3f5ff',
      100: '#c3dcee',
      200: '#a1c4de',
      300: '#7daccf',
      400: '#5994c0',
      500: '#407ba7',
      600: '#305f82',
      700: '#20445e',
      800: '#0f293b',
      900: '#000f1a',
    },
    honeyYellow: {
      50: '#fff6dc',
      100: '#fee3b0',
      200: '#fbd082',
      300: '#f8bd52',
      400: '#f6aa23',
      500: '#dc9109',
      600: '#ab7004',
      700: '#7b5001',
      800: '#4a3000',
      900: '#1c0f00',
    },
    blazeOrange: {
      50: '#ffedde',
      100: '#ffcdb3',
      200: '#faad84',
      300: '#f68d55',
      400: '#f36d26',
      500: '#d9530c',
      600: '#aa4008',
      700: '#7a2d04',
      800: '#4a1a00',
      900: '#1f0600',
    },
  },
  fonts: {
    heading: 'Cairo',
    html: 'Cairo',
    body: 'Cairo',
  },
  breakpoints,
});

export default customTheme;
