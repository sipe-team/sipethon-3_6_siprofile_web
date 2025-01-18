import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TestPage from '../pages/TestPage';
import Layout from '../pages/Layout';
import HomePage from '../pages/HomePage';
import SignInPage from '../pages/SignInPage';
import JoinPage from '../pages/JoinPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/join" element={<JoinPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
