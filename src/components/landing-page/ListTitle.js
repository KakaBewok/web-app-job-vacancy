import React from 'react';

const ListTitle = ({ numberOfJobs }) => {
  return (
    <div>
      <h1 className="font-bold text-center mt-11 mb-6 text-3xl bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text tracking-wide">
        Job List
      </h1>
      <p className="text-sm text-center font-medium tracking-wide">
        Number of job: {numberOfJobs}
      </p>
    </div>
  );
};

export default ListTitle;
