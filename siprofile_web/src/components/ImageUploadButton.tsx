import cat from '../assets/cat.png';
import { IconButton, Theme, IconButtonProps } from '@mui/material';
import styled from '@emotion/styled';

const StyledIconButton = styled(IconButton)(({ theme }) => {
  const { palette } = theme as Theme;
  return {
    width: '100px',
    height: '100px',
    border: '4px solid #FFFFFF',
    backgroundColor: palette.grey[200],
  };
});

const ImageUploadButton = (props: IconButtonProps) => {
  return (
    <StyledIconButton {...props}>
      <img src={cat} alt="image-upload" width={64} height={54} />
    </StyledIconButton>
  );
};

export default ImageUploadButton;
