/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { Link } from 'react-router-dom';
import { GoLocation } from 'react-icons/go';
import { FaRegBuilding } from 'react-icons/fa';
import { BiTime } from 'react-icons/bi';
import { TfiMoney } from 'react-icons/tfi';

const Card = ({
  id,
  company_image_url,
  company_name,
  title,
  company_city,
  salary_min,
  salary_max,
  updated_at,
  job_status,
}) => {
  const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(number);
  };

  const now = new Date(updated_at);
  const formatIdn = new Intl.DateTimeFormat('id-ID', {
    dateStyle: 'full',
  });

  const fullDayFormat = now.setDate(now.getDate());

  let timestamp = formatIdn.format(fullDayFormat);

  return (
    <div>
      <div className="my-6 p-5 max-w-sm  cursor-pointer ">
        {job_status ? (
          <span className="px-4 py-2 text-base rounded-full text-green-600  bg-green-200 ">
            Hiring
          </span>
        ) : (
          <span className="px-4 py-2  text-base rounded-full text-red-600  bg-red-200 ">
            Close
          </span>
        )}
        <Link to={`/job-vacancy/${id}`}>
          <div className="overflow-hidden rounded-md shadow-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:opacity-80">
            <a href="#" target="_blank">
              <img
                src={company_image_url}
                alt={company_name}
                className="rounded-md"
              />
            </a>
            <h2 className="my-3 text-2xl font-bold text-sky-700">{title}</h2>
            <p className="my-3 text-md font-semibold flex">
              <FaRegBuilding className="mr-3 mt-1" />
              {company_name}
            </p>
            <p className="text-md mb-3 font-semibold flex">
              <GoLocation className="mr-3 mt-1" />
              {company_city}
            </p>
            <p className="text-md mb-3 font-semibold flex">
              <TfiMoney className="mr-3 mt-1" />
              {rupiah(salary_min)} - {rupiah(salary_max)}
            </p>
            <hr />
            <p className="text-xs mt-3 font-semibold flex">
              <BiTime className="mr-3 mt-[.14rem]" /> {timestamp}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
