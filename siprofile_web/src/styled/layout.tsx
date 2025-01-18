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
    minHeight: '480px',
    border: '1px solid white',
    overflowY: 'scroll',
    backgroundColor: 'inherit',
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
