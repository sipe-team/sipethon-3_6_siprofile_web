import { useState, ReactElement, useContext } from 'react';
import PageContainer from '../components/PageContainer';
import PageDescription from '../components/PageDescription';
import { TextField, Button } from '@mui/material';
import { FloatingButtonContainer } from '../styled/layout';
import { ContainedPrimaryButton } from '../styled/button';
import { useNavigate } from 'react-router-dom';
import CreateCardContext from '../context/createCardContext';
import PageHistoryContext from '../context/PageHistoryContext';

const Color = () => {
  return (
    <>
      <PageDescription pageTitle="배경 컬러" pageSubTitle="자유롭게 고민중" />
      <FloatingButtonContainer>
        <ContainedPrimaryButton
          buttonProps={{
            onClick: () => {
              console.log('SUBMIT');
            },
          }}
        >
          다음
        </ContainedPrimaryButton>
      </FloatingButtonContainer>
    </>
  );
};

const Link = () => {
  const pageHistoryContext = useContext(PageHistoryContext);
  if (pageHistoryContext) {
    const { pageHistory, setPageHistory } = pageHistoryContext;
    return (
      <>
        <PageDescription pageTitle="링크" pageSubTitle="보여주고 싶은" />
        <TextField placeholder="링크" variant="standard" />
        <FloatingButtonContainer>
          <ContainedPrimaryButton
            buttonProps={{
              onClick: () => {
                setPageHistory([...pageHistory, <Color />]);
              },
            }}
          >
            다음
          </ContainedPrimaryButton>
          <Button variant="outlined">SKIP</Button>
        </FloatingButtonContainer>
      </>
    );
  }
  return null;
};

const Keyword = () => {
  const pageHistoryContext = useContext(PageHistoryContext);
  if (pageHistoryContext) {
    const { pageHistory, setPageHistory } = pageHistoryContext;
    return (
      <>
        <PageDescription pageTitle="키워드를 작성해 주세요" pageSubTitle="자신을 표현할 수 있는" />
        <TextField placeholder="키워드" variant="standard" />
        <FloatingButtonContainer>
          <ContainedPrimaryButton
            buttonProps={{
              onClick: () => {
                setPageHistory([...pageHistory, <Link />]);
              },
            }}
          >
            다음
          </ContainedPrimaryButton>
        </FloatingButtonContainer>
      </>
    );
  }
  return null;
};

const Position = () => {
  const pageHistoryContext = useContext(PageHistoryContext);
  if (pageHistoryContext) {
    const { pageHistory, setPageHistory } = pageHistoryContext;
    return (
      <>
        <PageDescription pageTitle="포지션 선택" pageSubTitle="포지션 선택" />
        <TextField placeholder="이름" variant="standard" />
        <FloatingButtonContainer>
          <ContainedPrimaryButton
            buttonProps={{
              onClick: () => {
                setPageHistory([...pageHistory, <Keyword />]);
              },
            }}
          >
            다음
          </ContainedPrimaryButton>
        </FloatingButtonContainer>
      </>
    );
  }
  return null;
};

const Name = () => {
  const pageHistoryContext = useContext(PageHistoryContext);
  if (pageHistoryContext) {
    const { pageHistory, setPageHistory } = pageHistoryContext;
    return (
      <>
        <PageDescription pageTitle="이름과 이미지" pageSubTitle="이름과 이미지" />
        <TextField placeholder="이름" variant="standard" />
        <FloatingButtonContainer>
          <ContainedPrimaryButton
            buttonProps={{
              onClick: () => {
                setPageHistory([...pageHistory, <Position />]);
              },
            }}
          >
            다음
          </ContainedPrimaryButton>
        </FloatingButtonContainer>
      </>
    );
  }
  return null;
};

const CreatePage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>('');
  const [keyword, setKeyword] = useState<Array<string>>([]);
  const [position, setPosition] = useState<string>('');
  const [color, setColor] = useState<string>('');
  const [link, setLink] = useState<string>('');

  const [pageHistory, setPageHistory] = useState<ReactElement[]>([<Name />]);

  const handleBack = () => {
    if (pageHistory.length === 1) {
      navigate(-1);
    }
    if (pageHistory.length > 0) {
      setPageHistory(pageHistory.slice(0, -1));
    }
  };

  return (
    <PageHistoryContext.Provider value={{ pageHistory, setPageHistory }}>
      <CreateCardContext.Provider
        value={{
          name,
          setName,
          keyword,
          setKeyword,
          position,
          setPosition,
          color,
          setColor,
          link,
          setLink,
        }}
      >
        <PageContainer onBack={handleBack} pageHistory={pageHistory} />
      </CreateCardContext.Provider>
    </PageHistoryContext.Provider>
  );
};

export default CreatePage;
