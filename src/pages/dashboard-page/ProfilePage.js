import React from 'react';
import NavigationBar from '../../components/landing-page/Navbar';
import Profile from '../../components/profile/Profile';
import Footer from '../../components/landing-page/Footer';

const LoginPage = () => {
  return (
    <div className="dark:bg-gray-700">
      <div className="fixed top-0 left-0 right-0">
        <NavigationBar />
      </div>
      <div className="pt-[9rem]">
        <Profile />
      </div>
      <div className="mt-[9rem] min-[410px]:mt-[15rem] md:mt-[26rem] lg:mt-[6rem]">
        <Footer />
      </div>
    </div>
  );
};

export default LoginPage;
