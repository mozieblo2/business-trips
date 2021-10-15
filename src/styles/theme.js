import { createTheme } from '@mui/material/styles';
import LatoRegularWoff from 'assets/fonts/lato-regular.woff';
import LatoRegularWoff2 from 'assets/fonts/lato-regular.woff2';

export const theme = createTheme({
    typography: {
        fontFamily: 'Lato, Arial, sans-serif'
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
            @font-face {
                font-family: 'Lato';
                font-style: normal;
                font-display: swap;
                font-weight: 400;
                src: local('Lato'), local('Lato-Regular'), url(${LatoRegularWoff2}) format('woff2'), url(${LatoRegularWoff}) format('woff');
                unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            }
        `
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1280,
            xl: 1536
        }
    },
    palette: {
        primary: {
            main: '#DB4848',
            dark: 'rgb(153, 50, 50)',
            grey: '#9b9b9b'
        }
    }
});
