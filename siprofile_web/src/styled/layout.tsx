import { Box } from '@mui/material';
import styled from '@emotion/styled';
import { Theme } from '@mui/material';

export const Background = styled(Box)(({ theme }) => {
  const { palette } = theme as Theme;
  return {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.background.default,
  };
});

export const Viewport = styled(Box)(({ theme }) => {
  const { breakpoints } = theme as Theme;
  return {
    position: 'relative',
    width: breakpoints.values.xl,
    height: '100%',
    minHeight: '480px',
    maxHeight: '917px',
    border: '1px solid white',
    overflowY: 'auto',
    backgroundColor: 'inherit',
    '&::-webkit-scrollbar': {
      width: '8px',
      height: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      borderRadius: '4px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      borderRadius: '4px',
    },
  };
});

export const FloatingButtonContainer = styled(Box)({
  position: 'absolute',
  left: 0,
  bottom: 0,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: '16px 24px',
  gap: '8px',
});
