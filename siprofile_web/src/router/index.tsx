import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import TestPage from '../pages/TestPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
