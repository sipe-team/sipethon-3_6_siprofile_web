import { Button, Typography, Box } from '@mui/material';
import Qrcode from '../components/Qrcode';

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
      <Box>
        <Button fullWidth variant="contained" color="primary">
          Button Contained Primary
        </Button>
        <Button fullWidth variant="contained" color="secondary">
          Button Contained Secondary
        </Button>
        <Button fullWidth variant="contained" disabled>
          Button Contained Disabled
        </Button>
        <Button fullWidth variant="text" color="secondary">
          Button Text Secondary
        </Button>
        <Button fullWidth variant="text" color="primary">
          Button Text Primary
        </Button>
        <Button fullWidth variant="outlined">
          Button Outlined Root
        </Button>
      </Box>
      <div>
        <Qrcode url="https://www.naver.com" />
      </div>
    </div>
  );
};

export default TestPage;
