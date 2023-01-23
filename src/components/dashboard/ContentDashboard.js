/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Cookies from 'js-cookie';

const ContentDashboard = ({ jobs }) => {
  const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(number);
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
          {/* Search */}
          <div className="flex flex-row justify-between w-full mb-1 sm:mb-0">
            <h2 className="text-2xl leading-tight">Jobs</h2>
            <div className="text-end">
              <form className="flex justify-center w-full space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                <div className=" relative ">
                  <input
                    type="text"
                    id='"form-subscribe-Filter'
                    className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Search by Position"
                  />
                </div>
              </form>
            </div>
          </div>
          {/* Table data and Pagination */}
          <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
            <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
              {/* Table */}
              <table className="min-w-full leading-normal ">
                {/* Heading */}
                <thead>
                  <tr>
                    {/* Company */}
                    <th
                      scope="col"
                      className="px-5 py-7 text-xs font-semibold text-gray-800 uppercase bg-gray-200 text-center border-b border-gray-200"
                    >
                      Company
                    </th>
                    {/* Position */}
                    <th
                      scope="col"
                      className="px-5 py-3 text-xs font-semibold  text-gray-800 uppercase bg-gray-200 text-center border-b border-gray-200"
                    >
                      Position
                    </th>
                    {/* Create At */}
                    <th
                      scope="col"
                      className="px-5 py-3 text-xs font-semibold text-gray-800 uppercase bg-gray-200 text-center border-b border-gray-200"
                    >
                      Created at
                    </th>
                    {/* Status */}
                    <th
                      scope="col"
                      className="px-5 py-3 text-xs font-semibold text-gray-800 uppercase bg-gray-200 text-center border-b border-gray-200"
                    >
                      Status
                    </th>
                    {/* Tenure */}
                    <th
                      scope="col"
                      className="px-5 py-3 text-xs font-semibold text-gray-800 uppercase bg-gray-200 text-center border-b border-gray-200"
                    >
                      Tenure
                    </th>
                    {/* City */}
                    <th
                      scope="col"
                      className="px-5 py-3 text-xs font-semibold text-gray-800 uppercase bg-gray-200 text-center border-b border-gray-200"
                    >
                      City
                    </th>
                    {/* Min. Salary */}
                    <th
                      scope="col"
                      className="px-5 py-3 text-xs font-semibold text-gray-800 uppercase bg-gray-200 text-center border-b border-gray-200"
                    >
                      Min. Salary
                    </th>
                    {/* Max. Salary */}
                    <th
                      scope="col"
                      className="px-5 py-3 text-xs font-semibold text-gray-800 uppercase bg-gray-200 text-center border-b border-gray-200"
                    >
                      Max. Salary
                    </th>
                    {/* Job Desc. */}
                    <th
                      scope="col"
                      className="px-5 py-3 text-xs font-semibold text-gray-800 uppercase bg-gray-200 text-center border-b border-gray-200"
                    >
                      Job Desc.
                    </th>
                    {/* Qualification */}
                    <th
                      scope="col"
                      className="px-5 py-3 text-xs font-semibold text-gray-800 uppercase bg-gray-200 text-center border-b border-gray-200"
                    >
                      Qualification
                    </th>
                    {/* Type */}
                    <th
                      scope="col"
                      className="px-5 py-3 text-xs font-semibold text-gray-800 uppercase bg-gray-200 text-center border-b border-gray-200"
                    >
                      Type
                    </th>
                    {/* Action */}
                    <th
                      scope="col"
                      className="px-5 py-3 text-xs font-semibold text-gray-800 uppercase bg-gray-200 text-center border-b border-gray-200"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                {/* Body */}
                <tbody>
                  {jobs.map((job) => (
                    <tr key={job.id}>
                      {/* Company */}
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <a href="#" className="relative block">
                              <img
                                alt={job.company_name}
                                src={job.company_image_url}
                                className="mx-auto object-cover rounded-full h-10 w-10 "
                              />
                            </a>
                          </div>
                          <div className="ml-3 w-24">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {job.company_name}
                            </p>
                          </div>
                        </div>
                      </td>
                      {/* Position */}
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap w-24">
                          {job.title}
                        </p>
                      </td>
                      {/* Created at */}
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap w-24">
                          {job.updated_at}
                        </p>
                      </td>
                      {/* Status */}
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        {job.job_status ? (
                          <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 bg-green-200 rounded-full opacity-50"
                            ></span>
                            <span className="relative">hiring</span>
                          </span>
                        ) : (
                          <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-red-900">
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 bg-red-200 rounded-full opacity-50"
                            ></span>
                            <span className="relative">close</span>
                          </span>
                        )}
                      </td>
                      {/* Tenure*/}
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap w-16">
                          {job.job_tenure}
                        </p>
                      </td>
                      {/* City*/}
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap w-24">
                          {job.company_city}
                        </p>
                      </td>
                      {/* Min. salary*/}
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap w-24">
                          {rupiah(job.salary_min)}
                        </p>
                      </td>
                      {/* Max. salary*/}
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap w-24">
                          {rupiah(job.salary_max)}
                        </p>
                      </td>
                      {/* Job Desc*/}
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap w-96">
                          {job.job_description}
                        </p>
                      </td>
                      {/* Job qualification*/}
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap w-96">
                          {job.job_qualification}
                        </p>
                      </td>
                      {/* Job type*/}
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap w-20">
                          {job.job_type}
                        </p>
                      </td>
                      {/* Action edit*/}
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 flex items-center justify-center gap-5">
                        <a
                          href="#"
                          className="text-gray-900 whitespace-no-wrap "
                        >
                          Edit
                        </a>
                        <button className="btn btn-error">Delete</button>
                      </td>
                      {/* Action delete*/}
                      {/* <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <button className="btn btn-error">Delete</button>
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* Pagination */}
              <div className="flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between">
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
