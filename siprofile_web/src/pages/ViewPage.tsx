import { useState } from 'react';
import { FloatingButtonContainer } from '../styled/layout';
import PageContainer from '../components/PageContainer';
import PageDescription from '../components/PageDescription';
import ProfileCard from '../components/ProfileCard';
import { ContainedPrimaryButton } from '../styled/button';
import { Button, Modal, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Qrcode from '../components/Qrcode';

const ViewPage = () => {
  const [open, setOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <>
      <PageContainer pageHistory={[]}>
        <PageDescription pageTitle="사이프로필 완성!" pageSubTitle="하나 뿐인 당신의" />
        <ProfileCard />
        <FloatingButtonContainer>
          <ContainedPrimaryButton
            buttonProps={{
              onClick: () => {
                setOpen(true);
              },
            }}
          >
            QR코드 공유
          </ContainedPrimaryButton>
          <Button variant="outlined" onClick={handleGoHome}>
            홈으로 이동
          </Button>
        </FloatingButtonContainer>
      </PageContainer>
      {open && (
        <Modal
          open={open}
          onClose={() => {
            setOpen(false);
          }}
        >
          <Paper
            sx={{
              width: '300px',
              height: '300px',
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <Qrcode url="https://naver.com" />
          </Paper>
        </Modal>
      )}
    </>
  );
};

export default ViewPage;
