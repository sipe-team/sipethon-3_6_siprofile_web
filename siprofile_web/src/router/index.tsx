import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TestPage from '../pages/TestPage';
import Layout from '../pages/Layout';
import HomePage from '../pages/HomePage';
import SignInPage from '../pages/SignInPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/test" element={<TestPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
