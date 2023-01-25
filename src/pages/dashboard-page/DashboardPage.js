/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import SideBar from '../../components/dashboard/SideBar';
import NavSideBar from '../../components/dashboard/NavSideBar';
import GreetingDashboard from '../../components/dashboard/GreetingDashboard';
import Footer from '../../components/landing-page/Footer';

const DashboardPage = () => {
  return (
    <div>
      <main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800">
        <div className="flex items-start justify-between">
          <SideBar />
          <div className="flex flex-col w-full md:space-y-4">
            <NavSideBar />
            <GreetingDashboard />
          </div>
        </div>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardPage;
