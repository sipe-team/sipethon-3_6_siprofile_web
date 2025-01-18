import { ReactElement } from 'react';
import { Box, IconButton } from '@mui/material';
import { ArrowLeftIcon } from '../assets';

type PageContainerProps = {
  children?: ReactElement | ReactElement[];
  pageHistory: Array<ReactElement>;
  onBack?: () => void;
};

const PageContainer = ({ pageHistory, children, onBack }: PageContainerProps) => {
  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
      <Box width="100%" height="64px" p="16px 24px">
        {pageHistory.length !== 0 && (
          <IconButton onClick={() => onBack?.()}>
            <ArrowLeftIcon />
          </IconButton>
        )}
      </Box>
      {children}
      {pageHistory.length > 0 && pageHistory[pageHistory.length - 1]}
    </Box>
  );
};

export default PageContainer;
