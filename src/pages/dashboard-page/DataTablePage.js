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
            />
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
