/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import SideBar from '../../components/dashboard/SideBar';
import NavSideBar from '../../components/dashboard/NavSideBar';
import ContentDashboard from '../../components/dashboard/ContentDashboard';
import Footer from '../../components/landing-page/Footer';
import { getAllJob } from '../../utils/api-data';

const TableDataPage = () => {
  const { jobs, setJobs } = useContext(GlobalContext);

  useEffect(() => {
    const FetchData = async () => {
      const { data } = await getAllJob();

      setJobs(data.data);
    };

    FetchData();
  }, []);

  console.log(jobs);

  return (
    <div>
      <main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800">
        <div className="flex items-start justify-between">
          <SideBar />
          <div className="flex flex-col w-full md:space-y-4">
            <NavSideBar />
            <ContentDashboard jobs={jobs} />
          </div>
        </div>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default TableDataPage;
