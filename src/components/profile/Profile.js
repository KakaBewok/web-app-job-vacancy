/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Cookies from 'js-cookie';

const Profile = () => {
  return (
    <div className="mx-auto w-64 bg-white shadow-lg rounded-2xl dark:bg-gray-800">
      <img
        alt="profil"
        src="https://mocipay.com/blog/wp-content/uploads/2022/08/Foto-Pemandangan-Pasir-Putih.jpeg"
        className="w-full mb-4 rounded-t-lg h-28"
      />
      <div className="flex flex-col items-center justify-center p-4 -mt-16">
        <a href="#">
          <img
            alt="profil"
            src={Cookies.get('image_url')}
            className="mx-auto object-cover rounded-full h-16 w-16 "
          />
        </a>
        <p className="mt-2 text-xl font-medium text-gray-800 dark:text-white">
          {Cookies.get('name')}
        </p>

        <p className="text-xs text-gray-400">Loker.Id member</p>
        <div className="flex items-center justify-between w-full gap-4 mt-8">
          <button
            type="button"
            data-tip="Under maintenance"
            className="tooltip -tooltip-top py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            See profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
