import { ReactElement } from 'react';
import { Button, ButtonProps } from '@mui/material';

type CommonProps = {
  children: ReactElement | string;
  buttonProps?: ButtonProps;
};

export const ContainedPrimaryButton = ({ children, buttonProps }: CommonProps) => {
  return (
    <Button fullWidth variant="contained" color="primary" {...buttonProps}>
      {children}
    </Button>
  );
};

export const ContainedSecondaryButton = ({ children, buttonProps }: CommonProps) => {
  return (
    <Button fullWidth variant="contained" color="secondary" {...buttonProps}>
      {children}
    </Button>
  );
};
