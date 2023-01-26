/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
// import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ChangePassword = ({ handleChangePassword }) => {
  const { inputChangePassword, setInputChangePassword } =
    useContext(GlobalContext);

  const onSubmitChangePassword = (event) => {
    event.preventDefault();

    const { current_password, new_password, confirm_password } =
      inputChangePassword;

    if (new_password.length < 8) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password must be more than 7 digits!',
        footer: 'Please check your password again!',
      });
      return;
    }

    if (new_password !== confirm_password) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "New Password and confirm password doesn't match",
        footer: 'Please check your password again!',
      });
      return;
    }

    handleChangePassword({ current_password, new_password, confirm_password });

    setInputChangePassword(() => {
      return {
        current_password: '',
        new_password: '',
        confirm_password: '',
      };
    });
  };

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInputChangePassword({ ...inputChangePassword, [name]: value });
  };

  return (
    <div className=" mx-auto flex flex-col max-w-xs md:max-w-md px-4 py-8 bg-white rounded-lg shadow-lg dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
      <div className="font-semibold self-center mb-1 text-xl  text-gray-600 sm:text-2xl dark:text-white">
        Change Password
      </div>
      <div className="mt-8">
        <form onSubmit={onSubmitChangePassword}>
          {/* current password */}
          <div className="flex flex-col mb-3">
            <div>
              <input
                type="password"
                className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Current Password"
                name="current_password"
                value={inputChangePassword.current_password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          {/* new password */}
          <div className="flex flex-col mb-3">
            <div>
              <input
                className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="New Password"
                type="password"
                name="new_password"
                value={inputChangePassword.new_password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          {/* confirm password */}
          <div className="flex flex-col mb-6">
            <div>
              <input
                className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Confirm Password"
                type="password"
                name="confirm_password"
                value={inputChangePassword.confirm_password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          {/* btn */}
          <div className="flex w-full">
            <button
              type="submit"
              className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Change Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
