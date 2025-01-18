import PageDescription from '../components/PageDescription';
import { Box, Button } from '@mui/material';
import introduction from '../assets/introduction.png';

const HomePage = () => {
  return (
    <Box>
      <PageDescription
        pageTitle="사이프로필"
        pageSubTitle="당신만의 특별한 프로필을 만들어보세요"
      />
      <img src={introduction} alt="introduction" />
      <Box display="flex" flexDirection={'column'} p="16px 24px" gap="8px">
        <Button fullWidth variant="contained" color="secondary">
          로그인
        </Button>
        <Button fullWidth variant="contained" color="primary">
          회원가입
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
