import { Typography, Box } from '@mui/material';

type PageDescriptionProps = {
  pageTitle: string;
  pageSubTitle: string;
};

const PageDescription = ({ pageTitle, pageSubTitle }: PageDescriptionProps) => {
  return (
    <Box p="16px" gap="9px" display={'flex'} flexDirection={'column'}>
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
