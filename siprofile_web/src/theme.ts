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
    error: {
      main: '#FF334B',
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
          color: '#FFFFFF',
        },
        h2: {
          fontSize: '20px',
          fontWeight: 500,
          color: '#CBD5E0',
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
          fontSize: '16px',
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
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          padding: '8px 0px',
          color: '#FFFFFF',
          fontSize: '16px',
          '&::placeholder': {
            color: '#718096',
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        autoComplete: 'off',
      },
      styleOverrides: {
        root: {
          borderBottom: '1px solid #4A5568',
        },
      },
    },
    MuiModal: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        backdrop: {
          backgroundColor: 'rgba(0,0,0,0.8)',
        },
      },
    },
  },
});

export default theme;
