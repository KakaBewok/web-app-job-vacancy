import React from 'react';
import Card from './Card';

const CardList = ({ jobs, loading, keyword, filterData }) => {
  const jobList = jobs.filter((job) => {
    return job.title.toUpperCase().includes(keyword.toUpperCase()) &&
      job.company_city
        .toUpperCase()
        .includes(filterData.filterCity.toUpperCase()) &&
      job.company_name
        .toUpperCase()
        .includes(filterData.filterCompany.toUpperCase()) &&
      filterData.filterMinSalary == 0
      ? job.salary_min > -1
      : job.salary_min == filterData.filterMinSalary;
  });

  if (loading || !jobs) {
    return (
      <div className="mx-auto my-9 bg-white rounded  max-w-full ">
        <div className="p-3 ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
            <div className="h-[10rem] bg-gray-200 rounded animate-pulse"></div>
            <div className="h-[10rem] bg-gray-200 rounded animate-pulse"></div>
            <div className="h-[10rem] bg-gray-200 rounded animate-pulse"></div>
            <div className="h-[10rem] bg-gray-200 rounded animate-pulse"></div>
            <div className="h-[10rem] bg-gray-200 rounded  animate-pulse"></div>
            <div className="h-[10rem] bg-gray-200 rounded  animate-pulse"></div>
            <div className="h-[10rem] bg-gray-200 rounded animate-pulse"></div>
            <div className="h-[10rem] bg-gray-200 rounded  animate-pulse"></div>
            <div className="h-[10rem] bg-gray-200 rounded  animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap mx-auto justify-center">
      {jobList.map((job) => (
        <Card key={job.id} {...job} />
      ))}
    </div>
  );
};

export default CardList;
