import { FloatingButtonContainer } from '../styled/layout';
import { ContainedSecondaryButton } from '../styled/button';
import PageContainer from '../components/PageContainer';
import PageDescription from '../components/PageDescription';
import { Box } from '@mui/material';
import Form from '../components/Form';

const SignInPage = () => {
  return (
    <PageContainer pageHistory={[]}>
      <PageDescription pageTitle="회원가입" pageSubTitle="사이프로필" boxProps={{ mb: '79px' }} />
      <Box width="100%" p="16px 24px">
        <Form placeholder="sipe@email.com" type="email" label="이메일" />
      </Box>
      <Box width="100%" p="16px 24px">
        <Form placeholder="****" type="password" label="비밀번호" />
      </Box>
      <FloatingButtonContainer>
        <ContainedSecondaryButton>로그인</ContainedSecondaryButton>
      </FloatingButtonContainer>
    </PageContainer>
  );
};

export default SignInPage;
