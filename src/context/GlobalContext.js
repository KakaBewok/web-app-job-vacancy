/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
// import useInput from '../hooks/useInput';
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
  ]);

  return (
    <GlobalContext.Provider value={objState}>
      {props.children}
    </GlobalContext.Provider>
  );
};
