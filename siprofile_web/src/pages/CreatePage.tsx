import { useState, ReactElement, useContext, ChangeEvent } from 'react';
import PageContainer from '../components/PageContainer';
import PageDescription from '../components/PageDescription';
import { TextField, Button } from '@mui/material';
import { FloatingButtonContainer } from '../styled/layout';
import { ContainedPrimaryButton } from '../styled/button';
import { useNavigate } from 'react-router-dom';
import CreateCardContext from '../context/CreateCardContext';
import PageHistoryContext from '../context/PageHistoryContext';
import ImageUploadButton from '../components/ImageUploadButton';
import PositionRadioButton from '../components/PositionRadioButton';

// const Color = () => {
//   const createCardContext = useContext(CreateCardContext);

//   if (createCardContext) {
//     return (
//       <>
//         <PageDescription pageTitle="배경 컬러" pageSubTitle="프로필 카드의 배경으로 사용할" />
//         <FloatingButtonContainer>
//           <ContainedPrimaryButton
//             buttonProps={{
//               onClick: () => {
//                 console.log('SUBMIT');
//               },
//             }}
//           >
//             다음
//           </ContainedPrimaryButton>
//         </FloatingButtonContainer>
//       </>
//     );
//   }
//   return null;
// };

const Link = () => {
  const navigate = useNavigate();
  const pageHistoryContext = useContext(PageHistoryContext);
  const createCardContext = useContext(CreateCardContext);

  if (pageHistoryContext && createCardContext) {
    // const { pageHistory, setPageHistory } = pageHistoryContext;
    const { link, setLink } = createCardContext;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { currentTarget } = event;
      setLink(currentTarget.value);
    };

    const handleNext = () => {
      navigate('/view');
      // setPageHistory([...pageHistory, <Color />]);
    };

    return (
      <>
        <PageDescription
          pageTitle="링크가 있다면 입력해 주세요"
          pageSubTitle="추가로 보여주고 싶은"
          boxProps={{ mb: '169px' }}
        />
        <TextField placeholder="링크" variant="standard" value={link} onChange={handleChange} />
        <FloatingButtonContainer>
          <ContainedPrimaryButton
            buttonProps={{
              disabled: link.length === 0,
              onClick: handleNext,
            }}
          >
            다음
          </ContainedPrimaryButton>
          <Button variant="outlined" onClick={handleNext}>
            SKIP
          </Button>
        </FloatingButtonContainer>
      </>
    );
  }
  return null;
};

const Keyword = () => {
  const pageHistoryContext = useContext(PageHistoryContext);
  const createCardContext = useContext(CreateCardContext);

  if (pageHistoryContext && createCardContext) {
    const { pageHistory, setPageHistory } = pageHistoryContext;
    const { setKeyword } = createCardContext;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { currentTarget } = event;
      setKeyword(
        currentTarget.value
          .split(',')
          .map((item) => item.trim())
          .filter((item) => item.length !== 0),
      );
    };

    return (
      <>
        <PageDescription
          pageTitle="키워드를 작성해 주세요"
          pageSubTitle="자신을 표현할 수 있는"
          boxProps={{ mb: '169px' }}
        />
        <TextField placeholder="키워드" variant="standard" onChange={handleChange} />
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
  const createCardContext = useContext(CreateCardContext);

  if (pageHistoryContext && createCardContext) {
    const { pageHistory, setPageHistory } = pageHistoryContext;
    const { name } = createCardContext;

    return (
      <>
        <PageDescription
          pageTitle="포지션을 선택해 주세요"
          pageSubTitle={`${name} 님의`}
          boxProps={{ mb: '29px' }}
        />
        <PositionRadioButton />
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
  const createCardContext = useContext(CreateCardContext);

  if (pageHistoryContext && createCardContext) {
    const { pageHistory, setPageHistory } = pageHistoryContext;
    const { name, setName } = createCardContext;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { currentTarget } = event;
      setName(currentTarget.value);
    };

    return (
      <>
        <PageDescription pageTitle="이름을 입력해 주세요" pageSubTitle="사이프로필에서 사용할" />
        <ImageUploadButton sx={{ marginBottom: '55px' }} />
        <TextField
          placeholder="이름"
          variant="standard"
          value={name}
          onChange={handleChange}
          sx={{ marginBottom: '59px' }}
        />
        <FloatingButtonContainer>
          <ContainedPrimaryButton
            buttonProps={{
              disabled: name.length === 0,
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
