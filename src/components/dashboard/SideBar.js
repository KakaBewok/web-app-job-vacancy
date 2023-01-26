/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { BsTable } from 'react-icons/bs';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FiLogOut } from 'react-icons/fi';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BsChatDots } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Spinner } from 'flowbite-react';

const SideBar = () => {
  return (
    <div
      className="relative hidden h-screen shadow-lg lg:block w-80"
      id="sidebar-menu"
    >
      <div className="h-full bg-white dark:bg-gray-700">
        {/* Brand/Company */}
        <div className="flex items-center justify-start pt-6 ml-8">
          <Link to="/">
            <p className="text-xl font-bold dark:text-white">Loker.id</p>
          </Link>
        </div>
        {/* Menu sidebar */}
        <nav className="mt-6">
          <div>
            {/* Home */}
            {window.location.href === 'http://localhost:3000/dashboard' ? (
              <Link to="/">
                <a
                  className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-800 transition-colors duration-200 border-l-4 border-purple-500 dark:text-white"
                  href="#"
                >
                  <span className="text-left">
                    <svg
                      width={20}
                      height={20}
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1472 992v480q0 26-19 45t-45 19h-384v-384h-256v384h-384q-26 0-45-19t-19-45v-480q0-1 .5-3t.5-3l575-474 575 474q1 2 1 6zm223-69l-62 74q-8 9-21 11h-3q-13 0-21-7l-692-577-692 577q-12 8-24 7-13-2-21-11l-62-74q-8-10-7-23.5t11-21.5l719-599q32-26 76-26t76 26l244 204v-195q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z"></path>
                    </svg>
                  </span>
                  <span className="mx-2 text-sm font-normal">Home</span>
                </a>
              </Link>
            ) : (
              <Link to="/">
                <a
                  className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-white dark:text-white"
                  href="#"
                >
                  <span className="text-left">
                    <svg
                      width={20}
                      height={20}
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1472 992v480q0 26-19 45t-45 19h-384v-384h-256v384h-384q-26 0-45-19t-19-45v-480q0-1 .5-3t.5-3l575-474 575 474q1 2 1 6zm223-69l-62 74q-8 9-21 11h-3q-13 0-21-7l-692-577-692 577q-12 8-24 7-13-2-21-11l-62-74q-8-10-7-23.5t11-21.5l719-599q32-26 76-26t76 26l244 204v-195q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z"></path>
                    </svg>
                  </span>
                  <span className="mx-2 text-sm font-normal">Home</span>
                </a>
              </Link>
            )}
            {/* Table data */}
            {window.location.href ===
            'http://localhost:3000/dashboard/list-job-vacancy' ? (
              <Link to="/dashboard/list-job-vacancy">
                <a
                  className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-800 transition-colors duration-200 border-l-4 border-purple-500 dark:text-white"
                  href="#"
                >
                  <span className="text-left">
                    <BsTable />
                  </span>
                  <span className="mx-2 text-sm font-normal">Table Data</span>
                </a>
              </Link>
            ) : (
              <Link to="/dashboard/list-job-vacancy">
                <a
                  className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800"
                  href="#"
                >
                  <span className="text-left">
                    <BsTable />
                  </span>
                  <span className="mx-2 text-sm font-normal">Table Data</span>
                </a>
              </Link>
            )}
            {/* Add data */}
            <Link to="/dashboard/list-job-vacancy/form">
              <a
                className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800"
                href="#"
              >
                <span className="text-left">
                  <AiOutlineFileAdd />
                </span>
                <span className="mx-2 text-sm font-normal">Add Data</span>
              </a>
            </Link>
            <hr />
            {/* About */}
            <Link to="/about">
              <a
                className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800"
                href="#"
              >
                <span className="text-left">
                  <AiOutlineInfoCircle />
                </span>
                <span className="mx-2 text-sm font-normal">About</span>
              </a>
            </Link>
            {/* Contact */}
            <Link to="/contact-us">
              <a
                className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800"
                href="#"
              >
                <span className="text-left">
                  <BsChatDots />
                </span>
                <span className="mx-2 text-sm font-normal">Contact</span>
              </a>
            </Link>
            {/* Profile */}
            <Link to="/profile">
              <a
                className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800"
                href="#"
              >
                <span className="text-left">
                  <CgProfile />
                </span>
                <span className="mx-2 text-sm font-normal">Profile</span>
              </a>
            </Link>
            {/* Change password */}
            <Link to="/profile/change-password">
              <a
                className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800"
                href="#"
              >
                <span className="text-left">
                  <RiLockPasswordLine />
                </span>
                <span className="mx-2 text-sm font-normal">
                  Change Password
                </span>
              </a>
            </Link>
            {/* Logout */}
            <div
              onClick={() => {
                Cookies.remove('token');
                Cookies.remove('name');
                Cookies.remove('image_url');

                <Spinner aria-label="Extra large spinner example" size="xl" />;

                window.location = '/login';
              }}
            >
              <a
                className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800"
                href="#"
              >
                <span className="text-left">
                  <FiLogOut />
                </span>
                <span className="mx-2 text-sm font-normal">Logout</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
