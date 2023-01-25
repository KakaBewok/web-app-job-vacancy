/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import SideBar from '../../components/dashboard/SideBar';
import NavSideBar from '../../components/dashboard/NavSideBar';
import ContentDashboard from '../../components/dashboard/ContentDashboard';
import Footer from '../../components/landing-page/Footer';
import { getAllJob, deleteJob } from '../../utils/api-data';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const TableDataPage = () => {
  const {
    jobs,
    setJobs,
    isLoading,
    setIsLoading,
    keyword,
    setKeyword,
    setSearchParams,
    filterData,
    setFilterData,
  } = useContext(GlobalContext);

  const loading = {
    isLoading,
    setIsLoading,
  };

  useEffect(() => {
    const FetchData = async () => {
      const { data } = await getAllJob();

      setJobs(data.data);
      setIsLoading(false);
    };

    FetchData();
  }, []);

  const HandleDeleteJob = async (id) => {
    try {
      const { error } = await deleteJob(id);

      if (!error) {
        Swal.fire('Success', 'Delete data success!', 'success');
        window.location = '/dashboard/list-job-vacancy';
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Delete job failed!',
        footer: 'Please try again!',
      });
      console.log(error.message);
    }
  };

  const onKeywordSearchChangeHandler = (keyword) => {
    setKeyword(keyword);
    setSearchParams({ keyword });
  };
  const onKeywordFilterCityChangeHandler = (keyword) => {
    setFilterData({ ...filterData, filterCity: keyword });
  };
  const onKeywordFilterCompanyChangeHandler = (keyword) => {
    setFilterData({ ...filterData, filterCompany: keyword });
  };
  const onKeywordFilterMinSalaryChangeHandler = (keyword) => {
    setFilterData({ ...filterData, filterMinSalary: keyword });
  };

  return (
    <div>
      <main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800">
        <div className="flex items-start justify-between">
          <SideBar />
          <div className="flex flex-col w-full md:space-y-4">
            <NavSideBar />
            <ContentDashboard
              jobs={jobs}
              loading={loading}
              keyword={keyword}
              keywordSearchChange={onKeywordSearchChangeHandler}
              keywordFilterCityChange={onKeywordFilterCityChangeHandler}
              keywordFilterCompanyChange={onKeywordFilterCompanyChangeHandler}
              keywordFilterMinSalaryChange={
                onKeywordFilterMinSalaryChangeHandler
              }
              filterData={filterData}
              HandleDeleteJob={HandleDeleteJob}
            />
          </div>
        </div>
        {/* Add button */}
        <Link to="/dashboard/list-job-vacancy/form">
          <a href="#" className=" w-6 h-6 fixed left-3 top-[90%] lg:hidden">
            <button className="btn btn-circle bg-purple-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-plus"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ffffff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
          </a>
        </Link>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default TableDataPage;
