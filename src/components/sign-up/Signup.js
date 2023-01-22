/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Signup = ({ handleRegister }) => {
  const { inputSignup, setInputSignup } = useContext(GlobalContext);

  const onSubmitSignUp = (event) => {
    event.preventDefault();

    const { name, image_url, email, password, confirm_password } = inputSignup;

    if (password.length < 8) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password must be more than 7 digits!',
        footer: 'Please check your password again!',
      });
      return;
    }

    if (password !== confirm_password) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Password and confirm password doesn't match",
        footer: 'Please check your password again!',
      });
      return;
    }

    handleRegister({ name, image_url, email, password });

    setInputSignup(() => {
      return {
        name: '',
        image_url: '',
        email: '',
        password: '',
        confirm_password: '',
      };
    });
  };

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInputSignup({ ...inputSignup, [name]: value });
  };

  return (
    <div>
      <div className=" mb-[4rem] mx-auto flex flex-col max-w-xs md:max-w-md px-4 py-8 bg-white rounded-lg shadow-lg dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
        <div className="font-semibold self-center mb-2 text-xl text-gray-800 sm:text-2xl dark:text-white">
          Create a new account
        </div>
        <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
          Already have an account?
          <a
            href="#"
            target="_blank"
            className="text-sm text-purple-600 font-medium"
          >
            <Link to="/login"> Sign in</Link>
          </a>
        </span>
        <div className="p-6 mt-1">
          <form onSubmit={onSubmitSignUp}>
            <div className="flex flex-col mb-2">
              <div>
                <input
                  type="text"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-400  w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="name"
                  placeholder="Name"
                  value={inputSignup.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <div>
                <input
                  type="email"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-400  w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Email"
                  name="email"
                  value={inputSignup.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <div>
                <input
                  type="text"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Image URL"
                  name="image_url"
                  value={inputSignup.image_url}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <div>
                <input
                  type="password"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-400  w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Password"
                  name="password"
                  value={inputSignup.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <div>
                <input
                  type="password"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Confirm password"
                  name="confirm_password"
                  value={inputSignup.confirm_password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="flex w-full my-4">
              <button className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
