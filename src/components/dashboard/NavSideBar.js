/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const NavSideBar = () => {
  return (
    <header className="shadow-sm z-40 flex items-center justify-between w-full h-16">
      {/* Hamburger Menu */}
      <div
        className="block ml-6 lg:hidden"
        onClick={() =>
          document.getElementById('sidebar-menu').classList.toggle('hidden')
        }
      >
        <button className="flex items-center p-2 text-gray-500 bg-white rounded-full shadow text-md">
          <svg
            width={20}
            height={20}
            className="text-gray-400"
            fill="currentColor"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
          </svg>
        </button>
      </div>
      {/* Menu Profile at NavBar */}
      <div className="flex -mt-4 relative z-20  flex-col justify-end h-full px-3 md:w-full">
        <div className="relative flex items-center justify-end w-full p-1 space-x-4">
          {/* Profile picture */}
          <div
            onClick={() =>
              document
                .getElementById('detail-profile')
                .classList.toggle('hidden')
            }
          >
            {!Cookies.get('image_url').includes('http') ||
            Cookies.get('image_url').length < 16 ? (
              <svg
                width={30}
                fill="currentColor"
                height={30}
                className="text-gray-800"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
              </svg>
            ) : (
              <a href="#" class="relative block">
                <img
                  alt="profil"
                  src={Cookies.get('image_url')}
                  class="mx-auto object-cover rounded-full h-10 w-10 "
                />
                <span class="absolute w-3 h-3 transform -translate-x-1/2 bg-green-500 border-2 border-white rounded-full left-1/2 -bottom-2"></span>
              </a>
            )}
          </div>
          {/* Detail Menu Profile */}
          <div
            id="detail-profile"
            className="hidden absolute top-14 right-2 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5"
          >
            <div
              className="py-1 "
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <Link
                to="/dashboard"
                className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                role="menuitem"
              >
                <span className="flex flex-col">
                  <span>Dashboard </span>
                </span>
              </Link>
              <Link
                to="/profile"
                className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                role="menuitem"
              >
                <span className="flex flex-col">
                  <span>{Cookies.get('name')} Profile </span>
                </span>
              </Link>
              <Link
                to="/profile/change-password"
                className="block  px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                role="menuitem"
              >
                <span className="flex flex-col">
                  <span>Change password</span>
                </span>
              </Link>
              <a
                href="#"
                className="block  px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                role="menuitem"
              >
                <span className="flex flex-col">
                  <button
                    className="btn btn-error capitalize max-w-xs text-white"
                    onClick={() => {
                      Cookies.remove('token');
                      Cookies.remove('name');
                      Cookies.remove('image_url');

                      window.location = '/login';
                    }}
                  >
                    Logout
                  </button>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavSideBar;
