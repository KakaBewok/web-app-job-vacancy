/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Spinner } from 'flowbite-react';
import ToggleTheme from './ToggleTheme';

const NavigationBar = () => {
  return (
    <div className="navbar bg-base-100 px-6 py-3 fixed z-50 shadow-md dark:bg-gray-700 dark:text-gray-100">
      <div className="navbar-start ">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost lg:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 dark:bg-gray-800 dark:text-gray-100"
          >
            <li>
              <ToggleTheme />
            </li>
            <li className="tooltip tooltip-top" data-tip="Under maintenance">
              <a>About</a>
            </li>
            <li>
              <Link to="/contact-us">
                <p>Contact Us</p>
              </Link>
            </li>
            {!Cookies.get('token') ? (
              <div></div>
            ) : (
              <li>
                <Link to="/dashboard">Dashbord</Link>
              </li>
            )}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          <Link to="/home">Loker.id</Link>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 dark:bg-gray-700 dark:text-gray-100">
          <li>
            <ToggleTheme />
          </li>
          <li
            className="tooltip tooltip-top lg:tooltip-bottom"
            data-tip="Under maintenance"
          >
            <a>About</a>
          </li>
          <li>
            <Link to="/contact-us">
              <p>Contact Us</p>
            </Link>
          </li>
          {!Cookies.get('token') ? (
            <div></div>
          ) : (
            <li>
              <Link to="/dashboard">Dashbord</Link>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end ">
        {!Cookies.get('token') ? (
          <Link to="/login">
            <button className="btn btn-primary capitalize max-w-xs text-white">
              login
            </button>
          </Link>
        ) : (
          <div
            className="relative inline-block text-left"
            onClick={() =>
              document
                .getElementById('detail-profile')
                .classList.toggle('hidden')
            }
          >
            <div>
              <button
                type="button"
                className="  flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
                id="options-menu"
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
                      class="mx-auto object-cover rounded-full h-12 w-12 "
                    />
                    <span class="absolute w-3 h-3 transform -translate-x-1/2 bg-green-500 border-2 border-white rounded-full left-1/2 -bottom-2"></span>
                  </a>
                )}
              </button>
            </div>
            <div
              id="detail-profile"
              className="hidden absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5 "
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

                        <Spinner
                          aria-label="Extra large spinner example"
                          size="xl"
                        />;

                        window.location = '/login';
                      }}
                    >
                      Logout
                    </button>
                    {/* <span>Paypal</span> */}
                  </span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
