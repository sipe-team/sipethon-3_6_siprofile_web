import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TestPage from '../pages/TestPage';
import Layout from '../pages/Layout';
import HomePage from '../pages/HomePage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<TestPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
