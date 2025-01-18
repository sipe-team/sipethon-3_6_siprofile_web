import { createTheme } from '@mui/material';

const fontFace = `
 @font-face {
  font-family: 'Pretendard-Regular';
  src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
 }
`;

const theme = createTheme({
  palette: {},
  breakpoints: {},
  typography: {
    fontFamily:
      'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", Arial, sans-serif',
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: '28px',
          fontWeight: 600,
        },
        h2: {
          fontSize: '20px',
          fontWeight: 500,
        },
        body1: {
          fontSize: '16px',
        },
        body2: {
          fontSize: '14px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        text: {
          fontSize: '18px',
          fontWeight: 600,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
     ${fontFace}
     body {
      font-family: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", Arial, sans-serif';
     }
    `,
    },
  },
});

export default theme;
