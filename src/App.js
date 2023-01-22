/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Cookies from 'js-cookie';
import DashbordPage from './pages/dashbord-page/DashbordPage';
import LandingPage from './pages/landing-page/LandingPage';
import Login from './pages/landing-page/LoginPage';
import SignupPage from './pages/landing-page/SignupPage';
import CardDetailPage from './pages/landing-page/DetailPage';
import NotFound from './components/404-not-found/NotFound';
import { GlobalProvider } from './context/GlobalContext';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <GlobalProvider>
        {!Cookies.get('token') ? (
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<LandingPage />} />
            <Route path="/job-vacancy/:id" element={<CardDetailPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/dashbord" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/dashbord" element={<DashbordPage />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<LandingPage />} />
            <Route path="/job-vacancy/:id" element={<CardDetailPage />} />

            <Route path="/profile" element={<h1>Ini profile</h1>} />
            <Route
              path="/profile/change-password"
              element={<h1>Ini change-password</h1>}
            />

            <Route path="/*" element={<NotFound />} />
          </Routes>
        )}
      </GlobalProvider>
    </div>
  );
};
export default App;
