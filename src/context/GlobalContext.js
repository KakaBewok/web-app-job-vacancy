/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useSearchParams } from 'react-router-dom';

export const GlobalContext = React.createContext();

export const GlobalProvider = (props) => {
  const [authedUser, setAuthedUser] = React.useState(null);
  const [jobs, setJobs] = React.useState([]);
  const [job, setJob] = React.useState([]);
  const [currentId, setCurrentId] = React.useState(-1);
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get('keyword') || '';
  });
  const [inputLogin, setInputLogin] = React.useState(() => {
    return {
      email: '',
      password: '',
    };
  });
  const [inputSignup, setInputSignup] = React.useState(() => {
    return {
      name: '',
      image_url: '',
      email: '',
      password: '',
      confirm_password: '',
    };
  });
  const [filterData, setFilterData] = React.useState(() => {
    return {
      filterCity: '',
      filterCompany: '',
      filterMinSalary: '',
    };
  });
  const [inputJob, setInputJob] = React.useState(() => {
    return {
      title: '',
      job_description: '',
      job_qualification: '',
      job_type: '',
      job_tenure: '',
      job_status: '',
      company_name: '',
      company_image_url: '',
      company_city: '',
      salary_min: '',
      salary_max: '',
    };
  });

  const objState = React.useMemo(() => {
    return {
      authedUser,
      setAuthedUser,
      jobs,
      setJobs,
      currentId,
      setCurrentId,
      isLoading,
      setIsLoading,
      keyword,
      setKeyword,
      filterData,
      setFilterData,
      searchParams,
      setSearchParams,
      inputLogin,
      setInputLogin,
      inputSignup,
      setInputSignup,
      job,
      setJob,
      inputJob,
      setInputJob,
    };
  }, [
    authedUser,
    jobs,
    job,
    filterData,
    keyword,
    searchParams,
    currentId,
    isLoading,
    inputLogin,
    inputSignup,
    inputJob,
  ]);

  return (
    <GlobalContext.Provider value={objState}>
      {props.children}
    </GlobalContext.Provider>
  );
};
