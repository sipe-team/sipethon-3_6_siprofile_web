import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    background: {
      default: '#131418',
    },
    primary: {
      main: '#00FFFF',
    },
    secondary: {
      main: '#4A5568',
    },
    grey: {
      '100': '#2D3748',
      '200': '#4A5568',
      '300': '#718096',
      '400': '#A0AEC0',
      '500': '#A0AEC0',
      '600': '#CBD5E0',
      '700': '#E2E8F0',
      '800': '#EDF2F7',
      '900': '#F7FAFC',
    },
  },
  breakpoints: {
    values: {
      xl: 412,
      lg: 412,
      md: 412,
      sm: 412,
      xs: 412,
    },
  },
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
        root: {
          padding: '16px',
          fontSize: '18px',
          fontWeight: 600,
          borderRadius: '5px',
        },
        contained: {
          '&:disabled': {
            color: '#131418',
            backgroundColor: '#2D3748',
          },
        },
        containedPrimary: {
          color: '#131418',
        },
        textSecondary: {
          color: '#FFFFFF',
        },
        outlined: {
          borderColor: '#FFFFFF',
          color: '#FFFFFF',
        },
      },
    },
  },
});

export default theme;
