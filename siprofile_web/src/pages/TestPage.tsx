import { Button, Typography, Box } from '@mui/material';

const TestPage = () => {
  return (
    <div>
      <Box flexDirection={'column'} alignItems={'center'}>
        <Typography variant="h1">Heading 1</Typography>
        <Typography variant="h2">Heading 2</Typography>
        <Typography variant="body1">Body 1 </Typography>
        <Typography variant="body2">Body 2</Typography>
        <Button variant="text">Button</Button>
      </Box>
    </div>
  );
};

export default TestPage;
