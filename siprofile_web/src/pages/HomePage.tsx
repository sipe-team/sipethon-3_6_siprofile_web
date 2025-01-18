import PageDescription from '../components/PageDescription';
import introduction from '../assets/introduction.png';
import PageContainer from '../components/PageContainer';
import { useNavigate } from 'react-router-dom';
import { FloatingButtonContainer } from '../styled/layout';
import { ContainedPrimaryButton, ContainedSecondaryButton } from '../styled/button';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <PageContainer pageHistory={[]}>
      <PageDescription
        pageTitle="사이프로필"
        pageSubTitle="당신만의 특별한 프로필을 만들어보세요"
        boxProps={{
          mb: '25px',
        }}
      />
      <img src={introduction} alt="introduction" width={200} height={320} />
      <FloatingButtonContainer>
        <ContainedSecondaryButton
          buttonProps={{
            onClick: () => {
              navigate('/sign-in');
            },
          }}
        >
          로그인
        </ContainedSecondaryButton>
        <ContainedPrimaryButton
          buttonProps={{
            onClick: () => {
              navigate('/join');
            },
          }}
        >
          회원가입
        </ContainedPrimaryButton>
      </FloatingButtonContainer>
    </PageContainer>
  );
};

export default HomePage;
