/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Spinner } from 'flowbite-react';

const CardDetail = ({ job }) => {
  const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(number);
  };
  const checkJobStatus = (job_status) => {
    if (job_status === 1) {
      return 'Buka';
    } else if (job_status === 0) {
      return 'Tutup';
    } else {
      return <Spinner aria-label="Medium spinner example" size="md" />;
    }
  };

  const salaryMin = rupiah(job.salary_min);
  const salaryMax = rupiah(job.salary_max);

  return (
    <div className="dark:bg-gray-600 ">
      <div className="rounded-lg mx-auto max-w-[90%] md:max-w-[70%] lg:max-w-[50%] overflow-hidden bg-white shadow-lg sm:rounded-lg">
        {/* HEADER */}
        <div className="px-4 py-5 sm:px-6 dark:bg-gray-700">
          {job.company_image_url ? (
            <img
              className="rounded-md transition-all duration-300 hover:opacity-90"
              src={job.company_image_url}
              alt={job.title}
            />
          ) : (
            <div className="p-20 flex justify-center align-middle">
              <Spinner aria-label="Medium spinner example" size="md" />
            </div>
          )}
          <div className="tooltip tooltip-right" data-tip="Under maintenance">
            <button className="btn btn-primary mt-3">Apply Now</button>
          </div>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            {/* 1 */}
            <div className="px-4 py-5 bg-gray-100 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 dark:bg-gray-700">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-100">
                Position
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-gray-400">
                {job.title ? (
                  job.title
                ) : (
                  <Spinner aria-label="Medium spinner example" size="md" />
                )}
              </dd>
            </div>
            {/* 2 */}
            <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 dark:bg-gray-700">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-100">
                Description
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-gray-400">
                {job.job_description ? (
                  job.job_description
                ) : (
                  <Spinner aria-label="Medium spinner example" size="md" />
                )}
              </dd>
            </div>
            {/* 3 */}
            <div className="px-4 py-5 bg-gray-100 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 dark:bg-gray-700">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-100">
                Qualification
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-gray-400">
                {job.job_qualification ? (
                  job.job_qualification
                ) : (
                  <Spinner aria-label="Medium spinner example" size="md" />
                )}
              </dd>
            </div>
            {/* 4 */}
            <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 dark:bg-gray-700">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-100">
                Type
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-gray-400">
                {job.job_type ? (
                  job.job_type
                ) : (
                  <Spinner aria-label="Medium spinner example" size="md" />
                )}
              </dd>
            </div>
            {/* 5 */}
            <div className="px-4 py-5 bg-gray-100 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 dark:bg-gray-700">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-100">
                Tenure
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-gray-400">
                {job.job_tenure ? (
                  job.job_tenure
                ) : (
                  <Spinner aria-label="Medium spinner example" size="md" />
                )}
              </dd>
            </div>
            {/* 6 */}
            <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 dark:bg-gray-700">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-100">
                Status
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-gray-400">
                {checkJobStatus(job.job_status)}
              </dd>
            </div>
            {/* 7 */}
            <div className="px-4 py-5 bg-gray-100 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 dark:bg-gray-700">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-100">
                Company
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-gray-400">
                {job.company_name ? (
                  job.company_name
                ) : (
                  <Spinner aria-label="Medium spinner example" size="md" />
                )}
              </dd>
            </div>
            {/* 8 */}
            <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 dark:bg-gray-700">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-100">
                Location
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-gray-400">
                {job.company_city ? (
                  job.company_city
                ) : (
                  <Spinner aria-label="Medium spinner example" size="md" />
                )}
              </dd>
            </div>
            {/* 9 */}
            <div className="px-4 py-5 bg-gray-100 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 dark:bg-gray-700">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-100">
                Salary
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-gray-400">
                {job.salary_min && job.salary_max ? (
                  <div>
                    {salaryMin} - {salaryMax}
                  </div>
                ) : (
                  <Spinner aria-label="Medium spinner example" size="md" />
                )}
              </dd>
            </div>
            {/* 10 */}
            <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 dark:bg-gray-700">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-100">
                Post time
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-gray-400">
                {job.updated_at ? (
                  job.updated_at
                ) : (
                  <Spinner aria-label="Medium spinner example" size="md" />
                )}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
