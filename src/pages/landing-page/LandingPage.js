/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import NavigationBar from '../../components/landing-page/Navbar';
import Hero from '../../components/landing-page/Hero';
import ListTitle from '../../components/landing-page/ListTitle';
import Filter from '../../components/landing-page/Filter';
import CardList from '../../components/landing-page/CardList';
import Footer from '../../components/landing-page/Footer';
import { getAllJob } from '../../utils/api-data';

const LandingPage = () => {
  const {
    jobs,
    setJobs,
    isLoading,
    setIsLoading,
    keyword,
    setKeyword,
    filterData,
    setFilterData,
    setSearchParams,
  } = useContext(GlobalContext);

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
      <NavigationBar />
      <Hero
        keyword={keyword}
        keywordSearchChange={onKeywordSearchChangeHandler}
      />
      <ListTitle numberOfJobs={jobs.length} />
      <Filter
        keywordFilterCityChange={onKeywordFilterCityChangeHandler}
        keywordFilterCompanyChange={onKeywordFilterCompanyChangeHandler}
        keywordFilterMinSalaryChange={onKeywordFilterMinSalaryChangeHandler}
      />
      <CardList
        jobs={jobs}
        filterData={filterData}
        keyword={keyword}
        loading={isLoading}
      />
      <Footer />
    </div>
  );
};

export default LandingPage;
