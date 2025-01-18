import { Typography, Box, BoxProps } from '@mui/material';

type PageDescriptionProps = {
  pageTitle: string;
  pageSubTitle: string;
  boxProps?: BoxProps;
};

const PageDescription = ({ pageTitle, pageSubTitle, boxProps = {} }: PageDescriptionProps) => {
  return (
    <Box width="100%" p="16px" gap="9px" display={'flex'} flexDirection={'column'} {...boxProps}>
      <Typography variant="h2" textAlign={'center'}>
        {pageSubTitle}
      </Typography>
      <Typography variant="h1" textAlign={'center'}>
        {pageTitle}
      </Typography>
    </Box>
  );
};

export default PageDescription;
