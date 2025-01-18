import styled from '@emotion/styled';
import { Typography, TextField, TextFieldProps, Theme } from '@mui/material';

const FormLabel = styled(Typography, { shouldForwardProp: (props) => props !== 'isFocused' })<{
  isFocused?: boolean;
}>(({ theme, isFocused }) => {
  const { palette } = theme as Theme;
  return {
    marginBottom: '8px',
    color: isFocused ? palette.primary.main : palette.grey[600],
  };
});

type FormProps = {
  isFocused?: boolean;
  label: string;
} & Omit<TextFieldProps, 'label'>;

const Form = ({ isFocused, label, ...props }: FormProps) => {
  return (
    <>
      <FormLabel variant="body2" isFocused={isFocused}>
        {label}
      </FormLabel>
      <TextField {...props} fullWidth variant="standard" />
    </>
  );
};

export default Form;
