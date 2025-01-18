import { ReactElement } from 'react';
import { Box, IconButton } from '@mui/material';
import { ArrowLeftIcon } from '../assets';

type PageContainerProps = {
  children: ReactElement | ReactElement[];
};

const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
      <Box width="100%" height="64px" p="16px 24px">
        <IconButton>
          <ArrowLeftIcon />
        </IconButton>
      </Box>
      {children}
    </Box>
  );
};

export default PageContainer;
