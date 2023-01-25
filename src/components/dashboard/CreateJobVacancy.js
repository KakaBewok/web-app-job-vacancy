/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const CreateJobVacancy = ({
  inputJob,
  setInputJob,
  ChangeInputJobHandler,
  HandleAddJob,
  HandleEditJob,
  currentId,
  setCurrentId,
}) => {
  const onSubmitJob = (event) => {
    event.preventDefault();

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
    } = inputJob;

    if (currentId === -1) {
      HandleAddJob({
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
      });
    } else {
      HandleEditJob({
        currentId,
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
      });
    }

    setCurrentId(-1);

    setInputJob(() => {
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
  };

  return (
    <div>
      <div className="mt-[1rem] mb-[4rem] mx-auto flex flex-col max-w-xs md:max-w-2xl px-4 py-8 bg-white rounded-lg shadow-lg dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
        <div className="font-semibold self-center mb-2 text-xl text-purple-700 sm:text-2xl dark:text-white">
          Add & Edit Job Vacancies
        </div>
        <div className="p-6 mt-1">
          <form className="flex flex-col gap-2" onSubmit={onSubmitJob}>
            {/* Position */}
            <div className="flex flex-col mb-2">
              <div>
                <input
                  type="text"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-400  w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="title"
                  placeholder="Position"
                  value={inputJob.title}
                  onChange={(event) => ChangeInputJobHandler(event)}
                  required
                />
              </div>
            </div>
            {/* Company */}
            <div className="flex flex-col mb-2">
              <div>
                <input
                  type="text"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-400  w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Company"
                  name="company_name"
                  value={inputJob.company_name}
                  onChange={(event) => ChangeInputJobHandler(event)}
                  required
                />
              </div>
            </div>
            {/* Company image URL */}
            <div className="flex flex-col mb-2">
              <div>
                <input
                  type="text"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Company Image URL"
                  name="company_image_url"
                  value={inputJob.company_image_url}
                  onChange={(event) => ChangeInputJobHandler(event)}
                  required
                />
              </div>
            </div>
            {/* Location */}
            <div className="flex flex-col mb-2">
              <div>
                <input
                  type="text"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-400  w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Location"
                  name="company_city"
                  value={inputJob.company_city}
                  onChange={(event) => ChangeInputJobHandler(event)}
                  required
                />
              </div>
            </div>
            {/* Min. Salary */}
            <div className="flex flex-col mb-2">
              <div>
                <input
                  type="number"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Minimum Salary"
                  name="salary_min"
                  value={inputJob.salary_min}
                  onChange={(event) => ChangeInputJobHandler(event)}
                  required
                />
              </div>
            </div>
            {/* Max. Salary */}
            <div className="flex flex-col mb-2">
              <div>
                <input
                  type="number"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Maximum Salary"
                  name="salary_max"
                  value={inputJob.salary_max}
                  onChange={(event) => ChangeInputJobHandler(event)}
                  required
                />
              </div>
            </div>
            {/* Job type */}
            <div className="flex flex-col mb-2">
              <div>
                <select
                  className="block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm  focus:outline-none focus:ring-primary-500 focus:border-primary-500 w-full"
                  name="job_type"
                  onChange={(event) => ChangeInputJobHandler(event)}
                  value={inputJob.job_type}
                  required
                >
                  <option className="text-gray-400" value>
                    -- Job Type --
                  </option>
                  <option className="text-gray-700" value="Onsite">
                    Onsite
                  </option>
                  <option className="text-gray-700" value="Remote">
                    Remote
                  </option>
                  <option className="text-gray-700" value="Hybrid">
                    Hybrid
                  </option>
                </select>
              </div>
            </div>
            {/* Job tenure */}
            <div className="flex flex-col mb-2">
              <div>
                <select
                  className="block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm  focus:outline-none focus:ring-primary-500 focus:border-primary-500 w-full"
                  name="job_tenure"
                  onChange={(event) => ChangeInputJobHandler(event)}
                  value={inputJob.job_tenure}
                  required
                >
                  <option className="text-gray-400" value>
                    -- Job Tenure --
                  </option>
                  <option className="text-gray-700" value="6 Months">
                    6 Months
                  </option>
                  <option className="text-gray-700" value="1 Years">
                    1 Years
                  </option>
                  <option className="text-gray-700" value="3 Years">
                    3 Years
                  </option>
                  <option className="text-gray-700" value="5 Years">
                    5 Years
                  </option>
                  <option className="text-gray-700" value="Permanent">
                    Permanent
                  </option>
                </select>
              </div>
            </div>
            {/* Job status */}
            <div className="flex flex-col mb-2">
              <div>
                <select
                  className="block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm  focus:outline-none focus:ring-primary-500 focus:border-primary-500 w-full"
                  name="job_status"
                  onChange={(event) => ChangeInputJobHandler(event)}
                  value={inputJob.job_status}
                  required
                >
                  <option className="text-gray-400" value>
                    -- Job Status --
                  </option>
                  <option className="text-gray-700" value={1}>
                    Hiring
                  </option>
                  <option className="text-gray-700" value={0}>
                    Close
                  </option>
                </select>
              </div>
            </div>
            {/* Job desc.*/}
            <div className="flex flex-col mb-2">
              <div>
                <textarea
                  className="textarea border-gray-400 max-h-48 min-h-[6rem] w-full"
                  placeholder="Job Description"
                  maxLength={300}
                  onChange={(event) => ChangeInputJobHandler(event)}
                  value={inputJob.job_description}
                  name="job_description"
                  required
                ></textarea>
              </div>
            </div>
            {/* Qualification */}
            <div className="flex flex-col mb-2">
              <div>
                <textarea
                  className="textarea border-gray-400 max-h-48 min-h-[6rem] w-full"
                  placeholder="Qualification"
                  maxLength={300}
                  name="job_qualification"
                  onChange={(event) => ChangeInputJobHandler(event)}
                  value={inputJob.job_qualification}
                  required
                ></textarea>
              </div>
            </div>
            {/* Add button */}
            <div className="flex w-full my-4">
              <button className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateJobVacancy;
