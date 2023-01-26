/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Cookies from 'js-cookie';
import DashboardPage from './pages/dashboard-page/DashboardPage';
import TableDataPage from './pages/dashboard-page/DataTablePage';
import LandingPage from './pages/landing-page/LandingPage';
import Login from './pages/landing-page/LoginPage';
import SignupPage from './pages/landing-page/SignupPage';
import CardDetailPage from './pages/landing-page/DetailPage';
import ChangePasswordPage from './pages/dashboard-page/ChangePasswordPage';
import NotFound from './components/404-not-found/NotFound';
import CreateJobVacancyPage from './pages/dashboard-page/CreateJobVacancyPage';
import { GlobalProvider } from './context/GlobalContext';
import { Routes, Route } from 'react-router-dom';
import ContactUsPage from './pages/landing-page/ContactUsPage';

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
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route
              path="/dashboard/list-job-vacancy"
              element={<TableDataPage />}
            />
            <Route
              path="/dashboard/list-job-vacancy/form"
              element={<CreateJobVacancyPage />}
            />
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<LandingPage />} />
            <Route path="/job-vacancy/:id" element={<CardDetailPage />} />

            <Route path="/profile" element={<h1>Ini profile</h1>} />
            <Route
              path="/profile/change-password"
              element={<ChangePasswordPage />}
            />
            <Route path="/contact-us" element={<ContactUsPage />} />

            <Route path="/*" element={<NotFound />} />
          </Routes>
        )}
      </GlobalProvider>
    </div>
  );
};
export default App;
