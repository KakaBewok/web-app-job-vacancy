/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import Cookies from 'js-cookie';
import { Spinner } from 'flowbite-react';
import Filter from '../../components/landing-page/Filter';
import { getJob } from '../../utils/api-data';
import { useNavigate } from 'react-router-dom';

const ContentDashboard = ({
  jobs,
  loading,
  keyword,
  keywordSearchChange,
  keywordFilterCityChange,
  keywordFilterCompanyChange,
  keywordFilterMinSalaryChange,
  filterData,
  HandleDeleteJob,
}) => {
  const { setCurrentId, setInputJob } = useContext(GlobalContext);

  const navigate = useNavigate();

  const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(number);
  };
  const jobListSearch = jobs.filter((job) => {
    return (
      job.title.toUpperCase().includes(keyword.toUpperCase()) ||
      job.company_city.toUpperCase().includes(keyword.toUpperCase()) ||
      job.company_name.toUpperCase().includes(keyword.toUpperCase())
    );
  });
  const jobListFilter = jobs.filter((job) => {
    return job.company_city
      .toUpperCase()
      .includes(filterData.filterCity.toUpperCase()) &&
      job.company_name
        .toUpperCase()
        .includes(filterData.filterCompany.toUpperCase()) &&
      filterData.filterMinSalary == 0
      ? job.salary_min > -1
      : job.salary_min == filterData.filterMinSalary;
  });
  const HandleEdit = async (event) => {
    event.preventDefault();

    let id = event.target.value;

    setCurrentId(id);

    try {
      const { error, data } = await getJob(id);

      if (!error) {
        const {
          title,
          job_description,
          job_qualification,
          job_type,
          job_tenure,
          job_status,
          company_name,
          company_image_url,
          company_city,
          salary_min,
          salary_max,
        } = data.data;

        setInputJob(() => {
          return {
            title,
            job_description,
            job_qualification,
            job_type,
            job_tenure,
            job_status,
            company_name,
            company_image_url,
            company_city,
            salary_min,
            salary_max,
          };
        });

        navigate('/dashboard/list-job-vacancy/form');
      }
    } catch (error) {
      alert(error.message);
      console.log(error.message);
    }
  };
  const HandleDelete = (event) => {
    event.preventDefault();

    let id = event.target.value;

    try {
      const response = HandleDeleteJob(id);
      console.log(response);

      navigate('/dashboard/list-job-vacancy');
    } catch (error) {
      alert(error.message);
      console.log(error.message);
    }
  };

  return (
    <div className="h-screen px-4 pb-24 overflow-auto md:px-6">
      {/* Greetings*/}
      <div className="mt-[2rem] ml-[1rem] md:ml-[2rem] md:mt-0 ">
        <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
          Hello, {Cookies.get('name')}!
        </h1>
        <h2 className="text-gray-400 text-md">
          Discover the best talents in Indonesia
        </h2>
      </div>
      {/* Table*/}
      <div className="container max-w-full lg:max-w-5xl px-4 mx-auto sm:px-8">
        <div className="py-8">
          <div>
            {/* Search */}
            <div className="flex flex-col sm:flex-row justify-between w-full mb-1 sm:mb-0">
              <h2 className="hidden sm:block text-3xl font-semibold leading-tight dark:text-gray-200">
                Job Lists
              </h2>
              <div className="text-end">
                <form className="flex justify-center w-full space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                  <div className=" relative ">
                    <input
                      type="text"
                      id='"form-subscribe-Filter'
                      className="dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400 dark:border-gray-600 rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Search"
                      value={keyword}
                      onChange={(event) =>
                        keywordSearchChange(event.target.value)
                      }
                    />
                  </div>
                </form>
              </div>
            </div>
            <br />
            <hr />
            {/* Filter */}
            <div className="pl-5">
              <Filter
                keywordFilterCityChange={keywordFilterCityChange}
                keywordFilterCompanyChange={keywordFilterCompanyChange}
                keywordFilterMinSalaryChange={keywordFilterMinSalaryChange}
              />
            </div>
          </div>
          {/* Table data and Pagination */}
          <h2 className="text-gray-700 text-md dark:text-gray-400">
            Number of Jobs: {jobs.length}
          </h2>
          <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
            <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
              {loading.isLoading ? (
                <div className="my-20 w-9 mx-auto">
                  <Spinner aria-label="Large spinner example" size="lg" />
                </div>
              ) : (
                <table className="min-w-full leading-normal">
                  {/* Heading */}
                  <thead>
                    <tr>
                      {/* Company */}
                      <th
                        scope="col"
                        className="px-5 py-7 text-xs font-semibold text-gray-800 uppercase bg-gray-200 text-center border-b border-gray-200 dark:bg-gray-600 dark:text-gray-200"
                      >
                        Company
                      </th>
                      {/* Position */}
                      <th
                        scope="col"
                        className="px-5 py-3 text-xs font-semibold  text-gray-800 uppercase bg-gray-200 text-center border-b border-gray-200 dark:bg-gray-600 dark:text-gray-200"
                      >
                        Position
                      </th>
                      {/* Create At */}
                      <th
                        scope="col"
                        className="px-5 py-3 text-xs font-semibold text-gray-800 uppercase bg-gray-200 text-center border-b border-gray-200 dark:bg-gray-600 dark:text-gray-200"
                      >
                        Created at
                      </th>
                      {/* Status */}
                      <th
                        scope="col"
                        className="px-5 py-3 text-xs font-semibold text-gray-800 uppercase bg-gray-200 text-center border-b border-gray-200 dark:bg-gray-600 dark:text-gray-200"
                      >
                        Status
                      </th>
                      {/* Tenure */}
                      <th
                        scope="col"
                        className="px-5 py-3 text-xs font-semibold text-gray-800 uppercase bg-gray-200 text-center border-b border-gray-200 dark:bg-gray-600 dark:text-gray-200"
                      >
                        Tenure
                      </th>
                      {/* City */}
                      <th
                        scope="col"
                        className="px-5 py-3 text-xs font-semibold text-gray-800 uppercase bg-gray-200 text-center border-b border-gray-200 dark:bg-gray-600 dark:text-gray-200"
                      >
                        City
                      </th>
                      {/* Min. Salary */}
                      <th
                        scope="col"
                        className="px-5 py-3 text-xs font-semibold text-gray-800 uppercase bg-gray-200 text-center border-b border-gray-200 dark:bg-gray-600 dark:text-gray-200"
                      >
                        Min. Salary
                      </th>
                      {/* Max. Salary */}
                      <th
                        scope="col"
                        className="px-5 py-3 text-xs font-semibold text-gray-800 uppercase bg-gray-200 text-center border-b border-gray-200 dark:bg-gray-600 dark:text-gray-200"
                      >
                        Max. Salary
                      </th>
                      {/* Job Desc. */}
                      <th
                        scope="col"
                        className="px-5 py-3 text-xs font-semibold text-gray-800 uppercase bg-gray-200 text-center border-b border-gray-200 dark:bg-gray-600 dark:text-gray-200"
                      >
                        Job Desc.
                      </th>
                      {/* Qualification */}
                      <th
                        scope="col"
                        className="px-5 py-3 text-xs font-semibold text-gray-800 uppercase bg-gray-200 text-center border-b border-gray-200 dark:bg-gray-600 dark:text-gray-200"
                      >
                        Qualification
                      </th>
                      {/* Type */}
                      <th
                        scope="col"
                        className="px-5 py-3 text-xs font-semibold text-gray-800 uppercase bg-gray-200 text-center border-b border-gray-200 dark:bg-gray-600 dark:text-gray-200"
                      >
                        Type
                      </th>
                      {/* Action */}
                      <th
                        scope="col"
                        className="px-5 py-3 text-xs font-semibold text-gray-800 uppercase bg-gray-200 text-center border-b border-gray-200 dark:bg-gray-600 dark:text-gray-200"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  {/* Body */}
                  {keyword ? (
                    <tbody>
                      {jobListSearch.map((job) => (
                        <tr key={job.id}>
                          {/* Company */}
                          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 dark:bg-gray-700 ">
                            <div className="flex items-center">
                              <div className="flex-shrink-0">
                                <a href="#" className="relative block">
                                  <img
                                    alt={job.company_name}
                                    src={job.company_image_url}
                                    className="mx-auto object-cover rounded-full h-14 w-14"
                                  />
                                </a>
                              </div>
                              <div className="ml-5 w-40">
                                <p className="text-gray-900 whitespace-no-wrap dark:text-gray-100">
                                  {job.company_name}
                                </p>
                              </div>
                            </div>
                          </td>
                          {/* Position */}
                          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 dark:bg-gray-700">
                            <p className="text-gray-900 whitespace-no-wrap w-24 dark:text-gray-100">
                              {job.title}
                            </p>
                          </td>
                          {/* Created at */}
                          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 dark:bg-gray-700">
                            <p className="text-gray-900 whitespace-no-wrap w-24 dark:text-gray-100">
                              {job.updated_at}
                            </p>
                          </td>
                          {/* Status */}
                          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 dark:bg-gray-700">
                            {job.job_status ? (
                              <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900 ">
                                <span
                                  aria-hidden="true"
                                  className="absolute inset-0 bg-green-200 dark:bg-green-500 rounded-full opacity-50"
                                ></span>
                                <span className="relative dark:text-gray-100">
                                  hiring
                                </span>
                              </span>
                            ) : (
                              <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-red-900">
                                <span
                                  aria-hidden="true"
                                  className="absolute inset-0 bg-red-200 dark:bg-red-500 rounded-full opacity-50"
                                ></span>
                                <span className="relative dark:text-gray-100">
                                  close
                                </span>
                              </span>
                            )}
                          </td>
                          {/* Tenure*/}
                          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 dark:bg-gray-700">
                            <p className="text-gray-900 whitespace-no-wrap w-16 dark:text-gray-100">
                              {job.job_tenure}
                            </p>
                          </td>
                          {/* City*/}
                          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 dark:bg-gray-700">
                            <p className="text-gray-900 whitespace-no-wrap w-24 dark:text-gray-100">
                              {job.company_city}
                            </p>
                          </td>
                          {/* Min. salary*/}
                          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 dark:bg-gray-700">
                            <p className="text-gray-900 whitespace-no-wrap w-24 dark:text-gray-100">
                              {rupiah(job.salary_min)}
                            </p>
                          </td>
                          {/* Max. salary*/}
                          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 dark:bg-gray-700">
                            <p className="text-gray-900 whitespace-no-wrap w-24 dark:text-gray-100">
                              {rupiah(job.salary_max)}
                            </p>
                          </td>
                          {/* Job Desc*/}
                          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 dark:bg-gray-700">
                            <p className="text-gray-900 whitespace-no-wrap w-[50rem] dark:text-gray-100">
                              {job.job_description}
                            </p>
                          </td>
                          {/* Job qualification*/}
                          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 dark:bg-gray-700">
                            <p className="text-gray-900 whitespace-no-wrap w-[50rem] dark:text-gray-100">
                              {job.job_qualification}
                            </p>
                          </td>
                          {/* Job type*/}
                          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 dark:bg-gray-700">
                            <p className="text-gray-900 whitespace-no-wrap w-20 dark:text-gray-100">
                              {job.job_type}
                            </p>
                          </td>
                          {/* Action*/}
                          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 dark:bg-gray-700">
                            <div className="flex items-center justify-center gap-3 dark:text-gray-100">
                              <button
                                className="btn btn-ghost capitalize dark:text-gray-100"
                                onClick={HandleEdit}
                                value={job.id}
                              >
                                Edit
                              </button>
                              <button
                                className="btn btn-error text-white hover:bg-red-500 capitalize dark:bg-red-700"
                                onClick={HandleDelete}
                                value={job.id}
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  ) : (
                    <tbody>
                      {jobListFilter.map((job) => (
                        <tr key={job.id}>
                          {/* Company */}
                          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 dark:bg-gray-700 ">
                            <div className="flex items-center">
                              <div className="flex-shrink-0">
                                <a href="#" className="relative block">
                                  <img
                                    alt={job.company_name}
                                    src={job.company_image_url}
                                    className="mx-auto object-cover rounded-full h-14 w-14"
                                  />
                                </a>
                              </div>
                              <div className="ml-5 w-40">
                                <p className="text-gray-900 whitespace-no-wrap dark:text-gray-100">
                                  {job.company_name}
                                </p>
                              </div>
                            </div>
                          </td>
                          {/* Position */}
                          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 dark:bg-gray-700">
                            <p className="text-gray-900 whitespace-no-wrap w-24 dark:text-gray-100">
                              {job.title}
                            </p>
                          </td>
                          {/* Created at */}
                          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 dark:bg-gray-700">
                            <p className="text-gray-900 whitespace-no-wrap w-24 dark:text-gray-100">
                              {job.updated_at}
                            </p>
                          </td>
                          {/* Status */}
                          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 dark:bg-gray-700">
                            {job.job_status ? (
                              <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900 ">
                                <span
                                  aria-hidden="true"
                                  className="absolute inset-0 bg-green-200 dark:bg-green-500 rounded-full opacity-50"
                                ></span>
                                <span className="relative dark:text-gray-100">
                                  hiring
                                </span>
                              </span>
                            ) : (
                              <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-red-900">
                                <span
                                  aria-hidden="true"
                                  className="absolute inset-0 bg-red-200 dark:bg-red-500 rounded-full opacity-50"
                                ></span>
                                <span className="relative dark:text-gray-100">
                                  close
                                </span>
                              </span>
                            )}
                          </td>
                          {/* Tenure*/}
                          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 dark:bg-gray-700">
                            <p className="text-gray-900 whitespace-no-wrap w-16 dark:text-gray-100">
                              {job.job_tenure}
                            </p>
                          </td>
                          {/* City*/}
                          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 dark:bg-gray-700">
                            <p className="text-gray-900 whitespace-no-wrap w-24 dark:text-gray-100">
                              {job.company_city}
                            </p>
                          </td>
                          {/* Min. salary*/}
                          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 dark:bg-gray-700">
                            <p className="text-gray-900 whitespace-no-wrap w-24 dark:text-gray-100">
                              {rupiah(job.salary_min)}
                            </p>
                          </td>
                          {/* Max. salary*/}
                          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 dark:bg-gray-700">
                            <p className="text-gray-900 whitespace-no-wrap w-24 dark:text-gray-100">
                              {rupiah(job.salary_max)}
                            </p>
                          </td>
                          {/* Job Desc*/}
                          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 dark:bg-gray-700">
                            <p className="text-gray-900 whitespace-no-wrap w-[50rem] dark:text-gray-100">
                              {job.job_description}
                            </p>
                          </td>
                          {/* Job qualification*/}
                          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 dark:bg-gray-700">
                            <p className="text-gray-900 whitespace-no-wrap w-[50rem] dark:text-gray-100">
                              {job.job_qualification}
                            </p>
                          </td>
                          {/* Job type*/}
                          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 dark:bg-gray-700">
                            <p className="text-gray-900 whitespace-no-wrap w-20 dark:text-gray-100">
                              {job.job_type}
                            </p>
                          </td>
                          {/* Action*/}
                          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 dark:bg-gray-700">
                            <div className="flex items-center justify-center gap-3 dark:text-gray-100">
                              <button
                                className="btn btn-ghost capitalize dark:text-gray-100"
                                onClick={HandleEdit}
                                value={job.id}
                              >
                                Edit
                              </button>
                              <button
                                className="btn btn-error text-white hover:bg-red-500 capitalize"
                                onClick={HandleDelete}
                                value={job.id}
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  )}
                </table>
              )}
              {/* Pagination */}
              <div
                className="flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between tooltip tooltip-top dark:bg-gray-600"
                data-tip="Under maintenance"
              >
                <div className="flex items-center">
                  <button
                    type="button"
                    className="w-full p-4 text-base text-gray-600 bg-white border rounded-l-xl hover:bg-gray-100"
                  >
                    <svg
                      width={9}
                      fill="currentColor"
                      height={8}
                      className
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="w-full px-4 py-2 text-base text-indigo-500 bg-white border-t border-b hover:bg-gray-100 "
                  >
                    1
                  </button>
                  <button
                    type="button"
                    className="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100"
                  >
                    2
                  </button>
                  <button
                    type="button"
                    className="w-full px-4 py-2 text-base text-gray-600 bg-white border-t border-b hover:bg-gray-100"
                  >
                    3
                  </button>
                  <button
                    type="button"
                    className="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100"
                  >
                    4
                  </button>
                  <button
                    type="button"
                    className="w-full p-4 text-base text-gray-600 bg-white border-t border-b border-r rounded-r-xl hover:bg-gray-100"
                  >
                    <svg
                      width={9}
                      fill="currentColor"
                      height={8}
                      className
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDashboard;
