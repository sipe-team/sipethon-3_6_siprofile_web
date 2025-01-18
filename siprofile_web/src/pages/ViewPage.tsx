import { useEffect } from 'react';
import { FloatingButtonContainer } from '../styled/layout';
import PageContainer from '../components/PageContainer';
import PageDescription from '../components/PageDescription';
import ProfileCard from '../components/ProfileCard';
import { ContainedPrimaryButton } from '../styled/button';

const ViewPage = () => {
  useEffect(() => {
    console.log('Request api for card information');
  }, []);

  return (
    <PageContainer pageHistory={[]}>
      <PageDescription pageTitle="사이프로필 완성!" pageSubTitle="하나 뿐인 당신의" />
      <ProfileCard />
      <FloatingButtonContainer>
        <ContainedPrimaryButton>QR코드 공유</ContainedPrimaryButton>
      </FloatingButtonContainer>
    </PageContainer>
  );
};

export default ViewPage;
