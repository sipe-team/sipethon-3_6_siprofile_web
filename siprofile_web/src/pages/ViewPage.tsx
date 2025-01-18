import { FloatingButtonContainer } from '../styled/layout';
import PageContainer from '../components/PageContainer';
import PageDescription from '../components/PageDescription';
import ProfileCard from '../components/ProfileCard';
import { ContainedPrimaryButton } from '../styled/button';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ViewPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <PageContainer pageHistory={[]}>
      <PageDescription pageTitle="사이프로필 완성!" pageSubTitle="하나 뿐인 당신의" />
      <ProfileCard />
      <FloatingButtonContainer>
        <ContainedPrimaryButton>QR코드 공유</ContainedPrimaryButton>
        <Button variant="outlined" onClick={handleGoHome}>
          홈으로 이동
        </Button>
      </FloatingButtonContainer>
    </PageContainer>
  );
};

export default ViewPage;
